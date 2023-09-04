import { useRef } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const inputRef = useRef<HTMLInputElement | null>(null); // Specify the type as HTMLInputElement | null

  const apiUrl = 'https://api.pawan.krd/v1/chat/completions';

  const requestData = {
    model: 'pai-001-large-beta',
    max_tokens: 100,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      {
        role: 'user',
        content: "Convert this to hinglish मुझे मालॉम नहीं मैं कहां से शुर्वात करो",
      },
    ],
  };

  const headers = {
    'Authorization': `Bearer pk-jEQtwMngkEHrFejbPRgkpAZgIvKvMOUyCWnqsrAFfpgWcwOq`,
    'Content-Type': 'application/json',
  };

  const callFunction = async () => {
    await axios
      .post(apiUrl, requestData, { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const logInputValue = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
      callFunction()
    } else {
      console.error("Input element not found.");
    }
  };

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={logInputValue}>Log Input Value</button>
    </div>
  );
}

export default App;
