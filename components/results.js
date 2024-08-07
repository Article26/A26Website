'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";

import IPFImage from "../assets/Berries/Pomegranate.png";
import IPIImage from "../assets/Berries/Gooseberry.png";
import IOFImage from "../assets/Berries/Blueberry.png";
import IOIImage from "../assets/Berries/Cherry.png";
import EPFImage from "../assets/Berries/Cranberry.png";
import EPIImage from "../assets/Berries/Elderberry.png";
import EOFImage from "../assets/Berries/Blackberry.png";
import EOIImage from "../assets/Berries/Strawberry.png";

import scoreDescriptions from "@/dataFiles/factorData.js"


const responses = {
  IPF:{
    title: 'Internal Pessimistic Frugal',
    titleSubheading: 'IPF individuals make financial decisions based on their own reasoning and principles, rather than external influences. Often pessimistic about financial outcomes, they tend to be cautious and anxious. With a frugal approach to money management, they focus on long-term financial stability, avoiding impulsive spending and investing in low-risk assets. Their primary objective is financial security, and they are reluctant to engage in risky endeavors',
    image: IPFImage,
    typeOneTitle: 'Internal:',
    typeTwoTitle: 'Pessimistic:',
    typeThreeTitle: 'Frugal:',
    typeOneSubheading: 'IPF individuals, like pomegranates, grow and develop their strengths internally, thriving in various environments with self-reliance and intrinsic motivation.',
    typeTwoSubheading: 'Pomegranates have a tart taste, reflecting the cautious and anxious outlook of IPF individuals who prefer conservative, low-risk decisions.',
    typeThreeSubheading: "Taking time to grow and valued for their multiple uses, Pomegranates symbolize the IPF's focus on long-term stability and strategic resource management.",
  },
  IPI:{
    title: 'Internal Pessimistic Impulsive',
    titleSubheading: 'IPI individuals trust their own judgment in financial matters but are frequently anxious due to their pessimistic outlook. This emotional state can lead them to make impulsive financial decisions, sometimes to alleviate internal discomfort or for immediate gratification. They often experience financial anxiety and may later regret their spontaneous expenditures.',
    image: IPIImage,
    typeOneTitle: 'Internal',
    typeTwoTitle: 'Pessimistic',
    typeThreeTitle: 'Impulsive',
    typeOneSubheading: 'Gooseberries develop their nutrients internally and can adapt to various conditions, similar to IPI individuals, they emphasize reliance on personal judgment and internal resources',
    typeTwoSubheading: "Gooseberries often have a tart and bitter taste, representing IPI individuals' pessimistic outlook, which fuels their financial anxiety.",
    typeThreeSubheading: "Gooseberries grow quickly and spoil rapidly, symbolizing IPI individuals' impulsive tendencies and short-term gratification despite their pessimism.",
  },
  IOF:{
    title: 'Internal Optimistic Frugal',
    titleSubheading: 'IOF individuals are optimistic about financial prospects and are willing to take calculated risks when they see fit. Despite their optimistic nature, their actual financial management is frugal, prioritizing long-term stability and financial security. They are methodical savers and prefer to invest in conservative financial instruments to ensure steady growth.',
    image: IOFImage,
    typeOneTitle: 'Internal',
    typeTwoTitle: 'Optimistic',
    typeThreeTitle: 'Frugal',
    typeOneSubheading: 'IOF individuals, like blueberries, rely on intrinsic qualities for growth, developing nutrients and sweetness internally, highlighting self-sufficiency and confidence in internal judgment.',
    typeTwoSubheading: "Blueberries are sweet and nutritious, reflecting IOF individuals' positive outlook and willingness to take calculated risks for steady growth.",
    typeThreeSubheading: "Blueberries take time to grow and are used in various forms, representing IOF's careful planning, long-term stability, and preference for conservative investments.",
  },
  IOI:{
    title: 'Internal Optimistic Impulsive',
    titleSubheading: 'IOI individuals are intrinsically motivated, optimistic, and willing to embrace financial risks. They often seek immediate rewards and are not overly concerned with meticulous financial planning. This spontaneity may lead them to make substantial investments or expenditures based on intuition, without external validation.',
    image: IOIImage,
    typeOneTitle: 'Internal',
    typeTwoTitle: 'Optimistic',
    typeThreeTitle: 'Impulsive',
    typeOneSubheading: 'IOI individuals, like cherries, develop their sweetness and nutrients internally, thriving in various environments, reflecting strong internal motivation and reliance on personal judgment.',
    typeTwoSubheading: "Cherries are sweet and appealing, symbolizing IOI individuals' positive outlook and willingness to embrace financial risks for immediate rewards.",
    typeThreeSubheading: "Cherries ripen quickly and are enjoyed fresh, representing IOI individuals' spontaneous tendencies and swift decisions for quick benefits.",
  },
  EPF:{
    title: 'External Pessimistic Frugal',
    titleSubheading: 'EPF individuals are influenced by external factors like market trends and societal expectations, which often heighten their financial anxieties. Their approach to finance is frugal; they aim to mitigate risks by choosing safe investments and spending cautiously',
    image: EPFImage,
    typeOneTitle: 'External: ',
    typeTwoTitle: 'Pessimistic: ',
    typeThreeTitle: 'Frugal: ',
    typeOneSubheading: 'EPF individuals, like cranberries, depend on specific environmental conditions for growth, influenced by market trends and societal expectations, shaping cautious financial behavior.',
    typeTwoSubheading: "Cranberries have a tart taste, reflecting EPF individuals' anxious and cautious outlook, leading to a conservative approach.",
    typeThreeSubheading: "Cranberries take time to mature and are used in various ways, symbolizing careful planning and long-term stability, aligning with EPF's focus on mitigating risks through safe investments and cautious spending.",
  },
  EPI:{
    title: 'External Pessimistic Impulsive',
    titleSubheading: 'EPI individuals are highly susceptible to external factors when making financial decisions and often feel anxious due to their pessimistic view. Despite this, they can be impulsive, with their decisions often driven by external stimuli rather than by careful planning. They may act spontaneously, influenced by social pressure or trending opportunities.',
    image: EPIImage,
    typeOneTitle: 'External: ',
    typeTwoTitle: 'Pessimistic: ',
    typeThreeTitle: 'Impulsive: ',
    typeOneSubheading: 'EPI individuals, like elderberries, are sensitive to environmental conditions and thrive best in specific climates, heavily influenced by social pressures and trends.',
    typeTwoSubheading: "Elderberries have a tart and sometimes bitter taste, reflecting EPI individuals' anxious and pessimistic outlook, leading to urgency in their decisions.",
    typeThreeSubheading: "Elderberries ripen quickly and spoil rapidly, symbolizing EPI individuals' impulsive behavior and short-term decision-making driven by external influences.",
  },
  EOF:{
    title: 'External Optimistic Frugal',
    titleSubheading: 'EOF individuals are optimistic and influenced by external circumstances like market dynamics and peer opinions. Even though they have a positive outlook, they maintain a frugal approach in daily financial activities, focusing on regular savings and low-risk investments.',
    image: EOFImage,
    typeOneTitle: 'External: ',
    typeTwoTitle: 'Optimistic: ',
    typeThreeTitle: 'Frugal: ',
    typeOneSubheading: 'EOF individuals, like blackberries, grow in clusters and depend on environmental conditions for optimal growth, influenced by market dynamics and peer opinions.',
    typeTwoSubheading: 'Blackberries are sweet and nutritious, reflecting the positive outlook of EOF individuals who maintain a hopeful perspective on financial opportunities driven by favorable external conditions.',
    typeThreeSubheading: 'Blackberries take time to mature and are used in various forms, symbolizing careful planning and long-term stability, with EOF individuals focusing on regular savings and low-risk investments for steady growth and security.',
  },
  EOI:{
    title: 'External Optimistic Impulsive',
    titleSubheading: 'EOI individuals are optimistic and easily influenced by external factors such as current trends or the advice of others. They are drawn to high-return investment opportunities and tend to make impulsive financial decisions. This may include unplanned expenditures or opting for riskier investments without comprehensive planning.',
    image: EOIImage,
    typeOneTitle: 'External: ',
    typeTwoTitle: 'Optimistic: ',
    typeThreeTitle: 'Impulsive: ',
    typeOneSubheading: 'EOI individuals, like strawberries, have seeds on the outside and depend on specific environmental conditions for growth, easily influenced by external trends and advice from others.',
    typeTwoSubheading: "Strawberries are sweet and appealing, reflecting EOI individuals' positive outlook and attraction to high-return opportunities.",
    typeThreeSubheading: "Strawberries ripen quickly, symbolizing EOI individuals' impulsive behavior and focus on immediate rewards driven by external influences.",
  }

}

