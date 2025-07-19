import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log("Component mounted"); // Step 6 log

    fetch('http://localhost:3000/api/ping')
      .then(res => res.json())
      .then(data => {console.log('API response:', data); //step 6 log
      }) // Step 6 log
      .catch(err => {
        console.error('Error fetching API:', err); // Step 7 log
    });
  }, []);

  return <h1>Hello from Frontend</h1>;
}
