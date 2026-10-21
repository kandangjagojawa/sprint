var Pf = Object.create;
var {
    getPrototypeOf: Nf,
    defineProperty: jl,
    getOwnPropertyNames: zf
} = Object;
var Tf = Object.prototype.hasOwnProperty;
var Pn = (e, n, t) => {
    t = e != null ? Pf(Nf(e)) : {};
    let r = n || !e || !e.__esModule ? jl(t, "default", {
        value: e,
        enumerable: !0
    }) : t;
    for (let l of zf(e))
        if (!Tf.call(r, l)) jl(r, l, {
            get: () => e[l],
            enumerable: !0
        });
    return r
};
var Er = (e, n) => () => (n || e((n = {
    exports: {}
}).exports, n), n.exports);
var Lf = (e, n) => {
    for (var t in n) jl(e, t, {
        get: n[t],
        enumerable: !0,
        configurable: !0,
        set: (r) => n[t] = () => r
    })
};
var Rf = (e, n) => () => (e && (n = e(e = 0)), n);
var xt = Er((Xf) => {
    var Ct = Symbol.for("react.element"),
        Mf = Symbol.for("react.portal"),
        Df = Symbol.for("react.fragment"),
        Ff = Symbol.for("react.strict_mode"),
        Of = Symbol.for("react.profiler"),
        If = Symbol.for("react.provider"),
        Uf = Symbol.for("react.context"),
        Vf = Symbol.for("react.forward_ref"),
        $f = Symbol.for("react.suspense"),
        Bf = Symbol.for("react.memo"),
        Wf = Symbol.for("react.lazy"),
        zo = Symbol.iterator;

    function Af(e) {
        if (e === null || typeof e !== "object") return null;
        return e = zo && e[zo] || e["@@iterator"], typeof e === "function" ? e : null
    }
    var Ro = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        Mo = Object.assign,
        Do = {};

    function Yn(e, n, t) {
        this.props = e, this.context = n, this.refs = Do, this.updater = t || Ro
    }
    Yn.prototype.isReactComponent = {};
    Yn.prototype.setState = function(e, n) {
        if (typeof e !== "object" && typeof e !== "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, n, "setState")
    };
    Yn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    };

    function Fo() {}
    Fo.prototype = Yn.prototype;

    function Yl(e, n, t) {
        this.props = e, this.context = n, this.refs = Do, this.updater = t || Ro
    }
    var Xl = Yl.prototype = new Fo;
    Xl.constructor = Yl;
    Mo(Xl, Yn.prototype);
    Xl.isPureReactComponent = !0;
    var To = Array.isArray,
        Oo = Object.prototype.hasOwnProperty,
        Hl = {
            current: null
        },
        Io = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function Uo(e, n, t) {
        var r, l = {},
            u = null,
            i = null;
        if (n != null)
            for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (u = "" + n.key), n) Oo.call(n, r) && !Io.hasOwnProperty(r) && (l[r] = n[r]);
        var o = arguments.length - 2;
        if (o === 1) l.children = t;
        else if (1 < o) {
            for (var s = Array(o), f = 0; f < o; f++) s[f] = arguments[f + 2];
            l.children = s
        }
        if (e && e.defaultProps)
            for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
        return {
            $$typeof: Ct,
            type: e,
            key: u,
            ref: i,
            props: l,
            _owner: Hl.current
        }
    }

    function Qf(e, n) {
        return {
            $$typeof: Ct,
            type: e.type,
            key: n,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        }
    }

    function Gl(e) {
        return typeof e === "object" && e !== null && e.$$typeof === Ct
    }

    function jf(e) {
        var n = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(t) {
            return n[t]
        })
    }
    var Lo = /\/+/g;

    function Kl(e, n) {
        return typeof e === "object" && e !== null && e.key != null ? jf("" + e.key) : n.toString(36)
    }

    function Cr(e, n, t, r, l) {
        var u = typeof e;
        if (u === "undefined" || u === "boolean") e = null;
        var i = !1;
        if (e === null) i = !0;
        else switch (u) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Ct:
                    case Mf:
                        i = !0
                }
        }
        if (i) return i = e, l = l(i), e = r === "" ? "." + Kl(i, 0) : r, To(l) ? (t = "", e != null && (t = e.replace(Lo, "$&/") + "/"), Cr(l, n, t, "", function(f) {
            return f
        })) : l != null && (Gl(l) && (l = Qf(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Lo, "$&/") + "/") + e)), n.push(l)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", To(e))
            for (var o = 0; o < e.length; o++) {
                u = e[o];
                var s = r + Kl(u, o);
                i += Cr(u, n, t, s, l)
            } else if (s = Af(e), typeof s === "function")
                for (e = s.call(e), o = 0; !(u = e.next()).done;) u = u.value, s = r + Kl(u, o++), i += Cr(u, n, t, s, l);
            else if (u === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
        return i
    }

    function _r(e, n, t) {
        if (e == null) return e;
        var r = [],
            l = 0;
        return Cr(e, r, "", "", function(u) {
            return n.call(t, u, l++)
        }), r
    }

    function Kf(e) {
        if (e._status === -1) {
            var n = e._result;
            n = n(), n.then(function(t) {
                if (e._status === 0 || e._status === -1) e._status = 1, e._result = t
            }, function(t) {
                if (e._status === 0 || e._status === -1) e._status = 2, e._result = t
            }), e._status === -1 && (e._status = 0, e._result = n)
        }
        if (e._status === 1) return e._result.default;
        throw e._result
    }
    var fe = {
            current: null
        },
        xr = {
            transition: null
        },
        Yf = {
            ReactCurrentDispatcher: fe,
            ReactCurrentBatchConfig: xr,
            ReactCurrentOwner: Hl
        };

    function Vo() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    Xf.Children = {
        map: _r,
        forEach: function(e, n, t) {
            _r(e, function() {
                n.apply(this, arguments)
            }, t)
        },
        count: function(e) {
            var n = 0;
            return _r(e, function() {
                n++
            }), n
        },
        toArray: function(e) {
            return _r(e, function(n) {
                return n
            }) || []
        },
        only: function(e) {
            if (!Gl(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    };
    Xf.Component = Yn;
    Xf.Fragment = Df;
    Xf.Profiler = Of;
    Xf.PureComponent = Yl;
    Xf.StrictMode = Ff;
    Xf.Suspense = $f;
    Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yf;
    Xf.act = Vo;
    Xf.cloneElement = function(e, n, t) {
        if (e === null || e === void 0) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = Mo({}, e.props),
            l = e.key,
            u = e.ref,
            i = e._owner;
        if (n != null) {
            if (n.ref !== void 0 && (u = n.ref, i = Hl.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
            for (s in n) Oo.call(n, s) && !Io.hasOwnProperty(s) && (r[s] = n[s] === void 0 && o !== void 0 ? o[s] : n[s])
        }
        var s = arguments.length - 2;
        if (s === 1) r.children = t;
        else if (1 < s) {
            o = Array(s);
            for (var f = 0; f < s; f++) o[f] = arguments[f + 2];
            r.children = o
        }
        return {
            $$typeof: Ct,
            type: e.type,
            key: l,
            ref: u,
            props: r,
            _owner: i
        }
    };
    Xf.createContext = function(e) {
        return e = {
            $$typeof: Uf,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: If,
            _context: e
        }, e.Consumer = e
    };
    Xf.createElement = Uo;
    Xf.createFactory = function(e) {
        var n = Uo.bind(null, e);
        return n.type = e, n
    };
    Xf.createRef = function() {
        return {
            current: null
        }
    };
    Xf.forwardRef = function(e) {
        return {
            $$typeof: Vf,
            render: e
        }
    };
    Xf.isValidElement = Gl;
    Xf.lazy = function(e) {
        return {
            $$typeof: Wf,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Kf
        }
    };
    Xf.memo = function(e, n) {
        return {
            $$typeof: Bf,
            type: e,
            compare: n === void 0 ? null : n
        }
    };
    Xf.startTransition = function(e) {
        var n = xr.transition;
        xr.transition = {};
        try {
            e()
        } finally {
            xr.transition = n
        }
    };
    Xf.unstable_act = Vo;
    Xf.useCallback = function(e, n) {
        return fe.current.useCallback(e, n)
    };
    Xf.useContext = function(e) {
        return fe.current.useContext(e)
    };
    Xf.useDebugValue = function() {};
    Xf.useDeferredValue = function(e) {
        return fe.current.useDeferredValue(e)
    };
    Xf.useEffect = function(e, n) {
        return fe.current.useEffect(e, n)
    };
    Xf.useId = function() {
        return fe.current.useId()
    };
    Xf.useImperativeHandle = function(e, n, t) {
        return fe.current.useImperativeHandle(e, n, t)
    };
    Xf.useInsertionEffect = function(e, n) {
        return fe.current.useInsertionEffect(e, n)
    };
    Xf.useLayoutEffect = function(e, n) {
        return fe.current.useLayoutEffect(e, n)
    };
    Xf.useMemo = function(e, n) {
        return fe.current.useMemo(e, n)
    };
    Xf.useReducer = function(e, n, t) {
        return fe.current.useReducer(e, n, t)
    };
    Xf.useRef = function(e) {
        return fe.current.useRef(e)
    };
    Xf.useState = function(e) {
        return fe.current.useState(e)
    };
    Xf.useSyncExternalStore = function(e, n, t) {
        return fe.current.useSyncExternalStore(e, n, t)
    };
    Xf.useTransition = function() {
        return fe.current.useTransition()
    };
    Xf.version = "18.3.1"
});
var Ko = Er((Rd) => {
    function Jl(e, n) {
        var t = e.length;
        e.push(n);
        e: for (; 0 < t;) {
            var r = t - 1 >>> 1,
                l = e[r];
            if (0 < Pr(l, n)) e[r] = n, e[t] = l, t = r;
            else break e
        }
    }

    function Me(e) {
        return e.length === 0 ? null : e[0]
    }

    function Lr(e) {
        if (e.length === 0) return null;
        var n = e[0],
            t = e.pop();
        if (t !== n) {
            e[0] = t;
            e: for (var r = 0, l = e.length, u = l >>> 1; r < u;) {
                var i = 2 * (r + 1) - 1,
                    o = e[i],
                    s = i + 1,
                    f = e[s];
                if (0 > Pr(o, t)) s < l && 0 > Pr(f, o) ? (e[r] = f, e[s] = t, r = s) : (e[r] = o, e[i] = t, r = i);
                else if (s < l && 0 > Pr(f, t)) e[r] = f, e[s] = t, r = s;
                else break e
            }
        }
        return n
    }

    function Pr(e, n) {
        var t = e.sortIndex - n.sortIndex;
        return t !== 0 ? t : e.id - n.id
    }
    if (typeof performance === "object" && typeof performance.now === "function") ql = performance, Rd.unstable_now = function() {
        return ql.now()
    };
    else Nr = Date, bl = Nr.now(), Rd.unstable_now = function() {
        return Nr.now() - bl
    };
    var ql, Nr, bl, We = [],
        ln = [],
        Ld = 1,
        xe = null,
        ie = 3,
        Rr = !1,
        Nn = !1,
        Nt = !1,
        Bo = typeof setTimeout === "function" ? setTimeout : null,
        Wo = typeof clearTimeout === "function" ? clearTimeout : null,
        $o = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function eu(e) {
        for (var n = Me(ln); n !== null;) {
            if (n.callback === null) Lr(ln);
            else if (n.startTime <= e) Lr(ln), n.sortIndex = n.expirationTime, Jl(We, n);
            else break;
            n = Me(ln)
        }
    }

    function tu(e) {
        if (Nt = !1, eu(e), !Nn)
            if (Me(We) !== null) Nn = !0, lu(ru);
            else {
                var n = Me(ln);
                n !== null && uu(tu, n.startTime - e)
            }
    }

    function ru(e, n) {
        Nn = !1, Nt && (Nt = !1, Wo(zt), zt = -1), Rr = !0;
        var t = ie;
        try {
            eu(n);
            for (xe = Me(We); xe !== null && (!(xe.expirationTime > n) || e && !jo());) {
                var r = xe.callback;
                if (typeof r === "function") {
                    xe.callback = null, ie = xe.priorityLevel;
                    var l = r(xe.expirationTime <= n);
                    n = Rd.unstable_now(), typeof l === "function" ? xe.callback = l : xe === Me(We) && Lr(We), eu(n)
                } else Lr(We);
                xe = Me(We)
            }
            if (xe !== null) var u = !0;
            else {
                var i = Me(ln);
                i !== null && uu(tu, i.startTime - n), u = !1
            }
            return u
        } finally {
            xe = null, ie = t, Rr = !1
        }
    }
    var Mr = !1,
        zr = null,
        zt = -1,
        Ao = 5,
        Qo = -1;

    function jo() {
        return Rd.unstable_now() - Qo < Ao ? !1 : !0
    }

    function Zl() {
        if (zr !== null) {
            var e = Rd.unstable_now();
            Qo = e;
            var n = !0;
            try {
                n = zr(!0, e)
            } finally {
                n ? Pt() : (Mr = !1, zr = null)
            }
        } else Mr = !1
    }
    var Pt;
    if (typeof $o === "function") Pt = function() {
        $o(Zl)
    };
    else if (typeof MessageChannel < "u") Tr = new MessageChannel, nu = Tr.port2, Tr.port1.onmessage = Zl, Pt = function() {
        nu.postMessage(null)
    };
    else Pt = function() {
        Bo(Zl, 0)
    };
    var Tr, nu;

    function lu(e) {
        zr = e, Mr || (Mr = !0, Pt())
    }

    function uu(e, n) {
        zt = Bo(function() {
            e(Rd.unstable_now())
        }, n)
    }
    Rd.unstable_IdlePriority = 5;
    Rd.unstable_ImmediatePriority = 1;
    Rd.unstable_LowPriority = 4;
    Rd.unstable_NormalPriority = 3;
    Rd.unstable_Profiling = null;
    Rd.unstable_UserBlockingPriority = 2;
    Rd.unstable_cancelCallback = function(e) {
        e.callback = null
    };
    Rd.unstable_continueExecution = function() {
        Nn || Rr || (Nn = !0, lu(ru))
    };
    Rd.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ao = 0 < e ? Math.floor(1000 / e) : 5
    };
    Rd.unstable_getCurrentPriorityLevel = function() {
        return ie
    };
    Rd.unstable_getFirstCallbackNode = function() {
        return Me(We)
    };
    Rd.unstable_next = function(e) {
        switch (ie) {
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default:
                n = ie
        }
        var t = ie;
        ie = n;
        try {
            return e()
        } finally {
            ie = t
        }
    };
    Rd.unstable_pauseExecution = function() {};
    Rd.unstable_requestPaint = function() {};
    Rd.unstable_runWithPriority = function(e, n) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var t = ie;
        ie = e;
        try {
            return n()
        } finally {
            ie = t
        }
    };
    Rd.unstable_scheduleCallback = function(e, n, t) {
        var r = Rd.unstable_now();
        switch (typeof t === "object" && t !== null ? (t = t.delay, t = typeof t === "number" && 0 < t ? r + t : r) : t = r, e) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 1073741823;
                break;
            case 4:
                l = 1e4;
                break;
            default:
                l = 5000
        }
        return l = t + l, e = {
            id: Ld++,
            callback: n,
            priorityLevel: e,
            startTime: t,
            expirationTime: l,
            sortIndex: -1
        }, t > r ? (e.sortIndex = t, Jl(ln, e), Me(We) === null && e === Me(ln) && (Nt ? (Wo(zt), zt = -1) : Nt = !0, uu(tu, t - r))) : (e.sortIndex = l, Jl(We, e), Nn || Rr || (Nn = !0, lu(ru))), e
    };
    Rd.unstable_shouldYield = jo;
    Rd.unstable_wrapCallback = function(e) {
        var n = ie;
        return function() {
            var t = ie;
            ie = n;
            try {
                return e.apply(this, arguments)
            } finally {
                ie = t
            }
        }
    }
});
var fo = {};
Lf(fo, {
    version: () => uf,
    unstable_renderSubtreeIntoContainer: () => lf,
    unstable_batchedUpdates: () => rf,
    unmountComponentAtNode: () => tf,
    render: () => nf,
    hydrateRoot: () => ef,
    hydrate: () => bc,
    flushSync: () => qc,
    findDOMNode: () => Jc,
    createRoot: () => Zc,
    createPortal: () => Gc,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Hc
});

function k(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

function Wn(e, n) {
    ht(e, n), ht(e + "Capture", n)
}

function ht(e, n) {
    bt[e] = n;
    for (e = 0; e < n.length; e++) Js.add(n[e])
}

function Jd(e) {
    if (Nu.call(Xo, e)) return !0;
    if (Nu.call(Yo, e)) return !1;
    if (Zd.test(e)) return Xo[e] = !0;
    return Yo[e] = !0, !1
}

function qd(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            if (r) return !1;
            if (t !== null) return !t.acceptsBooleans;
            return e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-";
        default:
            return !1
    }
}

function bd(e, n, t, r) {
    if (n === null || typeof n > "u" || qd(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
        case 3:
            return !n;
        case 4:
            return n === !1;
        case 5:
            return isNaN(n);
        case 6:
            return isNaN(n) || 1 > n
    }
    return !1
}

function he(e, n, t, r, l, u, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = i
}

function Ei(e) {
    return e[1].toUpperCase()
}

function _i(e, n, t, r) {
    var l = re.hasOwnProperty(n) ? re[n] : null;
    if (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") bd(n, t, l, r) && (t = null), r || l === null ? Jd(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t)))
}

function Tt(e) {
    if (e === null || typeof e !== "object") return null;
    return e = Ho && e[Ho] || e["@@iterator"], typeof e === "function" ? e : null
}

function It(e) {
    if (iu === void 0) try {
        throw Error()
    } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        iu = n && n[1] || ""
    }
    return `
` + iu + e
}

function su(e, n) {
    if (!e || ou) return "";
    ou = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (n = function() {
                    throw Error()
                }, Object.defineProperty(n.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect === "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, [])
                } catch (f) {
                    var r = f
                }
                Reflect.construct(e, [], n)
            } else {
                try {
                    n.call()
                } catch (f) {
                    r = f
                }
                e.call(n.prototype)
            }
        else {
            try {
                throw Error()
            } catch (f) {
                r = f
            }
            e()
        }
    } catch (f) {
        if (f && r && typeof f.stack === "string") {
            for (var l = f.stack.split(`
`), u = r.stack.split(`
`), i = l.length - 1, o = u.length - 1; 1 <= i && 0 <= o && l[i] !== u[o];) o--;
            for (; 1 <= i && 0 <= o; i--, o--)
                if (l[i] !== u[o]) {
                    if (i !== 1 || o !== 1)
                        do
                            if (i--, o--, 0 > o || l[i] !== u[o]) {
                                var s = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            } while (1 <= i && 0 <= o);
                    break
                }
        }
    } finally {
        ou = !1, Error.prepareStackTrace = t
    }
    return (e = e ? e.displayName || e.name : "") ? It(e) : ""
}

function ep(e) {
    switch (e.tag) {
        case 5:
            return It(e.type);
        case 16:
            return It("Lazy");
        case 13:
            return It("Suspense");
        case 19:
            return It("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = su(e.type, !1), e;
        case 11:
            return e = su(e.type.render, !1), e;
        case 1:
            return e = su(e.type, !0), e;
        default:
            return ""
    }
}

function Ru(e) {
    if (e == null) return null;
    if (typeof e === "function") return e.displayName || e.name || null;
    if (typeof e === "string") return e;
    switch (e) {
        case Jn:
            return "Fragment";
        case Zn:
            return "Portal";
        case zu:
            return "Profiler";
        case Ci:
            return "StrictMode";
        case Tu:
            return "Suspense";
        case Lu:
            return "SuspenseList"
    }
    if (typeof e === "object") switch (e.$$typeof) {
        case bs:
            return (e.displayName || "Context") + ".Consumer";
        case qs:
            return (e._context.displayName || "Context") + ".Provider";
        case xi:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Pi:
            return n = e.displayName || null, n !== null ? n : Ru(e.type) || "Memo";
        case on:
            n = e._payload, e = e._init;
            try {
                return Ru(e(n))
            } catch (t) {}
    }
    return null
}

function np(e) {
    var n = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ru(n);
        case 8:
            return n === Ci ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n === "function") return n.displayName || n.name || null;
            if (typeof n === "string") return n
    }
    return null
}

function Sn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function na(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
}

function tp(e) {
    var n = na(e) ? "checked" : "value",
        t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get === "function" && typeof t.set === "function") {
        var {
            get: l,
            set: u
        } = t;
        return Object.defineProperty(e, n, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, u.call(this, i)
            }
        }), Object.defineProperty(e, n, {
            enumerable: t.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[n]
            }
        }
    }
}

function Fr(e) {
    e._valueTracker || (e._valueTracker = tp(e))
}

function ta(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
        r = "";
    return e && (r = na(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1
}

function ul(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch (n) {
        return e.body
    }
}

function Mu(e, n) {
    var t = n.checked;
    return Y({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t != null ? t : e._wrapperState.initialChecked
    })
}

function Go(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
        r = n.checked != null ? n.checked : n.defaultChecked;
    t = Sn(n.value != null ? n.value : t), e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    }
}

function ra(e, n) {
    n = n.checked, n != null && _i(e, "checked", n, !1)
}

function Du(e, n) {
    ra(e, n);
    var t = Sn(n.value),
        r = n.type;
    if (t != null)
        if (r === "number") {
            if (t === 0 && e.value === "" || e.value != t) e.value = "" + t
        } else e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    n.hasOwnProperty("value") ? Fu(e, n.type, t) : n.hasOwnProperty("defaultValue") && Fu(e, n.type, Sn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked)
}

function Zo(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
        n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t)
}

function Fu(e, n, t) {
    if (n !== "number" || ul(e.ownerDocument) !== e) t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t)
}

function st(e, n, t, r) {
    if (e = e.options, n) {
        n = {};
        for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
        for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0)
    } else {
        t = "" + Sn(t), n = null;
        for (l = 0; l < e.length; l++) {
            if (e[l].value === t) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            n !== null || e[l].disabled || (n = e[l])
        }
        n !== null && (n.selected = !0)
    }
}

function Ou(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(k(91));
    return Y({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Jo(e, n) {
    var t = n.value;
    if (t == null) {
        if (t = n.children, n = n.defaultValue, t != null) {
            if (n != null) throw Error(k(92));
            if (Ut(t)) {
                if (1 < t.length) throw Error(k(93));
                t = t[0]
            }
            n = t
        }
        n == null && (n = ""), t = n
    }
    e._wrapperState = {
        initialValue: Sn(t)
    }
}

function la(e, n) {
    var t = Sn(n.value),
        r = Sn(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r)
}

function qo(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n)
}

function ua(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Iu(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ua(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

function er(e, n) {
    if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return
        }
    }
    e.textContent = n
}

function oa(e, n, t) {
    return n == null || typeof n === "boolean" || n === "" ? "" : t || typeof n !== "number" || n === 0 || jt.hasOwnProperty(e) && jt[e] ? ("" + n).trim() : n + "px"
}

function sa(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0,
                l = oa(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l
        }
}

function Uu(e, n) {
    if (n) {
        if (lp[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null) throw Error(k(60));
            if (typeof n.dangerouslySetInnerHTML !== "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(k(61))
        }
        if (n.style != null && typeof n.style !== "object") throw Error(k(62))
    }
}

function Vu(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is === "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}

function Ni(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

function bo(e) {
    if (e = gr(e)) {
        if (typeof Bu !== "function") throw Error(k(280));
        var n = e.stateNode;
        n && (n = Dl(n), Bu(e.stateNode, e.type, n))
    }
}

function aa(e) {
    at ? ct ? ct.push(e) : ct = [e] : at = e
}

function ca() {
    if (at) {
        var e = at,
            n = ct;
        if (ct = at = null, bo(e), n)
            for (e = 0; e < n.length; e++) bo(n[e])
    }
}

function fa(e, n) {
    return e(n)
}

function da() {}

function pa(e, n, t) {
    if (au) return e(n, t);
    au = !0;
    try {
        return fa(e, n, t)
    } finally {
        if (au = !1, at !== null || ct !== null) da(), ca()
    }
}

function nr(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Dl(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (t && typeof t !== "function") throw Error(k(231, n, typeof t));
    return t
}

function up(e, n, t, r, l, u, i, o, s) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(t, f)
    } catch (h) {
        this.onError(h)
    }
}

function op(e, n, t, r, l, u, i, o, s) {
    Kt = !1, il = null, up.apply(ip, arguments)
}

function sp(e, n, t, r, l, u, i, o, s) {
    if (op.apply(this, arguments), Kt) {
        if (Kt) {
            var f = il;
            Kt = !1, il = null
        } else throw Error(k(198));
        ol || (ol = !0, Au = f)
    }
}

function An(e) {
    var n = e,
        t = e;
    if (e.alternate)
        for (; n.return;) n = n.return;
    else {
        e = n;
        do n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return; while (e)
    }
    return n.tag === 3 ? t : null
}

function ha(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
    }
    return null
}

function es(e) {
    if (An(e) !== e) throw Error(k(188))
}

function ap(e) {
    var n = e.alternate;
    if (!n) {
        if (n = An(e), n === null) throw Error(k(188));
        return n !== e ? null : e
    }
    for (var t = e, r = n;;) {
        var l = t.return;
        if (l === null) break;
        var u = l.alternate;
        if (u === null) {
            if (r = l.return, r !== null) {
                t = r;
                continue
            }
            break
        }
        if (l.child === u.child) {
            for (u = l.child; u;) {
                if (u === t) return es(l), e;
                if (u === r) return es(l), n;
                u = u.sibling
            }
            throw Error(k(188))
        }
        if (t.return !== r.return) t = l, r = u;
        else {
            for (var i = !1, o = l.child; o;) {
                if (o === t) {
                    i = !0, t = l, r = u;
                    break
                }
                if (o === r) {
                    i = !0, r = l, t = u;
                    break
                }
                o = o.sibling
            }
            if (!i) {
                for (o = u.child; o;) {
                    if (o === t) {
                        i = !0, t = u, r = l;
                        break
                    }
                    if (o === r) {
                        i = !0, r = u, t = l;
                        break
                    }
                    o = o.sibling
                }
                if (!i) throw Error(k(189))
            }
        }
        if (t.alternate !== r) throw Error(k(190))
    }
    if (t.tag !== 3) throw Error(k(188));
    return t.stateNode.current === t ? e : n
}

function va(e) {
    return e = ap(e), e !== null ? ma(e) : null
}

function ma(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var n = ma(e);
        if (n !== null) return n;
        e = e.sibling
    }
    return null
}

function hp(e) {
    if (Ke && typeof Ke.onCommitFiberRoot === "function") try {
        Ke.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128)
    } catch (n) {}
}

function yp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vp(e) / mp | 0) | 0
}

