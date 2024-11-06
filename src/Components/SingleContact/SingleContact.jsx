import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const SingleContact = () => {
    const params = useParams();
    const value = params.userId;
    console.log(value)
    const navigate = useNavigate()
    const handlerShowMore = () =>{
       navigate(-1)
    }
    
    const singleContact =  useLoaderData();
    console.log(singleContact)
    return (
        <div>
            <h3> {singleContact.id}</h3>
            <h3>{singleContact.title} </h3>
            <button onClick={handlerShowMore}>Go Back</button>
        </div>
    );
};

export default SingleContact;