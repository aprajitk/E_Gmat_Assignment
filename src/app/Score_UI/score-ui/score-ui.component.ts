import { Component, OnInit } from '@angular/core';
import { Score } from 'src/model/score';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-score-ui',
  templateUrl: './score-ui.component.html',
  styleUrls: ['./score-ui.component.css']
})
export class ScoreUiComponent implements OnInit {
submitted=false;
score_details:Score;
move;
  constructor() { }

  ngOnInit() {
  }
  numericOnly(event): boolean {    
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
}
  submit_refresh(){
     
    this.submitted=true;
    this.score_details = new Score;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      this.score_details[inputs[i].name] = inputs[i].value;
    }
    console.log(this.score_details)
  }
  // validate(){
  //     if(+this.score_details.Quant_Current > 60){
  //       return false;
  //     }
  // }
  // validate(){
  //   if(value>=60) { this.value = 60; }
  // }
}
