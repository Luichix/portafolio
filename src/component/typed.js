import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'

const Instruction = () => {
  const typeTarget = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ['Buenos Dias Mundo', 'Ohaiyoo Sekai', 'Good Morning World'],
      typeSpeed: 50
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span className="text-light" ref={typeTarget} />
}
export default Instruction
