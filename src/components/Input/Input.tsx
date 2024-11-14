import * as S from "./Styles";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
};

const Input: React.FC<InputProps> = ({ type, id, value, ...rest }) => {
  return <S.Input type={type} id={id} value={value} {...rest} />;
};

export default Input;
