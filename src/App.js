import React from "react";
import style from "./styles.module.css";
import Left from "./left/left";
import Right from "./right/right";
import { connect } from "react-redux";
import { SortUser } from "./store/reduxStore/actions/sortDatausers";

class App extends React.Component {
  render() {
    // console.log(this.props.personOpen.people);
    return (
      <div className={style.App}>
        <Left
          people={this.props.personOpen.people}
          openHistory={(name) => {
            this.props.openHistory(name);
          }}
        />
        <Right
          people={this.props.personOpen.people}
          masgAdder={(msg) => {
            this.props.masgAdder(msg);
          }}
          ChackSender={(msg) => this.props.ChackSender(msg)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personOpen: state.openReducer,
    masgAdder: state.masgAdder,
    ChackSender: state.ChackSender
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openHistory: (name) => {
      dispatch({
        type: "OPEN",
        payload: name
      });
    },
    masgAdder: (msg) => {
      dispatch({
        type: "ADD",
        payload: msg
      });
    },
    ChackSender: (msg) => {
      dispatch({
        type: "CHAKA_SENDER",
        payload: msg
      });
    }
  };
};

// work with reducers

export default connect(mapStateToProps, mapDispatchToProps)(App);
