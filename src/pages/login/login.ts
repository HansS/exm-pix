import { AuthService } from "./../../providers/auth/auth";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user: User;
  loggedIn = false;
  password: string;
  email: string;

  constructor(
    private service: AuthService,
    private afa: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  login() {
    this.service.emailLogin(this.email, this.password).then(() => {
      this.loggedIn = this.service.authenticated;
      //this.user = this.service.currentUser;
      console.log(JSON.parse(this.service.currentUser));
    });
  }
} //
