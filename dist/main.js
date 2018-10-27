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

/***/ "./src/app/about-blockchain/about-blockchain.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/about-blockchain/about-blockchain.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    margin:0;\n    padding:0;\n    min-height: calc(100vh - 115px );\n    width: 100%;\n    background-color: #ffaf66;\n    \n    }\n.MyTxtContent{\n    padding:10px;\n    width: 100%;\n    background-color: #ffaf66;\n    text-align: center;\n    }\n"

/***/ }),

/***/ "./src/app/about-blockchain/about-blockchain.component.html":
/*!******************************************************************!*\
  !*** ./src/app/about-blockchain/about-blockchain.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"MyTxtContent\">\n  <h1><strong>What is Blockchain Technology? </strong></h1>\n  <p>The blockchain is as most of you already known a (not so) new web technology. It is a new way to proceed to information. Utilizing blockchain, the information is distributed and not copied. Blockchain is not only for financial transaction but can be programmed to record every type of value!</p>\n  <h2><strong>A network of nodes</strong></h2>\n  <p>Each user connected and performing or validating task get a copy of the blockchain. Each user becomes a node and a an administrator of the blockchain. The copy of the blockchain is updated for every node if the same time.</p>\n  <h2><strong>Blockchain Durability and robustness</strong></h2>\n  <p>Blockchain lives thanks to its users and with consensus. Each transactions are referred as a block. Blockchain is a technology that put every users at the same level and that not allows human or machine error anymore. No transaction can be done without the agreement of both parties. All the transactions have a guarantee of the validation and are recorded on all the nodes.</p>\n  <h2><strong>Transparent and incorruptible</strong></h2>\n  <p>Having the data shared and available for each users make the blockchain incorruptible and transparent. Incorruptible because to hack it, the hacker needs to hack all the nodes of the blockchain and transparent because all the users have the complete blockchain available.</p>\n  <h2><strong>The idea of decentralization</strong></h2>\n  <p>As each user has his own copy of the blockchain there is not one version centralized of it.</p>\n  <p>As each copy has the same value, the blockchain is not centralized but decentralized.</p>\n  <h2><strong>How to use the Blockchain &amp; Enhanced security</strong></h2>\n  <p>Each user has two keys, one public and one private. The public key is the &ldquo;address&rdquo; of the user in the blockchain and the private is what gives the access to the blockchain. This private key must be kept in a safe place.</p>\n  <h2><strong>Where the blockchain can be useful</strong></h2>\n  <ul>\n  <h4><strong>Public interest</strong></h4>\n  </ul>\n  <p>Blockchain can allow fully transparent and public database. It can allow all the inhabitants to consult reports and result of public administrations</p>\n  <ul>\n  <h4><strong>Collaborative economy</strong></h4>\n  </ul>\n  <p>Uber and AirBnB&nbsp;</p>\n  <ul><h4><strong>File storage &amp; Data Management</strong></h4>\n  <h4><strong>Crowdfunding</strong></h4>\n  <h4><strong>IoT</strong></h4>\n  </ul>\n  <ul>\n  <h4><strong>Stock trading</strong></h4>\n  </ul>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/about-blockchain/about-blockchain.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/about-blockchain/about-blockchain.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutBlockchainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutBlockchainComponent", function() { return AboutBlockchainComponent; });
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

var AboutBlockchainComponent = /** @class */ (function () {
    function AboutBlockchainComponent() {
    }
    AboutBlockchainComponent.prototype.ngOnInit = function () {
    };
    AboutBlockchainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-blockchain',
            template: __webpack_require__(/*! ./about-blockchain.component.html */ "./src/app/about-blockchain/about-blockchain.component.html"),
            styles: [__webpack_require__(/*! ./about-blockchain.component.css */ "./src/app/about-blockchain/about-blockchain.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutBlockchainComponent);
    return AboutBlockchainComponent;
}());



/***/ }),

/***/ "./src/app/about-crypto/about-crypto.component.css":
/*!*********************************************************!*\
  !*** ./src/app/about-crypto/about-crypto.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin:0;\r\n    padding:0;\r\n    min-height: calc(100vh - 115px );\r\n    width: 100%;\r\n    background-color: #ffaf66;\r\n    \r\n    }\r\n.MyTxtContent{\r\n    padding:10px;\r\n    width: 100%;\r\n    background-color: #ffaf66;\r\n    text-align: center;\r\n    }"

/***/ }),

/***/ "./src/app/about-crypto/about-crypto.component.html":
/*!**********************************************************!*\
  !*** ./src/app/about-crypto/about-crypto.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"MyTxtContent\">\n        <h1><strong>What’s a Cryptocurrency</strong></h1>\n        <p>It is mainly a new kind of currency, digital currency. It is based on the blockchain and securitized by cryptographie. It allows balance and transaction. Its control is completely decentralized and everyone can use it without limitation, generally with a software or online. It has a limited supply defined.\n          </p>\n        <h2><strong>Is it really a currency?</strong></h2>\n        <p>A currency is now simply entries in a database. In the usual currency, you have also physical entries that are basically the coins. Those entries are made without certain conditions. In this sense, a cryptocurrency is a currency as Euro or Dollar without the physical entries. \n        </p>\n        <h2><strong>Transaction &amp; confirmation</strong></h2>\n        <p>Confirmation is the base of cryptocurrency and the most critical concept. Before the confirmation, a transaction can be forget but after it is set and totally irreversible. It will be added to list of at the chain of transaction, the blockchain. Each transaction is contained in a block and each block is a link in the chain. A block might contain multiple transactions. \n          </p>\n        <h4><strong>Anonymity</strong></h4>\n        <p>Those transactions are completely anonymous, the only visible parameter is the address and there is no connection with real world identity. \n          </p>\n        <h4><strong>Global Network</strong></h4>\n        <p>After the confirmation, the transaction is instantly sent to everyone connected to the blockchain. It is so repeated in multiple physical locations. This repetition is a key in the security of the blockchain; to hack it, you need to hack all the users\n          </p>\n        <h2><strong>What’s a miner</strong></h2>\n        <p>Miner are the people responsible to confirm the transactions. It can be anyone connected to the blockchain. The miner uses a algorithm to encrypt the transaction and then add the link to the chain. For this job, the miner is rewarded usually by a percentage of the transaction.\n          </p>\n        <h2><strong>Is there future for cryptocurrencies?</strong></h2>\n        <p>Everyday, new cryptocurrencies are created and old cryptocurrencies die. They all come with a project but a lot of them are not good enough. Only some of them will survive.\n        Most of them are pumped and dumped by speculator and it is really difficult to know their real values. Now, a lot of people are attracted even banks and government by cryptocurrencies and for sure it will have an impact in the future, because this invention is huge but everyone should be really prudent putting his money inside.\n          </p>\n      </div>\n</body>"

/***/ }),

/***/ "./src/app/about-crypto/about-crypto.component.ts":
/*!********************************************************!*\
  !*** ./src/app/about-crypto/about-crypto.component.ts ***!
  \********************************************************/
