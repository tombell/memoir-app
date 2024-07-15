import { type RoutableProps, route } from "preact-router";
import { useEffect } from "preact/hooks";

interface Props extends RoutableProps {
  to: string;
}

function Redirect({ to }: Props) {
  useEffect(() => {
    route(to, true);
  }, [to]);

  return null;
}

export default Redirect;
