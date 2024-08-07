'use client'
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import Berry from "@/assets/Berries/Large_Beri.png";
import Results from "@/components/results";

const resultMSG = [
  "Woohoo, you made it through the year in a new city!",
  "While your Financial Phenotype is being calculated let’s get an idea of who you believe yourself to be as a spender...",
  "When it comes to financial decisions and management..."
];

const ResultPage = () => {
  const searchParams = useSearchParams();
  const [messageIndex, setMessageIndex] = useState(0);
  const [selectedInfluence, setSelectedInfluence] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState({
    influenceScore: 0,
    knowledgeScore: 0,
    planningScore: 0,
    spendingHabitsScore: 0,
    riskToleranceScore: 0,
    feelingScore: 0,
  });

  useEffect(() => {
    const influenceScore = (Math.round((searchParams.get('influenceScore')/20)* 100)) / 100;
    const knowledgeScore = (Math.round((searchParams.get('knowledgeScore')/20)* 100)) / 100;
    const planningScore = (Math.round((searchParams.get('planningScore')/24)* 100)) / 100;
    const spendingHabitsScore = (Math.round((searchParams.get('spendingHabitsScore')/20)* 100)) / 100;
    const riskToleranceScore = (Math.round((searchParams.get('riskToleranceScore')/20)* 100)) / 100;
    const feelingScore = (Math.round((searchParams.get('feelingScore')/16)* 100)) / 100;

    setScores({
      influenceScore: parseFloat(influenceScore),
      knowledgeScore: parseFloat(knowledgeScore),
      planningScore: parseFloat(planningScore),
      spendingHabitsScore: parseFloat(spendingHabitsScore),
      riskToleranceScore: parseFloat(riskToleranceScore),
      feelingScore: parseFloat(feelingScore),
    });
  }, [searchParams]);

  const handleContinue = () => {
    if (messageIndex < resultMSG.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleSelection = (category, option) => {
    if (category === 'influence') {
      setSelectedInfluence(option);
    } else if (category === 'emotion') {
      setSelectedEmotion(option);
    } else if (category === 'strategy') {
      setSelectedStrategy(option);
    }
  };

  return (
    <div style={styles.container}>
      {showResults ? (
        <Results
          influenceScore={scores.influenceScore}
          knowledgeScore={scores.knowledgeScore}
          planningScore={scores.planningScore}
          spendingHabitsScore={scores.spendingHabitsScore}
          riskToleranceScore={scores.riskToleranceScore}
          feelingScore={scores.feelingScore}
          selectedInfluence={selectedInfluence}
          selectedEmotion={selectedEmotion}
          selectedStrategy={selectedStrategy}
        />
      ) : (
        <>
          <div style={styles.chatBoxContainer}>
            <Image src={Berry} alt="Berry" style={styles.berryImage} />
            <div style={styles.chatBox}>
              <p style={styles.text}>{resultMSG[messageIndex]}</p>
            </div>
          </div>
          {messageIndex === resultMSG.length - 1 && (
            <>
              <div style={styles.traitContainer}>
                <div style={styles.traitBox}>
                  <h4 style={styles.traitTitle}>Influence</h4>
                  <div style={styles.optionContainer}>
                    <div
                      style={{
                        ...styles.optionBox,
                        backgroundColor: selectedInfluence === 'internal' ? '#ffa726' : '#FFD580',
                      }}
                      onClick={() => handleSelection('influence', 'internal')}
                    >
                      I rely on my own reasoning and principles, not often swayed by social pressure and market trends
                    </div>
                    <div
                      style={{
                        ...styles.optionBox,
                        backgroundColor: selectedInfluence === 'external' ? '#ffa726' : '#FFD580',
                      }}
                      onClick={() => handleSelection('influence', 'external')}
                    >
                      I often considered social norms and expectations, advice from others, etc.
                    </div>
                  </div>
                </div>
                <div style={styles.traitBox}>
                  <h4 style={styles.traitTitle}>Emotion</h4>
                  <div style={styles.optionContainer}>
                    <div
                      style={{
                        ...styles.optionBox,
                        backgroundColor: selectedEmotion === 'relaxed' ? '#ffa726' : '#FFD580',
                      }}
                      onClick={() => handleSelection('emotion', 'relaxed')}
                    >
                      I feel more relaxed, open to taking risks, and am usually more positive in my expectations
                    </div>
                    <div
                      style={{
                        ...styles.optionBox,
                        backgroundColor: selectedEmotion === 'anxious' ? '#ffa726' : '#FFD580',
                      }}
                      onClick={() => handleSelection('emotion', 'anxious')}
                    >
                      I feel more anxious, avoiding taking risks, and am more careful as I usually expect bad scenarios or outcomes
                    </div>
                  </div>
                </div>
                <div style={styles.traitBox}>
                  <h4 style={styles.traitTitle}>Strategy</h4>
                  <div style={styles.optionContainer}>
                    <div
                      style={{
                        ...styles.optionBox,
                        backgroundColor: selectedStrategy === 'cautious' ? '#ffa726' : '#FFD580',
                      }}
                      onClick={() => handleSelection('strategy', 'cautious')}
                    >
                      I tend to be more cautious, prioritizing saving over spending and long-term stability over fast or instant gratification
                    </div>
                    <div
                      style={{
                        ...styles.optionBox,
                        backgroundColor: selectedStrategy === 'spontaneous' ? '#ffa726' : '#FFD580',
                      }}
                      onClick={() => handleSelection('strategy', 'spontaneous')}
                    >
                      I tend to be more spontaneous, enjoying high-risk for possible high-reward especially for short-term rewards
                    </div>
                  </div>
                </div>
              </div>
              <button style={styles.btn} onClick={handleContinue}>
                Take me to my results!
              </button>
            </>
          )}
          {messageIndex < resultMSG.length - 1 ? (
            <button style={styles.btn} onClick={handleContinue}>
              Continue
            </button>
          ) : null}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white',
  },
  chatBoxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  chatBox: {
    backgroundColor: '#FFD580',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: '18px',
  },
  berryImage: {
    marginRight: '20px',
    maxWidth: '100px',
    maxHeight: '125px',
  },
  btn: {
    backgroundColor: '#FFD580',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
  traitContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '1000px',
  },
  traitBox: {
    textAlign: 'center',
    flex: 1,
  },
  traitTitle: {
    fontSize: '18px',
    color: 'black',
    marginBottom: '10px',
    backgroundColor: '#FFD580',
    borderRadius: '10px',
    padding: '10px',
  },
  optionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '10px',
  },
  optionBox: {
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    width: '48%',
  },
};

export default ResultPage;
