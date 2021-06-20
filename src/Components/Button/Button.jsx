import st from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onButtonClick }) => {
  return (
    <button type="button" className={st.Button} onClick={onButtonClick}>
      <span className={st.Label}>Load more</span>
    </button>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
