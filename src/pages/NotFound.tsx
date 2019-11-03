import { h, FunctionalComponent } from 'preact';

import Footer from '../components/Footer';

const NotFoundPage: FunctionalComponent = () => {
  return (
    <div class="not-found">
      <h2 class="not-found__header">Page Not Found</h2>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
