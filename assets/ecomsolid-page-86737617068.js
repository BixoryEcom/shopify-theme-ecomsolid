
  
/*
  You SHOULD NOT modify source code in this page because
  It is automatically generated from EcomSolid
  Try to edit page with the live editor.
  https://ecomsolid.com
*/

(function(jQuery, $) {
  
      try {
        const funcLib14 = function() {
          "use strict";

(function (jQuery) {
  var gtParallax = function (element, options) {
    // Khai bao cac tham so mac dinh trong biet *default*
    var defaults = {
      classBackgroundImage: null,
    };

    this.settings = {};
    var $element = jQuery(element);
    var _this = this;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);
      // Init parallax no transtion
      _this.refreshDrag();

      // Event scroll
      _this.parallaxIt();
    };
    this.parallaxIt = function () {
      var $fwindow = jQuery(window);
      var yPos = 0;
      var xPos = "50%";

      $fwindow.on("scroll.gtparallax resize.gtparallax", function () {
        _this.calcBackground(xPos, yPos);
      });
      jQuery("body").on("scroll.gtparallax resize.gtparallax", function () {
        _this.calcBackground(xPos, yPos);
      });
    };

    this.refreshDrag = function () {
      var yPos = 0;
      var xPos = "50%";

      _this.calcBackground(xPos, yPos);
    };

    this.calcBackground = function (xPos, yPos) {
      var $fwindow = jQuery(window);
      var $image = $element.find(_this.settings.classBackgroundImage);
      var speed = _this.settings.speed || 0.2;

      if ($fwindow.width() >= 992 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (speed == 1) {
          $image.css({
            backgroundPosition: xPos + " " + yPos + "vh",
            "background-attachment": "fixed",
            "-webkit-backface-visibility": "hidden",
            transition: "all 0.15s",
          });
        } else {
          $image.css({
            backgroundPosition: xPos + " " + yPos + "vh",
            "background-attachment": "fixed",
            "-webkit-backface-visibility": "hidden",
            transition: "all 0.15s",
          });
        }
      }
    };
    this.init();
  };

  jQuery.fn.gtParallax = function (options) {
    return this.each(function () {
      var plugin = new gtParallax(this, options);

      jQuery(this).data("gtparallax", plugin);
    });
  };
})(jQuery);

        }
        funcLib14();
      } catch(e) {
        console.error("Error lib id: 14" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib115 = function() {
          (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GtAnimationsV2
 * Animation cho accordion (slideUp, slideDown)
 */
var GtAnimationsV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params setting cua lib
     */
    function GtAnimationsV2(params) {
        this.$element = $(params.$element);
        this.settings = __assign(__assign({}, this.settings), params.settings);
        this.init();
    }
    /**
     * slideUp
     * @param callback callback when transition end
     */
    GtAnimationsV2.prototype.slideUp = function (callback) {
        var _this = this;
        this.$element.css({
            "max-height": this.getMaxHeight(),
        });
        this.$element
            .off("webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd")
            .on("webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd", function () {
            callback && callback();
            _this.$element.css({
                padding: "",
                margin: "",
                transition: "",
            });
        });
        setTimeout(function () {
            _this.$element.css({
                "max-height": "0px",
                padding: "0px",
                margin: "0px",
                transition: "all " + _this.settings.duration + "s",
            });
        }, 5);
    };
    /**
     * slideDown
     * @param callback callback when transition end
     */
    GtAnimationsV2.prototype.slideDown = function (callback) {
        var _this = this;
        var maxHeight = this.getMaxHeight();
        this.$element.css({
            "max-height": "0px",
            padding: "0px",
            margin: "0px",
        });
        this.$element
            .off("webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd")
            .on("webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd", function () {
            callback && callback();
            _this.$element.css({
                transition: "",
            });
        });
        setTimeout(function () {
            _this.$element.css({
                "max-height": maxHeight,
                padding: "",
                margin: "",
                transition: "all " + _this.settings.duration + "s",
            });
        }, 5);
    };
    /**
     * init: function init when call libs
     */
    GtAnimationsV2.prototype.init = function () {
        // add transition
        if (this.$element && this.$element.length) {
            this.$element.css({
                overflow: "hidden",
            });
        }
    };
    /**
     * getMaxHeight get max height of element
     * @returns maxheight
     */
    GtAnimationsV2.prototype.getMaxHeight = function () {
        return "calc(" + this.$element.get(0).scrollHeight + "px + " + this.$element.css("margin-top") + " + " + this.$element.css("margin-bottom") + " + " + this.$element.css("padding-top") + " + " + this.$element.css("padding-bottom") + ")";
    };
    return GtAnimationsV2;
}());
/**
 * GtAnimationsV2
 * @param params setting cua lib
 * @returns lib
 */
window.SOLID.library.gtAnimationsV2 = function (params) {
    return new GtAnimationsV2(params);
};
exports.default = {};


/***/ })

