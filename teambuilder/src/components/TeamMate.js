import React from "react"
export function TeamMate({teammates}) {
    return (
        <>
            {teammates.map((tm, index)=> (
            <div key={index}>
                <h2>{tm.name}</h2>
                <ul>
                    <li>{tm.email}</li>
                    <li>{tm.role}</li>
                </ul>
            </div>))}
        </>
    )
}