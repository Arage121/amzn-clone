import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {

  const [ clicked, setClicked ] = useState(false);

  return (
    <div>         
      <Header setClicked={setClicked}/>
      <Main clicked={clicked} />
    </div>
  );
}

export default App;
