import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faAtom, faTransgender } from '@fortawesome/free-solid-svg-icons';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      author: 'Dr.Seuss',
      quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
      color: '#0DE4DA'
    }
    this.updateQuote = this.updateQuote.bind(this);
  }

  updateQuote() {
    const randomNum = Math.floor((Math.random() * 5) + 1);
    if (randomNum == this.state.num) {
      if (this.state.num > 6) {
        this.state.num--;
      } else {
        this.state.num++;
      }
    } else {
      this.state.num = randomNum;
    }
    
    this.setState({
      author: quoteArray[this.state.num].author,
      quote: quoteArray[this.state.num].quote,
      color: quoteArray[this.state.num].color
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
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=articleUrl&title=YourarticleTitle&summary=YourarticleSummary&source=YourarticleSource
"><FontAwesomeIcon className="fa-2x" icon={faAtom} style={{color: this.state.color}}></FontAwesomeIcon></a>
            <a href="http://www.twitter.com/share"><FontAwesomeIcon className="fa-2x" icon={faAppleAlt} style={{color: this.state.color}}></FontAwesomeIcon></a>
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
  {quote: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney', color: '#3DE047'},
  {quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.',
   author: 'Steve Jobs', color: 'green'},
   {quote: 'If you want to live a happy life, tie it to a goal, not to people or things.', author: 'Albert Einstein', color: 'orange'},
   {quote: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.', author: 'Henry Ford', color: 'lightgrey'},
   {quote: 'The big lesson in life, baby, is never be scared of anyone or anything.', author: 'Frank Sinatra', color: 'black'}, 
   {quote: 'You can either experience the pain of discipline or the pain of regret. The choice is yours.', author: 'unknown', color: 'brown'}
];
export default App;
