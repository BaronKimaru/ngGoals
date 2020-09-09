import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Goal } from "../models/goal";

const sampleData = [
  { id: 1, title: "Go to Borabora", completed: false },
  {
    id: 2,
    title: "Check out the Maasai Mara Wildebeest Migration",
    completed: false,
  },
  { id: 3, title: "Climb Mt. Kenya", completed: true },
  { id: 4, title: "Visit Santorini", completed: false },
  { id: 5, title: "Wine and Dine in the Maldives", completed: false },
  { id: 6, title: "Go snorkeling in Diani", completed: false },
];
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class GoalService {
  apiUrl: string = "https://jsonplaceholder.typicode.com/todos";
  apiContentLimit = "?_limit=10";

  constructor(private http: HttpClient) {}

  fetchGoals(): Observable<Goal[]> {
    // return sampleData;    // now we use data from api
    return this.http.get<Goal[]>(`${this.apiUrl}${this.apiContentLimit}`); // will be of type Goal[] hence we bring it in
  }

  // toggleGoal() will be of type any coz todo response isnt formatted as an exact goal eg missing userId
  toggleGoal(goal): Observable<any> {
    const url = `${this.apiUrl}/${goal.id}`;
    return this.http.put(url, goal, httpOptions);
  }

  deleteGoal(goal): Observable<Goal> {
    const url = `${this.apiUrl}/${goal.id}`;
    // console.log(url);
    return this.http.delete<Goal>(url, httpOptions);
  }

  // Add Goal - use the direct apiUrl as is
  addGoal(goal: Goal): Observable<Goal> {
    console.log("goals.service: Adding Goal to Server/backend");

    return this.http.post<Goal>(this.apiUrl, goal, httpOptions);
  }
}
