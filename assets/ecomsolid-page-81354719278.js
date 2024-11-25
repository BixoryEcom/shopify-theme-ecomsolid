
  
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
        const funcLib8 = function() {
          "use strict";

/* gtProductButton */
(function (jQuery) {
  jQuery.gtProductButton = function (element, options) {
    var defaults = {
      type: null, //  null or ajax
      classText: null,
      button: null,
      TextSuccessfully: null,
      classTextSuccessfully: null,
      mode: "production",
      // loadingType: "filled" // "outlined"
    };

    this.settings = {};

    var $element = jQuery(element);
    var _this = this;
    var _productJson;

    this.init = function () {
      this.settings = jQuery.extend({}, defaults, options);
      var productJson = $element
        .closest("[keyword='product'], [data-keyword='product']")
        .find(".ProductJson")
        .text();

      try {
        if (productJson) {
          _productJson = JSON.parse(productJson);
        }
      } catch (e) {
        console.log(e);
      }
      _this.event();
      _this.listen();
    };
    this.event = function () {
      
      $element
        .find(_this.settings.classButton)
        .off("click.addtocart")
        .on("click.addtocart", addToCartHandler);

      function addToCartHandler(e) {
        var addons = window.SOLID.store.getState("addons");
        var cartDrawer;

        if (addons && addons.cart_drawer) {
          cartDrawer = addons.cart_drawer;
        }
        if (_this.settings.type == "ajax" || cartDrawer) {
          e.preventDefault();
          if (!$element.data("isBuying")) {
            var $product = $element.closest("[keyword='product'], [data-keyword='product']");
            var $buttonAddToCart = jQuery(this);
            var heightBtnAddToCart = $buttonAddToCart.outerHeight();

            $buttonAddToCart.css("position", "relative");
            $buttonAddToCart.css("height", heightBtnAddToCart + "px");
            var $loading = jQuery(
              '<div class="atom-button-loading-circle-loader"><div class="atom-button-loading-check-mark atom-button-loading-check-mark-draw"></div></div>'
            );
            var $styleLoading = jQuery("head").find("#gt_add-to-cart-animation--loading");

            if (!$styleLoading || !$styleLoading.length) {
              $styleLoading = jQuery(
                "<style type=\"text/css\" id=\"gt_add-to-cart-animation--loading\">\n" +
                ".atom-button-loading-circle-loader {\n" +
                "  position: absolute;\n" +
                "  left: calc(50% - 0.5em);\n" +
                "  top: calc(50% - 0.5em);\n" +
                "  border: 2px solid rgba(0, 0, 0, 0);\n" +
                "  border-left-color: currentColor;\n" +
                "  border-bottom-color: currentColor;\n" +
                "  animation: loader-spin 0.6s infinite linear;\n" +
                "  vertical-align: top;\n" +
                "  border-radius: 50%;\n" +
                "  width: 1em;\n" +
                "  height: 1em;\n" +
                "  border-width: calc(1em / 10);\n" +
                "}\n" +
                "\n" +
                ".load-complete {\n" +
                "  -webkit-animation: none;\n" +
                "  animation: none;\n" +
                "  border-color: currentColor;\n" +
                "  transition: border 500ms ease-out;\n" +
                "}\n" +
                "\n" +
                ".atom-button-loading-check-mark {\n" +
                "  display: none;\n" +
                "}\n" +
                "\n" +
                ".atom-button-loading-check-mark.atom-button-loading-check-mark-draw:after {\n" +
                "  animation-duration: 800ms;\n" +
                "  animation-timing-function: ease;\n" +
                "  animation-name: atom-button-loading-check-mark;\n" +
                "  transform: scaleX(-1) rotate(135deg);\n" +
                "}\n" +
                "\n" +
                ".atom-button-loading-check-mark:after {\n" +
                "  opacity: 1;\n" +
                "  transform-origin: left top;\n" +
                "  border-right: 2px solid #fff;\n" +
                "  border-top: 2px solid #fff;\n" +
                "  border-color: currentColor;\n" +
                "  content: '';\n" +
                "  position: absolute;\n" +
                "  border-width: calc(1em / 10);\n" +
                "  width: calc(1em / 4);\n" +
                "  height: calc(1em / 2);\n" +
                "  left: calc(1em / 4 - 1em / 10);\n" +
                "  top: calc(1em / 2 - 1em / 16);\n" +
                "}\n" +
                "\n" +
                "@keyframes loader-spin {\n" +
                "  0% {\n" +
                "    transform: rotate(0deg);\n" +
                "  }\n" +
                "\n" +
                "  100% {\n" +
                "    transform: rotate(360deg);\n" +
                "  }\n" +
                "}\n" +
                "\n" +
                "@keyframes atom-button-loading-check-mark {\n" +
                "  0% {\n" +
                "    height: 0px;\n" +
                "    width: 0px;\n" +
                "    opacity: 1;\n" +
                "  }\n" +
                "\n" +
                "  20% {\n" +
                "    height: 0px;\n" +
                "    width: calc(1em / 4);\n" +
                "    opacity: 1;\n" +
                "  }\n" +
                "\n" +
                "  40% {\n" +
                "    height: calc(1em / 2);\n" +
                "    width: calc(1em / 4);\n" +
                "    opacity: 1;\n" +
                "  }\n" +
                " \n" +
                "  100% {\n" +
                "    height: calc(1em / 2);\n" +
                "    width: calc(1em / 4);\n" +
                "    opacity: 1;\n" +
                "  }\n" +
                "}\n" +
                "</style>"
              );
              jQuery("head").append($styleLoading);
            }
            var $cacheButtonHtml = $buttonAddToCart.html();

            $buttonAddToCart.html($loading);
            $element.data("isBuying", true);
            var $form = $element.closest("form");

            window.gfTheme.addItemFromForm($form, function (item, form, error) {
              window.store.update("addToCart", item);
              if (error) {
                try {
                  var responseText = JSON.parse(error.responseText);

                  if (responseText && responseText.description) {
                    // eslint-disable-next-line no-alert
                    alert(responseText.description);
                  }
                } catch (e) {
                  console.log(e);
                }
                $buttonAddToCart.css("position", "");
                $buttonAddToCart.css("height", "");
                $buttonAddToCart.html($cacheButtonHtml);
                $element.data("isBuying", false);
              } else {
                if (
                  _this.settings.classTextSuccessfully &&
                  _this.settings.TextSuccessfully
                ) {
                  $product
                    .find(_this.settings.classTextSuccessfully)
                    .text(_this.settings.TextSuccessfully);
                } else {
                  var $loadingEl = $buttonAddToCart.find(
                    ".atom-button-loading-circle-loader"
                  );

                  clearTimeout(window.timeoutLoading);
                  /* display tick button */
                  $loadingEl.addClass("load-complete");
                  $loadingEl
                    .find(".atom-button-loading-check-mark")
                    .css("display", "block");
                  /* remove tick button and display text*/
                  window.timeoutLoading = setTimeout(function () {
                    $buttonAddToCart.css("position", "");
                    $buttonAddToCart.css("height", "");
                    $buttonAddToCart.html($cacheButtonHtml);
                    $element.data("isBuying", false);
                  }, 2000);
                }
                if (cartDrawer) {
                  // mo cart drawer thi cartPopup = "cart_drawer"
                  window.SOLID.store.dispatch("openCartPopup", "cart_drawer");
                }
              }
            }, true);
          }
          return false;
        }
      }
    };
    this.listen = function () {
      var store = window.store;

      if (_productJson) {
        var currentVariant = store.get("variant" + _productJson.id);

        if (!currentVariant.available) {
          $element.find(_this.settings.classButton).attr("disabled", true);
        } else {
          $element.find(_this.settings.classButton).attr("disabled", false);
        }

        store.change("variant" + _productJson.id, function (variant) {
          if (variant.available) {
            $element.removeClass("gf_soldout");
            $element.removeClass("gt_soldout");
            var textAddToCart = $element.attr("data-addtocart");

            if (_this.settings.classText) {
              $element.find(_this.settings.classText).html(textAddToCart);
            }

            if (_this.settings.classButton) {
              $element.find(_this.settings.classButton).attr("disabled", false);
            }
          } else {
            $element.addClass("gf_soldout");
            $element.addClass("gt_soldout");
            var text = $element.attr("data-soldout");

            if (_this.settings.classText) {
              $element.find(_this.settings.classText).html(text);
            }

            if (_this.settings.classButton && _this.settings.mode === "production") {
              $element.find(_this.settings.classButton).attr("disabled", true);
            }
          }
        });
      }
    };
    this.init();
  };

  jQuery.fn.gtProductButton = function (options) {
    return this.each(function () {
      var plugin = new jQuery.gtProductButton(this, options, jQuery);

      jQuery(this).data("gtproductbutton", plugin);
    });
  };
})(jQuery);

        }
        funcLib8();
      } catch(e) {
        console.error("Error lib id: 8" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib107 = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
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
 * GtProductImagesV2
 */
var GtProductImagesV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params setting truyen vao thu vien
     */
    function GtProductImagesV2(params) {
        this.$element = $(params.$element);
        this.settings = __assign(__assign({}, this.settings), params.settings);
        this.init();
    }
    /**
     * init ham khoi tao thu vien
     */
    GtProductImagesV2.prototype.init = function () {
        var productJson = this.$element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();
        try {
            if (productJson) {
                this._productJson = JSON.parse(productJson);
            }
        }
        catch (e) {
            console.log("error: ", e);
        }
        this.findElementId();
        this.clearActiveImage();
        this.initSwiperSlide();
        this.setCurrentVariant();
        this.event();
        this.listen();
    };
    GtProductImagesV2.prototype.findElementId = function () {
        var _a;
        this.elementId = this.$element.attr("data-atom-id") || ((_a = this.$element.attr("class")) === null || _a === void 0 ? void 0 : _a.replaceAll(" ", "-")) || "undefined";
    };
    /**
     * Khởi tạo thư viện swiper slide
     */
    GtProductImagesV2.prototype.initSwiperSlide = function () {
        var _this_1 = this;
        var _a, _b, _c, _d, _e, _f;
        var carousel = this.$element.find(this.settings.classSwiperContainer);
        var productImagesSwiper;
        if (carousel && carousel.length) {
            this.$carousel = carousel[0];
            if (this.$carousel.swiper) {
                this.$carousel.swiper.destroy();
            }
            var extraSwiperProductListSetting = ((_b = (_a = window.SOLID.extraSettings) === null || _a === void 0 ? void 0 : _a[this.elementId]) === null || _b === void 0 ? void 0 : _b.swiperSetting) || {};
            var swiperProductListSetting = __assign(__assign({}, this.settings.swiperSetting), extraSwiperProductListSetting);
            productImagesSwiper = new window.Swiper(this.$carousel, swiperProductListSetting);
        }
        var $featureCarousel = this.$element.find(this.settings.classFeatureSwiperContainer);
        if (this.settings.featureSwiperSetting && $featureCarousel && $featureCarousel.length) {
            if ($featureCarousel && $featureCarousel.length) {
                if (productImagesSwiper) {
                    this.settings.featureSwiperSetting.thumbs = {
                        swiper: productImagesSwiper,
                    };
                }
                var cacheEventImageReady_1 = (_d = (_c = this.settings.featureSwiperSetting) === null || _c === void 0 ? void 0 : _c.once) === null || _d === void 0 ? void 0 : _d.imagesReady;
                this.settings.featureSwiperSetting.once = {
                    imagesReady: function () {
                        if (cacheEventImageReady_1) {
                            cacheEventImageReady_1();
                        }
                        _this_1.activeProductImageByFeatureImage($featureCarousel);
                    },
                };
                this.$featureCarousel = $featureCarousel[0];
                // neu co roi thi destroy
                if (this.$featureCarousel.swiper) {
                    this.$featureCarousel.swiper.destroy();
                }
                // khoi tao swiper
                var extraSwiperFeatureSetting = ((_f = (_e = window.SOLID.extraSettings) === null || _e === void 0 ? void 0 : _e[this.elementId]) === null || _f === void 0 ? void 0 : _f.featureSwiperSetting) || {};
                var swiperFeatureSetting = __assign(__assign({}, this.settings.featureSwiperSetting), extraSwiperFeatureSetting);
                var featureSwiper = new window.Swiper(this.$featureCarousel, swiperFeatureSetting);
                // them su kien change slide cho product img swiper
                this.eventFeatureSwiper(featureSwiper, $featureCarousel);
            }
        }
        else {
            if (carousel && carousel.length) {
                var imageId = this.$element.find(this.settings.classFeatureImage).attr("data-id");
                this.activeImage(imageId);
            }
            // if(this.settings.initShowFeatureImage) {
            // }
        }
    };
    /**
     * onProductImageSlideChange: sự kiện thay đổi slide của swiper cho product imgs
     * @param swiper swiper can them su kien
     * @param $carousel carousel can them su kien
     */
    GtProductImagesV2.prototype.eventFeatureSwiper = function (swiper, $carousel) {
        var _this_1 = this;
        swiper.on("slideChangeTransitionEnd", function () {
            _this_1.activeProductImageByFeatureImage($carousel);
        });
    };
    /**
     * activeProductImageByFeatureImage: thay đổi slide active ở imageList theo feature image swiper
     * @param $carousel $featureCarousel
     */
    GtProductImagesV2.prototype.activeProductImageByFeatureImage = function ($carousel) {
        var $imageActive = $carousel.find(".swiper-slide.swiper-slide-active img");
        var imageId = $imageActive.attr("data-id");
        this.updateStoreVariantByImageID(imageId);
        this.activeImage(imageId);
    };
    /**
     * Lấy dữ liệu gtCurrentVariant ID đã được cache
     */
    GtProductImagesV2.prototype.setCurrentVariant = function () {
        var _this_1 = this;
        if (this._productJson) {
            var variantIDCache = this.getVariantIDCacheByDom();
            if (variantIDCache) {
                this._variantID = variantIDCache;
                var storeVariant = window.SOLID.store.getState("variant" + this._productJson.id);
                if (storeVariant && storeVariant.id == this._variantID && storeVariant.variant_init) {
                    return;
                }
                else {
                    var variantData = this._productJson.variants.find(function (item) {
                        return Number(item.id) === Number(_this_1._variantID);
                    });
                    if (variantData) {
                        try {
                            var newVariant = JSON.parse(JSON.stringify(variantData));
                            // eslint-disable-next-line camelcase
                            newVariant.variant_init = true;
                            window.SOLID.store.dispatch("variant" + this._productJson.id, newVariant);
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                }
            }
        }
    };
    /**
     * event
     */
    GtProductImagesV2.prototype.event = function () {
        // Click to image item in slide image
        if (this.settings.classSwiperItemsImage) {
            var $carouseItemImages_1 = this.$element.find(this.settings.classSwiperItemsImage);
            var _this_2 = this;
            $carouseItemImages_1.off("click.selectImage").on("click.selectImage", function () {
                var $img = jQuery(this);
                var imageId = $img.attr("data-id");
                var imageUrl = $img.attr("src");
                $carouseItemImages_1.removeClass("gt_active");
                $img.addClass("gt_active");
                _this_2.updateFeatureImage(imageUrl, imageId);
                _this_2.updateStoreVariantByImageID(imageId);
            });
        }
        // Click to feature arrow
        if (this.settings.classFeatureArrow) {
            var $featureArrow = this.$element.find(this.settings.classFeatureArrow);
            var _this_3 = this;
            if ($featureArrow && $featureArrow.length) {
                $featureArrow.off("click.imageArrow").on("click.imageArrow", function () {
                    var isLeftArrow = $(this).hasClass("gt_product-img-nav--left");
                    var $currentActiveImage = $(_this_3.$carousel).find(".swiper-slide img.gt_active");
                    if (!$currentActiveImage || !$currentActiveImage.length) {
                        return;
                    }
                    var index = $currentActiveImage.closest(".swiper-slide").attr("aria-label").split(" / ");
                    var currentIndex = parseInt(index[0]);
                    var total = parseInt(index[1]);
                    if (isLeftArrow) {
                        currentIndex = currentIndex == 1 ? total : currentIndex - 1;
                    }
                    else {
                        currentIndex = currentIndex == total ? 1 : currentIndex + 1;
                    }
                    var newIndex = currentIndex + " / " + total;
                    var $newActiveImage = $(_this_3.$carousel).find(".swiper-slide[aria-label='" + newIndex + "'] img");
                    if ($newActiveImage && $newActiveImage.length) {
                        $newActiveImage.trigger("click");
                        _this_3.$carousel.swiper.slideTo(currentIndex - 1, 200, true);
                    }
                });
            }
        }
    };
    /**
     * listen
     */
    GtProductImagesV2.prototype.listen = function () {
        var _this_1 = this;
        var store = window.SOLID.store;
        if (this._productJson && this._productJson.id) {
            store.subscribe("variant" + this._productJson.id, function (variant) {
                if (variant &&
                    variant.variant_init &&
                    (_this_1.settings.initShowFeatureImage || _this_1.settings.initShow3DModel || _this_1.settings.initShowExVideo || _this_1.settings.initShowOtherVideo)) {
                    return;
                }
                _this_1.updateDataCacheAttr(variant.id);
                _this_1.updateImage(variant);
            });
        }
    };
    /**
     * getVariantIDCacheByDom
     * @returns current variant id
     */
    GtProductImagesV2.prototype.getVariantIDCacheByDom = function () {
        var variantID = this.$element.attr("data-variant-id") || "";
        return variantID;
    };
    /**
     * Cập nhật variant id trong attr của element khi giá trị store variant thay đổi
     * @param variantID current variant id
     */
    GtProductImagesV2.prototype.updateDataCacheAttr = function (variantID) {
        var dataCache = this.$element.attr("data-variant-id");
        if (dataCache && variantID) {
            this.$element.attr("data-variant-id", variantID);
        }
    };
    /**
     * Cập nhật new variant
     * @param imageId id của image đang được active
     */
    GtProductImagesV2.prototype.updateStoreVariantByImageID = function (imageId) {
        var variants = [];
        if (this._productJson) {
            try {
                variants = this._productJson.variants;
            }
            catch (e) {
                console.log(e);
            }
        }
        if (variants.length) {
            var beforeActiveVariant_1 = window.SOLID.store.getState("variant" + this._productJson.id);
            // check variant hiện tại có feature image là imageid cần check hay không
            var beforeVariantHasImageId = variants.find(function (item) { var _a, _b; return String(item.id) === String(beforeActiveVariant_1 === null || beforeActiveVariant_1 === void 0 ? void 0 : beforeActiveVariant_1.id) && (((_a = item === null || item === void 0 ? void 0 : item.featured_media) === null || _a === void 0 ? void 0 : _a.id) == imageId || ((_b = item === null || item === void 0 ? void 0 : item.featured_image) === null || _b === void 0 ? void 0 : _b.id) == imageId); });
            if (beforeVariantHasImageId) {
                return;
            }
            // find variant with image id
            var currentVariant = variants.find(function (item) { return item.featured_image && item.featured_image.id && item.featured_image.id == imageId; });
            if (!currentVariant) {
                // nếu không tìm thấy theo imageId thì tìm theo mediaId
                currentVariant = variants.find(function (item) { return item.featured_media && item.featured_media.id == imageId; });
            }
            if (String(currentVariant === null || currentVariant === void 0 ? void 0 : currentVariant.id) === String(beforeActiveVariant_1 === null || beforeActiveVariant_1 === void 0 ? void 0 : beforeActiveVariant_1.id)) {
                return;
            }
            if (currentVariant) {
                window.SOLID.store.dispatch("variant" + this._productJson.id, currentVariant);
            }
        }
    };
    /**
     * Cập nhật ảnh của feature image theo ảnh đang được active trong slider image
     * @param url link ảnh đang được active trong slide images
     * @param imageId id cua feature image active
     * @param mediaId id cua feature media active
     */
    GtProductImagesV2.prototype.updateFeatureImage = function (url, imageId, mediaId) {
        if (!this.settings.featureSwiperSetting) {
            url = this.replaceImageToSize(url, "");
            if (this.settings.classFeatureImage) {
                this.$element.find(this.settings.classFeatureImage).attr("src", url);
            }
        }
        else {
            var $carouselFeatureImages = this.$element.find(this.settings.classFeatureSwiperItemsImage);
            var $carouselFeatureImageActive = this.$element.find(this.settings.classFeatureSwiperItemsImage + "[data-id=\"" + imageId + "\"]");
            if ($carouselFeatureImages && $carouselFeatureImageActive && $carouselFeatureImages.length && $carouselFeatureImageActive.length) {
                var indexActive = $carouselFeatureImages.index($carouselFeatureImageActive);
                this.$featureCarousel.swiper.slideTo(indexActive, 200, true);
            }
            else {
                // nếu không tìm thấy imageId thì tìm theo mediaId
                var $carouselFeatureMediaActive = this.$element.find(this.settings.classFeatureSwiperItemsImage + "[data-id=\"" + mediaId + "\"]");
                if ($carouselFeatureImages && $carouselFeatureMediaActive && $carouselFeatureImages.length && $carouselFeatureMediaActive.length) {
                    var indexActive = $carouselFeatureImages.index($carouselFeatureMediaActive);
                    this.$featureCarousel.swiper.slideTo(indexActive, 200, true);
                }
            }
        }
    };
    /**
     * Cập nhật lại trạng thái active của slide và feature image với variant tương ứng
     * @param variant dữ liệu của variant đang select
     */
    GtProductImagesV2.prototype.updateImage = function (variant) {
        var _a, _b;
        if (!this._productJson)
            return;
        if (!variant)
            variant = window.SOLID.store.getState("variant" + this._productJson.id);
        if (!variant || !variant.featured_image || !variant.featured_image.src || !this.settings.classSwiperItemsImage) {
            return;
        }
        this.updateFeatureImage(variant.featured_image.src, variant.featured_image.id, (_a = variant.featured_media) === null || _a === void 0 ? void 0 : _a.id);
        this.activeImage(variant.featured_image.id, (_b = variant.featured_media) === null || _b === void 0 ? void 0 : _b.id);
    };
    /**
     * active and scroll to image active
     * @param imageId  featured_image id current variant selected
     * @param mediaId  featured_media id current variant selected
     */
    GtProductImagesV2.prototype.activeImage = function (imageId, mediaId) {
        var $carouselImages = this.$element.find(this.settings.classSwiperItemsImage);
        var _this = this;
        var isFindActiveImage = false;
        $carouselImages.each(function (index) {
            $(this).removeClass("gt_active");
            $(this).removeClass("gf_active");
            var id = $(this).attr("data-id");
            if (id == imageId && _this.settings.swiperSetting) {
                _this.$carousel.swiper.slideTo(index, 200, true);
                $(this).addClass("gt_active");
                $(this).addClass("gf_active");
                isFindActiveImage = true;
            }
        });
        // support với media nếu không tìm thấy imageId
        if (!isFindActiveImage) {
            $carouselImages.each(function (index) {
                $(this).removeClass("gt_active");
                $(this).removeClass("gf_active");
                var id = $(this).attr("data-id");
                if (id == mediaId && _this.settings.swiperSetting) {
                    _this.$carousel.swiper.slideTo(index, 200, true);
                    $(this).addClass("gt_active");
                    $(this).addClass("gf_active");
                }
            });
        }
    };
    /**
     * clearActiveImage
     */
    GtProductImagesV2.prototype.clearActiveImage = function () {
        var $carouselImages = this.$element.find(this.settings.classSwiperItemsImage);
        $carouselImages.each(function () {
            $(this).removeClass("gt_active");
            $(this).removeClass("gf_active");
        });
    };
    /**
     * Kiểm tra xem có phải link ảnh trên shopify app hay ko
     * @param url link ảnh
     * @returns true or false
     */
    GtProductImagesV2.prototype.hasImageShopify = function (url) {
        if (!url || url == "") {
            return false;
        }
        if (url.indexOf("cdn.shopify.com/s/files/") != -1) {
            return true;
        }
        else if (url.indexOf("apps.shopifycdn.com/") != -1) {
            return true;
        }
        return false;
    };
    /**
     * replaceImageToSize
     * @param url link image
     * @param expectImageSize expectImageSize
     * @returns string
     */
    GtProductImagesV2.prototype.replaceImageToSize = function (url, expectImageSize) {
        if (expectImageSize == undefined || expectImageSize == null) {
            return url;
        }
        if (this.hasImageShopify(url)) {
            var ignore = ["jfif"];
            var params = "";
            var splitParams = url.split("?");
            if (splitParams && splitParams.length && splitParams.length >= 2) {
                params = splitParams[1];
            }
            var arrImage = splitParams[0].split("/").pop();
            var slugName = arrImage.split(".");
            var strExtention = slugName.pop();
            if (ignore.indexOf(strExtention) !== -1) {
                return url;
            }
            var nameImage = slugName.join(".");
            var arrayNames = nameImage.split("_");
            if (arrayNames && arrayNames.length >= 2) {
                var sizeCurrent = arrayNames.pop();
                var reg = new RegExp(/(\d+)x(\d+)|(\d+)x|x(\d+)/, "gm");
                if (sizeCurrent && reg.test(sizeCurrent)) {
                    var trimReg = sizeCurrent.replace(reg, "");
                    if (trimReg == "") {
                        var nameImages = nameImage.split("_");
                        nameImages.pop();
                        nameImage = nameImages.join("_");
                    }
                }
            }
            var srcImageSplit = url.split("?")[0].split("/");
            var smallSrc = "";
            for (var j = 0; j < srcImageSplit.length - 1; j++) {
                smallSrc += srcImageSplit[j] + "/";
            }
            if (expectImageSize) {
                url = smallSrc + nameImage + "_" + expectImageSize + "." + strExtention;
            }
            else {
                url = smallSrc + nameImage + "." + strExtention;
            }
            if (params) {
                url = url + "?" + params;
            }
        }
        return url;
    };
    return GtProductImagesV2;
}());
/**
 * gtProductImagesV2
 * @param params setting lib product gtProductImagesV2
 * @returns gtProductImagesV2
 */
window.SOLID.library.gtProductImagesV2 = function (params) {
    return new GtProductImagesV2(params);
};
exports.default = {};


/***/ })

