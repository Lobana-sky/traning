import React from 'react';
import './App.css';

export default class App extends React.Component {
constructor(props){
  super();
  this.state={
    book:[]
  }
}

componentDidMount(){
fetch('https://learn-co-curriculum.github.io/books-json-example-api/books.json')
.then(res=>res.json())
.then(books=>this.setState({
  book:books.books
}))
}

render(){
  return (
    <div className="App">
      {this.state.book.map(book=><img src={book.img_url} alt={book.title}/>)}
    </div>
  );
}
}

