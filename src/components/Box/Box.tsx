import * as React from "react";
import { getRefProp, is } from "../../utils/utils";
import { BaseBox } from "./BaseBox";
import { IBaseBoxWithTakeRef, PlainObject, Responsive } from "./BaseBox.type";
import { StyledGapBox } from "./StyledGapBox";

interface IA11Y {
  a11yTitle?: string;
}

export interface IBox extends IBaseBoxWithTakeRef, IA11Y {
  fill?: "horizontal" | "vertical" | true | false;
  gap?: Responsive;
}

export const Box: React.FC<IBox> = ({
  fill,
  gap,
  direction,
  a11yTitle,
  children,
  takeRef,
  ...rest
}) => {
  let fillProps: PlainObject = {};
  if (fill === true) {
    fillProps = {
      height: "100%",
      width: "100%"
    };
  } else if (fill === "horizontal") {
    fillProps.width = "100%";
  } else if (fill === "vertical") {
    fillProps.height = "100%";
  }

  let ariaTitle: PlainObject = {};
  if (a11yTitle) {
    ariaTitle = {
      "aria-label": a11yTitle
    };
  }

  let cursor: PlainObject = {};
  if (is.function(rest.onClick)) {
    cursor = {
      cursor: "pointer",
      role: "button"

      // After we figure out how to remove that ugly outline onFocus
      // We can enable the following accessible props
      // tabIndex: '0',
      // onKeyDown: rest.onClick,
    };
  }

  const contents: React.ReactNode[] = [];
  if (gap) {
    let firstIndex: number;
    React.Children.forEach(children, (child, index) => {
      if (child) {
        if (firstIndex === undefined) {
          firstIndex = index;
        } else {
          contents.push(
            <StyledGapBox
              key={index}
              gap={gap}
              direction={direction || "row"}
            />
          );
        }
      }
      contents.push(child);
    });
  }

  return (
    <BaseBox
      display="flex"
      {...ariaTitle}
      {...getRefProp(takeRef)}
      {...rest}
      {...fillProps}
      {...cursor}
      direction={direction}
    >
      {contents.length > 0 ? contents : children}
    </BaseBox>
  );
};
