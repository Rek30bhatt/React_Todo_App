
import './Completed.css'

function Completed(props){
    return(<>
    <div className='main'>
    <button className="butt" onClick={props.setComplete}>Completed</button>
    
    </div></>)
}
export default Completed   