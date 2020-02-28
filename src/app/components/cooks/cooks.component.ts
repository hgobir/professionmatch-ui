import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/services/institute.service';


@Component({
  selector: 'app-cooks',
  templateUrl: './cooks.component.html',
  styleUrls: ['./cooks.component.css']
})
export class CooksComponent implements OnInit {


  public fourthInstituteId;

  constructor(private instituteService: InstituteService) { }

  ngOnInit() {
    this.getFourthInstitute();
  }

    getFourthInstitute() {
    this.instituteService.getInstitute(4).subscribe(
      data => {
        this.fourthInstituteId = data;
      },
      err => console.error(err),
      () => console.log('fourth institute loaded')
    )
  }

}
