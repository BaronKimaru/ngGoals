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
    <input type="checkbox" (change)="onToggleGoal(goal)" />
    {{ goal.title }}
    <button class="delete" (click)="onDeleteGoal(goal)">X</button>
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

4. In the goal.component.ts, create two methods in your class

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
