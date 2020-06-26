import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
 
export default function Subpage() {
  return (
    <>
        <div className="subpage">
          <h1>O aplikacji</h1>
          <h2> Aplikacja została stworzona na potrzeby zajęć z projektowania stron internetowych. Strona wykorzystuje aktualne dane meterologiczne,
            dlatego w szybki sposób możesz sprawdzić pogodę w każdym zakątku świata!</h2>
          <h3>Wystarczy, że wpiszesz wybrane przez Ciebie miasto :)</h3>
      
        </div>
        
        <Link to="/">Wróć do strony głównej</Link>
        </>
        
    );
   
}