import "./header.scss";
import HeaderTop from './components/HeaderTop';
import HeaderBottom from './components/HeaderBottom';

const Header = () => {
 

  return (
    <header className='header'>
      <div className='container'>
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
