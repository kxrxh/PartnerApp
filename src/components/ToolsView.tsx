import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonText,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { syncOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { storageGet, storageSet } from '../storage/Storage';
import './ToolsView.css';

function ToolsView() {
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);


  const loadLastSyncTime = async () => {
    const storedTime = await storageGet('lastSyncTime');
    setLastSyncTime(storedTime || '...');
  };

  const syncDatabase = async () => {
    if (isSyncing) return; // Prevent multiple clicks while syncing
    setIsSyncing(true);

    // Start the spinning animation
    const icon = document.getElementById('sync-icon');
    if (icon) {
      icon.classList.add('spin');
    }

    // Set the last sync time to the current time
    const currentTime = new Date().toLocaleString('en-US', { hour12: false });
    await storageSet('lastSyncTime', currentTime);

    // Update the state with the new sync time
    setLastSyncTime(currentTime);

    // Stop the spinning animation after a delay (1 second in this case)
    setTimeout(() => {
      setIsSyncing(false);
      if (icon) {
        icon.classList.remove('spin');
      }
    }, 1000);
  };

  useEffect(() => {
    loadLastSyncTime();
  }, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Инструменты</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className='rounded'>
          <IonCardContent>
            <div className='centered'>
              <IonText color={'dark'}><h1>Карточка партнера</h1></IonText>
            </div>
            <div>
              <IonText color='primary' className="on-margin-bottom">Название организации: </IonText>ООО "Партнер"
            </div>
            <div>
              <IonText color='primary' className="on-margin-bottom">Почта: </IonText>partner.corp@mail.com
            </div>
          </IonCardContent>
        </IonCard>
        <div>
          <IonCard className='rounded'>
            <IonCardContent>
              <div>
                <div className='centered'>
                  <IonText color={'dark'}><h1>Синхронизация данных</h1></IonText>
                </div>
                <IonButton
                  expand="full"
                  shape="round"
                  onClick={syncDatabase}
                >
                  <IonIcon id="sync-icon" icon={syncOutline} slot="start" />
                  Синхронизировать
                </IonButton>
              </div>
              <IonText className="ion-margin-top">
                Последняя синхронизация: {lastSyncTime}
              </IonText>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default ToolsView;
