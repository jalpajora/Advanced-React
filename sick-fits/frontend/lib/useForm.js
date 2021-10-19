import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { name, value, type, files } = e.target;

    if (type === 'number') {
      value = parseInt(value)
    }

    if (type === 'file') {
      [value] = files;
    }

    setInputs({ 
      ...inputs,
      [name]: value
    })
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => {
      return [key, '']
    }));
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}