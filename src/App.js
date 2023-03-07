import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [quote, setQuote]=useState("");
  const [author, setAuthor]=useState("");
  useEffect(()=>{
    getQuote();
  },[]);
  const getQuote=()=>{
    axios.get("https://api.quotable.io/random").then(response =>{
      setQuote(response.data.content);
      setAuthor(response.data.author);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="App">
    <div className='card'>
    <h1 className='head1'>{quote}</h1>
    <h3 className='head2'>By - {author}</h3>
    <button onClick={getQuote} className="buttons">Get Quote</button>
    </div>
    </div>
  );
}

export default App;
