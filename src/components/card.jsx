function Card (props) { 
    let data = ()=>{
          // axios({
  //   url:"http://apibyashu.herokuapp.com/api/allcakes",
  //   method:"get", 
  // }).then((response)=>{
  //     setCakes(response.data.data)
  // },(error)=>{
  //     console.log(error)
  // })
    }

        return ( 
        <div className="card" style={{width:"17rem"}}>
        <img src={props.data.image} style={{height: "200px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <button className="btn btn-primary" onClick={() => { props.getDetails(props.data) }}>View</button>
        <h5 className="card-title">{props.data.name}</h5> 
        </div>  </div> );
    }
 
export default Card;