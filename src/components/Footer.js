import React from 'react';

function Footer(props) {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="#"><i className="icon ion-social-instagram"/></a>
                    <a href="#"><i className="icon ion-social-snapchat"/></a>
                    <a href="#"><i className="icon ion-social-twitter"/></a>
                    <a href="#"><i className="icon ion-social-facebook"/></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">First</a></li>
                    <li className="list-inline-item"><a href="#">Second</a></li>
                    <li className="list-inline-item"><a href="#">Third</a></li>
                    <li className="list-inline-item"><a href="#">Fourth</a></li>
                </ul>
                <p className="copyright">made 10 min ago</p>
            </footer>
        </div>
    );
}

export default Footer;
