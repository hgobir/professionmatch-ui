import { InstituteService } from 'src/app/services/institute.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { MatchService } from 'src/app/services/match.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';



export class UserInstituteModel {

	userId: number;
	username: string;
	password: string;
	fullname: string;
	age: number;
	institute1: number;
	institute2: number;
	institute3: number;
	institute4: number;
	institute5: number;
	instituteid: number;
	insitutename: string;
	speciality: string;
	information: string;
	address: string;
	image: string;
	user1: number;
	user2: number;
	user3: number;
	user4: number;
	user5: number;


constructor(private instituteService: InstituteService, private userService: UserService, matchResponse: any) {

var user: any;
var institute: any;

user = userService.getUser(matchResponse.userId);
institute = instituteService.getInstitute(matchResponse.instituteId);

this.userId = user.id;
this.username = user.username;
this.password = user.password;
this.fullname = user.name;
this.age = user.age;
this.institute1 = user.institute1;
this.institute2 = user.institute2;
this.institute3 = user.institute3;
this.institute4 = user.institute4;
this.institute5 = user.institute5;

this.instituteid = institute.id;
this.insitutename = institute.name;
this.speciality = institute.speciality;
this.information = institute.information;
this.address = institute.address;
this.image = institute.image;
this.user1 = institute.user1;
this.user2 = institute.user2;
this.user3 = institute.user3;
this.user4 = institute.user4;
this.user5 = institute.user5;


}







}