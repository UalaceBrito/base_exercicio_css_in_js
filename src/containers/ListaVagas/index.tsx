import { useState } from 'react'
import styled from 'styled-components'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { theme } from '../../styles'

const JobList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const EmptyState = styled.p`
  margin-top: 24px;
  padding: 24px;
  color: ${theme.colors.muted};
  text-align: center;
  background: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
`

type Job = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: Job[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Designer de interfaces',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState('')
  const vagasFiltradas = vagas.filter((vaga) =>
    vaga.titulo.toLocaleLowerCase('pt-BR').includes(filtro)
  )

  return (
    <section aria-label="Vagas disponíveis">
      <FormVagas aoPesquisar={setFiltro} />
      {vagasFiltradas.length > 0 ? (
        <JobList aria-live="polite">
          {vagasFiltradas.map((vaga) => (
            <Vaga
              key={vaga.id}
              titulo={vaga.titulo}
              localizacao={vaga.localizacao}
              nivel={vaga.nivel}
              modalidade={vaga.modalidade}
              salarioMin={vaga.salarioMin}
              salarioMax={vaga.salarioMax}
              requisitos={vaga.requisitos}
            />
          ))}
        </JobList>
      ) : (
        <EmptyState role="status">
          Nenhuma vaga encontrada para essa busca.
        </EmptyState>
      )}
    </section>
  )
}

export default ListaVagas
