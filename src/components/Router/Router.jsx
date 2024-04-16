/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Estudiantes from '../../pages/estudiantes/Estudiantes'
import Docentes from '../../pages/docentes/Docentes'
import Materias from '../../pages/materias/Materias'
import Usuarios from '../../pages/usuarios/Usuarios'
import App from '../../App'

const Router = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/estudiantes' element={<Estudiantes />} />
				<Route path='/docentes' element={<Docentes/>} />
				<Route path='/materias' element={<Materias />} />
				<Route path='/usuarios' element={<Usuarios />} />

			</Routes>
		</BrowserRouter>
  )
}

export default Router