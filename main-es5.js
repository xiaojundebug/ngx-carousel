function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./dist/ngx-carousel/fesm2015/ciri-ngx-carousel.js":
  /*!*********************************************************!*\
    !*** ./dist/ngx-carousel/fesm2015/ciri-ngx-carousel.js ***!
    \*********************************************************/

  /*! exports provided: CarouselComponent, CarouselItemComponent, CarouselModule, LazyRenderDirective, ɵa */

  /***/
  function distNgxCarouselFesm2015CiriNgxCarouselJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function () {
      return CarouselItemComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
      return CarouselModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyRenderDirective", function () {
      return LazyRenderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return HammerConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs_internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/scheduler/animationFrame */
    "./node_modules/rxjs/internal/scheduler/animationFrame.js");
    /* harmony import */


    var rxjs_internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lazy-render.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var LazyRenderDirective =
    /**
     * @param {?} content
     */
    function LazyRenderDirective(content) {
      _classCallCheck(this, LazyRenderDirective);

      this.content = content;
    };

    LazyRenderDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[lazyRender]'
      }]
    }];
    /** @nocollapse */

    LazyRenderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/carousel-item/carousel-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CarouselItemComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elRef
       * @param {?} parent
       * @param {?} sanitizer
       */
      function CarouselItemComponent(elRef, parent, sanitizer) {
        _classCallCheck(this, CarouselItemComponent);

        this.elRef = elRef;
        this.parent = parent;
        this.sanitizer = sanitizer;
        this.rendered = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(CarouselItemComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this.parent.active$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.destroy$)).subscribe(
            /**
            * @param {?} res
            * @return {?}
            */
            function (res) {
              _this.rendered = _this.rendered || _this.index === res;
            });
          }, 0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "style",
        get: function get() {
          var width = this.parent.width;
          return this.sanitizer.bypassSecurityTrustStyle("\n      width: ".concat(width, "px;\n    "));
        }
        /**
         * @return {?}
         */

      }, {
        key: "isLazyRender",
        get: function get() {
          return !!this.lazyContent;
        }
      }]);

      return CarouselItemComponent;
    }();

    CarouselItemComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngx-carousel-item',
        template: "<ng-container *ngIf=\"!isLazyRender || rendered\">\n  <ng-template [ngTemplateOutlet]=\"lazyContent && lazyContent.content\"></ng-template>\n  <ng-content></ng-content>\n</ng-container>\n",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          '[class.ngx-carousel__item]': "true"
        },
        styles: [".ngx-carousel__item{display:inline-block;vertical-align:top}.ngx-carousel__item.pre-mirror-node{position:absolute;left:0;transform:translateX(-100%)}.ngx-carousel__item.post-mirror-node{position:absolute;right:0;transform:translateX(100%)}"]
      }]
    }];
    /** @nocollapse */

    CarouselItemComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: CarouselComponent
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    CarouselItemComponent.propDecorators = {
      lazyContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [LazyRenderDirective, {
          "static": false
        }]
      }],
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */


    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/carousel/carousel.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CarouselComponent = /*#__PURE__*/function () {
      // 后镜像节点

      /**
       * @param {?} render
       * @param {?} hostElRef
       * @param {?} cdr
       */
      function CarouselComponent(render, hostElRef, cdr) {
        _classCallCheck(this, CarouselComponent);

        this.render = render;
        this.hostElRef = hostElRef;
        this.cdr = cdr;
        /**
         * 是否开启无缝模式
         */

        this.loop = false;
        /**
         * 切换速度（ms）
         */

        this.speed = 300;
        /**
         * 自动轮播时间间隔，0 代表关闭自动轮播
         */

        this.autoplay = 0;
        /**
         * 是否跟随手指滑动
         */

        this.followFinger = true;
        /**
         * 是否允许手动滑动，设为 false 代表只能通过 api 翻页
         */

        this.allowTouchMove = true;
        /**
         * 默认激活项
         */

        this.initialIndex = 0;
        /**
         * 索引变动时触发
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.active$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.percent = 0; // 手指滑动距离所占宽度总和百分比
        // 手指滑动距离所占宽度总和百分比

        this.offset = 0; // 偏移量（%）
        // 偏移量（%）

        this.animating = false; // 是否处于过渡效果中
      }
      /**
       * @return {?}
       */


      _createClass(CarouselComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.active$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return v !== null && v >= 0 && v <= _this2.count - 1;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1)).subscribe(
          /**
          * @param {?} res
          * @return {?}
          */
          function (res) {
            _this2.change.emit(res);
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(60, rxjs_internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_3__["animationFrame"])).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this2.resize();
          });
          this.items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(60, rxjs_internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_3__["animationFrame"])).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this2.init();
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onPanStart",
        value: function onPanStart(e) {
          this.stopAutoplay();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onPanMove",
        value: function onPanMove(e) {
          if (!this.canMove) {
            return;
          }
          /** @type {?} */


          var deltaX = this.getSafeDeltaX(e.deltaX);
          this.percent = 100 / this.count * deltaX / this.width;

          if (this.followFinger) {
            /** @type {?} */
            var offset = this.percent - 100 / this.count * this.active$.value;
            this.move(offset, true);
          }
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onPanEnd",
        value: function onPanEnd(e) {
          if (!this.canMove) {
            return;
          } // 轻拂或者滑动距离大于等于一个节点宽度的 50% 才进行跳转

          /** @type {?} */


          var newActive = this.active$.value;
          /** @type {?} */

          var isSwipeLeft = e.direction === Hammer.DIRECTION_LEFT && e.velocityX < -0.3;
          /** @type {?} */

          var isSwipeRight = e.direction === Hammer.DIRECTION_RIGHT && e.velocityX > 0.3;

          if (isSwipeLeft || this.percent <= -50 / this.count) {
            newActive++;
          } else if (isSwipeRight || this.percent >= 50 / this.count) {
            newActive--;
          }

          this.goTo(newActive);
          this.startAutoplay();
        }
        /**
         * 跳转到某一项
         * @param {?=} target 目标索引
         * @param {?=} immediate 跳转时是否不显示动画
         * @return {?}
         */

      }, {
        key: "goTo",
        value: function goTo() {
          var _this3 = this;

          var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (this.animating) {
            return;
          }
          /** @type {?} */


          var active = this.getSafeActive(target);
          /** @type {?} */

          var realActive = this.getRealActive(active);
          this.active$.next(realActive); // 到达第一个或最后一个时更新镜像节点

          if (this.loop && (realActive === 0 || realActive === this.count - 1)) {
            this.handleMirrorNodes();
          }

          this.animating = true;
          this.move(-(100 / this.count) * active, immediate).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this3.animating = false;

            if (active === -1 || active === _this3.count) {
              _this3.goTo(realActive, true);
            }
          });
        }
        /**
         * 切换到上一个
         * @return {?}
         */

      }, {
        key: "prev",
        value: function prev() {
          this.goTo(this.active$.value - 1);
        }
        /**
         * 切换到下一个
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          this.goTo(this.active$.value + 1);
        }
        /**
         * 重新计算更新组件
         * @return {?}
         */

      }, {
        key: "resize",
        value: function resize() {
          this.cdr.detectChanges();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this4 = this;

          if (this.items.length === 0) {
            return;
          }

          this.items.forEach(
          /**
          * @param {?} el
          * @param {?} index
          * @return {?}
          */
          function (el, index) {
            return el.index = index;
          });

          if (this.loop) {
            this.handleMirrorNodes();
          }

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this4.goTo(_this4.getSafeActive(_this4.initialIndex, true), true);
          }, 0);
          this.startAutoplay();
        }
        /**
         * @private
         * @param {?} deltaX
         * @return {?}
         */

      }, {
        key: "getSafeDeltaX",
        value: function getSafeDeltaX(deltaX) {
          return clamp(deltaX, -this.width, this.width);
        }
        /**
         * @private
         * @param {?} active
         * @param {?=} strict
         * @return {?}
         */

      }, {
        key: "getSafeActive",
        value: function getSafeActive(active) {
          var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          /** @type {?} */
          var min = this.loop && !strict ? -1 : 0;
          /** @type {?} */

          var max = this.loop && !strict ? this.count : this.count - 1;
          return clamp(active, min, max);
        } // 计算真实索引
        // 由于 loop 模式下拷贝了俩节点，所以 active 有误差
        // 假设有三个节点，那么 active 非 loop 模式下为 0 ～ 2，loop 模式下为 -1 ～ 3

        /**
         * @private
         * @param {?} active
         * @return {?}
         */

      }, {
        key: "getRealActive",
        value: function getRealActive(active) {
          return (active + this.count) % this.count;
        } // loop 模式下首尾拷贝一个节点，模拟无缝轮播
        // 0 1 2 => 2 0 1 2 0
        // TODO: 也许能找到一个不用手动复制 dom，并且可以自动更新内容的方式

        /**
         * @private
         * @return {?}
         */

      }, {
        key: "handleMirrorNodes",
        value: function handleMirrorNodes() {
          /** @type {?} */
          var trackEl = this.track.nativeElement // 清理镜像节点
          ; // 清理镜像节点

          try {
            this.render.removeChild(trackEl, this.preMirrorNode);
            this.render.removeChild(trackEl, this.postMirrorNode);
          } catch (e) {}

          var _this$items = this.items,
              first = _this$items.first,
              last = _this$items.last;
          this.preMirrorNode = last.elRef.nativeElement.cloneNode(true);
          this.postMirrorNode = first.elRef.nativeElement.cloneNode(true);
          this.render.addClass(this.preMirrorNode, 'pre-mirror-node');
          this.render.addClass(this.postMirrorNode, 'post-mirror-node');
          this.render.insertBefore(trackEl, this.preMirrorNode, first.elRef.nativeElement);
          this.render.appendChild(trackEl, this.postMirrorNode);
        }
        /**
         * @private
         * @param {?} offset
         * @param {?=} immediate
         * @return {?}
         */

      }, {
        key: "move",
        value: function move(offset) {
          var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          /** @type {?} */
          var el = this.track.nativeElement;
          /** @type {?} */

          var oldOffset = this.offset;
          /** @type {?} */

          var newOffset = this.offset = offset;
          this.render.setStyle(el, 'transition', immediate ? 'none' : "transform ".concat(this.speed, "ms"));
          this.render.setStyle(el, 'transform', "translate3d(".concat(offset, "%, 0, 0)"));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(immediate || newOffset === oldOffset ? 0 : this.speed).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$));
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "startAutoplay",
        value: function startAutoplay() {
          var _this5 = this;

          if (!this.autoplay || this.count <= 1) {
            return;
          }

          this.stopAutoplay();
          this.intervalSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(this.autoplay + this.speed).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var oldActive = _this5.active$.value;
            /** @type {?} */

            var newActive = _this5.loop ? oldActive + 1 : _this5.getRealActive(oldActive + 1);

            _this5.goTo(newActive);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "stopAutoplay",
        value: function stopAutoplay() {
          this.intervalSub && this.intervalSub.unsubscribe();
        }
      }, {
        key: "count",
        get: function get() {
          return this.items.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "width",
        get: function get() {
          return this.hostElRef.nativeElement.offsetWidth;
        }
        /**
         * @return {?}
         */

      }, {
        key: "canMove",
        get: function get() {
          return this.allowTouchMove && !this.animating;
        }
        /**
         * @return {?}
         */

      }, {
        key: "data",
        get: function get() {
          return {
            active: this.active$.value,
            count: this.count,
            offset: this.offset,
            animating: this.animating
          };
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngx-carousel',
        template: "<div\n  class=\"ngx-carousel__track\"\n  #track\n  (dragstart)=\"$event.preventDefault()\"\n  (panstart)=\"onPanStart($event)\"\n  (panmove)=\"onPanMove($event)\"\n  (panend)=\"onPanEnd($event)\"\n  (pancancel)=\"onPanEnd($event)\"\n>\n  <ng-content></ng-content>\n</div>\n\n<div class=\"ngx-carousel__indicator\" *ngIf=\"!indicator\">\n  <div\n    *ngFor=\"let item of items; let i = index\"\n    [class.active]=\"i === (active$ | async)\"\n  ></div>\n</div>\n\n<ng-container *ngTemplateOutlet=\"indicator; context: { $implicit: data }\"></ng-container>\n",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          '[class.ngx-carousel]': "true"
        },
        styles: [".ngx-carousel{position:relative;display:block;overflow:hidden}.ngx-carousel__track{position:relative;display:inline-block;white-space:nowrap}.ngx-carousel__indicator{position:absolute;bottom:10px;width:100%;text-align:center;white-space:nowrap;font-size:0;pointer-events:none}.ngx-carousel__indicator div{display:inline-block;width:6px;height:6px;margin:0 3px;border-radius:50%;background:rgba(0,0,0,.25);pointer-events:auto}.ngx-carousel__indicator div.active{background:rgba(0,0,0,.75)}"]
      }]
    }];
    /** @nocollapse */

    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    CarouselComponent.propDecorators = {
      loop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      speed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoplay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      followFinger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      allowTouchMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      indicator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initialIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      track: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['track', {
          "static": false
        }]
      }],
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [CarouselItemComponent]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/hammer.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HammerConfig = /*#__PURE__*/function (_angular_platform_bro) {
      _inherits(HammerConfig, _angular_platform_bro);

      var _super = _createSuper(HammerConfig);

      function HammerConfig() {
        _classCallCheck(this, HammerConfig);

        return _super.apply(this, arguments);
      }

      _createClass(HammerConfig, [{
        key: "buildHammer",

        /**
         * @param {?} element
         * @return {?}
         */
        value: function buildHammer(element) {
          /** @type {?} */
          var mc = new Hammer(element, {
            inputClass: Hammer.TouchMouseInput
          });
          return mc;
        }
      }]);

      return HammerConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HammerGestureConfig"]);
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/carousel.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CarouselModule = function CarouselModule() {
      _classCallCheck(this, CarouselModule);
    };

    CarouselModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [CarouselComponent, CarouselItemComponent, LazyRenderDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [CarouselComponent, CarouselItemComponent, LazyRenderDirective],
        providers: [{
          provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HAMMER_GESTURE_CONFIG"],
          useClass: HammerConfig
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ciri-ngx-carousel.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ciri-ngx-carousel.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Basic Usage</h3>\n<ngx-carousel [loop]=\"true\">\n  <ngx-carousel-item>\n    <div class=\"demo-content\" style=\"background: #FAF9D6\">1</div>\n  </ngx-carousel-item>\n\n  <ngx-carousel-item>\n    <div class=\"demo-content\" style=\"background: #F4B9C1\">2</div>\n  </ngx-carousel-item>\n\n  <ngx-carousel-item>\n    <div class=\"demo-content\" style=\"background: #96CDF6\">3</div>\n  </ngx-carousel-item>\n</ngx-carousel>\n\n<h3>Custom Indicator</h3>\n<ngx-carousel #carousel [indicator]=\"indicator\" [loop]=\"true\" [autoplay]=\"3000\">\n  <ngx-carousel-item>\n    <div class=\"demo-content\" style=\"background: #FAF9D6\">1</div>\n  </ngx-carousel-item>\n\n  <ngx-carousel-item>\n    <div class=\"demo-content\" style=\"background: #F4B9C1\">2</div>\n  </ngx-carousel-item>\n\n  <ngx-carousel-item>\n    <div class=\"demo-content\" style=\"background: #96CDF6\">3</div>\n  </ngx-carousel-item>\n\n  <ng-template #indicator let-data>\n    <div style=\"position: absolute; bottom: 0; right: 0; padding: 0 10px; background: rgba(0, 0, 0, 0.3); color: #fff;\">\n      {{ data.active + 1 }} / {{ data.count }}\n    </div>\n  </ng-template>\n</ngx-carousel>\n{{ carousel.data | json }}\n\n<h3>Lazy Render</h3>\n<ngx-carousel [loop]=\"true\">\n  <ngx-carousel-item>\n    <div class=\"demo-content\" style=\"background: #FAF9D6\">I'm not lazy</div>\n  </ngx-carousel-item>\n\n  <ngx-carousel-item>\n    <ng-template lazyRender>\n      <div class=\"demo-content\" style=\"background: #F4B9C1\">I'm lazy</div>\n    </ng-template>\n  </ngx-carousel-item>\n\n  <ngx-carousel-item>\n    <ng-template lazyRender>\n      <div class=\"demo-content\" style=\"background: #96CDF6\">I'm lazy</div>\n    </ng-template>\n  </ngx-carousel-item>\n</ngx-carousel>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.less":
  /*!************************************!*\
    !*** ./src/app/app.component.less ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".demo-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50vw;\n  font-size: 26px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC94aWFvanVuMTk5NC9uZ3gtY2Fyb3VzZWwvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHZ3O1xuICBmb250LXNpemU6IDI2cHg7XG59XG4iLCIuZGVtby1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNTB2dztcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ngx-carousel-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.less */
      "./src/app/app.component.less"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ciri_ngx_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ciri/ngx-carousel */
    "./dist/ngx-carousel/fesm2015/ciri-ngx-carousel.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ciri_ngx_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/xiaojun1994/ngx-carousel/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map