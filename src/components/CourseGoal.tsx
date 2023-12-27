import { type FC, type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children, onDelete, id }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
