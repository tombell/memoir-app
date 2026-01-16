import { render } from "preact";

import App from "~/App";

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
render(<App />, document.getElementById("app") as HTMLElement);
