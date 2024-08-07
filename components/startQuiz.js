'use client'

import React, { useState, useEffect } from "react";
import { quiz } from "@/dataFiles/data";

export default function QuizComponent({ onQuizComplete, onQuizDataUpdate }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [displayQuestionNumber, setDisplayQuestionNumber] = useState(1); // Added state for display question number
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [city, setCity] = useState('');
  const [cityQuestionIndex, setCityQuestionIndex] = useState(0);

  const { questions } = quiz;
  const { question, answers, correctAnswer, monthlyAdd, checkingCharge, factor } = questions[activeQuestion];
  const [checkingBalance, setCheckingBalance] = useState(0); 
  const [savingsBalance, setSavingsBalance] = useState(0); // Added state for savings balance
  const [totalMonthlyCharges, setTotalMonthlyCharges] = useState(0);

  const [influenceScore, setInfluenceScore] = useState(0);
  const [knowledgeScore, setKnowledgeScore] = useState(0);
  const [planningScore, setPlanningScore] = useState(0);
  const [spendingHabitsScore, setSpendingHabitsScore] = useState(0);
  const [riskToleranceScore, setRiskToleranceScore] = useState(0);
  const [feelingScore, setFeelingScore] = useState(0);

  useEffect(() => {
    onQuizDataUpdate({
      checkingBalance,
      savingsBalance,
      totalMonthlyCharges,
      influenceScore,
      knowledgeScore,
      planningScore,
      spendingHabitsScore,
      riskToleranceScore,
      feelingScore,
    });
    console.log("Updated Data Passed to Parent:", {
      checkingBalance,
      savingsBalance,
      totalMonthlyCharges,
      influenceScore,
      knowledgeScore,
      planningScore,
      spendingHabitsScore,
      riskToleranceScore,
      feelingScore,
    });
  }, [checkingBalance, savingsBalance, totalMonthlyCharges]);

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
  };

  const nextQuestion = () => {
    setCheckingBalance((prevCheckingBalance) => {
      let newCheckingBalance = prevCheckingBalance;
      if (monthlyAdd) {
        newCheckingBalance += monthlyAdd[selectedAnswerIndex];
      }
      return newCheckingBalance;
    });
  
    setTotalMonthlyCharges((prevTotalMonthlyCharges) => {
      let newTotalMonthlyCharges = prevTotalMonthlyCharges;
      if (checkingCharge) {
        newTotalMonthlyCharges += checkingCharge[selectedAnswerIndex];
      }
      return newTotalMonthlyCharges;
    });
  
    setTimeout(() => {
      if (activeQuestion === 0) {
        setCity(answers[selectedAnswerIndex]);
        if (answers[selectedAnswerIndex] === 'Cash City') {
          setCityQuestionIndex(6);
          setActiveQuestion(6);
        } else if (answers[selectedAnswerIndex] === 'EzPz City') {
          setCityQuestionIndex(11);
          setActiveQuestion(11);
        } else {
          setActiveQuestion(activeQuestion + 1);
        }
      } else {
        if ((activeQuestion === 5 && city === 'Doomsville') ||
            (activeQuestion === 10 && city === 'Cash City') ||
            (activeQuestion === 15 && city === 'EzPz City')) {
          setShowResult(true);
          onQuizComplete();
        } else {
          setActiveQuestion(activeQuestion + 1);
        }
      }
      
      setDisplayQuestionNumber((prev) => prev < 6 ? prev + 1 : 6); // Update display question number
  
      setSelectedAnswerIndex(null);
      setResult((prev) => {
        const isCorrect = correctAnswer.includes(selectedAnswerIndex + 1);
        const selectedValue = correctAnswer[selectedAnswerIndex];
  
        return isCorrect
          ? {
              ...prev,
              score: prev.score + selectedValue,
              correctAnswers: prev.correctAnswers + 1,
            }
          : {
              ...prev,
              wrongAnswers: prev.wrongAnswers + 1,
            };
      });
      if(factor){
        switch (factor) {
          case 'Influence':
            setInfluenceScore(prev => {
              const newScore = prev + correctAnswer[selectedAnswerIndex];
              console.log(`Influence score: ${newScore}`);
              return newScore;
            });
            break;
          case 'Knowledge':
            setKnowledgeScore(prev => {
              const newScore = prev + correctAnswer[selectedAnswerIndex];
              console.log(`Knowledge score: ${newScore}`);
              return newScore;
            });
            break;
          case 'Planning':
            setPlanningScore(prev => {
              const newScore = prev + correctAnswer[selectedAnswerIndex];
              console.log(`Planning score: ${newScore}`);
              return newScore;
            });
            break;
          case 'Spending Habits':
            setSpendingHabitsScore(prev => {
              const newScore = prev + correctAnswer[selectedAnswerIndex];
              console.log(`Spending Habits score: ${newScore}`);
              return newScore;
            });
            break;
          case 'Risk Tolerance':
            setRiskToleranceScore(prev => {
              const newScore = prev + correctAnswer[selectedAnswerIndex];
              console.log(`Risk Tolerance score: ${newScore}`);
              return newScore;
            });
            break;
          case 'Feeling':
            setFeelingScore(prev => {
              const newScore = prev + correctAnswer[selectedAnswerIndex];
              console.log(`Feeling score: ${newScore}`);
              return newScore;
            });
            break;
          default:
            break;
        }
      }
      setChecked(false);
    }, 0); // Delay to allow state to update
  };

  return (
    <div className="container">
      {/* <h1>Quiz</h1> */}

     
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            <ul>
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}
                >
                  <span>{answer}</span>
                </li>
              ))}
            </ul>
            {checked ? (
              <button onClick={nextQuestion} className='btn'>
                Continue
              </button>
            ) : (
              <button disabled className='btn-disabled'>
                Continue
              </button>
            )}
           
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <p>
              Final Checking Balance: <span>${checkingBalance}</span>
            </p>
            <p>
              Final Savings Balance: <span>${savingsBalance}</span> {/* Display savings balance */}
            </p>
            <p>
              Final Total Monthly Charges: <span>${totalMonthlyCharges}</span>
            </p>

            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .container {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .quiz-container {
          text-align: center;
        }

        h1 {
          color: lightorange;
          -webkit-text-stroke: 1px black;
        }

        h2 {
          color: lightorange;
          -webkit-text-stroke: 1px black;
        }

        h3 {
          color: #FFD580; /* Light orange */
          font-size: 36px; /* Larger font size */
           -webkit-text-stroke: 1px #FFB347;
        }

        ul {
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        li {
          background-color: #FFD580; /* Light orange */
          border: 2px solid #FFD580; /* Remove the black outline */
          padding: 10px;
          margin: 5px;
          border-radius: 10px;
          cursor: pointer;
          flex: 1 0 45%; /* Responsive boxes */
          max-width: 200px;
          text-align: center;
          transition: background-color 0.3s ease;
        }

        li:hover {
          background-color: #FFB347; /* Darker orange */
        }

        .li-selected {
          background-color: #FFB347; /* Darker orange */
        }

        .btn, .btn-disabled {
          background-color: #FFD580; /* Light orange */
          border: none; /* Remove the black outline */
          padding: 10px 20px;
          margin-top: 20px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 16px;
          color: black;
        }

        .btn-disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>

    </div>
  );
}
