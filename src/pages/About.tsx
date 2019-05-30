import { h, FunctionalComponent } from 'preact';

import Footer from '../components/Footer';

const AboutPage: FunctionalComponent = () => {
  return (
    <div class="about">
      <h2 class="about-header">About Memoir</h2>
      <Footer />
    </div>
  );
};

export default AboutPage;
