import { IonPage, IonContent, IonButton } from '@ionic/react';

const LandingPage: React.FC = () => (
  <IonPage>
    <IonContent>
      <h1>Bienvenidos a la UASD</h1>
      <p>Misión, Visión y Valores de la UASD</p>
      <IonButton href="/login">Ingresar</IonButton>
    </IonContent>
  </IonPage>
);

export default LandingPage;
