import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ManageSource from '../ManageSource/ManageSource';

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      tab: 0
    }
  }

  handleChange = (event, value, name) => {
    // console.log(value)
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <Paper square>
          <Tabs
            value={this.state.tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, value) => this.handleChange(event, value, 'tab')}
            aria-label="disabled tabs example"
            centered
          >
            <Tab label="Manage Source" value={0} {...a11yProps(0)} />
            <Tab label="Manage Team" value={1} {...a11yProps(1)} />
          </Tabs>
        </Paper>

        <TabPanel value={this.state.tab} index={0}>
          <ManageSource />
        </TabPanel>
        <TabPanel value={this.state.tab} index={1}>
        </TabPanel>
      </div>
    );
  }
}

export default Main;
