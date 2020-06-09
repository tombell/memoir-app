import { h, FunctionalComponent } from 'preact';

import Footer from 'components/Footer';
import Subheader from 'components/Subheader';

const NotFoundPage: FunctionalComponent = () => {
  return (
    <div class="not-found">
      <Subheader text="Page Not Found" />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
