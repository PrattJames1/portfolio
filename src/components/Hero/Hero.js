import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome,<br />
                I am James Pratt
            </SectionTitle>
            <SectionText>
                I am a Veteran and Computer Science graduate seeking a job as a Software Engineer. I have experience in C# and mobile development and have a passion for working in the space industry.
            </SectionText>
            <Button onClick={() => window.location = 'https://google.com'}> Learn More </Button>
        </LeftSection>
    </Section>
);

export default Hero;