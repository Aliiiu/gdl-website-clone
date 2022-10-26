import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled as styler } from "@mui/material/styles";

export const CustomTabs = styled(Tabs)`
  border: ${props => (props.isHPA ? "1.5px solid #000" : "none")};
  border-bottom: "1px solid #000";
  padding: ${props => (props.isHPA || !props.isInterest ? ".3em" : null)};
  border-radius: ${props =>
    props.isHPA ? "10px" : !props.isInterest ? "5px" : null};
  & .MuiTabs-indicator {
    background-color: ${props =>
      props.isHPA
        ? "transparent"
        : props.isInterest
        ? "#922333"
        : "transparent"};
    padding: 2px 0;
  }
  @media (max-width: 1024px) {
  }
`;

export const CustomTab = styler(props => <Tab disableRipple {...props} />)(
  ({ theme, ...props }) => ({
    textTransform: "none",
    fontWeight: "300",
    fontSize: "1rem",
    marginRight: theme.spacing(1),
    color: `${props.isHPA || props.isInterest ? "#BCBCBC" : "inherit"}`,
    width: `${props.isHPA && props.isGroup ? "35%" : props.isHPA ? "50%" : ""}`,
    margin: `${props.isHPA ? "auto" : ""}`,
    "&.Mui-selected": {
      color: `${props.isHPA ? "#fff" : "#922333"}`,
      // fontWeight: theme.typography.fontWeightRegular,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export const TabHead = styled.div`
  background: linear-gradient(136.67deg, #8d2e36 8.34%, #ca3832 95.26%);
  padding: 1em 2em 3em;
  opacity: 1;
`;
