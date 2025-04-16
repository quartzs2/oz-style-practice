import styled from "styled-components";
import { flex, font } from "../styled/styled";

const $tagColor = "#d7fa00";
const $gray = "rgb(160, 160, 160)";

const StyledContentContainer = styled.div`
  ${flex({ $direction: "column", $align: "flex-start", $gap: "5px" })}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${font({ $size: "12px" })}
    color: ${$tagColor};
    border: 1px solid ${$tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font({ $size: "18px", $weight: 600 })}
  }
  p {
    ${font({ $size: "12px" })}
    color: ${$gray};
  }
`;

export default function Content({ content }) {
  return (
    <StyledContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContentContainer>
  );
}
