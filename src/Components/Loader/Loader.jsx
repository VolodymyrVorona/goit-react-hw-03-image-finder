import Loader from 'react-loader-spinner';
import st from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={st.Loader}>
      <Loader type="ThreeDots" color="#00BFFF" height={70} width={100} />
    </div>
  );
};

export default Spinner;
