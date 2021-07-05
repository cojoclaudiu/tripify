import './PostThumb.css';
import React from 'react';

const PostThumb = () => {
  return (
    <article className="postThumbItem">
      <img className="postImage" src="/assets/bora.jpg" alt="bora" />
      <h2 className="postHeading">This is a post example</h2>
      <div className="postLocation">UK, Chelmsford</div>
    </article>
  );
};
export default PostThumb;
