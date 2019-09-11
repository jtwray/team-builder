import React, {useState} from "react"

export const Form=( {teammates, setTeamMates} ) => {
    const initialTeamate={name: "", email: "", role: ""};
    const [newTeamMate, setNewTeamMate]=useState( initialTeamate );
    const handleSubmit=event => {
        event.preventDefault();
        ( !newTeamMate.name||
            !newTeamMate.email||
            !newTeamMate.role )? alert( "Please fill in all fields" ):setTeamMates( [newTeamMate, ...teammates] );
        resetForm();
    }
   const handleChange=(event) => {
        setNewTeamMate( {...newTeamMate, [event.target.name]: event.target.value} );
    }
    const resetForm=() => {
        setNewTeamMate( initialTeamate );
    }
    return (
        <>
            <form onSubmit={handleSubmit} >

                <input type="text"
                    name="name"
                    placeholder="teamMate"
                    onChange={handleChange}
                    value={newTeamMate.name} />

                <input type="text"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    value={newTeamMate.email} />

                <input type="text"
                    name="role"
                    placeholder="role"
                    onChange={handleChange}
                    value={newTeamMate.role} />
                    <button type="submit">Submit</button>
            </form>

        </>
    )
}