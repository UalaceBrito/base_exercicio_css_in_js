import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { GlobalStyle, PageContainer } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <PageContainer>
        <ListaVagas />
      </PageContainer>
    </>
  )
}

export default App
