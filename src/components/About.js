import image from "../img/Firefox_wallpaper.png";

const About = () => {
  return (
    <section id="about" className="p-5 dark-bg-color text-light">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md mb-sm-0 mb-3">
            <h2 className="support-text-color">A Bit About Me</h2>
            <p className="lead">
              I am a Software Engineer who loves Developing on the Internet,
              currently residing in Dar es Salaam, Tanzania.
            </p>

            <p>
              I also enjoy playing Football, Video Games, Music, as well as
              Reading Books and other Articles while not forgetting to embrace
              Nature with all it's Wonders.
            </p>

            <div>
              <p className="h4">I have experience with the following:</p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Languages:</span>
                  <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">TypeScript</li>
                    <li className="list-group-item">Python</li>
                    <li className="list-group-item">C/C++</li>
                  </ul>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Technologies:</span>
                  <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">Git/GitHub</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">Bootstrap</li>
                    <li className="list-group-item">Figma</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <img src={image} alt="Web Technologies" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
