import {Container, Profile, Search , Brand, Test, Logout } from "./styles"
import { Input } from "../Input"
import { useAuth } from "../../hooks/auth"


export function Header(){
  const {signOut, user} = useAuth()
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>


      <Search>
      <Input placeholder="Pesquiser pelo título"/>
      </Search>

      
      
      
      
    
        <Test>
        <div>
         <strong>Eduardo de Lima</strong>
         <span><Logout onClick={signOut}/>Sair</span>
        </div>
         </Test>

      <Profile to="/profile">
      <img 
        src="https://github.com/eduardoex.png " 
        alt="foto do usuário"
      />
      </Profile>
      

    </Container>
  )
}