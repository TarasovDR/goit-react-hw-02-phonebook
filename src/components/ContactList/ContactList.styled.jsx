import styled from '@emotion/styled/macro';

export const ContactContainer = styled.ul`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  color: black;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

  font-size: 1.1rem;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const ContactButton = styled.button`
  display: flex;
  align-content: center;
  padding: 6px 10px;
  background: linear-gradient(to top, #e0e0e0, #f2f2f2);
  border: none;
  border-radius: 4px;

  &:active{
    transform: scale(0.95);
  }

  & svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    color:#ff1e1e;
  }
`