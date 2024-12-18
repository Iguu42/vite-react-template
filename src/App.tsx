import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = async () => {
    const BASE_URL =  import.meta.env.VITE_API_BASE_URL; // Substitua pela sua URL base
    const token = 'eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDIyMkFBQSIsImtpZCI6Imluc18yZmdUVFRvY2tXUm0yZG9FSTNraUEybFA0OXEiLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwczovL2hlcm9pYy1jb3ctNC5hY2NvdW50cy5kZXYiLCJleHAiOjIwNDg5NTk0NDcsImlhdCI6MTczMzU5OTQ0NywiaXNzIjoiaHR0cHM6Ly9oZXJvaWMtY293LTQuY2xlcmsuYWNjb3VudHMuZGV2IiwianRpIjoiNGZiMjRlYjk5YmVhMWY2OTVlMGMiLCJuYmYiOjE3MzM1OTk0NDIsInN1YiI6InVzZXJfMnB0dmp1bFVpZ0JIdW1DeHlIVDhuNDg2YlZOIn0.fE9ZUclnyyI39egS4_86URpoUWjEUgFRVH1uPqPPeltVAKOxAj8sdODQjR9AYjzoZUixwMVhDPCeOIxpQ66e2jVAKUtC1cGy0B6JE0nwJzaiJjaQYs7wN8wO64kttAitRYdBk5c9eqEgwJOcGOFL8apQOXfL_JK5eOVFgc48Q2ZVYCQqBy863b5SVG7YmIckTsW7oYIhDSbsz-tMar7zo63vU-Qqh0SIH1WS6hjt_8Px1bw3jwohqeEpCV2yDgi6YXNAB4Vv8AaamB-PRgFN-tBZbhx2esHso6be5aAYUzqg8YZag4B3EXMWVKfm6xLjQheHkgFDHOUJ2GVjTr9czg';

    const requestBody = {
      eventId: '62977c39-0da9-411b-9f2a-d77fd887f957',
      ticketTypes: [
        { ticketTypeId: 'bf209390-8d17-494f-9c9c-ce630cadf0d2' },
        { ticketTypeId: 'bf209390-8d17-494f-9c9c-ce630cadf0d2' },
      ],
    };

    try {
      const response = await fetch(`${BASE_URL}/purchaseorders`, {
        method: 'POST',
        headers: {
          'authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Resposta da API:', data);
      alert('Requisição realizada com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro ao realizar a requisição.');
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleButtonClick}>
          Fazer Requisição
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
