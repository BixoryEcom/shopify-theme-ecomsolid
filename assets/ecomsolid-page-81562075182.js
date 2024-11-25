
  
/*
  You SHOULD NOT modify source code in this page because
  It is automatically generated from EcomSolid
  Try to edit page with the live editor.
  https://ecomsolid.com
*/

(function(jQuery, $) {
  
      try {
        const funcLib9 = function() {
          "use strict";

/* gtProductSwatches */
(function (jQuery) {
  var gtProductSwatches = function (element, options) {
    var defaults = {
      classCurrentValue: null,
      classItem: null,
      classInputIdHidden: null,
      classBtnSelect: null,
      classCurrentStatus: null,
    };

    this.settings = {};
    var $element = jQuery(element);
    var _this = this;
    var _productJson;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);
      var productJson = $element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();

      try {
        if (productJson) {
          _productJson = JSON.parse(productJson);
        }
      } catch (e) {
        console.log(e);
      }

      _this.setInitVariant();
      _this.event();
      _this.listen();
    };

    this.setInitVariant = function () {
      if (_productJson) {
        var storeVariant = window.SOLID.store.getState("variant" + _productJson.id);

        if (storeVariant && storeVariant.variant_init) {
          window.store.update("variant" + _productJson.id, storeVariant);
          return;
        }

        var $productJson = $element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson");

        if ($productJson && $productJson.length) {
          var variantID = parseInt($productJson.attr("data-variant"));

          for (var i = 0; i < _productJson.variants.length; i++) {
            var currentVariant = _productJson.variants[i];

            if (currentVariant.id == variantID) {
              try {
                var newVariant = JSON.parse(JSON.stringify(currentVariant));

                // eslint-disable-next-line camelcase
                newVariant.variant_init = true;
                window.store.update("variant" + _productJson.id, newVariant);
              } catch (e) {
                console.log(e);
              }
              break;
            }
          }
        }
      }
    };

    this.event = function () {
      if (_productJson) {
        try {
          var variants = _productJson.variants;
          var $select = $element.find(_this.settings.classBtnSelect);

          $select.off("click.select").on("click.select", function () {
            var $el = jQuery(this);

            if (!$el.hasClass("gt_soldout")) {
              var name = $el.attr("data-name");
              // Update active
              var $selector = $element.find(_this.settings.classBtnSelect + '[data-name="' + name + '"]');

              if ($selector && $selector.length) {
                $selector.removeClass("gf_active");
                $selector.removeClass("gt_active");
              }
              $el.addClass("gf_active");
              $el.addClass("gt_active");
              var $actives = $element.find(_this.settings.classBtnSelect + ".gf_active," + _this.settings.classBtnSelect + ".gt_active");
              var values = [];
              var i;

              if ($actives && $actives.length) {
                for (i = 0; i < $actives.length; i++) {
                  var activeValue = jQuery($actives[i]).attr("data-value");

                  if (activeValue) {
                    values.push(activeValue);
                  }
                }
              }
              var currentVariant = {};

              if (values && values.length) {
                for (i = 0; i < variants.length; i++) {
                  var variant = variants[i];
                  var options = variant.options; // => []
                  // console.log(options, " vs ", values)

                  if (_this.compare(values, options)) {
                    currentVariant = variant;
                    break;
                  }
                }
              }
              // console.log("variants: ", variants);
              // console.log("$actives: ", $actives);
              // console.log("values: ", values);
              // console.log("currentVariant: ", currentVariant);
              if (!jQuery.isEmptyObject(currentVariant)) {
                window.store.update("variant" + _productJson.id, currentVariant);
              } else {
                // Sản phẩm không được định nghĩa
                window.store.update("variant" + _productJson.id, {
                  id: 0,
                  available: false,
                });
              }
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
    };
    this.listen = function () {
      var store = window.store;

      if (_productJson) {
        var options = _productJson.options;

        store.change("variant" + _productJson.id, function (variant) {
          if (variant && variant.variant_init) {
            return;
          }
          var $product = $element.closest("[keyword='product'], [data-keyword='product']");
          var $currentStatus = $product.find(_this.settings.classCurrentStatus);

          if ($currentStatus && $currentStatus.length) {
            if (!variant.available) {
              $currentStatus.show();
              var labelSoldOut = $currentStatus.attr("data-sold-out") || "Sold Out";

              $currentStatus.addClass(_this.settings.classCurrentStatus.replace(".", "") + "--inner");
              $currentStatus.html(labelSoldOut);
            } else {
              $currentStatus.addClass(_this.settings.classCurrentStatus.replace(".", "") + "--inner");
              $currentStatus.hide();
            }
          }

          if (variant.options && variant.options.length) {
            for (var i = 0; i < variant.options.length; i++) {
              var option = variant["option" + (i + 1)];

              if (option) {
                var name;

                if (options[i]) {
                  name = options[i];
                }
                if (!name || jQuery.isPlainObject(name)) {
                  name = options[i].name;
                }
                var $item = $element.find(_this.settings.classItem + '[data-name="' + name + '"]');

                if ($item && $item.length) {
                  if (_this.settings.classCurrentValue) {
                    var $currentValue = $item.find(_this.settings.classCurrentValue);

                    if ($currentValue && $currentValue.length) {
                      $currentValue.html(option);
                    }
                  }
                  var $selectActive = $item.find(_this.settings.classBtnSelect + '[data-value="' + option.replace(/"/g, "'") + '"]');
                  var $select = $item.find(_this.settings.classBtnSelect);

                  if ($select && $select.length && $selectActive && $selectActive.length) {
                    $select.removeClass("gf_active");
                    $select.removeClass("gt_active");
                    $selectActive.addClass("gf_active");
                    $selectActive.addClass("gt_active");
                  }
                }
              }
            }
          }
          if (!jQuery.isEmptyObject(variant)) {
            if ($product && $product.length) {
              var $input = $product.find(_this.settings.classInputIdHidden);

              if ($input && $input.length) {
                $input.attr("value", variant.id).val(variant.id);
                var currentURL = window.location.href;
                var variantURL = _this.updateUrlParameter(currentURL, "variant", variant.id);

                window.history.replaceState({}, "", variantURL);
              }
            }
          }
        });
      }
    };

    this.compare = function (array, array2) {
      array.sort();
      array2.sort();
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array2.length; j++) {
          var val1 = array[j];
          var val2 = array2[j];

          val1 = val1.replace(/"/gm, "'");
          val2 = val2.replace(/"/gm, "'");
          if (val1 != val2) {
            return false;
          }
        }
      }
      return true;
    };

    this.updateUrlParameter = function (url, key, value) {
      var parser = document.createElement("a");

      parser.href = url;
      var newUrl = parser.protocol + "//" + parser.host + parser.pathname;
      // has parameters ?

      if (parser.search && parser.search.indexOf("?") !== -1) {
        // parameter already exists
        if (parser.search.indexOf(key + "=") !== -1) {
          // paramters to array
          var params = parser.search.replace("?", "");

          params = params.split("&");
          params.forEach(function (param, i) {
            if (param.indexOf(key + "=") !== -1) {
              if (value !== null) { params[i] = key + "=" + value; } else { delete params[i]; }
            }
          });
          if (params.length > 0) { newUrl += "?" + params.join("&"); }
        } else if (value !== null) {
          newUrl += parser.search + "&" + key + "=" + value;
        } else {
          newUrl += parser.search;
        } // skip the value (remove)
      } else if (value !== null) {
        newUrl += "?" + key + "=" + value;
      } // no parameters, create it
      newUrl += parser.hash;
      return newUrl;
    };
    this.init();
  };

  jQuery.fn.gtProductSwatches = function (options) {
    return this.each(function () {
      var plugin = new gtProductSwatches(this, options, jQuery);

      jQuery(this).data("gtproductswatches", plugin);
    });
  };
})(jQuery);

        }
        funcLib9();
      } catch(e) {
        console.error("Error lib id: 9" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib11 = function() {
          "use strict";

/* gtProductSaved */
(function (jQuery) {
  var gtProductSaved = function (element, options) {
    var defaults = {
      classTextPercent: null,
      classTextNumber: null,
      dataFormat: "",
      dataFormatKey: "",
      customCurrencyFormat: null,
      roundPercent: 0,
      roundNoZeroes: false,
    };

    this.settings = {};

    var $element = jQuery(element);
    var _this = this;
    var _productJson;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);
      var productJson = $element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();

      try {
        if (productJson) {
          _productJson = JSON.parse(productJson);
        }
      } catch (e) {
        console.log(e);
      }

      _this.Init();
      _this.listen();
    };

    this.Init = function () {
      if (_productJson) {
        var variant = window.store.get("variant" + _productJson.id);
        if (variant && variant.id) {
          _this.setPriceWithVariant(variant);
        }
      }
    };

    this.listen = function () {
      var store = window.store;

      if (_productJson) {
        store.change("variant" + _productJson.id, function (variant) {
          _this.setPriceWithVariant(variant);
        });

        store.change("quantity" + _productJson.id, function () {
          _this.Init();
        });
      }

      store.change("dataCurrency", function () {
        _this.Init();
      });
    };

    this.setPriceWithVariant = function (variant) {
      if (variant.compare_at_price && variant.price && variant.compare_at_price > variant.price) {
        $element.addClass("gf_active");
        $element.addClass("gt_active");

        // Giá giảm theo %
        if (_this.settings.classTextPercent) {
          var $number = $element.find(_this.settings.classTextPercent);
          var number = _this.getPercentDiscount(variant.price, variant.compare_at_price);

          $number.html(number);
        }

        // Giá giảm theo sổ tiền
        if (_this.settings.classTextNumber) {
          var $price = $element.find(_this.settings.classTextNumber);
          var diff = variant.compare_at_price - variant.price;

          diff = _this.formatMoneyPlugin(diff);
          $price.html(diff);
        }
      } else {
        $element.removeClass("gf_active");
        $element.removeClass("gt_active");
      }
    };

    // Get price with quantity
    this.getPriceWithQuantity = function (price) {
      if (_productJson) {
        var quantityProduct = window.store.get("quantity" + _productJson.id);

        quantityProduct = Number(quantityProduct);
        if (!quantityProduct || isNaN(quantityProduct)) {
          quantityProduct = 1;
        }
        price = Number(price) * quantityProduct;
      }
      return price;
    };

    // Format price
    this.formatMoneyPlugin = function (price) {
      price = _this.getPriceWithQuantity(price);
      var dataCurrency = window.store.get("dataCurrency");
      var format = __GemSettings.money;

      if (!dataCurrency) {
        // default shopify format
        price = Shopify.formatMoney(price, format);
      } else {
        // ES addon auto currency converter
        var notApplyRoundDecimal = true; // no apply round decimal for save money

        price = Shopify.gemFormatMoney(price, dataCurrency.currency, dataCurrency.data, _this.settings.customCurrencyFormating, notApplyRoundDecimal);
      }

      if (_this.settings.dataFormat && _this.settings.dataFormatKey) {
        price = _this.settings.dataFormat.replace(_this.settings.dataFormatKey, price);
      }

      return price;
    };

    // Lấy phần trăm giảm giá
    this.getPercentDiscount = function (price, comparePrice) {
      price = parseFloat(price);
      comparePrice = parseFloat(comparePrice);
      var diff = comparePrice - price;

      diff = diff / comparePrice;
      diff = diff * 100;
      if(_this.settings.roundNoZeroes) {
        diff = _this.roundTo(diff, _this.settings.roundPercent);
      } else {
        diff = diff.toFixed(_this.settings.roundPercent);
      }
      diff += "%";

      if (_this.settings.dataFormat && _this.settings.dataFormatKey) {
        diff = _this.settings.dataFormat.replace(_this.settings.dataFormatKey, diff);
      }

      return diff;
    };

    this.roundTo = function(n, digits) {
      if (digits === undefined) {
        digits = 0;
      }
    
      var multiplicator = Math.pow(10, digits);
      n = parseFloat((n * multiplicator).toFixed(11));
      var test =(Math.round(n) / multiplicator);
      return +(test.toFixed(digits));
    }

    this.init();
  };

  jQuery.fn.gtProductSaved = function (options) {
    return this.each(function () {
      var plugin = new gtProductSaved(this, options, jQuery);

      jQuery(this).data("gtproductsaved", plugin);
    });
  };
})(jQuery);

        }
        funcLib11();
      } catch(e) {
        console.error("Error lib id: 11" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib4 = function() {
          "use strict";

/* gtProductImageFeature */
(function (jQuery) {
  var gtProductFeatureImage = function (element, options) {
    var defaults = {
      classFeatureImage: null,
      classImages: null,
      carousel: null,
      owlCarousel: null,
    };

    this.settings = {};

    var $element = jQuery(element);
    var _this = this;
    var _productJson;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);

      var productJson = $element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();

      try {
        if (productJson) {
          _productJson = JSON.parse(productJson);
        }
      } catch (e) {
        console.log(e);
      }

      if ($element.find(_this.settings.carousel) && $element.find(_this.settings.carousel).length) {
        $element.find(_this.settings.carousel).owlCarousel(_this.settings.owlCarousel);
      }

      _this.event();
      _this.listen();
    };
    this.event = function () {

    };
    this.listen = function () {
      var store = window.store;

      if (_productJson) {
        store.change("variant" + _productJson.id, function (variant) {
          if (variant && variant.variant_init) {
            return;
          }
          if (variant.featured_image && variant.featured_image.src) {
            var src = variant.featured_image.src;

            if (_this.settings.classFeatureImage) {
              $element.find(_this.settings.classFeatureImage).attr("src", src);
            }
            if (_this.settings.carousel) {
              for (var i = 0; i < $element.find(_this.settings.classImages).length; i++) {
                var $img = $element.find(_this.settings.classImages).eq(i);
                var id = $img.attr("data-id");

                if (id == variant.featured_image.id) {
                  if (_this.settings.carousel) {
                    $element.find(_this.settings.carousel).trigger("to.owl.carousel", [i, 200, true]);
                  }
                  break;
                }
              }
            }
          }
        });
      }
    };

    this.init();
  };

  jQuery.fn.gtProductFeatureImage = function (options) {
    return this.each(function () {
      var plugin = new gtProductFeatureImage(this, options, jQuery);

      jQuery(this).data("gtproductfeatureimage", plugin);
    });
  };
})(jQuery);

        }
        funcLib4();
      } catch(e) {
        console.error("Error lib id: 4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib7 = function() {
          "use strict";

/* gtProductPrice */
(function (jQuery) {
  var gtProductPrice = function (element, options) {
    var defaults = {
      classCurrentPrice: null,
      classComparePrice: null,
      syncQuantityPrice: true, // if syncQuantityPrice is true, change quantity trigger change price
      syncQuantityComparePrice: true,
      replacePriceForCurrentPrice: true,
      replacePriceForComparePrice: true,
      hideZeroPrice: false,
    };

    this.settings = {};

    var $element = jQuery(element).parent();
    var _this = this;
    var _productJson;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);

      var productJson = $element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();

      try {
        if (productJson) {
          _productJson = JSON.parse(productJson);
          _this.Init();
          _this.listen();
        }
      } catch (e) {
        console.log(e);
      }
    };

    this.Init = function () {
      var $currentPrice = $element.find(_this.settings.classCurrentPrice);
      var $comparePrice = $element.find(_this.settings.classComparePrice);
      var priceDefaults = $currentPrice.attr("data-currentprice");
      if (_this.settings.classCurrentPrice && _this.settings.replacePriceForCurrentPrice) {
        var price = _this.formatMoneyForSpecificPriceType(priceDefaults, "price");
        $currentPrice.html(price);
      }
      if (_this.settings.classComparePrice && _this.settings.replacePriceForComparePrice) {
        var $comparePrice = $element.find(_this.settings.classComparePrice);
        if ($comparePrice && $comparePrice.length) {
          var comparePriceDefaults = $comparePrice.attr("data-currentprice");
          var comparePrice = _this.formatMoneyForSpecificPriceType(comparePriceDefaults, "comparePrice");
          // so sanh comparePrice với price, chỉ hiển thị comparePrice khi comparePrice > price
          if (comparePrice && (!_this.settings.classCurrentPrice || parseFloat(comparePriceDefaults) > parseFloat(priceDefaults))) {
            $comparePrice.addClass("gf_active");
            $comparePrice.addClass("gt_active");
            $comparePrice.html(comparePrice);
          }
        }
      }
      if (_this.settings.hideZeroPrice) {
        if (parseFloat(priceDefaults)>0) {
          $currentPrice.show();
        } else {
          $currentPrice.hide();
          $comparePrice.hide();
        }
      }
    };

    this.listen = function () {
      var store = window.store;
      if (_productJson) {
        store.change("variant" + _productJson.id, function (variant) {
          var price = variant.price;
          price = _this.formatMoneyForSpecificPriceType(price, "price");
          var $currentPrice = $element.find(_this.settings.classCurrentPrice);
          var $comparePrice = $element.find(_this.settings.classComparePrice);
          if (_this.settings.classCurrentPrice && _this.settings.replacePriceForCurrentPrice) {
            // Trong trường hợp khi code section/addon muốn thay đổi giá trị và ko muốn tự update lại giá theo store thì thêm class dontChangePrice vào classCurrentPrice
            // VD: Tính năng Price Display Logic = Only each trong Bundle Section 9169
            if ($currentPrice && $currentPrice.length && !$currentPrice.hasClass("dontChangePrice")) {
              $currentPrice.attr("data-currentprice", variant.price);
              $currentPrice.html(price);
            }
          }

          if (_this.settings.classComparePrice && _this.settings.replacePriceForComparePrice) {
            if ($comparePrice && $comparePrice.length) {
              if (variant.compare_at_price && variant.compare_at_price - variant.price > 0) {
                var comparePrice = variant.compare_at_price;
                comparePrice = _this.formatMoneyForSpecificPriceType(comparePrice, "comparePrice");
                $comparePrice.addClass("gf_active");
                $comparePrice.addClass("gt_active");
                $comparePrice.html(comparePrice);
                $comparePrice.attr("data-currentprice", variant.compare_at_price);
              } else {
                $comparePrice.removeClass("gf_active");
                $comparePrice.removeClass("gt_active");
              }
            }
          }

          if (_this.settings.hideZeroPrice) {
            if (parseFloat($currentPrice.attr("data-currentprice"))>0) {
              $currentPrice.show();
            } else {
              $currentPrice.hide();
              $comparePrice.hide();
            }
          }
        });

        store.change("quantity" + _productJson.id, function () {
          _this.Init();
        });
      }

      store.change("dataCurrency", function () {
        _this.Init();
      });
    };

    // Get price with quantity
    this.getPriceWithQuantity = function (price) {
      if (_productJson) {
        var quantityProduct = window.store.get("quantity" + _productJson.id);
        quantityProduct = Number(quantityProduct);
        if (!quantityProduct || isNaN(quantityProduct)) {
          quantityProduct = 1;
        }
        price = Number(price) * quantityProduct;
      }
      return price;
    };

    // Format price
    this.formatMoneyForSpecificPriceType = function (price, type) {
      if ((type === "price" && _this.settings.syncQuantityPrice) || (type === "comparePrice" && _this.settings.syncQuantityComparePrice)) {
        price = _this.getPriceWithQuantity(price);
      } else {
        price = Number(price);
      }
      var dataCurrency = window.store.get("dataCurrency");
      var format = __GemSettings.money;
      if (dataCurrency) {
        price = Shopify.gemFormatMoney(price, dataCurrency.currency, dataCurrency.data);
      } else {
        price = Shopify.formatMoney(price, format);
      }
      return price;
    };
    this.init();
  };

  jQuery.fn.gtProductPrice = function (options) {
    return this.each(function () {
      var plugin = new gtProductPrice(this, options, jQuery);
      jQuery(this).data("gtproductprice", plugin);
    });
  };
})(jQuery);

        }
        funcLib7();
      } catch(e) {
        console.error("Error lib id: 7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
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
      } else {
        $image.css({
          "backgroundPosition": "",
          "background-attachment": "",
          "-webkit-backface-visibility": "",
        });
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
        const funcESSectionWnK6gw0lend3OsP = function() {
          (function() {
  var elementClassName = ".gt_section-WnK6gw0lend3OsP";
  var id = "WnK6gw0lend3OsP";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var windowWidth = $(window).width();
    var itemCount = $element.find(".gt_tab-title").length;
    var currentIndex = 1;
    var tabContent = $element.find(".gt_tab-content");
    var tabTitles = $element.find(".gt_tab-title");
    /* store get state block script */
    /* methods block script */
    function tabClick() {
      var dataTab = $(this).attr('data-tab');
      tabTitles.removeClass('gt_active');
      tabContent.removeClass('gt_active');
      $(this).addClass('gt_active');
      $element.find("[data-tab='" + dataTab + "']").addClass('gt_active');



      // var currentItem = $(this);
      // var attr = $(this).attr("index");
      // var windowWidth = $(window).width();
      //if(windowWidth>576){
      //tabContent.removeClass("gt_active-content");
      //tabTitles.removeClass("gt_active-title");
      //currentIndex = tabTitles.index($(this))+1;
      //currentItem.addClass("gt_active-title");
      //$element.find('.gt_tab-title[index="'+attr+'"]').addClass("gt_active-title");
      //$element.find('.gt_tab-content[index="'+attr+'"]').addClass("gt_active-content");
      //} else if(windowWidth<576){
      //if(currentItem.hasClass("gt_active-title")){
      //currentItem.removeClass("gt_active-title");
      //tabContent.removeClass("gt_active-content");
      //} else {
      // var $itemActive = $element.find(".gt_tab-title.gt_active-title");
      //if($itemActive&&$itemActive.length){
      //tabContent.removeClass("gt_active-content");
      //tabTitles.removeClass("gt_active-title");
      //}
      //currentItem.addClass("gt_active-title");
      //$element.find('.gt_tab-content[index="'+attr+'"]').addClass("gt_active-content");
      //}
      //} else {
      // return false;
      //}
    }

    function activeTab() {
      if (currentIndex > itemCount) {
        currentIndex = 1;
      }
      tabContent.removeClass("gt_active");
      tabTitles.removeClass("gt_active");
      var currentItem = tabTitles.eq("1" - 1);
      currentItem.addClass("gt_active");
      var dataTab = currentItem.attr("data-tab");
      $element.find("[data-tab='" + dataTab + "']").addClass('gt_active');
    }
    /* init block script */
    activeTab();
    $(window).off("resize.checkSwitchScreensWnK6gw0lend3OsP").on("resize.checkSwitchScreensWnK6gw0lend3OsP", function() {
      windowWidth = $(window).width();
      activeTab();
    });
    /* store subscribe block script */
    /* events block script */
    var $elements_1 = $element.find(".gt_tab-title");
    $elements_1.off("click").on("click", tabClick);
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
        funcESSectionWnK6gw0lend3OsP()
      } catch(e) {
        console.error("Error ESSection Id: WnK6gw0lend3OsP" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_headingColumn = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_headingColumn";
  var id = "WnK6gw0lend3OsP_headingColumn";
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
          elementId: "WnK6gw0lend3OsP_headingColumn",
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
        funcESAtomWnK6gw0lend3OsP_headingColumn()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_headingColumn" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_headingText = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_headingText";
  var id = "WnK6gw0lend3OsP_headingText";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "WnK6gw0lend3OsP_headingText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "WnK6gw0lend3OsP_headingText",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomWnK6gw0lend3OsP_headingText()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_headingText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_messageText = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_messageText";
  var id = "WnK6gw0lend3OsP_messageText";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "WnK6gw0lend3OsP_messageText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "WnK6gw0lend3OsP_messageText",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomWnK6gw0lend3OsP_messageText()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_messageText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_tabTitleBox = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_tabTitleBox";
  var id = "WnK6gw0lend3OsP_tabTitleBox";
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
          elementId: "WnK6gw0lend3OsP_tabTitleBox",
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
        funcESAtomWnK6gw0lend3OsP_tabTitleBox()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_tabTitleBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_tabTitle1Box = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_tabTitle1Box";
  var id = "WnK6gw0lend3OsP_tabTitle1Box";
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
          elementId: "WnK6gw0lend3OsP_tabTitle1Box",
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
        funcESAtomWnK6gw0lend3OsP_tabTitle1Box()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_tabTitle1Box" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_tabTitle1 = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_tabTitle1";
  var id = "WnK6gw0lend3OsP_tabTitle1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "true" == "true";
    const animationHoverActive = "true" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"heartBeat"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"shakeY"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "WnK6gw0lend3OsP_tabTitle1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "WnK6gw0lend3OsP_tabTitle1",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomWnK6gw0lend3OsP_tabTitle1()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_tabTitle1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_activeLine1 = function() {
          
        }
        funcESAtomWnK6gw0lend3OsP_activeLine1()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_activeLine1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_tabTitle2Box = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_tabTitle2Box";
  var id = "WnK6gw0lend3OsP_tabTitle2Box";
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
          elementId: "WnK6gw0lend3OsP_tabTitle2Box",
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
        funcESAtomWnK6gw0lend3OsP_tabTitle2Box()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_tabTitle2Box" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_tabTitle2 = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_tabTitle2";
  var id = "WnK6gw0lend3OsP_tabTitle2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "true" == "true";
    const animationHoverActive = "true" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"heartBeat"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"shakeY"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "WnK6gw0lend3OsP_tabTitle2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "WnK6gw0lend3OsP_tabTitle2",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomWnK6gw0lend3OsP_tabTitle2()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_tabTitle2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_activeLine2 = function() {
          
        }
        funcESAtomWnK6gw0lend3OsP_activeLine2()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_activeLine2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_tabTitle3Box = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_tabTitle3Box";
  var id = "WnK6gw0lend3OsP_tabTitle3Box";
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
          elementId: "WnK6gw0lend3OsP_tabTitle3Box",
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
        funcESAtomWnK6gw0lend3OsP_tabTitle3Box()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_tabTitle3Box" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_tabTitle3 = function() {
          (function() {
  var elementClassName = ".gt_atom-WnK6gw0lend3OsP_tabTitle3";
  var id = "WnK6gw0lend3OsP_tabTitle3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "true" == "true";
    const animationHoverActive = "true" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"heartBeat"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"shakeY"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "WnK6gw0lend3OsP_tabTitle3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "WnK6gw0lend3OsP_tabTitle3",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomWnK6gw0lend3OsP_tabTitle3()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_tabTitle3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomWnK6gw0lend3OsP_activeLine3 = function() {
          
        }
        funcESAtomWnK6gw0lend3OsP_activeLine3()
      } catch(e) {
        console.error("Error ESAtom Id: WnK6gw0lend3OsP_activeLine3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESSectionpP99eD4WNhiqbxA = function() {
          
        }
        funcESSectionpP99eD4WNhiqbxA()
      } catch(e) {
        console.error("Error ESSection Id: pP99eD4WNhiqbxA" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_lineTop = function() {
          
        }
        funcESAtompP99eD4WNhiqbxA_lineTop()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_lineTop" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_benefit = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_benefit";
  var id = "pP99eD4WNhiqbxA_benefit";
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
          elementId: "pP99eD4WNhiqbxA_benefit",
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
        funcESAtompP99eD4WNhiqbxA_benefit()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_benefit" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_titleBox = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_titleBox";
  var id = "pP99eD4WNhiqbxA_titleBox";
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
          elementId: "pP99eD4WNhiqbxA_titleBox",
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
        funcESAtompP99eD4WNhiqbxA_titleBox()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_titleBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_headingText = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_headingText";
  var id = "pP99eD4WNhiqbxA_headingText";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_headingText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_headingText",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_headingText()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_headingText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText";
  var id = "pP99eD4WNhiqbxA_messageText";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_benefitList = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_benefitList";
  var id = "pP99eD4WNhiqbxA_benefitList";
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
          elementId: "pP99eD4WNhiqbxA_benefitList",
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
        funcESAtompP99eD4WNhiqbxA_benefitList()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_benefitList" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureItem_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureItem_0";
  var id = "pP99eD4WNhiqbxA_featureItem_0";
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
          elementId: "pP99eD4WNhiqbxA_featureItem_0",
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
        funcESAtompP99eD4WNhiqbxA_featureItem_0()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureItem_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureIcon_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureIcon_0";
  var id = "pP99eD4WNhiqbxA_featureIcon_0";
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
          elementId: "pP99eD4WNhiqbxA_featureIcon_0",
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
        funcESAtompP99eD4WNhiqbxA_featureIcon_0()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureIcon_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureContent_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureContent_0";
  var id = "pP99eD4WNhiqbxA_featureContent_0";
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
          elementId: "pP99eD4WNhiqbxA_featureContent_0",
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
        funcESAtompP99eD4WNhiqbxA_featureContent_0()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureContent_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText1_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText1_0";
  var id = "pP99eD4WNhiqbxA_messageText1_0";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText1_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText1_0",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText1_0()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText1_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText2_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText2_0";
  var id = "pP99eD4WNhiqbxA_messageText2_0";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText2_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText2_0",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText2_0()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText2_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_line_0 = function() {
          
        }
        funcESAtompP99eD4WNhiqbxA_line_0()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_line_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureItem_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureItem_1";
  var id = "pP99eD4WNhiqbxA_featureItem_1";
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
          elementId: "pP99eD4WNhiqbxA_featureItem_1",
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
        funcESAtompP99eD4WNhiqbxA_featureItem_1()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureItem_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureIcon_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureIcon_1";
  var id = "pP99eD4WNhiqbxA_featureIcon_1";
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
          elementId: "pP99eD4WNhiqbxA_featureIcon_1",
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
        funcESAtompP99eD4WNhiqbxA_featureIcon_1()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureIcon_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureContent_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureContent_1";
  var id = "pP99eD4WNhiqbxA_featureContent_1";
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
          elementId: "pP99eD4WNhiqbxA_featureContent_1",
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
        funcESAtompP99eD4WNhiqbxA_featureContent_1()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureContent_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText1_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText1_1";
  var id = "pP99eD4WNhiqbxA_messageText1_1";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText1_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText1_1",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText1_1()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText1_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText2_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText2_1";
  var id = "pP99eD4WNhiqbxA_messageText2_1";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText2_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText2_1",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText2_1()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText2_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_line_1 = function() {
          
        }
        funcESAtompP99eD4WNhiqbxA_line_1()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_line_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureItem_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureItem_2";
  var id = "pP99eD4WNhiqbxA_featureItem_2";
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
          elementId: "pP99eD4WNhiqbxA_featureItem_2",
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
        funcESAtompP99eD4WNhiqbxA_featureItem_2()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureItem_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureIcon_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureIcon_2";
  var id = "pP99eD4WNhiqbxA_featureIcon_2";
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
          elementId: "pP99eD4WNhiqbxA_featureIcon_2",
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
        funcESAtompP99eD4WNhiqbxA_featureIcon_2()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureIcon_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureContent_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureContent_2";
  var id = "pP99eD4WNhiqbxA_featureContent_2";
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
          elementId: "pP99eD4WNhiqbxA_featureContent_2",
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
        funcESAtompP99eD4WNhiqbxA_featureContent_2()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureContent_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText1_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText1_2";
  var id = "pP99eD4WNhiqbxA_messageText1_2";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText1_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText1_2",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText1_2()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText1_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText2_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText2_2";
  var id = "pP99eD4WNhiqbxA_messageText2_2";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText2_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText2_2",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText2_2()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText2_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_line_2 = function() {
          
        }
        funcESAtompP99eD4WNhiqbxA_line_2()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_line_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureItem_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureItem_3";
  var id = "pP99eD4WNhiqbxA_featureItem_3";
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
          elementId: "pP99eD4WNhiqbxA_featureItem_3",
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
        funcESAtompP99eD4WNhiqbxA_featureItem_3()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureItem_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureIcon_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureIcon_3";
  var id = "pP99eD4WNhiqbxA_featureIcon_3";
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
          elementId: "pP99eD4WNhiqbxA_featureIcon_3",
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
        funcESAtompP99eD4WNhiqbxA_featureIcon_3()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureIcon_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_featureContent_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_featureContent_3";
  var id = "pP99eD4WNhiqbxA_featureContent_3";
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
          elementId: "pP99eD4WNhiqbxA_featureContent_3",
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
        funcESAtompP99eD4WNhiqbxA_featureContent_3()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_featureContent_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText1_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText1_3";
  var id = "pP99eD4WNhiqbxA_messageText1_3";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText1_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText1_3",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText1_3()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText1_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_messageText2_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-pP99eD4WNhiqbxA_messageText2_3";
  var id = "pP99eD4WNhiqbxA_messageText2_3";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "pP99eD4WNhiqbxA_messageText2_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "pP99eD4WNhiqbxA_messageText2_3",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtompP99eD4WNhiqbxA_messageText2_3()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_messageText2_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_line_3 = function() {
          
        }
        funcESAtompP99eD4WNhiqbxA_line_3()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_line_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtompP99eD4WNhiqbxA_lineBottom = function() {
          
        }
        funcESAtompP99eD4WNhiqbxA_lineBottom()
      } catch(e) {
        console.error("Error ESAtom Id: pP99eD4WNhiqbxA_lineBottom" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESSectionytMSJPhKJxFWXva = function() {
          (function() {
  var elementClassName = ".gt_section-ytMSJPhKJxFWXva";
  var id = "ytMSJPhKJxFWXva";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var $list = $element.find(".gt_banner-box .gt_banner-image");
    var numberOfItemsDefault = "12";
    /* store get state block script */
    /* methods block script */
    /* init block script */
    $list.attr("style", "display:none !important");
    $list.slice(0, numberOfItemsDefault).show();
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
        funcESSectionytMSJPhKJxFWXva()
      } catch(e) {
        console.error("Error ESSection Id: ytMSJPhKJxFWXva" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxGeneral = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxGeneral";
  var id = "ytMSJPhKJxFWXva_boxGeneral";
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
          elementId: "ytMSJPhKJxFWXva_boxGeneral",
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
        funcESAtomytMSJPhKJxFWXva_boxGeneral()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxGeneral" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_bannerBox = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_bannerBox";
  var id = "ytMSJPhKJxFWXva_bannerBox";
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
          elementId: "ytMSJPhKJxFWXva_bannerBox",
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
        funcESAtomytMSJPhKJxFWXva_bannerBox()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_bannerBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxImage_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxImage_0";
  var id = "ytMSJPhKJxFWXva_boxImage_0";
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
          elementId: "ytMSJPhKJxFWXva_boxImage_0",
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
        funcESAtomytMSJPhKJxFWXva_boxImage_0()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxImage_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_image_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_image_0";
  var id = "ytMSJPhKJxFWXva_image_0";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_image_0",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_image_0()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_image_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_content_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_content_0";
  var id = "ytMSJPhKJxFWXva_content_0";
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
          elementId: "ytMSJPhKJxFWXva_content_0",
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
        funcESAtomytMSJPhKJxFWXva_content_0()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_content_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingText_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingText_0";
  var id = "ytMSJPhKJxFWXva_headingText_0";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingText_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingText_0",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingText_0()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingText_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxImage_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxImage_1";
  var id = "ytMSJPhKJxFWXva_boxImage_1";
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
          elementId: "ytMSJPhKJxFWXva_boxImage_1",
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
        funcESAtomytMSJPhKJxFWXva_boxImage_1()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxImage_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_image_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_image_1";
  var id = "ytMSJPhKJxFWXva_image_1";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_image_1",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_image_1()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_image_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_content_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_content_1";
  var id = "ytMSJPhKJxFWXva_content_1";
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
          elementId: "ytMSJPhKJxFWXva_content_1",
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
        funcESAtomytMSJPhKJxFWXva_content_1()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_content_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingText_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingText_1";
  var id = "ytMSJPhKJxFWXva_headingText_1";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingText_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingText_1",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingText_1()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingText_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxImage_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxImage_2";
  var id = "ytMSJPhKJxFWXva_boxImage_2";
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
          elementId: "ytMSJPhKJxFWXva_boxImage_2",
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
        funcESAtomytMSJPhKJxFWXva_boxImage_2()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxImage_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_image_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_image_2";
  var id = "ytMSJPhKJxFWXva_image_2";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_image_2",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_image_2()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_image_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_content_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_content_2";
  var id = "ytMSJPhKJxFWXva_content_2";
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
          elementId: "ytMSJPhKJxFWXva_content_2",
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
        funcESAtomytMSJPhKJxFWXva_content_2()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_content_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingText_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingText_2";
  var id = "ytMSJPhKJxFWXva_headingText_2";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingText_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingText_2",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingText_2()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingText_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxImage_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxImage_3";
  var id = "ytMSJPhKJxFWXva_boxImage_3";
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
          elementId: "ytMSJPhKJxFWXva_boxImage_3",
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
        funcESAtomytMSJPhKJxFWXva_boxImage_3()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxImage_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_image_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_image_3";
  var id = "ytMSJPhKJxFWXva_image_3";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_image_3",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_image_3()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_image_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_content_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_content_3";
  var id = "ytMSJPhKJxFWXva_content_3";
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
          elementId: "ytMSJPhKJxFWXva_content_3",
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
        funcESAtomytMSJPhKJxFWXva_content_3()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_content_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingText_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingText_3";
  var id = "ytMSJPhKJxFWXva_headingText_3";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingText_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingText_3",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingText_3()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingText_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxImage_4 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxImage_4";
  var id = "ytMSJPhKJxFWXva_boxImage_4";
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
          elementId: "ytMSJPhKJxFWXva_boxImage_4",
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
        funcESAtomytMSJPhKJxFWXva_boxImage_4()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxImage_4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_image_4 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_image_4";
  var id = "ytMSJPhKJxFWXva_image_4";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_image_4",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_image_4()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_image_4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_content_4 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_content_4";
  var id = "ytMSJPhKJxFWXva_content_4";
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
          elementId: "ytMSJPhKJxFWXva_content_4",
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
        funcESAtomytMSJPhKJxFWXva_content_4()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_content_4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingText_4 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingText_4";
  var id = "ytMSJPhKJxFWXva_headingText_4";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingText_4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingText_4",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingText_4()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingText_4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxImage_5 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxImage_5";
  var id = "ytMSJPhKJxFWXva_boxImage_5";
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
          elementId: "ytMSJPhKJxFWXva_boxImage_5",
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
        funcESAtomytMSJPhKJxFWXva_boxImage_5()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxImage_5" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_image_5 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_image_5";
  var id = "ytMSJPhKJxFWXva_image_5";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_image_5",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_image_5()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_image_5" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_content_5 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_content_5";
  var id = "ytMSJPhKJxFWXva_content_5";
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
          elementId: "ytMSJPhKJxFWXva_content_5",
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
        funcESAtomytMSJPhKJxFWXva_content_5()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_content_5" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingText_5 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingText_5";
  var id = "ytMSJPhKJxFWXva_headingText_5";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingText_5",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingText_5",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingText_5()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingText_5" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxImage_6 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxImage_6";
  var id = "ytMSJPhKJxFWXva_boxImage_6";
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
          elementId: "ytMSJPhKJxFWXva_boxImage_6",
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
        funcESAtomytMSJPhKJxFWXva_boxImage_6()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxImage_6" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_image_6 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_image_6";
  var id = "ytMSJPhKJxFWXva_image_6";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_image_6",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_image_6()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_image_6" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_content_6 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_content_6";
  var id = "ytMSJPhKJxFWXva_content_6";
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
          elementId: "ytMSJPhKJxFWXva_content_6",
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
        funcESAtomytMSJPhKJxFWXva_content_6()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_content_6" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingText_6 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingText_6";
  var id = "ytMSJPhKJxFWXva_headingText_6";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingText_6",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingText_6",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingText_6()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingText_6" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_boxImage_7 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_boxImage_7";
  var id = "ytMSJPhKJxFWXva_boxImage_7";
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
          elementId: "ytMSJPhKJxFWXva_boxImage_7",
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
        funcESAtomytMSJPhKJxFWXva_boxImage_7()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_boxImage_7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_image_7 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_image_7";
  var id = "ytMSJPhKJxFWXva_image_7";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_image_7",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_image_7()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_image_7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_content_7 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_content_7";
  var id = "ytMSJPhKJxFWXva_content_7";
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
          elementId: "ytMSJPhKJxFWXva_content_7",
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
        funcESAtomytMSJPhKJxFWXva_content_7()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_content_7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingText_7 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingText_7";
  var id = "ytMSJPhKJxFWXva_headingText_7";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingText_7",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingText_7",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingText_7()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingText_7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slide = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slide";
  var id = "ytMSJPhKJxFWXva_slide";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var loop = "true" === "true";
    var autoplay = "true" === "true";
    var centeredSlides = "false" === "true";
    var slideAutoHeight = "false" === "true";
    var mode = "production";
    var checkWindowWidth = $(window).width();
    var widthSliderCurrent;
    var slidesPerView_lg = "4";
    var slidesPerView_md = "3";
    var slidesPerView_sm = "2";
    var slidesPerView_xs = "1";
    var slidesPerColumn_lg = "1";
    var slidesPerColumn_md = "1";
    var slidesPerColumn_sm = "1";
    var slidesPerColumn_xs = "1";
    var spaceBetween_lg = parseInt("32") || 1;
    var spaceBetween_md = parseInt("16") || 1;
    var spaceBetween_sm = parseInt("16") || 1;
    var spaceBetween_xs = parseInt("0") || 1;
    var widthActive = "false" === "true";
    var widthSlider = "100%";
    var widthSlider_lg = "100%";
    var widthSlider_md = "100%";
    var widthSlider_sm = "100%";
    var widthSlider_xs = "100%";
    var autoPlayTime = parseInt("3") || 3;
    var mySwiper;
    var objectSetting;

    var dotsPagination = "dots" === "dots";
    var customPagination = "dots" === "custom";
    /* store get state block script */
    /* methods block script */
    function initSlider() {
      var $swiperContainer = $element.find(".gt_slider");
      if (!$swiperContainer || !$swiperContainer.length) {
        return;
      }
      if (dotsPagination) {
        if (slideAutoHeight) {
          var slideAutoHeight1 = slideAutoHeight;
        } else {
          var slideAutoHeight1 = false;
        }
        objectSetting = {
          autoHeight: slideAutoHeight1,
          speed: 800,
          loop: loop,
          centeredSlides: centeredSlides,
          touchStartPreventDefault: mode === "dev" ? false : true,
          slidesPerView: 1,
          autoplay: autoplay ? {
            delay: autoPlayTime * 1000,
            disableOnInteraction: false,
          } : false,
          navigation: {
            nextEl: "#gt_control-next-ytMSJPhKJxFWXva_slide",
            prevEl: "#gt_control-prev-ytMSJPhKJxFWXva_slide",
          },
          pagination: {
            el: "#gt_control-pagination-ytMSJPhKJxFWXva_slide",
            type: 'custom',
            clickable: true,
            renderCustom: function(swiper, current, total) {
              var customPaginationHtml = "";
              for (var i = 0; i < total; i++) {
                if (i == (current - 1)) {
                  customPaginationHtml += `<div class="gt_control-pagination-item swiper-pagination-bullet swiper-pagination-bullet-active">
                        <span data-optimize-type="icon"  data-attribute="iconDotsActive,"  data-section-id="ytMSJPhKJxFWXva_slide"  class="gt_icon"><svg width="100%" height="100%" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="8" rx="4" fill="currentColor"/>
</svg>
</span> </div> `;
                } else {
                  customPaginationHtml += `<div class="gt_control-pagination-item swiper-pagination-bullet">
                        <span data-optimize-type="icon"  data-attribute="iconDots,"  data-section-id="ytMSJPhKJxFWXva_slide"  class="gt_icon"><svg height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 22C13.05 22 13.5 21.55 13.5 21V3C13.5 2.45 13.05 2 12.5 2C11.95 2 11.5 2.45 11.5 3V21C11.5 21.55 11.95 22 12.5 22ZM8.5 18C9.05 18 9.5 17.55 9.5 17V7C9.5 6.45 9.05 6 8.5 6C7.95 6 7.5 6.45 7.5 7V17C7.5 17.55 7.95 18 8.5 18ZM5.5 13C5.5 13.55 5.05 14 4.5 14C3.95 14 3.5 13.55 3.5 13V11C3.5 10.45 3.95 10 4.5 10C5.05 10 5.5 10.45 5.5 11V13ZM16.5 18C17.05 18 17.5 17.55 17.5 17V7C17.5 6.45 17.05 6 16.5 6C15.95 6 15.5 6.45 15.5 7V17C15.5 17.55 15.95 18 16.5 18ZM19.5 13V11C19.5 10.45 19.95 10 20.5 10C21.05 10 21.5 10.45 21.5 11V13C21.5 13.55 21.05 14 20.5 14C19.95 14 19.5 13.55 19.5 13Z" fill="currentColor"/> </svg></span>
                        </div>`;
                }
              }
              return customPaginationHtml;
            }
          },
          breakpoints: {
            0: {
              slidesPerView: slidesPerView_xs,
              spaceBetween: spaceBetween_xs,
              slidesPerColumn: slidesPerColumn_xs,
              slidesPerColumnFill: 'row',
            },
            577: {
              slidesPerView: slidesPerView_sm,
              spaceBetween: spaceBetween_sm,
              slidesPerColumn: slidesPerColumn_sm,
              slidesPerColumnFill: 'row',
            },
            993: {
              slidesPerView: slidesPerView_md,
              spaceBetween: spaceBetween_md,
              slidesPerColumn: slidesPerColumn_md,
              slidesPerColumnFill: 'row',
            },
            1201: {
              slidesPerView: slidesPerView_lg,
              spaceBetween: spaceBetween_lg,
              slidesPerColumn: slidesPerColumn_lg,
              slidesPerColumnFill: 'row',
            },
          },
          on: {
            init: function() {
              const $images = $swiperContainer.find(".gt_lazyload").not(".gt_lazyloaded");
              if ($images && $images.length && window.SOLID.library && window.SOLID.library.gtLazyload) {
                for (var i = 0; i < $images.length; i++) {
                  window.SOLID.library.gtLazyload($images[i]);
                }
              }
            }
          }
        }
      } else if (customPagination) {
        if (slideAutoHeight) {
          var slideAutoHeight2 = slideAutoHeight;
        } else {
          var slideAutoHeight2 = false;
        }
        objectSetting = {
          autoHeight: slideAutoHeight2,
          speed: 800,
          loop: loop,
          centeredSlides: centeredSlides,
          touchStartPreventDefault: mode === "dev" ? false : true,
          slidesPerView: 1,
          autoplay: autoplay ? {
            delay: autoPlayTime * 1000,
            disableOnInteraction: false,
          } : false,
          navigation: {
            nextEl: "#gt_control-next-ytMSJPhKJxFWXva_slide",
            prevEl: "#gt_control-prev-ytMSJPhKJxFWXva_slide",
          },

          pagination: {
            el: "#gt_control-pagination-ytMSJPhKJxFWXva_slide",
            clickable: true,
            renderBullet: function(index, className) {
              index = index + 1;
              if (index < 10) {
                index = "0" + index;
              }
              return '<span class="' + className + '">' + index + '.' + "</span>";
            }
          },
          breakpoints: {
            0: {
              slidesPerView: slidesPerView_xs,
              spaceBetween: spaceBetween_xs,
              slidesPerColumn: slidesPerColumn_xs,
              slidesPerColumnFill: 'row',
            },
            577: {
              slidesPerView: slidesPerView_sm,
              spaceBetween: spaceBetween_sm,
              slidesPerColumn: slidesPerColumn_sm,
              slidesPerColumnFill: 'row',
            },
            993: {
              slidesPerView: slidesPerView_md,
              spaceBetween: spaceBetween_md,
              slidesPerColumn: slidesPerColumn_md,
              slidesPerColumnFill: 'row',
            },
            1201: {
              slidesPerView: slidesPerView_lg,
              spaceBetween: spaceBetween_lg,
              slidesPerColumn: slidesPerColumn_lg,
              slidesPerColumnFill: 'row',
            },
          },
          on: {
            init: function() {
              const $images = $swiperContainer.find(".gt_lazyload").not(".gt_lazyloaded");
              if ($images && $images.length && window.SOLID.library && window.SOLID.library.gtLazyload) {
                for (var i = 0; i < $images.length; i++) {
                  window.SOLID.library.gtLazyload($images[i]);
                }
              }
            }
          }
        }
      }

      $swiperContainer.find(".swiper-wrapper").children().addClass("swiper-slide");

      if ($swiperContainer.find(".swiper-slide").length == 1) {
        $swiperContainer.find(".swiper-wrapper").addClass("gt_disabled");
        $element.find(".gt_control").addClass("gt_disabled");
      }

      if ($swiperContainer[0].swiper) {
        mySwiper = $swiperContainer[0].swiper;
        mySwiper.destroy();
      }
      mySwiper = new Swiper($swiperContainer[0], objectSetting);
    }

    function changeSliderActive(value) {
      if (value && value.sliderIndex !== NaN) {
        if (loop) {
          mySwiper.slideToLoop(value.sliderIndex, 500, true);
        } else {
          mySwiper.slideTo(value.sliderIndex, 500, true);
        }
      }
    }

    function optimizeSlidePerView(value) {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        slidesPerView_xs = value;
      } else if (checkWindowWidth <= 992) {
        slidesPerView_sm = value;
      } else if (checkWindowWidth <= 1200) {
        slidesPerView_md = value;
      } else {
        slidesPerView_lg = value;
      }
      initSlider();
    }

    function optimizeWidthSlider(value) {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        widthSlider_xs = value;
      } else if (checkWindowWidth <= 992) {
        widthSlider_sm = value;
      } else if (checkWindowWidth <= 1200) {
        widthSlider_md = value;
      } else {
        widthSlider_lg = widthSlider = value;
      }
      $element.css("cssText", "width: " + value + " !important;");
      mySwiper.update();
    }

    function optimizeWidthActive(value) {
      widthActive = value;
      if (!value) {
        $element.css("cssText", "width: null");
      } else {
        checkWindowWidth = $(window).width();
        widthSliderCurrent = 0;
        if (checkWindowWidth <= 576) {
          widthSliderCurrent = widthSlider_xs;
        } else if (checkWindowWidth <= 992) {
          widthSliderCurrent = widthSlider_sm;
        } else if (checkWindowWidth <= 1200) {
          widthSliderCurrent = widthSlider_md;
        } else {
          widthSliderCurrent = widthSlider;
        }
        $element.css("cssText", "width: " + widthSliderCurrent + " !important;");
      }
    }

    function listen() {
      let observer = new ResizeObserver(() => {
        if (mySwiper) {
          mySwiper.update()
        }
      })
      observer.observe($element[0]);
    }
    /* init block script */
    listen();
    //eslint-disable-next-lineno-undef
    if (mode !== "production") {
      autoplay = false;
    }
    initSlider();
    var delay = 0;

    /* store subscribe block script */
    store.subscribe("optimal-ytMSJPhKJxFWXva_slide-slidesPerView", optimizeSlidePerView);
    store.subscribe("optimal-ytMSJPhKJxFWXva_slide-widthSlider", optimizeWidthSlider);
    store.subscribe("optimal-ytMSJPhKJxFWXva_slide-widthActive", optimizeWidthActive);
    store.subscribe("trigger-slider-ytMSJPhKJxFWXva_slide", changeSliderActive);

    function destroy() {
      store.unsubscribe("optimal-ytMSJPhKJxFWXva_slide-slidesPerView", optimizeSlidePerView);
      store.unsubscribe("optimal-ytMSJPhKJxFWXva_slide-widthSlider", optimizeWidthSlider);
      store.unsubscribe("optimal-ytMSJPhKJxFWXva_slide-widthActive", optimizeWidthActive);
      store.unsubscribe("trigger-slider-ytMSJPhKJxFWXva_slide", changeSliderActive);
    }
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
        funcESAtomytMSJPhKJxFWXva_slide()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slide" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slideItem_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slideItem_0";
  var id = "ytMSJPhKJxFWXva_slideItem_0";
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
          elementId: "ytMSJPhKJxFWXva_slideItem_0",
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
        funcESAtomytMSJPhKJxFWXva_slideItem_0()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slideItem_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_imageItem_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_imageItem_0";
  var id = "ytMSJPhKJxFWXva_imageItem_0";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_imageItem_0",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_imageItem_0()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_imageItem_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_contentItem_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_contentItem_0";
  var id = "ytMSJPhKJxFWXva_contentItem_0";
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
          elementId: "ytMSJPhKJxFWXva_contentItem_0",
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
        funcESAtomytMSJPhKJxFWXva_contentItem_0()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_contentItem_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingTextItem_0 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingTextItem_0";
  var id = "ytMSJPhKJxFWXva_headingTextItem_0";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_0",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_0",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingTextItem_0()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingTextItem_0" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slideItem_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slideItem_1";
  var id = "ytMSJPhKJxFWXva_slideItem_1";
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
          elementId: "ytMSJPhKJxFWXva_slideItem_1",
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
        funcESAtomytMSJPhKJxFWXva_slideItem_1()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slideItem_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_imageItem_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_imageItem_1";
  var id = "ytMSJPhKJxFWXva_imageItem_1";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_imageItem_1",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_imageItem_1()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_imageItem_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_contentItem_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_contentItem_1";
  var id = "ytMSJPhKJxFWXva_contentItem_1";
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
          elementId: "ytMSJPhKJxFWXva_contentItem_1",
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
        funcESAtomytMSJPhKJxFWXva_contentItem_1()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_contentItem_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingTextItem_1 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingTextItem_1";
  var id = "ytMSJPhKJxFWXva_headingTextItem_1";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_1",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingTextItem_1()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingTextItem_1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slideItem_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slideItem_2";
  var id = "ytMSJPhKJxFWXva_slideItem_2";
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
          elementId: "ytMSJPhKJxFWXva_slideItem_2",
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
        funcESAtomytMSJPhKJxFWXva_slideItem_2()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slideItem_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_imageItem_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_imageItem_2";
  var id = "ytMSJPhKJxFWXva_imageItem_2";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_imageItem_2",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_imageItem_2()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_imageItem_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_contentItem_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_contentItem_2";
  var id = "ytMSJPhKJxFWXva_contentItem_2";
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
          elementId: "ytMSJPhKJxFWXva_contentItem_2",
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
        funcESAtomytMSJPhKJxFWXva_contentItem_2()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_contentItem_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingTextItem_2 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingTextItem_2";
  var id = "ytMSJPhKJxFWXva_headingTextItem_2";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_2",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingTextItem_2()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingTextItem_2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slideItem_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slideItem_3";
  var id = "ytMSJPhKJxFWXva_slideItem_3";
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
          elementId: "ytMSJPhKJxFWXva_slideItem_3",
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
        funcESAtomytMSJPhKJxFWXva_slideItem_3()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slideItem_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_imageItem_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_imageItem_3";
  var id = "ytMSJPhKJxFWXva_imageItem_3";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_imageItem_3",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_imageItem_3()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_imageItem_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_contentItem_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_contentItem_3";
  var id = "ytMSJPhKJxFWXva_contentItem_3";
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
          elementId: "ytMSJPhKJxFWXva_contentItem_3",
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
        funcESAtomytMSJPhKJxFWXva_contentItem_3()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_contentItem_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingTextItem_3 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingTextItem_3";
  var id = "ytMSJPhKJxFWXva_headingTextItem_3";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_3",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingTextItem_3()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingTextItem_3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slideItem_4 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slideItem_4";
  var id = "ytMSJPhKJxFWXva_slideItem_4";
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
          elementId: "ytMSJPhKJxFWXva_slideItem_4",
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
        funcESAtomytMSJPhKJxFWXva_slideItem_4()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slideItem_4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_imageItem_4 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_imageItem_4";
  var id = "ytMSJPhKJxFWXva_imageItem_4";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_imageItem_4",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_imageItem_4()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_imageItem_4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_contentItem_4 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_contentItem_4";
  var id = "ytMSJPhKJxFWXva_contentItem_4";
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
          elementId: "ytMSJPhKJxFWXva_contentItem_4",
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
        funcESAtomytMSJPhKJxFWXva_contentItem_4()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_contentItem_4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingTextItem_4 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingTextItem_4";
  var id = "ytMSJPhKJxFWXva_headingTextItem_4";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_4",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_4",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingTextItem_4()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingTextItem_4" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slideItem_5 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slideItem_5";
  var id = "ytMSJPhKJxFWXva_slideItem_5";
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
          elementId: "ytMSJPhKJxFWXva_slideItem_5",
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
        funcESAtomytMSJPhKJxFWXva_slideItem_5()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slideItem_5" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_imageItem_5 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_imageItem_5";
  var id = "ytMSJPhKJxFWXva_imageItem_5";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_imageItem_5",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_imageItem_5()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_imageItem_5" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_contentItem_5 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_contentItem_5";
  var id = "ytMSJPhKJxFWXva_contentItem_5";
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
          elementId: "ytMSJPhKJxFWXva_contentItem_5",
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
        funcESAtomytMSJPhKJxFWXva_contentItem_5()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_contentItem_5" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingTextItem_5 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingTextItem_5";
  var id = "ytMSJPhKJxFWXva_headingTextItem_5";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_5",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_5",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingTextItem_5()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingTextItem_5" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slideItem_6 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slideItem_6";
  var id = "ytMSJPhKJxFWXva_slideItem_6";
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
          elementId: "ytMSJPhKJxFWXva_slideItem_6",
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
        funcESAtomytMSJPhKJxFWXva_slideItem_6()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slideItem_6" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_imageItem_6 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_imageItem_6";
  var id = "ytMSJPhKJxFWXva_imageItem_6";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_imageItem_6",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_imageItem_6()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_imageItem_6" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_contentItem_6 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_contentItem_6";
  var id = "ytMSJPhKJxFWXva_contentItem_6";
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
          elementId: "ytMSJPhKJxFWXva_contentItem_6",
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
        funcESAtomytMSJPhKJxFWXva_contentItem_6()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_contentItem_6" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingTextItem_6 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingTextItem_6";
  var id = "ytMSJPhKJxFWXva_headingTextItem_6";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_6",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_6",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingTextItem_6()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingTextItem_6" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_slideItem_7 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_slideItem_7";
  var id = "ytMSJPhKJxFWXva_slideItem_7";
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
          elementId: "ytMSJPhKJxFWXva_slideItem_7",
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
        funcESAtomytMSJPhKJxFWXva_slideItem_7()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_slideItem_7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_imageItem_7 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_imageItem_7";
  var id = "ytMSJPhKJxFWXva_imageItem_7";
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
    function checkDimensions() {
      var widthImage = $(elementClassName).find("img").width();
      var heightImage = $(elementClassName).find("img").height();
      $(elementClassName).find("img").attr('width', widthImage);
      $(elementClassName).find("img").attr('height', heightImage);
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "ytMSJPhKJxFWXva_imageItem_7",
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
    checkDimensions();
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
        funcESAtomytMSJPhKJxFWXva_imageItem_7()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_imageItem_7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_contentItem_7 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_contentItem_7";
  var id = "ytMSJPhKJxFWXva_contentItem_7";
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
          elementId: "ytMSJPhKJxFWXva_contentItem_7",
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
        funcESAtomytMSJPhKJxFWXva_contentItem_7()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_contentItem_7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomytMSJPhKJxFWXva_headingTextItem_7 = function() {
          (function() {
  var elementClassName = ".gt_atom-ytMSJPhKJxFWXva_headingTextItem_7";
  var id = "ytMSJPhKJxFWXva_headingTextItem_7";
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
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_7",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "ytMSJPhKJxFWXva_headingTextItem_7",
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
    if (activeTextFixed) {
      initFixedContent();
    }
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
        funcESAtomytMSJPhKJxFWXva_headingTextItem_7()
      } catch(e) {
        console.error("Error ESAtom Id: ytMSJPhKJxFWXva_headingTextItem_7" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESElement87938 = function() {
          function main() {
  var $elementProduct = $(".gt_element-87938");
  const hideZeroPrice = "false" === "true";
  
  var widthImage = $elementProduct.find("img").width();
  var heightImage = $elementProduct.find("img").height();
  $elementProduct.find("img").attr('width', widthImage);
  $elementProduct.find("img").attr('height', heightImage);

  var $price = $elementProduct.find(".gt_product-price");
  if ($price && $price.length > 0) {
    $price.gtProductPrice({
      classCurrentPrice: ".gt_product-price--origin .gt_product-price--current",
      classComparePrice: ".gt_product-price--origin .gt_product-price--compare",
      hideZeroPrice: hideZeroPrice
    });
  }

  var $featureImage = $elementProduct.find(".gt_product-image");
  if ($featureImage && $featureImage.length > 0) {
    $featureImage.gtProductFeatureImage({
      classFeatureImage: ".gt_product-image--front, .gt_product-image--back",
      classImages: null,
      carousel: null,
      owlCarousel: null,
    });
  }

  var $swatches = $elementProduct.find(".gt_product_variants");
  if ($swatches && $swatches.length > 0) {
    $swatches.gtProductSwatches({
      classCurrentValue: ".gt_product-variant-option--selected span",
      classCurrentStatus: ".gt_product-sold-out-tag",
      classItem: ".gt_product-variant-option",
      classInputIdHidden: ".gt_swatches--input",
      classBtnSelect: ".gt_swatches--select",
    });
  }

  var productDisplaySaleLabel = "[!Profit!] off";
  var productDisplaySaleLabelNew = "[!Profit!] off";
  var presetsStyleProduct = "style_default";
  var $saved = $elementProduct.find(".gt_product-sale-tag");
  if ($saved && $saved.length > 0) {
    $saved.gtProductSaved({
      classTextPercent: ".gt_product-sale-tag--value--percent",
      classTextNumber: ".gt_product-sale-tag--value--number",
      dataFormat: presetsStyleProduct == "style_default" ? productDisplaySaleLabel : productDisplaySaleLabelNew,
      dataFormatKey: "[!Profit!]",
      customCurrencyFormating: "shortPrefix"
    });
  }

  var $variantChecked = $elementProduct.find(".gt_product-variant--checked");
  var $variantOptions = $elementProduct.find(".gt_product-variant-options");
  var $variantOption = $elementProduct.find(".gt_product-variant-option");

  $variantChecked.off("click.selectItem87938").on("click.selectItem87938", function() {
    var $options = $(this).siblings(".gt_product-variant-options");
    if($options.hasClass("gt_active")) {
      $options.removeClass("gt_active");
      $(this).removeClass("gt_active");
    } else {
      $variantOptions.removeClass("gt_active");
      $options.addClass("gt_active");
      $(this).addClass("gt_active");
    }
  });

  $variantOption.off("click.selectItem87938").on("click.selectItem87938", function() {
    $variantChecked.removeClass('gt_active');
    $variantOptions.removeClass('gt_active');
    var value = $(this).attr("data-value");
    var $variantCheckedCurrent =  $(this).closest(".gt_product-variant-box");
    $variantCheckedCurrent.find(".gt_product-variant--checked .gt_product-variant-option--selected span").html(value);
  });
}

main();

window.SOLID.store.subscribe("run-script-87938", () => {
  main();
});

        }
        funcESElement87938()
      } catch(e) {
        console.error("Error ESElement Id: 87938" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom87938_productTitle = function() {
          var $atoms = jQuery(".gt_atom-87938_productTitle");
if (!$atoms || !$atoms.length) {
  return;
}

/* Variables */
var clientInteractionScrollIntoView = "fade-up";

window.SOLID.library.animation({
  $doms: $atoms,
  elementId: "87938_productTitle",
  animationType: "text",
  interactionScrollIntoView: {
    value: clientInteractionScrollIntoView,
    previewAttr: "interactionScrollIntoView"
  },
  mode: "production"
});

        }
        funcESAtom87938_productTitle()
      } catch(e) {
        console.error("Error ESAtom Id: 87938_productTitle" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom87938_productVendor = function() {
          var $atoms = jQuery(".gt_atom-87938_productVendor");
if (!$atoms || !$atoms.length) {
  return;
}

/* Variables */
var clientInteractionScrollIntoView = "";

window.SOLID.library.animation({
  $doms: $atoms,
  elementId: "87938_productVendor",
  animationType: "text",
  interactionScrollIntoView: {
    value: clientInteractionScrollIntoView,
    previewAttr: "interactionScrollIntoView"
  },
  mode: "production"
});

        }
        funcESAtom87938_productVendor()
      } catch(e) {
        console.error("Error ESAtom Id: 87938_productVendor" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom87938_productButtonBuy = function() {
          function main() {
  /* Init Actions */
  var $atoms = jQuery(".gt_atom-87938_productButtonBuy");
  if (!$atoms || !$atoms.length) {
    return;
  }
  /* Variables */
  const interactionHover = {"name":"none","duration":"1.5","delay":0,"iterationCount":1};
  const interactionNormal = {"name":"none","duration":"1.5","delay":0,"iterationCount":"infinite"};
  const interactionWhilePress = {"name":"none","duration":"1.5","delay":0,"iterationCount":1};
  const interactionScrollIntoView = "";
  // animation
  window.SOLID.library.animation({
    elementId: "87938_productButtonBuy",
    $doms: $atoms,
    interactionNormal: {
      value: interactionNormal,
      previewAttr: "interactionButton"
    },
    interactionHover: {
      value: interactionHover,
      previewAttr: "interactionButtonHover"
    },
    interactionWhilePress: {
      value: interactionWhilePress,
      previewAttr: "interactionButtonWhitePress"
    },
    interactionScrollIntoView: {
      value: interactionScrollIntoView,
      previewAttr: "interactionScrollIntoView"
    },
    animationType: "block",
    mode: "production",
  })

  for (let i = 0; i < $atoms.length; i++) {
    const $atom = $atoms[i];
    // function customEvent(actions, id, key)
    
      $($atom).customEvent([{"control":{"attribute":"pickProductButton","id":"pickProductButton","isButtonAddToCard":true,"type":"pickproduct"},"event":"click","id":1},{"control":{"attribute":"pickLinkButton","id":"pickLinkButton","newTab":false,"reference":"html","title":"Pick Link","type":"picklink","value":"/cart"},"event":"click","id":2}], "87938_productButtonBuy" + "_" + i);
    

    /* Listen if is button add to card */

    window.SOLID.store.subscribe("loading-buy-now-87938_productButtonBuy" + "_" + i, function (isDisplay) {
      const $loadingEl = $($atom).find(".atom-button-loading-circle-loader");
      const $textEl = $($atom).find(".gt_button-content-text");
      if ($loadingEl && $loadingEl.length && $textEl && $textEl.length) {
        let timeout = undefined;
        if (isDisplay === true) {
          /* display loading button */
          clearTimeout(timeout);
          $loadingEl.css("display", "inline-block");
          $textEl.css("visibility", "hidden");
        } else if (isDisplay === "stop") {
          /* stop loading */
          $loadingEl.removeAttr("style");
          $textEl.removeAttr("style");
          window.SOLID.store.dispatch("loading-buy-now-87938_productButtonBuy", "");
          window.SOLID.store.dispatch("loading-buy-now-87938_productButtonBuy" + "_" + i, "");
        } else if (isDisplay === false){
          clearTimeout(timeout);
          /* display tick button */
          $loadingEl.addClass("load-complete");
          $loadingEl.find(".atom-button-loading-check-mark").css("display", "block");
          /* remove tick button and display text*/
          timeout = setTimeout(function() {
            $loadingEl.removeClass("load-complete");
            $loadingEl.find(".atom-button-loading-check-mark").removeAttr("style");
            $loadingEl.removeAttr("style");
            $textEl.removeAttr("style");
            window.SOLID.store.dispatch("loading-buy-now-87938_productButtonBuy", "");
            window.SOLID.store.dispatch("loading-buy-now-87938_productButtonBuy" + "_" + i, "");
          }, 3000);
        }
      }
    });
  }
  for (let i = 0; i < $atoms.length; i++) {
    const $atom = $atoms[i];
    
        window.SOLID.library.gtBuyProductListenSoldOut({
          $element: $atom,
          options: {
            isButtonAddToCard: true, 
            textAddToCard: "Add", 
            textSoldOut: "Sold out"
          }
        })
    
    
  }
}

main();

window.SOLID.store.subscribe("run-script-87938_productButtonBuy", () => {
  main();
});

        }
        funcESAtom87938_productButtonBuy()
      } catch(e) {
        console.error("Error ESAtom Id: 87938_productButtonBuy" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom87938_productIconBuy = function() {
          function main() {
  /* Init Actions */
  var $atoms = jQuery(".gt_atom-87938_productIconBuy");
  if (!$atoms || !$atoms.length) {
    return;
  }
  /* Variables */
  const interactionHover = {"name":"none","duration":"1.5","delay":0,"iterationCount":1};
  const interactionNormal = {"name":"none","duration":"1.5","delay":0,"iterationCount":"infinite"};
  const interactionWhilePress = {"name":"none","duration":"1.5","delay":0,"iterationCount":1};
  const interactionScrollIntoView = "";
  // animation
  window.SOLID.library.animation({
    elementId: "87938_productIconBuy",
    $doms: $atoms,
    interactionNormal: {
      value: interactionNormal,
      previewAttr: "interactionButton"
    },
    interactionHover: {
      value: interactionHover,
      previewAttr: "interactionButtonHover"
    },
    interactionWhilePress: {
      value: interactionWhilePress,
      previewAttr: "interactionButtonWhitePress"
    },
    interactionScrollIntoView: {
      value: interactionScrollIntoView,
      previewAttr: "interactionScrollIntoView"
    },
    animationType: "block",
    mode: "production",
  })

  for (let i = 0; i < $atoms.length; i++) {
    const $atom = $atoms[i];
    // function customEvent(actions, id, key)
    
      $($atom).customEvent([{"control":{"attribute":"pickProductButton","id":"pickProductButton","type":"pickproduct","isButtonAddToCard":true},"event":"click","id":1},{"control":{"attribute":"pickLinkButton","id":"pickLinkButton","newTab":false,"reference":"html","title":"Pick Link","type":"picklink","value":"/cart"},"event":"click","id":2}], "87938_productIconBuy" + "_" + i);
    

    /* Listen if is button add to card */

    window.SOLID.store.subscribe("loading-buy-now-87938_productIconBuy" + "_" + i, function (isDisplay) {
      const $loadingEl = $($atom).find(".atom-button-loading-circle-loader");
      const $textEl = $($atom).find(".gt_button-content-text");
      if ($loadingEl && $loadingEl.length && $textEl && $textEl.length) {
        let timeout = undefined;
        if (isDisplay === true) {
          /* display loading button */
          clearTimeout(timeout);
          $loadingEl.css("display", "inline-block");
          $textEl.css("visibility", "hidden");
        } else if (isDisplay === "stop") {
          /* stop loading */
          $loadingEl.removeAttr("style");
          $textEl.removeAttr("style");
          window.SOLID.store.dispatch("loading-buy-now-87938_productIconBuy", "");
          window.SOLID.store.dispatch("loading-buy-now-87938_productIconBuy" + "_" + i, "");
        } else if (isDisplay === false){
          clearTimeout(timeout);
          /* display tick button */
          $loadingEl.addClass("load-complete");
          $loadingEl.find(".atom-button-loading-check-mark").css("display", "block");
          /* remove tick button and display text*/
          timeout = setTimeout(function() {
            $loadingEl.removeClass("load-complete");
            $loadingEl.find(".atom-button-loading-check-mark").removeAttr("style");
            $loadingEl.removeAttr("style");
            $textEl.removeAttr("style");
            window.SOLID.store.dispatch("loading-buy-now-87938_productIconBuy", "");
            window.SOLID.store.dispatch("loading-buy-now-87938_productIconBuy" + "_" + i, "");
          }, 3000);
        }
      }
    });
  }
  for (let i = 0; i < $atoms.length; i++) {
    const $atom = $atoms[i];
    
        window.SOLID.library.gtBuyProductListenSoldOut({
          $element: $atom,
          options: {
            isButtonAddToCard: true, 
            textAddToCard: "", 
            textSoldOut: "Sold out"
          }
        })
    
    
  }
}

main();

window.SOLID.store.subscribe("run-script-87938_productIconBuy", () => {
  main();
});

        }
        funcESAtom87938_productIconBuy()
      } catch(e) {
        console.error("Error ESAtom Id: 87938_productIconBuy" )
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
  
    
  