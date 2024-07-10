"use strict";
(self["webpackChunkng_task_app"] = self["webpackChunkng_task_app"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);


var _AppRoutingModule;



var routes = [{
  path: "",
  // component: LayoutContainerComponent,
  // canActivate: [AuthGuard],
  children: [{
    path: '',
    redirectTo: '/main/login',
    pathMatch: 'full'
  }, {
    path: "main",
    loadChildren: function loadChildren() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 2007)).then(function (m) {
        return m.MainModule;
      });
    }
  }]
}];
var AppRoutingModule = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});
_AppRoutingModule = AppRoutingModule;
_AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AppRoutingModule
});
_AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);


var _AppComponent;


var AppComponent = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppComponent() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppComponent);
  this.title = 'ng-task-app';
});
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.module */ 2007);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);


var _AppModule;







var AppModule = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});
_AppModule = AppModule;
_AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
_AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.provideClientHydration)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.withInterceptorsFromDi)())],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _main_main_module__WEBPACK_IMPORTED_MODULE_4__.MainModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _main_main_module__WEBPACK_IMPORTED_MODULE_4__.MainModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule]
  });
})();

/***/ }),

/***/ 3389:
/*!**************************************!*\
  !*** ./src/app/common/data/tasks.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tasks: () => (/* binding */ Tasks)
/* harmony export */ });
var Tasks = [{
  id: "6630ab326e723ac1ea6dce7a",
  description: "My first task",
  name: "A task",
  taskId: 1,
  user: "jonnygold",
  added: "2024-05-01T22:00:00.000Z",
  updated: "2024-05-01T14:16:01.119Z",
  status: "do",
  isActive: true
}, {
  id: "6630fe5d6e723ac1ea6dce7e",
  description: "My second task",
  name: "Another task",
  taskId: 2,
  user: "jonnygold",
  added: "2024-05-01T22:00:00.000Z",
  updated: "2024-05-01T14:16:01.119Z",
  status: "doing",
  isActive: true
}, {
  id: "6630fe826e723ac1ea6dce7f",
  description: "My task",
  name: "task",
  taskId: 3,
  user: "jonnygold",
  added: "2024-05-01T22:00:00.000Z",
  updated: "2024-05-01T14:16:01.119Z",
  status: "done",
  isActive: true
}, {
  id: "6631f17cc4c9b7f5ab3c28c3",
  name: "Yet another task",
  description: "My fourth task",
  user: "jonnygold",
  taskId: 4,
  added: "2024-05-01T22:00:00.000Z",
  updated: "2024-05-01T14:16:01.119Z",
  isActive: true,
  status: "do"
}, {
  id: "66323f0d54b80929f84ebdd2",
  user: "jonnygold",
  name: "New Task",
  description: "My new task description",
  status: "do",
  taskId: 5,
  added: "2024-05-01T22:00:00.000Z",
  updated: "2024-05-01T14:16:01.119Z",
  isActive: true
}];

/***/ }),

/***/ 7331:
/*!**************************************!*\
  !*** ./src/app/common/data/users.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Users: () => (/* binding */ Users)
/* harmony export */ });
var Users = [{
  id: "6630a7516e723ac1ea6dce75",
  email: "jonnygold@gmail.com",
  name: "Jonathan Gold",
  password: "1234",
  userName: "jonnygold",
  isActive: true,
  userId: 1,
  created: "2024-05-01T08:57:20.123Z",
  updated: "2024-05-01T08:57:20.123Z"
}, {
  id: "663203f0062b854f9356c434",
  email: "jongold@gmail.com",
  name: "Jon Gold",
  password: "1234",
  userName: "jongold",
  userId: 2,
  created: "2024-05-01T09:08:55.211Z",
  updated: "2024-05-01T09:08:55.211Z",
  isActive: true
}];

/***/ }),

/***/ 4571:
/*!********************************************!*\
  !*** ./src/app/common/global-variables.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalVariables: () => (/* binding */ GlobalVariables)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);


var _GlobalVariables;
var GlobalVariables = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function GlobalVariables() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GlobalVariables);
});
_GlobalVariables = GlobalVariables;
_GlobalVariables.appVersion = '0.1.2';

/***/ }),

/***/ 5553:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsModule: () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);


var _ComponentsModule;


