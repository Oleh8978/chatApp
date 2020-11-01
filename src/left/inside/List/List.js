import React from "react";
import style from "./style.module.css";

export default class List extends React.Component {
  render() {
    let people = this.props.people.map((p) => {
      return (
        <div className={style.Object} key={p.lastUpdt}>
          <button
            className={style.Clicker}
            onClick={(name) => this.props.openHistory(p.name)}
          >
            <div className={style.ImgPlace}>
              <img
                src={p.image}
                style={{
                  width: "6vh",
                  height: "6vh",
                  borderRadius: "55%",
                  marginLeft: "5px"
                }}
                alt="img"
              />
            </div>
            <div className={style.Container}>
              <div className={style.NamePlace}>
                <h1 className={style.Namer}>{p.name}</h1>
              </div>
              <div className={style.DatePlace}>
                <h1 className={style.Date}>{p.lastSent}</h1>
              </div>
              <div className={style.msgPlacer}>
                <p className={style.Msgs}>{p.lastMsg}</p>
              </div>
            </div>
          </button>
        </div>
      );
    });
    //console.log(this.props.people);
    return (
      <div className={style.List}>
        <div className={style.Header}>
          <h1 className={style.HOne}>Chats</h1>{" "}
        </div>
        {people}
      </div>
    );
  }
}
