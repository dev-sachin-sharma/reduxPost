import React, { Component } from "react";
import styles from "./PostForm.module.css";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    
    return (
      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Add Post</h2>
        <form>
          <div className={styles.inputHolder}>
            <label className={styles.label}>Title :</label>
            <input
              className={styles.input}
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.inputHolder}>
            <label className={styles.label}>Body :</label>
            <textarea
              className={styles.input}
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default PostForm;
