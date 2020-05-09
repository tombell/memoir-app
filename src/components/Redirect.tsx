import { useEffect } from 'preact/hooks';
import { RoutableProps, route } from 'preact-router';

interface Props extends RoutableProps {
  to: string;
}

export default ({ to }: Props) => {
  useEffect(() => {
    route(to, true);
  });

  return null;
};
