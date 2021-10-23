import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import withMock from 'storybook-addon-mock';

import ArtworkUploader, { Props } from "components/organisms/ArtworkUploader";

const meta: Meta = {
  component: ArtworkUploader,
  title: "Components/Organisms/ArtworkUploader",
  argTypes: { onUpload: { action: "upload" } },
  decorators: [withMock],
};
export default meta;

const Template: Story<Props> = (props) => <ArtworkUploader {...props} />;

export const Base = Template.bind({});
Base.storyName = "ArtworkUploader";
Base.parameters = {
  mockData: [
    {
      url: "http://localhost:8080/uploads/artwork",
      method: "POST",
      status: 200,
      response: {
        key: "0cd728bbdbb38f2c1d451b3dea6dd18e.png",
      },
    },
  ],
};
