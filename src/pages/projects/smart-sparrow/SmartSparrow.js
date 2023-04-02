import backgroundSprLarge from '../../../assets/v882-kul-44.jpg';
import backgroundSprPlaceholder from '../../../assets/v882-kul-44.jpg';
import imageSprBackgroundVolcanismLarge from '../../../assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '../../../assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '../../../assets/spr-background-volcanism.jpg';
import backgroundSpr from '../../../assets/spr-background.jpg';

import imageSprLessonBuilderDarkLarge from '../../../assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '../../../assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '../../../assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '../../../assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '../../../assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '../../../assets/spr-lesson-builder-light.jpg';

import imageSprStoryboarderDarkLarge from '../../../assets/img55.jpg';
import imageSprStoryboarderDarkPlaceholder from '../../../assets/img55.jpg';
import imageSprStoryboarderDark from '../../../assets/img55.jpg';
import imageSprStoryboarderLightLarge from '../../../assets/img55.jpg';
import imageSprStoryboarderLightPlaceholder from '../../../assets/img55.jpg';
import imageSprStoryboarderLight from '../../../assets/img55.jpg';

import MK from '../../../assets/Michio-Kaku.jpg';
import stephImg from '../../../assets/img56.jpg';

import { Image } from '../../../components/Image';

import { Meta } from '../../../components/Meta';
import { ThemeProvider, useTheme } from '../../../components/ThemeProvider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '../../../layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from '../../../utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Introduction et définition ';
const description =
  'Imaginez vous remonter le temps et commencer a programmer avec dactylo ou attender la fete du Stephen hawking pour les voyageur au temps ou repeter les ds Pour cela il faut savoir voyager dans le temps. Donc quest ce que le voyage dans le temps.';
const roles = ['Introduction et définition ', 'Les theories', 'Les paradoxes'];

export const SmartSparrow = () => {
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader title={title} description={description} url="" roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>Definition</ProjectSectionHeading>
                    <ProjectSectionText>
                      Le voyage dans le temps est le concept de movement entre certains
                      points dans le temps analogue au mouvementt entre différents points
                      dans l’espace par un objet ou une personne.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Les theories</ProjectSectionHeading>
              <ProjectSectionText>
                Il ya beaucoup de theorie qui prouve ce phenomene
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>
                    Théorie d’ Albert Einstein:(Théorie de la relativité)
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Einstein a également déclaré que notre univers a une limite de vitesse
                    : rien ne peut voyager plus vite que la vitesse de la lumière (186 000
                    miles par seconde). Qu est-ce que cela signifie pour le voyage dans le
                    temps ? Eh bien, selon cette théorie, plus vous voyagez vite, plus le
                    temps est lent. Les scientifiques ont fait quelques expériences pour
                    montrer que c est vrai. Exemple : Einstein qui a pris le E dans E =
                    mc² et a expliqué son effet sur m dans un grand corps comme une
                    étoile. Toutes les petites erreurs de la théorie de Newton ont
                    disparu.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                key={themeId}
                srcSet={
                  isDark
                    ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                    : [imageSprStoryboarderLight, imageSprStoryboarderLightLarge]
                }
                placeholder={
                  isDark
                    ? imageSprStoryboarderDarkPlaceholder
                    : imageSprStoryboarderLightPlaceholder
                }
                alt="Albert Einstein"
                sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Théorie de Stephen Hawking</ProjectSectionHeading>
              <ProjectSectionText>
                Selon Stephen Hawking, le voyage dans le temps est possible, et pas
                seulement comme on pourrait le penser. Le voyage dans le temps en arrière
                n est pas pris en charge par les théories de Hawking, car une nouvelle
                matière (un nouveau vous) devrait être créée - une existant dans le passé
                et une dans le présent, voyageant dans le temps. Exemple : Le 29 juin
                2009, était un dimanche, Hawking était assis dans son fauteuil roulant
                lors d un cocktail au Gonville & Caius Collège de Cambridge, sous une
                banderole indiquant « Welcome Time Travellers ». Les invitations n ont été
                révélées qu après la fête, donc seul l hôte s est présenté, bien qu il n
                ait fourni aucune preuve spécifique qu il n était pas lui-même un voyageur
                temporel.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [stephImg, stephImg] : [stephImg, stephImg]}
              placeholder={isDark ? stephImg : stephImg}
              alt="Stephen Hawking"
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Théorie de Michio Kaku</ProjectSectionHeading>
                <ProjectSectionText>
                  Le Dr Michio Kaku est professeur de physique théorique au City Collège
                  de New York, co-fondateur de la théorie des champs de cordes Théorie de
                  Michio Kaku « Si la théorie quantique dit qu un électron pourrait être à
                  deux endroits en même temps, alors pourquoi les gens ne peuvent-ils pas
                  être aussi à deux endroits en même temps ? Et d ailleurs, pourquoi l
                  univers ne peut-il pas être à deux endroits en même temps ? À ce stade,
                  vous pouvez vous dire : C est bizarre. Eh bien, habituez-vous. Ça s
                  appelle de la physique !
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div>
              <Image
                srcSet={isDark ? [MK, MK] : [MK, MK]}
                placeholder={isDark ? MK : MK}
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>Les paradoxes</ProjectSectionHeading>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionText>
                Les paradoxes du voyage dans le temps sont des problèmes philosophiques et
                scientifiques qui se posent lorsque les hypothèses du voyage dans le temps
                sont considérées. Les paradoxes du voyage dans le temps sont des problèmes
                philosophiques et scientifiques qui se posent lorsque les hypothèses du
                voyage dans le temps sont considérées.
                <a href="../slice/">Cliquer ici pour continuer à lire</a>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
