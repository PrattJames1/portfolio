import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 9, text: 'Years Served in the Air Force'},
  { number: 3, text: 'Team Projects Led', },
  { number: 15, text: 'Software Engineering Courses Taken', },
  { number: 3.4, text: 'College GPA', }
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
