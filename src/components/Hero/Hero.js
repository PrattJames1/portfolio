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
                I am a full-stack Software Engineer with 2 years of on the job experience. I have experience in web apps and mobile development, and have a passion for automating tools for musicians - as a musician myself.
            </SectionText>
            <Button onClick={() => window.location = 'https://www.linkedin.com/in/jamesprattcs/'}> Contact </Button>
        </LeftSection>
    </Section>
);

export default Hero;