import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/services/institute.service';


@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.css']
})
export class GatesComponent implements OnInit {

  public fifthInstituteId;

  constructor(private instituteService: InstituteService) { }

  ngOnInit() {
    this.getFifthInstitute();
  }

    getFifthInstitute() {
    this.instituteService.getInstitute(5).subscribe(
      data => {
        this.fifthInstituteId = data;
      },
      err => console.error(err),
      () => console.log('fifth institute loaded')
    )
  }
}
