import goalImg from './assets/goals.jpg';

import CourseGoal from './components/CourseGoal';
import Header from './components/Header';

const App = () => {
  return (
    <main>
      <Header image={{ src: goalImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">
        <p>Learn from the ground up</p>
      </CourseGoal>
    </main>
  );
};

export default App;
