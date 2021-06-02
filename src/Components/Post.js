import React, { Component } from "react";
import styles from "./Post.module.css";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      show: false,
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data , show:true }));
  }

  handleTruncate = (str, n) => {
    const title = str && str.length > 10 ? str.substr(0, n) + "..." : str;
    return title;
  };

  render() {
    const postItem =
      this.state.posts &&
      this.state.posts.slice(0,9).map((data) => (
        <div className={styles.postCard} key={data.id}>
          <h3>{this.handleTruncate(data.title, 10)}</h3>
          <p>{data.body}</p>
        </div>
      ));
    return this.state.show ? (
      <div className={styles.postContainer}>{postItem}</div>
    ) : (
      <>
      <div className={styles.loader}></div>
      </>
    );
  }
}
export default Post;
