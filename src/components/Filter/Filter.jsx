import PropTypes from 'prop-types';
import SubTitle from 'components/SubTitle';

import {LabelFilter, InputFilter} from './Filter.styled';
import {ImSearch} from 'react-icons/im';

const Filter = ({value, onChange})=> {
  return (
    
    <LabelFilter>
      <SubTitle text={'Find Contacts by name'}/>
      <ImSearch/>
      <InputFilter type="text" value={value} onChange={onChange}/>
    </LabelFilter>
  )
}

Filter.propTypes={
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Filter;