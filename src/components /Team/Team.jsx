import React from "react";
import Img1 from "../../Images/team1.jpeg";
import Img2 from "../../Images/team2.jpeg";
import Img3 from "../../Images/team3.jpeg";
import Img4 from "../../Images/team4.jpeg";
import Img5 from "../../Images/team5.jpeg";
import Img6 from "../../Images/team6.jpeg";
import { Element } from "react-scroll";
import {
  TeamContainer,
  TeamList,
  TeamItem,
  ImgWrapper,
  Img,
  Subtitle,
  TeamText,
} from "./Team.styled";
function Team() {
  return (
    <Element name="team">
      <TeamContainer id="Team">
        <Subtitle>Our team</Subtitle>
        <TeamList>
          <TeamItem>
            <ImgWrapper>
              <Img src={Img1} alt="peopels" />
            </ImgWrapper>
            <TeamText>
              DR TOM PENNYBACKER <br />
              Dr Tom Pennybacker is a Consultant Psychiatrist and
              psychotherapist with many years’ experience working in the NHS and
              private sector. In the NHS he was the clinical lead for a team
              delivering complex psychiatric and psychological care to people
              with severe mental disorders. He has extensive experience of
              assessing and treating a wide range of mental health difficulties
              with medications and psychotherapy.
            </TeamText>
          </TeamItem>
          <TeamItem>
            {" "}
            <ImgWrapper>
              <Img src={Img2} alt="peopels" />
            </ImgWrapper>{" "}
            <TeamText>
              DR STEVEN MAHAN <br />
              Dr Steven Mahan is a Clinical Psychologist with many years’
              experience in both the NHS and private sector. Dr Mahan obtained a
              BSc in Psychology with first class honours from the University of
              Plymouth, he then completed his MSc in Neuropsychology at the
              University of Bristol and was awarded his Doctorate in Clinical
              Psychology from the University of Exeter.
            </TeamText>
          </TeamItem>
          <TeamItem>
            {" "}
            <ImgWrapper>
              <Img src={Img3} alt="peopels" />
            </ImgWrapper>{" "}
            <TeamText>
              DR ELENA TOURONI <br />
              Dr Elena Touroni is a skilled and experienced consultant
              psychologist with a track record of delivering high-quality
              services for individuals with all common emotional difficulties
              and those with a diagnosis of personality disorder. She is
              experienced in service design and delivery, the management of
              multi-disciplinary teams, organisational consultancy, and
              development and delivery of both national and bespoke training to
              providers in the statutory and non-statutory sector.
            </TeamText>
          </TeamItem>
          <TeamItem>
            {" "}
            <ImgWrapper>
              <Img src={Img4} alt="peopels" />
            </ImgWrapper>{" "}
            <TeamText>
              DR ANNA SAUNDERS <br />
              Dr Anna Saunders completed her undergraduate degree in psychology
              at University College, London (UCL) with first class honours. She
              also completed her doctorate in Clinical Psychology at UCL in
              2007. Dr Saunders worked in a specialist treatment service in
              central London for the NHS working with complex difficulties for
              many years as well as developing a private practice since 2015.
            </TeamText>
          </TeamItem>
          <TeamItem>
            {" "}
            <ImgWrapper>
              <Img src={Img5} alt="peopels" />
            </ImgWrapper>{" "}
            <TeamText>
              DR ALIKA GOODWIN <br />
              Dr Alika Goodwin obtained a First-class degree in Psychology
              whilst also completing foundation degrees in counselling,
              psychotherapy and group analysis. She then completed her Doctorate
              in Counselling Psychology at City University, University of
              London.
            </TeamText>
          </TeamItem>
          <TeamItem>
            {" "}
            <ImgWrapper>
              <Img src={Img6} alt="peopels" />
            </ImgWrapper>{" "}
            <TeamText>
              AMY O’GORMAN <br />
              Amy has 15 years’ experience as a registered paediatric nurse. She
              has experience of working with young people with complex emotional
              and mental health needs across various setting, including
              community, outpatient, and inpatient settings. In the past, Amy
              has been responsible for leading a nursing team that cares for
              young people aged up to 18 years with eating disorders and other
              associated difficulties in both in inpatient and intensive,
              community-based settings.
            </TeamText>
          </TeamItem>
        </TeamList>
      </TeamContainer>
    </Element>
  );
}

export default Team;
