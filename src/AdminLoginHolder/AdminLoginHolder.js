import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import "./AdminLoginHolder.css";
import CommonButton from '../small-components/CommonButton/CommonButton';


// Button has a special style. "primary"

function AdminLoginHolder(props) {
  return (
    <div className="appLoginHolderContainer">
        <Card className="appLoginCard">
            <CardContent>
                <h2>Admin Login</h2>

                <div>
                    <TextField  fullWidth
                                label="Admin Email"
                                margin="normal"
                                helperText="eg: abc@email.com"
                                type="email"
                                required
                                InputLabelProps={{ shrink: true }}
                    ></TextField>
                </div>
                <div>
                    <TextField  fullWidth
                                label="Password"
                                margin="normal"
                                type="password"
                                helperText="eg. *******"
                                required
                                InputLabelProps={{ shrink: true }}
                    ></TextField>
                </div>

            </CardContent>

            <CardActions>
                <CommonButton type="primary">Login</CommonButton>
            </CardActions>
        </Card>
    </div>
  );
}

export default AdminLoginHolder;
