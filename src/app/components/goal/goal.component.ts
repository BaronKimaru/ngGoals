import { Component, OnInit, Input } from "@angular/core";
import { Goal } from "src/app/models/goal";

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"],
})
export class GoalComponent implements OnInit {
  @Input() goal: Goal;
  constructor() {}

  ngOnInit() {}

  // dynamic classes for goal
  setDynamicClassesForGoal() {
    let goalClasses = {
      goal: true,
      "is-complete": this.goal.completed, // note that this class is in quotes(its because there's a hyphen)
    };

    return goalClasses;
  }
}
