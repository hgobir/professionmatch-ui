import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }


  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => { this.bikes = data },
      err => console.log(err),
      () => console.log('bikes loaded')
    );
  }

  // "userId": 1,
  //       "username": "hgobir",
  //       "password": "pass",
  //       "email": "hgobir@googlemail.com",
  //       "fullname": "hamza gobir",
  //       "age": 26,
  //       "institute1": 4,
  //       "institute2": 3,
  //       "institute3": 1,
  //       "institute4": 2,
  //       "institute5": 5,
  //       "instituteId": 1,
  //       "name": "Bushs All American Academy",
  //       "speciality": "World Domination",
  //       "information": "Military School",
  //       "address": "2606 Thayer Rd, West Point, New York, United States",
  //       "image": "/profmatch_backend/src/main/resources/images/militartSchool.JPG",
  //       "user1": 4,
  //       "user2": 3,
  //       "user3": 1,
  //       "user4": 2,
  //       "user5": 5

}
