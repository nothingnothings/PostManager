import React from 'react';

import Button from '../../Button/Button';

import './Post.css';

const post = (props) => (
  <article className="post">
    <header className="post__header">
      <h3 className="post__meta">
        Posted by {props.author} on {props.date}
      </h3>
      <h1 className="post__title">{props.title}</h1>
    </header>
    <div className="post__actions">
      <Button mode="flat" link={props.id}>
        View
      </Button>
    </div>
  </article>
);

export default post;
