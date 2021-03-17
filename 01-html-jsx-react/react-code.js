"use strict";

function function9() {
  return 9;
}

const name1 = "Иван-Царевич";
const element = (
  <div>
    <h3> Здравствуй, {name1}! </h3>
    <p> 2 + 2 = {2 + 2} </p>
    <p> function9 = {function9()} </p>
    <h3>Static time: It is {new Date().toLocaleTimeString()}.</h3>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

// tick
function tick() {
  const element2 = (
    <div>
      <h3>It is {new Date().toLocaleTimeString()}.</h3>
    </div>
  );
  ReactDOM.render(element2, document.getElementById("root2"));
}

setInterval(tick, 1000);