// const scoreDescriptions = {
//     "Risk Tolerance": [
//     "If you score as High Averse in risk tolerance, you exhibit extreme caution in financial matters. You prioritize security over potential gains, favoring investments that offer steady, albeit lower returns, such as savings accounts and government bonds. While this minimizes your risk of loss, it may also limit your potential for higher financial gains. Consider slowly integrating more diverse but conservative investment options to balance security with growth.",
//     "Scoring Averse suggests a cautious approach to financial risk. You prefer stability in your investments and are likely to shy away from speculative opportunities. This conservative strategy protects you from significant financial downturns but may restrict your growth potential. To enhance your financial portfolio, you might explore mixed-risk investments that offer a balance of safety and a higher return opportunity.",
//     "A Neutral score in risk tolerance indicates a balanced approach to financial risk. You are comfortable with a moderate level of risk, allowing you to explore various investment types, from bonds to stocks. This balanced approach helps you to capitalize on growth opportunities without exposing yourself to undue risk, ideally positioning you to achieve healthy financial growth over time.",
//     "As a Risk Seeking individual, you are comfortable taking on higher risk levels in pursuit of greater financial returns. You think about or actively invest in stocks, real estate, or business ventures with higher potential rewards. While this approach can lead to substantial gains, it also comes with the risk of significant losses, so continuous monitoring and strategic diversification of your investments are essential.",
//     "Highly Risk Seeking individuals are very comfortable with taking substantial financial risks. You thrive on high-risk, high-reward investment opportunities and are likely to have a significant portion of your portfolio in volatile markets. To safeguard against potential financial setbacks, consider balancing your portfolio with some lower-risk investments and regularly reviewing your investment strategy to align with your long-term financial goals."
//   ],
//     "Feeling": [
//     "Highly Anxious scorers experience significant stress and worry over their financial decisions. This high level of anxiety can often lead to decision paralysis or hasty choices under pressure. It is beneficial to develop strategies such as setting clear financial goals, seeking professional advice, and practicing stress-reduction techniques to manage your anxiety and make more confident financial decisions.",
//     "Anxious scorers feel regular nervousness about their financial situation. This anxiety may prevent you from taking necessary risks that could benefit your financial health. Implementing a solid financial plan and educating yourself on financial matters can help alleviate these fears and give you a clearer path to follow, improving your financial confidence.",
//     "A Neutral score in feeling suggests you experience a balanced emotional response to your finances. You handle financial ups and downs with a steady demeanor, allowing you to make decisions without excessive stress or overconfidence. Maintaining this equilibrium is beneficial; continue to educate yourself on financial practices to further enhance your decision-making process.",
//     "Relaxed individuals typically do not let financial decisions cause them undue stress. Your calm approach lets you think clearly and make decisions without panic or anxiety. However, staying engaged and not becoming complacent is essential, as being too relaxed can sometimes lead to missed opportunities or overlooked risks.",
//     "Highly Relaxed scorers are extremely calm about their financial decisions, to the point where they may pay little attention to financial details. This can be beneficial in reducing stress but may risk neglecting crucial financial planning and opportunities for growth. To balance this, set regular check-ins for your financial status and involve a financial advisor to ensure you are on track with your financial goals."
//   ],
//     "Planning": [
//     "Highly Reactive planners often make financial decisions based solely on immediate needs or crises, lacking a long-term strategy. This can result in missed opportunities and higher costs in the long run. Developing a more proactive financial planning approach, such as setting long-term goals and preparing for emergencies, can provide greater security and peace of mind.",
//     "Reactive planners address financial issues as they arise rather than through strategic planning. While this allows for flexibility, it may also lead to a lack of preparation for future financial needs. Incorporating elements of proactive planning, like regular savings for future goals, can enhance your financial readiness and control.",
//     "A Neutral planning score indicates a balance between proactive and reactive financial strategies. You are able to adapt to immediate circumstances while also keeping an eye on future goals. This adaptability is a strong asset; continue to refine your planning skills to further improve your financial well-being.",
//     "Proactive planners are well-prepared for future financial demands, often having detailed plans and savings goals. This forward-thinking approach minimizes surprises and ensures financial stability. To keep your planning effective, regularly review and update your financial plans to adapt to changes in your life circumstances or financial status.",
//     "Highly Proactive individuals are exceptionally diligent in planning for future financial needs, often with extensive preparation and contingency plans. This thoroughness ensures that you are well-equipped to handle unexpected financial challenges. However, ensure that you maintain some flexibility in your plans to allow for changes in your goals or opportunities that may arise unexpectedly.",
//   ],
//     "Spending Habits": [
//     "High Spenders tend to allocate a significant portion of their income towards purchases. This spending behavior can lead to impressive lifestyles but might compromise your ability to save for future needs or emergencies. Implementing a structured budget with clear limits on discretionary spending can help manage your finances more effectively and increase your savings.",
//     "As a Spender, you are comfortable spending money, often prioritizing immediate enjoyment or convenience over long-term savings. While this may enhance your quality of life, ensuring it doesn't impede your financial security is essential. Adopting a budget that includes savings as a fixed expense could help balance your spending habits with your financial health goals.",
//     "A Neutral score in spending habits means you maintain a balance between spending and saving. This approach allows you to enjoy your present lifestyle while preparing for the future. Continue practicing this balanced financial behavior, and consider adjusting your strategies as your financial goals and circumstances evolve.",
//     "Savers prioritize accumulating money over making unnecessary purchases. Your disciplined approach to finances ensures you are well-prepared for the future, but it may also mean missing out on some of life’s pleasures. To maintain a healthy balance, allocate a portion of your budget for leisure and enjoyment, ensuring you enjoy the present while saving for the future.",
//     "High Savers exhibit an extreme commitment to saving money, often at the expense of current personal enjoyment. This approach provides a significant financial cushion and excellent security but can diminish quality of life if too restrictive. Allowing yourself some flexibility in your budget for occasional treats or experiences can enhance your overall happiness without compromising your financial stability."
//   ],
//     "Influence": [
//     "Scoring High Internal Influence indicates that your financial decisions are predominantly guided by your personal beliefs and values, largely independent of external influences. You trust your judgment and rarely seek or follow advice from others unless it aligns closely with your own insights. While this can lead to a strong sense of financial autonomy, be mindful to occasionally seek external perspectives to avoid potential biases and to ensure a well-rounded view of your financial landscape.",
//     "An Internal Influence score suggests that while you consider external advice and trends, your financial decisions are primarily based on your own reasoning. You may consult others but ultimately rely on your personal assessment to guide your actions. This level of independence is beneficial for confidence in financial decision-making, but maintaining a balance by considering credible external input can sometimes offer valuable insights.",
//     "A Neutral score in Influence means you balance your internal convictions with external input in financial decision-making. You value your own ideas but also recognize the benefits of external advice, allowing for a diversified approach to financial strategies. This balance helps you adapt to various financial scenarios effectively, making informed yet personal decisions.",
//     "Scoring as External indicates that your financial decisions are significantly influenced by others, including experts, peers, and prevailing trends. You often seek advice and may rely heavily on recommendations from trusted sources. While this can keep you informed of current trends and ideas, it's essential to critically assess all advice to ensure it aligns with your financial goals.",
//     "Highly External scorers are deeply influenced by external factors in their financial decisions, often prioritizing popular opinion and trends over personal judgment. You may find security in following the crowd or an expert’s guidance. To maintain a healthy financial perspective, it’s crucial to develop your ability to evaluate external influences critically, ensuring they complement your financial objectives without compromising your autonomy."
//   ],
//     "Knowledge": [
//     "As a Novice, you have yet to truly dig into your financial journey, concepts, and products, which may limit your ability to make fully informed decisions. It's essential to begin building a foundational knowledge of basic financial principles, such as budgeting, saving, and the importance of credit scores. Engaging in financial education resources and seeking guidance from financial literacy programs can accelerate your learning and confidence.",
//     "Beginners have a basic understanding of financial principles but still require further education to effectively navigate more complex financial decisions. You are familiar with simple budgeting and saving strategies but may still need to understand investing or the broader economic factors that could impact your finances. Expanding your knowledge through more detailed financial education courses and practical experience will be beneficial.",
//     "With an Intermediate level of knowledge, you understand fundamental financial concepts and have some experience with more complex issues like investments and loans. You can manage your finances with some confidence and are prepared to explore more sophisticated financial products. Continuing to build your knowledge through advanced courses and staying updated with financial news can help refine your skills.",
//     "Proficient individuals possess a solid understanding of a wide range of financial topics and can make informed decisions across most financial areas. You feel comfortable with various financial instruments and can strategize effectively regarding personal finance management, investments, and retirement planning. To enhance your proficiency, consider deepening your expertise in specific areas of interest or potential growth.",
//     "Knowledgeable individuals have a comprehensive understanding of finance, excelling in various areas, from basic budgeting to complex investment strategies. Your depth of knowledge allows you to navigate the financial landscape with expert insight, making well-informed decisions that optimize your financial potential. Continuing education, mentorship, and active participation in financial communities can further enhance your expertise and keep you at the forefront of new developments."
//   ]
//   }

