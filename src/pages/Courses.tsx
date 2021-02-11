import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>Courses</IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This is Course Page</h2>
        <IonButton routerLink="/course-details">Go To Details Page</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
