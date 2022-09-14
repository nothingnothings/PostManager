import React from 'react';

import './Footer.css';

const footer = (props) => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="brands">
              <p
                className="font-italic text-muted"
                style={{ cursor: 'default' }}
              >
                This site is meant to be a showcase of the kind of webapps that
                can be built using ReactJS and Node.js.
              </p>
              <ul className="brand-list">
              <li>
                  <a href="https://github.com/nothingnothings" title="github">
                  <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/arthur-dalla-corte-panazolo" title="linkedin">
                  <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  
                  <a href="https://www.facebook.com/" title="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" title="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" title="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" title="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">The Basics</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="https://www.w3schools.com/html/"
                  className="text-muted"
                >
                  HTML
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.w3schools.com/css/" className="text-muted">
                  CSS
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.javascript.com/" className="text-muted">
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Frameworks</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="https://reactjs.org/" className="text-muted">
                  React
                </a>
              </li>
              <li className="mb-2">
                <a href="https://angular.io/" className="text-muted">
                  Angular
                </a>
              </li>
              <li className="mb-2">
                <a href="https://vuejs.org/" className="text-muted">
                  Vue
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-4" style={{ cursor: 'default' }}>
              This Newsletter doesn't really work, but if you want to keep
              yourself posted about the latest in Web Development, you can
              always check my GitHub page:
            </p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="https://github.com/nothingnothings"
                  aria-describedby="button-addon1"
                  className="form-control border-0 shadow-0"
                ></input>
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link"
                  >
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-4">
        <div className="container">
          <p className="text-light mb-0 py-2 text-center">
            Built by <a 
            className="footer-link"
            href="https://github.com/nothingnothings">Arthur Panazolo</a> in 2022.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
