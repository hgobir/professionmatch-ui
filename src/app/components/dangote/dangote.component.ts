import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/services/institute.service';


@Component({
  selector: 'app-dangote',
  templateUrl: './dangote.component.html',
  styleUrls: ['./dangote.component.css']
})
export class DangoteComponent implements OnInit {

  public secondInstituteId;

  constructor(private instituteService: InstituteService) { }

  ngOnInit() {
    this.getFirstInstitute();
  }

    getFirstInstitute() {
    this.instituteService.getInstitute(2).subscribe(
      data => {
        this.secondInstituteId = data;
      },
      err => console.error(err),
      () => console.log('second institute loaded')
    )
  }

}
