<link href='https://fonts.googleapis.com/css?family=Raleway:400,800,300' rel='stylesheet' type='text/css'></link>


import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiPostgresql, SiJavascript } from 'react-icons/si';
import './reset.scss';
import './style.scss';

import cyril from '../../assets/images/cyril.png';
import plia from '../../assets/images/plia.png';
import flo from '../../assets/images/flo.png';
import marie from '../../assets/images/marie.png';
import edouard from '../../assets/images/edouard.png';

const Faces = () => (

  <div className="face-page">
    <div className="face-container">
      <div className="face-title">
        À propos de nous ...
      </div>
      <p className="face-paragraph">
        Nous sommes cinq développeurs.euses Web junior.
      </p>
      <p className="face-paragraph">À l'issue de notre formation de développeur Web Fullstack chez O'clock, nous vous proposons cet univers culinaire cuisiné par nos propres soins.</p>
      <p className="face-paragraph">Ce site est le fruit d'un travail cuisant durant 5 mois d'apprentissage et d'aventure humaine intense.</p>
      <p className="face-paragraph_p">Nos principaux ingrédients ?</p>
      <p className="face-paragraph">Une touche de Node.JS aux petits oignons pour le back-end et une pinçée de gros sel chez React pour le front-end. </p>
      <p className="face-paragraph">Ajoutez un soupçon de matière grise venant d'une brigade sur-motivée, et vous obtenez ce merveilleux projet d'apothéose !</p>
   </div>
    
    
    {/* <section className="face-pictures">
      <figure>
        <img className="face-images" src={image1} alt="Plia" />
        <figcaption className="face-titre-image">Plia Product Owner</figcaption>
      </figure>
      <figure>
        <img className="face-image" src={image} alt="Marie" />
        <figcaption className="face-titre-image">Marie Scrum Master</figcaption>
      </figure>
      <figure>
        <img className="face-image" src={image4} alt="Cyril" />
        <figcaption className="face-titre-image">Cyril Lead Dev Front</figcaption>
      </figure>
      <figure>
        <img className="face-image" src={image3} alt="Edouard" />
        <figcaption className="face-titre-image">Edouard Lead dev back</figcaption>
      </figure>
      </section> */}
      <div className="bigcontent">
      <div className="content">
      <h2 className="name">Edouard</h2>
        <div className="grid">
          <figure className="effect-zoe">
            <img src={edouard} alt="Edouard"/>
            <figcaption>
              <h2>Back-end <span>Lead dev Back</span></h2>
              <p className="icon-links">
                <a href="#"><span className="icon-git"></span><FaGithub /></a>
                <a href="#"><span className="icon-js"><SiJavascript /></span></a>
                <a href="#"><span className="icon-sql"><SiPostgresql /></span></a>
              </p>
              <p className="description">Edouard, Lead-Dev Back est un codeur hors pair ! Sa bonne humeur ajoute à cette équipe un parfait équilibre.</p>
              
            </figcaption>     
          </figure>
          
        </div>
        </div>


        <div className="content">
      <h2>Plia</h2>
        <div className="grid">
          <figure className="effect-zoe">
            <img src={plia} alt="Plia"/>
            <figcaption>
              <h2>Front-end  <span>Product Owner</span></h2>
              <p className="icon-links">
                <a href="#"><span className="icon-react"><FaReact /></span></a>
                <a href="#"><span className="icon-git"><FaGithub /></span></a>
                <a href="#"><span className="icon-js"><SiJavascript /></span></a>
              </p>
              <p className="description">Plia est notre Product Owner.Elle est à l'origine de ce magnifique projet.Son punch et sa débordante imagination nous pousse vers de nouveaux chalenges !</p>
            </figcaption>     
          </figure>
          
        </div>
        </div>


        <div className="content">
      <h2>Marie</h2>
        <div className="grid">
          <figure className="effect-zoe">
            <img src={marie} alt="Marie"/>
            <figcaption>
              <h2>Front-end <span>Scrum Master</span></h2>
              <p className="icon-links">
              
                <a href="#"><span className="icon-react"><FaReact /></span></a>
                <a href="#"><span className="icon-git"><FaGithub /></span></a>
                <a href="#"><span className="icon-js"><SiJavascript /></span></a>
              </p>
              <p className="description">Marie est notre Scrum Master.Elle maîtrise parfaitement le code.Aucune issue ne lui résiste ! Sa douceur apporte la zénitude quand nos esprits bouillonnent !</p>
            </figcaption>     
          </figure>
          
        </div>
        </div>

        <div className="content">
      <h2>Florian</h2>
        <div className="grid">
          <figure className="effect-zoe">
            <img src={flo} alt="Florian"/>
            <figcaption>
              <h2>Back-end <span>Git Master</span></h2>
              <p className="icon-links">
                <a href="#"><span className="icon-git"><FaGithub /></span></a>
                <a href="#"><span className="icon-js"><SiJavascript /></span></a>
                <a href="#"><span className="icon-sql"><SiPostgresql /></span></a>
              </p>
              <p className="description">Florian est un maître dans la maîtrise de Git. Il faut un sang-froid démeusuré pour gérer la lourde responsabilité des merges. Un pilier !</p>
            </figcaption>     
          </figure>
          
        </div>
        </div>

        <div className="content">
          <h2>Cyril</h2>
            <div className="grid">
              <figure className="effect-zoe">
                <img src={cyril} alt="Cyril"/>
               <figcaption>
                 <h2>Front-end <span>Lead Dev Front</span></h2>
                  <p className="icon-links">
                    <a href="#"><span className="icon-react"><FaReact /></span></a>
                    <a href="#"><span className="icon-git"><FaGithub /></span></a>
                    <a href="#"><span className="icon-js"><SiJavascript /></span></a>
                  </p>
                  <p className="description">Codeur du bout du monde, de part sa détermination et son écoute, Cyril apporte ses idées et suggestions.De tempérament calme, il contribue à une entente détendue.</p>
               </figcaption>     
             </figure>
          
            </div>
        </div>
        </div>
    

  </div>
);

export default Faces;
