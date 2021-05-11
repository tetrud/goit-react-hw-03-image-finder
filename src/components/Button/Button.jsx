import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text = '', type, onClick }) => {
  return (
    <button className="Button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  type: PropTypes.node,
};

export default Button;
