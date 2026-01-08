import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import ProfilePic from './see7.jpg';
import './App.css'

function InfoName() {




  return (
    <div className="container" >
      <nav  >
         <div className="pic">     
          <img src={ProfilePic} alt="my picture" className='image' />
          </div>
 <div className="navBar">
  <a href="#about">ABOUT</a> |
        <a href="#projects">PROJECTS</a> |
        <a href="#contacts">CONTACTS</a>
      </div>
      </nav>

      <section id="about">
        <h2 >About me</h2>
        <address>
          
          <p>
            Jane BATAKARIZA is a young patriotic lady whose vision aligns with
            technology and leadership, aspiring to be a full-stack software engineer.
          </p>
        </address>
      </section>

      <section id="projects" >
        <h2>Projects worked on:</h2>
        <ul>
          
            <a
              href="https://github.com/janebatakariza-hue/Faithfoundation"
              target="_blank"
              rel="noopener noreferrer"
               
            >
              Faith Foundation
            </a>
          
          <br/>
            <a
              href="https://github.com/janebatakariza-hue/coffee-shop"
              target="_blank"
              rel="noopener noreferrer"
              >
              Coffee shop
            </a>
          
        </ul>
      </section>

      <section id="contacts">
        <h2>Contacts</h2>
        <p>
          <Instagram />{' '}
          <a href="https://www.instagram.com/batakariza40/" target="_blank" rel="noopener noreferrer">
            batakariza40
          </a>
        </p>

        <h5><MapPin /> Rwanda – Bugesera</h5>
        <h5>
          <Mail />{' '}
          <a href="mailto:janebatakariza@gmail.com">janebatakariza@gmail.com</a>
        </h5>
        <h5><Phone /> +250727983026</h5>
      </section>

      <h2 >Skills</h2>
      <button className="buttons" >React</button>
      <button className="buttons" >MySQL</button>
      <button className="buttons" >Node.js</button>
      <button  className="buttons">C & C++</button>
      <button className="buttons">HTML & CSS</button>

      <div>
        <button  className="buttonss">Available for work</button>
      </div>

      <footer>
        <a href="https://twitter.com/yourhandle" style={{ margin:'10px'}}><Twitter size={24} /></a>
        <a href="https://linkedin.com/in/yourprofile" style={{ margin:'10px'}}><Linkedin size={24} /></a>
        <a href="https://github.com/janebatakariza-hue" style={{ margin:'10px'}}><Github size={24} /></a>
      </footer>
    </div>
  );
}

export default InfoName;
