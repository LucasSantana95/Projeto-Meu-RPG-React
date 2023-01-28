import "./style.css";

export const Monster = ({ round, monster, monsterLife }) => {
  return (
    <>
      <div className="monster-card">
        <img src={monster.thumb} alt={"thumb do monstro"} />
        <div className="monster-info">
          <p>
            <strong>Nome:</strong> {monster.name}
          </p>
          <p>
            <strong>Vida:</strong> {monsterLife + "/" + monster.hp}
          </p>
        </div>
      </div>
    </>
  );
};