function Vt(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function al(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        u = e.pingedLanes,
        i = t & 268435455;
    if (i !== 0) {
        var o = i & ~l;
        o !== 0 ? r = Vt(o) : (u &= i, u !== 0 && (r = Vt(u)))
    } else i = t & ~l, i !== 0 ? r = Vt(i) : u !== 0 && (r = Vt(u));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && (n & l) === 0 && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0)) return n;
    if ((r & 4) !== 0 && (r |= t & 16), n = e.entangledLanes, n !== 0)
        for (e = e.entanglements, n &= r; 0 < n;) t = 31 - Ue(n), l = 1 << t, r |= e[t], n &= ~l;
    return r
}

function gp(e, n) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n + 5000;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function kp(e, n) {
    for (var {
            suspendedLanes: t,
            pingedLanes: r,
            expirationTimes: l,
            pendingLanes: u
        } = e; 0 < u;) {
        var i = 31 - Ue(u),
            o = 1 << i,
            s = l[i];
        if (s === -1) {
            if ((o & t) === 0 || (o & r) !== 0) l[i] = gp(o, n)
        } else s <= n && (e.expiredLanes |= o);
        u &= ~o
    }
}

function Qu(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function wa() {
    var e = Ir;
    return Ir <<= 1, (Ir & 4194240) === 0 && (Ir = 64), e
}

function cu(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n
}

function mr(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Ue(n), e[n] = t
}

function wp(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t;) {
        var l = 31 - Ue(t),
            u = 1 << l;
        n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u
    }
}

function Ti(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t;) {
        var r = 31 - Ue(t),
            l = 1 << r;
        l & n | e[r] & n && (e[r] |= n), t &= ~l
    }
}

function Sa(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
}

function ts(e, n) {
    switch (e) {
        case "focusin":
        case "focusout":
            pn = null;
            break;
        case "dragenter":
        case "dragleave":
            hn = null;
            break;
        case "mouseover":
        case "mouseout":
            vn = null;
            break;
        case "pointerover":
        case "pointerout":
            tr.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            rr.delete(n.pointerId)
    }
}

function Lt(e, n, t, r, l, u) {
    if (e === null || e.nativeEvent !== u) return e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: u,
        targetContainers: [l]
    }, n !== null && (n = gr(n), n !== null && Li(n)), e;
    return e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e
}

function Ep(e, n, t, r, l) {
    switch (n) {
        case "focusin":
            return pn = Lt(pn, e, n, t, r, l), !0;
        case "dragenter":
            return hn = Lt(hn, e, n, t, r, l), !0;
        case "mouseover":
            return vn = Lt(vn, e, n, t, r, l), !0;
        case "pointerover":
            var u = l.pointerId;
            return tr.set(u, Lt(tr.get(u) || null, e, n, t, r, l)), !0;
        case "gotpointercapture":
            return u = l.pointerId, rr.set(u, Lt(rr.get(u) || null, e, n, t, r, l)), !0
    }
    return !1
}

function Pa(e) {
    var n = Rn(e.target);
    if (n !== null) {
        var t = An(n);
        if (t !== null) {
            if (n = t.tag, n === 13) {
                if (n = ha(t), n !== null) {
                    e.blockedOn = n, xa(e.priority, function() {
                        _a(t)
                    });
                    return
                }
            } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Hr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length;) {
        var t = Ku(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type, t);
            $u = r, t.target.dispatchEvent(r), $u = null
        } else return n = gr(t), n !== null && Li(n), e.blockedOn = t, !1;
        n.shift()
    }
    return !0
}

function rs(e, n, t) {
    Hr(e) && t.delete(n)
}

function _p() {
    ju = !1, pn !== null && Hr(pn) && (pn = null), hn !== null && Hr(hn) && (hn = null), vn !== null && Hr(vn) && (vn = null), tr.forEach(rs), rr.forEach(rs)
}

function Rt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ju || (ju = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, _p)))
}

function lr(e) {
    function n(l) {
        return Rt(l, e)
    }
    if (0 < Vr.length) {
        Rt(Vr[0], e);
        for (var t = 1; t < Vr.length; t++) {
            var r = Vr[t];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    pn !== null && Rt(pn, e), hn !== null && Rt(hn, e), vn !== null && Rt(vn, e), tr.forEach(n), rr.forEach(n);
    for (t = 0; t < an.length; t++) r = an[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < an.length && (t = an[0], t.blockedOn === null);) Pa(t), t.blockedOn === null && an.shift()
}

function Cp(e, n, t, r) {
    var l = U,
        u = ft.transition;
    ft.transition = null;
    try {
        U = 1, Ri(e, n, t, r)
    } finally {
        U = l, ft.transition = u
    }
}

function xp(e, n, t, r) {
    var l = U,
        u = ft.transition;
    ft.transition = null;
    try {
        U = 4, Ri(e, n, t, r)
    } finally {
        U = l, ft.transition = u
    }
}

function Ri(e, n, t, r) {
    if (cl) {
        var l = Ku(e, n, t, r);
        if (l === null) mu(e, n, r, fl, t), ts(e, r);
        else if (Ep(l, e, n, t, r)) r.stopPropagation();
        else if (ts(e, r), n & 4 && -1 < Sp.indexOf(e)) {
            for (; l !== null;) {
                var u = gr(l);
                if (u !== null && Ea(u), u = Ku(e, n, t, r), u === null && mu(e, n, r, fl, t), u === l) break;
                l = u
            }
            l !== null && r.stopPropagation()
        } else mu(e, n, r, null, t)
    }
}

function Ku(e, n, t, r) {
    if (fl = null, e = Ni(r), e = Rn(e), e !== null)
        if (n = An(e), n === null) e = null;
        else if (t = n.tag, t === 13) {
        if (e = ha(n), e !== null) return e;
        e = null
    } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null
    } else n !== e && (e = null);
    return fl = e, null
}

function Na(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (dp()) {
                case zi:
                    return 1;
                case ga:
                    return 4;
                case sl:
                case pp:
                    return 16;
                case ka:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

function za() {
    if (Gr) return Gr;
    var e, n = Mi,
        t = n.length,
        r, l = "value" in fn ? fn.value : fn.textContent,
        u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++);
    return Gr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Zr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function $r() {
    return !0
}

function ls() {
    return !1
}

function Ce(e) {
    function n(t, r, l, u, i) {
        this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var o in e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(u) : u[o]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? $r : ls, this.isPropagationStopped = ls, this
    }
    return Y(n.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue !== "unknown" && (t.returnValue = !1), this.isDefaultPrevented = $r)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble !== "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = $r)
        },
        persist: function() {},
        isPersistent: $r
    }), n
}

function Vp(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Up[e]) ? !!n[e] : !1
}

function Fi() {
    return Vp
}

function La(e, n) {
    switch (e) {
        case "keyup":
            return Hp.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Ra(e) {
    return e = e.detail, typeof e === "object" && "data" in e ? e.data : null
}

function Zp(e, n) {
    switch (e) {
        case "compositionend":
            return Ra(n);
        case "keypress":
            if (n.which !== 32) return null;
            return as = !0, ss;
        case "textInput":
            return e = n.data, e === ss && as ? null : e;
        default:
            return null
    }
}

function Jp(e, n) {
    if (qn) return e === "compositionend" || !Oi && La(e, n) ? (e = za(), Gr = Mi = fn = null, qn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                if (n.char && 1 < n.char.length) return n.char;
                if (n.which) return String.fromCharCode(n.which)
            }
            return null;
        case "compositionend":
            return Ta && n.locale !== "ko" ? null : n.data;
        default:
            return null
    }
}

function cs(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!qp[e.type] : n === "textarea" ? !0 : !1
}

function Ma(e, n, t, r) {
    aa(r), n = dl(n, "onChange"), 0 < n.length && (t = new Di("onChange", "change", null, t, r), e.push({
        event: t,
        listeners: n
    }))
}

function bp(e) {
    Qa(e, 0)
}

function Rl(e) {
    var n = nt(e);
    if (ta(n)) return e
}

function e0(e, n) {
    if (e === "change") return n
}

function fs() {
    Xt && (Xt.detachEvent("onpropertychange", Fa), ur = Xt = null)
}

function Fa(e) {
    if (e.propertyName === "value" && Rl(ur)) {
        var n = [];
        Ma(n, ur, e, Ni(e)), pa(bp, n)
    }
}

function n0(e, n, t) {
    e === "focusin" ? (fs(), Xt = n, ur = t, Xt.attachEvent("onpropertychange", Fa)) : e === "focusout" && fs()
}

function t0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Rl(ur)
}

function r0(e, n) {
    if (e === "click") return Rl(n)
}

function l0(e, n) {
    if (e === "input" || e === "change") return Rl(n)
}

function u0(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
}

function ir(e, n) {
    if ($e(e, n)) return !0;
    if (typeof e !== "object" || e === null || typeof n !== "object" || n === null) return !1;
    var t = Object.keys(e),
        r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
        var l = t[r];
        if (!Nu.call(n, l) || !$e(e[l], n[l])) return !1
    }
    return !0
}

function ds(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ps(e, n) {
    var t = ds(e);
    e = 0;
    for (var r; t;) {
        if (t.nodeType === 3) {
            if (r = e + t.textContent.length, e <= n && r >= n) return {
                node: t,
                offset: n - e
            };
            e = r
        }
        e: {
            for (; t;) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e
                }
                t = t.parentNode
            }
            t = void 0
        }
        t = ds(t)
    }
}

function Oa(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Oa(e, n.parentNode) : ("contains" in e) ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
}

function Ia() {
    for (var e = window, n = ul(); n instanceof e.HTMLIFrameElement;) {
        try {
            var t = typeof n.contentWindow.location.href === "string"
        } catch (r) {
            t = !1
        }
        if (t) e = n.contentWindow;
        else break;
        n = ul(e.document)
    }
    return n
}

function Ii(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
}

function i0(e) {
    var n = Ia(),
        t = e.focusedElem,
        r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Oa(t.ownerDocument.documentElement, t)) {
        if (r !== null && Ii(t)) {
            if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
            else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = t.textContent.length,
                    u = Math.min(r.start, l);
                r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = ps(t, u);
                var i = ps(t, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)))
            }
        }
        n = [];
        for (e = t; e = e.parentNode;) e.nodeType === 1 && n.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        typeof t.focus === "function" && t.focus();
        for (t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

function hs(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Xu || bn == null || bn !== ul(r) || (r = bn, ("selectionStart" in r) && Ii(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Ht && ir(Ht, r) || (Ht = r, r = dl(Yu, "onSelect"), 0 < r.length && (n = new Di("onSelect", "select", null, n, t), e.push({
        event: n,
        listeners: r
    }), n.target = bn)))
}

function Br(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t
}

function Ml(e) {
    if (hu[e]) return hu[e];
    if (!et[e]) return e;
    var n = et[e],
        t;
    for (t in n)
        if (n.hasOwnProperty(t) && t in Ua) return hu[e] = n[t];
    return e
}

function _n(e, n) {
    Aa.set(e, n), Wn(n, [e])
}

function ms(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, sp(r, n, void 0, e), e.currentTarget = null
}

function Qa(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t],
            l = r.event;
        r = r.listeners;
        e: {
            var u = void 0;
            if (n)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var o = r[i],
                        s = o.instance,
                        f = o.currentTarget;
                    if (o = o.listener, s !== u && l.isPropagationStopped()) break e;
                    ms(l, o, f), u = s
                } else
                    for (i = 0; i < r.length; i++) {
                        if (o = r[i], s = o.instance, f = o.currentTarget, o = o.listener, s !== u && l.isPropagationStopped()) break e;
                        ms(l, o, f), u = s
                    }
        }
    }
    if (ol) throw e = Au, ol = !1, Au = null, e
}

function B(e, n) {
    var t = n[ei];
    t === void 0 && (t = n[ei] = new Set);
    var r = e + "__bubble";
    t.has(r) || (ja(n, e, 2, !1), t.add(r))
}

function vu(e, n, t) {
    var r = 0;
    n && (r |= 4), ja(t, e, r, n)
}

function or(e) {
    if (!e[Wr]) {
        e[Wr] = !0, Js.forEach(function(t) {
            t !== "selectionchange" && (s0.has(t) || vu(t, !1, e), vu(t, !0, e))
        });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[Wr] || (n[Wr] = !0, vu("selectionchange", !1, n))
    }
}

function ja(e, n, t, r) {
    switch (Na(n)) {
        case 1:
            var l = Cp;
            break;
        case 4:
            l = xp;
            break;
        default:
            l = Ri
    }
    t = l.bind(null, n, t, e), l = void 0, !Wu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, {
        capture: !0,
        passive: l
    }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, {
        passive: l
    }) : e.addEventListener(n, t, !1)
}

function mu(e, n, t, r, l) {
    var u = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var o = r.stateNode.containerInfo;
            if (o === l || o.nodeType === 8 && o.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var s = i.tag;
                    if (s === 3 || s === 4) {
                        if (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l) return
                    }
                    i = i.return
                }
            for (; o !== null;) {
                if (i = Rn(o), i === null) return;
                if (s = i.tag, s === 5 || s === 6) {
                    r = u = i;
                    continue e
                }
                o = o.parentNode
            }
        }
        r = r.return
    }
    pa(function() {
        var f = u,
            h = Ni(t),
            p = [];
        e: {
            var v = Aa.get(e);
            if (v !== void 0) {
                var S = Di,
                    E = e;
                switch (e) {
                    case "keypress":
                        if (Zr(t) === 0) break e;
                    case "keydown":
                    case "keyup":
                        S = Bp;
                        break;
                    case "focusin":
                        E = "focus", S = pu;
                        break;
                    case "focusout":
                        E = "blur", S = pu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        S = pu;
                        break;
                    case "click":
                        if (t.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        S = us;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        S = zp;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        S = Qp;
                        break;
                    case Va:
                    case $a:
                    case Ba:
                        S = Rp;
                        break;
                    case Wa:
                        S = Kp;
                        break;
                    case "scroll":
                        S = Pp;
                        break;
                    case "wheel":
                        S = Xp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        S = Dp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        S = os
                }
                var _ = (n & 4) !== 0,
                    O = !_ && e === "scroll",
                    c = _ ? v !== null ? v + "Capture" : null : v;
                _ = [];
                for (var a = f, d; a !== null;) {
                    d = a;
                    var m = d.stateNode;
                    if (d.tag === 5 && m !== null && (d = m, c !== null && (m = nr(a, c), m != null && _.push(sr(a, m, d)))), O) break;
                    a = a.return
                }
                0 < _.length && (v = new S(v, E, null, t, h), p.push({
                    event: v,
                    listeners: _
                }))
            }
        }
        if ((n & 7) === 0) {
            e: {
                if (v = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", v && t !== $u && (E = t.relatedTarget || t.fromElement) && (Rn(E) || E[en])) break e;
                if (S || v) {
                    if (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window, S) {
                        if (E = t.relatedTarget || t.toElement, S = f, E = E ? Rn(E) : null, E !== null && (O = An(E), E !== O || E.tag !== 5 && E.tag !== 6)) E = null
                    } else S = null, E = f;
                    if (S !== E) {
                        if (_ = us, m = "onMouseLeave", c = "onMouseEnter", a = "mouse", e === "pointerout" || e === "pointerover") _ = os, m = "onPointerLeave", c = "onPointerEnter", a = "pointer";
                        if (O = S == null ? v : nt(S), d = E == null ? v : nt(E), v = new _(m, a + "leave", S, t, h), v.target = O, v.relatedTarget = d, m = null, Rn(h) === f && (_ = new _(c, a + "enter", E, t, h), _.target = d, _.relatedTarget = O, m = _), O = m, S && E) n: {
                            _ = S,
                            c = E,
                            a = 0;
                            for (d = _; d; d = Hn(d)) a++;d = 0;
                            for (m = c; m; m = Hn(m)) d++;
                            for (; 0 < a - d;) _ = Hn(_),
                            a--;
                            for (; 0 < d - a;) c = Hn(c),
                            d--;
                            for (; a--;) {
                                if (_ === c || c !== null && _ === c.alternate) break n;
                                _ = Hn(_), c = Hn(c)
                            }
                            _ = null
                        }
                        else _ = null;
                        S !== null && ys(p, v, S, _, !1), E !== null && O !== null && ys(p, O, E, _, !0)
                    }
                }
            }
            e: {
                if (v = f ? nt(f) : window, S = v.nodeName && v.nodeName.toLowerCase(), S === "select" || S === "input" && v.type === "file") var P = e0;
                else if (cs(v))
                    if (Da) P = l0;
                    else {
                        P = t0;
                        var T = n0
                    }
                else(S = v.nodeName) && S.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (P = r0);
                if (P && (P = P(e, f))) {
                    Ma(p, P, t, h);
                    break e
                }
                T && T(e, v, f),
                e === "focusout" && (T = v._wrapperState) && T.controlled && v.type === "number" && Fu(v, "number", v.value)
            }
            switch (T = f ? nt(f) : window, e) {
                case "focusin":
                    if (cs(T) || T.contentEditable === "true") bn = T, Yu = f, Ht = null;
                    break;
                case "focusout":
                    Ht = Yu = bn = null;
                    break;
                case "mousedown":
                    Xu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Xu = !1, hs(p, t, h);
                    break;
                case "selectionchange":
                    if (o0) break;
                case "keydown":
                case "keyup":
                    hs(p, t, h)
            }
            var M;
            if (Oi) e: {
                switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                }
                L = void 0
            }
            else qn ? La(e, t) && (L = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (L = "onCompositionStart");
            if (L && (Ta && t.locale !== "ko" && (qn || L !== "onCompositionStart" ? L === "onCompositionEnd" && qn && (M = za()) : (fn = h, Mi = ("value" in fn) ? fn.value : fn.textContent, qn = !0)), T = dl(f, L), 0 < T.length && (L = new is(L, e, null, t, h), p.push({
                    event: L,
                    listeners: T
                }), M ? L.data = M : (M = Ra(t), M !== null && (L.data = M)))), M = Gp ? Zp(e, t) : Jp(e, t)) f = dl(f, "onBeforeInput"),
            0 < f.length && (h = new is("onBeforeInput", "beforeinput", null, t, h), p.push({
                event: h,
                listeners: f
            }), h.data = M)
        }
        Qa(p, n)
    })
}

function sr(e, n, t) {
    return {
        instance: e,
        listener: n,
        currentTarget: t
    }
}

function dl(e, n) {
    for (var t = n + "Capture", r = []; e !== null;) {
        var l = e,
            u = l.stateNode;
        l.tag === 5 && u !== null && (l = u, u = nr(e, t), u != null && r.unshift(sr(e, u, l)), u = nr(e, n), u != null && r.push(sr(e, u, l))), e = e.return
    }
    return r
}

function Hn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e ? e : null
}

function ys(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r;) {
        var o = t,
            s = o.alternate,
            f = o.stateNode;
        if (s !== null && s === r) break;
        o.tag === 5 && f !== null && (o = f, l ? (s = nr(t, u), s != null && i.unshift(sr(t, s, o))) : l || (s = nr(t, u), s != null && i.push(sr(t, s, o)))), t = t.return
    }
    i.length !== 0 && e.push({
        event: n,
        listeners: i
    })
}

function gs(e) {
    return (typeof e === "string" ? e : "" + e).replace(a0, `
`).replace(c0, "")
}

function Ar(e, n, t) {
    if (n = gs(n), gs(e) !== n && t) throw Error(k(425))
}

function pl() {}

function qu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children === "string" || typeof n.children === "number" || typeof n.dangerouslySetInnerHTML === "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
}

function p0(e) {
    setTimeout(function() {
        throw e
    })
}

function yu(e, n) {
    var t = n,
        r = 0;
    do {
        var l = t.nextSibling;
        if (e.removeChild(t), l && l.nodeType === 8)
            if (t = l.data, t === "/$") {
                if (r === 0) {
                    e.removeChild(l), lr(n);
                    return
                }
                r--
            } else t !== "$" && t !== "$?" && t !== "$!" || r++;
        t = l
    } while (t);
    lr(n)
}

function mn(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
            if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
            if (n === "/$") return null
        }
    }
    return e
}

function ws(e) {
    e = e.previousSibling;
    for (var n = 0; e;) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0) return e;
                n--
            } else t === "/$" && n++
        }
        e = e.previousSibling
    }
    return null
}

function Rn(e) {
    var n = e[je];
    if (n) return n;
    for (var t = e.parentNode; t;) {
        if (n = t[en] || t[je]) {
            if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
                for (e = ws(e); e !== null;) {
                    if (t = e[je]) return t;
                    e = ws(e)
                }
            return n
        }
        e = t, t = e.parentNode
    }
    return null
}

function gr(e) {
    return e = e[je] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function nt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33))
}

function Dl(e) {
    return e[ar] || null
}

function Cn(e) {
    return {
        current: e
    }
}

function W(e) {
    0 > tt || (e.current = ni[tt], ni[tt] = null, tt--)
}

function $(e, n) {
    tt++, ni[tt] = e.current, e.current = n
}

function vt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return En;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        u;
    for (u in t) l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function ke(e) {
    return e = e.childContextTypes, e !== null && e !== void 0
}

function hl() {
    W(ge), W(ce)
}

function Ss(e, n, t) {
    if (ce.current !== En) throw Error(k(168));
    $(ce, n), $(ge, t)
}

function Ka(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext !== "function") return t;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in n)) throw Error(k(108, np(e) || "Unknown", l));
    return Y({}, t, r)
}

function vl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || En, In = ce.current, $(ce, e), $(ge, ge.current), !0
}

function Es(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    t ? (e = Ka(e, n, In), r.__reactInternalMemoizedMergedChildContext = e, W(ge), W(ce), $(ce, e)) : W(ge), $(ge, t)
}

function Ya(e) {
    Ge === null ? Ge = [e] : Ge.push(e)
}

function m0(e) {
    Fl = !0, Ya(e)
}

function xn() {
    if (!gu && Ge !== null) {
        gu = !0;
        var e = 0,
            n = U;
        try {
            var t = Ge;
            for (U = 1; e < t.length; e++) {
                var r = t[e];
                do r = r(!0); while (r !== null)
            }
            Ge = null, Fl = !1
        } catch (l) {
            throw Ge !== null && (Ge = Ge.slice(e + 1)), ya(zi, xn), l
        } finally {
            U = n, gu = !1
        }
    }
    return null
}

