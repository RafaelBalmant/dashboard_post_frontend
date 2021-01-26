import React from 'react';

function Index() {
  return (
    <div>
      <h3>This is login</h3>
      <input type="text" />
      <br />
      <input type="password" />
      <button onClick={() => console.log('Login')} type="button">Entrar</button>
    </div>
  );
}

export default Index;
