import React, { useEffect, useState } from 'react';
import Card from './components/Card'
import './App.css';

function App() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    queryApi();
  }, [])

  const queryApi = async () => {
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
    const res = await response.json()

    if(res !== null){
      setData(res);
    }
  }

  return (
    <>
      <div className='header'>
        <button onClick={queryApi}>Refresh</button>
      </div>
      <div className="card-grid" >
        { data && data.map((ele: any) => 
          <Card data={ele} />) }
      </div>
    </>
  );
}

export default App;
