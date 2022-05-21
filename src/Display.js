import Completed from "./Completed";
import Displayitems from "./Displayitems";
import { useEffect, useState } from "react";
import "./Display.css";
function Display() {
  const [inputdate, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [check, setCheck] = useState([]);
  useEffect(()=>{
    console.log("Items form display componet",items)
  }, [items])

  const changeitem = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };
  const additems = () => {
    if (inputdate !== "") {
      setItems((olddata) => {
        return [...olddata, {checked:false,task:inputdate}];
      });
    }
    setInput("");
  };
  const deleteItems = (id) => {
    setItems((olddata) => {
      return olddata.filter((element, index) => {
        return index !== id;
      });
    });
  };

 

  const toggleCheck=(index)=>{
    let arr =[];
    for(let i=0;i<items.length;i++){
      if(i === index){
        arr.push(
          {
          checked: !items[i].checked,
          task: items[i].task
          }
          );
      } else{
        arr.push(items[i]);
      }
      setItems(arr);
    } 
   }
   const showMarkCompleted = () => {
     for(let i =0;i<items.length;i++){
       if(items[i].checked === true){
         return true;
       }
     }
     return false;
   }
   const setComplete =()=>{
    let arr = items.filter((item)=>{
      return  item.checked === false
     });
     setItems(arr);
   }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>TODO LIST</h1>
          <input
            className="inpt"
            type={"text"}
            placeholder={"add items"}
            onChange={changeitem}
            value={inputdate}
          />
          <button className="button1" onClick={additems}>
            +
          </button>

          <ol>
            {items.map((itemlist, index) => {
              return (
                <Displayitems
                  id={index}
                  key={index}
                  text={itemlist.task}
                  onselect={deleteItems}
                  toggleCheck={()=>{toggleCheck(index)}}
                />
              );
            })}
          </ol>
        </div>
        {showMarkCompleted() ? <Completed setComplete={setComplete} />: <></>}
        {/* { itemlist.filter((it)=>{
      if(it.check=== true){
       <Completed  /> 
      }
      
    })
} */}
      </div>
    </>
  );
}
export default Display;
