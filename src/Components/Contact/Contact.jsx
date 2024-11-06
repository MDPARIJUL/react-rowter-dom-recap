import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';



const Contact = () => {
    const datas = useLoaderData();
    const contacts = datas.slice(0, 50)
    console.log(contacts)

    // const navigate = useNavigate();
    // const forwardHandler = () =>{
    //     navigate(`${contact.id}`)
    // }
    return (
        <div>
            <h3>Contact</h3>
            <h3>pappu2024@gmail.com</h3>
            <div className='contacts'>
                {contacts.map(contact => (
                    <div key={contact.id} className='contact'>
                        <h3>{contact.id}</h3>
                        <h3>{contact.title} </h3>
                        <Link to={`${contact.id}`}>See More Details</Link> 
                        <Link to={`${contact.id}`}><button>click Me</button> </Link>
                        <button >Go Forward</button>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Contact;