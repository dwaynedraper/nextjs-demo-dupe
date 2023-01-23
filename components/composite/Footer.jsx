import React from "react";

export default function Footer() {
  return (
    <div className='container-fluid fixed-bottom bg-white text-black px-5'>
      <footer className='py-5'>
        <div className='row'>
          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className='col-md-5 offset-md-1 mb-3'>
            <form
              data-dashlane-rid='de581008b4eede7d'
              data-form-type='newsletter'
            >
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of everything new and exciting from us.</p>
              <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                <label htmlFor='newsletter1' className='visually-hidden'>
                  Email address
                </label>
                <input
                  id='newsletter1'
                  type='text'
                  className='form-control'
                  placeholder='Email address'
                  data-dashlane-rid='d19ac9dc181fbfde'
                  data-form-type='email'
                  data-kwimpalastatus='alive'
                  data-kwimpalaid='1674509898507-0'
                  fdprocessedid='6igtpr'
                />
                <button
                  className='btn btn-primary'
                  type='button'
                  data-dashlane-rid='951f647bcafd3dbe'
                  data-form-type='action,subscribe'
                  fdprocessedid='34m0d'
                  data-dashlane-label='true'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className='list-unstyled d-flex'>
            <li className='ms-3'>
              <a className='link-dark' href='#'>
                <svg className='bi' width='24' height='24'>
                  <use xlinkHref='#twitter'></use>
                </svg>
              </a>
            </li>
            <li className='ms-3'>
              <a className='link-dark' href='#'>
                <svg className='bi' width='24' height='24'>
                  <use xlinkHref='#instagram'></use>
                </svg>
              </a>
            </li>
            <li className='ms-3'>
              <a className='link-dark' href='#'>
                <svg className='bi' width='24' height='24'>
                  <use xlinkHref='#facebook'></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
