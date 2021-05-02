import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
class App extends Component {
  state = {
    drum: [
      [
        {
          id: "Q",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/34[kb]linn-BDRUM13.wav.mp3",
        },
        {
          id: "W",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/16[kb]linn-BONGO1.wav.mp3",
        },
        {
          id: "E",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/11[kb]linn-CABASA-v2.wav.mp3",
        },
      ],
      [
        {
          id: "A",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/13[kb]linn-CHH.wav.mp3",
        },
        {
          id: "S",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/40[kb]606-snare2.wav.mp3",
        },
        {
          id: "D",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/15[kb]linn-Clap-1.wav.mp3",
        },
      ],
      [
        {
          id: "Z",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/30[kb]linn-CONGA-H-v2.wav.mp3",
        },
        {
          id: "X",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/79[kb]606-tom1.wav.mp3",
        },
        {
          id: "C",
          src:
            "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/54[kb]606-cymbal5.wav.mp3",
        },
      ],
    ],
    power: false,
    bank: false,
    volume: 50,
  };
  handleClick(src) {
    const audio = new Audio(src);
    audio.play();
  }
  render() {
    return (
      <div
        id="drum-machine"
        className="App container mt-5 d-flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <div id="display" className="m-5 " style={{ width: 200, height: 200 }}>
          {this.state.drum.map((row) => {
            return (
              <div className="row">
                {row.map((item) => {
                  return (
                    <button
                      id={item.id}
                      class="btn btn-primary border col-4 h-200"
                      style={{ height: 60 }}
                      onClick={() => this.handleClick(item.src)}
                    >
                      {item.id}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
