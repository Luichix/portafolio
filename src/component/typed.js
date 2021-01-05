import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'

const Instruction = () => {
  const typeTarget = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ['Programador VBA', 'Gamer', 'Administrador de Empresas'],
      typeSpeed: 50,
      backSpeed: 60,
      backDelay: 800,
      loop: true,
      loopCount: Infinity
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span className="text-light" ref={typeTarget} />
}
export default Instruction
