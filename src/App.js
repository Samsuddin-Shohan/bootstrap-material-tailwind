import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { useState } from 'react';
import { useEffect } from 'react';
import {  Row, Spinner } from 'react-bootstrap';
import Cards from './Components/Cards/Cards';


function App() {
  const [news, setNews ] = useState([]);
  useEffect(()=>{
   fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=c2a383ab4f16437b8b97bb575d6d5ba2').then(res => res.json()).then(data => setNews(data.articles))
  },[])
  console.log(news);
  return (
    <div >
    {news.length === 0 ? <Spinner animation="border" /> :
    
      <Row xs={1} md={3} className="g-4">  
      {
        news.map(nw => <Cards
          news = {nw}
          ></Cards>)
      }  
      </Row>
    } 
      
    </div>
  );
}

export default App;
