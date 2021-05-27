import React from 'react'
import Header from '../Header';
import Footer from './Footer';
import './OmMig.css';


function OmMig() {
    return (
        <div className="OmMig">
            <Header />
            <section className="MigText">
            <h2>Zeynab Zuwa</h2>
            <p className="Paragraf">Jag är entusiastisk och blir snabbt engagerad i det jag gör. 
                Personlig utveckling är väldigt viktigt för mig för det finns alltid något nytt att lära sig och det finns alltid rum för förbättringar.
                Känslan av att lyckas är något som driver mig och därför är jag alltid mån om att göra ett utmärkt jobb för att kunna uppnå bästa resultat i allt jag gör.    
                Därför valde jag att börja studera till systemutvecklare för att jag gillar det faktum att man kan vara med i hela utvecklingsprocessen.</p>
                </section>
            <Footer/>
            
            
        </div>
    )
}

export default OmMig
