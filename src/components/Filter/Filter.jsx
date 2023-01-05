import { FilterStyled } from './Filter.styled';
import PropTypes from 'prop-types';
import { filterContact } from 'redux/contacts/contacts';
import { useDispatch } from 'react-redux';

const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <span>Find contacts by name</span>
      <input
        type="text"
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
        value={filter}
      />
    </FilterStyled>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterContacts: PropTypes.func,
};
