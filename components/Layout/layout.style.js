import styled from "styled-components";

export const PageContainer = styled.div`
  ${
    "" /* min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  }

  ${"" /* align-items: flex-end; */}

  .softGradient {
    background: linear-gradient(180deg, #ffecef, #fff);
  }
  @media only screen and (max-width: 768px) {
    min-height: 60vh;
    /* padding: 0.5em 0.8em; */
  }
  /* @media only screen and (max-width: 1024px) {
    padding: 0;
  } */
`;
