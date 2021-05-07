import axios from "axios"
import Card from './card'
import Pagination from './pagination'
import { useState,useEffect } from "react"
function Admin(){
    let [cakes, setCakes] = useState([])
    let [currentPage,setCurrentPage] = useState(1)
    let [cakesPerPage] = useState(10)
    //axios
    useEffect(() => {
        axios({
           url: "https://apifromashu.herokuapp.com/api/allcakes",
           method: "get",
         }).then((response) => {
           setCakes(response.data.data)
           console.log(response.data.data)
         }, (error) => {
           console.log(error)
         }) 
       }, [])
       const indexOflast  = currentPage * cakesPerPage
       const indexOfFirst = indexOflast - cakesPerPage
       const currentCakes = cakes.slice(indexOfFirst, indexOflast)
    //axios
   
    return (
    <div> Page {currentPage}
    <div style={{marginLeft:"40%"}}>
      <Pagination cakesPerPage={cakesPerPage} totalCakes={cakes.length} paginate={setCurrentPage}/>
      </div>
        <div className="row">
        {currentCakes?.length > 0 && currentCakes.map((each, index) => {
          return (<Card data={each} key={index} />)
        })}
      </div>
      <div style={{marginLeft:"40%"}}>
      <Pagination cakesPerPage={cakesPerPage} totalCakes={cakes.length} paginate={setCurrentPage}/>
      </div>
     
    </div>)
}
export default Admin