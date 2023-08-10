import {React,useRef, useState} from "react";

function InputField( props){

  const [inputvalue ,setinputevalue]=useState({Title:"" ,Content:""});
  const handleButtonClick = (event) => {
    event.preventDefault();
    
    console.log("Button clicked!");
    
    props.setToDoItems(prevItems => [...prevItems, inputvalue]);

    setinputevalue({Title:"" ,Content:""});
  
  };
const HandleChange =(e)=>{
setinputevalue({...inputvalue ,[e.target.name]:e.target.value})
}


    return(
  //     <div className="container text-center S">
  //          <form>
  // <label>Title:</label>
  // <input   type="text" id="Title" name="Title"   value={inputvalue.Title} onChange={HandleChange} /><br />
  // <label>Content:</label>
  // <input   type="text" id="Content" name="Content"   value={inputvalue.Content} onChange={HandleChange} /><br />
  // <button  onClick={handleButtonClick}>Click Me</button>
  // </form>     
  // </div>

  <form>
     <div className="container mt-4 text-center S">
  <div class="form-group row">
 
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" id="Title" name="Title" placeholder="Enter Title"  value={inputvalue.Title} onChange={HandleChange} /><br /> 
    </div>
  </div>
  <div class="form-group row">
   
    <div class="col-sm-10 center">
      <input type="text" class="form-control form-control-lg" id="Content" name="Content"  placeholder="Enter Content" value={inputvalue.Content} onChange={HandleChange} /><br /> 
    </div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleButtonClick}>Submit</button>
  </div>
</form>
    );
  }

  export default InputField;