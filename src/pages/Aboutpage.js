const AboutPage = () => {
  return (
    <div className="about">
      <h3 className="about__title">About</h3>
      <div className="about__info">
        <p>Welcome to the TV Show Search App</p>
        <p>
          Hi, I'm Sameer Singh, the creator of this app. I'm passionate about
          building interactive and user-friendly web applications.
        </p>
        <p>
          <strong>Tech Stack Used:</strong>
        </p>
        <ul>
          <li>React (create-react-app)</li>
          <li>React Router</li>
          <li>React Context API</li>
          <li>Axios for AJAX Requests</li>
          <li>TVMAZE API (https://www.tvmaze.com/api)</li>
          <li>Basic CSS & HTML</li>
        </ul>
        <p>
          <strong>What I've Learned:</strong>
        </p>
        <ul>
          <li>Building a responsive React application</li>
          <li>Handling asynchronous data with Axios</li>
          <li>Implementing client-side routing with React Router</li>
          <li>Managing state with React Context API</li>
          <li>Deploying web applications to Netlify</li>
        </ul>
        <p>
          Thank you for using the TV Show Search App! If you have any feedback
          or suggestions, feel free to get in touch.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
