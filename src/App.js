import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 2);
const dd = String(yesterday.getDate()).padStart(2, '0');
const mm = String(yesterday.getMonth() + 1).padStart(2, '0'); // January is 0
const yyyy = yesterday.getFullYear();

      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything',
          {
            params: {
              q: 'Apple',
              from: `${yyyy}-${mm}-${dd}`,
              sortBy: 'popularity',
              apiKey: '0930482b49af437883bb6328392b8e46',
            },
          }
        );
  
        setData(response.data.articles);
       
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  console.log(data);
  return (
    <MDBContainer fluid>
    {data.map((item)=>{
      return <div className="main">
      <h1>{item.title}</h1>
      {
        item.urlToImage && <img src={item.urlToImage} alt="" srcset="" />
      }
      </div>
    })}
    </MDBContainer>
  );
}

export default App;
