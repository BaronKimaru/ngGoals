import { Component, OnInit } from "@angular/core";
import { Goal } from "../../models/goal";
import { GoalService } from "src/app/services/goal.service";

@Component({
  selector: "app-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.css"],
})
export class GoalsComponent implements OnInit {
  goals: Goal[];

  constructor(private goalService: GoalService) {}

  ngOnInit() {
    this.goalService.fetchGoals().subscribe((goals) => {
      console.log("goals: %o", goals);
      this.goals = goals; // this.goals will be added
    });
  }
}
