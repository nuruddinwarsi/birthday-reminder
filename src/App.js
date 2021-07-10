import React, { useState } from "react";
import birthdays from "./data";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(birthdays);
  return (
    <React.Fragment>
      <section>
        <h2>{`${people.length} Birthdays Today`}</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </React.Fragment>
  );
};

export default App;