function Tn(e, n) {
    rt[lt++] = yl, rt[lt++] = ml, ml = e, yl = n
}

function Xa(e, n, t) {
    Pe[Ne++] = Ze, Pe[Ne++] = Je, Pe[Ne++] = Un, Un = e;
    var r = Ze;
    e = Je;
    var l = 32 - Ue(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - Ue(n) + l;
    if (30 < u) {
        var i = l - l % 5;
        u = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ze = 1 << 32 - Ue(n) + l | t << l | r, Je = u + e
    } else Ze = 1 << u | t << l | r, Je = e
}

function Ui(e) {
    e.return !== null && (Tn(e, 1), Xa(e, 1, 0))
}

function Vi(e) {
    for (; e === ml;) ml = rt[--lt], rt[lt] = null, yl = rt[--lt], rt[lt] = null;
    for (; e === Un;) Un = Pe[--Ne], Pe[Ne] = null, Je = Pe[--Ne], Pe[Ne] = null, Ze = Pe[--Ne], Pe[Ne] = null
}

function Ha(e, n) {
    var t = ze(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)
}

function _s(e, n) {
    switch (e.tag) {
        case 5:
            var t = e.type;
            return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, _e = e, Ee = mn(n.firstChild), !0) : !1;
        case 6:
            return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, _e = e, Ee = null, !0) : !1;
        case 13:
            return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Un !== null ? {
                id: Ze,
                overflow: Je
            } : null, e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824
            }, t = ze(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, _e = e, Ee = null, !0) : !1;
        default:
            return !1
    }
}

function ti(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ri(e) {
    if (A) {
        var n = Ee;
        if (n) {
            var t = n;
            if (!_s(e, n)) {
                if (ti(e)) throw Error(k(418));
                n = mn(t.nextSibling);
                var r = _e;
                n && _s(e, n) ? Ha(r, t) : (e.flags = e.flags & -4097 | 2, A = !1, _e = e)
            }
        } else {
            if (ti(e)) throw Error(k(418));
            e.flags = e.flags & -4097 | 2, A = !1, _e = e
        }
    }
}

function Cs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    _e = e
}

function Qr(e) {
    if (e !== _e) return !1;
    if (!A) return Cs(e), A = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !qu(e.type, e.memoizedProps)), n && (n = Ee)) {
        if (ti(e)) throw Ga(), Error(k(418));
        for (; n;) Ha(e, n), n = mn(n.nextSibling)
    }
    if (Cs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
        e: {
            e = e.nextSibling;
            for (n = 0; e;) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) {
                            Ee = mn(e.nextSibling);
                            break e
                        }
                        n--
                    } else t !== "$" && t !== "$!" && t !== "$?" || n++
                }
                e = e.nextSibling
            }
            Ee = null
        }
    } else Ee = _e ? mn(e.stateNode.nextSibling) : null;
    return !0
}

function Ga() {
    for (var e = Ee; e;) e = mn(e.nextSibling)
}

function mt() {
    Ee = _e = null, A = !1
}

function $i(e) {
    Ie === null ? Ie = [e] : Ie.push(e)
}

function Dt(e, n, t) {
    if (e = t.ref, e !== null && typeof e !== "function" && typeof e !== "object") {
        if (t._owner) {
            if (t = t._owner, t) {
                if (t.tag !== 1) throw Error(k(309));
                var r = t.stateNode
            }
            if (!r) throw Error(k(147, e));
            var l = r,
                u = "" + e;
            if (n !== null && n.ref !== null && typeof n.ref === "function" && n.ref._stringRef === u) return n.ref;
            return n = function(i) {
                var o = l.refs;
                i === null ? delete o[u] : o[u] = i
            }, n._stringRef = u, n
        }
        if (typeof e !== "string") throw Error(k(284));
        if (!t._owner) throw Error(k(290, e))
    }
    return e
}

function jr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
}

function xs(e) {
    var n = e._init;
    return n(e._payload)
}

function Za(e) {
    function n(c, a) {
        if (e) {
            var d = c.deletions;
            d === null ? (c.deletions = [a], c.flags |= 16) : d.push(a)
        }
    }

    function t(c, a) {
        if (!e) return null;
        for (; a !== null;) n(c, a), a = a.sibling;
        return null
    }

    function r(c, a) {
        for (c = new Map; a !== null;) a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
        return c
    }

    function l(c, a) {
        return c = wn(c, a), c.index = 0, c.sibling = null, c
    }

    function u(c, a, d) {
        if (c.index = d, !e) return c.flags |= 1048576, a;
        if (d = c.alternate, d !== null) return d = d.index, d < a ? (c.flags |= 2, a) : d;
        return c.flags |= 2, a
    }

    function i(c) {
        return e && c.alternate === null && (c.flags |= 2), c
    }

    function o(c, a, d, m) {
        if (a === null || a.tag !== 6) return a = xu(d, c.mode, m), a.return = c, a;
        return a = l(a, d), a.return = c, a
    }

    function s(c, a, d, m) {
        var P = d.type;
        if (P === Jn) return h(c, a, d.props.children, m, d.key);
        if (a !== null && (a.elementType === P || typeof P === "object" && P !== null && P.$$typeof === on && xs(P) === a.type)) return m = l(a, d.props), m.ref = Dt(c, a, d), m.return = c, m;
        return m = ll(d.type, d.key, d.props, null, c.mode, m), m.ref = Dt(c, a, d), m.return = c, m
    }

    function f(c, a, d, m) {
        if (a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation) return a = Pu(d, c.mode, m), a.return = c, a;
        return a = l(a, d.children || []), a.return = c, a
    }

    function h(c, a, d, m, P) {
        if (a === null || a.tag !== 7) return a = On(d, c.mode, m, P), a.return = c, a;
        return a = l(a, d), a.return = c, a
    }

    function p(c, a, d) {
        if (typeof a === "string" && a !== "" || typeof a === "number") return a = xu("" + a, c.mode, d), a.return = c, a;
        if (typeof a === "object" && a !== null) {
            switch (a.$$typeof) {
                case Dr:
                    return d = ll(a.type, a.key, a.props, null, c.mode, d), d.ref = Dt(c, null, a), d.return = c, d;
                case Zn:
                    return a = Pu(a, c.mode, d), a.return = c, a;
                case on:
                    var m = a._init;
                    return p(c, m(a._payload), d)
            }
            if (Ut(a) || Tt(a)) return a = On(a, c.mode, d, null), a.return = c, a;
            jr(c, a)
        }
        return null
    }

    function v(c, a, d, m) {
        var P = a !== null ? a.key : null;
        if (typeof d === "string" && d !== "" || typeof d === "number") return P !== null ? null : o(c, a, "" + d, m);
        if (typeof d === "object" && d !== null) {
            switch (d.$$typeof) {
                case Dr:
                    return d.key === P ? s(c, a, d, m) : null;
                case Zn:
                    return d.key === P ? f(c, a, d, m) : null;
                case on:
                    return P = d._init, v(c, a, P(d._payload), m)
            }
            if (Ut(d) || Tt(d)) return P !== null ? null : h(c, a, d, m, null);
            jr(c, d)
        }
        return null
    }

    function S(c, a, d, m, P) {
        if (typeof m === "string" && m !== "" || typeof m === "number") return c = c.get(d) || null, o(a, c, "" + m, P);
        if (typeof m === "object" && m !== null) {
            switch (m.$$typeof) {
                case Dr:
                    return c = c.get(m.key === null ? d : m.key) || null, s(a, c, m, P);
                case Zn:
                    return c = c.get(m.key === null ? d : m.key) || null, f(a, c, m, P);
                case on:
                    var T = m._init;
                    return S(c, a, d, T(m._payload), P)
            }
            if (Ut(m) || Tt(m)) return c = c.get(d) || null, h(a, c, m, P, null);
            jr(a, m)
        }
        return null
    }

    function E(c, a, d, m) {
        for (var P = null, T = null, M = a, L = a = 0, G = null; M !== null && L < d.length; L++) {
            M.index > L ? (G = M, M = null) : G = M.sibling;
            var F = v(c, M, d[L], m);
            if (F === null) {
                M === null && (M = G);
                break
            }
            e && M && F.alternate === null && n(c, M), a = u(F, a, L), T === null ? P = F : T.sibling = F, T = F, M = G
        }
        if (L === d.length) return t(c, M), A && Tn(c, L), P;
        if (M === null) {
            for (; L < d.length; L++) M = p(c, d[L], m), M !== null && (a = u(M, a, L), T === null ? P = M : T.sibling = M, T = M);
            return A && Tn(c, L), P
        }
        for (M = r(c, M); L < d.length; L++) G = S(M, c, L, d[L], m), G !== null && (e && G.alternate !== null && M.delete(G.key === null ? L : G.key), a = u(G, a, L), T === null ? P = G : T.sibling = G, T = G);
        return e && M.forEach(function(ve) {
            return n(c, ve)
        }), A && Tn(c, L), P
    }

    function _(c, a, d, m) {
        var P = Tt(d);
        if (typeof P !== "function") throw Error(k(150));
        if (d = P.call(d), d == null) throw Error(k(151));
        for (var T = P = null, M = a, L = a = 0, G = null, F = d.next(); M !== null && !F.done; L++, F = d.next()) {
            M.index > L ? (G = M, M = null) : G = M.sibling;
            var ve = v(c, M, F.value, m);
            if (ve === null) {
                M === null && (M = G);
                break
            }
            e && M && ve.alternate === null && n(c, M), a = u(ve, a, L), T === null ? P = ve : T.sibling = ve, T = ve, M = G
        }
        if (F.done) return t(c, M), A && Tn(c, L), P;
        if (M === null) {
            for (; !F.done; L++, F = d.next()) F = p(c, F.value, m), F !== null && (a = u(F, a, L), T === null ? P = F : T.sibling = F, T = F);
            return A && Tn(c, L), P
        }
        for (M = r(c, M); !F.done; L++, F = d.next()) F = S(M, c, L, F.value, m), F !== null && (e && F.alternate !== null && M.delete(F.key === null ? L : F.key), a = u(F, a, L), T === null ? P = F : T.sibling = F, T = F);
        return e && M.forEach(function(Be) {
            return n(c, Be)
        }), A && Tn(c, L), P
    }

    function O(c, a, d, m) {
        if (typeof d === "object" && d !== null && d.type === Jn && d.key === null && (d = d.props.children), typeof d === "object" && d !== null) {
            switch (d.$$typeof) {
                case Dr:
                    e: {
                        for (var P = d.key, T = a; T !== null;) {
                            if (T.key === P) {
                                if (P = d.type, P === Jn) {
                                    if (T.tag === 7) {
                                        t(c, T.sibling), a = l(T, d.props.children), a.return = c, c = a;
                                        break e
                                    }
                                } else if (T.elementType === P || typeof P === "object" && P !== null && P.$$typeof === on && xs(P) === T.type) {
                                    t(c, T.sibling), a = l(T, d.props), a.ref = Dt(c, T, d), a.return = c, c = a;
                                    break e
                                }
                                t(c, T);
                                break
                            } else n(c, T);
                            T = T.sibling
                        }
                        d.type === Jn ? (a = On(d.props.children, c.mode, m, d.key), a.return = c, c = a) : (m = ll(d.type, d.key, d.props, null, c.mode, m), m.ref = Dt(c, a, d), m.return = c, c = m)
                    }
                    return i(c);
                case Zn:
                    e: {
                        for (T = d.key; a !== null;) {
                            if (a.key === T)
                                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                                    t(c, a.sibling), a = l(a, d.children || []), a.return = c, c = a;
                                    break e
                                } else {
                                    t(c, a);
                                    break
                                }
                            else n(c, a);
                            a = a.sibling
                        }
                        a = Pu(d, c.mode, m),
                        a.return = c,
                        c = a
                    }
                    return i(c);
                case on:
                    return T = d._init, O(c, a, T(d._payload), m)
            }
            if (Ut(d)) return E(c, a, d, m);
            if (Tt(d)) return _(c, a, d, m);
            jr(c, d)
        }
        return typeof d === "string" && d !== "" || typeof d === "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l(a, d), a.return = c, c = a) : (t(c, a), a = xu(d, c.mode, m), a.return = c, c = a), i(c)) : t(c, a)
    }
    return O
}

function Wi() {
    Bi = ut = kl = null
}

function Ai(e) {
    var n = gl.current;
    W(gl), e._currentValue = n
}

function li(e, n, t) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
        e = e.return
    }
}

function dt(e, n) {
    kl = e, Bi = ut = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (ye = !0), e.firstContext = null)
}

function Le(e) {
    var n = e._currentValue;
    if (Bi !== e)
        if (e = {
                context: e,
                memoizedValue: n,
                next: null
            }, ut === null) {
            if (kl === null) throw Error(k(308));
            ut = e, kl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else ut = ut.next = e;
    return n
}

function Qi(e) {
    Mn === null ? Mn = [e] : Mn.push(e)
}

function qa(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Qi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, nn(e, r)
}

function nn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    t !== null && (t.lanes |= n), t = e;
    for (e = e.return; e !== null;) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null
}

function ji(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function ba(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function qe(e, n) {
    return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function yn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (I & 2) !== 0) {
        var l = r.pending;
        return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, nn(e, t)
    }
    return l = r.interleaved, l === null ? (n.next = n, Qi(r)) : (n.next = l.next, l.next = n), r.interleaved = n, nn(e, t)
}

function qr(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
        var r = n.lanes;
        r &= e.pendingLanes, t |= r, n.lanes = t, Ti(e, t)
    }
}

function Ps(e, n) {
    var {
        updateQueue: t,
        alternate: r
    } = e;
    if (r !== null && (r = r.updateQueue, t === r)) {
        var l = null,
            u = null;
        if (t = t.firstBaseUpdate, t !== null) {
            do {
                var i = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null
                };
                u === null ? l = u = i : u = u.next = i, t = t.next
            } while (t !== null);
            u === null ? l = u = n : u = u.next = n
        } else l = u = n;
        t = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: u,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = t;
        return
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n
}

function wl(e, n, t, r) {
    var l = e.updateQueue;
    sn = !1;
    var {
        firstBaseUpdate: u,
        lastBaseUpdate: i
    } = l, o = l.shared.pending;
    if (o !== null) {
        l.shared.pending = null;
        var s = o,
            f = s.next;
        s.next = null, i === null ? u = f : i.next = f, i = s;
        var h = e.alternate;
        h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== i && (o === null ? h.firstBaseUpdate = f : o.next = f, h.lastBaseUpdate = s))
    }
    if (u !== null) {
        var p = l.baseState;
        i = 0, h = f = s = null, o = u;
        do {
            var {
                lane: v,
                eventTime: S
            } = o;
            if ((r & v) === v) {
                h !== null && (h = h.next = {
                    eventTime: S,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                e: {
                    var E = e,
                        _ = o;
                    switch (v = n, S = t, _.tag) {
                        case 1:
                            if (E = _.payload, typeof E === "function") {
                                p = E.call(S, p, v);
                                break e
                            }
                            p = E;
                            break e;
                        case 3:
                            E.flags = E.flags & -65537 | 128;
                        case 0:
                            if (E = _.payload, v = typeof E === "function" ? E.call(S, p, v) : E, v === null || v === void 0) break e;
                            p = Y({}, p, v);
                            break e;
                        case 2:
                            sn = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [o] : v.push(o))
            } else S = {
                eventTime: S,
                lane: v,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null
            }, h === null ? (f = h = S, s = p) : h = h.next = S, i |= v;
            if (o = o.next, o === null)
                if (o = l.shared.pending, o === null) break;
                else v = o, o = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null
        } while (1);
        if (h === null && (s = p), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
            l = n;
            do i |= l.lane, l = l.next; while (l !== n)
        } else u === null && (l.shared.lanes = 0);
        $n |= i, e.lanes = i, e.memoizedState = p
    }
}

function Ns(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
        for (n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = t, typeof l !== "function") throw Error(k(191, l));
                l.call(r)
            }
        }
}

function Dn(e) {
    if (e === kr) throw Error(k(174));
    return e
}

function Ki(e, n) {
    switch ($(fr, n), $(cr, e), $(Ye, kr), e = n.nodeType, e) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : Iu(null, "");
            break;
        default:
            e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Iu(n, e)
    }
    W(Ye), $(Ye, n)
}

function gt() {
    W(Ye), W(cr), W(fr)
}

function ec(e) {
    Dn(fr.current);
    var n = Dn(Ye.current),
        t = Iu(n, e.type);
    n !== t && ($(cr, e), $(Ye, t))
}

function Yi(e) {
    cr.current === e && (W(Ye), W(cr))
}

function Sl(e) {
    for (var n = e; n !== null;) {
        if (n.tag === 13) {
            var t = n.memoizedState;
            if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if ((n.flags & 128) !== 0) return n
        } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return null;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
    return null
}

function Xi() {
    for (var e = 0; e < ku.length; e++) ku[e]._workInProgressVersionPrimary = null;
    ku.length = 0
}

function oe() {
    throw Error(k(321))
}

function Hi(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
        if (!$e(e[t], n[t])) return !1;
    return !0
}

function Gi(e, n, t, r, l, u) {
    if (Vn = u, K = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, br.current = e === null || e.memoizedState === null ? E0 : _0, e = t(r, l), Gt) {
        u = 0;
        do {
            if (Gt = !1, dr = 0, 25 <= u) throw Error(k(301));
            u += 1, b = J = null, n.updateQueue = null, br.current = C0, e = t(r, l)
        } while (Gt)
    }
    if (br.current = _l, n = J !== null && J.next !== null, Vn = 0, b = J = K = null, El = !1, n) throw Error(k(300));
    return e
}

function Zi() {
    var e = dr !== 0;
    return dr = 0, e
}

function Qe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return b === null ? K.memoizedState = b = e : b = b.next = e, b
}

function Re() {
    if (J === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = J.next;
    var n = b === null ? K.memoizedState : b.next;
    if (n !== null) b = n, J = e;
    else {
        if (e === null) throw Error(k(310));
        J = e, e = {
            memoizedState: J.memoizedState,
            baseState: J.baseState,
            baseQueue: J.baseQueue,
            queue: J.queue,
            next: null
        }, b === null ? K.memoizedState = b = e : b = b.next = e
    }
    return b
}

function pr(e, n) {
    return typeof n === "function" ? n(e) : n
}

function Su(e) {
    var n = Re(),
        t = n.queue;
    if (t === null) throw Error(k(311));
    t.lastRenderedReducer = e;
    var r = J,
        l = r.baseQueue,
        u = t.pending;
    if (u !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = u.next, u.next = i
        }
        r.baseQueue = l = u, t.pending = null
    }
    if (l !== null) {
        u = l.next, r = r.baseState;
        var o = i = null,
            s = null,
            f = u;
        do {
            var h = f.lane;
            if ((Vn & h) === h) s !== null && (s = s.next = {
                lane: 0,
                action: f.action,
                hasEagerState: f.hasEagerState,
                eagerState: f.eagerState,
                next: null
            }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
            else {
                var p = {
                    lane: h,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                };
                s === null ? (o = s = p, i = r) : s = s.next = p, K.lanes |= h, $n |= h
            }
            f = f.next
        } while (f !== null && f !== u);
        s === null ? i = r : s.next = o, $e(r, n.memoizedState) || (ye = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r
    }
    if (e = t.interleaved, e !== null) {
        l = e;
        do u = l.lane, K.lanes |= u, $n |= u, l = l.next; while (l !== e)
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch]
}

function Eu(e) {
    var n = Re(),
        t = n.queue;
    if (t === null) throw Error(k(311));
    t.lastRenderedReducer = e;
    var {
        dispatch: r,
        pending: l
    } = t, u = n.memoizedState;
    if (l !== null) {
        t.pending = null;
        var i = l = l.next;
        do u = e(u, i.action), i = i.next; while (i !== l);
        $e(u, n.memoizedState) || (ye = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u
    }
    return [u, r]
}

function nc() {}

function tc(e, n) {
    var t = K,
        r = Re(),
        l = n(),
        u = !$e(r.memoizedState, l);
    if (u && (r.memoizedState = l, ye = !0), r = r.queue, Ji(uc.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || b !== null && b.memoizedState.tag & 1) {
        if (t.flags |= 2048, hr(9, lc.bind(null, t, r, l, n), void 0, null), ee === null) throw Error(k(349));
        (Vn & 30) !== 0 || rc(t, n, l)
    }
    return l
}

function rc(e, n, t) {
    e.flags |= 16384, e = {
        getSnapshot: n,
        value: t
    }, n = K.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e))
}

function lc(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ic(n) && oc(e)
}

function uc(e, n, t) {
    return t(function() {
        ic(n) && oc(e)
    })
}

function ic(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var t = n();
        return !$e(e, t)
    } catch (r) {
        return !0
    }
}

function oc(e) {
    var n = nn(e, 1);
    n !== null && Ve(n, e, 1, -1)
}

function zs(e) {
    var n = Qe();
    return typeof e === "function" && (e = e()), n.memoizedState = n.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pr,
        lastRenderedState: e
    }, n.queue = e, e = e.dispatch = S0.bind(null, K, e), [n.memoizedState, e]
}

function hr(e, n, t, r) {
    return e = {
        tag: e,
        create: n,
        destroy: t,
        deps: r,
        next: null
    }, n = K.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e
}

function sc() {
    return Re().memoizedState
}

function el(e, n, t, r) {
    var l = Qe();
    K.flags |= e, l.memoizedState = hr(1 | n, t, void 0, r === void 0 ? null : r)
}

function Ol(e, n, t, r) {
    var l = Re();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (J !== null) {
        var i = J.memoizedState;
        if (u = i.destroy, r !== null && Hi(r, i.deps)) {
            l.memoizedState = hr(n, t, u, r);
            return
        }
    }
    K.flags |= e, l.memoizedState = hr(1 | n, t, u, r)
}

function Ts(e, n) {
    return el(8390656, 8, e, n)
}

function Ji(e, n) {
    return Ol(2048, 8, e, n)
}

function ac(e, n) {
    return Ol(4, 2, e, n)
}

function cc(e, n) {
    return Ol(4, 4, e, n)
}

function fc(e, n) {
    if (typeof n === "function") return e = e(), n(e),
        function() {
            n(null)
        };
    if (n !== null && n !== void 0) return e = e(), n.current = e,
        function() {
            n.current = null
        }
}

function dc(e, n, t) {
    return t = t !== null && t !== void 0 ? t.concat([e]) : null, Ol(4, 4, fc.bind(null, n, e), t)
}

function qi() {}

function pc(e, n) {
    var t = Re();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    if (r !== null && n !== null && Hi(n, r[1])) return r[0];
    return t.memoizedState = [e, n], e
}

function hc(e, n) {
    var t = Re();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    if (r !== null && n !== null && Hi(n, r[1])) return r[0];
    return e = e(), t.memoizedState = [e, n], e
}

function vc(e, n, t) {
    if ((Vn & 21) === 0) return e.baseState && (e.baseState = !1, ye = !0), e.memoizedState = t;
    return $e(t, n) || (t = wa(), K.lanes |= t, $n |= t, e.baseState = !0), n
}

function k0(e, n) {
    var t = U;
    U = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = wu.transition;
    wu.transition = {};
    try {
        e(!1), n()
    } finally {
        U = t, wu.transition = r
    }
}

function mc() {
    return Re().memoizedState
}

function w0(e, n, t) {
    var r = kn(e);
    if (t = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, yc(e)) gc(n, t);
    else if (t = qa(e, n, t, r), t !== null) {
        var l = pe();
        Ve(t, e, r, l), kc(t, n, r)
    }
}

function S0(e, n, t) {
    var r = kn(e),
        l = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (yc(e)) gc(n, l);
    else {
        var u = e.alternate;
        if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null)) try {
            var i = n.lastRenderedState,
                o = u(i, t);
            if (l.hasEagerState = !0, l.eagerState = o, $e(o, i)) {
                var s = n.interleaved;
                s === null ? (l.next = l, Qi(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
                return
            }
        } catch (f) {} finally {}
        t = qa(e, n, l, r), t !== null && (l = pe(), Ve(t, e, r, l), kc(t, n, r))
    }
}

function yc(e) {
    var n = e.alternate;
    return e === K || n !== null && n === K
}

function gc(e, n) {
    Gt = El = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n
}

function kc(e, n, t) {
    if ((t & 4194240) !== 0) {
        var r = n.lanes;
        r &= e.pendingLanes, t |= r, n.lanes = t, Ti(e, t)
    }
}

