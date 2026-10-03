import styled from 'styled-components'
import { theme } from '../../styles'

const HeaderBar = styled.header`
  padding: 20px 16px;
  color: ${theme.colors.primary};
  text-align: center;
  background: ${theme.colors.secondary};
  border-bottom: 1px solid ${theme.colors.border};

  h1 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    letter-spacing: -0.04em;
  }
`

const Cabecalho = () => (
  <HeaderBar>
    <h1>EBAC Jobs</h1>
  </HeaderBar>
)

export default Cabecalho