/******/ });
});
        }
        funcLib115();
      } catch(e) {
        console.error("Error lib id: 115" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESSectionc6eORCoQliUM0St = function() {
          (function() {
  var elementClassName = ".gt_section-c6eORCoQliUM0St";
  var id = "c6eORCoQliUM0St";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    /* store get state block script */
    /* methods block script */
    function nextCheckout(e) {
      var $gtConditions1 = $element.find(".gt_terms-1");
      if (
        ($gtConditions1 && $gtConditions1.length)
      ) {
        var $input1 = $gtConditions1.find("input");
        if (
          ($input1 && $input1.length && !$input1.is(":checked"))
        ) {
          e.preventDefault();
          $gtConditions1.addClass("gt_active");
          setTimeout(function() {
            $gtConditions1.removeClass("gt_active");

          }, 1000);
          return false;
        }
      }
    }

    function scrollToTerms(e) {
      var $gtConditions1 = $element.find(".gt_terms-1");

      if ($gtConditions1 && $gtConditions1.length) {
        var $input1 = $gtConditions1.find("input");
        if ($input1 && $input1.length && !$input1.is(":checked")) {
          e.preventDefault();
          const top = $gtConditions1.offset().top - $(window).height() / 2;
          $("html, body").animate({
            scrollTop: top
          }, 300);
          return false;
        }
      }

    }
    /* init block script */
    /* store subscribe block script */
    /* events block script */
    var $elements_1 = $element.find(".gt_button-checkout");
    $elements_1.off("click").on("click", nextCheckout);
    var $elements_2 = $element.find(".gt_button--sticky");
    $elements_2.off("click.scroll").on("click.scroll", scrollToTerms);
    /* destroy block script */
    
  }
  /* run all script */
  function main() {
    for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
      var $target = $($elements[indexEl]);
      script($target, indexEl);
    }
  }
  main();
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESSectionc6eORCoQliUM0St()
      } catch(e) {
        console.error("Error ESSection Id: c6eORCoQliUM0St" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_contact = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_contact";
  var id = "c6eORCoQliUM0St_contact";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_contact",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_contact()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_contact" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_columnContent = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_columnContent";
  var id = "c6eORCoQliUM0St_columnContent";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_columnContent",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_columnContent()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_columnContent" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_contentMessage = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_contentMessage";
  var id = "c6eORCoQliUM0St_contentMessage";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "c6eORCoQliUM0St_contentMessage",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "c6eORCoQliUM0St_contentMessage",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_contentMessage()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_contentMessage" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_contentHeading = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_contentHeading";
  var id = "c6eORCoQliUM0St_contentHeading";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "c6eORCoQliUM0St_contentHeading",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "c6eORCoQliUM0St_contentHeading",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_contentHeading()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_contentHeading" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_contentMessageVariant = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_contentMessageVariant";
  var id = "c6eORCoQliUM0St_contentMessageVariant";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "c6eORCoQliUM0St_contentMessageVariant",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "c6eORCoQliUM0St_contentMessageVariant",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_contentMessageVariant()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_contentMessageVariant" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_boxContact = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_boxContact";
  var id = "c6eORCoQliUM0St_boxContact";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_boxContact",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_boxContact()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_boxContact" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_boxInfoContact_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_boxInfoContact_0";
  var id = "c6eORCoQliUM0St_boxInfoContact_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_boxInfoContact_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_boxInfoContact_0()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_boxInfoContact_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_iconInfoContact_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_iconInfoContact_0";
  var id = "c6eORCoQliUM0St_iconInfoContact_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_iconInfoContact_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_iconInfoContact_0()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_iconInfoContact_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_textInfoContact_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_textInfoContact_0";
  var id = "c6eORCoQliUM0St_textInfoContact_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "c6eORCoQliUM0St_textInfoContact_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "c6eORCoQliUM0St_textInfoContact_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_textInfoContact_0()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_textInfoContact_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_boxInfoContact_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_boxInfoContact_1";
  var id = "c6eORCoQliUM0St_boxInfoContact_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_boxInfoContact_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_boxInfoContact_1()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_boxInfoContact_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_iconInfoContact_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_iconInfoContact_1";
  var id = "c6eORCoQliUM0St_iconInfoContact_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_iconInfoContact_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_iconInfoContact_1()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_iconInfoContact_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_textInfoContact_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_textInfoContact_1";
  var id = "c6eORCoQliUM0St_textInfoContact_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "c6eORCoQliUM0St_textInfoContact_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "c6eORCoQliUM0St_textInfoContact_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_textInfoContact_1()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_textInfoContact_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_columnFormCustomer = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_columnFormCustomer";
  var id = "c6eORCoQliUM0St_columnFormCustomer";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_columnFormCustomer",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_columnFormCustomer()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_columnFormCustomer" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_boxFormCustomer = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_boxFormCustomer";
  var id = "c6eORCoQliUM0St_boxFormCustomer";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_boxFormCustomer",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_boxFormCustomer()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_boxFormCustomer" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_titleCustomer = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_titleCustomer";
  var id = "c6eORCoQliUM0St_titleCustomer";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "c6eORCoQliUM0St_titleCustomer",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "c6eORCoQliUM0St_titleCustomer",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_titleCustomer()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_titleCustomer" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_formCustomer = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_formCustomer";
  var id = "c6eORCoQliUM0St_formCustomer";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var scrollIntoViewActive = "false" == "true";
    var animationActive = "false" == "true";
    var animationHoverActive = "false" == "true";
    var scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var mode = "production";
    // warning text 
    var nameWarning = "Please fill out your name.";
    var emailWarning = "Please fill out your email.";
    var emailFormatWarning = "Email should end with this format &#34;@abc.xyz&#34;.";
    var phoneWarning = "Please fill out your phone.";
    var phoneFormatWarning = "Phone number does not include characters.";
    var messageWarning = "Please fill out your message.";
    // dom 
    var $nameInput = $element.find("input[name='contact[name]']");
    var $emailInput = $element.find("input[name='contact[email]']");
    var $phoneInput = $element.find("input[name='contact[phone]']");
    var $messageInput = $element.find("textarea[name='contact[body]']");
    var $form = $element.closest("form");
    var $buttonSubmit = $form.find("button[type!='button']");
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "c6eORCoQliUM0St_formCustomer",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }

        if (scrollIntoViewActive) {
          settingsBlock.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function validateEmail(mail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    function addEventSubmitForm() {
      if (mode === "dev") {
        return;
      }
      $buttonSubmit.off("click").on("click", onSubmit);
    }

    function onSubmit(e) {
      if ($form && $form.length && !$form[0].checkValidity()) {
        $element.find(".gt_warning-input").removeClass("gt_active");
        e.preventDefault();
        var $inputs = $element.find("textarea, input[type!='button']");
        //checkinputrequired
        for (var i = 0; i < $inputs.length; i++) {
          var $input = $($inputs[i]);
          if ($input.prop("required") && !$input.val()) {
            var $warningText = $input.parent().siblings(".gt_warning-input");
            var inputName = $input.attr("name");
            $warningText.html(getWarningMessage(inputName));
            $warningText.addClass("gt_active")
          }
        }
        //checkinputformat
        if (!($emailInput.prop("required") && !$emailInput.val()) && $emailInput.val() && !validateEmail($emailInput.val())) {
          var $warningText = $element.find(".gt_inputEmail .gt_warning-input");
          $warningText.html(emailFormatWarning);
          $warningText.addClass("gt_active");
        }
      }
    }

    function getWarningMessage(inputName) {
      const splits = inputName.match(/contact\[(.+)\]/);
      if (splits && splits.length > 1) {
        const name = splits[1];
        switch (name) {
          case "name": {
            return nameWarning;
          }
          case "email": {
            return emailWarning;
          }
          case "phone": {
            return phoneWarning;
          }
          case "body": {
            return messageWarning;
          }
          default: {
            return "Please fill out this field.";
          }
        }
      }
      return "Please fill out this field.";
    }

    function onInputName() {
      if (mode === "dev") {
        return;
      }
      var $warningInput = $element.find(".gt_inputName .gt_warning-input");
      if ($nameInput.val()) {
        $warningInput.removeClass("gt_active");
      } else {
        $warningInput.addClass("gt_active");
      }
    }

    function onInputEmail() {
      if (mode === "dev") {
        return;
      }
      var $warningInput = $element.find(".gt_inputEmail .gt_warning-input");
      if ($emailInput.val()) {
        $warningInput.removeClass("gt_active");
      } else if ($emailInput.prop("required")) {
        $warningInput.html(emailWarning);
        $warningInput.addClass("gt_active");
      }
    }

    function onBlurEmail() {
      if (mode === "dev") {
        return;
      }
      var $warningInput = $element.find(".gt_inputEmail .gt_warning-input");
      if ($emailInput.val() && !validateEmail($emailInput.val())) {
        $warningInput.html(emailFormatWarning);
        $warningInput.addClass("gt_active");
      }
    }

    function onInputPhone() {
      if (mode === "dev") {
        return;
      }
      var $warningInput = $element.find(".gt_inputPhoneNumber .gt_warning-input");
      var cachePhoneNumber = $phoneInput.val();
      var isWarningFormat = /[^0-9+()]/.test(cachePhoneNumber);
      var newValue = cachePhoneNumber.replace(/[^0-9+()]/g, '');
      $phoneInput.val(newValue)
      if (isWarningFormat) {
        $warningInput.html(phoneFormatWarning);
        $warningInput.addClass("gt_active");
      } else if ($phoneInput.val()) {
        $warningInput.removeClass("gt_active");
      } else if ($phoneInput.prop("required")) {
        $warningInput.html(phoneWarning);
        $warningInput.addClass("gt_active");
      }
    }

    function onInputMessage() {
      if (mode === "dev") {
        return;
      }
      var $warningInput = $element.find(".gt_inputMessage .gt_warning-input");
      if ($messageInput.val()) {
        $warningInput.removeClass("gt_active");
      } else if ($messageInput.prop("required")) {
        $warningInput.html(messageWarning);
        $warningInput.addClass("gt_active");
      }
    }
    /* init block script */
    addInteraction();
    addEventSubmitForm();
    /* store subscribe block script */
    /* events block script */
    var $elements_1 = $element.find("input[name='contact[name]']");
    $elements_1.off("input").on("input", onInputName);
    var $elements_2 = $element.find("input[name='contact[email]']");
    $elements_2.off("input").on("input", onInputEmail);
    $elements_2.off("blur").on("blur", onBlurEmail);
    var $elements_3 = $element.find("input[name='contact[phone]']");
    $elements_3.off("input").on("input", onInputPhone);
    var $elements_4 = $element.find("textarea[name='contact[body]']");
    $elements_4.off("input").on("input", onInputMessage);
    /* destroy block script */
    
  }
  /* run all script */
  function main() {
    for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
      var $target = $($elements[indexEl]);
      script($target, indexEl);
    }
  }
  main();
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_formCustomer()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_formCustomer" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_boxSubmit = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_boxSubmit";
  var id = "c6eORCoQliUM0St_boxSubmit";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_boxSubmit",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_boxSubmit()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_boxSubmit" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_buttonSubmitContact = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_buttonSubmitContact";
  var id = "c6eORCoQliUM0St_buttonSubmitContact";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const isProduction = "production" === "production";
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_buttonSubmitContact",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_buttonSubmitContact()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_buttonSubmitContact" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_checkBox = function() {
          
        }
        funcESAtomc6eORCoQliUM0St_checkBox()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_checkBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_boxSuccess = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_boxSuccess";
  var id = "c6eORCoQliUM0St_boxSuccess";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_boxSuccess",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_boxSuccess()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_boxSuccess" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_iconTick = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_iconTick";
  var id = "c6eORCoQliUM0St_iconTick";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "c6eORCoQliUM0St_iconTick",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_iconTick()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_iconTick" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomc6eORCoQliUM0St_successMessage = function() {
          (function() {
  var elementClassName = ".gt_atom-c6eORCoQliUM0St_successMessage";
  var id = "c6eORCoQliUM0St_successMessage";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "c6eORCoQliUM0St_successMessage",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "c6eORCoQliUM0St_successMessage",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomc6eORCoQliUM0St_successMessage()
      } catch(e) {
        console.error("Error ESAtom Id: c6eORCoQliUM0St_successMessage" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESSectionYouYWAMen1OHmxt = function() {
          (function() {
  var elementClassName = ".gt_section-YouYWAMen1OHmxt";
  var id = "YouYWAMen1OHmxt";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    /* store get state block script */
    /* methods block script */
    function triggerRenderAtom() {
      $element.find(".gt_faq--question").off("click").on("click", faqAccordion);
    }

    function tabAccordion() {
      if (!$(this).hasClass("gt_active-nav")) {
        var tabNum = $(this).index();
        var nthChild = tabNum + 1;
        /*Activenavtabs*/
        $element
          .find(".gt_tab-title .gt_box__item--title.gt_active-nav")
          .removeClass("gt_active-nav");
        $(this).addClass("gt_active-nav");

        /*Activetab-contentitem*/
        $element
          .find(".gt_tab-content .gt_box__item--content.gt_active-content")
          .removeClass("gt_active-content");
        $element
          .find(
            ".gt_tab-content .gt_box__item--content:nth-child(" + nthChild + ")"
          )
          .addClass("gt_active-content");
      }
    }

    function faqAccordion() {
      var $itemThis = $(this);
      var $subFaq = $itemThis.siblings();
      if ($subFaq.length > 0) {
        var time = 0.3;
        if ($itemThis.hasClass("gt_active")) {
          var animationIns = window.SOLID.library.gtAnimationsV2({
            $element: $subFaq[0],
            settings: {
              duration: time,
            },
          });
          animationIns.slideUp(function() {
            $itemThis.removeClass("gt_active");
            $subFaq.removeClass("gt_active-ans");
          });
        } else {
          var $itemActive = $element.find(
            ".gt_active-content .gt_faq--question.gt_active"
          );
          if ($itemActive && $itemActive.length) {
            for (let i = 0; i < $itemActive.length; i++) {
              var $faqAnswersActive = $($itemActive[i]).siblings();
              var animationInsOther = window.SOLID.library.gtAnimationsV2({
                $element: $faqAnswersActive[0],
                settings: {
                  duration: time,
                },
              });
              animationInsOther.slideUp(function() {
                $($itemActive[i]).removeClass("gt_active");
                $faqAnswersActive.removeClass("gt_active-ans");
              });
            }
          }
          $itemThis.addClass("gt_active");
          $subFaq.addClass("gt_active-ans");
          var animationInsActive = window.SOLID.library.gtAnimationsV2({
            $element: $subFaq[0],
            settings: {
              duration: time,
            },
          });
          animationInsActive.slideDown();
        }
      }
    }
    /* init block script */
    var $tabTitle = $element.find(".gt_tab-title");
    var $boxItemTitle = $element.find(".gt_tab-title .gt_box__item--title");
    var $boxItemContent = $element.find(
      ".gt_tab-content .gt_box__item--content"
    );
    var $faqItem = $element.find(".gt_faq--list .gt_faq--item");
    var $resultFailed = $element.find(".gt_result-failed");
    var $keySearch = $element.find(".gt_key-search");
    //SearchContent
    $element.find(".gt_input-txt").on("keyup", function() {

      //Getsearchtext
      var searchText = $(this).val().trim();
      if (!searchText) {
        $faqItem.removeClass("gt_hide-result");
        $faqItem.find(".gt_txt-highlight").removeClass("gt_txt-highlight");
        $boxItemTitle.removeClass("gt_after-search");
        $boxItemContent.removeClass("gt_after-search");
        return;
      }

      var searchCheck = [false, false, false, false]; //setall4tabstofalse= noresult

      //Loopthroughallfaqitems(in faqlist-tab)tocheckifthesearchtextisin thequestionoranswer
      $faqItem.each(function(_, item) {
        var $item = $(item);
        //ifnotfound,hidetheitem
        if (
          $item.text().toLowerCase().indexOf(searchText.toLowerCase()) <= -1
        ) {
          $item.addClass("gt_hide-result");
          return;
        }

        //iffound,showtheitem
        $item.removeClass("gt_hide-result");
        //setflagtruetocurrenttab
        var tabIndex = $item.parents(".gt_box__item--content").eq(0).index();
        searchCheck[tabIndex] = true;

        //HighlightTextResult*/
        $item.find(".gt_txt-highlight").removeClass("gt_txt-highlight");

        //ForsearchTitle
        var $itemTitle = $item.find(".gt_faq--title").first();
        var searchExp = new RegExp(searchText, "ig");
        var matches = $itemTitle.text().match(searchExp);
        if (matches) {
          $itemTitle.html(
            $itemTitle.text().replace(searchExp, function(match) {
              return "<span class='gt_txt-highlight'>" + match + "</span>";
            })
          );
        }

        //ForsearchContent
        var $itemContent = $item.find(".gt_answer-content").first();
        searchExp = new RegExp(searchText, "ig");
        matches = $itemContent.text().match(searchExp);
        if (matches) {
          $itemContent.html(
            $itemContent.text().replace(searchExp, function(match) {
              return "<span class='gt_txt-highlight'>" + match + "</span>";
            })
          );
        }
      });

      //ifnoresultfound,showthenoresultmessageandhidethetabtitle
      if (searchCheck.some((check) => check === true)) {
        $resultFailed.addClass("gt_hidden-failed");
        $tabTitle.removeClass("gt_disable-all");
        $keySearch.empty();
      } else {
        $resultFailed.removeClass("gt_hidden-failed");
        $tabTitle.addClass("gt_disable-all");
        $keySearch.text('"' + searchText + '"');
      }
      $boxItemTitle.removeClass("gt_no-result");

      //hidetabscontentthatnothaveanyresult
      $boxItemContent.removeClass("gt_no-result");
      $boxItemContent.each(function(index) {
        if (!searchCheck[index]) {
          $(this).addClass("gt_no-result");
          $boxItemTitle.eq(index).addClass("gt_no-result");
        }
      });

      //disableclickontabareaifnoresult
      var countTitleShow = $boxItemTitle.length;
      var countTitleHide = $boxItemTitle.filter(".gt_no-result").length;

      if (countTitleShow == countTitleHide) {
        $tabTitle.addClass("gt_disable-all");
      } else {
        $tabTitle.removeClass("gt_disable-all");
      }

      //whenswitchingtabs,ifthetabitselfhasnoresultsthenactivethefirsttabwithresults

      if (searchCheck.some((check) => check === true)) {
        $boxItemTitle
          .filter(":not('.gt_no-result'):first")
          .addClass("gt_after-search");
      }
      if (
        $boxItemTitle.filter(".gt_active-nav:not('.gt_no-result')").length == 1
      ) {
        $boxItemTitle.removeClass("gt_after-search");
      }

      if (searchCheck.some((check) => check === true)) {
        $boxItemContent
          .filter(":not('.gt_no-result'):first")
          .addClass("gt_after-search");
      }
      if (
        $boxItemContent.filter(".gt_active-content:not('.gt_no-result')")
        .length == 1
      ) {
        $boxItemContent.removeClass("gt_after-search");
      }

      //removeclassaftersearchwhenclickontab
      $boxItemTitle.click(function() {
        $(this).removeClass("gt_after-search");
        $boxItemContent.removeClass("gt_after-search");
        $boxItemTitle
          .filter(':not(".gt_no-result"):first')
          .removeClass("gt_after-search");
      });
    });
    /* store subscribe block script */
    store.subscribe("render-html-YouYWAMen1OHmxt-faqListItem", triggerRenderAtom);
    store.subscribe("render-html-YouYWAMen1OHmxt-faqListItem2", triggerRenderAtom);
    store.subscribe("render-html-YouYWAMen1OHmxt-faqListItem3", triggerRenderAtom);
    store.subscribe("render-html-YouYWAMen1OHmxt-faqListItem4", triggerRenderAtom);

    function destroy() {
      store.unsubscribe("render-html-YouYWAMen1OHmxt-faqListItem", triggerRenderAtom);
      store.unsubscribe("render-html-YouYWAMen1OHmxt-faqListItem2", triggerRenderAtom);
      store.unsubscribe("render-html-YouYWAMen1OHmxt-faqListItem3", triggerRenderAtom);
      store.unsubscribe("render-html-YouYWAMen1OHmxt-faqListItem4", triggerRenderAtom);
    }
    /* events block script */
    var $elements_1 = $element.find(".gt_box__item--title");
    $elements_1.off("click").on("click", tabAccordion);
    var $elements_2 = $element.find(".gt_faq--question");
    $elements_2.off("click").on("click", faqAccordion);
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESSectionYouYWAMen1OHmxt()
      } catch(e) {
        console.error("Error ESSection Id: YouYWAMen1OHmxt" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqBox = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqBox";
  var id = "YouYWAMen1OHmxt_faqBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqBox",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqBox()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabTitle = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabTitle";
  var id = "YouYWAMen1OHmxt_tabTitle";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabTitle",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabTitle()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabTitle" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_headingBox = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_headingBox";
  var id = "YouYWAMen1OHmxt_headingBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_headingBox",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_headingBox",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_headingBox()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_headingBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_wrapTitleBox = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_wrapTitleBox";
  var id = "YouYWAMen1OHmxt_wrapTitleBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_wrapTitleBox",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_wrapTitleBox()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_wrapTitleBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabTitleItem1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabTitleItem1";
  var id = "YouYWAMen1OHmxt_tabTitleItem1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabTitleItem1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabTitleItem1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabTitleItem1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_icon1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_icon1";
  var id = "YouYWAMen1OHmxt_icon1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_icon1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_icon1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_icon1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_title1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_title1";
  var id = "YouYWAMen1OHmxt_title1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_title1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_title1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_title1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_title1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabTitleItem2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabTitleItem2";
  var id = "YouYWAMen1OHmxt_tabTitleItem2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabTitleItem2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabTitleItem2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabTitleItem2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_icon2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_icon2";
  var id = "YouYWAMen1OHmxt_icon2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_icon2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_icon2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_icon2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_title2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_title2";
  var id = "YouYWAMen1OHmxt_title2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_title2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_title2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_title2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_title2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabTitleItem3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabTitleItem3";
  var id = "YouYWAMen1OHmxt_tabTitleItem3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabTitleItem3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabTitleItem3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabTitleItem3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_icon3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_icon3";
  var id = "YouYWAMen1OHmxt_icon3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_icon3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_icon3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_icon3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_title3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_title3";
  var id = "YouYWAMen1OHmxt_title3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_title3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_title3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_title3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_title3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabTitleItem4 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabTitleItem4";
  var id = "YouYWAMen1OHmxt_tabTitleItem4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabTitleItem4",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabTitleItem4()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabTitleItem4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_icon4 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_icon4";
  var id = "YouYWAMen1OHmxt_icon4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_icon4",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_icon4()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_icon4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_title4 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_title4";
  var id = "YouYWAMen1OHmxt_title4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_title4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_title4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_title4()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_title4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabContent = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabContent";
  var id = "YouYWAMen1OHmxt_tabContent";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabContent",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabContent()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabContent" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_searchBox = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_searchBox";
  var id = "YouYWAMen1OHmxt_searchBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_searchBox",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_searchBox()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_searchBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_boxAbsolute = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_boxAbsolute";
  var id = "YouYWAMen1OHmxt_boxAbsolute";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_boxAbsolute",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_boxAbsolute()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_boxAbsolute" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconSearch = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconSearch";
  var id = "YouYWAMen1OHmxt_iconSearch";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconSearch",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconSearch()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconSearch" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_resultFailedBox = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_resultFailedBox";
  var id = "YouYWAMen1OHmxt_resultFailedBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_resultFailedBox",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_resultFailedBox()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_resultFailedBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_wrapFailedHeadingBox = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_wrapFailedHeadingBox";
  var id = "YouYWAMen1OHmxt_wrapFailedHeadingBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_wrapFailedHeadingBox",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_wrapFailedHeadingBox()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_wrapFailedHeadingBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_failedHeading = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_failedHeading";
  var id = "YouYWAMen1OHmxt_failedHeading";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_failedHeading",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_failedHeading",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_failedHeading()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_failedHeading" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_failedMessages = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_failedMessages";
  var id = "YouYWAMen1OHmxt_failedMessages";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_failedMessages",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_failedMessages",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_failedMessages()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_failedMessages" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_wrapContentBox = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_wrapContentBox";
  var id = "YouYWAMen1OHmxt_wrapContentBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_wrapContentBox",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_wrapContentBox()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_wrapContentBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabContentItem = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabContentItem";
  var id = "YouYWAMen1OHmxt_tabContentItem";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabContentItem",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabContentItem()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabContentItem" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqList = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqList";
  var id = "YouYWAMen1OHmxt_faqList";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqList",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqList()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqList" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem_0";
  var id = "YouYWAMen1OHmxt_faqListItem_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion_0";
  var id = "YouYWAMen1OHmxt_faqQuestion_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle_0";
  var id = "YouYWAMen1OHmxt_faqTitle_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen_0";
  var id = "YouYWAMen1OHmxt_iconOpen_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose_0";
  var id = "YouYWAMen1OHmxt_iconClose_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers_0";
  var id = "YouYWAMen1OHmxt_faqAnswers_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent_0";
  var id = "YouYWAMen1OHmxt_faqContent_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem_1";
  var id = "YouYWAMen1OHmxt_faqListItem_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion_1";
  var id = "YouYWAMen1OHmxt_faqQuestion_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle_1";
  var id = "YouYWAMen1OHmxt_faqTitle_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen_1";
  var id = "YouYWAMen1OHmxt_iconOpen_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose_1";
  var id = "YouYWAMen1OHmxt_iconClose_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers_1";
  var id = "YouYWAMen1OHmxt_faqAnswers_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent_1";
  var id = "YouYWAMen1OHmxt_faqContent_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem_2";
  var id = "YouYWAMen1OHmxt_faqListItem_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion_2";
  var id = "YouYWAMen1OHmxt_faqQuestion_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle_2";
  var id = "YouYWAMen1OHmxt_faqTitle_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen_2";
  var id = "YouYWAMen1OHmxt_iconOpen_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose_2";
  var id = "YouYWAMen1OHmxt_iconClose_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers_2";
  var id = "YouYWAMen1OHmxt_faqAnswers_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent_2";
  var id = "YouYWAMen1OHmxt_faqContent_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem_3";
  var id = "YouYWAMen1OHmxt_faqListItem_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion_3";
  var id = "YouYWAMen1OHmxt_faqQuestion_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle_3";
  var id = "YouYWAMen1OHmxt_faqTitle_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen_3";
  var id = "YouYWAMen1OHmxt_iconOpen_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose_3";
  var id = "YouYWAMen1OHmxt_iconClose_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers_3";
  var id = "YouYWAMen1OHmxt_faqAnswers_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent_3";
  var id = "YouYWAMen1OHmxt_faqContent_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabContentItem2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabContentItem2";
  var id = "YouYWAMen1OHmxt_tabContentItem2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabContentItem2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabContentItem2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabContentItem2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqList2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqList2";
  var id = "YouYWAMen1OHmxt_faqList2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqList2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqList2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqList2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem2_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem2_0";
  var id = "YouYWAMen1OHmxt_faqListItem2_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem2_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem2_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem2_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion2_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion2_0";
  var id = "YouYWAMen1OHmxt_faqQuestion2_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion2_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion2_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion2_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle2_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle2_0";
  var id = "YouYWAMen1OHmxt_faqTitle2_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle2_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle2_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle2_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle2_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen2_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen2_0";
  var id = "YouYWAMen1OHmxt_iconOpen2_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen2_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen2_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen2_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose2_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose2_0";
  var id = "YouYWAMen1OHmxt_iconClose2_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose2_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose2_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose2_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers2_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers2_0";
  var id = "YouYWAMen1OHmxt_faqAnswers2_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers2_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers2_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers2_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent2_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent2_0";
  var id = "YouYWAMen1OHmxt_faqContent2_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent2_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent2_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent2_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent2_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem2_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem2_1";
  var id = "YouYWAMen1OHmxt_faqListItem2_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem2_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem2_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem2_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion2_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion2_1";
  var id = "YouYWAMen1OHmxt_faqQuestion2_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion2_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion2_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion2_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle2_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle2_1";
  var id = "YouYWAMen1OHmxt_faqTitle2_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle2_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle2_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle2_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle2_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen2_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen2_1";
  var id = "YouYWAMen1OHmxt_iconOpen2_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen2_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen2_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen2_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose2_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose2_1";
  var id = "YouYWAMen1OHmxt_iconClose2_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose2_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose2_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose2_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers2_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers2_1";
  var id = "YouYWAMen1OHmxt_faqAnswers2_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers2_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers2_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers2_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent2_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent2_1";
  var id = "YouYWAMen1OHmxt_faqContent2_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent2_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent2_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent2_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent2_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem2_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem2_2";
  var id = "YouYWAMen1OHmxt_faqListItem2_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem2_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem2_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem2_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion2_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion2_2";
  var id = "YouYWAMen1OHmxt_faqQuestion2_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion2_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion2_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion2_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle2_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle2_2";
  var id = "YouYWAMen1OHmxt_faqTitle2_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle2_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle2_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle2_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle2_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen2_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen2_2";
  var id = "YouYWAMen1OHmxt_iconOpen2_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen2_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen2_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen2_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose2_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose2_2";
  var id = "YouYWAMen1OHmxt_iconClose2_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose2_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose2_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose2_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers2_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers2_2";
  var id = "YouYWAMen1OHmxt_faqAnswers2_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers2_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers2_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers2_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent2_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent2_2";
  var id = "YouYWAMen1OHmxt_faqContent2_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent2_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent2_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent2_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent2_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem2_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem2_3";
  var id = "YouYWAMen1OHmxt_faqListItem2_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem2_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem2_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem2_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion2_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion2_3";
  var id = "YouYWAMen1OHmxt_faqQuestion2_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion2_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion2_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion2_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle2_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle2_3";
  var id = "YouYWAMen1OHmxt_faqTitle2_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle2_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle2_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle2_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle2_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen2_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen2_3";
  var id = "YouYWAMen1OHmxt_iconOpen2_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen2_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen2_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen2_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose2_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose2_3";
  var id = "YouYWAMen1OHmxt_iconClose2_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose2_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose2_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose2_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers2_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers2_3";
  var id = "YouYWAMen1OHmxt_faqAnswers2_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers2_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers2_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers2_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent2_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent2_3";
  var id = "YouYWAMen1OHmxt_faqContent2_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent2_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent2_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent2_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent2_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabContentItem3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabContentItem3";
  var id = "YouYWAMen1OHmxt_tabContentItem3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabContentItem3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabContentItem3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabContentItem3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqList3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqList3";
  var id = "YouYWAMen1OHmxt_faqList3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqList3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqList3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqList3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem3_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem3_0";
  var id = "YouYWAMen1OHmxt_faqListItem3_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem3_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem3_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem3_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion3_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion3_0";
  var id = "YouYWAMen1OHmxt_faqQuestion3_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion3_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion3_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion3_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle3_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle3_0";
  var id = "YouYWAMen1OHmxt_faqTitle3_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle3_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle3_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle3_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle3_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen3_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen3_0";
  var id = "YouYWAMen1OHmxt_iconOpen3_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen3_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen3_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen3_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose3_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose3_0";
  var id = "YouYWAMen1OHmxt_iconClose3_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose3_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose3_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose3_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers3_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers3_0";
  var id = "YouYWAMen1OHmxt_faqAnswers3_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers3_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers3_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers3_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent3_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent3_0";
  var id = "YouYWAMen1OHmxt_faqContent3_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent3_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent3_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent3_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent3_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem3_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem3_1";
  var id = "YouYWAMen1OHmxt_faqListItem3_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem3_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem3_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem3_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion3_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion3_1";
  var id = "YouYWAMen1OHmxt_faqQuestion3_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion3_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion3_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion3_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle3_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle3_1";
  var id = "YouYWAMen1OHmxt_faqTitle3_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle3_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle3_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle3_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle3_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen3_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen3_1";
  var id = "YouYWAMen1OHmxt_iconOpen3_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen3_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen3_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen3_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose3_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose3_1";
  var id = "YouYWAMen1OHmxt_iconClose3_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose3_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose3_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose3_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers3_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers3_1";
  var id = "YouYWAMen1OHmxt_faqAnswers3_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers3_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers3_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers3_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent3_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent3_1";
  var id = "YouYWAMen1OHmxt_faqContent3_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent3_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent3_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent3_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent3_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem3_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem3_2";
  var id = "YouYWAMen1OHmxt_faqListItem3_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem3_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem3_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem3_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion3_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion3_2";
  var id = "YouYWAMen1OHmxt_faqQuestion3_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion3_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion3_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion3_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle3_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle3_2";
  var id = "YouYWAMen1OHmxt_faqTitle3_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle3_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle3_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle3_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle3_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen3_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen3_2";
  var id = "YouYWAMen1OHmxt_iconOpen3_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen3_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen3_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen3_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose3_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose3_2";
  var id = "YouYWAMen1OHmxt_iconClose3_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose3_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose3_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose3_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers3_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers3_2";
  var id = "YouYWAMen1OHmxt_faqAnswers3_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers3_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers3_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers3_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent3_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent3_2";
  var id = "YouYWAMen1OHmxt_faqContent3_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent3_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent3_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent3_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent3_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem3_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem3_3";
  var id = "YouYWAMen1OHmxt_faqListItem3_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem3_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem3_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem3_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion3_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion3_3";
  var id = "YouYWAMen1OHmxt_faqQuestion3_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion3_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion3_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion3_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle3_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle3_3";
  var id = "YouYWAMen1OHmxt_faqTitle3_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle3_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle3_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle3_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle3_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen3_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen3_3";
  var id = "YouYWAMen1OHmxt_iconOpen3_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen3_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen3_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen3_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose3_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose3_3";
  var id = "YouYWAMen1OHmxt_iconClose3_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose3_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose3_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose3_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers3_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers3_3";
  var id = "YouYWAMen1OHmxt_faqAnswers3_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers3_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers3_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers3_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent3_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent3_3";
  var id = "YouYWAMen1OHmxt_faqContent3_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent3_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent3_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent3_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent3_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_tabContentItem4 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_tabContentItem4";
  var id = "YouYWAMen1OHmxt_tabContentItem4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_tabContentItem4",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_tabContentItem4()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_tabContentItem4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqList4 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqList4";
  var id = "YouYWAMen1OHmxt_faqList4";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqList4",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqList4()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqList4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem4_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem4_0";
  var id = "YouYWAMen1OHmxt_faqListItem4_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem4_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem4_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem4_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion4_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion4_0";
  var id = "YouYWAMen1OHmxt_faqQuestion4_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion4_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion4_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion4_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle4_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle4_0";
  var id = "YouYWAMen1OHmxt_faqTitle4_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle4_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle4_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle4_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle4_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen4_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen4_0";
  var id = "YouYWAMen1OHmxt_iconOpen4_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen4_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen4_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen4_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose4_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose4_0";
  var id = "YouYWAMen1OHmxt_iconClose4_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose4_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose4_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose4_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers4_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers4_0";
  var id = "YouYWAMen1OHmxt_faqAnswers4_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers4_0",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers4_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers4_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent4_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent4_0";
  var id = "YouYWAMen1OHmxt_faqContent4_0";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent4_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent4_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent4_0()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent4_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem4_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem4_1";
  var id = "YouYWAMen1OHmxt_faqListItem4_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem4_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem4_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem4_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion4_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion4_1";
  var id = "YouYWAMen1OHmxt_faqQuestion4_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion4_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion4_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion4_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle4_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle4_1";
  var id = "YouYWAMen1OHmxt_faqTitle4_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle4_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle4_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle4_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle4_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen4_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen4_1";
  var id = "YouYWAMen1OHmxt_iconOpen4_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen4_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen4_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen4_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose4_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose4_1";
  var id = "YouYWAMen1OHmxt_iconClose4_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose4_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose4_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose4_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers4_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers4_1";
  var id = "YouYWAMen1OHmxt_faqAnswers4_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers4_1",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers4_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers4_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent4_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent4_1";
  var id = "YouYWAMen1OHmxt_faqContent4_1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent4_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent4_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent4_1()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent4_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem4_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem4_2";
  var id = "YouYWAMen1OHmxt_faqListItem4_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem4_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem4_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem4_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion4_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion4_2";
  var id = "YouYWAMen1OHmxt_faqQuestion4_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion4_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion4_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion4_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle4_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle4_2";
  var id = "YouYWAMen1OHmxt_faqTitle4_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle4_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle4_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle4_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle4_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen4_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen4_2";
  var id = "YouYWAMen1OHmxt_iconOpen4_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen4_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen4_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen4_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose4_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose4_2";
  var id = "YouYWAMen1OHmxt_iconClose4_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose4_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose4_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose4_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers4_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers4_2";
  var id = "YouYWAMen1OHmxt_faqAnswers4_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers4_2",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers4_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers4_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent4_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent4_2";
  var id = "YouYWAMen1OHmxt_faqContent4_2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent4_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent4_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent4_2()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent4_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqListItem4_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqListItem4_3";
  var id = "YouYWAMen1OHmxt_faqListItem4_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqListItem4_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqListItem4_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqListItem4_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqQuestion4_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqQuestion4_3";
  var id = "YouYWAMen1OHmxt_faqQuestion4_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqQuestion4_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqQuestion4_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqQuestion4_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqTitle4_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqTitle4_3";
  var id = "YouYWAMen1OHmxt_faqTitle4_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqTitle4_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqTitle4_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqTitle4_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqTitle4_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconOpen4_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconOpen4_3";
  var id = "YouYWAMen1OHmxt_iconOpen4_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconOpen4_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconOpen4_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconOpen4_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_iconClose4_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_iconClose4_3";
  var id = "YouYWAMen1OHmxt_iconClose4_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_iconClose4_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_iconClose4_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_iconClose4_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqAnswers4_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqAnswers4_3";
  var id = "YouYWAMen1OHmxt_faqAnswers4_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "YouYWAMen1OHmxt_faqAnswers4_3",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqAnswers4_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqAnswers4_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomYouYWAMen1OHmxt_faqContent4_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-YouYWAMen1OHmxt_faqContent4_3";
  var id = "YouYWAMen1OHmxt_faqContent4_3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "YouYWAMen1OHmxt_faqContent4_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "YouYWAMen1OHmxt_faqContent4_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomYouYWAMen1OHmxt_faqContent4_3()
      } catch(e) {
        console.error("Error ESAtom Id: YouYWAMen1OHmxt_faqContent4_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESSectionLyitaJ7SU3XGYZF = function() {
          (function() {
  var elementClassName = ".gt_section-LyitaJ7SU3XGYZF";
  var id = "LyitaJ7SU3XGYZF";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var parallaxTurnOn = "false";
    var bgParallax = $element.find(".gt_banner-bg");
    /* store get state block script */
    /* methods block script */
    function checkParallax() {
      var windowWidth = $(window).width();
      if (windowWidth > 992) {
        if (parallaxTurnOn === "true") {
          $element.gtParallax({
            classBackgroundImage: ".gt_banner-bg",
          });
        }
      } else {
        bgParallax.css({
          "background-attachment": "unset",
          "background-position": "center"
        });
      }
    }
    /* init block script */
    if (!$element || $element.length == 0) {
      return;
    }
    checkParallax();
    $(window).off("resize.checkSwitchScreensLyitaJ7SU3XGYZF").on("resize.checkSwitchScreensLyitaJ7SU3XGYZF", function() {
      checkParallax();
    });
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  function main() {
    for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
      var $target = $($elements[indexEl]);
      script($target, indexEl);
    }
  }
  main();
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESSectionLyitaJ7SU3XGYZF()
      } catch(e) {
        console.error("Error ESSection Id: LyitaJ7SU3XGYZF" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomLyitaJ7SU3XGYZF_bannerContent = function() {
          (function() {
  var elementClassName = ".gt_atom-LyitaJ7SU3XGYZF_bannerContent";
  var id = "LyitaJ7SU3XGYZF_bannerContent";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "LyitaJ7SU3XGYZF_bannerContent",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }
    /* init block script */
    addInteraction();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomLyitaJ7SU3XGYZF_bannerContent()
      } catch(e) {
        console.error("Error ESAtom Id: LyitaJ7SU3XGYZF_bannerContent" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomLyitaJ7SU3XGYZF_headingText = function() {
          (function() {
  var elementClassName = ".gt_atom-LyitaJ7SU3XGYZF_headingText";
  var id = "LyitaJ7SU3XGYZF_headingText";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "LyitaJ7SU3XGYZF_headingText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "LyitaJ7SU3XGYZF_headingText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomLyitaJ7SU3XGYZF_headingText()
      } catch(e) {
        console.error("Error ESAtom Id: LyitaJ7SU3XGYZF_headingText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomLyitaJ7SU3XGYZF_messageText = function() {
          (function() {
  var elementClassName = ".gt_atom-LyitaJ7SU3XGYZF_messageText";
  var id = "LyitaJ7SU3XGYZF_messageText";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function removeTextWrapperClass() {
      var $textWrapper = $element.find(".gt_box-desc");
      $textWrapper.unwrap();
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "LyitaJ7SU3XGYZF_messageText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "LyitaJ7SU3XGYZF_messageText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        }
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          }
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          }
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }

    function initFixedContent() {
      const splitContent = textFixedContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if ("production" === "production") {
      removeTextWrapperClass();
    }
    if (activeTextFixed) {
      initFixedContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomLyitaJ7SU3XGYZF_messageText()
      } catch(e) {
        console.error("Error ESAtom Id: LyitaJ7SU3XGYZF_messageText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomLyitaJ7SU3XGYZF_buttonText = function() {
          (function() {
  var elementClassName = ".gt_atom-LyitaJ7SU3XGYZF_buttonText";
  var id = "LyitaJ7SU3XGYZF_buttonText";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const isProduction = "production" === "production";
    let actions = `[]`
    const isCustomActions = "false" == "true"
    const openNewTab = "false" == "true"
    const linkButton = "";
    const activeButtonFixContent = "false" === "true";
    const buttonFixContent = "Buy [!quantity!] items"
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "LyitaJ7SU3XGYZF_buttonText",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        }
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView"
          }
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation"
          }
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          }
        }
        window.SOLID.library.animation(settings)
      }
    }

    function addAction() {
      if (!isCustomActions) {
        if (linkButton != "") {
          actionsObj = [{
            "id": 1,
            "event": "click",
            "control": {
              "id": "1",
              "attribute": "1",
              "title": "Pick Link",
              "desc": "",
              "reference": "html",
              "type": "picklink",
              "value": linkButton,
              "newTab": openNewTab
            }
          }]
        } else {
          actionsObj = []
        }
        actions = JSON.stringify(actionsObj);
      }
      if (isProduction) {
        $element.customEvent(JSON.parse(actions), id + "_" + indexEl);
        /*Listenifisbuttonaddtocard*/

        window.SOLID.store.subscribe("loading-buy-now-LyitaJ7SU3XGYZF_buttonText" + "_" + indexEl, function(isDisplay) {
          const $loadingEl = $element.find(".atom-button-loading-circle-loader");
          const $textEl = $element.find(".gt_button-content-text");
          if ($loadingEl && $loadingEl.length && $textEl && $textEl.length) {
            let timeout = undefined;
            if (isDisplay === true) {
              /*displayloadingbutton*/
              clearTimeout(timeout);
              $loadingEl.css("display", "inline-block");
              $textEl.css("visibility", "hidden");
            } else if (isDisplay === "stop") {
              /*stoploading*/
              $loadingEl.removeAttr("style");
              $textEl.removeAttr("style");
              window.SOLID.store.dispatch("loading-buy-now-LyitaJ7SU3XGYZF_buttonText" + "_" + indexEl, "");
            } else if (isDisplay === false) {
              clearTimeout(timeout);
              /*displaytickbutton*/
              $loadingEl.addClass("load-complete");
              $loadingEl.find(".atom-button-loading-check-mark").css("display", "block");
              /*removetickbuttonanddisplaytext*/
              timeout = setTimeout(function() {
                $loadingEl.removeClass("load-complete");
                $loadingEl.find(".atom-button-loading-check-mark").removeAttr("style");
                $loadingEl.removeAttr("style");
                $textEl.removeAttr("style");
                window.SOLID.store.dispatch("loading-buy-now-LyitaJ7SU3XGYZF_buttonText" + "_" + indexEl, "");
              }, 3000);
            }
          }
        });
      }
    }

    function initFixContent() {
      const splitContent = buttonFixContent.match(/(.+|\B)(\[\!.+\!\])(.+|\B)/);
      if (splitContent.length < 4) {
        return;
      }
      const beforeWord = splitContent[1];
      $element.find(".gt_button-content-text-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_button-content-text-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    addAction();
    if (activeButtonFixContent) {
      initFixContent();
    }
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    script($target, indexEl);
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomLyitaJ7SU3XGYZF_buttonText()
      } catch(e) {
        console.error("Error ESAtom Id: LyitaJ7SU3XGYZF_buttonText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
})(window.esQuery || jQuery, window.esQuery || jQuery);

    
  
/*
  You SHOULD NOT modify source code in this page because
  It is automatically generated from EcomSolid
  Try to edit page with the live editor.
  https://ecomsolid.com
*/

    (function(jQuery, $) {
      
    try {
      function triggerDToStore() {
        window.SOLID = window.SOLID || {};
        var discounts = window.SOLID.discounts || [];
        if (window.store && window.store.update) {
          window.store.update("discounts", discounts)
        }
      }
      triggerDToStore()
    } catch(e) {
      console.log("=============================== START ERROR =================================")
      console.log(e)
      console.log("===============================  END ERROR  =================================")
    }
  
    })(window.esQuery || jQuery, window.esQuery || jQuery);
  
    
  