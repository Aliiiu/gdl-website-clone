import React, { useEffect, useState } from "react";
import { CustomTabs, CustomTab } from "./details.styles";
import { Tab, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
// import TabHeader from "./TabHeader";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3, px: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const DetailTabs = ({ tabs, onPress, ...props }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <CustomTabs
          {...props}
          value={value}
          onChange={handleChange}
          aria-label="custom example"
          variant="scrollable"
          scrollButtons={false}
          // allowScrollButtonsMobile
        >
          {tabs.map((content, index) => (
            <CustomTab
              {...props}
              key={content.id}
              label={content.category}
              {...a11yProps(content.id)}
              // onClick={() => onPress(index)}
            />
          ))}
        </CustomTabs>
      </Box>
      {/* {Object.keys(tabs).map((content, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tabs[content]}
        </TabPanel>
      ))} */}
    </>
  );
};
