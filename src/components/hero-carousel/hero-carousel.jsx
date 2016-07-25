import React from "react";

let data = [{
  image: `./img/headshot-1.jpg`,
  caption: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  attribution: `Cindy Sherman, Switzerland`
}, {
  image: `./img/headshot-2.jpg`,
  caption: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  attribution: `Bob Loblaw, Kazakhstan`
}, {
  image: `./img/headshot-3.jpg`,
  caption: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  attribution: `Ken Bradford, Sealand`
}, {
  image: `./img/headshot-4.jpg`,
  caption: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  attribution: `Vic Toomey, Reykjavik`
}];

export default React.createClass({
  propTypes: {
  },
  getInitialState() {
    return {
      activeTrigger: 0
    };
  },
  onTriggerClick: function (index) {
    this.setState({
      activeTrigger: index
    });
  },
  render: function() {
    let triggers = data.map((item, index) => {
      let classNames = `hero${this.state.activeTrigger === index ? ` active` : ``}`;

      return (
        <button key={index} className={classNames} onClick={this.onTriggerClick.bind(null, index)}>
          <img className="photo" src={item.image}></img>
        </button>
      );
    });

    let quotes = data.map((item, index) => {
      return (
        <div key={index} className={this.state.activeTrigger === index ? `active` : ``}>
          <p className="caption">"{item.caption}"</p>
          <p className="attribution">– {item.attribution}</p>
        </div>
      );
    });

    return (
      <div className="mui-hero-carousel">
        <div className="heroes">
          {triggers}
        </div>
        <div className="quotes">
          {quotes}
        </div>
      </div>
    );
  }
});
