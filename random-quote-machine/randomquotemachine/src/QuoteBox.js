// components/QuoteBox.js
import React, { useState, useEffect } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import NewQuoteButton from './NewQuoteButton';
import TwitterShare from './TwitterShare';

function QuoteBox() {
  const [quote, setQuote] = useState({});
  
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(error => console.error('Error fetching quote:', error));
  };

  return (
    <div id="quote-box">
      <QuoteText text={quote.content} />
      <QuoteAuthor author={quote.author} />
      <NewQuoteButton onClick={fetchQuote} />
      <TwitterShare text={quote.content} author={quote.author} />
    </div>
  );
}

export default QuoteBox;
