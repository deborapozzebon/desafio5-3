import create from 'zustand'
import { ICep } from '../models/cep';
import { ICepResponse } from '../models/cepResponse';

interface ICepState {
    ceps: ICepResponse[];
    adicionaCEP: (cep: ICepResponse) => void;
    limparLista: () => void;
}

const useCEPState = create<ICepState>(set => ({
    ceps: [],
    adicionaCEP: (cep: ICepResponse) => set(state => ({ ceps: [...state.ceps, cep] })),
    limparLista: () => set({ceps: []})
}))

export default useCEPState;