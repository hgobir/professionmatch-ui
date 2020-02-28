import { Component, OnInit } from '@angular/core';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  public pairedUserId;

  public pairedInstituteId;

  public matchedUserInstitutes;

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getMatchesObjects();
  }

  getMatchesObjects() {
    this.matchService.getMatches().subscribe(
      data => { this.matchedUserInstitutes = data },
      err => console.log(err),
      () => console.log('matches loaded')
    );
  }

  // getUserInstituteObjects(){

  // }












}
