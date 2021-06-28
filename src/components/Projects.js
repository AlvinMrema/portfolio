import pythonLogo from "../img/Python_image.jpg";
import safariPhoto from "../img/safari.jpg";
import game from "../img/game.jpg";

const Projects = () => {
  return (
    <section id="projects" className="p-5">
      <div className="container">
        <h2 className="text-center text-dark mb-0">My Projects</h2>

        <div className="row text-sm-center g-3 my-3">
          <div className="col-md">
            <div className="card h-100 bg-dark text-light">
              <div className="card-header h2 text-center">Demo Game</div>
              <img src={game} class="card-img-top h-50" alt="Python"></img>
              <div className="card-body">
                <h3 className="card-title">A Survival Demo Game</h3>
                <p className="card-text">
                  It's a simple website which makes use of p5.js to render a
                  Survival browser game. It was a solution to a challenge hosted
                  on stemloyola platform.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://demos.stemloyola.org/coder/amrema/demo"
                  className="btn btn-primary"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card h-100 bg-dark text-light">
              <div className="card-header h2 text-center">Safari</div>
              <img src={safariPhoto} class="card-img-top h-50" alt="Python"></img>
              <div className="card-body">
                <h3 className="card-title">
                  A Static Website About Wildlife in Tanzania
                </h3>
                <p className="card-text">
                  Get to know about the Wildlife touring experience from the
                  different National Parks and Game Reserves found in Tanzania
                  so that you may get the motivation to Live the experience
                  yourself.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://acamsafari.netlify.app/"
                  className="btn btn-primary"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card h-100 bg-dark text-light">
              <div className="card-header h2 text-center">
                Networking(Cities)
              </div>
              <img src={pythonLogo} class="card-img-top h-50" alt="Python"></img>
              <div className="card-body">
                <h3 className="card-title">A Networking Challenge Solution</h3>
                <p className="card-text">
                  It's a website that displays the contents stored with
                  reference to a specific city as found in the database that
                  gets data from a Python Script that fetches files from a local
                  Computer storage in the OS using a C++ program. It was a
                  solution to a challenge hosted on stemloyola platform.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://demos.stemloyola.org/coder/amrema/cities"
                  className="btn btn-primary"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-sm-center">
          <div className="col-md-4 offset-md-4">
            <div className="card h-100 bg-dark text-light">
              <div className="card-header h2 text-center">
                Virus Cleanup Tool
              </div>
              <img src={pythonLogo} class="card-img-top h-50" alt="Python"></img>
              <div className="card-body">
                <h3 className="card-title">
                  A Python File Renaming Automation Tool
                </h3>
                <p className="card-text">
                  It's a simple Python script that automates the process of
                  renaming all the files with a chosen file extension to another
                  format in a specified folder/directory
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://github.com/AlvinMrema/virus-cleanup-tool"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
