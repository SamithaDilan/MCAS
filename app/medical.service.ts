import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  uri = 'http://localhost:3000' ;

  constructor(private http: HttpClient) {}

  getSickinfo() {
    return this.http.get('http://localhost:3000/sickinfo/findAll');
  }

  getPatientinfo() {
    return this.http.get('http://localhost:3000/patient');
  }

  getTemp() {
    return this.http.get('http://localhost:3000/sickinfo/findTemp');
  }

  getDrugs() {
    return this.http.get('http://localhost:3000/phamacist/name');
  }

  getSickinfoById(id){
    return this.http.get(`http://localhost:3000/sickinfo/findOne/${id}`);
  }

  updateSickinfo(reg_no, date, feaver, sickness, prescription) {
    const sickinfo = {
      reg_no : reg_no,
      info: [{ 
        date: date ,
        feaver : feaver,
        sickness : sickness,
        prescription : prescription,
        _id : false}] 
    }

    // const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    return this.http.put('http://localhost:3000/sickinfo/update/${reg_no}', sickinfo);
  }
     
}
  