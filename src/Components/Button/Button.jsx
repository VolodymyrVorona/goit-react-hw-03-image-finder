import st from './Button.module.css';

const Button = ({ onButtonClick }) => {
  return (
    <button type="button" className={st.Button} onClick={onButtonClick}>
      <span className={st.Label}>Load more</span>
    </button>
  );
};

export default Button;
