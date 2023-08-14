
import {Container, Profile, Search , Brand, Test, Logout, Test2 } from "./styles"
import { Input } from "../Input"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function Header(){
  const {signOut, user} = useAuth()
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>


      <Search>
      <Input placeholder="Pesquiser pelo título"/>
      </Search>

      
      
      
      <Test2>
        
        <Test>
        <div>
         <strong>{user.name}</strong>
         <Logout onClick={signOut}><p>Sair</p></Logout>
        </div>
        </Test>

      <Profile to="/profile">
      <img 
        src={avatarURL} 
        alt={user.name}
      
      />
      </Profile>
      </Test2>

    </Container>
  )
}



