import styled from "styled-components";

export const NavDiv = styled.div`
  .left-nav {
    width: 25%;
    & li:not(.QuickLink) {
      & a {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 300;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        border-bottom-width: 1px;
        --tw-border-opacity: 0.2;
        padding: 0.75rem 1rem;
        border-color: rgba(194, 207, 214, var(--tw-border-opacity));
      }
      & a.selected {
        font-weight: 400;
        background-color: #f9f9f9;
      }
    }
  }
  .right-nav {
    width: 75%;
    overflow-y: auto;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 1rem 1.5rem;
    min-height: 320px;
    max-height: 80vh;
    background-color: #f9f9f9;
    .sub-menu {
      margin-top: 0.75rem;
      margin-bottom: 1.5rem;
      width: 50%;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: flex-start;
    }
    .icon {
      height: 3rem;
      width: 3rem;
      font-size: 1.5rem;
      line-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      background-color: rgba(255, 214, 220, var(--tw-bg-opacity));
      --tw-bg-opacity: 0.5;
      --tw-text-opacity: 1;
      color: rgba(153, 35, 51, var(--tw-text-opacity));
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.3s;
    }
  }
  @media only screen and (max-width: 768px) {
    .left-nav {
      width: 33.333333%;
      & li:not(.QuickLink) {
        & a {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
    .right-nav {
      width: 66.666666%;
      .sub-menu {
        margin-top: 0.5rem;
        margin-bottom: 0.75rem;
        width: 100%;
      }
      h3 {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 700;
      }
      .icon {
        height: 2rem;
        width: 2rem;
        line-height: 1.5rem;
        font-size: 1rem;
        --tw-bg-opacity: 1;
      }
    }
  }
`;

export const TopContainer = styled.div`
  display: flex;
  padding: 0 2em;
  justify-content: center;
  & input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  & input:checked ~ .drawer {
    background-color: #1c64f2;
  }
  .overlay {
    background-color: rgba(31, 26, 23, var(--tw-bg-opacity));
    --tw-bg-opacity: 0.8;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.5em 0.8em;
  }
  /* @media only screen and (max-width: 1024px) {
    padding: 0;
  } */
`;

export const OverlayDiv = styled.div`
  background-color: rgba(31, 26, 23, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.8;
`;
