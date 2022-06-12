import React from 'react';
import { Card, CardBody, CardTitle, Input, Button, Label } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Loginform(props) {
    return (
        <div>
            <Card
                className='w-25 m-auto mt-5 border-info border-5'
            >
                <CardBody>
                    <CardTitle tag="h5" className='text-center text-danger opacity-75 fs-3 fw-bold'>
                        LOGIN FORM
                    </CardTitle>
                    <Label className='text-info fs-5 m-0'>Full Name</Label>
                    <Input className='mb-2' placeholder='Enter your full name'
                    />
                    <Label className='text-info fs-5 m-0'>Email</Label>
                    <Input
                        type="email" className='mb-2' placeholder='Enter your email'
                    />
                     <Label className='text-info fs-5 m-0'>Email's Password</Label>
                    <Input
                        type="password" className='mb-2' placeholder="Enter your email's password"
                    />
                    <Label className='text-info fs-5 m-0'>Contact Number</Label>
                     <Input type="tel" className='mb-2' placeholder='Enter your contact number'/>
                    <Button
                        active
                        color="info"
                        className='text-white my-2'
                    >
                        Submit
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default Loginform;