import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  { username: "kikobeats", name: "Kiko beats", isFollowing: true },
  { username: "midudev", name: "Miguel Angel Duran", isFollowing: false },
  { username: "vxnder", name: "Vanderhart", isFollowing: true },
  { username: "PacoHdezs", name: "Paco Hdez", isFollowing: true }
]

export function App() {
  //const format = (username) => `@${username}`
  /*
      <TwitterFollowCard username="kikobeats" isFollowing={true} isFollowing={true} />>
      <TwitterFollowCard username="midudev" name="Miguel Angel Duran" isFollowing={false} />
      <TwitterFollowCard username="vxnder" name="Vanderhart" isFollowing />

      En el ejemplo de abajo se utiliza children para pasar el nombre del usuario
  */

      /*
      <section className='App'>
      <TwitterFollowCard username="kikobeats" initialIsFollowing={true} >
        Kiko beats
      </TwitterFollowCard>

      <TwitterFollowCard username="midudev" initialIsFollowing={false}>
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard username="vxnder" initialIsFollowing>
        Vanderhart
      </TwitterFollowCard>
    </section>

    Forma 1 en listas
     users.map(({ username, name, isFollowing }) => (
          <TwitterFollowCard 
            key={username} 
            username={username} 
            initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        ))
      */
  return (
    <section className='App'>
      {
       users.map(user => {
          const { username, name, isFollowing } = user
          
          return (
            <TwitterFollowCard 
              key={username} 
              username={username} 
              initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
      })
      }
    </section>
    
  )
}

export default App