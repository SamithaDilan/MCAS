import { Component } from "@angular/core";
import {FormControl} from '@angular/forms';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  data2 = [
    { id: '2', itemName: 'Paris ' },
    { id: '3', itemName: 'Bucharest' },
    { id: '4', itemName: 'Rome' },
    { id: '5', itemName: 'New York' },
    { id: '6', itemName: 'Miami ' },
    { id: '7', itemName: 'Piatra Neamt' },
    { id: '8', itemName: 'Paris ' },
    { id: '9', itemName: 'Bucharest' },
    { id: '10', itemName: 'Rome' },
    { id: '11', itemName: 'New York' },
    { id: '12', itemName: 'Miami ' },
    { id: '13', itemName: 'Piatra Neamt' },
    { id: '14', itemName: 'Paris ' },
    { id: '15', itemName: 'Bucharest' },
    { id: '16', itemName: 'Rome' },
    { id: '17', itemName: 'New York' },
    { id: '18', itemName: 'Miami ' },
    { id: '19', itemName: 'Piatra Neamt' }
  ];
  selectedItems2 = [];
  settings2 = {
    singleSelection: false,
    text: 'Choose City',
    enableSearchFilter: false,
    classes: 'selectpicker btn-info'
  };
}
