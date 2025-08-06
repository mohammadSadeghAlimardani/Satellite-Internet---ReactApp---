import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="section-center footer-center">
                <p>
                    &copy; all rights reserved belong to NovaLink by{" "}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
