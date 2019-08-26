import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{height: "100%"}}>
      {colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          handleClick={() => deleteColor(color.name)}
          key={color.name}
          color={color.color}
          colorName={color.name}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
