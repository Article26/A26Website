'use client'

import React, { useState } from "react";
import Link from 'next/link'; // Import Link
import Image from "next/image";
import Berry from '@/assets/Berries/Large_Beri.png';

export default function Intro() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showPhenotypeSection, setShowPhenotypeSection] = useState(false);
  const [showBulletPoints, setShowBulletPoints] = useState(false);
  const [showOptimisticPessimistic, setShowOptimisticPessimistic] = useState(false);
  const [showFrugalImpulsive, setShowFrugalImpulsive] = useState(false);
  const [showFinalSection, setShowFinalSection] = useState(false);
  const [showFinalChat, setShowFinalChat] = useState(false);
  const [finalChatIndex, setFinalChatIndex] = useState(0);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [isScenarioOne, setIsScenarioOne] = useState(true);
  const [showScenario, setShowScenario] = useState(false);

  const messages = [
    "Hi! Im Beri the Budgetor, your Article 26 personal finance member",
    "For now, Ill be your tour guide. Lets get to know each other better!",
    "If you have 10 minutes to set some things up, well be well on our way to financial success",
    "To start, were going to learn about Financial Phenotypes. Then youll find out what yours is",
    "Ready to learn?",
  ];

  const finalMessages = [
    "Hello again friend! I heard you want to find out your financial phenotype.",
    "That’s amazing! All you have to do is live your life as you normally would and Ill analyze your behavior...",
    "Allow me to set the scene: Today marks the day that you are moving to a new city to start fresh and (hopefully) find success...",
    "You are going to need to secure an income and maintain expenses while making choices that keep you and your wallet happy",
    "During the simulation, remember to be yourself! There are no wrong or right answers"
  ];

  const ScenarioOne = [
    "A financial phenotype, or money personality, describes your personal relationship with money and encompasses who you are as a spender",
    "Shown below are our eight Financial Phenotypes, each with their own distinct traits and behaviors",
    "These traits include your emotional outlook and strategic approach with money, as well as the extent to which your spending is influenced by internal and external factors",
  ];

  const ScenarioTwo = [
    "Hello again friend! I heard you want to find out your financial phenotype...",
    "Your phenotype can change over time as you experience new life events, develop new spending habits and reach new goals",
    "Achieving financial well-being involves balancing your emotions, strategies, and influences with your financial goals and values.",
    "Discovering your financial personality is the first step toward making informed decisions and achieving financial success.",
    "Lets play a game to find out your financial phenotype!",
  ];

  const handleContinue = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setShowBulletPoints(true);
    }
  };

  const handleNext = () => {
    if (showBulletPoints) {
      setShowBulletPoints(false);
      setShowPhenotypeSection(true);
    } else if (showPhenotypeSection && !showOptimisticPessimistic) {
      setShowPhenotypeSection(false);
      setShowOptimisticPessimistic(true);
    } else if (showOptimisticPessimistic && !showFrugalImpulsive) {
      setShowOptimisticPessimistic(false);
      setShowFrugalImpulsive(true);
    } else if (showFrugalImpulsive && !showFinalSection) {
      setShowFrugalImpulsive(false);
      setShowFinalSection(true);
    } else if (showFinalSection && !showFinalChat) {
      setShowFinalSection(false);
      setShowFinalChat(true);
    }
  };

  const handleScenarioContinue = () => {
    if (isScenarioOne) {
      if (scenarioIndex < ScenarioOne.length - 1) {
        setScenarioIndex(scenarioIndex + 1);
      } else {
        setIsScenarioOne(false);
        setScenarioIndex(0);
      }
    } else {
      if (scenarioIndex < ScenarioTwo.length - 1) {
        setScenarioIndex(scenarioIndex + 1);
      } else {
        setShowScenario(false);
        setShowFinalChat(true);
      }
    }
  };

  const handleFinalContinue = () => {
    if (finalChatIndex < finalMessages.length - 1) {
      setFinalChatIndex(finalChatIndex + 1);
    } else {
      setShowFinalChat(false);
    }
  };

  return (
    <div style={styles.container}>
      {!showPhenotypeSection && !showOptimisticPessimistic && !showFrugalImpulsive && !showFinalSection && !showFinalChat && !showScenario ? (
        !showBulletPoints ? (
          <>
            <div style={styles.chatBox}>
              <p style={styles.text}>{messages[messageIndex]}</p>
            </div>
            <Image src={Berry} alt="Berry" style={styles.berryImage} />
            {messageIndex < messages.length - 1 ? (
              <button style={styles.button} onClick={handleContinue}>
                Continue
              </button>
            ) : (
              <>
                <div style={styles.buttonContainer}>
                  <button style={styles.optionButton} onClick={() => setShowScenario(true)}>Learn about financial phenotypes</button>
                  <button style={styles.optionButton} onClick={() => { setShowScenario(false); setShowFinalChat(true); }}>Take the test now</button>
                </div>
              </>
            )}
          </>
        ) : (
          <div style={styles.infoSection}>
            <div style={styles.orangeBar}>Phenotypes</div>
            <ul style={styles.bulletPoints}>
              <li>A financial phenotype describes your relationship with money:{'\n'}AKA your money personality</li>
              <li>Your unique personality is determined by a combination of 6 factors</li>
              <li>Those factors include: risk tolerance, feeling, spending habits, planning, influence, and knowledge</li>
              <li>There are a total of eight distinct phenotypes, which are categorized based on the traits of emotional orientation, strategic approach, and the extent to which you are influenced by internal and external factors</li>
            </ul>
            <button style={styles.nextButton} onClick={handleNext}>Next</button>
          </div>
        )
      ) : showPhenotypeSection ? (
        <div style={styles.infoSection}>
          <div style={styles.orangeBar}>Phenotypes</div>
          <div style={styles.lightBar}>Trait: Influence</div>
          <div style={styles.subHeader}>Guess yours below</div>
          <div style={styles.boxContainer}>
            <div
              style={styles.box}
              onClick={() => alert('Internal clicked')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7b2a8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <h3>Internal</h3>
              <p>Individuals with an internal influence tend to base their financial decisions on their own reasoning and principles. They, more often than not, rely on personal judgment and are less swayed by external factors such as social pressure, market trends, or others opinions</p>
            </div>
            <div
              style={styles.box}
              onClick={() => alert('External clicked')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a8d0f7'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <h3>External</h3>
              <p>Individuals with an external influence tend to be affected by external factors when making financial decisions. They, more often than not, consider social norms, market trends, peer opinions, and external advice in their financial choices</p>
            </div>
          </div>
          <button style={styles.nextButton} onClick={handleNext}>Next</button>
        </div>
      ) : showScenario ? (
        <>
          <div style={styles.chatBox}>
            <p style={styles.text}>{isScenarioOne ? ScenarioOne[scenarioIndex] : ScenarioTwo[scenarioIndex]}</p>
          </div>
          <Image src={Berry} alt="Berry" style={styles.berryImage} />
          <button style={styles.button} onClick={handleScenarioContinue}>
            {isScenarioOne && scenarioIndex === ScenarioOne.length - 1 ? 'Next' : !isScenarioOne && scenarioIndex === ScenarioTwo.length - 1 ? "Let's Play" : 'Continue'}
          </button>
        </>
      ) : showOptimisticPessimistic ? (
        <div style={styles.infoSection}>
          <div style={styles.orangeBar}>Phenotypes</div>
          <div style={styles.lightBar}>Trait: Influence</div>
          <div style={styles.subHeader}>Guess yours below</div>
          <div style={styles.boxContainer}>
            <div
              style={styles.box}
              onClick={() => alert('Optimistic clicked')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7b2a8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <h3>Optimistic</h3>
              <p>Optimistic individuals tend to have a positive outlook on financial outcomes. They are typically more relaxed about financial decisions and open to taking calculated risks. They generally expect favorable results and are willing to invest in new opportunities</p>
            </div>
            <div
              style={styles.box}
              onClick={() => alert('Pessimistic clicked')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a8d0f7'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <h3>Pessimistic</h3>
              <p>Pessimistic individuals tend to have a negative outlook on financial outcomes. They are typically more anxious and adverse to taking risks, often planning for potential negative scenarios. They generally expect the worst and are cautious with their financial decisions</p>
            </div>
          </div>
          <button style={styles.nextButton} onClick={handleNext}>Next</button>
        </div>
      ) : showFrugalImpulsive ? (
        <div style={styles.infoSection}>
          <div style={styles.orangeBar}>Phenotypes</div>
          <div style={styles.lightBar}>Trait: Strategy</div>
          <div style={styles.subHeader}>Guess yours below</div>
          <div style={styles.boxContainer}>
            <div
              style={styles.box}
              onClick={() => alert('Frugal clicked')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7b2a8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <h3>Frugal</h3>
              <p>Frugal individuals tend to be careful with their money, often focusing on long-term financial stability and security. They are more likely to prefer saving over spending, invest in low-risk assets, and avoid impulsive purchases. Their financial strategy is typically methodical and conservative</p>
            </div>
            <div
              style={styles.box}
              onClick={() => alert('Impulsive clicked')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a8d0f7'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <h3>Impulsive</h3>
              <p>Impulsive individuals tend to make spontaneous financial decisions, often driven by immediate gratification or emotional states. They are more likely to spend on whims, make high-risk investments without thorough planning, and prioritize short-term rewards over long-term stability</p>
            </div>
          </div>
          <button style={styles.nextButton} onClick={handleNext}>Next</button>
        </div>
      ) : showFinalSection ? (
        <div style={styles.infoSection}>
          <div style={styles.orangeBar}>Phenotypes</div>
          <ul style={styles.numberedList}>
            <li>Understanding a financial personality can help individuals, financial advisors, and planners tailor financial advice and strategies to better suit their clients needs and tendencies</li>
            <li>Its essential to acknowledge that these personalities can change over time and may be influenced by life events and circumstances</li>
            <li>Financial well-being often involves finding a balance between emotions, strategies, and external influences that align with ones financial goals and values</li>
            <li>Lets play a game to find out yours!</li>
          </ul>
          <button style={styles.nextButton} onClick={handleNext}>Next</button>
        </div>
      ) : showFinalChat ? (
        <>
          <div style={styles.chatBox}>
            <p style={styles.text}>{finalMessages[finalChatIndex]}</p>
          </div>
          <Image src={Berry} alt="Berry" style={styles.berryImage} />
          {finalChatIndex < finalMessages.length - 1 ? (
            <button style={styles.button} onClick={handleFinalContinue}>
              Continue
            </button>
          ) : (
            <Link href="/quiz">
              <button style={styles.button}>Lets Play</button> {/* Use Link to navigate */}
            </Link>
          )}
                  </>
      ) : null}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  },
  chatBox: {
    backgroundColor: '#FFD580',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    maxWidth: '600px',
    textAlign: 'center'
  },
  text: {
    color: 'black',
    fontSize: '18px'
  },
  button: {
    backgroundColor: '#FFD580',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '150px' // Shorter width
  },
  optionButton: {
    backgroundColor: '#FFD580',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '0 10px',
    width: '200px',
    height: '70px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    gap: '10px'
  },
  infoSection: {
    textAlign: 'center',
    marginTop: '20px'
  },
  orangeBar: {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '18px',
    marginBottom: '10px'
  },
  lightBar: {
    backgroundColor: '#f0d0a8',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '16px',
    marginBottom: '10px'
  },
  subHeader: {
    fontSize: '16px',
    marginBottom: '10px',
    textAlign: 'center' // Ensure the subheading is centered
  },
  bulletPoints: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto'
  },
  numberedList: {
    listStyleType: 'decimal',
    paddingLeft: '20px',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto'
  },
  nextButton: {
    backgroundColor: 'FFD580',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    width: '150px' // Shorter width
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  box: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  berryImage: {
    marginTop: '20px',
    maxWidth: '200px',
    maxHeight: '250px'
  }
};
