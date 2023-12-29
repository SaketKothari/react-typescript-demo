type InputProps = {
  label: string;
  id: string;
};

const Input = ({ label, id }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </p>
  );
};

export default Input;
