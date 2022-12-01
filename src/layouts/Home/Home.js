import gamestackTexture2Large from 'assets/ggg.jpg';
import gamestackTexture2Placeholder from 'assets/ggg.jpg';
import gamestackTexture2 from 'assets/ggg.jpg';
import gamestackTextureLarge from 'assets/White-Hole.jpg';
import gamestackTexturePlaceholder from 'assets/White-Hole.jpg';
import gamestackTexture from 'assets/White-Hole.jpg';
import sliceTextureLarge from 'assets/download.jpg';
import sliceTexturePlaceholder from 'assets/download.jpg';
import sliceTexture from 'assets/download.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer', 'Prototyper', 'Animator', 'Illustrator', 'Modder'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta title="Le voyage dans le temps" />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="définition et Les theories"
        description="connaître le sens et la théorie derrière cela"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: '',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Les paradoxes et des Exemples réel"
        description="il faut dire que chaque théorie a ses propres paradoxes "
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'phone',
          alt: '',
          textures: [
            {
              srcSet: [gamestackTexture2, gamestackTexture2],
              placeholder: gamestackTexture2,
            },
            {
              srcSet: [gamestackTexture, gamestackTexture],
              placeholder: gamestackTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Conclusion"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: '',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      <Footer />
    </div>
  );
};
