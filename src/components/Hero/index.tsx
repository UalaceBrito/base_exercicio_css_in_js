import styled from 'styled-components'
import { theme } from '../../styles'

const HeroSection = styled.section`
  position: relative;
  display: flex;
  min-height: 300px;
  align-items: center;
  padding: 48px 0;
  color: #fff;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-position: center 42%;
  background-size: cover;

  &::before {
    position: absolute;
    inset: 0;
    background: ${theme.colors.primary};
    content: '';
    opacity: 0.76;
  }

  @media (max-width: 768px) {
    min-height: 220px;
    padding: 32px 0;
  }
`

const HeroContent = styled.div`
  position: relative;
  width: min(100% - 32px, 1024px);
  margin: 0 auto;
`

const HeroTitle = styled.h2`
  max-width: 780px;
  font-family: Gloock, Georgia, serif;
  font-size: clamp(2rem, 6vw, 3rem);
  line-height: 1.12;
  text-wrap: balance;
`

const Hero = () => (
  <HeroSection aria-labelledby="hero-title">
    <HeroContent>
      <HeroTitle id="hero-title">
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </HeroContent>
  </HeroSection>
)

export default Hero
