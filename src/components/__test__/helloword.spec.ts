import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld.vue", () => {
  const wrapper = shallowMount(HelloWorld, {});

  it("Should render component", () => {
    expect(wrapper.html()).toBeTruthy();
  });
});
