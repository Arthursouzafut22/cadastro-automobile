import { GlobalStyle, Container } from "./Global";
import SidNav from "./components/SidNav/SidNav";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Container>
        <GlobalStyle />
        <SidNav />
        <Wrapper />
      </Container>
    </>
  );
}

export default App;