/*! exports provided: AboutCryptoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCryptoComponent", function() { return AboutCryptoComponent; });
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

var AboutCryptoComponent = /** @class */ (function () {
    function AboutCryptoComponent() {
    }
    AboutCryptoComponent.prototype.ngOnInit = function () {
    };
    AboutCryptoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-crypto',
            template: __webpack_require__(/*! ./about-crypto.component.html */ "./src/app/about-crypto/about-crypto.component.html"),
            styles: [__webpack_require__(/*! ./about-crypto.component.css */ "./src/app/about-crypto/about-crypto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutCryptoComponent);
    return AboutCryptoComponent;
}());



/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin:0;\r\n  padding:0;\r\n  min-height: calc(100vh - 115px );\r\n  width: 100%;\r\n  background-color: #ffaf66;\r\n  }\r\n  .AboutUsContent{\r\n    text-align: center;\r\n    padding-bottom: 25px;\r\n  }\r\n  .MyTeam{\r\n    text-align: -webkit-center;\r\n    width:100%;\r\n  }\r\n  .TeamMember{\r\n    text-align: center;\r\n    border-style: solid;\r\n    width: -webkit-fit-content;\r\n    background-color: #eea96a;\r\n  }\r\n  .title{\r\n    color: #000000;\r\n  }\r\n  .img-circle {\r\n    border-radius: 75px;\r\n    margin: 5px;\r\n}\r\n  .icon-social-network{\r\n    width: 25px;\r\n    height: 25px;\r\n    margin: 5px;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n    <div class=\"title\">\n      AboutUs\n    </div>\n    <div class=\"AboutUsContent\">\n        This website has been created by a young technology enthusiast engineer, <br>\n        With the believe and the hope that blockchain can be part of the future. <br>\n        This technology can be huge and influence the future of the computer science as well as other topics. <br>\n        As the tip of the iceberg, cryptocurrency has to be now the proof of concept of blockchain. <br>\n    </div>\n  <div class=\"MyTeam\">\n    <div class=\"TeamMember\">\n        <img class=\"img-circle\" src=\"../../assets/pictures/me.jpg\">\n        <br>\n          Aurélien Gekiere\n          <br>\n          <a href=\"https://www.linkedin.com/in/aurelien-gekiere\" target=\"_blank\">\n            <img class=\"icon-social-network\" src=\"../../assets/pictures/linkedin.png\">\n          </a>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
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

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".li{\r\n  margin:0;\r\n  padding:0;\r\n  \r\n  background-color: #ffaf66;\r\n}\r\n\r\nhtml,\r\nbody {\r\n   margin:0;\r\n   padding:0;\r\n   height:100%;\r\n   width: 100%;\r\n   background-color: #ffaf66;\r\n   display: block;\r\n}\r\n\r\n#container {\r\n   min-height:100%;\r\n   position:relative;\r\n   background-color: #ffaf66;\r\n}\r\n\r\n#body {\r\n  background-color: #ffaf66;\r\n  padding-bottom:15px;   /* Height of the footer */\r\n}\r\n\r\n#footer {\r\n   position:fixed;\r\n   bottom:0;\r\n   width:100%;\r\n   height:15px;   /* Height of the footer */\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <div id=\"header\">\r\n        <app-topbar></app-topbar>\r\n    </div>\r\n    <div id=\"body\">\r\n      <div class=\"outer-outlet\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n    <div id=\"footer\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n </div>\r\n"

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
        this.title = 'Cryptocurrency Simulator';
        this.page = 'main';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _dialog_simulation_dialog_simulation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-simulation/dialog-simulation.component */ "./src/app/dialog-simulation/dialog-simulation.component.ts");
/* harmony import */ var _moneysimulator_moneysimulator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moneysimulator/moneysimulator.component */ "./src/app/moneysimulator/moneysimulator.component.ts");
/* harmony import */ var _moneysimulatorV2_moneysimulatorV2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./moneysimulatorV2/moneysimulatorV2.component */ "./src/app/moneysimulatorV2/moneysimulatorV2.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_blockchain_about_blockchain_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about-blockchain/about-blockchain.component */ "./src/app/about-blockchain/about-blockchain.component.ts");
/* harmony import */ var _about_crypto_about_crypto_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./about-crypto/about-crypto.component */ "./src/app/about-crypto/about-crypto.component.ts");
/* harmony import */ var _dialog_info_crypto_dialog_info_crypto_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog-info-crypto/dialog-info-crypto.component */ "./src/app/dialog-info-crypto/dialog-info-crypto.component.ts");
/* harmony import */ var _realtime_transaction_realtime_transaction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./realtime-transaction/realtime-transaction.component */ "./src/app/realtime-transaction/realtime-transaction.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
                _dialog_simulation_dialog_simulation_component__WEBPACK_IMPORTED_MODULE_10__["DialogSimulationComponent"],
                _moneysimulator_moneysimulator_component__WEBPACK_IMPORTED_MODULE_11__["MoneysimulatorComponent"],
                _moneysimulatorV2_moneysimulatorV2_component__WEBPACK_IMPORTED_MODULE_12__["MoneysimulatorComponentV2"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__["TopbarComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_14__["InfoComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _about_blockchain_about_blockchain_component__WEBPACK_IMPORTED_MODULE_21__["AboutBlockchainComponent"],
                _about_crypto_about_crypto_component__WEBPACK_IMPORTED_MODULE_22__["AboutCryptoComponent"],
                _dialog_info_crypto_dialog_info_crypto_component__WEBPACK_IMPORTED_MODULE_23__["DialogInfoCryptoComponent"],
                _realtime_transaction_realtime_transaction_component__WEBPACK_IMPORTED_MODULE_24__["RealtimeTransactionComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["routes"], { useHash: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["CollapseModule"].forRoot(),
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipeModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_6__["SelectDropDownModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [_dialog_simulation_dialog_simulation_component__WEBPACK_IMPORTED_MODULE_10__["DialogSimulationComponent"], _dialog_info_crypto_dialog_info_crypto_component__WEBPACK_IMPORTED_MODULE_23__["DialogInfoCryptoComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _moneysimulator_moneysimulator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moneysimulator/moneysimulator.component */ "./src/app/moneysimulator/moneysimulator.component.ts");
/* harmony import */ var _moneysimulatorV2_moneysimulatorV2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moneysimulatorV2/moneysimulatorV2.component */ "./src/app/moneysimulatorV2/moneysimulatorV2.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _about_crypto_about_crypto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-crypto/about-crypto.component */ "./src/app/about-crypto/about-crypto.component.ts");
/* harmony import */ var _about_blockchain_about_blockchain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-blockchain/about-blockchain.component */ "./src/app/about-blockchain/about-blockchain.component.ts");
/* harmony import */ var _realtime_transaction_realtime_transaction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./realtime-transaction/realtime-transaction.component */ "./src/app/realtime-transaction/realtime-transaction.component.ts");







var routes = [
    { path: '', component: _moneysimulatorV2_moneysimulatorV2_component__WEBPACK_IMPORTED_MODULE_1__["MoneysimulatorComponentV2"] },
    { path: '#', component: _moneysimulatorV2_moneysimulatorV2_component__WEBPACK_IMPORTED_MODULE_1__["MoneysimulatorComponentV2"] },
    { path: 'MoneySim', component: _moneysimulator_moneysimulator_component__WEBPACK_IMPORTED_MODULE_0__["MoneysimulatorComponent"] },
    { path: 'infos', component: _info_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoComponent"] },
    { path: 'aboutus', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"] },
    { path: 'blockchain', component: _about_blockchain_about_blockchain_component__WEBPACK_IMPORTED_MODULE_5__["AboutBlockchainComponent"] },
    { path: 'cryptocurrency', component: _about_crypto_about_crypto_component__WEBPACK_IMPORTED_MODULE_4__["AboutCryptoComponent"] },
    { path: 'realtime', component: _realtime_transaction_realtime_transaction_component__WEBPACK_IMPORTED_MODULE_6__["RealtimeTransactionComponent"] }
];


/***/ }),

/***/ "./src/app/class/clcryptocurrency.ts":
/*!*******************************************!*\
  !*** ./src/app/class/clcryptocurrency.ts ***!
  \*******************************************/
/*! exports provided: Clcryptocurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clcryptocurrency", function() { return Clcryptocurrency; });
var Clcryptocurrency = /** @class */ (function () {
    function Clcryptocurrency(id, name, symbol, urlpic, coinName, fullName, isTrading, algorithm, prooftype, fullypremined, totalCoinsupply, sortOrder) {
        this._id = id;
        this._name = name;
        this._symbol = symbol;
        this._picture = urlpic;
        this._coinName = coinName;
        this._fullName = fullName;
        this._isTrading = isTrading;
        this._algorithm = algorithm;
        this._prooftype = prooftype;
        this._fullypremined = fullypremined;
        this._totalCoinsupply = totalCoinsupply;
        this._sortOrder = sortOrder;
    }
    Object.defineProperty(Clcryptocurrency.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (actName) {
            this._name = actName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (actId) {
            this._id = actId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (actSymbol) {
            this._symbol = actSymbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "coinName", {
        get: function () {
            return this._coinName;
        },
        set: function (actcoinName) {
            this._coinName = actcoinName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (actfullName) {
            this._fullName = actfullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "isTrading", {
        get: function () {
            return this._isTrading;
        },
        set: function (ActisTrading) {
            this._isTrading = ActisTrading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "totalCoinsupply", {
        get: function () {
            return this._totalCoinsupply;
        },
        set: function (acttotalCoinsupply) {
            this._totalCoinsupply = acttotalCoinsupply;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (actsortOrder) {
            this._sortOrder = actsortOrder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "algorithm", {
        get: function () {
            return this._algorithm;
        },
        set: function (actalgorithm) {
            this._algorithm = actalgorithm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "prooftype", {
        get: function () {
            return this._prooftype;
        },
        set: function (actprooftype) {
            this._prooftype = actprooftype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "fullypremined", {
        get: function () {
            return this._fullypremined;
        },
        set: function (actfullypremined) {
            this._fullypremined = actfullypremined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (actColor) {
            this._color = actColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clcryptocurrency.prototype, "picture", {
        get: function () {
            return this._picture;
        },
        set: function (actPic) {
            this._picture = actPic;
        },
        enumerable: true,
        configurable: true
    });
    return Clcryptocurrency;
}());



/***/ }),

/***/ "./src/app/class/exchange-data.ts":
/*!****************************************!*\
  !*** ./src/app/class/exchange-data.ts ***!
  \****************************************/
/*! exports provided: ExchangeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeData", function() { return ExchangeData; });
var ExchangeData = /** @class */ (function () {
    function ExchangeData() {
        this.displayed = true;
        this.timestamp = 0;
    }
    Object.defineProperty(ExchangeData.prototype, "_name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return ExchangeData;
}());



/***/ }),

/***/ "./src/app/class/trade-sample.ts":
/*!***************************************!*\
  !*** ./src/app/class/trade-sample.ts ***!
  \***************************************/
/*! exports provided: TradeSample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeSample", function() { return TradeSample; });
var TradeSample = /** @class */ (function () {
    function TradeSample(subscriptionId, exchangeName, flag, tradeId, timestamp, quantity, price, total) {
        this.subscriptionId = subscriptionId;
        this.exchangeName = exchangeName;
        this.flag = flag;
        this.tradeId = tradeId;
        this.timestamp = timestamp;
        this.quantity = quantity;
        this.price = price;
        this.total = total;
    }
    Object.defineProperty(TradeSample.prototype, "_subscriptionId", {
        get: function () {
            return this.subscriptionId;
        },
        set: function (actsubscriptionId) {
            this.subscriptionId = actsubscriptionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeSample.prototype, "_exchangeName", {
        get: function () {
            return this.exchangeName;
        },
        set: function (actexchangeName) {
            this.exchangeName = actexchangeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeSample.prototype, "_flat", {
        get: function () {
            return this.flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeSample.prototype, "_flag", {
        set: function (actflag) {
            this.flag = actflag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeSample.prototype, "_tradeId", {
        get: function () {
            return this.tradeId;
        },
        set: function (acttradeId) {
            this.tradeId = acttradeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeSample.prototype, "_timestamp", {
        get: function () {
            return this.timestamp;
        },
        set: function (acttimestamp) {
            this.timestamp = acttimestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeSample.prototype, "_quantity", {
        get: function () {
            return this.quantity;
        },
        set: function (actquantity) {
            this.quantity = actquantity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeSample.prototype, "_price", {
        get: function () {
            return this.price;
        },
        set: function (actprice) {
            this.price = actprice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeSample.prototype, "_total", {
        get: function () {
            return this.total;
        },
        set: function (acttotal) {
            this.total = acttotal;
        },
        enumerable: true,
        configurable: true
    });
    return TradeSample;
}());



/***/ }),

/***/ "./src/app/dialog-info-crypto/dialog-info-crypto.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialog-info-crypto/dialog-info-crypto.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n   }\r\n \r\n   .MainpopupContent{\r\n     text-align: center;\r\n   }\r\n \r\n   .myPopupButton{\r\n     background-color: #e4791b;\r\n     color: #ffffff;\r\n   }\r\n \r\n   h1{\r\n     text-align: center;\r\n   }"

/***/ }),

/***/ "./src/app/dialog-info-crypto/dialog-info-crypto.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialog-info-crypto/dialog-info-crypto.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <!--\n\n    this._isTrading = isTrading;\n    this._algorithm = algorithm;\n    this._prooftype = prooftype;\n    this._fullypremined = fullypremined;\n    this._totalCoinsupply = totalCoinsupply;\n    this._sortOrder = sortOrder;\n  -->\n  CoinName : {{actCrypto.name}}\n  <br>\n  Symbol : {{actCrypto.symbol}}\n  <br>\n  <img class=\"DisplayPic\" [src]=\"actCrypto.picture\" (click)=\"openInfo()\">\n  <br>\n  FullName : {{actCrypto.fullName}}\n  <br>\n  Is coin Traded : {{actCrypto.isTrading}}\n  <br>\n  Algorithm Used : {{actCrypto.algorithm}}\n  <br>\n  Total coin supply : {{actCrypto.totalCoinsupply}}\n  <br>\n</p>\n"

/***/ }),

/***/ "./src/app/dialog-info-crypto/dialog-info-crypto.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialog-info-crypto/dialog-info-crypto.component.ts ***!
  \********************************************************************/
/*! exports provided: DialogInfoCryptoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInfoCryptoComponent", function() { return DialogInfoCryptoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogInfoCryptoComponent = /** @class */ (function () {
    function DialogInfoCryptoComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.actCrypto = data.actCrypto;
    }
    DialogInfoCryptoComponent.prototype.ngOnInit = function () {
    };
    DialogInfoCryptoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-info-crypto',
            template: __webpack_require__(/*! ./dialog-info-crypto.component.html */ "./src/app/dialog-info-crypto/dialog-info-crypto.component.html"),
            styles: [__webpack_require__(/*! ./dialog-info-crypto.component.css */ "./src/app/dialog-info-crypto/dialog-info-crypto.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogInfoCryptoComponent);
    return DialogInfoCryptoComponent;
}());



/***/ }),

/***/ "./src/app/dialog-simulation/dialog-simulation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dialog-simulation/dialog-simulation.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\r\n   width: 100%;\r\n   height: 100%;\r\n   padding: 0;\r\n   margin: 0;\r\n  }\r\n\r\n  .MainpopupContent{\r\n    text-align: center;\r\n  }\r\n\r\n  .myPopupButton{\r\n    background-color: #e4791b;\r\n    color: #ffffff;\r\n  }\r\n\r\n  h1{\r\n    text-align: center;\r\n  }\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dialog-simulation/dialog-simulation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialog-simulation/dialog-simulation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1> Your Simulation</h1>\n  <div class=\"MainpopupContent\">\n    <br>\n    <div *ngIf=\"data.StartValue != 0 && data.EndValue != 0\">\n      <p>Your currency {{data.Currency.viewValue}}</p>\n      <br>\n      <p>Your simulation is in {{data.CryptoCurreny._symbol}}</p>\n      <br>\n        <div *ngIf=\"data.Difference > 0\">\n            <p>If you had put {{data.Amount}}{{data.Currency.viewValue}} the {{data.StartDate | date: 'dd/MM/yyyy'}}</p>\n            <br>\n            <p>You would have had {{data.EndAmount}}{{data.Currency.viewValue}} the {{data.EndDate | date: 'dd/MM/yyyy'}}</p>\n            <br>\n            You Would have won {{data.Difference}} {{data.Currency.viewValue}}\n        </div>\n        <div *ngIf=\"data.Difference < 0\">\n            <p>If you had put {{data.Amount}}{{data.Currency.viewValue}} the {{data.StartDate | date: 'dd/MM/yyyy'}}</p>\n            <br>\n            <p>You would have had {{data.EndAmount}}{{data.Currency.viewValue}} the {{data.EndDate | date: 'dd/MM/yyyy'}}</p>\n            <br>\n            You Would have lost {{data.Difference}} {{data.Currency.viewValue}}\n        </div>\n        <div *ngIf=\"data.Difference == 0\">\n            There is no difference in this period.\n        </div>\n    </div>\n    <div *ngIf=\"data.StartValue == 0 || data.EndValue == 0\">\n      There is a mistake in your input or no data available for the data set!\n    </div>\n    <br>\n    <button mat-raised-button class=\"myPopupButton\" (click)=\"onNoClick()\" >Thanks For the Simulation!</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/dialog-simulation/dialog-simulation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialog-simulation/dialog-simulation.component.ts ***!
  \******************************************************************/
/*! exports provided: DialogSimulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSimulationComponent", function() { return DialogSimulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogSimulationComponent = /** @class */ (function () {
    function DialogSimulationComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.StartDate = data.StartDate;
        this.EndDate = data.EndDate;
    }
    DialogSimulationComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogSimulationComponent.prototype.ngOnInit = function () {
    };
    DialogSimulationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-simulation',
            template: __webpack_require__(/*! ./dialog-simulation.component.html */ "./src/app/dialog-simulation/dialog-simulation.component.html"),
            styles: [__webpack_require__(/*! ./dialog-simulation.component.css */ "./src/app/dialog-simulation/dialog-simulation.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogSimulationComponent);
    return DialogSimulationComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n  background-color: #303030;\r\n  margin: 0;\r\n  font-size: 10px;\r\n  text-align: center;\r\n  color: #ffffff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    ©Copyright CryptoSim | <a href=\"mailto:contact@cryptocurrencysimulator.com\" data-rel=\"external\">Contact</a> | Using Cryptocompare API\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin:0;\r\n  padding:0;\r\n  height: calc(100vh - 115px );\r\n  width: 100%;\r\n  background-color: #ffaf66;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"title\">\n  Informations\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
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

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/moneysimulator/moneysimulator.component.css":
/*!*************************************************************!*\
  !*** ./src/app/moneysimulator/moneysimulator.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,html {\r\n  margin:0;\r\n  padding:0;\r\n  height: calc(100vh - 115px );\r\n  width: 100%;\r\n  background-color: #ffaf66;\r\n  }\r\n\r\n  .BigPicRow{\r\n    width: 100%;\r\n  }\r\n\r\n  .BigPicColumn{\r\n    width: 33%;\r\n    text-align: center;\r\n  }\r\n\r\n  .BigPic{\r\n    cursor: pointer;\r\n    max-height: 33% ;\r\n    max-width: 33% ;\r\n  }\r\n\r\n  .MyTable{\r\n    width: 100%;\r\n    background-color: #ffaf66;\r\n    border-top: 15px solid #ffaf66;\r\n  }\r\n\r\n  h2{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    background-color: #ffaf66;\r\n  }\r\n\r\n  p{\r\n    text-align: center;\r\n    background-color: #ffaf66;\r\n    border-bottom: 15px solid #ffaf66;\r\n  }\r\n\r\n  .MyButton{\r\n  text-align: center;\r\n  padding-bottom: 15px;\r\n  background-color: #ffaf66;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n  .SimulateButton{\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background-color: #e4791b;\r\n}\r\n\r\n  .FlatCurInput{\r\n width: 65px;\r\n background-color: #ffaf66;\r\n}\r\n\r\n  .DateInput{\r\n  width: 120px;\r\n }\r\n"

/***/ }),

/***/ "./src/app/moneysimulator/moneysimulator.component.html":
/*!**************************************************************!*\
  !*** ./src/app/moneysimulator/moneysimulator.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div>\r\n    <table class=\"MyTable\">\r\n        <tr class=\"BigPicRow\">\r\n          <th  class=\"BigPicColumn\"><img class=\"BigPic\" [src]=\"MyCrypto[0].picture\" id=\"bigPic1\" (click)=\"ClickPic(0)\"></th>\r\n          <th  class=\"BigPicColumn\"><img class=\"BigPic\" [src]=\"MyCrypto[1].picture\" id=\"bigPic2\" (click)=\"ClickPic(1)\"></th>\r\n          <th  class=\"BigPicColumn\"><img class=\"BigPic\" [src]=\"MyCrypto[2].picture\" id=\"bigPic3\" (click)=\"ClickPic(2)\"></th>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n<br>\r\n\r\n<br>\r\n\r\n<br>\r\n\r\n<br>\r\n\r\n<h2>\r\n  {{ActCrypto._name}} Simulation\r\n</h2>\r\n\r\n<p>\r\n\r\n  <mat-form-field class=\"DateInput\">\r\n    <input id=\"StartDate\" [(ngModel)]=\"ChoosenStartDate\" matInput [min]=\"minDate\" [max]=\"maxDate\"\r\n    [matDatepicker]=\"Startpicker\" placeholder=\"Start Date\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"Startpicker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #Startpicker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n\r\n  <mat-form-field class=\"DateInput\">\r\n    <input id=\"EndDate\" matInput [(ngModel)]=\"ChoosenEndDate\" [min]=\"minDate\" [max]=\"maxDate\"\r\n    [matDatepicker]=\"Endpicker\" placeholder=\"End Date\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"Endpicker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #Endpicker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n  <br/>\r\n\r\n  <mat-form-field class=\"FlatCurInput\">\r\n      <input matInput placeholder=\"Amount\" [(ngModel)]=\"Amount\">\r\n  </mat-form-field>\r\n\r\n\r\n  <mat-form-field class=\"FlatCurInput\">\r\n    <mat-select placeholder=\"Currency\" [(ngModel)]=\"actCurrency\">\r\n        <mat-option *ngFor=\"let currency of fiatCurrency\" [value]=\"currency.value\">\r\n          {{ currency.viewValue }}\r\n        </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</p>\r\n\r\n<br>\r\n<div class=\"MyButton\">\r\n  <button mat-raised-button (click)=\"CryptoSimulation()\" class=\"SimulateButton\">Simulate!</button>\r\n</div>\r\n\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/moneysimulator/moneysimulator.component.ts":
/*!************************************************************!*\
  !*** ./src/app/moneysimulator/moneysimulator.component.ts ***!
  \************************************************************/
/*! exports provided: MoneysimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneysimulatorComponent", function() { return MoneysimulatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _class_clcryptocurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/clcryptocurrency */ "./src/app/class/clcryptocurrency.ts");
/* harmony import */ var _dialog_simulation_dialog_simulation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog-simulation/dialog-simulation.component */ "./src/app/dialog-simulation/dialog-simulation.component.ts");
/* harmony import */ var _services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/currency/currency.http.service.service */ "./src/services/currency/currency.http.service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MoneysimulatorComponent = /** @class */ (function () {
    function MoneysimulatorComponent(dialog, currencyService) {
        var _this = this;
        this.dialog = dialog;
        this.currencyService = currencyService;
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date();
        this.ChoosenStartDate = new Date();
        this.ChoosenEndDate = new Date();
        this.actCurrency = 'USD';
        this.Amount = 100;
        this.MyCrypto = new Array();
        this.SelectedCurrencyID = 0;
        this.fiatCurrency = [
            { id: 0, value: 'USD', viewValue: '$' },
            { id: 1, value: 'EUR', viewValue: '€' },
            { id: 2, value: 'GBP', viewValue: '£' }
        ];
        this.TestInitCrypto();
        this.ActCrypto = this.MyCrypto.filter(function (Temp) { return Temp._id === _this.SelectedCurrencyID; })[0];
        console.log(currencyService.getAllCryptoCurrencies());
    }
    MoneysimulatorComponent.prototype.ngOnInit = function () {
    };
    MoneysimulatorComponent.prototype.TestInitCrypto = function () {
        this.MyCrypto.push(new _class_clcryptocurrency__WEBPACK_IMPORTED_MODULE_2__["Clcryptocurrency"](0, 'Monero', 'XMR', '../../assets/pictures/xmr.png', '', '', '', '', '', '', '', ''));
        this.MyCrypto.push(new _class_clcryptocurrency__WEBPACK_IMPORTED_MODULE_2__["Clcryptocurrency"](1, 'Bitcoin', 'BTC', '../../assets/pictures/btc.png', '', '', '', '', '', '', '', ''));
        this.MyCrypto.push(new _class_clcryptocurrency__WEBPACK_IMPORTED_MODULE_2__["Clcryptocurrency"](2, 'Ethereum', 'ETH', '../../assets/pictures/eth.png', '', '', '', '', '', '', '', ''));
    };
    MoneysimulatorComponent.prototype.ClickPic = function (ID) {
        this.SelectedCurrencyID = ID;
        this.ActCrypto = this.MyCrypto.filter(function (Temp) { return Temp._id === ID; })[0];
    };
    MoneysimulatorComponent.prototype.CryptoSimulation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myFiatCurrency, EndValue, EndAmount, StartValue, Difference, MypromiseStart, MypromiseEnd, CryptoAmount, dialogRef;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myFiatCurrency = this.fiatCurrency.filter(function (Temp) { return Temp.value === _this.actCurrency; })[0];
                        return [4 /*yield*/, this.currencyService.getCurrencyValue(this.ActCrypto._symbol, this.actCurrency, this.FromDateToTimeStamp(this.ChoosenStartDate)).then(function (value) { return MypromiseStart = value; })];
                    case 1:
                        MypromiseStart = _a.sent();
                        return [4 /*yield*/, this.currencyService.getCurrencyValue(this.ActCrypto._symbol, this.actCurrency, this.FromDateToTimeStamp(this.ChoosenEndDate)).then(function (value) { return MypromiseEnd = value; })];
                    case 2:
                        MypromiseEnd = _a.sent();
                        //console.log(MypromiseStart);
                        //console.log(MypromiseEnd);
                        StartValue = MypromiseStart;
                        EndValue = MypromiseEnd;
                        CryptoAmount = this.Amount / StartValue;
                        //console.log(CryptoAmount);
                        EndAmount = EndValue * CryptoAmount;
                        Difference = EndAmount - this.Amount;
                        Difference = parseFloat(Difference).toFixed(2);
                        EndAmount = parseFloat(EndAmount).toFixed(2);
                        dialogRef = this.dialog.open(_dialog_simulation_dialog_simulation_component__WEBPACK_IMPORTED_MODULE_3__["DialogSimulationComponent"], {
                            data: { StartDate: this.ChoosenStartDate, EndDate: this.ChoosenEndDate, Currency: myFiatCurrency,
                                CryptoCurreny: this.ActCrypto, StartValue: StartValue, EndValue: EndValue, Difference: Difference,
                                Symbol: this.fiatCurrency, Amount: this.Amount, EndAmount: EndAmount }
                        });
                        dialogRef.afterClosed().subscribe(function (result) {
                            //console.log('The dialog was closed');
                            result = true;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneysimulatorComponent.prototype.FromDateToTimeStamp = function (mDate) {
        return Math.round(mDate.getTime() / 1000);
    };
    MoneysimulatorComponent.prototype.CheckVar = function () { };
    MoneysimulatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moneysimulator',
            template: __webpack_require__(/*! ./moneysimulator.component.html */ "./src/app/moneysimulator/moneysimulator.component.html"),
            styles: [__webpack_require__(/*! ./moneysimulator.component.css */ "./src/app/moneysimulator/moneysimulator.component.css")],
            providers: [_services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]])
    ], MoneysimulatorComponent);
    return MoneysimulatorComponent;
}());



/***/ }),

/***/ "./src/app/moneysimulatorV2/moneysimulatorV2.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/moneysimulatorV2/moneysimulatorV2.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,html {\r\n  margin:0;\r\n  padding:0;\r\n  height: calc(100vh - 115px );\r\n  width: 100%;\r\n  background-color: #ffaf66;\r\n  }\r\n\r\n  .BigPicRow{\r\n    width: 100%;\r\n  }\r\n\r\n  .BigPicColumn{\r\n    height: 20%;\r\n    text-align: center;\r\n  }\r\n\r\n  .BigPic{\r\n    cursor: pointer;\r\n    max-width: 50%;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .SmallPicRow{\r\n    width: 100%;\r\n  }\r\n\r\n  .SmallPicColumn{\r\n    height: 10%;\r\n    text-align: center;\r\n  }\r\n\r\n  .SmallPic{\r\n    cursor: pointer;\r\n    max-width: 50%;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .MyTable{\r\n    width: 100%;\r\n    background-color: #ffaf66;\r\n    border-top: 15px solid #ffaf66;\r\n  }\r\n\r\n  h2{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    background-color: #ffaf66;\r\n  }\r\n\r\n  p{\r\n    text-align: center;\r\n    background-color: #ffaf66;\r\n    border-bottom: 15px solid #ffaf66;\r\n  }\r\n\r\n  .MyButton{\r\n  text-align: center;\r\n  padding-bottom: 15px;\r\n  background-color: #ffaf66;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n  .SimulateButton{\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background-color: #e4791b;\r\n}\r\n\r\n  .FlatCurInput{\r\n width: 65px;\r\n background-color: #ffaf66;\r\n}\r\n\r\n  .DateInput{\r\n  width: 120px;\r\n }\r\n\r\n  .input-group{\r\n  width: 150px;\r\n  text-align: center;\r\n}\r\n\r\n  .myList-Container{\r\n  height: 300px;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 25px;\r\n}\r\n\r\n  .list-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n  .mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n  .myTable-Container{\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n\r\n  .myList{\r\n  width: 250px;\r\n  text-align: center;\r\n  max-height: 225px;\r\n}\r\n\r\n  .myList-Element{\r\n  cursor: pointer;\r\n}\r\n\r\n  .Simulation-Area{\r\n  text-align: center;\r\n}\r\n\r\n  .DisplayPic{\r\n  width: 20%; \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/moneysimulatorV2/moneysimulatorV2.component.html":
/*!******************************************************************!*\
  !*** ./src/app/moneysimulatorV2/moneysimulatorV2.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div  *ngIf=\"dataLoad;else other_content\">\r\n  <div>\r\n      <table class=\"MyTable\">\r\n          <tr class=\"BigPicRow\" >  \r\n              <th *ngFor=\"let i of FavFirstRow\" class=\"BigPicColumn\" [style.width.px]=\"100/FavFirstRowLength\">\r\n                <img class=\"BigPic\" [src]=\"MyCrypto[i].picture\" (click)=\"ClickPic(MyCrypto[i].id)\">             \r\n              </th> \r\n          </tr>\r\n          <tr class=\"BigPicRow\">\r\n              <th *ngFor=\"let i of FavSecondRow\" class=\"BigPicColumn\" [style.width.px]=\"100/FavSecondRowLength\">\r\n                <img class=\"BigPic\" [src]=\"MyCrypto[i].picture\" (click)=\"ClickPic(MyCrypto[i].id)\" >             \r\n              </th> </tr>\r\n      </table>\r\n  </div>\r\n\r\n  <div>\r\n      <table class=\"MyTable\">\r\n          <tr class=\"SmallPicRow\" >  \r\n              <th *ngFor=\"let i of OtherFirstRow\" class=\"SmallPicColumn\" [style.width.px]=\"100/OtherFirstRowLength\">\r\n                <img class=\"SmallPic\" [src]=\"MyCrypto[i].picture\" (click)=\"ClickPic(MyCrypto[i].id)\">             \r\n              </th> \r\n          </tr>\r\n          <tr class=\"SmallPicRow\">\r\n              <th *ngFor=\"let i of OtherSecondRow\" class=\"SmallPicColumn\" [style.width.px]=\"100/OtherSecondRowLength\">\r\n                <img class=\"SmallPic\" [src]=\"MyCrypto[i].picture\" (click)=\"ClickPic(MyCrypto[i].id)\" >             \r\n              </th> </tr>\r\n      </table>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"myList-Container mat-elevation-z8\">\r\n      <div class=\"list-header\">\r\n        <mat-form-field>\r\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        </mat-form-field>\r\n      </div>\r\n    <div class=\"myTable-Container\">\r\n      <mat-table #table [dataSource]=\"dataSource\" class=\"myList\">\r\n    \r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"Symbol\">\r\n          <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let crypto\" (click)=\"ClickPic(crypto.id)\" class=\"myList-Element\"> {{crypto.symbol}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"CoinName\">\r\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let crypto\" (click)=\"ClickPic(crypto.id)\" class=\"myList-Element\"> {{crypto.coinName}} </mat-cell>\r\n        </ng-container>\r\n    \r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <br>\r\n\r\n  <div id=\"Simulation\" class=\"Simulation-Area\">\r\n    <h2>\r\n      {{ActCrypto._name}} Simulation\r\n    </h2>\r\n    <img class=\"DisplayPic\" [src]=\"ActCrypto.picture\" (click)=\"openInfo()\"> \r\n    <p>\r\n\r\n      <mat-form-field class=\"DateInput\">\r\n        <input id=\"StartDate\" [(ngModel)]=\"ChoosenStartDate\" matInput [min]=\"minDate\" [max]=\"maxDate\"\r\n        [matDatepicker]=\"Startpicker\" placeholder=\"Start Date\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"Startpicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #Startpicker></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field class=\"DateInput\">\r\n        <input id=\"EndDate\" matInput [(ngModel)]=\"ChoosenEndDate\" [min]=\"minDate\" [max]=\"maxDate\"\r\n        [matDatepicker]=\"Endpicker\" placeholder=\"End Date\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"Endpicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #Endpicker></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n      <br/>\r\n\r\n      <mat-form-field class=\"FlatCurInput\">\r\n          <input matInput placeholder=\"Amount\" [(ngModel)]=\"Amount\">\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field class=\"FlatCurInput\">\r\n        <mat-select placeholder=\"Currency\" [(ngModel)]=\"actCurrency\">\r\n            <mat-option *ngFor=\"let currency of fiatCurrency\" [value]=\"currency.value\">\r\n              {{ currency.viewValue }}\r\n            </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </p>\r\n\r\n    <br>\r\n    <div class=\"MyButton\">\r\n      <button mat-raised-button (click)=\"CryptoSimulation()\" class=\"SimulateButton\">Simulate!</button>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n\r\n<ng-template #other_content>other content here...</ng-template>\r\n\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/moneysimulatorV2/moneysimulatorV2.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/moneysimulatorV2/moneysimulatorV2.component.ts ***!
  \****************************************************************/
/*! exports provided: MoneysimulatorComponentV2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneysimulatorComponentV2", function() { return MoneysimulatorComponentV2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_simulation_dialog_simulation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-simulation/dialog-simulation.component */ "./src/app/dialog-simulation/dialog-simulation.component.ts");
/* harmony import */ var _dialog_info_crypto_dialog_info_crypto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog-info-crypto/dialog-info-crypto.component */ "./src/app/dialog-info-crypto/dialog-info-crypto.component.ts");
/* harmony import */ var _services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/currency/currency.http.service.service */ "./src/services/currency/currency.http.service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var MoneysimulatorComponentV2 = /** @class */ (function () {
    function MoneysimulatorComponentV2(dialog, currencyService) {
        this.dialog = dialog;
        this.currencyService = currencyService;
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date();
        this.ChoosenStartDate = new Date();
        this.ChoosenEndDate = new Date();
        this.actCurrency = 'USD';
        this.Amount = 100;
        this.displayedColumns = ['Symbol', 'CoinName'];
        this.MyCrypto = new Array();
        this.FavCryptoId = new Array();
        this.FavCryptoItem = new Array();
        this.SelectedCurrencyID = 749869;
        this.dataLoad = false;
        this.FavFirstRow = new Array();
        this.FavSecondRow = new Array();
        this.OtherFirstRowLength = 8;
        this.OtherFirstRow = new Array();
        this.OtherSecondRowLength = 8;
        this.OtherSecondRow = new Array();
        this.fiatCurrency = [
            { id: 0, value: 'USD', viewValue: '$' },
            { id: 1, value: 'EUR', viewValue: '€' },
            { id: 2, value: 'GBP', viewValue: '£' }
        ];
    }
    MoneysimulatorComponentV2.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    MoneysimulatorComponentV2.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.currencyService.getAllgetAllCryptoCurrenciesParsed()];
                    case 1:
                        _a.MyCrypto = _b.sent();
                        //console.log(this.MyCrypto);
                        this.ActCrypto = this.getCyptoItem(this.SelectedCurrencyID);
                        this.getRandomCrypto();
                        this.dataLoad = true;
                        //console.log(this.SelectedCurrencyID);
                        //console.log(this.ActCrypto);
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.MyCrypto);
                        console.log("C'est chargé?");
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneysimulatorComponentV2.prototype.getRandomCrypto = function () {
        while (this.OtherFirstRow.length < this.OtherFirstRowLength) {
            var Temp = Math.floor(Math.random() * (this.MyCrypto.length - 0 + 1)) + 0;
            if (!this.isDisplayed(Temp)) {
                this.OtherFirstRow.push(Temp);
            }
        }
        while (this.OtherSecondRow.length < this.OtherSecondRowLength) {
            var Temp = Math.floor(Math.random() * (this.MyCrypto.length - 0 + 1)) + 0;
            if (!this.isDisplayed(Temp)) {
                this.OtherSecondRow.push(Temp);
            }
        }
    };
    MoneysimulatorComponentV2.prototype.isDisplayed = function (numberId) {
        for (var i in this.FavFirstRow) {
            if (i == numberId) {
                return true;
            }
        }
        for (var i in this.FavSecondRow) {
            if (i == numberId) {
                return true;
            }
        }
        for (var i in this.OtherFirstRow) {
            if (i == numberId) {
                return true;
            }
        }
        for (var i in this.OtherSecondRow) {
            if (i == numberId) {
                return true;
            }
        }
        return false;
    };
    MoneysimulatorComponentV2.prototype.getCyptoItem = function (numberID) {
        for (var i = 0; i < this.MyCrypto.length; i++) {
            if (this.MyCrypto[i]._id == numberID) {
                return this.MyCrypto[i];
            }
        }
        return null;
    };
    MoneysimulatorComponentV2.prototype.getCyptoItemFromId = function (numberID) {
        for (var i = 0; i < this.MyCrypto.length; i++) {
            if (this.MyCrypto[i]._id == numberID) {
                return i;
            }
        }
        return null;
    };
    MoneysimulatorComponentV2.prototype.ClickPic = function (ID) {
        this.SelectedCurrencyID = ID;
        this.ActCrypto = this.MyCrypto.filter(function (Temp) { return Temp._id === ID; })[0];
        var element = document.getElementById("Simulation");
        element.scrollIntoView();
    };
    MoneysimulatorComponentV2.prototype.CryptoSimulation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myFiatCurrency, EndValue, EndAmount, StartValue, Difference, MypromiseStart, MypromiseEnd, CryptoAmount, dialogRef;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myFiatCurrency = this.fiatCurrency.filter(function (Temp) { return Temp.value === _this.actCurrency; })[0];
                        return [4 /*yield*/, this.currencyService.getCurrencyValue(this.ActCrypto._symbol, this.actCurrency, this.FromDateToTimeStamp(this.ChoosenStartDate)).then(function (value) { return MypromiseStart = value; })];
                    case 1:
                        MypromiseStart = _a.sent();
                        return [4 /*yield*/, this.currencyService.getCurrencyValue(this.ActCrypto._symbol, this.actCurrency, this.FromDateToTimeStamp(this.ChoosenEndDate)).then(function (value) { return MypromiseEnd = value; })];
                    case 2:
                        MypromiseEnd = _a.sent();
                        //console.log(MypromiseStart);
                        //console.log(MypromiseEnd);
                        StartValue = MypromiseStart;
                        EndValue = MypromiseEnd;
                        CryptoAmount = this.Amount / StartValue;
                        //console.log(CryptoAmount);
                        EndAmount = EndValue * CryptoAmount;
                        Difference = EndAmount - this.Amount;
                        Difference = parseFloat(Difference).toFixed(2);
                        EndAmount = parseFloat(EndAmount).toFixed(2);
                        dialogRef = this.dialog.open(_dialog_simulation_dialog_simulation_component__WEBPACK_IMPORTED_MODULE_2__["DialogSimulationComponent"], {
                            data: { StartDate: this.ChoosenStartDate, EndDate: this.ChoosenEndDate, Currency: myFiatCurrency,
                                CryptoCurreny: this.ActCrypto, StartValue: StartValue, EndValue: EndValue, Difference: Difference,
                                Symbol: this.fiatCurrency, Amount: this.Amount, EndAmount: EndAmount }
                        });
                        dialogRef.afterClosed().subscribe(function (result) {
                            //console.log('The dialog was closed');
                            result = true;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneysimulatorComponentV2.prototype.openInfo = function () {
        var dialogRef = this.dialog.open(_dialog_info_crypto_dialog_info_crypto_component__WEBPACK_IMPORTED_MODULE_3__["DialogInfoCryptoComponent"], {
            data: { actCrypto: this.ActCrypto }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log('The dialog was closed');
            result = true;
        });
    };
    MoneysimulatorComponentV2.prototype.FromDateToTimeStamp = function (mDate) {
        return Math.round(mDate.getTime() / 1000);
    };
    MoneysimulatorComponentV2.prototype.CheckVar = function () { };
    MoneysimulatorComponentV2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moneysimulator',
            template: __webpack_require__(/*! ./moneysimulatorV2.component.html */ "./src/app/moneysimulatorV2/moneysimulatorV2.component.html"),
            styles: [__webpack_require__(/*! ./moneysimulatorV2.component.css */ "./src/app/moneysimulatorV2/moneysimulatorV2.component.css")],
            providers: [_services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]])
    ], MoneysimulatorComponentV2);
    return MoneysimulatorComponentV2;
}());



/***/ }),

/***/ "./src/app/realtime-transaction/realtime-transaction.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/realtime-transaction/realtime-transaction.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,html {\r\n    margin:0;\r\n    padding:0;\r\n    height: calc(100vh - 115px );\r\n    width: 100%;\r\n    background-color: #ffaf66;\r\n    }  \r\n    .MyTable{\r\n      width: 100%;\r\n      background-color: #ffaf66;\r\n      border-top: 15px solid #ffaf66;\r\n    }  \r\n    h1{\r\n      text-align: center;\r\n      color: #000000;\r\n      background-color: #ffaf66;\r\n    }  \r\n    p{\r\n      text-align: center;\r\n      background-color: #ffaf66;\r\n      border-bottom: 15px solid #ffaf66;\r\n    }  \r\n    .MyButton{\r\n    text-align: center;\r\n    padding-bottom: 15px;\r\n    background-color: #ffaf66;\r\n    margin-bottom: 15px;\r\n  }  \r\n    .SimulateButton{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    background-color: #e4791b;\r\n  }  \r\n    .FlatCurInput{\r\n   width: 65px;\r\n   background-color: #ffaf66;\r\n  }  \r\n    .DateInput{\r\n    width: 120px;\r\n   }  \r\n    .input-group{\r\n    width: 150px;\r\n    text-align: center;\r\n  }  \r\n    .myList-Container{\r\n    height: 300px;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 25px;\r\n  }  \r\n    .list-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }  \r\n    .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }  \r\n    .myTable-Container{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n  }  \r\n    .myTable-Exchange{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    width: 750px;\r\n\r\n  }  \r\n    .myTable-Trader{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    width: 300px;\r\n  }  \r\n    .myList{\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 300px;\r\n  }  \r\n    .myList-Element{\r\n    cursor: pointer;\r\n  }  \r\n    .DisplayPic{\r\n    width: 20%; \r\n  }  \r\n    .EchangeChoose{\r\n    width: 100%;\r\n    text-align: -webkit-center;\r\n  }  \r\n    .EchangeInput{\r\n    width: 250px;\r\n    max-height: 500px;\r\n  }  \r\n    .form-control{\r\n   margin-bottom: 15px;\r\n  }  \r\n    .MyButton{\r\n    text-align: center;\r\n    background-color: #ffaf66;\r\n    padding-top: 5px;\r\n    margin-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n  }"

/***/ }),

/***/ "./src/app/realtime-transaction/realtime-transaction.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/realtime-transaction/realtime-transaction.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <h1><strong>Realtime Transaction</strong></h1>\r\n  <div  *ngIf=\"dataLoad;else other_content\">\r\n    <div class=\"EchangeChoose\">\r\n      <div class=\"EchangeInput\">\r\n      \r\n        <ngx-select-dropdown [config]=\"configfsym\" [options]=\"MyCrypto\" \r\n        [(value)]=\"fsym\" [multiple]=\"false\" class=\"CryptoList\" ></ngx-select-dropdown>\r\n\r\n        <br>\r\n\r\n        <ngx-select-dropdown [config]=\"configtsym\" [options]=\"tsymList\" \r\n        [(value)]=\"tsym\" [multiple]=\"false\" ></ngx-select-dropdown>\r\n\r\n        <div class=\"MyButton\">\r\n          <button mat-raised-button (click)=\"CryptoSimulation()\" class=\"SimulateButton\">Get RealTime Data</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"myList-Container mat-elevation-z8\"> \r\n      <div class=\"myTable-Exchange\">\r\n        <mat-table #table [dataSource]=\"dataSourceTrade\" class=\"myList\">\r\n\r\n          <ng-container matColumnDef=\"Exchange\">\r\n            <mat-header-cell *matHeaderCellDef> Exchange </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let trade\" class=\"myList-Element\"> {{trade.exchangeName}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Price\">\r\n            <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let trade\" class=\"myList-Element\"> {{trade.price}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Quantity\">\r\n            <mat-header-cell *matHeaderCellDef> Quantity </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let trade\" class=\"myList-Element\"> {{trade.quantity}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Total\">\r\n            <mat-header-cell *matHeaderCellDef> Total </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let trade\" class=\"myList-Element\"> {{trade.total}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayTradeColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayTradeColumns;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"myList-Container mat-elevation-z8\">\r\n      <div class=\"list-header\">\r\n        <mat-form-field>\r\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"myTable-Trader\">\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"myList\">\r\n\r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"Display\">\r\n            <mat-header-cell *matHeaderCellDef> Displayed </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let exchange\" class=\"myList-Element\"> \r\n              <mat-checkbox [(ngModel)]=\"exchange.displayed\" (click)=\"diplayedChange(exchange.name,exchange.displayed)\"></mat-checkbox>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n\r\n          <ng-container matColumnDef=\"Name\">\r\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let exchange\" class=\"myList-Element\"> {{exchange.name}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Price\">\r\n            <mat-header-cell *matHeaderCellDef> Price in {{tsym}} </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let exchange\" class=\"myList-Element\"> {{exchange.price}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Compare\">\r\n            <mat-header-cell *matHeaderCellDef> Compare </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let exchange\" class=\"myList-Element\"> {{exchange.delta}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n      <div class=\"MyButton\">\r\n        <button mat-raised-button (click)=\"SelectAllTrade()\" class=\"SimulateButton\">Select All</button>\r\n        <button mat-raised-button (click)=\"UnSelectAllTrade()\" class=\"SimulateButton\">Unselect All</button>\r\n        <button mat-raised-button (click)=\"CryptoSimulation()\" class=\"SimulateButton\">Display</button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <br>\r\n  </div>\r\n  <ng-template #other_content>other content here...</ng-template>\r\n</body>"

/***/ }),

/***/ "./src/app/realtime-transaction/realtime-transaction.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/realtime-transaction/realtime-transaction.component.ts ***!
  \************************************************************************/
/*! exports provided: RealtimeTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealtimeTransactionComponent", function() { return RealtimeTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_streamer_trade_streamer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/streamer/trade-streamer.service */ "./src/services/streamer/trade-streamer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _class_trade_sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/trade-sample */ "./src/app/class/trade-sample.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/currency/currency.http.service.service */ "./src/services/currency/currency.http.service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RealtimeTransactionComponent = /** @class */ (function () {
    /*
    CCC.STATIC.CURRENCY.SYMBOL = {
      , 'LTC'  : 'Ł'
      , 'DAO'  : 'Ð'
      , 'CNY'  : '¥'
      , 'JPY'  : '¥'
      , 'PLN'  : 'zł'
      , 'RUB'  : '₽'
      , 'INR'  : '₹'
      , 'BRL'  : 'R$'
    };
    */
    function RealtimeTransactionComponent(RealtimeService, currencyService) {
        this.RealtimeService = RealtimeService;
        this.currencyService = currencyService;
        this.LowestPrice = 0;
        this.displayedColumns = ['Display', 'Name', 'Price', 'Compare'];
        this.dataLoad = false;
        this.MyCrypto = new Array();
        this.tsym = 'BTC';
        this.configfsym = {
            displayKey: "_fullName",
            search: true,
            height: '400px'
        };
        this.configtsym = {
            displayKey: "viewValue",
            search: false //enables the search plugin to search in the list
        };
        this.displayTradeColumns = ['Exchange', 'Price', 'Quantity', 'Total'];
        this.tsymList = [
            { id: 0, value: 'USD', viewValue: '$' },
            { id: 1, value: 'EUR', viewValue: '€' },
            { id: 2, value: 'GBP', viewValue: '£' },
            { id: 3, value: 'BTC', viewValue: 'Ƀ' },
            { id: 4, value: 'ETH', viewValue: 'Ξ' },
            { id: 5, value: 'GOLD', viewValue: 'Gold' }
        ];
        console.log("Here or Not?");
    }
    RealtimeTransactionComponent.prototype.diplayedChange = function (Exchange, Displayed) {
        console.log(Exchange);
        console.log(Displayed);
    };
    ;
    RealtimeTransactionComponent.prototype.CompareString = function (string1, string2) {
        if (string1 < string2) {
            return -1;
        }
        else if (string1 > string2) {
            return 1;
        }
        else {
            return 0;
        }
    };
    ;
    RealtimeTransactionComponent.prototype.CompareInt = function (int1, int2) {
        if (int1 < int2) {
            return -1;
        }
        else if (int1 > int2) {
            return 1;
        }
        else {
            return 0;
        }
    };
    ;
    RealtimeTransactionComponent.prototype.updatePrice = function (Trade) {
        var i = 0;
        //console.log(Trade.exchangeName)
        while (Trade.exchangeName != this.Exchange[i].name && i < this.Exchange.length) {
            //console.log(i + " : " + this.Exchange[i].name)
            i++;
        }
        if (Trade.exchangeName == this.Exchange[i].name) {
            if (this.LowestPrice == 0 || this.LowestPrice > Trade.price) {
                this.LowestPrice = Trade.price;
            }
            else {
                if (Trade.timestamp > this.Exchange[i].timestamp) {
                    this.Exchange[i].price = Trade.price;
                    this.Exchange[i].delta = ((this.Exchange[i].price / this.LowestPrice) * 100) - 100;
                }
            }
        }
    };
    RealtimeTransactionComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.RealtimeService.setCrypto('BTC', 'SNC')];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.currencyService.getAllgetAllCryptoCurrenciesParsed()];
                    case 2:
                        _a.MyCrypto = _b.sent();
                        return [4 /*yield*/, this.RealtimeService.getSocketData()];
                    case 3:
                        _b.sent();
                        this.Exchange = this.RealtimeService.getExchange();
                        this.Exchange.sort(function (a, b) { return _this.CompareString(a._name, b._name); });
                        this.subscription = this.RealtimeService.getSubscription();
                        this.StartSocket();
                        console.log(this.Exchange);
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.Exchange);
                        //console.log(this.dataSource);
                        this.dataLoad = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    RealtimeTransactionComponent.prototype.ngOnDestroy = function () {
        console.log("OnDestroy");
        this.socket.emit('SubRemove', { subs: this.subscription });
    };
    RealtimeTransactionComponent.prototype.StartSocket = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(this.RealtimeService.getStreamURl());
        this.socket.emit('SubAdd', { subs: this.subscription });
        this.UnthreatedData = new Array();
        this.socket.on('m', function (data) {
            _this.threatDate(data);
        });
    };
    RealtimeTransactionComponent.prototype.threatDate = function (data) {
        this.UnthreatedData.push(data);
        console.log(data);
        this.pushTrade(data);
        this.dataSourceTrade = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.Trade);
    };
    RealtimeTransactionComponent.prototype.pushTrade = function (currentData) {
        var tradeField = currentData.split('~');
        if (tradeField[0] != "3") {
            var TradeSampleItem = new _class_trade_sample__WEBPACK_IMPORTED_MODULE_3__["TradeSample"](tradeField[0], tradeField[1], tradeField[4], tradeField[5], tradeField[6], tradeField[7], tradeField[8], tradeField[9]);
            this.updatePrice(TradeSampleItem);
            //console.log(TradeSampleItem);
            this.writeData(TradeSampleItem);
        }
    };
    RealtimeTransactionComponent.prototype.writeData = function (mTrade) {
        var _this = this;
        if (this.Trade == undefined) {
            this.Trade = new Array();
            this.Trade.push(mTrade);
        }
        else {
            this.Trade.push(mTrade);
        }
        this.Trade.sort(function (b, a) { return _this.CompareInt(a.timestamp, b.timestamp); });
    };
    RealtimeTransactionComponent.prototype.getTrade = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.RealtimeService.getTrade()];
                    case 1:
                        _a.Trade = _b.sent();
                        this.dataSourceTrade = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.Trade);
                        console.log("Refresh");
                        console.log(this.Trade);
                        return [2 /*return*/];
                }
            });
        });
    };
    RealtimeTransactionComponent.prototype.UnSelectAllTrade = function () {
        var i = 0;
        for (i = 0; i < this.Exchange.length; i++) {
            this.Exchange[i].displayed = false;
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.Exchange);
    };
    RealtimeTransactionComponent.prototype.SelectAllTrade = function () {
        var i = 0;
        for (i = 0; i < this.Exchange.length; i++) {
            this.Exchange[i].displayed = true;
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.Exchange);
    };
    RealtimeTransactionComponent.prototype.DeleteSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(this.RealtimeService.getStreamURl());
        this.socket.emit('SubRemove', { subs: this.subscription });
        this.UnthreatedData = new Array();
    };
    RealtimeTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-realtime-transaction',
            template: __webpack_require__(/*! ./realtime-transaction.component.html */ "./src/app/realtime-transaction/realtime-transaction.component.html"),
            styles: [__webpack_require__(/*! ./realtime-transaction.component.css */ "./src/app/realtime-transaction/realtime-transaction.component.css")],
            providers: [_services_streamer_trade_streamer_service__WEBPACK_IMPORTED_MODULE_1__["TradeStreamerService"], _services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_5__["CurrencyService"]]
        }),
        __metadata("design:paramtypes", [_services_streamer_trade_streamer_service__WEBPACK_IMPORTED_MODULE_1__["TradeStreamerService"], _services_currency_currency_http_service_service__WEBPACK_IMPORTED_MODULE_5__["CurrencyService"]])
    ], RealtimeTransactionComponent);
    return RealtimeTransactionComponent;
}());



