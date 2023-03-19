import { Meta } from "@storybook/preact";

import ArtworkUploader from "components/ArtworkUploader";

const meta: Meta = {
  component: ArtworkUploader,
  argTypes: {
    onUpload: { action: "uploaded" },
  },
};
export default meta;

export const Base = {
  name: "ArtworkUploader",

  args: {
    name: "artworkuploader",
  },

  parameters: {
    mockData: [
      {
        url: "http://localhost:8080/artwork",
        method: "POST",
        status: 200,
        response: {
          key: "0cd728bbdbb38f2c1d451b3dea6dd18e.png",
        },
      },
    ],
  },
};

export const Label = {
  args: {
    name: "artworkuploader with label",
    label: "Artwork",
  },

  parameters: {
    mockData: [
      {
        url: "http://localhost:8080/artwork",
        method: "POST",
        status: 200,
        response: {
          key: "0cd728bbdbb38f2c1d451b3dea6dd18e.png",
        },
      },
    ],
  },
};
