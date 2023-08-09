import { Header } from "../../Components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { Link } from "react-router-dom"


import { MovieItem } from "../../Components/MovieItem"
import { Section } from "../../Components/Section"

import { Button } from "../../Components/Button"


import { Container, Form } from "./styles"

export function New(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <Link to="/"><FiArrowLeft/>Voltar</Link>
          <header>
            <h1>Novo filme</h1>
            
          </header>
          <div className="inputs">
            <Input placeholder="Título"  />
            <Input placeholder="Sua nota (de 0 a 5)"  />
          </div>
          <Textarea placeholder="Observações"/>

         <Section title="Marcadores">
          <div className="tags">
          <MovieItem value="react"/>
          <MovieItem $isNew placeholder="Novo Marcador"/>
          </div>
         </Section>


          <div className="buttons">
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  )
}