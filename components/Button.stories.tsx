import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module).add("with text", () => {
  return <Button text="Hello World" />;
});

storiesOf("Button", module).add("with emoji", () => {
  return <Button text="😀 😎 👍 💯" />;
});
