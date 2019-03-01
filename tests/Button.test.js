import "jest-styled-components";
import "jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "react-testing-library";
import { Button } from "../src/components/Buttons/Button";
import { defaultTheme } from "../src/styles/IThemeType";
import { TestThemeProvider as ThemeProvider } from "./utils";

afterEach(cleanup);

describe("Test <Button />: ", () => {
  test("fontSize should be added", () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Button fontSize="23px" />
      </ThemeProvider>
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule("font-size", "23px");
  });
});
