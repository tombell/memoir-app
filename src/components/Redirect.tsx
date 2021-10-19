import { RoutableProps, route } from "preact-router";

import { useEffect } from "preact/hooks";

interface Props extends RoutableProps {
  to: string;
}

export default ({ to }: Props) => {
  useEffect(() => {
    route(to, true);
  });

  return null;
};
