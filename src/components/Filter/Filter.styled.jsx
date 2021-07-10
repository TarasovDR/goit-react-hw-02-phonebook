import styled from '@emotion/styled/macro';

export const LabelFilter = styled.label`
  position: relative;
  margin: 0 auto;
  display: block;

  & svg {
    position: absolute;
    top: 44px;
    left: 141px;
    width: 20px;
    height: 20px;
  }
`

export const InputFilter = styled.input`
  height: 40px;
  width: 300px;
  margin-bottom: 20px;
  padding-left: 38px;
  padding-right: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  border: 2px solid #dadada;

  font-size: 1.1rem;
  
  &:focus {
      outline: none;
      border-color: #0079b1;
    }
`