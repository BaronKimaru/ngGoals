(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-goal/add-goal.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-goal/add-goal.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (ngSubmit)=\"onSubmitGoal()\">\n  <input\n    type=\"text\"\n    name=\"title\"\n    [(ngModel)]=\"title\"\n    placeholder=\"Create new Goal .......\"\n  />\n  <!-- NB, ngmodel's & name's values (ie in this case: title) should always be the same -->\n\n  <!-- {{ title }} -->\n  <!-- This displays what you type as is since the `ngModel` directive is\n  bound to the `title` property -->\n\n  <input type=\"submit\" value=\"Submit\" class=\"btn\" />\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/goal/goal.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/goal/goal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setDynamicClassesForGoal()\">\n  <p>\n    <input type=\"checkbox\" (change)=\"onToggleGoal(goal)\" />\n    {{ goal.title }}\n    <button class=\"delete\" (click)=\"onDeleteGoal(goal)\">\n      <strong>X</strong>\n    </button>\n  </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/goals/goals.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/goals/goals.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-goal (addGoal)=\"addGoal($event)\"></app-add-goal>\n\n<app-goal\n  *ngFor=\"let goal of goals\"\n  [goal]=\"goal\"\n  (deleteGoal)=\"deleteGoal($event)\"\n>\n</app-goal>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <mat-toolbar color=\"\" fxLayout=\"column\">\n    <span class=\"header-title\"> {{ title }} </span>\n    <nav>\n      <a routerLink=\"/\" class=\"header-links\">Home</a> |\n      <a routerLink=\"/about\" class=\"header-links\">About</a>\n    </nav>\n  </mat-toolbar>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/about/about.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/about/about.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin: 100px\">\n  <h1 style=\"margin-bottom: 2rem\">\n    {{ title }}\n  </h1>\n  <p>\n    Welcome to the Goal Attainment App v1.0.0. This learning experience &\n    product was as a result of Brad's Angular Crash Course.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/goals/goals.component */ "./src/app/components/goals/goals.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");





var routes = [
    { path: "", component: _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_3__["GoalsComponent"] },
    { path: "about", component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "ng-goals";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/goals/goals.component */ "./src/app/components/goals/goals.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_goal_goal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/goal/goal.component */ "./src/app/components/goal/goal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-goal/add-goal.component */ "./src/app/components/add-goal/add-goal.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_7__["GoalsComponent"], _components_goal_goal_component__WEBPACK_IMPORTED_MODULE_10__["GoalComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _components_add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_13__["AddGoalComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-goal/add-goal.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-goal/add-goal.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n  display: flex;\r\n  font-family: inherit;\r\n}\r\n.form input[type=\"text\"] {\r\n  flex: 10;\r\n  padding: 15px;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n}\r\n.form input[type=\"submit\"] {\r\n  flex: 2;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZ29hbC9hZGQtZ29hbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsUUFBUTtFQUNSLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxPQUFPO0VBQ1Asb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWdvYWwvYWRkLWdvYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcbi5mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBmbGV4OiAxMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG4uZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBmbGV4OiAyO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/add-goal/add-goal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-goal/add-goal.component.ts ***!
  \***********************************************************/
/*! exports provided: AddGoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGoalComponent", function() { return AddGoalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddGoalComponent = /** @class */ (function () {
    function AddGoalComponent() {
        this.addGoal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // is of type any since its not formmated as exact <Goal> ie no id
    }
    AddGoalComponent.prototype.ngOnInit = function () { };
    AddGoalComponent.prototype.onSubmitGoal = function () {
        // create the todo (remember, most apis like jsonplaceholder dont need you to pass an id, they create it automatically)
        console.log("clicked");
        var goal = {
            title: this.title,
            completed: false,
        };
        console.log(goal);
        // like the delete, we emit this upward to access the goals in the `goals.component.ts`
        this.addGoal.emit(goal); // emitting this to parent component `goals.component.ts` via `goals.component.html`
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddGoalComponent.prototype, "addGoal", void 0);
    AddGoalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-goal",
            template: __webpack_require__(/*! raw-loader!./add-goal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-goal/add-goal.component.html"),
            styles: [__webpack_require__(/*! ./add-goal.component.css */ "./src/app/components/add-goal/add-goal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddGoalComponent);
    return AddGoalComponent;
}());



/***/ }),

/***/ "./src/app/components/goal/goal.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/goal/goal.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete {\r\n  background: #fff;\r\n  color: #ff0000;\r\n  padding: 5px 9px;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  float: right;\r\n  font-family: inherit;\r\n}\r\n\r\n/* will be used in dynamic classes using the [ngClass] directive */\r\n\r\n.goal {\r\n  background: #810000;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #fff;\r\n  color: #fff;\r\n}\r\n\r\n.is-complete {\r\n  text-decoration: line-through;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb2FsL2dvYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBLGtFQUFrRTs7QUFDbEU7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvYWwvZ29hbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBwYWRkaW5nOiA1cHggOXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiB3aWxsIGJlIHVzZWQgaW4gZHluYW1pYyBjbGFzc2VzIHVzaW5nIHRoZSBbbmdDbGFzc10gZGlyZWN0aXZlICovXHJcbi5nb2FsIHtcclxuICBiYWNrZ3JvdW5kOiAjODEwMDAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmlzLWNvbXBsZXRlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/goal/goal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/goal/goal.component.ts ***!
  \***************************************************/
/*! exports provided: GoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalComponent", function() { return GoalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_goal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/goal */ "./src/app/models/goal.ts");
/* harmony import */ var src_app_services_goal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/goal.service */ "./src/app/services/goal.service.ts");




var GoalComponent = /** @class */ (function () {
    function GoalComponent(goalService) {
        this.goalService = goalService;
        this.deleteGoal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GoalComponent.prototype.ngOnInit = function () { };
    // dynamic classes for goal
    GoalComponent.prototype.setDynamicClassesForGoal = function () {
        var goalClasses = {
            goal: true,
            "is-complete": this.goal.completed,
        };
        return goalClasses;
    };
    GoalComponent.prototype.onToggleGoal = function (goal) {
        console.log("toggling goal"); // test out
        // toggles from complete to not complete in the UI
        goal.completed = !goal.completed;
        // toggle in the backend
        this.goalService.toggleGoal(goal).subscribe(function (goal) {
            console.log(goal);
        });
    };
    GoalComponent.prototype.onDeleteGoal = function (goal) {
        console.log("goal.component: deleting goal");
        this.deleteGoal.emit(goal); // deleteGoal will be emitted at the top
    };
    GoalComponent.ctorParameters = function () { return [
        { type: src_app_services_goal_service__WEBPACK_IMPORTED_MODULE_3__["GoalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_goal__WEBPACK_IMPORTED_MODULE_2__["Goal"])
    ], GoalComponent.prototype, "goal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GoalComponent.prototype, "deleteGoal", void 0);
    GoalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-goal",
            template: __webpack_require__(/*! raw-loader!./goal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/goal/goal.component.html"),
            styles: [__webpack_require__(/*! ./goal.component.css */ "./src/app/components/goal/goal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_goal_service__WEBPACK_IMPORTED_MODULE_3__["GoalService"]])
    ], GoalComponent);
    return GoalComponent;
}());



/***/ }),

/***/ "./src/app/components/goals/goals.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/goals/goals.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ29hbHMvZ29hbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/goals/goals.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/goals/goals.component.ts ***!
  \*****************************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_goal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/goal.service */ "./src/app/services/goal.service.ts");



var GoalsComponent = /** @class */ (function () {
    function GoalsComponent(goalService) {
        this.goalService = goalService;
    }
    GoalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.goalService.fetchGoals().subscribe(function (goals) {
            console.log("goals: %o", goals);
            _this.goals = goals; // this.goals will be added
        });
    };
    // NB, goal is of type Goal in the argument
    GoalsComponent.prototype.deleteGoal = function (goal) {
        console.log("goals.component: deleting goal");
        // Ensure delete in the UI
        this.goals = this.goals.filter(function (goalItem) { return goalItem.id != goal.id; });
        // Ensure goal is deleted in the server
        this.goalService.deleteGoal(goal).subscribe();
    };
    GoalsComponent.prototype.addGoal = function (goal) {
        var _this = this;
        console.log("goals.component: Added Goal");
        // make post request to the api service, once we get it back, add it to the rest
        this.goalService.addGoal(goal).subscribe(function (goalItem) {
            // [...this.goals, goalItem];
            // OR
            _this.goals.push(goalItem);
        });
    };
    GoalsComponent.ctorParameters = function () { return [
        { type: src_app_services_goal_service__WEBPACK_IMPORTED_MODULE_2__["GoalService"] }
    ]; };
    GoalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-goals",
            template: __webpack_require__(/*! raw-loader!./goals.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/goals/goals.component.html"),
            styles: [__webpack_require__(/*! ./goals.component.css */ "./src/app/components/goals/goals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_goal_service__WEBPACK_IMPORTED_MODULE_2__["GoalService"]])
    ], GoalsComponent);
    return GoalsComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\r\n  font-family: \"PlayFair Display\", sans-serif;\r\n  font-size: 24px;\r\n}\r\n\r\n.header-links {\r\n  font-family: \"PlayFair Display\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJQbGF5RmFpciBEaXNwbGF5XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWxpbmtzIHtcclxuICBmb250LWZhbWlseTogXCJQbGF5RmFpciBEaXNwbGF5XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = "NgGoals";
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/about/about.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.title = "About";
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-about",
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: modules,
            exports: modules,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/goal.ts":
/*!********************************!*\
  !*** ./src/app/models/goal.ts ***!
  \********************************/
/*! exports provided: Goal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goal", function() { return Goal; });
// contains fields of a goal that youd want to have
var Goal = /** @class */ (function () {
    function Goal() {
    }
    return Goal;
}());



/***/ }),

