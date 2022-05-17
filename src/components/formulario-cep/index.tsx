import { useForm } from "react-hook-form";
import useCEPState from "../../hooks/useCEPState";
import { FormularioCEPStyle } from "./style";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ICep } from "../../models/cep";
import api from "../../services/api";
import { useState } from "react";

const schema = yup.object({
    cep: yup.string().required('O CEP é obrigatório'),
}).required();

const FormularioCEP = () => {
    const [estaCarregando, setEstaCarregando] = useState<boolean>(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICep>({
        resolver: yupResolver(schema)
    });
    const adicionaCEP = useCEPState(state => state.adicionaCEP)
    const onSubmit = async (data: ICep) => {
        const endereco = await getEndereco(data);
        adicionaCEP(endereco)
        reset();
    };

    const getEndereco = async (data: ICep) => {
        setEstaCarregando(true)
        const response = await api.get(`${data.cep}/json`)
        setEstaCarregando(false)
        return response.data;
    }

    return (
        <FormularioCEPStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="CEP" {...register("cep")} />
                <p>{errors.cep?.message}</p>
                <input type="submit" />
            </form>
            {estaCarregando && (<span>Carregando...</span>)}
        </FormularioCEPStyle>
    )
}

export default FormularioCEP;