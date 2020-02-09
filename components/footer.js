import styled from "@emotion/styled";

import { color } from "../utils/config";

const FooterContainer = styled.footer`
  margin-top: 96px;
  margin-bottom: 48px;
  font-size: 12px;
  color: ${color.gray2};
`;

export default function Footer() {
  return (
    <FooterContainer>
      2015–2020 © Zilong Liang <br />
      <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>{" "}
      Licensed
    </FooterContainer>
  );
}