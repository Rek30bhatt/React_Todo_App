
import "./Displayitems.css";
function Displayitems(props){
    return (<>
    <div className="display_section">
     <li><input type="checkbox" onChange={props.toggleCheck} checked={props.checked}></input>{props.text} 
     <i  className="fa fa-trash fa-x" aria-hidden="true" 
     onClick={()=>{props.itemDelete(props.id)}} ></i> </li>
     {/* {setCheck(true)?<button>COMPLETED</button>:""} */}
     </div>
    </>)
// const deleteItem=(id)=>{
// console.log(id)
// const updateditem = props.olddata.filter((ele,ind)=>{
//     return ind  !== id

// })

// props.setData(updateditem)

// }
//  return(<>
//     <div className="container1">
//         <div className="inner_section">
   
//       <div className="section" > 
         
//      <li> {props.dataitem}</li>
//     <i  className="fa fa-trash fa-x" aria-hidden="true"  
//      onClick={()=>deleteItem}></i>
//      </div>
      
       
     
 
//     </div>

    
//     </div>
//     </>)
}
export default Displayitems;