// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = (initialValue) => {
    //setup state
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    //copy values object properties and add target's name:value pair
    const handleChanges = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value });
    };
    //prevent default refresh and show success message
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
    //return these values to be used in CheckoutForm.js
    return [values, showSuccessMessage, handleChanges, handleSubmit]
}

export default useForm;