import style from "./App.module.css";
import Canvas from "./Canvas/Canvas";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  let maxCount: number = 5;
  let minCount: number = 0;

  const [strongOne, setStrongOne] = useState(0);
  const [strongTwo, setStrongTwo] = useState(0);
  const [speedOne, setSpeedOne] = useState(0);
  const [speedTwo, setSpeedTwo] = useState(0);

  return (
    <div className={style.App}>
      <h1>HARD BATTLE 2</h1>
      <div className={style.container}>
        <Canvas />
        <div className={style.hero_ability_box}>
          <div>
            <h2>Hero 1</h2>
            <div className={style.ability}>
              <div>
                <p>Strong: {strongOne}</p>
                <button
                  onClick={() => setStrongOne(strongOne + 1)}
                  disabled={strongOne === maxCount}
                >
                  strong + 1
                </button>
                <button
                  onClick={() => setStrongOne(strongOne - 1)}
                  disabled={strongOne === minCount}
                >
                  strong - 1
                </button>
              </div>
              <div>
                <p>Speed:{speedOne}</p>
                <button
                  onClick={() => setSpeedOne(speedOne + 1)}
                  disabled={speedOne === maxCount}
                >
                  speed + 1
                </button>
                <button
                  onClick={() => setSpeedOne(speedOne - 1)}
                  disabled={speedOne === minCount}
                >
                  speed - 1
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2>Hero 2</h2>
            <div>
              <p>Strong: {strongTwo}</p>
              <button
                onClick={() => setStrongTwo(strongTwo + 1)}
                disabled={strongTwo === maxCount}
              >
                speed + 1
              </button>
              <button
                onClick={() => setStrongTwo(strongTwo - 1)}
                disabled={strongTwo === minCount}
              >
                speed - 1
              </button>
            </div>
            <div>
              <p>Speed:{speedTwo}</p>
              <button
                onClick={() => setSpeedTwo(speedTwo + 1)}
                disabled={speedTwo === maxCount}
              >
                speed + 1
              </button>
              <button
                onClick={() => setSpeedTwo(speedTwo - 1)}
                disabled={speedTwo === minCount}
              >
                speed - 1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
