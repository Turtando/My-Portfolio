import React from "react";

export default function About() {
  return (
    // <div className="container">
    <main class="container-fluid p-5">
      <section class="row">
        <section class="col-sm-8">
          <div class="card m-2 p-3">
            <h2 class="card-title p-1">
              <strong> About Me </strong>{" "}
            </h2>{" "}
            <hr />
            <div class="row">
              <div class="col m-3">
                <img
                  src="images/profile.jpg"
                  class="thumbnail img-fluid float-left m-2"
                  alt="img-thumbnail"
                />
                <div class="caption">
                  <p>
                    Full stack software engineer focused on frontend design and
                    user interface functionality.Recently received a certificate
                    in Full Stack Web Development from the University of
                    Pennsylvania.Team - oriented as well as possessing the
                    ability to work independently.Formerly worked in public
                    relations and marketing communications through several
                    CRMS. Experienced in mass media production and communications
                    through social media development & public relation
                    marketing.Built client relationships and news wrote /
                    edited as well. Constructed many graphic design projects for
                    city festivals and fundraising projects such as designing
                    promotional posters and backdrops.{" "}
                  </p>
                  <p>
                    My skills Include:
                    HTML5, CSS, CSS3, Bootstrap,  Javascript, jQuery, AJAX, React.js, Node.js, JSON, 
                    MySQL, MongoDB, Heroku, Git, Bash, Microsoft Office Suite, Adobe Creative Suite.
                  </p>
                  <p>
                    <a href="https://drive.google.com/file/d/1nc1HZ7TDDURIprFmPIOn5seuORzH2fDF/view?usp=sharing">
                      <strong> My Resume </strong>{" "}
                    </a>{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </section>{" "}
    </main>
    // </div>
  );
}
