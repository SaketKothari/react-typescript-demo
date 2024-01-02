import { useRef } from 'react';
import Input from './components/Input';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="test" label="Test" ref={inputRef} />
    </main>
  );
}

export default App;
