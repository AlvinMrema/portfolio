import pythonLogo from "../img/Python_image.jpg";
import safariPhoto from "../img/safari.jpg";
import game from "../img/game.jpg"

const Projects = () => {
    return (
        <section id="projects" className="p-5">
            <div className="container">
                <h2 className="text-center text-dark mb-0">My Projects</h2>

                <div className="row text-center g-3 my-3">
                    <div className="col-md">
                        <div className="card bg-dark text-light">
                            <div className="card-header h2">Virus Cleanup Tool</div>
                            <img src={game} class="card-img-top" alt="Python"></img>
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    A Python File Renaming Automation Tool
                                </h3>
                                <p className="card-text">
                                    It's a simple Python script that automates the process of
                                    renaming all the files with a chosen file extension to another
                                    format in a specified folder/directory
                                </p>
                                <a
                                    href="https://github.com/AlvinMrema/virus-cleanup-tool"
                                    className="btn btn-primary"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="card bg-dark text-light">
                            <div className="card-header h2">Safari</div>
                            <img src={safariPhoto} class="card-img-top" alt="Python"></img>
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    A Static Website About Wildlife in Tanzania
                                </h3>
                                <p className="card-text">
                                    It's a simple Python script that automates the process of
                                    renaming all the files with a chosen file extension to another
                                    format in a specified folder/directory.
                                </p>
                                <a
                                    href="https://acamsafari.netlify.app/"
                                    className="btn btn-primary"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="card bg-dark text-light">
                            <div className="card-header h2">Virus Cleanup Tool</div>
                            <img src={pythonLogo} class="card-img-top" alt="Python"></img>
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    A python automation tool for renaming files
                                </h3>
                                <p className="card-text">
                                    It's a simple Python script that automates the process of
                                    renaming all the files with a chosen file extension to another
                                    format in a specified folder/directory.
                                </p>
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

                <div className="row text-sm-center">
                    <div className="col-md-6 offset-md-3">
                        <div className="card bg-dark text-light">
                            <div className="card-header h2 text-center">Virus Cleanup Tool</div>
                            <img src={pythonLogo} class="card-img-top" alt="Python"></img>
                            <div className="card-body">
                                <h3 className="card-title">
                                    A Python File Renaming Automation Tool
                                </h3>
                                <p className="card-text">
                                    It's a simple Python script that automates the process of
                                    renaming all the files with a chosen file extension to another
                                    format in a specified folder/directory
                                </p>
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
