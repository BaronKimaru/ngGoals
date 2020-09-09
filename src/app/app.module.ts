import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GoalsComponent } from "./components/goals/goals.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GoalComponent } from "./components/goal/goal.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/layout/header/header.component';
import { AddGoalComponent } from './components/add-goal/add-goal.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [AppComponent, GoalsComponent, GoalComponent, HeaderComponent, AddGoalComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule, // for using Flex in your html
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
