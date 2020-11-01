import React from "react";
import useSound from "use-sound";
import style from "./../cssmain/sendfieald.module.css";
import img from "./user/sent.jpg";
import uri from "./../../store/url/url";
import msg from "./../../store/sounds/msg.mp3";

export default class Sender extends React.Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      value: "",
      people: this.props.people,
      timer: 0,
      msg: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeState = this.changeState.bind(this);
    this.fetchAndPost = this.fetchAndPost.bind(this);
  }
  async componentWillUpdate() {
    const response = await fetch(uri);
    const data = await response.json();
    this.setState({
      msg: data.value
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  changeState() {
    this.setState({
      value: ""
    });
  }

  fetchAndPost() {
    setTimeout(() => {
      //  const [play] = useSound(msg);
      this.props.ChackSender(this.state.msg);
    }, 10000);
  }

  render() {
    // console.log(this.state.msg);
    //this.props.ChackSender(this.props.msg);
    let newPeople = [];
    for (let i = 0; i < this.props.people.length; i++) {
      newPeople.push({ ...this.props.people[i] });
    }
    let sorted = newPeople.sort(function (a, b) {
      return a.lastUpdt - b.lastUpdt;
    });
    return (
      <div className={style.Sender}>
        <div className={style.Container}>
          <input
            className={style.Inputter}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button
            className={style.Sent}
            onClick={(msg) => {
              this.props.masgAdder(this.state.value);
              this.changeState();
              this.fetchAndPost();
            }}
          >
            <img
              src={img}
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "55%"
              }}
              alt="img"
            />{" "}
          </button>
        </div>
      </div>
    );
  }
}
