import type { ComponentChildren } from "preact";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import TrackSearch from "~/components/TrackSearch";

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
