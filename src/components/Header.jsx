import componentStyles from '@/styles/Header.module.scss';
import PropTypes from 'prop-types';

const Header = (props) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle} className={componentStyles.header}>
      { props.children }
    </header>
  )
};

Header.propTypes = {
  children: PropTypes.array
}

export default Header;
