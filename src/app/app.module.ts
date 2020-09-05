import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoalComponent } from './goal/goal.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    ProgressBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
