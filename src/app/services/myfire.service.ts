import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class MyfireService {
  constructor() {}
  getDataFromDatabase(uid) {
    let ref = firebase.database().ref("/user" + uid);
    return ref
      .once("value")
      .then(snapShot => snapShot.val())
      .catch(err => console.log(err));
  }
}
