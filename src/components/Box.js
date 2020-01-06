import styled from "styled-components";
import {
  space,
  color,
  display,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  borders,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  height,
  gridArea
} from "styled-system";

import themed from "./helpers";

export const Box = styled("div")(
  {
    boxSizing: "border-box"
  },
  space,
  color,
  display,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  borders,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  height,
  gridArea,
  props => props.css,
  themed("Box")
);

Box.displayName = "Box";

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes
};
