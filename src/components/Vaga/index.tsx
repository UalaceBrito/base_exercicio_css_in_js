import styled from 'styled-components'
import { theme } from '../../styles'

const JobCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: ${theme.colors.primary};
  background: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;

  &:hover {
    background: #f4e9e7;
    box-shadow: 0 10px 24px rgb(52 39 42 / 9%);
    transform: translateY(-3px);
  }
`

const JobTitle = styled.h3`
  margin-bottom: 14px;
  color: ${theme.colors.text};
  font-size: 1.125rem;
  line-height: 1.35;
`

const JobDetails = styled.ul`
  display: grid;
  gap: 8px;
  color: ${theme.colors.muted};
  font-size: 0.925rem;
  line-height: 1.45;
  list-style: none;
`

const JobDetail = styled.li`
  strong {
    color: ${theme.colors.text};
  }
`

const ApplyLink = styled.a`
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 8px 12px;
  color: ${theme.colors.secondary};
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: 7px;
  transition: color 160ms ease, background 160ms ease;

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.surface};
  }
`

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0
})

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <JobCard>
    <JobTitle>{titulo}</JobTitle>
    <JobDetails>
      <JobDetail>
        <strong>Localização:</strong> {localizacao}
      </JobDetail>
      <JobDetail>
        <strong>Senioridade:</strong> {nivel}
      </JobDetail>
      <JobDetail>
        <strong>Contratação:</strong> {modalidade}
      </JobDetail>
      <JobDetail>
        <strong>Salário:</strong> {currency.format(salarioMin)} -{' '}
        {currency.format(salarioMax)}
      </JobDetail>
      <JobDetail>
        <strong>Requisitos:</strong> {requisitos.join(', ')}
      </JobDetail>
    </JobDetails>
    <ApplyLink href="#">Ver detalhes e candidatar-se</ApplyLink>
  </JobCard>
)

export default Vaga
