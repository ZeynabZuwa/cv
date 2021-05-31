import React from 'react'
import {Link} from 'react-router-dom'
import './components/Header.css'
import Nav from './components/Nav';

function Header() {
    return (
        <div className="Header">
            <Nav />
            <section className="Wrapper">
                <Link className="HeadLänk" to='/'> <h3>Hem</h3> </Link>
                <Link className="HeadLänk" to='/Utbildningar'> <h3>Utbildningar</h3> </Link>
                <Link className="HeadLänk" to='/Arbetslivserfarenhet'> <h3>Arbetslivserfarenhet</h3> </Link>
                <Link className="HeadLänk" to='/OmMig'> <h3>Om mig</h3> </Link>
                
            </section>
            
        </div>
    )
}

export default Header
