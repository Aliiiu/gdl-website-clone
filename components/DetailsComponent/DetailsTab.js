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

  useEffect(() => {
    if (
      props.sub_data &&
      props.sub_data.product_version?.product_code == "HAA"
    ) {
      setValue(1);
    } else {
      setValue(0);
    }
  }, [props.sub_data]);

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
          {Object.keys(tabs).map((content, index) => (
            <CustomTab
              {...props}
              key={index}
              label={content}
              {...a11yProps(index)}
              // onClick={() => onPress(index)}
            />
          ))}
        </CustomTabs>
      </Box>
      {Object.keys(tabs).map((content, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tabs[content]}
        </TabPanel>
      ))}
    </>
  );
};
