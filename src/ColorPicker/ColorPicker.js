import React, { useEffect } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../styles/SideDrawerStyles";
import Button from "@material-ui/core/Button";

const ColorPicker = ({
  currentColor,
  setCurrentColor,
  addColor,
  colorName,
  setColorName,
  isPaletteFull,
  colors
}) => {
  const classes = useStyles();

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    // ValidatorForm.addValidationRule("isColorValueUnique", value =>
    //   colors.every(({ value }) => {
    //     console.log(value);
    //     console.log(currentColor);
    //     return value !== currentColor;
    //   })
    // );
    return () => {
      ValidatorForm.removeValidationRule("isColorNameUnique");
      // ValidatorForm.removeValidationRule("isColorValueUnique");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <ChromePicker
        color={currentColor}
        onChangeComplete={newColor => setCurrentColor(newColor.hex)}
      />
      <ValidatorForm onSubmit={() => addColor(currentColor, colorName)}>
        <TextValidator
          style={{ minWidth: "100%" }}
          label="New Color"
          value={colorName}
          onChange={evt => setColorName(evt.target.value)}
          name="New Color Name"
          validators={[
            "required",
            "isColorNameUnique"
            // "isColorValueUnique"
          ]}
          errorMessages={[
            "This field is required",
            "Color name already exist"
            // "Color already exist"
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
          className={classes.addColorButton}
          disabled={isPaletteFull}
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </React.Fragment>
  );
};

export default ColorPicker;
