import * as S from "./Styles";
import { Path, UseFormRegister } from "react-hook-form";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

type IInput = {
  register: UseFormRegister<InputProps>;
  label: Path<TypesInput>;
  required: boolean;
};

export type TypesInput = {
  modelo: string;
  marca: string;
  cor: string;
  ano: string;
  placa: string;
  uva: string;
};

const Input: React.FC<InputProps> = ({
  register,
  type,
  label,
  ...rest
}: IInput) => {
  return (
    <S.Input type={type} {...rest} {...register(label, { required: true })} />
  );
};

export default Input;
