import React, { useState } from 'react'

//name
//email
//role

function Form() {
    const [formData, setFormData] = useState({ name: '', email: '', role: '' })

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />

            <label for="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />

            <label for="role">Role</label>
            <input type="text" name="role" value={formData.role} onChange={handleChange} />
        </form>
    )
}

export default Form;