import React from 'react';
import FormGroup from "react-bootstrap/es/FormGroup";
import FormControl from "react-bootstrap/es/FormControl";
import Form from "react-bootstrap/es/Form";
import Button from "react-bootstrap/es/Button";

export class CallBackForm extends React.Component {

    render() {
        return (
            <Form inline>
                <FormGroup controlId="formInlineName">
                    <FormControl type="text" placeholder="Имя" />
                </FormGroup>
                <FormGroup controlId="formInlineTel">
                    <FormControl type="text" placeholder="+7 (937) 5229091" />
                </FormGroup>
                <Button type="submit">Отправить</Button>
            </Form>
        );
    }
}