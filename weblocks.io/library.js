function updateValueInInputData(input_value, input_name) {
    if (typeof input_value !== "undefined") {
      if ($(`[data-name='${input_name}']`).is(":radio")) {
        $(`[data-name='${input_name}'][value='${input_value}']`)
          .siblings(".w-form-formradioinput")
          .addClass("w--redirected-checked");
      } else {
        $(`[data-name='${input_name}']`).val(input_value);
        if ($(`[data-name='${input_name}']`).is(":checkbox")) {
          if (input_value == "true") {
            $(`[data-name='${input_name}']`)
              .siblings(".w-checkbox-input")
              .addClass("w--redirected-checked");
          }
        }
      }
    }
  }


  function getValueFromInputData(input_name) {
    var input_value = $(`[data-name='${input_name}']`).val();
    
    if ($(`[data-name='${input_name}']`).is(":checkbox")) {
      
        input_value = $(`[data-name='${input_name}']`).prop( "checked" );
      
      
    }
    if ($.isNumeric(input_value)) {
      input_value = parseFloat(input_value);
    }
    if ($(`[data-name='${input_name}']`).is(":radio")) {
      input_value = clickedRadioButtonValue;
    }
    //if($(`[name=${input_name}]`).parent().hasClass("w-radio")) {
    //  input_value = $(`[name=${input_name}]`, this).val();
    //}
    return input_value;
  }


  function numberWithCommas(x,divider) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, divider);
  }

  function replaceInText(replace,into,x) {
    return x.replaceAll(replace,into);
  }



