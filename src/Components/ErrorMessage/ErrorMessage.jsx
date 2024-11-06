import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorMessage = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1> Opps!!!!</h1>
            <p>{err.statusText || err.message} </p>
            {
                err.status === 404 && <div>
                        <p> page is not found</p>
                        <p> Go back where are you from</p>
                        <Link to='/'>  <button>Go Back</button></Link>
                     </div>
            }
        </div>
    );
};

export default ErrorMessage;