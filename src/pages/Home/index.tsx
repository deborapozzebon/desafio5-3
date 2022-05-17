import FormularioTODO from "../../components/formulario-todo";
import ListagemTODO from "../../components/listagem-todo";

const Home = () => {
    return (
        <>
            <h1>TO-DO</h1>
            <span>Insira aqui suas anotações</span>
            <FormularioTODO />
            <ListagemTODO />
        </>
    )
}

export default Home;