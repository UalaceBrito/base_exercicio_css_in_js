import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles'

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  margin-top: 40px;
  padding: 24px;
  background: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgb(52 39 42 / 6%);

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    margin-top: 24px;
    padding: 16px;
  }
`

const SearchInput = styled.input`
  width: 100%;
  min-width: 0;
  height: 44px;
  padding: 0 14px;
  color: ${theme.colors.text};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 7px;

  &::placeholder {
    color: ${theme.colors.muted};
  }
`

const SearchButton = styled.button`
  min-height: 44px;
  padding: 0 20px;
  color: ${theme.colors.secondary};
  font-weight: 700;
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: 7px;
  cursor: pointer;
  transition: background 160ms ease, transform 160ms ease;

  &:hover {
    background: #8f5e69;
    transform: translateY(-1px);
  }
`

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    aoPesquisar(termo.trim().toLocaleLowerCase('pt-BR'))
  }

  return (
    <SearchForm role="search" onSubmit={aoEnviarForm}>
      <SearchInput
        aria-label="Pesquisar vagas"
        placeholder="Front-end, fullstack, node, design"
        onChange={(event) => setTermo(event.target.value)}
        type="search"
        value={termo}
      />
      <SearchButton type="submit">Pesquisar</SearchButton>
    </SearchForm>
  )
}

export default FormVagas
