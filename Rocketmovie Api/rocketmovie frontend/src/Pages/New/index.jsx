import { Header } from "../../Components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { Link } from "react-router-dom"
import { useState } from "react"

import { MovieItem } from "../../Components/MovieItem"
import { Section } from "../../Components/Section"

import { Button } from "../../Components/Button"


import { Container, Form } from "./styles"

export function New(){
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

function handleAddTag(){
  setTags(prevState => [...prevState, newTag])
  setNewTag("")
}

function handleRemoveTag(deleted){
  setTags(prevState => prevState.filter(tag => tag !== deleted))
  
  }

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
          {
            tags.map((tag, index) => (
            <MovieItem 
            key={String(index)} 
            value={tag}
            onClick = {()  => handleRemoveTag(tag)}
            
            />
            ))
          }
          <MovieItem
           $isNew
            placeholder="Novo Marcador"
            onChange={e => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
            />
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