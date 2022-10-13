import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 80vh;
  display: flex;
  /* justify-content: center;
  align-items: flex-end; */
  @media only screen and (max-width: 768px) {
    min-height: 60vh;
    /* padding: 0.5em 0.8em; */
  }
  /* @media only screen and (max-width: 1024px) {
    padding: 0;
  } */
`;
