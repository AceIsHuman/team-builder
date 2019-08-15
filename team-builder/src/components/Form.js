import React, { useState } from 'react'

//name
//email
//role

function Form() {
    const [formData, setFormData] = useState({ name: '', email: '', role: '' })

    return (
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" value={formData.name}/>

            <label for="email">Email</label>
            <input type="text" name="email" value={formData.email}/>

            <label for="role">Role</label>
            <input type="text" name="role" value={formData.role} />
        </form>
    )
}

export default Form;