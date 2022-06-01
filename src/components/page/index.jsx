import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Title from "../title";
import Writer from "../writer";
import View from "../view/view.styles.jsx";

import ExperienceTitle from "../experience/ExperienceTitle.jsx";
import Experience from "../experience/Experience";

import ProjectTitle from "../project/ProjectTitle.jsx";
import ProjectMovielog from "../project/ProjectMovielog.jsx";
import ProjectBookjjok from "../project/ProjectBookjjok.jsx";
import ProjectBookjjokTwo from "../project/ProjectBookjjokTwo.jsx";

import ContactTitle from "../contact/ContactTitle.jsx";
import Contact from "../contact/Contact.jsx";

function Page({ onMouseEnter, onMouseLeave }) {
  const ref = useRef();

  return (
    <>
      <Parallax pages={6} ref={ref}>
        <ParallaxLayer offset={0} speed={-0.6}>
          <View>
            <Title
              onMouseEnter={onMouseEnter.titleEnter}
              onMouseLeave={onMouseLeave}
            />
            <Writer />
          </View>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={-0} style={{ zIndex: 3 }}>
          <Experience />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.3}>
          <ExperienceTitle />
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={-0.2}>
          <ProjectTitle />
        </ParallaxLayer>

        <ParallaxLayer offset={2.8} speed={0.1} style={{ zIndex: 3 }}>
          <ProjectMovielog
            onMouseEnter={onMouseEnter.clickEnter}
            onMouseLeave={onMouseLeave}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.4} speed={-0.4}>
          <ProjectBookjjok
            onMouseEnter={onMouseEnter.clickEnter}
            onMouseLeave={onMouseLeave}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.2} style={{ zIndex: 2 }}>
          <ProjectBookjjokTwo
            onMouseEnter={onMouseEnter.clickEnter}
            onMouseLeave={onMouseLeave}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={5.2} speed={-0.2} style={{ zIndex: 3 }}>
          <Contact
            onMouseEnter={onMouseEnter.textEnter}
            onMouseLeave={onMouseLeave}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={5.2} speed={0.6}>
          <ContactTitle />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Page;
