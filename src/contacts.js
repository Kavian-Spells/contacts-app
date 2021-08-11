import react from 'react';
import { connect } from 'react-redux';

class ContactsList extends (react.Component) {
    render() {
        return (
            <div>
                <ul>
                    {this.props.contacts_list.map((contact, index) => {
                        return <li key={index}>
                        {contact.name}:
                        {contact.city}, 
                        {contact.state}
                        </li>; 
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {contacts_list: state.contacts_list};
}

var ConnectedContactsList = connect(mapStateToProps)(ContactsList);
export default ConnectedContactsList;