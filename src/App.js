import React, { useState } from "react";
import birthdays from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(birthdays);
  return (
    <main>
      <section className="container">
        <h3>{`${people.length} Birthdays Today`}</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
};

export default App;
