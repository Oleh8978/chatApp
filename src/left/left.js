import React from "react";
import style from "./cssMod/left.module.css";
import Profile from "./inside/profilendSerach/profile";
import List from "./inside/List/List";

export default class Left extends React.Component {
  constructor(props) {
    super(props);
    this.peopleHandleList = this.peopleHandleList.bind(this);
    this.checker = this.checker.bind(this);
    this.state = {
      people: this.props.people,
      newArrPeople: []
    };
  }

  componentDidMount() {
    this.checker();
  }

  peopleHandleList(value, people) {
    let newArr = [];

    for (let i = 0; i < people.length; i++) {
      if (people[i].name.toLowerCase() === value.toLowerCase()) {
        newArr.push(people[i]);
      }
    }

    if (value === "" || value === " ") {
      newArr = people;
    }

    this.setState({
      newArrPeople: newArr
    });
  }

  checker() {
    let newArr = this.props.people;
    /*  newArr.sort(function (a, b) {
      return a.lastUpdt - b.lastUpdt;
    }); */
    // console.log("new arr");
    // console.log(newArr);
    let reversedNewArr = newArr;
    if (this.state.newArrPeople.length === 0) {
      this.setState({
        newArrPeople: reversedNewArr
      });
    }
  }

  render() {
    //console.log(this.props.SortUser.people);
    //console.log(this.props.SortUser.people);
    return (
      <div className={style.Left}>
        <Profile people={this.state.people} onSearch={this.peopleHandleList} />
        <List
          people={this.state.newArrPeople}
          openHistory={(name) => {
            this.props.openHistory(name);
          }}
        />
      </div>
    );
  }
}
