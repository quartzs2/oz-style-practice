/**
 * Flexbox 레이아웃을 위한 CSS 문자열을 생성하는 헬퍼 함수입니다.
 * styled-components와 함께 사용하기 용이하도록 설계되었습니다.
 *
 * @param {object} props - Flexbox 설정을 위한 속성 객체입니다.
 * @param {string} [props.$direction="row"] - flex-direction 값 (e.g., "row", "column").
 * @param {string} [props.$justify="start"] - justify-content 값 (e.g., "center", "space-between").
 * @param {string} [props.$align="stretch"] - align-items 값 (e.g., "center", "flex-start").
 * @param {number|string} [props.$gap=0] - flex 아이템 간의 간격 (e.g., 10, "10px").
 * @param {string} [props.$wrap="nowrap"] - flex-wrap 값 (e.g., "wrap", "nowrap").
 * @returns {string} - 생성된 CSS 문자열.
 */
export const flex = ({
  $direction = "row",
  $justify = "start",
  $align = "stretch",
  $gap = "0px",
  $wrap = "nowrap",
}) => `
    display: flex;
    flex-direction: ${$direction};
    justify-content: ${$justify};
    align-items: ${$align};
    gap: ${$gap};
    flex-wrap: ${$wrap};
  `;

/**
 * 폰트 스타일을 위한 CSS 문자열을 생성하는 헬퍼 함수입니다.
 * styled-components와 함께 사용하기 용이하도록 설계되었습니다.
 *
 * @param {object} props - 폰트 설정을 위한 속성 객체입니다.
 * @param {string|number} props.$size - font-size 값 (e.g., 16, "16px", "1rem"). 필수 값입니다.
 * @param {string|number} [props.$weight=400] - font-weight 값 (e.g., 400, 700, "bold").
 * @returns {string} - 생성된 CSS 문자열.
 */
export const font = ({ $size, $weight = 400 }) => `
    font-size: ${$size};
    font-weight: ${$weight};
  `;
