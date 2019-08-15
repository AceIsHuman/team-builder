import React from 'react'

//name
//email
//role

function Form() {
    return (
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" />

            <label for="email">Email</label>
            <input type="text" name="email" />

            <select name="role">
                <option>Backend Engineer</option>
                <option>Frontend Developer</option>
                <option>UX Designer</option>
            </select>
        </form>
    )
}

export default Form;