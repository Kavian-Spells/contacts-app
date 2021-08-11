import react from 'react';
import { connect } from 'react-redux';

// import MyForm from './myform';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class ContactsList extends (react.Component) {
    render() {
        return (
            <Card style={{maxWidth: '500px', margin: "20px auto"}}>
                <CardContent>
                    <List>
                        {this.props.contacts_list.map((contact, index) => {
                            return <ListItem key={index} dense divider>
                            {contact.name}:
                            {contact.city}, 
                            {contact.state}
                            </ListItem>; 
                        })}
                    </List>
                </CardContent>
                <CardActions>
                    <Button color="primary">Add Contact</Button>
                </CardActions>
            </Card>
        );
    }
}

function mapStateToProps (state) {
    return {contacts_list: state.contacts_list};
}

var ConnectedContactsList = connect(mapStateToProps)(ContactsList);
export default ConnectedContactsList;