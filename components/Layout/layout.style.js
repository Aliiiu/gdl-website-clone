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
  .testi {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
      var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
    .img-testi {
      box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
        var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
      margin-left: auto;
      margin-right: auto;
      height: 6rem;
      width: 6rem;
      /* background: red; */
      border-radius: 9999px;
      border-width: 4px;
      --tw-border-opacity: 1;
      border-color: rgba(162, 166, 168, var(--tw-border-opacity));
      --tw-border-opacity: 0.1;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: top;
      object-position: top;
      --tw-shadow: 0 0 transparent;
    }
    .testimony {
      --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transform: skew(0, 3deg);
      h1 {
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-bottom: 2rem;
        font-weight: 700;
        transform: skew(0, -3deg);
      }
      h2 {
        font-weight: 500;
        transform: skew(0, -3deg);
      }
      h3 {
        font-size: 0.875rem;
        line-height: 1.25rem;
        opacity: 0.75;
        transform: skew(0, -3deg);
      }
    }
  }
  .happy-img {
    img {
      max-height: 480px;
    }
  }

  .left-pane {
    ::before {
      content: " ";
      top: 0;
      left: 0;
      margin-top: -4rem;
      margin-left: -4rem;
      height: 15rem;
      width: 15rem;
      opacity: 0.7;
      border-width: 32px;
    }
    ::after,
    ::before {
      position: absolute;
      border-radius: 9999px;
      border-color: #91192b;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 60vh;
    /* padding: 0.5em 0.8em; */
  }
  /* @media only screen and (max-width: 1024px) {
    padding: 0;
  } */
`;

export const JoinClubContainer = styled.section`
  background: linear-gradient(180deg, #ffecef, #fff);
  .softGradient {
    background: linear-gradient(180deg, #ffecef, #fff);
  }
`;

export const MainImage = styled.div`
  & .main-image {
    border-width: 12px;
    background-color: red;
    height: 15rem;
    width: 15rem;
    position: relative;
    border-radius: 9999px;
    --tw-border-opacity: 1;
    border-color: rgba(255, 214, 220, var(--tw-border-opacity));
    --tw-bg-opacity: 1;
  }
`;
