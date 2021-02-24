import { useState, useCallback } from "react";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  console.log({ email, password });

  const sendCredentials = useCallback(() => {
    console.log("sendCredentials callback");
  }, []);

  return (
    <form className="form-box">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Adresse email
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Mot de passe
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Se rappeler de moi
        </label>
      </div>
      <button type="submit" class="btn btn-primary" onPress={sendCredentials}>
        Connexion
      </button>
    </form>
  );
};
