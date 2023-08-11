import {useState} from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors,  [name]: target.validity.patternMismatch  && name === 'name' ? 'Поле должно содержать только латиницу, кириллицу, пробел или дефис' :
      target.validity.patternMismatch  && name === 'email' ? 'Некорректный формат адреса электронной почты' : target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };


  return { values, handleChange, errors, isValid };
}