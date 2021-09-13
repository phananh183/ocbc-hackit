import React from 'react';

export const PageError = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: 20, marginBottom: 20 }}>An error has occured</div>
      <button
        style={{
          width: 200,
        }}
        className="btn btn-block"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload page
      </button>
    </div>
  );
};