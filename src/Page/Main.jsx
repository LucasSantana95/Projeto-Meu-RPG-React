import { Monster } from "../Components/Monster/Monster";
import { WeaponButton } from "../Components/WeaponButton";
import './style.css'

export const Main = ({weapons, handleWeapon, showVictory, round, monster, monsterLife, attacksLogs, isHidden}) => {

  return (
    <>
      <main className={`gameboard ${isHidden}`}>
        <h1> Fase {round}</h1>
        <section className="main-board">
          <Monster round={round} monster={monster} monsterLife={monsterLife} />
          <textarea value={attacksLogs} className='log-list' readOnly></textarea>
        </section>
        <section className={"div-buttons"}>
          {weapons.map((weapon) =>(
            <WeaponButton key={weapon.displayName} weapon={weapon} handleWeapon={handleWeapon}/>
          ))}
        </section>
      </main>
      {showVictory()}
    </>
  );
};
