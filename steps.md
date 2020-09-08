1. Start the app to check that it is running

```
ng serve     // (or ng s -o if not already open in browser)
```

2. deploy it initially on netlify/firehost etc

```
netlify build
netlify init
netlify deploy
```

Create the `goals` component

```
ng g c components/goals
```

2.
3. Create the dummy data in your new `goals.component.ts` file as an attribute:
   this.goals = [
   {id: 1, title: 'Go to Borabora', completed: false},
   {id: 2, title: 'Check out the Maasai Mara Wildebeest Migration', completed: true},
   {id: 3, title: 'Visit Santorini', completed: false},
   ]

4. In your goals.component.html file, iterate through the todos:

```
<ul *ngFor=let goal of goals>
    {{ goal.title }}
</ul>
```
