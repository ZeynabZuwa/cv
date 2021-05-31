import React from 'react'
import Git from '../SVG/github.svg';
import LinIn from '../SVG/linkedin.svg';
import './Footer.css'

function Footer() {
    return (
        <div className="Footer">

            <section className="Kontakt">
            <h3>Kontakt:</h3>
            
            <h4>
                +46 76 - 558 73 56 <br/>
                zayzuwa@gmail.com <br/>
                Topasgatan 81 <br/>
                421 48 Västra Frölunda <br/>
            </h4>
            </section>

            <section className="FootLänk"> 

                <a href="https://github.com/ZeynabZuwa?tab=repositories"><img className="smallLinks"src={Git} alt="github" width="100px"/> </a>
                <a href="https://www.linkedin.com/in/zeynab-zuwa-618b00162/"><img className="smallLinks" src={LinIn} alt="linkedin" width="100px"/></a> 
                
            </section>
        </div>
    )
}

export default Footer
