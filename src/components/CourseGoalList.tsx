import { type CourseGoal as CGoal } from '../App';

import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
  goals: CGoal[];
};

const CourseGoalList = (props: CourseGoalListProps) => {
  return (
    <div>
      <ul>
        {props.goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
