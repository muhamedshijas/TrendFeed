import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './app.css'
import { Link } from 'react-router-dom';


function App() {

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 2);
  const dd = String(yesterday.getDate()).padStart(2, '0');
  const mm = String(yesterday.getMonth() + 1).padStart(2, '0'); // January is 0
  const yyyy = yesterday.getFullYear();



  useEffect(() => {
    fetchNewsArticles();
  }, []);

  const fetchNewsArticles = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything',
        {
          params: {
            q: 'Apples&',
            from: `${yyyy}-${mm}-${dd}`,
            sortBy: 'popularity',
            apiKey: "0930482b49af437883bb6328392b8e46",
          },
        }
      );
      setArticles(response.data.articles)
    } catch (error) {
      console.log('Error fetching news articles:', error);
    }

  }

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };


  console.log(articles);
  console.log(selectedArticle);
  return (
    <MDBContainer fluid>

      <div className="navbar">
        <h3>Trend Feed</h3>
        <p>Your Top News  Headlines Are Here.... </p>
      </div>
      <div className="news">
        {articles.map((item) => {
          return <div className="news-card">
            {
              item.urlToImage && <img src={item.urlToImage} alt="" srcset="" />
            }
            <div className="news-detials">
              <h1>{item.title}</h1>
              <b>{item.author}</b>
              <p>Published At: {new Date(item.date).toLocaleDateString()}</p>
              <p>{item.description}</p>
            </div>

          </div>
        })}
      </div>

    </MDBContainer>
  );
}

export default App;
