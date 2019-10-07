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
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <section id="home">
                    <img src={require('../images/sana.jpg')} alt={"Could not display"}/>
                    <h1>Sana Jahan</h1>
                </section>
                <section id="about">
                    <h1>About</h1>
                    <p>A full stack engineer by experience, a polygot(in machine and human languages) & a Master's student of
                        Computer Science in Northeastern University.</p>
                </section>
                <section id="projects">
                    <h1>Projects</h1>
                    <ul>
                        <li><a href={'https://www.github.com/SanaJahan'}> Project1</a></li>
                        <li><a href={'https://www.github.com/SanaJahan'}> Project2</a></li>
                        <li><a href={'https://www.github.com/SanaJahan'}> Project3</a></li>
                    </ul>
                </section>
                <section id="contact">
                    <h1>Contact</h1>
                    <p>
                        <div className={"iconPosition"}>
                            <a href={'https://linkedin.com/in/sanajahan'}><Icon icon={"linkedin2"}/></a>
                            <a href={'mailto:jahan.sana18@gmail.com'}><Icon icon={"google"}/></a>
                            <a href="#about"><Icon icon={"facebook"}/></a>
                        </div>
                    </p>
                </section>
            </div>
        );
    }
}

export default HomePage;
