import Completed from "./Completed";
import Displayitems from "./Displayitems";
import OutputTodo from "./OutputTodo";
import { useEffect, useState } from "react";
import "./Display.css";
function Display() {
  const [inputdate, setInput] = useState("");
  const [items, setItems] = useState([]);
  // const[search,setseatch] = useState("")
  const[completedItems,setCompletedItems]=useState([])
  useEffect(()=>{
    console.log("Items form display componet",items)
  }, [items])

  

  const changeitem = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
    // setseatch(e.target.value)
  };
  const additems = () => {
    if (inputdate !== "") {
      setItems((olddata) => {
        return [...olddata, {checked:false,task:inputdate}];
      });
    }
    else{
      alert("Please enter Todo then press on plus button")
    }
    setInput(""); 
     // return setInput("no data to show")
  };
  
  const deleteItems = (id) => {
    setItems((olddata) => {
      console.log("item deleted")
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
   
  //    if(item.checked === true) {
  //      new_arr.push(item) 
  //       console.log(new_arr)
  //       return  setItems(new_arr);
  // }

  // else
  return item.checked === false
 
});
let new_arr =items.filter((item)=>{
  return item.checked === true
})
// setItems((olddata) => {
//   return [...olddata, {checked:false,task:inputdate}];
// });

setCompletedItems((old)=>{
  return [...old.concat(new_arr)]
})
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
                  checked={itemlist.checked}
                  itemDelete={deleteItems}
                  toggleCheck={()=>{toggleCheck(index)}}
                />
              );
            })}
          </ol>
          {/* {items.filter((val,index)=>{
    if(search === ""){
      return val
    }
    else if(val.toLowerCase().includes(search.toLowerCase())){
      return val
    }
  }).map((val)=>{
    return <p>{val}</p>
  })} */}
        </div>
        {showMarkCompleted() ? <Completed setComplete={setComplete} />: <></>}
        <OutputTodo completedTodos =  {completedItems} />
        
        {/* { itemlist.filter((it)=>{
      if(it.check=== true){
       <Completed  /> 
      }
      
    })
} */}
      </div>
      {/* <div>
        <P>{setItems(new_arr)}</P>
      </div> */}
    </>
  );
}
export default Display;