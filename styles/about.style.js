import styled from "styled-components";

export const AboutPageWrapper = styled.div`
  .aboutHeroBg {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-size: 120%;
    background-repeat: no-repeat;
    min-height: 450px;
    background-position: 50% 100%;
    padding-top: 3em;

    @media only screen and (min-width: 768px) {
      min-height: 640px;
      justify-content: center;
      padding-top: 0;
    }
    @media only screen and (min-width: 1024px) {
      background-position: 50% 48%;
    }
    .blackContainer {
      border-radius: 0.5rem;
      @media only screen and (min-width: 768px) {
        background-color: rgba(31, 26, 23, 0.2);
      }
    }
  }
  .title {
    font-size: 36px;
    font-weight: 700;
    @media only screen and (min-width: 1024px) {
      font-size: 48px;
    }
  }
  .card-content {
    background-color: rgba(31, 26, 23, 0.2);
  }
`;
