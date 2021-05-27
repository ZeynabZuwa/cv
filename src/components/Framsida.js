import React from 'react';
import Header from '../Header';
import Footer from './Footer';
import './Framsida.css';


function Framsida() {
    return (
        <div className="Framsida">
            <Header />
            <h1>Det här är framsidan</h1>

            <Footer/>
        </div>
    )
}

export default Framsida
