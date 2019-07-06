import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreUiComponent } from './Score_UI/score-ui/score-ui.component';
import { BarGraphsUiComponent } from './Bar_graphs_UI/bar-graphs-ui/bar-graphs-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreUiComponent,
    BarGraphsUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
