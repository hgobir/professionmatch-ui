import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/services/institute.service';


@Component({
  selector: 'app-tsuji',
  templateUrl: './tsuji.component.html',
  styleUrls: ['./tsuji.component.css']
})
export class TsujiComponent implements OnInit {

  public thirdInstituteId;

  constructor(private instituteService: InstituteService) { }

  ngOnInit() {
    this.getThirdInstitute();
  }

    getThirdInstitute() {
    this.instituteService.getInstitute(3).subscribe(
      data => {
        this.thirdInstituteId = data;
      },
      err => console.error(err),
      () => console.log('third institute loaded')
    )
  }

}
