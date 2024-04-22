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
              I have a range of tech expertise, from web development to game development.
          </SectionText>
      <List>
            <ListItem>
              <DiApple size="3rem" />
              <ListContainer>
                  <ListTitle>Mobile</ListTitle>
                  <ListParagraph>
                      Swift, XCode, Deploying/maintaining apps
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiReact size="3rem" />
              <ListContainer>
                  <ListTitle>Frontend</ListTitle>
                  <ListParagraph>
                      Typescript, React, Angular
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size="3rem" />
              <ListContainer>
                  <ListTitle>Backend</ListTitle>
                  <ListParagraph>
                      Java, Spring boot
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiPhotoshop size="3rem" />
              <ListContainer>
                  <ListTitle>UI/UX</ListTitle>
                  <ListParagraph>
                      Photoshop, Sketch, FreeForm
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiUnitySmall size="3rem" />
              <ListContainer>
                  <ListTitle>Unity</ListTitle>
                  <ListParagraph>
                      C#
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
