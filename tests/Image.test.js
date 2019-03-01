import "jest-styled-components";
import "jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "react-testing-library";
import { Image } from "../src/components/Image";
import { defaultTheme } from "../src/styles/IThemeType";
import { TestThemeProvider as ThemeProvider } from "./utils";

afterEach(cleanup);

describe("Test <Image />: ", () => {
  test("css prop should be added", () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Image css={"background-color: black;"} />
      </ThemeProvider>
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule("background-color", "black");

    expect(firstChild.tagName).toEqual("IMG");
  });
});
