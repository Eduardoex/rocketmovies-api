import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container  = styled.div`
width: 100%;
height: 100vh;


display: grid;
grid-template-rows: 105px auto;
grid-template-areas: 
"header"
"content";

> main {
  grid-area: content;
  overflow-y: auto;
}

`
export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;



`


export const NewMovie = styled.div`

display: flex;
justify-content: space-between;
 

`

export const Brand = styled.div`
display: flex;
justify-content: center;
align-items: center;

> h1  {
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
}



`


export const NewMovieInside = styled(Link)`
  width: 20%;
  background-color: ${({theme}) => theme.COLORS.SALMON};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin: 16px;
  border-radius: 10px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  
  &:disabled {
    opacity: 0.5;
  }

 SVG{
  width: 25px;
  height: 25px;
 }


` 

export const Section = styled.div`

Button{
  width: 100%;
}


`

