import React, { useEffect } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/ColorPickerStyles";

const ColorPicker = ({
  currentColor,
  setCurrentColor,
  addColor,
  colorName,
  setColorName,
  isPaletteFull,
  colors,
  classes
}) => {
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", value =>
      colors.every(({ color }) => color !== currentColor)
    );
    return () => {
      ValidatorForm.removeValidationRule("isColorNameUnique");
      ValidatorForm.removeValidationRule("isColorValueUnique");
    };
  }, [colors, currentColor]);

  const handleSubmit = () => {
    addColor(currentColor, colorName);
  };

  return (
    <React.Fragment>
      <ChromePicker
        className={classes.colorPicker}
        color={currentColor}
        onChangeComplete={newColor => setCurrentColor(newColor.hex)}
      />
      <ValidatorForm
        className={classes.addColor}
        instantValidate={false}
        onSubmit={handleSubmit}
      >
        <TextValidator
          style={{ minWidth: "100%" }}
          label="New Color"
          value={colorName}
          onChange={evt => setColorName(evt.target.value)}
          name="New Color Name"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "This field is required",
            "Color name already exist",
            "Color already exist"
          ]}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: isPaletteFull
              ? "rgba(0, 0, 0, 0.12)"
              : currentColor
          }}
          disabled={isPaletteFull}
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </React.Fragment>
  );
};

export default withStyles(styles)(ColorPicker);