export default function Results({influenceScore, knowledgeScore,planningScore,spendingHabitsScore,riskToleranceScore,feelingScore, selectedInfluence, selectedEmotion, selectedStrategy}) {
  const [userEmotion, setUserEmotion] = useState("");
  const [userStrategy, setUserStrategy] = useState("");
  const [userInfluence, setUserInfluence] = useState("");
  const [phenotypeResults, setPhenotypeResults] = useState("");

  const {scoreData} = scoreDescriptions;

  const [riskDesc,setRiskDesc ] = useState("");
  const [feelingDesc, setFeelingDesc] = useState("");
  const [spendingDesc,setSpendingDesc ] = useState("");
  const [planningDesc, setPlanningDesc] = useState("");
  const [influenceDesc, setInfluenceDesc] = useState("");
  const [knowledgeDesc, setKnowledgeDesc] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {

  // characteristics
  let influence = '';
  let emotion = '';
  let strategy = '';
  function influenceFxn() {
      if (influenceScore < .63) {
          influence = 'internal';
      }
      else {
          influence = 'external';
      }
  }
  function emotionFxn() {
      if (riskToleranceScore < .41) {
          emotion = 'pessimistic';
      }
      else if (((.41 <= riskToleranceScore)&&(riskToleranceScore < .56)) && feelingScore <.86) {
          emotion = 'pessimistic';
      }
      else if (((.56 <= riskToleranceScore)&&(riskToleranceScore < .64)) && feelingScore <.71) {
          emotion = 'pessimistic';
      }
      else if (((.64 <= riskToleranceScore)&&(riskToleranceScore < .71))&& feelingScore <.56) {
          emotion = 'pessimistic';
      }
      else if (((.71 <= riskToleranceScore)&&(riskToleranceScore < .86))&& feelingScore <.41) {
          emotion = 'pessimistic';
      }
      else if (riskToleranceScore >= 86) {
          emotion = 'optimistic';
      }
      else {
          emotion = 'optimistic';
      }
  }
  function strategyFxn() {
      if (spendingHabitsScore < .41) {
          strategy = 'impulsive';
      }
      else if (((.41 <= spendingHabitsScore)&&(spendingHabitsScore < .56)) &&planningScore<.86) {
          strategy = 'impulsive';
      }
      else if (((.56 <= spendingHabitsScore)&&(spendingHabitsScore < .64)) &&planningScore<.71) {
          strategy = 'impulsive';
      }
      else if (((.64 <= spendingHabitsScore)&&(spendingHabitsScore < .71)) &&planningScore<.56) {
          strategy = 'impulsive';
      }
      else if (((.71 <= spendingHabitsScore)&&(spendingHabitsScore < .86))&&planningScore<.41) {
          strategy = 'impulsive';
      }
      else if (planningScore >= .86) {
          strategy = 'frugal';
      }
      else {
          strategy = 'frugal';
      }
  }

  influenceFxn(); emotionFxn(); strategyFxn();

  if (influence == 'internal') {
    if (emotion == 'pessimistic') {
        if (strategy == 'frugal') {
          setPhenotypeResults(responses.IPF);
        }
        else {
          setPhenotypeResults(responses.IPI);
        }
    }
    else {
        if (strategy == 'frugal') {
          setPhenotypeResults(responses.IOF);
        }
        else {
          setPhenotypeResults(responses.IOI);
        }
    }
}
else {
    if (emotion == 'pessimistic') {
        if (strategy == 'frugal') {
          setPhenotypeResults(responses.EPF);
        }
        else {
          setPhenotypeResults(responses.EPI);

        }
    }
    else {
        if (strategy == 'frugal') {
          setPhenotypeResults(responses.EOF);
        }
        else {
          setPhenotypeResults(responses.EOI);
        }
    }
}
function setSingleFactor(num, setFxn, obj) {
  if (num <= .40) {
      setFxn(obj.low);
  }
  else if ((.41 <= num)&&(num <= .55)) {
      setFxn(obj.below);
  }
  else if ((.56 <= num)&&(num <= .70)) {
      setFxn(obj.middle);
  }
  else if ((.71 <= num)&&(num <= .85)) {
      setFxn(obj.above);
  }
  else {
      setFxn(obj.high);
  }
}
setSingleFactor(riskToleranceScore, setRiskDesc,   scoreDescriptions[0]);
setSingleFactor(feelingScore, setFeelingDesc, scoreDescriptions[1]);
setSingleFactor(spendingHabitsScore, setSpendingDesc, scoreDescriptions[2]);
setSingleFactor(planningScore, setPlanningDesc, scoreDescriptions[3]);
setSingleFactor(influenceScore, setInfluenceDesc, scoreDescriptions[4]);
setSingleFactor(knowledgeScore, setKnowledgeDesc, scoreDescriptions[5]);

  // const newObj2 = {influence: influence, emotion: emotion, strategy:strategy};
  // characterScores = JSON.stringify(newObj2);
}, []);

