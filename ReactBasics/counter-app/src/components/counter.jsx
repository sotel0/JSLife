import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/50",
    tags: ["tag1", "tag2"],
  };

  //alternative to bind your function to give it access to this
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 25,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement("product object by ID")}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn danger btn-sm m-2">
          {" "}
          Delete{" "}
        </button>
        {this.state.tags.length === 0 && "Please create new tag"}
        {this.renderTags()};
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
