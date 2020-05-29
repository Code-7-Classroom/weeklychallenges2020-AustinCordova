import React from 'react';
// import logo from './logo.svg';
import './App.css';

class BasicInfo extends React.Component{
  render(){
  return (
      <>
        <div>Name: {this.props.name} </div>
        <div>Number: {this.props.phone}</div>
        <div>Date: {this.props.DateOfBirth}</div>
        </>
    )
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      person: [
        {
        name: 'Austin',
        phone: '(707)111-1111',
        DateOfBirth: '10/18/99'},
        {
        name: 'Adrian',
        phone: '(707)233-3333',
        DateOfBirth: '12/5/98'
        },
        {
          name: 'Esteban',
        phone: '(707)432-8473',
        DateOfBirth: '12/5/98'
        },
        {
          name: 'Angel',
        phone: '(707)837-9011',
        DateOfBirth: '12/5/98'
        }
      ]
    }
  }
  render(){
    const person = this.state.person;
    return (
      <div className="container">
         {person.map(el => <BasicInfo name={el.name} phone={el.phone} DateOfBirth={el.DateOfBirth}/> )}
      </div>
    )
  }
}
// Constructor(props){
//   super(props);
// }

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
