import { Meta } from "@storybook/preact";

import Pagination from "@components/Pagination";

const meta: Meta = {
  component: Pagination,
};
export default meta;

export const Base = {
  name: "Pagination",

  args: {
    path: "https://example.com/:id",
    id: "abc-def",
    page: 1,
    hasMore: false,
  },
};

export const WithNewer = {
  args: {
    path: "https://example.com/:id",
    id: "abc-def",
    page: 2,
    hasMore: false,
  },
};

export const WithOlder = {
  args: {
    path: "https://example.com/:id",
    id: "abc-def",
    page: 1,
    hasMore: true,
  },
};

export const WithNewerAndOlder = {
  args: {
    path: "https://example.com/:id",
    id: "abc-def",
    page: 2,
    hasMore: true,
  },
};
