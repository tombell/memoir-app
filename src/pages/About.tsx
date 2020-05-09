import { h, FunctionalComponent } from 'preact';

import Footer from 'components/Footer';

const AboutPage: FunctionalComponent = () => {
  return (
    <div class="about">
      <h2 class="about__header">About Memoir</h2>
      <p class="about__text">
        Memoir was built to be a project to experiment with a Go API and Preact
        front-end.
      </p>
      <p class="about__text">
        Also with Mixcloud not displaying track lists to listeners, I wanted a
        great way of sharing track lists for my mixes.
      </p>
      <Footer />
    </div>
  );
};

export default AboutPage;
