import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  // ini berjalan ketika class jalan (pertama)
  constructor(props) {
    super(props);
    console.log("ini constructor");
    this.state = {
      angka: 0,
      isLoading: true,
      text: "",
      list: []
    };
  }

  // setelah render
  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.state.angka);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  componentWillUnmount() {
    console.log("will mount");
  }

  handleCount() {
    this.setState({ angka: this.state.angka + 1});
    console.log(this.state.angka);
  }

  handleChangeInput(value) {
    this.setState({ text: value });
  }

  handleSubmit() {
    this.setState({ list: [this.state.text, ...this.state.list], text: "" });
  }

  handleShowText() {
    this.setState({ isShowText: true});
  }

  // render view
  render() {
    return (
      <div className="App">
        <Header title="Header" />
        {this.state.isLoading ? <p>Loading.....</p> : <Body />}

        <button onClick={() => this.handleCount()}>Count</button>

        <p>{this.state.angka}</p>

        <input
        value={this.state.text}
        placeholder="input"
        onChange={res => this.handleChangeInput(res.target.value)}
        />

        <button onClick={() => this.handleSubmit()}>submit</button>
        <button onClick={() => this.setState({ list: [] })}>reset</button>

        {this.state.list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }
}

export default App;