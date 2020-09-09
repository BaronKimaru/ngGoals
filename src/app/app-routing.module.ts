import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GoalsComponent } from "./components/goals/goals.component";
import { AboutComponent } from "./components/pages/about/about.component";

const routes: Routes = [
  { path: "", component: GoalsComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
