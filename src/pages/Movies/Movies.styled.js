import styled from 'styled-components';

export const SearchForm = styled.form`
  position: relative;
  width: 258px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[5]}px;
`
export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;

  cursor: pointer;
  background-color: transparent;
  border: none;
  
  & svg {
      width: 15px;
      height: 15px;
  }
`