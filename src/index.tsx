import { render } from "preact";

import App from "~/App";

import "./index.css";

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
render(<App />, document.getElementById("app") as HTMLElement);
