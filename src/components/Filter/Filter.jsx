import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { setValueFilter } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();

    const changeFilter = ({ target }) => {
        dispatch(setValueFilter(target.value));
    };

    <label>
        <p>Find contacts by name</p>
        <Input
            type="text"
            value={getFilter}
            onChange={changeFilter} />
    </label>
};