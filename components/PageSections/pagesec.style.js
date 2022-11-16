import styled from "styled-components";

export const RightProductSection = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: rgba(255, 236, 239, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.3;
  --tw-text-opacity: 1;
  color: rgba(31, 26, 23, var(--tw-text-opacity));
  min-height: 400px;
  h2 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 0.25rem;
    font-weight: 700;
  }
  .sectionhint {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 36px;
    color: rgba(31, 26, 23, var(--tw-text-opacity));
    --tw-text-opacity: 0.9;
  }
  @media only screen and (max-width: 768px) {
    --tw-bg-opacity: 0.3;
    .sectionhint {
      /* line-height: 36px; */
      --tw-text-opacity: 1;
    }
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  min-height: 320px;
  max-width: 90vw;
  & section {
    max-width: 1200px;
    padding-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90vh;
  }
  article {
    & p {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;
