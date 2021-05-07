import React from 'react'

function pagination(props) {
    const pageNumber = []
    for(let i = 1; i <= Math.ceil(props.totalCakes / props.cakesPerPage); i++){
        pageNumber.push(i)
    }
    console.log("pagi....",props.cakesPerPage,props.totalCakes)
    return (
        <div>
            <ul className="pagination">
                {pageNumber.map(number =>(
                    <li key={number} className="page-item">
                        <a onClick={()=>props.paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default pagination
