'use client';

  import { useState } from "react";

  export default function App() {
    const [data, setdata] = useState('Click the button to get a joke!');

    const handleAPI = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();

        setdata(data.message);
        console.log(data.message);
      } catch (error) {
        console.error('API Error:', error);
        setdata('Failed to fetch data. Check console.');
      }
    };

    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h1>My Cool API</h1>
        <p style={{ fontSize: '1.5rem', margin: '2rem 0' }}>{data}</p>
        <button
          onClick={handleAPI}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#0070f3',
            color: 'white',
          }}
        >
          Call API
        </button>
      </div>
    );
  }