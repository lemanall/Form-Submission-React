// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const continueHandler = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <MuiThemeProvider>
      <AppBar title="Enter User Details" />
      <TextField
        hintText="Enter Your First Name"
        floatingLabelText="First Name"
        onChange={handleChange("firstName")}
        defaultValue={values.firstName}
      />
      <TextField
        hintText="Enter Your Last Name"
        floatingLabelText="Last Name"
        onChange={handleChange("lastName")}
        defaultValue={values.lastName}
      />
      <TextField
        hintText="Enter Your Email"
        floatingLabelText="Email"
        onChange={handleChange("email")}
        defaultValue={values.email}
      />
      <br />
      <RaisedButton label='Continue'
      primary={true}
      style={styles.button}
      onClick={continueHandler}/>
    </MuiThemeProvider>
  );
};

const styles= {
  button:{
margin:15
  }
}


export default FormUserDetails;
