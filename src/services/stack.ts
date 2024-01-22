import html5 from '@Assets/ico/html5.svg'
import css3 from '@Assets/ico/css3.svg'
import javascript from '@Assets/ico/javascript.svg'
import typescript from '@Assets/ico/typescript.svg'
import python from '@Assets/ico/python.svg'
import graphql from '@Assets/ico/graphql.svg'
import react from '@Assets/ico/react.svg'
import reactNative from '@Assets/ico/react-native.svg'
import redux from '@Assets/ico/redux.svg'
import apollo from '@Assets/ico/apollo.svg'
import expressjs from '@Assets/ico/expressjs.svg'
import nextjs from '@Assets/ico/nextjs.svg'
import expo from '@Assets/ico/expo.svg'
import django from '@Assets/ico/django.svg'
import firebase from '@Assets/ico/firebase.svg'
import nodejs from '@Assets/ico/nodejs.svg'
import mongo from '@Assets/ico/mongo.svg'
import mysql from '@Assets/ico/mysql.svg'
import postgresql from '@Assets/ico/postgresql.svg'
import sqlite from '@Assets/ico/sqlite.svg'
import figma from '@Assets/ico/figma.svg'
// import confluence from '@Assets/ico/confluence.svg'
import jira from '@Assets/ico/jira.svg'
import eslint from '@Assets/ico/eslint.svg'
import fastapi from '@Assets/ico/fastapi.svg'
import astro from '@Assets/ico/astro.svg'
import svelte from '@Assets/ico/svelte.svg'
import linux from '@Assets/ico/linux.svg'
import tailwind from '@Assets/ico/tailwind.svg'
import vba from '@Assets/ico/vba.svg'
import excel from '@Assets/ico/excel.svg'
import powerbi from '@Assets/ico/powerbi.svg'
import git from '@Assets/ico/git.svg'
import jest from '@Assets/ico/jest.svg'
import storybook from '@Assets/ico/storybook.svg'
import java from '@Assets/ico/java.svg'

const list: Stack[] = []

interface Stack {
  element: string
  domain: string
}

export const USING_STACK = [
  // Tecnologías de Frontend
  html5,
  css3,
  javascript,
  typescript,
  react,
  reactNative,
  redux,
  nextjs,
  tailwind,
  storybook,

  // Tecnologías de Backend
  nodejs,
  expressjs,
  graphql,
  apollo,
  firebase,
  jest,

  // Bases de Datos
  mongo,
  mysql,
  postgresql,
  sqlite,

  // Tecnologías adicionales
  expo,
  python,
  fastapi,
  astro,
]

export const LEARNING_STACK = [java, django, svelte]
export const OTHER_STACK = [
  // Tecnologías de desarrollo y sistemas operativos
  git,
  linux,
  eslint,
  vba,
  excel,
  powerbi,
  //  Herramientas de diseño y gestión de proyectos
  figma,
  jira,
]
