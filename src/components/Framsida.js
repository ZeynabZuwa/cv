import React, {Component} from 'react';
import Header from '../Header';
import Footer from './Footer';
import './Framsida.css';
import csharp from '../SVG/csharp-original.svg'
import css from '../SVG/css3-original-wordmark.svg'
import html5 from '../SVG/html5-original-wordmark.svg'
import javascript from '../SVG/javascript-original.svg'
import reactpic from '../SVG/react-original-wordmark.svg'
import sql from '../SVG/microsoftsqlserver-plain-wordmark.svg'
import zay from '../SVG/zay.svg'



class  Framsida extends Component {
    
   
    constructor(){
        super();
        this.state = {
          numberOfRepos: 0
    
        }
      }
      componentDidMount() {
        fetch('https://api.github.com/users/ZeynabZuwa/repos')
        .then(response => response.json())
        .then(json => {
            console.log(json.length)
           this.setState({
             numberOfRepos: json.length
           })
        });
      }
    render(){
    return (
        <div className="Framsida">
            <Header />
            <h1>Välkommen <br/> till Zeynab Zuwas CV! <br/> Framtida .NET utvecklare</h1>
            <img className="zay"src={zay} alt="zay" width = "400px" />

           

            <h2>Jag har grundläggande kunskaper inom: </h2>

            <section className="KunskapIkon">
                <img src={csharp} alt="csharp" width = "100px" />
                <img src={css} alt="css" width = "100px" />
                <img src={html5} alt="html5" width = "100px" />
                <img src={javascript} alt="javascript" width = "100px" />
                <img src={reactpic} alt="reactpic" width = "100px" />
                <img src={sql} alt="sql" width = "100px" />
                <p>Jag har {this.state.numberOfRepos} st repos i mitt github!</p>

            </section>

            <Footer/>
        </div>
    )
    }
}

export default Framsida
