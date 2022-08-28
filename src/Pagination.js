import React from 'react'
import './Pagination.css';

const Pagination = ({ data, pageHandler }) => {
    let pageNumber = []
    for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
        pageNumber.push(i);
    }
    return (
        <div>
            <center>
                {pageNumber.map(page => <div className='pagebox'
                    onClick={() => pageHandler(page)}>{page}</div>)}
            </center>
        </div>
    )
}
export default Pagination