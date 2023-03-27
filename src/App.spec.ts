import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import App from "../App.vue";

describe("App.vue", () => {
  const wrapper = shallowMount(App, {});

  it("Should render component", () => {
    expect(wrapper.html()).toBeTruthy();
  });
});
