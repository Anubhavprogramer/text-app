import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className={`container bg-${props.mode} text-${
          props.mode === "light" ? "Dark" : "light"
        } `}
      >
        <h1>About us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${
                  props.mode === "light" ? "Dark" : "light"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Introduction
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body bg-${props.mode} text-${
                  props.mode === "light" ? "Dark" : "light"
                }`}
              >
                Hello, I am Anubhav Dubey, and I will be completing my
                bachelor’s degree in computer science and engenering from
                Galgotias University by 2026. I have worked on a wide variety of
                projects that have allowed me to put what I’ve learned in the
                classroom into use in a practical sense. I am also a part of a
                Technojam which is the coding society, where the students manage
                to do codes and are very biased towards coding and other
                programming related stufs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${
                  props.mode === "light" ? "Dark" : "light"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Explore My Interests
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body bg-${props.mode} text-${
                  props.mode === "light" ? "Dark" : "light"
                }`}
              >
                Welcome to the "Interests" section of my website. Here, I'm
                excited to share with you the diverse facets of my life and the
                passions that drive me. These are the avenues where I find
                inspiration and fulfillment.
                <h6>Traveling</h6>
                Traveling is my ultimate source of adventure and exploration.
                Join me on my journeys to different corners of the world. I'll
                take you through the most captivating destinations, share travel
                tips, and reveal the beauty of cultures and landscapes I've
                encountered.
                <h6>Coding</h6>
                Coding is not just a skill; it's a way of bringing ideas to
                life. In this space, I delve into the fascinating world of
                programming and technology. You'll find coding tutorials, tech
                reviews, and insights into the latest innovations.
                <h6>Editing</h6>
                Editing is the art of perfecting content. Discover my passion
                for refining words and visuals. Explore editing tips,
                before-and-after examples, and insights into the power of the
                editing process.
                <h6>Content Creation</h6>
                Content creation is where my imagination comes to life. Explore
                my creative journey through blog posts, videos, and more. From
                concept to creation, I'll take you behind the scenes. I've
                curated this "Interests" section to provide you with a window
                into my world. Feel free to explore any or all of these
                interests. If you share a passion for any of these fields or
                have questions to ask, I'd love to connect with you.
                <br />
                Let's embark on this journey of discovery together!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${
                  props.mode === "light" ? "Dark" : "light"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                My Expertise
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body bg-${props.mode} text-${
                  props.mode === "light" ? "Dark" : "light"
                }`}
              >
                Welcome to the "Expertise" section of my website, where I
                showcase my skills and areas of expertise. I'm passionate about
                technology, and I've honed my skills in web development and Java
                programming. Let's dive into what I can bring to the table.I
                possess expertise in several programming and web development
                languages, including HTML, CSS, JavaScript, React, Tailwind, and
                Bootstrap.
                <br />
                <br />
                <br />
                <h6>Web Development</h6>
                Web development is my forte. I specialize in creating
                captivating and functional websites, ensuring that the user
                experience is exceptional. From front-end design to back-end
                functionality, I have you covered. Here's what you can expect:
              </div>
              <ul>
                <li>
                  <strong>Front-End Development:</strong>Crafting responsive,
                  user-friendly interfaces with HTML, CSS, and JavaScript.
                </li>
                <li>
                  <strong>Back-End Development:</strong>Building robust
                  server-side applications using frameworks like Node.js and
                  Express.
                </li>
                <li>
                  <strong>Database Management:</strong>Proficiency in working
                  with databases, including MySQL and MongoDB.
                </li>
              </ul>
              <br />
              <br />
              <h6>Java Programming</h6>
              Java is a versatile and powerful language, and I've honed my
              skills to be proficient in it. Whether it's developing
              applications, solving complex problems, or working on large-scale
              projects, I'm up for the challenge. Here's what you can expect in
              my Java expertise:
              <ul>
                <li>
                  <strong>Application Development: </strong> Creating efficient
                  and reliable Java applications for various purposes.
                </li>
                <li>
                  <strong>Algorithmic Problem Solving: </strong> Tackling
                  complex problems and finding elegant Java-based solutions..
                </li>
                <li>
                  <strong>Integration and Interoperability:</strong> Leveraging
                  Java's cross-platform capabilities for seamless software
                  integration.
                </li>
              </ul>
              <br />
              <br />
              <br />
              My passion for technology drives me to stay updated with the
              latest industry trends and best practices in web development and
              Java programming. I'm always eager to take on new challenges and
              expand my skill set further.
              <br />
              Feel free to reach out if you have projects or collaborations in
              mind. I'm here to bring your ideas to life and solve problems
              through technology.
            </div>
<div className="container">
  
</div>
          </div>
        </div>
      </div>
    </>
  );
}
