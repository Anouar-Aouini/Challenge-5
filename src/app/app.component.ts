import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Challenge-n5';
  constructor() { }
  personalInformations = new FormGroup({
    skills: new FormArray([]),
    ProfessionalExperience :new FormArray([])
   })
      get addSkill(){
           return this.personalInformations.get("skills") as FormArray;
      }

  addSkills() {
      this.addSkill.push(new FormControl("",[Validators.required,Validators.minLength(3)]));
  }
  deleteSkill(index: number) {
     const addSkill = <FormArray>this.personalInformations.controls['skills'];
     addSkill.removeAt(index);
  }

   get addProExp(){
           return this.personalInformations.get("ProfessionalExperience") as FormArray;
      }

    addProExps() {
      this.addProExp.push(new FormControl("",[Validators.required,Validators.minLength(6)]));
    }

       deleteProExp(index: number) {
     const addProExp = <FormArray>this.personalInformations.controls['ProfessionalExperience'];
     addProExp.removeAt(index);
  }
}
