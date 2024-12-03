import { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

export interface Solicitud{
  tipo: string;
  descripcion: string;
}

const SolicitudesPage: React.FC = () => {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);

  useEffect(() => {
    axios.get('API_URL/solicitudes')
      .then(response => setSolicitudes(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {solicitudes.map((solicitud, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{solicitud.tipo}</h2>
                <p>{solicitud.descripcion}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SolicitudesPage;
