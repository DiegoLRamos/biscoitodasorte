import biscoitoNormal from '../../assets/biscoito.png';
import biscoitoQuebrado from '../../assets/biscoitoQuebrado.png';

export default function Biscoito({ imagemBiscoito, acaoClick}){

  const imagemSelecionada = imagemBiscoito ? biscoitoNormal : biscoitoQuebrado;
  
  return(
    <img src={imagemSelecionada} alt='biscoito' onClick={acaoClick} />
  );
}