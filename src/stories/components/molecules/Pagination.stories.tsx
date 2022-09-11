import { Meta, Story } from "@storybook/preact";

import Pagination, { Props } from "components/molecules/Pagination";

const meta: Meta = {
  component: Pagination,
  title: "Components/Molecules/Pagination",
};
export default meta;

const Template: Story<Props> = (props) => <Pagination {...props} />;

export const Base = Template.bind({});
Base.storyName = "Pagination";
Base.args = {
  path: "https://example.com/:id/page/:page",
  id: "abc-def",
  page: 1,
  hasMore: false,
};

export const WithNewer = Template.bind({});
WithNewer.args = {
  path: "https://example.com/:id/page/:page",
  id: "abc-def",
  page: 2,
  hasMore: false,
};

export const WithMore = Template.bind({});
WithMore.args = {
  path: "https://example.com/:id/page/:page",
  id: "abc-def",
  page: 1,
  hasMore: true,
};

export const WithNewerAndMore = Template.bind({});
WithNewerAndMore.args = {
  path: "https://example.com/:id/page/:page",
  id: "abc-def",
  page: 2,
  hasMore: true,
};
