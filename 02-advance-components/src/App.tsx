import Button from './components/Button';
import Container from './components/Container';

function App() {
  return (
    <main>
      <Container as={Button} onClick={() => console.log('Clicked')}>
        Click me
      </Container>
    </main>
  );
}

export default App;
