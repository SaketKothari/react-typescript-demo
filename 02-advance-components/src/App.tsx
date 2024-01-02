import Button from './components/Button';
import Input from './components/Input';
import Form from './components/Form';

function App() {
  return (
    <main>
      <Form>
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
