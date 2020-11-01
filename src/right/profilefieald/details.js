import React from "react";
import style from "./../cssmain/main.module.css";
//import img from "./user/face.png";

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    //  this.asigner = this.asigner.bind(this);
    this.state = {
      people: this.props.persone
    };
  }

  componentWillMount() {
    this.asigner();
  }
  asigner() {
    this.setState({
      persone: this.props.persone
    });
  }

  render() {
    let state = {};
    for (let i = 0; i < this.state.people.length; i++) {
      if (this.state.people[i].opened === true) {
        state = this.state.people[i];
      }
    }
    //console.log(this.state.persone);
    return (
      <div className={style.Details}>
        <div className={style.Image}>
          <img
            src={state.image}
            style={{
              width: "15vh",
              height: "15vh",
              marginTop: "5px",
              marginLeft: "5px",
              float: "left",
              borderRadius: "55%"
            }}
            alt="img"
          />
        </div>
        <div className={style.NamePlacer}>
          <h1 className={style.Name}>{state.name}</h1>
        </div>
      </div>
    );
  }
}
