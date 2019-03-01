import "jest-styled-components";
import "jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "react-testing-library";
import { Textarea } from "../src/components/Inputs/Textarea";
import { defaultTheme } from "../src/styles/IThemeType";
import { TestThemeProvider as ThemeProvider } from "./utils";

afterEach(cleanup);

describe("Test <Input />: ", () => {
  test("css prop should be added", () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Textarea css={"background-color: black;"} />
      </ThemeProvider>
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule("background-color", "black");

    expect(firstChild.tagName).toEqual("TEXTAREA");
  });
});
