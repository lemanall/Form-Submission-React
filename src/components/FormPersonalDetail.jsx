// Material UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = ({ nextStep, values, handleChange, prevStep }) => {
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
      <AppBar title="Enter Personal Details" />
      <TextField
        hintText="Enter Your Occupation"
        floatingLabelText="First Name"
        onChange={handleChange("Occupation")}
        defaultValue={values.occupation}
      />
      <TextField
        hintText="Enter Your City"
        floatingLabelText="City"
        onChange={handleChange("city")}
        defaultValue={values.city}
      />
      <TextField
        hintText="Enter Bio"
        floatingLabelText="Bio"
        onChange={handleChange("bio")}
        defaultValue={values.bio}
      />
      <br />
      <RaisedButton label='Continue'
      primary={true}
      style={styles.button}
      onClick={continueHandler}/>
      <RaisedButton label='Back'
      primary={false}
      style={styles.button}
      onClick={backHandler}/>
    </MuiThemeProvider>
  );
};

const styles= {
  button:{
margin:15
  }
}


export default FormPersonalDetails;
