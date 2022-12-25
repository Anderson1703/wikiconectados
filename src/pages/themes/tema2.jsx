import React from 'react'

export default function Tema2() {
  const ruta=window.location.href;
  return (
    <div>
        <h1>Tema2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa voluptatibus blanditiis libero, cupiditate asperiores sapiente dolorum autem voluptas facilis incidunt eligendi, enim commodi tenetur dicta totam. Minima, beatae aperiam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minima dolore consequuntur quaerat error accusamus quidem maxime aliquid similique nostrum eaque, voluptate id sint! Voluptas, non? Nostrum ea ipsum cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maxime, unde officia incidunt modi, porro recusandae ipsa aliquid obcaecati nobis atque rem sequi ea facere! Laborum esse ea tempore modi!
        </p>
        <a href={ruta} target="_blank">{ruta}</a>
    </div>)
}
