import "./style.css";

export const VictoryPage = ({ setRound, setIsHidden, setAttacksLogs }) => {
  return (
    <>
      <h1>Parabens, voce venceu todos os monstros!</h1>
      <h3> Deseja jogar novamente? </h3>

      <button
        onClick={() => {
          console.log("jogar novamente");
          setRound(1);
          setIsHidden("");
          setAttacksLogs([]);
        }}
      >
        Jogar Novamente
      </button>
    </>
  );
};
