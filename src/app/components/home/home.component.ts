import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // models: string[] = [
  //   'Globo MT4 29 Full Suspension',
  //   'Globo Carbon Filter Race Series',
  //   'Globo Time Trial Blade'
  // ];


  ranks: number[] = [1, 2, 3, 4, 5];

  rankNumbers: any[];

  type1Disabled: boolean;
  type2Disabled: boolean;
  type3Disabled: boolean;
  type4Disabled: boolean;
  type5Disabled: boolean;
  validNumberOfSubmissions: boolean;
  rankCheck: boolean;

  bikeform: FormGroup;
  userform: FormGroup;
  validMessage: string;
  validSubmissionNumberMessage: string;
  submissionNumber: number;

  constructor(private bikeService: BikeService, private userService: UserService) { }

//sets up form
  ngOnInit() {

    this.submissionNumber = 0;
    this.type1Disabled = false;
    this.type2Disabled = false;
    this.type3Disabled = false;
    this.type4Disabled = false;
    this.type5Disabled = false;
    this.validNumberOfSubmissions = false;

    this.userform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      institute1: new FormControl('', Validators.required),
      institute2: new FormControl('', Validators.required),
      institute3: new FormControl('', Validators.required),
      institute4: new FormControl('', Validators.required),
      institute5: new FormControl('', Validators.required)
    });

  }


  submitUserRegistration() {


    this.rankNumbers = [
      this.userform.get('institute1'),
      this.userform.get('institute2'),
      this.userform.get('institute3'),
      this.userform.get('institute4'),
      this.userform.get('institute5')
    ];

    // console.log('number in set is = ' + new Set(this.rankNumbers).size)

    // let correctRank = this.rankNumbers.length === new Set(this.rankNumbers).size;

    // console.log('this is the boolean i want to control the rank numbers: ' + correctRank);



    if (this.userform.valid) {
    this.validMessage = "Your institute selection has been submited. Thank you!";
    this.userService.createUserRegistration(this.userform.value).subscribe(
      data => {
        this.userform.reset();
        this.submissionNumber++;
        console.log(this.submissionNumber)
        if (this.submissionNumber >= 5) {
          this.validNumberOfSubmissions = true;
          this.validSubmissionNumberMessage = "Congratulations! We've had enough valid registrations to match our registered users!";
        }
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    )
  } else {
    this.validMessage = "Please fill out the form before submitting!";
  }
  }

}
