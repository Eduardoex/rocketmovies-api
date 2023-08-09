import { Tag } from "../Tag"
import { Container, Stars } from "./styles"
import {  FiStar } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"



export function Movie({data, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
        <Stars>
        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><FiStar/>
        </Stars>
        <p>{data.summary}</p>


      {
        data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                  
                
              
            }
          </footer>
      }
    </Container>
  )
}