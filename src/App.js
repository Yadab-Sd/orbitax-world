import { useState } from 'react';
import logo from './logo.jpg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleRight,
  faArrowRight,
  faBars,
  faBriefcase,
  faCheck,
  faCheckSquare,
  faDatabase,
  faFileContract,
  faFolder,
  faProjectDiagram,
  faSearch,
  faSquare,
  faTimes,
  faToggleOn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [selection, setSelection] = useState([]);
  const breadcrumbs = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Features',
      url: null,
    },
  ];
  const workQuantities = [
    {
      title: 'Home',
      quantity: 18,
      icon: 'faChecked',
    },
    {
      title: 'Home',
      quantity: 18,
      icon: 'faChecked',
    },
  ];
  return (
    <div className='orbitax'>
      <header className='orbitax-header'>
        <div className='orbitax-header-left d-flex  justify-space'>
          <img src={logo} alt='logo' className='logo' />
          <div className='toggle-btn p-10'>
            <a href='#'>
              <FontAwesomeIcon icon={faBars} className='dead-text' />
            </a>
          </div>
        </div>
        <div className='orbitax-header-middle d-flex justify-space'>
          <div className='header-menus d-flex'>
            <div className='text-menus dead-text'>
              <a href='#'>Dashboard</a>
              <a href='#'>Tricks</a>
              <a href='#'>help</a>
            </div>
            <div className='icon-menus dead-text'>
              <ul>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faDatabase} />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faDatabase} />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faDatabase} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='search-and-account d-flex'>
            <div className='search d-flex'>
              <div className='icon'>
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input type='text' className='border' placeholder='Search ... ' />
            </div>
            <div className='account d-flex justify-space'>
              <div className='d-flex'>
                <div className='avatar'>
                  <img
                    src='https://lh3.googleusercontent.com/ogw/ADGmqu-iZPFaMAB3TSy-3aXT8SW4eprlHlFoXZTY0ziO=s32-c-mo'
                    alt='User'
                  />
                </div>
                <div>
                  <p className='white small'>Yadab</p>
                  <p className='small'>Active</p>
                </div>
              </div>
              <div className='icon p-10'>
                <a href='#'>
                  {' '}
                  <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </div>{' '}
            </div>
          </div>
        </div>
        <div className='orbitax-header-right d-flex  justify-space p-10'>
          <p className='white'>Details</p>
          <div className='times-icon'>
            <a href='#'>
              {' '}
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </div>
        </div>{' '}
      </header>
      <div className='orbitax-body d-flex'>
        <div className='orbitax-body-left border-r'>
          <ul>
            <li>
              <a href='#' className='d-flex justify-space bold'>
                <span>Favorites </span>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li>
              <a href='#' className='d-flex justify-space bold'>
                <span>Menu Item </span>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li>
              <a href='#' className='d-flex justify-space bold'>
                <span>Project Reports </span>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li>
              <a href='#' className='d-flex justify-space bold'>
                <span>Menu Item </span>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li>
              <a href='#' className='d-flex justify-space bold'>
                <span>Menu Item </span>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
          </ul>
        </div>
        <div className='orbitax-body-middle'>
          <div className='orbitax-breadcrumbs border-b p-10'>
            <ul>
              <li>
                <a href='#' className='bold'>
                  <FontAwesomeIcon icon={faBriefcase} />
                </a>
                <span className='breadcome-separator'>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </li>
              {breadcrumbs.map((breadcrumb, index) =>
                breadcrumb.url ? (
                  <li key={index}>
                    <a
                      href={breadcrumb.url}
                      title={breadcrumb.title}
                      className='bold'
                    >
                      {breadcrumb.title}
                    </a>
                    <span className='breadcome-separator'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </li>
                ) : (
                  <li key={index} className='bold'>
                    {breadcrumb.title}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className='table-container'>
            <div className='work-quantities d-flex-l'>
              {workQuantities.slice(0, 20).map((item, i) => (
                <div className='work-quantity border radius' key={item.title}>
                  <div className='work-quantity-info p-10 d-flex-l'>
                    <div className='icon radius d-flex'>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div className='work-quantity-text'>
                      <p>{item.title}</p>
                      <h2>{item.quantity}</h2>
                    </div>
                  </div>
                  <div className='work-quantity-view p-10'>
                    <a href='#'>
                      View all <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className='work-table-container'>
              <div className='work-table border radius'>
                <div className='table-head border-b'>
                  <div className='trow'>
                    <div className='tcol tcol-1 active bold'>
                      <a href='#' onClick={() => setSelection([])}>
                        <FontAwesomeIcon icon={faCheckSquare} />
                      </a>
                    </div>
                    <div className='tcol tcol-2 bold'>Status</div>
                    <div className='tcol tcol-3 bold'>Source Fields</div>
                    <div className='tcol tcol-4'>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className='tcol tcol-5 bold'>Orbitax Fields </div>
                  </div>
                </div>
                <div className='table-body'>
                  <div className='table-body-inner'>
                    {[1, 2, 3, 4, 5, 6].map((rowItem, i) => (
                      <div key={i} className='trow active'>
                        <div className='tcol tcol-1'>
                          <a href='#'>
                            <FontAwesomeIcon icon={faCheckSquare} />
                          </a>
                        </div>
                        <div className='tcol tcol-2 active-bar'>Status</div>
                        <div className='tcol tcol-3'>Source Fields</div>
                        <div className='tcol tcol-4'>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className='tcol tcol-5'>Orbitax Fields </div>
                      </div>
                    ))}
                    <div className='trow deactive'>
                      <div className='tcol tcol-1'>
                        <a href='#'>
                          <FontAwesomeIcon icon={faCheckSquare} />
                        </a>
                      </div>
                      <div className='tcol tcol-2 deactive-bar'>Status</div>
                      <div className='tcol tcol-3'>Source Fields</div>
                      <div className='tcol tcol-4'>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                      <div className='tcol tcol-5'>Orbitax Fields </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-controls d-flex justify-space border-t p-10'>
            <button className='button button-reverse border'>Cancel</button>
            <button className='button'>Next</button>
          </div>
        </div>
        <div className='orbitax-body-right p-10 border-l'>
          <h4 className='heading'>Field and Data Mapping</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem
            facilis perspiciatis obcaecati consectetur nostrum, maxime eveniet
            tempore ad quod optio odio similique dolores. Quaerat tenetur dicta
            fugit enim sed.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam id,
            voluptatibus commodi beatae, necessitatibus, delectus pariatur.
          </p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
}

export default App;
