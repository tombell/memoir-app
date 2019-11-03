import { h, FunctionalComponent } from 'preact';

import Footer from '../components/Footer';

const AboutPage: FunctionalComponent = () => {
  return (
    <div class="about">
      <h2 class="about__header">About Memoir</h2>
      <p>
        Memoir was built to be a project to experiment with a Go API and Preact
        front-end.
      </p>
      <p>
        Also with Mixcloud not displaying track lists to listeners, I wanted a
        great way of sharing track lists for my mixes.
      </p>
      <Footer />
    </div>
  );
};

export default AboutPage;
