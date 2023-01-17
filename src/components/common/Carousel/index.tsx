import React, { useState } from 'react'

const Carousel = ({ children }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1)
  }

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="carousel-container">
      <div className="carousel-item">{children}</div>
      <button onClick={handlePrevClick}>Anterior</button>
      <button onClick={handleNextClick}>Siguiente</button>
    </div>
  )
}

export default Carousel
