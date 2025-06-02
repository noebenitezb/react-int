//Para evaluar username o cualquier otro parametro se puede asignar a una constante o evaluarla directamente entre llaves
//export function TwitterFollowCard({username, name, isFollowing}) {

import { useState } from "react"; //Hooks



export function TwitterFollowCard({children, username, initialIsFollowing}) {
   
  const imageSrc = `https://unavatar.io/x/${username}`

    /*
    const state = useState(false) //useState es un Hook que permite manejar el estado de un componente
    const isFollowingState = state[0] //El primer elemento del array es el estado actual
    const setIsFollowingState = state[1] //El segundo elemento del array es la funcion para actualizar el estado
    Esto es lo mismo que la sola línea de abajo
    */

    const [isFollowing, setIsFollowingState] = useState(initialIsFollowing) //useState es un Hook que permite manejar el estado de un componente
    const text =  isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'

    const handleClick = () => {
        setIsFollowingState(!isFollowing) //Actualiza el estado al valor contrario del actual
    }

    return (
    <article className='tw-follow-card'>
      <header className='tw-follow-card-header'>
        <img
        className='tw-follow-card-avatar'
        alt="Avatar" 
        src={imageSrc} />
        <div className='tw-follow-card-info'>
          <strong>{children}</strong>
          <span className='tw-follow-card-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-follow-card-text'>{text}</span>
          <span className='tw-follow-card-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
    )
}