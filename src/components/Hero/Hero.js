import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hi there,<br />
                I'm James Pratt
            </SectionTitle>
            <SectionText>
                I'm a full-stack Software Engineer with two years of on-the-job experience.<br />
                I built React applications for Aeris LLC and freelance as a frontend developer.
            </SectionText>
            <Button onClick={() => window.location = 'https://www.linkedin.com/in/jamesprattcs/'}> Contact </Button>
        </LeftSection>
    </Section>
);

export default Hero;