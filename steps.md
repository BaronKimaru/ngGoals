1. Start the app to check that it is running

```
ng serve        // (or ng s -o if not already open in browser)
```

2. Deploy it initially on netlify/firehost etc

```
netlify build
netlify init    // deploy folder will be: `dist/ng-goals`
netlify deploy
```

3. Start off by:

- Creating the `goals` component in a `components` folder:

```
ng generate component components/goals
```

\*\*NB: Since i had material.module in the same module, i had to do specify which module:

```
ng generate component components/goals --module app.module
```

- In `app.component.html`, clear out everything that was there by default and add the selector from `goals` component's decorator:

```
<div>
    <app-goals></app-goals>
</div>
```

- this will efectively display the contents of the goals.component.html from (by default):

```
<p>goals works!</p>

```

to (add your custom message ... for now):

```
<p> Goals </p>
```

- It's important to define `--module app.module` because you have another module eg (in my case) `material.module`  
  which makes Angular CLI unable to identify the targeted module automatically.

### Dummy Data and Models/Goal.ts

- Creating the `models/goal.ts` for fields that we want the Goal to have:

```
mkdir model         // in same folder as the components folder (ie within app folder)
cd model && touch goal.ts
```

- Contents of models/goal.ts

```
// contains fields of a goal that youd want to have
// NB: if not required, have them with question-mark -> id?: number
export class Goal {
  id: number;
  title: string;
  completed: boolean;
}

```

- Also note that other components created eg the above come with an `{ OnInit() }` that works exactly  
  like a constructor(initializes as soon as app is loaded). However we need to use **Constructors to bring in  
  services** hence the need for the `ngOnInit(){}` for your other functionality that needs quick instantiation.

4. In your `goals.component.html` file:

- import the Goal structure from models/goal.ts and include it as a property of the class:

```
import { Goal } from '../../models/Goal';

...other code..

export class GoalsComponent implements OnInit() {
    // have the Goal property here as goal of type Goal as a list of the Goal instances
    goals: Goal[];

```

- Create the dummy data in your new `goals.component.ts` file as an attribute:

```
import { Goal } from '../../models/Goal';

...other code..

export class GoalsComponent implements OnInit() {
    // have the Goal property here as goal of type Goal as a list of the Goal instances
    goals: Goal[];

    constructor() {}

    ngOnInit() {
        this.goals = [
        {id: 1, title: 'Go to Borabora', completed: false},
        {id: 2, title: 'Check out the Maasai Mara Wildebeest Migration', completed: true},
        {id: 3, title: 'Climb Mt. Kenya', completed: true},
        {id: 4, title: 'Visit Santorini', completed: false},
        {id: 5, title: 'Wine and Dine in the Maldives', completed: false},
        ]
    }
}

```

- iterate through the goals:

```
<ul *ngFor=let goal of goals>
    {{ goal.title }}
</ul>
```

5. However since we want the individual goals to reside in their own component:

- Create a new `goal` component:

```
ng generate component components/goal
```

\*\*NB: remember if you have your material.module in the same folder as app.module, clashes will happen, so do this:

```
ng generate component components/goal  --module app.module
```

- In the goal.component.ts, note the selector in the `goal` component's decorator ie `app-goal`

```
@Component({
  selector: 'app-goal',
  templateUrl: './app-goal.component.html',
  styleUrls: ['./app-goal.component.css']
})
```

- and use that selector like so in the `goals.component.html`:

```
<app-goal *ngFor=let goal of goals>
</app-goal>
```

6. Instead of having `{{ goal.title }}` located within that html file:

- bind the goal like so:

```
[goal]=goal
```

- in full:

```
<app-goal *ngFor=let goal of goals [goal]=goal>
</app-goal>
```

- get that bound `goal` as an Input:

```
import { Component, Input } from "@angular/core";
import { Goal } from "../models/Goal";

...other code ...

export class Goal {
    @Input() goal: Goal[];    // bound goal of type `goal` can now be used within this class
}
```

7. Change cotnent of `app-goal.component.html` from its current default:

```
<p>
    Goal works!
</p>
```

to:

```
<p>
    {{ goal.title }}
</p>
```

- The individual goal items should now be seen

### Inclusion of reset css in style.css

```
/* You can add global styles to this file, and also import other style files */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Roboto, "Helvetica Neue", sans-serif;
  line-height: 1.5;
}
a {
  color: #005e2a;
  text-decoration: none;
}
.container {
  padding: 0 1rem;
}
.btn {
  display: inline-block;
  padding: 8px 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  background: #005e2a;
}
.btn:hover {
  background: #fff;
  color: #fff;
}
```

