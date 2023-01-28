import "./styles.css";
import { Main } from "./Page/Main";
import { useEffect, useState } from "react";
import { VictoryPage } from "./Components/VictoryPage/VictoryPage";
import MonsterList from "./Model/MonsterList.json";

export default function App() {

  const weapons = [
    {
      displayName : 'Espada',
      damage : 5
    },
    {
      displayName : 'Machado',
      damage : 10
    },
    {
      displayName : 'Magia',
      damage : 15
    }
  ]
  const [round, setRound] = useState(1);
  const [monster, setMonster] = useState(MonsterList[round - 1]);
  const [monsterLife, setMonsterLife] = useState(monster.hp);
  const [attacksLogs, setAttacksLogs] = useState(["Histórico da Batalha \n\n"]);
  const [isHidden, setIsHidden] = useState("");

  const handleWeapon = (weapon) => {
      setMonsterLife((prev) => prev - weapon.damage);
        setAttacksLogs([
          ...attacksLogs,
          `Vc atacou com ${weapon.displayName} e causou ${weapon.damage} de dano \n\n`
        ]);
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
    <div className="App">
      <Main 
        weapons={weapons} 
        handleWeapon={handleWeapon}
        showVictory={showVictory}
        round={round}
        monster={monster}
        monsterLife={monsterLife}
        attacksLogs={attacksLogs}
        isHidden={isHidden}
      />
    </div>
  );
}