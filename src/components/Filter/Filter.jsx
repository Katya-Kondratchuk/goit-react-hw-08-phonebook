import { FilterStyled } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilterContacts }) => {
  return (
    <FilterStyled>
      <span>Find contacts by name</span>
      <input type="text" onChange={handleFilterContacts} value={filter} />
    </FilterStyled>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterContacts: PropTypes.func,
};
