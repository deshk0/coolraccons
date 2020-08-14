import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './HomePage';

export class FormPage extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Form />
            </div>
        )
    }
}