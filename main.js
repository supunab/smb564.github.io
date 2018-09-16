(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    margin:0;\n    padding:0;\n    font-family:sans-serif;\n    background:#002b38;\n}\n.container {\n    width:600px;\n    margin:10px auto 0;\n    display:flex;\n}\n.container .box {\n    position:relative;\n    width: 600px;\n    height:60x;\n    box-sizing:border-box;\n    text-align:center;\n    margin:0 10px;\n    background:#00171d;\n    overflow:hidden;\n    border-radius:4px;\n    box-shadow:0 0 0 2px rgba(0,7,10,1);\n}\n.container .box .icon {\n    width:100%;\n    height:100%;\n    background:#00171d;\n    transition: 0.5s;\n}\n.container .box .icon .fa {\n    font-size: 2em;\n    line-height:50px;\n    color: #0ff;\n}\n.container .box:hover .icon {\n    -webkit-transform:scale(0);\n            transform:scale(0);\n}\n.container .box .details {\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:#03a9f4;\n    transition:0.5s;\n    -webkit-transform:scale(2);\n            transform:scale(2);\n    opacity:0;\n}\n.container .box:hover .details {\n    -webkit-transform:scale(1);\n            transform:scale(1);\n    opacity:1;\n}\n.container .box .details h3 {\n    margin:0;\n    padding:0;\n    line-height:50px;\n    font-size:1em;\n    color:#fff;\n}\n.container .box .details:nth-child(2) .details {\n    background:#e91e63;\n}\n.container .box .details:nth-child(2) .details {\n    background:#607d8b;\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<p class=\"h1\" style=\"font-family: cursive; text-align: center;\"><b>Supun Abeysinghe</b></p>\n<hr>\n<p style=\"padding:14px; font-family:cursive; font-size: large; text-align: justify\">\n  I am a final year undergraduate of the Department of <a href=\"http://www.cse.mrt.ac.lk/\">Computer Science and Engineering </a>, <a href=\"https://www.mrt.ac.lk/web/\">University of Moratuwa</a>.\n  I am a tech enthusiast and has a craving for coding! My interests lie in the fields of natural language processing, \n  deep learning, and artificial intelligence in general. Moreover, I have an interest in web developing and I like to \n  solve algorithmic challenges as a hobby. I have done a research internship at <a href=\"http://www.statnlp.org\">StatNLP lab</a>, Singapore \n  University of Technology and Design (SUTD), under the supervision of <a href=\"https://istd.sutd.edu.sg/people/faculty/lu-wei\">Prof. Lu Wei</a>. \n  Apart from that, I have worked on several web development projects as a freelance developer.\n</p>\n<div style=\"padding-left:20px;\">\n    <a class=\"btn\" href=\"/assets/files/resume.pdf\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"fa fa-download\"></i> Download Resume</a>\n</div>\n\n<div class=\"container\">\n    <div class=\"box\">\n      <div class=\"icon\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></div>\n      <div class='details'><h3>+94 717018897</h3></div>\n    </div>\n    \n    <div class=\"box\">\n      <div class=\"icon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></div>\n      <div class='details'><h3>supun.14@cse.mrt.ac.lk</h3></div>\n    </div>\n</div>\n\n<hr>\n\n<!-- <img class='center' style=\"width: 900px;\" src=\"/assets/images/word_cloud_1.png\" alt=\"\"> -->\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"] },
    { path: 'awards', component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_4__["AwardsComponent"] },
    { path: 'publications', component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_5__["PublicationsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-top\">\n    <app-sidebar></app-sidebar>\n    <!-- this is not responsive, make this responsive later -->\n    <div style=\"padding-left:300px;padding-right: 25px;\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
                _awards_awards_component__WEBPACK_IMPORTED_MODULE_7__["AwardsComponent"],
                _publications_publications_component__WEBPACK_IMPORTED_MODULE_8__["PublicationsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/awards/awards.component.css":
/*!*********************************************!*\
  !*** ./src/app/awards/awards.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/awards/awards.component.html":
/*!**********************************************!*\
  !*** ./src/app/awards/awards.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<p class=\"h1\"><b>Awards and Achievements</b></p>\n<hr>\n<p class=\"h5\"><b><i class=\"fa fa-trophy\"></i>&nbsp;Fifth Place</b><span style=\"float:right;color: darkred\">[2018]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>Team Sentylic at Implicit Emotion Detection Task <a href=\"http://implicitemotions.wassa2018.com/results/\">[Leaderboard]</a>&nbsp;<a href=\"https://arxiv.org/abs/1809.01452\">[Paper]</a></b></p>\n<p style=\"color: grey;text-align: justify;\">This task was organized as a shared task for 9th Workshop on \n  Computational Approaches to Subjectivity, Sentiment & Social Media Analysis. The requirement of \n  this task was to predict the emotions expressed in a text without having access to explicit mentions of \n  emotion-related words. There were participants from all around the world from some of the top universities.</p>\n\n<hr>\n<p class=\"h5\"><b><i class=\"fa fa-trophy\"></i>&nbsp;31<sup>st</sup> Place (Top 0.8%)</b><span style=\"float:right;color: darkred\">[2018]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>Team cseuom_sentylic at DengAI: Predicting Disease Spread <a href=\"https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/leaderboard/\">[Leaderboard]</a></b></p>\n<p style=\"color: grey;text-align: justify;\">The task was to predict the number of Dengue cases recorded in two \n  cities San Juan and Iquitos of Peru. This was done as a part of the CS 4642 - Data Mining module and we have \n  tried several preprocessing techniques, regression models and ensembling techniques as well. Our team managed to\n   rank in the top 0.8% of the leaderboard.</p>\n\n<hr>\n<p class=\"h5\"><b><i class=\"fa fa-trophy\"></i>&nbsp;1 Gold, 7 Silver, 5 Bronze </b></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>Hackerrank Competitive Programming Contests <a href=\"https://www.hackerrank.com/smb564\">[Profile]</a></b></p>\n<p style=\"color: grey;text-align: justify;\">Hacker Rank is an online competitive programming hosting platform where developers from \n  all over the world compete in contests. (Medals awarding scheme – Gold - top 4%, Silver - top 8% and Bronze - top 13%)</p>\n\n<hr>\n<p class=\"h5\"><b><i class=\"fa fa-trophy\"></i>&nbsp;106<sup>th</sup> in World, 3<sup>rd</sup> in Sri Lanka </b><span style=\"float:right;color: darkred\">[2017]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>IEEEXtreme V10.0 Programming Competition (Team - nonameyet) <a href=\"http://ieeextreme.org/files/2016/11/Overall-Ranking-1.pdf\">[Results]</a></b></p>\n<p style=\"color: grey;text-align: justify;\">IEEEXtreme is one of the renowned competitive programming competition which attracts\n   participants from all over the world from top universities.</p>\n\n<hr>\n<p class=\"h5\"><b><i class=\"fa fa-trophy\"></i>&nbsp;First Place</b><span style=\"float:right;color: darkred\">[2016]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>Code Breaker - Bethem Challenge </b></p>\n<p style=\"color: grey;text-align: justify;\">Code Breaker challenge was a 24-hour competitive programming \n  contest which was organized by 99x Technologies, Sri Lanka. This was hosted on hacker-rank and 78 students \n  from universities of all over the country participated. I managed to obtain the top rank in this competition.</p>\n\n<hr>\n<p class=\"h5\"><b><i class=\"fa fa-trophy\"></i>&nbsp;First Place</b><span style=\"float:right;color: darkred\">[2016]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>MoraXtreme v1.0 </b></p>\n<p style=\"color: grey;text-align: justify;\">MoraXtreme is a competitive programming competition which is similar to \n  IEEEXtreme programming competition. More than 60 teams from all the faculties of University of Moratuwa participated\n   in the event and we managed to secure the 1st place.</p>\n\n<hr>\n<p class=\"h5\"><b><i class=\"fa fa-trophy\"></i>&nbsp;Second Place</b><span style=\"float:right;color: darkred\">[2016]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>AcesCoders v6.0 </b></p>\n<p style=\"color: grey;text-align: justify;\">AcesCoders v6.0 was the 6th edition of the competitive programming event \n  organized by the Department of Computer Engineering, University of Peradeniya. Undergraduates from all over the country \n  participated in the event. Ranked 2nd from 102 teams from all over the country.</p>"

/***/ }),

/***/ "./src/app/awards/awards.component.ts":
/*!********************************************!*\
  !*** ./src/app/awards/awards.component.ts ***!
  \********************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AwardsComponent = /** @class */ (function () {
    function AwardsComponent() {
    }
    AwardsComponent.prototype.ngOnInit = function () {
    };
    AwardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awards',
            template: __webpack_require__(/*! ./awards.component.html */ "./src/app/awards/awards.component.html"),
            styles: [__webpack_require__(/*! ./awards.component.css */ "./src/app/awards/awards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<p class=\"h2\"><b>Work Experience</b></p>\n<hr>\n<p class=\"h5\"><b>Visiting Fellow</b><span style=\"float:right;color: darkred\">[2017 Jun. - 2017 Dec.]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>StatNLP Lab, Singapore University of Technology and Design</b></p>\n<p style=\"color: grey;text-align: justify;\">I have done research on Natural Language Processing. \n  The topics includes graphical models, traditional machine learning models and deep learning models.\n   Apart from that I have involved in testing of StatNLP framework.</p>\n\n<hr>\n<p class=\"h5\"><b>Teaching Assistant</b><span style=\"float:right;color: darkred\">[2018 Aug. - 2018 Dec.]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>University of Moratuwa</b></p>\n<p style=\"color: grey;text-align: justify;\">I'm currently working as a teaching assistant (TA) for \n  Data Structures and Algorithms module offered by department of Computer Science and Engineering.</p>\n\n<hr>\n<p class=\"h5\"><b>Freelance Developer</b><span style=\"float:right;color: darkred\">[2016 - 2017]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>Web Application Developer</b></p>\n<p style=\"color: grey;text-align: justify;\">I have engaged in several freelance web developement projects. </p>\n<hr>\n\n<p class=\"h2\"><b>Volunteer Experience</b></p>\n<hr>\n<p class=\"h5\"><b>Secretary</b><span style=\"float:right;color: darkred\">[2017 - 2018]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>Computer Society, IEEE Student Branch, University of Moratuwa</b></p>\n<p style=\"color: grey;text-align: justify;\">As the secretary, I have involved in multple projects/events organized by\nthe Comptuter Society of IEEE Student Branch, Univeristy of Moratuwa. Some of the work include</p>\n<ul>\n  <li>Problem creation and contest moderation for CodeExpertz 3.0 which is an all island competitive \n    programming competition for school children.</li>\n  <li>Problem creation and contest moderation for MoraXtreme 2.0 which is a competitive programming \n    competition for internal students of Univeristy of Moratuwa. </li>\n  <li>Conducted several awareness programs.</li>\n</ul>"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<p class=\"h1\"><b>Projects</b></p>\n<hr>\n<p class=\"h5\"><b>Social Media Analytics Platform</b>&nbsp;<a href=\"https://github.com/Sentylic/pathway-visualizer\"><i class=\"fab fa-github\"></i>&nbsp;[code]</a><span style=\"float:right;color: darkred\">[2018]</span></p>\n<p style=\"color: grey;text-align: justify;\">A social media analytics platform which has the ability to extract\n   reviews for any place, restaurant or any other entity, identify aspects/topics discussed in those reviews, \n   find the sentiment expressed towards each identified aspect and extract the deeper emotions expressed in those reviews,\n    in general, is developed. Each of the subtasks is identified as research components and we have done extensive research\n     under each subtask.</p>\n<ul>\n  <li>Used Technologies: PyTorch, Tensorflow, Python, Flask, Java, node.js</li>\n  <li>Used Concepts: Deep Learning models for NLP, IKASL algorithm, GSOM</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>Scanner (Lexical Analyzer) and Parser</b>&nbsp;<a href=\"https://github.com/smb564/c-minus\"><i class=\"fab fa-github\"></i>&nbsp;[code]</a><span style=\"float:right;color: darkred\">[2018]</span></p>\n<p style=\"color: grey;text-align: justify;\">Implementation of Scanner and Parser for the c-minus language specified \n  in the compiler construction: Principles and Practice book.</p>\n<ul>\n  <li>Used Technologies: Bison (to generate parser), Flex (to generate lexical analyzer), C++</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>Sri Lanka Restaurant Reviews Search Index</b>&nbsp;<a href=\"https://github.com/smb564/CS4642-IR-Restaurants\"><i class=\"fab fa-github\"></i>&nbsp;[scraper-code]</a><span style=\"float:right;color: darkred\">[2018]</span></p>\n<p style=\"color: grey;text-align: justify;\">A search index for a scraped set of reviews from openly available reviews was built using \n  Apache Solr. Several Information Retrieval techniques have been employed to improve the performance of the model. \n  This was done as a requisite for CS 4642 - Data Mining and Information Retrieval module.</p>\n<ul>\n  <li>Used Technologies: Apache Solr, Scrapy (for scraping)</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>Internship Portal</b>&nbsp;<a href=\"https://github.com/smb564/Internship-sharepoint-addin\"><i class=\"fab fa-github\"></i>&nbsp;[code]</a><span style=\"float:right;color: darkred\">[2017]</span></p>\n<p style=\"color: grey;text-align: justify;\">A SharePoint add-in for sending the CVs of interns to their selected companies. \n  This will be used in the Computer Science and Engineering department of University of Moratuwa from 2017 \n  internships onward.</p>\n<ul>\n  <li>Used Technologies: AngularJS, JavaScript, SharePoint</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>CV Feedback Portal</b>&nbsp;<a href=\"https://github.com/smb564/CV-Feedback-SharePoint-Add-in\"><i class=\"fab fa-github\"></i>&nbsp;[code]</a><span style=\"float:right;color: darkred\">[2017]</span></p>\n<p style=\"color: grey;text-align: justify;\">A web-based system where CV of undergraduates is reviewed by the Alumni \n  members of the department. Mainly focuses on students who are willing to start their careers or internships.\n   The web app was developed as an add-in (App) to Sharepoint.</p>\n<ul>\n  <li>Used Technologies: Sharepoint JSOM, HTML, CSS, JavaScript, JQuery, Bootstrap</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>UniConnect</b>&nbsp;<a href=\"https://github.com/smb564/CV-Feedback-SharePoint-Add-in\"><i class=\"fab fa-github\"></i>&nbsp;[code]</a><span style=\"float:right;color: darkred\">[2017]</span></p>\n<p style=\"color: grey;text-align: justify;\">UniConnect is basically an academic resource sharing and opportunity seeking \n  web system for undergraduate students.</p>\n<ul>\n  <li>Used Technologies: Java Spring Boot, AngularJS and Mongo DB</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>Tank Game Client</b>&nbsp;<a href=\"https://github.com/smb564/CV-Feedback-SharePoint-Add-in\"><i class=\"fab fa-github\"></i>&nbsp;[code]</a><span style=\"float:right;color: darkred\">[2016]</span></p>\n<p style=\"color: grey;text-align: justify;\">This was done as an assignment for the Programming Challenge-II module \n  in Semester 4. This is a game client to connect and play with a Tank Game server. The client has an AI\n   system which plays with other clients connected to the server. Game graphics were implemented using Unity 2D.</p>\n<ul>\n  <li>Used Technologies: C#, Unity, Game Playing Search algorithms</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>Energy Monitoring System</b>&nbsp;<a href=\"https://github.com/smb564/Energy-Monitoring-System\"><i class=\"fab fa-github\"></i>&nbsp;[code]</a><span style=\"float:right;color: darkred\">[2016]</span></p>\n<p style=\"color: grey;text-align: justify;\">An online system to monitor energy consumption and an online portal to\n   manage and perform customer actions. (bill reviews, payments) This project was done as for a requirement of Database \n   Systems module in Semester 4.\n  </p>\n<ul>\n  <li>Used Technologies: AngularJS, Node.js, Express, MySql, MaterilizeCSS, HTML, CSS</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>ERP System for Kandy Plastics PVT(LTD)</b><span style=\"float:right;color: darkred\">[2016]</span></p>\n<p style=\"color: grey;text-align: justify;\">A system which is capable of controlling the entire process of a plastic \n  manufacturing company was built. This includes handling inventory, vehicle management, production process management, \n  and other related things. This was done for the semester project for Object-Oriented System Development in semester 3.\n   This was a team project and the unified process was the project management technique we followed.\n  </p>\n<ul>\n  <li>Used Technologies: Qt Framework, C++</li>\n</ul>\n\n<hr>\n<p class=\"h5\"><b>Mini Microprocessor</b><span style=\"float:right;color: darkred\">[2016]</span></p>\n<p style=\"color: grey;text-align: justify;\">This is a microprocessor model that was built from scratch.\n   This uses an instruction set that is specific to this and has the capability to perform simple operations.\n    This was implemented using an FPGA. This was the semester project for computer architecture module.\n  </p>\n<ul>\n  <li>Used Technologies: FPGA, Xlinx ISE (IDE)</li>\n</ul>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/publications/publications.component.css":
/*!*********************************************************!*\
  !*** ./src/app/publications/publications.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/publications/publications.component.html":
/*!**********************************************************!*\
  !*** ./src/app/publications/publications.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<p class=\"h1\"><b>Publications</b></p>\n<hr>\n<p class=\"h5\"><b>Sentylic at IEST 2018: Gated Recurrent Neural Network and Capsule Network Based Approach for Implicit Emotion Detection </b><span style=\"color: darkred\">[2018]</span>&nbsp;<a href=\"https://arxiv.org/abs/1809.01452\">[pdf]</a></p>\n<p class=\"h6\" style=\"color: dimgray\">Prabod Rathnayaka, <b>Supun Abeysinghe</b>, Chamod Samarajeewa, Isura Manchanayake, Malaka Walpola</p>\n<p style=\"color: grey;text-align: justify;\">To appear in proceedings of 9th Workshop on Computational Approaches to Subjectivity, Sentiment & Social Media Analysis</p>\n<hr>\n<p class=\"h5\"><b>Enhancing Decision Making Capacity in Tourism Domain Using Social Media Analytics </b><span style=\"color: darkred\">[2018]</span></p>\n<p class=\"h6\" style=\"color: dimgray\"><b>Supun Abeysinghe</b>, Isura Manchanayake, Chamod Samarajeewa, Prabod Rathnayaka, Malaka J. Walpola, Rashmika Nawaratne, Tharindu Bandaragoda, Damminda Alahakoon</p>\n<p style=\"color: grey;text-align: justify;\">To appear in proceedings of International Conference in ICT for Emerging Regions</p>"

/***/ }),

/***/ "./src/app/publications/publications.component.ts":
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicationsComponent = /** @class */ (function () {
    function PublicationsComponent() {
    }
    PublicationsComponent.prototype.ngOnInit = function () {
    };
    PublicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publications',
            template: __webpack_require__(/*! ./publications.component.html */ "./src/app/publications/publications.component.html"),
            styles: [__webpack_require__(/*! ./publications.component.css */ "./src/app/publications/publications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n    padding-top: 54px;\n    color: #868e96;\n  }\n  \n  @media (min-width: 992px) {\n    body {\n      padding-top: 0;\n      padding-left: 17rem;\n    }\n  }\n  \n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #343a40;\n  }\n  \n  h1 {\n    font-size: 6rem;\n    line-height: 5.5rem;\n  }\n  \n  h2 {\n    font-size: 3.5rem;\n  }\n  \n  h3 {\n    font-size: 2rem;\n  }\n  \n  p.lead {\n    font-size: 1.15rem;\n    font-weight: 400;\n  }\n  \n  .subheading {\n    text-transform: uppercase;\n    font-weight: 500;\n    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n    font-size: 1.5rem;\n  }\n  \n  .social-icons a {\n    display: inline-block;\n    height: 3.5rem;\n    width: 3.5rem;\n    background-color: #495057;\n    color: #fff !important;\n    border-radius: 100%;\n    text-align: center;\n    font-size: 1.5rem;\n    line-height: 3.5rem;\n    margin-right: 1rem;\n  }\n  \n  .social-icons a:last-child {\n    margin-right: 0;\n  }\n  \n  .social-icons a:hover {\n    background-color: #BD5D38;\n  }\n  \n  .dev-icons {\n    font-size: 3rem;\n  }\n  \n  .dev-icons .list-inline-item i:hover {\n    color: #BD5D38;\n  }\n  \n  #sideNav .navbar-nav .nav-item .nav-link {\n    font-weight: 800;\n    letter-spacing: 0.05rem;\n    text-transform: uppercase;\n  }\n  \n  #sideNav .navbar-toggler:focus {\n    outline-color: #d48a6e;\n  }\n  \n  @media (min-width: 992px) {\n    #sideNav {\n      text-align: center;\n      position: fixed;\n      top: 0;\n      left: 0;\n      display: flex;\n      flex-direction: column;\n      width: 17rem;\n      height: 100vh;\n    }\n    #sideNav .navbar-brand {\n      display: flex;\n      margin: auto auto 0;\n      padding: 0.5rem;\n    }\n    #sideNav .navbar-brand .img-profile {\n      max-width: 13rem;\n      max-height: 13rem;\n      border: 0.25rem solid rgba(255, 255, 255, 0.2);\n      border-radius: 32%;\n    }\n    #sideNav .navbar-collapse {\n      display: flex;\n      align-items: flex-start;\n      flex-grow: 0;\n      width: 100%;\n      margin-bottom: auto;\n    }\n    #sideNav .navbar-collapse .navbar-nav {\n      flex-direction: column;\n      width: 100%;\n    }\n    #sideNav .navbar-collapse .navbar-nav .nav-item {\n      display: block;\n    }\n    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {\n      display: block;\n    }\n  }\n  \n  section.resume-section {\n    padding-top: 5rem !important;\n    padding-bottom: 5rem !important;\n    max-width: 75rem;\n  }\n  \n  section.resume-section .resume-item .resume-date {\n    min-width: none;\n  }\n  \n  @media (min-width: 768px) {\n    section.resume-section {\n      min-height: 100vh;\n    }\n    section.resume-section .resume-item .resume-date {\n      min-width: 18rem;\n    }\n  }\n  \n  @media (min-width: 992px) {\n    section.resume-section {\n      padding-top: 3rem !important;\n      padding-bottom: 3rem !important;\n    }\n  }\n  \n  .bg-primary {\n    background-color: #031237 !important;\n  }\n  \n  .text-primary {\n    color: #031237 !important;\n  }\n  \n  a {\n    color: #031237;\n  }\n  \n  a:hover, a:focus, a:active {\n    color: #031237;\n  }"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\n  <a class=\"navbar-brand js-scroll-trigger\">\n    <span class=\"d-block d-lg-none\">Supun Abeysinghe</span>\n    <span class=\"d-none d-lg-block\">\n      <img class=\"img-fluid img-profile mx-auto mb-4\" src=\"https://avatars0.githubusercontent.com/u/16972250?s=460&v=4\" alt=\"\">\n    </span>\n  </a>\n  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"container\">\n      <div class=\"col-md-3\">\n          <a class=\"btn btn-social-icon btn-google\" style=\"color:white;\" href=\"mailto:supun.14@cse.mrt.ac.lk\">\n            <i class=\"fab fa-google\"></i>\n          </a>\n      </div>\n    <div class=\"col-md-3\">\n        <a class=\"btn btn-social-icon btn-github\" style=\"color:white;\" href=\"https://github.com/smb564\">\n          <i class=\"fab fa-github\"></i>\n        </a>\n    </div>\n    <div class=\"col-md-3\">\n        <a class=\"btn btn-social-icon btn-facebook\" style=\"color:white\" href=\"https://www.facebook.com/supunabeysinghe\">\n          <i class=\"fab fa-facebook\"></i>\n        </a>\n    </div>\n    <div class=\"col-md-3\">\n        <a class=\"btn btn-social-icon btn-linkedin\" style=\"color:white\" href=\"https://www.linkedin.com/in/supunabeysinghe/\">\n          <i class=\"fab fa-linkedin\"></i>\n        </a>\n    </div>\n  </div>\n  <hr>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" routerLink=\"/about\" [class.active]=\"selectedPage==='/about'\">\n          About\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" routerLink=\"/experience\" [class.active]=\"selectedPage==='/experience'\">\n          Experience</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" routerLink=\"/awards\" [class.active]=\"selectedPage==='/awards'\">Awards and Achievements</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" routerLink=\"/publications\" [class.active]=\"selectedPage==='/publications'\">Publications</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" routerLink=\"/projects\" [class.active]=\"selectedPage==='/projects'\">Projects and Code</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"http://smb564.blogspot.com/\">Blog</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (val) {
            _this.selectedPage = router.url;
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/supun/New Volume/SMB/personal web/personal-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map