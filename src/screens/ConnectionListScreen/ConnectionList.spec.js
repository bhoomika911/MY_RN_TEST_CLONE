import React from "react";
import { cleanup, render } from "test-utils";
import ConnectionListScreen from "./ConnectionListScreen.js";

describe("ConnectionListScreen", () => {
  afterEach(cleanup);

  test("test", () => {
    expect(true).toBeTruthy();
  });

  test("should render ConnectionListScreen", () => {
    const { queryById } = render(<ConnectionListScreen />);

    expect(queryById("queryById")).toBeTruthy();
  });
});
