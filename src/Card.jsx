function Card(props){
   
    return (
        <div className="col-3 ">
        <div class="p-3 border  rounded customcolor"><h4>{props.Title}</h4> <p>{props.Content}</p> </div>
        </div>
    )
}


export default Card



 
   