import { Component, OnInit } from "@angular/core";

import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "swiggyapp";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyBV19kqvRFvpBWsYPBHEL-I2Ca3d83LlQM",
      authDomain: "swiggy-c0be8.firebaseapp.com",
      databaseURL: "https://swiggy-c0be8.firebaseio.com",
      projectId: "swiggy-c0be8",
      storageBucket: "swiggy-c0be8.appspot.com",
      messagingSenderId: "1010091974462",
      appId: "1:1010091974462:web:1dede075d41c4981bad66f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