### Adding Static/Dynamic Classes, Change/Toggle & Delete to Individual Goal Instances

\*\*NB:\*\*

- `ngClass` directive is always within Curly Braces ie [ngClass]
- click, submit & other events are in parentheses ie (click)

1. Change the content of the goal.component.html from aforementioned change to

```
<div>
    <input (change)="onToggleGoal">
    <p>{{ goal.title }} </p>
    <button class="delete" (onclick)="onDleteGoal"></button>
</div>
```

2. Add Specific styling for the goal item via the `goal.component.css`:

```
.delete{
    background: #ff0000;
    color: #fff;
    padding: 5px 10px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius:50%;
    float: right;
}
.goal{
    background: #005e2a;
    padding: 15px;
    border: 1px solid #fff;
}
.is-complete{
    text-decoration: line-through;
}
```

3. Set dynamic classes using the ngClass Directive

- set class in the goal.component.html

```
<div [ngClass]="setDynamicClassesForGoal">
  <p>
    <input type="checkbox" />
    {{ goal.title }}
    <button class="delete" >X</button>
  </p>
</div>
```

- Create the class in the goal.component.ts file:

```
import { Component, Input } from "@angular/core";
import { Goal } from "../models/Goal";

...other code ...

export class Goal {
    @Input() goal: Goal[];    // bound goal of type `goal` can now be used within this class

    ngOnInit(){}

    setDynamicClassesForGoal(){
        let goalClasses = {
            goal: true,
            if(this.goal.completed == true){
                "is-complete":true   // note that this class is in quotes(its because there's a hyphen)
            }
        }

        return goalClasses
    }
}
```

4. Set Events eg (change) or (click) or (submit) - logging for testing purposes first:
   **NB:**

- the methods that are instantiated will take in the instance we want the event to happen in (eg `goal` in our case)

* in `goal.component.html`, add events for changing and deleting:

```
<div [ngClass]="setDynamicClassesForGoal">
  <p>
    <input type="checkbox" (change)="onToggleGoal(goal)" />
    {{ goal.title }}
    <button class="delete" (click)="onDeleteGoal(goal)" > X </button>
  </p>
</div>
```

- In the `goal.component.ts`, create two methods in your class

```
export class Goal implements OnInit(){
    ... other code ...

    onToggleGoal(goal){
        console.log("toggling goal"); // test out

        // this method ensures that:
        // 1. In the UI, the goal is crossed out if completed & viceversa
        // 2. In the backend server, the goal is changed to completed & viceversa
    }

    onDeleteGoal(goal){
        console.log("deleting goal");

        // this method ensures that:
        // 1. In the UI, the goal is removed from the rest of the goals
        // 2. In the backend server, the goal is deleted permanently
    }
}
```

5. Set Events (Frontend & backend)

- In the `goal.component.ts`, set the goal to be incomplete if toggled & viceversa

```
export class Goal implements OnInit(){
    ... other code ...

    onToggleGoal(goal){
        console.log("toggling goal"); // test out

        goal.completed = !goal.completed;
    }
}
```

- Move data to a service so we can begin access to backend data:

```
ng generate service services/Goal
```

- Go to `goal.service.ts` and move the sample data from `goals.components.ts` to it:

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() { }

  fetchGoals() {
    return [
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
      {
        id: 6,
        title: "Go snorkeling in Diani",
        completed: true,
      },
    ];
}
```

- In `goals.component.ts`, bring in the GoalService via the constructor and then use it to fetch the goals:

```
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

  constructor(private goalService: GoalService) {}   // GoalService brought in

  ngOnInit() {
    this.goals = this.goalService.fetchGoals();     // GoalService used to fetch all the goals
  }
}

```

### Fetch data from API - jsonplaceholder.typicode.

- Include the http module for handling Requests (GET, POST etc) in your `app.module.ts`:

```
import { HttpClientModule } from "@angular/common/http";

