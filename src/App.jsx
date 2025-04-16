import styled from "styled-components";
import { contents } from "./assets/data/data";
import { flex } from "./styled/styled";
import Content from "./components/Content";
import Header from "./components/Header";

const StyledSection = styled.section`
  ${flex({ $justify: "center", $align: "center", $wrap: "wrap", $gap: "20px" })}
  padding: 20px 40px;
`;

function App() {
  return (
    <main>
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;