/***/ "./src/app/services/goal.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/goal.service.ts ***!
  \******************************************/
/*! exports provided: GoalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalService", function() { return GoalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var sampleData = [
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
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json",
    }),
};
var GoalService = /** @class */ (function () {
    function GoalService(http) {
        this.http = http;
        this.apiUrl = "https://jsonplaceholder.typicode.com/todos";
        this.apiContentLimit = "?_limit=10";
    }
    GoalService.prototype.fetchGoals = function () {
        // return sampleData;    // now we use data from api
        return this.http.get("" + this.apiUrl + this.apiContentLimit); // will be of type Goal[] hence we bring it in
    };
    // toggleGoal() will be of type any coz todo response isnt formatted as an exact goal eg missing userId
    GoalService.prototype.toggleGoal = function (goal) {
        var url = this.apiUrl + "/" + goal.id;
        return this.http.put(url, goal, httpOptions);
    };
    GoalService.prototype.deleteGoal = function (goal) {
        var url = this.apiUrl + "/" + goal.id;
        // console.log(url);
        return this.http.delete(url, httpOptions);
    };
    // Add Goal - use the direct apiUrl as is
    GoalService.prototype.addGoal = function (goal) {
        console.log("goals.service: Adding Goal to Server/backend");
        return this.http.post(this.apiUrl, goal, httpOptions);
    };
    GoalService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GoalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GoalService);
    return GoalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\baronprojects\angularprojects\ng-goals\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map