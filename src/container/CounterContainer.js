import React, { Component } from "react";
import { connect } from "react-redux";

const addOneAction = {
    type: "ADD_ONE"
};

const removeOneAction = {
    type: "REMOVE_ONE"
};

const addTenAction = {
    type: "ADD_TEN"
};

const removeTenAction = {
    type: "REMOVE_TEN"
};

const resetAction = {
    type: "RESET"
};

class CounterComponent extends Component {
    render() {
        const { count, dispatch } = this.props;
        return (
            <div>
                <p>{count}</p>
                <button onClick={() => dispatch(addOneAction)}>add 1</button>
                <button onClick={() => dispatch(removeOneAction)}>remove 1</button>
                <button onClick={() => dispatch(addTenAction)}>add 10</button>
                <button onClick={() => dispatch(removeTenAction)}>remove 10</button>
                <button onClick={() => dispatch(resetAction)}>reset</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;