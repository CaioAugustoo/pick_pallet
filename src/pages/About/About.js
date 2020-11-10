import React from 'react';
import Header from '../../Components/Header/Header';
import { AboutSection, WhatIs, ForWho } from './style';
import { Container } from '../../style/GlobalStyle';
import Head from "../../Components/Helper/Head/Head";

const About = () => {
  return (
    <Container>
      <AboutSection>
        <Head title="Sobre" /
        <Header />

        <h2>Sobre Pickpallet</h2>

        <WhatIs>
          <h1>O que é Pickpallet?</h1>
          <p>Pickpallet é um site com coleções de paletas criadas por vocês, usuários. Pickpallet é, também um clone do ColorHunt. Pickpallet foi desenvolvido por <a href="https://github.com/CaioAugustoo" target="_blank" rel="noopener noreferrer">Caio Augusto</a>, feito apenas para afins de estudos. Visto que na época Caio estava estudando sobre novas tecnologias para desenvolver aplicações webs, ColorHunt serviu como uma boa inspiração.</p>
        </WhatIs>

        <ForWho>
          <h1>Feito para quem?</h1>
          <p>Pickpallet foi desenvolvido para ajudar os designers e artistas que, muitas vezes, não possuem ideias ou paletas de cores para aplicarem à seus projetos.</p>
        </ForWho>

      </AboutSection>
    </Container>
  );
};

export default About;
