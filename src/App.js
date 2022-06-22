

import Button from "./Button"
import Displayitems from './Displayitems';
import {useState} from 'react';
function App() {
  const[display,setDisplay] = useState(["sample"])
   const addcomponent=()=>{
     
    setDisplay([...display ,<Displayitems />])

  }
  return (
  <>
  <div>
<Button onclick={addcomponent} text={"call component"} />
<Displayitems text = {display}  />
  </div>
  </>
  );
}

export default App;
