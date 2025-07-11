import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Picture from './components/Picture';
import Education from './components/Education';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Projects from './components/Projects';

function Portfolio() {
  return (
    <>
      <Navbar />
      <header className="header">
        <Picture />
        <div className="intro">
          <h1>Kirubhakar R</h1>
          <p>Front-End Developer | Physics Graduate | Quick Learner</p>
        </div>
      </header>
      <Education />
      <Skills />
      <Courses />
      <Projects />
    </>
  );
}

export default Portfolio;
