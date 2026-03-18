import { useState } from 'react';
import { QUESTIONS, DIALOGUE_RESPONSES, DIALOGUE_RESPONSES_LATE } from '../game/encounters';
import { getAvailableCategories } from '../game/encounterLogic';
import { QUESTION_CATEGORIES } from '../game/constants';

const MAX_QUESTIONS = 2;

export default function InterrogationPhase({
  identity,
  skills,
  questionsAsked,
  onQuestionAsked,
  lastQuestionUsed,
  zoneId,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentResponse, setCurrentResponse] = useState(null);

  const categories = getAvailableCategories(skills);
  const canUseLastQuestion = skills.includes('the_last_question') && !lastQuestionUsed;
  const questionsRemaining = MAX_QUESTIONS - questionsAsked.length;
  const atCap = questionsRemaining <= 0;

  const askQuestion = (category) => {
    if (atCap) return;
    const qList = QUESTIONS[category] || [];
    const usedInCategory = questionsAsked.filter((q) => q.category === category).length;
    const qIndex = usedInCategory % qList.length;
    const q = qList[qIndex];
    const useLate = identity === 'synthetic' && zoneId >= 4 && DIALOGUE_RESPONSES_LATE[category];
    const responses = useLate ? DIALOGUE_RESPONSES_LATE[category] : DIALOGUE_RESPONSES[category];
    const respList = identity === 'human' ? responses.human : responses.synthetic;
    const resp = respList[Math.floor(Math.random() * respList.length)];
    onQuestionAsked?.({ category, question: q });
    setCurrentResponse({ question: q, response: resp });
    setSelectedCategory(category);
    if (category === 'last_question') onQuestionAsked?.({ usedLastQuestion: true });
  };

  return (
    <div className="interrogation-phase">
      <div className="interrogation-dialogue">
        <div className="interrogation-header">
          <span className="interrog-label">INTERROGATION</span>
          <span className={`interrog-remaining ${atCap ? 'at-cap' : ''}`}>
            {atCap
              ? 'No questions remaining — make your verdict.'
              : `${questionsRemaining} question${questionsRemaining === 1 ? '' : 's'} remaining`}
          </span>
        </div>

        {!currentResponse ? (
          <div className="dialogue-prompt">
            <div className="question-categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`question-btn ${atCap ? 'disabled' : ''}`}
                  onClick={() => askQuestion(cat)}
                  disabled={atCap}
                >
                  {QUESTION_CATEGORIES[cat]?.label || cat}
                </button>
              ))}
              {canUseLastQuestion && (
                <button
                  className={`question-btn last-question ${atCap ? 'disabled' : ''}`}
                  onClick={() => askQuestion('last_question')}
                  disabled={atCap}
                >
                  The Last Question
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="dialogue-exchange">
            <p className="dialogue-question">&quot;{currentResponse.question}&quot;</p>
            <p className="dialogue-response">{currentResponse.response}</p>
            {!atCap && (
              <button className="dialogue-btn" onClick={() => setCurrentResponse(null)}>
                Ask Another
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
