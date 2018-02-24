import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

// import firebase

import { AngularFireModule } from "angularfire2/";
import { AngularFirestoreModule } from "angularfire2/firestore/";
import { AngularFireStorageModule } from "angularfire2/storage/";
import { AngularFireAuthModule } from "angularfire2/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBEi3-hytC-XSYbuI2kI6g9i8i7FKRVppc",
  authDomain: "links-8ca4a.firebaseapp.com",
  databaseURL: "https://links-8ca4a.firebaseio.com",
  projectId: "links-8ca4a",
  storageBucket: "links-8ca4a.appspot.com",
  messagingSenderId: "292703249795"
};
// app
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "./../pages/login/login";
import { PhotoPage } from "./../pages/photo/photo";
import { PhotoPageModule } from "../pages/photo/photo.module";
import { LoginPageModule } from "../pages/login/login.module";
import { AuthService } from "../providers/auth/auth";
import { SignupPageModule } from "../pages/signup/signup.module";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    LoginPageModule,
    SignupPageModule,
    PhotoPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, PhotoPage, LoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule {}
