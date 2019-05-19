import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

interface Props extends RoutableProps {
  id?: string;
}

export default class Tracklist extends Component<Props> {
  render() {
    const { id } = this.props;
    return <h2>Tracklist: {id}</h2>;
  }
}
