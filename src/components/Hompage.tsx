import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import RenaissanceArt from "./RenaissanceArt";
import {
  FormatPainterOutlined,
  DatabaseOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection(sectionId);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      {/* All sections in single page */}
      <section id="home">
        <HomeSection
          onContactClick={() => scrollToSection("contact")}
          onPortfolioClick={() => scrollToSection("portfolio")}
        />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

const HomeSection = ({}: {
  onContactClick: () => void;
  onPortfolioClick: () => void;
}) => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden pt-16">
      {/* Subtle Canvas Texture Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-40"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.015) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.005) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,0,0,0.005) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 120px 120px, 40px 40px, 40px 40px",
        }}
      ></div>

      {/* Floating Renaissance Art Elements */}
      <RenaissanceArt />

      {/* Classical Museum Frame Border */}
      <div className="absolute inset-6 border-2 border-gray-800 opacity-8 rounded-sm shadow-2xl">
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-800 transform rotate-45"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-800 transform rotate-45"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-800 transform rotate-45"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-800 transform rotate-45"></div>
      </div>
      <div className="absolute inset-10 border border-gray-400 opacity-15 rounded-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Header Section */}
        <header className="text-center mb-16 mt-[50px]">
          {/* Animated Renaissance Quote */}
          <div className="mb-8 opacity-75">
            <span className="text-sm font-serif italic text-gray-500 tracking-widest">
              MAGISTRO CODICIS RENAISSANCE
            </span>
          </div>

          <div className="mb-8 relative">
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-gray-300 rounded-full float-animation opacity-40"></div>
            <div
              className="absolute -top-2 -right-6 w-6 h-6 bg-gray-200 rounded-full float-animation opacity-30"
              style={{ animationDelay: "1s" }}
            ></div>

            <div
              style={{
                backgroundImage: 'url("/react-profile/images/avatar.png")',
                backgroundSize: "cover",
                backgroundPosition: "center 0%",
                backgroundRepeat: "no-repeat",
              }}
              className="w-32 h-32 mx-auto bg-gradient-to-br from-white to-gray-100 rounded-full shadow-xl border-4 border-black flex items-center justify-center mb-6 transform hover:scale-110 transition-all duration-500"
            ></div>
          </div>

          {/* Animated main title */}
          <div className="relative mb-6">
            <h1 className="text-6xl font-serif text-black mb-2 tracking-wide fade-in-up">
              Welcome to{" "}
              <span className="text-[#dfc77a] drop-shadow-[0_0_10px_rgba(223,199,122,0.8)]">
                My Profile
              </span>
            </h1>
            <div className="text-sm font-serif italic text-gray-600 tracking-[0.3em] uppercase">
              Renaissance Style
            </div>
          </div>

          {/* Decorative line with ornaments */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <div className="w-3 h-3 bg-black transform rotate-45 mx-4"></div>
            <div className="w-24 h-px bg-gradient-to-r from-gray-700 to-black"></div>
            <div className="w-3 h-3 bg-black transform rotate-45 mx-4"></div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>

          {/* Elegant subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 font-light italic leading-relaxed mb-4">
              "In the digital world, I create masterpieces from lines of code,
              blending classical art with modern technology"
            </p>
            <div className="text-sm text-gray-500 font-serif">
              — Filosofia Programmandi —
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-black text-center mb-8">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:border-gray-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    <DesktopOutlined />
                  </span>
                </div>
                <h3 className="text-xl font-serif text-black mb-3">
                  Frontend Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  React, TypeScript, Tailwind CSS, Next.js
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:border-gray-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    <DatabaseOutlined />
                  </span>
                </div>
                <h3 className="text-xl font-serif text-black mb-3">
                  Backend Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Node.js, Express, MongoDB, PostgreSQL, MySQL
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:border-gray-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {" "}
                    <FormatPainterOutlined />
                  </span>
                </div>
                <h3 className="text-xl font-serif text-black mb-3">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Figma, Motiff, Design Systems Basic
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <div className="  p-8 rounded-lg  max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500"></div>
        </section>

        {/* Renaissance Quote Banner */}
        <section className="mt-16 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-8 bg-gradient-to-r from-gray-50 to-white border-l-4 border-r-4 border-black">
              <div className="absolute top-0 left-[-2px] w-8 h-8 bg-black transform rotate-45 -translate-x-4 -translate-y-4"></div>
              <div className="absolute top-0 right-[-2px] w-8 h-8 bg-black transform rotate-45 translate-x-4 -translate-y-4"></div>
              <div className="absolute bottom-0 left-[-2px] w-8 h-8 bg-black transform rotate-45 -translate-x-4 translate-y-4"></div>
              <div className="absolute bottom-0 right-[-2px] w-8 h-8 bg-black transform rotate-45 translate-x-4 translate-y-4"></div>

              <blockquote className="text-2xl font-serif italic text-gray-800 leading-relaxed">
                "Simplicitas est ultimum sophism"
              </blockquote>
              <cite className="block mt-4 text-sm text-gray-600 font-medium">
                — Simplicity is the ultimate sophistication —
              </cite>
            </div>
          </div>
        </section>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-200/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-200/20 to-transparent"></div>
    </div>
  );
};

export default HomePage;
