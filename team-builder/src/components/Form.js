import React, { useState } from 'react'

function Form(props) {
    const [formData, setFormData] = useState({ name: '', email: '', role: '' })

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.setTeamMembers([...props.teamMembers, formData]);
        console.log('working on it');
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />

            <label htmlFor="role">Role</label>
            <input type="text" name="role" value={formData.role} onChange={handleChange} />

            <button>Submit</button>
        </form>
    )
}

export default Form;