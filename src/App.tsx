import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import { trophyOutline,listOutline } from "ionicons/icons";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/course-details" component={CourseDetails} />
        <Redirect to='/courses' />
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab="a" href='/courses'>
          <IonIcon icon={trophyOutline} />
          All Courses
        </IonTabButton>
        <IonTabButton tab="b" href='/course-details' >
            <IonIcon icon={listOutline} />
            Course Info
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
