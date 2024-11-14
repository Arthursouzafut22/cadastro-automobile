import * as S from "./Styles";
import Input from "../Input/Input";

const FormCadastro = () => {
  return (
    <S.Form>
      <h1>Cadastro / Veículo</h1>
      <Input
        type="text"
        label="modelo"
        id="modelo"
        name="modelo"
        value={""}
        placeholder="Digite o modelo"
      />
      <Input
        type="text"
        label="marca"
        id="marca"
        name="marca"
        value={""}
        placeholder="Digite a marca"
      />
      <Input
        type="text"
        label="cor"
        id="cor"
        name="cor"
        value={""}
        placeholder="Digite a cor"
      />
      <Input
        type="number"
        label="ano"
        id="ano"
        name="ano"
        value={""}
        placeholder="Digite o ano"
      />
      <Input
        type="text"
        label="placa"
        id="placa"
        name="placa"
        value={""}
        placeholder="Digite a placa"
      />
      <input type="file" name="file" id="file" />
      <S.Button>Cadastrar Veículo</S.Button>
    </S.Form>
  );
};

export default FormCadastro;
