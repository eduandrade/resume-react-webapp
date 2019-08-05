import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { fetchData } from './ApiClient.js';

class Resume extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <p>{this.props.title}</p>
        </div> */}
        <PersonalInfo />
        <Summary />
        <Background />
      </div>
    );
  }
}

class PersonalInfo extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const resp = await fetchData('/personal-info');
    this.setState({ data: resp });
  }

  render() {
    return (
      <div className="personal-info">
        <h2>
          Name: {this.state.data.fistName} {this.state.data.lastName}
        </h2>
        <h3>Date of Birth: {this.state.data.birthDate}</h3>
        <h3>E-mail: {this.state.data.email}</h3>
      </div>
    );
  }
}

class Summary extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const resp = await fetchData('/summary');
    this.setState({ data: resp });
  }

  render() {
    return (
      <div className="summary">
        <h3>About</h3>
        <p>{this.state.data.about}</p>
      </div>
    );
  }
}

class Background extends React.Component {
  render() {
    return <WorkExperience />;
  }
}

class WorkExperience extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const resp = await fetchData('/background/work-experience');
    this.setState({ data: resp });
  }

  render() {
    return this.state.data.map((el, idx) => (
      <div key={idx} className="work-experience">
        <h3>{el.title}</h3>
        <p>Company: {el.company}</p>
        <p>Location: {el.location}</p>
        <p>
          Start Date: {el.startDate} - End Date: {el.endDate}
        </p>
        <p>Description: {el.description}</p>
      </div>
    ));
  }
}

function App() {
  return <Resume title="Resume React App" />;
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Test!!
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

export default App;
