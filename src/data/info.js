import React from 'react'
import { GoFile, GoHome, GoPerson, GoProject, GoMail } from 'react-icons/go'
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiFirebase } from 'react-icons/si'
import { GrMysql, GrHeroku } from 'react-icons/gr'
import access from '../assets/ico/access.ico'
import excel from '../assets/ico/excel.ico'
import vba from '../assets/ico/vba.ico'
import powerbi from '../assets/ico/powerbi.ico'
import tableau from '../assets/ico/tableau.ico'
import jamovi from '../assets/ico/jamovi.ico'
import pdfCv from '../assets/pdf/cvoficial.pdf'
import App1 from '../assets/img/app1.png'

// Info Header

export const social = {
  github: 'https://github.com/Luichix',
  twitter: 'https://twitter.com/Luichix_Rex',
  whatsapp: 'https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web',
  linkedin: 'https://www.linkedin.com/in/luisreynaldopch',
  email: 'mailto:luichix.rex@gmail.com'
}

export const elements = ['Inicio', 'Sobre mi', 'Estudios', 'Portafolio', 'Contacto']
export const icons = [ <GoHome key='home' />, <GoPerson key='person' />, <GoFile key='file' />, <GoProject key='project' />, <GoMail key='mail'/> ]

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

export const about = {
  me : 'Sobre mi',
  paragraph: [`Hola, mi nombre es Luis Reynaldo Pérez, soy nicaragüense, tengo actualmente ${getEdad('1995/09/24')} años, 
  inicie en el mundo de la programacion con VBA de Microsoft Excel en el 2017, diseñando diversas plantillas para los 
  registros y controles financieros en una empresa familiar, en el 2018 viaje a panama donde desarolle un proyecto de nomina, en
  cual se importaban los registros horarios desde el sistema de huella digital, se realizaban todas las validaciones y calculos
  necesarios para generar los reportes de planilla y comprobantes de pago de colaboradores, cumpliendo con las normas
  y politicas de la empresa y la legilación de panamá.`, `En el 2020 estuve cursando una maestria en el INCAE, pero por motivos 
  ajenos a mi voluntad, me vi obligado a supender los estudios, asi que me dedique a laborar en areas administrativas e ir mejorando
  mis conocimientos sobre analisis de datos y reanudando tambien mis estudios en desarrollo web.`]
}

export const skill = [['Desarrollo Web' ,
  [<><FaHtml5 key='html' className='html'/>HTML &nbsp; </>,
    <><FaCss3 key='css' className='css' />CSS &nbsp; </>,
    <><SiJavascript key='js' className='js' />JavaScript &nbsp; </>,
    <><FaReact key='react' className='react'/>ReactJS &nbsp; </>,
    <><FaNodeJs key='node' className='node' />NodeJS &nbsp; </>,
    <><SiMongodb key='mongo' className='mongo'/>MongoDB &nbsp; </>,
    <><GrMysql key='mysql' className='mysql' />MySQL &nbsp; </>,
    <><FaGitAlt key='git' className='git'/>Git &nbsp; </>,
    <><FaGithub key='github' className='github' />Github &nbsp; </>,
    <><GrHeroku key='heroku' className='heroku'/>Heroku &nbsp; </>,
    <><SiFirebase key='firebase' className='firebase'/>Firebase &nbsp; </>]],
[ 'Analisis de datos',
  [<><img className='excel' src={excel} alt='icono excel'/>Excel  &nbsp; </>,
    <><img className='access' src={access} alt='icono access'/>Access  &nbsp; </>,
    <><img className='vba' src={vba} alt='icono vba'/>Vba  &nbsp; </>,
    <><img className='powerbi' src={powerbi} alt='icono powerbi'/>PowerBi  &nbsp; </>,
    <><img className='tableau' src={tableau} alt='icono powerbi'/>Tableau  &nbsp; </>,
    <><img className='jamovi' src={jamovi} alt='icono powerbi'/>Jamovi  &nbsp; </>
  ]]]

export const document = [
  ['Curriculum Vitae',pdfCv],
  ['Reporte Integral de Puesto','https://drive.google.com/file/d/1pgxIPuJX9v2ZyTEMLnksZiFYxZBmBt3-/view?usp=sharing'],
  ['Reporte Psicosometrico','https://drive.google.com/file/d/1Bk8qPd3mLH42c1lXI4gNygEakgbM8feU/view?usp=sharing']
]

// Info Resume

export const resume = [
  ['Técnico Medio en Administración de Empresas',
    'Instituto Técnico para la Administración y Economia - INTAE Mercantil de Occidente',
    'Periodo 2010-2012',
    'Finalizado'],
  ['Licenciatura en Administración de Empresas',
    'Universidad Nacional Autonoma de Nicaragua - UNAN Leon',
    'Periodo 2013-2017',
    'Finalizado'],
  ['Licenciatura en Derecho',
    'Universidad Nacional Autonoma de Nicaragua - UNAN Managua',
    'Periodo 2016-2018',
    'Suspendido'],
  ['Maestria en Administración de Empresas',
    'Instituto Centroamericano de Administración de Empresas - INCAE',
    'Periodo 2020-2021',
    'Suspendido']
]

// Info Portfolio

export const task = [
  ['Sistema de Nomina', App1, '#'],
  ['Sistema de Nomina', App1, '#'],
  ['Sistema de Nomina', App1, '#'],
  ['Sistema de Nomina', App1, '#'],
  ['Sistema de Nomina', App1, '#'],
  ['Sistema de Nomina', App1, '#'],
  ['Sistema de Nomina', App1, '#'],
]

// Info Contact

export const personal = [
  ['Fecha de nacimiento: ', '24/09/1995'],
  ['Ciudad: ', 'Chinandega, Nicaragua'],
  ['Teléfono: ', '+ 505 8458-4479'],
  ['Email: ', 'luisreynaldo.pch@gmail.com']
]