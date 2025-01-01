import Re from "react";
var B = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function je() {
  if (ie)
    return R;
  ie = 1;
  var c = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function p(C, s, i) {
    var v = null;
    if (i !== void 0 && (v = "" + i), s.key !== void 0 && (v = "" + s.key), "key" in s) {
      i = {};
      for (var T in s)
        T !== "key" && (i[T] = s[T]);
    } else
      i = s;
    return s = i.ref, {
      $$typeof: c,
      type: C,
      key: v,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return R.Fragment = _, R.jsx = p, R.jsxs = p, R;
}
var j = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Ce() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === pe ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case N:
          return "Fragment";
        case Te:
          return "Portal";
        case F:
          return "Profiler";
        case X:
          return "StrictMode";
        case Y:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case P:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case W:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function _(e) {
      return "" + e;
    }
    function p(e) {
      try {
        _(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), _(e);
      }
    }
    function C() {
    }
    function s() {
      if (w === 0) {
        K = console.log, D = console.info, ee = console.warn, re = console.error, oe = console.group, te = console.groupCollapsed, ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: C,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      w++;
    }
    function i() {
      if (w--, w === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: g({}, e, { value: K }),
          info: g({}, e, { value: D }),
          warn: g({}, e, { value: ee }),
          error: g({}, e, { value: re }),
          group: g({}, e, { value: oe }),
          groupCollapsed: g({}, e, { value: te }),
          groupEnd: g({}, e, { value: ne })
        });
      }
      0 > w && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function v(e) {
      if (z === void 0)
        try {
          throw Error();
        } catch (o) {
          var r = o.stack.trim().match(/\n( *(at )?)/);
          z = r && r[1] || "", ae = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + z + e + ae;
    }
    function T(e, r) {
      if (!e || V)
        return "";
      var o = q.get(e);
      if (o !== void 0)
        return o;
      V = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = b.H, b.H = null, s();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var d = function() {
                  throw Error();
                };
                if (Object.defineProperty(d.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(d, []);
                  } catch (E) {
                    var h = E;
                  }
                  Reflect.construct(e, [], d);
                } else {
                  try {
                    d.call();
                  } catch (E) {
                    h = E;
                  }
                  e.call(d.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  h = E;
                }
                (d = e()) && typeof d.catch == "function" && d.catch(function() {
                });
              }
            } catch (E) {
              if (E && h && typeof E.stack == "string")
                return [E.stack, h.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var t = u.DetermineComponentFrameRoot(), f = t[0], x = t[1];
        if (f && x) {
          var l = f.split(`
`), m = x.split(`
`);
          for (t = a = 0; a < l.length && !l[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; t < m.length && !m[t].includes(
            "DetermineComponentFrameRoot"
          ); )
            t++;
          if (a === l.length || t === m.length)
            for (a = l.length - 1, t = m.length - 1; 1 <= a && 0 <= t && l[a] !== m[t]; )
              t--;
          for (; 1 <= a && 0 <= t; a--, t--)
            if (l[a] !== m[t]) {
              if (a !== 1 || t !== 1)
                do
                  if (a--, t--, 0 > t || l[a] !== m[t]) {
                    var y = `
` + l[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, y), y;
                  }
                while (1 <= a && 0 <= t);
              break;
            }
        }
      } finally {
        V = !1, b.H = n, i(), Error.prepareStackTrace = o;
      }
      return l = (l = e ? e.displayName || e.name : "") ? v(l) : "", typeof e == "function" && q.set(e, l), l;
    }
    function k(e) {
      if (e == null)
        return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return T(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string")
        return v(e);
      switch (e) {
        case Y:
          return v("Suspense");
        case M:
          return v("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            return e = T(e.render, !1), e;
          case $:
            return k(e.type);
          case W:
            r = e._payload, e = e._init;
            try {
              return k(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = b.A;
      return e === null ? null : e.getOwner();
    }
    function ve(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function de(e, r) {
      function o() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function be() {
      var e = c(this.type);
      return le[e] || (le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ge(e, r, o, n, u, a) {
      return o = a.ref, e = {
        $$typeof: A,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: be
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function G(e, r, o, n, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === N || e === F || e === X || e === Y || e === M || e === xe || typeof e == "object" && e !== null && (e.$$typeof === W || e.$$typeof === $ || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === P || e.$$typeof === we || e.getModuleId !== void 0)) {
        var t = r.children;
        if (t !== void 0)
          if (n)
            if (U(t)) {
              for (n = 0; n < t.length; n++)
                J(t[n], e);
              Object.freeze && Object.freeze(t);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else
            J(t, e);
      } else
        t = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (t += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : U(e) ? n = "array" : e !== void 0 && e.$$typeof === A ? (n = "<" + (c(e.type) || "Unknown") + " />", t = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          t
        );
      if (Q.call(r, "key")) {
        t = c(e);
        var f = Object.keys(r).filter(function(l) {
          return l !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", ce[t + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          t,
          f,
          t
        ), ce[t + n] = !0);
      }
      if (t = null, o !== void 0 && (p(o), t = "" + o), ve(r) && (p(r.key), t = "" + r.key), "key" in r) {
        o = {};
        for (var x in r)
          x !== "key" && (o[x] = r[x]);
      } else
        o = r;
      return t && de(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ge(e, t, a, u, O(), o);
    }
    function J(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== ye) {
        if (U(e))
          for (var o = 0; o < e.length; o++) {
            var n = e[o];
            S(n) && H(n, r);
          }
        else if (S(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = I && e[I] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            S(e.value) && H(e.value, r);
      }
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function H(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = me(r), !se[r])) {
        se[r] = !0;
        var o = "";
        e && e._owner != null && e._owner !== O() && (o = null, typeof e._owner.tag == "number" ? o = c(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var n = b.getCurrentStack;
        b.getCurrentStack = function() {
          var u = k(e.type);
          return n && (u += n() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          o
        ), b.getCurrentStack = n;
      }
    }
    function me(e) {
      var r = "", o = O();
      return o && (o = c(o.type)) && (r = `

Check the render method of \`` + o + "`."), r || (e = c(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var _e = Re, A = Symbol.for("react.transitional.element"), Te = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), I = Symbol.iterator, pe = Symbol.for("react.client.reference"), b = _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, g = Object.assign, we = Symbol.for("react.client.reference"), U = Array.isArray, w = 0, K, D, ee, re, oe, te, ne;
    C.__reactDisabledLog = !0;
    var z, ae, V = !1, q = new (typeof WeakMap == "function" ? WeakMap : Map)(), ye = Symbol.for("react.client.reference"), ue, le = {}, ce = {}, se = {};
    j.Fragment = N, j.jsx = function(e, r, o, n, u) {
      return G(e, r, o, !1, n, u);
    }, j.jsxs = function(e, r, o, n, u) {
      return G(e, r, o, !0, n, u);
    };
  }()), j;
}
process.env.NODE_ENV === "production" ? B.exports = je() : B.exports = Ce();
var Ee = B.exports;
const ke = ({ label: c, onClick: _ }) => /* @__PURE__ */ Ee.jsx(
  "button",
  {
    style: {
      padding: "10px 20px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    },
    onClick: _,
    children: c
  }
), Oe = ({ label: c }) => /* @__PURE__ */ Ee.jsx("div", { children: c });
export {
  ke as Button,
  Oe as Text
};
