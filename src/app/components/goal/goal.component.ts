import { Component, OnInit, Input } from "@angular/core";
import { Goal } from "src/app/models/goal";
import { GoalService } from "src/app/services/goal.service";

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"],
})
export class GoalComponent implements OnInit {
  @Input() goal: Goal;

  constructor(private goalService: GoalService) {}

  ngOnInit() {}

  // dynamic classes for goal
  setDynamicClassesForGoal() {
    let goalClasses = {
      goal: true,
      "is-complete": this.goal.completed, // note that this class is in quotes(its because there's a hyphen)
    };

    return goalClasses;
  }

  onToggleGoal(goal) {
    console.log("toggling goal"); // test out

    // toggles from complete to not complete in the UI
    goal.completed = !goal.completed;

    // toggle in the backend
    this.goalService.toggleGoal(goal).subscribe((goal) => {
      console.log(goal);
    });
  }

  onDeleteGoal(goal) {
    console.log("deleting goal");
  }
}
