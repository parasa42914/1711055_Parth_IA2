import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { course } from '../Course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ia2';

  name="";
  description="";
  skill="";
  prereq="";
  date="";
  feedback="";
  ratting="";
  courses:course[] = [];


  onSubmit(form: NgForm) {

    //console.log(form);
    //this.router.navigate(['/login']);

    if (form.valid) {

      const temp ={

        "name":form.value.name,
        "description":form.value.description,
        "skill":form.value.skill,
        "prereq":form.value.prereq,
        "date":form.value.date,
        "feedback":form.value.feedback,
        "ratting":form.value.ratting


      }

      this.courses.push(temp);
     // console.log(this.events)

    }

  }

  clear(){
    this.courses = [];
  }

}
