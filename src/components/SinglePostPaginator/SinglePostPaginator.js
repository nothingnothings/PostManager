import React from 'react';

import './SinglePostPaginator.css';

const singlePostPaginator = (props) => {
  return (
    <div className="paginator">
      <div className="paginator__controls">
        <button className="paginator__control" onClick={props.onRedirectTohome}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default singlePostPaginator;
