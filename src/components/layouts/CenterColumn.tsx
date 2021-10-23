import { h } from "preact";

interface Props {
  children: any;
}

export default ({ children }: Props) => (
  <div class="flex items-center justify-center text-white">
    <div class="flex-1 max-w-2xl">{children}</div>
  </div>
);
