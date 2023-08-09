import styled from "styled-components"

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.GRAYSALMON};

border: none;
border-radius: 10px;

padding: 22px;
margin-bottom: 16px;

> h1 {
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  color: ${({theme }) => theme.COLORS.WHITE}
}

> footer {
  width: 100%;
  display: flex;
  margin-top: 24px;

}


> SVG {
 

  color: ${({ theme }) => theme.COLORS.SALMON};
  height: 20px;
}

> p {
  display: flex;
  text-align: left;

  color: ${({ theme }) => theme.COLORS.WHITE}
}


`;

export const Stars = styled.div`
display: flex;
color: ${({theme}) => theme.COLORS.SALMON};
size: 12px;
padding: 8px 0 15px 0;
`