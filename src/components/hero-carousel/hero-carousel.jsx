import React from "react";

export default React.createClass({
  propTypes: {
  },
  getInitialState() {
    return {
    };
  },
  onChange: function () {
  },
  render: function() {
    return (
      <div className="mui-hero-carousel">
        <div className="heroes">
          <button className="hero active"><img className="photo" src="./img/headshot-1.jpg"></img></button>
          <button className="hero"><img className="photo" src="./img/headshot-1.jpg"></img></button>
          <button className="hero"><img className="photo" src="./img/headshot-1.jpg"></img></button>
          <button className="hero"><img className="photo" src="./img/headshot-1.jpg"></img></button>
        </div>
        <div className="quotes">
          <div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p>– Cindy Sherman, Switzerland</p>
          </div>
        </div>
      </div>
    );
  }
});
