import {Link} from 'react-router-dom';
function Card (props) { 
    let data = ()=>{
          // axios({ S
  //   url:"http://apibyashu.herokuapp.com/api/allcakes",
  //   method:"get", 
  // }).then((response)=>{
  //     setCakes(response.data.data)
  // },(error)=>{
  //     console.log(error)
  // })
    }
    

        return ( 
        <div className="card thiscard" style={{width:"17rem"}}>
              <Link to={`cake/${props.data.cakeid}`}>
              <img src={props.data.image} style={{height: "200px"}} className="thisimg card-img-top" alt="..."/>
              </Link> 
        
        <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>  
        </div>  </div> );
    }
 
export default Card;