import * as S from "./Styles";
import Input from "../Input/Input";
import { useState } from "react";

const FormCadastro = () => {
  const [fileName, setFileName] = useState<string>("");
  
  function changeFile(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0].name;
      setFileName(file);
    }
  }

  return (
    <S.Form onSubmit={(e) => e.preventDefault()}>
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
      <S.FileInputWrapper>
        <S.HiddenFileInput id="file" onChange={changeFile} />
        <S.CustomButton htmlFor="file">
          {fileName ? fileName : "Escolher Arquivo"}
        </S.CustomButton>
      </S.FileInputWrapper>
      <S.Button>Cadastrar Veículo</S.Button>
    </S.Form>
  );
};

export default FormCadastro;
