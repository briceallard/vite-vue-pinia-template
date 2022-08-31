import { render, screen, fireEvent, RenderResult } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import Login from "./login.view.vue";

describe("Login", () => {
  let wrapper: RenderResult | null = null;

  beforeEach(() => {
    wrapper = render(Login);
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  it("should render", async () => {
    expect(wrapper).toBeTruthy();
    expect(screen.getByText("VPM Starter Template")).toBeTruthy();
  });
});
