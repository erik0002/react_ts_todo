import React from 'react'
import Todos from "./components/Todox";

function App() {
  return (
    <div>
      <Todos items={['learn React', 'Learn TypeScript']}/>
    </div>
  );
}

export default App;
