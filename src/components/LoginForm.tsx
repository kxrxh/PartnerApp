import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "./LoginForm.css";
import { useState } from "react";
import { storageSet } from "../storage/Storage";
import { useUUID } from "../utils/State";

function LoginForm() {
    const [id, setId] = useState("");
    const { setUUID } = useUUID();
    const [password, setPassword] = useState("");
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Авторизация</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel style={{ marginBottom: '15px' }} position="floating">Почта организации</IonLabel>
                        <IonInput
                            className="form-input"
                            type="text"
                            inputMode="email"
                            value={id}
                            onIonChange={(e) => setId(e.detail.value!)}
                            aria-label="ID"
                        ></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel style={{ marginBottom: '15px' }} position="floating">Пароль</IonLabel>
                        <IonInput
                            className="form-input"
                            type="password"
                            value={password}
                            onIonChange={(e) => setPassword(e.detail.value!)}
                            aria-label="Password"
                        ></IonInput>
                    </IonItem>
                </IonList>

                <IonButton expand="full" onClick={() => {
                    storageSet('id', id);
                    setUUID(id);
                }
                } size="large" className="login-button">
                    Войти
                </IonButton>
            </IonContent>
        </IonPage>
    );
}

export default LoginForm;
