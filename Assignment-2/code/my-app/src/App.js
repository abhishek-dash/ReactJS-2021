import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <div className="content">
    <img src={employee.profileImg} className='avatar' alt="" />
    <div className="employee_details">
    <h1 className='name'>{employee.name}</h1>
      <div className="location detail">
        <label>Location</label>
        <span>{employee.location}</span>
      </div>
      <div className="bgroup detail">
        <label>Blood Group</label>
        <span>{employee.bloodGroup}</span>
      </div>
      <div className="age detail">
        <label>Age</label>
        <span>{employee.age}</span>
      </div>
    </div>
    </div>

</div>
)
}



export default App;
