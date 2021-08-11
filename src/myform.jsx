import react from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class MyForm extends react.Component {
    render() {
      return (
        <Card style={{maxWidth: '500px', margin: "20px auto"}}>
          <CardContent>
            Narf
          </CardContent>
          <CardActions>
            <Button color="primary">Submit</Button>
          </CardActions>
        </Card>
      )
    }
  }
  
  export default MyForm;