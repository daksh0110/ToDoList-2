import React, { useState } from "react";
import InputField from "./InputField";
import Card from "./Card";
import Header from "./Header";

function App() {

  const [ToDoItems, setToDoItems] = useState([]);
 
  return (
    <div>
<Header />
  <InputField  ToDoItems ={ToDoItems} setToDoItems={setToDoItems} />
   <div class="container overflow-hidden " >
     <div class="row flex-wrap gy-5  ">
    {ToDoItems.map(item=>{
      return(
      <Card Title= {item.Title} Content={item.Content}  />
    )})}
   </div>
   </div>
   </div>
  );
}

export default App;
