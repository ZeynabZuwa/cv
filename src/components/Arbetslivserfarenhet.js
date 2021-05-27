import React from 'react';
import Header from '../Header';
import Footer from './Footer';
import './Arbete.css';

function Arbetslivserfarenhet() {
    return (
        <div className="Arbetslivserfarenhet">
            <Header />
            <section className="Erfarenhet">
            <h3>Montör & Vik. Teamleader, Adient, 2016 - Pågående</h3>
            <ol className="a">
                <li>Arbetar på flexlinen som består av 28 medarbetare.</li>
                <li>Vikarierande teamleader och ansvarar då över hela enheten om 26 operatörer. Ansvar över att säkerställa driften, problemlösning, administration och avrop gällande material till intern inköpsavdelning. </li>                
            </ol>
            <h3>Montör, Johnson Controls, 2015 - 2016</h3>
            <ol className="a">
                <li>Arbetade på flexline som montör/operatör.</li>
                <li>Lärde mig grunderna inom agila metoder - LEAN & Six Sigma. </li>
                <li>Företaget blev senare uppköpt av Adient.</li>                
            </ol>
            <h3>Receptionist & Fritidsledare, ISGR, 2014 - 2015</h3>
            <ol className="a">
                <li>Ansvarade över receptionen, administration och mottagning av besökare. Arbetet krävde noggrannhet, planering och flexibilitet då arbetsdagarnas utmaningar skiljde sig åt från dag till dag. </li>
                <li>Vikarierade även vid ordinarie personals frånvaro som fritidsledare.</li>                
            </ol>
            <h3>Medarbetare, Bjölas Äldreboende, 2014 </h3>
            <ol className="a">
                <li>Ansvarade över att tvätta personalens och de boendes textiler och kläder. </li>                
            </ol>
            <h3>Fritidspedagog, Västra Götalands Landsting, 2011 - 2014</h3>
            <ol className="a">
                <li>Arbetade på olika fritidsgårdar inom Västra Götaland regionen. </li>                
            </ol>
            </section>
            <Footer/>
            
        </div>
    )
}

export default Arbetslivserfarenhet
