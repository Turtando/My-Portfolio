import React from "react";

export default function About() {
  return (
    // <div className="container">
      <main class="container-fluid p-5">
        <section class="row">
          <section class="col-sm-8">
            <div class="card m-2 p-3">
              <h2 class="card-title p-1">
                <strong>About Me</strong>
              </h2>
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
                      I am an aspiring web developer from Lower Merion PA. A
                      graduate of the University of Pittsburgh, I hold an
                      educational background in public relations and marketing
                      communications. I possess a background in front-end web
                      programming , specifically HTML/CSS and JavaScript.
                    </p>

                    <p>
                      I have experience in mass media production and
                      communications through social media development, public
                      relation marketing, client relationship building and news
                      writing/editing as well. I've assisted in communicating
                      and providing financial assistance to potential and
                      current mutual fund shareholders. Provided information on
                      balance amounts, financial products, plan options,
                      enrollments, conversion of funds and performance.
                    </p>
                    <p>
                      In addition to both, I've been involved in promotional
                      writing for many non-profit organizations in the greater
                      Philadelphia region. Constructed many graphic design
                      projects for city festivals and fundraising projects such
                      as designing promotional posters and backdrops. Helped
                      maintain and establish client relationships and served as
                      a social media outlet developer.
                    </p>
                    <p>
                      <a href="https://drive.google.com/file/d/1nc1HZ7TDDURIprFmPIOn5seuORzH2fDF/view?usp=sharing">
                        <strong>My Resume</strong>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    // </div>
  );
}
