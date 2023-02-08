import React from "react";
import { Container } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import vedeoBg from '../assets/coverr-using-whatsapp-on-a-laptop-2229-1080p.mp4'

// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

const Hero = () => {
  // const particlesInit = (main) => {
  //   console.log(main);
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  // const particlesInit = useCallback(async (engine) => {
  //   console.log(engine);
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <>
      <section className="hero-section" id="home">
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 400,
                  duration: 0.2,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#c69963",
                distance: 120,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                // type: "circle",
                type: "image",
                image: {
                  src: "https://cdn.pixabay.com/photo/2017/07/04/13/37/blue-wings-2471094__340.png",
                },
              },
              size: {
                // value: { min: 1, max: 5 },
                value: 20,
              },
            },
            detectRetina: true,
          }}
        /> */}
        <Container fluid>
          <div className="overlay"></div>
          <video src={vedeoBg} autoPlay loop muted/>
          <div className="hero-element">
            <h1> I'm Ahosan Kabir </h1>
            <p>
              <span className="animated_text">
                <Typewriter
                  words={[
                    "front-end developer",
                    "back-end developer",
                    "MERN stack developer",
                    "REST API developer",
                    "React developer",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="🖊"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
