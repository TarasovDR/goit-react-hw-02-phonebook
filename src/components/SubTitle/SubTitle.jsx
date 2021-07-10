import PropTypes from 'prop-types';
import { SectionTitle } from './SubTitle.styled';

const Title = ({ text }) => {
  return <SectionTitle>{text}</SectionTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;