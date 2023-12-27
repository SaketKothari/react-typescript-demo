import { useState } from 'react';
import goalImg from './assets/goals.jpg';

import CourseGoalList from './components/CourseGoalList';
import Header from './components/Header';

export type CourseGoal = {
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

  function handleDeleteClick(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddClick}>Add Goal</button>

      <CourseGoalList goals={goals} onDeleteHandler={handleDeleteClick} />
    </main>
  );
};

export default App;
