import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getStorage, provideStorage } from '@angular/fire/storage';


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDUwNvKnwaLgggujx0VWZVkG7IzaBqvWVY",
      authDomain: "zoo-life-7127b.firebaseapp.com",
      databaseURL: "https://zoo-life-7127b-default-rtdb.firebaseio.com",
      projectId: "zoo-life-7127b",
      storageBucket: "zoo-life-7127b.appspot.com",
      messagingSenderId: "962324795350",
      appId: "1:962324795350:web:a91379d1565710859e9e77",
      measurementId: "G-7ES232S4CN"}))
     , provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),

  ],
});
