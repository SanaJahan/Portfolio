import React, {Component} from 'react';
import '../style/homepage.scss'
import '../style/icon.scss';
import Icon from "./icons";

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>
                <section id="home">
                    <img src={require('../images/sana.jpg')} alt={"Could not display"}/>
                    <h1>Sana Jahan</h1>
                    <p>
                        <div className={"iconPosition"}>
                            <a href={'https://linkedin.com/in/sanajahan'}><Icon icon={"linkedin2"}/></a>
                            <a href={'mailto:jahan.sana18@gmail.com'}><Icon icon={"google"}/></a>
                        </div>
                    </p>
                </section>
                <section id="about">
                    <h1>About</h1>
                    <p>A full stack engineer by experience, a polyglot (in machine and human languages).
                    <p>Currently pursuing Master of Science in Computer Science from Northeastern University.</p></p>
                </section>
                <section id="projects">
                    <ul>
                        <li><a href={'https://www.github.com/SanaJahan'}> <img src={require('../images/github-logo.png')} /></a></li>
                    </ul>
                    <h1><a href={'https://www.github.com/SanaJahan'}>Projects</a></h1>
                </section>
            </div>
        );
    }
}

export default HomePage;
