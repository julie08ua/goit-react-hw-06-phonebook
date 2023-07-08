import { useSelector } from 'react-redux';
import { getContacts} from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
    const contacts = useSelector(getContacts);
    
    return (
        <section>
            <h1>Phonebook</h1>
            <ContactForm />
            
            {!!contacts.length && 
                (<>
                    <h2>Contacts:</h2> 
                    <Filter />
                </>)
            }
            <ContactsList />
        </section>
    );
}