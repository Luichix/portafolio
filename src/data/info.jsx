import React from 'react'
import { GoFile, GoHome, GoPerson, GoProject, GoMail } from 'react-icons/go'
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiFirebase } from 'react-icons/si'
import { GrMysql, GrHeroku } from 'react-icons/gr'
import { BiMap, BiMailSend, BiPhoneCall } from 'react-icons/bi'
import pdfCv from '../assets/pdf/cvoficial.pdf'
import App1 from '../assets/img/app1.png'
import Quesos from '../assets/img/quesos.png'
import Elina from '../assets/img/elina.png'
import Amazon from '../assets/img/amazon.png'
import Barbershop from '../assets/img/barbershop.png'
import Portafolio from '../assets/img/portafolio.png'
import GoDigit from '../assets/img/godigit.png'
import Nomina from '../assets/img/nomina.png'
import Medical from '../assets/img/medical.png'
import Nicafest from '../assets/img/nicafest.png'
// Info Header

export const social = {
  github: 'https://github.com/Luichix',
  twitter: 'https://twitter.com/Luichix_Rex',
  whatsapp:
    'https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web',
  linkedin: 'https://www.linkedin.com/in/luisreynaldopch',
  email: 'mailto:luichix.rex@gmail.com',
}

// Info About

function getEdad(dateString) {
  let hoy = new Date()
  let fechaNacimiento = new Date(dateString)
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--
  }
  return edad
}

export const aboutMe = {
  me: 'Sobre mi',
  paragraph: [
    `Hola, mi nombre es Luis Reynaldo Pérez, soy nicaragüense, tengo actualmente ${getEdad(
      '1995/09/24'
    )} años, 
  inicie en el mundo de la programacion con VBA de Microsoft Excel en el 2017, diseñando diversas plantillas para los 
  registros y controles financieros en una empresa familiar, en el 2018 viaje a panama donde desarolle un proyecto de nomina, en
  cual se importaban los registros horarios desde el sistema de huella digital, se realizaban todas las validaciones y calculos
  necesarios para generar los reportes de planilla y comprobantes de pago de colaboradores, cumpliendo con las normas
  y politicas de la empresa y la legilación de panamá.`,
    `En el 2020 estuve cursando una maestria en el INCAE, pero por motivos 
  ajenos a mi voluntad, me vi obligado a supender los estudios, asi que me dedique a laborar en areas administrativas e ir mejorando
  mis conocimientos sobre analisis de datos y reanudando tambien mis estudios en desarrollo web.`,
  ],
}

export const skill = [
  [
    'Desarrollo Web',
    [
      <FaHtml5 key="html" className="html" />,
      <FaCss3 key="css" className="css" />,
      <SiJavascript key="js" className="js" />,
      <FaReact key="react" className="react" />,
      <FaNodeJs key="node" className="node" />,
      <SiMongodb key="mongo" className="mongo" />,
      <GrMysql key="mysql" className="mysql" />,
      <FaGitAlt key="git" className="git" />,
      <FaGithub key="github" className="github" />,
      <GrHeroku key="heroku" className="heroku" />,
      <SiFirebase key="firebase" className="firebase" />,
    ],
  ],
]

export const document = [
  ['Curriculum Vitae', pdfCv],
  [
    'Reporte Integral de Puesto',
    'https://drive.google.com/file/d/1pgxIPuJX9v2ZyTEMLnksZiFYxZBmBt3-/view?usp=sharing',
  ],
  [
    'Reporte Psicosometrico',
    'https://drive.google.com/file/d/1Bk8qPd3mLH42c1lXI4gNygEakgbM8feU/view?usp=sharing',
  ],
]

// Info Resume

export const resume = [
  [
    'Técnico Medio en Administración de Empresas',
    'Instituto Técnico para la Administración y Economia - INTAE Mercantil de Occidente',
    'Periodo 2010-2012',
    'Finalizado',
  ],
  [
    'Licenciatura en Administración de Empresas',
    'Universidad Nacional Autonoma de Nicaragua - UNAN Leon',
    'Periodo 2013-2017',
    'Finalizado',
  ],
  [
    'Licenciatura en Derecho',
    'Universidad Nacional Autonoma de Nicaragua - UNAN Managua',
    'Periodo 2016-2018',
    'Suspendido',
  ],
  [
    'Maestria en Administración de Empresas',
    'Instituto Centroamericano de Administración de Empresas - INCAE',
    'Periodo 2020-2021',
    'Suspendido',
  ],
]

// Info Portfolio

export const task = [
  [
    'Medical',
    Medical,
    'https://nomina-80522.web.app/',
    'Posiblemente me tomara bastante tiempo',
  ],
  [
    'Nomina',
    Nomina,
    'https://nomina-80522.web.app/',
    'Posiblemente me tomara bastante tiempo',
  ],
  [
    'Quesos El Rey',
    Quesos,
    'https://quesoselrey.com/',
    'Bueno, esta es una página simple, con una aspiración de convertirse en una valiosa tienda en línea. Espero más adelante seguir ampliando esas funcionalidades.',
  ],
  [
    'Elina Closet',
    Elina,
    'https://hidden-reaches-57430.herokuapp.com/',
    'Esta ya tiene material para ser una tienda online, pero no tiene su carrito de compra. Aunque si se pueden administrar los productos.',
  ],
  [
    'Amazon Clone',
    Amazon,
    'https://challenge-1c21a.web.app/',
    'El primer proyecto de práctica, tiene muchos errores y no está completo. Todavía prodria mejorar algunas cosas.',
  ],
  [
    'Nicaragua Festivo',
    Nicafest,
    'https://nicafest-web.vercel.app/',
    'Pagina web diseñada para mostrar las festividades de nicaragua',
  ],
  [
    'Barbershop',
    Barbershop,
    'https://luichix.github.io/barbershop/',
    'Aquí estuve practicando diseño y estructura, no tendrá nada programado pero sí cumplió su papel de práctica en su momento.',
  ],
  [
    'Portafolio',
    Portafolio,
    'https://luichix.github.io/portafolio/',
    'Creo que las nuevas configuraciones que hice son geniales, tiene un diseño muy limpio y mantenible. Me tomé mi tiempo poniendo el color a algunos íconos jeje.',
  ],
  [
    'Nomina Vba',
    App1,
    'https://drive.google.com/file/d/1n9U5PGCsZQkikT7oYOOcLjcVKs2Sk1Ok/view?usp=sharing',
    'Esto de aquí, lo agregué porque sí, también es algo genial. Si lo deseas, envíame un mensaje en el siguiente formulario y te lo enviaré a tu correo.',
  ],
  [
    'Go-Digit',
    GoDigit,
    'https://godigit-app.firebaseapp.com/',
    'Aun estamos trabajando en esto',
  ],
]

// Info Contact

export const personal = [
  [<BiMap key="map" />, 'Ciudad: ', 'Chinandega, Nicaragua'],
  [<BiPhoneCall key="phone" />, 'Teléfono: ', '+ 505 8458-4479'],
  [<BiMailSend key="email" />, 'Email: ', 'luisreynaldo.pch@gmail.com'],
]

export const form = {
  contact: 'Nombre*',
  email: 'Correo*',
  issue: 'Asunto*',
  message: 'Mensaje*',
  submit: 'Enviar',
}
