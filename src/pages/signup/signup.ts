import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthService } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  email: string;
  password: string;
  constructor(
    private service: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }
  signup() {
    this.service.emailSignUp(this.email, this.password);
  }
} // class