// in your imports, add it
@NgModule({
  declarations: [AppComponent, GoalsComponent, GoalComponent],
  imports: [
    // ... other imports ...

    HttpClientModule,           // added the http module here

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

- In `goal.service.ts`, bring in the newly-installed http stuff:

```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";         // added the http imports here

// get rid of the sample data (or include it above the class as a global like this)
const sampleData = [
  { id: 1, title: "Go to Borabora", completed: false },
  { id: 2,title: "Check out the Maasai Mara Wildebeest Migration",completed: false,},
  { id: 3, title: "Climb Mt. Kenya", completed: true },
  { id: 4, title: "Visit Santorini", completed: false },
  { id: 5, title: "Wine and Dine in the Maldives", completed: false },
  { id: 6,title: "Go snorkeling in Diani",completed: false,},
];

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }             // added the http client

  fetchGoals() {
    // return sampleData;    // now we use data from api
  }
}

```

- fetching the goals

```
export class GoalService {
  apiUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {}

  fetchGoals(): Observable<Goal[]> {
    // return sampleData;    // now we use data from api
    return this.http.get<Goal[]>(this.apiUrl); // will be of type Goal[] hence we bring it in (the method too)
  }
}
```

- Now change content of ngOnInit(){} to use `subscribe` & whatever we get will be linked to `this.goals`:
  Change from:

```
// ...other code ...

export class GoalsComponent implements OnInit {
  goals: Goal[];

  constructor(private goalService: GoalService) {}

  ngOnInit() {

    this.goals = this.goalService.fetchGoals();
  }
}

```

to:

```
export class GoalsComponent implements OnInit {
  goals: Goal[];

  constructor(private goalService: GoalService) {}

  ngOnInit() {
    this.goalService.fetchGoals().subscribe(goals => {
        this.goals = goals;         // this.goals will be added
    });
  }
}
```

![image](https://user-images.githubusercontent.com/16536231/92499558-b34a3f80-f204-11ea-8598-7af0aeffe4e7.png)

- set a limit

```
export class GoalService {
  apiUrl: string = "https://jsonplaceholder.typicode.com/todos";
  apiContentLimit = "?_limit=10";

  constructor(private http: HttpClient) {}

  fetchGoals(): Observable<Goal[]> {
    // return sampleData;    // now we use data from api
    return this.http.get<Goal[]>(`${this.apiUrl}${this.apiContentLimit}`); // will be of type Goal[] hence we bring it in (the method too)
  }
}
```

### Toggling & Deleting in server

- in `goal.component.ts`, bring in the service` :

```
... other code ...

import { GoalService } from "src/app/services/goal.service";   // imported the service

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"],
})
export class GoalComponent implements OnInit {
  @Input() goal: Goal;

  constructor(private goalService: GoalService) {}    // brought in the service

... other code ...

```

- Create the toggle fucntionality for the backend in the `goal.component.ts`

```
  ... other code ..

  onToggleGoal(goal) {
    console.log("toggling goal"); // test out

    // toggles from complete to not complete in the UI
    goal.completed = !goal.completed;

    // toggle in the backend (will give us our todo back- Ive console logged to show it)
    this.goalService.toggleGoal(goal).subscribe(goal=>{
        console.log(goal);
    });  // toggleGoal has to b created
  }

  ... other code ...

```

- in `goal.service`, create the ToggleGoal(goal) & remember to include `httpOptions`:

```

// Must be passed to put request
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

... other code ...

export class GoalService {
  ... other code ...

  // toggleGoal() will be of type any coz response isnt formatted as an exact goal eg missing userId
  toggleGoal(goal): Observable<any> {
    const url = `${this.apiUrl}/${goal.id}`;
    return this.http.put(url, goal, httpOptions);
  }
}
```

![image](https://user-images.githubusercontent.com/16536231/92510700-ec8aab80-f214-11ea-920f-58d273681d06.png)

- Delete -> Tricky cause it requires emitting the event up to where todos are (in `goals.component.ts`):
  **in `goal.components.ts`: create the method triggered by the button click & in it emit the goal instance up to the parent component `goals.component.ts` as `Output`**

```
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core"; // added Output & eventEmitter

export class GoalComponent implements OnInit {
  @Input() goal: Goal;
  @Output() deleteGoal: EventEmitter<Goal> = new EventEmitter(); // method must be an EventEmmitter of type Goal

  onDeleteGoal(goal){
    this.deleteGoal.emit(goal); // deleteGoal will be emitted at the top
  }
}
```

- then we catch that emitted event in the `goals.component.html`:

```
<app-goal
    *ngFor="let goal of goals"
    [goal]="goal"
    (onDeleteGoal) = deleteGoal($event)
    >
</app-goal>

```

- Finally in goals.service.ts, we catch the above deleteTodo(\$event) method:

```
... other code ...
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

    // we'll delete from the ui
    // we'll also delete from the backend
  }
}
```

- Deleting from UI

```
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

    this.goals = this.goals.filter((goalItem) => {
      goalItem.id != goal.id;
    }); // only show goals where the id is not the clicked goal's id
  }
}
```