/***/ }),

/***/ "./src/app/topbar/topbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/topbar/topbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin:0;\r\n  padding:0;\r\n  size: 45px;\r\n}\r\nnav.navbar.navbar-inverse{\r\n  margin:0;\r\n  padding:0;\r\n}\r\nh1{\r\n  background-color: #303030;\r\n  margin: 0;\r\n  font-size: 45px;\r\n  text-align: center;\r\n  color: #ffffff;\r\n}\r\n.navbar-toggler-icon {\r\n  display: inline-block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  vertical-align: middle;\r\n  content: \"\";\r\n  background: no-repeat center center;\r\n  background-size: 100% 100%;\r\n}\r\n.navbar-toggler {\r\n  padding: .25rem .75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n}"

/***/ }),

/***/ "./src/app/topbar/topbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <h1>\n    {{title}}\n  </h1>\n\n  <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n    </div>\n      <div class=\"collapse navbar-collapse\" [collapse]=isCollapsed>\n          <ul class=\"nav navbar-nav\">\n              <li class=\"nav-item\"><a [routerLink]=\"['']\">Home</a></li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Informations\n                <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a [routerLink]=\"['blockchain']\">Blockchain</a></li>\n                  <li><a [routerLink]=\"['cryptocurrency']\">Cryptocurrency</a></li>\n                </ul>\n              </li>  \n          </ul>\n          <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item\"><a [routerLink]=\"['realtime']\">Realtime Transaction</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"nav-item\"><a [routerLink]=\"['aboutus']\">About us</a></li>\n          </ul>\n      </div>\n    </div>\n  </nav>\n</body>\n"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
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

