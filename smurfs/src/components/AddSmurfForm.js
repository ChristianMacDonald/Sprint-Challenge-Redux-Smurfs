import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfForm extends Component {
    handleSubmit = event => {
        event.preventDefault();
        let elements = event.target.elements;
        this.props.addSmurf({
            name: elements['name'].value,
            age: parseInt(elements['age'].value),
            height: elements['height'].value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="number" name="age" />
                <br />
                <input type="text" name="height" />
                <br />
                <input type="submit" />
            </form>
        );
    }
}

export default connect(() => ({}), { addSmurf })(AddSmurfForm);