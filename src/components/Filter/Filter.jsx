import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { filterContact } from 'redux/contacts/contacts';

import { FilterStyled } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

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