function updateValueInInput(input_value, input_name) {
    if (typeof input_value !== "undefined") {
      if ($(`[name=${input_name}]`).is(":radio")) {
        $(`[name=${input_name}][value='${input_value}']`)
          .siblings(".w-form-formradioinput")
          .addClass("w--redirected-checked");
      } else {
        $(`[name=${input_name}]`).val(input_value);
        if ($(`[name=${input_name}]`).is(":checkbox")) {
          if (input_value == "true") {
            $(`[name=${input_name}]`)
              .siblings(".w-checkbox-input")
              .addClass("w--redirected-checked");
          }
        }
      }
    }
  }
  
  function getValueFromInput(input_name) {
    var input_value = $(`[name=${input_name}]`).val();
    
    if ($(`[name=${input_name}]`).is(":checkbox")) {
      
        input_value = $(`[name=${input_name}]`).prop( "checked" );
      
      
    }
    if ($.isNumeric(input_value)) {
      input_value = parseFloat(input_value);
    }
    if ($(`[name=${input_name}]`).is(":radio")) {
      input_value = clickedRadioButtonValue;
    }
    //if($(`[name=${input_name}]`).parent().hasClass("w-radio")) {
    //  input_value = $(`[name=${input_name}]`, this).val();
    //}
    return input_value;
  }
  
  const varToString = (varObj) => Object.keys(varObj)[0];
  
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;
  
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
  
      if (sParameterName[0] === sParam) {
        return typeof sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  };
  
  /**
   * Minified by jsDelivr using Terser v3.14.1.
   * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
   *
   * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
   */
  !(function (e) {
    var n;
    if (
      ("function" == typeof define && define.amd && (define(e), (n = !0)),
      "object" == typeof exports && ((module.exports = e()), (n = !0)),
      !n)
    ) {
      var t = window.Cookies,
        o = (window.Cookies = e());
      o.noConflict = function () {
        return (window.Cookies = t), o;
      };
    }
  })(function () {
    function e() {
      for (var e = 0, n = {}; e < arguments.length; e++) {
        var t = arguments[e];
        for (var o in t) n[o] = t[o];
      }
      return n;
    }
    function n(e) {
      return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return (function t(o) {
      function r() {}
      function i(n, t, i) {
        if ("undefined" != typeof document) {
          "number" == typeof (i = e({ path: "/" }, r.defaults, i)).expires &&
            (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
            (i.expires = i.expires ? i.expires.toUTCString() : "");
          try {
            var c = JSON.stringify(t);
            /^[\{\[]/.test(c) && (t = c);
          } catch (e) {}
          (t = o.write
            ? o.write(t, n)
            : encodeURIComponent(String(t)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (n = encodeURIComponent(String(n))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var f = "";
          for (var u in i)
            i[u] &&
              ((f += "; " + u), !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
          return (document.cookie = n + "=" + t + f);
        }
      }
      function c(e, t) {
        if ("undefined" != typeof document) {
          for (
            var r = {},
              i = document.cookie ? document.cookie.split("; ") : [],
              c = 0;
            c < i.length;
            c++
          ) {
            var f = i[c].split("="),
              u = f.slice(1).join("=");
            t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
            try {
              var a = n(f[0]);
              if (((u = (o.read || o)(u, a) || n(u)), t))
                try {
                  u = JSON.parse(u);
                } catch (e) {}
              if (((r[a] = u), e === a)) break;
            } catch (e) {}
          }
          return e ? r[e] : r;
        }
      }
      return (
        (r.set = i),
        (r.get = function (e) {
          return c(e, !1);
        }),
        (r.getJSON = function (e) {
          return c(e, !0);
        }),
        (r.remove = function (n, t) {
          i(n, "", e(t, { expires: -1 }));
        }),
        (r.defaults = {}),
        (r.withConverter = t),
        r
      );
    })(function () {});
  });
  
  function TimeAgo(dateElement, printElement) {
    self = this;
    this.wb_outPut = $(printElement);
    this.wb_arrDate = new Array();
  
    this.wb_date = $(dateElement).each(function () {
      self.wb_arrDate.push(new Date($(this).html()).getTime());
    });
  
    this.wb_intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 }
    ];
  
    function timeSince(index, date) {
      var wb_now = new Date().getTime();
      if (wb_now - self.wb_arrDate[index] < 0) return;
      const seconds = Math.floor((Date.now() - date) / 1000);
      const interval = self.wb_intervals.find((i) => i.seconds < seconds);
      const count = Math.floor(seconds / interval.seconds);
      const plural = count !== 1 ? "s" : "";
      return count + " " + interval.label + plural + " " + "ago";
    }
  
    function executeTimeAgo() {
      $.each(self.wb_arrDate, function (index, value) {
        self.wb_outPut[index] = self.wb_outPut.html(timeSince(index, value));
      });
    }
  
    this.init = function () {
      executeTimeAgo();
    };
  }
  
  function Timer(dateElement, printElement) {
    let timer;
    self = this;
    this.wb_arrPrint = new Array();
    this.wb_arrDate = new Array();
    this.wb_date = $(dateElement).each(function () {
      self.wb_arrDate.push(new Date($(this).html()).getTime());
    });
    this.wb_outPut = $(printElement).each(function () {
      self.wb_arrPrint.push(this);
    });
  
    this.create = function () {
      render();
      timer = setInterval(render, 1000);
    };
  
    function render() {
      $.each(self.wb_arrDate, function (index, value) {
        var wb_now = new Date().getTime();
        var wb_distance = value - wb_now;
        if (isNaN(wb_distance)) return;
  
        var wb_days = Math.floor(wb_distance / (1000 * 60 * 60 * 24));
        var wb_hours = Math.floor(
          (wb_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var wb_minutes = Math.floor(
          (wb_distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        var wb_seconds = Math.floor((wb_distance % (1000 * 60)) / 1000);
  
        if (wb_distance < 0) {
          clearInterval(timer);
  
          //wb_outPut.html("Time expired");
          return;
        }
  
        template = {
          d: wb_days + " days ",
          h: wb_hours + " hours ",
          m: wb_minutes + " minutes ",
          s: wb_seconds + " seconds "
        };
  
        if (wb_days === 0) {
          self.wb_arrPrint[index].innerHTML =
            template.h + template.m + template.s;
        } else if ((wb_days && wb_hours) === 0) {
          self.wb_arrPrint[index].innerHTML = template.m + template.s;
        } else {
          self.wb_arrPrint[index].innerHTML =
            template.d + template.h + template.m + template.s;
        }
      });
    }
  }
  //# sourceMappingURL=/sm/b0ce608ffc029736e9ac80a8dd6a7db2da8e1d45d2dcfc92043deb2214aa30d8.map