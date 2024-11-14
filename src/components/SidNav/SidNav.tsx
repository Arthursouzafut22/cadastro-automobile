import * as S from "./Styles";
import { IoHome } from "react-icons/io5";
import { FaCarTunnel } from "react-icons/fa6";

const SidNav = () => {
  return (
    <S.Nav>
      <button>
        <IoHome style={{ color: " #ffffff" }} />
        Home
      </button>
      <button>
        <FaCarTunnel style={{ color: " #ffffff" }} />
        Carros Cadastrados
      </button>
    </S.Nav>
  );
};

export default SidNav;
