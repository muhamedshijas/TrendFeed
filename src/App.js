import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything',
          {
            params: {
              q: 'Apple',
              from: '2023-07-15',
              sortBy: 'popularity',
              apiKey: '0930482b49af437883bb6328392b8e46',
            },
          }
        );
        console.log(response)
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
     <h1>Hi welcome</h1>
    </MDBContainer>
  );
}

export default App;