var TopbarComponent = /** @class */ (function () {
    function TopbarComponent() {
        this.title = 'Cryptocurrency Simulator';
        this.isCollapsed = true;
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/topbar/topbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopbarComponent);
    return TopbarComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

/***/ "./src/services/currency/currency.http.service.service.ts":
/*!****************************************************************!*\
  !*** ./src/services/currency/currency.http.service.service.ts ***!
  \****************************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_class_clcryptocurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/class/clcryptocurrency */ "./src/app/class/clcryptocurrency.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CurrencyService = /** @class */ (function () {
    function CurrencyService(_http) {
        this._http = _http;
        //console.log(this.getAllgetAllCryptoCurrenciesParsed());
    }
    CurrencyService.FromDateToTimeStamp = function (mDate) {
        return Math.round(mDate.getTime() / 1000);
    };
    CurrencyService.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CurrencyService.prototype.getAllCryptoCurrencies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, Temp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = 'https://min-api.cryptocompare.com/data/all/coinlist';
                        return [4 /*yield*/, this._http.get(url).toPromise()];
                    case 1:
                        Temp = _a.sent();
                        return [2 /*return*/, Temp.json()];
                }
            });
        });
    };
    CurrencyService.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CurrencyService.prototype.getAllgetAllCryptoCurrenciesParsed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var AllCrypto, _a, baseURL, crypto_1, ActCrypto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        AllCrypto = new Array();
                        _a = this;
                        return [4 /*yield*/, this.getAllCryptoCurrencies()];
                    case 1:
                        _a.Json = _b.sent();
                        baseURL = this.Json['BaseLinkUrl'];
                        console.log(this.Json);
                        console.log(this.Json['Data']);
                        for (crypto_1 in this.Json['Data']) {
                            ActCrypto = new _app_class_clcryptocurrency__WEBPACK_IMPORTED_MODULE_2__["Clcryptocurrency"](this.Json['Data'][crypto_1]['Id'], this.Json['Data'][crypto_1]['Name'], this.Json['Data'][crypto_1]['Symbol'], baseURL + this.Json['Data'][crypto_1]['ImageUrl'], this.Json['Data'][crypto_1]['CoinName'], this.Json['Data'][crypto_1]['FullName'], this.Json['Data'][crypto_1]['IsTrading'], this.Json['Data'][crypto_1]['Algorithm'], this.Json['Data'][crypto_1]['ProofType'], this.Json['Data'][crypto_1]['FullyPremined'], this.Json['Data'][crypto_1]['TotalCoinSupply'], this.Json['Data'][crypto_1]['SortOrder']);
                            AllCrypto.push(ActCrypto);
                        }
                        return [2 /*return*/, AllCrypto];
                }
            });
        });
    };
    CurrencyService.prototype.getFavoriteCryptoId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var favoriteID;
            return __generator(this, function (_a) {
                favoriteID = new Array();
                console.log(this.Json['DefaultWatchlist']['CoinIs']);
                return [2 /*return*/, this.Json['DefaultWatchlist']['CoinIs'].split(",")];
            });
        });
    };
    CurrencyService.prototype.getCurrencyValue = function (CryptoName, Currency, TimeStamp) {
        return __awaiter(this, void 0, void 0, function () {
            var AppName, params, urlpricehistorical, Value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AppName = 'CryptoSimulator';
                        params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
                        params.append('fsym', CryptoName);
                        params.append('tsyms', Currency);
                        params.append('ts', TimeStamp.toString());
                        params.append('extraParams', AppName);
                        urlpricehistorical = 'https://min-api.cryptocompare.com/data/pricehistorical?';
                        return [4 /*yield*/, this.GetCryptoObsHTTP(params, urlpricehistorical)
                                .then(function (value) { return Value = value; })
                                .then(function () {
                                //console.log(Value);
                                //console.log(Value[CryptoName][Currency]);
                                return Value[CryptoName][Currency];
                            })
                                .catch(function (err) {
                                console.log(err);
                                return -1;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Value[CryptoName][Currency]];
                }
            });
        });
    };
    CurrencyService.prototype.GetValueFromDataJson = function (data, CryptoName, Currency) {
        return data[CryptoName][Currency];
    };
    CurrencyService.prototype.GetCryptoObsHTTP = function (params, URL) {
        return __awaiter(this, void 0, void 0, function () {
            var Temp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._http.get(URL, { params: params }).toPromise()];
                    case 1:
                        Temp = _a.sent();
                        return [2 /*return*/, Temp.json()];
                }
            });
        });
    };
    CurrencyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/services/streamer/trade-streamer.service.ts":
