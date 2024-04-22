import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Years in the software industry', },
  { number: 85, text: 'Software sprints peer reviewed', },
  { number: 5, text: 'Major React components built and deployed', },
  { number: 9, text: 'Years Served in the Air Force'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
