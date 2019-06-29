import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';

class SmurfList extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    handleClick = event => {
        this.props.deleteSmurf(event.target.dataset.id);
    }

    render() {
        if (this.props.fetchingSmurfs || this.props.addingSmurf || this.props.updatingSmurf || this.props.deletingSmurf) {
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
                                <br />
                                <button onClick={this.handleClick} data-id={smurf.id}>Delete</button>
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
        fetchingSmurfs: state.fetchingSmurfs,
        addingSmurf: state.addingSmurf,
        updatingSmurf: state.updatingSmurf,
        deletingSmurf: state.deletingSmurf
    }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfList);