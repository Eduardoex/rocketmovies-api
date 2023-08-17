import { Header } from "../../Components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { Link } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import { MovieItem } from "../../Components/MovieItem"
import { Section } from "../../Components/Section"

import { Button } from "../../Components/Button"


import { Container, Form } from "./styles"


export function New(){

  

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")

  const [description, setDescription] = useState("")

  const [movieTags, setmovieTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

function handleAddTag(){
  setmovieTags(prevState => [...prevState, newTag])
  setNewTag("")
}

function handleRemoveTag(deleted){
  setmovieTags(prevState => prevState.filter(tag => tag !== deleted))
  
  }

  async function handleNewMovie(){
    await api.post("/movieNotes", {
      title, 
      rating, 
      description, 
      movieTags
    });
    alert("Novo Filme adicionado com sucesso")
    navigate("/")
    
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
            <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
            />
            <Input 
            placeholder="Sua nota (de 0 a 5)"
            onChange={ e => setRating(e.target.value)}
            />
          </div>
          <Textarea 
          placeholder="Observações"
          onChange={ e => setDescription(e.target.value)}
          />

         <Section title="Marcadores">
          <div className="tags">
          {
            movieTags.map((tag, index) => (
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
          <Button title="Salvar alterações"onClick={handleNewMovie}/>
          </div>
        </Form>
      </main>
    </Container>
  )
}