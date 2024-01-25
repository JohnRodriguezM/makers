import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <Button variant="contained">Hello world</Button>
  )
}

export default App
