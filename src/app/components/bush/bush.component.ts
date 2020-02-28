import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/services/institute.service';


@Component({
  selector: 'app-bush',
  templateUrl: './bush.component.html',
  styleUrls: ['./bush.component.css']
})
export class BushComponent implements OnInit {

  public firstInstituteId;

  constructor(private instituteService: InstituteService) { }

  ngOnInit() {
    this.getFirstInstitute();
  }

    getFirstInstitute() {
    this.instituteService.getInstitute(1).subscribe(
      data => {
        this.firstInstituteId = data;
      },
      err => console.error(err),
      () => console.log('first institute loaded')
    )
  }

}
