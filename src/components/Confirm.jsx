// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const Confirm = ({ prevStep, nextStep, values }) => {
  const continueHandler = (e) => {
    e.preventDefault();

    nextStep();
  };

  const backHandler = (e) => {
    e.preventDefault();

    prevStep();
  };

  return (
    <MuiThemeProvider>
      <AppBar title="Confirm User Data" />
      <List>
        <ListItem primaryText="First Name" secondaryText={values.firstName} />
        <ListItem primaryText="Last Name" secondaryText={values.lastName} />
        <ListItem primaryText="Email" secondaryText={values.email} />
        <ListItem primaryText="Occupation" secondaryText={values.occupation} />
        <ListItem primaryText="City" secondaryText={values.city} />
        <ListItem primaryText="Bio" secondaryText={values.bio} />
      </List>
      <br />
      <RaisedButton
        label="Back"
        primary={false}
        style={styles.button}
        onClick={backHandler}
      />
      <RaisedButton
        label="Confirm  Continue"
        primary={true}
        style={styles.button}
        onClick={continueHandler}
      />
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};

export default Confirm;