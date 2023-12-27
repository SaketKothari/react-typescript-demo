import { useState } from 'react';
import goalImg from './assets/goals.jpg';

import AddGoalForm from './components/AddGoalForm';
import CourseGoalList from './components/CourseGoalList';
import Header from './components/Header';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddClick(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
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
      <AddGoalForm onAddClick={handleAddClick} />

      <CourseGoalList goals={goals} onDeleteHandler={handleDeleteClick} />
    </main>
  );
};

export default App;