var ComponentsModule = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ComponentsModule() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ComponentsModule);
});
_ComponentsModule = ComponentsModule;
_ComponentsModule.ɵfac = function ComponentsModule_Factory(t) {
  return new (t || _ComponentsModule)();
};
_ComponentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ComponentsModule
});
_ComponentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
})();

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var src_app_common_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/global-variables */ 4571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);


var _FooterComponent;



var FooterComponent = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FooterComponent() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FooterComponent);
  this.appVersion = src_app_common_global_variables__WEBPACK_IMPORTED_MODULE_2__.GlobalVariables.appVersion;
  this.currentYear = Date.now();
});
_FooterComponent = FooterComponent;
_FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)();
};
_FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _FooterComponent,
  selectors: [["app-footer"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 12,
  vars: 5,
  consts: [[1, "container"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "py-3", "my-4", "border-top"], [1, "col-md-4", "mb-0", "text-muted"], ["href", "/", 1, "col-md-4", "d-flex", "align-items-center", "justify-content-center", "mb-3", "mb-md-0", "me-md-auto", "link-dark", "text-decoration-none"], ["width", "40", "height", "32", 1, "bi", "me-2"], [0, "xlink", "href", "#bootstrap"], [1, "nav", "col-md-4", "justify-content-end"], [1, "nav-item"], ["href", "#", 1, "nav-link", "px-2", "text-muted"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "footer", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "use", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 6)(9, "li", 7)(10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\xA9 2023 - ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 2, ctx.currentYear, "yyyy"), " MVDS");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Task App: Version ", ctx.appVersion, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);


var _NavbarComponent;


var NavbarComponent = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NavbarComponent() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NavbarComponent);
  this.showNav = false;
});
_NavbarComponent = NavbarComponent;
_NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || _NavbarComponent)();
};
_NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _NavbarComponent,
  selectors: [["app-navbar"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 10,
  vars: 0,
  consts: [["data-bs-theme", "dark", 1, "navbar", "navbar-expand-lg", "bg-primary"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "d-flex"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", "text-light"], [1, "nav-item", "text-light"], ["href", "", 1, "nav-link", "text-light"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "AngularJS Task App");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7349:
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableComponent: () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/http-service/http-service.service */ 579);


var _TableComponent;







function TableComponent_ng_template_1_div_14_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5);
  }
}
function TableComponent_ng_template_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TableComponent_ng_template_1_div_14_option_4_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.taskStatus);
  }
}
function TableComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TableComponent_ng_template_1_Template_button_click_3_listener() {
      var modal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r3.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11)(5, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function TableComponent_ng_template_1_Template_form_ngSubmit_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 13)(7, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 13)(11, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TableComponent_ng_template_1_div_14_Template, 5, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 19)(16, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r3.taskForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.title === "Edit Task");
  }
}
function TableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, col_r6));
  }
}
function TableComponent_tr_8_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var col_r8 = ctx.$implicit;
    var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r9[col_r8]);
  }
}
function TableComponent_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TableComponent_tr_8_td_1_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td")(3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TableComponent_tr_8_Template_button_click_3_listener() {
      var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7).$implicit;
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      var content_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openModal(content_r10, "Edit Task", item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TableComponent_tr_8_Template_button_click_5_listener() {
      var item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7).$implicit;
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.deleteItem(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.tableCols);
  }
}
var TableComponent = /*#__PURE__*/function () {
  function TableComponent(modalService, httpService) {
    (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TableComponent);
    this.modalService = modalService;
    this.httpService = httpService;
    this.title = "Add Task";
    this.item = null;
    this.taskStatus = ["do", "doing", "done"];
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.user.userName),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('New Task'),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('My new task description'),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('do')
    });
  }
  return (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TableComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "openModal",
    value: function openModal(content, title) {
      var item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.title = title;
      if (this.title === "Edit Task") {
        this.item = item;
        this.taskForm.patchValue({
          name: item.name,
          description: item.description,
          status: item.status
        });
      }
      this.modalService.open(content, {
        size: 'sm',
        scrollable: true
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      if (this.title === "Add Task") {
        var taskId = this.tableData.length + 1;
        this.sendRequet("/tasks/add/task/".concat(this.user.userName), {
          name: this.taskForm.value.name,
          description: this.taskForm.value.description,
          user: this.taskForm.value.user,
          added: new Date().toISOString(),
          updated: new Date().toISOString(),
          status: this.taskForm.value.status,
          taskId: taskId,
          isActive: true
        });
      } else if (this.title === "Edit Task") {
        this.sendRequet("/tasks/update/task/".concat(this.item._id), {
          name: this.taskForm.value.name,
          description: this.taskForm.value.description,
          user: this.taskForm.value.user,
          added: new Date().toISOString(),
          updated: new Date().toISOString(),
          status: this.taskForm.value.status
        });
      }
      this.modalService.dismissAll();
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.sendRequet("/tasks/delete/task", {
        id: item._id
      });
    }
  }, {
    key: "sendRequet",
    value: function sendRequet(url, payload) {
      this.httpService.postServiceData(url, payload).subscribe(function (response) {
        console.log('response', response);
        if (response) location.reload();
      });
    }
  }]);
}();
_TableComponent = TableComponent;
_TableComponent.ɵfac = function TableComponent_Factory(t) {
  return new (t || _TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_2__.HttpClientService));
};
_TableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _TableComponent,
  selectors: [["app-table"]],
  inputs: {
    tableData: "tableData",
    tableCols: "tableCols"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 15,
  vars: 2,
  consts: [["content", ""], [1, "container", "container-fluid", 2, "padding", "10px"], [1, "table", "table-striped", 2, "background-color", "white"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["colspan", "6"], [1, "d-grid", "gap-2", "d-md-flex", "justify-content-md-center"], [1, "btn", "btn-primary", "rounded-pill", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "text-center"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "taskName"], ["type", "text", "id", "taskName", "placeholder", "Enter Task Name", "formControlName", "name", 1, "form-control"], ["for", "taskDescription"], ["type", "text", "id", "taskDescription", "placeholder", "Enter Task Description", "formControlName", "description", 1, "form-control"], ["class", "mb-3", 4, "ngIf"], [1, "text-center", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["formControlName", "status", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["scope", "col"], [1, "btn", "btn-primary", "rounded-pill", 2, "margin-right", "5px", 3, "click"], [1, "btn", "btn-danger", "rounded-pill", 3, "click"]],
  template: function TableComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TableComponent_ng_template_1_Template, 18, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 2)(4, "thead")(5, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TableComponent_th_6_Template, 3, 3, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TableComponent_tr_8_Template, 7, 1, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tfoot")(10, "tr")(11, "td", 5)(12, "div", 6)(13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TableComponent_Template_button_click_13_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        var content_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openModal(content_r10, "Add Task"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Add Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tableCols);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tableData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5664:
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _app_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/navbar/navbar.component */ 9847);
/* harmony import */ var _app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/footer/footer.component */ 5473);
/* harmony import */ var _app_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/table/table.component */ 7349);
/* harmony import */ var _app_common_data_tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/common/data/tasks */ 3389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/http-service/http-service.service */ 579);


