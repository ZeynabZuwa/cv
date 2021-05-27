import React, {useState} from 'react';
import './Nav.css';
import ham from '../SVG/hamicon.svg';
import {Link} from 'react-router-dom'

function Nav() {

    const [toogle,setToogle] = useState(false);
    return (
        <div className="NavWrapper">
            <button className="hamburger"onClick={()=> setToogle(!toogle)}>
            <img src={ham} alt="hamburgericon"/>
            </button>
            {
                toogle &&
            <section className="nav">
                <Link className="NavLänk" to='/'> <h4>Hem</h4> </Link>
                <Link className="NavLänk" to='/Utbildningar'> <h4>Utbildningar</h4> </Link>
                <Link className="NavLänk" to='/Arbetslivserfarenhet'> <h4>Arbetslivserfarenhet</h4> </Link>
                <Link className="NavLänk" to='/OmMig'> <h4>Om mig</h4> </Link>

            </section>
            }
        </div>
    )
}

export default Nav
