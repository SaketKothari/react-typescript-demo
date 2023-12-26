import { useState } from 'react';
import goalImg from './assets/goals.jpg';

import CourseGoal from './components/CourseGoal';
import Header from './components/Header';

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddClick() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: 'Learn React + TS',
        description: 'Learn from the ground up',
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddClick}>Add Goal</button>

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
