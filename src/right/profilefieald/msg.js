import React from "react";
import style from "./../cssmain/msg.module.css";
import { reactLocalStorage } from "reactjs-localstorage";

export default class Msg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persone: {},
      people: this.props.persone,
      newpeople: []
    };
  }
  /*
  componentWillMount() {
    localStorage.getItem("people") &&
      this.setState({
        newpeople: JSON.parse(localStorage.getItem("people"))
      });
  }
 */
  //  componentWillUpdate(nextProps, nexState) {
  //    localStorage.setItem("people", JSON.stringify("nexState.newpeople"));
  // };
  componentDidUpdate(prevProps, prevState) {}

  componentDidMount() {
    this.setState(
      {
        newpeople: this.props.persone
      },
      () => {
        localStorage.setItem("people", JSON.stringify(this.props.persone));
        localStorage.setItem("data", Date.now());
      }
    );
  }
  componentWillReceiveProps() {
    /*   let data = { ...this.props.persone };
    let time = localStorage.getItem("data");
    if (data !== this.props.persone) {
      if (Date.now() - time > 10) {
        localStorage.setItem("people", JSON.stringify(this.props.persone));
        */
    this.setState({
      people: JSON.parse(localStorage.getItem("people"))
    });
    /* }
    } */
  }

  render() {
    //  console.log(this.state.people);

    let state = {};
    for (let i = 0; i < this.state.people.length; i++) {
      if (this.state.people[i].opened === true) {
        state = this.state.people[i];
      }
    }
    let Newlist = [];
    const list = state.msgs.map((p) => {
      if (p.sender === state.name) {
        Newlist.push(
          <div key={p.key} className={style.MsgSent}>
            <div className={style.Box}>
              <div className={style.Image}>
                <img
                  src={state.image}
                  style={{
                    width: "10vh",
                    height: "10vh",
                    borderRadius: "55%",
                    marginLeft: "3px"
                  }}
                  alt="img"
                />
              </div>
              <div className={style.Msgs}>{p.msg}</div>
            </div>
            <div className={style.Date}>{p.sentAt}</div>
          </div>
        );
      } else {
        Newlist.push(
          <div key={p.key}>
            <div className={style.ContMine}>
              <div className={style.MsgOp}>{p.msg}</div>
            </div>
            <div className={style.DateRight}>
              <h1 className={style.Aligner}>{p.sentAt}</h1>
            </div>
          </div>
        );
      }
    });

    return (
      <div className={style.MsgFeald}>
        <div className={style.List}>{Newlist}</div>
        <div className={style.Bottomer}></div>
      </div>
    );
  }
}
