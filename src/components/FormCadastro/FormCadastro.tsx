import * as S from "./Styles";
import Input from "../Input/Input";
import { TypesInput } from "../Input/Input";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const FormCadastro = () => {
  const [fileName, setFileName] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypesInput>();
  console.log(errors);

  function changeFile(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0].name;
      setFileName(file);
    }
  }

  const onSubmit: SubmitHandler<TypesInput> = (data) => {
    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Cadastro / Veículo</h1>
      <Input
        type="text"
        label="modelo"
        placeholder="Digite o modelo"
        register={register}
      />
      {errors?.modelo && <p>Preencha o campo.</p>}
      <Input
        type="text"
        label="marca"
        placeholder="Digite a marca"
        register={register}
      />
      {errors?.marca && <p>Preencha o campo.</p>}
      <Input
        type="text"
        label="cor"
        placeholder="Digite a cor"
        register={register}
      />
      {errors?.cor && <p>Preencha o campo.</p>}
      <Input
        type="number"
        label="ano"
        placeholder="Digite o ano"
        register={register}
      />
      {errors?.ano && <p>Preencha o campo.</p>}
      <Input
        type="text"
        label="placa"
        placeholder="Digite a placa"
        register={register}
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
