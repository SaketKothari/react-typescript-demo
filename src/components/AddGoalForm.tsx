import { useRef, type FormEvent } from 'react';

type AddGoalFormProps = {
  onAddClick: (goal: string, summary: string) => void;
};

const AddGoalForm = ({ onAddClick }: AddGoalFormProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    // Reset the input fields
    event.currentTarget.reset();

    // Calling handleAddClick from here with these two parameters
    onAddClick(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default AddGoalForm;
