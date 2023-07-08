import {Input, Button,Text} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = e => {
        e.preventDefault();
        const { elements } = e.currentTarget;
        const form = e.target;

         const checkName = contacts.find(
            ({name}) => name.toLowerCase() === elements.name.value.toLowerCase()
        )
        
        if (checkName) {
            alert(`${elements.name.value} is already in contacts.`);
        } else {
            dispatch(addContact(elements.name.value, elements.number.value));
          }

        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <Text>Name</Text>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>

            <label>
                <Text>Number</Text>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </label>
                
            <Button type="submit">Add contact</Button>
        </form>
    );
}