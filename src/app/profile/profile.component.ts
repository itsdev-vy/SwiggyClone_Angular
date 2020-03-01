import { UserService } from "./../services/user.service";
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  username = "";
  email = "";
  location = "";
  phonenumber = "";

  noProfile = "No user profile found";

  constructor(private userservice: UserService) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {
      if (userData) {
        let users = this.userservice.get_profile();
        console.log(userData.email);
        let username = users.username;
        let email = users.email;
        let location = users.location;
        this.phonenumber = users.phonenumber;
      } else {
        this.noProfile;
      }
    });
  }
}
