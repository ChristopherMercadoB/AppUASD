import { EventHandler, FormEvent, useState } from "react";
import axios from "axios";
import { IonPage, IonContent, IonInput, IonButton } from "@ionic/react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if(!username || !password){
      alert('El usuario o password no pueden ser nulos')
      return
    }
    axios
      .post("https://uasdapi.ia3x.com/login", { username, password })
      .then((response) => {
        if (response.data.data.authToken) {
          localStorage.setItem('token', response.data.data.authToken);
          console.log(localStorage.getItem('token'))
          console.log(username)
          window.location.href = "/home";
        }else{
            alert('Credenciales incorrectas')
        }
        console.log(response);
      })
      .catch((error) => {
        alert('Credenciales incorrectas');
      });
  };

  return (
    <IonPage>
      <IonContent>
        <form action="">
          <IonInput
            value={username}
            placeholder="Usuario"
            onIonChange={(e) => setUsername(e.detail.value!)}
          />
          <IonInput
            type="password"
            value={password}
            placeholder="Contraseña"
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
          <IonButton onClick={handleLogin}>Ingresar</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
