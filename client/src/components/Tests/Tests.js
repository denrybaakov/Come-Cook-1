import React from 'react';

export default function Tests() {
  return (
    <>
      <h2 style={{ color: "black" }} >
        ТЕСТЫ
      </h2>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" /><button>Send</button>
      </form>
    </>
  );
}