var _HomeComponent;









function HomeComponent_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Loading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_app_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-table", 6);
  }
  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tableData", ctx_r0.tableData)("tableCols", ctx_r0.tableCols);
  }
}
var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent(httpService) {
    (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);
    this.httpService = httpService;
    this.tasks = _app_common_data_tasks__WEBPACK_IMPORTED_MODULE_5__.Tasks;
    this.tableData = null;
    this.showNav = false;
    this.tableCols = ['name', 'description', 'added', 'updated', 'status'];
    this.user = null;
  }
  return (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;
      this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
      // this.tableData = this.tasks.filter((task:any) => task.user === this.user.userName);
      var path = '/api/tasks/get/tasks/jonnygold';
      this.httpService.getServiceData("/tasks/get/tasks/".concat(this.user.userName)).subscribe(function (resp) {
        _this.tableData = resp;
      });
    }
  }]);
}();
_HomeComponent = HomeComponent;
_HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_6__.HttpClientService));
};
_HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _HomeComponent,
  selectors: [["app-home"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 2,
  consts: [[1, "container", "container-fluid", 2, "padding", "10px"], ["class", "text-center", 4, "ngIf"], [3, "tableData", "tableCols", 4, "ngIf"], [1, "text-center"], ["role", "status", 1, "spinner-border", "text-center"], [1, "visually-hidden"], [3, "tableData", "tableCols"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HomeComponent_h1_2_Template, 6, 0, "h1", 1)(3, HomeComponent_app_table_3_Template, 1, 2, "app-table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.tableData);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.tableData);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavModule, _app_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _app_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6492:
/*!***********************************************!*\
  !*** ./src/app/main/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_common_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/global-variables */ 4571);
/* harmony import */ var _app_common_data_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/common/data/users */ 7331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/http-service/http-service.service */ 579);


var _LoginComponent;







var LoginComponent = /*#__PURE__*/function () {
  function LoginComponent(route, router, httpService) {
    (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginComponent);
    this.route = route;
    this.router = router;
    this.httpService = httpService;
    this.appVersion = src_app_common_global_variables__WEBPACK_IMPORTED_MODULE_2__.GlobalVariables.appVersion;
    this.users = _app_common_data_users__WEBPACK_IMPORTED_MODULE_3__.Users;
    this.user = null;
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('jonnygold@gmail.com'),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('1234')
    });
  }
  return (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;
      this.httpService.postServiceData('/login', this.loginForm.value).subscribe(function (response) {
        if (response.isLoggedIn) {
          sessionStorage.setItem('user', JSON.stringify(response));
          _this.router.navigate(['/home']);
        }
      });
    }
  }]);
}();
_LoginComponent = LoginComponent;
_LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services_http_service_http_service_service__WEBPACK_IMPORTED_MODULE_4__.HttpClientService));
};
_LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _LoginComponent,
  selectors: [["app-login"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
  decls: 22,
  vars: 2,
  consts: [[1, "container-fluid", "container-lg", "d-lg-flex"], [1, "mx-auto", "p-2", 2, "margin-top", "100px", "width", "40%"], [1, "card"], [1, "card-header", "bg-primary"], [1, "text-light", "text-center"], [1, "card-body"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["formControlName", "email", 1, "form-control"], ["formControlName", "password", "type", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "card-footer", "bg-primary", "text-light", "text-center"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Angular Task App");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7)(13, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Please login to continue ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Version ", ctx.appVersion, " ");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2894:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainRoutingModule: () => (/* binding */ MainRoutingModule)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 6492);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);


var _MainRoutingModule;





var routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
  data: {
    parent: 'Main',
    folder: 'Login',
    title: 'Login'
  }
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
  data: {
    parent: 'Main',
    folder: 'Home',
    title: 'Home'
  }
}];
var MainRoutingModule = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MainRoutingModule() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainRoutingModule);
});
_MainRoutingModule = MainRoutingModule;
_MainRoutingModule.ɵfac = function MainRoutingModule_Factory(t) {
  return new (t || _MainRoutingModule)();
};
_MainRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _MainRoutingModule
});
_MainRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MainRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 2007:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainModule: () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ 2894);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5664);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 6492);
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/components.module */ 5553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);


