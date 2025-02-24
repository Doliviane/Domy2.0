import React from 'react';

function LogIn() {
  return (
    <div>
      <h2>Page de connexion</h2>
      <form>
        <label>
          Nom d'utilisateur:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Mot de passe:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LogIn;