export default function Botao({ nome, acaoBtn}){
  return(
    <button onClick={acaoBtn}>
      {nome}
    </button>
  );
}