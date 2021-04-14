function CakeDetails(props) {
    return (
        <div class="jumbotron">
        <h1 class="display-4">{props.cakeDetails.name}</h1>
        <img src={props.cakeDetails.image} alt=""/>
        <hr class="my-4"/>
        <p><b>Price:</b>  {props.cakeDetails.price} </p>
        <p><b>Description:</b> {props.cakeDetails.description}</p>
      </div>)
}

export default CakeDetails