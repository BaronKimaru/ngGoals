import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-goal",
  templateUrl: "./add-goal.component.html",
  styleUrls: ["./add-goal.component.css"],
})
export class AddGoalComponent implements OnInit {
  @Output() addGoal: EventEmitter<any> = new EventEmitter(); // is of type any since its not formmated as exact <Goal> ie no id

  // The `name="title"` in your input will be bound to this `title` property via ngmodel directive
  // the ngmodel directive is in curly brackets and parentheses cause its Two-way data binding [()]
  title: string;

  constructor() {}

  ngOnInit() {}

  onSubmitGoal() {
    // create the Goal (remember, most apis like jsonplaceholder dont need you to pass an id, they create it automatically)
    console.log("clicked");
    const goal = {
      title: this.title, // the bound title property of this class
      completed: false, // completed will normally be false by default
    };
    console.log(goal);

    // like the delete, we emit this upward to access the goals in the `goals.component.ts`
    this.addGoal.emit(goal); // emitting this to parent component `goals.component.ts` via `goals.component.html`
  }
}
