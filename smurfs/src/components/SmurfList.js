import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class SmurfList extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return <div>Fetching</div>;
        } else {
            return (
                <div>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <div key={smurf.id}>
                                <span>Name: {smurf.name}</span>
                                <br />
                                <span>Age: {smurf.age}</span>
                                <br />
                                <span>Height: {smurf.height}</span>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);