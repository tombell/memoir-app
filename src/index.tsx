import { render } from "preact";

import App from "~/app";

if (import.meta.hot) {
  import.meta.hot.accept();
}

render(<App />, document.getElementById("app") as HTMLElement);
