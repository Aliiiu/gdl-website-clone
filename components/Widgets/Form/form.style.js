import styled from "styled-components";

export const InputField = styled.span`
  .Input:not(textarea) {
    height: 50px;
  }
  .Input {
    margin-top: 0.25rem;
    width: 100%;
    border-radius: 0.5rem;
    background-color: rgba(194, 207, 214, var(--tw-bg-opacity));
    --tw-bg-opacity: 0.2;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    outline: 0;
  }
`;
