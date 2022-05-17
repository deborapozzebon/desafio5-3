import useTODOState from "../../hooks/useTODOState";
import { ITodo } from "../../models/todo";
import { ListagemTODOStyle } from "./style";

const ListagemTODO = () => {
    const todos = useTODOState(state => state.todos)
    const remove = useTODOState(state => state.removeTODO)
    return (
        <ListagemTODOStyle>
            <ul>
                {todos.map((todo: ITodo) => {
                    return (
                        <li>
                            <button onClick={() => remove(todo)}>Excluir</button>
                            <div>
                                <h4>Título: {todo.titulo}</h4>
                                <span>ID: {todo.id}</span>
                                <span>Descrição: {todo.descricao}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </ListagemTODOStyle>
    )
}

export default ListagemTODO;