function Fe(e, n) {
    if (e && e.defaultProps) {
        n = Y({}, n), e = e.defaultProps;
        for (var t in e) n[t] === void 0 && (n[t] = e[t]);
        return n
    }
    return n
}

function ui(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t === null || t === void 0 ? n : Y({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t)
}

function Ls(e, n, t, r, l, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate === "function" ? e.shouldComponentUpdate(r, u, i) : n.prototype && n.prototype.isPureReactComponent ? !ir(t, r) || !ir(l, u) : !0
}

function wc(e, n, t) {
    var r = !1,
        l = En,
        u = n.contextType;
    return typeof u === "object" && u !== null ? u = Le(u) : (l = ke(n) ? In : ce.current, r = n.contextTypes, u = (r = r !== null && r !== void 0) ? vt(e, l) : En), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Il, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n
}

function Rs(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps === "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps === "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Il.enqueueReplaceState(n, n.state, null)
}

function ii(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, ji(e);
    var u = n.contextType;
    typeof u === "object" && u !== null ? l.context = Le(u) : (u = ke(n) ? In : ce.current, l.context = vt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u === "function" && (ui(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps === "function" || typeof l.getSnapshotBeforeUpdate === "function" || typeof l.UNSAFE_componentWillMount !== "function" && typeof l.componentWillMount !== "function" || (n = l.state, typeof l.componentWillMount === "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount === "function" && l.UNSAFE_componentWillMount(), n !== l.state && Il.enqueueReplaceState(l, l.state, null), wl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount === "function" && (e.flags |= 4194308)
}

function kt(e, n) {
    try {
        var t = "",
            r = n;
        do t += ep(r), r = r.return; while (r);
        var l = t
    } catch (u) {
        l = `
Error generating stack: ` + u.message + `
` + u.stack
    }
    return {
        value: e,
        source: n,
        stack: l,
        digest: null
    }
}

function _u(e, n, t) {
    return {
        value: e,
        source: null,
        stack: t != null ? t : null,
        digest: n != null ? n : null
    }
}

function oi(e, n) {
    try {
        console.error(n.value)
    } catch (t) {
        setTimeout(function() {
            throw t
        })
    }
}

function Sc(e, n, t) {
    t = qe(-1, t), t.tag = 3, t.payload = {
        element: null
    };
    var r = n.value;
    return t.callback = function() {
        xl || (xl = !0, yi = r), oi(e, n)
    }, t
}

function Ec(e, n, t) {
    t = qe(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r === "function") {
        var l = n.value;
        t.payload = function() {
            return r(l)
        }, t.callback = function() {
            oi(e, n)
        }
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch === "function" && (t.callback = function() {
        oi(e, n), typeof r !== "function" && (gn === null ? gn = new Set([this]) : gn.add(this));
        var i = n.stack;
        this.componentDidCatch(n.value, {
            componentStack: i !== null ? i : ""
        })
    }), t
}

function Ms(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new x0;
        var l = new Set;
        r.set(n, l)
    } else l = r.get(n), l === void 0 && (l = new Set, r.set(n, l));
    l.has(t) || (l.add(t), e = $0.bind(null, e, n, t), n.then(e, e))
}

function Ds(e) {
    do {
        var n;
        if (n = e.tag === 13) n = e.memoizedState, n = n !== null ? n.dehydrated !== null ? !0 : !1 : !0;
        if (n) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Fs(e, n, t, r, l) {
    if ((e.mode & 1) === 0) return e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = qe(-1, 1), n.tag = 2, yn(t, n, 1))), t.lanes |= 1), e;
    return e.flags |= 65536, e.lanes = l, e
}

function de(e, n, t, r) {
    n.child = e === null ? Ja(n, null, t, r) : yt(n, e.child, t, r)
}

function Os(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    if (dt(n, l), r = Gi(e, n, t, r, u, l), t = Zi(), e !== null && !ye) return n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, tn(e, n, l);
    return A && t && Ui(n), n.flags |= 1, de(e, n, r, l), n.child
}

function Is(e, n, t, r, l) {
    if (e === null) {
        var u = t.type;
        if (typeof u === "function" && !io(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0) return n.tag = 15, n.type = u, _c(e, n, u, r, l);
        return e = ll(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e
    }
    if (u = e.child, (e.lanes & l) === 0) {
        var i = u.memoizedProps;
        if (t = t.compare, t = t !== null ? t : ir, t(i, r) && e.ref === n.ref) return tn(e, n, l)
    }
    return n.flags |= 1, e = wn(u, r), e.ref = n.ref, e.return = n, n.child = e
}

function _c(e, n, t, r, l) {
    if (e !== null) {
        var u = e.memoizedProps;
        if (ir(u, r) && e.ref === n.ref)
            if (ye = !1, n.pendingProps = r = u, (e.lanes & l) !== 0)(e.flags & 131072) !== 0 && (ye = !0);
            else return n.lanes = e.lanes, tn(e, n, l)
    }
    return si(e, n, t, r, l)
}

function Cc(e, n, t) {
    var r = n.pendingProps,
        l = r.children,
        u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if ((n.mode & 1) === 0) n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, $(ot, Se), Se |= t;
        else {
            if ((t & 1073741824) === 0) return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, n.updateQueue = null, $(ot, Se), Se |= e, null;
            n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = u !== null ? u.baseLanes : t, $(ot, Se), Se |= r
        }
    else u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, $(ot, Se), Se |= r;
    return de(e, n, l, t), n.child
}

function xc(e, n) {
    var t = n.ref;
    if (e === null && t !== null || e !== null && e.ref !== t) n.flags |= 512, n.flags |= 2097152
}

function si(e, n, t, r, l) {
    var u = ke(t) ? In : ce.current;
    if (u = vt(n, u), dt(n, l), t = Gi(e, n, t, r, u, l), r = Zi(), e !== null && !ye) return n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, tn(e, n, l);
    return A && r && Ui(n), n.flags |= 1, de(e, n, t, l), n.child
}

function Us(e, n, t, r, l) {
    if (ke(t)) {
        var u = !0;
        vl(n)
    } else u = !1;
    if (dt(n, l), n.stateNode === null) nl(e, n), wc(n, t, r), ii(n, t, r, l), r = !0;
    else if (e === null) {
        var {
            stateNode: i,
            memoizedProps: o
        } = n;
        i.props = o;
        var s = i.context,
            f = t.contextType;
        typeof f === "object" && f !== null ? f = Le(f) : (f = ke(t) ? In : ce.current, f = vt(n, f));
        var h = t.getDerivedStateFromProps,
            p = typeof h === "function" || typeof i.getSnapshotBeforeUpdate === "function";
        p || typeof i.UNSAFE_componentWillReceiveProps !== "function" && typeof i.componentWillReceiveProps !== "function" || (o !== r || s !== f) && Rs(n, i, r, f), sn = !1;
        var v = n.memoizedState;
        i.state = v, wl(n, r, i, l), s = n.memoizedState, o !== r || v !== s || ge.current || sn ? (typeof h === "function" && (ui(n, t, h, r), s = n.memoizedState), (o = sn || Ls(n, t, o, r, v, s, f)) ? (p || typeof i.UNSAFE_componentWillMount !== "function" && typeof i.componentWillMount !== "function" || (typeof i.componentWillMount === "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount === "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount === "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount === "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = f, r = o) : (typeof i.componentDidMount === "function" && (n.flags |= 4194308), r = !1)
    } else {
        i = n.stateNode, ba(e, n), o = n.memoizedProps, f = n.type === n.elementType ? o : Fe(n.type, o), i.props = f, p = n.pendingProps, v = i.context, s = t.contextType, typeof s === "object" && s !== null ? s = Le(s) : (s = ke(t) ? In : ce.current, s = vt(n, s));
        var S = t.getDerivedStateFromProps;
        (h = typeof S === "function" || typeof i.getSnapshotBeforeUpdate === "function") || typeof i.UNSAFE_componentWillReceiveProps !== "function" && typeof i.componentWillReceiveProps !== "function" || (o !== p || v !== s) && Rs(n, i, r, s), sn = !1, v = n.memoizedState, i.state = v, wl(n, r, i, l);
        var E = n.memoizedState;
        o !== p || v !== E || ge.current || sn ? (typeof S === "function" && (ui(n, t, S, r), E = n.memoizedState), (f = sn || Ls(n, t, f, r, v, E, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate !== "function" && typeof i.componentWillUpdate !== "function" || (typeof i.componentWillUpdate === "function" && i.componentWillUpdate(r, E, s), typeof i.UNSAFE_componentWillUpdate === "function" && i.UNSAFE_componentWillUpdate(r, E, s)), typeof i.componentDidUpdate === "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate === "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate !== "function" || o === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate !== "function" || o === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = E), i.props = r, i.state = E, i.context = s, r = f) : (typeof i.componentDidUpdate !== "function" || o === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate !== "function" || o === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), r = !1)
    }
    return ai(e, n, t, r, u, l)
}

function ai(e, n, t, r, l, u) {
    xc(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Es(n, t, !1), tn(e, n, u);
    r = n.stateNode, P0.current = n;
    var o = i && typeof t.getDerivedStateFromError !== "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = yt(n, e.child, null, u), n.child = yt(n, null, o, u)) : de(e, n, o, u), n.memoizedState = r.state, l && Es(n, t, !0), n.child
}

function Pc(e) {
    var n = e.stateNode;
    n.pendingContext ? Ss(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ss(e, n.context, !1), Ki(e, n.containerInfo)
}

function Vs(e, n, t, r, l) {
    return mt(), $i(l), n.flags |= 256, de(e, n, t, r), n.child
}

function fi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Nc(e, n, t) {
    var r = n.pendingProps,
        l = j.current,
        u = !1,
        i = (n.flags & 128) !== 0,
        o;
    if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o) u = !0, n.flags &= -129;
    else if (e === null || e.memoizedState !== null) l |= 1;
    if ($(j, l & 1), e === null) {
        if (ri(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null)) return (n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null;
        return i = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, i = {
            mode: "hidden",
            children: i
        }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = i) : u = $l(i, r, 0, null), e = On(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = fi(t), n.memoizedState = ci, e) : bi(n, i)
    }
    if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return N0(e, n, i, r, o, l, t);
    if (u) {
        u = r.fallback, i = n.mode, l = e.child, o = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return (i & 1) === 0 && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = wn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? u = wn(o, u) : (u = On(u, i, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, i = e.child.memoizedState, i = i === null ? fi(t) : {
            baseLanes: i.baseLanes | t,
            cachePool: null,
            transitions: i.transitions
        }, u.memoizedState = i, u.childLanes = e.childLanes & ~t, n.memoizedState = ci, r
    }
    return u = e.child, e = u.sibling, r = wn(u, {
        mode: "visible",
        children: r.children
    }), (n.mode & 1) === 0 && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r
}

function bi(e, n) {
    return n = $l({
        mode: "visible",
        children: n
    }, e.mode, 0, null), n.return = e, e.child = n
}

function Kr(e, n, t, r) {
    return r !== null && $i(r), yt(n, e.child, null, t), e = bi(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e
}

function N0(e, n, t, r, l, u, i) {
    if (t) {
        if (n.flags & 256) return n.flags &= -257, r = _u(Error(k(422))), Kr(e, n, i, r);
        if (n.memoizedState !== null) return n.child = e.child, n.flags |= 128, null;
        return u = r.fallback, l = n.mode, r = $l({
            mode: "visible",
            children: r.children
        }, l, 0, null), u = On(u, l, i, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, (n.mode & 1) !== 0 && yt(n, e.child, null, i), n.child.memoizedState = fi(i), n.memoizedState = ci, u
    }
    if ((n.mode & 1) === 0) return Kr(e, n, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
        return r = o, u = Error(k(419)), r = _u(u, r, void 0), Kr(e, n, i, r)
    }
    if (o = (i & e.childLanes) !== 0, ye || o) {
        if (r = ee, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, nn(e, l), Ve(r, e, l, -1))
        }
        return uo(), r = _u(Error(k(421))), Kr(e, n, i, r)
    }
    if (l.data === "$?") return n.flags |= 128, n.child = e.child, n = B0.bind(null, e), l._reactRetry = n, null;
    return e = u.treeContext, Ee = mn(l.nextSibling), _e = n, A = !0, Ie = null, e !== null && (Pe[Ne++] = Ze, Pe[Ne++] = Je, Pe[Ne++] = Un, Ze = e.id, Je = e.overflow, Un = n), n = bi(n, r.children), n.flags |= 4096, n
}

function $s(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), li(e.return, n, t)
}

function Cu(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l
    } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l)
}

function zc(e, n, t) {
    var r = n.pendingProps,
        l = r.revealOrder,
        u = r.tail;
    if (de(e, n, r.children, t), r = j.current, (r & 2) !== 0) r = r & 1 | 2, n.flags |= 128;
    else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && $s(e, t, n);
            else if (e.tag === 19) $s(e, t, n);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === n) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === n) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if ($(j, r), (n.mode & 1) === 0) n.memoizedState = null;
    else switch (l) {
        case "forwards":
            t = n.child;
            for (l = null; t !== null;) e = t.alternate, e !== null && Sl(e) === null && (l = t), t = t.sibling;
            t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Cu(n, !1, l, t, u);
            break;
        case "backwards":
            t = null, l = n.child;
            for (n.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Sl(e) === null) {
                    n.child = l;
                    break
                }
                e = l.sibling, l.sibling = t, t = l, l = e
            }
            Cu(n, !0, t, null, u);
            break;
        case "together":
            Cu(n, !1, null, null, void 0);
            break;
        default:
            n.memoizedState = null
    }
    return n.child
}

function nl(e, n) {
    (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2)
}

function tn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), $n |= n.lanes, (t & n.childLanes) === 0) return null;
    if (e !== null && n.child !== e.child) throw Error(k(153));
    if (n.child !== null) {
        e = n.child, t = wn(e, e.pendingProps), n.child = t;
        for (t.return = n; e.sibling !== null;) e = e.sibling, t = t.sibling = wn(e, e.pendingProps), t.return = n;
        t.sibling = null
    }
    return n.child
}

function z0(e, n, t) {
    switch (n.tag) {
        case 3:
            Pc(n), mt();
            break;
        case 5:
            ec(n);
            break;
        case 1:
            ke(n.type) && vl(n);
            break;
        case 4:
            Ki(n, n.stateNode.containerInfo);
            break;
        case 10:
            var r = n.type._context,
                l = n.memoizedProps.value;
            $(gl, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = n.memoizedState, r !== null) {
                if (r.dehydrated !== null) return $(j, j.current & 1), n.flags |= 128, null;
                if ((t & n.child.childLanes) !== 0) return Nc(e, n, t);
                return $(j, j.current & 1), e = tn(e, n, t), e !== null ? e.sibling : null
            }
            $(j, j.current & 1);
            break;
        case 19:
            if (r = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
                if (r) return zc(e, n, t);
                n.flags |= 128
            }
            if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(j, j.current), r) break;
            else return null;
        case 22:
        case 23:
            return n.lanes = 0, Cc(e, n, t)
    }
    return tn(e, n, t)
}

function Ft(e, n) {
    if (!A) switch (e.tailMode) {
        case "hidden":
            n = e.tail;
            for (var t = null; n !== null;) n.alternate !== null && (t = n), n = n.sibling;
            t === null ? e.tail = null : t.sibling = null;
            break;
        case "collapsed":
            t = e.tail;
            for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
            r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function se(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
        t = 0,
        r = 0;
    if (n)
        for (var l = e.child; l !== null;) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n
}

function T0(e, n, t) {
    var r = n.pendingProps;
    switch (Vi(n), n.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return se(n), null;
        case 1:
            return ke(n.type) && hl(), se(n), null;
        case 3:
            if (r = n.stateNode, gt(), W(ge), W(ce), Xi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), e === null || e.child === null) Qr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Ie !== null && (wi(Ie), Ie = null));
            return di(e, n), se(n), null;
        case 5:
            Yi(n);
            var l = Dn(fr.current);
            if (t = n.type, e !== null && n.stateNode != null) Lc(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
            else {
                if (!r) {
                    if (n.stateNode === null) throw Error(k(166));
                    return se(n), null
                }
                if (e = Dn(Ye.current), Qr(n)) {
                    r = n.stateNode, t = n.type;
                    var u = n.memoizedProps;
                    switch (r[je] = n, r[ar] = u, e = (n.mode & 1) !== 0, t) {
                        case "dialog":
                            B("cancel", r), B("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            B("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Qt.length; l++) B(Qt[l], r);
                            break;
                        case "source":
                            B("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            B("error", r), B("load", r);
                            break;
                        case "details":
                            B("toggle", r);
                            break;
                        case "input":
                            Go(r, u), B("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!u.multiple
                            }, B("invalid", r);
                            break;
                        case "textarea":
                            Jo(r, u), B("invalid", r)
                    }
                    Uu(t, u), l = null;
                    for (var i in u)
                        if (u.hasOwnProperty(i)) {
                            var o = u[i];
                            i === "children" ? typeof o === "string" ? r.textContent !== o && (u.suppressHydrationWarning !== !0 && Ar(r.textContent, o, e), l = ["children", o]) : typeof o === "number" && r.textContent !== "" + o && (u.suppressHydrationWarning !== !0 && Ar(r.textContent, o, e), l = ["children", "" + o]) : bt.hasOwnProperty(i) && o != null && i === "onScroll" && B("scroll", r)
                        } switch (t) {
                        case "input":
                            Fr(r), Zo(r, u, !0);
                            break;
                        case "textarea":
                            Fr(r), qo(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof u.onClick === "function" && (r.onclick = pl)
                    }
                    r = l, n.updateQueue = r, r !== null && (n.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ua(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is === "string" ? e = i.createElement(t, {
                        is: r.is
                    }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[je] = n, e[ar] = r, Tc(e, n, !1, !1), n.stateNode = e;
                    e: {
                        switch (i = Vu(t, r), t) {
                            case "dialog":
                                B("cancel", e), B("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                B("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Qt.length; l++) B(Qt[l], e);
                                l = r;
                                break;
                            case "source":
                                B("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                B("error", e), B("load", e), l = r;
                                break;
                            case "details":
                                B("toggle", e), l = r;
                                break;
                            case "input":
                                Go(e, r), l = Mu(e, r), B("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = Y({}, r, {
                                    value: void 0
                                }), B("invalid", e);
                                break;
                            case "textarea":
                                Jo(e, r), l = Ou(e, r), B("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        Uu(t, l),
                        o = l;
                        for (u in o)
                            if (o.hasOwnProperty(u)) {
                                var s = o[u];
                                u === "style" ? sa(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ia(e, s)) : u === "children" ? typeof s === "string" ? (t !== "textarea" || s !== "") && er(e, s) : typeof s === "number" && er(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (bt.hasOwnProperty(u) ? s != null && u === "onScroll" && B("scroll", e) : s != null && _i(e, u, s, i))
                            } switch (t) {
                            case "input":
                                Fr(e), Zo(e, r, !1);
                                break;
                            case "textarea":
                                Fr(e), qo(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Sn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, u = r.value, u != null ? st(e, !!r.multiple, u, !1) : r.defaultValue != null && st(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick === "function" && (e.onclick = pl)
                        }
                        switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (n.flags |= 4)
                }
                n.ref !== null && (n.flags |= 512, n.flags |= 2097152)
            }
            return se(n), null;
        case 6:
            if (e && n.stateNode != null) Rc(e, n, e.memoizedProps, r);
            else {
                if (typeof r !== "string" && n.stateNode === null) throw Error(k(166));
                if (t = Dn(fr.current), Dn(Ye.current), Qr(n)) {
                    if (r = n.stateNode, t = n.memoizedProps, r[je] = n, u = r.nodeValue !== t) {
                        if (e = _e, e !== null) switch (e.tag) {
                            case 3:
                                Ar(r.nodeValue, t, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Ar(r.nodeValue, t, (e.mode & 1) !== 0)
                        }
                    }
                    u && (n.flags |= 4)
                } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[je] = n, n.stateNode = r
            }
            return se(n), null;
        case 13:
            if (W(j), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (A && Ee !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) Ga(), mt(), n.flags |= 98560, u = !1;
                else if (u = Qr(n), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!u) throw Error(k(318));
                        if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(k(317));
                        u[je] = n
                    } else mt(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                    se(n), u = !1
                } else Ie !== null && (wi(Ie), Ie = null), u = !0;
                if (!u) return n.flags & 65536 ? n : null
            }
            if ((n.flags & 128) !== 0) return n.lanes = t, n;
            return r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (j.current & 1) !== 0 ? q === 0 && (q = 3) : uo())), n.updateQueue !== null && (n.flags |= 4), se(n), null;
        case 4:
            return gt(), di(e, n), e === null && or(n.stateNode.containerInfo), se(n), null;
        case 10:
            return Ai(n.type._context), se(n), null;
        case 17:
            return ke(n.type) && hl(), se(n), null;
        case 19:
            if (W(j), u = n.memoizedState, u === null) return se(n), null;
            if (r = (n.flags & 128) !== 0, i = u.rendering, i === null)
                if (r) Ft(u, !1);
                else {
                    if (q !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = n.child; e !== null;) {
                            if (i = Sl(e), i !== null) {
                                n.flags |= 128, Ft(u, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t;
                                for (t = n.child; t !== null;) u = t, e = r, u.flags &= 14680066, i = u.alternate, i === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, u.type = i.type, e = i.dependencies, u.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), t = t.sibling;
                                return $(j, j.current & 1 | 2), n.child
                            }
                            e = e.sibling
                        }
                    u.tail !== null && H() > wt && (n.flags |= 128, r = !0, Ft(u, !1), n.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Sl(i), e !== null) {
                        if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Ft(u, !0), u.tail === null && u.tailMode === "hidden" && !i.alternate && !A) return se(n), null
                    } else 2 * H() - u.renderingStartTime > wt && t !== 1073741824 && (n.flags |= 128, r = !0, Ft(u, !1), n.lanes = 4194304);
                u.isBackwards ? (i.sibling = n.child, n.child = i) : (t = u.last, t !== null ? t.sibling = i : n.child = i, u.last = i)
            }
            if (u.tail !== null) return n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = H(), n.sibling = null, t = j.current, $(j, r ? t & 1 | 2 : t & 1), n;
            return se(n), null;
        case 22:
        case 23:
            return lo(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && (n.mode & 1) !== 0 ? (Se & 1073741824) !== 0 && (se(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : se(n), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(k(156, n.tag))
}

function L0(e, n) {
    switch (Vi(n), n.tag) {
        case 1:
            return ke(n.type) && hl(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 3:
            return gt(), W(ge), W(ce), Xi(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
        case 5:
            return Yi(n), null;
        case 13:
            if (W(j), e = n.memoizedState, e !== null && e.dehydrated !== null) {
                if (n.alternate === null) throw Error(k(340));
                mt()
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 19:
            return W(j), null;
        case 4:
            return gt(), null;
        case 10:
            return Ai(n.type._context), null;
        case 22:
        case 23:
            return lo(), null;
        case 24:
            return null;
        default:
            return null
    }
}

function it(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t === "function") try {
            t(null)
        } catch (r) {
            X(e, n, r)
        } else t.current = null
}

function pi(e, n, t) {
    try {
        t()
    } catch (r) {
        X(e, n, r)
    }
}

function M0(e, n) {
    if (Zu = cl, e = Ia(), Ii(e)) {
        if ("selectionStart" in e) var t = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            t = (t = e.ownerDocument) && t.defaultView || window;
            var r = t.getSelection && t.getSelection();
            if (r && r.rangeCount !== 0) {
                t = r.anchorNode;
                var {
                    anchorOffset: l,
                    focusNode: u
                } = r;
                r = r.focusOffset;
                try {
                    t.nodeType, u.nodeType
                } catch (m) {
                    t = null;
                    break e
                }
                var i = 0,
                    o = -1,
                    s = -1,
                    f = 0,
                    h = 0,
                    p = e,
                    v = null;
                n: for (;;) {
                    for (var S;;) {
                        if (p !== t || l !== 0 && p.nodeType !== 3 || (o = i + l), p !== u || r !== 0 && p.nodeType !== 3 || (s = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (S = p.firstChild) === null) break;
                        v = p, p = S
                    }
                    for (;;) {
                        if (p === e) break n;
                        if (v === t && ++f === l && (o = i), v === u && ++h === r && (s = i), (S = p.nextSibling) !== null) break;
                        p = v, v = p.parentNode
                    }
                    p = S
                }
                t = o === -1 || s === -1 ? null : {
                    start: o,
                    end: s
                }
            } else t = null
        }
        t = t || {
            start: 0,
            end: 0
        }
    } else t = null;
    Ju = {
        focusedElem: e,
        selectionRange: t
    }, cl = !1;
    for (N = n; N !== null;)
        if (n = N, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, N = e;
        else
            for (; N !== null;) {
                n = N;
                try {
                    var E = n.alternate;
                    if ((n.flags & 1024) !== 0) switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (E !== null) {
                                var {
                                    memoizedProps: _,
                                    memoizedState: O
                                } = E, c = n.stateNode, a = c.getSnapshotBeforeUpdate(n.elementType === n.type ? _ : Fe(n.type, _), O);
                                c.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var d = n.stateNode.containerInfo;
                            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                    }
                } catch (m) {
                    X(n, n.return, m)
                }
                if (e = n.sibling, e !== null) {
                    e.return = n.return, N = e;
                    break
                }
                N = n.return
            }
    return E = Bs, Bs = !1, E
}

function Zt(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var u = l.destroy;
                l.destroy = void 0, u !== void 0 && pi(n, t, u)
            }
            l = l.next
        } while (l !== r)
    }
}

function Ul(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
        var t = n = n.next;
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r()
            }
            t = t.next
        } while (t !== n)
    }
}

function hi(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
            case 5:
                e = t;
                break;
            default:
                e = t
        }
        typeof n === "function" ? n(e) : n.current = e
    }
}

function Mc(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Mc(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[je], delete n[ar], delete n[ei], delete n[h0], delete n[v0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Dc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ws(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Dc(e.return)) return null;
            e = e.return
        }
        e.sibling.return = e.return;
        for (e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2) continue e;
            if (e.child === null || e.tag === 4) continue e;
            else e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function vi(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t !== null && t !== void 0 || n.onclick !== null || (n.onclick = pl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (vi(e, n, t), e = e.sibling; e !== null;) vi(e, n, t), e = e.sibling
}

function mi(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (mi(e, n, t), e = e.sibling; e !== null;) mi(e, n, t), e = e.sibling
}

function un(e, n, t) {
    for (t = t.child; t !== null;) Fc(e, n, t), t = t.sibling
}

function Fc(e, n, t) {
    if (Ke && typeof Ke.onCommitFiberUnmount === "function") try {
        Ke.onCommitFiberUnmount(Tl, t)
    } catch (o) {}
    switch (t.tag) {
        case 5:
            ae || it(t, n);
        case 6:
            var r = ne,
                l = Oe;
            ne = null, un(e, n, t), ne = r, Oe = l, ne !== null && (Oe ? (e = ne, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ne.removeChild(t.stateNode));
            break;
        case 18:
            ne !== null && (Oe ? (e = ne, t = t.stateNode, e.nodeType === 8 ? yu(e.parentNode, t) : e.nodeType === 1 && yu(e, t), lr(e)) : yu(ne, t.stateNode));
            break;
        case 4:
            r = ne, l = Oe, ne = t.stateNode.containerInfo, Oe = !0, un(e, n, t), ne = r, Oe = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ae && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var u = l,
                        i = u.destroy;
                    u = u.tag, i !== void 0 && ((u & 2) !== 0 ? pi(t, n, i) : (u & 4) !== 0 && pi(t, n, i)), l = l.next
                } while (l !== r)
            }
            un(e, n, t);
            break;
        case 1:
            if (!ae && (it(t, n), r = t.stateNode, typeof r.componentWillUnmount === "function")) try {
                r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount()
            } catch (o) {
                X(t, n, o)
            }
            un(e, n, t);
            break;
        case 21:
            un(e, n, t);
            break;
        case 22:
            t.mode & 1 ? (ae = (r = ae) || t.memoizedState !== null, un(e, n, t), ae = r) : un(e, n, t);
            break;
        default:
            un(e, n, t)
    }
}

function As(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new R0), n.forEach(function(r) {
            var l = W0.bind(null, e, r);
            t.has(r) || (t.add(r), r.then(l, l))
        })
    }
}

function De(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            try {
                var u = e,
                    i = n,
                    o = i;
                e: for (; o !== null;) {
                    switch (o.tag) {
                        case 5:
                            ne = o.stateNode, Oe = !1;
                            break e;
                        case 3:
                            ne = o.stateNode.containerInfo, Oe = !0;
                            break e;
                        case 4:
                            ne = o.stateNode.containerInfo, Oe = !0;
                            break e
                    }
                    o = o.return
                }
                if (ne === null) throw Error(k(160));
                Fc(u, i, l), ne = null, Oe = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (f) {
                X(l, n, f)
            }
        }
    if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null;) Oc(n, e), n = n.sibling
}

function Oc(e, n) {
    var {
        alternate: t,
        flags: r
    } = e;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (De(n, e), Ae(e), r & 4) {
                try {
                    Zt(3, e, e.return), Ul(3, e)
                } catch (_) {
                    X(e, e.return, _)
                }
                try {
                    Zt(5, e, e.return)
                } catch (_) {
                    X(e, e.return, _)
                }
            }
            break;
        case 1:
            De(n, e), Ae(e), r & 512 && t !== null && it(t, t.return);
            break;
        case 5:
            if (De(n, e), Ae(e), r & 512 && t !== null && it(t, t.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    er(l, "")
                } catch (_) {
                    X(e, e.return, _)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var u = e.memoizedProps,
                    i = t !== null ? t.memoizedProps : u,
                    o = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    o === "input" && u.type === "radio" && u.name != null && ra(l, u), Vu(o, i);
                    var f = Vu(o, u);
                    for (i = 0; i < s.length; i += 2) {
                        var h = s[i],
                            p = s[i + 1];
                        h === "style" ? sa(l, p) : h === "dangerouslySetInnerHTML" ? ia(l, p) : h === "children" ? er(l, p) : _i(l, h, p, f)
                    }
                    switch (o) {
                        case "input":
                            Du(l, u);
                            break;
                        case "textarea":
                            la(l, u);
                            break;
                        case "select":
                            var v = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!u.multiple;
                            var S = u.value;
                            S != null ? st(l, !!u.multiple, S, !1) : v !== !!u.multiple && (u.defaultValue != null ? st(l, !!u.multiple, u.defaultValue, !0) : st(l, !!u.multiple, u.multiple ? [] : "", !1))
                    }
                    l[ar] = u
                } catch (_) {
                    X(e, e.return, _)
                }
            }
            break;
        case 6:
            if (De(n, e), Ae(e), r & 4) {
                if (e.stateNode === null) throw Error(k(162));
                l = e.stateNode, u = e.memoizedProps;
                try {
                    l.nodeValue = u
                } catch (_) {
                    X(e, e.return, _)
                }
            }
            break;
        case 3:
            if (De(n, e), Ae(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
                lr(n.containerInfo)
            } catch (_) {
                X(e, e.return, _)
            }
            break;
        case 4:
            De(n, e), Ae(e);
            break;
        case 13:
            De(n, e), Ae(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (to = H())), r & 4 && As(e);
            break;
        case 22:
            if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (ae = (f = ae) || h, De(n, e), ae = f) : De(n, e), Ae(e), r & 8192) {
                if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && (e.mode & 1) !== 0)
                    for (N = e, h = e.child; h !== null;) {
                        for (p = N = h; N !== null;) {
                            switch (v = N, S = v.child, v.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Zt(4, v, v.return);
                                    break;
                                case 1:
                                    it(v, v.return);
                                    var E = v.stateNode;
                                    if (typeof E.componentWillUnmount === "function") {
                                        r = v, t = v.return;
                                        try {
                                            n = r, E.props = n.memoizedProps, E.state = n.memoizedState, E.componentWillUnmount()
                                        } catch (_) {
                                            X(r, t, _)
                                        }
                                    }
                                    break;
                                case 5:
                                    it(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        js(p);
                                        continue
                                    }
                            }
                            S !== null ? (S.return = v, N = S) : js(p)
                        }
                        h = h.sibling
                    }
                e: for (h = null, p = e;;) {
                    if (p.tag === 5) {
                        if (h === null) {
                            h = p;
                            try {
                                l = p.stateNode, f ? (u = l.style, typeof u.setProperty === "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (o = p.stateNode, s = p.memoizedProps.style, i = s !== void 0 && s !== null && s.hasOwnProperty("display") ? s.display : null, o.style.display = oa("display", i))
                            } catch (_) {
                                X(e, e.return, _)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (h === null) try {
                            p.stateNode.nodeValue = f ? "" : p.memoizedProps
                        } catch (_) {
                            X(e, e.return, _)
                        }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === e) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e) break e;
                        h === p && (h = null), p = p.return
                    }
                    h === p && (h = null), p.sibling.return = p.return, p = p.sibling
                }
            }
            break;
        case 19:
            De(n, e), Ae(e), r & 4 && As(e);
            break;
        case 21:
            break;
        default:
            De(n, e), Ae(e)
    }
}

function Ae(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var t = e.return; t !== null;) {
                    if (Dc(t)) {
                        var r = t;
                        break e
                    }
                    t = t.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (er(l, ""), r.flags &= -33);
                    var u = Ws(e);
                    mi(e, u, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        o = Ws(e);
                    vi(e, o, i);
                    break;
                default:
                    throw Error(k(161))
            }
        }
        catch (s) {
            X(e, e.return, s)
        }
        e.flags &= -3
    }
    n & 4096 && (e.flags &= -4097)
}

function D0(e, n, t) {
    N = e, Ic(e, n, t)
}

function Ic(e, n, t) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
        var l = N,
            u = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Yr;
            if (!i) {
                var o = l.alternate,
                    s = o !== null && o.memoizedState !== null || ae;
                o = Yr;
                var f = ae;
                if (Yr = i, (ae = s) && !f)
                    for (N = l; N !== null;) i = N, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ks(l) : s !== null ? (s.return = i, N = s) : Ks(l);
                for (; u !== null;) N = u, Ic(u, n, t), u = u.sibling;
                N = l, Yr = o, ae = f
            }
            Qs(e, n, t)
        } else(l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, N = u) : Qs(e, n, t)
    }
}

function Qs(e) {
    for (; N !== null;) {
        var n = N;
        if ((n.flags & 8772) !== 0) {
            var t = n.alternate;
            try {
                if ((n.flags & 8772) !== 0) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ae || Ul(5, n);
                        break;
                    case 1:
                        var r = n.stateNode;
                        if (n.flags & 4 && !ae)
                            if (t === null) r.componentDidMount();
                            else {
                                var l = n.elementType === n.type ? t.memoizedProps : Fe(n.type, t.memoizedProps);
                                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var u = n.updateQueue;
                        u !== null && Ns(n, u, r);
                        break;
                    case 3:
                        var i = n.updateQueue;
                        if (i !== null) {
                            if (t = null, n.child !== null) switch (n.child.tag) {
                                case 5:
                                    t = n.child.stateNode;
                                    break;
                                case 1:
                                    t = n.child.stateNode
                            }
                            Ns(n, i, t)
                        }
                        break;
                    case 5:
                        var o = n.stateNode;
                        if (t === null && n.flags & 4) {
                            t = o;
                            var s = n.memoizedProps;
                            switch (n.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && t.focus();
                                    break;
                                case "img":
                                    s.src && (t.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (n.memoizedState === null) {
                            var f = n.alternate;
                            if (f !== null) {
                                var h = f.memoizedState;
                                if (h !== null) {
                                    var p = h.dehydrated;
                                    p !== null && lr(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(k(163))
                }
                ae || n.flags & 512 && hi(n)
            } catch (v) {
                X(n, n.return, v)
            }
        }
        if (n === e) {
            N = null;
            break
        }
        if (t = n.sibling, t !== null) {
            t.return = n.return, N = t;
            break
        }
        N = n.return
    }
}

function js(e) {
    for (; N !== null;) {
        var n = N;
        if (n === e) {
            N = null;
            break
        }
        var t = n.sibling;
        if (t !== null) {
            t.return = n.return, N = t;
            break
        }
        N = n.return
    }
}

function Ks(e) {
    for (; N !== null;) {
        var n = N;
        try {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var t = n.return;
                    try {
                        Ul(4, n)
                    } catch (s) {
                        X(n, t, s)
                    }
                    break;
                case 1:
                    var r = n.stateNode;
                    if (typeof r.componentDidMount === "function") {
                        var l = n.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            X(n, l, s)
                        }
                    }
                    var u = n.return;
                    try {
                        hi(n)
                    } catch (s) {
                        X(n, u, s)
                    }
                    break;
                case 5:
                    var i = n.return;
                    try {
                        hi(n)
                    } catch (s) {
                        X(n, i, s)
                    }
            }
        } catch (s) {
            X(n, n.return, s)
        }
        if (n === e) {
            N = null;
            break
        }
        var o = n.sibling;
        if (o !== null) {
            o.return = n.return, N = o;
            break
        }
        N = n.return
    }
}

function pe() {
    return (I & 6) !== 0 ? H() : tl !== -1 ? tl : tl = H()
}

function kn(e) {
    if ((e.mode & 1) === 0) return 1;
    if ((I & 2) !== 0 && te !== 0) return te & -te;
    if (y0.transition !== null) return rl === 0 && (rl = wa()), rl;
    if (e = U, e !== 0) return e;
    return e = window.event, e = e === void 0 ? 16 : Na(e.type), e
}

function Ve(e, n, t, r) {
    if (50 < qt) throw qt = 0, gi = null, Error(k(185));
    if (mr(e, t, r), (I & 2) === 0 || e !== ee) e === ee && ((I & 2) === 0 && (Vl |= t), q === 4 && cn(e, te)), we(e, r), t === 1 && I === 0 && (n.mode & 1) === 0 && (wt = H() + 500, Fl && xn())
}

function we(e, n) {
    var t = e.callbackNode;
    kp(e, n);
    var r = al(e, e === ee ? te : 0);
    if (r === 0) t !== null && ns(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
        if (t != null && ns(t), n === 1) e.tag === 0 ? m0(Ys.bind(null, e)) : Ya(Ys.bind(null, e)), d0(function() {
            (I & 6) === 0 && xn()
        }), t = null;
        else {
            switch (Sa(r)) {
                case 1:
                    t = zi;
                    break;
                case 4:
                    t = ga;
                    break;
                case 16:
                    t = sl;
                    break;
                case 536870912:
                    t = ka;
                    break;
                default:
                    t = sl
            }
            t = jc(t, Uc.bind(null, e))
        }
        e.callbackPriority = n, e.callbackNode = t
    }
}

function Uc(e, n) {
    if (tl = -1, rl = 0, (I & 6) !== 0) throw Error(k(327));
    var t = e.callbackNode;
    if (pt() && e.callbackNode !== t) return null;
    var r = al(e, e === ee ? te : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || n) n = Nl(e, r);
    else {
        n = r;
        var l = I;
        I |= 2;
        var u = $c();
        if (ee !== e || te !== n) He = null, wt = H() + 500, Fn(e, n);
        do try {
            U0();
            break
        } catch (o) {
            Vc(e, o)
        }
        while (1);
        Wi(), Cl.current = u, I = l, Z !== null ? n = 0 : (ee = null, te = 0, n = q)
    }
    if (n !== 0) {
        if (n === 2 && (l = Qu(e), l !== 0 && (r = l, n = ki(e, l))), n === 1) throw t = vr, Fn(e, 0), cn(e, r), we(e, H()), t;
        if (n === 6) cn(e, r);
        else {
            if (l = e.current.alternate, (r & 30) === 0 && !O0(l) && (n = Nl(e, r), n === 2 && (u = Qu(e), u !== 0 && (r = u, n = ki(e, u))), n === 1)) throw t = vr, Fn(e, 0), cn(e, r), we(e, H()), t;
            switch (e.finishedWork = l, e.finishedLanes = r, n) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    Ln(e, me, He);
                    break;
                case 3:
                    if (cn(e, r), (r & 130023424) === r && (n = to + 500 - H(), 10 < n)) {
                        if (al(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            pe(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = bu(Ln.bind(null, e, me, He), n);
                        break
                    }
                    Ln(e, me, He);
                    break;
                case 4:
                    if (cn(e, r), (r & 4194240) === r) break;
                    n = e.eventTimes;
                    for (l = -1; 0 < r;) {
                        var i = 31 - Ue(r);
                        u = 1 << i, i = n[i], i > l && (l = i), r &= ~u
                    }
                    if (r = l, r = H() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3000 > r ? 3000 : 4320 > r ? 4320 : 1960 * F0(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = bu(Ln.bind(null, e, me, He), r);
                        break
                    }
                    Ln(e, me, He);
                    break;
                case 5:
                    Ln(e, me, He);
                    break;
                default:
                    throw Error(k(329))
            }
        }
    }
    return we(e, H()), e.callbackNode === t ? Uc.bind(null, e) : null
}

function ki(e, n) {
    var t = Jt;
    return e.current.memoizedState.isDehydrated && (Fn(e, n).flags |= 256), e = Nl(e, n), e !== 2 && (n = me, me = t, n !== null && wi(n)), e
}

function wi(e) {
    me === null ? me = e : me.push.apply(me, e)
}

function O0(e) {
    for (var n = e;;) {
        if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && (t = t.stores, t !== null))
                for (var r = 0; r < t.length; r++) {
                    var l = t[r],
                        u = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!$e(u(), l)) return !1
                    } catch (i) {
                        return !1
                    }
                }
        }
        if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
        else {
            if (n === e) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === e) return !0;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }
    return !0
}

function cn(e, n) {
    n &= ~no, n &= ~Vl, e.suspendedLanes |= n, e.pingedLanes &= ~n;
    for (e = e.expirationTimes; 0 < n;) {
        var t = 31 - Ue(n),
            r = 1 << t;
        e[t] = -1, n &= ~r
    }
}

function Ys(e) {
    if ((I & 6) !== 0) throw Error(k(327));
    pt();
    var n = al(e, 0);
    if ((n & 1) === 0) return we(e, H()), null;
    var t = Nl(e, n);
    if (e.tag !== 0 && t === 2) {
        var r = Qu(e);
        r !== 0 && (n = r, t = ki(e, r))
    }
    if (t === 1) throw t = vr, Fn(e, 0), cn(e, n), we(e, H()), t;
    if (t === 6) throw Error(k(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, Ln(e, me, He), we(e, H()), null
}

function ro(e, n) {
    var t = I;
    I |= 1;
    try {
        return e(n)
    } finally {
        I = t, I === 0 && (wt = H() + 500, Fl && xn())
    }
}

function Bn(e) {
    dn !== null && dn.tag === 0 && (I & 6) === 0 && pt();
    var n = I;
    I |= 1;
    var t = Te.transition,
        r = U;
    try {
        if (Te.transition = null, U = 1, e) return e()
    } finally {
        U = r, Te.transition = t, I = n, (I & 6) === 0 && xn()
    }
}

function lo() {
    Se = ot.current, W(ot)
}

function Fn(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, f0(t)), Z !== null)
        for (t = Z.return; t !== null;) {
            var r = t;
            switch (Vi(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r !== null && r !== void 0 && hl();
                    break;
                case 3:
                    gt(), W(ge), W(ce), Xi();
                    break;
                case 5:
                    Yi(r);
                    break;
                case 4:
                    gt();
                    break;
                case 13:
                    W(j);
                    break;
                case 19:
                    W(j);
                    break;
                case 10:
                    Ai(r.type._context);
                    break;
                case 22:
                case 23:
                    lo()
            }
            t = t.return
        }
    if (ee = e, Z = e = wn(e.current, null), te = Se = n, q = 0, vr = null, no = Vl = $n = 0, me = Jt = null, Mn !== null) {
        for (n = 0; n < Mn.length; n++)
            if (t = Mn[n], r = t.interleaved, r !== null) {
                t.interleaved = null;
                var l = r.next,
                    u = t.pending;
                if (u !== null) {
                    var i = u.next;
                    u.next = l, r.next = i
                }
                t.pending = r
            } Mn = null
    }
    return e
}

function Vc(e, n) {
    do {
        var t = Z;
        try {
            if (Wi(), br.current = _l, El) {
                for (var r = K.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                El = !1
            }
            if (Vn = 0, b = J = K = null, Gt = !1, dr = 0, eo.current = null, t === null || t.return === null) {
                q = 1, vr = n, Z = null;
                break
            }
            e: {
                var u = e,
                    i = t.return,
                    o = t,
                    s = n;
                if (n = te, o.flags |= 32768, s !== null && typeof s === "object" && typeof s.then === "function") {
                    var f = s,
                        h = o,
                        p = h.tag;
                    if ((h.mode & 1) === 0 && (p === 0 || p === 11 || p === 15)) {
                        var v = h.alternate;
                        v ? (h.updateQueue = v.updateQueue, h.memoizedState = v.memoizedState, h.lanes = v.lanes) : (h.updateQueue = null, h.memoizedState = null)
                    }
                    var S = Ds(i);
                    if (S !== null) {
                        S.flags &= -257, Fs(S, i, o, u, n), S.mode & 1 && Ms(u, f, n), n = S, s = f;
                        var E = n.updateQueue;
                        if (E === null) {
                            var _ = new Set;
                            _.add(s), n.updateQueue = _
                        } else E.add(s);
                        break e
                    } else {
                        if ((n & 1) === 0) {
                            Ms(u, f, n), uo();
                            break e
                        }
                        s = Error(k(426))
                    }
                } else if (A && o.mode & 1) {
                    var O = Ds(i);
                    if (O !== null) {
                        (O.flags & 65536) === 0 && (O.flags |= 256), Fs(O, i, o, u, n), $i(kt(s, o));
                        break e
                    }
                }
                u = s = kt(s, o),
                q !== 4 && (q = 2),
                Jt === null ? Jt = [u] : Jt.push(u),
                u = i;do {
                    switch (u.tag) {
                        case 3:
                            u.flags |= 65536, n &= -n, u.lanes |= n;
                            var c = Sc(u, s, n);
                            Ps(u, c);
                            break e;
                        case 1:
                            o = s;
                            var {
                                type: a, stateNode: d
                            } = u;
                            if ((u.flags & 128) === 0 && (typeof a.getDerivedStateFromError === "function" || d !== null && typeof d.componentDidCatch === "function" && (gn === null || !gn.has(d)))) {
                                u.flags |= 65536, n &= -n, u.lanes |= n;
                                var m = Ec(u, o, n);
                                Ps(u, m);
                                break e
                            }
                    }
                    u = u.return
                } while (u !== null)
            }
            Wc(t)
        } catch (P) {
            n = P, Z === t && t !== null && (Z = t = t.return);
            continue
        }
        break
    } while (1)
}

function $c() {
    var e = Cl.current;
    return Cl.current = _l, e === null ? _l : e
}

function uo() {
    if (q === 0 || q === 3 || q === 2) q = 4;
    ee === null || ($n & 268435455) === 0 && (Vl & 268435455) === 0 || cn(ee, te)
}

function Nl(e, n) {
    var t = I;
    I |= 2;
    var r = $c();
    if (ee !== e || te !== n) He = null, Fn(e, n);
    do try {
        I0();
        break
    } catch (l) {
        Vc(e, l)
    }
    while (1);
    if (Wi(), I = t, Cl.current = r, Z !== null) throw Error(k(261));
    return ee = null, te = 0, q
}

function I0() {
    for (; Z !== null;) Bc(Z)
}

function U0() {
    for (; Z !== null && !cp();) Bc(Z)
}

function Bc(e) {
    var n = Qc(e.alternate, e, Se);
    e.memoizedProps = e.pendingProps, n === null ? Wc(e) : Z = n, eo.current = null
}

function Wc(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (e = n.return, (n.flags & 32768) === 0) {
            if (t = T0(t, n, Se), t !== null) {
                Z = t;
                return
            }
        } else {
            if (t = L0(t, n), t !== null) {
                t.flags &= 32767, Z = t;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                q = 6, Z = null;
                return
            }
        }
        if (n = n.sibling, n !== null) {
            Z = n;
            return
        }
        Z = n = e
    } while (n !== null);
    q === 0 && (q = 5)
}

function Ln(e, n, t) {
    var r = U,
        l = Te.transition;
    try {
        Te.transition = null, U = 1, V0(e, n, t, r)
    } finally {
        Te.transition = l, U = r
    }
    return null
}

function V0(e, n, t, r) {
    do pt(); while (dn !== null);
    if ((I & 6) !== 0) throw Error(k(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(k(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (wp(e, u), e === ee && (Z = ee = null, te = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || Xr || (Xr = !0, jc(sl, function() {
            return pt(), null
        })), u = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || u) {
        u = Te.transition, Te.transition = null;
        var i = U;
        U = 1;
        var o = I;
        I |= 4, eo.current = null, M0(e, t), Oc(t, e), i0(Ju), cl = !!Zu, Ju = Zu = null, e.current = t, D0(t, e, l), fp(), I = o, U = i, Te.transition = u
    } else e.current = t;
    if (Xr && (Xr = !1, dn = e, Pl = l), u = e.pendingLanes, u === 0 && (gn = null), hp(t.stateNode, r), we(e, H()), n !== null)
        for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (xl) throw xl = !1, e = yi, yi = null, e;
    return (Pl & 1) !== 0 && e.tag !== 0 && pt(), u = e.pendingLanes, (u & 1) !== 0 ? e === gi ? qt++ : (qt = 0, gi = e) : qt = 0, xn(), null
}

function pt() {
    if (dn !== null) {
        var e = Sa(Pl),
            n = Te.transition,
            t = U;
        try {
            if (Te.transition = null, U = 16 > e ? 16 : e, dn === null) var r = !1;
            else {
                if (e = dn, dn = null, Pl = 0, (I & 6) !== 0) throw Error(k(331));
                var l = I;
                I |= 4;
                for (N = e.current; N !== null;) {
                    var u = N,
                        i = u.child;
                    if ((N.flags & 16) !== 0) {
                        var o = u.deletions;
                        if (o !== null) {
                            for (var s = 0; s < o.length; s++) {
                                var f = o[s];
                                for (N = f; N !== null;) {
                                    var h = N;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zt(8, h, u)
                                    }
                                    var p = h.child;
                                    if (p !== null) p.return = h, N = p;
                                    else
                                        for (; N !== null;) {
                                            h = N;
                                            var {
                                                sibling: v,
                                                return: S
                                            } = h;
                                            if (Mc(h), h === f) {
                                                N = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = S, N = v;
                                                break
                                            }
                                            N = S
                                        }
                                }
                            }
                            var E = u.alternate;
                            if (E !== null) {
                                var _ = E.child;
                                if (_ !== null) {
                                    E.child = null;
                                    do {
                                        var O = _.sibling;
                                        _.sibling = null, _ = O
                                    } while (_ !== null)
                                }
                            }
                            N = u
                        }
                    }
                    if ((u.subtreeFlags & 2064) !== 0 && i !== null) i.return = u, N = i;
                    else e: for (; N !== null;) {
                        if (u = N, (u.flags & 2048) !== 0) switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Zt(9, u, u.return)
                        }
                        var c = u.sibling;
                        if (c !== null) {
                            c.return = u.return, N = c;
                            break e
                        }
                        N = u.return
                    }
                }
                var a = e.current;
                for (N = a; N !== null;) {
                    i = N;
                    var d = i.child;
                    if ((i.subtreeFlags & 2064) !== 0 && d !== null) d.return = i, N = d;
                    else e: for (i = a; N !== null;) {
                        if (o = N, (o.flags & 2048) !== 0) try {
                            switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ul(9, o)
                            }
                        } catch (P) {
                            X(o, o.return, P)
                        }
                        if (o === i) {
                            N = null;
                            break e
                        }
                        var m = o.sibling;
                        if (m !== null) {
                            m.return = o.return, N = m;
                            break e
                        }
                        N = o.return
                    }
                }
                if (I = l, xn(), Ke && typeof Ke.onPostCommitFiberRoot === "function") try {
                    Ke.onPostCommitFiberRoot(Tl, e)
                } catch (P) {}
                r = !0
            }
            return r
        } finally {
            U = t, Te.transition = n
        }
    }
    return !1
}

function Xs(e, n, t) {
    n = kt(t, n), n = Sc(e, n, 1), e = yn(e, n, 1), n = pe(), e !== null && (mr(e, 1, n), we(e, n))
}

function X(e, n, t) {
    if (e.tag === 3) Xs(e, e, t);
    else
        for (; n !== null;) {
            if (n.tag === 3) {
                Xs(n, e, t);
                break
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (typeof n.type.getDerivedStateFromError === "function" || typeof r.componentDidCatch === "function" && (gn === null || !gn.has(r))) {
                    e = kt(t, e), e = Ec(n, e, 1), n = yn(n, e, 1), e = pe(), n !== null && (mr(n, 1, e), we(n, e));
                    break
                }
            }
            n = n.return
        }
}

function $0(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = pe(), e.pingedLanes |= e.suspendedLanes & t, ee === e && (te & t) === t && (q === 4 || q === 3 && (te & 130023424) === te && 500 > H() - to ? Fn(e, 0) : no |= t), we(e, n)
}

function Ac(e, n) {
    n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = Ur, Ur <<= 1, (Ur & 130023424) === 0 && (Ur = 4194304)));
    var t = pe();
    e = nn(e, n), e !== null && (mr(e, n, t), we(e, t))
}

function B0(e) {
    var n = e.memoizedState,
        t = 0;
    n !== null && (t = n.retryLane), Ac(e, t)
}

function W0(e, n) {
    var t = 0;
    switch (e.tag) {
        case 13:
            var {
                stateNode: r, memoizedState: l
            } = e;
            l !== null && (t = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314))
    }
    r !== null && r.delete(n), Ac(e, t)
}

function jc(e, n) {
    return ya(e, n)
}

function A0(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ze(e, n, t, r) {
    return new A0(e, n, t, r)
}

function io(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Q0(e) {
    if (typeof e === "function") return io(e) ? 1 : 0;
    if (e !== void 0 && e !== null) {
        if (e = e.$$typeof, e === xi) return 11;
        if (e === Pi) return 14
    }
    return 2
}

function wn(e, n) {
    var t = e.alternate;
    return t === null ? (t = ze(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
    }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t
}

function ll(e, n, t, r, l, u) {
    var i = 2;
    if (r = e, typeof e === "function") io(e) && (i = 1);
    else if (typeof e === "string") i = 5;
    else e: switch (e) {
        case Jn:
            return On(t.children, l, u, n);
        case Ci:
            i = 8, l |= 8;
            break;
        case zu:
            return e = ze(12, t, n, l | 2), e.elementType = zu, e.lanes = u, e;
        case Tu:
            return e = ze(13, t, n, l), e.elementType = Tu, e.lanes = u, e;
        case Lu:
            return e = ze(19, t, n, l), e.elementType = Lu, e.lanes = u, e;
        case ea:
            return $l(t, l, u, n);
        default:
            if (typeof e === "object" && e !== null) switch (e.$$typeof) {
                case qs:
                    i = 10;
                    break e;
                case bs:
                    i = 9;
                    break e;
                case xi:
                    i = 11;
                    break e;
                case Pi:
                    i = 14;
                    break e;
                case on:
                    i = 16, r = null;
                    break e
            }
            throw Error(k(130, e == null ? e : typeof e, ""))
    }
    return n = ze(i, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n
}

function On(e, n, t, r) {
    return e = ze(7, e, r, n), e.lanes = t, e
}

function $l(e, n, t, r) {
    return e = ze(22, e, r, n), e.elementType = ea, e.lanes = t, e.stateNode = {
        isHidden: !1
    }, e
}

function xu(e, n, t) {
    return e = ze(6, e, null, n), e.lanes = t, e
}

function Pu(e, n, t) {
    return n = ze(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, n
}

function j0(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = cu(0), this.expirationTimes = cu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cu(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function oo(e, n, t, r, l, u, i, o, s) {
    return e = new j0(e, n, t, o, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = ze(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, ji(u), e
}

function K0(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Zn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: n,
        implementation: t
    }
}

function Kc(e) {
    if (!e) return En;
    e = e._reactInternals;
    e: {
        if (An(e) !== e || e.tag !== 1) throw Error(k(170));
        var n = e;do {
            switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (ke(n.type)) {
                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            n = n.return
        } while (n !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var t = e.type;
        if (ke(t)) return Ka(e, t, n)
    }
    return n
}

function Yc(e, n, t, r, l, u, i, o, s) {
    return e = oo(t, r, !0, e, l, u, i, o, s), e.context = Kc(null), t = e.current, r = pe(), l = kn(t), u = qe(r, l), u.callback = n !== void 0 && n !== null ? n : null, yn(t, u, l), e.current.lanes = l, mr(e, l, r), we(e, r), e
}

function Bl(e, n, t, r) {
    var l = n.current,
        u = pe(),
        i = kn(l);
    return t = Kc(t), n.context === null ? n.context = t : n.pendingContext = t, n = qe(u, i), n.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = yn(l, n, i), e !== null && (Ve(e, l, i, u), qr(e, l, i)), i
}

function zl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Hs(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n
    }
}

function so(e, n) {
    Hs(e, n), (e = e.alternate) && Hs(e, n)
}

function Y0() {
    return null
}

function ao(e) {
    this._internalRoot = e
}

function Wl(e) {
    this._internalRoot = e
}

function co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Al(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Gs() {}

function X0(e, n, t, r, l) {
    if (l) {
        if (typeof r === "function") {
            var u = r;
            r = function() {
                var f = zl(i);
                u.call(f)
            }
        }
        var i = Yc(n, r, e, 0, null, !1, !1, "", Gs);
        return e._reactRootContainer = i, e[en] = i.current, or(e.nodeType === 8 ? e.parentNode : e), Bn(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r === "function") {
        var o = r;
        r = function() {
            var f = zl(s);
            o.call(f)
        }
    }
    var s = oo(e, 0, !1, null, null, !1, !1, "", Gs);
    return e._reactRootContainer = s, e[en] = s.current, or(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
        Bl(n, s, t, r)
    }), s
}

function Ql(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
        var i = u;
        if (typeof l === "function") {
            var o = l;
            l = function() {
                var s = zl(i);
                o.call(s)
            }
        }
        Bl(n, i, e, l)
    } else i = X0(t, n, e, l, r);
    return zl(i)
}
var Zs, Q, Js, bt, be, Nu, Zd, Yo, Xo, re, Si, rn, Dr, Zn, Jn, Ci, zu, qs, bs, xi, Tu, Lu, Pi, on, ea, Ho, Y, iu, ou = !1,
    Ut, Or, ia, jt, rp, lp, $u = null,
    Bu = null,
    at = null,
    ct = null,
    au = !1,
    Wu = !1,
    zn, Kt = !1,
    il = null,
    ol = !1,
    Au = null,
    ip, ya, ns, cp, fp, H, dp, zi, ga, sl, pp, ka, Tl = null,
    Ke = null,
    Ue, vp, mp, Ir = 64,
    Ur = 4194304,
    U = 0,
    Ea, Li, _a, Ca, xa, ju = !1,
    Vr, pn = null,
    hn = null,
    vn = null,
    tr, rr, an, Sp, ft, cl = !0,
    fl = null,
    fn = null,
    Mi = null,
    Gr = null,
    St, Di, yr, Pp, fu, du, Mt, Ll, us, Np, zp, Tp, pu, Lp, Rp, Mp, Dp, Fp, is, Op, Ip, Up, $p, Bp, Wp, os, Ap, Qp, jp, Kp, Yp, Xp, Hp, Oi, Yt = null,
    Gp, Ta, ss, as = !1,
    qn = !1,
    qp, Xt = null,
    ur = null,
    Da = !1,
    $t, Bt, Jr, $e, o0, bn = null,
    Yu = null,
    Ht = null,
    Xu = !1,
    et, hu, Ua, Va, $a, Ba, Wa, Aa, vs, At, Hu, Gu, Wt, Qt, s0, Wr, a0, c0, Zu = null,
    Ju = null,
    bu, f0, ks, d0, Et, je, ar, en, ei, h0, v0, ni, tt = -1,
    En, ce, ge, In, Ge = null,
    Fl = !1,
    gu = !1,
    rt, lt = 0,
    ml = null,
    yl = 0,
    Pe, Ne = 0,
    Un = null,
    Ze = 1,
    Je = "",
    _e = null,
    Ee = null,
    A = !1,
    Ie = null,
    y0, yt, Ja, gl, kl = null,
    ut = null,
    Bi = null,
    Mn = null,
    sn = !1,
    kr, Ye, cr, fr, j, ku, br, wu, Vn = 0,
    K = null,
    J = null,
    b = null,
    El = !1,
    Gt = !1,
    dr = 0,
    g0 = 0,
    _l, E0, _0, C0, Il, x0, P0, ye = !1,
    ci, Tc, di, Lc, Rc, Yr = !1,
    ae = !1,
    R0, N = null,
    Bs = !1,
    ne = null,
    Oe = !1,
    F0, Cl, eo, Te, I = 0,
    ee = null,
    Z = null,
    te = 0,
    Se = 0,
    ot, q = 0,
    vr = null,
    $n = 0,
    Vl = 0,
    no = 0,
    Jt = null,
    me = null,
    to = 0,
    wt = 1 / 0,
    He = null,
    xl = !1,
    yi = null,
    gn = null,
    Xr = !1,
    dn = null,
    Pl = 0,
    qt = 0,
    gi = null,
    tl = -1,
    rl = 0,
    Qc, Xc, H0, Ot, G0, Gn, Hc, Gc = function(e, n) {
        var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!co(n)) throw Error(k(200));
        return K0(e, n, null, t)
    },
    Zc = function(e, n) {
        if (!co(e)) throw Error(k(299));
        var t = !1,
            r = "",
            l = Xc;
        return n !== null && n !== void 0 && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = oo(e, 1, !1, null, null, t, !1, r, l), e[en] = n.current, or(e.nodeType === 8 ? e.parentNode : e), new ao(n)
    },
    Jc = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0) {
            if (typeof e.render === "function") throw Error(k(188));
            throw e = Object.keys(e).join(","), Error(k(268, e))
        }
        return e = va(n), e = e === null ? null : e.stateNode, e
    },
    qc = function(e) {
        return Bn(e)
    },
    bc = function(e, n, t) {
        if (!Al(n)) throw Error(k(200));
        return Ql(null, e, n, !0, t)
    },
    ef = function(e, n, t) {
        if (!co(e)) throw Error(k(405));
        var r = t != null && t.hydratedSources || null,
            l = !1,
            u = "",
            i = Xc;
        if (t !== null && t !== void 0 && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = Yc(n, null, e, 1, t != null ? t : null, l, !1, u, i), e[en] = n.current, or(e), r)
            for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(t, l);
        return new Wl(n)
    },
    nf = function(e, n, t) {
        if (!Al(n)) throw Error(k(200));
        return Ql(null, e, n, !1, t)
    },
    tf = function(e) {
        if (!Al(e)) throw Error(k(40));
        return e._reactRootContainer ? (Bn(function() {
            Ql(null, null, e, !1, function() {
                e._reactRootContainer = null, e[en] = null
            })
        }), !0) : !1
    },
    rf, lf = function(e, n, t, r) {
        if (!Al(t)) throw Error(k(200));
        if (e == null || e._reactInternals === void 0) throw Error(k(38));
        return Ql(e, n, t, !1, r)
    },
    uf = "18.3.1-next-f1338f8080-20240426";
var of = Rf(() => {
    Zs = Pn(xt(), 1), Q = Pn(Ko(), 1);
    Js = new Set, bt = {};
    be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nu = Object.prototype.hasOwnProperty, Zd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Yo = {}, Xo = {};
    re = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        re[e] = new he(e, 0, !1, e, null, !1, !1)
    });
    [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var n = e[0];
        re[n] = new he(n, 1, !1, e[1], null, !1, !1)
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        re[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1)
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        re[e] = new he(e, 2, !1, e, null, !1, !1)
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        re[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1)
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        re[e] = new he(e, 3, !0, e, null, !1, !1)
    });
    ["capture", "download"].forEach(function(e) {
        re[e] = new he(e, 4, !1, e, null, !1, !1)
    });
    ["cols", "rows", "size", "span"].forEach(function(e) {
        re[e] = new he(e, 6, !1, e, null, !1, !1)
    });
    ["rowSpan", "start"].forEach(function(e) {
        re[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    Si = /[\-:]([a-z])/g;
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var n = e.replace(Si, Ei);
        re[n] = new he(n, 1, !1, e, null, !1, !1)
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var n = e.replace(Si, Ei);
        re[n] = new he(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var n = e.replace(Si, Ei);
        re[n] = new he(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    });
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        re[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1)
    });
    re.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function(e) {
        re[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });
    rn = Zs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dr = Symbol.for("react.element"), Zn = Symbol.for("react.portal"), Jn = Symbol.for("react.fragment"), Ci = Symbol.for("react.strict_mode"), zu = Symbol.for("react.profiler"), qs = Symbol.for("react.provider"), bs = Symbol.for("react.context"), xi = Symbol.for("react.forward_ref"), Tu = Symbol.for("react.suspense"), Lu = Symbol.for("react.suspense_list"), Pi = Symbol.for("react.memo"), on = Symbol.for("react.lazy"), ea = Symbol.for("react.offscreen"), Ho = Symbol.iterator;
    Y = Object.assign;
    Ut = Array.isArray;
    ia = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(n, t, r, l)
            })
        } : e
    }(function(e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
        else {
            Or = Or || document.createElement("div"), Or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>";
            for (n = Or.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; n.firstChild;) e.appendChild(n.firstChild)
        }
    });
    jt = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, rp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(jt).forEach(function(e) {
        rp.forEach(function(n) {
            n = n + e.charAt(0).toUpperCase() + e.substring(1), jt[n] = jt[e]
        })
    });
    lp = Y({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    if (be) try {
        zn = {}, Object.defineProperty(zn, "passive", {
            get: function() {
                Wu = !0
            }
        }), window.addEventListener("test", zn, zn), window.removeEventListener("test", zn, zn)
    } catch (e) {
        Wu = !1
    }
    ip = {
        onError: function(e) {
            Kt = !0, il = e
        }
    };
    ya = Q.unstable_scheduleCallback, ns = Q.unstable_cancelCallback, cp = Q.unstable_shouldYield, fp = Q.unstable_requestPaint, H = Q.unstable_now, dp = Q.unstable_getCurrentPriorityLevel, zi = Q.unstable_ImmediatePriority, ga = Q.unstable_UserBlockingPriority, sl = Q.unstable_NormalPriority, pp = Q.unstable_LowPriority, ka = Q.unstable_IdlePriority;
    Ue = Math.clz32 ? Math.clz32 : yp, vp = Math.log, mp = Math.LN2;
    Vr = [], tr = new Map, rr = new Map, an = [], Sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    ft = rn.ReactCurrentBatchConfig;
    St = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Di = Ce(St), yr = Y({}, St, {
        view: 0,
        detail: 0
    }), Pp = Ce(yr), Ll = Y({}, yr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Fi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            if ("movementX" in e) return e.movementX;
            return e !== Mt && (Mt && e.type === "mousemove" ? (fu = e.screenX - Mt.screenX, du = e.screenY - Mt.screenY) : du = fu = 0, Mt = e), fu
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : du
        }
    }), us = Ce(Ll), Np = Y({}, Ll, {
        dataTransfer: 0
    }), zp = Ce(Np), Tp = Y({}, yr, {
        relatedTarget: 0
    }), pu = Ce(Tp), Lp = Y({}, St, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Rp = Ce(Lp), Mp = Y({}, St, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), Dp = Ce(Mp), Fp = Y({}, St, {
        data: 0
    }), is = Ce(Fp), Op = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Ip = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Up = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    $p = Y({}, yr, {
        key: function(e) {
            if (e.key) {
                var n = Op[e.key] || e.key;
                if (n !== "Unidentified") return n
            }
            return e.type === "keypress" ? (e = Zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ip[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Fi,
        charCode: function(e) {
            return e.type === "keypress" ? Zr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }), Bp = Ce($p), Wp = Y({}, Ll, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }), os = Ce(Wp), Ap = Y({}, yr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Fi
    }), Qp = Ce(Ap), jp = Y({}, St, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Kp = Ce(jp), Yp = Y({}, Ll, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : ("wheelDeltaX" in e) ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : ("wheelDeltaY" in e) ? -e.wheelDeltaY : ("wheelDelta" in e) ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }), Xp = Ce(Yp), Hp = [9, 13, 27, 32], Oi = be && "CompositionEvent" in window;
    be && "documentMode" in document && (Yt = document.documentMode);
    Gp = be && "TextEvent" in window && !Yt, Ta = be && (!Oi || Yt && 8 < Yt && 11 >= Yt), ss = String.fromCharCode(32);
    qp = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    if (be) {
        if (be) {
            if (Bt = "oninput" in document, !Bt) Jr = document.createElement("div"), Jr.setAttribute("oninput", "return;"), Bt = typeof Jr.oninput === "function";
            $t = Bt
        } else $t = !1;
        Da = $t && (!document.documentMode || 9 < document.documentMode)
    }
    $e = typeof Object.is === "function" ? Object.is : u0;
    o0 = be && "documentMode" in document && 11 >= document.documentMode;
    et = {
        animationend: Br("Animation", "AnimationEnd"),
        animationiteration: Br("Animation", "AnimationIteration"),
        animationstart: Br("Animation", "AnimationStart"),
        transitionend: Br("Transition", "TransitionEnd")
    }, hu = {}, Ua = {};
    be && (Ua = document.createElement("div").style, ("AnimationEvent" in window) || (delete et.animationend.animation, delete et.animationiteration.animation, delete et.animationstart.animation), ("TransitionEvent" in window) || delete et.transitionend.transition);
    Va = Ml("animationend"), $a = Ml("animationiteration"), Ba = Ml("animationstart"), Wa = Ml("transitionend"), Aa = new Map, vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    for (Wt = 0; Wt < vs.length; Wt++) At = vs[Wt], Hu = At.toLowerCase(), Gu = At[0].toUpperCase() + At.slice(1), _n(Hu, "on" + Gu);
    _n(Va, "onAnimationEnd");
    _n($a, "onAnimationIteration");
    _n(Ba, "onAnimationStart");
    _n("dblclick", "onDoubleClick");
    _n("focusin", "onFocus");
    _n("focusout", "onBlur");
    _n(Wa, "onTransitionEnd");
    ht("onMouseEnter", ["mouseout", "mouseover"]);
    ht("onMouseLeave", ["mouseout", "mouseover"]);
    ht("onPointerEnter", ["pointerout", "pointerover"]);
    ht("onPointerLeave", ["pointerout", "pointerover"]);
    Wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    Qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), s0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qt));
    Wr = "_reactListening" + Math.random().toString(36).slice(2);
    a0 = /\r\n?/g, c0 = /\u0000|\uFFFD/g;
    bu = typeof setTimeout === "function" ? setTimeout : void 0, f0 = typeof clearTimeout === "function" ? clearTimeout : void 0, ks = typeof Promise === "function" ? Promise : void 0, d0 = typeof queueMicrotask === "function" ? queueMicrotask : typeof ks < "u" ? function(e) {
        return ks.resolve(null).then(e).catch(p0)
    } : bu;
    Et = Math.random().toString(36).slice(2), je = "__reactFiber$" + Et, ar = "__reactProps$" + Et, en = "__reactContainer$" + Et, ei = "__reactEvents$" + Et, h0 = "__reactListeners$" + Et, v0 = "__reactHandles$" + Et;
    ni = [];
    En = {}, ce = Cn(En), ge = Cn(!1), In = En;
    rt = [], Pe = [];
    y0 = rn.ReactCurrentBatchConfig;
    yt = Za(!0), Ja = Za(!1), gl = Cn(null);
    kr = {}, Ye = Cn(kr), cr = Cn(kr), fr = Cn(kr);
    j = Cn(0);
    ku = [];
    br = rn.ReactCurrentDispatcher, wu = rn.ReactCurrentBatchConfig;
    _l = {
        readContext: Le,
        useCallback: oe,
        useContext: oe,
        useEffect: oe,
        useImperativeHandle: oe,
        useInsertionEffect: oe,
        useLayoutEffect: oe,
        useMemo: oe,
        useReducer: oe,
        useRef: oe,
        useState: oe,
        useDebugValue: oe,
        useDeferredValue: oe,
        useTransition: oe,
        useMutableSource: oe,
        useSyncExternalStore: oe,
        useId: oe,
        unstable_isNewReconciler: !1
    }, E0 = {
        readContext: Le,
        useCallback: function(e, n) {
            return Qe().memoizedState = [e, n === void 0 ? null : n], e
        },
        useContext: Le,
        useEffect: Ts,
        useImperativeHandle: function(e, n, t) {
            return t = t !== null && t !== void 0 ? t.concat([e]) : null, el(4194308, 4, fc.bind(null, n, e), t)
        },
        useLayoutEffect: function(e, n) {
            return el(4194308, 4, e, n)
        },
        useInsertionEffect: function(e, n) {
            return el(4, 2, e, n)
        },
        useMemo: function(e, n) {
            var t = Qe();
            return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e
        },
        useReducer: function(e, n, t) {
            var r = Qe();
            return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, r.queue = e, e = e.dispatch = w0.bind(null, K, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var n = Qe();
            return e = {
                current: e
            }, n.memoizedState = e
        },
        useState: zs,
        useDebugValue: qi,
        useDeferredValue: function(e) {
            return Qe().memoizedState = e
        },
        useTransition: function() {
            var e = zs(!1),
                n = e[0];
            return e = k0.bind(null, e[1]), Qe().memoizedState = e, [n, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, n, t) {
            var r = K,
                l = Qe();
            if (A) {
                if (t === void 0) throw Error(k(407));
                t = t()
            } else {
                if (t = n(), ee === null) throw Error(k(349));
                (Vn & 30) !== 0 || rc(r, n, t)
            }
            l.memoizedState = t;
            var u = {
                value: t,
                getSnapshot: n
            };
            return l.queue = u, Ts(uc.bind(null, r, u, e), [e]), r.flags |= 2048, hr(9, lc.bind(null, r, u, t, n), void 0, null), t
        },
        useId: function() {
            var e = Qe(),
                n = ee.identifierPrefix;
            if (A) {
                var t = Je,
                    r = Ze;
                t = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = dr++, 0 < t && (n += "H" + t.toString(32)), n += ":"
            } else t = g0++, n = ":" + n + "r" + t.toString(32) + ":";
            return e.memoizedState = n
        },
        unstable_isNewReconciler: !1
    }, _0 = {
        readContext: Le,
        useCallback: pc,
        useContext: Le,
        useEffect: Ji,
        useImperativeHandle: dc,
        useInsertionEffect: ac,
        useLayoutEffect: cc,
        useMemo: hc,
        useReducer: Su,
        useRef: sc,
        useState: function() {
            return Su(pr)
        },
        useDebugValue: qi,
        useDeferredValue: function(e) {
            var n = Re();
            return vc(n, J.memoizedState, e)
        },
        useTransition: function() {
            var e = Su(pr)[0],
                n = Re().memoizedState;
            return [e, n]
        },
        useMutableSource: nc,
        useSyncExternalStore: tc,
        useId: mc,
        unstable_isNewReconciler: !1
    }, C0 = {
        readContext: Le,
        useCallback: pc,
        useContext: Le,
        useEffect: Ji,
        useImperativeHandle: dc,
        useInsertionEffect: ac,
        useLayoutEffect: cc,
        useMemo: hc,
        useReducer: Eu,
        useRef: sc,
        useState: function() {
            return Eu(pr)
        },
        useDebugValue: qi,
        useDeferredValue: function(e) {
            var n = Re();
            return J === null ? n.memoizedState = e : vc(n, J.memoizedState, e)
        },
        useTransition: function() {
            var e = Eu(pr)[0],
                n = Re().memoizedState;
            return [e, n]
        },
        useMutableSource: nc,
        useSyncExternalStore: tc,
        useId: mc,
        unstable_isNewReconciler: !1
    };
    Il = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? An(e) === e : !1
        },
        enqueueSetState: function(e, n, t) {
            e = e._reactInternals;
            var r = pe(),
                l = kn(e),
                u = qe(r, l);
            u.payload = n, t !== void 0 && t !== null && (u.callback = t), n = yn(e, u, l), n !== null && (Ve(n, e, l, r), qr(n, e, l))
        },
        enqueueReplaceState: function(e, n, t) {
            e = e._reactInternals;
            var r = pe(),
                l = kn(e),
                u = qe(r, l);
            u.tag = 1, u.payload = n, t !== void 0 && t !== null && (u.callback = t), n = yn(e, u, l), n !== null && (Ve(n, e, l, r), qr(n, e, l))
        },
        enqueueForceUpdate: function(e, n) {
            e = e._reactInternals;
            var t = pe(),
                r = kn(e),
                l = qe(t, r);
            l.tag = 2, n !== void 0 && n !== null && (l.callback = n), n = yn(e, l, r), n !== null && (Ve(n, e, r, t), qr(n, e, r))
        }
    };
    x0 = typeof WeakMap === "function" ? WeakMap : Map;
    P0 = rn.ReactCurrentOwner;
    ci = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    Tc = function(e, n) {
        for (var t = n.child; t !== null;) {
            if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
            else if (t.tag !== 4 && t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === n) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === n) return;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    };
    di = function() {};
    Lc = function(e, n, t, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = n.stateNode, Dn(Ye.current);
            var u = null;
            switch (t) {
                case "input":
                    l = Mu(e, l), r = Mu(e, r), u = [];
                    break;
                case "select":
                    l = Y({}, l, {
                        value: void 0
                    }), r = Y({}, r, {
                        value: void 0
                    }), u = [];
                    break;
                case "textarea":
                    l = Ou(e, l), r = Ou(e, r), u = [];
                    break;
                default:
                    typeof l.onClick !== "function" && typeof r.onClick === "function" && (e.onclick = pl)
            }
            Uu(t, r);
            var i;
            t = null;
            for (f in l)
                if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
                    if (f === "style") {
                        var o = l[f];
                        for (i in o) o.hasOwnProperty(i) && (t || (t = {}), t[i] = "")
                    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (bt.hasOwnProperty(f) ? u || (u = []) : (u = u || []).push(f, null));
            for (f in r) {
                var s = r[f];
                if (o = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== o && (s != null || o != null))
                    if (f === "style")
                        if (o) {
                            for (i in o) !o.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
                            for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (t || (t = {}), t[i] = s[i])
                        } else t || (u || (u = []), u.push(f, t)), t = s;
                else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (u = u || []).push(f, s)) : f === "children" ? typeof s !== "string" && typeof s !== "number" || (u = u || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (bt.hasOwnProperty(f) ? (s != null && f === "onScroll" && B("scroll", e), u || o === s || (u = [])) : (u = u || []).push(f, s))
            }
            t && (u = u || []).push("style", t);
            var f = u;
            if (n.updateQueue = f) n.flags |= 4
        }
    };
    Rc = function(e, n, t, r) {
        t !== r && (n.flags |= 4)
    };
    R0 = typeof WeakSet === "function" ? WeakSet : Set;
    F0 = Math.ceil, Cl = rn.ReactCurrentDispatcher, eo = rn.ReactCurrentOwner, Te = rn.ReactCurrentBatchConfig, ot = Cn(0);
    Qc = function(e, n, t) {
        if (e !== null)
            if (e.memoizedProps !== n.pendingProps || ge.current) ye = !0;
            else {
                if ((e.lanes & t) === 0 && (n.flags & 128) === 0) return ye = !1, z0(e, n, t);
                ye = (e.flags & 131072) !== 0 ? !0 : !1
            }
        else ye = !1, A && (n.flags & 1048576) !== 0 && Xa(n, yl, n.index);
        switch (n.lanes = 0, n.tag) {
            case 2:
                var r = n.type;
                nl(e, n), e = n.pendingProps;
                var l = vt(n, ce.current);
                dt(n, t), l = Gi(null, n, r, e, l, t);
                var u = Zi();
                return n.flags |= 1, typeof l === "object" && l !== null && typeof l.render === "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ke(r) ? (u = !0, vl(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(n), l.updater = Il, n.stateNode = l, l._reactInternals = n, ii(n, r, e, t), n = ai(null, n, r, !0, u, t)) : (n.tag = 0, A && u && Ui(n), de(null, n, l, t), n = n.child), n;
            case 16:
                r = n.elementType;
                e: {
                    switch (nl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Q0(r), e = Fe(r, e), l) {
                        case 0:
                            n = si(null, n, r, e, t);
                            break e;
                        case 1:
                            n = Us(null, n, r, e, t);
                            break e;
                        case 11:
                            n = Os(null, n, r, e, t);
                            break e;
                        case 14:
                            n = Is(null, n, r, Fe(r.type, e), t);
                            break e
                    }
                    throw Error(k(306, r, ""))
                }
                return n;
            case 0:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Fe(r, l), si(e, n, r, l, t);
            case 1:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Fe(r, l), Us(e, n, r, l, t);
            case 3:
                e: {
                    if (Pc(n), e === null) throw Error(k(387));r = n.pendingProps,
                    u = n.memoizedState,
                    l = u.element,
                    ba(e, n),
                    wl(n, r, null, t);
                    var i = n.memoizedState;
                    if (r = i.element, u.isDehydrated)
                        if (u = {
                                element: r,
                                isDehydrated: !1,
                                cache: i.cache,
                                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                transitions: i.transitions
                            }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
                            l = kt(Error(k(423)), n), n = Vs(e, n, r, t, l);
                            break e
                        } else if (r !== l) {
                        l = kt(Error(k(424)), n), n = Vs(e, n, r, t, l);
                        break e
                    } else
                        for (Ee = mn(n.stateNode.containerInfo.firstChild), _e = n, A = !0, Ie = null, t = Ja(n, null, r, t), n.child = t; t;) t.flags = t.flags & -3 | 4096, t = t.sibling;
                    else {
                        if (mt(), r === l) {
                            n = tn(e, n, t);
                            break e
                        }
                        de(e, n, r, t)
                    }
                    n = n.child
                }
                return n;
            case 5:
                return ec(n), e === null && ri(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, i = l.children, qu(r, l) ? i = null : u !== null && qu(r, u) && (n.flags |= 32), xc(e, n), de(e, n, i, t), n.child;
            case 6:
                return e === null && ri(n), null;
            case 13:
                return Nc(e, n, t);
            case 4:
                return Ki(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = yt(n, null, r, t) : de(e, n, r, t), n.child;
            case 11:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Fe(r, l), Os(e, n, r, l, t);
            case 7:
                return de(e, n, n.pendingProps, t), n.child;
            case 8:
                return de(e, n, n.pendingProps.children, t), n.child;
            case 12:
                return de(e, n, n.pendingProps.children, t), n.child;
            case 10:
                e: {
                    if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, i = l.value, $(gl, r._currentValue), r._currentValue = i, u !== null)
                        if ($e(u.value, i)) {
                            if (u.children === l.children && !ge.current) {
                                n = tn(e, n, t);
                                break e
                            }
                        } else
                            for (u = n.child, u !== null && (u.return = n); u !== null;) {
                                var o = u.dependencies;
                                if (o !== null) {
                                    i = u.child;
                                    for (var s = o.firstContext; s !== null;) {
                                        if (s.context === r) {
                                            if (u.tag === 1) {
                                                s = qe(-1, t & -t), s.tag = 2;
                                                var f = u.updateQueue;
                                                if (f !== null) {
                                                    f = f.shared;
                                                    var h = f.pending;
                                                    h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s
                                                }
                                            }
                                            u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), li(u.return, t, n), o.lanes |= t;
                                            break
                                        }
                                        s = s.next
                                    }
                                } else if (u.tag === 10) i = u.type === n.type ? null : u.child;
                                else if (u.tag === 18) {
                                    if (i = u.return, i === null) throw Error(k(341));
                                    i.lanes |= t, o = i.alternate, o !== null && (o.lanes |= t), li(i, t, n), i = u.sibling
                                } else i = u.child;
                                if (i !== null) i.return = u;
                                else
                                    for (i = u; i !== null;) {
                                        if (i === n) {
                                            i = null;
                                            break
                                        }
                                        if (u = i.sibling, u !== null) {
                                            u.return = i.return, i = u;
                                            break
                                        }
                                        i = i.return
                                    }
                                u = i
                            }
                    de(e, n, l.children, t),
                    n = n.child
                }
                return n;
            case 9:
                return l = n.type, r = n.pendingProps.children, dt(n, t), l = Le(l), r = r(l), n.flags |= 1, de(e, n, r, t), n.child;
            case 14:
                return r = n.type, l = Fe(r, n.pendingProps), l = Fe(r.type, l), Is(e, n, r, l, t);
            case 15:
                return _c(e, n, n.type, n.pendingProps, t);
            case 17:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Fe(r, l), nl(e, n), n.tag = 1, ke(r) ? (e = !0, vl(n)) : e = !1, dt(n, t), wc(n, r, l), ii(n, r, l, t), ai(null, n, r, !0, e, t);
            case 19:
                return zc(e, n, t);
            case 22:
                return Cc(e, n, t)
        }
        throw Error(k(156, n.tag))
    };
    Xc = typeof reportError === "function" ? reportError : function(e) {
        console.error(e)
    };
    Wl.prototype.render = ao.prototype.render = function(e) {
        var n = this._internalRoot;
        if (n === null) throw Error(k(409));
        Bl(e, n, null, null)
    };
    Wl.prototype.unmount = ao.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var n = e.containerInfo;
            Bn(function() {
                Bl(null, e, null, null)
            }), n[en] = null
        }
    };
    Wl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var n = Ca();
            e = {
                blockedOn: null,
                target: e,
                priority: n
            };
            for (var t = 0; t < an.length && n !== 0 && n < an[t].priority; t++);
            an.splice(t, 0, e), t === 0 && Pa(e)
        }
    };
    Ea = function(e) {
        switch (e.tag) {
            case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                    var t = Vt(n.pendingLanes);
                    t !== 0 && (Ti(n, t | 1), we(n, H()), (I & 6) === 0 && (wt = H() + 500, xn()))
                }
                break;
            case 13:
                Bn(function() {
                    var r = nn(e, 1);
                    if (r !== null) {
                        var l = pe();
                        Ve(r, e, 1, l)
                    }
                }), so(e, 1)
        }
    };
    Li = function(e) {
        if (e.tag === 13) {
            var n = nn(e, 134217728);
            if (n !== null) {
                var t = pe();
                Ve(n, e, 134217728, t)
            }
            so(e, 134217728)
        }
    };
    _a = function(e) {
        if (e.tag === 13) {
            var n = kn(e),
                t = nn(e, n);
            if (t !== null) {
                var r = pe();
                Ve(t, e, n, r)
            }
            so(e, n)
        }
    };
    Ca = function() {
        return U
    };
    xa = function(e, n) {
        var t = U;
        try {
            return U = e, n()
        } finally {
            U = t
        }
    };
    Bu = function(e, n, t) {
        switch (n) {
            case "input":
                if (Du(e, t), n = t.name, t.type === "radio" && n != null) {
                    for (t = e; t.parentNode;) t = t.parentNode;
                    t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]');
                    for (n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (r !== e && r.form === e.form) {
                            var l = Dl(r);
                            if (!l) throw Error(k(90));
                            ta(r), Du(r, l)
                        }
                    }
                }
                break;
            case "textarea":
                la(e, t);
                break;
            case "select":
                n = t.value, n != null && st(e, !!t.multiple, n, !1)
        }
    };
    fa = ro;
    da = Bn;
    H0 = {
        usingClientEntryPoint: !1,
        Events: [gr, nt, Dl, aa, ca, ro]
    }, Ot = {
        findFiberByHostInstance: Rn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, G0 = {
        bundleType: Ot.bundleType,
        version: Ot.version,
        rendererPackageName: Ot.rendererPackageName,
        rendererConfig: Ot.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: rn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = va(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Ot.findFiberByHostInstance || Y0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        if (Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Gn.isDisabled && Gn.supportsFiber) try {
            Tl = Gn.inject(G0), Ke = Gn
        } catch (e) {}
    }
    Hc = H0, rf = ro
});
var cf = Er((ih, af) => {
    of();

    function sf() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf)
        } catch (e) {
            console.error(e)
        }
    }
    sf(), af.exports = fo
});
var ff = Er((J0) => {
    var wr = Pn(cf(), 1);
    J0.createRoot = wr.createRoot, J0.hydrateRoot = wr.hydrateRoot;
    var Z0
});
var vf = Pn(xt(), 1),
    mf = Pn(ff(), 1);
