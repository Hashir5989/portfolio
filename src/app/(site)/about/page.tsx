import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";

export const metadata: Metadata = {
    title: "About | Abdulla Hashir Ali",
    description: "Learn more about Abdulla Hashir Ali, a Full Stack Software Developer with 5+ years of experience in web development, specializing in React, Node.js, and modern web technologies."
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  const skills = [
    "PHP", "Laravel", "REST API", "GraphQL", "MySQL",
    "Vue.js", "Nuxt.js", "JavaScript", "HTML", "CSS",
    "Git", "Linux", "Postman", "API Testing", "Debugging",
    "ERP Systems", "School Management", "E-Commerce", "Drupal", "Angular"
  ];

  return (
    <>
      <HeroSub
        title="About Me"
        description="I'm Abdulla Hashir Ali, a Full Stack Software Developer with 5+ years of experience in creating innovative web solutions and applications."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-16 dark:bg-darkmode">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-midnight_text dark:text-white">
                Passionate Full Stack Developer
              </h2>
              <p className="text-grey dark:text-white/70 mb-6 leading-relaxed">
                With over 5 years of experience in software development, I specialize in creating
                scalable web applications that deliver exceptional user experiences. My journey
                began with a curiosity for technology and has evolved into a passion for building
                digital solutions that make a difference.
              </p>
              <p className="text-grey dark:text-white/70 mb-6 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest
                technologies and best practices. Whether it's crafting beautiful user interfaces or
                architecting robust backend systems, I approach each project with dedication and attention to detail.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-midnight_text dark:text-white">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-midnight_text dark:text-white">
                  Education
                </h3>
                <div className="bg-gray-50 dark:bg-darklight p-4 rounded-lg">
                  <h4 className="font-semibold text-midnight_text dark:text-white">Bachelor of Computer Science</h4>
                  <p className="text-grey dark:text-white/70">Mother Arts & Science College, Thrissur (2019)</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-midnight_text dark:text-white">
                  Experience Highlights
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-midnight_text dark:text-white">Senior PHP Developer</h4>
                    <p className="text-grey dark:text-white/70 text-sm">Poornam Info Vision Pvt Ltd, Kochi (Dec 2024 – Present)</p>
                    <p className="text-grey dark:text-white/70">Developing ERP modules, dashboards, and tools using Laravel, MySQL, and GraphQL</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-midnight_text dark:text-white">PHP Developer</h4>
                    <p className="text-grey dark:text-white/70 text-sm">Global Establishment Pvt Ltd, Ernakulam (Jun 2023 – Nov 2024)</p>
                    <p className="text-grey dark:text-white/70">Developed ERP modules using Laravel & MySQL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-darklight p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-midnight_text dark:text-white">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-grey dark:text-white/70">Experience</span>
                    <span className="font-semibold text-midnight_text dark:text-white">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-grey dark:text-white/70">Projects Completed</span>
                    <span className="font-semibold text-midnight_text dark:text-white">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-grey dark:text-white/70">Client Satisfaction</span>
                    <span className="font-semibold text-midnight_text dark:text-white">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-grey dark:text-white/70">Location</span>
                    <span className="font-semibold text-midnight_text dark:text-white">Thrissur, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counter isColorMode={true} />
      <Progresswork isColorMode={true} />

      <section className="py-16 bg-gray-50 dark:bg-darklight">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-midnight_text dark:text-white">
            Let's Work Together
          </h2>
          <p className="text-grey dark:text-white/70 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Whether you need a full-stack application, API development, or technical consultation,
            I'd love to hear about your project and discuss how we can work together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default page;