import useCEPState from "../../hooks/useCEPState";
import { ICepResponse } from "../../models/cepResponse";
import { ListagemCEPStyle } from "./style";

const ListagemCEP = () => {
    const ceps = useCEPState(state => state.ceps)
    const limparLista = useCEPState(state => state.limparLista)
    return (
        <ListagemCEPStyle>
            <button onClick={() => limparLista()}>Limpar Lista</button>
            <ul>
                {ceps.map((cep: ICepResponse) => {
                    return (
                        <li>
                            <h4>Rua: {cep.logradouro}</h4>
                            <h4>Localidade: {cep.localidade}</h4>
                        </li>
                    )
                })}
            </ul>
        </ListagemCEPStyle>
    )
}

export default ListagemCEP;