import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />

      <p>
        <Button element="button">Button</Button>
      </p>
      <p>
        <Button element="anchor" href="https://google.com" target="_blank">
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;
