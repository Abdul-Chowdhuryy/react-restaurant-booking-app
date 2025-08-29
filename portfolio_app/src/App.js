
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">My Portfolio</div>
        <nav>
          <a href="#landing">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <section id="landing" className="landing">
        <img src="https://via.placeholder.com/150" alt="Avatar" className="avatar"/>
        <h1>John Doe</h1>
        <p>Hi! I'm a web developer passionate about creating awesome apps.</p>
      </section>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
          <div className="project-card">Project 4</div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
