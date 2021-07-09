const Header = () => {
    return (
        <header id="top" className="text-center p-5">
            <div className="container">
                <div className="row justify-content-between align-items-center header-height">
                    <div>
                        <h1 className="mb-3 text-white">
                            Hi, I'm <span className="support-text-color">Alvin Chris Mrema</span>.
                            <br />
                            I'm a Software Engineer.
                        </h1>
                        <a href="#about" className="btn btn-info">
                            Let's Start <i className="bi bi-chevron-down"></i>
                        </a>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
