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

- Create the dummy data in your new `goals.component.ts` file as an attribute:
  this.goals = [
  {id: 1, title: 'Go to Borabora', completed: false},
  {id: 2, title: 'Check out the Maasai Mara Wildebeest Migration', completed: true},
  {id: 3, title: 'Climb Mt. Kenya', completed: true},
  {id: 4, title: 'Visit Santorini', completed: false},
  {id: 5, title: 'Wine and Dine in the Maldives', completed: false},
  ]

- Creating the `models/goal.ts` for fields that we want the Goal to have:

```
mkdir model         // in same folder as the components folder (ie within app folder)
cd model && touch goal.ts
```

- Contents of models/goal.ts

```
// contains fields of a goal that youd want to have
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
    @Input goal: Goal[];    // bound goal of type `goal` can now be used within this class
}
```
