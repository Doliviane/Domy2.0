// src/components/Footer.js
import React from 'react';
import './footbar.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>Bienvenue sur notre site. Nous offrons les meilleures solutions pour vos besoins.</p>
        </div>

        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@monsite.com</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MonSite. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
