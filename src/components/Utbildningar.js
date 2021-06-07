import React from 'react'
import Header from '../Header';
import Footer from './Footer';
import './Utbildningar.css';

function Utbildningar() {
    return (
        <div className="Utbildningar">
            <Header />
            <section className="Utb">
            <h3>Objektorienterad systemutveckling, 400 YH-poäng</h3>
            <h4>NBI/Handelsakademin 2020 - Pågående</h4> <br/>
            

            <h3>Produktionsutveckling, 400 YH-poäng</h3>
            <h4>Göteborgs Tekniska College 2017 - 2019</h4><br/>
            

            <h3>MTM-SAM</h3>
            <h4>(Sekvensbaserad Aktivitets & Metodanalys) 2019</h4><br/>
            

            <h3>Six Sigma Green & Yellow belt</h3>
            <h4>Six Sigma 2018</h4><br/>
            

            <h3>Naturvetenskap</h3>
            <h4>International High School of Gothenburg 2007 - 2010</h4><br/>
            



            </section>
            <Footer/>
        </div>
    )
}

export default Utbildningar