const handleBoxClick = (content) => {
  setModalContent(content);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

return (
  <div style={styles.container}>
    <div style={styles.topSection}>
      <div style={styles.titleBox}>
        <h1 style={styles.title}>{phenotypeResults.title}</h1>
        <p style={styles.subtitle}>{phenotypeResults.titleSubheading}</p>
      </div>
      <div style={styles.imageAndTraits}>
        <Image src={phenotypeResults.image} alt="Phenotype Image" style={styles.phenotypeImage} />
        <div style={styles.traitsContainer}>
          <div style={styles.typeBox}>
            <h2 style={styles.typeTitle}>{phenotypeResults.typeOneTitle}</h2>
            <p style={styles.typeSubtitle}>{phenotypeResults.typeOneSubheading}</p>
          </div>
          <div style={styles.typeBox}>
            <h2 style={styles.typeTitle}>{phenotypeResults.typeTwoTitle}</h2>
            <p style={styles.typeSubtitle}>{phenotypeResults.typeTwoSubheading}</p>
          </div>
          <div style={styles.typeBox}>
            <h2 style={styles.typeTitle}>{phenotypeResults.typeThreeTitle}</h2>
            <p style={styles.typeSubtitle}>{phenotypeResults.typeThreeSubheading}</p>
          </div>
        </div>
      </div>
    </div>
    <div style={styles.scoresContainer}>
      <div style={styles.scoreBox} onClick={() => handleBoxClick({title: riskDesc.title, text: riskDesc.text, score: riskToleranceScore, heading: riskDesc.heading})}>
        <div style={styles.scoreContent}>
          <div style={styles.scoreLeft}>
            <div style={styles.scoreTitle}>{riskDesc.title}</div>
            <div style={styles.scoreValue}>{riskToleranceScore}</div>
          </div>
          <div style={styles.scoreRight}>
            <div style={styles.subHeading}>{riskDesc.subHeading}</div>
            <div style={styles.scoreHeading}>{riskDesc.heading}</div>
          </div>
        </div>
      </div>
      <div style={styles.scoreBox} onClick={() => handleBoxClick({title: feelingDesc.title, text: feelingDesc.text, score: feelingScore, heading: feelingDesc.heading})}>
        <div style={styles.scoreContent}>
          <div style={styles.scoreLeft}>
            <div style={styles.scoreTitle}>{feelingDesc.title}</div>
            <div style={styles.scoreValue}>{feelingScore}</div>
          </div>
          <div style={styles.scoreRight}>
            <div style={styles.subHeading}>{feelingDesc.subHeading}</div>
            <div style={styles.scoreHeading}>{feelingDesc.heading}</div>
          </div>
        </div>
      </div>
      <div style={styles.scoreBox} onClick={() => handleBoxClick({title: spendingDesc.title, text: spendingDesc.text, score: spendingHabitsScore, heading: spendingDesc.heading})}>
        <div style={styles.scoreContent}>
          <div style={styles.scoreLeft}>
            <div style={styles.scoreTitle}>{spendingDesc.title}</div>
            <div style={styles.scoreValue}>{spendingHabitsScore}</div>
          </div>
          <div style={styles.scoreRight}>
            <div style={styles.subHeading}>{spendingDesc.subHeading}</div>
            <div style={styles.scoreHeading}>{spendingDesc.heading}</div>
          </div>
        </div>
      </div>
      <div style={styles.scoreBox} onClick={() => handleBoxClick({title: planningDesc.title, text: planningDesc.text, score: planningScore, heading: planningDesc.heading})}>
        <div style={styles.scoreContent}>
          <div style={styles.scoreLeft}>
            <div style={styles.scoreTitle}>{planningDesc.title}</div>
            <div style={styles.scoreValue}>{planningScore}</div>
          </div>
          <div style={styles.scoreRight}>
            <div style={styles.subHeading}>{planningDesc.subHeading}</div>
            <div style={styles.scoreHeading}>{planningDesc.heading}</div>
          </div>
        </div>
      </div>
      <div style={styles.scoreBox} onClick={() => handleBoxClick({title: influenceDesc.title, text: influenceDesc.text, score: influenceScore, heading: influenceDesc.heading})}>
        <div style={styles.scoreContent}>
          <div style={styles.scoreLeft}>
            <div style={styles.scoreTitle}>{influenceDesc.title}</div>
            <div style={styles.scoreValue}>{influenceScore}</div>
          </div>
          <div style={styles.scoreRight}>
            <div style={styles.subHeading}>{influenceDesc.subHeading}</div>
            <div style={styles.scoreHeading}>{influenceDesc.heading}</div>
          </div>
        </div>
      </div>
      <div style={styles.scoreBox} onClick={() => handleBoxClick({title: knowledgeDesc.title, text: knowledgeDesc.text, score: knowledgeScore, heading: knowledgeDesc.heading})}>
        <div style={styles.scoreContent}>
          <div style={styles.scoreLeft}>
            <div style={styles.scoreTitle}>{knowledgeDesc.title}</div>
            <div style={styles.scoreValue}>{knowledgeScore}</div>
          </div>
          <div style={styles.scoreRight}>
            <div style={styles.subHeading}>{knowledgeDesc.subHeading}</div>
            <div style={styles.scoreHeading}>{knowledgeDesc.heading}</div>
          </div>
        </div>
      </div>
    </div>
    <button style={styles.continueBtn}>Continue</button>
    
    {isModalOpen && (
      <div style={styles.modalOverlay}>
        <div style={styles.modalContent}>
          <button style={styles.closeBtn} onClick={closeModal}>X</button>
          <h2>{modalContent.title}</h2>
          <p>{modalContent.text}</p>
        </div>
      </div>
    )}
  </div>
);
}

