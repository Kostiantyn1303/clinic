import React from "react";
import { Element } from "react-scroll";
import {
  Title,
  List,
  Item,
  Container,
  Span,
  Item1,
  Item2,
} from "./Services.styled";
function Services() {
  return (
    <>
      <Element name="services">
        <Container id="Services">
          <Title>WHAT WE SERVE</Title>
          <List>
            <Item>
              {" "}
              <Span>Acceptance & Commitment Therapy</Span> Acceptance and
              commitment therapy (ACT) is a third wave cognitive-behavioural
              therapy that uses acceptance and mindfulness strategies together
              with commitment and behaviour strategies to help increase your
              psychological flexibility.
            </Item>
            <Item1>
              <Span>Gottman Method Couples Therapy</Span>
              Based on 40 years of research with thousands of couples, Gottman
              Method Couples Therapy is one of the most renowned and best
              established couples therapy approaches in practice today.
              Developed by the psychologists Dr John Gottman and his wife Dr
              Julie Gottman, it’s a structured form of couples therapy which
              focuses on helping couples overcome relationship barriers and
              promote long-lasting, positive changes in their relationship.{" "}
            </Item1>
            <Item2>
              <Span>Dialectical Behavioural Therapy Skills Group</Span>
              Dialectical Behaviour Therapy (DBT) was established by Marsha
              Linehan to help people who deal with distressing emotions and
              experiences by using self-destructive behaviours such as
              self-harm, substance misuse and eating disorders.{" "}
            </Item2>
          </List>
        </Container>
      </Element>
    </>
  );
}

export default Services;
