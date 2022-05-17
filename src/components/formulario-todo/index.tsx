import { useForm } from "react-hook-form";
import useTODOState from "../../hooks/useTODOState";
import { ITodo } from "../../models/todo";
import { FormularioTODOStyle } from "./style";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    id: yup.string().required('O ID é obrigatório'),
    titulo: yup.string().required('O título é obrigatório'),
    descricao: yup.string().required('A descrição é obrigatório'),
}).required();

const FormularioTODO = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ITodo>({
        resolver: yupResolver(schema)
    });
    const adicionaTODO = useTODOState(state => state.adicionaTODO)
    const onSubmit = (data: ITodo) => {
        adicionaTODO(data),
        reset()
    };

    return (
        <FormularioTODOStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="ID" {...register("id")} />
                <p>{errors.id?.message}</p>
                <input placeholder="Titulo" {...register("titulo")} />
                <p>{errors.titulo?.message}</p>
                <textarea placeholder="Descrição" {...register("descricao")} />
                <p>{errors.descricao?.message}</p>
                <input type="submit" />
            </form>
        </FormularioTODOStyle>
    )
}

export default FormularioTODO;