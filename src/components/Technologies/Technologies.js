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
              I've worked with a range of different tech, from web development to game development.
          </SectionText>
      <List>
          <ListItem>
              <DiReact size="3rem" />
              <ListContainer>
                  <ListTitle>Front-End</ListTitle>
                  <ListParagraph>
                      Experience with <br />
                      React.js, CSS, Bootstrap
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size="3rem" />
              <ListContainer>
                  <ListTitle>Back-End</ListTitle>
                  <ListParagraph>
                      Experience with <br />
                      Node.js, Express, SQL
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiPhotoshop size="3rem" />
              <ListContainer>
                  <ListTitle>UI/UX</ListTitle>
                  <ListParagraph>
                      Experience with <br />
                      Figma, InVision, Photoshop
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiUnitySmall size="3rem" />
              <ListContainer>
                  <ListTitle>Unity</ListTitle>
                  <ListParagraph>
                      Experience with <br />
                      C#, VR, Multiplayer
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiApple size="3rem" />
              <ListContainer>
                  <ListTitle>Mobile</ListTitle>
                  <ListParagraph>
                      Experience with <br />
                      Swift, XCode, Deploying Apps
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
