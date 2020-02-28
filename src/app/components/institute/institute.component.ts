import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {

  public institutes;

  public firstInstituteId;

  constructor(private instituteService: InstituteService) { }

  ngOnInit() {
    this.getInstitutes();
    // this.getFirstInstitute();
  }


    getInstitutes() {
    this.instituteService.getInstitutes().subscribe(
      data => { this.institutes = data },
      err => console.log(err),
      () => console.log('institutes loaded')
    );
  }


}
