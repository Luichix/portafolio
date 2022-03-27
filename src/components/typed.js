import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'

const Instruction = () => {
  const typeTarget = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        'Analista de datos',
        'Programador web',
        'Administrador de empresas'
      ],
      typeSpeed: 50,
      backSpeed: 40,
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
