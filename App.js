import logo from './logo.svg';
import './App.css';
import {Component} from "react";

// function App() {
// const nam="Mohd Junaid"

//   return (
//     <div>
//     <div>
//       <h1 style={{
//         color: "red",
//         textAlign: "center",
//       }}>Hello from the {nam}!</h1>
//     </div>
//       <h2 style={{
//         color: "cyan",
//         textAlign: "center",
//       }}>hello everyone!</h2>
//     </div>
//   )
// }

class App extends Component{
  name="zunaidahmad"
  render(){
    return (
      <div>
        <h1>
          this is {this.name}!
        </h1>
        <div>
          <p>
            it is a para and the name is {this.name}!
          </p>
        </div>
      </div>
    )
  }
}

export default App;
