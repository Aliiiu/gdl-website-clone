import styled from "styled-components";
// import Back from '../../../'

export const PageHeader = styled.header`
  min-height: 420px;
  margin-top: -60px;
  /* background-image: ${props => "url(../../)" || null} */
  background-color: ${props =>
    props.bg || "rgba(162,166,168,var(--tw-bg-opacity))"};
  .section-header {
    line-height: 1.1;
    font-size: 3rem;
    font-weight: 700;
  }
  .section-hint {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  @media only screen and (max-width: 768px) {
    min-height: 360px;
    .section-header {
      line-height: 2.5rem;
      font-size: 2.25rem;
    }
    .section-hint {
      line-height: 24px;
    }
  }
`;
