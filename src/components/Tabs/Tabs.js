import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import EventIcon from "@material-ui/icons/Event";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import AddDish from "../AddDish.js/AddDish";
import DishList from "../DishList/DishList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100vh",
    maxWidth: 500
  }
});

export default () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div>
        <TabPanel value={value} index={0}>
          <AddDish />
          <DishList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Page Two
        </TabPanel>
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<EventIcon />} label="DISHES" />
        <Tab icon={<NoteAddIcon />} label="ADD DISH" />
      </Tabs>
    </div>
  );
};
