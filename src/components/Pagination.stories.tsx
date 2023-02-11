import { Meta } from "@storybook/preact";

import Pagination, { Props } from "components/Pagination";

const meta: Meta = {
  component: Pagination,
};
export default meta;

export const Base = {
  name: "Pagination",

  args: {
    path: "https://example.com/:id/page/:page",
    id: "abc-def",
    page: 1,
    hasMore: false,
  },
};

export const WithNewer = {
  args: {
    path: "https://example.com/:id/page/:page",
    id: "abc-def",
    page: 2,
    hasMore: false,
  },
};

export const WithMore = {
  args: {
    path: "https://example.com/:id/page/:page",
    id: "abc-def",
    page: 1,
    hasMore: true,
  },
};

export const WithNewerAndMore = {
  args: {
    path: "https://example.com/:id/page/:page",
    id: "abc-def",
    page: 2,
    hasMore: true,
  },
};
