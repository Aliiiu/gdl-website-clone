import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./accordion.style";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";

function categoryMapper(category_id, categoryArr) {
  const category = categoryArr.filter(item => item.id === category_id)[0]
    .category;
  return category === "All" ? "General" : category;
}
const AppAccordion = ({ category, ...props }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="my-[1.5rem]">
      <Accordion
        expanded={expanded === props.panel}
        onChange={handleChange(props.panel)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="flex flex-col">
            <Typography className="font-bold text-lg md:text-lg flex items-center justify-start">
              {props.question}
            </Typography>
            <div className="text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-80">
              {categoryMapper(props.category_id, category)}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <hr className="border-[rgba(194,207,214,var(--tw-border-opacity))] border-opacity-30 mb-6" />
          {parse(props.answer)}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AppAccordion;
