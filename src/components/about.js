import React from "react";
import cohete from "../assets/img/perfil.png";
import { FcNext, FcDocument } from "react-icons/fc";
import pdfCv from "../assets/pdf/cvoficial.pdf";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Sobre mi</h2>
          <p>
            Hola, mi nombre es Luis Reynaldo, soy administrador de empresas.
            Descubri el mundo de la programación por medio de Excel VBA, con el
            cual desarrolle diversos sistemas de venta, contabilidad y recursos
            humanos para algunas empresas. Puedo decir que me encanta la
            programación y actualmente estoy enfocado en el desarrollo web.
          </p>
        </div>
        <div className="row">
          <Fade left>
            <div className="col-lg-4">
              <img src={cohete} className="img-fluid" alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Desarrollador &amp; Administrador de Empresas</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      <strong>Fecha de nacimiento:</strong> 24/09/1995
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      <strong>Ciudad:</strong> Chinandega, Nicaragua
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      <strong>Cel:</strong> +505 84584479
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      <strong>Email:</strong> luisreynaldo.pch@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <h3>Habilidades</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      HTML, CSS y JavaScript
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      Webpack, Bootstrap, ReactJS
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      NodeJS con Express
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      ORM Sequelize, MySQL - MongoDB
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      Git con Github
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      Programación Excel VBA
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      Analisis de datos con Microsoft Excel
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      Macros, Formularios, Formulas Complejas
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      Manejo de Microsoft Access
                    </li>
                    <li>
                      <i>
                        <FcNext />
                      </i>
                      Jamovi, Tableu, Simulacíon de Monte Carlo
                    </li>
                  </ul>
                </div>
                <span className="cv m-lg-2">
                  <a href={pdfCv} target="_blank" rel="noreferrer">
                    <i>
                      <FcDocument />
                    </i>
                    Curriculum Vitae
                  </a>
                </span>
                <span className="cv m-lg-2">
                  <a
                    href="https://drive.google.com/file/d/1pgxIPuJX9v2ZyTEMLnksZiFYxZBmBt3-/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FcDocument />
                    </i>
                    Reporte Integral de Puesto
                  </a>
                </span>
                <span className="cv m-lg-2">
                  <a
                    href="https://drive.google.com/file/d/1Bk8qPd3mLH42c1lXI4gNygEakgbM8feU/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>
                      <FcDocument />
                    </i>
                    Reporte Psicosometrico
                  </a>
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
