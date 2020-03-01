import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  signup(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    let username = form.value.username;
    let phonenumber = form.value.phonenumber;
    let location = form.value.location;
    //we need to store this information into firebase database
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification();

        let message = `${email} notification has been sent to your email address please verify..😀`;
        this.toastr.success(message);
        this.router.navigate(["/login"]);
        return firebase
          .database()
          .ref("/user" + userData.user.uid)
          .set({
            username,
            email,
            password,
            phonenumber,
            location,
            uid: userData.user.uid,
            registrationDate: new Date().toString()
          });
        console.log(userData);
      })
      .catch(err => {
        this.toastr.error(err.message);
        console.log(err);
      });
  }

  ngOnInit() {}
}