var _MainModule;








var MainModule = /*#__PURE__*/(0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MainModule() {
  (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainModule);
});
_MainModule = MainModule;
_MainModule.ɵfac = function MainModule_Factory(t) {
  return new (t || _MainModule)();
};
_MainModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _MainModule
});
_MainModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_2__.MainRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavModule, _app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MainModule, {
    imports: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_2__.MainRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavModule, _app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule]
  });
})();

/***/ }),

/***/ 579:
/*!***************************************************************!*\
  !*** ./src/app/services/http-service/http-service.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpClientService: () => (/* binding */ HttpClientService)
/* harmony export */ });
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 5922);
/* harmony import */ var _Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 2228);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);


var _HttpClientService;



var HttpClientService = /*#__PURE__*/function () {
  function HttpClientService(http) {
    (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HttpClientService);
    this.http = http;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*' 
      })
    };
  }
  return (0,_Users_jonnygold_Code_MVDS_angular_ng_task_app_sl_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HttpClientService, [{
    key: "getServiceData",
    value: function getServiceData(url) {
      return this.http.get(url);
    }
  }, {
    key: "postServiceData",
    value: function postServiceData(url, payload) {
      return this.http.post(url, payload, this.httpOptions);
    }
  }]);
}();
_HttpClientService = HttpClientService;
_HttpClientService.ɵfac = function HttpClientService_Factory(t) {
  return new (t || _HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_HttpClientService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _HttpClientService,
  factory: _HttpClientService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/// <reference types="@angular/localize" />




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
  return console.error(err);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1643), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map