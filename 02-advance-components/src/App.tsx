import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />

      <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href="https://google.com" target="_blank">
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;
