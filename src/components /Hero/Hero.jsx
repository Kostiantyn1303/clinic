import React from "react";
import { Element } from "react-scroll";
import {
  HeroContainer,
  Title,
  HeroList,
  HeroItem,
  HeroItemText,
} from "./Hero.styled";
function Hero() {
  return (
    <Element name="hero">
      <HeroContainer>
        <Title>Your source for Multiple Solutions</Title>
        <HeroItemText>
          We are a group of professional and experienced psychologists and
          psychiatrists offering private therapy and psychiatry in New Zealand.
          Our approach is tailor-made. From the moment you reach out to us,
          we’re focused on finding you the right support for your circumstances
          and needs. We offer the best cutting-edge therapies that are rooted in
          evidence to empower you to enact meaningful, lasting changes in your
          life. Sessions can be delivered both in-person at one of our clinics
          or online.
        </HeroItemText>
        <HeroList>
          <HeroItem>Individual Therapy</HeroItem>
          <HeroItem>Couples Therapy</HeroItem>
          <HeroItem>Family Therapy</HeroItem>
          <HeroItem>Wellness Retreats</HeroItem>
          <HeroItem>Neuropsychological Assessments</HeroItem>
        </HeroList>
      </HeroContainer>
    </Element>
  );
}

export default Hero;
