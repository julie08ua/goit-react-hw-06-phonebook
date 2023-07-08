import { useDispatch, useSelector } from 'react-redux';
import { Input } from './Filter.styled';
import { setValueFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const valueFilter = useSelector(getFilter);

    const changeFilter = ({ target }) => {
        dispatch(setValueFilter(target.value));
    };

    return (
        <label>
        <p>Find contacts by name</p>
        <Input
            type="text"
            name="filter"
            value={valueFilter}
            onChange={changeFilter} />
        </label>
    )
};