import { render } from "preact";

import App from "~/App";

if (import.meta.hot) {
  import.meta.hot.accept();
}

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
render(<App />, document.getElementById("app") as HTMLElement);
