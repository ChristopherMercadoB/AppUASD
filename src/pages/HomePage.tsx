import { IonPage, IonContent, IonList, IonItem } from "@ionic/react";

const HomePage: React.FC = () => {

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
  <IonPage>
    <IonContent>
      <IonList>
        <IonItem button routerLink="/noticias">
          Noticias
        </IonItem>
        <IonItem button routerLink="/horarios">
          Horarios
        </IonItem>
        <IonItem button routerLink="/preseleccion">
          Preselección
        </IonItem>
        <IonItem button routerLink="/deuda">
          Deuda
        </IonItem>
        <IonItem button routerLink="/solicitudes">
          Solicitudes
        </IonItem>
        <IonItem button routerLink="/tareas">
          Mis Tareas
        </IonItem>
        <IonItem button routerLink="/eventos">
          Eventos
        </IonItem>
        <IonItem button routerLink="/videos">
          Videos
        </IonItem>
        <IonItem button routerLink="/acerca">
          Acerca de
        </IonItem>
        <IonItem button onClick={logout}>
          Logout
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
  )
  
};

export default HomePage;
