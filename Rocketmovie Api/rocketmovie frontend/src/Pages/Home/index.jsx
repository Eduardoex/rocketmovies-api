import { Container, Content, NewMovie, NewMovieInside, Brand} from "./styles"
import { FiPlus } from "react-icons/fi"
import { Movie } from "../../Components/Movie"

import { Section } from "../../Components/Section"

import { Header } from "../../Components/Header"

export function Home(){
  return(
    <Container>
      
      <Header/>

     <main>
      <Content>
      <NewMovie>

      <Brand>
      <h1>Meus filmes</h1>
      </Brand>

        <NewMovieInside to="/new">
          <FiPlus/>

          Adicionar filme

        </NewMovieInside>
      </NewMovie>

      <Section >

        <Movie data={{
        title: "Interestellar", 
        summary: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...", 
        
        tags: [
         {id: "1", name: "Ficção Científica"},
         {id: "2", name: "Drama"},
         {id: "3", name: "Família"}]
      }}
      />
     

        <Movie data={{
        title: "Interestellar", 
        summary: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...", 
        
        tags: [
         {id: "1", name: "Ficção Científica"},
         {id: "2", name: "Drama"},
         {id: "3", name: "Família"}]
      }}
      />

        <Movie data={{
        title: "Interestellar", 
        summary: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...", 
        
        tags: [
         {id: "1", name: "Ficção Científica"},
         {id: "2", name: "Drama"},
         {id: "3", name: "Família"}]
      }}
      />  


        </Section>


      </Content>
    </main>

    </Container>
  )
}