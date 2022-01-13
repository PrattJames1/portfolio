import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id={"projects"}>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
          {projects.map(({id, image, title, description, tags, source, visit, appstore, video, jar}) => (
              <BlogCard key={id}>
                  <Img src={image} />
                  <TitleContent>
                      <HeaderThree title>{title}</HeaderThree>
                      <Hr />
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  <div>
                      <TitleContent>Stack</TitleContent>
                      <TagList>
                          {tags.map((tag, i) => (
                              <Tag key={{i}}>{tag}</Tag>
                          ))}
                      </TagList>
                  </div>
                  <UtilityList>
                      { (visit !== undefined) ?<ExternalLinks href={visit}>More Info</ExternalLinks> : "" }
                      { (video !== undefined) ? <ExternalLinks href={video}>Video</ExternalLinks> : "" }
                      { (appstore !== undefined) ? <a href={appstore}><img src="images/appstore download button.svg" alt="AppStore download link" /></a> : "" }
                      { (source !== undefined) ? <ExternalLinks href={source}>Source Code</ExternalLinks> : "" }
                      { (jar !== undefined) ? <ExternalLinks href={jar}>JAR</ExternalLinks> : "" }
                  </UtilityList>
              </BlogCard>
          ))}
      </GridContainer>
  </Section>
);

export default Projects;