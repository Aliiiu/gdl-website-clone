import styled from "styled-components";

export const SectionWrapper = styled.div`
  .title {
    font-size: 2.5rem;
    line-height: 1.1 !important;
    font-weight: 700;
  }
  .hint {
    font-size: 1.125rem;
    /* font-weight: normal; */
  }
  .card {
    border-radius: 0.5em;
    overflow: hidden;
    width: 100%;
    height: 28em;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
      var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  }
  .card-btn {
    border-radius: 0.5em;
    padding: 0.75rem 1.5em;
    font-size: 1rem;
  }
  .getstarted-card {
    background: url("/Images/get-started.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
      var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  }
  .getstarted-bg {
    --tw-bg-opacity: 0.5;
    background-color: rgba(31, 26, 23, var(--tw-bg-opacity));
  }

  .faq-card {
    background: url("/Images/blog.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media screen(min-width: 500px) {
    .title {
      font-size: 3rem;
      line-height: 1.1 !important;
      font-weight: 700;
    }
    .getstarted-card {
      background-position: left;
      background-size: cover;
    }
  }
`;
