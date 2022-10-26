import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FiPlus } from "react-icons/fi";

export const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // borderTop: `1px solid ${theme.palette.divider}`,
  position: "relative",
  borderWidth: "1px",
  borderColor: "rgba(194,207,214,var(--tw-border-opacity))",
  "--tw-border-opacity": "0.2",
  backgroundColor: "rgba(194,207,214,var(--tw-bg-opacity))",
  "--tw-bg-opacity": "0.1",
  marginBottom: "1.5rem",
  borderRadius: "0.5rem",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  // "&:before": {
  //   display: "none",
  // },
}));

export const AccordionSummary = styled(props => (
  <MuiAccordionSummary expandIcon={<FiPlus size={20} />} {...props} />
))(({ theme }) => ({
  // backgroundColor: "#fff",
  flexDirection: "row",
  padding: "0.8rem 1rem",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: ".5rem 1.5rem 1.5rem",
}));