/*!*********************************************************!*\
  !*** ./src/services/streamer/trade-streamer.service.ts ***!
  \*********************************************************/
/*! exports provided: TradeStreamerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeStreamerService", function() { return TradeStreamerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_class_exchange_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/class/exchange-data */ "./src/app/class/exchange-data.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TradeStreamerService = /** @class */ (function () {
    function TradeStreamerService(_http) {
        var _this = this;
        this._http = _http;
        this.streamUrl = "https://streamer.cryptocompare.com/";
        this.subscription = new Array();
        this.getData = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('m', function (data) {
                    observer.next(data);
                });
            });
        };
        this.InitSocket = function () {
            _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_this.getStreamURl());
            _this.socket.emit('SubAdd', { subs: _this.subscription });
        };
        console.log("StartService");
    }
    TradeStreamerService.prototype.setCrypto = function (mTsym, mFsym) {
        this.tsym = mTsym;
        this.fsym = mFsym;
        this.URL = "https://min-api.cryptocompare.com/data/subs?fsym=" + mFsym + "&tsyms=" + mTsym;
    };
    TradeStreamerService.prototype.getSocketData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Temp, myJson, currentSubs, sub, tempEx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._http.get(this.URL).toPromise()];
                    case 1:
                        Temp = _a.sent();
                        myJson = Temp.json();
                        console.log(myJson);
                        console.log(this.tsym);
                        currentSubs = myJson[this.tsym]['TRADES'];
                        this.Exchange = new Array();
                        for (sub in currentSubs) {
                            tempEx = new _app_class_exchange_data__WEBPACK_IMPORTED_MODULE_3__["ExchangeData"]();
                            tempEx.name = currentSubs[sub].split('~')[1];
                            tempEx.price = 0;
                            tempEx.delta = 0;
                            this.Exchange.push(tempEx);
                            this.subscription.push(currentSubs[sub]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TradeStreamerService.prototype.getExchange = function () {
        return this.Exchange;
    };
    TradeStreamerService.prototype.getTrade = function () {
        if (this.Trade == undefined) {
            return new Array();
        }
        else {
            //console.log(this.Trade);
            return this.Trade;
        }
    };
    TradeStreamerService.prototype.getSubscription = function () {
        if (this.subscription == undefined) {
            return new Array();
        }
        else {
            console.log(this.subscription);
            return this.subscription;
        }
    };
    TradeStreamerService.prototype.getStreamURl = function () {
        return this.streamUrl;
    };
    TradeStreamerService.prototype.DeleteSocket = function () {
        this.socket.emit('SubRemove', { subs: this.subscription });
    };
    TradeStreamerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TradeStreamerService);
    return TradeStreamerService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aurélien\Google Drive\Project\Website Bitcoins\Angular4Final\cryptocurrencienssimulator\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map