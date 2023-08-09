import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;


display: grid;
grid-template-rows: 105px auto;
grid-template-areas: 
"header"
"content"
;

> main {
  grid-area: content;
  overflow-y: auto;
}

`

export const Form = styled.form`

max-width: 1130px;
margin: 38px auto;


> header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 36px;
}

> a {
 font-size: 16px;
 color: ${({ theme }) => theme.COLORS.SALMON};
 margin-bottom: 24px;
 display: flex;
 align-items: center;
  
}

> .inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
  padding-bottom: 40px;
   
}

h2 {
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  
}
.tags {
  margin-top: 24px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 16px;
  border-radius: 8px;
}

.buttons {
  padding: 0;
  display: flex;
  gap: 40px;
  > Button {
    margin: 0;
  }

  > button:nth-child(1){
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({theme}) => theme.COLORS.SALMON}
  }
}
`