/******/ });
});

        }
        funcLib107();
      } catch(e) {
        console.error("Error lib id: 107" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib105 = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GtProductSwatchesV2
 */
var GtProductSwatchesV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params settings class and element
     */
    function GtProductSwatchesV2(params) {
        this.$element = $(params.$element);
        this.classCurrentValue = params.settings.classCurrentValue;
        this.classItem = params.settings.classItem;
        this.classInputIdHidden = params.settings.classInputIdHidden;
        this.classBtnSelect = params.settings.classBtnSelect;
        this.classCurrentStatus = params.settings.classCurrentStatus;
        this.classVariantValueInTitle = params.settings.classVariantValueInTitle;
        this.init();
    }
    /* private methods */
    /**
     * init: function khoi tao lib
     */
    GtProductSwatchesV2.prototype.init = function () {
        var productJson = this.$element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();
        try {
            if (productJson) {
                this._productJson = JSON.parse(productJson);
            }
        }
        catch (e) {
            console.log("error: ", e);
        }
        this.setCurrentVariant();
        this.event();
        this.listen();
    };
    /**
     * setInitVariant: tim ra variant dang active
     */
    GtProductSwatchesV2.prototype.setCurrentVariant = function () {
        if (this._productJson) {
            var storeVariant = window.SOLID.store.getState("variant" + this._productJson.id);
            if (storeVariant && storeVariant.variant_init) {
                window.SOLID.store.dispatch("variant" + this._productJson.id, storeVariant);
                return;
            }
            // const $productJson = this.$element.closest("[keyword='product']").find(".ProductJson");
            // if ($productJson && $productJson.length) {
            // const variantID: number = parseInt($productJson.attr("data-variant"));
            var variantIDCache = this.getVariantIDCacheByDom();
            if (variantIDCache) {
                for (var i = 0; i < this._productJson.variants.length; i++) {
                    var currentVariant = this._productJson.variants[i];
                    if (currentVariant.id == variantIDCache) {
                        try {
                            var newVariant = JSON.parse(JSON.stringify(currentVariant));
                            // eslint-disable-next-line camelcase
                            newVariant.variant_init = true;
                            window.SOLID.store.dispatch("variant" + this._productJson.id, newVariant);
                        }
                        catch (e) {
                            console.log(e);
                        }
                        break;
                    }
                }
            }
            // }
        }
    };
    /**
     * event: thêm sự kiện click cho các variants
     */
    GtProductSwatchesV2.prototype.event = function () {
        if (this._productJson) {
            try {
                var variants_1 = this._productJson.variants;
                var $select = this.$element.find(this.classBtnSelect);
                var _this_1 = this;
                $select.off("click.select").on("click.select", function () {
                    var $el = jQuery(this);
                    if (!$el.hasClass("gt_soldout")) {
                        var name_1 = $el.attr("data-name");
                        // Update active
                        var $selector = _this_1.$element.find(_this_1.classBtnSelect + "[data-name=\"" + name_1 + "\"]");
                        if ($selector && $selector.length) {
                            $selector.removeClass("gf_active");
                            $selector.removeClass("gt_active");
                        }
                        $el.addClass("gf_active");
                        $el.addClass("gt_active");
                        var $actives = _this_1.$element.find(_this_1.classBtnSelect + ".gf_active," + _this_1.classBtnSelect + ".gt_active");
                        var values = [];
                        var i = void 0;
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
                            for (i = 0; i < variants_1.length; i++) {
                                var variant = variants_1[i];
                                var options = variant.options; // => []
                                // console.log(options, " vs ", values)
                                if (_this_1.compare(values, options)) {
                                    currentVariant = variant;
                                    break;
                                }
                            }
                        }
                        if (!jQuery.isEmptyObject(currentVariant)) {
                            window.SOLID.store.dispatch("variant" + _this_1._productJson.id, currentVariant);
                        }
                        else {
                            // Sản phẩm không được định nghĩa
                            window.SOLID.store.dispatch("variant" + _this_1._productJson.id, {
                                id: 0,
                                available: false,
                            });
                        }
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
    };
    /**
     * listen: lắng nghe khi có variant active thay đổi
     */
    GtProductSwatchesV2.prototype.listen = function () {
        var _this_1 = this;
        var store = window.SOLID.store;
        if (this._productJson) {
            var options_1 = this._productJson.options;
            store.subscribe("variant" + this._productJson.id, function (variant) {
                if (variant && variant.variant_init) {
                    return;
                }
                _this_1.updateDataCacheAttr(variant.id);
                var $product = _this_1.$element.closest("[keyword='product'], [data-keyword='product']");
                var $currentStatus = $product.find(_this_1.classCurrentStatus);
                if ($currentStatus && $currentStatus.length) {
                    if (!variant.available) {
                        $currentStatus.show();
                        var labelSoldOut = $currentStatus.attr("data-sold-out") || "Sold Out";
                        $currentStatus.addClass(_this_1.classCurrentStatus.replace(".", "") + "--inner");
                        $currentStatus.html(labelSoldOut);
                    }
                    else {
                        $currentStatus.addClass(_this_1.classCurrentStatus.replace(".", "") + "--inner");
                        $currentStatus.hide();
                    }
                }
                if (variant.options && variant.options.length) {
                    for (var i = 0; i < variant.options.length; i++) {
                        var option = variant["option" + (i + 1)];
                        if (option) {
                            var name_2 = void 0;
                            if (options_1[i]) {
                                name_2 = options_1[i];
                            }
                            if (!name_2 || jQuery.isPlainObject(name_2)) {
                                name_2 = options_1[i].name;
                            }
                            var $item = _this_1.$element.find(_this_1.classItem + "[data-name=\"" + name_2 + "\"]");
                            if ($item && $item.length) {
                                var $titleValue = $item.find(_this_1.classVariantValueInTitle);
                                $titleValue.html(option);
                                var $select = $item.find(_this_1.classBtnSelect);
                                var $selectActive = $item.find(_this_1.classBtnSelect + "[data-value=\"" + option.replace(/"/g, "\\\"") + "\"]");
                                if (_this_1.classCurrentValue) {
                                    var $currentValue = $item.find(_this_1.classCurrentValue);
                                    if ($currentValue && $currentValue.length) {
                                        var $contentSelectActive = $selectActive.html();
                                        $currentValue.html($contentSelectActive);
                                        $currentValue.attr("data-value", option);
                                    }
                                }
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
                        var $input = $product.find(_this_1.classInputIdHidden);
                        if ($input && $input.length) {
                            $input.attr("value", variant.id).val(variant.id);
                            var currentURL = window.location.href;
                            var variantURL = _this_1.updateUrlParameter(currentURL, "variant", variant.id);
                            window.history.replaceState({}, "", variantURL);
                        }
                    }
                }
            });
        }
    };
    /**
     * getVariantIDCacheByDom
     * @returns current variant id
     */
    GtProductSwatchesV2.prototype.getVariantIDCacheByDom = function () {
        var variantID = this.$element.attr("data-variant-id") || "";
        return variantID;
    };
    /**
     * Cập nhật variant id trong attr của element khi giá trị store variant thay đổi
     * @param variantID current variant id
     */
    GtProductSwatchesV2.prototype.updateDataCacheAttr = function (variantID) {
        var dataCache = this.$element.attr("data-variant-id");
        if (dataCache && variantID) {
            this.$element.attr("data-variant-id", variantID);
        }
    };
    /**
     * compare: compare 2 array
     * @param array array1
     * @param array2 array 2
     * @returns boolean
     */
    GtProductSwatchesV2.prototype.compare = function (array, array2) {
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
    /**
     * updateUrlParameter: update params
     * @param url current url window.location.href
     * @param key "variant"
     * @param value variant id
     * @returns string
     */
    GtProductSwatchesV2.prototype.updateUrlParameter = function (url, key, value) {
        var parser = document.createElement("a");
        parser.href = url;
        var newUrl = parser.protocol + "//" + parser.host + parser.pathname;
        // has parameters ?
        if (parser.search && parser.search.indexOf("?") !== -1) {
            // parameter already exists
            if (parser.search.indexOf(key + "=") !== -1) {
                // paramters to array
                var params_1 = parser.search.replace("?", "");
                params_1 = params_1.split("&");
                params_1.forEach(function (param, i) {
                    if (param.indexOf(key + "=") !== -1) {
                        if (value !== null) {
                            params_1[i] = key + "=" + value;
                        }
                        else {
                            delete params_1[i];
                        }
                    }
                });
                if (params_1.length > 0) {
                    newUrl += "?" + params_1.join("&");
                }
            }
            else if (value !== null) {
                newUrl += parser.search + "&" + key + "=" + value;
            }
            else {
                newUrl += parser.search;
            } // skip the value (remove)
        }
        else if (value !== null) {
            newUrl += "?" + key + "=" + value;
        } // no parameters, create it
        newUrl += parser.hash;
        return newUrl;
    };
    return GtProductSwatchesV2;
}());
/**
 * gtProductSwatchesV2
 * @param params setting lib product swatches
 * @returns gtProductSwatchesV2
 */
window.SOLID.library.gtProductSwatchesV2 = function (params) {
    return new GtProductSwatchesV2(params);
};
exports.default = {};


/***/ })

/******/ });
});
        }
        funcLib105();
      } catch(e) {
        console.error("Error lib id: 105" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib106 = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GtProductQuantityV2
 */
var GtProductQuantityV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params settings class and element
     */
    function GtProductQuantityV2(params) {
        this.$element = $(params.$element);
        this.classInput = params.settings.classInput;
        this.classPlus = params.settings.classPlus;
        this.classMinus = params.settings.classMinus;
        this.mode = params.settings.mode || "production";
        this.init();
    }
    /* private methods */
    /**
     * init: function khoi tao lib
     */
    GtProductQuantityV2.prototype.init = function () {
        var productJson = this.$element.closest("[keyword='product'], [data-keyword='product']").find(".ProductJson").text();
        try {
            if (productJson) {
                this._productJson = JSON.parse(productJson);
            }
        }
        catch (e) {
            console.log("error: ", e);
        }
        this.event();
        this.listen();
    };
    /**
     * event: thêm sự kiện click cho các variants
     */
    GtProductQuantityV2.prototype.event = function () {
        var _this = this;
        if (this._productJson) {
            if (this.classMinus) {
                this.$element
                    .find(this.classMinus)
                    .off("click.minus")
                    .on("click.minus", function () {
                    if (!_this.$element.hasClass("gt_soldout")) {
                        var value = _this.$element.find(_this.classInput).val();
                        value = parseInt(value) - 1;
                        if (value <= 1) {
                            value = 1;
                        }
                        _this.$element.find(_this.classInput).attr("value", value).val(value);
                        window.SOLID.store.dispatch("quantity" + _this._productJson.id, value);
                    }
                });
            }
            if (this.classPlus) {
                this.$element
                    .find(this.classPlus)
                    .off("click.plus")
                    .on("click.plus", function () {
                    if (!_this.$element.hasClass("gt_soldout")) {
                        var value = _this.$element.find(_this.classInput).val();
                        value = parseInt(value) + 1;
                        if (value <= 1) {
                            value = 1;
                        }
                        _this.$element.find(_this.classInput).attr("value", value).val(value);
                        window.SOLID.store.dispatch("quantity" + _this._productJson.id, value);
                    }
                });
            }
            if (this.classInput) {
                var $input = this.$element.find(this.classInput);
                if (this.mode !== "production") {
                    var quantityStore = window.SOLID.store.getState("quantity" + this._productJson.id) || 1;
                    $input.val(quantityStore);
                }
                $input.off("change.inputQuantity").on("change.inputQuantity", function (e) {
                    var $target = $(e.currentTarget);
                    var quantity = $target.val();
                    if (quantity == 0) {
                        $target.val(1);
                        quantity = 1;
                    }
                    window.SOLID.store.dispatch("quantity" + _this._productJson.id, quantity);
                });
            }
        }
    };
    /**
     * listen: lắng nghe khi có variant active thay đổi
     */
    GtProductQuantityV2.prototype.listen = function () {
        var _this = this;
        var store = window.SOLID.store;
        if (this._productJson) {
            store.subscribe("variant" + this._productJson.id, function (variant) {
                _this.updateDataCacheAttr(variant.id);
                if (variant.available) {
                    _this.$element.removeClass("gf_soldout");
                    _this.$element.removeClass("gt_soldout");
                    if (_this.classInput) {
                        _this.$element.find(_this.classInput).removeAttr("disabled");
                    }
                }
                else {
                    // Nếu là soldout update quantity về 1 và disable input thay đổi quantity
                    _this.$element.addClass("gf_soldout");
                    _this.$element.addClass("gt_soldout");
                    window.SOLID.store.dispatch("quantity" + _this._productJson.id, 1);
                    if (_this.classInput) {
                        jQuery(_this.classInput).attr("value", 1).val(1);
                        _this.$element.find(_this.classInput).attr("disabled", "disabled");
                    }
                }
            });
            store.subscribe("quantity" + this._productJson.id, function (quantity) {
                _this.$element.find(_this.classInput).attr("value", quantity).val(quantity);
            });
        }
    };
    /**
     * Cập nhật variant id trong attr của element khi giá trị store variant thay đổi
     * @param variantID current variant id
     */
    GtProductQuantityV2.prototype.updateDataCacheAttr = function (variantID) {
        var dataCache = this.$element.attr("data-variant-id");
        if (dataCache && variantID) {
            this.$element.attr("data-variant-id", variantID);
        }
    };
    return GtProductQuantityV2;
}());
/**
 * gtProductQuantity
 * @param params setting lib product quantity
 * @returns gtProductQuantity
 */
window.SOLID.library.gtProductQuantityV2 = function (params) {
    return new GtProductQuantityV2(params);
};
exports.default = {};


/***/ })

