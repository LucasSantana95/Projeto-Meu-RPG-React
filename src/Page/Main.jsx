import { useEffect, useState } from "react";
import { Monster } from "../Components/Monster/Monster";
import { VictoryPage } from "../Components/VictoryPage/VictoryPage";
import MonsterList from "../Model/MonsterList.json";

export const Main = () => {
  const [round, setRound] = useState(1);
  const [monster, setMonster] = useState(MonsterList[round - 1]);
  const [monsterLife, setMonsterLife] = useState(monster.hp);
  const [attacksLogs, setAttacksLogs] = useState(["Histórico da Batalha \n\n"]);
  const [isHidden, setIsHidden] = useState("");

  const handleWeapon = (weapon) => {
    switch (weapon) {
      case "sword":
        setMonsterLife((prev) => prev - 5);
        setAttacksLogs([
          ...attacksLogs,
          "Vc atacou com espada e causou 5 de dano \n\n"
        ]);
        break;
      case "axe":
        setAttacksLogs([
          ...attacksLogs,
          "Vc atacou com machado e causou 10 de dano \n\n"
        ]);
        setMonsterLife((prev) => prev - 10);
        break;
      case "magic":
        setAttacksLogs([
          ...attacksLogs,
          "Vc atacou com magia e causou 15 de dano \n\n"
        ]);
        setMonsterLife((prev) => prev - 15);
        break;
      default:
        break;
    }
  };

  const showVictory = () => {
    if (isHidden) {
      return (
        <VictoryPage
          setRound={setRound}
          setIsHidden={setIsHidden}
          setAttacksLogs={setAttacksLogs}
        />
      );
    }
  };
  useEffect(() => {
    if (monsterLife <= 0) {
      setRound(round + 1);
      setAttacksLogs([...attacksLogs, "Vc derrotou o monstro \n\n"]);
    }
  }, [monsterLife]);

  useEffect(() => {
    if (round === 6) {
      setIsHidden("hidden");
    } else {
      setMonster(MonsterList[round - 1]);
    }
  }, [round]);

  useEffect(() => {
    setMonsterLife(monster.hp);
  }, [monster]);
  return (
    <>
      <div className={`gameboard ${isHidden}`}>
        <h1> Fase {round}</h1>
        <div className="main-board">
          <Monster round={round} monster={monster} monsterLife={monsterLife} />
          <div className={"log-list"}>
            <textarea value={attacksLogs} readOnly></textarea>
          </div>
        </div>
        <div className={"div-buttons"}>
          <button
            className="weapons-buttons"
            value={"sword"}
            onClick={(e) => handleWeapon(e.target.value)}
          >
            Espada
          </button>
          <button
            className="weapons-buttons"
            value={"axe"}
            onClick={(e) => handleWeapon(e.target.value)}
          >
            Machado
          </button>
          <button
            className="weapons-buttons"
            value={"magic"}
            onClick={(e) => handleWeapon(e.target.value)}
          >
            Magia
          </button>
        </div>
      </div>
      {showVictory()}
    </>
  );
};
