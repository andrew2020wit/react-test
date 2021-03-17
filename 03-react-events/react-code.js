"use strict";

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("По ссылке кликнули.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Нажми на меня
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "Включено" : "Выключено"}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  // Такой синтаксис гарантирует, что `this` привязан к handleClick.
  // Предупреждение: это экспериментальный синтаксис
  handleClick = () => {
    console.log("значение this:", this);
  };

  render() {
    return <button onClick={this.handleClick}>значение this</button>;
  }
}

class LoggingButton2 extends React.Component {
  // Такой синтаксис гарантирует, что `this` привязан к handleClick.
  // Предупреждение: это экспериментальный синтаксис
  handleClick = (x) => {
    console.log("значение x:", x);
  };

  render() {
    return (
      <button
        onClick={(e) => {
          this.handleClick(5);
        }}
      >
        значение x
      </button>
    );
  }
}

function App() {
  return (
    <div>
      <h1>AppComponent</h1>
      <h2>Events</h2>
      <h3>ActionLink</h3>
      <ActionLink />
      <h3>Toggle</h3>
      <Toggle></Toggle>
      <h3>LoggingButton</h3>
      <LoggingButton></LoggingButton>
      <h3>LoggingButton2</h3>
      <LoggingButton2></LoggingButton2>
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
