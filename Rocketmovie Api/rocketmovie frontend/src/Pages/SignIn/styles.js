import styled from "styled-components"
import cinemaImg from "../../assets/cinema.png"

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;


`;

export const Form = styled.form`
padding: 0 136px;
display: flex;
flex-direction: column;

justify-content: center;
align-items: left;

text-align: center;

> h1 {
  font-size: 48px;
  color: ${({theme}) => theme.COLORS.SALMON};


}

> h2 {
  font-size: 24px;
  margin-top: 84px;
  margin-bottom: 24px;
  display: flex;
  padding-bottom: 48px;
  
 
}

> p {
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  text-align: left;
  
}

Button {
  
  margin: 24px 0;
}


> a {
  margin-top: 124px;
  color: ${({ theme}) => theme.COLORS.SALMON}

}
`

export const Cinema = styled.div`
flex: 1;
background: url(${cinemaImg}) no-repeat center center;
background-size: cover;
`
