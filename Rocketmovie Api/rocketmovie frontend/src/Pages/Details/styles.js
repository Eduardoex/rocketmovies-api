import styled from "styled-components";

export const Container = styled.div`
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
  padding: 61px 0;

  
}
;


`;

export const Links = styled.ul`
list-style: none;

> li {
  margin-top: 12px;


  a {
    color: ${({ theme }) => theme.COLORS.WHITE}
  }
}

`

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > h1{
    padding-top: 24px;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    display: flex;
    align-items: center;
    padding-right: 100px;

    > svg {
    color: ${({ theme }) => theme.COLORS.SALMON};

   
    height: 20px;
    }

     svg:nth-child(1){
      margin-left: 18px;
     }
  }

  > p {
    font-size: 16px;
    line-height: 21px; 
    padding-top: 24px;
    text-align: justify;

    display: flex;
    align-items: center;

      > img{
        margin-right: 8px ;
      }

      > svg {
        color: ${({ theme }) => theme.COLORS.SALMON};
        margin:0 8px 0 8px;
        
      }
    
      > img {
        
        width: 16px;
        height: 16px;
        border-radius: 50%;


  }
  }

  > Section {
    margin: 0;
    padding: 40px 0 40px 0; 

  > span {
    
      background-color: ${({ theme}) => theme.COLORS.GRAYSALMON};
    
   }
  }

  
  
  
`

export const Back = styled.div`

  display: flex;
  
  align-items: center;

> svg{
  width: 16px;
  height: 16px;

  color: ${({ theme }) => theme.COLORS.SALMON};
  
}
`



