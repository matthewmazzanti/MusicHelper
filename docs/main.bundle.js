webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n    border: 1px solid black;\n    border-right: 0px;\n    border-bottom: 0px;\n    border-spacing: 0px;\n}\n\ntd {\n    border: 1px solid black;\n    border-top: 0px;\n    border-left: 0px;\n    padding: 0px;\n    width: 20px;\n    height: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n    <tr *ngFor=\"let i of viewNeck\">\n        <td *ngFor=\"let j of i\">\n        <guitar-note \n            #note \n            [note]=\"getNoteString(j)\"\n            [show]=\"j!=null?true:false\"\n            (stateChange)=\"updateNotes($event)\"></guitar-note>\n        </td>\n    </tr>\n</table>\n\n<table>\n    <tr *ngFor=\"let i of viewNeck\">\n        <td *ngFor=\"let j of i\">{{getNoteString(j)}}</td>\n    </tr>\n</table>\n<div>{{currSteps}}</div>\n<select [(ngModel)]=\"mode\" (ngModelChange)=\"buildSteps($event)\">\n    <option *ngFor=\"let m of modes\" value={{m.degree}}>{{m.name}}</option>\n</select>\n\n<select [(ngModel)]=\"root\" (ngModelChange)=\"buildScale($event)\">\n    <option *ngFor=\"let n of notes;let i=index\"value={{i}}>{{n}}</option> \n</select>\n\n<div>{{root}}</div>\n<div>{{viewScale}}</div>\n\n<div>i {{viewChords[0]}}</div>\n<div>ii {{viewChords[1]}}</div>\n<div>iii {{viewChords[2]}}</div>\n<div>iv {{viewChords[3]}}</div>\n<div>v {{viewChords[4]}}</div>\n<div>vi {{viewChords[5]}}</div>\n<div>vii {{viewChords[6]}}</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.roots = [7, 2, 10, 5, 0, 7];
        this.neck = [[], [], [], [], [], []];
        this.viewNeck = [[], [], [], [], [], []];
        this.modes = [{ degree: 0, name: "Major/Ionian" }, { degree: 5, name: "Minor/Aeolian" }];
        this.notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
        this.steps = [2, 2, 1, 2, 2, 2, 1];
        this.mode = 0;
        this.currSteps = [];
        this.chords = [[]];
        this.viewChords = [[]];
        this.root = 0;
        this.scale = [];
        this.viewScale = [];
        this.state = "active";
        this.state2 = "inactive";
        this.B = "B";
        this.buildNeck(this.roots);
        this.buildSteps(this.mode);
    }
    AppComponent.prototype.getNoteString = function (note) {
        if (note == null) {
            return "-";
        }
        else {
            return this.notes[note];
        }
    };
    AppComponent.prototype.buildNeck = function (roots) {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 24; j++) {
                this.neck[i][j] = (roots[i] + j) % 12;
            }
        }
    };
    AppComponent.prototype.buildViewNeck = function (scale) {
        var newNeck = [[], [], [], [], [], []];
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 24; j++) {
                if (scale.includes(this.neck[i][j])) {
                    newNeck[i][j] = this.neck[i][j];
                }
                else {
                    newNeck[i][j] = null;
                }
            }
        }
        this.viewNeck = newNeck;
    };
    AppComponent.prototype.buildSteps = function (mode) {
        var newSteps = [];
        for (var i = 0; i < 7; i++) {
            newSteps[i] = this.steps[(this.mode + i) % 7];
        }
        this.currSteps = newSteps;
        this.buildScale(this.root);
    };
    AppComponent.prototype.buildScale = function (root) {
        console.log(root);
        var step = Number(root);
        var newScale = [];
        for (var i = 0; i < 8; i++) {
            newScale[i] = step;
            step = (step + this.currSteps[i]) % 12;
        }
        this.scale = newScale;
        this.buildChords(this.scale);
        this.buildViewScale(this.scale);
        this.buildViewNeck(this.scale);
    };
    AppComponent.prototype.buildViewScale = function (scale) {
        this.viewScale = scale.map(this.getNoteString, this);
    };
    AppComponent.prototype.buildChords = function (scale) {
        for (var i = 0; i < 7; i++) {
            this.chords[i] = this.buildChord(i, scale);
            this.viewChords[i] = this.chords[i].map(this.getNoteString, this);
        }
    };
    AppComponent.prototype.buildChord = function (root, scale) {
        return [scale[root % 8], scale[(root + 2) % 8], scale[(root + 4) % 8]];
    };
    AppComponent.prototype.updateNotes = function (e) {
        console.log(e.state);
        console.log(e.note);
        this.components.forEach(function (child) {
            if (e.note == child.note) {
                if (e.state == "active") {
                    child.on();
                }
                else {
                    child.off();
                }
            }
        });
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])('note'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */]) === "function" && _a || Object)
], AppComponent.prototype, "components", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guitar_note_guitar_note_component__ = __webpack_require__("../../../../../src/app/guitar-note/guitar-note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__guitar_note_guitar_note_component__["a" /* GuitarNoteComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/guitar-note/guitar-note.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".border { \n    background: yellow;\n    width:40px;\n    height:25px;\n\n    display: -webkit-box;\n\n    display: -ms-flexbox;\n\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.note {\n    background: lightblue;\n    width:20px;\n    height:20px;\n    border-radius:50%;\n    \n    display: -webkit-box;\n    \n    display: -ms-flexbox;\n    \n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/guitar-note/guitar-note.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border\" (click)=\"toggle()\">\n    <div class=\"note\" *ngIf=\"show\" [@state]=\"state\">{{note}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/guitar-note/guitar-note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuitarNoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuitarNoteComponent = (function () {
    function GuitarNoteComponent() {
        this.state = "active";
        this.note = "A";
        this.show = true;
        this.stateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    GuitarNoteComponent.prototype.ngOnInit = function () {
    };
    GuitarNoteComponent.prototype.hi = function () {
        console.log("hi");
    };
    GuitarNoteComponent.prototype.toggle = function () {
        if (this.state == "active") {
            this.state = "inactive";
        }
        else {
            this.state = "active";
        }
        this.stateChange.emit({ state: this.state, note: this.note });
    };
    GuitarNoteComponent.prototype.on = function () {
        this.state = "active";
    };
    GuitarNoteComponent.prototype.off = function () {
        this.state = "inactive";
    };
    return GuitarNoteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GuitarNoteComponent.prototype, "note", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GuitarNoteComponent.prototype, "show", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], GuitarNoteComponent.prototype, "stateChange", void 0);
GuitarNoteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'guitar-note',
        template: __webpack_require__("../../../../../src/app/guitar-note/guitar-note.component.html"),
        styles: [__webpack_require__("../../../../../src/app/guitar-note/guitar-note.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('state', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    transform: 'scale(1.1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], GuitarNoteComponent);

//# sourceMappingURL=guitar-note.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map