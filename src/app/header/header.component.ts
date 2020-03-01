import { UserService } from "./../services/user.service";
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  logo = "../../assets/www_swiggy.svg";

  constructor(private userservice: UserService) {}

  ngOnInit() {}
  logout() {
    this.userservice.destroy();
    firebase.auth().signOut();
  }
}
