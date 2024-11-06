import React from 'react';
import '../../App.css'

import '../Home/Home.css'
console.log()
import { Link, NavLink, Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Home = () => {
    const todos = useLoaderData();
    const navigation = useNavigation()
    console.log(navigation)
    return (
       <div className=''>
            <nav className='nav-bar'> 
                <h3>Programming hero</h3>
                <ul className=''>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <Link to='contact'>Contact</Link>
                    <Link to='pages'>Pages</Link>
                    <Link to='post'>Posts</Link>
                </ul>
           
            </nav>
            <h1>Todos{todos.length}</h1>
            {
                navigation.state === 'loading' ? <p> loading......</p>: <Outlet></Outlet>
            }

           
            <Footer></Footer>
            
       </div>
    );
};

export default Home;