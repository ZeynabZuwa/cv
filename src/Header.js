import React from 'react'
import {Link} from 'react-router-dom'
import './components/Header.css'
import Nav from './components/Nav';

function Header() {
    return (
        <div className="Header">
            <Nav />
            <section className="Wrapper">
                <Link className="HeadLänk" to='/'> <h4>Hem</h4> </Link>
                <Link className="HeadLänk" to='/Utbildningar'> <h4>Utbildningar</h4> </Link>
                <Link className="HeadLänk" to='/Arbetslivserfarenhet'> <h4>Arbetslivserfarenhet</h4> </Link>
                <Link className="HeadLänk" to='/OmMig'> <h4>Om mig</h4> </Link>
                
            </section>
            
        </div>
    )
}

export default Header
