import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireStorage } from "angularfire2/storage";

@IonicPage()
@Component({
  selector: "page-photo",
  templateUrl: "photo.html"
})
export class PhotoPage {
  imageString64: string;

  constructor(
    private camera: Camera,
    private afs: AngularFirestore,
    private ast: AngularFireStorage,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PhotoPage");
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.imageString64 = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  } // takePhoto

  uploadPhoto() {
    this.ast.storage
      .ref()
      .putString(this.imageString64)
      .then(a => console.log(a));
  }
} // class