var hf = Pn(xt(), 1);
var df = Pn(xt(), 1),
    q0 = Symbol.for("react.element");
var b0 = Object.prototype.hasOwnProperty,
    eh = df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    nh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function pf(e, n, t) {
    var r, l = {},
        u = null,
        i = null;
    t !== void 0 && (u = "" + t), n.key !== void 0 && (u = "" + n.key), n.ref !== void 0 && (i = n.ref);
    for (r in n) b0.call(n, r) && !nh.hasOwnProperty(r) && (l[r] = n[r]);
    if (e && e.defaultProps)
        for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
    return {
        $$typeof: q0,
        type: e,
        key: u,
        ref: i,
        props: l,
        _owner: eh.current
    }
}
var D = pf,
    le = pf;

function po() {
    return hf.useEffect(() => {
        let e = console.error;
        console.error = (...r) => {
            let l = r.join(" ");
            if (l.includes("ERR_NAME_NOT_RESOLVED") || l.includes("peerjs") || l.includes("qrserver")) return;
            e.apply(console, r)
        }, window.addEventListener("error", (r) => {
            let l = r?.target?.src || "";
            if (typeof l === "string" && (l.includes("peerjs") || l.includes("qrserver"))) r.preventDefault(), r.stopPropagation()
        }, !0);
        let n = () => new Promise((r) => {
            if (typeof window.Peer < "u") return r();
            let l = typeof location < "u" && location.protocol === "file:",
                u = typeof navigator < "u" && navigator.onLine === !1;
            if (l || u) return r();
            try {
                let i = document.createElement("script");
                i.src = "https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js", i.onload = () => r(), i.onerror = () => r(), document.head.appendChild(i)
            } catch {
                r()
            }
        });
        (() => {
            let l = () => {
                    let y = "";
                    for (let g = 0; g < 4; g++) y += "ABCDEFGHJKLMNPQRSTUVWXYZ" [Math.floor(Math.random() * 24)];
                    return y
                },
                u = (y) => "aksara-sprint-" + y.toLowerCase().trim(),
                i = (y) => y.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                o = (y) => {
                    let g = [...y];
                    for (let w = g.length - 1; w > 0; w--) {
                        let C = Math.floor(Math.random() * (w + 1));
                        [g[w], g[C]] = [g[C], g[w]]
                    }
                    return g
                },
                s = null,
                f = null,
                h = {},
                p = {},
                v = "",
                S = null,
                E = "LOBBY",
                _ = [],
                O = 0,
                c = null,
                a = 90,
                d = null,
                m = {},
                P = "JOIN_FORM",
                T = "",
                M = "",
                L = null,
                G = 0,
                F = 0,
                ve = null,
                Be = 0,
                Qn = 0,
                yf = [];

                // === LOAD SOAL DARI soal.json (dipisah) ===
                async function loadSoalFromJson() {
                    try {
                        let res = await fetch('./soal.json');
                        if (!res.ok) throw new Error('HTTP '+res.status);
                        let data = await res.json();
                        yf = data;
                        console.log('✅ soal.json loaded:', yf.length, 'soal');
                        // render ulang level checkboxes setelah load
                        if (typeof ho === 'function') ho();
                    } catch (err) {
                        console.error('Gagal load soal.json, pakai fallback kosong', err);
                        // fallback: tetap pakai array kosong, nanti tampil alert
                    }
                }
                loadSoalFromJson();
                // === END LOAD ===

                ;

            function _t(y) {
                document.querySelectorAll(".view").forEach((w) => w.classList.remove("active"));
                let g = document.getElementById(y);
                if (g) g.classList.add("active")
            }

            function ho() {
                let y = document.getElementById("levelCheckboxes");
                if (!y) return;
                y.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8].map((g) => `<label class="level-cb"><input type="checkbox" value="${g}" checked> <span>Lv ${g}</span></label>`).join("")
            }

            function Xe() {
                let y = document.getElementById("hostPlayerList");
                if (!y) return;
                let g = Object.values(p);
                if (g.length === 0) y.innerHTML = '<div class="empty-state">Belum ada siswa bergabung.<br>Bagikan kode di atas.</div>';
                else y.innerHTML = g.map((z) => {
                    let x = m[z.id],
                        R = E === "RACING" ? x ? x.correct ? "✅" : "⏳ retry" : "✍️ mengerjakan..." : "● menunggu";
                    return `<div class="player-row"><span class="p-dot ${x?x.correct?"ok":"retry":""}"></span><span class="p-name">${i(z.name)}</span><span class="p-status">${R}</span><span class="p-score">${z.total} poin</span><span class="p-id">${i(z.id.slice(-4))}</span></div>`
                }).join("");
                let w = document.getElementById("hostCount");
                if (w) w.textContent = `${g.length} siswa terhubung`;
                let C = document.getElementById("btnStartGame");
                if (C) C.disabled = g.length === 0 || E !== "LOBBY"
            }

            function jn(y) {
                Object.values(h).forEach((g) => {
                    try {
                        g.send(y)
                    } catch {}
                })
            }

            function vo(y) {
                let g = document.getElementById("hostCountdownOverlay"),
                    w = document.getElementById("hostGameArea");
                if (!g || !w) return;
                if (w.style.display = "block", g.style.display = "flex", y > 0) g.innerHTML = `<div class="cd-big">${y}</div><div class="cd-sub">Siap-siap...</div>`;
                else g.innerHTML = '<div class="cd-big go">GO!</div><div class="cd-sub">Mulai!</div>'
            }

            function gf() {
                E = "COUNTDOWN";
                let y = 3;
                vo(y), jn({
                    type: "countdown",
                    n: y
                }), Xe();
                let g = document.getElementById("hostLobbyControls");
                if (g) g.style.display = "none";
                d = setInterval(() => {
                    if (y -= 1, y >= 0) vo(y), jn({
                        type: "countdown",
                        n: y
                    });
                    if (y < 0) {
                        clearInterval(d);
                        let w = document.getElementById("hostCountdownOverlay");
                        if (w) w.style.display = "none";
                        mo(0)
                    }
                }, 1000)
            }

            function mo(y) {
                if (y >= _.length) {
                    go();
                    return
                }
                E = "RACING", O = y, m = {}, a = 90;
                let g = _[y],
                    w = document.getElementById("hostGameArea"),
                    C = document.getElementById("hostNextWrap");
                if (C) C.style.display = "none";
                if (w) w.style.display = "block";
                if (kf(g, y, _.length), Xe(), jn({
                        type: "question",
                        index: y,
                        soal: g,
                        total: _.length
                    }), c) clearInterval(c);
                c = setInterval(() => {
                    a -= 1;
                    let z = document.getElementById("hostTimer");
                    if (z) z.textContent = `${a}s`;
                    if (a <= 0) clearInterval(c), yo()
                }, 1000)
            }

            function kf(y, g, w) {
                let C = document.getElementById("hostGameArea");
                if (!C) return;
                C.innerHTML = `<div id="hostCountdownOverlay" class="countdown-overlay" style="display:none"></div><div class="hq-head"><span class="badge-lv">Level ${y.level}</span><span class="q-progress">Soal ${g+1}/${w}</span><span id="hostTimer" class="timer">90s</span></div><div class="q-latin">${i(y.q)}</div><div class="q-meta"><span class="ans-key">Kunci: ${i(y.a)}</span></div><div class="progress-track"><div class="progress-label">Jawaban masuk: <span id="hostAnsweredCount">0</span> / ${Object.keys(p).length}</div><div class="progress-bar"><div id="hostProgressFill" class="fill" style="width:0%"></div></div></div><div id="hostLiveLog" class="live-log"></div>`
            }

            function wf(y, g) {
                if (E !== "RACING") return;
                let w = Date.now();
                if (m[y] = {
                        correct: !!g.correct,
                        points: g.points || 0,
                        attempts: g.attempts || 1,
                        submittedAt: w
                    }, p[y]) p[y].total += g.points || 0, p[y].answered = !0;
                let C = document.getElementById("hostLiveLog");
                if (C) {
                    let V = document.createElement("div");
                    V.className = "log-line " + (g.correct ? "ok" : "retry"), V.innerHTML = `<b>${i(p[y]?.name||y)}</b> ${g.correct?"✅ benar":"❌ coba lagi"} — ${g.points||0} poin (percobaan ${g.attempts})`, C.prepend(V)
                }
                let z = document.getElementById("hostAnsweredCount");
                if (z) z.textContent = String(Object.keys(m).filter((V) => m[V].correct).length);
                let x = document.getElementById("hostProgressFill");
                if (x) {
                    let V = Math.max(1, Object.keys(p).length),
                        ue = Object.keys(m).filter((Kn) => m[Kn].correct).length;
                    x.style.width = `${ue/V*100}%`
                }
                if (Xe(), Object.keys(p).every((V) => m[V]?.correct) && Object.keys(p).length > 0) setTimeout(() => yo(), 600)
            }

            function yo() {
                if (c) clearInterval(c);
                E = "QUESTION_RESULT";
                let y = Object.entries(m).filter(([, C]) => C.correct).sort((C, z) => C[1].submittedAt - z[1].submittedAt).map(([C, z], x) => ({
                        peerId: C,
                        name: p[C]?.name || C,
                        points: z.points,
                        rank: x + 1
                    })),
                    g = document.getElementById("hostGameArea");
                if (g) {
                    let C = _[O];
                    g.innerHTML += `<div class="result-card"><div class="result-title">Podium Soal ${O+1}: ${i(C.a)}</div>${y.length===0?'<div class="empty-state">Belum ada yang benar — lanjut.</div>':y.slice(0,3).map((z)=>`<div class="podium-row r${z.rank}"><span class="medal">${z.rank===1?"\uD83E\uDD47":z.rank===2?"\uD83E\uDD48":"\uD83E\uDD49"}</span><span class="p-name">${i(z.name)}</span><span class="p-score">+${z.points}</span></div>`).join("")}<div class="all-ranking">${Object.values(p).map((z)=>{let x=m[z.id];return`<div class="rank-line"><span>${i(z.name)}</span><span>${x?x.correct?"✅ "+x.points:"⏳ belum":"—"}</span></div>`}).join("")}</div></div>`
                }
                let w = document.getElementById("hostNextWrap");
                if (w) {
                    w.style.display = "block";
                    let C = document.getElementById("btnNextQuestion");
                    if (C) C.textContent = O + 1 >= _.length ? "Lihat Klasemen Akhir \uD83C\uDFC6" : "Soal Berikutnya →"
                }
                jn({
                    type: "questionResult",
                    index: O,
                    ranking: y,
                    correct: _[O]?.a
                })
            }

            function go() {
                if (E = "FINAL", c) clearInterval(c);
                let y = document.getElementById("hostFinal"),
                    g = document.getElementById("hostGameArea");
                if (g) g.style.display = "none";
                if (y) y.style.display = "block";
                let w = Object.values(p).sort((C, z) => z.total - C.total);
                if (y) {
                    y.innerHTML = `<div class="final-card"><div class="final-title">\uD83C\uDFC6 Klasemen Akhir</div><div class="final-sub">${_.length} soal • ${Object.keys(p).length} siswa</div><div class="final-list">${w.map((z,x)=>`<div class="final-row ${x<3?"top"+(x+1):""}"><span class="rank">#${x+1}</span><span class="medal">${x===0?"\uD83E\uDD47":x===1?"\uD83E\uDD48":x===2?"\uD83E\uDD49":" "}</span><span class="name">${i(z.name)}</span><span class="score">${z.total} poin</span></div>`).join("")}</div><button id="btnRestartHost" class="accent" style="margin-top:16px">Main Lagi \uD83D\uDD04</button></div>`;
                    let C = document.getElementById("btnRestartHost");
                    if (C) C.addEventListener("click", () => {
                        y.style.display = "none";
                        let z = document.getElementById("hostLobbyControls");
                        if (z) z.style.display = "block";
                        E = "LOBBY", _ = [], O = 0, m = {}, Object.values(p).forEach((R) => {
                            R.total = 0, R.answered = !1
                        });
                        let x = document.getElementById("hostGameArea");
                        if (x) x.style.display = "none", x.innerHTML = '<div id="hostCountdownOverlay" class="countdown-overlay" style="display:none"></div>';
                        Xe()
                    })
                }
                jn({
                    type: "final",
                    ranking: w.map((C) => ({
                        name: C.name,
                        total: C.total
                    }))
                })
            }

            function Sf(y, g) {
                let w = document.getElementById("playerLobbyWaiting"),
                    C = document.getElementById("playerForm");
                if (C) C.style.display = "none";
                if (w) w.style.display = "block", w.innerHTML = `<div class="waiting-card"><div class="waiting-badge">✅ Terhubung</div><div class="waiting-room">Room <b>${i(y)}</b></div><div class="waiting-name">Halo, <b>${i(g)}</b>!</div><div class="waiting-msg">Berhasil join. Menunggu guru memulai game<span class="dots"><span>.</span><span>.</span><span>.</span></span></div><div class="waiting-info">Jangan tutup tab. Soal akan muncul otomatis setelah guru tekan <b>Mulai Game</b>.</div><div class="lobby-players" id="lobbyPlayersInfo"></div></div>`;
                P = "LOBBY_MENUNGGU"
            }

            function Ef(y) {
                let g = document.getElementById("playerCountdown"),
                    w = document.getElementById("playerLobbyWaiting");
                if (w) w.style.display = "none";
                if (!g) return;
                if (g.style.display = "flex", P = "COUNTDOWN", y > 0) g.innerHTML = `<div class="cd-big">${y}</div><div class="cd-sub">Siap-siap...</div>`;
                else g.innerHTML = '<div class="cd-big go">GO!</div><div class="cd-sub">Mulai!</div>'
            }

            function _f(y, g, w) {
                let C = document.getElementById("playerCountdown"),
                    z = document.getElementById("playerLobbyWaiting");
                if (C) C.style.display = "none";
                if (z) z.style.display = "none";
                let x = document.getElementById("playerGameArea");
                if (!x) return;
                x.style.display = "block", P = "RACING", L = y, F = g, G = w, ve = null, Be = 0, x.innerHTML = `<div class="pq-head"><span class="badge-lv">Level ${y.level}</span><span class="q-progress">Soal ${g+1}/${w}</span><span class="my-score">⭐ ${Qn}</span></div><div class="q-latin">${i(y.q)}</div><div class="tulis-label">Pilih jawaban, lalu tekan SUBMIT:</div><div class="opts" id="optsGrid">${y.opts.map((ue)=>`<button class="opt-btn" data-ans="${i(ue)}">${i(ue)}</button>`).join("")}</div><div class="grid-aksara-label">Grid Aksara Referensi:</div><div class="grid-aksara">${["ꦲ","ꦤ","ꦕ","ꦫ","ꦏ","ꦢ","ꦠ","ꦱ","ꦮ","ꦭ","ꦥ","ꦝ"].map((ue)=>`<span class="aks-cell">${ue}</span>`).join("")}</div><div id="attemptInfo" class="attempt-info">Percobaan: 0/3 • Potensi poin: 100</div><button id="btnSubmitJawab" class="accent" disabled>SUBMIT JAWABAN</button><div id="playerFeedback"></div>`;
                let R = x.querySelectorAll(".opt-btn");
                R.forEach((ue) => {
                    ue.addEventListener("click", () => {
                        R.forEach((Sr) => Sr.classList.remove("selected")), ue.classList.add("selected"), ve = ue.getAttribute("data-ans");
                        let Kn = document.getElementById("btnSubmitJawab");
                        if (Kn) Kn.disabled = !1
                    })
                });
                let V = document.getElementById("btnSubmitJawab");
                if (V) V.addEventListener("click", () => Cf())
            }

            function Cf() {
                if (!L || !ve) return;
                let y = ve === L.a;
                Be += 1;
                let g = document.getElementById("attemptInfo"),
                    w = document.getElementById("playerFeedback"),
                    C = 0;
                if (y) {
                    if (C = Math.max(10, 100 - (Be - 1) * 15), Qn += C, w) w.innerHTML = `<div class="fb ok">✅ Benar! +${C} poin<br><small>Jawaban: ${i(L.a)}</small></div>`;
                    if (S) try {
                        S.send({
                            type: "answer",
                            index: F,
                            correct: !0,
                            points: C,
                            attempts: Be,
                            q: L.q
                        })
                    } catch {}
                    setTimeout(() => ko(!0, C), 900)
                } else {
                    let z = 3 - Be;
                    if (z > 0) {
                        let x = Math.max(10, 100 - Be * 15);
                        if (g) g.textContent = `Percobaan: ${Be}/3 • Potensi poin: ${x} • Salah, coba lagi!`;
                        if (w) w.innerHTML = `<div class="fb retry">❌ Salah — sisa ${z} percobaan<br><small>-15 poin potensi</small></div>`;
                        let R = document.getElementById("btnSubmitJawab");
                        if (R) R.disabled = !0;
                        ve = null, document.querySelectorAll(".opt-btn").forEach((V) => V.classList.remove("selected"))
                    } else {
                        if (C = 10, Qn += C, w) w.innerHTML = `<div class="fb fail">\uD83D\uDCA4 3x salah. Jawaban: <b>${i(L.a)}</b><br>+${C} poin penghibur</div>`;
                        if (g) g.textContent = `Percobaan habis — jawaban: ${i(L.a)}`;
                        if (S) try {
                            S.send({
                                type: "answer",
                                index: F,
                                correct: !0,
                                points: C,
                                attempts: Be,
                                q: L.q,
                                forced: !0
                            })
                        } catch {}
                        setTimeout(() => ko(!1, C), 1200)
                    }
                }
            }

            function ko(y, g) {
                let w = document.getElementById("playerGameArea");
                if (!w) return;
                P = "WAITING_NEXT", w.innerHTML = `<div class="finish-card"><div class="finish-emoji">${y?"\uD83C\uDF89":"\uD83D\uDCDA"}</div><div class="finish-title">${y?"FINISH!":"Selesai"}</div><div class="finish-sub">+${g} poin • Total: ${Qn} poin</div><div class="waiting-next">Menunggu soal berikutnya dari guru<span class="dots"><span>.</span><span>.</span><span>.</span></span></div></div>`
            }

            function xf(y) {
                let g = document.getElementById("playerGameArea"),
                    w = document.getElementById("playerCountdown");
                if (w) w.style.display = "none";
                if (!g) return;
                g.style.display = "block", P = "FINAL";
                let C = y.findIndex((z) => z.name === T) + 1;
                g.innerHTML = `<div class="final-card player"><div class="final-title">\uD83C\uDFC6 Game Selesai!</div><div class="final-sub">Kamu peringkat #${C||"-"} • ${Qn} poin</div><div class="final-list">${y.slice(0,10).map((z,x)=>`<div class="final-row ${z.name===T?"me":""}"><span class="rank">#${x+1}</span><span class="name">${i(z.name)}</span><span class="score">${z.total??z.points??0} poin</span></div>`).join("")}</div><div class="waiting-msg" style="margin-top:12px">Terima kasih sudah belajar aksara Jawa!</div></div>`
            }
            let wo = document.getElementById("btnHost"),
                So = document.getElementById("btnJoin"),
                Eo = document.getElementById("btnGabung"),
                _o = document.getElementById("btnStartGame"),
                Co = document.getElementById("btnBackLanding"),
                xo = document.getElementById("btnBackLanding2"),
                Po = document.getElementById("btnNextQuestion");
            if (Co) Co.addEventListener("click", () => _t("v-landing"));
            if (xo) xo.addEventListener("click", () => {
                _t("v-landing");
                let y = document.getElementById("playerForm"),
                    g = document.getElementById("playerLobbyWaiting"),
                    w = document.getElementById("playerCountdown"),
                    C = document.getElementById("playerGameArea");
                if (y) y.style.display = "block";
                if (g) g.style.display = "none";
                if (w) w.style.display = "none";
                if (C) C.style.display = "none";
                P = "JOIN_FORM"
            });
            if (wo) wo.addEventListener("click", () => {
                let y = document.getElementById("hostCodeDisplay"),
                    g = document.getElementById("hostStatus"),
                    w = document.getElementById("hostLobbyControls"),
                    C = document.getElementById("hostGameArea");
                if (y) y.textContent = "----";
                if (g) g.textContent = "Membuka room...";
                _t("v-host"), ho(), Xe(), n().then(() => {
                    let z = l();
                    v = z;
                    try {
                        if (s) s.destroy()
                    } catch {}
                    if (typeof window.Peer > "u") {
                        if (y) y.textContent = "PREVIEW";
                        if (g) g.textContent = "Mode preview offline.";
                        if (w) w.style.display = "block";
                        if (C) C.style.display = "none";
                        if (Object.keys(p).length === 0) p["preview-1"] = {
                            name: "Siswa Preview",
                            id: "preview-1",
                            total: 0,
                            answered: !1
                        }, Xe();
                        return
                    }
                    if (s = new window.Peer(u(z)), g) g.textContent = "Membuka room... " + z;
                    s.on("open", () => {
                        if (y) y.textContent = z;
                        let x = document.getElementById("qrImg");
                        if (x) {
                            let ue = location.origin + location.pathname + "#join-" + z;
                            x.src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(ue), x.alt = "QR Code " + z
                        }
                        if (g) g.textContent = "Room aktif. Menunggu siswa...";
                        if (h = {}, p = {}, _ = [], O = 0, m = {}, E = "LOBBY", w) w.style.display = "block";
                        if (C) C.style.display = "none", C.innerHTML = '<div id="hostCountdownOverlay" class="countdown-overlay" style="display:none"></div>';
                        let R = document.getElementById("hostFinal");
                        if (R) R.style.display = "none";
                        let V = document.getElementById("hostNextWrap");
                        if (V) V.style.display = "none";
                        Xe(), ho()
                    }), s.on("connection", (x) => {
                        x.on("open", () => {
                            h[x.peer] = x, x.on("data", (R) => {
                                if (R && R.type === "join") {
                                    let V = (R.name || "Siswa").toString().trim().slice(0, 18) || "Siswa";
                                    if (E !== "LOBBY") {
                                        x.send({
                                            type: "rejected",
                                            reason: "Game sudah dimulai. Tunggu sesi berikutnya."
                                        });
                                        return
                                    }
                                    p[x.peer] = {
                                        name: V,
                                        id: x.peer,
                                        total: 0,
                                        answered: !1
                                    }, Xe(), x.send({
                                        type: "joined",
                                        room: z
                                    }), jn({
                                        type: "lobbyUpdate",
                                        players: Object.values(p).map((ue) => ({
                                            name: ue.name
                                        }))
                                    })
                                }
                                if (R && R.type === "answer") wf(x.peer, R)
                            }), x.on("close", () => {
                                delete h[x.peer], delete p[x.peer], delete m[x.peer], Xe()
                            })
                        })
                    }), s.on("error", (x) => {
                        if (x && x.type === "unavailable-id") {
                            let R = l();
                            v = R;
                            try {
                                s.destroy()
                            } catch {}
                            if (s = new window.Peer(u(R)), y) y.textContent = R;
                            if (g) g.textContent = "Kode bentrok, ganti ke " + R
                        } else if (g) g.textContent = "Error: " + (x.type || x.message)
                    })
                })
            });
            if (So) So.addEventListener("click", () => {
                _t("v-join");
                let g = (location.hash || "").match(/#join-([A-Za-z]{4})/i),
                    w = document.getElementById("inputCode");
                if (g && w) w.value = g[1].toUpperCase();
                setTimeout(() => {
                    let C = document.getElementById("inputName");
                    if (C && !w?.value) w?.focus();
                    else C?.focus()
                }, 100)
            });
            if (Eo) Eo.addEventListener("click", () => {
                n().then(() => {
                    let y = document.getElementById("inputCode"),
                        g = document.getElementById("inputName"),
                        w = document.getElementById("joinStatus"),
                        C = y ? y.value.trim().toUpperCase() : "",
                        z = g ? g.value.trim() : "";
                    if (C.length !== 4) {
                        if (w) w.textContent = "Kode harus 4 huruf (contoh: ABCD).";
                        y?.focus();
                        return
                    }
                    if (!z) {
                        if (w) w.textContent = "Isi nama dulu.";
                        g?.focus();
                        return
                    }
                    if (typeof window.Peer > "u") {
                        if (w) w.textContent = "PeerJS belum load. Cek internet & refresh.";
                        return
                    }
                    if (w) w.textContent = "Menghubungkan ke " + C + "...";
                    try {
                        if (f) f.destroy()
                    } catch {}
                    f = new window.Peer, T = z, M = C, Qn = 0, f.on("open", () => {
                        let x = f.connect(u(C));
                        S = x, x.on("open", () => {
                            if (x.send({
                                    type: "join",
                                    name: z
                                }), w) w.textContent = "Terhubung, menunggu Host konfirmasi..."
                        }), x.on("data", (R) => {
                            if (!R) return;
                            if (R.type === "joined") {
                                if (w) w.textContent = "";
                                Sf(R.room, z)
                            }
                            if (R.type === "rejected") {
                                if (w) w.textContent = "Ditolak: " + R.reason;
                                let V = document.getElementById("playerForm");
                                if (V) V.style.display = "block"
                            }
                            if (R.type === "lobbyUpdate") {
                                let V = document.getElementById("lobbyPlayersInfo");
                                if (V) V.textContent = `${R.players?.length||0} siswa sudah di lobby.`
                            }
                            if (R.type === "countdown") Ef(R.n);
                            if (R.type === "question") _f(R.soal, R.index, R.total);
                            if (R.type === "questionResult") {
                                let V = document.getElementById("playerGameArea");
                                if (V && P === "WAITING_NEXT") {
                                    let ue = R.ranking?.slice(0, 3).map((Kn, Sr) => `${Sr===0?"\uD83E\uDD47":Sr===1?"\uD83E\uDD48":"\uD83E\uDD49"} ${i(Kn.name)}`).join(" • ");
                                    V.innerHTML += `<div class="result-mini">Podium: ${ue||"—"}<br><small>Jawaban: ${i(R.correct)}</small></div>`
                                }
                            }
                            if (R.type === "final") xf(R.ranking)
                        }), x.on("error", (R) => {
                            if (w) w.textContent = "Gagal connect: " + (R.type || R.message)
                        }), x.on("close", () => {
                            if (w) w.textContent = "Koneksi terputus."
                        })
                    }), f.on("error", (x) => {
                        if (w) w.textContent = "Peer error: " + (x.type || x.message)
                    })
                })
            });
            if (_o) _o.addEventListener("click", () => {
                let g = Array.from(document.querySelectorAll("#levelCheckboxes input:checked")).map((R) => R.value),
                    w = document.getElementById("jumlahSoal"),
                    C = w ? parseInt(w.value, 10) : 10;
                if (g.length === 0) {
                    alert("Pilih minimal 1 level.");
                    return
                }
                if (Object.keys(p).length === 0) {
                    alert("Belum ada siswa.");
                    return
                }
                let z = yf.filter((R) => g.includes(String(R.level)));
                if (z.length === 0) {
                    alert("Tidak ada soal untuk level itu.");
                    return
                }
                let x = o(z);
                _ = x.slice(0, Math.min(C, x.length)), Object.values(p).forEach((R) => {
                    R.total = 0, R.answered = !1
                }), O = 0, m = {}, gf()
            });
            if (Po) Po.addEventListener("click", () => {
                if (O + 1 < _.length) mo(O + 1);
                else go()
            });
            let No = (location.hash || "").match(/#join-([A-Za-z]{4})/i);
            if (No) {
                let y = document.getElementById("inputCode");
                if (y) y.value = No[1].toUpperCase();
                _t("v-join")
            }
            document.addEventListener("submit", (y) => {
                y.preventDefault()
            })
        })()
    }, []), le("div", {
        className: "app-shell",
        children: [le("div", {
            className: "wrap",
            children: [D("h1", {
                children: "HANACARAKA SPRINT"
            }), D("p", {
                className: "sub",
                children: "Belajar Aksara Jawa Bareng"
            }), D("div", {
                id: "v-landing",
                className: "view active",
                children: D("div", {
                    className: "card",
                    children: le("div", {
                        className: "grid2",
                        children: [D("button", {
                            id: "btnHost",
                            className: "accent",
                            children: "\uD83C\uDF93 Jadi Host"
                        }), D("button", {
                            id: "btnJoin",
                            className: "secondary",
                            children: "\uD83D\uDCF1 Join Siswa"
                        })]
                    })
                })
            }), D("div", {
                id: "v-host",
                className: "view",
                children: le("div", {
                    className: "card",
                    children: [D("button", {
                        id: "btnBackLanding",
                        className: "secondary",
                        style: {
                            width: "auto",
                            height: 38,
                            fontSize: 13
                        },
                        children: "← Kembali"
                    }), le("div", {
                        style: {
                            marginTop: 14
                        },
                        children: [D("div", {
                            style: {
                                fontSize: 11,
                                fontWeight: 800,
                                letterSpacing: ".1em",
                                color: "var(--muted)"
                            },
                            children: "KODE ROOM"
                        }), D("div", {
                            id: "hostCodeDisplay",
                            className: "code-display",
                            children: "----"
                        }), D("div", {
                            id: "hostStatus",
                            children: "Menunggu..."
                        }), D("div", {
                            className: "qr-wrap",
                            children: D("img", {
                                id: "qrImg",
                                alt: "QR"
                            })
                        }), le("div", {
                            id: "hostLobbyControls",
                            children: [D("div", {
                                style: {
                                    fontWeight: 800,
                                    marginTop: 8
                                },
                                children: "Pilih Level & Jumlah Soal"
                            }), D("div", {
                                id: "levelCheckboxes",
                                className: "level-grid"
                            }), le("div", {
                                className: "jumlah-wrap",
                                children: [D("label", {
                                    children: "Jumlah Soal:"
                                }), le("select", {
                                    id: "jumlahSoal",
                                    children: [D("option", {
                                        value: "5",
                                        children: "5 soal"
                                    }), D("option", {
                                        value: "10",
                                        selected: !0,
                                        children: "10 soal"
                                    }), D("option", {
                                        value: "15",
                                        children: "15 soal"
                                    }), D("option", {
                                        value: "20",
                                        children: "20 soal"
                                    })]
                                })]
                            }), D("button", {
                                id: "btnStartGame",
                                className: "accent",
                                disabled: !0,
                                style: {
                                    marginTop: 8
                                },
                                children: "Mulai Game"
                            })]
                        }), D("div", {
                            id: "hostGameArea",
                            children: D("div", {
                                id: "hostCountdownOverlay",
                                className: "countdown-overlay",
                                style: {
                                    display: "none"
                                }
                            })
                        }), le("div", {
                            id: "hostPlayerListWrap",
                            style: {
                                marginTop: 16
                            },
                            children: [le("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                },
                                children: [D("div", {
                                    style: {
                                        fontWeight: 800
                                    },
                                    children: "Siswa Terhubung"
                                }), D("div", {
                                    id: "hostCount",
                                    style: {
                                        fontSize: 12,
                                        color: "var(--muted)"
                                    },
                                    children: "0 siswa"
                                })]
                            }), D("div", {
                                id: "hostPlayerList"
                            })]
                        }), D("div", {
                            id: "hostNextWrap",
                            children: D("button", {
                                id: "btnNextQuestion",
                                className: "secondary",
                                children: "Soal Berikutnya →"
                            })
                        }), D("div", {
                            id: "hostFinal"
                        })]
                    })]
                })
            }), D("div", {
                id: "v-join",
                className: "view",
                children: le("div", {
                    className: "card",
                    children: [D("button", {
                        id: "btnBackLanding2",
                        className: "secondary",
                        style: {
                            width: "auto",
                            height: 38,
                            fontSize: 13
                        },
                        children: "← Kembali"
                    }), le("div", {
                        style: {
                            marginTop: 14
                        },
                        children: [le("div", {
                            id: "playerForm",
                            children: [le("div", {
                                className: "field",
                                children: [D("label", {
                                    children: "Kode 4 huruf"
                                }), D("input", {
                                    id: "inputCode",
                                    maxLength: 4,
                                    autoComplete: "off",
                                    placeholder: "Contoh: ABCD",
                                    inputMode: "text"
                                })]
                            }), le("div", {
                                className: "field",
                                children: [D("label", {
                                    children: "Nama"
                                }), D("input", {
                                    id: "inputName",
                                    autoComplete: "off",
                                    placeholder: "Nama panggilan"
                                })]
                            }), D("button", {
                                id: "btnGabung",
                                className: "accent",
                                children: "Gabung"
                            }), D("div", {
                                id: "joinStatus"
                            })]
                        }), D("div", {
                            id: "playerLobbyWaiting"
                        }), D("div", {
                            id: "playerCountdown"
                        }), D("div", {
                            id: "playerGameArea"
                        })]
                    })]
                })
            })]
        })]
    })
}
mf.createRoot(document.getElementById("root")).render(D(vf.default.StrictMode, {
    children: D(po, {})
}));


/* external links handler - from original second script */
(function() {
    function m(a) {
        var h = a.getAttribute("href");
        if (!h) return;
        try {
            var u = new URL(h, document.baseURI);
            if ((u.protocol === "http:" || u.protocol === "https:") && u.host !== location.host) {
                a.target = "_blank";
                a.rel = "noopener noreferrer";
            }
        } catch (e) {}
    }

    function s() {
        document.querySelectorAll("a[href]").forEach(m);
    }
    if (document.readyState !== "loading") {
        s();
    } else {
        document.addEventListener("DOMContentLoaded", s);
    }
    document.addEventListener("click", function(e) {
        var a = e.target && e.target.closest && e.target.closest("a[href]");
        if (a) {
            m(a);
        }
    }, true);
})();