import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    'to':"",
    'subject':"",
    'message':""
  }

  flag:boolean =false;

  constructor(private email:EmailService , private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
 
  doSubmitForm(){
    console.log("Submit Form");
    console.log(this.data.to);
    console.log(this.data.subject);
    console.log(this.data.message);
    if(this.data.to=='' || this.data.subject=='' || this.data.message==''){
      this.snack.open("fields can not be Empty !!","OK");
      return;
    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.flag=false;
      },error=>{
        console.log(error);
        this.flag=false;
      }
        )
      }
  }
 
