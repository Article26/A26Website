'use client'

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { quiz_main } from "@/dataFiles/testdata";

export default function QuizMainComponent({ quizData }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [checkingBalance, setCheckingBalance] = useState(0); // New state for checking balance
  const [totalMonthlyCharges, setTotalMonthlyCharges] = useState(0); // New state for total monthly charges
  const [savings, setSavings] = useState(0);
  const [newMonthCharge, setNewMonthCharge] = useState(0);

  const [influenceScore, setInfluenceScore] = useState(0);
  const [knowledgeScore, setKnowledgeScore] = useState(0);
  const [planningScore, setPlanningScore] = useState(0);
  const [spendingHabitsScore, setSpendingHabitsScore] = useState(0);
  const [riskToleranceScore, setRiskToleranceScore] = useState(0);
  const [feelingScore, setFeelingScore] = useState(0);

  useEffect(() => {
    setCheckingBalance(quizData.checkingBalance);
    setTotalMonthlyCharges(quizData.totalMonthlyCharges);
    setNewMonthCharge(quizData.checkingBalance);
    setInfluenceScore(quizData.influenceScore);
    setKnowledgeScore(quizData.knowledgeScore);
    setPlanningScore(quizData.planningScore);
    setSpendingHabitsScore(quizData.spendingHabitsScore);
    setRiskToleranceScore(quizData.riskToleranceScore);
    setFeelingScore(quizData.feelingScore);
  }, [quizData]);

  const { questions } = quiz_main;
  const { question, answers, correctAnswer, monthlyAdd, checkingCharge, checkingChargeOneTime, savingsCharge, checkingAdd, savingAdd, newMonth, factor, month } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
  };

  const nextQuestion = () => {
    setNewMonthCharge((prevNewMonthCharge) => {
      let newNewMonthCharge = prevNewMonthCharge;
      if (monthlyAdd) {
        newNewMonthCharge += monthlyAdd[selectedAnswerIndex];
      }
      return newNewMonthCharge;
    });

    setCheckingBalance((prevCheckingBalance) => {
      let newCheckingBalance = prevCheckingBalance;
      if (newMonth === true) {
        newCheckingBalance += newMonthCharge;
      }
      return newCheckingBalance;
    });

    setTimeout(() => {
      if (activeQuestion < questions.length - 1) {
        setActiveQuestion(activeQuestion + 1);
      } else {
        setShowResult(true);
      }

      if (checkingAdd) {
        setCheckingBalance(checkingBalance + checkingAdd[selectedAnswerIndex]);
      }

      if (checkingCharge) {
        setTotalMonthlyCharges(totalMonthlyCharges + checkingCharge[selectedAnswerIndex]);
      }

      if (checkingChargeOneTime) {
        setCheckingBalance(checkingBalance - checkingChargeOneTime[selectedAnswerIndex]);
      }
      if (savingsCharge) {
        setSavings(savings - savingsCharge[selectedAnswerIndex]);
      }

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

      if (factor) {
        switch (factor) {
          case 'Influence':
            setInfluenceScore((prev) => prev + correctAnswer[selectedAnswerIndex]);
            break;
          case 'Knowledge':
            setKnowledgeScore((prev) => prev + correctAnswer[selectedAnswerIndex]);
            break;
          case 'Planning':
            setPlanningScore((prev) => prev + correctAnswer[selectedAnswerIndex]);
            break;
          case 'Spending Habits':
            setSpendingHabitsScore((prev) => prev + correctAnswer[selectedAnswerIndex]);
            break;
          case 'Risk Tolerance':
            setRiskToleranceScore((prev) => prev + correctAnswer[selectedAnswerIndex]);
            break;
          case 'Feeling':
            setFeelingScore((prev) => prev + correctAnswer[selectedAnswerIndex]);
            break;
          default:
            break;
        }
      }

      setChecked(false);
    }, 0);
  };

  return (
    <div className="container">
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
              activeQuestion === questions.length - 1 ? (
                <Link
                  href={{
                    pathname: '/results',
                    query: {
                      influenceScore,
                      knowledgeScore,
                      planningScore,
                      spendingHabitsScore,
                      riskToleranceScore,
                      feelingScore,
                    },
                  }}
                >
                  <button className='btn'>View Results</button>
                </Link>
              ) : (
                <button onClick={nextQuestion} className='btn'>
                  Continue
                </button>
              )
            ) : (
              <button disabled className='btn-disabled'>
                {activeQuestion === questions.length - 1 ? 'View Results' : 'Continue'}
              </button>
            )}
          </div>
        ) : null}
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
