import React from "react";

export default React.createClass({
  propTypes: {
    contents: React.PropTypes.arrayOf(React.PropTypes.shape({
      image: React.PropTypes.string.isRequired,
      caption: React.PropTypes.string.isRequired,
      attribution: React.PropTypes.string.isRequired
    })).isRequired
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
    let triggers = this.props.contents.map((item, index) => {
      let classNames = `hero${this.state.activeTrigger === index ? ` active` : ``}`;

      return (
        <button key={index} className={classNames} onClick={this.onTriggerClick.bind(null, index)}>
          <img className="photo" src={item.image}></img>
        </button>
      );
    });

    let quotes = this.props.contents.map((item, index) => {
      return (
        <div key={index} className={this.state.activeTrigger === index ? `active` : ``}>
          <p className="caption">"{item.caption}"</p>
          <p className="attribution">– {item.attribution}</p>
        </div>
      );
    });

    return (
      <div className="mui-thumb-carousel">
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
