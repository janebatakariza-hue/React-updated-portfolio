import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import ProfilePic from './see7.jpg';

function InfoName() {
  const StyleWay: React.CSSProperties = {
    background: 'lightgrey',
    color: 'black',
    fontFamily: 'garamond',
    padding: '15px',
    border: '1px solid white',
    borderRadius: '80px',
    height: 'max-content',
    width: 'max-content',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
  };

  return (
    <div style={StyleWay}>
      <nav style={{ width: '1500px', height: '50px', display: 'flex', gap: '100px' }}>
        <a href="#about">ABOUT</a> |
        <a href="#projects">PROJECTS</a> |
        <a href="#contacts">CONTACTS</a>
      </nav>

      <section id="about">
        <h2>About me</h2>
        <address>
          <img src={ProfilePic} alt="my picture" style={{ width: '100px' }} />
          <p>
            Jane BATAKARIZA is a young patriotic lady whose vision aligns with
            technology and leadership, aspiring to be a full-stack software engineer.
          </p>
        </address>
      </section>

      <section id="projects">
        <p>Projects worked on:</p>
        <ul>
          <li>
            <a
              href="https://github.com/janebatakariza-hue/Faithfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Foundation project
            </a>
          </li>
          <li>
            <a
              href="https://github.com/janebatakariza-hue/coffee-shop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coffee shop
            </a>
          </li>
        </ul>
      </section>

      <section id="contacts">
        <h3>Contacts</h3>
        <p>
          <Instagram />{' '}
          <a href="https://www.instagram.com/batakariza40/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>

        <h5><MapPin /> Rwanda – Bugesera</h5>
        <h5>
          <Mail />{' '}
          <a href="mailto:janebatakariza@gmail.com">janebatakariza@gmail.com</a>
        </h5>
        <h5><Phone /> +250727983026</h5>
      </section>

      <h4 style={{ fontSize: '15px' }}>Skills</h4>
      <button>React</button>
      <button>MySQL</button>
      <button>Node.js</button>
      <button>C & C++</button>
      <button>HTML & CSS</button>

      <div>
        <button style={{ background: 'lightgreen' }}>Available for work</button>
      </div>

      <footer>
        <a href="https://twitter.com/yourhandle"><Twitter size={24} /></a>
        <a href="https://linkedin.com/in/yourprofile"><Linkedin size={24} /></a>
        <a href="https://github.com/janebatakariza-hue"><Github size={24} /></a>
      </footer>
    </div>
  );
}

export default InfoName;
