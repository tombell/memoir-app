import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import ArtworkUploader, { Props } from "components/organisms/ArtworkUploader";

const meta: Meta = {
  component: ArtworkUploader,
  title: "Components/Organisms/ArtworkUploader",
  argTypes: { onUpload: { action: "upload" } },
};
export default meta;

const Template: Story<Props> = (props) => <ArtworkUploader {...props} />;

export const Base = Template.bind({});
Base.storyName = "ArtworkUploader";
Base.args = {};
