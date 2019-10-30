import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray,FormGroup,Validators,FormControl} from '@angular/forms';
import{Router} from '@angular/router';
import{Details} from '../details'
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  ReserveForm:FormGroup;
  isSubmitted=false;
  details:Details;
  // City Names
  City: any = ['Goa', 'Kashmir', 'Rajasthan', 'Manali']

  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder) { }

ngOnInit() {
  this.ReserveForm=this.formBuilder.group({
    name:['',Validators.required], 
    email:['',Validators.compose([Validators.required,Validators.email])],
    cityName: ['', [Validators.required]],
    date: ['',[Validators.required,Validators.pattern('/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/')]],
    noPerson:['',[Validators.required,Validators.pattern(' /^[0-9 ]{1,2}$/')]],
    discount : ['',Validators.required],
    terms :['',Validators.required],
    facility :['',Validators.required]
    
       
});
}
// selectedHobbiesNames: [string];
//   myhobbies: any = [
//     {
//       name: "Sports",
//       value: "sports"
//     },
//     {
//       name: "Music",
//       value: "music",
//       selected: true
//     },
//     {
//       name: "Movie",
//       value: "movie",
//       selected: true
//     },
//     {
//       name: "Reading",
//       value: "reading"
//     },
//     {
//       name: "Writing",
//       value: "writing"
//     }
//   ];
get formControls() { 

    return this.ReserveForm.controls;
}

// Choose city using select dropdown
changeCity(e) {
    console.log(e.value);
    this.cityName.setValue(e.target.value, { onlySelf: true })
}

// Getter method to access formcontrols
get cityName() {

  return this.ReserveForm.get('cityName');
}
// // Check box validation
// createFormInputs() {
//   this.ReserveForm = new FormGroup({
//     hobbies: this.createHobbies(this.myhobbies)
//   });
//   this.getSelectedHobbies();
// }
// createHobbies(hobbiesInputs) {
//   const arr = hobbiesInputs.map(hobby => {
//     return new FormControl(hobby.selected || false);
//   });
//   return new FormArray(arr);
// }
// getSelectedHobbies() {
//   this.selectedHobbiesNames = _.map(
//     this.ReserveForm.controls.hobbies["controls"],
//     (hobby, i) => {
//       return hobby.value && this.myhobbies[i].value;
//     }
//   );
//   this.getSelectedHobbiesName();
// }
// getSelectedHobbiesName() {
//   this.selectedHobbiesNames = _.filter(
//     this.selectedHobbiesNames,
//     function(hobby) {
//       if (hobby !== false) {
//         return hobby;
//       }
//     }
//   );
// }
// //end of check box validation
onSubmit() {

  this.isSubmitted = true;
  if (this.ReserveForm.invalid) {

    return false;
  } 
  else {

    console.log("submitted succesfully");
  }

}//end of submit

}
