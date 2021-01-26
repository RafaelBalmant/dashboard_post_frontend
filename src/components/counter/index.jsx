import React from 'react';
import PropTypes from 'prop-types';

function Index({ count }) {
  return (
    <div>
      <h5>{String(count)}</h5>
    </div>
  );
}

Index.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Index;