/******/ });
});
        }
        funcLib106();
      } catch(e) {
        console.error("Error lib id: 106" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib108 = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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
 * GtProductSaveV2
 */
var GtProductSaveV2 = /** @class */ (function () {
    /**
     * constructor
     * @param params setting truyen vao thu vien
     */
    function GtProductSaveV2(params) {
        this.$element = $(params.$element);
        this.settings = {
            roundNoZeroes: false,
            roundPercent: 0,
            classTextPercent: "",
            classTextNumber: "",
            dataFormat: "",
            dataFormatKey: "",
            customCurrencyFormat: "",
        };
        this.settings = __assign(__assign({}, this.settings), params.settings);
        this.init();
    }
    /**
     * init ham khoi tao thu vien
     */
    GtProductSaveV2.prototype.init = function () {
        var productJson = this.$element
            .closest("[keyword='product'], [data-keyword='product']")
            .find(".ProductJson")
            .text();
        try {
            if (productJson) {
                this._productJson = JSON.parse(productJson);
            }
        }
        catch (e) {
            console.log("error: ", e);
        }
        this.setCurrentVariant();
        this.listen();
    };
    /**
     * Lấy dữ liệu gtCurrentVariant ID đã được cache
     */
    GtProductSaveV2.prototype.setCurrentVariant = function () {
        var _this = this;
        if (this._productJson) {
            var variantIDCache = this.getVariantIDCacheByDom();
            if (variantIDCache) {
                this._variantID = Number(variantIDCache);
                var storeVariant = window.SOLID.store.getState("variant" + this._productJson.id);
                if (storeVariant &&
                    storeVariant.id == this._variantID &&
                    storeVariant.variant_init) {
                    this.setPriceWithVariant(storeVariant);
                    return;
                }
                else {
                    var variantData = this._productJson.variants.find(function (item) { return item.id === _this._variantID; });
                    if (variantData) {
                        try {
                            var newVariant = JSON.parse(JSON.stringify(variantData));
                            this.setPriceWithVariant(newVariant);
                            // eslint-disable-next-line camelcase
                            newVariant.variant_init = true;
                            window.SOLID.store.dispatch("variant" + this._productJson.id, newVariant);
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                }
            }
        }
    };
    /**
     * listen
     */
    GtProductSaveV2.prototype.listen = function () {
        var _this = this;
        var store = window.SOLID.store;
        if (this._productJson && this._productJson.id) {
            store.subscribe("variant" + this._productJson.id, function (variant) {
                if (variant && variant.variant_init) {
                    return;
                }
                _this.updateDataCacheAttr(variant.id);
                _this.setPriceWithVariant(variant);
            });
            store.subscribe("quantity" + this._productJson.id, function () {
                var variant = window.store.get("variant" + _this._productJson.id);
                if (variant && variant.id) {
                    _this.setPriceWithVariant(variant);
                }
            });
            store.subscribe("dataCurrency", function () {
                var variant = window.store.get("variant" + _this._productJson.id);
                if (variant && variant.id) {
                    _this.setPriceWithVariant(variant);
                }
            });
        }
    };
    /**
     * getVariantIDCacheByDom
     * @returns current variant id
     */
    GtProductSaveV2.prototype.getVariantIDCacheByDom = function () {
        var variantID = this.$element.attr("data-variant-id") || "";
        return variantID;
    };
    /**
     * Cập nhật variant id trong attr của element khi giá trị store variant thay đổi
     * @param variantID current variant id
     */
    GtProductSaveV2.prototype.updateDataCacheAttr = function (variantID) {
        var dataCache = this.$element.attr("data-variant-id");
        if (dataCache && variantID) {
            this.$element.attr("data-variant-id", variantID);
        }
    };
    /**
     * setPriceWithVariant
     * @param variant variant
     */
    GtProductSaveV2.prototype.setPriceWithVariant = function (variant) {
        if (variant.compare_at_price &&
            variant.price &&
            variant.compare_at_price > variant.price) {
            this.$element.addClass("gt_active");
            // Giá giảm theo %
            if (this.settings.classTextPercent) {
                var $number = this.$element.find(this.settings.classTextPercent);
                var number = this.getPercentDiscount(variant.price, variant.compare_at_price);
                $number.html(number);
            }
            // Giá giảm theo sổ tiền
            if (this.settings.classTextNumber) {
                var $price = this.$element.find(this.settings.classTextNumber);
                var diff = variant.compare_at_price - variant.price;
                var diffFormat = this.formatMoneyPlugin(diff);
                $price.html(diffFormat);
            }
        }
        else {
            this.$element.removeClass("gt_active");
        }
    };
    /**
     * Format Money
     * @param price price
     * @returns Format Money
     */
    GtProductSaveV2.prototype.formatMoneyPlugin = function (price) {
        price = this.getPriceWithQuantity(price);
        var dataCurrency = window.store.get("dataCurrency");
        var format = window.__GemSettings.money;
        var priceFormat = price.toString();
        if (!dataCurrency) {
            // default shopify format
            priceFormat = window.Shopify.formatMoney(price, format);
        }
        else {
            // ES addon auto currency converter
            var notApplyRoundDecimal = true; // no apply round decimal for save money
            priceFormat = window.Shopify.gemFormatMoney(price, dataCurrency.currency, dataCurrency.data, this.settings.customCurrencyFormat, notApplyRoundDecimal);
        }
        if (this.settings.dataFormat && this.settings.dataFormatKey) {
            priceFormat = this.settings.dataFormat.replace(this.settings.dataFormatKey, priceFormat);
        }
        return priceFormat;
    };
    /**
     * getPriceWithQuantity
     * @param price price
     * @returns price
     */
    GtProductSaveV2.prototype.getPriceWithQuantity = function (price) {
        if (this._productJson) {
            var quantityProduct = window.store.get("quantity" + this._productJson.id);
            quantityProduct = Number(quantityProduct);
            if (!quantityProduct || isNaN(quantityProduct)) {
                quantityProduct = 1;
            }
            price = Number(price) * quantityProduct;
        }
        return price;
    };
    /**
     * trả về phần trăm giảm giá
     * @param price giá bán
     * @param comparePrice giá gốc
     * @returns trăm giảm giá
     */
    GtProductSaveV2.prototype.getPercentDiscount = function (price, comparePrice) {
        var diff = comparePrice - price;
        diff = diff / comparePrice;
        diff = diff * 100;
        var diffString = diff.toString();
        if (this.settings.roundNoZeroes) {
            diffString = this.roundTo(diff, this.settings.roundPercent);
        }
        else {
            diffString = diff.toFixed(this.settings.roundPercent);
        }
        diffString += "%";
        if (this.settings.dataFormat && this.settings.dataFormatKey) {
            diffString = this.settings.dataFormat.replace(this.settings.dataFormatKey, diffString);
        }
        return diffString;
    };
    /**
     * Làm tròn số tới hàng thập phân thứ n bỏ O ở cuối string nếu có
     * @param n giá trị cần làm tròn
     * @param digits Làm tròn số tới hàng thập phân thứ
     * @returns string
     */
    GtProductSaveV2.prototype.roundTo = function (n, digits) {
        if (digits === undefined) {
            digits = 0;
        }
        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        var test = Math.round(n) / multiplicator;
        return test.toFixed(digits);
    };
    return GtProductSaveV2;
}());
/**
 * gtProductSaveV2
 * @param params setting lib product gtProductSaveV2
 * @returns gtProductSaveV2
 */
window.SOLID.library.gtProductSaveV2 = function (params) {
    return new GtProductSaveV2(params);
};
exports.default = {};


/***/ })

/******/ });
});
        }
        funcLib108();
      } catch(e) {
        console.error("Error lib id: 108" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib65 = function() {
          "use strict";
(function () {
  window.SOLID = window.SOLID || {};
  var Countdown = function (options) {
    var _settings = {
      id: "",
      key: "",
      endDate: null,
      distance: 100,
      coutdown: true,
      outputFormat: "week|day|hour|minute|second",

      // The callback
      onStart: function () {},
      onStop: function () {},
      onInterval: function () {},
    };
    var fn = {};
    var _this = this;

    var decisecond = 100;
    var second = decisecond * 10;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var uniqueKey = "";

    var init = function () {
      _settings = _this.extend({}, _settings, options);
      uniqueKey = "_delayInterval" + _settings.id;
      clearInterval(window[uniqueKey]);


      if (_settings.coutdown && _settings.endDate) {
        _this.start();
      }
    };
    // Public function

    fn.start = function () {
      _settings.coutdown = true;
      if (_settings.endDate) {
        _this.start();
      }
    };
    fn.stop = function () {
      _settings.coutdown = false;
      _this.stop();
    };

    // Private function
    this.extend = function (out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i]) { continue; }

        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) { out[key] = arguments[i][key]; }
        }
      }

      return out;
    };
    this.start = function () {
      _settings.onStart();
      _this.interval();
    };
    this.stop = function () {
      clearInterval(window[uniqueKey]);
      _settings.onStop();
    };
    this.interval = function () {
      var distance = _this.getRemainingTime(_settings.endDate);

      if (distance <= 0) {
        _this.stop();
        return;
      }

      clearInterval(window[uniqueKey]);
      window[uniqueKey] = setInterval(function () {
        var objectTime = _this.formatOutput(distance, _settings.outputFormat);

        _settings.onInterval(objectTime);
        distance = distance - _settings.distance;
        if (distance <= 0) {
          _this.stop();
          return;
        }
      }, _settings.distance);
    };

    /**
     * Calculates remaining time and returns a distance between the endDate and time now
     * @param {Number, Date} endDate
     */
    this.getRemainingTime = function (endDate) {
      var now = new Date().getTime();
      var endTime = new Date(endDate).getTime();
      var distance = endTime - now;

      return distance;
    };

    /**
     * Turn the remaining time into an object with information in the format
     * @param {Number} distance
     * @param {String} format 'week|day|hour|minute|second|decisecond'
     */
    this.formatOutput = function (distance, format) {
      var objectReturn = {
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        deciseconds: 0,
      };

      distance = Math.ceil(distance);
      var formatItems = format.split("|");

      if (formatItems.indexOf("week") != -1) {
        objectReturn.weeks = Math.floor(distance / (week));
        distance = distance % week;
      }
      if (formatItems.indexOf("day") != -1) {
        objectReturn.days = Math.floor(distance / (day));
        distance = distance % day;
      }
      if (formatItems.indexOf("hour") != -1) {
        objectReturn.hours = Math.floor(distance / (hour));
        distance = distance % hour;
      }
      if (formatItems.indexOf("minute") != -1) {
        objectReturn.minutes = Math.floor(distance / (minute));
        distance = distance % minute;
      }
      if (formatItems.indexOf("second") != -1) {
        objectReturn.seconds = Math.floor(distance / (second));
        distance = distance % second;
      }
      if (formatItems.indexOf("decisecond") != -1) {
        objectReturn.deciseconds = Math.floor(distance / (decisecond));
        distance = distance % decisecond;
      }
      return objectReturn;
    };

    init();
    return fn;
  };

  window.SOLID.Countdown = function (options) {
    return new Countdown(options);
  };
})();

        }
        funcLib65();
      } catch(e) {
        console.error("Error lib id: 65" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcLib17 = function() {
          "use strict";
/* gfProductZoomImage */
(function (jQuery) {
  var GfProductZoomImage = function (element, options, $) {
    var defaults = {
      classHoverItem: null,
      scale: 1.5,
      htmlZoom: '<div class="gt_product-zoom"></div>',
      classSection: null,
    };

    this.settings = {};

    var $element = jQuery(element);
    var _this = this;
    var _url;
    var _$html;

    this.init = function () {
      const checkDevice = _this.getDeviceType();
      if (checkDevice !== "desktop") {
        return;
      }
      this.settings = jQuery.extend({}, defaults, options);
      var $itemHover = $element.closest(_this.settings.classHoverItem);

      if ($itemHover && $itemHover.length > 0) {
        var classElement = $itemHover.attr("class");
        // gt_product-image--feature gt_product-image
        var res = classElement.split(" ");

        if (_this.settings.classSection != null) {
          var cssClassName = "css-" + _this.settings.classSection;
          var css = '<style type="text/css" class="' + cssClassName + '">';

          css += _this.settings.classSection + " ." + res.join(".") + "{position:relative;overflow:hidden}";
          css += _this.settings.classSection + " .gt_product-img-box div.gt_product-zoom{display: none;position:absolute;top:0;left:0;width:100%;height:100%;background-color: #fff;background-repeat:no-repeat;background-position:center;background-size:cover;transition:transform .5s ease-out}";
          css += "</style>";
          if (!jQuery(cssClassName) || jQuery(cssClassName).length == 0) {
            jQuery("body").append(css);
          }
        }

        var $html = jQuery(_this.settings.htmlZoom);

        _$html = $html;
        if (!$itemHover.find(".gt_product-zoom") || $itemHover.find(".gt_product-zoom").length == 0) {
          $itemHover.append(_$html);
        }

        _this.event();
      }
    };

    this.event = function () {
      $element.closest(_this.settings.classHoverItem)
        .on("mouseover", function () {
          if (_this.settings.scale !== 1) {
            _url = $element.attr("src");
            _$html.css({
              display: "block", 
              "width": "100%",
              "height": "100%",
              "top": "0%",
              "left": "0%",
              "z-index": "9",
              "background-repeat": "no-repeat",
              "background-color": "#fff",
              "background-position": "center",
              "background-size": "cover",
              "transition": "transform .5s ease-out",
              "position": "absolute",
              "background-image": "url(" + _url + ")",
              transform: "scale(" + _this.settings.scale + ")",
            });
            $element.css("opacity", 0);
          }
        })
        .on("mouseout", function () {
          if (_this.settings.scale !== 1) {
            _$html.css({
              transform: "scale(1)",
              display: "none",
              "z-index": "-1",
            });
            $element.css("opacity", 1);
          }
        })
        .on("mousemove", function (e) {
          if (_this.settings.scale !== 1) {
            var $this = $(this);

            _$html.css({
              "transform-origin": ((e.pageX - $this.offset().left) / $this.width()) * 100 + "% " + ((e.pageY - $this.offset().top) / $this.height()) * 100 + "%",
              display: "block",
            });
            $element.css("opacity", 0);
          }
        });
    };

    this.getDeviceType = function() {
      var userAgent = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        return "tablet";
      }
      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|OperaM(obi|ini)/.test(userAgent)) {
        return "mobile";
      }
      return "desktop";
    }

    this.init();
  };

  jQuery.fn.gfProductZoomImage = function (options) {
    return this.each(function () {
      if (undefined == jQuery(this).data("gfproductZoomImage")) {
        var plugin = new GfProductZoomImage(this, options, jQuery);

        jQuery(this).data("gfproductzoomimage", plugin);
      }
    });
  };
})(jQuery);

        }
        funcLib17();
      } catch(e) {
        console.error("Error lib id: 17" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESSectionVqSeRxw2Ma50cBi = function() {
          
        }
        funcESSectionVqSeRxw2Ma50cBi()
      } catch(e) {
        console.error("Error ESSection Id: VqSeRxw2Ma50cBi" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomVqSeRxw2Ma50cBi_sectionName = function() {
          (function() {
  var elementClassName = ".gt_atom-VqSeRxw2Ma50cBi_sectionName";
  var id = "VqSeRxw2Ma50cBi_sectionName";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "true" == "true";
    const animationActive = "true" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","name":"flip-in-x-text-atom","order":"sequence"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"flash"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!discount!] OFF"
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "VqSeRxw2Ma50cBi_sectionName",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "VqSeRxw2Ma50cBi_sectionName",
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
        funcESAtomVqSeRxw2Ma50cBi_sectionName()
      } catch(e) {
        console.error("Error ESAtom Id: VqSeRxw2Ma50cBi_sectionName" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomVqSeRxw2Ma50cBi_descriptionSection = function() {
          (function() {
  var elementClassName = ".gt_atom-VqSeRxw2Ma50cBi_descriptionSection";
  var id = "VqSeRxw2Ma50cBi_descriptionSection";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "VqSeRxw2Ma50cBi_descriptionSection",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "VqSeRxw2Ma50cBi_descriptionSection",
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
        funcESAtomVqSeRxw2Ma50cBi_descriptionSection()
      } catch(e) {
        console.error("Error ESAtom Id: VqSeRxw2Ma50cBi_descriptionSection" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomVqSeRxw2Ma50cBi_sectionButton = function() {
          (function() {
  var elementClassName = ".gt_atom-VqSeRxw2Ma50cBi_sectionButton";
  var id = "VqSeRxw2Ma50cBi_sectionButton";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "VqSeRxw2Ma50cBi_sectionButton",
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

        window.SOLID.store.subscribe("loading-buy-now-VqSeRxw2Ma50cBi_sectionButton" + "_" + indexEl, function(isDisplay) {
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
              window.SOLID.store.dispatch("loading-buy-now-VqSeRxw2Ma50cBi_sectionButton" + "_" + indexEl, "");
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
                window.SOLID.store.dispatch("loading-buy-now-VqSeRxw2Ma50cBi_sectionButton" + "_" + indexEl, "");
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
        funcESAtomVqSeRxw2Ma50cBi_sectionButton()
      } catch(e) {
        console.error("Error ESAtom Id: VqSeRxw2Ma50cBi_sectionButton" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESSection1L719gLNfqJcXBj = function() {
          (function() {
  var elementClassName = ".gt_section-1L719gLNfqJcXBj";
  var id = "1L719gLNfqJcXBj";
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
    $(window).off("resize.checkSwitchScreens1L719gLNfqJcXBj").on("resize.checkSwitchScreens1L719gLNfqJcXBj", function() {
      checkParallax();
    });
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
        funcESSection1L719gLNfqJcXBj()
      } catch(e) {
        console.error("Error ESSection Id: 1L719gLNfqJcXBj" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_bannerBox = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_bannerBox";
  var id = "1L719gLNfqJcXBj_bannerBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_bannerBox",
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
        funcESAtom1L719gLNfqJcXBj_bannerBox()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_bannerBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_bannerContent = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_bannerContent";
  var id = "1L719gLNfqJcXBj_bannerContent";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_bannerContent",
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
        funcESAtom1L719gLNfqJcXBj_bannerContent()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_bannerContent" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_textLabel = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_textLabel";
  var id = "1L719gLNfqJcXBj_textLabel";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_textLabel",
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
        funcESAtom1L719gLNfqJcXBj_textLabel()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_textLabel" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_backgroundLabel = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_backgroundLabel";
  var id = "1L719gLNfqJcXBj_backgroundLabel";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_backgroundLabel",
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
        funcESAtom1L719gLNfqJcXBj_backgroundLabel()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_backgroundLabel" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_messageLabelText = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_messageLabelText";
  var id = "1L719gLNfqJcXBj_messageLabelText";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_messageLabelText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_messageLabelText",
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
        funcESAtom1L719gLNfqJcXBj_messageLabelText()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_messageLabelText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_headingBanner = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_headingBanner";
  var id = "1L719gLNfqJcXBj_headingBanner";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_headingBanner",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_headingBanner",
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
        funcESAtom1L719gLNfqJcXBj_headingBanner()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_headingBanner" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_bannerMessage = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_bannerMessage";
  var id = "1L719gLNfqJcXBj_bannerMessage";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_bannerMessage",
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
        funcESAtom1L719gLNfqJcXBj_bannerMessage()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_bannerMessage" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_messageBanner1 = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_messageBanner1";
  var id = "1L719gLNfqJcXBj_messageBanner1";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_messageBanner1",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_messageBanner1",
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
        funcESAtom1L719gLNfqJcXBj_messageBanner1()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_messageBanner1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_messageBanner2 = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_messageBanner2";
  var id = "1L719gLNfqJcXBj_messageBanner2";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_messageBanner2",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_messageBanner2",
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
        funcESAtom1L719gLNfqJcXBj_messageBanner2()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_messageBanner2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_messageBanner3 = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_messageBanner3";
  var id = "1L719gLNfqJcXBj_messageBanner3";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_messageBanner3",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_messageBanner3",
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
        funcESAtom1L719gLNfqJcXBj_messageBanner3()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_messageBanner3" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_titleCountdownTimer = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_titleCountdownTimer";
  var id = "1L719gLNfqJcXBj_titleCountdownTimer";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_titleCountdownTimer",
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
        funcESAtom1L719gLNfqJcXBj_titleCountdownTimer()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_titleCountdownTimer" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_lineCountdownTimer1 = function() {
          
        }
        funcESAtom1L719gLNfqJcXBj_lineCountdownTimer1()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_lineCountdownTimer1" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_messageCountdownTimer = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_messageCountdownTimer";
  var id = "1L719gLNfqJcXBj_messageCountdownTimer";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_messageCountdownTimer",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_messageCountdownTimer",
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
        funcESAtom1L719gLNfqJcXBj_messageCountdownTimer()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_messageCountdownTimer" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_lineCountdownTimer2 = function() {
          
        }
        funcESAtom1L719gLNfqJcXBj_lineCountdownTimer2()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_lineCountdownTimer2" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_CountdownTimerBanner = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_CountdownTimerBanner";
  var id = "1L719gLNfqJcXBj_CountdownTimerBanner";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var arrayFormat = ["minute", "second"];
    var outputFormat = "";
    var showDays = "true" === "true";
    var showHours = "true" === "true";
    var type = "scheduled";
    var dateTimeAnyDate = "2022-08-27T07:00:00.000Z";
    var dateTimeAnyTime = "23:55:10";
    var isLoop = "true" === "true";
    var dateTimeAny = type === "scheduled" ? dateTimeAnyDate : dateTimeAnyTime;
    var endDate = 0;
    /* store get state block script */
    /* methods block script */
    function timeToSecond(timeString) {
      var times = timeString.split(":");
      var hour = parseInt(times[0]),
        min = parseInt(times[1]),
        sec = parseInt(times[2]);
      return hour * 3600 + min * 60 + sec;
    }

    function startTimer(key, endDate, $element, loop, isRepeat = false) {
      SOLID.Countdown({
        id,
        key: key,
        endDate: endDate,
        distance: 1000,
        outputFormat: outputFormat,
        onStop: function() {
          $element.addClass("gt_hidden");

          if (loop) {
            clearTimeout(window['_repeat_' + key]);
            window['_repeat_' + key] = setTimeout(() => {
              $element.removeClass("gt_hidden");
              var totalTime = timeToSecond(dateTimeAny);
              startTimer(key, new Date(Date.now() + totalTime * 1000), $element, loop, totalTime, true);
            }, 5000);
            return;
          }
        },
        onInterval: function(object) {
          var $days = $element.find(".gt_atom-days")
          var day1 = Math.floor(object.days / 10);
          var day2 = object.days % 10;
          $days.find(".gt_atom-num1").text(day1);
          $days.find(".gt_atom-num2").text(day2);


          var $hours = $element.find(".gt_atom-hours")
          var hr1 = Math.floor(object.hours / 10);
          var hr2 = object.hours % 10;
          $hours.find(".gt_atom-num1").text(hr1);
          $hours.find(".gt_atom-num2").text(hr2);


          var $minutes = $element.find(".gt_atom-minutes")
          var min1 = Math.floor(object.minutes / 10);
          var min2 = object.minutes % 10;
          $minutes.find(".gt_atom-num1").text(min1);
          $minutes.find(".gt_atom-num2").text(min2);


          var $seconds = $element.find(".gt_atom-seconds")
          var sec1 = Math.floor(object.seconds / 10);
          var sec2 = object.seconds % 10;
          $seconds.find(".gt_atom-num1").text(sec1);
          $seconds.find(".gt_atom-num2").text(sec2);

          if (isRepeat) {
            var time = hr1.toString() + hr2.toString() + ':' + min1.toString() + min2.toString() + ':' + sec1.toString() + sec2.toString();
            saveTimer(time);
          }
        }
      });
    }

    function saveTimer(time) {
      if (time == '00:00:01') {
        time = dateTimeAnyTime;
      }
      localStorage.setItem(id, time);
    }

    function createTimer() {
      if (type === 'repeat') {
        var totalTime = timeToSecond(dateTimeAny);
        if (localStorage.getItem(id)) {
          totalTime = timeToSecond(localStorage.getItem(id));
        }
        endDate = new Date(Date.now() + totalTime * 1000);
        $element.removeClass("gt_hidden");
        startTimer("repeat1L719gLNfqJcXBj_CountdownTimerBanner", endDate, $element, isLoop, true);
      } else { //scheduled
        endDate = new Date(dateTimeAny);
        $element.removeClass("gt_hidden");
        localStorage.removeItem(id);
        startTimer("repeat1L719gLNfqJcXBj_CountdownTimerBanner", endDate, $element);
      }
    }

    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "1L719gLNfqJcXBj_CountdownTimerBanner",
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
    if (!dateTimeAny) {
      return
    }
    if (showDays) {
      arrayFormat.push("day")
    }
    if (showHours) {
      arrayFormat.push("hour")
    }
    outputFormat = arrayFormat.join("|");
    createTimer();
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
        funcESAtom1L719gLNfqJcXBj_CountdownTimerBanner()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_CountdownTimerBanner" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_buttonLink = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_buttonLink";
  var id = "1L719gLNfqJcXBj_buttonLink";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
    let actions = `[{"control":{"attribute":"1","desc":"","id":"1","isChooseVariantControl":true,"reference":"html","shopify":["all_products[productHandle]","collections.all.products"],"title":"Product","type":"pickproduct","value":{"handle":"No product","id":"No product","quantity":1,"title":"No product"}},"event":"click","id":1}]`
    const isCustomActions = "false" == "true"
    const openNewTab = "false" == "true"
    const linkButton = "#gt_section-VqSeRxw2Ma50cBi";
    const activeButtonFixContent = "false" === "true";
    const buttonFixContent = "Buy [!quantity!] items"
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "1L719gLNfqJcXBj_buttonLink",
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

        window.SOLID.store.subscribe("loading-buy-now-1L719gLNfqJcXBj_buttonLink" + "_" + indexEl, function(isDisplay) {
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
              window.SOLID.store.dispatch("loading-buy-now-1L719gLNfqJcXBj_buttonLink" + "_" + indexEl, "");
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
                window.SOLID.store.dispatch("loading-buy-now-1L719gLNfqJcXBj_buttonLink" + "_" + indexEl, "");
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
        funcESAtom1L719gLNfqJcXBj_buttonLink()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_buttonLink" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_imageOne = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_imageOne";
  var id = "1L719gLNfqJcXBj_imageOne";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_imageOne",
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
        funcESAtom1L719gLNfqJcXBj_imageOne()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_imageOne" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_backgroundLabelOne = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_backgroundLabelOne";
  var id = "1L719gLNfqJcXBj_backgroundLabelOne";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_backgroundLabelOne",
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
        funcESAtom1L719gLNfqJcXBj_backgroundLabelOne()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_backgroundLabelOne" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_headingLabelOne = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_headingLabelOne";
  var id = "1L719gLNfqJcXBj_headingLabelOne";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_headingLabelOne",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_headingLabelOne",
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
        funcESAtom1L719gLNfqJcXBj_headingLabelOne()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_headingLabelOne" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_messageLabelOne = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_messageLabelOne";
  var id = "1L719gLNfqJcXBj_messageLabelOne";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_messageLabelOne",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_messageLabelOne",
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
        funcESAtom1L719gLNfqJcXBj_messageLabelOne()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_messageLabelOne" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_imageTwo = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_imageTwo";
  var id = "1L719gLNfqJcXBj_imageTwo";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_imageTwo",
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
        funcESAtom1L719gLNfqJcXBj_imageTwo()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_imageTwo" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_backgroundLabelTwo = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_backgroundLabelTwo";
  var id = "1L719gLNfqJcXBj_backgroundLabelTwo";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "true" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"tada"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "1L719gLNfqJcXBj_backgroundLabelTwo",
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
        funcESAtom1L719gLNfqJcXBj_backgroundLabelTwo()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_backgroundLabelTwo" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_headingLabelTwo = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_headingLabelTwo";
  var id = "1L719gLNfqJcXBj_headingLabelTwo";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_headingLabelTwo",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_headingLabelTwo",
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
        funcESAtom1L719gLNfqJcXBj_headingLabelTwo()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_headingLabelTwo" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_messageLabelTwo = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_messageLabelTwo";
  var id = "1L719gLNfqJcXBj_messageLabelTwo";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_messageLabelTwo",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_messageLabelTwo",
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
        funcESAtom1L719gLNfqJcXBj_messageLabelTwo()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_messageLabelTwo" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_imageThree = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_imageThree";
  var id = "1L719gLNfqJcXBj_imageThree";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_imageThree",
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
        funcESAtom1L719gLNfqJcXBj_imageThree()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_imageThree" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_backgroundLabelThree = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_backgroundLabelThree";
  var id = "1L719gLNfqJcXBj_backgroundLabelThree";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "true" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"swing"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "1L719gLNfqJcXBj_backgroundLabelThree",
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
        funcESAtom1L719gLNfqJcXBj_backgroundLabelThree()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_backgroundLabelThree" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_headingLabelThree = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_headingLabelThree";
  var id = "1L719gLNfqJcXBj_headingLabelThree";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_headingLabelThree",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_headingLabelThree",
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
        funcESAtom1L719gLNfqJcXBj_headingLabelThree()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_headingLabelThree" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom1L719gLNfqJcXBj_messageLabelThree = function() {
          (function() {
  var elementClassName = ".gt_atom-1L719gLNfqJcXBj_messageLabelThree";
  var id = "1L719gLNfqJcXBj_messageLabelThree";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "1L719gLNfqJcXBj_messageLabelThree",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "1L719gLNfqJcXBj_messageLabelThree",
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
        funcESAtom1L719gLNfqJcXBj_messageLabelThree()
      } catch(e) {
        console.error("Error ESAtom Id: 1L719gLNfqJcXBj_messageLabelThree" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESSectionTWIHRPqOs0JFvSE = function() {
          var $section = jQuery(".gt_section-TWIHRPqOs0JFvSE");
if (!$section || $section.length == 0) {
  return;
}

var isFocus = false;
var $newletterBtn = $section.find(".gt_newletter .gt_newletter-form .gt_newletter_input .gt_newletter_btn");
var $newletterInput = $section.find(".gt_newletter .gt_newletter-form .gt_newletter_input .gt_input");

$newletterInput.off("focus.focusInput1TWIHRPqOs0JFvSE").on("focus.focusInput1TWIHRPqOs0JFvSE",function(){
  isFocus = true;
  $newletterBtn.addClass("gt_border_input");
});
$newletterInput.off("blur.focusInput1TWIHRPqOs0JFvSE").on("blur.focusInput1TWIHRPqOs0JFvSE",function(){
  isFocus = false;
  $newletterBtn.removeClass("gt_border_input");
});

        }
        funcESSectionTWIHRPqOs0JFvSE()
      } catch(e) {
        console.error("Error ESSection Id: TWIHRPqOs0JFvSE" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESElement86073 = function() {
          function main() {
  var $elementProduct = $(".gt_element-86073");
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

  $variantChecked.off("click.selectItem86073").on("click.selectItem86073", function() {
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

  $variantOption.off("click.selectItem86073").on("click.selectItem86073", function() {
    $variantChecked.removeClass('gt_active');
    $variantOptions.removeClass('gt_active');
    var value = $(this).attr("data-value");
    var $variantCheckedCurrent =  $(this).closest(".gt_product-variant-box");
    $variantCheckedCurrent.find(".gt_product-variant--checked .gt_product-variant-option--selected span").html(value);
  });
}

main();

window.SOLID.store.subscribe("run-script-86073", () => {
  main();
});

        }
        funcESElement86073()
      } catch(e) {
        console.error("Error ESElement Id: 86073" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom86073_productTitle = function() {
          var $atoms = jQuery(".gt_atom-86073_productTitle");
if (!$atoms || !$atoms.length) {
  return;
}

/* Variables */
var clientInteractionScrollIntoView = {"delay":0,"duration":"0.5","name":"tada","order":"sequence"};

window.SOLID.library.animation({
  $doms: $atoms,
  elementId: "86073_productTitle",
  animationType: "text",
  interactionScrollIntoView: {
    value: clientInteractionScrollIntoView,
    previewAttr: "interactionScrollIntoView"
  },
  mode: "production"
});

        }
        funcESAtom86073_productTitle()
      } catch(e) {
        console.error("Error ESAtom Id: 86073_productTitle" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom86073_productVendor = function() {
          var $atoms = jQuery(".gt_atom-86073_productVendor");
if (!$atoms || !$atoms.length) {
  return;
}

/* Variables */
var clientInteractionScrollIntoView = "";

window.SOLID.library.animation({
  $doms: $atoms,
  elementId: "86073_productVendor",
  animationType: "text",
  interactionScrollIntoView: {
    value: clientInteractionScrollIntoView,
    previewAttr: "interactionScrollIntoView"
  },
  mode: "production"
});

        }
        funcESAtom86073_productVendor()
      } catch(e) {
        console.error("Error ESAtom Id: 86073_productVendor" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom86073_productButtonBuy = function() {
          function main() {
  /* Init Actions */
  var $atoms = jQuery(".gt_atom-86073_productButtonBuy");
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
    elementId: "86073_productButtonBuy",
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
    
      $($atom).customEvent([{"control":{"attribute":"pickProductButton","id":"pickProductButton","isButtonAddToCard":true,"type":"pickproduct"},"event":"click","id":1},{"control":{"attribute":"pickLinkButton","id":"pickLinkButton","newTab":false,"reference":"html","title":"Pick Link","type":"picklink","value":"/cart"},"event":"click","id":2}], "86073_productButtonBuy" + "_" + i);
    

    /* Listen if is button add to card */

    window.SOLID.store.subscribe("loading-buy-now-86073_productButtonBuy" + "_" + i, function (isDisplay) {
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
          window.SOLID.store.dispatch("loading-buy-now-86073_productButtonBuy", "");
          window.SOLID.store.dispatch("loading-buy-now-86073_productButtonBuy" + "_" + i, "");
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
            window.SOLID.store.dispatch("loading-buy-now-86073_productButtonBuy", "");
            window.SOLID.store.dispatch("loading-buy-now-86073_productButtonBuy" + "_" + i, "");
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
            textAddToCard: "ADD", 
            textSoldOut: "Sold out"
          }
        })
    
    
  }
}

main();

window.SOLID.store.subscribe("run-script-86073_productButtonBuy", () => {
  main();
});

        }
        funcESAtom86073_productButtonBuy()
      } catch(e) {
        console.error("Error ESAtom Id: 86073_productButtonBuy" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtom86073_productIconBuy = function() {
          function main() {
  /* Init Actions */
  var $atoms = jQuery(".gt_atom-86073_productIconBuy");
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
    elementId: "86073_productIconBuy",
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
    
      $($atom).customEvent([{"control":{"attribute":"pickProductButton","id":"pickProductButton","type":"pickproduct","isButtonAddToCard":true},"event":"click","id":1},{"control":{"attribute":"pickLinkButton","id":"pickLinkButton","newTab":false,"reference":"html","title":"Pick Link","type":"picklink","value":"/cart"},"event":"click","id":2}], "86073_productIconBuy" + "_" + i);
    

    /* Listen if is button add to card */

    window.SOLID.store.subscribe("loading-buy-now-86073_productIconBuy" + "_" + i, function (isDisplay) {
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
          window.SOLID.store.dispatch("loading-buy-now-86073_productIconBuy", "");
          window.SOLID.store.dispatch("loading-buy-now-86073_productIconBuy" + "_" + i, "");
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
            window.SOLID.store.dispatch("loading-buy-now-86073_productIconBuy", "");
            window.SOLID.store.dispatch("loading-buy-now-86073_productIconBuy" + "_" + i, "");
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

window.SOLID.store.subscribe("run-script-86073_productIconBuy", () => {
  main();
});

        }
        funcESAtom86073_productIconBuy()
      } catch(e) {
        console.error("Error ESAtom Id: 86073_productIconBuy" )
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
        const funcESWidgetDLhVfOwT0PKKHYz = function() {
          (function() {
  var elementClassName = ".gt_widget-DLhVfOwT0PKKHYz";
  var id = "DLhVfOwT0PKKHYz";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var product;
    var gtCurrentVariant;
    var swiperThumbs;
    var swiperTop;
    var initialSlide = 0;
    var qty = 1;
    var currentOptions = [];
    var $slideTemplate;
    var $swiperContainerTemplate;
    var $slideThumbTemplate;
    var $swiperThumbsContainerTemplate;
    var checkWindowWidth = $(window).width();
    var enableMobile = "false";
    var positionIcon = "default";
    
    /* store get state block script */
    
    /* methods block script */
    function getTemplate() {
      const $swiperContainer = $element.find(".gt_product-feature--swiper");
      if ($swiperContainer && $swiperContainer.length) {
        $swiperContainerTemplate = $($swiperContainer[0]).clone();
      }
      const $slideItemImage = $swiperContainer.find(".swiper-slide");
      if ($slideItemImage && $slideItemImage.length) {
        $slideTemplate = $($slideItemImage[0]).clone();
      }

      const $swiperThumbsContainer = $element.find(".gt_product--swiper");
      if ($swiperThumbsContainer && $swiperThumbsContainer.length) {
        $swiperThumbsContainerTemplate = $($swiperThumbsContainer[0]).clone();
      }
      const $imageSlideThumb = $swiperThumbsContainer.find(".swiper-slide");
      if ($imageSlideThumb && $imageSlideThumb.length) {
        $slideThumbTemplate = $($imageSlideThumb[0]).clone();
      }
    }

    function setup() {
      renderButtonInList();
      onClickQuickView();
      onClickProductVariant();
      initEventRenderScriptVariant();
      checkOptionSettings();
      setAttributeForBtnQuickView();
    }

    function runAddClassFixed() {
      $(window)
        .off("resize.checkHeightScreensDLhVfOwT0PKKHYz")
        .on("resize.checkHeightScreensDLhVfOwT0PKKHYz", function() {
          var heightModel = $(".boxContainer").height();
          var heightModelContent = $(".gt_modal-body").height();
          if (heightModel > heightModelContent) {
            $(".js_add--fixed").addClass("es-fixed");
          } else {
            $(".js_add--fixed").removeClass("es-fixed");
          }
        });
    }

    function checkOptionSettings() {
      if (positionIcon === "default") {
        $(".gt_product-element").addClass("position-default");
        $(".gt_product-element").removeClass("position-beside");
      } else {
        $(".gt_product-element").removeClass("position-default");
        $(".gt_product-element").addClass("position-beside");
      }
      if (enableMobile === "true") {
        $("body").addClass("show-quickview-mobile");
        $("body").removeClass("hide-quickview-mobile");
      } else {
        $("body").removeClass("show-quickview-mobile");
        $("body").addClass("hide-quickview-mobile");
      }
    }

    function renderButtonInList() {
      $(".gt_product-element .gt_product-image, .gt_product-element .gt_product-button").each(function() {
        var listBtnQuickView = $(this).find(".gt_btn-quick-view");
        listBtnQuickView.remove();
        var htmlBtnQuickView = $element.find(".gt_btn-preview-quick-view");
        var htmlBtnQuickViewClass = htmlBtnQuickView && htmlBtnQuickView.attr("class") && htmlBtnQuickView.attr("class").split(/\s+/);
        htmlBtnQuickViewClass = htmlBtnQuickViewClass && htmlBtnQuickViewClass.length && htmlBtnQuickViewClass.join(" ");

        var htmlBtnQuickViewHTML = "";
        if (htmlBtnQuickView && htmlBtnQuickView.html()) {
          htmlBtnQuickViewHTML = htmlBtnQuickView.html();
        }
        var btnQuickView = `<div class="gt_btn-quick-view ${htmlBtnQuickViewClass}">${htmlBtnQuickViewHTML}</div>`;
        $(this).append(btnQuickView);
        $(this).addClass("has-quick-view");
      });

      //addattributeopensetting in editor
      $(".gt_product-element .gt_btn-quick-view").each(function() {
        var button = $(this).find(".gt_button");
        addAttributeOpenSetingInEditor($(this));
        addAttributeOpenSetingInEditor(button);
      });
    }

    function addAttributeOpenSetingInEditor(el) {
      el.attr("has-open-setting", true);
      el.attr("remove-toolbar-active", true);
      el.attr("only-widget", true);
    }

    function onClickQuickView() {
      $(".gt_btn-quick-view").on("click", function(event) {
        setTimeout(() => {
          $("body").addClass("show-quickview");
        }, 1000);
        event.preventDefault();
        
        resetDataModal();
        var productJson = $(this).closest(".gt_product-element").find(".ProductJson");
        productJson = JSON.parse(productJson.html());
        product = productJson;
        //resetDataJson
        var productID = productJson.id;
        var prJsontext = $(this).closest(".gt_product-element").find(".ProductJson").html();
        $element.find(".ProductJson").attr("data-id", productID);
        $element.find(".ProductJson").html(prJsontext);

        if (!product) {
          return;
        }
        jQuery.getJSON("https://" + __GemSettings.domain + "/products/" + product.handle + ".js", function(result) {
            product = result;
            inProgressRender();
          })
          .fail(function() {
            inProgressRender();
          });
      });
    }

    function setAttributeForBtnQuickView() {
      $(".gt_product-element").each(function() {
        var productJson = $(this).find(".ProductJson");
        productJson = JSON.parse(productJson.html());
        $(this).find(".gt_btn-quick-view").attr("product-id", productJson.id);
      });
    }

    function getQueryByUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      const afterSubmitFormSoldOut = urlParams.get("success");
      const currentProductId = urlParams.get("q_product_id");
      const currentVariantId = urlParams.get("q_variant_id");
      return {
        status: afterSubmitFormSoldOut,
        product_id: currentProductId,
        variant_id: currentVariantId,
      };
    }

    function openQuickViewWhenSubmitSoldOutSuccess() {
      var queryUrl = getQueryByUrl();
      if (queryUrl.status) {
        $(".gt_product-element .gt_btn-quick-view").each(function() {
          var productId = $(this).attr("product-id");
          if (productId == queryUrl.product_id) {
            $(this).trigger("click");
            $("html, body").animate({
              scrollTop: $(this).offset().top - 300
            }, 300);
          }
        });
      }
    }

    function inProgressRender() {
      renderProduct();
      showModalQuickView();
      onClickProductVariant();
      window.SOLID.store.dispatch("addon-quick-view-render", true);
    }

    function onClickProductVariant() {
      $element.find(".gt_product-variant--checked").click(function() {
        var $currentTargetOptions = $(this);
        const $options = $currentTargetOptions.parents(".gt_product-variant--item").find(".gt_product-variant-options");
        $currentTargetOptions.toggleClass("gt_active-option gt_active");
        $options.toggleClass("gt_active-option gt_active");
        jQuery(document).mouseup(function(e) {
          var container = jQuery(".gt_product-variant--checked");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            $currentTargetOptions.removeClass("gt_active-option gt_active");
            $options.removeClass("gt_active-option gt_active");
          }
        });
      });
      $element.find(".gt_product-variant").on("click", ".gt_product-variant--option-item", function() {
        $(this).closest(".gt_product-variant--item").find(".gt_product-variant--checked").removeClass("gt_active");
        $(this).closest(".gt_product-variant-options").removeClass("gt_active");
        optionChange($(this));
      });
    }

    function initEventRenderScriptVariant() {
      window.SOLID.store.dispatch(`run-script-${id}_productVariants`, true);
    }

    function resetDataModal() {
      qty = 1;
      setValQty();
    }

    function showModalQuickView() {
      var modalQuickView = $element.find(".gt_modal-quick-view");
      modalQuickView.addClass("gt_modal-show");
    }

    function hideModalQuickView() {
      var modalQuickView = $element.find(".gt_modal-quick-view");
      $("body").removeClass("show-quickview");
      modalQuickView.removeClass("gt_modal-show");
      removeQueryCurrentUrl("success");
      removeQueryCurrentUrl("q_product_id");
      removeQueryCurrentUrl("q_variant_id");
    }

    function formatMoney(price) {
      var dataCurrency = window.store.get("dataCurrency");
      var format = __GemSettings.money;
      if (dataCurrency) {
        price = Shopify.gemFormatMoney(price, dataCurrency.currency, dataCurrency.data);
      } else {
        price = Shopify.formatMoney(price, format);
      }
      return price;
    }

    function imgURL(src) {
      //removeanycurrentimagesizethenaddthe new imagesize
      return src
        .replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g, ".")
        .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function(match) {
          return match;
        });
    }

    function getValQty() {
      return $element.find(".gt_product-quantity--number").val();
    }

    function setValQty() {
      $element.find(".gt_product-quantity--number").val(qty);
    }

    function qtyPlus() {
      var currentQty = getValQty();
      currentQty = parseInt(currentQty);
      if (currentQty === 100) {
        return;
      }
      qty = currentQty + 1;
      setValQty();
      renderPrice();
    }

    function qtyMinus() {
      var currentQty = getValQty();
      currentQty = parseInt(currentQty);
      currentQty = currentQty - 1;
      if (currentQty <= 0) {
        currentQty = 1;
      }
      qty = currentQty;
      setValQty();
      renderPrice();
    }

    function qtyChange() {
      var currentQty = getValQty();
      currentQty = parseInt(currentQty);
      if (!currentQty || isNaN(currentQty) || currentQty <= 0) {
        currentQty = 1;
      }
      if (currentQty >= 100) {
        currentQty = 100;
      }
      qty = currentQty;
      setValQty();
      renderPrice();
    }

    function convertImageURL(url) {
      //removedomain
      url = url.replace(/^.*\/\/[^\/]+/, "");
      //removeparams
      url = url.replace(/\?v=.*?$/g, "");
      return url;
    }

    function getCurrentVariant() {
      currentOptions = [];
      $element.find(".gt_product-variant--option-item").each(function() {
        var hasActive = $(this).hasClass("gt_active");
        var itemValue = $(this).find(".gt_product-variant--select__name").text();
        if (hasActive) {
          currentOptions.push(itemValue);
        }
      });

      var currentVariant = "";

      product.variants.forEach((variant) => {
        if (variant.options && variant.options.length && variant.options.join() === currentOptions.join()) {
          currentVariant = variant;
        }
      });

      if (currentVariant) {
        gtCurrentVariant = currentVariant;
      }
    }

    function renderProduct() {
      var queryUrl = getQueryByUrl();
      const currentVariantId = queryUrl.variant_id;
      var currentVariant = "";
      if (currentVariantId) {
        currentVariant = product.variants.length && product.variants.find((variant) => variant.id == currentVariantId);
      }
      gtCurrentVariant = currentVariant || product.selected_or_first_available_variant || (product.variants.length && product.variants[0]);
      setValueCurrentVariant();
      //RENDERSLIDE
      renderImage();
      //RENDERTITLE
      renderTitle();
      //RENDERPRICE
      renderPrice();
      //RENDEROPTIONS
      renderOptions();
      //RENDERCARTBUTTON
      renderCartButton();
      //RENDERFORMSOLDOUT
      renderFormSoldOut();
      //RENDERPRODUCTDESCRIPTION
      renderProductDescription();
    }

    function getInitialSlideByCurrentVariant() {
      if (!gtCurrentVariant || !gtCurrentVariant.featured_image || !gtCurrentVariant.featured_image.src) {
        return;
      }
      var currentInitialSlide = 0;
      product.images.forEach((image, index) => {
        var imageSrc = image;
        if (isObject(image)) {
          imageSrc = image.src;
        }
        if (convertImageURL(imageSrc) === convertImageURL(gtCurrentVariant.featured_image.src)) {
          currentInitialSlide = index;
        }
      });
      initialSlide = currentInitialSlide;
      if (!swiperTop) {
        return;
      }
      swiperThumbs.slideTo(initialSlide);
      swiperTop.slideTo(initialSlide);
    }

    function slideChange() {
      if (!swiperTop) {
        return;
      }
      var currentImage = product.images[swiperThumbs.realIndex] || "";
      var currentImageSrc = currentImage;
      if (isObject(currentImage)) {
        currentImageSrc = currentImage.src;
      }
      var currentVariant = "";

      product.variants.forEach((variant) => {
        if (
          variant &&
          variant.featured_image &&
          variant.featured_image.src &&
          convertImageURL(variant.featured_image.src) === convertImageURL(currentImageSrc)
        ) {
          currentVariant = variant;
        }
      });

      if (currentVariant) {
        gtCurrentVariant = currentVariant;

        //Activeoption
        var items = $element.find(".gt_product-variant--option-item");
        items.each(function() {
          $(this).removeClass("gt_active");
        });

        items.each(function() {
          var itemValue = $(this).find(".gt_product-variant--select__name").text();
          if (gtCurrentVariant.options && gtCurrentVariant.options.includes(itemValue)) {
            $(this).addClass("gt_active");
            changeOptionSelectText($(this));
          }
        });

        activeImageSlideThumb();
        renderPrice();
        renderCartButton();
        renderFormSoldOut();
        setValueCurrentVariant();
      }
    }

    function activeImageSlideThumb() {
      const $swiperThumbsContainer = $element.find(".gt_product--swiper");
      const $imageSlideThumb = $swiperThumbsContainer.find(".swiper-slide");
      $imageSlideThumb.each(function(index) {
        const elImg = $(this).find("img");
        if (index !== swiperThumbs.realIndex) {
          elImg.removeClass("gt_active gf_active");
        } else {
          elImg.addClass("gt_active gf_active");
        }
      });
    }

    function renderImage() {
      if (!product.images || !product.images.length) {
        var srcNotFound = "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif";
        product.images.push(srcNotFound);
      }

      var atomId = `DLhVfOwT0PKKHYz_` + "productImageList";
      if (!$swiperContainerTemplate || !$swiperThumbsContainerTemplate) {
        return;
      }
      const $swiperContainer = $swiperContainerTemplate.clone();
      const $swiperThumbsContainer = $swiperThumbsContainerTemplate.clone();
      $swiperContainer.find(".swiper-wrapper").html("");
      $swiperThumbsContainer.find(".swiper-wrapper").html("");

      product.images.forEach((image, index) => {
        var imageSrc = image;
        var dataImageId = index;
        if (isObject(image)) {
          imageSrc = image.src;
          dataImageId = image.id;
        }

        const $swiperItem = $slideTemplate.clone();
        $swiperItem.find("img").attr({
          "data-id": dataImageId,
          src: imageSrc,
        });
        $swiperItem.find("img").removeClass("gt_lazyload");
        $swiperContainer.find(".swiper-wrapper").append($swiperItem);

        const $swiperThumbItem = $slideThumbTemplate.clone();
        $swiperThumbItem.find("img").attr({
          "data-id": dataImageId,
          src: imgURL(imageSrc),
        });
        $swiperThumbItem.find("img").removeClass("gt_lazyload");
        $swiperThumbsContainer.find(".swiper-wrapper").append($swiperThumbItem);
      });

      $element.find(".gt_product-img").html($swiperContainer);
      $element.find(".gt_product-carousel-box").html($swiperThumbsContainer);

      setTimeout(() => {
        var atomProductImageListPublicFunc = window.SOLID.public && window.SOLID.public["atom" + "_" + atomId + "_" + 0];
        if (atomProductImageListPublicFunc) {
          atomProductImageListPublicFunc.checkImageListPosition();
          atomProductImageListPublicFunc.checkImageListActive();
          atomProductImageListPublicFunc.initSlider();
          atomProductImageListPublicFunc.calculatorImageSlideHeight();
          swiperTop = atomProductImageListPublicFunc.getMySwiper();
          swiperThumbs = atomProductImageListPublicFunc.getMySwiperFeature();
          swiperTop.update();
          swiperThumbs.update();
          activeImageSlideThumb();
        }

        if (!swiperTop) {
          return;
        }
        swiperThumbs.on("slideChange", function() {
          slideChange();
        });

        getInitialSlideByCurrentVariant();
      }, 100);
    }

    function renderTitle() {
      var productTitle = product.title;
      var productUrl = product.url;
      $element.find(".gt_product-title").html(`<a target="_blank" href="${productUrl}">${productTitle}</a>`);
    }

    function renderPrice() {
      var syncQuantityandPrice = $element.find(".gt_product-price").attr("sync-quantity-and-price");
      var syncQuantityandPriceCompare = $element.find(".gt_product-compare-price").attr("sync-quantity-and-price");

      var productPrice = (gtCurrentVariant && gtCurrentVariant.price) || product.price || 0;
      if (syncQuantityandPrice && syncQuantityandPrice === "true") {
        productPrice = productPrice * qty;
      }

      var productPriceCompare = (gtCurrentVariant && gtCurrentVariant.compare_at_price) || product.compare_at_price || 0;
      if (syncQuantityandPriceCompare && syncQuantityandPriceCompare === "true") {
        productPriceCompare = productPriceCompare * qty;
      }

      $element.find(".gt_product-price--number").html(`${formatMoney(productPrice)}`);
      $element.find(".gt_product-price--compare").css({
        display: "none",
      });
      $element.find(".gt_product-tag-sale").css({
        display: "none",
      });
      if (productPriceCompare > productPrice) {
        var dataLabel = $element.find(".gt_product-tag-sale").attr("data-label");
        var dataType = $element.find(".gt_product-tag-sale").attr("data-type");
        var dataPercent = "";
        var dataNumber = "";
        $element.find(".gt_product-price--compare").html(`${formatMoney(productPriceCompare)}`);
        $element.find(".gt_product-price--compare").css({
          display: "block",
        });
        var priceSale = parseFloat(productPriceCompare, 2) - parseFloat(productPrice, 2);
        var priceSalePercent = Math.round((priceSale / productPriceCompare) * 100);
        if (dataType === "percent") {
          dataPercent = dataLabel && dataLabel.replace("[!Profit!]", ` ${priceSalePercent}%`);
        } else {
          dataNumber = dataLabel && dataLabel.replace("[!Profit!]", ` ${formatMoney(priceSale)}`);
        }
        var tagSale = `
          <div class="gt_flex gt_items--center gt_justify-c-center gt_product-tag-sale--inner">
            <div class="gt_product-tag-sale--value gt_product-tag-sale--value--percent">${dataPercent}</div>
            <div class="gt_product-tag-sale--value gt_product-tag-sale--value--number">${dataNumber}</div>
            <div class="gt_product-tag-sale--after"></div>
          </div>
        `;
        $element.find(".gt_product-tag-sale").html(tagSale);
        $element.find(".gt_product-tag-sale").css({
          display: "block",
        });
      }
    }

    function optionChange(el) {
      var items = el.parent().find(".gt_product-variant--option-item");
      items.each(function() {
        $(this).removeClass("gt_active");
      });
      el.addClass("gt_active");
      changeOptionSelectText(el);
      getCurrentVariant();
      setValueCurrentVariant();
      renderPrice();
      getInitialSlideByCurrentVariant();
      renderCartButton();
      renderFormSoldOut();
    }

    function setValueCurrentVariant() {
      if (gtCurrentVariant && gtCurrentVariant.id) {
        $element.find(".gt_variant--input").val(gtCurrentVariant.id);
      }
    }

    function changeOptionSelectText(el) {
      var variantCustom = el.find(".gt-variant-style_custom");
      var elValue = el.attr("data-value");
      el.closest(".gt_product-variant--item").find(".gt_product-variant-option--selected-text").attr("data-value", elValue);
      var optionSelectedText = `<span>${elValue}</span>`;
      if (variantCustom && variantCustom.length) {
        optionSelectedText = `<span style="display: none;">${elValue}</span><div class="gt-variant-style_custom" style="display: flex; align-items: center;">${variantCustom.html()}</div>`;
      }
      el.closest(".gt_product-variant--item").find(".gt_product-variant--checked").find(".gt_product-variant-option--selected-text").html(optionSelectedText);
    }

    function renderOptions() {
      var options = product.options;
      if (!options || !options.length) {
        return;
      }
      options = options.sort((a, b) => a.position > b.position);
      //showvariantifdisplaynone
      var $atomVariant = $element.find(".gt_product-custom-variant");
      $atomVariant.css("display", "");
      var $elVariant = $element.find(".gt_product-variant");
      var $elVariants = $element.find(".gt_product-variant--name");
      var $options = $element.find(".gt_product-swatches--item");

      $elVariant.find(".gt_product-variant--select").addClass("gt_product-variant--option-item");

      $elVariant.find(".gt_swatches--select").addClass("gt_product-variant--option-item gt_product-variant--btn-select");
      $elVariant.find(".gt_swatches--select span").addClass("gt_product-variant--select__name");

      //showvariantifdisplaynonebyaddonvariantStyle
      if (window.SOLID.library && window.SOLID.library.gtVariantsStyleV2) {
        $elVariant.addClass("gt_show_product-variant");
        window.SOLID.library.gtVariantsStyleV2({
          $element: $atomVariant,
          noCache: true,
        }).Destroy();
      }
      var dataType = $elVariant.attr("data-type");
      var boxVariant = "";
      if (dataType === "segment") {
        const $optionItems = $element.find(".gt_product-swatches--item");
        const $templateVariant = $optionItems.first().clone();
        $optionItems.remove();
        const $optionWrapper = $element.find(".gt_product-swatches");
        options.forEach((option) => {
          const $newOption = createNewOptionVariantHTMLSegment(option, $templateVariant);
          $optionWrapper.append($newOption);
        });
      } else {
        const $optionItems = $element.find(".gt_product-swatches--item");
        const $templateVariant = $optionItems.first().clone();
        $optionItems.remove();
        const $optionWrapper = $element.find(".gt_product-swatches");
        options.forEach((option) => {
          const $newOption = createNewOptionVariantHTMLSelect(option, $templateVariant);
          $optionWrapper.append($newOption);
        });
      }
      if (window.SOLID.public && window.SOLID.public["addon_variant_style"]) {
        window.SOLID.public["addon_variant_style"].forEach((cacheFunction) => {
          cacheFunction();
        });
      }
    }

    function createNewOptionVariantHTMLSelect(option, $templateVariant) {
      const $newOption = $templateVariant.clone();
      const $optionValueItemsActive = $newOption.find(".gt_product-variant-option--selected-text");
      $newOption.removeClass("variant_none");
      $newOption.attr("data-name", option.name);
      if (option.name != "Title" || (option.values.length && option.values[0] != "Default Title")) {
        $newOption.find(".gt_product-variant--name").html(option.name);
      } else {
        $newOption.find(".gt_product-variant--name").html();
        $newOption.addClass("variant_none");
      }
      const $optionValueItems = $newOption.find(".gt_product-variant--option-item");
      const $templateOptionValueItem = $optionValueItems.first().clone();
      $templateOptionValueItem.removeClass("gt_active");
      $optionValueItems.remove();
      const $optionValueWrapper = $newOption.find(".gt_product-variant-options");
      option.values.forEach((optionValue) => {
        const $newOptionValueItem = createNewOptionValueVariantHTMLSelect({
            optionName: option.name,
            optionValue: optionValue,
            optionPosition: option.position
          },
          $templateOptionValueItem
        );
        $optionValueItemsActive.html(createVariantActiveSelect({
          optionValue: optionValue,
          optionPosition: option.position
        }));
        $optionValueWrapper.append($newOptionValueItem);
      });
      const isShowOneVariant = $newOption.attr("data-check-show-one-variant");
      if (isShowOneVariant === "false" && option?.values?.length === 1) {
        $newOption.addClass("variant_none");
      }
      return $newOption;
    }

    function createVariantActiveSelect(dataOptionValue) {
      const {
        optionValue,
        optionPosition
      } = dataOptionValue;
      gtCurrentVariant = product.selected_or_first_available_variant || (product.variants.length && product.variants[0]);
      const currentVariant = window.SOLID.store.getState("variant" + product.id, gtCurrentVariant);
      const currentOptionValueActive = currentVariant["option" + optionPosition];
      if (currentOptionValueActive === optionValue) {
        return currentOptionValueActive;
      }
    }

    function createNewOptionValueVariantHTMLSelect(dataOptionValue, $template) {
      const {
        optionName,
        optionValue,
        optionPosition
      } = dataOptionValue;
      const $newOptionValueItem = $template.clone();
      $newOptionValueItem.attr({
        "data-name": optionName,
        "data-value": optionValue
      });
      $newOptionValueItem.find(".gt_product-variant--select__name").html(optionValue);

      const currentVariant = window.SOLID.store.getState("variant" + product.id);
      if (currentVariant && currentVariant["option" + optionPosition]) {
        const currentOptionValueActive = currentVariant["option" + optionPosition];
        if (currentOptionValueActive === optionValue) {
          $newOptionValueItem.addClass("gt_active");
        }
      }
      return $newOptionValueItem;
    }

    function createNewOptionVariantHTMLSegment(option, $templateVariant) {
      const $newOption = $templateVariant.clone();
      $newOption.removeClass("variant_none");
      $newOption.attr("data-name", option.name);

      if (option.name != "Title" || (option.values.length && option.values[0] != "Default Title")) {
        $newOption.find(".gt_product-variant--name").html(option.name);
      } else {
        $newOption.find(".gt_product-variant--name").html();
        $newOption.addClass("variant_none");
      }
      const $optionValueItems = $newOption.find(".gt_product-variant--option-item");
      const $templateOptionValueItem = $optionValueItems.first().clone();
      $templateOptionValueItem.removeClass("gt_active");
      $optionValueItems.remove();
      const $optionValueWrapper = $newOption.find(".gt_product-variant--options");

      option.values.forEach((optionValue) => {
        const $newOptionValueItem = createNewOptionValueVariantHTMLSegment({
            optionName: option.name,
            optionValue: optionValue,
            optionPosition: option.position
          },
          $templateOptionValueItem
        );
        $optionValueWrapper.append($newOptionValueItem);
      });
      const isShowOneVariant = $newOption.attr("data-check-show-one-variant");
      if (isShowOneVariant === "false" && option?.values?.length === 1) {
        $newOption.addClass("variant_none");
      }
      return $newOption;
    }

    function createNewOptionValueVariantHTMLSegment(dataOptionValue, $template) {
      const {
        optionName,
        optionValue,
        optionPosition
      } = dataOptionValue;
      const $newOptionValueItem = $template.clone();
      $newOptionValueItem.attr({
        "data-name": optionName,
        "data-value": optionValue
      });
      $newOptionValueItem.find(".gt_product-variant--select__name").html(optionValue);

      //gtCurrentVariant = product.selected_or_first_available_variant||(product.variants.length&&product.variants[0]);
      // const currentVariant = window.SOLID.store.dispatch("variant"+product.id,gtCurrentVariant);
      const currentVariant = window.SOLID.store.getState("variant" + product.id);
      if (currentVariant && currentVariant["option" + optionPosition]) {
        const currentOptionValueActive = currentVariant["option" + optionPosition];
        if (currentOptionValueActive === optionValue) {
          $newOptionValueItem.addClass("gt_active");
        }
      }
      return $newOptionValueItem;
    }

    function renderCartButton(isPreviewSoldOut = false) {
      var productId = product.id;
      var variantId = gtCurrentVariant.id || "";

      var addCartBtn = $element.find(".gt_product-btn__add-cart");
      var buyNowBtn = $element.find(".gt_product-btn__buy-now");

      addCartBtn.attr("data-product-id", productId);
      addCartBtn.attr("data-variant-id", variantId);

      buyNowBtn.attr("data-product-id", productId);
      buyNowBtn.attr("data-variant-id", variantId);

      var addCartBtnText = addCartBtn.attr("data-text");
      addCartBtnText = addCartBtnText || "Add To Cart";
      var addCartBtnTextSoldOut = addCartBtn.attr("data-text-sold-out");
      addCartBtnTextSoldOut = addCartBtnTextSoldOut || "Sold out";

      var buyNowBtnText = buyNowBtn.attr("data-text");
      buyNowBtnText = buyNowBtnText || "Buy Now";
      var buyNowBtnTextSoldOut = buyNowBtn.attr("data-text-sold-out");
      buyNowBtnTextSoldOut = buyNowBtnTextSoldOut || "Sold out";

      addCartBtn.find(".gt_button-content-text-main").html(addCartBtnText);
      elRemoveDisabled(addCartBtn);

      buyNowBtn.find(".gt_button-content-text-main").html(buyNowBtnText);
      elRemoveDisabled(buyNowBtn);

      var elBtnGroup = $element.find(".gt_product-group-btn");
      var elStock = $element.find(".gt_text-in-stock");
      elBtnGroup.removeClass("is-hidden");
      elStock.removeClass("is-hidden");

      var elViewMore = $element.find(".gt_box-view-more");
      elViewMore.removeClass("gt_mt2--small");

      if (!gtCurrentVariant || !gtCurrentVariant.available || isPreviewSoldOut) {
        addCartBtn.find(".gt_button-content-text-main").html(addCartBtnTextSoldOut);
        elAddDisabled(addCartBtn);

        buyNowBtn.find(".gt_button-content-text-main").html(buyNowBtnTextSoldOut);
        elAddDisabled(buyNowBtn);

        var publicFuncSoldOutForm = publicFunctionSoldOutForm();
        if (publicFuncSoldOutForm) {
          publicFuncSoldOutForm.showForm();
        }
        elBtnGroup.addClass("is-hidden");
        elStock.addClass("is-hidden");
        elViewMore.addClass("gt_mt2--small");
      }
    }

    function renderFormSoldOut(isPreviewSoldOut = false) {
      var publicFuncSoldOutForm = publicFunctionSoldOutForm();
      var form = $element.find("form");
      form.attr("action", "/cart/add");
      form.attr("enctype", "multipart/form-data");
      var formType = form.find("input[name='form_type']");
      formType.val("product");
      var boxDetail = $element.find(".gt_product-detail");
      boxDetail.removeClass("has-box-notify");
      if (publicFuncSoldOutForm) {
        publicFuncSoldOutForm.setReturnTo(window.location.pathname);
        publicFuncSoldOutForm.hideForm();
        publicFuncSoldOutForm.hideMessageSuccess();
        publicFuncSoldOutForm.setProductName(product.title);
        publicFuncSoldOutForm.setVariantName(gtCurrentVariant.title);
        publicFuncSoldOutForm.setProductUrl(window.location.origin + "/products/" + product.handle + "?variant=" + gtCurrentVariant.id);
      }
      if (!gtCurrentVariant || !gtCurrentVariant.available || isPreviewSoldOut) {
        if (publicFuncSoldOutForm) {
          publicFuncSoldOutForm.setReturnTo(window.location.pathname + `?success=true&q_product_id=${product.id}&q_variant_id=${gtCurrentVariant.id}`);
          publicFuncSoldOutForm.showForm();
        }
        boxDetail.addClass("has-box-notify");
        form.attr("action", "/contact");
        form.removeAttr("enctype");
        formType.val("contact");
      }
      var queryUrl = getQueryByUrl();
      if (queryUrl.status && queryUrl.variant_id == gtCurrentVariant.id && publicFuncSoldOutForm) {
        publicFuncSoldOutForm.hideForm();
        publicFuncSoldOutForm.showMessageSuccess();
      }
    }

    function renderProductDescription() {
      var $atomDesc = $element.find(".gt_product_description_qw");
      if (!$atomDesc.length) {
        return;
      }
      var $desc = $atomDesc.find(".gt_box-desc");
      $desc.html(product.description);
      var atomId = `DLhVfOwT0PKKHYz_` + "productDescription";
      var atomProductDescPublicFunc = window.SOLID.public && window.SOLID.public["atom" + "_" + atomId + "_" + 0];
      if (atomProductDescPublicFunc && atomProductDescPublicFunc.initView) {
        var $modal = $element.find(".gt_modal-quick-view");
        $modal.css("display", "flex");
        atomProductDescPublicFunc.initView();
        $modal.css("display", "");
      }
      var $link = $atomDesc.find(".gt_go-to-product");
      if ($link.length) {
        $link.attr("href", product.url);
      }
      //setmaxheightifshowmoretoolong
      setTimeout(function() {
        var modalBodyHeight = "200vh - 24px - 64px"; //minuspadding
        var $productInfo = $(".gt_product-detail");
        var productInfoHeight = $productInfo.outerHeight();
        var productInforMarginY = 0;
        if ($productInfo.length) {
          var productInfoStyle = window.getComputedStyle($productInfo[0]);
          productInforMarginY = parseInt(productInfoStyle.marginTop) + parseInt(productInfoStyle.marginBottom);
        }
        var $groupAction = $(".gt_product-sticky");
        var groupActionMarginY = 0;
        if ($groupAction.length) {
          var groupInfo = window.getComputedStyle($groupAction[0]);
          groupActionMarginY =
            parseInt(groupInfo.marginTop) + parseInt(groupInfo.marginBottom) + parseInt(groupInfo.paddingTop) + parseInt(groupInfo.paddingBottom);
        }
        var heightPrev = 0;
        var $domPrev = $atomDesc.prev();
        while ($domPrev.length) {
          var domPrevStyle = window.getComputedStyle($domPrev[0]);
          heightPrev += $domPrev.outerHeight() + parseInt(domPrevStyle.marginTop) + parseInt(domPrevStyle.marginBottom);
          $domPrev = $domPrev.prev();
        }
        var marginAtomDescY = 0;
        if ($atomDesc.length) {
          var atomDescStyle = window.getComputedStyle($atomDesc[0]);
          marginAtomDescY = parseInt(atomDescStyle.marginTop) + parseInt(atomDescStyle.marginBottom);
        }
        var maxHeightDesc = `calc(${modalBodyHeight} - ${productInfoHeight}px - ${productInforMarginY}px - ${heightPrev}px - ${groupActionMarginY}px - ${marginAtomDescY}px)`;
        $atomDesc.css("max-height", maxHeightDesc);
      }, 200);
    }

    function publicFunctionSoldOutForm() {
      var atomId = `DLhVfOwT0PKKHYz_` + "productSoldOutForm";
      var atomSoldOutPublicFunc = window.SOLID.public && window.SOLID.public["atom" + "_" + atomId + "_" + 0];
      return atomSoldOutPublicFunc;
    }

    function renderSoldOutFormAfterAtomLoad() {
      renderFormSoldOut();
    }

    function elAddDisabled(el) {
      el.attr("disabled", true);
      el.addClass("gt_sold_out");
    }

    function elRemoveDisabled(el) {
      el.removeAttr("disabled");
      el.removeClass("gt_sold_out");
    }

    function isObject(data) {
      return typeof data === "object" && data !== null;
    }

    function removeQueryCurrentUrl(param) {
      //ConstructURLSearchParamsobjectinstancefromcurrentURLquerystring.
      var queryParams = new URLSearchParams(window.location.search);

      //Set new ormodifyexistingparametervalue.
      if (queryParams.has(param)) {
        queryParams.delete(param);
      }

      //Replacecurrentquerystringwiththe new one.
      history.replaceState(null, null, "?" + queryParams.toString());
    }
    
    /* init block script */
    runAddClassFixed();
    getTemplate();
    setup();
    openQuickViewWhenSubmitSoldOutSuccess();
    
    /* store subscribe block script */
    
    /* events block script */
    var $elements_1 = $element.find(".gt_modal-backdrop");
    $elements_1.off("click").on("click", hideModalQuickView);
    var $elements_2 = $element.find(".gt_modal-quick-view--close");
    $elements_2.off("click").on("click", hideModalQuickView);
    var $elements_3 = $element.find(".gt_product-quantity--plus");
    $elements_3.off("click").on("click", qtyPlus);
    var $elements_4 = $element.find(".gt_product-quantity--minus");
    $elements_4.off("click").on("click", qtyMinus);
    var $elements_5 = $element.find(".gt_product-quantity--number");
    $elements_5.off("input").on("input", qtyChange);
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
        funcESWidgetDLhVfOwT0PKKHYz()
      } catch(e) {
        console.error("Error ESWidget Id: DLhVfOwT0PKKHYz" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxButtonQuickview = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxButtonQuickview";
  var id = "DLhVfOwT0PKKHYz_boxButtonQuickview";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxButtonQuickview",
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
        funcESAtomDLhVfOwT0PKKHYz_boxButtonQuickview()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxButtonQuickview" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_tooltipBox = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_tooltipBox";
  var id = "DLhVfOwT0PKKHYz_tooltipBox";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_tooltipBox",
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
        funcESAtomDLhVfOwT0PKKHYz_tooltipBox()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_tooltipBox" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_innerText = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_innerText";
  var id = "DLhVfOwT0PKKHYz_innerText";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_innerText",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "DLhVfOwT0PKKHYz_innerText",
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
        funcESAtomDLhVfOwT0PKKHYz_innerText()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_innerText" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_iconQuickview = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_iconQuickview";
  var id = "DLhVfOwT0PKKHYz_iconQuickview";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_iconQuickview",
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
        funcESAtomDLhVfOwT0PKKHYz_iconQuickview()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_iconQuickview" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_box = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_box";
  var id = "DLhVfOwT0PKKHYz_box";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_box",
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

    function checkRemoteDefaultInput() {
      if (isExistAtomVariant()) {
        var $inputVariantDefault = $element.find(".gt_variant-input--default");
        if ($inputVariantDefault && $inputVariantDefault.length) {
          $($inputVariantDefault[0]).remove()
        }
      }

      if (isExistAtomQuantity()) {
        var $inputQuantityDefault = $element.find(".gt_quantity-input--default");
        if ($inputQuantityDefault && $inputQuantityDefault.length) {
          $($inputQuantityDefault[0]).remove()
        }
      }
    }

    function isExistAtomVariant() {
      var $atomProduct = $element.find(".gt_variant--input")
      if ($atomProduct && $atomProduct.length) {
        return true
      }
      return false
    }

    function isExistAtomQuantity() {
      var $atomQuantity = $element.find(".gt_quantity--input")
      if ($atomQuantity && $atomQuantity.length) {
        return true
      }
      return false
    }
    /* init block script */
    addInteraction();
    checkRemoteDefaultInput();
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
        funcESAtomDLhVfOwT0PKKHYz_box()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_box" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxImage = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxImage";
  var id = "DLhVfOwT0PKKHYz_boxImage";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxImage",
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
        funcESAtomDLhVfOwT0PKKHYz_boxImage()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxImage" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productImageList = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productImageList";
  var id = "DLhVfOwT0PKKHYz_productImageList";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var mode = "production";
    var checkWindowWidth = $(window).width();
    var widthSliderCurrent;
    var sizeIconDotsCurrent;
    var imageListPositionCurrent;
    var $imgSlide = $element.find(".gt_product-carousel-box");
    var $imgBox = $element.find(".gt_product-img-box");
    var $imgBoxInner = $element.find(".gt_product-img--inner");
    var $imgSlideItem = $element.find(".gt_product-carousel--item");
    var $productImgInner = $element.find(".gt_product-image--thumb");
    var $controlNext = $element.find(".gt_product--swiper .gt_control-next");
    var $controlPrev = $element.find(".gt_product--swiper .gt_control-prev");
    var dynamicDotsOnOff = "false" === "true";
    var slidesPerView_lg = "5";
    var slidesPerView_md = "4.3";
    var slidesPerView_sm = "5";
    var slidesPerView_xs = "5";
    var spaceBetween_lg = parseInt("8") || 1;
    var spaceBetween_md = parseInt("32") || 1;
    var spaceBetween_sm = parseInt("32") || 1;
    var spaceBetween_xs = parseInt("18") || 1;
    var widthActive = "false" === "true";
    var widthSlider = "100%";
    var widthSlider_lg = "100%";
    var widthSlider_md = "100%";
    var widthSlider_sm = "100%";
    var widthSlider_xs = "100%";
    var sizeIconDots_sm = "20px";
    var sizeIconDots_xs = "15px";
    var imageRadio = "square";
    var hideDisplayProductImageAdvanced = "false" === "true";
    let initShowFeatureImage = false;
    let initShow3DModel = false;
    let initShowExVideo = false;
    let initShowOtherVideo = false;
    if (hideDisplayProductImageAdvanced) {
      initShowFeatureImage = "featureImage" === "featureImage";
    } else {
      initShowFeatureImage = "featureImageAdvanced" === "featureImageAdvanced";
      initShow3DModel = "featureImageAdvanced" === "3DModel";
      initShowExVideo = "featureImageAdvanced" === "exVideo";
      initShowOtherVideo = "featureImageAdvanced" === "otherVideo";
    }
    var imageListPosition = "bottom";
    var imageListPosition_lg = "bottom";
    var imageListPosition_md = "bottom";
    var imageListPosition_sm = "bottom";
    var imageListPosition_xs = "bottom";
    var imageListActive = "false" === "true";
    var spaceBetween_sm = "32";
    var spaceBetween_xs = "18";
    var scaleZoomImageActive = "true" === "true";
    var mySwiper;
    var mySwiperFeature;
    var spacingSmall = "16px";
    var displayTypeThumb = "thumb" === "thumb";
    var displayTypeCenter = "thumb" === "center";
    var allowDragSlider = "true" === "true";
    /* store get state block script */
    /* methods block script */
    function checkDimensions() {
      var featuredImage = $(elementClassName).find(".gt_product-img--inner img");
      var itemImage = $(elementClassName).find(".gt_product-carousel-box img");
      var widthFeaturedImage = featuredImage.width();
      var heightFeaturedImage = featuredImage.height();
      var widthItemImage = itemImage.width();
      var heightItemImage = itemImage.height();
      featuredImage.attr("width", widthFeaturedImage);
      featuredImage.attr("height", heightFeaturedImage);
      itemImage.attr("width", widthItemImage);
      itemImage.attr("height", heightItemImage);
    }

    function checkEnableEffectZoomImage() {
      if (scaleZoomImageActive) {
        var productImageFeature = $element.find(".gt_product-image--feature");
        if (productImageFeature && productImageFeature.length) {
          $element.find(".gt_product-image--scale").gfProductZoomImage({
            classHoverItem: ".gt_product-img-box",
            scale: "1.5",
            classSection: ".gt_atom-DLhVfOwT0PKKHYz_productImageList",
          });
        }
      }
    }

    function listen() {
      listenElementResizeEvent();
      listenWindowResizeEvent();
    }

    function listenElementResizeEvent() {
      let observer = new ResizeObserver(() => {
        if (mySwiper) {
          mySwiper.update()
        }
      })
      observer.observe($element[0]);
    }

    function listenWindowResizeEvent() {
      var delayResize = 0;
      $(window).off("resize.checkSwitchScreensDLhVfOwT0PKKHYz_productImageList").on("resize.checkSwitchScreensDLhVfOwT0PKKHYz_productImageList", function() {
        clearTimeout(delayResize);
        delayResize = setTimeout(function() {
          const windowWidthCurrent = $(window).width();
          if (windowWidthCurrent !== checkWindowWidth) {
            checkWindowWidth = windowWidthCurrent;
            widthSliderCurrent = 0;
            sizeIconDotsCurrent = 0;
            if (checkWindowWidth <= 576) {
              widthSliderCurrent = widthSlider_xs;
              sizeIconDotsCurrent = sizeIconDots_xs;
            } else if (checkWindowWidth <= 992) {
              widthSliderCurrent = widthSlider_sm;
              sizeIconDotsCurrent = sizeIconDots_sm;
            } else if (checkWindowWidth <= 1200) {
              widthSliderCurrent = widthSlider_md;
            } else {
              widthSliderCurrent = widthSlider;
            }
            if (widthActive) {
              $element.css("cssText", "width: " + widthSliderCurrent + " !important;");
              mySwiper.update();
            }
            var $paginationItem = $element.find(".gt_control-pagination-item");
            var $paginationItemIcon = $element.find(".gt_control-pagination-item .gt_icon");
            $paginationItemIcon.css("cssText", "width: " + sizeIconDotsCurrent + " !important; height: " + sizeIconDotsCurrent + "!important;");
            $paginationItem.css("cssText", "width: calc(8px + " + sizeIconDotsCurrent + ") !important; height: calc(8px + " + sizeIconDotsCurrent + ") !important;");

            checkImageListPosition();
            calculatorImageSlideHeight();
            checkImageListActive();
            initSlider();
          }
        }, 100)
      });
      if ($element.find(".swiper-slide").length == 1) {
        $element.find('.swiper-wrapper').addClass("gt_disabled");
        $element.find('.gt_control-pagination').addClass("gt_disabled");
      }
    }

    function autoRotateModel() {
      var model = $element.find(".gt_product-media--feature .gt_product-model");
      model.attr("auto-rotate", true);
    }

    function initSlider() {
      if (mySwiper) {
        mySwiper.destroy();
        checkDimensions();
      }
      var $swiperContainer = $element.find(".gt_product--swiper-DLhVfOwT0PKKHYz_productImageList");
      if (!$swiperContainer || !$swiperContainer.length) {
        return;
      }
      if ($swiperContainer[0].swiper) {
        $swiperContainer[0].swiper.destroy();
      }
      if (mySwiperFeature) {
        mySwiperFeature.destroy();
      }
      if ($swiperContainer.find(".swiper-slide").length == 1) {
        $swiperContainer.addClass("gt_disabled");
      }
      var $swiperContainerFeature = $element.find(".gt_product-feature--swiper-DLhVfOwT0PKKHYz_productImageList");
      if (!$swiperContainerFeature || !$swiperContainerFeature.length) {
        return;
      }
      if ($swiperContainerFeature[0].swiper) {
        $swiperContainerFeature[0].swiper.destroy();
      }
      if ($swiperContainerFeature.find(".swiper-slide").length == 1) {
        $swiperContainerFeature.find(".swiper-wrapper").addClass("gt_disabled");
        $swiperContainerFeature.find(".gt_control-pagination").addClass("gt_disabled");
      }
      let gtProductImageParams = {
        $element: $element,
        settings: {
          classSwiperItems: ".gt_product--swiper-DLhVfOwT0PKKHYz_productImageList .gt_product-carousel--item",
          classSwiperItemsImage: ".gt_product--swiper-DLhVfOwT0PKKHYz_productImageList .gt_product-carousel--item img",
          classSwiperContainer: ".gt_product--swiper-DLhVfOwT0PKKHYz_productImageList",
          initShowFeatureImage: initShowFeatureImage,
          initShow3DModel: initShow3DModel,
          initShowExVideo: initShowExVideo,
          initShowOtherVideo: initShowOtherVideo,
          swiperSetting: getDataSwiperSettings(),
          //featureimageswiper
          featureSwiperSetting: getDataSwiperSettingsFeature(),
          classFeatureSwiperContainer: ".gt_product-feature--swiper-DLhVfOwT0PKKHYz_productImageList",
          classFeatureSwiperItemsImage: ".gt_product-feature--swiper-DLhVfOwT0PKKHYz_productImageList .gt_product-image--feature",
        }
      }
      window.SOLID.library.gtProductImagesV2(gtProductImageParams);
      mySwiper = $swiperContainer[0].swiper;
      mySwiperFeature = $swiperContainerFeature[0].swiper;
    }

    function getDataSwiperSettings() {
      let direction = 'horizontal';
      if (displayTypeThumb) {
        if (imageListPositionCurrent === "left" || imageListPositionCurrent === "right") {
          direction = "vertical";
        }
      }

      let loop = false;
      let centeredSlides = false;
      let freeMode = true;
      if (displayTypeCenter && checkWindowWidth > 992) {
        loop = true;
        centeredSlides = true;
        freeMode = false;
      }
      return {
        mousewheel: false,
        loop: loop,
        centeredSlides: centeredSlides,
        slidesPerView: 3,
        spaceBetween: 16,
        freeMode: freeMode,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".gt_product--swiper-DLhVfOwT0PKKHYz_productImageList .gt_control-next",
          prevEl: ".gt_product--swiper-DLhVfOwT0PKKHYz_productImageList .gt_control-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: slidesPerView_xs,
            spaceBetween: spaceBetween_xs,
            direction: direction,
            mousewheel: false,
            pagination: {
              dynamicBullets: dynamicDotsOnOff,
              dynamicMainBullets: 1,
            },
          },
          577: {
            slidesPerView: slidesPerView_sm,
            spaceBetween: spaceBetween_sm,
            direction: direction,
            mousewheel: false,
            pagination: {
              dynamicBullets: dynamicDotsOnOff,
              dynamicMainBullets: 1,
            },
          },
          993: {
            slidesPerView: slidesPerView_md,
            spaceBetween: spaceBetween_md,
            direction: direction,
            mousewhel: true,
          },
          1201: {
            slidesPerView: slidesPerView_lg,
            spaceBetween: spaceBetween_lg,
            direction: direction,
            mousewhel: true,
          }
        },
        on: {
          init: function() {
            window.SOLID.store.dispatch("trigger-lazyload", true);
          },
          imagesReady: function() {
            if (displayTypeCenter && checkWindowWidth > 992) {
              setTimeout(() => {
                var $swiperWrapperHide = $element.find(".gt_swiper_wrapper-type-center");
                if ($swiperWrapperHide && $swiperWrapperHide.length) {
                  $swiperWrapperHide.removeClass("gt_swiper_wrapper-type-center");
                }
              }, 100)
            }
          }
        },
      }
    }

    function getDataSwiperSettingsFeature() {
      let allowTouchMove = false;
      var productImageFeature = $element.find(".gt_product-image--feature");
      if (allowDragSlider && !productImageFeature.hasClass("gt_product-media--model") || displayTypeCenter) {
        allowTouchMove = true;
      }
      return {
        allowTouchMove: allowTouchMove,
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
          nextEl: ".gt_product-feature--swiper-DLhVfOwT0PKKHYz_productImageList .gt_product-img-nav--right",
          prevEl: ".gt_product-feature--swiper-DLhVfOwT0PKKHYz_productImageList .gt_product-img-nav--left",
        },
        pagination: {
          el: "#gt_control-pagination-DLhVfOwT0PKKHYz_productImageList",
          type: 'bullets',
          clickable: true,
          renderBullet: function(index, classname) {
            return `<div class="gt_control-pagination-item ` + classname + ` ">
            <span data-optimize-type="icon"  data-attribute="iconDots,"  data-section-id="DLhVfOwT0PKKHYz_productImageList"  class="gt_icon"><svg height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 22C13.05 22 13.5 21.55 13.5 21V3C13.5 2.45 13.05 2 12.5 2C11.95 2 11.5 2.45 11.5 3V21C11.5 21.55 11.95 22 12.5 22ZM8.5 18C9.05 18 9.5 17.55 9.5 17V7C9.5 6.45 9.05 6 8.5 6C7.95 6 7.5 6.45 7.5 7V17C7.5 17.55 7.95 18 8.5 18ZM5.5 13C5.5 13.55 5.05 14 4.5 14C3.95 14 3.5 13.55 3.5 13V11C3.5 10.45 3.95 10 4.5 10C5.05 10 5.5 10.45 5.5 11V13ZM16.5 18C17.05 18 17.5 17.55 17.5 17V7C17.5 6.45 17.05 6 16.5 6C15.95 6 15.5 6.45 15.5 7V17C15.5 17.55 15.95 18 16.5 18ZM19.5 13V11C19.5 10.45 19.95 10 20.5 10C21.05 10 21.5 10.45 21.5 11V13C21.5 13.55 21.05 14 20.5 14C19.95 14 19.5 13.55 19.5 13Z" fill="currentColor"/> </svg></span>
          </div>`;
          }
        },
        breakpoints: {
          0: {
            pagination: {
              dynamicBullets: dynamicDotsOnOff,
              dynamicMainBullets: 1,
            },
          },
          577: {
            pagination: {
              dynamicBullets: dynamicDotsOnOff,
              dynamicMainBullets: 1,
            },
          }
        },
      }
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

    function isImgSliderBottom() {
      const $productImage = $element.find(".gt_product-image-list--bottom");
      if ($productImage && $productImage.length) {
        return true;
      }
      return false;
    }

    function checkImageListActive() {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        if (imageListActive) {
          slidesPerView_xs = "5";
          spaceBetween_xs = "18";
        } else if (!imageListActive) {
          slidesPerView_xs = 1;
          spaceBetween_xs = 0;
        }
      } else if (checkWindowWidth <= 992) {
        if (imageListActive) {
          slidesPerView_sm = "5";
          spaceBetween_sm = "32"
        } else if (!imageListActive) {
          slidesPerView_sm = 1;
          spaceBetween_sm = 0;
        }
      }
    }

    function calculatorImageSlideHeight() {
      var delay = setTimeout(function() {
        checkWindowWidth = $(window).width();
        if (!isImgSliderBottom()) {
          $imgBox = $element.find(".gt_product-img-box");
          var imgBoxHeight = $imgBox && $imgBox.length && $imgBox[0].offsetHeight;
          $imgSlide.css("height", imgBoxHeight);
          mySwiper.update();
        } else {
          $imgSlide.css("height", "");
        }
      }, 500);
    }

    function optimizeSizeIconDots(value) {
      mySwiper.pagination.render();
      var $paginationItem = $element.find(".gt_control-pagination-item");
      var $paginationItemIcon = $element.find(".gt_control-pagination-item .gt_icon");
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        sizeIconDots_xs = value;
      } else if (checkWindowWidth <= 992) {
        sizeIconDots_sm = value;
      }
      $paginationItemIcon.css("cssText", "width: " + value + " !important; height: " + value + "!important;");
      $paginationItem.css("cssText", "width: calc(8px + " + value + ") !important; height: calc(8px + " + value + ") !important;");
      mySwiper.pagination.update();
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
      calculatorImageSlideHeight();
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
        initSlider();
        mySwiper.update();
      }
    }

    function checkImageListPosition({
      isInit
    } = {}) {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        imageListPositionCurrent = imageListPosition_xs;
        spacingSmall = "10px";
      } else if (checkWindowWidth <= 992) {
        imageListPositionCurrent = imageListPosition_sm;
        spacingSmall = "16px";
      } else if (checkWindowWidth <= 1200) {
        imageListPositionCurrent = imageListPosition_md;
        spacingSmall = "16px";
      } else {
        imageListPositionCurrent = imageListPosition;
        spacingSmall = "16px";
      }
      $element.find("#gt_product-image-list-id").attr("class", "gt_product-image-list--" + imageListPositionCurrent);
      //showimage
      var $swiperWrapperHide = $element.find(".gt-carousel--hide-default");
      var $productImageList = $element.find("#gt_product-image-list-id");
      if ($swiperWrapperHide && $swiperWrapperHide.length) {
        $swiperWrapperHide.removeClass("gt-carousel--hide-default");
        $productImageList.css("height", "auto");
      }
      if (imageListPositionCurrent !== "bottom") {
        var $productImageListWrapper = $element.find(".gt_product-carousel-box");
        var $productImageBox = $element.find(".gt_product-image--inner");
        $productImageListWrapper.css("height", $productImageBox.outerHeight());
      }
      //css
      if (imageListPositionCurrent === "left" || imageListPositionCurrent === "right") {
        $controlNext.css({
          "height": "auto",
          "width": "100%"
        });
        $controlPrev.css({
          "height": "auto",
          "width": "100%"
        });
      }
      if (imageListPositionCurrent === "left") {
        $productImgInner.css("flex-direction", "row-reverse");
        $imgSlide.css({
          "padding-left": "0",
          "padding-right": spacingSmall
        });
      } else if (imageListPositionCurrent === "right") {
        $productImgInner.css("flex-direction", "row");
        $imgSlide.css({
          "padding-right": "0",
          "padding-left": spacingSmall
        });
      } else {
        $productImgInner.css("flex-direction", "column");
        $imgSlide.css("padding", "");
        $controlNext.css({
          "height": "100%",
          "width": "auto"
        });
        $controlPrev.css({
          "height": "100%",
          "width": "auto"
        });
      }
      if (!isInit) {
        initSlider();
        mySwiper.update();
      }
    }

    function optimizeImageListPosition(value) {
      checkWindowWidth = $(window).width();
      if (checkWindowWidth <= 576) {
        imageListPosition_xs = imageListPositionCurrent = value;
      } else if (checkWindowWidth <= 992) {
        imageListPosition_sm = imageListPositionCurrent = value;
      } else if (checkWindowWidth <= 1200) {
        imageListPosition_md = imageListPositionCurrent = value;
      } else {
        imageListPosition_lg = imageListPositionCurrent = imageListPosition = value;
      }
      if (imageListPositionCurrent === "left" || imageListPositionCurrent === "right") {
        $controlNext.css({
          "height": "auto",
          "width": "100%"
        });
        $controlPrev.css({
          "height": "auto",
          "width": "100%"
        });
      }
      if (imageListPositionCurrent === "left") {
        $productImgInner.css("flex-direction", "row-reverse");
        $imgSlide.css({
          "padding-left": "0",
          "padding-right": spacingSmall
        });
      } else if (imageListPositionCurrent === "right") {
        $productImgInner.css("flex-direction", "row");
        $imgSlide.css({
          "padding-right": "0",
          "padding-left": spacingSmall
        });
      } else {
        $productImgInner.css("flex-direction", "column");
        $imgSlide.css("padding", "");
        $controlNext.css({
          "height": "100%",
          "width": "auto"
        });
        $controlPrev.css({
          "height": "100%",
          "width": "auto"
        });
      }
      $element.find("#gt_product-image-list-id").attr("class", "gt_product-image-list--" + value);
      initSlider();
      mySwiper.update();
      calculatorImageSlideHeight();
    }

    function optimizeImageRadio(imageRadio) {
      checkWindowWidth = $(window).width();
      imageRadio = value;
      if (imageRadio === "square") {
        $imgBoxInner.css("padding-top", "calc(100%)");
      } else if (imageRadio === "landscape") {
        $imgBoxInner.css("padding-top", "calc(100% * 3 / 4)");
      } else if (imageRadio === "portrait") {
        $imgBoxInner.css("padding-top", "calc(100% * 4 / 3)");
      }
      if (isImgSliderBottom() || checkWindowWidth < 992) {
        if (imageRadio === "square") {
          $imgSlideItem.css("padding-top", "calc(100%)");
        } else if (imageRadio === "landscape") {
          $imgSlideItem.css("padding-top", "calc(100% * 3 / 4)");
        } else if (imageRadio === "portrait") {
          $imgSlideItem.css("padding-top", "calc(100% * 4 / 3)");
        }
      }
      calculatorImageSlideHeight();
    }

    function optimizeImageRadioActive(value) {
      if (!value) {
        $imgBoxInner.css("padding-top", "");
        $imgSlideItem.css("padding-top", "");
      } else {
        optimizeImageRadio(imageRadio);
      }
      calculatorImageSlideHeight();
    }

    function optimizeDynamicDotsOnOff(value) {
      dynamicDotsOnOff = value;
      initSlider();
      var paginationEl = mySwiperFeature.pagination.el;
      if (value) {
        paginationEl.style.cssText = paginationEl.style.cssText + "margin: 0px auto; transform: translateX(0px); justify-content: unset;";
      } else {
        paginationEl.style.cssText = paginationEl.style.cssText + "justify-content: center;";
        paginationEl.classList.remove("swiper-pagination-bullets-dynamic");
      }
      mySwiperFeature.pagination.update();
      mySwiperFeature.update();
    }

    function getMySwiper() {
      return mySwiper;
    }

    function getMySwiperFeature() {
      return mySwiperFeature;
    }
    /* init block script */
    checkDimensions();
    checkImageListPosition({
      isInit: true
    });
    checkImageListActive();
    initSlider();
    calculatorImageSlideHeight();
    checkEnableEffectZoomImage();
    autoRotateModel();
    listen();
    /* store subscribe block script */
    store.subscribe("optimize-DLhVfOwT0PKKHYz_productImageList-sizeIconDots", optimizeSizeIconDots);
    store.subscribe("optimal-DLhVfOwT0PKKHYz_productImageList-slidesPerView", optimizeSlidePerView);
    store.subscribe("optimal-DLhVfOwT0PKKHYz_productImageList-widthSlider", optimizeWidthSlider);
    store.subscribe("optimal-DLhVfOwT0PKKHYz_productImageList-widthActive", optimizeWidthActive);
    store.subscribe("optimal-DLhVfOwT0PKKHYz_productImageList-imageRadio", optimizeImageRadio);
    store.subscribe("optimal-DLhVfOwT0PKKHYz_productImageList-imageRadioActive", optimizeImageRadioActive);
    store.subscribe("optimal-DLhVfOwT0PKKHYz_productImageList-dynamicDotsOnOff", optimizeDynamicDotsOnOff);
    store.subscribe("optimal-DLhVfOwT0PKKHYz_productImageList-imageListPosition", optimizeImageListPosition);
    store.subscribe("trigger-slider-DLhVfOwT0PKKHYz_productImageList", changeSliderActive);

    function destroy() {
      store.unsubscribe("optimize-DLhVfOwT0PKKHYz_productImageList-sizeIconDots", optimizeSizeIconDots);
      store.unsubscribe("optimal-DLhVfOwT0PKKHYz_productImageList-slidesPerView", optimizeSlidePerView);
      store.unsubscribe("optimal-DLhVfOwT0PKKHYz_productImageList-widthSlider", optimizeWidthSlider);
      store.unsubscribe("optimal-DLhVfOwT0PKKHYz_productImageList-widthActive", optimizeWidthActive);
      store.unsubscribe("optimal-DLhVfOwT0PKKHYz_productImageList-imageRadio", optimizeImageRadio);
      store.unsubscribe("optimal-DLhVfOwT0PKKHYz_productImageList-imageRadioActive", optimizeImageRadioActive);
      store.unsubscribe("optimal-DLhVfOwT0PKKHYz_productImageList-dynamicDotsOnOff", optimizeDynamicDotsOnOff);
      store.unsubscribe("optimal-DLhVfOwT0PKKHYz_productImageList-imageListPosition", optimizeImageListPosition);
      store.unsubscribe("trigger-slider-DLhVfOwT0PKKHYz_productImageList", changeSliderActive);
    }
    /* events block script */
    /* destroy block script */
    
    /* public func block script */
    return {
      initSlider,
      getMySwiper,
      getMySwiperFeature,
      checkImageListPosition,
      calculatorImageSlideHeight,
      checkImageListActive
    };
  }
  /* run all script */
  function main() {
    for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
      var $target = $($elements[indexEl]);
      var publicFunc = script($target, indexEl);
      window.SOLID.public = window.SOLID.public || {};
      window.SOLID.public["atom" + "_" + id + "_" + indexEl] = publicFunc;
      if (publicFunc) {
        store.dispatch("public_function_atom_" + id, publicFunc);
      }
    }
  }
  main();
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomDLhVfOwT0PKKHYz_productImageList()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productImageList" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productTagSale = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productTagSale";
  var id = "DLhVfOwT0PKKHYz_productTagSale";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const roundPercent = Number("0");
    const removeZeros = "true" === "true";
    /* store get state block script */
    /* methods block script */
    /* init block script */
    window.SOLID.library.gtProductSaveV2({
      $element: $element,
      settings: {
        classTextPercent: ".gt_product-tag-sale--value--percent",
        classTextNumber: ".gt_product-tag-sale--value--number",
        dataFormat: "-[!Profit!]",
        dataFormatKey: "[!Profit!]",
        customCurrencyFormating: "shortPrefix",
        roundPercent: roundPercent,
        roundNoZeroes: removeZeros
      }
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
        funcESAtomDLhVfOwT0PKKHYz_productTagSale()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productTagSale" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxInfo = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxInfo";
  var id = "DLhVfOwT0PKKHYz_boxInfo";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxInfo",
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
        funcESAtomDLhVfOwT0PKKHYz_boxInfo()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxInfo" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxDetail = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxDetail";
  var id = "DLhVfOwT0PKKHYz_boxDetail";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxDetail",
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
        funcESAtomDLhVfOwT0PKKHYz_boxDetail()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxDetail" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productTitle = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productTitle";
  var id = "DLhVfOwT0PKKHYz_productTitle";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
        var settingsBlock = {
          elementId: "DLhVfOwT0PKKHYz_productTitle",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        };
        var settingsText = {
          elementId: "DLhVfOwT0PKKHYz_productTitle",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        };
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          };
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
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
        funcESAtomDLhVfOwT0PKKHYz_productTitle()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productTitle" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_messengerInStock = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_messengerInStock";
  var id = "DLhVfOwT0PKKHYz_messengerInStock";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_messengerInStock",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        }
        var settingsText = {
          elementId: "DLhVfOwT0PKKHYz_messengerInStock",
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
        funcESAtomDLhVfOwT0PKKHYz_messengerInStock()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_messengerInStock" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxPrice = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxPrice";
  var id = "DLhVfOwT0PKKHYz_boxPrice";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxPrice",
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
        funcESAtomDLhVfOwT0PKKHYz_boxPrice()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxPrice" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productPrice = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productPrice";
  var id = "DLhVfOwT0PKKHYz_productPrice";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const syncQuantityandPrice = "true" == "true";
    const activeTextFixed = "false" === "true";
    const textFixedContent = "[!price!]"
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "DLhVfOwT0PKKHYz_productPrice",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        };
        var settingsText = {
          elementId: "DLhVfOwT0PKKHYz_productPrice",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        };
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          };
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
      $element.find(".gt_content-price-before").html(beforeWord);
      const afterWord = splitContent[3];
      $element.find(".gt_content-price-after").html(afterWord);
    }
    /* init block script */
    addInteraction();
    if (activeTextFixed) {
      initFixedContent();
    };
    $element.gtProductPrice({
      classCurrentPrice: ".gt_product-price--number",
      syncQuantityPrice: syncQuantityandPrice,
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
        funcESAtomDLhVfOwT0PKKHYz_productPrice()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productPrice" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productComparePrice = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productComparePrice";
  var id = "DLhVfOwT0PKKHYz_productComparePrice";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const syncQuantityandPrice = "true" == "true";
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "DLhVfOwT0PKKHYz_productComparePrice",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        };
        var settingsText = {
          elementId: "DLhVfOwT0PKKHYz_productComparePrice",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        };
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          };
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    $element.gtProductPrice({
      classComparePrice: ".gt_product-price--compare",
      classCurrentPrice: ".gt_product-price--number",
      syncQuantityComparePrice: syncQuantityandPrice,
      replacePriceForCurrentPrice: false,
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
        funcESAtomDLhVfOwT0PKKHYz_productComparePrice()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productComparePrice" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productDescription = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productDescription";
  var id = "DLhVfOwT0PKKHYz_productDescription";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    const scrollIntoViewActive = "false" == "true";
    const animationActive = "false" == "true";
    const animationHoverActive = "false" == "true";
    const scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    const turnOffDescription = "false" === "true";
    const heightSettingDes = "75px";
    /* store get state block script */
    /* methods block script */
    function initView() {
      //resetcss
      if (!turnOffDescription) {
        $element.find(".gt_description").css("height", "");
        $element.find(".gt_btn-view-more").css({
          padding: "",
          position: ""
        });
      }
      var heightCurrentBoxDes = 0;
      if ($element.hasClass("gt_product-desciption--tab")) {
        heightCurrentBoxDes = $element.parents(".gt_active-content").find(".gt_box-desc").height();
      } else {
        heightCurrentBoxDes = $element.find(".gt_box-desc").height();
      }
      $element.find(".gt_description").removeClass("open");
      if (heightCurrentBoxDes <= parseInt(heightSettingDes) && !turnOffDescription) {
        $element.find(".gt_btn-view-more").addClass("gt_hidden");
        $element.find(".gt_description").css("height", "auto");
      } else {
        $element.find(".gt_btn-view-more").removeClass("gt_hidden");
        $element.find(".gt_description").css("height", "");
      }
      //setheightwhenturnoffdescription
      if (turnOffDescription) {
        $element.find(".gt_description").css("height", "auto");
        $element.find(".gt_btn-view-more").css({
          padding: "0px",
          position: "relative"
        });
      }
    }

    function toggleDes() {
      $element.find(".gt_description").toggleClass("open");
    }
    
    function checkAtomExist() {	
      if ($element.find(".gt_description").length < 1) {	
        $element.hide();	
      }	
    }
    
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settingsBlock = {
          elementId: "DLhVfOwT0PKKHYz_productDescription",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "block"
        };
        var settingsText = {
          elementId: "DLhVfOwT0PKKHYz_productDescription",
          $doms: $(elementClassName),
          mode: "production",
          animationType: "text"
        };
        if (scrollIntoViewActive) {
          settingsText.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settingsBlock.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settingsBlock.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover"
          };
        }
        window.SOLID.library.animation(settingsText);
        window.SOLID.library.animation(settingsBlock);
      }
    }
    /* init block script */
    addInteraction();
    initView();
    /* store subscribe block script */
    /* events block script */
    var $elements_1 = $element.find("#toggleDes");
    $elements_1.off("click").on("click", toggleDes);
    /* destroy block script */
    
    /* public func block script */
    return {
      initView,
    };
  }
  /* run all script */
  function main() {
    for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
      var $target = $($elements[indexEl]);
      var publicFunc = script($target, indexEl);
      window.SOLID.public = window.SOLID.public || {};
      window.SOLID.public["atom" + "_" + id + "_" + indexEl] = publicFunc;
      if (publicFunc) {
        store.dispatch("public_function_atom_" + id, publicFunc);
      }
    }
  }
  main();
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomDLhVfOwT0PKKHYz_productDescription()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productDescription" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productVariant = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productVariant";
  var id = "DLhVfOwT0PKKHYz_productVariant";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var $variantChecked = $element.find(".gt_product-variant--checked");
    var $variantOptions = $element.find(".gt_product-variant-options");
    var mode = "production";
    var animationActive = 'false';
    var timeoutTooltip = null;
    var valueInTitleActive = "false" === "true";
    /* store get state block script */
    /* methods block script */
    function animation() {
      if (animationActive === "true") {
        var interactionScrollIntoView =
          '""';
        window.SOLID.library.animation({
          elementId: id,
          $doms: $elements,
          interactionScrollIntoView: {
            value: JSON.parse(interactionScrollIntoView),
            previewAttr: "interactionScrollIntoView",
          },
          animationType: "block",
          mode: mode,
        });
      }
    }

    function initSwatches() {
      window.SOLID.library.gtProductSwatchesV2({
        $element: $element,
        settings: {
          classCurrentValue: ".gt_product-variant-option--selected .gt_product-variant-option--selected-text",
          classItem: ".gt_variant--select-item",
          classInputIdHidden: ".gt_variant--input",
          classBtnSelect: ".gt_product-variant--btn-select",
          classVariantValueInTitle: ".gt_title_value",
        }
      });
    }

    function openSelectDropdown() {
      $variantChecked.removeClass("gt_active");
      var $options = $(this).siblings(".gt_product-variant-options");
      if ($options.hasClass("gt_active")) {
        $options.css("top", "");
        $options.removeClass("gt_active");
        $(this).removeClass("gt_active");
        clearEventShowTooltip();
        $(document).off("mousedown.outsideClickVariantSelect");
      } else {
        $variantOptions.removeClass("gt_active");
        $options.addClass("gt_active");
        $(this).addClass("gt_active");
        var optionsOuterHeight = $options.outerHeight();
        var selectInputHeight = $variantChecked.outerHeight();
        var positionOptions = $options.offset().top - $(document).scrollTop() + optionsOuterHeight;
        var windowHeight = $(window).outerHeight();
        if (positionOptions > windowHeight) {
          const currentTopOptions = $options.css("top");
          const newTop = "calc( " + currentTopOptions + " - " + optionsOuterHeight + "px" + " - " + (Number(selectInputHeight) + 10) + "px" + " )";
          $options.css("top", newTop);
        }
        clearTimeout(timeoutTooltip);
        timeoutTooltip = setTimeout(() => {
          eventShowTooltipSelectType();
        }, 300)
        //addeventclickoutsidetoclose
        const $currentTargetOptions = $(this);
        $(document).off("mousedown.outsideClickVariantSelect").on("mousedown.outsideClickVariantSelect", function(event) {
          if ($options && $options.length && $currentTargetOptions && $currentTargetOptions.length) {
            const $optionsPure = $options[0];
            if ($optionsPure && !$optionsPure.contains(event.target) && !$currentTargetOptions[0].contains(event.target)) {
              $options.css("top", "");
              $options.removeClass("gt_active");
              $currentTargetOptions.removeClass("gt_active");
              clearEventShowTooltip();
              $(document).off("mousedown.outsideClickVariantSelect");
            }
          }
        });
      }
    }

    function onClickSelectDropDown() {
      $variantChecked.removeClass("gt_active");
      $variantOptions.removeClass("gt_active");
      var value = $(this).attr("data-value");
      var $variantCheckedCurrent = $(this).closest(
        ".gt_product-variant--select-box"
      );
      var $valueVariantChecked = $variantCheckedCurrent.find(
        ".gt_product-variant-option--selected .gt_product-variant-option--selected-text"
      );
      var $contentOptionSelect = $(this).html();
      $valueVariantChecked.attr("data-value", value);
      $valueVariantChecked.html($contentOptionSelect);
      //closetooltip
      const $tooltip = $element.find(".gt_product-variant-tooltip");
      $tooltip.css("display", "none");
      clearEventShowTooltip();
    }

    function hideAtomWhenNoVariant() {
      $element.css("display", "");
      var isHide = true;
      var $variantItems = $element.find(".gt_product-variant--item")
      for (var i = 0; i < $variantItems.length; i++) {
        var $item = $($variantItems[i]);
        var display = $item.css("display");
        if (display !== "none") {
          isHide = false;
          break;
        }
      }
      if (isHide) {
        $element.css("display", "none");
      }
    }

    function eventShowTooltipSelectType() {
      const $selectItems = $element.find(".gt_variant--select-item");
      for (var i = 0; i < $selectItems.length; i++) {
        const $selectItem = $($selectItems[i]);
        const $selectOptions = $selectItem.find(".gt_product-variant-option");
        const $tooltip = $selectItem.find(".gt_product-variant-tooltip");
        $selectOptions.off("mouseenter").on("mouseenter", function() {
          //checkoverflow
          const $contentValue = $(this).find(".gt_product-variant-option--txt");
          const cachedDisplayContentValue = $contentValue.css("display");
          $contentValue.css({
            display: "inline",
            overflow: "unset",
            whiteSpace: "nowrap"
          });
          const realWidth = $contentValue.outerWidth();
          $contentValue.css({
            display: cachedDisplayContentValue,
            overflow: "",
            whiteSpace: ""
          });
          //
          const selectOptionTop = this.getBoundingClientRect().top;
          const selectItemTop = $selectItem[0].getBoundingClientRect().top;
          const selectOptionHeight = $(this).outerHeight();
          const selectOptionWidth = $(this).outerWidth();
          const contentSelect = $contentValue.html();
          if (realWidth > selectOptionWidth) {
            $tooltip.find(".gt_product-variant-tooltip-name").html(contentSelect);
            $tooltip.css({
              display: "block",
              top: selectOptionTop - selectItemTop - selectOptionHeight,
              zIndex: 10
            });
            $tooltip.find(".gt_product-variant-tooltip-arrow").css({
              left: selectOptionWidth / 2 + "px",
            })
          }
        });
        $selectOptions.off("mouseleave").on("mouseleave", function() {
          $tooltip.css({
            display: "none"
          })
        });
      }
    }

    function clearEventShowTooltip() {
      const $selectitems = $element.find(".gt_variant--select-item");
      for (var i = 0; i < $selectitems.length; i++) {
        const $selectitem = $($selectitems[i]);
        const $selectoptions = $selectitem.find(".gt_product-variant-option");
        $selectoptions.off("mouseenter");
        $selectoptions.off("mouseleave");
      }
    }
    /* init block script */
    hideAtomWhenNoVariant();
    initSwatches();
    animation();
    /*global blockscript*/
    window.SOLID.store.subscribe("run-script-" + id, () => {
      $elements = document.querySelectorAll(elementClassName);
      main();
    });
    /* store subscribe block script */
    /* events block script */
    var $elements_1 = $element.find(".gt_product-variant--checked");
    $elements_1.off("click.openSelect").on("click.openSelect", openSelectDropdown);
    var $elements_2 = $element.find(".gt_product-variant-option");
    $elements_2.off("click.selectItem").on("click.selectItem", onClickSelectDropDown);
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
        funcESAtomDLhVfOwT0PKKHYz_productVariant()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productVariant" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxSticky = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxSticky";
  var id = "DLhVfOwT0PKKHYz_boxSticky";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxSticky",
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
        funcESAtomDLhVfOwT0PKKHYz_boxSticky()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxSticky" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxNotify = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxNotify";
  var id = "DLhVfOwT0PKKHYz_boxNotify";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxNotify",
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
        funcESAtomDLhVfOwT0PKKHYz_boxNotify()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxNotify" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productSoldOutForm = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productSoldOutForm";
  var id = "DLhVfOwT0PKKHYz_productSoldOutForm";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var isNotificationSuccessPreview = "false";
    var typeText = "Type";
    var nameText = "Name";
    var phoneText = "Phone";
    var productNameText = "Product Name";
    var variantNameText = "Variant Name";
    var productUrlText = "Product URL";
    /* store get state block script */
    /* methods block script */
    function checkSubmitFormSuccess() {
      //Scrollđếnatom
      var queryUrl = getQueryByUrl();
      if (queryUrl.status) {
        showMessageSuccess();
        hideForm();
        var currentElement = $(`.${queryUrl.id}`);
        if (currentElement && currentElement.length) {
          $("html, body").animate({
              scrollTop: currentElement.offset().top - 800
            },
            300
          );
        }
      }
    }

    function getQueryByUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      const status = urlParams.get("posted_successfully");
      const currentId = urlParams.get("id");
      return {
        status: status,
        id: currentId,
      };
    }

    function checkPreviewMessageSuccess() {
      if ("production" !== "production" && !checkProductAvailable()) {
        if (
          isNotificationSuccessPreview &&
          isNotificationSuccessPreview === "true"
        ) {
          showMessageSuccess();
          hideForm();
        } else {
          hideMessageSuccess();
          showForm();
        }
      }
    }

    function checkProductAvailable() {
      var $sectionProductDetail = $element.closest("section[keyword='product'], section[data-keyword='product']");
      var $productJson = $sectionProductDetail.find(".ProductJson");
      let productJson;
      try {
        productJson = JSON.parse($productJson.html())
      } catch (e) {}
      if (!productJson) {
        return;
      }
      const currentVariant = window.SOLID.store.getState("variant" + productJson.id);
      return currentVariant.available;
    }

    function showMessageSuccess() {
      var message = $element.find(".gt_message-success");
      message.show();
    }

    function hideMessageSuccess() {
      var message = $element.find(".gt_message-success");
      message.hide();
    }

    function setFormName() {
      formatTypeText = typeText.toLowerCase().replace(/[^\w\s]/gi, '');
      formatNameText = nameText.toLowerCase().replace(/[^\w\s]/gi, '');
      formatPhoneText = phoneText.toLowerCase().replace(/[^\w\s]/gi, '');
      formatProductName = productNameText.toLowerCase().replace(/[^\w\s]/gi, '');
      formatVariantName = variantNameText.toLowerCase().replace(/[^\w\s]/gi, '');
      formatProductUrl = productUrlText.toLowerCase().replace(/[^\w\s]/gi, '');

      $element.find(".gt_form--type").attr("name", "contact[ " + formatTypeText + "]");
      $element.find(".gt_form-customer--name").attr("name", "contact[ " + formatNameText + "]");
      $element.find(".gt_form-customer--phone").attr("name", "contact[ " + formatPhoneText + "]");
      $element.find(".gt_form--email").attr("required", "required");
      $element.find(".gt_form-customer--email").attr("name", "contact[email]");
      $element.find(".gt_form-product--name").attr("name", "contact[ " + formatProductName + "]");
      $element.find(".gt_form-variant--name").attr("name", "contact[ " + formatVariantName + "]");
      $element.find(".gt_form-product--url").attr("name", "contact[ " + formatProductUrl + "]");
      $element.find(".gt_form--return-url").attr("name", "return_to");
    }

    function removeFormName() {
      $element.find(".gt_form--type").removeAttr("name");
      $element.find(".gt_form-customer--name").removeAttr("name");
      $element.find(".gt_form-customer--phone").removeAttr("name");
      $element.find(".gt_form--email").removeAttr("required");
      $element.find(".gt_form-customer--email").removeAttr("name");
      $element.find(".gt_form-product--name").removeAttr("name");
      $element.find(".gt_form-variant--name").removeAttr("name");
      $element.find(".gt_form-product--url").removeAttr("name");
      $element.find(".gt_form--return-url").removeAttr("name");
    }

    function showForm() {
      var form = $element.find(".gt_form");
      setFormName();
      form.show();
    }

    function hideForm() {
      var form = $element.find(".gt_form");
      $element.find(".gt_form--email").removeAttr("required");
      removeFormName();
      form.hide();
    }

    function setCustomerName(value) {
      var elCustomerName = $element.find(".gt_form-customer--name");
      elCustomerName.val(value);
    }

    function setCustomerPhone(value) {
      var elCustomerPhone = $element.find(".gt_form-customer--phone");
      elCustomerPhone.val(value);
    }

    function setProductName(value) {
      var elProductName = $element.find(".gt_form-product--name");
      elProductName.val(value);
    }

    function setVariantName(value) {
      var elVariantName = $element.find(".gt_form-variant--name");
      elVariantName.val(value);
    }

    function setProductUrl(value) {
      var elProductUrl = $element.find(".gt_form-product--url");
      elProductUrl.val(value);
    }

    function setReturnTo(value) {
      var elReturnTo = $element.find(".gt_form--return-url");
      elReturnTo.val(value);
    }
    /* init block script */
    checkPreviewMessageSuccess();
    setTimeout(() => {
      checkSubmitFormSuccess();
      setReturnTo(
        window.location.pathname + `?posted_successfully=true&id=DLhVfOwT0PKKHYz_productSoldOutForm`
      );
    }, 100)
    
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
    /* public func block script */
    return {
      showMessageSuccess,
      hideMessageSuccess,
      showForm,
      hideForm,
      setCustomerName,
      setCustomerPhone,
      setProductName,
      setVariantName,
      setProductUrl,
      setReturnTo
    };
  }
  /* run all script */
  function main() {
    for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
      var $target = $($elements[indexEl]);
      var publicFunc = script($target, indexEl);
      window.SOLID.public = window.SOLID.public || {};
      window.SOLID.public["atom" + "_" + id + "_" + indexEl] = publicFunc;
      if (publicFunc) {
        store.dispatch("public_function_atom_" + id, publicFunc);
      }
    }
  }
  main();
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomDLhVfOwT0PKKHYz_productSoldOutForm()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productSoldOutForm" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxCartBtn = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxCartBtn";
  var id = "DLhVfOwT0PKKHYz_boxCartBtn";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxCartBtn",
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
        funcESAtomDLhVfOwT0PKKHYz_boxCartBtn()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxCartBtn" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productQuantity = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productQuantity";
  var id = "DLhVfOwT0PKKHYz_productQuantity";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var style = "horizontal";
    var mode = "production";
    var interactionScrollIntoViewActive = "false";
    /* store get state block script */
    /* methods block script */
    function animation() {
      if (interactionScrollIntoViewActive === "true") {
        var interactionScrollIntoView =
          '""';
        var $container = $element.find(".gt_product-quantity");
        window.SOLID.library.animation({
          elementId: id,
          $doms: $container,
          interactionScrollIntoView: {
            value: JSON.parse(interactionScrollIntoView),
            previewAttr: "interactionScrollIntoView",
          },
          animationType: "block",
          mode: mode,
        });
      }
    }

    function initLibrary() {
      var params = {
        $element: $element,
        settings: {
          classInput: "input[name='quantity']",
          classPlus: ".gt_quantity_plus",
          classMinus: ".gt_quantity_minus",
          mode: mode,
        }
      };
      if (style === "horizontal") {
        params = {
          $element: $element,
          settings: {
            classInput: "input[name='quantity']",
            classPlus: ".gt_product-quantity--plus",
            classMinus: ".gt_product-quantity--minus",
            mode: mode,
          }
        };
      }
      window.SOLID.library.gtProductQuantityV2(params);
    }

    function validateInput() {
      var inputQuantity = $element.find("input[name='quantity']");
      inputQuantity.keyup(function() {
        var value = parseInt(this.value);
        if (isNaN(value)) {
          value = 1;
        }
        inputQuantity.attr("value", value).val(value);
      })
    }
    /* init block script */
    initLibrary();
    animation();
    validateInput();
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
        funcESAtomDLhVfOwT0PKKHYz_productQuantity()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productQuantity" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_boxBtn = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_boxBtn";
  var id = "DLhVfOwT0PKKHYz_boxBtn";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

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
          elementId: "DLhVfOwT0PKKHYz_boxBtn",
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
        funcESAtomDLhVfOwT0PKKHYz_boxBtn()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_boxBtn" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESAtomDLhVfOwT0PKKHYz_productButtonAddToCart = function() {
          (function() {
  var elementClassName = ".gt_atom-DLhVfOwT0PKKHYz_productButtonAddToCart";
  var id = "DLhVfOwT0PKKHYz_productButtonAddToCart";
  var $elements = document.querySelectorAll(elementClassName);
  var store = window.SOLID.store;

  function script($target, indexEl) {
    var $element = $target;
    /* data block script */
    var scrollIntoViewActive = 'false' == 'true';
    var animationActive = 'false' == 'true';
    var animationHoverActive = 'false' == 'true';
    var scrollIntoView = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var animation = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var animationHover = '{"delay":0,"duration":"1.5","iterationCount":1,"name":"none"}';
    var mode = 'production';
    var previewSoldOut = 'false';
    var actions = '[{"control":{"attribute":"pickProductButton","id":"pickProductButton","isButtonAddToCard":true,"type":"pickproduct"},"event":"click","id":1},{"control":{"attribute":"pickLinkButton","id":"pickLinkButton","newTab":false,"reference":"html","title":"Pick Link","type":"picklink","value":"/cart"},"event":"click","id":2}]';
    
    var activeButtonFixContent = "false" === "true";
    var buttonFixContent = "Buy [!quantity!] items";
    var disableListenSoldOut = "false" === "true";
    /* store get state block script */
    /* methods block script */
    function addInteraction() {
      if (animationActive || scrollIntoViewActive || animationHoverActive) {
        var settings = {
          elementId: "DLhVfOwT0PKKHYz_productButtonAddToCart",
          $doms: $(elementClassName),
          animationType: "block",
          mode: "production",
        };
        if (scrollIntoViewActive) {
          settings.interactionScrollIntoView = {
            value: JSON.parse(scrollIntoView),
            previewAttr: "scrollIntoView",
          };
        }
        if (animationActive) {
          settings.interactionNormal = {
            value: JSON.parse(animation),
            previewAttr: "animation",
          };
        }
        if (animationHoverActive) {
          settings.interactionHover = {
            value: JSON.parse(animationHover),
            previewAttr: "animationHover",
          };
        }
        window.SOLID.library.animation(settings);
      }
    }

    function eventChangeTextInIframe() {
      
    }

    function eventListenSoldOut() {
      if (mode !== "production") {
        if (previewSoldOut === "false") {
          window.SOLID.library.gtBuyProductListenSoldOut({
            $element: $($element)[0],
            options: {
              isButtonAddToCard: true,
              textAddToCard: "Add To Cart",
              textSoldOut: "Sold out",
            },
            mode: "dev"
          });
        }
      } else {
        window.SOLID.library.gtBuyProductListenSoldOut({
          $element: $($element)[0],
          options: {
            isButtonAddToCard: true,
            textAddToCard: "Add To Cart",
            textSoldOut: "Sold out",
          },
        });
      }
    }

    function addActionEvent() {
      // function customEvent(actions,id,key)
      if (mode === "production") {
        $($element).customEvent(
          JSON.parse(actions),
          'DLhVfOwT0PKKHYz_productButtonAddToCart' + '_' + indexEl
        );
      }
      /*Listenifisbuttonaddtocard*/
      store.subscribe(
        "loading-buy-now-DLhVfOwT0PKKHYz_productButtonAddToCart" + "_" + indexEl,
        function(isDisplay) {
          const $loadingEl = $($element).find(
            ".atom-button-loading-circle-loader"
          );
          const $textEl = $($element).find(".gt_button-content-text");
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
              store.dispatch("loading-buy-now-DLhVfOwT0PKKHYz_productButtonAddToCart", "");
              store.dispatch("loading-buy-now-DLhVfOwT0PKKHYz_productButtonAddToCart" + "_" + indexEl, "");
            } else if (isDisplay === false) {
              clearTimeout(timeout);
              /*displaytickbutton*/
              $loadingEl.addClass("load-complete");
              $loadingEl
                .find(".atom-button-loading-check-mark")
                .css("display", "block");
              /*removetickbuttonanddisplaytext*/
              timeout = setTimeout(function() {
                $loadingEl.removeClass("load-complete");
                $loadingEl
                  .find(".atom-button-loading-check-mark")
                  .removeAttr("style");
                $loadingEl.removeAttr("style");
                $textEl.removeAttr("style");
                store.dispatch("loading-buy-now-DLhVfOwT0PKKHYz_productButtonAddToCart", "");
                store.dispatch("loading-buy-now-DLhVfOwT0PKKHYz_productButtonAddToCart" + "_" + indexEl, "");
              }, 3000);
            }
          }
        }
      );
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
    if (activeButtonFixContent) {
      initFixContent();
    }
    addInteraction();
    addActionEvent();
    if (!disableListenSoldOut) {
      eventListenSoldOut();
    }
    eventChangeTextInIframe();
    /* store subscribe block script */
    /* events block script */
    /* destroy block script */
    
    /* public func block script */
    return {
      eventListenSoldOut,
    };
  }
  /* run all script */
  for (var indexEl = 0; indexEl < $elements.length; indexEl++) {
    var $target = $($elements[indexEl]);
    var public = script($target, indexEl);
    window.SOLID.public = window.SOLID.public || {};
    window.SOLID.public["atom" + "_" + id + "_" + indexEl] = public;
  }
  /*===================== DEVELOPER AREA ======================*/
  /* BEGIN */

  /* END */
})();
        }
        funcESAtomDLhVfOwT0PKKHYz_productButtonAddToCart()
      } catch(e) {
        console.error("Error ESAtom Id: DLhVfOwT0PKKHYz_productButtonAddToCart" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
      try {
        const funcESWidgetV8hkmJ8As2Ewur8 = function() {
          
        }
        funcESWidgetV8hkmJ8As2Ewur8()
      } catch(e) {
        console.error("Error ESWidget Id: V8hkmJ8As2Ewur8" )
        console.log("=============================== START ERROR =================================")
        console.log(e)
        console.log("===============================  END ERROR  =================================")
      }
    
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
  
    
  