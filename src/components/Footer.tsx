import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Section Newsletter */}
      <div className="newsletter-section">
        <h3>Soyez le premier informé</h3>
        <p>Inscrivez-vous à notre newsletter et laissez-vous surprendre par nos derniers arrivages et promos !</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            S’abonner
          </button>
        </form>
        <p>Plus de 700 000 personnes vous ont précédé</p>
      </div>

      {/* Section Liens utiles */}
      <div className="links-section">
        <div className="links-column">
          <h4>À propos</h4>
          <ul>
            <li><a href="/a-propos">À propos de nous</a></li>
            <li><a href="/mentions-legales">Mentions Légales</a></li>
            <li><a href="/travailler-chez-nous">Travailler chez nous</a></li>
          </ul>
        </div>
        <div className="links-column">
          <h4>Boutiques partenaires</h4>
          <ul>
            <li><a href="/boutiques-partenaires">Liste des boutiques</a></li>
            <li><a href="/devenir-partenaire">Devenir partenaire</a></li>
          </ul>
        </div>
        <div className="links-column">
          <h4>Confidentialité</h4>
          <ul>
            <li><a href="/confidentialite">Politique de confidentialité</a></li>
            <li><a href="/cookies">Gestion des cookies</a></li>
          </ul>
        </div>
        <div className="links-column">
          <h4>Nous Contacter</h4>
          <ul>
            <li><a href="/contact">Formulaire de contact</a></li>
            <li><a href="/service-client">Service client</a></li>
          </ul>
        </div>
      </div>

      {/* Section Droits d'auteur */}
      <div className="copyright-section">
        <p>&copy; 2025 Namine Store. Tous droits réservés BADANE Namine.</p>
      </div>
    </footer>
  );
};

export default Footer;