const styles = {
container: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'white',
  marginTop: '400px'
},
topSection: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: '20px',
},
titleBox: {
  width: '100%',
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#FFD580',
  borderRadius: '10px',
  marginBottom: '20px',
},
title: {
  fontSize: '24px',
  margin: '0 0 10px 0',
},
subtitle: {
  fontSize: '16px',
},
imageAndTraits: {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
},
phenotypeImage: {
  maxWidth: '200px',
  maxHeight: '250px',
  marginRight: '20px',
},
traitsContainer: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
},
typeBox: {
  textAlign: 'left',
  padding: '10px',
  backgroundColor: '#FFD580',
  borderRadius: '10px',
  marginBottom: '10px',
},
typeTitle: {
  fontSize: '18px',
  margin: '0 0 10px 0',
},
typeSubtitle: {
  fontSize: '14px',
},
continueBtn: {
  backgroundColor: '#FFD580',
  color: 'black',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '20px',
},
scoresContainer: {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '50px',
  width: '70%',
  marginBottom: '20px',
},
scoreBox: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#FFD580',
  borderRadius: '10px',
  cursor: 'pointer',
  width: '100%',
},
scoreContent: {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  marginBottom: '10px',
  columnGap: "30px"
},
scoreLeft: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  
},
scoreRight: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: "center",
},
scoreTitle: {
  fontSize: '18px',
  marginBottom: '10px',
  textAlign: "center",
  fontWeight: "bold",
},
scoreValue: {
  fontSize: '24px',
  textAlign: "center",
},
scoreDescription: {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',
},
scoreHeading: {
  fontSize: '14px',
  textAlign: "center",
},
modalOverlay: {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  backgroundColor: '#FFD580',
  padding: '20px',
  borderRadius: '10px',
  width: '80%',
  maxWidth: '500px',
  textAlign: 'center',
  position: 'relative',
},
closeBtn: {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
},
subHeading: {
  textAlign: 'center', // Ensure this property is set for centering
  fontSize: '20px',
  fontWeight: "bold",
  margin: "auto"
},
};


  
  //   return (
  //     <div>
  //       <p>influence {influenceScore}, knowledge {knowledgeScore}, planning {planningScore}, spending habits {spendingHabitsScore}, risk tol {riskToleranceScore}, feeling score {feelingScore}, userEmotion {userEmotion}, userStrategy {userStrategy}, userInfluence {userInfluence}, title {phenotypeResults.title}, Selected Influence: {selectedInfluence}, Selected Emotion: {selectedEmotion}, Selected Strategy: {selectedStrategy} </p>
  //     </div>
  //   );
  // }
  