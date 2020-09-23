import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="cointainer-fluid p-5">
        <div className="row">
          <div class="row mx-auto">
            <div className="card-title border-bottom ml-3 mb-0">
              <h2 className="mt-3 ml textLightBlue">Contact Me!</h2>

              <div className="card-body mb-5 pb-4">
                <div class="col mt-4">
                  <a
                    class="text-light"
                    href="mailto:christopheraturton@gmail.com"
                    target="_blank"
                  >
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i> You
                    can email me directly here.
                  </a>
                </div>
                <div class="col mt-4">
                  <a
                    class="text-light"
                    href="https://www.linkedin.com/in/christopher-turton/"
                    target="_blank"
                  >
                    <i
                      class="fa fa-linkedin-square fa-2x"
                      aria-hidden="true"
                    ></i>{" "}
                    My LinkedIn
                  </a>
                </div>
                <div class="col mt-4">
                  <a
                    class="text-light"
                    href="https://github.com/Turtando"
                    target="_blank"
                  >
                    <i class="fa fa-github fa-2x" aria-hidden="true"></i> My
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
