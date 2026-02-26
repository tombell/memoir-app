import type { ComponentChildren } from "preact";

import Footer from "~/components/footer";
import Header from "~/components/header";
import TrackSearch from "~/components/track-search";

interface Props {
  children: ComponentChildren;
}

export default function Main({ children }: Props) {
  return (
    <div class="container mx-auto px-96">
      <div class="my-4 flex justify-center">
        <Header />
      </div>

      <div class="mb-8">
        <TrackSearch />
      </div>

      {children}

      <div class="my-8">
        <Footer />
      </div>
    </div>
  );
}
