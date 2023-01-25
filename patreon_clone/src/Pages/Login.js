import * as React from 'react';
import { Button, Container, FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import Base from "../components/Base"

const Login=()=>{

    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{size: 6, offset:3}}>
                        <Card>

                            <CardHeader>Sign in to Patreon lite</CardHeader>

                            <CardBody>

                                <form className="text-center">
                                    <TextField id="outlined-basic" label="Email" variant="outlined" helperText="Admin@gmail.com"/> <br />
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                    </FormControl>
                                    <br />
                                    <Button variant="contained">Login</Button>
                                    
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default Login; 