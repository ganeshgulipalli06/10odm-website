(() => {
    var t, e, n, r, o, i, s = {
            7109: (t, e, n) => {
                var r = n(3988)(n(5294), "DataView");
                t.exports = r
            },
            8352: (t, e, n) => {
                var r = n(3130),
                    o = n(3705),
                    i = n(4098),
                    s = n(884),
                    a = n(2621);

                function u(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = s, u.prototype.set = a, t.exports = u
            },
            7486: (t, e, n) => {
                var r = n(309),
                    o = n(7083),
                    i = n(7717),
                    s = n(5354),
                    a = n(231);

                function u(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = s, u.prototype.set = a, t.exports = u
            },
            1377: (t, e, n) => {
                var r = n(3988)(n(5294), "Map");
                t.exports = r
            },
            7923: (t, e, n) => {
                var r = n(9551),
                    o = n(5272),
                    i = n(6323),
                    s = n(646),
                    a = n(9793);

                function u(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                u.prototype.clear = r, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = s, u.prototype.set = a, t.exports = u
            },
            6993: (t, e, n) => {
                var r = n(3988)(n(5294), "Promise");
                t.exports = r
            },
            3941: (t, e, n) => {
                var r = n(3988)(n(5294), "Set");
                t.exports = r
            },
            4248: (t, e, n) => {
                var r = n(7923),
                    o = n(1199),
                    i = n(4043);

                function s(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.__data__ = new r; ++e < n;) this.add(t[e])
                }
                s.prototype.add = s.prototype.push = o, s.prototype.has = i, t.exports = s
            },
            3140: (t, e, n) => {
                var r = n(7486),
                    o = n(6312),
                    i = n(1506),
                    s = n(6924),
                    a = n(4998),
                    u = n(8415);

                function c(t) {
                    var e = this.__data__ = new r(t);
                    this.size = e.size
                }
                c.prototype.clear = o, c.prototype.delete = i, c.prototype.get = s, c.prototype.has = a, c.prototype.set = u, t.exports = c
            },
            6491: (t, e, n) => {
                var r = n(5294).Symbol;
                t.exports = r
            },
            4102: (t, e, n) => {
                var r = n(5294).Uint8Array;
                t.exports = r
            },
            7373: (t, e, n) => {
                var r = n(3988)(n(5294), "WeakMap");
                t.exports = r
            },
            8924: t => {
                t.exports = function(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
                    return t
                }
            },
            9394: t => {
                t.exports = function(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
                        var s = t[n];
                        e(s, n, t) && (i[o++] = s)
                    }
                    return i
                }
            },
            362: (t, e, n) => {
                var r = n(7363),
                    o = n(7853),
                    i = n(4896),
                    s = n(2830),
                    a = n(6473),
                    u = n(1484),
                    c = Object.prototype.hasOwnProperty;
                t.exports = function(t, e) {
                    var n = i(t),
                        p = !n && o(t),
                        f = !n && !p && s(t),
                        l = !n && !p && !f && u(t),
                        d = n || p || f || l,
                        h = d ? r(t.length, String) : [],
                        v = h.length;
                    for (var _ in t) !e && !c.call(t, _) || d && ("length" == _ || f && ("offset" == _ || "parent" == _) || l && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || a(_, v)) || h.push(_);
                    return h
                }
            },
            3558: t => {
                t.exports = function(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
                    return o
                }
            },
            4672: t => {
                t.exports = function(t, e) {
                    for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
                    return t
                }
            },
            1521: t => {
                t.exports = function(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                        if (e(t[n], n, t)) return !0;
                    return !1
                }
            },
            3785: (t, e, n) => {
                var r = n(4993);
                t.exports = function(t, e) {
                    for (var n = t.length; n--;)
                        if (r(t[n][0], e)) return n;
                    return -1
                }
            },
            2352: (t, e, n) => {
                var r = n(6205),
                    o = n(2434)(r);
                t.exports = o
            },
            4564: (t, e, n) => {
                var r = n(3495)();
                t.exports = r
            },
            6205: (t, e, n) => {
                var r = n(4564),
                    o = n(3834);
                t.exports = function(t, e) {
                    return t && r(t, e, o)
                }
            },
            1774: (t, e, n) => {
                var r = n(276),
                    o = n(5619);
                t.exports = function(t, e) {
                    for (var n = 0, i = (e = r(e, t)).length; null != t && n < i;) t = t[o(e[n++])];
                    return n && n == i ? t : void 0
                }
            },
            4284: (t, e, n) => {
                var r = n(4672),
                    o = n(4896);
                t.exports = function(t, e, n) {
                    var i = e(t);
                    return o(t) ? i : r(i, n(t))
                }
            },
            3684: (t, e, n) => {
                var r = n(6491),
                    o = n(5386),
                    i = n(1820),
                    s = r ? r.toStringTag : void 0;
                t.exports = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? o(t) : i(t)
                }
            },
            5187: t => {
                t.exports = function(t, e) {
                    return null != t && e in Object(t)
                }
            },
            4070: (t, e, n) => {
                var r = n(3684),
                    o = n(2075);
                t.exports = function(t) {
                    return o(t) && "[object Arguments]" == r(t)
                }
            },
            1850: (t, e, n) => {
                var r = n(8729),
                    o = n(2075);
                t.exports = function t(e, n, i, s, a) {
                    return e === n || (null == e || null == n || !o(e) && !o(n) ? e != e && n != n : r(e, n, i, s, t, a))
                }
            },
            8729: (t, e, n) => {
                var r = n(3140),
                    o = n(3128),
                    i = n(285),
                    s = n(1368),
                    a = n(8699),
                    u = n(4896),
                    c = n(2830),
                    p = n(1484),
                    f = "[object Arguments]",
                    l = "[object Array]",
                    d = "[object Object]",
                    h = Object.prototype.hasOwnProperty;
                t.exports = function(t, e, n, v, _, g) {
                    var y = u(t),
                        m = u(e),
                        b = y ? l : a(t),
                        w = m ? l : a(e),
                        x = (b = b == f ? d : b) == d,
                        S = (w = w == f ? d : w) == d,
                        E = b == w;
                    if (E && c(t)) {
                        if (!c(e)) return !1;
                        y = !0, x = !1
                    }
                    if (E && !x) return g || (g = new r), y || p(t) ? o(t, e, n, v, _, g) : i(t, e, b, n, v, _, g);
                    if (!(1 & n)) {
                        var k = x && h.call(t, "__wrapped__"),
                            O = S && h.call(e, "__wrapped__");
                        if (k || O) {
                            var j = k ? t.value() : t,
                                T = O ? e.value() : e;
                            return g || (g = new r), _(j, T, n, v, g)
                        }
                    }
                    return !!E && (g || (g = new r), s(t, e, n, v, _, g))
                }
            },
            3295: (t, e, n) => {
                var r = n(3140),
                    o = n(1850);
                t.exports = function(t, e, n, i) {
                    var s = n.length,
                        a = s,
                        u = !i;
                    if (null == t) return !a;
                    for (t = Object(t); s--;) {
                        var c = n[s];
                        if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                    }
                    for (; ++s < a;) {
                        var p = (c = n[s])[0],
                            f = t[p],
                            l = c[1];
                        if (u && c[2]) {
                            if (void 0 === f && !(p in t)) return !1
                        } else {
                            var d = new r;
                            if (i) var h = i(f, l, p, t, e, d);
                            if (!(void 0 === h ? o(l, f, 3, i, d) : h)) return !1
                        }
                    }
                    return !0
                }
            },
            3711: (t, e, n) => {
                var r = n(6037),
                    o = n(8064),
                    i = n(4004),
                    s = n(9148),
                    a = /^\[object .+?Constructor\]$/,
                    u = Function.prototype,
                    c = Object.prototype,
                    p = u.toString,
                    f = c.hasOwnProperty,
                    l = RegExp("^" + p.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                t.exports = function(t) {
                    return !(!i(t) || o(t)) && (r(t) ? l : a).test(s(t))
                }
            },
            351: (t, e, n) => {
                var r = n(3684),
                    o = n(1350),
                    i = n(2075),
                    s = {};
                s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = function(t) {
                    return i(t) && o(t.length) && !!s[r(t)]
                }
            },
            8225: (t, e, n) => {
                var r = n(2712),
                    o = n(3851),
                    i = n(1824),
                    s = n(4896),
                    a = n(5613);
                t.exports = function(t) {
                    return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? s(t) ? o(t[0], t[1]) : r(t) : a(t)
                }
            },
            9542: (t, e, n) => {
                var r = n(6273),
                    o = n(5746),
                    i = Object.prototype.hasOwnProperty;
                t.exports = function(t) {
                    if (!r(t)) return o(t);
                    var e = [];
                    for (var n in Object(t)) i.call(t, n) && "constructor" != n && e.push(n);
                    return e
                }
            },
            885: (t, e, n) => {
                var r = n(2352),
                    o = n(2571);
                t.exports = function(t, e) {
                    var n = -1,
                        i = o(t) ? Array(t.length) : [];
                    return r(t, (function(t, r, o) {
                        i[++n] = e(t, r, o)
                    })), i
                }
            },
            2712: (t, e, n) => {
                var r = n(3295),
                    o = n(3129),
                    i = n(5118);
                t.exports = function(t) {
                    var e = o(t);
                    return 1 == e.length && e[0][2] ? i(e[0][0], e[0][1]) : function(n) {
                        return n === t || r(n, t, e)
                    }
                }
            },
            3851: (t, e, n) => {
                var r = n(1850),
                    o = n(7062),
                    i = n(3277),
                    s = n(7085),
                    a = n(6809),
                    u = n(5118),
                    c = n(5619);
                t.exports = function(t, e) {
                    return s(t) && a(e) ? u(c(t), e) : function(n) {
                        var s = o(n, t);
                        return void 0 === s && s === e ? i(n, t) : r(e, s, 3)
                    }
                }
            },
            5807: t => {
                t.exports = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                }
            },
            9049: (t, e, n) => {
                var r = n(1774);
                t.exports = function(t) {
                    return function(e) {
                        return r(e, t)
                    }
                }
            },
            7363: t => {
                t.exports = function(t, e) {
                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                    return r
                }
            },
            9410: (t, e, n) => {
                var r = n(6491),
                    o = n(3558),
                    i = n(4896),
                    s = n(9300),
                    a = r ? r.prototype : void 0,
                    u = a ? a.toString : void 0;
                t.exports = function t(e) {
                    if ("string" == typeof e) return e;
                    if (i(e)) return o(e, t) + "";
                    if (s(e)) return u ? u.call(e) : "";
                    var n = e + "";
                    return "0" == n && 1 / e == -Infinity ? "-0" : n
                }
            },
            2057: t => {
                t.exports = function(t) {
                    return function(e) {
                        return t(e)
                    }
                }
            },
            5692: t => {
                t.exports = function(t, e) {
                    return t.has(e)
                }
            },
            6925: (t, e, n) => {
                var r = n(1824);
                t.exports = function(t) {
                    return "function" == typeof t ? t : r
                }
            },
            276: (t, e, n) => {
                var r = n(4896),
                    o = n(7085),
                    i = n(5546),
                    s = n(1071);
                t.exports = function(t, e) {
                    return r(t) ? t : o(t, e) ? [t] : i(s(t))
                }
            },
            7862: (t, e, n) => {
                var r = n(5294)["__core-js_shared__"];
                t.exports = r
            },
            2434: (t, e, n) => {
                var r = n(2571);
                t.exports = function(t, e) {
                    return function(n, o) {
                        if (null == n) return n;
                        if (!r(n)) return t(n, o);
                        for (var i = n.length, s = e ? i : -1, a = Object(n);
                            (e ? s-- : ++s < i) && !1 !== o(a[s], s, a););
                        return n
                    }
                }
            },
            3495: t => {
                t.exports = function(t) {
                    return function(e, n, r) {
                        for (var o = -1, i = Object(e), s = r(e), a = s.length; a--;) {
                            var u = s[t ? a : ++o];
                            if (!1 === n(i[u], u, i)) break
                        }
                        return e
                    }
                }
            },
            3128: (t, e, n) => {
                var r = n(4248),
                    o = n(1521),
                    i = n(5692);
                t.exports = function(t, e, n, s, a, u) {
                    var c = 1 & n,
                        p = t.length,
                        f = e.length;
                    if (p != f && !(c && f > p)) return !1;
                    var l = u.get(t),
                        d = u.get(e);
                    if (l && d) return l == e && d == t;
                    var h = -1,
                        v = !0,
                        _ = 2 & n ? new r : void 0;
                    for (u.set(t, e), u.set(e, t); ++h < p;) {
                        var g = t[h],
                            y = e[h];
                        if (s) var m = c ? s(y, g, h, e, t, u) : s(g, y, h, t, e, u);
                        if (void 0 !== m) {
                            if (m) continue;
                            v = !1;
                            break
                        }
                        if (_) {
                            if (!o(e, (function(t, e) {
                                    if (!i(_, e) && (g === t || a(g, t, n, s, u))) return _.push(e)
                                }))) {
                                v = !1;
                                break
                            }
                        } else if (g !== y && !a(g, y, n, s, u)) {
                            v = !1;
                            break
                        }
                    }
                    return u.delete(t), u.delete(e), v
                }
            },
            285: (t, e, n) => {
                var r = n(6491),
                    o = n(4102),
                    i = n(4993),
                    s = n(3128),
                    a = n(4125),
                    u = n(5433),
                    c = r ? r.prototype : void 0,
                    p = c ? c.valueOf : void 0;
                t.exports = function(t, e, n, r, c, f, l) {
                    switch (n) {
                        case "[object DataView]":
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                            t = t.buffer, e = e.buffer;
                        case "[object ArrayBuffer]":
                            return !(t.byteLength != e.byteLength || !f(new o(t), new o(e)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return i(+t, +e);
                        case "[object Error]":
                            return t.name == e.name && t.message == e.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return t == e + "";
                        case "[object Map]":
                            var d = a;
                        case "[object Set]":
                            var h = 1 & r;
                            if (d || (d = u), t.size != e.size && !h) return !1;
                            var v = l.get(t);
                            if (v) return v == e;
                            r |= 2, l.set(t, e);
                            var _ = s(d(t), d(e), r, c, f, l);
                            return l.delete(t), _;
                        case "[object Symbol]":
                            if (p) return p.call(t) == p.call(e)
                    }
                    return !1
                }
            },
            1368: (t, e, n) => {
                var r = n(4887),
                    o = Object.prototype.hasOwnProperty;
                t.exports = function(t, e, n, i, s, a) {
                    var u = 1 & n,
                        c = r(t),
                        p = c.length;
                    if (p != r(e).length && !u) return !1;
                    for (var f = p; f--;) {
                        var l = c[f];
                        if (!(u ? l in e : o.call(e, l))) return !1
                    }
                    var d = a.get(t),
                        h = a.get(e);
                    if (d && h) return d == e && h == t;
                    var v = !0;
                    a.set(t, e), a.set(e, t);
                    for (var _ = u; ++f < p;) {
                        var g = t[l = c[f]],
                            y = e[l];
                        if (i) var m = u ? i(y, g, l, e, t, a) : i(g, y, l, t, e, a);
                        if (!(void 0 === m ? g === y || s(g, y, n, i, a) : m)) {
                            v = !1;
                            break
                        }
                        _ || (_ = "constructor" == l)
                    }
                    if (v && !_) {
                        var b = t.constructor,
                            w = e.constructor;
                        b == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w || (v = !1)
                    }
                    return a.delete(t), a.delete(e), v
                }
            },
            4484: (t, e, n) => {
                var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
                t.exports = r
            },
            4887: (t, e, n) => {
                var r = n(4284),
                    o = n(7351),
                    i = n(3834);
                t.exports = function(t) {
                    return r(t, i, o)
                }
            },
            6617: (t, e, n) => {
                var r = n(997);
                t.exports = function(t, e) {
                    var n = t.__data__;
                    return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                }
            },
            3129: (t, e, n) => {
                var r = n(6809),
                    o = n(3834);
                t.exports = function(t) {
                    for (var e = o(t), n = e.length; n--;) {
                        var i = e[n],
                            s = t[i];
                        e[n] = [i, s, r(s)]
                    }
                    return e
                }
            },
            3988: (t, e, n) => {
                var r = n(3711),
                    o = n(17);
                t.exports = function(t, e) {
                    var n = o(t, e);
                    return r(n) ? n : void 0
                }
            },
            5386: (t, e, n) => {
                var r = n(6491),
                    o = Object.prototype,
                    i = o.hasOwnProperty,
                    s = o.toString,
                    a = r ? r.toStringTag : void 0;
                t.exports = function(t) {
                    var e = i.call(t, a),
                        n = t[a];
                    try {
                        t[a] = void 0;
                        var r = !0
                    } catch (t) {}
                    var o = s.call(t);
                    return r && (e ? t[a] = n : delete t[a]), o
                }
            },
            7351: (t, e, n) => {
                var r = n(9394),
                    o = n(9381),
                    i = Object.prototype.propertyIsEnumerable,
                    s = Object.getOwnPropertySymbols,
                    a = s ? function(t) {
                        return null == t ? [] : (t = Object(t), r(s(t), (function(e) {
                            return i.call(t, e)
                        })))
                    } : o;
                t.exports = a
            },
            8699: (t, e, n) => {
                var r = n(7109),
                    o = n(1377),
                    i = n(6993),
                    s = n(3941),
                    a = n(7373),
                    u = n(3684),
                    c = n(9148),
                    p = "[object Map]",
                    f = "[object Promise]",
                    l = "[object Set]",
                    d = "[object WeakMap]",
                    h = "[object DataView]",
                    v = c(r),
                    _ = c(o),
                    g = c(i),
                    y = c(s),
                    m = c(a),
                    b = u;
                (r && b(new r(new ArrayBuffer(1))) != h || o && b(new o) != p || i && b(i.resolve()) != f || s && b(new s) != l || a && b(new a) != d) && (b = function(t) {
                    var e = u(t),
                        n = "[object Object]" == e ? t.constructor : void 0,
                        r = n ? c(n) : "";
                    if (r) switch (r) {
                        case v:
                            return h;
                        case _:
                            return p;
                        case g:
                            return f;
                        case y:
                            return l;
                        case m:
                            return d
                    }
                    return e
                }), t.exports = b
            },
            17: t => {
                t.exports = function(t, e) {
                    return null == t ? void 0 : t[e]
                }
            },
            4307: (t, e, n) => {
                var r = n(276),
                    o = n(7853),
                    i = n(4896),
                    s = n(6473),
                    a = n(1350),
                    u = n(5619);
                t.exports = function(t, e, n) {
                    for (var c = -1, p = (e = r(e, t)).length, f = !1; ++c < p;) {
                        var l = u(e[c]);
                        if (!(f = null != t && n(t, l))) break;
                        t = t[l]
                    }
                    return f || ++c != p ? f : !!(p = null == t ? 0 : t.length) && a(p) && s(l, p) && (i(t) || o(t))
                }
            },
            3130: (t, e, n) => {
                var r = n(610);
                t.exports = function() {
                    this.__data__ = r ? r(null) : {}, this.size = 0
                }
            },
            3705: t => {
                t.exports = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }
            },
            4098: (t, e, n) => {
                var r = n(610),
                    o = Object.prototype.hasOwnProperty;
                t.exports = function(t) {
                    var e = this.__data__;
                    if (r) {
                        var n = e[t];
                        return "__lodash_hash_undefined__" === n ? void 0 : n
                    }
                    return o.call(e, t) ? e[t] : void 0
                }
            },
            884: (t, e, n) => {
                var r = n(610),
                    o = Object.prototype.hasOwnProperty;
                t.exports = function(t) {
                    var e = this.__data__;
                    return r ? void 0 !== e[t] : o.call(e, t)
                }
            },
            2621: (t, e, n) => {
                var r = n(610);
                t.exports = function(t, e) {
                    var n = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
                }
            },
            6473: t => {
                var e = /^(?:0|[1-9]\d*)$/;
                t.exports = function(t, n) {
                    var r = typeof t;
                    return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && e.test(t)) && t > -1 && t % 1 == 0 && t < n
                }
            },
            7085: (t, e, n) => {
                var r = n(4896),
                    o = n(9300),
                    i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    s = /^\w*$/;
                t.exports = function(t, e) {
                    if (r(t)) return !1;
                    var n = typeof t;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || (s.test(t) || !i.test(t) || null != e && t in Object(e))
                }
            },
            997: t => {
                t.exports = function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }
            },
            8064: (t, e, n) => {
                var r, o = n(7862),
                    i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
                t.exports = function(t) {
                    return !!i && i in t
                }
            },
            6273: t => {
                var e = Object.prototype;
                t.exports = function(t) {
                    var n = t && t.constructor;
                    return t === ("function" == typeof n && n.prototype || e)
                }
            },
            6809: (t, e, n) => {
                var r = n(4004);
                t.exports = function(t) {
                    return t == t && !r(t)
                }
            },
            309: t => {
                t.exports = function() {
                    this.__data__ = [], this.size = 0
                }
            },
            7083: (t, e, n) => {
                var r = n(3785),
                    o = Array.prototype.splice;
                t.exports = function(t) {
                    var e = this.__data__,
                        n = r(e, t);
                    return !(n < 0) && (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, !0)
                }
            },
            7717: (t, e, n) => {
                var r = n(3785);
                t.exports = function(t) {
                    var e = this.__data__,
                        n = r(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }
            },
            5354: (t, e, n) => {
                var r = n(3785);
                t.exports = function(t) {
                    return r(this.__data__, t) > -1
                }
            },
            231: (t, e, n) => {
                var r = n(3785);
                t.exports = function(t, e) {
                    var n = this.__data__,
                        o = r(n, t);
                    return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
                }
            },
            9551: (t, e, n) => {
                var r = n(8352),
                    o = n(7486),
                    i = n(1377);
                t.exports = function() {
                    this.size = 0, this.__data__ = {
                        hash: new r,
                        map: new(i || o),
                        string: new r
                    }
                }
            },
            5272: (t, e, n) => {
                var r = n(6617);
                t.exports = function(t) {
                    var e = r(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }
            },
            6323: (t, e, n) => {
                var r = n(6617);
                t.exports = function(t) {
                    return r(this, t).get(t)
                }
            },
            646: (t, e, n) => {
                var r = n(6617);
                t.exports = function(t) {
                    return r(this, t).has(t)
                }
            },
            9793: (t, e, n) => {
                var r = n(6617);
                t.exports = function(t, e) {
                    var n = r(this, t),
                        o = n.size;
                    return n.set(t, e), this.size += n.size == o ? 0 : 1, this
                }
            },
            4125: t => {
                t.exports = function(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t, r) {
                        n[++e] = [r, t]
                    })), n
                }
            },
            5118: t => {
                t.exports = function(t, e) {
                    return function(n) {
                        return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
                    }
                }
            },
            6805: (t, e, n) => {
                var r = n(4554);
                t.exports = function(t) {
                    var e = r(t, (function(t) {
                            return 500 === n.size && n.clear(), t
                        })),
                        n = e.cache;
                    return e
                }
            },
            610: (t, e, n) => {
                var r = n(3988)(Object, "create");
                t.exports = r
            },
            5746: (t, e, n) => {
                var r = n(9968)(Object.keys, Object);
                t.exports = r
            },
            8544: (t, e, n) => {
                t = n.nmd(t);
                var r = n(4484),
                    o = e && !e.nodeType && e,
                    i = o && t && !t.nodeType && t,
                    s = i && i.exports === o && r.process,
                    a = function() {
                        try {
                            var t = i && i.require && i.require("util").types;
                            return t || s && s.binding && s.binding("util")
                        } catch (t) {}
                    }();
                t.exports = a
            },
            1820: t => {
                var e = Object.prototype.toString;
                t.exports = function(t) {
                    return e.call(t)
                }
            },
            9968: t => {
                t.exports = function(t, e) {
                    return function(n) {
                        return t(e(n))
                    }
                }
            },
            5294: (t, e, n) => {
                var r = n(4484),
                    o = "object" == typeof self && self && self.Object === Object && self,
                    i = r || o || Function("return this")();
                t.exports = i
            },
            1199: t => {
                t.exports = function(t) {
                    return this.__data__.set(t, "__lodash_hash_undefined__"), this
                }
            },
            4043: t => {
                t.exports = function(t) {
                    return this.__data__.has(t)
                }
            },
            5433: t => {
                t.exports = function(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t) {
                        n[++e] = t
                    })), n
                }
            },
            6312: (t, e, n) => {
                var r = n(7486);
                t.exports = function() {
                    this.__data__ = new r, this.size = 0
                }
            },
            1506: t => {
                t.exports = function(t) {
                    var e = this.__data__,
                        n = e.delete(t);
                    return this.size = e.size, n
                }
            },
            6924: t => {
                t.exports = function(t) {
                    return this.__data__.get(t)
                }
            },
            4998: t => {
                t.exports = function(t) {
                    return this.__data__.has(t)
                }
            },
            8415: (t, e, n) => {
                var r = n(7486),
                    o = n(1377),
                    i = n(7923);
                t.exports = function(t, e) {
                    var n = this.__data__;
                    if (n instanceof r) {
                        var s = n.__data__;
                        if (!o || s.length < 199) return s.push([t, e]), this.size = ++n.size, this;
                        n = this.__data__ = new i(s)
                    }
                    return n.set(t, e), this.size = n.size, this
                }
            },
            5546: (t, e, n) => {
                var r = n(6805),
                    o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    i = /\\(\\)?/g,
                    s = r((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, (function(t, n, r, o) {
                            e.push(r ? o.replace(i, "$1") : n || t)
                        })), e
                    }));
                t.exports = s
            },
            5619: (t, e, n) => {
                var r = n(9300);
                t.exports = function(t) {
                    if ("string" == typeof t || r(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -Infinity ? "-0" : e
                }
            },
            9148: t => {
                var e = Function.prototype.toString;
                t.exports = function(t) {
                    if (null != t) {
                        try {
                            return e.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
            },
            4993: t => {
                t.exports = function(t, e) {
                    return t === e || t != t && e != e
                }
            },
            5017: (t, e, n) => {
                var r = n(8924),
                    o = n(2352),
                    i = n(6925),
                    s = n(4896);
                t.exports = function(t, e) {
                    return (s(t) ? r : o)(t, i(e))
                }
            },
            7062: (t, e, n) => {
                var r = n(1774);
                t.exports = function(t, e, n) {
                    var o = null == t ? void 0 : r(t, e);
                    return void 0 === o ? n : o
                }
            },
            3277: (t, e, n) => {
                var r = n(5187),
                    o = n(4307);
                t.exports = function(t, e) {
                    return null != t && o(t, e, r)
                }
            },
            1824: t => {
                t.exports = function(t) {
                    return t
                }
            },
            7853: (t, e, n) => {
                var r = n(4070),
                    o = n(2075),
                    i = Object.prototype,
                    s = i.hasOwnProperty,
                    a = i.propertyIsEnumerable,
                    u = r(function() {
                        return arguments
                    }()) ? r : function(t) {
                        return o(t) && s.call(t, "callee") && !a.call(t, "callee")
                    };
                t.exports = u
            },
            4896: t => {
                var e = Array.isArray;
                t.exports = e
            },
            2571: (t, e, n) => {
                var r = n(6037),
                    o = n(1350);
                t.exports = function(t) {
                    return null != t && o(t.length) && !r(t)
                }
            },
            2830: (t, e, n) => {
                t = n.nmd(t);
                var r = n(5294),
                    o = n(4639),
                    i = e && !e.nodeType && e,
                    s = i && t && !t.nodeType && t,
                    a = s && s.exports === i ? r.Buffer : void 0,
                    u = (a ? a.isBuffer : void 0) || o;
                t.exports = u
            },
            6037: (t, e, n) => {
                var r = n(3684),
                    o = n(4004);
                t.exports = function(t) {
                    if (!o(t)) return !1;
                    var e = r(t);
                    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }
            },
            1350: t => {
                t.exports = function(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                }
            },
            4004: t => {
                t.exports = function(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }
            },
            2075: t => {
                t.exports = function(t) {
                    return null != t && "object" == typeof t
                }
            },
            9300: (t, e, n) => {
                var r = n(3684),
                    o = n(2075);
                t.exports = function(t) {
                    return "symbol" == typeof t || o(t) && "[object Symbol]" == r(t)
                }
            },
            1484: (t, e, n) => {
                var r = n(351),
                    o = n(2057),
                    i = n(8544),
                    s = i && i.isTypedArray,
                    a = s ? o(s) : r;
                t.exports = a
            },
            3834: (t, e, n) => {
                var r = n(362),
                    o = n(9542),
                    i = n(2571);
                t.exports = function(t) {
                    return i(t) ? r(t) : o(t)
                }
            },
            4028: t => {
                t.exports = function(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? t[e - 1] : void 0
                }
            },
            5238: (t, e, n) => {
                var r = n(3558),
                    o = n(8225),
                    i = n(885),
                    s = n(4896);
                t.exports = function(t, e) {
                    return (s(t) ? r : i)(t, o(e, 3))
                }
            },
            4554: (t, e, n) => {
                var r = n(7923);

                function o(t, e) {
                    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                    var n = function() {
                        var r = arguments,
                            o = e ? e.apply(this, r) : r[0],
                            i = n.cache;
                        if (i.has(o)) return i.get(o);
                        var s = t.apply(this, r);
                        return n.cache = i.set(o, s) || i, s
                    };
                    return n.cache = new(o.Cache || r), n
                }
                o.Cache = r, t.exports = o
            },
            5613: (t, e, n) => {
                var r = n(5807),
                    o = n(9049),
                    i = n(7085),
                    s = n(5619);
                t.exports = function(t) {
                    return i(t) ? r(s(t)) : o(t)
                }
            },
            9381: t => {
                t.exports = function() {
                    return []
                }
            },
            4639: t => {
                t.exports = function() {
                    return !1
                }
            },
            1071: (t, e, n) => {
                var r = n(9410);
                t.exports = function(t) {
                    return null == t ? "" : r(t)
                }
            },
            2331: (t, e, n) => {
                "use strict";
                n.d(e, {
                    R: () => i,
                    Y: () => s
                });
                var r = n(6255),
                    o = {};

                function i() {
                    return (0, r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o
                }

                function s(t, e, n) {
                    var r = n || i(),
                        o = r.__SENTRY__ = r.__SENTRY__ || {};
                    return o[t] || (o[t] = e())
                }
            },
            6255: (t, e, n) => {
                "use strict";

                function r() {
                    return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
                }

                function o(t, e) {
                    return t.require(e)
                }
                n.d(e, {
                    l$: () => o,
                    KV: () => r
                }), t = n.hmd(t)
            },
            3531: (t, e, n) => {
                "use strict";
                n.d(e, {
                    ph: () => c,
                    yW: () => u
                });
                var r = n(2331),
                    o = n(6255);
                t = n.hmd(t);
                var i = {
                    nowSeconds: function() {
                        return Date.now() / 1e3
                    }
                };
                var s = (0, o.KV)() ? function() {
                        try {
                            return (0, o.l$)(t, "perf_hooks").performance
                        } catch (t) {
                            return
                        }
                    }() : function() {
                        var t = (0, r.R)().performance;
                        if (t && t.now) return {
                            now: function() {
                                return t.now()
                            },
                            timeOrigin: Date.now() - t.now()
                        }
                    }(),
                    a = void 0 === s ? i : {
                        nowSeconds: function() {
                            return (s.timeOrigin + s.now()) / 1e3
                        }
                    },
                    u = i.nowSeconds.bind(i),
                    c = a.nowSeconds.bind(a);
                ! function() {
                    var t = (0, r.R)().performance;
                    if (t && t.now) {
                        var e = 36e5,
                            n = t.now(),
                            o = Date.now(),
                            i = t.timeOrigin ? Math.abs(t.timeOrigin + n - o) : e,
                            s = i < e,
                            a = t.timing && t.timing.navigationStart,
                            u = "number" == typeof a ? Math.abs(a + n - o) : e;
                        return s || u < e ? i <= u ? ("timeOrigin", t.timeOrigin) : ("navigationStart", a) : ("dateNow", o)
                    }
                    "none"
                }()
            }
        },
        a = {};

    function u(t) {
        var e = a[t];
        if (void 0 !== e) return e.exports;
        var n = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return s[t](n, n.exports, u), n.loaded = !0, n.exports
    }
    u.m = s, u.d = (t, e) => {
        for (var n in e) u.o(e, n) && !u.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, u.f = {}, u.e = t => Promise.all(Object.keys(u.f).reduce(((e, n) => (u.f[n](t, e), e)), [])), u.u = t => "web-widget-" + t + "-a66e563306d1a10660fd.js", u.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), u.hmd = t => ((t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
        }
    }), t), u.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), t = {}, e = "@zendesk/embeddable-framework:", u.l = (n, r, o, i) => {
        if (t[n]) t[n].push(r);
        else {
            var s, a;
            if (void 0 !== o)
                for (var c = document.getElementsByTagName("script"), p = 0; p < c.length; p++) {
                    var f = c[p];
                    if (f.getAttribute("src") == n || f.getAttribute("data-webpack") == e + o) {
                        s = f;
                        break
                    }
                }
            s || (a = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, u.nc && s.setAttribute("nonce", u.nc), s.setAttribute("data-webpack", e + o), s.src = n), t[n] = [r];
            var l = (e, r) => {
                    s.onerror = s.onload = null, clearTimeout(d);
                    var o = t[n];
                    if (delete t[n], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((t => t(r))), e) return e(r)
                },
                d = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: s
                }), 12e4);
            s.onerror = l.bind(null, s.onerror), s.onload = l.bind(null, s.onload), a && document.head.appendChild(s)
        }
    }, u.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, u.nmd = t => (t.paths = [], t.children || (t.children = []), t), u.p = "https://static.zdassets.com/web_widget/latest/", n = u.u, r = u.e, o = {}, i = {}, u.u = function(t) {
        return n(t) + (o.hasOwnProperty(t) ? "?" + o[t] : "")
    }, u.e = function(t) {
        return r(t).catch((function(e) {
            var r = i.hasOwnProperty(t) ? i[t] : 3;
            if (r < 1) {
                var s = n(t);
                throw e.message = "Loading chunk " + t + " failed after 3 retries.\n(" + s + ")", e.request = s, e
            }
            return new Promise((function(e) {
                setTimeout((function() {
                    var n = Date.now();
                    o[t] = n, i[t] = r - 1, e(u.e(t))
                }), 0)
            }))
        }))
    }, (() => {
        var t = {
            774: 0
        };
        u.f.j = (e, n) => {
            var r = u.o(t, e) ? t[e] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else {
                    var o = new Promise(((n, o) => r = t[e] = [n, o]));
                    n.push(r[2] = o);
                    var i = u.p + u.u(e),
                        s = new Error;
                    u.l(i, (n => {
                        if (u.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", s.name = "ChunkLoadError", s.type = o, s.request = i, r[1](s)
                        }
                    }), "chunk-" + e, e)
                }
        };
        var e = (e, n) => {
                var r, o, [i, s, a] = n,
                    c = 0;
                if (i.some((e => 0 !== t[e]))) {
                    for (r in s) u.o(s, r) && (u.m[r] = s[r]);
                    if (a) a(u)
                }
                for (e && e(n); c < i.length; c++) o = i[c], u.o(t, o) && t[o] && t[o][0](), t[o] = 0
            },
            n = globalThis.webpackChunk_zendesk_embeddable_framework = globalThis.webpackChunk_zendesk_embeddable_framework || [];
        n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
    })(), (() => {
        "use strict";
        var t = "6.19.7",
            e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                }, e(t, n)
            };

        function n(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
        var r = function() {
            return r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }, r.apply(this, arguments)
        };

        function o(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function i(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        }

        function s() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]));
            return t
        }
        var a, c = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            p = u(2331),
            f = (0, p.R)(),
            l = "Sentry Logger ",
            d = ["debug", "info", "warn", "error", "log", "assert"];

        function h(t) {
            var e = (0, p.R)();
            if (!("console" in e)) return t();
            var n = e.console,
                r = {};
            d.forEach((function(t) {
                var o = n[t] && n[t].__sentry_original__;
                t in e.console && o && (r[t] = n[t], n[t] = o)
            }));
            try {
                return t()
            } finally {
                Object.keys(r).forEach((function(t) {
                    n[t] = r[t]
                }))
            }
        }

        function v() {
            var t = !1,
                e = {
                    enable: function() {
                        t = !0
                    },
                    disable: function() {
                        t = !1
                    }
                };
            return c ? d.forEach((function(n) {
                e[n] = function() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    t && h((function() {
                        var t;
                        (t = f.console)[n].apply(t, s([l + "[" + n + "]:"], e))
                    }))
                }
            })) : d.forEach((function(t) {
                e[t] = function() {}
            })), e
        }
        a = c ? (0, p.Y)("logger", v) : v();
        var _ = Object.prototype.toString;

        function g(t) {
            switch (_.call(t)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return O(t, Error)
            }
        }

        function y(t, e) {
            return _.call(t) === "[object " + e + "]"
        }

        function m(t) {
            return y(t, "ErrorEvent")
        }

        function b(t) {
            return y(t, "DOMError")
        }

        function w(t) {
            return y(t, "String")
        }

        function x(t) {
            return null === t || "object" != typeof t && "function" != typeof t
        }

        function S(t) {
            return y(t, "Object")
        }

        function E(t) {
            return "undefined" != typeof Event && O(t, Event)
        }

        function k(t) {
            return Boolean(t && t.then && "function" == typeof t.then)
        }

        function O(t, e) {
            try {
                return t instanceof e
            } catch (t) {
                return !1
            }
        }

        function j(t, e) {
            try {
                for (var n = t, r = [], o = 0, i = 0, s = " > ".length, a = void 0; n && o++ < 5 && !("html" === (a = T(n, e)) || o > 1 && i + r.length * s + a.length >= 80);) r.push(a), i += a.length, n = n.parentNode;
                return r.reverse().join(" > ")
            } catch (t) {
                return "<unknown>"
            }
        }

        function T(t, e) {
            var n, r, o, i, s, a = t,
                u = [];
            if (!a || !a.tagName) return "";
            u.push(a.tagName.toLowerCase());
            var c = e && e.length ? e.filter((function(t) {
                return a.getAttribute(t)
            })).map((function(t) {
                return [t, a.getAttribute(t)]
            })) : null;
            if (c && c.length) c.forEach((function(t) {
                u.push("[" + t[0] + '="' + t[1] + '"]')
            }));
            else if (a.id && u.push("#" + a.id), (n = a.className) && w(n))
                for (r = n.split(/\s+/), s = 0; s < r.length; s++) u.push("." + r[s]);
            var p = ["type", "name", "title", "alt"];
            for (s = 0; s < p.length; s++) o = p[s], (i = a.getAttribute(o)) && u.push("[" + o + '="' + i + '"]');
            return u.join("")
        }

        function R(t, e) {
            return void 0 === e && (e = 0), "string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
        }

        function A(t, e) {
            if (!Array.isArray(t)) return "";
            for (var n = [], r = 0; r < t.length; r++) {
                var o = t[r];
                try {
                    n.push(String(o))
                } catch (t) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(e)
        }

        function P(t, e) {
            return !!w(t) && (y(e, "RegExp") ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
        }

        function D(t, e, n) {
            if (e in t) {
                var r = t[e],
                    o = n(r);
                if ("function" == typeof o) try {
                    L(o, r)
                } catch (t) {}
                t[e] = o
            }
        }

        function I(t, e, n) {
            Object.defineProperty(t, e, {
                value: n,
                writable: !0,
                configurable: !0
            })
        }

        function L(t, e) {
            var n = e.prototype || {};
            t.prototype = e.prototype = n, I(t, "__sentry_original__", e)
        }

        function N(t) {
            return t.__sentry_original__
        }

        function C(t) {
            var e = t;
            if (g(t)) e = r({
                message: t.message,
                name: t.name,
                stack: t.stack
            }, z(t));
            else if (E(t)) {
                var n = t;
                e = r({
                    type: n.type,
                    target: M(n.target),
                    currentTarget: M(n.currentTarget)
                }, z(n)), "undefined" != typeof CustomEvent && O(t, CustomEvent) && (e.detail = n.detail)
            }
            return e
        }

        function M(t) {
            try {
                return e = t, "undefined" != typeof Element && O(e, Element) ? j(t) : Object.prototype.toString.call(t)
            } catch (t) {
                return "<unknown>"
            }
            var e
        }

        function z(t) {
            var e = {};
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }

        function q(t, e) {
            void 0 === e && (e = 40);
            var n = Object.keys(C(t));
            if (n.sort(), !n.length) return "[object has no keys]";
            if (n[0].length >= e) return R(n[0], e);
            for (var r = n.length; r > 0; r--) {
                var o = n.slice(0, r).join(", ");
                if (!(o.length > e)) return r === n.length ? o : R(o, e)
            }
            return ""
        }

        function U(t) {
            var e, n;
            if (S(t)) {
                var r = {};
                try {
                    for (var i = o(Object.keys(t)), s = i.next(); !s.done; s = i.next()) {
                        var a = s.value;
                        void 0 !== t[a] && (r[a] = U(t[a]))
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (n = i.return) && n.call(i)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return r
            }
            return Array.isArray(t) ? t.map(U) : t
        }

        function V() {
            var t = (0, p.R)(),
                e = t.crypto || t.msCrypto;
            if (void 0 !== e && e.getRandomValues) {
                var n = new Uint16Array(8);
                e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                var r = function(t) {
                    for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                    return e
                };
                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            }))
        }

        function B(t) {
            if (!t) return {};
            var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e) return {};
            var n = e[6] || "",
                r = e[8] || "";
            return {
                host: e[4],
                path: e[5],
                protocol: e[2],
                relative: e[5] + n + r
            }
        }

        function F(t) {
            return t.exception && t.exception.values ? t.exception.values[0] : void 0
        }

        function W(t) {
            var e = t.message,
                n = t.event_id;
            if (e) return e;
            var r = F(t);
            return r ? r.type && r.value ? r.type + ": " + r.value : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }

        function $(t, e, n) {
            var r = t.exception = t.exception || {},
                o = r.values = r.values || [],
                i = o[0] = o[0] || {};
            i.value || (i.value = e || ""), i.type || (i.type = n || "Error")
        }

        function H(t, e) {
            var n = F(t);
            if (n) {
                var o = n.mechanism;
                if (n.mechanism = r(r(r({}, {
                        type: "generic",
                        handled: !0
                    }), o), e), e && "data" in e) {
                    var i = r(r({}, o && o.data), e.data);
                    n.mechanism.data = i
                }
            }
        }

        function Y(t) {
            if (t && t.__sentry_captured__) return !0;
            try {
                I(t, "__sentry_captured__", !0)
            } catch (t) {}
            return !1
        }
        var K, X = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            G = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            J = function() {
                function t(e) {
                    void 0 === e && (e = {}), this._options = e, this.name = t.id
                }
                return t.prototype.setupOnce = function(e, n) {
                    e((function(e) {
                        var r = n();
                        if (r) {
                            var o = r.getIntegration(t);
                            if (o) {
                                var i = r.getClient(),
                                    u = i ? i.getOptions() : {},
                                    c = function(t, e) {
                                        void 0 === t && (t = {});
                                        void 0 === e && (e = {});
                                        return {
                                            allowUrls: s(t.whitelistUrls || [], t.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
                                            denyUrls: s(t.blacklistUrls || [], t.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
                                            ignoreErrors: s(t.ignoreErrors || [], e.ignoreErrors || [], G),
                                            ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                        }
                                    }(o._options, u);
                                return function(t, e) {
                                    if (e.ignoreInternal && function(t) {
                                            try {
                                                return "SentryError" === t.exception.values[0].type
                                            } catch (t) {}
                                            return !1
                                        }(t)) return X && a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + W(t)), !0;
                                    if (function(t, e) {
                                            if (!e || !e.length) return !1;
                                            return function(t) {
                                                if (t.message) return [t.message];
                                                if (t.exception) try {
                                                    var e = t.exception.values && t.exception.values[0] || {},
                                                        n = e.type,
                                                        r = void 0 === n ? "" : n,
                                                        o = e.value,
                                                        i = void 0 === o ? "" : o;
                                                    return ["" + i, r + ": " + i]
                                                } catch (e) {
                                                    return X && a.error("Cannot extract message for event " + W(t)), []
                                                }
                                                return []
                                            }(t).some((function(t) {
                                                return e.some((function(e) {
                                                    return P(t, e)
                                                }))
                                            }))
                                        }(t, e.ignoreErrors)) return X && a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + W(t)), !0;
                                    if (function(t, e) {
                                            if (!e || !e.length) return !1;
                                            var n = Q(t);
                                            return !!n && e.some((function(t) {
                                                return P(n, t)
                                            }))
                                        }(t, e.denyUrls)) return X && a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + W(t) + ".\nUrl: " + Q(t)), !0;
                                    if (! function(t, e) {
                                            if (!e || !e.length) return !0;
                                            var n = Q(t);
                                            return !n || e.some((function(t) {
                                                return P(n, t)
                                            }))
                                        }(t, e.allowUrls)) return X && a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + W(t) + ".\nUrl: " + Q(t)), !0;
                                    return !1
                                }(e, c) ? null : e
                            }
                        }
                        return e
                    }))
                }, t.id = "InboundFilters", t
            }();

        function Z(t) {
            void 0 === t && (t = []);
            for (var e = t.length - 1; e >= 0; e--) {
                var n = t[e];
                if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
            }
            return null
        }

        function Q(t) {
            try {
                if (t.stacktrace) return Z(t.stacktrace.frames);
                var e;
                try {
                    e = t.exception.values[0].stacktrace.frames
                } catch (t) {}
                return e ? Z(e) : null
            } catch (e) {
                return X && a.error("Cannot extract url for event " + W(t)), null
            }
        }
        var tt = function() {
                function t() {
                    this.name = t.id
                }
                return t.prototype.setupOnce = function() {
                    K = Function.prototype.toString, Function.prototype.toString = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = N(this) || this;
                        return K.apply(n, t)
                    }
                }, t.id = "FunctionToString", t
            }(),
            et = u(3531),
            nt = u(6255),
            rt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

        function ot(t) {
            return new st((function(e) {
                e(t)
            }))
        }

        function it(t) {
            return new st((function(e, n) {
                n(t)
            }))
        }
        var st = function() {
                function t(t) {
                    var e = this;
                    this._state = 0, this._handlers = [], this._resolve = function(t) {
                        e._setResult(1, t)
                    }, this._reject = function(t) {
                        e._setResult(2, t)
                    }, this._setResult = function(t, n) {
                        0 === e._state && (k(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
                    }, this._executeHandlers = function() {
                        if (0 !== e._state) {
                            var t = e._handlers.slice();
                            e._handlers = [], t.forEach((function(t) {
                                t[0] || (1 === e._state && t[1](e._value), 2 === e._state && t[2](e._value), t[0] = !0)
                            }))
                        }
                    };
                    try {
                        t(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
                return t.prototype.then = function(e, n) {
                    var r = this;
                    return new t((function(t, o) {
                        r._handlers.push([!1, function(n) {
                            if (e) try {
                                t(e(n))
                            } catch (t) {
                                o(t)
                            } else t(n)
                        }, function(e) {
                            if (n) try {
                                t(n(e))
                            } catch (t) {
                                o(t)
                            } else o(e)
                        }]), r._executeHandlers()
                    }))
                }, t.prototype.catch = function(t) {
                    return this.then((function(t) {
                        return t
                    }), t)
                }, t.prototype.finally = function(e) {
                    var n = this;
                    return new t((function(t, r) {
                        var o, i;
                        return n.then((function(t) {
                            i = !1, o = t, e && e()
                        }), (function(t) {
                            i = !0, o = t, e && e()
                        })).then((function() {
                            i ? r(o) : t(o)
                        }))
                    }))
                }, t
            }(),
            at = function() {
                function t() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                }
                return t.clone = function(e) {
                    var n = new t;
                    return e && (n._breadcrumbs = s(e._breadcrumbs), n._tags = r({}, e._tags), n._extra = r({}, e._extra), n._contexts = r({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = s(e._eventProcessors), n._requestSession = e._requestSession), n
                }, t.prototype.addScopeListener = function(t) {
                    this._scopeListeners.push(t)
                }, t.prototype.addEventProcessor = function(t) {
                    return this._eventProcessors.push(t), this
                }, t.prototype.setUser = function(t) {
                    return this._user = t || {}, this._session && this._session.update({
                        user: t
                    }), this._notifyScopeListeners(), this
                }, t.prototype.getUser = function() {
                    return this._user
                }, t.prototype.getRequestSession = function() {
                    return this._requestSession
                }, t.prototype.setRequestSession = function(t) {
                    return this._requestSession = t, this
                }, t.prototype.setTags = function(t) {
                    return this._tags = r(r({}, this._tags), t), this._notifyScopeListeners(), this
                }, t.prototype.setTag = function(t, e) {
                    var n;
                    return this._tags = r(r({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                }, t.prototype.setExtras = function(t) {
                    return this._extra = r(r({}, this._extra), t), this._notifyScopeListeners(), this
                }, t.prototype.setExtra = function(t, e) {
                    var n;
                    return this._extra = r(r({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                }, t.prototype.setFingerprint = function(t) {
                    return this._fingerprint = t, this._notifyScopeListeners(), this
                }, t.prototype.setLevel = function(t) {
                    return this._level = t, this._notifyScopeListeners(), this
                }, t.prototype.setTransactionName = function(t) {
                    return this._transactionName = t, this._notifyScopeListeners(), this
                }, t.prototype.setTransaction = function(t) {
                    return this.setTransactionName(t)
                }, t.prototype.setContext = function(t, e) {
                    var n;
                    return null === e ? delete this._contexts[t] : this._contexts = r(r({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                }, t.prototype.setSpan = function(t) {
                    return this._span = t, this._notifyScopeListeners(), this
                }, t.prototype.getSpan = function() {
                    return this._span
                }, t.prototype.getTransaction = function() {
                    var t = this.getSpan();
                    return t && t.transaction
                }, t.prototype.setSession = function(t) {
                    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                }, t.prototype.getSession = function() {
                    return this._session
                }, t.prototype.update = function(e) {
                    if (!e) return this;
                    if ("function" == typeof e) {
                        var n = e(this);
                        return n instanceof t ? n : this
                    }
                    return e instanceof t ? (this._tags = r(r({}, this._tags), e._tags), this._extra = r(r({}, this._extra), e._extra), this._contexts = r(r({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : S(e) && (this._tags = r(r({}, this._tags), e.tags), this._extra = r(r({}, this._extra), e.extra), this._contexts = r(r({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
                }, t.prototype.clear = function() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
                }, t.prototype.addBreadcrumb = function(t, e) {
                    var n = "number" == typeof e ? Math.min(e, 100) : 100;
                    if (n <= 0) return this;
                    var o = r({
                        timestamp: (0, et.yW)()
                    }, t);
                    return this._breadcrumbs = s(this._breadcrumbs, [o]).slice(-n), this._notifyScopeListeners(), this
                }, t.prototype.clearBreadcrumbs = function() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }, t.prototype.applyToEvent = function(t, e) {
                    if (this._extra && Object.keys(this._extra).length && (t.extra = r(r({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = r(r({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = r(r({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = r(r({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                        t.contexts = r({
                            trace: this._span.getTraceContext()
                        }, t.contexts);
                        var n = this._span.transaction && this._span.transaction.name;
                        n && (t.tags = r({
                            transaction: n
                        }, t.tags))
                    }
                    return this._applyFingerprint(t), t.breadcrumbs = s(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = this._sdkProcessingMetadata, this._notifyEventProcessors(s(ut(), this._eventProcessors), t, e)
                }, t.prototype.setSDKProcessingMetadata = function(t) {
                    return this._sdkProcessingMetadata = r(r({}, this._sdkProcessingMetadata), t), this
                }, t.prototype._notifyEventProcessors = function(t, e, n, o) {
                    var i = this;
                    return void 0 === o && (o = 0), new st((function(s, a) {
                        var u = t[o];
                        if (null === e || "function" != typeof u) s(e);
                        else {
                            var c = u(r({}, e), n);
                            k(c) ? c.then((function(e) {
                                return i._notifyEventProcessors(t, e, n, o + 1).then(s)
                            })).then(null, a) : i._notifyEventProcessors(t, c, n, o + 1).then(s).then(null, a)
                        }
                    }))
                }, t.prototype._notifyScopeListeners = function() {
                    var t = this;
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
                        e(t)
                    })), this._notifyingListeners = !1)
                }, t.prototype._applyFingerprint = function(t) {
                    t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                }, t
            }();

        function ut() {
            return (0, p.Y)("globalEventProcessors", (function() {
                return []
            }))
        }

        function ct(t) {
            ut().push(t)
        }
        var pt = function() {
                function t(t) {
                    this.errors = 0, this.sid = V(), this.duration = 0, this.status = "ok", this.init = !0, this.ignoreDuration = !1;
                    var e = (0, et.ph)();
                    this.timestamp = e, this.started = e, t && this.update(t)
                }
                return t.prototype.update = function(t) {
                    if (void 0 === t && (t = {}), t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address), this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || (0, et.ph)(), t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration), t.sid && (this.sid = 32 === t.sid.length ? t.sid : V()), void 0 !== t.init && (this.init = t.init), !this.did && t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), this.ignoreDuration) this.duration = void 0;
                    else if ("number" == typeof t.duration) this.duration = t.duration;
                    else {
                        var e = this.timestamp - this.started;
                        this.duration = e >= 0 ? e : 0
                    }
                    t.release && (this.release = t.release), t.environment && (this.environment = t.environment), !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress), !this.userAgent && t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
                }, t.prototype.close = function(t) {
                    t ? this.update({
                        status: t
                    }) : "ok" === this.status ? this.update({
                        status: "exited"
                    }) : this.update()
                }, t.prototype.toJSON = function() {
                    return U({
                        sid: "" + this.sid,
                        init: this.init,
                        started: new Date(1e3 * this.started).toISOString(),
                        timestamp: new Date(1e3 * this.timestamp).toISOString(),
                        status: this.status,
                        errors: this.errors,
                        did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                        duration: this.duration,
                        attrs: {
                            release: this.release,
                            environment: this.environment,
                            ip_address: this.ipAddress,
                            user_agent: this.userAgent
                        }
                    })
                }, t
            }(),
            ft = function() {
                function t(t, e, n) {
                    void 0 === e && (e = new at), void 0 === n && (n = 4), this._version = n, this._stack = [{}], this.getStackTop().scope = e, t && this.bindClient(t)
                }
                return t.prototype.isOlderThan = function(t) {
                    return this._version < t
                }, t.prototype.bindClient = function(t) {
                    this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                }, t.prototype.pushScope = function() {
                    var t = at.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: t
                    }), t
                }, t.prototype.popScope = function() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }, t.prototype.withScope = function(t) {
                    var e = this.pushScope();
                    try {
                        t(e)
                    } finally {
                        this.popScope()
                    }
                }, t.prototype.getClient = function() {
                    return this.getStackTop().client
                }, t.prototype.getScope = function() {
                    return this.getStackTop().scope
                }, t.prototype.getStack = function() {
                    return this._stack
                }, t.prototype.getStackTop = function() {
                    return this._stack[this._stack.length - 1]
                }, t.prototype.captureException = function(t, e) {
                    var n = this._lastEventId = e && e.event_id ? e.event_id : V(),
                        o = e;
                    if (!e) {
                        var i = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (t) {
                            i = t
                        }
                        o = {
                            originalException: t,
                            syntheticException: i
                        }
                    }
                    return this._invokeClient("captureException", t, r(r({}, o), {
                        event_id: n
                    })), n
                }, t.prototype.captureMessage = function(t, e, n) {
                    var o = this._lastEventId = n && n.event_id ? n.event_id : V(),
                        i = n;
                    if (!n) {
                        var s = void 0;
                        try {
                            throw new Error(t)
                        } catch (t) {
                            s = t
                        }
                        i = {
                            originalException: t,
                            syntheticException: s
                        }
                    }
                    return this._invokeClient("captureMessage", t, e, r(r({}, i), {
                        event_id: o
                    })), o
                }, t.prototype.captureEvent = function(t, e) {
                    var n = e && e.event_id ? e.event_id : V();
                    return "transaction" !== t.type && (this._lastEventId = n), this._invokeClient("captureEvent", t, r(r({}, e), {
                        event_id: n
                    })), n
                }, t.prototype.lastEventId = function() {
                    return this._lastEventId
                }, t.prototype.addBreadcrumb = function(t, e) {
                    var n = this.getStackTop(),
                        o = n.scope,
                        i = n.client;
                    if (o && i) {
                        var s = i.getOptions && i.getOptions() || {},
                            a = s.beforeBreadcrumb,
                            u = void 0 === a ? null : a,
                            c = s.maxBreadcrumbs,
                            p = void 0 === c ? 100 : c;
                        if (!(p <= 0)) {
                            var f = (0, et.yW)(),
                                l = r({
                                    timestamp: f
                                }, t),
                                d = u ? h((function() {
                                    return u(l, e)
                                })) : l;
                            null !== d && o.addBreadcrumb(d, p)
                        }
                    }
                }, t.prototype.setUser = function(t) {
                    var e = this.getScope();
                    e && e.setUser(t)
                }, t.prototype.setTags = function(t) {
                    var e = this.getScope();
                    e && e.setTags(t)
                }, t.prototype.setExtras = function(t) {
                    var e = this.getScope();
                    e && e.setExtras(t)
                }, t.prototype.setTag = function(t, e) {
                    var n = this.getScope();
                    n && n.setTag(t, e)
                }, t.prototype.setExtra = function(t, e) {
                    var n = this.getScope();
                    n && n.setExtra(t, e)
                }, t.prototype.setContext = function(t, e) {
                    var n = this.getScope();
                    n && n.setContext(t, e)
                }, t.prototype.configureScope = function(t) {
                    var e = this.getStackTop(),
                        n = e.scope,
                        r = e.client;
                    n && r && t(n)
                }, t.prototype.run = function(t) {
                    var e = dt(this);
                    try {
                        t(this)
                    } finally {
                        dt(e)
                    }
                }, t.prototype.getIntegration = function(t) {
                    var e = this.getClient();
                    if (!e) return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return rt && a.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                    }
                }, t.prototype.startSpan = function(t) {
                    return this._callExtensionMethod("startSpan", t)
                }, t.prototype.startTransaction = function(t, e) {
                    return this._callExtensionMethod("startTransaction", t, e)
                }, t.prototype.traceHeaders = function() {
                    return this._callExtensionMethod("traceHeaders")
                }, t.prototype.captureSession = function(t) {
                    if (void 0 === t && (t = !1), t) return this.endSession();
                    this._sendSessionUpdate()
                }, t.prototype.endSession = function() {
                    var t = this.getStackTop(),
                        e = t && t.scope,
                        n = e && e.getSession();
                    n && n.close(), this._sendSessionUpdate(), e && e.setSession()
                }, t.prototype.startSession = function(t) {
                    var e = this.getStackTop(),
                        n = e.scope,
                        o = e.client,
                        i = o && o.getOptions() || {},
                        s = i.release,
                        a = i.environment,
                        u = ((0, p.R)().navigator || {}).userAgent,
                        c = new pt(r(r(r({
                            release: s,
                            environment: a
                        }, n && {
                            user: n.getUser()
                        }), u && {
                            userAgent: u
                        }), t));
                    if (n) {
                        var f = n.getSession && n.getSession();
                        f && "ok" === f.status && f.update({
                            status: "exited"
                        }), this.endSession(), n.setSession(c)
                    }
                    return c
                }, t.prototype._sendSessionUpdate = function() {
                    var t = this.getStackTop(),
                        e = t.scope,
                        n = t.client;
                    if (e) {
                        var r = e.getSession && e.getSession();
                        r && n && n.captureSession && n.captureSession(r)
                    }
                }, t.prototype._invokeClient = function(t) {
                    for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var o = this.getStackTop(),
                        i = o.scope,
                        a = o.client;
                    a && a[t] && (e = a)[t].apply(e, s(n, [i]))
                }, t.prototype._callExtensionMethod = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    var r = lt(),
                        o = r.__SENTRY__;
                    if (o && o.extensions && "function" == typeof o.extensions[t]) return o.extensions[t].apply(this, e);
                    rt && a.warn("Extension method " + t + " couldn't be found, doing nothing.")
                }, t
            }();

        function lt() {
            var t = (0, p.R)();
            return t.__SENTRY__ = t.__SENTRY__ || {
                extensions: {},
                hub: void 0
            }, t
        }

        function dt(t) {
            var e = lt(),
                n = _t(e);
            return gt(e, t), n
        }

        function ht() {
            var t = lt();
            return vt(t) && !_t(t).isOlderThan(4) || gt(t, new ft), (0, nt.KV)() ? function(t) {
                try {
                    var e = lt().__SENTRY__,
                        n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                    if (!n) return _t(t);
                    if (!vt(n) || _t(n).isOlderThan(4)) {
                        var r = _t(t).getStackTop();
                        gt(n, new ft(r.client, at.clone(r.scope)))
                    }
                    return _t(n)
                } catch (e) {
                    return _t(t)
                }
            }(t) : _t(t)
        }

        function vt(t) {
            return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
        }

        function _t(t) {
            return (0, p.Y)("hub", (function() {
                return new ft
            }), t)
        }

        function gt(t, e) {
            return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
        }

        function yt(t) {
            if (!t.length) return [];
            var e = t,
                n = e[0].function || "",
                o = e[e.length - 1].function || "";
            return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== o.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.slice(0, 50).map((function(t) {
                return r(r({}, t), {
                    filename: t.filename || e[0].filename,
                    function: t.function || "?"
                })
            })).reverse()
        }
        var mt = "<anonymous>";

        function bt(t) {
            try {
                return t && "function" == typeof t && t.name || mt
            } catch (t) {
                return mt
            }
        }

        function wt() {
            if (!("fetch" in (0, p.R)())) return !1;
            try {
                return new Headers, new Request(""), new Response, !0
            } catch (t) {
                return !1
            }
        }

        function xt(t) {
            return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        }

        function St() {
            if (!wt()) return !1;
            try {
                return new Request("_", {
                    referrerPolicy: "origin"
                }), !0
            } catch (t) {
                return !1
            }
        }
        var Et, kt = (0, p.R)(),
            Ot = {},
            jt = {};

        function Tt(t) {
            if (!jt[t]) switch (jt[t] = !0, t) {
                case "console":
                    ! function() {
                        if (!("console" in kt)) return;
                        d.forEach((function(t) {
                            t in kt.console && D(kt.console, t, (function(e) {
                                return function() {
                                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                    At("console", {
                                        args: n,
                                        level: t
                                    }), e && e.apply(kt.console, n)
                                }
                            }))
                        }))
                    }();
                    break;
                case "dom":
                    ! function() {
                        if (!("document" in kt)) return;
                        var t = At.bind(null, "dom"),
                            e = Nt(t, !0);
                        kt.document.addEventListener("click", e, !1), kt.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((function(e) {
                            var n = kt[e] && kt[e].prototype;
                            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (D(n, "addEventListener", (function(e) {
                                return function(n, r, o) {
                                    if ("click" === n || "keypress" == n) try {
                                        var i = this,
                                            s = i.__sentry_instrumentation_handlers__ = i.__sentry_instrumentation_handlers__ || {},
                                            a = s[n] = s[n] || {
                                                refCount: 0
                                            };
                                        if (!a.handler) {
                                            var u = Nt(t);
                                            a.handler = u, e.call(this, n, u, o)
                                        }
                                        a.refCount += 1
                                    } catch (t) {}
                                    return e.call(this, n, r, o)
                                }
                            })), D(n, "removeEventListener", (function(t) {
                                return function(e, n, r) {
                                    if ("click" === e || "keypress" == e) try {
                                        var o = this,
                                            i = o.__sentry_instrumentation_handlers__ || {},
                                            s = i[e];
                                        s && (s.refCount -= 1, s.refCount <= 0 && (t.call(this, e, s.handler, r), s.handler = void 0, delete i[e]), 0 === Object.keys(i).length && delete o.__sentry_instrumentation_handlers__)
                                    } catch (t) {}
                                    return t.call(this, e, n, r)
                                }
                            })))
                        }))
                    }();
                    break;
                case "xhr":
                    ! function() {
                        if (!("XMLHttpRequest" in kt)) return;
                        var t = XMLHttpRequest.prototype;
                        D(t, "open", (function(t) {
                            return function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var r = this,
                                    o = e[1],
                                    i = r.__sentry_xhr__ = {
                                        method: w(e[0]) ? e[0].toUpperCase() : e[0],
                                        url: e[1]
                                    };
                                w(o) && "POST" === i.method && o.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                                var s = function() {
                                    if (4 === r.readyState) {
                                        try {
                                            i.status_code = r.status
                                        } catch (t) {}
                                        At("xhr", {
                                            args: e,
                                            endTimestamp: Date.now(),
                                            startTimestamp: Date.now(),
                                            xhr: r
                                        })
                                    }
                                };
                                return "onreadystatechange" in r && "function" == typeof r.onreadystatechange ? D(r, "onreadystatechange", (function(t) {
                                    return function() {
                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        return s(), t.apply(r, e)
                                    }
                                })) : r.addEventListener("readystatechange", s), t.apply(r, e)
                            }
                        })), D(t, "send", (function(t) {
                            return function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]), At("xhr", {
                                    args: e,
                                    startTimestamp: Date.now(),
                                    xhr: this
                                }), t.apply(this, e)
                            }
                        }))
                    }();
                    break;
                case "fetch":
                    ! function() {
                        if (! function() {
                                if (!wt()) return !1;
                                var t = (0, p.R)();
                                if (xt(t.fetch)) return !0;
                                var e = !1,
                                    n = t.document;
                                if (n && "function" == typeof n.createElement) try {
                                    var r = n.createElement("iframe");
                                    r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = xt(r.contentWindow.fetch)), n.head.removeChild(r)
                                } catch (t) {
                                    c && a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                                }
                                return e
                            }()) return;
                        D(kt, "fetch", (function(t) {
                            return function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var o = {
                                    args: e,
                                    fetchData: {
                                        method: Pt(e),
                                        url: Dt(e)
                                    },
                                    startTimestamp: Date.now()
                                };
                                return At("fetch", r({}, o)), t.apply(kt, e).then((function(t) {
                                    return At("fetch", r(r({}, o), {
                                        endTimestamp: Date.now(),
                                        response: t
                                    })), t
                                }), (function(t) {
                                    throw At("fetch", r(r({}, o), {
                                        endTimestamp: Date.now(),
                                        error: t
                                    })), t
                                }))
                            }
                        }))
                    }();
                    break;
                case "history":
                    ! function() {
                        if (! function() {
                                var t = (0, p.R)(),
                                    e = t.chrome,
                                    n = e && e.app && e.app.runtime,
                                    r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                                return !n && r
                            }()) return;
                        var t = kt.onpopstate;

                        function e(t) {
                            return function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var r = e.length > 2 ? e[2] : void 0;
                                if (r) {
                                    var o = Et,
                                        i = String(r);
                                    Et = i, At("history", {
                                        from: o,
                                        to: i
                                    })
                                }
                                return t.apply(this, e)
                            }
                        }
                        kt.onpopstate = function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = kt.location.href,
                                o = Et;
                            if (Et = r, At("history", {
                                    from: o,
                                    to: r
                                }), t) try {
                                return t.apply(this, e)
                            } catch (t) {}
                        }, D(kt.history, "pushState", e), D(kt.history, "replaceState", e)
                    }();
                    break;
                case "error":
                    Ct = kt.onerror, kt.onerror = function(t, e, n, r, o) {
                        return At("error", {
                            column: r,
                            error: o,
                            line: n,
                            msg: t,
                            url: e
                        }), !!Ct && Ct.apply(this, arguments)
                    };
                    break;
                case "unhandledrejection":
                    Mt = kt.onunhandledrejection, kt.onunhandledrejection = function(t) {
                        return At("unhandledrejection", t), !Mt || Mt.apply(this, arguments)
                    };
                    break;
                default:
                    return void(c && a.warn("unknown instrumentation type:", t))
            }
        }

        function Rt(t, e) {
            Ot[t] = Ot[t] || [], Ot[t].push(e), Tt(t)
        }

        function At(t, e) {
            var n, r;
            if (t && Ot[t]) try {
                for (var i = o(Ot[t] || []), s = i.next(); !s.done; s = i.next()) {
                    var u = s.value;
                    try {
                        u(e)
                    } catch (e) {
                        c && a.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + bt(u) + "\nError:", e)
                    }
                }
            } catch (t) {
                n = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
        }

        function Pt(t) {
            return void 0 === t && (t = []), "Request" in kt && O(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
        }

        function Dt(t) {
            return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in kt && O(t[0], Request) ? t[0].url : String(t[0])
        }
        var It, Lt;

        function Nt(t, e) {
            return void 0 === e && (e = !1),
                function(n) {
                    if (n && Lt !== n && ! function(t) {
                            if ("keypress" !== t.type) return !1;
                            try {
                                var e = t.target;
                                if (!e || !e.tagName) return !0;
                                if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                            } catch (t) {}
                            return !0
                        }(n)) {
                        var r = "keypress" === n.type ? "input" : n.type;
                        (void 0 === It || function(t, e) {
                            if (!t) return !0;
                            if (t.type !== e.type) return !0;
                            try {
                                if (t.target !== e.target) return !0
                            } catch (t) {}
                            return !1
                        }(Lt, n)) && (t({
                            event: n,
                            name: r,
                            global: e
                        }), Lt = n), clearTimeout(It), It = kt.setTimeout((function() {
                            It = void 0
                        }), 1e3)
                    }
                }
        }
        var Ct = null;
        var Mt = null;
        var zt = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? function(t, e) {
                return t.__proto__ = e, t
            } : function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
                return t
            });
        var qt = function(t) {
                function e(e) {
                    var n = this.constructor,
                        r = t.call(this, e) || this;
                    return r.message = e, r.name = n.prototype.constructor.name, zt(r, n.prototype), r
                }
                return n(e, t), e
            }(Error),
            Ut = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

        function Vt(t, e) {
            void 0 === e && (e = !1);
            var n = t.host,
                r = t.path,
                o = t.pass,
                i = t.port,
                s = t.projectId;
            return t.protocol + "://" + t.publicKey + (e && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + s
        }

        function Bt(t) {
            return "user" in t && !("publicKey" in t) && (t.publicKey = t.user), {
                user: t.publicKey || "",
                protocol: t.protocol,
                publicKey: t.publicKey || "",
                pass: t.pass || "",
                host: t.host,
                port: t.port || "",
                path: t.path || "",
                projectId: t.projectId
            }
        }

        function Ft(t) {
            var e = "string" == typeof t ? function(t) {
                var e = Ut.exec(t);
                if (!e) throw new qt("Invalid Sentry Dsn: " + t);
                var n = i(e.slice(1), 6),
                    r = n[0],
                    o = n[1],
                    s = n[2],
                    a = void 0 === s ? "" : s,
                    u = n[3],
                    c = n[4],
                    p = void 0 === c ? "" : c,
                    f = "",
                    l = n[5],
                    d = l.split("/");
                if (d.length > 1 && (f = d.slice(0, -1).join("/"), l = d.pop()), l) {
                    var h = l.match(/^\d+/);
                    h && (l = h[0])
                }
                return Bt({
                    host: u,
                    pass: a,
                    path: f,
                    projectId: l,
                    port: p,
                    protocol: r,
                    publicKey: o
                })
            }(t) : Bt(t);
            return function(t) {
                if (c) {
                    var e = t.port,
                        n = t.projectId,
                        r = t.protocol;
                    if (["protocol", "publicKey", "host", "projectId"].forEach((function(e) {
                            if (!t[e]) throw new qt("Invalid Sentry Dsn: " + e + " missing")
                        })), !n.match(/^\d+$/)) throw new qt("Invalid Sentry Dsn: Invalid projectId " + n);
                    if (! function(t) {
                            return "http" === t || "https" === t
                        }(r)) throw new qt("Invalid Sentry Dsn: Invalid protocol " + r);
                    if (e && isNaN(parseInt(e, 10))) throw new qt("Invalid Sentry Dsn: Invalid port " + e)
                }
            }(e), e
        }

        function Wt(t, e, n) {
            void 0 === e && (e = 1 / 0), void 0 === n && (n = 1 / 0);
            try {
                return Ht("", t, e, n)
            } catch (t) {
                return {
                    ERROR: "**non-serializable** (" + t + ")"
                }
            }
        }

        function $t(t, e, n) {
            void 0 === e && (e = 3), void 0 === n && (n = 102400);
            var r, o = Wt(t, e);
            return r = o,
                function(t) {
                    return ~-encodeURI(t).split(/%..|./).length
                }(JSON.stringify(r)) > n ? $t(t, e - 1, n) : o
        }

        function Ht(t, e, n, r, o) {
            var s, a;
            void 0 === n && (n = 1 / 0), void 0 === r && (r = 1 / 0), void 0 === o && (s = "function" == typeof WeakSet, a = s ? new WeakSet : [], o = [function(t) {
                if (s) return !!a.has(t) || (a.add(t), !1);
                for (var e = 0; e < a.length; e++)
                    if (a[e] === t) return !0;
                return a.push(t), !1
            }, function(t) {
                if (s) a.delete(t);
                else
                    for (var e = 0; e < a.length; e++)
                        if (a[e] === t) {
                            a.splice(e, 1);
                            break
                        }
            }]);
            var c, p = i(o, 2),
                f = p[0],
                l = p[1],
                d = e;
            if (d && "function" == typeof d.toJSON) try {
                return d.toJSON()
            } catch (t) {}
            if (null === e || ["number", "boolean", "string"].includes(typeof e) && ("number" != typeof(c = e) || c == c)) return e;
            var h = function(t, e) {
                try {
                    return "domain" === t && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : void 0 !== u.g && e === u.g ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : function(t) {
                        return S(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
                    }(e) ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + bt(e) + "]" : "symbol" == typeof e ? "[" + String(e) + "]" : "bigint" == typeof e ? "[BigInt: " + String(e) + "]" : "[object " + Object.getPrototypeOf(e).constructor.name + "]"
                } catch (t) {
                    return "**non-serializable** (" + t + ")"
                }
            }(t, e);
            if (!h.startsWith("[object ")) return h;
            if (0 === n) return h.replace("object ", "");
            if (f(e)) return "[Circular ~]";
            var v = Array.isArray(e) ? [] : {},
                _ = 0,
                y = g(e) || E(e) ? C(e) : e;
            for (var m in y)
                if (Object.prototype.hasOwnProperty.call(y, m)) {
                    if (_ >= r) {
                        v[m] = "[MaxProperties ~]";
                        break
                    }
                    var b = y[m];
                    v[m] = Ht(m, b, n - 1, r, o), _ += 1
                }
            return l(e), v
        }
        var Yt = [];

        function Kt(t) {
            return t.reduce((function(t, e) {
                return t.every((function(t) {
                    return e.name !== t.name
                })) && t.push(e), t
            }), [])
        }

        function Xt(t) {
            var e = {};
            return function(t) {
                var e = t.defaultIntegrations && s(t.defaultIntegrations) || [],
                    n = t.integrations,
                    r = s(Kt(e));
                Array.isArray(n) ? r = s(r.filter((function(t) {
                    return n.every((function(e) {
                        return e.name !== t.name
                    }))
                })), Kt(n)) : "function" == typeof n && (r = n(r), r = Array.isArray(r) ? r : [r]);
                var o = r.map((function(t) {
                        return t.name
                    })),
                    i = "Debug";
                return -1 !== o.indexOf(i) && r.push.apply(r, s(r.splice(o.indexOf(i), 1))), r
            }(t).forEach((function(t) {
                e[t.name] = t,
                    function(t) {
                        -1 === Yt.indexOf(t.name) && (t.setupOnce(ct, ht), Yt.push(t.name), X && a.log("Integration installed: " + t.name))
                    }(t)
            })), I(e, "initialized", !0), e
        }
        var Gt = "Not capturing exception because it's already been captured.",
            Jt = function() {
                function t(t, e) {
                    this._integrations = {}, this._numProcessing = 0, this._backend = new t(e), this._options = e, e.dsn && (this._dsn = Ft(e.dsn))
                }
                return t.prototype.captureException = function(t, e, n) {
                    var r = this;
                    if (!Y(t)) {
                        var o = e && e.event_id;
                        return this._process(this._getBackend().eventFromException(t, e).then((function(t) {
                            return r._captureEvent(t, e, n)
                        })).then((function(t) {
                            o = t
                        }))), o
                    }
                    X && a.log(Gt)
                }, t.prototype.captureMessage = function(t, e, n, r) {
                    var o = this,
                        i = n && n.event_id,
                        s = x(t) ? this._getBackend().eventFromMessage(String(t), e, n) : this._getBackend().eventFromException(t, n);
                    return this._process(s.then((function(t) {
                        return o._captureEvent(t, n, r)
                    })).then((function(t) {
                        i = t
                    }))), i
                }, t.prototype.captureEvent = function(t, e, n) {
                    if (!(e && e.originalException && Y(e.originalException))) {
                        var r = e && e.event_id;
                        return this._process(this._captureEvent(t, e, n).then((function(t) {
                            r = t
                        }))), r
                    }
                    X && a.log(Gt)
                }, t.prototype.captureSession = function(t) {
                    this._isEnabled() ? "string" != typeof t.release ? X && a.warn("Discarded session because of missing or non-string release") : (this._sendSession(t), t.update({
                        init: !1
                    })) : X && a.warn("SDK not enabled, will not capture session.")
                }, t.prototype.getDsn = function() {
                    return this._dsn
                }, t.prototype.getOptions = function() {
                    return this._options
                }, t.prototype.getTransport = function() {
                    return this._getBackend().getTransport()
                }, t.prototype.flush = function(t) {
                    var e = this;
                    return this._isClientDoneProcessing(t).then((function(n) {
                        return e.getTransport().close(t).then((function(t) {
                            return n && t
                        }))
                    }))
                }, t.prototype.close = function(t) {
                    var e = this;
                    return this.flush(t).then((function(t) {
                        return e.getOptions().enabled = !1, t
                    }))
                }, t.prototype.setupIntegrations = function() {
                    this._isEnabled() && !this._integrations.initialized && (this._integrations = Xt(this._options))
                }, t.prototype.getIntegration = function(t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (e) {
                        return X && a.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                    }
                }, t.prototype._updateSessionFromEvent = function(t, e) {
                    var n, i, s = !1,
                        a = !1,
                        u = e.exception && e.exception.values;
                    if (u) {
                        a = !0;
                        try {
                            for (var c = o(u), p = c.next(); !p.done; p = c.next()) {
                                var f = p.value.mechanism;
                                if (f && !1 === f.handled) {
                                    s = !0;
                                    break
                                }
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                p && !p.done && (i = c.return) && i.call(c)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                    var l = "ok" === t.status;
                    (l && 0 === t.errors || l && s) && (t.update(r(r({}, s && {
                        status: "crashed"
                    }), {
                        errors: t.errors || Number(a || s)
                    })), this.captureSession(t))
                }, t.prototype._sendSession = function(t) {
                    this._getBackend().sendSession(t)
                }, t.prototype._isClientDoneProcessing = function(t) {
                    var e = this;
                    return new st((function(n) {
                        var r = 0,
                            o = setInterval((function() {
                                0 == e._numProcessing ? (clearInterval(o), n(!0)) : (r += 1, t && r >= t && (clearInterval(o), n(!1)))
                            }), 1)
                    }))
                }, t.prototype._getBackend = function() {
                    return this._backend
                }, t.prototype._isEnabled = function() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }, t.prototype._prepareEvent = function(t, e, n) {
                    var o = this,
                        i = this.getOptions(),
                        s = i.normalizeDepth,
                        a = void 0 === s ? 3 : s,
                        u = i.normalizeMaxBreadth,
                        c = void 0 === u ? 1e3 : u,
                        p = r(r({}, t), {
                            event_id: t.event_id || (n && n.event_id ? n.event_id : V()),
                            timestamp: t.timestamp || (0, et.yW)()
                        });
                    this._applyClientOptions(p), this._applyIntegrationsMetadata(p);
                    var f = e;
                    n && n.captureContext && (f = at.clone(f).update(n.captureContext));
                    var l = ot(p);
                    return f && (l = f.applyToEvent(p, n)), l.then((function(t) {
                        return t && (t.sdkProcessingMetadata = r(r({}, t.sdkProcessingMetadata), {
                            normalizeDepth: Wt(a) + " (" + typeof a + ")"
                        })), "number" == typeof a && a > 0 ? o._normalizeEvent(t, a, c) : t
                    }))
                }, t.prototype._normalizeEvent = function(t, e, n) {
                    if (!t) return null;
                    var o = r(r(r(r(r({}, t), t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map((function(t) {
                            return r(r({}, t), t.data && {
                                data: Wt(t.data, e, n)
                            })
                        }))
                    }), t.user && {
                        user: Wt(t.user, e, n)
                    }), t.contexts && {
                        contexts: Wt(t.contexts, e, n)
                    }), t.extra && {
                        extra: Wt(t.extra, e, n)
                    });
                    return t.contexts && t.contexts.trace && (o.contexts.trace = t.contexts.trace), o.sdkProcessingMetadata = r(r({}, o.sdkProcessingMetadata), {
                        baseClientNormalized: !0
                    }), o
                }, t.prototype._applyClientOptions = function(t) {
                    var e = this.getOptions(),
                        n = e.environment,
                        r = e.release,
                        o = e.dist,
                        i = e.maxValueLength,
                        s = void 0 === i ? 250 : i;
                    "environment" in t || (t.environment = "environment" in e ? n : "production"), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = R(t.message, s));
                    var a = t.exception && t.exception.values && t.exception.values[0];
                    a && a.value && (a.value = R(a.value, s));
                    var u = t.request;
                    u && u.url && (u.url = R(u.url, s))
                }, t.prototype._applyIntegrationsMetadata = function(t) {
                    var e = Object.keys(this._integrations);
                    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = s(t.sdk.integrations || [], e))
                }, t.prototype._sendEvent = function(t) {
                    this._getBackend().sendEvent(t)
                }, t.prototype._captureEvent = function(t, e, n) {
                    return this._processEvent(t, e, n).then((function(t) {
                        return t.event_id
                    }), (function(t) {
                        X && a.error(t)
                    }))
                }, t.prototype._processEvent = function(t, e, n) {
                    var r = this,
                        o = this.getOptions(),
                        i = o.beforeSend,
                        s = o.sampleRate,
                        a = this.getTransport();

                    function u(t, e) {
                        a.recordLostEvent && a.recordLostEvent(t, e)
                    }
                    if (!this._isEnabled()) return it(new qt("SDK not enabled, will not capture event."));
                    var c = "transaction" === t.type;
                    return !c && "number" == typeof s && Math.random() > s ? (u("sample_rate", "event"), it(new qt("Discarding event because it's not included in the random sample (sampling rate = " + s + ")"))) : this._prepareEvent(t, n, e).then((function(n) {
                        if (null === n) throw u("event_processor", t.type || "event"), new qt("An event processor returned null, will not send event.");
                        return e && e.data && !0 === e.data.__sentry__ || c || !i ? n : function(t) {
                            var e = "`beforeSend` method has to return `null` or a valid event.";
                            if (k(t)) return t.then((function(t) {
                                if (!S(t) && null !== t) throw new qt(e);
                                return t
                            }), (function(t) {
                                throw new qt("beforeSend rejected with " + t)
                            }));
                            if (!S(t) && null !== t) throw new qt(e);
                            return t
                        }(i(n, e))
                    })).then((function(e) {
                        if (null === e) throw u("before_send", t.type || "event"), new qt("`beforeSend` returned `null`, will not send event.");
                        var o = n && n.getSession && n.getSession();
                        return !c && o && r._updateSessionFromEvent(o, e), r._sendEvent(e), e
                    })).then(null, (function(t) {
                        if (t instanceof qt) throw t;
                        throw r.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }), new qt("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                    }))
                }, t.prototype._process = function(t) {
                    var e = this;
                    this._numProcessing += 1, t.then((function(t) {
                        return e._numProcessing -= 1, t
                    }), (function(t) {
                        return e._numProcessing -= 1, t
                    }))
                }, t
            }();
        ! function() {
            function t(t, e, n) {
                void 0 === e && (e = {}), this.dsn = t, this._dsnObject = Ft(t), this.metadata = e, this._tunnel = n
            }
            t.prototype.getDsn = function() {
                return this._dsnObject
            }, t.prototype.forceEnvelope = function() {
                return !!this._tunnel
            }, t.prototype.getBaseApiEndpoint = function() {
                return Qt(this._dsnObject)
            }, t.prototype.getStoreEndpoint = function() {
                return ne(this._dsnObject)
            }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return re(this._dsnObject)
            }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return oe(this._dsnObject, this._tunnel)
            }
        }();

        function Zt(t, e, n) {
            return {
                initDsn: t,
                metadata: e || {},
                dsn: Ft(t),
                tunnel: n
            }
        }

        function Qt(t) {
            var e = t.protocol ? t.protocol + ":" : "",
                n = t.port ? ":" + t.port : "";
            return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
        }

        function te(t, e) {
            return "" + Qt(t) + t.projectId + "/" + e + "/"
        }

        function ee(t) {
            return e = {
                sentry_key: t.publicKey,
                sentry_version: "7"
            }, Object.keys(e).map((function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            })).join("&");
            var e
        }

        function ne(t) {
            return te(t, "store")
        }

        function re(t) {
            return ne(t) + "?" + ee(t)
        }

        function oe(t, e) {
            return e || function(t) {
                return te(t, "envelope")
            }(t) + "?" + ee(t)
        }

        function ie(t, e) {
            return void 0 === e && (e = []), [t, e]
        }

        function se(t) {
            var e = i(t, 2),
                n = e[0],
                r = e[1],
                o = JSON.stringify(n);
            return r.reduce((function(t, e) {
                var n = i(e, 2),
                    r = n[0],
                    o = n[1],
                    s = x(o) ? String(o) : JSON.stringify(o);
                return t + "\n" + JSON.stringify(r) + "\n" + s
            }), o)
        }

        function ae(t) {
            if (t.metadata && t.metadata.sdk) {
                var e = t.metadata.sdk;
                return {
                    name: e.name,
                    version: e.version
                }
            }
        }

        function ue(t, e) {
            return e ? (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = s(t.sdk.integrations || [], e.integrations || []), t.sdk.packages = s(t.sdk.packages || [], e.packages || []), t) : t
        }

        function ce(t, e) {
            var n = ae(e),
                o = "aggregates" in t ? "sessions" : "session";
            return [ie(r(r({
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            }), !!e.tunnel && {
                dsn: Vt(e.dsn)
            }), [
                [{
                    type: o
                }, t]
            ]), o]
        }
        var pe, fe = function() {
                function t() {}
                return t.prototype.sendEvent = function(t) {
                    return ot({
                        reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                        status: "skipped"
                    })
                }, t.prototype.close = function(t) {
                    return ot(!0)
                }, t
            }(),
            le = function() {
                function t(t) {
                    this._options = t, this._options.dsn || X && a.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
                }
                return t.prototype.eventFromException = function(t, e) {
                    throw new qt("Backend has to implement `eventFromException` method")
                }, t.prototype.eventFromMessage = function(t, e, n) {
                    throw new qt("Backend has to implement `eventFromMessage` method")
                }, t.prototype.sendEvent = function(t) {
                    if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                        var e = function(t, e) {
                            var n = ae(e),
                                o = t.type || "event",
                                i = (t.sdkProcessingMetadata || {}).transactionSampling || {},
                                s = i.method,
                                a = i.rate;
                            return ue(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized || (t.tags.skippedNormalization = !0, t.extra.normalizeDepth = t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"), delete t.sdkProcessingMetadata, ie(r(r({
                                event_id: t.event_id,
                                sent_at: (new Date).toISOString()
                            }, n && {
                                sdk: n
                            }), !!e.tunnel && {
                                dsn: Vt(e.dsn)
                            }), [
                                [{
                                    type: o,
                                    sample_rates: [{
                                        id: s,
                                        rate: a
                                    }]
                                }, t]
                            ])
                        }(t, Zt(this._options.dsn, this._options._metadata, this._options.tunnel));
                        this._newTransport.send(e).then(null, (function(t) {
                            X && a.error("Error while sending event:", t)
                        }))
                    } else this._transport.sendEvent(t).then(null, (function(t) {
                        X && a.error("Error while sending event:", t)
                    }))
                }, t.prototype.sendSession = function(t) {
                    if (this._transport.sendSession)
                        if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                            var e = i(ce(t, Zt(this._options.dsn, this._options._metadata, this._options.tunnel)), 1)[0];
                            this._newTransport.send(e).then(null, (function(t) {
                                X && a.error("Error while sending session:", t)
                            }))
                        } else this._transport.sendSession(t).then(null, (function(t) {
                            X && a.error("Error while sending session:", t)
                        }));
                    else X && a.warn("Dropping session because custom transport doesn't implement sendSession")
                }, t.prototype.getTransport = function() {
                    return this._transport
                }, t.prototype._setupTransport = function() {
                    return new fe
                }, t
            }();
        ! function(t) {
            t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
        }(pe || (pe = {}));
        var de = "?";

        function he(t, e, n, r) {
            var o = {
                filename: t,
                function: e,
                in_app: !0
            };
            return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o
        }
        var ve = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            _e = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            ge = [30, function(t) {
                var e = ve.exec(t);
                if (e) {
                    if (e[2] && 0 === e[2].indexOf("eval")) {
                        var n = _e.exec(e[2]);
                        n && (e[2] = n[1], e[3] = n[2], e[4] = n[3])
                    }
                    var r = i(je(e[1] || de, e[2]), 2),
                        o = r[0];
                    return he(r[1], o, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                }
            }],
            ye = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
            me = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            be = [50, function(t) {
                var e, n = ye.exec(t);
                if (n) {
                    if (n[3] && n[3].indexOf(" > eval") > -1) {
                        var r = me.exec(n[3]);
                        r && (n[1] = n[1] || "eval", n[3] = r[1], n[4] = r[2], n[5] = "")
                    }
                    var o = n[3],
                        s = n[1] || de;
                    return s = (e = i(je(s, o), 2))[0], he(o = e[1], s, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
                }
            }],
            we = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            xe = [40, function(t) {
                var e = we.exec(t);
                return e ? he(e[2], e[1] || de, +e[3], e[4] ? +e[4] : void 0) : void 0
            }],
            Se = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
            Ee = [10, function(t) {
                var e = Se.exec(t);
                return e ? he(e[2], e[3] || de, +e[1]) : void 0
            }],
            ke = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
            Oe = [20, function(t) {
                var e = ke.exec(t);
                return e ? he(e[5], e[3] || e[4] || de, +e[1], +e[2]) : void 0
            }],
            je = function(t, e) {
                var n = -1 !== t.indexOf("safari-extension"),
                    r = -1 !== t.indexOf("safari-web-extension");
                return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : de, n ? "safari-extension:" + e : "safari-web-extension:" + e] : [t, e]
            };

        function Te(t) {
            var e = Ae(t),
                n = {
                    type: t && t.name,
                    value: De(t)
                };
            return e.length && (n.stacktrace = {
                frames: e
            }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
        }

        function Re(t) {
            return {
                exception: {
                    values: [Te(t)]
                }
            }
        }

        function Ae(t) {
            var e = t.stacktrace || t.stack || "",
                n = function(t) {
                    if (t) {
                        if ("number" == typeof t.framesToPop) return t.framesToPop;
                        if (Pe.test(t.message)) return 1
                    }
                    return 0
                }(t);
            try {
                return function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = t.sort((function(t, e) {
                        return t[0] - e[0]
                    })).map((function(t) {
                        return t[1]
                    }));
                    return function(t, e) {
                        var r, i, s, a;
                        void 0 === e && (e = 0);
                        var u = [];
                        try {
                            for (var c = o(t.split("\n").slice(e)), p = c.next(); !p.done; p = c.next()) {
                                var f = p.value;
                                try {
                                    for (var l = (s = void 0, o(n)), d = l.next(); !d.done; d = l.next()) {
                                        var h = (0, d.value)(f);
                                        if (h) {
                                            u.push(h);
                                            break
                                        }
                                    }
                                } catch (t) {
                                    s = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (a = l.return) && a.call(l)
                                    } finally {
                                        if (s) throw s.error
                                    }
                                }
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                p && !p.done && (i = c.return) && i.call(c)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return yt(u)
                    }
                }(Ee, Oe, ge, xe, be)(e, n)
            } catch (t) {}
            return []
        }
        var Pe = /Minified React error #\d+;/i;

        function De(t) {
            var e = t && t.message;
            return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
        }

        function Ie(t, e, n, o) {
            var i;
            if (m(t) && t.error) return Re(t.error);
            if (b(t) || y(t, "DOMException")) {
                var s = t;
                if ("stack" in t) i = Re(t);
                else {
                    var a = s.name || (b(s) ? "DOMError" : "DOMException"),
                        u = s.message ? a + ": " + s.message : a;
                    $(i = Le(u, e, n), u)
                }
                return "code" in s && (i.tags = r(r({}, i.tags), {
                    "DOMException.code": "" + s.code
                })), i
            }
            return g(t) ? Re(t) : S(t) || E(t) ? (i = function(t, e, n) {
                var r = {
                    exception: {
                        values: [{
                            type: E(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                            value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + q(t)
                        }]
                    },
                    extra: {
                        __serialized__: $t(t)
                    }
                };
                if (e) {
                    var o = Ae(e);
                    o.length && (r.stacktrace = {
                        frames: o
                    })
                }
                return r
            }(t, e, o), H(i, {
                synthetic: !0
            }), i) : ($(i = Le(t, e, n), "" + t, void 0), H(i, {
                synthetic: !0
            }), i)
        }

        function Le(t, e, n) {
            var r = {
                message: t
            };
            if (n && e) {
                var o = Ae(e);
                o.length && (r.stacktrace = {
                    frames: o
                })
            }
            return r
        }

        function Ne(t) {
            var e = [];

            function n(t) {
                return e.splice(e.indexOf(t), 1)[0]
            }
            return {
                $: e,
                add: function(r) {
                    if (!(void 0 === t || e.length < t)) return it(new qt("Not adding Promise due to buffer limit reached."));
                    var o = r();
                    return -1 === e.indexOf(o) && e.push(o), o.then((function() {
                        return n(o)
                    })).then(null, (function() {
                        return n(o).then(null, (function() {}))
                    })), o
                },
                drain: function(t) {
                    return new st((function(n, r) {
                        var o = e.length;
                        if (!o) return n(!0);
                        var i = setTimeout((function() {
                            t && t > 0 && n(!1)
                        }), t);
                        e.forEach((function(t) {
                            ot(t).then((function() {
                                --o || (clearTimeout(i), n(!0))
                            }), r)
                        }))
                    }))
                }
            }
        }

        function Ce(t, e) {
            return t[e] || t.all || 0
        }

        function Me(t, e, n) {
            return void 0 === n && (n = Date.now()), Ce(t, e) > n
        }

        function ze(t, e, n) {
            var i, s, a, u;
            void 0 === n && (n = Date.now());
            var c = r({}, t),
                p = e["x-sentry-rate-limits"],
                f = e["retry-after"];
            if (p) try {
                for (var l = o(p.trim().split(",")), d = l.next(); !d.done; d = l.next()) {
                    var h = d.value.split(":", 2),
                        v = parseInt(h[0], 10),
                        _ = 1e3 * (isNaN(v) ? 60 : v);
                    if (h[1]) try {
                        for (var g = (a = void 0, o(h[1].split(";"))), y = g.next(); !y.done; y = g.next()) {
                            c[y.value] = n + _
                        }
                    } catch (t) {
                        a = {
                            error: t
                        }
                    } finally {
                        try {
                            y && !y.done && (u = g.return) && u.call(g)
                        } finally {
                            if (a) throw a.error
                        }
                    } else c.all = n + _
                }
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    d && !d.done && (s = l.return) && s.call(l)
                } finally {
                    if (i) throw i.error
                }
            } else f && (c.all = n + function(t, e) {
                void 0 === e && (e = Date.now());
                var n = parseInt("" + t, 10);
                if (!isNaN(n)) return 1e3 * n;
                var r = Date.parse("" + t);
                return isNaN(r) ? 6e4 : r - e
            }(f, n));
            return c
        }

        function qe(t) {
            return t >= 200 && t < 300 ? "success" : 429 === t ? "rate_limit" : t >= 400 && t < 500 ? "invalid" : t >= 500 ? "failed" : "unknown"
        }

        function Ue(t, e, n) {
            void 0 === n && (n = Ne(t.bufferSize || 30));
            var r = {};
            return {
                send: function(t) {
                    var o = function(t) {
                            var e = i(t, 2),
                                n = i(e[1], 1);
                            return i(n[0], 1)[0].type
                        }(t),
                        s = "event" === o ? "error" : o,
                        a = {
                            category: s,
                            body: se(t)
                        };
                    return Me(r, s) ? it({
                        status: "rate_limit",
                        reason: Ve(r, s)
                    }) : n.add((function() {
                        return e(a).then((function(t) {
                            var e = t.body,
                                n = t.headers,
                                o = t.reason,
                                i = qe(t.statusCode);
                            return n && (r = ze(r, n)), "success" === i ? ot({
                                status: i,
                                reason: o
                            }) : it({
                                status: i,
                                reason: o || e || ("rate_limit" === i ? Ve(r, s) : "Unknown transport error")
                            })
                        }))
                    }))
                },
                flush: function(t) {
                    return n.drain(t)
                }
            }
        }

        function Ve(t, e) {
            return "Too many " + e + " requests, backing off until: " + new Date(Ce(t, e)).toISOString()
        }
        var Be, Fe = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            We = (0, p.R)();

        function $e() {
            if (Be) return Be;
            if (xt(We.fetch)) return Be = We.fetch.bind(We);
            var t = We.document,
                e = We.fetch;
            if (t && "function" == typeof t.createElement) try {
                var n = t.createElement("iframe");
                n.hidden = !0, t.head.appendChild(n);
                var r = n.contentWindow;
                r && r.fetch && (e = r.fetch), t.head.removeChild(n)
            } catch (t) {
                Fe && a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
            }
            return Be = e.bind(We)
        }

        function He(t, e) {
            if ("[object Navigator]" === Object.prototype.toString.call(We && We.navigator) && "function" == typeof We.navigator.sendBeacon) return We.navigator.sendBeacon.bind(We.navigator)(t, e);
            if (wt()) {
                var n = $e();
                n(t, {
                    body: e,
                    method: "POST",
                    credentials: "omit",
                    keepalive: !0
                }).then(null, (function(t) {
                    console.error(t)
                }))
            } else;
        }

        function Ye(t) {
            return "event" === t ? "error" : t
        }
        var Ke = (0, p.R)(),
            Xe = function() {
                function t(t) {
                    var e = this;
                    this.options = t, this._buffer = Ne(30), this._rateLimits = {}, this._outcomes = {}, this._api = Zt(t.dsn, t._metadata, t.tunnel), this.url = re(this._api.dsn), this.options.sendClientReports && Ke.document && Ke.document.addEventListener("visibilitychange", (function() {
                        "hidden" === Ke.document.visibilityState && e._flushOutcomes()
                    }))
                }
                return t.prototype.sendEvent = function(t) {
                    return this._sendRequest(function(t, e) {
                        var n, o = ae(e),
                            i = t.type || "event",
                            s = "transaction" === i || !!e.tunnel,
                            a = (t.sdkProcessingMetadata || {}).transactionSampling || {},
                            u = a.method,
                            c = a.rate;
                        ue(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized || (t.tags.skippedNormalization = !0, t.extra.normalizeDepth = t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"), delete t.sdkProcessingMetadata;
                        try {
                            n = JSON.stringify(t)
                        } catch (e) {
                            t.tags.JSONStringifyError = !0, t.extra.JSONStringifyError = e;
                            try {
                                n = JSON.stringify(Wt(t))
                            } catch (t) {
                                var p = t;
                                n = JSON.stringify({
                                    message: "JSON.stringify error after renormalization",
                                    extra: {
                                        message: p.message,
                                        stack: p.stack
                                    }
                                })
                            }
                        }
                        var f = {
                            body: n,
                            type: i,
                            url: s ? oe(e.dsn, e.tunnel) : re(e.dsn)
                        };
                        if (s) {
                            var l = ie(r(r({
                                event_id: t.event_id,
                                sent_at: (new Date).toISOString()
                            }, o && {
                                sdk: o
                            }), !!e.tunnel && {
                                dsn: Vt(e.dsn)
                            }), [
                                [{
                                    type: i,
                                    sample_rates: [{
                                        id: u,
                                        rate: c
                                    }]
                                }, f.body]
                            ]);
                            f.body = se(l)
                        }
                        return f
                    }(t, this._api), t)
                }, t.prototype.sendSession = function(t) {
                    return this._sendRequest(function(t, e) {
                        var n = i(ce(t, e), 2),
                            r = n[0],
                            o = n[1];
                        return {
                            body: se(r),
                            type: o,
                            url: oe(e.dsn, e.tunnel)
                        }
                    }(t, this._api), t)
                }, t.prototype.close = function(t) {
                    return this._buffer.drain(t)
                }, t.prototype.recordLostEvent = function(t, e) {
                    var n;
                    if (this.options.sendClientReports) {
                        var r = Ye(e) + ":" + t;
                        Fe && a.log("Adding outcome: " + r), this._outcomes[r] = (null != (n = this._outcomes[r]) ? n : 0) + 1
                    }
                }, t.prototype._flushOutcomes = function() {
                    if (this.options.sendClientReports) {
                        var t = this._outcomes;
                        if (this._outcomes = {}, Object.keys(t).length) {
                            Fe && a.log("Flushing outcomes:\n" + JSON.stringify(t, null, 2));
                            var e, n, r, o = oe(this._api.dsn, this._api.tunnel),
                                s = Object.keys(t).map((function(e) {
                                    var n = i(e.split(":"), 2),
                                        r = n[0];
                                    return {
                                        reason: n[1],
                                        category: r,
                                        quantity: t[e]
                                    }
                                })),
                                u = (e = s, ie((n = this._api.tunnel && Vt(this._api.dsn)) ? {
                                    dsn: n
                                } : {}, [
                                    [{
                                        type: "client_report"
                                    }, {
                                        timestamp: r || (0, et.yW)(),
                                        discarded_events: e
                                    }]
                                ]));
                            try {
                                He(o, se(u))
                            } catch (t) {
                                Fe && a.error(t)
                            }
                        } else Fe && a.log("No outcomes to flush")
                    }
                }, t.prototype._handleResponse = function(t) {
                    var e = t.requestType,
                        n = t.response,
                        r = t.headers,
                        o = t.resolve,
                        i = t.reject,
                        s = qe(n.status);
                    this._rateLimits = ze(this._rateLimits, r), this._isRateLimited(e) && Fe && a.warn("Too many " + e + " requests, backing off until: " + this._disabledUntil(e)), "success" !== s ? i(n) : o({
                        status: s
                    })
                }, t.prototype._disabledUntil = function(t) {
                    var e = Ye(t);
                    return new Date(Ce(this._rateLimits, e))
                }, t.prototype._isRateLimited = function(t) {
                    var e = Ye(t);
                    return Me(this._rateLimits, e)
                }, t
            }(),
            Ge = function(t) {
                function e(e, n) {
                    void 0 === n && (n = $e());
                    var r = t.call(this, e) || this;
                    return r._fetch = n, r
                }
                return n(e, t), e.prototype._sendRequest = function(t, e) {
                    var n = this;
                    if (this._isRateLimited(t.type)) return this.recordLostEvent("ratelimit_backoff", t.type), Promise.reject({
                        event: e,
                        type: t.type,
                        reason: "Transport for " + t.type + " requests locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                        status: 429
                    });
                    var r = {
                        body: t.body,
                        method: "POST",
                        referrerPolicy: St() ? "origin" : ""
                    };
                    return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add((function() {
                        return new st((function(e, o) {
                            n._fetch(t.url, r).then((function(r) {
                                var i = {
                                    "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": r.headers.get("Retry-After")
                                };
                                n._handleResponse({
                                    requestType: t.type,
                                    response: r,
                                    headers: i,
                                    resolve: e,
                                    reject: o
                                })
                            })).catch(o)
                        }))
                    })).then(void 0, (function(e) {
                        throw e instanceof qt ? n.recordLostEvent("queue_overflow", t.type) : n.recordLostEvent("network_error", t.type), e
                    }))
                }, e
            }(Xe);
        var Je = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype._sendRequest = function(t, e) {
                    var n = this;
                    return this._isRateLimited(t.type) ? (this.recordLostEvent("ratelimit_backoff", t.type), Promise.reject({
                        event: e,
                        type: t.type,
                        reason: "Transport for " + t.type + " requests locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                        status: 429
                    })) : this._buffer.add((function() {
                        return new st((function(e, r) {
                            var o = new XMLHttpRequest;
                            for (var i in o.onreadystatechange = function() {
                                    if (4 === o.readyState) {
                                        var i = {
                                            "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                            "retry-after": o.getResponseHeader("Retry-After")
                                        };
                                        n._handleResponse({
                                            requestType: t.type,
                                            response: o,
                                            headers: i,
                                            resolve: e,
                                            reject: r
                                        })
                                    }
                                }, o.open("POST", t.url), n.options.headers) Object.prototype.hasOwnProperty.call(n.options.headers, i) && o.setRequestHeader(i, n.options.headers[i]);
                            o.send(t.body)
                        }))
                    })).then(void 0, (function(e) {
                        throw e instanceof qt ? n.recordLostEvent("queue_overflow", t.type) : n.recordLostEvent("network_error", t.type), e
                    }))
                }, e
            }(Xe),
            Ze = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.eventFromException = function(t, e) {
                    return function(t, e, n) {
                        var r = Ie(t, e && e.syntheticException || void 0, n);
                        return H(r), r.level = pe.Error, e && e.event_id && (r.event_id = e.event_id), ot(r)
                    }(t, e, this._options.attachStacktrace)
                }, e.prototype.eventFromMessage = function(t, e, n) {
                    return void 0 === e && (e = pe.Info),
                        function(t, e, n, r) {
                            void 0 === e && (e = pe.Info);
                            var o = Le(t, n && n.syntheticException || void 0, r);
                            return o.level = e, n && n.event_id && (o.event_id = n.event_id), ot(o)
                        }(t, e, n, this._options.attachStacktrace)
                }, e.prototype._setupTransport = function() {
                    if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                    var e, n, o = r(r({}, this._options.transportOptions), {
                            dsn: this._options.dsn,
                            tunnel: this._options.tunnel,
                            sendClientReports: this._options.sendClientReports,
                            _metadata: this._options._metadata
                        }),
                        i = Zt(o.dsn, o._metadata, o.tunnel),
                        s = oe(i.dsn, i.tunnel);
                    if (this._options.transport) return new this._options.transport(o);
                    if (wt()) {
                        var a = r({}, o.fetchParameters);
                        return this._newTransport = (e = {
                            requestOptions: a,
                            url: s
                        }, void 0 === n && (n = $e()), Ue({
                            bufferSize: e.bufferSize
                        }, (function(t) {
                            var o = r({
                                body: t.body,
                                method: "POST",
                                referrerPolicy: "origin"
                            }, e.requestOptions);
                            return n(e.url, o).then((function(t) {
                                return t.text().then((function(e) {
                                    return {
                                        body: e,
                                        headers: {
                                            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                            "retry-after": t.headers.get("Retry-After")
                                        },
                                        reason: t.statusText,
                                        statusCode: t.status
                                    }
                                }))
                            }))
                        }))), new Ge(o)
                    }
                    return this._newTransport = function(t) {
                        return Ue({
                            bufferSize: t.bufferSize
                        }, (function(e) {
                            return new st((function(n, r) {
                                var o = new XMLHttpRequest;
                                for (var i in o.onreadystatechange = function() {
                                        if (4 === o.readyState) {
                                            var t = {
                                                body: o.response,
                                                headers: {
                                                    "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                                    "retry-after": o.getResponseHeader("Retry-After")
                                                },
                                                reason: o.statusText,
                                                statusCode: o.status
                                            };
                                            n(t)
                                        }
                                    }, o.open("POST", t.url), t.headers) Object.prototype.hasOwnProperty.call(t.headers, i) && o.setRequestHeader(i, t.headers[i]);
                                o.send(e.body)
                            }))
                        }))
                    }({
                        url: s,
                        headers: o.headers
                    }), new Je(o)
                }, e
            }(le);

        function Qe(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var r = ht();
            if (r && r[t]) return r[t].apply(r, s(e));
            throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
        }

        function tn(t, e) {
            return Qe("captureException", t, {
                captureContext: e,
                originalException: t,
                syntheticException: new Error("Sentry syntheticException")
            })
        }

        function en(t) {
            Qe("withScope", t)
        }
        var nn = (0, p.R)(),
            rn = 0;

        function on() {
            return rn > 0
        }

        function sn() {
            rn += 1, setTimeout((function() {
                rn -= 1
            }))
        }

        function an(t, e, n) {
            if (void 0 === e && (e = {}), "function" != typeof t) return t;
            try {
                var o = t.__sentry_wrapped__;
                if (o) return o;
                if (N(t)) return t
            } catch (e) {
                return t
            }
            var i = function() {
                var o = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    var i = o.map((function(t) {
                        return an(t, e)
                    }));
                    return t.apply(this, i)
                } catch (t) {
                    throw sn(), en((function(n) {
                        n.addEventProcessor((function(t) {
                            return e.mechanism && ($(t, void 0, void 0), H(t, e.mechanism)), t.extra = r(r({}, t.extra), {
                                arguments: o
                            }), t
                        })), tn(t)
                    })), t
                }
            };
            try {
                for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
            } catch (t) {}
            L(i, t), I(t, "__sentry_wrapped__", i);
            try {
                Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
                    get: function() {
                        return t.name
                    }
                })
            } catch (t) {}
            return i
        }

        function un(t) {
            if (void 0 === t && (t = {}), nn.document)
                if (t.eventId)
                    if (t.dsn) {
                        var e = nn.document.createElement("script");
                        e.async = !0, e.src = function(t, e) {
                            var n = Ft(t),
                                r = Qt(n) + "embed/error-page/",
                                o = "dsn=" + Vt(n);
                            for (var i in e)
                                if ("dsn" !== i)
                                    if ("user" === i) {
                                        if (!e.user) continue;
                                        e.user.name && (o += "&name=" + encodeURIComponent(e.user.name)), e.user.email && (o += "&email=" + encodeURIComponent(e.user.email))
                                    } else o += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(e[i]);
                            return r + "?" + o
                        }(t.dsn, t), t.onLoad && (e.onload = t.onLoad);
                        var n = nn.document.head || nn.document.body;
                        n && n.appendChild(e)
                    } else Fe && a.error("Missing dsn option in showReportDialog call");
            else Fe && a.error("Missing eventId option in showReportDialog call")
        }
        var cn = ["fatal", "error", "warning", "log", "info", "debug", "critical"];

        function pn(t) {
            return "warn" === t ? pe.Warning : function(t) {
                return -1 !== cn.indexOf(t)
            }(t) ? t : pe.Log
        }
        var fn = function() {
            function t(e) {
                this.name = t.id, this._options = r({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, e)
            }
            return t.prototype.addSentryBreadcrumb = function(t) {
                this._options.sentry && ht().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: W(t)
                }, {
                    event: t
                })
            }, t.prototype.setupOnce = function() {
                this._options.console && Rt("console", ln), this._options.dom && Rt("dom", function(t) {
                    function e(e) {
                        var n, r = "object" == typeof t ? t.serializeAttribute : void 0;
                        "string" == typeof r && (r = [r]);
                        try {
                            n = e.event.target ? j(e.event.target, r) : j(e.event, r)
                        } catch (t) {
                            n = "<unknown>"
                        }
                        0 !== n.length && ht().addBreadcrumb({
                            category: "ui." + e.name,
                            message: n
                        }, {
                            event: e.event,
                            name: e.name,
                            global: e.global
                        })
                    }
                    return e
                }(this._options.dom)), this._options.xhr && Rt("xhr", dn), this._options.fetch && Rt("fetch", hn), this._options.history && Rt("history", vn)
            }, t.id = "Breadcrumbs", t
        }();

        function ln(t) {
            var e = {
                category: "console",
                data: {
                    arguments: t.args,
                    logger: "console"
                },
                level: pn(t.level),
                message: A(t.args, " ")
            };
            if ("assert" === t.level) {
                if (!1 !== t.args[0]) return;
                e.message = "Assertion failed: " + (A(t.args.slice(1), " ") || "console.assert"), e.data.arguments = t.args.slice(1)
            }
            ht().addBreadcrumb(e, {
                input: t.args,
                level: t.level
            })
        }

        function dn(t) {
            if (t.endTimestamp) {
                if (t.xhr.__sentry_own_request__) return;
                var e = t.xhr.__sentry_xhr__ || {},
                    n = e.method,
                    r = e.url,
                    o = e.status_code,
                    i = e.body;
                ht().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: n,
                        url: r,
                        status_code: o
                    },
                    type: "http"
                }, {
                    xhr: t.xhr,
                    input: i
                })
            } else;
        }

        function hn(t) {
            t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? ht().addBreadcrumb({
                category: "fetch",
                data: t.fetchData,
                level: pe.Error,
                type: "http"
            }, {
                data: t.error,
                input: t.args
            }) : ht().addBreadcrumb({
                category: "fetch",
                data: r(r({}, t.fetchData), {
                    status_code: t.response.status
                }),
                type: "http"
            }, {
                input: t.args,
                response: t.response
            })))
        }

        function vn(t) {
            var e = (0, p.R)(),
                n = t.from,
                r = t.to,
                o = B(e.location.href),
                i = B(n),
                s = B(r);
            i.path || (i = o), o.protocol === s.protocol && o.host === s.host && (r = s.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), ht().addBreadcrumb({
                category: "navigation",
                data: {
                    from: n,
                    to: r
                }
            })
        }
        var _n = function(e) {
                function o(n) {
                    void 0 === n && (n = {});
                    return n._metadata = n._metadata || {}, n._metadata.sdk = n._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: "npm:@sentry/browser",
                            version: t
                        }],
                        version: t
                    }, e.call(this, Ze, n) || this
                }
                return n(o, e), o.prototype.showReportDialog = function(t) {
                    void 0 === t && (t = {}), (0, p.R)().document && (this._isEnabled() ? un(r(r({}, t), {
                        dsn: t.dsn || this.getDsn()
                    })) : Fe && a.error("Trying to call showReportDialog with Sentry Client disabled"))
                }, o.prototype._prepareEvent = function(t, n, r) {
                    return t.platform = t.platform || "javascript", e.prototype._prepareEvent.call(this, t, n, r)
                }, o.prototype._sendEvent = function(t) {
                    var n = this.getIntegration(fn);
                    n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
                }, o
            }(Jt),
            gn = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
            yn = function() {
                function t(e) {
                    this.name = t.id, this._options = r({
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0
                    }, e)
                }
                return t.prototype.setupOnce = function() {
                    var t = (0, p.R)();
                    this._options.setTimeout && D(t, "setTimeout", mn), this._options.setInterval && D(t, "setInterval", mn), this._options.requestAnimationFrame && D(t, "requestAnimationFrame", bn), this._options.XMLHttpRequest && "XMLHttpRequest" in t && D(XMLHttpRequest.prototype, "send", wn);
                    var e = this._options.eventTarget;
                    e && (Array.isArray(e) ? e : gn).forEach(xn)
                }, t.id = "TryCatch", t
            }();

        function mn(t) {
            return function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                var r = e[0];
                return e[0] = an(r, {
                    mechanism: {
                        data: {
                            function: bt(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), t.apply(this, e)
            }
        }

        function bn(t) {
            return function(e) {
                return t.apply(this, [an(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: bt(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                })])
            }
        }

        function wn(t) {
            return function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                var r = this,
                    o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                return o.forEach((function(t) {
                    t in r && "function" == typeof r[t] && D(r, t, (function(e) {
                        var n = {
                                mechanism: {
                                    data: {
                                        function: t,
                                        handler: bt(e)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            },
                            r = N(e);
                        return r && (n.mechanism.data.handler = bt(r)), an(e, n)
                    }))
                })), t.apply(this, e)
            }
        }

        function xn(t) {
            var e = (0, p.R)(),
                n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (D(n, "addEventListener", (function(e) {
                return function(n, r, o) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = an(r.handleEvent.bind(r), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: bt(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (t) {}
                    return e.apply(this, [n, an(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: bt(r),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), o])
                }
            })), D(n, "removeEventListener", (function(t) {
                return function(e, n, r) {
                    var o = n;
                    try {
                        var i = o && o.__sentry_wrapped__;
                        i && t.call(this, e, i, r)
                    } catch (t) {}
                    return t.call(this, e, o, r)
                }
            })))
        }
        var Sn = function() {
            function t(e) {
                this.name = t.id, this._installFunc = {
                    onerror: En,
                    onunhandledrejection: kn
                }, this._options = r({
                    onerror: !0,
                    onunhandledrejection: !0
                }, e)
            }
            return t.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50;
                var t, e = this._options;
                for (var n in e) {
                    var r = this._installFunc[n];
                    r && e[n] && (t = n, Fe && a.log("Global Handler attached: " + t), r(), this._installFunc[n] = void 0)
                }
            }, t.id = "GlobalHandlers", t
        }();

        function En() {
            Rt("error", (function(t) {
                var e = i(Tn(), 2),
                    n = e[0],
                    r = e[1];
                if (n.getIntegration(Sn)) {
                    var o = t.msg,
                        s = t.url,
                        a = t.line,
                        u = t.column,
                        c = t.error;
                    if (!(on() || c && c.__sentry_own_request__)) {
                        var p = void 0 === c && w(o) ? function(t, e, n, r) {
                            var o = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
                                i = m(t) ? t.message : t,
                                s = "Error",
                                a = i.match(o);
                            a && (s = a[1], i = a[2]);
                            return On({
                                exception: {
                                    values: [{
                                        type: s,
                                        value: i
                                    }]
                                }
                            }, e, n, r)
                        }(o, s, a, u) : On(Ie(c || o, void 0, r, !1), s, a, u);
                        p.level = pe.Error, jn(n, c, p, "onerror")
                    }
                }
            }))
        }

        function kn() {
            Rt("unhandledrejection", (function(t) {
                var e = i(Tn(), 2),
                    n = e[0],
                    r = e[1];
                if (n.getIntegration(Sn)) {
                    var o = t;
                    try {
                        "reason" in t ? o = t.reason : "detail" in t && "reason" in t.detail && (o = t.detail.reason)
                    } catch (t) {}
                    if (on() || o && o.__sentry_own_request__) return !0;
                    var s = x(o) ? {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: "Non-Error promise rejection captured with value: " + String(o)
                            }]
                        }
                    } : Ie(o, void 0, r, !0);
                    s.level = pe.Error, jn(n, o, s, "onunhandledrejection")
                }
            }))
        }

        function On(t, e, n, r) {
            var o = t.exception = t.exception || {},
                i = o.values = o.values || [],
                s = i[0] = i[0] || {},
                a = s.stacktrace = s.stacktrace || {},
                u = a.frames = a.frames || [],
                c = isNaN(parseInt(r, 10)) ? void 0 : r,
                f = isNaN(parseInt(n, 10)) ? void 0 : n,
                l = w(e) && e.length > 0 ? e : function() {
                    var t = (0, p.R)();
                    try {
                        return t.document.location.href
                    } catch (t) {
                        return ""
                    }
                }();
            return 0 === u.length && u.push({
                colno: c,
                filename: l,
                function: "?",
                in_app: !0,
                lineno: f
            }), t
        }

        function jn(t, e, n, r) {
            H(n, {
                handled: !1,
                type: r
            }), t.captureEvent(n, {
                originalException: e
            })
        }

        function Tn() {
            var t = ht(),
                e = t.getClient();
            return [t, e && e.getOptions().attachStacktrace]
        }
        var Rn = function() {
            function t(e) {
                void 0 === e && (e = {}), this.name = t.id, this._key = e.key || "cause", this._limit = e.limit || 5
            }
            return t.prototype.setupOnce = function() {
                ct((function(e, n) {
                    var r = ht().getIntegration(t);
                    return r ? function(t, e, n, r) {
                        if (!(n.exception && n.exception.values && r && O(r.originalException, Error))) return n;
                        var o = An(e, r.originalException, t);
                        return n.exception.values = s(o, n.exception.values), n
                    }(r._key, r._limit, e, n) : e
                }))
            }, t.id = "LinkedErrors", t
        }();

        function An(t, e, n, r) {
            if (void 0 === r && (r = []), !O(e[n], Error) || r.length + 1 >= t) return r;
            var o = Te(e[n]);
            return An(t, e[n], n, s([o], r))
        }
        var Pn = function() {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function(e, n) {
                e((function(e) {
                    var r = n().getIntegration(t);
                    if (r) {
                        try {
                            if (function(t, e) {
                                    if (!e) return !1;
                                    if (function(t, e) {
                                            var n = t.message,
                                                r = e.message;
                                            if (!n && !r) return !1;
                                            if (n && !r || !n && r) return !1;
                                            if (n !== r) return !1;
                                            if (!In(t, e)) return !1;
                                            if (!Dn(t, e)) return !1;
                                            return !0
                                        }(t, e)) return !0;
                                    if (function(t, e) {
                                            var n = Ln(e),
                                                r = Ln(t);
                                            if (!n || !r) return !1;
                                            if (n.type !== r.type || n.value !== r.value) return !1;
                                            if (!In(t, e)) return !1;
                                            if (!Dn(t, e)) return !1;
                                            return !0
                                        }(t, e)) return !0;
                                    return !1
                                }(e, r._previousEvent)) return Fe && a.warn("Event dropped due to being a duplicate of previously captured event."), null
                        } catch (t) {
                            return r._previousEvent = e
                        }
                        return r._previousEvent = e
                    }
                    return e
                }))
            }, t.id = "Dedupe", t
        }();

        function Dn(t, e) {
            var n = Nn(t),
                r = Nn(e);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (var o = 0; o < r.length; o++) {
                var i = r[o],
                    s = n[o];
                if (i.filename !== s.filename || i.lineno !== s.lineno || i.colno !== s.colno || i.function !== s.function) return !1
            }
            return !0
        }

        function In(t, e) {
            var n = t.fingerprint,
                r = e.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (t) {
                return !1
            }
        }

        function Ln(t) {
            return t.exception && t.exception.values && t.exception.values[0]
        }

        function Nn(t) {
            var e = t.exception;
            if (e) try {
                return e.values[0].stacktrace.frames
            } catch (t) {
                return
            } else if (t.stacktrace) return t.stacktrace.frames
        }
        var Cn = (0, p.R)(),
            Mn = function() {
                function t() {
                    this.name = t.id
                }
                return t.prototype.setupOnce = function() {
                    ct((function(e) {
                        if (ht().getIntegration(t)) {
                            if (!Cn.navigator && !Cn.location && !Cn.document) return e;
                            var n = e.request && e.request.url || Cn.location && Cn.location.href,
                                o = (Cn.document || {}).referrer,
                                i = (Cn.navigator || {}).userAgent,
                                s = r(r(r({}, e.request && e.request.headers), o && {
                                    Referer: o
                                }), i && {
                                    "User-Agent": i
                                }),
                                a = r(r({}, n && {
                                    url: n
                                }), {
                                    headers: s
                                });
                            return r(r({}, e), {
                                request: a
                            })
                        }
                        return e
                    }))
                }, t.id = "UserAgent", t
            }(),
            zn = [new J, new tt, new yn, new fn, new Sn, new Rn, new Pn, new Mn];

        function qn(t) {
            if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = zn), void 0 === t.release) {
                var e = (0, p.R)();
                e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
            }
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0),
                function(t, e) {
                    !0 === e.debug && (X ? a.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                    var n = ht(),
                        r = n.getScope();
                    r && r.update(e.initialScope);
                    var o = new t(e);
                    n.bindClient(o)
                }(_n, t), t.autoSessionTracking && function() {
                    if (void 0 === (0, p.R)().document) return void(Fe && a.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
                    var t = ht();
                    if (!t.captureSession) return;
                    Un(t), Rt("history", (function(t) {
                        var e = t.from,
                            n = t.to;
                        void 0 !== e && e !== n && Un(ht())
                    }))
                }()
        }

        function Un(t) {
            t.startSession({
                ignoreDuration: !0
            }), t.captureSession()
        }
        const Vn = window.parent,
            Bn = "ZD-";
        let Fn = !0,
            Wn = Vn.localStorage;
        const $n = {
            suid: {
                id: null,
                tabs: []
            },
            store: {}
        };

        function Hn(t, e) {
            let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            const r = e || Wn;
            try {
                const e = Gn(r.getItem((n ? Bn : "") + t));
                return e || ($n[t] || null)
            } catch (t) {}
            return $n[t]
        }

        function Yn(t, e, n) {
            let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            if (!Fn) return e;
            const o = n || Wn;
            try {
                o.setItem((r ? Bn : "") + t, Xn(e))
            } catch (t) {}
            return e
        }

        function Kn() {
            try {
                [Vn.sessionStorage, Vn.localStorage].forEach((t => {
                    Object.keys(t).filter((t => t.startsWith(Bn))).forEach((e => {
                        t.removeItem(e)
                    }))
                }))
            } catch (t) {}
        }

        function Xn(t) {
            return "object" == typeof t && (t = JSON.stringify(t)), t
        }

        function Gn(t) {
            try {
                return JSON.parse(t)
            } catch (e) {
                return t
            }
        }
        const Jn = {
                clear: Kn,
                disable: function() {
                    Fn = !1, Kn()
                },
                enable: function() {
                    Fn = !0
                },
                enableLocalStorage: () => {
                    try {
                        Vn.localStorage.setItem("ZD-testStorage", "true"), Vn.localStorage.removeItem("ZD-testStorage")
                    } catch (t) {
                        return !1
                    }
                    return Wn = Vn.localStorage, !0
                },
                enableSessionStorage: () => {
                    try {
                        Vn.sessionStorage.setItem("ZD-testStorage", "true"), Vn.sessionStorage.removeItem("ZD-testStorage")
                    } catch (t) {
                        return !1
                    }
                    return Wn = Vn.sessionStorage, !0
                },
                get: Hn,
                prefix: Bn,
                remove: function(t) {
                    let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    try {
                        Wn.removeItem((e ? Bn : "") + t)
                    } catch (t) {}
                },
                sessionStorageGet: function(t) {
                    return Hn(t, Vn.sessionStorage)
                },
                sessionStorageSet: function(t, e) {
                    return Yn(t, e, Vn.sessionStorage)
                },
                set: Yn,
                isUsingLocalStorage: () => Wn === Vn.localStorage
            },
            Zn = () => Boolean(Jn.get("debug")) || !1,
            Qn = (t, e, n) => tn(t, { ...e,
                level: n
            }),
            tr = () => {
                var e;
                (e = {
                    autoSessionTracking: !1,
                    dsn: "https://460f708319894406a8ebaea641969c60@zendesk-eu.my.sentry.io/113",
                    environment: "production",
                    release: "1a47a73",
                    tracesSampleRate: 0,
                    sampleRate: Zn() ? 1 : .001,
                    initialScope: {
                        tags: {
                            inDebugMode: Zn()
                        }
                    }
                })._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                    name: "sentry.javascript.react",
                    packages: [{
                        name: "npm:@sentry/react",
                        version: t
                    }],
                    version: t
                }, qn(e)
            },
            er = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Qn(t, e, "error")
            };
        let nr = {};
        const rr = {
            web_widget_frontend_ingestor: {
                defaultValue: !1,
                getArturoValue: () => nr.frontendIngestor
            },
            web_widget_reduce_blipping: {
                defaultValue: !1,
                getArturoValue: () => nr.reduceBlipping
            },
            web_widget_throttle_identify: {
                defaultValue: !1,
                getArturoValue: () => nr.throttleIdentify
            },
            web_widget_disable_status_polling: {
                defaultValue: !1,
                getArturoValue: () => nr.disableStatusPolling
            },
            web_widget_customizations: {
                defaultValue: !1,
                getArturoValue: () => nr.customizations2
            },
            web_widget_prechat_form_visible_departments: {
                defaultValue: !1,
                getArturoValue: () => nr.prechatFormVisibleDepartments
            },
            use_production_sunco: {
                defaultValue: !1
            },
            digital_voice_enabled: {
                defaultValue: !1
            },
            web_widget_messenger_animations_disabled: {
                defaultValue: !1
            },
            log_all_messenger_errors: {
                defaultValue: !1,
                getArturoValue: () => nr.logMessengerErrors
            },
            web_widget_prefetch_widget_container: {
                defaultValue: !1,
                getArturoValue: () => nr.prefetchWidgetContainer
            },
            chat_flush_queue_order: {
                defaultValue: !1,
                getArturoValue: () => nr.chatFlushQueueOrder
            },
            web_widget_set_department_queue: {
                defaultValue: !1,
                getArturoValue: () => nr.setDepartmentQueue
            },
            web_widget_jwt_auth: {
                defaultValue: !1,
                getArturoValue: () => nr.jwtAuth
            },
            module_federation: {
                defaultValue: !1,
                getArturoValue: () => nr.moduleFederation
            },
            web_widget_logout_api: {
                defaultValue: !1,
                getArturoValue: () => nr.logoutApi
            },
            web_widget_force_proactive_messaging: {
                defaultValue: !1,
                getArturoValue: () => nr.forceProactiveMessaging
            },
            web_widget_prevent_chat_department_echo: {
                defaultValue: !1,
                getArturoValue: () => nr.preventChatDepartmentEcho
            },
            web_widget_voice: {
                defaultValue: !1,
                getArturoValue: () => nr.voice
            },
            web_widget_classic_pageview_sample_rate: {
                defaultValue: !1,
                getArturoValue: () => nr.classicPageviewSampleRate
            },
            web_widget_classic_show_csat_button_after_agent_leaves: {
                defaultValue: !1,
                getArturoValue: () => nr.classicShowCsatButtonAfterAgentLeaves
            },
            web_widget_classic_csat_settings_when_chat_ends: {
                defaultValue: !1,
                getArturoValue: () => nr.classicCsatSettingsWhenChatEnds
            },
            web_widget_disable_chat_popout: {
                defaultValue: !1,
                getArturoValue: () => nr.disableChatPopout
            },
            web_widget_reset_chat_dropped: {
                defaultValue: !1,
                getArturoValue: () => nr.resetChatDropped
            },
            web_widget_classic_identify_blip: {
                defaultValue: !1,
                getArturoValue: () => nr.identifyBlip
            },
            web_widget_send_blips_in_batches: {
                defaultValue: !1,
                getArturoValue: () => nr.sendBlipsInBatches
            },
            web_widget_sound_notification_analytics: {
                defaultValue: !1,
                getArturoValue: () => nr.soundNotificationAnalytics
            },
            web_widget_conversation_ticket_metadata: {
                defaultValue: !1,
                getArturoValue: () => nr.conversationTicketMetadata
            }
        };
        const or = {
                log: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console ? .log ? .(...e)
                },
                devLog: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    Zn() && console ? .log ? .(...e)
                },
                info: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console ? .info ? .(...e)
                },
                warn: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console ? .warn ? .(...e)
                },
                error: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console ? .error ? .(...e)
                }
            },
            ir = t => `${Jn.prefix}feature-${t}`,
            sr = {},
            ar = (t, e) => {
                if (sr[t] === e) return;
                sr[t] = e;
                const n = [`Feature flag "${t}" is currently overridden to be "${e}"`, "To stop overriding this feature enter the following into the browser console", `\n\tdelete localStorage["${ir(t)}"]`].join("\n");
                or.devLog(n)
            },
            ur = t => {
                const e = rr[t];
                if (!e) return !1;
                if (Zn()) {
                    const e = localStorage.getItem(ir(t));
                    if ("true" === e) return ar(t, e), !0;
                    if ("false" === e) return ar(t, e), !1;
                    sr[t] && (or.devLog(`You are no longer overriding feature "${t}"`), delete sr[t])
                }
                return e.getArturoValue ? Boolean(e.getArturoValue()) : e.defaultValue
            };
        u(4028), u(5017), u(5238);
        const cr = window.parent,
            pr = (cr.document, cr.navigator);
        cr.location;
        const fr = window.parent,
            lr = async () => {
                const t = (e = document).zendeskHost || e.zendesk ? .web_widget ? .id || e.web_widget ? .id;
                var e;
                if (!t) return er("Missing zendeskHost config param."), !1;
                const n = (() => {
                    const t = ["static-staging.zdassets.com", "static.zdassets.com"].includes(fr.location.host),
                        e = !!fr.zESettings ? .preview;
                    return t && e
                })() ? "/embeddable/preview/config" : "/embeddable/config";
                return "undefined" == typeof fetch && await u.e(552).then(u.bind(u, 8552)), fetch(`https://${t}${n}`).then((t => 404 !== t.status && (200 !== t.status ? (er("Failed to fetch config", {
                    tags: {
                        status: t.status
                    }
                }), !1) : t.json())))
            },
            dr = t => {
                const e = document.createElement("script");
                e.src = t, e.type = "text/javascript", e.async = !0, document.head.appendChild(e)
            };
        u.g.__ZENDESK_CLIENT_I18N_GLOBAL = "WW_I18N";
        const hr = {
            start: async () => {
                try {
                    if (-1 !== pr.userAgent.indexOf("CriOS") && -1 !== pr.userAgent.indexOf("OS 8_0") || -1 !== pr.userAgent.indexOf("Googlebot") || (!cr ? .XMLHttpRequest || !("withCredentials" in new cr.XMLHttpRequest))) return;
                    if (window.parent.zESkipWebWidget) return;
                    const e = Date.now(),
                        n = document.zendesk ? .web_widget ? .bootstrap ? .config || await lr();
                    if (!1 === n) return;
                    if (document.zendesk = {
                            web_widget: { ...document.zendesk ? .web_widget || {},
                                bootstrap : { ...document.zendesk ? .web_widget ? .bootstrap || {},
                                    config : n
                                }
                            }
                        }, document.configLoadEnd = Date.now() - e, !n.features) return;
                    if ((t = n.features) && (nr = t), ur("web_widget_disable_chat_popout") && window.parent.zEPopout) return;
                    const {
                        manifest: r,
                        basePath: o
                    } = await (async t => ({
                        manifest: {
                            assets: [{
                                path: "web-widget-main-1a47a73.js"
                            }]
                        },
                        basePath: `https://static.zdassets.com/web_widget/${t?"messenger":"classic"}/latest`
                    }))(Boolean(n.messenger));
                    for (const t of r.assets) dr(`${o}/${t.path}`)
                } catch (t) {
                    er(t)
                }
                var t
            }
        };
        tr(), hr.start()
    })()
})();