import {useState} from "react";

function Form(){
    var data={name :"", email:"",age:""}
    const[inputdata,setInputData]=useState(data);
    function handleData(e){
        setInputData({...inputdata,[e.target.name]: e.target.value});
        console.log(e.target.value);
    }
    return(
        <>
        <form>
        <label>Name:</label>
        <input type="text" name="name" value={inputdata.name} onChange={handleData} ></input>
        <label>Email:</label>
        <input type="text" name="email" value={inputdata.email} onChange={handleData} ></input>
        <label>Age:</label>
        <input type="text" name="age" value={inputdata.age} onChange={handleData} ></input>
        <button>Submit</button>
        </form>
        </>
    );
}
export default Form;