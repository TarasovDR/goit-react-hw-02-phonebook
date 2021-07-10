import styled from '@emotion/styled/macro';

export const Form = styled.form`
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 450px;
`

export const Label = styled.label`
  position: relative;
  margin: 0 auto;
  display: block;

  & svg {
    position: absolute;
    top: 41px;
    left: 5px;
    width: 24px;
    height: 24px;
  }
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 32px;
  padding-right: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  border: 2px solid #dadada;

  font-size: 1.1rem;
  
  &:focus {
      outline: none;
      border-color: #00b150;
    }
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  background: linear-gradient(to top, #f1f1f1, #ffffff);
  border: none;
  border-radius: 4px;
  font-size: 1.05rem;

  &:active{
    transform: scale(0.95);
  }

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    color:#00b150;
  }
`
