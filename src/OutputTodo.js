
import "./OutputTodo.css";
function OutputTodo(props){
    return(<>
  <div className="container">  
  <h1>Updated Todo</h1>
<ol>
 {props.completedTodos.map((item,index)=>{
 return  <li key={index}>{item.task}</li>
})}
</ol>
</div>
    </>)
}
export default OutputTodo