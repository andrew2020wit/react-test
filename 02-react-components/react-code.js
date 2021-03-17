"use strict";

function WelcomeFunction(props) {
  return <h3>WelcomeFunction: Привет, {props.name}</h3>;
}

class WelcomeClass extends React.Component {
  render() {
    return <h3>WelcomeClass: Привет, {this.props.name}</h3>;
  }
}

const element = <WelcomeFunction name="Алиса" />;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h3>Clock Component</h3>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>AppComponent</h1>
      <h2>Components & props</h2>
      <WelcomeFunction name="Алиса" />
      <WelcomeClass name="Базилио" />
      <h2>State</h2>
      <Clock></Clock>
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
