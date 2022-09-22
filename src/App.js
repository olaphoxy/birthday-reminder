import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const onClick = () => {
    setPeople([]);
  };
  return (
    <main>
      <p className="ori">Birthday Staff</p>

      <section className="container">
        <h3 className="heading">{people.length} birthdays today</h3>
        {/* <div className="grid"> */}
        <List people={people} />
        {/* </div> */}

        <button onClick={onClick}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
