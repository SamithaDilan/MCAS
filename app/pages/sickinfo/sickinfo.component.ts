import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MedicalService } from 'src/app/medical.service';
import { FormGroup, FormBuilder, Validators, FormsModule, FormArray, ReactiveFormsModule} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { Sickinfo } from './sickinfo.model' ;
import { Patient } from './sickinfo.model' ;
import { Drugs } from './sickinfo.model' ;
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-sickinfo',
  templateUrl: './sickinfo.component.html',
  styleUrls: ['./sickinfo.component.scss'],
  providers: [ MedicalService ]
})


    
export class SickinfoComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  
  findAll: Sickinfo [] ;
  sickAll: Sickinfo [] ;
  patient: Patient [] ;
  // reg: String ;
  drugs: Drugs [] ;
  fnd: Array<any> ;
  
  updateInfo: FormGroup ;
  findOne: any = {};
  

  constructor(private medicalService: MedicalService, private router: Router ,private route: ActivatedRoute ,private fb: FormBuilder) { 
    this.createInfo() ;
  }

  createInfo() {
    this.updateInfo = this.fb.group({
      reg_no : ['',Validators.required],
      date:'',
      feaver:'',
      sickness:'',
      newsick:this.fb.array([
       
      ]),
      prescription:''
      })
   
  }

  


  ngOnInit() {
    this.fetchInfo();
    
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule];

    // this.route.params.subscribe(params=>{
    //    this.reg = '2016CSC020';
    //   this.medicalService.getSickinfoById(this.reg).subscribe(res=>{
    //     this.findOne = res;
       
    //     this.updateInfo.get('reg_No').setValue(this.findOne.reg_No);
    //     this.updateInfo.get('date').setValue(this.findOne.faculty);
    //     this.updateInfo.get('feaver').setValue(this.findOne.date);
    //     this.updateInfo.get('name').setValue(this.findOne.name);
    //     this.updateInfo.get('raddress').setValue(this.findOne.raddress);
      
      
    //     });
    //   });

    providers: [ MedicalService ];
    
    //this.updateSickinfo();

    this.dropdownList = ['Mumbai','Bangaluru','Pune','Navsari','New Delhi'];
    //this.dropdownList = this.drugs ;
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 30,
      allowSearchFilter: true
    };
  }

  updateSickinfo(){
    // let Form = JSON.stringify(this.updateInfo.value);
    //console.log('awa pl');
    var reg_no = this.updateInfo.controls['reg_no'].value ;
    var date = this.updateInfo.controls['date'].value ;
    var feaver = this.updateInfo.controls['feaver'].value ;
    var sickness = this.updateInfo.controls['sickness'].value ;
    var prescription = this.updateInfo.controls['prescription'].value ;
    var newsick = this.updateInfo.get(['newsick']).value ;

    for (var i=0; i<newsick.length; i++){
      sickness.push(newsick[i]);
    }

    this.medicalService.updateSickinfo(reg_no,date,feaver,sickness,prescription).subscribe(()=>{
      console.log('Data injected');
    });
  }

  get newsick(){
    return this.updateInfo.get('newsick') as FormArray;
  } 

  addNew(){
    this.newsick.push(this.fb.control('')) ;
  }

  onSubmit(){
    
    console.log(this.updateInfo.get(['newsick']).value) ;
    
  }

  // onSubmit() {
  //   this.updateEmployee();    
  // }

  // gotoList() {
  //   this.router.navigate(['sickinfo']);
  // }

  fetchInfo() {
    this.medicalService
        .getTemp()
        .subscribe((data: Sickinfo[]) => {
            this.findAll = data ;
            this.fnd = this.findAll[0].info ;
            console.log('Data requested');
            //console.log(this.findAll);
    });

    this.medicalService
        .getPatientinfo()
        .subscribe((data1: Patient[]) => {
            this.patient = data1 ;
           
            console.log('Data requested');
            //console.log(this.patient);
    });

    this.medicalService
        .getDrugs()
        .subscribe((data2: Drugs[]) => {
            this.drugs = data2 ;
           
            console.log('Data requested-drugs');
            console.log(this.drugs);
    });

  }
  onItemSelect(item: any) {
  console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
  
  


