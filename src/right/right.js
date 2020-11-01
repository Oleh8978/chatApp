import React from "react";
import uri from "./../store/url/url";
import style from "./cssmain/main.module.css";
import Info from "./profilefieald/details";
import Msg from "./profilefieald/msg";
import Sender from "./profilefieald/sendFieald";

export default class Right extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.people);
    return (
      <div className={style.Right}>
        <Info persone={this.props.people} />
        <Msg persone={this.props.people} />
        <Sender
          people={this.props.people}
          masgAdder={(msg) => {
            this.props.masgAdder(msg);
          }}
          ChackSender={(msg) => this.props.ChackSender(msg)}
        />
      </div>
    );
  }
}
