import { type CourseGoal as CGoal } from '../App';

import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteHandler: (id: number) => void;
};

const CourseGoalList = (props: CourseGoalListProps) => {
  return (
    <div>
      <ul>
        {props.goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={props.onDeleteHandler}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
