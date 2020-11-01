import React from "react";
import style from "./profile.module.css";
import img from "./images/anon.jpg";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.hanldeInput = this.hanldeInput.bind(this);
  }

  hanldeInput(e) {
    this.props.onSearch(e.target.value, this.props.people);
  }

  render() {
    return (
      <div className={style.Profile}>
        <img
          src={img}
          style={{
            width: "10vh",
            height: "10vh",
            borderRadius: "55%",
            marginTop: "3vh",
            marginLeft: "1vh"
          }}
          alt="img"
        />
        <div className={style.Inputer}>
          <input className={style.MainInput} onChange={this.hanldeInput} />
        </div>
      </div>
    );
  }
}
