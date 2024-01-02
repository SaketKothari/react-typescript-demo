import Button from './components/Button';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';
import { useRef } from 'react';

function App() {
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" type="text" label="Name" />
        <Input id="age" type="number" label="Age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
