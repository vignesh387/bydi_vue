import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ErrorText from "../../src/components/ErrorText.vue";

describe("Unit test error text", () => {
  it("Validate props", () => {
    const wrapper = mount(ErrorText, {
      props: { text: "username is required" },
    });
    expect(wrapper.text()).toBe("username is required");
  });
});
