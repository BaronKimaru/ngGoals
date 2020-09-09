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

  // NB, goal is of type Goal in the argument
  deleteGoal(goal: Goal) {
    console.log("goals.component: deleting goal");
    // Ensure delete in the UI
    this.goals = this.goals.filter((goalItem) => goalItem.id != goal.id);

    // Ensure goal is deleted in the server
    this.goalService.deleteGoal(goal).subscribe();
  }

  addGoal(goal: Goal) {
    console.log("goals.component: Added Goal");

    // make post request to the api service, once we get it back, add it to the rest
    this.goalService.addGoal(goal).subscribe((goalItem) => {
      // [...this.goals, goalItem];
      // OR
      this.goals.push(goalItem);
    });
  }
}
