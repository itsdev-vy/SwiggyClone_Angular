import { UserService } from "./../services/user.service";
import { MyfireService } from "./../services/myfire.service";
import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private myfire: MyfireService,
    private userservice: UserService
  ) {}

  ngOnInit() {}

  login(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        if (userData.user.emailVerified) {
          this.myfire
            .getDataFromDatabase(userData.user.uid)
            .then(getdataFromDatabase => {
              this.userservice.set(getdataFromDatabase);
              let message = `${email} has been successfully verified 😁`;
              this.toastr.success(message);
              this.router.navigate(["/profile"]);
            });
          let message = `${email} has been successfully verified 😁`;
          this.toastr.success(message);
          this.router.navigate(["/"]);
        } else {
          let message = `${email} is not yet verified...👮`;
          this.toastr.error(message);
          firebase.auth().signOut();
        }
      })
      .catch(err => {
        this.toastr.error(err.message);
      });
  }
}
