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

export const MainImage = styled.div`
  /* background-image: url("https://res.cloudinary.com/gdlapp/image/upload/v1627286241/image/WhatsApp%20Image%202021-07-23%20at%208.13.54%20PM.jpg"); */
  .main-image {
    border-width: 12px;
    background-color: red;
    height: 15rem;
    width: 15rem;
    position: relative;
    border-radius: 9999px;
    --tw-border-opacity: 1;
    border-color: rgba(255, 214, 220, var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    /* background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover; */
  }
`;
