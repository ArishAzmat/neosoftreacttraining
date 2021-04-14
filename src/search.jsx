function Search(props){
        // console.log("ahello im search:",props.data)
        return (  
                <div className="row">
                {props.data?.length> 0 && props.data.map((each, index)=>{
                return (<div className="card" style={{width:"17rem"}}>
                <img src={each.image} style={{height: "200px"}} className="card-img-top" alt="..."/>
                <div className="card-body"> 
                <button className="btn btn-primary" onClick={() => { props.getDetails(each) }}>View</button>
                <h5 className="card-title">{each.name}</h5> 
                </div>  </div>)
              })}
                </div>
            
             );
}

export default Search