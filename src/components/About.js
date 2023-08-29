import React from "react";

export default function About(props) {

  return (
    <>
      <div className={`container bg-${props.mode} text-${props.mode==='light'?'Dark':'light'} `} >
      <h1>About us</h1>
        <div className="accordion"  id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header"  >
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'Dark':'light'}`}
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
              <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'Dark':'light'}`} >
              Hello! My name is Anubhav Dubey, and I am currently a student at Galgotias University.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'Dark':'light'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Interests
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'Dark':'light'}`} >
                My primary interest revolves around acquiring a strong knowledge of coding.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'Dark':'light'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                 Expertise
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'Dark':'light'}`} >
                I possess expertise in several programming and web development languages, including HTML, CSS, JavaScript, React, Tailwind, and Bootstrap.
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
