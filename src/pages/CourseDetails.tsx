import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";

const CourseDetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          Course Goal
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Course Details</h1>
      </IonContent>
    </IonPage>
  );
};

export default CourseDetails;
