import React from "react";

export default function Contact() {
  return (
    <>
      <div className="cointainer-fluid p-5">
        <div className="row">
          <div class="row mx-auto">
            <div className="card">
              <div className="card-title border-bottom ml-3 mb-0">
                <h2 className="mt-3 ml textLightBlue">Contact Me!</h2>
              </div>
              <div className="card-body mb-5 pb-4">
                <div class="col mt-4">
                  <a
                    class="text-dark"
                    href="mailto:christopheraturton@gmail.com"
                    target="_blank"
                  >
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>{" "}
                    Email
                  </a>
                </div>
                <div class="col mt-4">
                  <a
                    class="text-dark"
                    href="https://www.linkedin.com/in/christopher-turton-a0002670/"
                    target="_blank"
                  >
                    <i
                      class="fa fa-linkedin-square fa-2x"
                      aria-hidden="true"
                    ></i>{" "}
                    LinkedIn
                  </a>
                </div>
                <div class="col mt-4">
                  <a
                    class="text-dark"
                    href="https://github.com/Turtando"
                    target="_blank"
                  >
                    <i class="fa fa-github fa-2x" aria-hidden="true"></i> Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
