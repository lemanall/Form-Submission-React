import { useState } from "react";

// Components
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetail";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const nextStep = () => {
    setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  };

  const prevStep = () => {
    setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step - 1,
      };
    });
  };

  const handleChange = (input) => (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [input]: e.target.value,
      };
    });
  };

  const { step, firstName, lastName, email, occupation, city, bio } = state;

  const values = { step, firstName, lastName, email, occupation, city, bio };

  if (step === 1) {
    return (
      <FormUserDetails
        nextStep={nextStep}
        handleChange={handleChange}
        values={values}
      />
    );
  }

  if (step === 2) {
    return <FormPersonalDetails
    nextStep={nextStep}
    prevStep={prevStep}
    handleChange={handleChange}
    values={values} />;
  }

  if (step === 3) {
    return <Confirm
    nextStep={nextStep}
    prevStep={prevStep}
    values={values} />;
  }

  if (step === 4) {
    return <Success
    nextStep={nextStep}
    prevStep={prevStep}
    values={values} />;
  }

  return <div>UserForm</div>;
};

export default UserForm;
