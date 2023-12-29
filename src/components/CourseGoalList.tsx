import { type ReactNode } from 'react';
import { type CourseGoal as CGoal } from '../App';

import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteHandler: (id: number) => void;
};

const CourseGoalList = (props: CourseGoalListProps) => {
  if (props.goals.length === 0) {
    return <InfoBox mode="hint">You've no goals yet. Start adding!</InfoBox>;
  }

  let warningBox: ReactNode;

  if (props.goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {props.goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDelete={props.onDeleteHandler}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
