import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`
  max-width: 500%;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0px 20px rgba(0,0,0, 0.2);
  padding: 60px;
  margin: 60px;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }

  }

  `;

export const Form = styled.form`
  margin-top: 40px ;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#FF0000' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }


  `;



export const List = styled.ul`
  list-style: none;
  margin-top: 20px;  

  li {
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }
  }

  a {
    color: #0D2636;
    text-decoration: none; 
  }


`

export const DeleteButton = styled.button.attrs({
  type: 'button'
})`
  background: transparent;
  color: #0D2636;
  border: 0;
  padding: 8px 7px;
  outline: 0;
  border-radius: 3px;
`


//Animação do Botão - button
const animate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg);
  }

`


export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #0D2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled]{
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props => props.loading &&
    css `
      svg{
        animation: ${animate} 2s linear infinite;
      }
    `

  }

`;



