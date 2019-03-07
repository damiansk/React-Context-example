import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  return [value, event => setValue(event.target.value)];
}

export default useInput;