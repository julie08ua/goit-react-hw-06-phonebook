import { ContactsItem, Button} from './ContactList.styled';
import { useDispatch, useSelector} from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const visibleContact =
        contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
        <ul>
            {visibleContact.map(({ id, name, number }) => (
                <ContactsItem key={id}>
                    {name}: {number}

                    <Button
                        type="button"
                        onClick={() => dispatch(deleteContact(id))}
                    >
                        Delete
                    </Button>
                </ContactsItem>
            ))}
        </ul>
    );
}