const Footer = () => {
    return (
        <footer className="p-5 dark-bg-color text-center text-white position-relative">
            <div className="container">
                <div id="socials" className="my-3">
                    <a href="https://twitter.com/alvinmrema" target="_blank" rel="noreferrer"><i className="bi bi-twitter mx-2 text-white"></i></a>
                    <a href="https://www.linkedin.com/in/alvin-mrema-257264198/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin mx-2 text-white"></i></a>
                    <a href="https://github.com/AlvinMrema" target="_blank" rel="noreferrer"><i className="bi bi-github mx-2 text-white"></i></a>
                </div>
                
                <p className="lead">
                    Alvin Chris Mrema &copy; 2021
                </p>

                <a href="#top" className="position-absolute bottom-0 end-0 p-5 text-white">
                    <i className="bi bi-arrow-up-circle h1"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
