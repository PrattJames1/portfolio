import React from 'react';
import {DiApple, DiFirebase, DiPhotoshop, DiReact, DiUnitySmall, DiWordpress, DiZend} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id={"tech"}>
      <SectionDivider />
      <br />
          <SectionTitle>Tech</SectionTitle>
          <SectionText>
              I have a range of tech expertise, from web development to game development. I am most comfortable in the frontend.
          </SectionText>
      <List>
          <ListItem>
              <DiReact size="3rem" />
              <ListContainer>
                  <ListTitle>Frontend</ListTitle>
                  <ListParagraph>
                      Typescript, React, Javascript/CSS/HTML, Angular
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size="3rem" />
              <ListContainer>
                  <ListTitle>Backend</ListTitle>
                  <ListParagraph>
                      Java, Spring Boot, C#, ASP.NET Core, Entity Framework
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiPhotoshop size="3rem" />
              <ListContainer>
                  <ListTitle>Tools</ListTitle>
                  <ListParagraph>
                      Azure, Docker, Git, Bash
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiApple size="3rem" />
              <ListContainer>
                  <ListTitle>Mobile</ListTitle>
                  <ListParagraph>
                      Unity, XCode, Maintaining Apps on Hostinger
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
