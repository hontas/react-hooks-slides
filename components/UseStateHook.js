// import React, { useState } from 'react';

function StatefulHook() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="expandable">
      <button onClick={() => setIsExpanded((wasExpanded) => !wasExpanded)}>
        {isExpanded ? 'Collapse ▴' : 'Expand ▾'}
      </button>
      {isExpanded && <div className="expandable__body">Unfolded</div>}
    </div>
  );
}
