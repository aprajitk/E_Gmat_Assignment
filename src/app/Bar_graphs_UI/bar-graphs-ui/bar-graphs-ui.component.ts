import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Score } from 'src/model/score';
import { delay } from 'q';

@Component({
  selector: 'app-bar-graphs-ui',
  templateUrl: './bar-graphs-ui.component.html',
  styleUrls: ['./bar-graphs-ui.component.css']
})
export class BarGraphsUiComponent implements OnInit {
@Input() score_data:Score;
Total_current_score:number;
Total_target_score:number;
Total_score=800;
Quant_score=60;
Verbal_score=60;
Current_Score;
Target_Score;
Q_Current_Score;
V_Current_Score;
Q_Target_Score;
V_Target_Score;
diff_total_score:number;
diff_quant_score:number;
diff_verbal_score:number;
findDiff;
  constructor() { }

  ngOnInit() {
   

  }
  ngOnChanges(){
    this.move();
    this.myFunction(this.Total_current_score, this.Total_target_score);
  }
  move() {
    this.Total_current_score=200 + (+this.score_data.Verbal_Current + +this.score_data.Quant_Current)*5;
    this.Total_target_score=200 + (+this.score_data.Verbal_Target + +this.score_data.Quant_Target)*5;
    this.diff_total_score=this.Total_target_score-this.Total_current_score;
    console.log(this.diff_total_score)
    this.diff_quant_score=this.score_data.Quant_Target-this.score_data.Quant_Current;
    this.diff_verbal_score= this.score_data.Verbal_Target-this.score_data.Verbal_Current;
    console.log(this.diff_verbal_score, this.diff_quant_score)
    // this.showDiff(+this.Total_current_score, +this.Total_target_score,"diff")
      this.Current_Score = document.getElementById("Current_Score"); 
      // for(let i=1;i<=this.Total_current_score;i++){
      //   setTimeout(()=>
      //   this.Current_Score.style.width = (i /this.Total_score)*100 + '%',500);   
      // }
      this.Current_Score.style.width = (this.Total_current_score /this.Total_score)*100 + '%';
      this.Target_Score = document.getElementById("Target_Score");   
      this.Target_Score.style.width = (this.Total_target_score /this.Total_score)*100 + '%';  
      
      this.Q_Current_Score= document.getElementById("Q_Current_Score");
      this.Q_Current_Score.style.width= (this.score_data.Quant_Current /this.Quant_score)*100 + '%';
      
      this.Q_Target_Score= document.getElementById("Q_Target_Score");
      this.Q_Target_Score.style.width= (this.score_data.Quant_Target / this.Quant_score)*100 + "%";
      

      this.V_Current_Score= document.getElementById("V_Current_Score");
      this.V_Current_Score.style.width= (this.score_data.Verbal_Current/this.Verbal_score)*100 + '%';

      this.V_Target_Score= document.getElementById("V_Target_Score");
      this.V_Target_Score.style.width= (this.score_data.Verbal_Target / this.Verbal_score)*100 + "%";
    // this.perValue(this.V_Current_Score,"V_Current_Score",this.score_data.Verbal_Current,this.Verbal_score);
    // this.perValue(this.V_Target_Score,"V_Target_Score",this.score_data.Verbal_Target,this.Verbal_score);
    // this.perValue(this.Target_Score,"Target_Score",this.Total_target_score,this.Total_score);
    // this.perValue(this.Current_Score,"Current_Score",this.Total_current_score,this.Total_score);
    // this.perValue(this.Q_Current_Score,"Q_Current_Score",this.score_data.Quant_Current,this.Quant_score);
    // this.perValue(this.Q_Target_Score,"Q_Target_Score",this.score_data.Quant_Target,this.Quant_score);


    }
    // perValue(x:any,a:string,b:number,c:number){
    //   x= document.getElementById(a);
    //   x.style.width= (b/c)*100 + '%';
    // }
    showDiff(d1:number,d2:number,id:string){
      if(d1<d2){
        // this.findDiff= document.getElementById(id);
        document.getElementById(id).style.transform= "translateX((d1+(d2-d1)/2) + 'px')";
        console.log(document.getElementById(id).style.transform);
      }
      console.log("this.findDiff.style.width")
    }
    myFunction(d1:number,d2:number) {
      let v=(d1+(d2-d1)/2)/this.Total_score*100;
      document.getElementById("diff").style.transform= "translateX("+v+"%)"
      console.log("translateX("+v+"%)");
    }
  }
