import PropTypes from "prop-types";
import { FormInputLabel, Group, FormInputField } from "./form-input-component";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputField className="form-input" {...otherProps} />

      {label && (
        <FormInputLabel shrink={otherProps.value.length} htmlFor={label}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormInput;
