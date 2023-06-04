import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Footer from './Footer/Footer';


const FeedbackApp = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const renderContent = () => {
    if (total > 0) {
      return (
        <>
          <Section title="Statistics">
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
          <Notification message="Thank you for your feedback!" />
        </>
      );
    } else {
      return <Notification message="There is no feedback" />;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      {renderContent()}
      <Footer />
    </div>
  );
};

export default FeedbackApp;


// import React, { useState } from 'react';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
// import Section from './Section/Section';
// import Notification from './Notification/Notification';
// import Footer from './Footer/Footer';

// const Feedback = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const handleFeedback = option => {
//     setFeedback(prevState => ({
//       ...prevState,
//       [option]: prevState[option] + 1,
//     }));
//   };

//   const countTotalFeedback = () => {
//     const { good, neutral, bad } = feedback;
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const { good } = feedback;
//     const total = countTotalFeedback();
//     return total > 0 ? Math.round((good / total) * 100) : 0;
//   };

//   const total = countTotalFeedback();
//   const positivePercentage = countPositiveFeedbackPercentage();

//   return (
//     <div>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={handleFeedback}
//         />
//       </Section>
//       {total > 0 ? (
//         <Section title="Statistics">
//           <Statistics
//             good={feedback.good}
//             neutral={feedback.neutral}
//             bad={feedback.bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         </Section>
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//       {total > 0 && <Notification message="Thank you for your feedback!" />}
//       <Footer />
//     </div>
//   );
// };

// export default Feedback;

// import { Component } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';
// import { Footer } from './Footer/Footer';

// export default class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total > 0 ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>
//         {total > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//         {total > 0 && <Notification message="Thank you for your feedback!" />}
//         <Footer />
//       </div>
//     );
//   }
// }

// import { useState } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';

// export const App = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const handleFeedback = option => {
//     setFeedback(prevFeedback => ({
//       ...prevFeedback,
//       [option]: prevFeedback[option] + 1,
//     }));
//   };

//   const { good, neutral, bad } = feedback;

//   const countTotalFeedback = () => {
//     const { good, neutral, bad } = feedback;
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const { good } = feedback;
//     const total = countTotalFeedback();
//     return total > 0 ? Math.round((good / total) * 100) : 0;
//   };

//   return (
//     <div>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={handleFeedback}
//         />
//       </Section>
//       {countTotalFeedback() > 0 ? (
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//       {countTotalFeedback() > 0 && (
//         <Notification message="Thank you for your feedback!" />
//       )}
//     </div>
//   );
// };
