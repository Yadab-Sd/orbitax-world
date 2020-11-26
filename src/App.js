import logo from './logo.jpg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleRight,
  faBars,
  faDatabase,
  faFileContract,
  faFolder,
  faSearch,
  faTimes,
  faToggleOn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

function App() {
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
  return (
    <div className='orbitax'>
      <header className='orbitax-header'>
        <div className='orbitax-header-left d-flex  justify-space'>
          <img src={logo} alt='logo' className='logo' />
          <div className='toggle-btn p-10'>
            <FontAwesomeIcon icon={faBars} className='dead-text' />
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
                <FontAwesomeIcon icon={faAngleDown} />
              </div>{' '}
            </div>
          </div>
        </div>
        <div className='orbitax-header-right d-flex  justify-space p-10'>
          <p className='white'>Details</p>
          <div className='times-icon'>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>{' '}
      </header>
      <div className='orbitax-body d-flex'>
        <div className='orbitax-body-left border-r'>
          <ul>
            <li>
              <a href='#' className='p-5 d-flex justify-space bold'>
                <span>Menu Item </span>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
          </ul>
        </div>
        <div className='orbitax-body-middle'>
          <ul className='orbitax-breadcrumbs'>
            {breadcrumbs.map((breadcrumb, index) =>
              breadcrumb.url ? (
                <li key={index}>
                  <a href={breadcrumb.url} title={breadcrumb.title}>
                    {breadcrumb.title}
                  </a>
                  <span className='breadcome-separator'>&gt;</span>
                </li>
              ) : (
                <li key={index}>{breadcrumb.title}</li>
              )
            )}
          </ul>
        </div>
        <div className='orbitax-body-right p-10 border-l'>
          <h4 className='heading'>Field and Data Mapping</h4>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
