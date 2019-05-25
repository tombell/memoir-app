import { Component } from 'preact';
import { RoutableProps, route } from 'preact-router';

interface Props extends RoutableProps {
  to: string;
}

export default class Redirect extends Component<Props> {
  componentWillMount() {
    const { to } = this.props;
    route(to, true);
  }

  render() {
    return null;
  }
}
