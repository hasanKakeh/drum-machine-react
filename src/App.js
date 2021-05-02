import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
class App extends Component {
  state = {
    text: "",
    drum: [
      [
        {
          id: "Q",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/34[kb]linn-BDRUM13.wav.mp3",
          desc: "dsadsa",
        },
        {
          id: "W",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/16[kb]linn-BONGO1.wav.mp3",
          desc: "sdadsa",
        },
        {
          id: "E",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/11[kb]linn-CABASA-v2.wav.mp3",
          desc: "fdsfds",
        },
      ],
      [
        {
          id: "A",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/13[kb]linn-CHH.wav.mp3",
          desc: "sdfdsf",
        },
        {
          id: "S",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/40[kb]606-snare2.wav.mp3",
          desc: "sdfge",
        },
        {
          id: "D",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/15[kb]linn-Clap-1.wav.mp3",
          desc: "sdfdsf",
        },
      ],
      [
        {
          id: "Z",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/30[kb]linn-CONGA-H-v2.wav.mp3",
          desc: "sdfdsf",
        },
        {
          id: "X",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/79[kb]606-tom1.wav.mp3",
          desc: "sdfdsfs",
        },
        {
          id: "C",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/54[kb]606-cymbal5.wav.mp3",
          desc: "dfsdsf",
        },
      ],
    ],
    power: false,
    bank: false,
    volume: 50,
  };
  handleClick(item) {
    var audio = document.getElementById(item.id);
    audio.play();
    this.setState({ text: item.id });
  }
  onKeyPress(e) {
    const key = e.key.toLowerCase();
    var audio;
    console.log(e);
    if (key === "q") audio = document.getElementById("Q");
    if (key === "e") audio = document.getElementById("E");
    if (key === "c") audio = document.getElementById("C");
    if (key === "s") audio = document.getElementById("S");
    if (key === "w") audio = document.getElementById("W");
    if (key === "a") audio = document.getElementById("A");
    if (key === "d") audio = document.getElementById("D");
    if (key === "z") audio = document.getElementById("Z");
    if (key === "x") audio = document.getElementById("X");
    if (audio) audio.play();
  }
  render() {
    return (
      <div
        id="drum-machine"
        className="App container mt-5 d-flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <div className="m-5 " style={{ width: 200, height: 200 }}>
          {this.state.drum.map((row) => {
            return (
              <div className="row">
                {row.map((item) => {
                  return (
                    <button
                      id={item.src}
                      className="btn drum-pad btn-primary border col-4 h-200"
                      style={{ height: 60 }}
                      onClick={() => this.handleClick(item)}
                      onKeyDown={(e) => this.onKeyPress(e)}
                    >
                      <audio
                        id={item.id}
                        preload="auto"
                        className="clip"
                        src={item.src}
                      ></audio>
                      <p onClick={() => this.handleClick(item)}>{item.id}</p>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
        <p id="display">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
