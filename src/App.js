import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMonster, faTshirt } from '@fortawesome/free-solid-svg-icons';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: 'Niilo',
      quote: 'Jos ei jaksa niin koita vaan jaksaa.',
      color: 'red'
    }
    this.updateQuote = this.updateQuote.bind(this);
  }

  updateQuote() {
    const randomNum = Math.floor(Math.random() * 2);
    
    this.setState({
      author: quoteArray[randomNum].author,
      quote: quoteArray[randomNum].quote,
      color: quoteArray[randomNum].color
    })
  }

  render() {
    return (
      <div id="container" style={{backgroundColor: this.state.color}}>
        <div id="box" className="App">
          <div id="quoteBox">
            <h1 style={{color: this.state.color}}>{this.state.quote}</h1>
          </div>
          <div id="icons">
            <a href="https://tumblr.com/new"><FontAwesomeIcon style={{color: this.state.color}} icon={ faTshirt }/></a>
            <a href="https://twitter.com/intent/tweet"><FontAwesomeIcon style={{color: this.state.color}} icon={ faTruckMonster }/></a>
          </div>
          <div id="buttonAuthor">
            <p style={{color: this.state.color}} id="author">-{this.state.author}</p>
            <button id="button" onClick={this.updateQuote} style={{backgroundColor: this.state.color}}>New quote</button>
          </div>
        </div>
      </div>
    );
  }

}

const quoteArray = [
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
   author: 'Nelson Mandela', color: 'purple'}, 
  {quote: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney', color: 'blue'},
  {quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.',
   author: 'Steve Jobs', color: 'green'},
   {quote: 'basili'}


];
export default App;
