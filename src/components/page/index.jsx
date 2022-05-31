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
        <ParallaxLayer offset={0} speed={-0.2}>
          <View>
            <Title
              onMouseEnter={onMouseEnter.titleEnter}
              onMouseLeave={onMouseLeave}
            />
            <Writer />
          </View>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0} style={{ zIndex: 3 }}>
          <Experience />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.8}>
          <ExperienceTitle />
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={-0}>
          <ProjectTitle />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.6} style={{ zIndex: 3 }}>
          <ProjectMovielog
            onMouseEnter={onMouseEnter.clickEnter}
            onMouseLeave={onMouseLeave}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={-0.1}>
          <ProjectBookjjok
            onMouseEnter={onMouseEnter.clickEnter}
            onMouseLeave={onMouseLeave}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} speed={0.2} style={{ zIndex: 2 }}>
          <ProjectBookjjokTwo
            onMouseEnter={onMouseEnter.clickEnter}
            onMouseLeave={onMouseLeave}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={5.18} speed={-0.2} style={{ zIndex: 3 }}>
          <Contact
            onMouseEnter={onMouseEnter.textEnter}
            onMouseLeave={onMouseLeave}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1}>
          <ContactTitle />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.9}
          onMouseEnter={onMouseEnter.clickEnter}
          onMouseLeave={onMouseLeave}
          onClick={() => ref.current.scrollTo(0)}
          style={{ zIndex: 3 }}
        />
      </Parallax>
    </>
  );
}

export default Page;
