import { Component, OnInit } from "@angular/core";
import { Goal } from "../../models/goal";

@Component({
  selector: "app-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.css"],
})
export class GoalsComponent implements OnInit {
  goals: Goal[];

  constructor() {}

  ngOnInit() {
    this.goals = [
      {
        id: 1,
        title: "Go to Borabora",
        completed: false,
      },
      {
        id: 2,
        title: "Check out the Maasai Mara Wildebeest Migration",
        completed: true,
      },
      {
        id: 3,
        title: "Climb Mt. Kenya",
        completed: true,
      },
      {
        id: 4,
        title: "Visit Santorini",
        completed: false,
      },
      {
        id: 5,
        title: "Wine and Dine in the Maldives",
        completed: false,
      },
    ];
  }
}
