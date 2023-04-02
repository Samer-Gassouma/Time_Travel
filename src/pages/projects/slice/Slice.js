import sliceApp from '../../../assets/traveller-in-time4.jpg';

import sliceBackgroundLarge from '../../../assets/bg.jpg';

import sliceBackground from '../../../assets/bg.jpg';
import sliceSidebarLayersLarge from '../../../assets/par.jpg';
import sliceSidebarLayersPlaceholder from '../../../assets/par.jpg';
import sliceSidebarLayers from '../../../assets/par.jpg';
import { ThemeProvider } from '../../../components/ThemeProvider';
import sliceSlides from '../../../assets/p15660455_b_h8_ac.jpg';
import { Footer } from '../../../components/Footer';
import { Image } from '../../../components/Image';
import { Meta } from '../../../components/Meta';
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
import styles from './Slice.module.css';
const Earth = dynamic(() => import('../smart-sparrow/Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() =>
  import('../smart-sparrow/Earth').then(mod => mod.EarthSection)
);
import Imgh1 from '../../../assets/h1.jpg';
import twa from '../../../assets/wfs.jpg';
import Imgh2 from '../../../assets/fight.jpg';
const title = 'Les paradoxes';
const description =
  'il faut dire que chaque théorie a ses propres paradoxes et surtout dans ce sujet, les paradoxes sont à tous les points de vue..';
const roles = ['Les paradoxes', 'Exemple réel', 'Comment on peut voyager', 'Conclusion'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackground}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceApp]}
              placeholder={sliceApp}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Paradoxe de grand pere</ProjectSectionHeading>
              <ProjectSectionText>
                Laissez-nous d abord expliquons ce qu est le paradoxe temporel, Un
                paradoxe est une proposition qui contient ou semble contenir une
                contradiction logique, ou un raisonnement qui, bien que sans faille
                apparente, aboutit à une absurdité, ou encore, une situation qui contredit
                l intuition commune, Le paradoxe de grand-père inclut également dans cette
                liste, afin que nous puissions faire une définition claire de la
                signification de cette théorie. Le paradoxe du grand-père est un paradoxe
                logique évoqué, semble-t-il, la première fois par René Barjavel dans son
                roman Le Voyageur imprudent. On l invoque pour montrer à quel point la
                possibilité dun voyage dans le temps est problématique pour des raisons
                indépendantes des lois de la nature. En effet, si des voyages arbitraires
                dans le temps étaient possibles, on pourrait remonter dans le passé pour
                tuer son grand-père.
              </ProjectSectionText>
              <ProjectSectionText>
                <h5>Explication :</h5> Il déclare que si l on remonte dans le temps jusqu
                à ce que leur grand-père ait engendré leur père et le tue, alors le père
                ne naîtrait jamais, et le tueur non plus. Dans cette nouvelle chronologie,
                le tueur n existe jamais, il ne pourrait donc jamais voyager dans le temps
                et assassiner son grand-père. Ainsi, le paradoxe est créé. Dans ce qui
                peut être décrit comme une boucle temporelle, ce cycle d événements
                continuera à se répéter à l infini entre deux points fixes de la
                chronologie, ce que l on appelle classiquement l énigme La poule et l œuf.
                L exemple le plus notable de cet événement a été lorsque SpongeGar a tué
                avec succès son propre père, Gar. Cependant, c était avant l événement de
                la propre naissance de SpongeGar. Étant à moitié primordial, SpongeGar a
                pu se libérer de la boucle et réinitialiser la chronologie avant qu elle
                ne s effondre sur elle-même.
              </ProjectSectionText>
            </div>
            <div>
              <Image
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                L’homme et la Vitesse de la lumière
              </ProjectSectionHeading>
              <ProjectSectionText>
                L idée de voyager à la vitesse de la lumière est séduisante pour les
                écrivains de science-fiction. La vitesse de la lumière est un incroyable
                299 792 458 mètres par seconde. À cette vitesse, vous pourriez faire le
                tour de la Terre plus de sept fois en une seconde, et les humains
                pourraient enfin explorer en dehors de notre système solaire. En 1947, les
                humains ont d abord dépassé la vitesse (beaucoup plus lente) du son,
                ouvrant la voie au jet commercial Concorde et à d autres avions
                supersoniques. Alors, nous sera-t-il jamais possible de voyager à la
                vitesse de la lumière ? D après notre compréhension actuelle de la
                physique et des limites du monde naturel, la réponse est malheureusement
                non. Selon la théorie de la relativité restreinte d Albert Einstein,
                résumée par la célèbre équation E=mc2, la vitesse de la lumière (c) est
                quelque chose comme une limite de vitesse cosmique qui ne peut être
                dépassée. Ainsi, les déplacements à la vitesse de la lumière et les
                déplacements plus rapides que la lumière sont des impossibilités
                physiques, en particulier pour tout ce qui a une masse, comme les
                vaisseaux spatiaux et les humains. mais que se passera-t-il si nous
                atteignons vraiment la vitesse de la lumière ? Si jamais un objet
                atteignait la vitesse de la lumière, sa masse deviendrait infinie. Et par
                conséquent, l énergie nécessaire pour déplacer l objet deviendrait
                également infinie : une impossibilité. On peut dire d une autre manière
                que les gens qui prennent la vitesse de la lumière
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlides]}
              placeholder={sliceSlides}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[Imgh2, Imgh2]}
                  placeholder={Imgh2}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>

            <div className={styles.gridText}>
              <h1>Exemple réel:</h1>
              <br></br>
              <ProjectSectionHeading>Le combat de Tyson</ProjectSectionHeading>
              <ProjectSectionText>
                Le combat de mike tyson en 1995 qui montre qu’un des spectateurs film le
                combat avec un smartphone quand le premier smartphone avec camera a été
                crée en novembre 2000.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Vol TWA 513</ProjectSectionHeading>
              <ProjectSectionText>
                le mystere de l’avion du vol 513 qui a atterri 37 ans après avoir décollé
                Mystère du vol 513 de Santiago qui a «disparu» en 1954, qui a atterri 37
                ans après avoir décollé9 avec des squelettes .
              </ProjectSectionText>
            </div>
            <div>
              <Image
                srcSet={[twa, twa]}
                placeholder={twa}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div>
              <Image
                srcSet={[Imgh1, Imgh1]}
                placeholder={Imgh1}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                L étranger dans les vêtements du futur.
              </ProjectSectionHeading>
              <ProjectSectionText>
                Une photographie de 1941 de l authenticité authentique de la réouverture
                du pont South Fork à Gold Bridge, en Colombie-Britannique, aurait montré
                un voyageur temporel. Il a été affirmé que ses vêtements et ses lunettes
                de soleil étaient modernes et non des styles portés dans les années 1940.
              </ProjectSectionText>
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
                    <ProjectSectionHeading>Comment on peut voyager</ProjectSectionHeading>
                    <ProjectSectionText>
                      Si vous demandez comment voyager dans le temps voici quelques
                      exemples :
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Voyager dans le temps avec le Vitesse
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      C’est le moyen le plus simple et le plus pratique de voyager dans le
                      futur lointain. Ceci est t’expliquer dans la théorie d’einstein.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Voyager dans le temps avec la gravité
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      C’est aussi inspirée pas einstein Selon sa théorie de la relativité
                      générale, plus la gravité que vous ressentez est forte, plus le
                      temps se déplace lentement.À mesure que vous vous rapprochez du
                      centre de la Terre, par exemple, la force de gravité augmente. Le
                      temps passe plus lentement pour vos pieds que pour votre tête.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Mantle', 'Outer core', 'Inner core']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Voyager dans le temps avec de trous de ver:
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      La relativité générale permet également la possibilité de raccourcis
                      à travers l espace-temps, connus sous le nom de trous de ver, qui
                      pourraient être capables de franchir des distances d un milliard d
                      années-lumière ou plus, ou à différents moments dans le temps
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Conclusion:</ProjectSectionHeading>
              <ProjectSectionText>
                En conclusion, la théorie est toujours une théorie que l on ne peut nier
                ou prouver. mais si on vous donne une machine temporelle où vous voulez
                voyager pour explorer l avenir ou revenir en arrière.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
