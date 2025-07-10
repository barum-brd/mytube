// frontend/src/components/Comments/Comment.jsx
import React from 'react';

const Comment = ({ author, text }) => (
  <div style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
    <strong>{author}</strong>
    <p>{text}</p>
  </div>
);

export default Comment;