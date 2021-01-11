import React from 'react'

function BoxTodo({data , onClick}) {
    return (
        <div onClick={onClick} className="card-box">
            <h4>{data.title}</h4>
        </div>
    )
}

export default BoxTodo
