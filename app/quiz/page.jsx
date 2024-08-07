'use client'

import React, { useState } from "react";
import QuizComponent from "@/components/startQuiz.js"
import QuizMainComponent from "@/components/mainQuiz.js"

export default function Quiz() {
  const [firstQuizCompleted, setFirstQuizCompleted] = useState(false);
  const [quizData, setQuizData] = useState({
    checkingBalance: 0,
    totalMonthlyCharges: 0,
    influenceScore: 0,
    knowledgeScore: 0,
    planningScore: 0,
    spendingHabitsScore: 0,
    riskToleranceScore: 0,
    feelingScore: 0,
  });

  const handleQuizComplete = () => {
    setFirstQuizCompleted(true);
  };

  const handleQuizDataUpdate = (data) => {
    setQuizData(data);
  };

  return (
    <div>
      {!firstQuizCompleted ? (
        <QuizComponent onQuizComplete={handleQuizComplete}
        onQuizDataUpdate={handleQuizDataUpdate}
         />
      ) : (
        <QuizMainComponent quizData={quizData} />
      )}
    </div>
  );
}


// 'use client'

// import React from "react";
// import { useState } from "react";
// import { quiz } from "../../dataFiles/data";


// export default function Quiz(){

//     const [activeQuestion, setActiveQuestion] = useState(0);
//     const [selectedAnswer, setSelectedAnswer] = useState('');
//     const [checked, setChecked] = useState(false);
//     const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
//     const [showResult, setShowResult] = useState(false);
//     const [result, setResult] = useState({
//       score: 0,
//       correctAnswers: 0,
//       wrongAnswers: 0,
//     });
//     const [city,setCity] = useState('');
//     const [cityQuestionIndex,setCityQuestionIndex] = useState(0);
  
//     const { questions } = quiz;
//     const { question, answers, correctAnswer } = questions[activeQuestion];


//     const onAnswerSelected = (answer, idx) =>{
//         setChecked(true)
//         setSelectedAnswerIndex(idx)
//     };

//     //calulate score and increment to next question
//     // const nextQuestion = () => {
//     //     if(activeQuestion==0){
//     //         setCity(answers[selectedAnswerIndex]);
//     //         if(answers[selectedAnswerIndex]== 'Cash City'){
//     //             setCityQuestionIndex(4);
//     //         }else if(answers[selectedAnswerIndex]== 'EzPz City'){
//     //             setCityQuestionIndex(8);
//     //         }

//     //     }
//     //     setSelectedAnswerIndex(null);
//     //     setResult((prev) =>
//     //       selectedAnswer
//     //         ? {
//     //             ...prev,
//     //             score: prev.score + 5,
//     //             correctAnswers: prev.correctAnswers + 1,
//     //           }
//     //         : {
//     //             ...prev,
//     //             wrongAnswers: prev.wrongAnswers + 1,
//     //           }
//     //     );
//     //     if (activeQuestion === 4 && city === 'Doomsville' || activeQuestion === 8 && city === 'Cash City' || activeQuestion === 12 && city === 'EzPz City') {
//     //         setActiveQuestion(0);
//     //         setShowResult(true); 
//     //     } else {
//     //         console.log('here');
//     //         setActiveQuestion(cityQuestionIndex+1);
//     //         setCityQuestionIndex((prev) => prev + 1);
//     //     }
//     //     setChecked(false);
//     //   };

//       const nextQuestion = () => {
//         if (activeQuestion === 0) {
//           setCity(answers[selectedAnswerIndex]);
//           if (answers[selectedAnswerIndex] === 'Cash City') {
//             setCityQuestionIndex(5);
//             setActiveQuestion(5);
//           } else if (answers[selectedAnswerIndex] === 'EzPz City') {
//             setCityQuestionIndex(9);
//             setActiveQuestion(9);
//           } else {
//             setActiveQuestion(activeQuestion + 1);
//           }
//         } else {
//           if (activeQuestion === 4 && city === 'Doomsville' ||
//               activeQuestion === 8 && city === 'Cash City' ||
//               activeQuestion === 12 && city === 'EzPz City') {
//             setShowResult(true);
//           } else {
//             setActiveQuestion(activeQuestion + 1);
//           }
//         }
    
//         setSelectedAnswerIndex(null);
//         setResult((prev) =>
//           selectedAnswerIndex === correctAnswer
//             ? {
//                 ...prev,
//                 score: prev.score + 5,
//                 correctAnswers: prev.correctAnswers + 1,
//               }
//             : {
//                 ...prev,
//                 wrongAnswers: prev.wrongAnswers + 1,
//               }
//         );
//         setChecked(false);
//       };    
    
//     return(
//         <div className = "container">
//             <h1>Quiz</h1>

//             <div>
//                 <h2>
//                     Question: {activeQuestion+1}
//                     <span>/{questions.length}</span>
//                 </h2>
//             </div>
//             <div>
//                 {!showResult ? (
//                     <div className = "quiz-container"> 
//                     <h3>{questions[activeQuestion].question}</h3>
//                     {answers.map((answer, idx) =>(
//                         <li key={idx}
//                         onClick={() =>  onAnswerSelected(answer,idx)}
//                         className = {selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}>
//                             <span>{answer}</span>
//                         </li>
//                     ))}
//                     {checked ? (
//                         <button onClick={nextQuestion}  className='btn'>{activeQuestion === question.length -1 ? 'Finish' : 'Next'}</button>
//                     ) : (
//                         <button onClick={nextQuestion} disabled className='btn-disabled'>{activeQuestion === question.length -1 ? 'Finish' : 'Next'}</button>)}
//                     </div>) : (
//                     <div className = "quiz-container"> 
//                         <h3>Results</h3>
//                         <h3>Overall {(result.score / 25) * 100}%</h3>
//                         <p>
//                         Total Questions: <span>{questions.length}</span>
//                         </p>
//                         <p>
//                         Total Score: <span>{result.score}</span>
//                         </p>
//                         <p>
//                         Correct Answers: <span>{result.correctAnswers}</span>
//                         </p>
//                         <p>
//                         Wrong Answers: <span>{result.wrongAnswers}</span>
//                         </p>
//                         <button onClick={() => window.location.reload()}>Restart</button>
//                     </div>)}
//             </div>
//         </div>
        
//     );
// }