import { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent } from '@ionic/react';

interface Noticia {
  id: number;
  title: string;
  img: string;
  url: string;
  date: string;
}

const NoticiasPage: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const token = localStorage.getItem('token');
  const payload = JSON.parse(atob(token != null ? token.split('.')[1] : ""));
  console.log('Fecha de expiración:', new Date(payload.exp * 1000));


  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token) {
      axios
        .get('https://uasdapi.ia3x.com/noticias', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('Datos de noticias:', response.data);
          setNoticias(response.data.data);
          console.log(noticias)
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.log('No autorizado. Token inválido o expirado.');
          } else {
            console.log('Error al obtener las noticias:', error);
          }
        });
    } else {
      console.log('No hay token disponible en localStorage');
    }
  }, []);
  
  return (
    <IonPage>
      <IonContent>
        {noticias && noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <div key={index}>
              <h2>{noticia.title}</h2>
              <p>{noticia.url}</p>
            </div>
          ))
        ) : (
          <p>No hay noticias</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default NoticiasPage;
