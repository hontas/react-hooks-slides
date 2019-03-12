// import React, { useState, useEffect } from 'react';

function Modal() {
  const [value, setValue] = useState('');

  function handleUnload(event) {
    setValue((value) => {
      if (value && !window.confirm()) {
        event.preventDefault();
        event.returnValue = '';
      }
      return value;
    });
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);

    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  return (
    <div style={{ padding: '1em' }}>
      <form className="modal">
        <label>
          <input
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </label>
        <p>Avega Sensationals</p>
      </form>
    </div>
  );
}
