import Button from './components/Button';
import Container from './components/Container';

function App() {
  return (
    <main>
      <Container as={Button} />
    </main>
  );
}

export default App;
