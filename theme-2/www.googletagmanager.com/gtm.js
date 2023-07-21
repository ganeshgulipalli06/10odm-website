// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "4",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-154597602-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [{
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendPageView": true,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": "G-TXTBFKF5EW",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettings": true,
                "vtp_enableEuid": false,
                "tag_id": 9
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 1]
                ]
            ]
        },
        "runtime": []









    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ca = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ca(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = {
                    a: !0
                },
                la = {};
            try {
                la.__proto__ = ka;
                ja = la.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = ia,
        na = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (ma) ma(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.vm = b.prototype
        },
        oa = this || self,
        pa = function(a) {
            return a
        };
    var qa = function() {},
        ra = function(a) {
            return "function" === typeof a
        },
        g = function(a) {
            return "string" === typeof a
        },
        sa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ta = Array.isArray,
        ua = function(a, b) {
            if (a && ta(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        xa = function(a, b) {
            if (!sa(a) || !sa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Aa = function(a, b) {
            for (var c = new za, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ca = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Da = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ea = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Fa = function(a) {
            var b = [];
            if (ta(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ga = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ha = function() {
            return new Date(Date.now())
        },
        Ia = function() {
            return Ha().getTime()
        },
        za = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    za.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    za.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ja = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ka = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        La = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ma = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Na = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Oa = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Pa = /^\w{1,9}$/,
        Qa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Pa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ra = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Sa() {
        for (var a = Ua, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Va() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ua, Wa;

    function Ya(a) {
        Ua = Ua || Va();
        Wa = Wa || Sa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | h >> 4,
                p = (h & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Ua[m], Ua[n], Ua[p], Ua[q])
        }
        return b.join("")
    }

    function Za(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Wa[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Ua = Ua || Va();
        Wa = Wa || Sa();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    };
    var $a = {},
        ab = function(a, b) {
            $a[a] = $a[a] || [];
            $a[a][b] = !0
        },
        bb = function() {
            delete $a.GA4_EVENT
        },
        cb = function(a) {
            var b = $a[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Ya(c.join("")).replace(/\.+$/, "")
        };
    var db = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var eb, fb = function() {
        if (void 0 === eb) {
            var a = null,
                b = oa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (c) {
                    oa.console && oa.console.error(c.message)
                }
                eb = a
            } else eb = a
        }
        return eb
    };
    var gb = function(a) {
        this.h = a
    };
    gb.prototype.toString = function() {
        return this.h + ""
    };
    var hb = {};
    var ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var jb, kb;
    a: {
        for (var lb = ["CLOSURE_FLAGS"], mb = oa, nb = 0; nb < lb.length; nb++)
            if (mb = mb[lb[nb]], null == mb) {
                kb = null;
                break a
            }
        kb = mb
    }
    var ob = kb && kb[610401301];
    jb = null != ob ? ob : !1;

    function pb() {
        var a = oa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var qb, rb = oa.navigator;
    qb = rb ? rb.userAgentData || null : null;

    function sb(a) {
        return jb ? qb ? qb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function tb(a) {
        return -1 != pb().indexOf(a)
    };

    function ub() {
        return jb ? !!qb && 0 < qb.brands.length : !1
    }

    function vb() {
        return ub() ? !1 : tb("Opera")
    }

    function wb() {
        return tb("Firefox") || tb("FxiOS")
    }

    function xb() {
        return ub() ? sb("Chromium") : (tb("Chrome") || tb("CriOS")) && !(ub() ? 0 : tb("Edge")) || tb("Silk")
    };
    var yb = {},
        zb = function(a) {
            this.h = a
        };
    zb.prototype.toString = function() {
        return this.h.toString()
    };
    var Ab = function(a) {
        return a instanceof zb && a.constructor === zb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Bb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };
    (function() {
        return ""
    }).toString().indexOf("`");

    function Cb(a) {
        var b = a = Db(a),
            c = fb(),
            d = c ? c.createHTML(b) : b;
        return new zb(d, yb)
    }

    function Db(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        D = document,
        Eb = navigator,
        Fb = D.currentScript && D.currentScript.src,
        Gb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Hb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ib = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Jb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Kb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Lb = function(a, b, c, d, e) {
            var f = D.createElement("script");
            Kb(f, d, Ib);
            f.type = "text/javascript";
            f.async = !0;
            var h, l = Db(a),
                m = fb(),
                n = m ? m.createScriptURL(l) : l;
            h = new gb(n, hb);
            f.src = h instanceof gb && h.constructor === gb ? h.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Hb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = D.getElementsByTagName("script")[0] || D.body || D.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Mb = function() {
            if (Fb) {
                var a = Fb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Nb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var h = e,
                l = !1;
            h || (h = D.createElement("iframe"), l = !0);
            Kb(h, c, Jb);
            d && k(d, function(n, p) {
                h.dataset[n] = p
            });
            f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
            if (l) {
                var m = D.body && D.body.lastChild || D.body ||
                    D.head;
                m.parentNode.insertBefore(h, m)
            }
            Hb(h, b);
            void 0 !== a && (h.src = a);
            return h
        },
        Ob = function(a, b, c, d) {
            var e = new Image(1, 1);
            Kb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Pb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Qb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        E = function(a) {
            z.setTimeout(a, 0)
        },
        Rb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Sb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Tb = function(a) {
            var b = D.createElement("div"),
                c = b,
                d = Cb("A<div>" + a + "</div>");
            1 === c.nodeType && Bb(c);
            c.innerHTML = Ab(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Ub = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f =
                    a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Vb = function(a) {
            var b;
            try {
                b = Eb.sendBeacon && Eb.sendBeacon(a)
            } catch (c) {
                ab("TAGGING", 15)
            }
            b || Ob(a)
        },
        Wb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Xb = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Zb = function() {
            var a = z.performance;
            if (a && ra(a.now)) return a.now()
        },
        $b = function() {
            return z.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ac = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        bc = function(a) {
            if (null == a) return String(a);
            var b = ac.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        cc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        G = function(a) {
            if (!a || "object" != bc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !cc(a, "constructor") && !cc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || cc(a, b)
        },
        J = function(a, b) {
            var c = b || ("array" == bc(a) ? [] : {}),
                d;
            for (d in a)
                if (cc(a, d)) {
                    var e = a[d];
                    "array" == bc(e) ? ("array" != bc(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : G(e) ? (G(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
                }
            return c
        };
    var dc = function(a) {
        if (void 0 === a || ta(a) || G(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };

    function ec(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function fc(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function gc(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0;
        switch (b) {
            case 0:
                return "G1" + ec(c) + ec(d);
            case 1:
                return "G2" + fc(c) + fc(d);
            default:
                return "g1--"
        }
    };
    var hc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Ni: a("consent"),
            Gg: a("convert_case_to"),
            Hg: a("convert_false_to"),
            Ig: a("convert_null_to"),
            Jg: a("convert_true_to"),
            Kg: a("convert_undefined_to"),
            Sl: a("debug_mode_metadata"),
            la: a("function"),
            Jf: a("instance_name"),
            Sj: a("live_only"),
            Tj: a("malware_disabled"),
            Uj: a("metadata"),
            Xj: a("original_activity_id"),
            am: a("original_vendor_template_id"),
            Zl: a("once_on_load"),
            Wj: a("once_per_event"),
            Oh: a("once_per_load"),
            gm: a("priority_override"),
            hm: a("respected_consent_types"),
            Sh: a("setup_tags"),
            wd: a("tag_id"),
            Xh: a("teardown_tags")
        }
    }();
    var Dc = [],
        Ec = function(a) {
            return void 0 == Dc[a] ? !1 : Dc[a]
        };
    var Fc;
    var Gc = [],
        Hc = [],
        Ic = [],
        Jc = [],
        Kc = [],
        Lc = {},
        Mc, Nc, Pc = function() {
            var a = Oc;
            Nc = Nc || a
        },
        Rc = function() {
            for (var a = data.resource || {}, b = a.macros || [], c = 0; c < b.length; c++) Gc.push(b[c]);
            for (var d = a.tags || [], e = 0; e < d.length; e++) Jc.push(d[e]);
            for (var f = a.predicates || [], h = 0; h < f.length; h++) Ic.push(f[h]);
            for (var l = a.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, q = 0; q < n.length; q++) {
                    var r = n[q][0];
                    p[r] = Array.prototype.slice.call(n[q], 1);
                    Ec(5) || Ec(7) ? ("if" !== r && "unless" !== r || Qc(p[r]), ab("TAGGING", 22)) : Ec(6) && ab("TAGGING",
                        23)
                }
                Hc.push(p)
            }
        },
        Qc = function(a) {},
        Sc, Tc = [],
        Uc = function(a, b) {
            var c = a[hc.la],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Lc[c],
                f = b && 2 === b.type && d.zi && e && -1 !== Tc.indexOf(c),
                h = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.di && d.di(a[m]), e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.bi && (h.vtp_gtmCachedValues = d.bi);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.index;
                        if (null == p) n = "";
                        else {
                            var q;
                            switch (b.type) {
                                case 2:
                                    q = Gc[p];
                                    break;
                                case 1:
                                    q = Jc[p];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = q && q[hc.Jf];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName = b.name)
            }
            var t, u;
            e && (t = e(h));
            if (!e || f) u = Fc(c, l, b);
            f && t !== u && d && d.zi(d.id, c);
            return e ? t : u
        },
        Wc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Vc(a[e], b, c));
            return d
        },
        Vc = function(a, b, c) {
            if (ta(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Vc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Gc[f];
                        if (!h || b.ag(h)) return;
                        c[f] = !0;
                        var l = String(h[hc.Jf]);
                        try {
                            var m = Wc(h, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Uc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Sc && (d = Sc.mk(d, m))
                        } catch (y) {
                            b.oi && b.oi(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Vc(a[n], b, c)] = Vc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Vc(a[q], b, c);
                            Nc && (p = p || r === Nc.De);
                            d.push(r)
                        }
                        return Nc && p ? Nc.nk(d) : d.join("");
                    case "escape":
                        d = Vc(a[1], b, c);
                        if (Nc && ta(a[1]) && "macro" === a[1][0] && Nc.Qk(a)) return Nc.rl(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) ic[a[t]] && (d = ic[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Jc[u]) throw Error("Unable to resolve tag reference " +
                            u + ".");
                        return d = {
                            ii: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[hc.la] = a[1];
                        var w = Xc(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Xc = function(a, b, c) {
            try {
                return Mc(Wc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        Yc = function(a) {
            var b = a[hc.la];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!Lc[b]
        };
    var ad = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Zc(a), f = 0; f < Hc.length; f++) {
                var h = Hc[f],
                    l = $c(h, e);
                if (l) {
                    for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(h.block || [])
                } else null === l && b(h.block || []);
            }
            for (var p = [], q = 0; q < Jc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        $c = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], h = 0; h < f.length; h++) {
                var l = b(f[h]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Zc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Xc(Ic[c], a));
                return b[c]
            }
        };
    var bd = {
        mk: function(a, b) {
            b[hc.Gg] && "string" === typeof a && (a = 1 == b[hc.Gg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(hc.Ig) && null === a && (a = b[hc.Ig]);
            b.hasOwnProperty(hc.Kg) && void 0 === a && (a = b[hc.Kg]);
            b.hasOwnProperty(hc.Jg) && !0 === a && (a = b[hc.Jg]);
            b.hasOwnProperty(hc.Hg) && !1 === a && (a = b[hc.Hg]);
            return a
        }
    };
    var pd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
        qd = new za;
    var xd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function yd(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var Ad = function(a) {
            return zd ? D.querySelectorAll(a) : null
        },
        Bd = function(a, b) {
            if (!zd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!D.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Cd = !1;
    if (D.querySelectorAll) try {
        var Dd = D.querySelectorAll(":root");
        Dd && 1 == Dd.length && Dd[0] == D.documentElement && (Cd = !0)
    } catch (a) {}
    var zd = Cd;
    var K = function(a) {
        ab("GTM", a)
    };
    var N = {
            g: {
                Kc: "ad_personalization",
                F: "ad_storage",
                pb: "ad_user_data",
                M: "analytics_storage",
                Wb: "region",
                Xd: "consent_updated",
                Cg: "wait_for_update",
                Ri: "ads",
                Rl: "all",
                Si: "android",
                Ti: "chrome",
                Ui: "playstore",
                Vi: "search",
                Wi: "shopping",
                Xi: "youtube",
                Yi: "app_remove",
                Zi: "app_store_refund",
                aj: "app_store_subscription_cancel",
                bj: "app_store_subscription_convert",
                cj: "app_store_subscription_renew",
                Lg: "add_payment_info",
                Mg: "add_shipping_info",
                Xb: "add_to_cart",
                Yb: "remove_from_cart",
                Ng: "view_cart",
                Db: "begin_checkout",
                Zb: "select_item",
                Ua: "view_item_list",
                qb: "select_promotion",
                Va: "view_promotion",
                na: "purchase",
                ac: "refund",
                za: "view_item",
                Og: "add_to_wishlist",
                dj: "exception",
                ej: "first_open",
                fj: "first_visit",
                fa: "gtag.config",
                Ea: "gtag.get",
                gj: "in_app_purchase",
                bc: "page_view",
                ij: "screen_view",
                jj: "session_start",
                kj: "timing_complete",
                lj: "track_social",
                Zd: "user_engagement",
                rb: "gclid",
                ia: "ads_data_redaction",
                U: "allow_ad_personalization_signals",
                ae: "allow_custom_scripts",
                lf: "allow_display_features",
                be: "allow_enhanced_conversions",
                sb: "allow_google_signals",
                Aa: "allow_interest_groups",
                mj: "app_id",
                nj: "app_installer_id",
                oj: "app_name",
                pj: "app_version",
                fc: "auid",
                qj: "auto_detection_enabled",
                Eb: "aw_remarketing",
                nf: "aw_remarketing_only",
                ce: "discount",
                de: "aw_feed_country",
                ee: "aw_feed_language",
                P: "items",
                fe: "aw_merchant_id",
                Pg: "aw_basket_type",
                Mc: "campaign_content",
                Nc: "campaign_id",
                Oc: "campaign_medium",
                Pc: "campaign_name",
                Qc: "campaign",
                Rc: "campaign_source",
                Sc: "campaign_term",
                Wa: "client_id",
                rj: "content_group",
                sj: "content_type",
                Fa: "conversion_cookie_prefix",
                Tc: "conversion_id",
                sa: "conversion_linker",
                Fb: "conversion_api",
                Ja: "cookie_domain",
                Ba: "cookie_expires",
                Ka: "cookie_flags",
                hc: "cookie_name",
                Uc: "cookie_path",
                Ga: "cookie_prefix",
                Ya: "cookie_update",
                tb: "country",
                oa: "currency",
                he: "customer_lifetime_value",
                ic: "custom_map",
                Qg: "gcldc",
                tj: "debug_mode",
                R: "developer_id",
                uj: "disable_merchant_reported_purchases",
                jc: "dc_custom_params",
                Rg: "dc_natural_search",
                Sg: "dynamic_event_settings",
                Tg: "affiliation",
                ie: "checkout_option",
                pf: "checkout_step",
                Ug: "coupon",
                Vc: "item_list_name",
                qf: "list_name",
                vj: "promotions",
                Wc: "shipping",
                rf: "tax",
                je: "engagement_time_msec",
                Xc: "enhanced_client_id",
                ke: "enhanced_conversions",
                Vg: "enhanced_conversions_automatic_settings",
                me: "estimated_delivery_date",
                tf: "euid_logged_in_state",
                Yc: "event_callback",
                wj: "event_category",
                ub: "event_developer_id_string",
                xj: "event_label",
                Wg: "event",
                ne: "event_settings",
                oe: "event_timeout",
                yj: "description",
                zj: "fatal",
                Aj: "experiments",
                uf: "firebase_id",
                pe: "first_party_collection",
                qe: "_x_20",
                Gb: "_x_19",
                Xg: "fledge",
                Yg: "flight_error_code",
                Zg: "flight_error_message",
                ah: "fl_activity_category",
                bh: "fl_activity_group",
                vf: "fl_advertiser_id",
                eh: "fl_ar_dedupe",
                fh: "fl_random_number",
                gh: "tran",
                hh: "u",
                se: "gac_gclid",
                kc: "gac_wbraid",
                ih: "gac_wbraid_multiple_conversions",
                jh: "ga_restrict_domain",
                wf: "ga_temp_client_id",
                te: "gdpr_applies",
                kh: "geo_granularity",
                Za: "value_callback",
                La: "value_key",
                Ul: "google_ono",
                ab: "google_signals",
                lh: "google_tld",
                ue: "groups",
                mh: "gsa_experiment_id",
                nh: "iframe_state",
                ve: "ignore_referrer",
                xf: "internal_traffic_results",
                wb: "is_legacy_converted",
                xb: "is_legacy_loaded",
                we: "is_passthrough",
                wa: "language",
                yf: "legacy_developer_id_string",
                xa: "linker",
                mc: "accept_incoming",
                yb: "decorate_forms",
                N: "domains",
                Hb: "url_position",
                oh: "method",
                Bj: "name",
                Zc: "new_customer",
                ph: "non_interaction",
                Cj: "optimize_id",
                Dj: "page_hostname",
                ad: "page_path",
                Ca: "page_referrer",
                zb: "page_title",
                qh: "passengers",
                rh: "phone_conversion_callback",
                Ej: "phone_conversion_country_code",
                sh: "phone_conversion_css_class",
                Fj: "phone_conversion_ids",
                th: "phone_conversion_number",
                uh: "phone_conversion_options",
                nc: "quantity",
                bd: "redact_device_info",
                zf: "redact_enhanced_user_id",
                Gj: "redact_ga_client_id",
                Hj: "redact_user_id",
                xe: "referral_exclusion_definition",
                Ib: "restricted_data_processing",
                Ij: "retoken",
                Jj: "sample_rate",
                Af: "screen_name",
                Ab: "screen_resolution",
                Kj: "search_term",
                Ma: "send_page_view",
                Jb: "send_to",
                ye: "server_container_url",
                dd: "session_duration",
                ze: "session_engaged",
                Bf: "session_engaged_time",
                cb: "session_id",
                Ae: "session_number",
                ed: "delivery_postal_code",
                vh: "temporary_client_id",
                Cf: "topmost_url",
                Lj: "tracking_id",
                Df: "traffic_type",
                ja: "transaction_id",
                oc: "transport_url",
                wh: "trip_type",
                qc: "update",
                eb: "url_passthrough",
                fd: "_user_agent_architecture",
                gd: "_user_agent_bitness",
                hd: "_user_agent_full_version_list",
                jd: "_user_agent_mobile",
                kd: "_user_agent_model",
                ld: "_user_agent_platform",
                md: "_user_agent_platform_version",
                nd: "_user_agent_wow64",
                xh: "_user_country",
                ka: "user_data",
                yh: "user_data_auto_latency",
                zh: "user_data_auto_meta",
                Ah: "user_data_auto_multi",
                Bh: "user_data_auto_selectors",
                Ch: "user_data_auto_status",
                Ef: "user_data_mode",
                Ce: "user_data_settings",
                ya: "user_id",
                Na: "user_properties",
                Dh: "_user_region",
                Eh: "us_privacy_string",
                W: "value",
                sc: "wbraid",
                Fh: "wbraid_multiple_conversions",
                Lh: "_host_name",
                Mh: "_in_page_command",
                Nh: "_is_passthrough_cid",
                Fe: "non_personalized_ads",
                vd: "_sst_parameters",
                Xa: "conversion_label",
                qa: "page_location",
                vb: "global_developer_id_string",
                Be: "tc_privacy_string"
            }
        },
        be = {},
        ce = Object.freeze((be[N.g.U] = 1, be[N.g.lf] = 1, be[N.g.be] = 1, be[N.g.sb] = 1, be[N.g.P] = 1, be[N.g.Ja] = 1, be[N.g.Ba] = 1, be[N.g.Ka] = 1, be[N.g.hc] = 1,
            be[N.g.Uc] = 1, be[N.g.Ga] = 1, be[N.g.Ya] = 1, be[N.g.ic] = 1, be[N.g.R] = 1, be[N.g.Sg] = 1, be[N.g.Yc] = 1, be[N.g.ne] = 1, be[N.g.oe] = 1, be[N.g.pe] = 1, be[N.g.jh] = 1, be[N.g.ab] = 1, be[N.g.lh] = 1, be[N.g.ue] = 1, be[N.g.xf] = 1, be[N.g.wb] = 1, be[N.g.xb] = 1, be[N.g.xa] = 1, be[N.g.zf] = 1, be[N.g.xe] = 1, be[N.g.Ib] = 1, be[N.g.Ma] = 1, be[N.g.Jb] = 1, be[N.g.ye] = 1, be[N.g.dd] = 1, be[N.g.Bf] = 1, be[N.g.ed] = 1, be[N.g.oc] = 1, be[N.g.qc] = 1, be[N.g.Ce] = 1, be[N.g.Na] = 1, be[N.g.vd] = 1, be));
    Object.freeze([N.g.qa, N.g.Ca, N.g.zb, N.g.wa, N.g.Af, N.g.ya, N.g.uf, N.g.rj]);
    var de = {},
        ee = Object.freeze((de[N.g.Yi] = 1, de[N.g.Zi] = 1, de[N.g.aj] = 1, de[N.g.bj] = 1, de[N.g.cj] = 1, de[N.g.ej] = 1, de[N.g.fj] = 1, de[N.g.gj] = 1, de[N.g.jj] = 1, de[N.g.Zd] = 1, de)),
        fe = {},
        ge = Object.freeze((fe[N.g.Lg] = 1, fe[N.g.Mg] = 1, fe[N.g.Xb] = 1, fe[N.g.Yb] = 1, fe[N.g.Ng] = 1, fe[N.g.Db] = 1, fe[N.g.Zb] = 1, fe[N.g.Ua] = 1, fe[N.g.qb] = 1, fe[N.g.Va] = 1, fe[N.g.na] = 1, fe[N.g.ac] = 1, fe[N.g.za] = 1, fe[N.g.Og] = 1, fe)),
        he = Object.freeze([N.g.U, N.g.sb, N.g.Ya]),
        ie = Object.freeze([].concat(he)),
        je = Object.freeze([N.g.Ba, N.g.oe, N.g.dd, N.g.Bf, N.g.je]),
        ke = Object.freeze([].concat(je)),
        le = {},
        me = (le[N.g.F] = "1", le[N.g.M] = "2", le[N.g.pb] = "3", le[N.g.Kc] = "4", le),
        ne = {},
        oe = Object.freeze((ne[N.g.U] = 1, ne[N.g.be] = 1, ne[N.g.Aa] = 1, ne[N.g.Eb] = 1, ne[N.g.nf] = 1, ne[N.g.ce] = 1, ne[N.g.de] = 1, ne[N.g.ee] = 1, ne[N.g.P] = 1, ne[N.g.fe] = 1, ne[N.g.Fa] = 1, ne[N.g.sa] = 1, ne[N.g.Ja] = 1, ne[N.g.Ba] = 1, ne[N.g.Ka] = 1, ne[N.g.Ga] = 1, ne[N.g.oa] = 1, ne[N.g.he] = 1, ne[N.g.R] = 1, ne[N.g.uj] = 1, ne[N.g.ke] = 1, ne[N.g.me] = 1, ne[N.g.uf] = 1, ne[N.g.pe] = 1, ne[N.g.wb] = 1, ne[N.g.xb] = 1, ne[N.g.wa] = 1, ne[N.g.Zc] = 1, ne[N.g.qa] = 1,
            ne[N.g.Ca] = 1, ne[N.g.rh] = 1, ne[N.g.sh] = 1, ne[N.g.th] = 1, ne[N.g.uh] = 1, ne[N.g.Ib] = 1, ne[N.g.Ma] = 1, ne[N.g.Jb] = 1, ne[N.g.ye] = 1, ne[N.g.ed] = 1, ne[N.g.ja] = 1, ne[N.g.oc] = 1, ne[N.g.qc] = 1, ne[N.g.eb] = 1, ne[N.g.ka] = 1, ne[N.g.ya] = 1, ne[N.g.W] = 1, ne)),
        pe = {},
        re = Object.freeze((pe[N.g.Vi] = "s", pe[N.g.Xi] = "y", pe[N.g.Si] = "n", pe[N.g.Ti] = "c", pe[N.g.Ui] = "p", pe[N.g.Wi] = "h", pe[N.g.Ri] = "a", pe));
    Object.freeze(N.g);
    var se = {},
        te = z.google_tag_manager = z.google_tag_manager || {},
        ue = Math.random();
    se.Lf = "37j0";
    se.ud = Number("0") || 0;
    se.ba = "dataLayer";
    se.Pi = "ChEI8NnopQYQqrKepMiB5ML1ARIkAIrWSWSVwd2Nfn6ZiNFIPsigC0daxmyE8gElJBC6et6Gwt90GgJKwg\x3d\x3d";
    var ve = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        we = {
            __paused: 1,
            __tg: 1
        },
        xe;
    for (xe in ve) ve.hasOwnProperty(xe) && (we[xe] = 1);
    var ye = Ea(""),
        ze, Ae = !1;
    ze = Ae;
    var Be, Ce = !1;
    Be = Ce;
    var De, Ee = !1;
    De = Ee;
    var Fe, Ge = !1;
    Fe = Ge;
    se.Yd = "www.googletagmanager.com";
    var He = "" + se.Yd + (ze ? "/gtag/js" : "/gtm.js"),
        Ie = null,
        Je = null,
        Ke = {},
        Le = {},
        Me = {},
        Ne = function() {
            var a = te.sequence || 1;
            te.sequence = a + 1;
            return a
        };
    se.Oi = "";
    var Oe = "";
    se.Je = Oe;
    var Pe = new za,
        Qe = {},
        Re = {},
        Ue = {
            name: se.ba,
            set: function(a, b) {
                J(Oa(a, b), Qe);
                Se()
            },
            get: function(a) {
                return Te(a, 2)
            },
            reset: function() {
                Pe = new za;
                Qe = {};
                Se()
            }
        },
        Te = function(a, b) {
            return 2 != b ? Pe.get(a) : Ve(a)
        },
        Ve = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Qe, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        We = function(a, b) {
            Re.hasOwnProperty(a) || (Pe.set(a, b), J(Oa(a, b), Qe), Se())
        },
        Se = function(a) {
            k(Re, function(b, c) {
                Pe.set(b, c);
                J(Oa(b), Qe);
                J(Oa(b,
                    c), Qe);
                a && delete Re[b]
            })
        },
        Xe = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ve(a) : Pe.get(a);
            "array" === bc(d) || "object" === bc(d) ? c = J(d) : c = d;
            return c
        };
    var P = [];
    P[5] = !0;
    P[6] = !0;
    P[12] = !0;
    P[7] = !0;
    P[8] = !0;
    P[22] = !0;
    P[9] = !0;
    P[11] = !0;
    P[14] = !0;
    P[15] = !0;
    P[16] = !0;
    P[18] = !0;
    P[24] = !0;
    P[25] = !0;
    P[26] = !0;
    P[28] = !0;
    P[29] = !0;
    P[32] = !0;
    P[33] = !0;
    P[34] = !0;
    P[35] = !0;
    P[37] = !0;
    P[38] = !0;
    P[40] = !0;
    P[42] = !0;
    P[43] = !0;
    P[44] = !0;
    P[45] = !0;
    P[46] = !0;
    P[55] = !0;
    P[57] = !0;
    P[58] = !0;
    P[59] = !0;
    P[60] = !0;
    P[62] = !0;
    P[63] = !0;
    P[68] = !0;
    P[69] = !0;
    P[70] = !0;
    P[71] = !0;
    P[72] = !0;
    P[76] = !0;
    P[78] = !0;
    P[80] = !0;
    P[81] = !0;
    P[83] = !0;
    P[84] = !0;

    function Q(a) {
        return !!P[a]
    }
    var af = function(a) {
        ab("HEALTH", a)
    };
    var bf;
    try {
        bf = JSON.parse(Za("eyIwIjoiSU4iLCIxIjoiSU4tQVAiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))
    } catch (a) {
        K(123), af(2), bf = {}
    }
    var cf = function() {
            return bf["0"] || ""
        },
        df = function() {
            var a = !1;
            return a
        },
        ef = function() {
            return !!bf["6"]
        },
        ff = function() {
            var a = "";
            return a
        },
        gf = function() {
            var a = !1;
            return a
        },
        hf = function() {
            var a = "";
            return a
        };
    var jf, kf = !1,
        lf = function(a) {
            if (!kf) {
                kf = !0;
                jf = jf || {}
            }
            return jf[a]
        };
    var mf = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        nf = function(a) {
            if (D.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    h = e.filter;
                if (h) {
                    var l = h.indexOf("opacity(");
                    0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var yf = /:[0-9]+$/,
        zf = /^\d+\.fls\.doubleclick\.net$/,
        Af = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var h = f.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        Df = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Bf(a.protocol) || Bf(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(yf, "").toLowerCase());
            return Cf(a, b, c, d, e)
        },
        Cf = function(a, b, c, d, e) {
            var f, h = Bf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Ef(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(yf, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || ab("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Af(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Bf = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Ef = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Ff = function(a) {
            var b = D.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || ab("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(yf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Gf = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Ff(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                l = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === l[0] && (l = l.substring(1));
            h = c(h);
            l = c(l);
            "" !== h && (h = "?" + h);
            "" !== l && (l = "#" + l);
            var m = "" + f + h + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        Hf = function(a) {
            var b = Ff(z.location.href),
                c = Df(b, "host", !1);
            if (c && c.match(zf)) {
                var d = Df(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var Ag = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Bg = function(a) {
        Bg[" "](a);
        return a
    };
    Bg[" "] = function() {};
    var Dg = function() {
        var a = Cg,
            b = "Yf";
        if (a.Yf && a.hasOwnProperty(b)) return a.Yf;
        var c = new a;
        return a.Yf = c
    };
    var Cg = function() {
        var a = {};
        this.h = function() {
            var b = Ag.h,
                c = Ag.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.B = function() {
            a[Ag.h] = !0
        }
    };
    var Eg = !1,
        Fg = !1,
        Gg = [],
        Hg = {},
        Ig = {},
        Jg = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function Kg() {
        var a = Gb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            default: Lg,
            update: Mg,
            declare: Ng,
            implicit: Og,
            addListener: Pg,
            notifyListeners: Qg,
            setCps: Rg,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Sg(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function Ng(a, b, c, d, e) {
        var f = Kg();
        f.active = !0;
        f.usedDeclare = !0;
        var h = f.entries,
            l = h[a] || {},
            m = l.declare_region,
            n = c && g(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Sg(n, m, d, e)) {
            var p = {
                region: l.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: l.implicit,
                default: l.default,
                update: l.update,
                quiet: l.quiet
            };
            if ("" !== d || !1 !== l.declare) h[a] = p
        }
    }

    function Og(a, b) {
        var c = Kg();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries,
            e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }

    function Lg(a, b, c, d, e, f) {
        var h = Kg();
        h.usedDefault || !h.accessedDefault && !h.accessedAny || (h.wasSetLate = !0);
        h.active = !0;
        h.usedDefault = !0;
        ab("TAGGING", 19);
        if (void 0 == b) ab("TAGGING", 18);
        else {
            var l = h.entries,
                m = l[a] || {},
                n = m.region,
                p = c && g(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (Sg(p, n, d, e)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        declare_region: m.declare_region,
                        implicit: m.implicit,
                        default: "granted" === b,
                        declare: m.declare,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.default) l[a] =
                    r;
                q && z.setTimeout(function() {
                    if (l[a] === r && r.quiet) {
                        r.quiet = !1;
                        var t = [a];
                        if (Ec(4))
                            for (var u in Hg) Hg.hasOwnProperty(u) && Hg[u] === a && t.push(u);
                        for (var v = 0; v < t.length; v++) Tg(t[v]);
                        Qg();
                        ab("TAGGING", 2)
                    }
                }, f)
            }
        }
    }

    function Mg(a, b) {
        var c = Kg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Ug(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var h = Ug(c, a),
                l = [a];
            if (Ec(4))
                for (var m in Hg) Hg.hasOwnProperty(m) && Hg[m] === a && l.push(m);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < l.length; n++) Tg(l[n])
            } else if (h !== d)
                for (var p = 0; p < l.length; p++) Tg(l[p])
        }
    }

    function Rg(a, b, c, d, e) {
        var f = Kg(),
            h;
        a: {
            var l = f.cps,
                m, n = l[a] || {},
                p = n.region,
                q = c && g(c) ? c.toUpperCase() : void 0;m = d.toUpperCase();
            if (Sg(q, p, m, e.toUpperCase())) {
                var r = {
                    enabled: "granted" === b,
                    region: q
                };
                if ("" !== m || !1 !== n.enabled) {
                    l[a] = r;
                    h = !0;
                    break a
                }
            }
            h = !1
        }
        h && (f.usedSetCps = !0)
    }

    function Pg(a, b) {
        Gg.push({
            consentTypes: a,
            vk: b
        })
    }

    function Tg(a) {
        for (var b = 0; b < Gg.length; ++b) {
            var c = Gg[b];
            ta(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.ui = !0)
        }
    }

    function Qg(a, b) {
        for (var c = 0; c < Gg.length; ++c) {
            var d = Gg[c];
            if (d.ui) {
                d.ui = !1;
                try {
                    d.vk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Ug(a, b) {
        var c = a.entries,
            d = c[b] || {},
            e = d.update;
        if (void 0 !== e) return e ? 1 : 2;
        e = d.default;
        if (void 0 !== e) return e ? 1 : 2;
        if (Ec(4) && Hg.hasOwnProperty(b)) {
            var f = c[Hg[b]] || {};
            e = f.update;
            if (void 0 !== e) return e ? 1 : 2;
            e = f.default;
            if (void 0 !== e) return e ? 1 : 2
        }
        e = d.declare;
        if (void 0 !== e) return e ? 1 : 2;
        if (Ec(3)) {
            e = d.implicit;
            if (void 0 !== e) return e ? 3 : 4;
            if (Jg.hasOwnProperty(b)) return Jg[b] ? 3 : 4
        }
        return 0
    }
    var Vg = function(a) {
            var b = Kg();
            b.accessedAny = !0;
            switch (Ug(b, a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Wg = function(a) {
            var b = Kg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Xg = function() {
            if (!Dg().h()) return !1;
            var a = Kg();
            a.accessedAny = !0;
            return a.active
        },
        Yg = function() {
            var a = Kg();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Zg = function(a, b) {
            Kg().addListener(a, b)
        },
        $g = function(a, b) {
            Kg().notifyListeners(a, b)
        },
        ah = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Wg(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Zg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        bh = function(a, b) {
            function c() {
                for (var f = [], h = 0; h < d.length; h++) {
                    var l = d[h];
                    Vg(l) && !e[l] && (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = g(b) ? [b] : b,
                e = {};
            c().length !== d.length && Zg(d, function(f) {
                var h = c();
                0 < h.length && (f.consentTypes = h, a(f))
            })
        };

    function ch() {}

    function dh() {};
    var eh = [N.g.F, N.g.M, N.g.pb, N.g.Kc],
        lh = function(a) {
            for (var b = a[N.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    Fc: 0
                }; d.Fc < c.length; d = {
                    Fc: d.Fc
                }, ++d.Fc) k(a, function(e) {
                return function(f, h) {
                    if (f !== N.g.Wb) {
                        var l = c[e.Fc],
                            m = cf(),
                            n = bf["1"] || "";
                        Fg = !0;
                        Eg && ab("TAGGING", 20);
                        Kg().declare(f, h, l, m, n)
                    }
                }
            }(d))
        },
        mh = function(a) {
            var b = a[N.g.Wb];
            b && K(40);
            var c = a[N.g.Cg];
            c && K(41);
            for (var d = ta(b) ? b : [b], e = {
                    Gc: 0
                }; e.Gc < d.length; e = {
                    Gc: e.Gc
                }, ++e.Gc) k(a, function(f) {
                return function(h, l) {
                    if (h !== N.g.Wb && h !== N.g.Cg) {
                        var m = d[f.Gc],
                            n = Number(c),
                            p = cf(),
                            q = bf["1"] || "";
                        Eg = !0;
                        Fg && ab("TAGGING", 20);
                        Kg().default(h, l, m, p, q, n)
                    }
                }
            }(e))
        },
        nh = function(a, b) {
            k(a, function(c, d) {
                Eg = !0;
                Fg && ab("TAGGING", 20);
                Kg().update(c, d)
            });
            $g(b.eventId, b.priorityId)
        },
        oh = function(a) {
            for (var b = a[N.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    Hc: 0
                }; d.Hc < c.length; d = {
                    Hc: d.Hc
                }, ++d.Hc) k(a, function(e) {
                return function(f, h) {
                    if (f !== N.g.Wb) {
                        var l = c[e.Hc],
                            m = cf(),
                            n = bf["1"] || "";
                        Kg().setCps(f, h, l, m, n)
                    }
                }
            }(d))
        },
        ph = function() {
            return ef() || Kg().usedSetCps || !Vg(N.g.pb)
        },
        qh = function(a, b) {
            bh(a, b)
        },
        rh = function(a,
            b) {
            ah(a, b)
        },
        sh = function() {
            if (Q(47)) {
                for (var a = bf["7"], b = a ? a.split("|") : [], c = {}, d = 0; d < b.length; d++) c[b[d]] = !0;
                for (var e = 0; e < eh.length; e++) {
                    var f = eh[e],
                        h = c[f] ? "granted" : "denied";
                    Kg().implicit(f, h)
                }
            }
        };
    var th = function(a) {
            var b = String(a[hc.la] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        uh = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var wh = function(a) {
            var b = vh();
            b.pending || (b.pending = []);
            ua(b.pending, function(c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            })
        },
        xh = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        vh = function() {
            var a = Gb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new xh, a.tidr = b);
            return b
        };
    var yh = {},
        zh = !1,
        Ah = {
            ctid: "GTM-WKV3GT5",
            Rf: "13450744",
            Ve: "GTM-WKV3GT5",
            si: "GTM-WKV3GT5"
        };
    yh.Ee = Ea("");
    var Ch = function() {
            var a = Ah.Ve ? Ah.Ve.split("|") : [Ah.ctid];
            return zh ? a.map(Bh) : a
        },
        Eh = function() {
            var a = Dh();
            return zh ? a.map(Bh) : a
        },
        Gh = function() {
            return Fh(Ah.ctid)
        },
        Hh = function() {
            return Fh(Ah.Rf || "_" + Ah.ctid)
        },
        Dh = function() {
            return Ah.si ? Ah.si.split("|") : []
        },
        Ih = function(a) {
            var b = vh();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        Fh = function(a) {
            return zh ? Bh(a) : a
        },
        Bh = function(a) {
            return "siloed_" + a
        },
        Jh = function(a) {
            a = String(a);
            return zh && 0 === a.indexOf("siloed_") ? a.substring(7) : a
        },
        Kh = function() {
            var a = !1;
            if (a) {
                var b = vh();
                if (b.siloed) {
                    for (var c = [], d = Ah.Ve ? Ah.Ve.split("|") : [Ah.ctid], e = Dh(), f = {}, h = 0; h < b.siloed.length; f = {
                            Dc: f.Dc
                        }, h++) f.Dc = b.siloed[h], !zh && ua(f.Dc.isDestination ? e : d, function(l) {
                        return function(m) {
                            return m === l.Dc.ctid
                        }
                    }(f)) ? zh = !0 : c.push(f.Dc);
                    b.siloed = c
                }
            }
        };

    function Lh() {
        var a = vh();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Ch(), f = Eh(), h = {}, l = 0; l < a.pending.length; h = {
                    Ub: h.Ub
                }, l++) h.Ub = a.pending[l], ua(h.Ub.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ub.target.ctid
                }
            }(h)) ? d || (b = h.Ub.onLoad, d = !0) : c.push(h.Ub);
            a.pending = c;
            if (b) try {
                b(Hh())
            } catch (m) {}
        }
    }
    var Mh = function() {
            for (var a = vh(), b = Ch(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = Ch(), d.destinations = Eh()) : a.container[b[c]] = {
                    state: 2,
                    containers: Ch(),
                    destinations: Eh()
                }
            }
            for (var e = Eh(), f = 0; f < e.length; f++) {
                var h = a.destination[e[f]];
                h && 0 === h.state && K(93);
                h ? (h.state = 2, h.containers = Ch(), h.destinations = Eh()) : a.destination[e[f]] = {
                    state: 2,
                    containers: Ch(),
                    destinations: Eh()
                }
            }
            a.canonical[Hh()] = {};
            Lh()
        },
        Nh = function() {
            var a = Hh();
            return !!vh().canonical[a]
        },
        Oh = function(a) {
            return !!vh().container[a]
        },
        Ph = function() {
            return {
                ctid: Gh(),
                isDestination: yh.Ee
            }
        };

    function Qh(a) {
        var b = vh();
        (b.siloed = b.siloed || []).push(a)
    }
    var Rh = function() {
            var a = vh().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Sh = function() {
            var a = {};
            k(vh().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Th = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var Uh = {
            sampleRate: "0.005000",
            Ki: "",
            Ji: Number("5"),
            wm: Number("")
        },
        Vh = [];

    function Wh(a) {
        Vh.push(a)
    }
    var Xh = !1,
        Yh;
    if (!(Yh = uh)) {
        var Zh = Math.random(),
            $h = Uh.sampleRate;
        Yh = Zh < Number($h)
    }
    var ai = Yh,
        bi = "https://www.googletagmanager.com/a?id=" + Ah.ctid,
        ci = void 0,
        di = {},
        ei = void 0,
        fi = new function() {
            var a = 5;
            0 < Uh.Ji && (a = Uh.Ji);
            this.h = 0;
            this.C = [];
            this.B = a
        },
        gi = 1E3;

    function hi(a, b) {
        var c = ci;
        if (void 0 === c)
            if (b) c = Ne();
            else return "";
        for (var d = [bi], e = 0; e < Vh.length; e++) {
            var f = Vh[e]({
                eventId: c,
                kb: !!a,
                Ci: function() {
                    Xh = !0
                }
            });
            "&" === f[0] && d.push(f)
        }
        d.push("&z=0");
        return d.join("")
    }

    function ii() {
        ei && (z.clearTimeout(ei), ei = void 0);
        if (void 0 !== ci && ji) {
            var a;
            (a = di[ci]) || (a = fi.h < fi.B ? !1 : 1E3 > Ia() - fi.C[fi.h % fi.B]);
            if (a || 0 >= gi--) K(1), di[ci] = !0;
            else {
                var b = fi.h++ % fi.B;
                fi.C[b] = Ia();
                var c = hi(!0);
                Ob(c);
                if (Xh) {
                    var d = c.replace("/a?", "/td?");
                    Ob(d)
                }
                ji = Xh = !1
            }
        }
    }

    function ki() {
        if (ai) {
            var a = hi(!0, !0);
            Ob(a)
        }
    }
    var ji = !1;

    function li(a) {
        di[a] || (a !== ci && (ii(), ci = a), ji = !0, ei || (ei = z.setTimeout(ii, 500)), 2022 <= hi().length && ii())
    }
    var mi = xa();

    function ni() {
        mi = xa()
    }

    function oi() {
        return ["&v=3&t=t", "&pid=" + mi].join("")
    };
    var pi = function(a, b, c, d, e, f, h, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.K = d;
            this.C = e;
            this.H = f;
            this.T = h;
            this.B = l;
            this.eventMetadata = m;
            this.onSuccess = n;
            this.onFailure = p;
            this.isGtmEvent = q
        },
        S = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.K[b]) return a.K[b];
            if (void 0 !== a.C[b]) return a.C[b];
            ai && qi(a, a.H[b], a.T[b]) && (K(71), K(79));
            return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        ri = function(a) {
            function b(h) {
                for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.K);
            b(a.C);
            b(a.H);
            if (ai)
                for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        K(71);
                        K(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        si = function(a, b, c) {
            function d(m) {
                G(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.H[b]), d(a.C[b]), d(a.K[b]));
            c && 2 !== c || d(a.h[b]);
            if (ai) {
                var h = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.T[b]), d(a.C[b]), d(a.K[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== h || qi(a, e, l)) K(71), K(81);
                f =
                    h;
                e = l
            }
            return f ? e : void 0
        },
        ti = function(a) {
            var b = [N.g.Qc, N.g.Mc, N.g.Nc, N.g.Oc, N.g.Pc, N.g.Rc, N.g.Sc],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.K) || e(a.C)) return c;
            e(a.H);
            if (ai) {
                var f = c,
                    h = d;
                c = {};
                d = !1;
                e(a.T);
                qi(a, c, f) && (K(71), K(82));
                c = f;
                d = h
            }
            if (d) return c;
            e(a.B);
            return c
        },
        qi = function(a, b, c) {
            if (!ai) return !1;
            try {
                if (b === c) return !1;
                var d = bc(b);
                if (d !== bc(c) || !(G(b) && G(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (qi(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var h in b)
                        if (!c.hasOwnProperty(h) || qi(a, b[h], c[h])) return !0
                }
            } catch (l) {
                K(72)
            }
            return !1
        },
        ui = function(a, b) {
            this.Hf = a;
            this.Oj = b;
            this.H = {};
            this.qd = {};
            this.h = {};
            this.K = {};
            this.B = {};
            this.pd = {};
            this.C = {};
            this.Lc = function() {};
            this.Cb = function() {};
            this.T = !1
        },
        vi = function(a, b) {
            a.H = b;
            return a
        },
        wi = function(a, b) {
            a.qd = b;
            return a
        },
        xi = function(a, b) {
            a.h = b;
            return a
        },
        yi = function(a, b) {
            a.K = b;
            return a
        },
        zi = function(a,
            b) {
            a.B = b;
            return a
        },
        Ai = function(a, b) {
            a.pd = b;
            return a
        },
        Bi = function(a, b) {
            a.C = b || {};
            return a
        },
        Ci = function(a, b) {
            a.Lc = b;
            return a
        },
        Di = function(a, b) {
            a.Cb = b;
            return a
        },
        Ei = function(a, b) {
            a.T = b;
            return a
        },
        Fi = function(a) {
            return new pi(a.Hf, a.Oj, a.H, a.qd, a.h, a.K, a.B, a.pd, a.C, a.Lc, a.Cb, a.T)
        };
    var Gi = [N.g.F, N.g.M],
        Hi = [N.g.F, N.g.M, N.g.pb, N.g.Kc],
        Ii = {},
        Ji = (Ii[N.g.F] = 1, Ii[N.g.M] = 2, Ii);

    function Ki(a) {
        switch (S(a, N.g.U)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var Li = function(a) {
            var b = 3 !== Ki(a);
            Q(77) && (b = b && Vg(N.g.Kc));
            return b
        },
        Mi = function() {
            var a = {},
                b;
            for (b in Ji)
                if (Ji.hasOwnProperty(b)) {
                    var c = Ji[b],
                        d, e = Kg();
                    e.accessedAny = !0;
                    d = Ug(e, b);
                    a[c] = d
                }
            var f = Q(54) && Gi.every(Vg),
                h = Q(49);
            return f || h ? gc(a, 1) : gc(a, 0)
        },
        Ni = {},
        Oi = (Ni[N.g.F] = 0, Ni[N.g.M] = 1, Ni[N.g.pb] = 2, Ni[N.g.Kc] = 3, Ni);

    function Pi(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var Qi = function(a) {
            if (Q(51)) {
                for (var b = "1", c = 0; c < Hi.length; c++) {
                    var d = b,
                        e, f = Hi[c],
                        h = Hg[f];
                    e = void 0 === h ? 0 : Oi.hasOwnProperty(h) ? 12 | Oi[h] : 8;
                    var l = Kg();
                    l.accessedAny = !0;
                    var m = l.entries[f] || {};
                    e = e << 2 | Pi(m.implicit);
                    b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Pi(m.declare) << 4 | Pi(m.default) << 2 | Pi(m.update)])
                }
                void 0 !== a && (b += Ki(a));
                return b
            }
            for (var n = "G1", p = 0; p < Gi.length; p++) {
                var q;
                a: {
                    var r = Gi[p],
                        t = Kg();t.accessedDefault = !0;
                    switch ((t.entries[r] || {}).default) {
                        case !0:
                            q = 3;
                            break a;
                        case !1:
                            q = 2;
                            break a;
                        default:
                            q = 1
                    }
                }
                switch (q) {
                    case 3:
                        n += "1";
                        break;
                    case 2:
                        n += "0";
                        break;
                    case 1:
                        n += "-"
                }
            }
            return n
        },
        Ri = function() {
            if (!Vg(N.g.pb)) return "-";
            var a = Kg(),
                b = a.cps,
                c = [],
                d;
            for (d in Ig) Ig.hasOwnProperty(d) && Ig[d].enabled && (a.usedSetCps ? b.hasOwnProperty(d) && b[d].enabled && c.push(d) : c.push(d));
            for (var e = "", f = 0; f < c.length; f++) {
                var h = re[c[f]];
                h && (e += h)
            }
            return "" === e ? "-" : e
        };
    var Si = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Ti = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Ui = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Vi = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Wi(a) {
        return "null" !== a.origin
    };
    var Zi = function(a, b, c, d) {
            return Xi(d) ? Ti(a, String(b || Yi()), c) : []
        },
        bj = function(a, b, c, d, e) {
            if (Xi(e)) {
                var f = $i(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = aj(f, function(h) {
                        return h.Oe
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = aj(f, function(h) {
                        return h.Jd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function cj(a, b, c, d) {
        var e = Yi(),
            f = window;
        Wi(f) && (f.document.cookie = a);
        var h = Yi();
        return e != h || void 0 != c && 0 <= Zi(b, h, !1, d).indexOf(c)
    }
    var gj = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete h[u], t;
                h[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete h[u], t;
                h[u] = !0;
                return t + "; " + u
            }
            if (!Xi(c.jb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = dj(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.om);
            f = d(f, "samesite",
                c.qm);
            c.sm && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = ej(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!fj(q, c.path) && cj(r, a, b, c.jb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return fj(m, c.path) ? 1 : cj(f, a, b, c.jb) ? 0 : 1
        },
        hj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return gj(a, b, c)
        };

    function aj(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function $i(a, b, c) {
        for (var d = [], e = Zi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                l = h.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = h.shift();
                m && (m = m.split("-"), d.push({
                    id: h.join("."),
                    Oe: 1 * m[0] || 1,
                    Jd: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var dj = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        ij = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        jj = /(^|\.)doubleclick\.net$/i,
        fj = function(a, b) {
            return jj.test(window.document.location.hostname) || "/" === b && ij.test(a)
        },
        Yi = function() {
            return Wi(window) ? window.document.cookie : ""
        },
        ej = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            jj.test(e) || ij.test(e) || a.push("none");
            return a
        },
        Xi = function(a) {
            return Dg().h() && a && Xg() ? Wg(a) ? Vg(a) : !1 : !0
        };
    var kj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Si(a) & 2147483647) : String(b)
        },
        lj = function(a) {
            return [kj(a), Math.round(Ia() / 1E3)].join(".")
        },
        oj = function(a, b, c, d, e) {
            var f = mj(b);
            return bj(a, f, nj(c), d, e)
        },
        pj = function(a, b, c, d) {
            var e = "" + mj(c),
                f = nj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        mj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        nj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var qj = function() {
        te.dedupe_gclid || (te.dedupe_gclid = "" + lj());
        return te.dedupe_gclid
    };
    var rj = function() {
        var a = !1;
        return a
    };
    var sj = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        tj = function(a) {
            var b = Ah.ctid.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = Ah.ctid;
            c.Bl = se.ud;
            c.El = se.Lf;
            c.Zk = yh.Ee ? 2 : 1;
            ze ? (c.Ze = sj[b], c.Ze || (c.Ze = 0)) : c.Ze = Fe ? 13 : 10;
            De ? c.kg = 1 : rj() ? c.kg = 2 : c.kg = 3;
            var d;
            var e = c.Ze,
                f = c.kg;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + yd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var h = c.im,
                l = 4 + d + (h ? "" + yd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h] : ""),
                m, n = c.El;
            m = n &&
                xd.test(n) ? "" + yd(3, 2) + n : "";
            var p, q = c.Bl;
            p = q ? "" + yd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + yd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Zk || 0) + w
                }
            } else r = "";
            return l + m + p + r
        };

    function uj(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var vj = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function wj() {
        return jb ? !!qb && !!qb.platform : !1
    }

    function xj() {
        return tb("iPhone") && !tb("iPod") && !tb("iPad")
    }

    function yj() {
        xj() || tb("iPad") || tb("iPod")
    };
    vb();
    ub() || tb("Trident") || tb("MSIE");
    tb("Edge");
    !tb("Gecko") || -1 != pb().toLowerCase().indexOf("webkit") && !tb("Edge") || tb("Trident") || tb("MSIE") || tb("Edge"); - 1 != pb().toLowerCase().indexOf("webkit") && !tb("Edge") && tb("Mobile");
    wj() || tb("Macintosh");
    wj() || tb("Windows");
    (wj() ? "Linux" === qb.platform : tb("Linux")) || wj() || tb("CrOS");
    var zj = oa.navigator || null;
    zj && (zj.appVersion || "").indexOf("X11");
    wj() || tb("Android");
    xj();
    tb("iPad");
    tb("iPod");
    yj();
    pb().toLowerCase().indexOf("kaios");
    var Aj = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var h = a.charCodeAt(e - 1);
                if (38 == h || 63 == h) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        Bj = /#|$/,
        Cj = function(a, b) {
            var c = a.search(Bj),
                d = Aj(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Dj = /[?&]($|#)/,
        Ej = function(a, b, c) {
            for (var d, e = a.search(Bj), f = 0, h, l = []; 0 <= (h = Aj(a, f, b, e));) l.push(a.substring(f,
                h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Dj, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Fj = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Bg(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Gj = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Hj(a) {
        if (!a || !D.head) return null;
        var b = Ij("META");
        D.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Jj = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : Fj(z.top) ? 1 : 2
        },
        Ij = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Kj(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Ij("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests,
                        l = db(h, e);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            vj(e, "load", f);
            vj(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Mj = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Gj(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Lj(c, b)
        },
        Lj = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Kj(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Nj = function() {};
    var Oj = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Pj = function(a, b) {
            b = void 0 === b ? {} : b;
            this.B = a;
            this.h = null;
            this.K = {};
            this.Cb = 0;
            var c;
            this.T = null != (c = b.Ll) ? c : 500;
            var d;
            this.H = null != (d = b.jm) ? d : !1;
            this.C = null
        };
    na(Pj, Nj);
    Pj.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.H
            },
            d = Vi(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.T && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.T));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h, c.internalErrorState = Oj(c), c.internalBlockOnErrors = b.H, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Qj(this, "addEventListener", f)
        } catch (h) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Pj.prototype.removeEventListener = function(a) {
        a && a.listenerId && Qj(this, "removeEventListener", null, a.listenerId)
    };
    var Sj = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Rj(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Rj(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Rj(a.purpose.legitimateInterests,
                b) && Rj(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Rj = function(a, b) {
            return !(!a || !a[b])
        },
        Qj = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.B.__tcfapi) {
                var e = a.B.__tcfapi;
                e(b, 2, c, d)
            } else if (Tj(a)) {
                Uj(a);
                var f = ++a.Cb;
                a.K[f] = c;
                if (a.h) {
                    var h = {};
                    a.h.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Tj = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.B, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var h = c.parent;
                            if (h && h != c) {
                                f = h;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Uj = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.K[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, vj(a.B, "message", a.C))
        },
        Vj = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Oj(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Mj({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Wj = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Xj = uj('', 500);

    function Yj() {
        var a = te.tcf || {};
        return te.tcf = a
    }
    var ek = function() {
        var a = Yj(),
            b = new Pj(z, {
                Ll: -1
            });
        Zj(b) && ak() && K(124);
        if (!ak() && !a.active && Zj(b)) {
            a.active = !0;
            a.We = {};
            bk();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) ck(a), dk(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Wj) Wj.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var h = {},
                                l;
                            for (l in Wj)
                                if (Wj.hasOwnProperty(l))
                                    if ("1" ===
                                        l) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Vj(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Sj(n, "1", 0) : !1;
                                        h["1"] = m
                                    } else h[l] = Sj(c, l, Wj[l]);
                            d = h
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.We = d, dk(a))
                    }
                })
            } catch (c) {
                ck(a), dk(a)
            }
        }
    };

    function ck(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function bk() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Xj, a);
        mh(b)
    }

    function Zj(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.B.__tcfapi || null != Tj(a) ? !0 : !1
    }
    var ak = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function dk(a) {
        var b = {},
            c = (b.ad_storage = a.We["1"] ? "granted" : "denied", b);
        nh(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: fk()
        })
    }
    var fk = function() {
            var a = Yj();
            return a.active ? a.tcString || "" : ""
        },
        gk = function() {
            var a = Yj();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        hk = function(a) {
            if (!Wj.hasOwnProperty(String(a))) return !0;
            var b = Yj();
            return b.active && b.We ? !!b.We[String(a)] : !0
        };
    var ik = void 0;

    function jk(a) {
        var b = "";
        return b
    };
    wb();
    xj() || tb("iPod");
    tb("iPad");
    !tb("Android") || xb() || wb() || vb() || tb("Silk");
    xb();
    !tb("Safari") || xb() || (ub() ? 0 : tb("Coast")) || vb() || (ub() ? 0 : tb("Edge")) || (ub() ? sb("Microsoft Edge") : tb("Edg/")) || (ub() ? sb("Opera") : tb("OPR")) || wb() || tb("Silk") || tb("Android") || yj();
    var kk = {},
        lk = null,
        mk = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!lk) {
                lk = {};
                for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = h.concat(l[m].split(""));
                    kk[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === lk[q] && (lk[q] = p)
                    }
                }
            }
            for (var r = kk[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    C = r[(x & 3) << 4 | y >> 4],
                    H = r[(y & 15) << 2 | A >> 6],
                    I = r[A & 63];
                t[w++] = "" + B + C + H + I
            }
            var F = 0,
                M = u;
            switch (b.length - v) {
                case 2:
                    F = b[v + 1], M = r[(F & 15) << 2] || u;
                case 1:
                    var L = b[v];
                    t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | F >> 4] + M + u
            }
            return t.join("")
        };
    var nk = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ok() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }

    function pk() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function qk() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function rk() {
        var a, b;
        return "function" === typeof(null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function sk() {
        if (!rk()) return null;
        var a = ok();
        if (a.uach_promise) return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(nk).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var tk, uk = function() {
            if (rk() && (tk = Ia(), !qk())) {
                var a = sk();
                a && (a.then(function() {
                    K(95);
                }), a.catch(function() {
                    K(96)
                }))
            }
        },
        Hk = function(a) {
            var b = Gk.Pl,
                c = function(h, l) {
                    try {
                        a(h, l)
                    } catch (m) {}
                },
                d = pk();
            if (d) c(d);
            else {
                var e = qk();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.Gd || (c.Gd = !0, K(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(h) {
                        c.Gd || (c.Gd = !0, K(104), z.clearTimeout(f), c(h))
                    }).catch(function(h) {
                        c.Gd || (c.Gd = !0, K(105), z.clearTimeout(f), c(null, h))
                    })
                } else c(null)
            }
        },
        Ik = function(a, b) {
            a && (b.h[N.g.fd] = a.architecture, b.h[N.g.gd] = a.bitness, a.fullVersionList && (b.h[N.g.hd] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.h[N.g.jd] = a.mobile ? "1" : "0", b.h[N.g.kd] = a.model, b.h[N.g.ld] = a.platform, b.h[N.g.md] = a.platformVersion, b.h[N.g.nd] = a.wow64 ? "1" : "0")
        };

    function Jk(a, b, c, d) {
        var e, f = Number(null != a.hb ? a.hb : void 0);
        0 !== f && (e = new Date((b || Ia()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            jb: d
        }
    };
    var Kk;
    var Ok = function() {
            var a = Lk,
                b = Mk,
                c = Nk(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                Pb(D, "mousedown", d);
                Pb(D, "keyup", d);
                Pb(D, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Pk = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Nk().decorators.push(f)
        },
        Qk = function(a, b, c) {
            for (var d = Nk().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    l;
                if (l = !c || h.forms) a: {
                    var m = h.domains,
                        n = a,
                        p = !!h.sameHost;
                    if (m && (p || n !== D.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = h.placement;
                    void 0 == r && (r = h.fragment ? 2 : 1);
                    r === b && La(e, h.callback())
                }
            }
            return e
        };

    function Nk() {
        var a = Gb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Rk = /(.*?)\*(.*?)\*(.*)/,
        Sk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Tk = /^(?:www\.|m\.|amp\.)+/,
        Uk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Vk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Xk = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ya(String(d))))
            }
        var e = b.join("*");
        return ["1", Wk(e), e].join("*")
    };

    function Wk(a, b) {
        var c = [Eb.userAgent, (new Date).getTimezoneOffset(), Eb.userLanguage || Eb.language, Math.floor(Ia() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Kk)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Kk = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Kk[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Yk() {
        return function(a) {
            var b = Ff(z.location.href),
                c = b.search.replace("?", ""),
                d = Af(c, "_gl", !0) || "";
            a.query = Zk(d) || {};
            var e = Df(b, "fragment").match(Vk("_gl"));
            a.fragment = Zk(e && e[3] || "") || {}
        }
    }

    function $k(a, b) {
        var c = Vk(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var al = function(a, b) {
            b || (b = "_gl");
            var c = Uk.exec(a);
            if (!c) return "";
            var d = c[1],
                e = $k(b, (c[2] || "").slice(1)),
                f = $k(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        bl = function(a) {
            var b = Yk(),
                c = Nk();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (La(d, e.query), a && La(d, e.fragment));
            return d
        },
        Zk = function(a) {
            try {
                var b = cl(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            h = Za(d[e + 1]);
                        c[f] = h
                    }
                    ab("TAGGING", 6);
                    return c
                }
            } catch (l) {
                ab("TAGGING",
                    8)
            }
        };

    function cl(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Rk.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && "1" === h[1]) {
                var l = h[3],
                    m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === Wk(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                ab("TAGGING", 7)
            }
        }
    }

    function dl(a, b, c, d) {
        function e(p) {
            p = $k(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Uk.exec(c);
        if (!f) return "";
        var h = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + h + l + m
    }

    function el(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Qk(b, 1, c),
            e = Qk(b, 2, c),
            f = Qk(b, 3, c);
        if (Ma(d)) {
            var h = Xk(d);
            c ? fl("_gl", h, a) : gl("_gl", h, a, !1)
        }
        if (!c && Ma(e)) {
            var l = Xk(e);
            gl("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        gl(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        fl(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && dl(n, p, q)
            }
    }

    function gl(a, b, c, d) {
        if (c.href) {
            var e = dl(a, b, c.href, void 0 === d ? !1 : d);
            ib.test(e) && (c.href = e)
        }
    }

    function fl(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var l = e[h];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = D.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = dl(a, b, c.action);
                ib.test(n) && (c.action = n)
            }
        }
    }

    function Lk(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || el(e, e.hostname)
            }
        } catch (h) {}
    }

    function Mk(a) {
        try {
            if (a.action) {
                var b = Df(Ff(a.action), "host");
                el(a, b)
            }
        } catch (c) {}
    }
    var hl = function(a, b, c, d) {
            Ok();
            Pk(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        il = function(a, b) {
            Ok();
            Pk(a, [Cf(z.location, "host", !0)], b, !0, !0)
        },
        jl = function() {
            var a = D.location.hostname,
                b = Sk.exec(D.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Tk, ""),
                m = e.replace(Tk, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        kl = function(a, b) {
            return !1 === a ? !1 : a || b || jl()
        };
    var ll = ["1"],
        ml = {},
        nl = {},
        pl = function(a) {
            return ml[ol(a)]
        },
        tl = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = ol(a.prefix);
            if (!ml[c])
                if (ql(c, a.path, a.domain)) {
                    var d = nl[ol(a.prefix)];
                    rl(a, d ? d.id : void 0, d ? d.hg : void 0)
                } else {
                    var e = Hf("auiddc");
                    if (e) ab("TAGGING", 17), ml[c] = e;
                    else if (b) {
                        var f = ol(a.prefix),
                            h = lj();
                        if (0 === sl(f, h, a)) {
                            var l = Gb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = h)
                        }
                        ql(c, a.path, a.domain)
                    }
                }
        };

    function rl(a, b, c) {
        var d = ol(a.prefix),
            e = ml[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(Ia() / 1E3)));
                    sl(d, l, a, 1E3 * h)
                }
            }
        }
    }

    function sl(a, b, c, d) {
        var e = pj(b, "1", c.domain, c.path),
            f = Jk(c, d);
        f.jb = "ad_storage";
        return hj(a, e, f)
    }

    function ql(a, b, c) {
        var d = oj(a, b, c, ll, "ad_storage");
        if (!d) return !1;
        ul(a, d);
        return !0
    }

    function ul(a, b) {
        var c = b.split(".");
        5 === c.length ? (ml[a] = c.slice(0, 2).join("."), nl[a] = {
            id: c.slice(2, 4).join("."),
            hg: Number(c[4]) || 0
        }) : 3 === c.length ? nl[a] = {
            id: c.slice(0, 2).join("."),
            hg: Number(c[2]) || 0
        } : ml[a] = b
    }

    function ol(a) {
        return (a || "_gcl") + "_au"
    }

    function vl(a) {
        Xg() ? ah(function() {
            Vg("ad_storage") ? a() : bh(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function wl(a) {
        var b = bl(!0),
            c = ol(a.prefix);
        vl(function() {
            var d = b[c];
            if (d) {
                ul(c, d);
                var e = 1E3 * Number(ml[c].split(".")[1]);
                if (e) {
                    ab("TAGGING", 16);
                    var f = Jk(a, e);
                    f.jb = "ad_storage";
                    var h = pj(d, "1", a.domain, a.path);
                    hj(c, h, f)
                }
            }
        })
    }

    function xl(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {},
                l = oj(a, e.path, e.domain, ll, "ad_storage");
            l && (h[a] = l);
            return h
        };
        vl(function() {
            hl(f, b, c, d)
        })
    };
    var yl = function(a) {
        for (var b = [], c = D.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                xg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    };

    function zl(a, b) {
        var c = yl(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].xg] || (d[c[e].xg] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    Z: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].xg].push(h)
            }
        }
        return d
    };
    var Al = /^\w+$/,
        Bl = /^[\w-]+$/,
        Cl = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Dl = function() {
            return Dg().h() && Xg() ? Vg("ad_storage") : !0
        },
        El = function(a, b) {
            Wg("ad_storage") ? Dl() ? a() : bh(a, "ad_storage") : b ? ab("TAGGING", 3) : ah(function() {
                El(a, !0)
            }, ["ad_storage"])
        },
        Gl = function(a) {
            return Fl(a).map(function(b) {
                return b.Z
            })
        },
        Fl = function(a) {
            var b = [];
            if (!Wi(z) || !D.cookie) return b;
            var c = Zi(a, D.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Rd: d.Rd
                }, e++) {
                var f = Hl(c[e]);
                if (null != f) {
                    var h = f,
                        l = h.version;
                    d.Rd = h.Z;
                    var m = h.timestamp,
                        n = h.labels,
                        p = ua(b, function(q) {
                            return function(r) {
                                return r.Z === q.Rd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Il(p.labels, n || [])) : b.push({
                        version: l,
                        Z: d.Rd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Jl(b)
        };

    function Il(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Kl(a) {
        return a && "string" == typeof a && a.match(Al) ? a : "_gcl"
    }
    var Ml = function() {
            var a = Ff(z.location.href),
                b = Df(a, "query", !1, void 0, "gclid"),
                c = Df(a, "query", !1, void 0, "gclsrc"),
                d = Df(a, "query", !1, void 0, "wbraid"),
                e = Df(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Af(f, "gclid");
                c = c || Af(f, "gclsrc");
                d = d || Af(f, "wbraid")
            }
            return Ll(b, c, e, d)
        },
        Ll = function(a, b, c, d) {
            var e = {},
                f = function(h, l) {
                    e[l] || (e[l] = []);
                    e[l].push(h)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Bl.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Bl)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Ol = function(a) {
            var b = Ml();
            El(function() {
                Nl(b, !1, a)
            })
        };

    function Nl(a, b, c, d, e) {
        function f(w, x) {
            var y = Pl(w, h);
            y && (hj(y, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var h = Kl(c.prefix);
        d = d || Ia();
        var l = Jk(c, d, !0);
        l.jb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Pl("gb", h),
                t = !1;
            if (!b)
                for (var u = Fl(r), v = 0; v < u.length; v++) u[v].Z === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Rl = function(a, b) {
            var c = bl(!0);
            El(function() {
                for (var d = Kl(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Cl[f]) {
                        var h = Pl(f, d),
                            l = c[h];
                        if (l) {
                            var m = Math.min(Ql(l), Ia()),
                                n;
                            b: {
                                var p = m;
                                if (Wi(z))
                                    for (var q = Zi(h, D.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Ql(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Jk(b, m, !0);
                                t.jb = "ad_storage";
                                hj(h, l, t)
                            }
                        }
                    }
                }
                Nl(Ll(c.gclid, c.gclsrc), !1, b)
            })
        },
        Pl = function(a, b) {
            var c = Cl[a];
            if (void 0 !== c) return b + c
        },
        Ql = function(a) {
            return 0 !== Sl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Hl(a) {
        var b = Sl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Z: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Sl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Bl.test(a[2]) ? [] : a
    }
    var Tl = function(a, b, c, d, e) {
            if (ta(b) && Wi(z)) {
                var f = Kl(e),
                    h = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Pl(a[m], f);
                            if (n) {
                                var p = Zi(n, D.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                El(function() {
                    hl(h, b, c, d)
                })
            }
        },
        Jl = function(a) {
            return a.filter(function(b) {
                return Bl.test(b.Z)
            })
        },
        Ul = function(a, b) {
            if (Wi(z)) {
                for (var c = Kl(b.prefix), d = {}, e = 0; e < a.length; e++) Cl[a[e]] && (d[a[e]] = Cl[a[e]]);
                El(function() {
                    k(d, function(f, h) {
                        var l = Zi(c + h, D.cookie, void 0, "ad_storage");
                        l.sort(function(t,
                            u) {
                            return Ql(u) - Ql(t)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Ql(m),
                                p = 0 !== Sl(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Sl(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Nl(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Vl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Wl = function(a) {
            function b(e, f, h) {
                h && (e[f] = h)
            }
            if (Xg()) {
                var c = Ml();
                if (Vl(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    il(function() {
                        return d
                    }, 3);
                    il(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Xl = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Dl()) return e;
            var f = Fl(a);
            if (!f.length) return e;
            for (var h = 0; h < f.length; h++) - 1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.Z].concat(l.labels || [], [b]).join("."),
                    p = Jk(c, m, !0);
                p.jb = "ad_storage";
                hj(a, n, p)
            }
            return e
        };

    function Yl(a, b) {
        var c = Kl(b),
            d = Pl(a, c);
        if (!d) return 0;
        for (var e = Fl(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
        return f
    }

    function Zl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var $l = function(a) {
        var b = Math.max(Yl("aw", a), Zl(Dl() ? zl() : {}));
        return Math.max(Yl("gb", a), Zl(Dl() ? zl("_gac_gb", !0) : {})) > b
    };
    var em = /[A-Z]+/,
        fm = /\s/,
        gm = function(a, b) {
            if (g(a)) {
                a = Ga(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (em.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var h = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = h(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = h(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || fm.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            X: d + "-" + f[0],
                            I: f
                        }
                    }
                }
            }
        },
        im = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = gm(a[d], b);
                e && (c[e.id] = e)
            }
            hm(c);
            var f = [];
            k(c, function(h, l) {
                f.push(l)
            });
            return f
        };

    function hm(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.I[1] && b.push(d.X)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var jm = function(a, b, c, d) {
        var e = Mb(),
            f;
        if (1 === e) a: {
            var h = He;h = h.toLowerCase();
            for (var l = "https://" + h, m = "http://" + h, n = 1, p = D.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var lm = function(a, b, c) {
            if (z[a.functionName]) return b.ng && E(b.ng), z[a.functionName];
            var d = km();
            z[a.functionName] = d;
            if (a.Le)
                for (var e = 0; e < a.Le.length; e++) z[a.Le[e]] = z[a.Le[e]] || km();
            a.Te && void 0 === z[a.Te] && (z[a.Te] = c);
            Lb(jm("https://", "http://", a.vg), b.ng, b.jl);
            return d
        },
        km = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        mm = {
            functionName: "_googWcmImpl",
            Te: "_googWcmAk",
            vg: "www.gstatic.com/wcm/loader.js"
        },
        nm = {
            functionName: "_gaPhoneImpl",
            Te: "ga_wpid",
            vg: "www.gstatic.com/gaphone/loader.js"
        },
        om = {
            Mi: "",
            Zj: "5"
        },
        pm = {
            functionName: "_googCallTrackingImpl",
            Le: [nm.functionName, mm.functionName],
            vg: "www.gstatic.com/call-tracking/call-tracking_" + (om.Mi || om.Zj) + ".js"
        },
        qm = {},
        rm = function(a, b, c, d) {
            K(22);
            if (c) {
                d = d || {};
                var e = lm(mm, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.ib && (f.autoreplace = c);
                e(2, d.ib, f, c, 0, Ha(), d.options)
            }
        },
        sm = function(a, b, c, d) {
            K(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ha()
                    }, f = 0; f < a.length; f++) {
                    var h = a[f];
                    qm[h.id] ||
                        (h && "AW" === h.prefix && !e.adData && 2 <= h.I.length ? (e.adData = {
                            ak: h.I[0],
                            cl: h.I[1]
                        }, qm[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                            gaWpid: h.X
                        }, qm[h.id] = !0))
                }(e.gaData || e.adData) && lm(pm, d)(d.ib, e, d.options)
            }
        },
        tm = function() {
            var a = !1;
            return a
        },
        um = function(a, b) {
            if (a)
                if (rj()) {} else {
                    if (g(a)) {
                        var c =
                            gm(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = S(b, N.g.Fj);
                    if (f && ta(f)) {
                        d = [];
                        for (var h = 0; h < f.length; h++) {
                            var l = gm(f[h]);
                            l && (d.push(l), (a.id === l.id || a.id === a.X && a.X === l.X) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = S(b, N.g.th),
                            n;
                        if (m) {
                            ta(m) ? n = m : n = [m];
                            var p = S(b, N.g.rh),
                                q = S(b, N.g.sh),
                                r = S(b, N.g.uh),
                                t = S(b, N.g.Ej),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) sm(d, n[w], t, {
                                        ib: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.I[1]) tm() ? sm([a], n[w], t || "US", {
                                ib: u,
                                options: r
                            }) : rm(a.I[0], a.I[1], n[w], {
                                ib: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (tm()) sm([a], n[w], t || "US", {
                                    ib: u
                                });
                                else {
                                    var x = a.X,
                                        y = n[w],
                                        A = {
                                            ib: u
                                        };
                                    K(23);
                                    if (y) {
                                        A = A || {};
                                        var B = lm(nm, A, x),
                                            C = {};
                                        void 0 !== A.ib ? C.receiver = A.ib : C.replace = y;
                                        C.ga_wpid = x;
                                        C.destination = y;
                                        B(2, Ha(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var vm = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.m = c;
        this.h = {};
        this.metadata = J(c.eventMetadata || {});
        this.isAborted = !1
    };
    vm.prototype.copyToHitData = function(a, b) {
        var c = S(this.m, a);
        void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b)
    };
    var wm = function(a, b, c) {
        var d = lf(a.target.X);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function xm(a) {
        return {
            getDestinationId: function() {
                return a.target.X
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return S(a.m, b)
            },
            mm: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };

    function Um(a) {
        var b = S(a.m, N.g.xb),
            c = S(a.m, N.g.wb);
        b && !c ? (a.eventName !== N.g.fa && a.eventName !== N.g.Zd && K(131), a.isAborted = !0) : !b && c && (K(132), a.isAborted = !0)
    };

    function Wm() {
        return "attribution-reporting"
    }

    function Xm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Ym = !1;

    function Zm() {
        if (Xm("join-ad-interest-group") && ra(Eb.joinAdInterestGroup)) return !0;
        Ym || (Hj('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Ym = !0);
        return Xm("join-ad-interest-group") && ra(Eb.joinAdInterestGroup)
    }

    function $m(a, b) {
        var c = void 0;
        try {
            c = D.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ia() - d) {
                ab("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= D.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                ab("TAGGING", 10);
                return
            }
        } catch (e) {}
        Nb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ia()
        }, c)
    }

    function an() {
        return "https://td.doubleclick.net"
    };
    var bn = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        cn = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        dn = /^\d+\.fls\.doubleclick\.net$/,
        en = /;gac=([^;?]+)/,
        fn = /;gacgb=([^;?]+)/,
        gn = /;gclaw=([^;?]+)/,
        hn = /;gclgb=([^;?]+)/;

    function jn(a, b) {
        if (dn.test(D.location.host)) {
            var c = D.location.href.match(b);
            return c && 2 == c.length && c[1].match(bn) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].Z);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var kn = function(a, b, c) {
        var d = Dl() ? zl("_gac_gb", !0) : {},
            e = [],
            f = !1,
            h;
        for (h in d) {
            var l = Xl("_gac_gb_" + h, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(h + ":" + l.join(","))
        }
        return {
            yk: f ? e.join(";") : "",
            xk: jn(d, fn)
        }
    };

    function ln(a, b, c) {
        if (dn.test(D.location.host)) {
            var d = D.location.href.match(c);
            if (d && 2 == d.length && d[1].match(cn)) return [{
                Z: d[1]
            }]
        } else return Fl((a || "_gcl") + b);
        return []
    }
    var mn = function(a) {
            return ln(a, "_aw", gn).map(function(b) {
                return b.Z
            }).join(".")
        },
        nn = function(a) {
            return ln(a, "_gb", hn).map(function(b) {
                return b.Z
            }).join(".")
        },
        on = function(a, b) {
            var c = Xl((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var pn = function() {
        if (ra(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var T = {
        D: {
            Bg: "ads_conversion_hit",
            ff: "container_execute_start",
            Eg: "container_setup_end",
            hf: "container_setup_start",
            Dg: "container_execute_end",
            Fg: "container_yield_end",
            jf: "container_yield_start",
            Hh: "event_execute_end",
            Gh: "event_evaluation_end",
            Ff: "event_evaluation_start",
            Ih: "event_setup_end",
            od: "event_setup_start",
            Jh: "ga4_conversion_hit",
            rd: "page_load",
            bm: "pageview",
            Bb: "snippet_load",
            Th: "tag_callback_error",
            Uh: "tag_callback_failure",
            Vh: "tag_callback_success",
            Wh: "tag_execute_end",
            vc: "tag_execute_start"
        }
    };

    function ao() {
        function a(c, d) {
            var e = cb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var bo = !1,
        co = "L S Y E EC TC HTC".split(" "),
        eo = ["S", "V", "E"],
        fo = ["TS", "TI", "TE"];
    var Io = function(a) {},
        Jo = function(a) {},
        Ko = function() {},
        Lo = function() {},
        Mo = function() {},
        No = function(a, b) {},
        Oo = function(a, b) {},
        Po = function(a, b) {},
        Qo = function(a, b) {},
        go = function(a, b, c, d, e, f) {
            var h;
            h = void 0 === h ? !1 : h;
            var l = {};
            return l
        },
        ho = function(a) {
            var b = !1;
            return b
        },
        io = function(a, b) {},
        Ro = function() {
            var a = {};
            return a
        },
        Bo = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        So = function() {},
        To = function(a, b) {},
        Uo = function(a, b, c) {};
    var Vo = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {}, z.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Wo = function(a, b, c) {
        var d = Cj(a, "fmt");
        if (b) {
            var e = Cj(a, "random"),
                f = Cj(a, "label") || "";
            if (!e) return !1;
            var h = mk(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Vo(h, b)) return !1
        }
        d && 4 != d && (a = Ej(a, "rfmt", d));
        var l = Ej(a, "fmt", 4);
        Lb(l, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, D.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var lp = function() {
            this.h = {}
        },
        mp = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        np = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        pp = function(a, b, c, d) {};

    function rp(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var tp = function(a) {
            var b = Hh();
            sp(b).event && sp(b).event.push(a)
        },
        up = function() {
            var a = sp(Hh());
            return a.event ? a.event : []
        };

    function sp(a) {
        var b, c = te.r;
        c || (c = {
            container: {}
        }, te.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        }, b.container[a] = d);
        return d
    };
    var vp = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        wp = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        xp = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        yp = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Bp = function(a) {
            var b = Te("gtm.allowlist") || Te("gtm.whitelist");
            b && K(9);
            ze && (b = ["google", "gtagfl", "lcl", "zone"]);
            zp() && (ze ?
                K(116) : K(117), Ap && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Na(Fa(b), wp),
                d = Te("gtm.blocklist") || Te("gtm.blacklist");
            d || (d = Te("tagTypeBlacklist")) && K(3);
            d ? K(8) : d = [];
            zp() && (d = Fa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Fa(d).indexOf("google") && K(2);
            var e = d && Na(Fa(d), xp),
                f = {};
            return function(h) {
                var l = h && h[hc.la];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Le[l] || [],
                    n = a(l, m),
                    p;
                p = sp(Hh()).entity;
                for (var q = 0; q < p.length; q++) try {
                    n = n && p[q](l, m)
                } catch (y) {
                    n = !1
                }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        K(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(l);
                    if (v) u = v;
                    else {
                        var w = Aa(e, m || []);
                        w && K(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Aa(e, yp));
                return f[l] = x
            }
        },
        Ap = !1;
    var zp = function() {
            return vp.test(z.location && z.location.hostname)
        },
        Cp = function() {
            zh && sp(Hh()).entity.push(function(a) {
                var b = {};
                b[hc.la] = "__" + a;
                for (var c in void 0)(void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
                var d;
                if (Yc(b)) {
                    var e = b[hc.la];
                    if (!e) throw "Error: No function name given for function call.";
                    var f = Lc[e];
                    d = !!f && !!f.runInSiloedMode
                } else d = !!rp(b[hc.la], 4);
                return d
            })
        };

    function Dp(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ff("" + c + b).href
        }
    }

    function Ep() {
        return !!se.Je && "SGTM_TOKEN" !== se.Je.split("@@").join("")
    }

    function Fp(a) {
        for (var b = Gp(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = S(a, d.value);
            if (e) return e
        }
    }

    function Gp() {
        var a = [];
        Q(55) && a.push(N.g.ye);
        a.push(N.g.oc);
        return a
    };
    var Ip = function(a, b, c, d) {
            if (!Hp() && !Oh(a)) {
                var e = "?id=" + encodeURIComponent(a) + "&l=" + se.ba,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                Q(75) && (e += "&gtm=" + tj());
                var h = Ep();
                h && (e += "&sign=" + se.Je);
                var l = c ? "/gtag/js" : "/gtm.js",
                    m = Be || De ? Dp(b, l + e) : void 0;
                if (!m) {
                    var n = se.Yd + l;
                    h && Fb && f && (n = Fb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = jm("https://", "http://", n + e)
                }
                var p = a;
                d.siloed && (Qh({
                    ctid: p,
                    isDestination: !1
                }), p = Bh(p));
                var q = p,
                    r = Ph();
                vh().container[q] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                wh({
                    ctid: q,
                    isDestination: !1
                });
                Lb(m)
            }
        },
        Jp = function(a, b, c) {
            var d;
            if (d = !Hp()) {
                var e = vh().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Rh()) vh().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Ph()
                }, wh({
                    ctid: a,
                    isDestination: !0
                }), K(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + se.ba + "&cx=c";
                    Q(75) && (f += "&gtm=" + tj());
                    Ep() && (f += "&sign=" + se.Je);
                    var h = Be || De ? Dp(b, f) : void 0;
                    h || (h = jm("https://", "http://", se.Yd + f));
                    var l = a;
                    c.siloed && (Qh({
                        ctid: l,
                        isDestination: !0
                    }), l = Bh(l));
                    vh().destination[l] = {
                        state: 1,
                        context: c,
                        parent: Ph()
                    };
                    wh({
                        ctid: l,
                        isDestination: !0
                    });
                    Lb(h)
                }
        };

    function Hp() {
        if (rj()) {
            return !0
        }
        return !1
    };
    var Kp = "",
        Lp = [];

    function Mp(a) {
        var b = "";
        Kp && (b = "&dl=" + encodeURIComponent(Kp));
        0 < Lp.length && (b += "&tdp=" + Lp.join("."));
        a.kb && (Kp = "", Lp.length = 0, b && a.Ci());
        return b
    };
    var Np = [];

    function Op(a) {
        if (!Np.length) return "";
        var b = "&tdc=" + Np.join("!");
        a.kb && (a.Ci(), Np.length = 0);
        return b
    };
    var Pp = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Qp = {},
        Rp = Object.freeze((Qp[N.g.Ma] = !0, Qp)),
        Sp = 0 <= D.location.search.indexOf("?gtm_diagnostics=") || 0 <= D.location.search.indexOf("&gtm_diagnostics="),
        Up = function(a, b, c) {
            if (ai && "config" === a && !(1 < gm(b).I.length)) {
                var d, e = Gb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = J(c.H);
                J(c.h, f);
                var h = [],
                    l;
                for (l in d) {
                    var m = Tp(d[l], f);
                    m.length && (Sp && console.log(m), h.push(l))
                }
                h.length && (h.length && ai && Np.push(b + "*" + h.join(".")), ab("TAGGING", Pp[D.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Vp(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Tp(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? Rp[q] : t
            },
            f;
        for (f in Vp(a, b)) {
            var h = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === bc(l) || "array" === bc(l),
                p = "object" === bc(m) || "array" === bc(m);
            if (n && p) Tp(l, m, c, h);
            else if (n || p || l !== m) c[h] = !0
        }
        return Object.keys(c)
    };
    var Wp = !1,
        Xp = 0,
        Yp = [];

    function Zp(a) {
        if (!Wp) {
            var b = D.createEventObject,
                c = "complete" == D.readyState,
                d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Wp = !0;
                for (var e = 0; e < Yp.length; e++) E(Yp[e])
            }
            Yp.push = function() {
                for (var f = 0; f < arguments.length; f++) E(arguments[f]);
                return 0
            }
        }
    }

    function $p() {
        if (!Wp && 140 > Xp) {
            Xp++;
            try {
                D.documentElement.doScroll("left"), Zp()
            } catch (a) {
                z.setTimeout($p, 50)
            }
        }
    }
    var aq = function() {
            Wp = !1;
            Xp = 0;
            if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) Zp();
            else {
                Pb(D, "DOMContentLoaded", Zp);
                Pb(D, "readystatechange", Zp);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var a = !0;
                    try {
                        a = !z.frameElement
                    } catch (b) {}
                    a && $p()
                }
                Pb(z, "load", Zp)
            }
        },
        bq = function(a) {
            Wp ? a() : Yp.push(a)
        };
    var cq = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: Gh()
        }
    };
    var eq = function(a, b) {
            this.h = !1;
            this.H = [];
            this.K = {
                tags: []
            };
            this.T = !1;
            this.B = this.C = 0;
            dq(this, a, b)
        },
        fq = function(a, b, c, d) {
            if (we.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            G(d) && (e = J(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        gq = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        hq = function(a) {
            if (!a.h) {
                for (var b = a.H, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.H.length = 0
            }
        },
        dq = function(a, b, c) {
            void 0 !== b && iq(a, b);
            c && z.setTimeout(function() {
                return hq(a)
            }, Number(c))
        },
        iq = function(a,
            b) {
            var c = Ka(function() {
                return E(function() {
                    b(Gh(), a.K)
                })
            });
            a.h ? c() : a.H.push(c)
        },
        jq = function(a) {
            a.C++;
            return Ka(function() {
                a.B++;
                a.T && a.B >= a.C && hq(a)
            })
        },
        kq = function(a) {
            a.T = !0;
            a.B >= a.C && hq(a)
        };
    var lq = {},
        nq = function() {
            return z[mq()]
        },
        oq = !1;
    var pq = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ha());
                z[b] = c
            }
            return z[b]
        },
        qq = function(a) {
            if (Xg()) {
                var b = nq();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function mq() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var rq = function(a) {},
        sq = function(a, b) {
            return function() {
                var c = nq(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > h.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Xq = {},
        Yq = {};

    function Zq(a, b) {
        if (ai) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Xq[a] = "&e=" + c + "&eid=" + a;
            li(a)
        }
    }

    function $q(a) {
        var b = a.eventId,
            c = a.kb;
        if (!Xq[b]) return "";
        var d = Yq[b] ? "" : "&es=1";
        d += Xq[b];
        c && (Yq[b] = !0);
        return d
    };
    var ar = {};

    function br(a, b) {
        ai && (ar[a] = ar[a] || {}, ar[a][b] = (ar[a][b] || 0) + 1)
    }

    function cr(a) {
        var b = a.eventId,
            c = a.kb,
            d = ar[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete ar[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var dr = {},
        er = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function fr(a, b, c) {
        if (ai) {
            dr[a] = dr[a] || [];
            var d = er[b] || "0",
                e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === D ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || G(c) ? "0" : "e";
            dr[a].push("" + d + e)
        }
    }

    function gr(a) {
        var b = a.eventId,
            c = dr[b] || [];
        if (!c.length) return "";
        a.kb && delete dr[b];
        return "&pcr=" + c.join(".")
    };
    var hr = {},
        ir = {};

    function jr(a, b, c) {
        if (ai && b) {
            var d = th(b);
            hr[a] = hr[a] || [];
            hr[a].push(c + d);
            var e = (Yc(b) ? "1" : "2") + d;
            ir[a] = ir[a] || [];
            ir[a].push(e);
            li(a)
        }
    }

    function kr(a) {
        var b = a.eventId,
            c = a.kb,
            d = "",
            e = hr[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = ir[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete hr[b], delete ir[b]);
        return d
    };

    function lr(a, b, c, d) {
        var e = Jc[a],
            f = mr(a, b, c, d);
        if (!f) return null;
        var h = Vc(e[hc.Sh], c, []);
        if (h && h.length) {
            var l = h[0];
            f = lr(l.index, {
                onSuccess: f,
                onFailure: 1 === l.ii ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function mr(a, b, c, d) {
        function e() {
            if (f[hc.Tj]) l();
            else {
                var w = Wc(f, c, []),
                    x = w[hc.Ni];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Vg(x[y])) {
                            l();
                            return
                        }
                var A = fq(c.Kb, String(f[hc.la]), Number(f[hc.wd]), w[hc.Uj]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var I = Ia() - H;
                        jr(c.id, Jc[a], "5");
                        gq(c.Kb, A, "success", I);
                        Q(30) && Uo(c, f, T.D.Vh);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var I = Ia() - H;
                        jr(c.id, Jc[a], "6");
                        gq(c.Kb, A, "failure", I);
                        Q(30) && Uo(c, f, T.D.Uh);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                jr(c.id, f, "1");
                var C = function() {
                    af(3);
                    var I = Ia() - H;
                    jr(c.id, f, "7");
                    gq(c.Kb, A, "exception", I);
                    Q(30) && Uo(c, f, T.D.Th);
                    B || (B = !0, l())
                };
                Q(30) && To(c, f);
                var H = Ia();
                try {
                    Uc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (I) {
                    C(I)
                }
                Q(30) && Uo(c, f, T.D.Wh)
            }
        }
        var f = Jc[a],
            h = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.ag(f)) return null;
        var n = Vc(f[hc.Xh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = lr(p.index, {
                    onSuccess: h,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            h = q;
            l = 2 === p.ii ? m : q
        }
        if (f[hc.Oh] ||
            f[hc.Wj]) {
            var r = f[hc.Oh] ? Kc : c.Jl,
                t = h,
                u = l;
            if (!r[a]) {
                e = Ka(e);
                var v = nr(a, r, e);
                h = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function nr(a, b, c) {
        var d = [],
            e = [];
        b[a] = or(d, e, c);
        return {
            onSuccess: function() {
                b[a] = pr;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = qr;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function or(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function pr(a) {
        a()
    }

    function qr(a, b) {
        b()
    };
    var sr = function(a, b) {
            return 1 === arguments.length ? rr("config", a) : rr("config", a, b)
        },
        tr = function(a, b, c) {
            c = c || {};
            c[N.g.Jb] = a;
            return rr("event", b, c)
        };

    function rr(a) {
        return arguments
    }
    var ur = function() {
        this.h = [];
        this.B = []
    };
    ur.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++) try {
            this.B[f](e)
        } catch (h) {}
    };
    ur.prototype.listen = function(a) {
        this.B.push(a)
    };
    ur.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    ur.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var wr = function(a, b, c) {
            vr().enqueue(a, b, c)
        },
        yr = function() {
            var a = xr;
            vr().listen(a)
        };

    function vr() {
        var a = te.mb;
        a || (a = new ur, te.mb = a);
        return a
    }
    var Gr = function(a) {
            var b = te.zones;
            return b ? b.getIsAllowedFn(Ch(), a) : function() {
                return !0
            }
        },
        Hr = function(a) {
            var b = te.zones;
            return b ? b.isActive(Ch(), a) : !0
        },
        Ir = function() {
            var a = te.zones;
            a && a.unregisterChild(Ch())
        },
        Jr = function() {
            tp(function(a, b) {
                return Hr(b)
            })
        };
    var Mr = function(a, b) {
        for (var c = [], d = 0; d < Jc.length; d++)
            if (a[d]) {
                var e = Jc[d];
                var f = jq(b.Kb);
                try {
                    var h = lr(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[hc.la];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Lc[l];
                        c.push({
                            Fi: d,
                            vi: (m ? m.priorityOverride || 0 : 0) || rp(e[hc.la], 1) || 0,
                            execute: h
                        })
                    } else Kr(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Lr);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Lr(a, b) {
        var c, d = b.vi,
            e = a.vi;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.Fi,
                l = b.Fi;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }

    function Kr(a, b) {
        if (ai) {
            var c = function(d) {
                var e = b.ag(Jc[d]) ? "3" : "4",
                    f = Vc(Jc[d][hc.Sh], b, []);
                f && f.length && c(f[0].index);
                jr(b.id, Jc[d], e);
                var h = Vc(Jc[d][hc.Xh], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var Pr = !1,
        Nr;
    var Ur = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        Q(30) && No(b, d);
        if ("gtm.js" === d) {
            if (Pr) return !1;
            Pr = !0
        }
        for (var e, f = !1, h = Hr(b), l = up(), m = 0; h && m < l.length; m++) h = (0, l[m])(d, b);
        if (h) e = Gr(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = Gr(Number.MAX_SAFE_INTEGER)
        }
        Zq(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = {
                id: b,
                priorityId: c,
                name: d,
                ag: Bp(e),
                Jl: [],
                oi: function() {
                    K(6);
                    af(0)
                },
                bi: Qr(),
                di: Rr(b),
                Kb: new eq(function() {
                    if (Q(30)) {}
                    n && n.apply(n, [].slice.call(arguments, 0))
                }, p)
            };
        Q(59) && (q.zi = br);
        Q(30) && Po(q.id, q.name);
        var r = ad(q);
        Q(30) && Qo(q.id, q.name);
        f && (r = Sr(r));
        Q(30) && Oo(b, d);
        var t = Mr(r, q),
            u = !1;
        kq(q.Kb);
        "gtm.js" !== d && "gtm.sync" !== d || rq(Gh());
        return Tr(r, t) || u
    };

    function Rr(a) {
        return function(b) {
            dc(b) || fr(a, "input", b)
        }
    }

    function Qr() {
        var a = {};
        a.event = Xe("event", 1);
        a.ecommerce = Xe("ecommerce", 1);
        a.gtm = Xe("gtm");
        a.eventModel = Xe("eventModel");
        return a
    }

    function Sr(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Jc[c][hc.la]);
                if (ve[d] || void 0 !== Jc[c][hc.Xj] || Me[d] || rp(d, 2)) b[c] = !0
            }
        return b
    }

    function Tr(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Jc[c] && !we[String(Jc[c][hc.la])]) return !0;
        return !1
    }
    var Vr = {};

    function Wr(a, b, c) {
        ai && void 0 !== a && (Vr[a] = Vr[a] || [], Vr[a].push(c + b), li(a))
    }

    function Xr(a) {
        var b = a.eventId,
            c = a.kb,
            d = "",
            e = Vr[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Vr[b];
        return d
    };
    var Zr = function(a, b, c, d) {
            var e = gm(c, d.isGtmEvent);
            e && Yr.push("event", [b, a], e, d)
        },
        $r = function(a, b, c, d) {
            var e = gm(c, d.isGtmEvent);
            e && Yr.push("get", [a, b], e, d)
        },
        as = function() {
            this.status = 1;
            this.H = {};
            this.h = {};
            this.K = {};
            this.T = null;
            this.C = {};
            this.B = !1
        },
        bs = function(a, b, c, d) {
            var e = Ia();
            this.type = a;
            this.C = e;
            this.h = b;
            this.B = c;
            this.messageContext = d
        },
        cs = function() {
            this.B = {};
            this.C = {};
            this.h = []
        },
        ds = function(a, b) {
            var c = b.X;
            return a.B[c] = a.B[c] || new as
        },
        es = function(a, b, c, d) {
            if (d.h) {
                var e = ds(a, d.h),
                    f = e.T;
                if (f) {
                    var h =
                        J(c),
                        l = J(e.H[d.h.id]),
                        m = J(e.C),
                        n = J(e.h),
                        p = J(a.C),
                        q = {};
                    if (ai) try {
                        q = J(Qe)
                    } catch (v) {
                        K(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Wr(d.messageContext.eventId, r, v)
                        },
                        u = Fi(Ei(Di(Ci(Bi(zi(yi(Ai(xi(wi(vi(new ui(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Wr(d.messageContext.eventId, r, "1"), Up(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        Wr(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    cs.prototype.register = function(a, b, c) {
        var d = ds(this, a);
        3 !== d.status && (d.T = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
    };
    cs.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === ds(this, c).status && (ds(this, c).status = 2, this.push("require", [{}], c, {})), ds(this, c).B && (d.deferrable = !1));
        this.h.push(new bs(a, c, b, d));
        d.deferrable || this.flush()
    };
    cs.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0],
                h = f.h;
            if (f.messageContext.deferrable) !h || ds(this, h).B ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== ds(this, h).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.B[0], function(r, t) {
                            J(Oa(r, t), b.C)
                        });
                        break;
                    case "config":
                        var l = ds(this, h);
                        e.lb = {};
                        k(f.B[0], function(r) {
                            return function(t, u) {
                                J(Oa(t, u), r.lb)
                            }
                        }(e));
                        var m = !!e.lb[N.g.qc];
                        delete e.lb[N.g.qc];
                        var n = h.X === h.id;
                        m || (n ? l.C = {} : l.H[h.id] = {});
                        l.B && m || es(this, N.g.fa, e.lb, f);
                        l.B = !0;
                        n ? J(e.lb, l.C) : (J(e.lb, l.H[h.id]), K(70));
                        d = !0;
                        break;
                    case "event":
                        e.Qd = {};
                        k(f.B[0], function(r) {
                            return function(t, u) {
                                J(Oa(t, u), r.Qd)
                            }
                        }(e));
                        es(this, f.B[1], e.Qd, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[N.g.La] = f.B[0], p[N.g.Za] = f.B[1], p);
                        es(this, N.g.Ea, q, f)
                }
                this.h.shift();
                fs(this, f)
            }
            e = {
                lb: e.lb,
                Qd: e.Qd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var fs = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = ds(a, b.h).K[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.B)
                        if (a.B.hasOwnProperty(e)) {
                            var f = a.B[e];
                            if (f && f.K)
                                for (var h = f.K[b.type] || [], l = 0; l < h.length; l++) h[l]()
                        }
        },
        gs = function(a, b) {
            var c = Yr,
                d = J(b);
            J(ds(c, a).h, d);
            ds(c, a).h = d
        },
        Yr = new cs;
    var hs = {},
        is = {},
        js = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Vd: e.Vd,
                    Sd: e.Sd
                }, f++) {
                var h = a[f];
                if (0 <= h.indexOf("-")) {
                    if (e.Vd = gm(h, b), e.Vd) {
                        var l = Eh();
                        ua(l, function(r) {
                            return function(t) {
                                return r.Vd.X === t
                            }
                        }(e)) ? c.push(h) : d.push(h)
                    }
                } else {
                    var m = hs[h] || [];
                    e.Sd = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.Sd[t] = !0
                        }
                    }(e));
                    for (var n = Ch(), p = 0; p < n.length; p++)
                        if (e.Sd[n[p]]) {
                            c = c.concat(Eh());
                            break
                        }
                    var q = is[h] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                bl: c,
                il: d
            }
        },
        ks = function(a) {
            k(hs, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        ls = function(a) {
            k(is, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var ms = "HA GF G UA AW DC MC".split(" "),
        ns = !1,
        os = !1;

    function ps(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ne()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var qs = void 0,
        rs = void 0;

    function ss(a, b, c) {
        var d = J(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && K(136);
        var e = J(b);
        J(c, e);
        wr(sr(Ch()[0], e), a.eventId, d)
    }

    function ts(a) {
        for (var b = Gp(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = d.value,
                f = a && a[e] || Yr.C[e];
            if (f) return f
        }
    }
    var us = {
            config: function(a, b) {
                var c = Q(60),
                    d = ps(a, b);
                if (!(2 > a.length) && g(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !G(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = gm(a[1], b.isGtmEvent);
                    if (f) {
                        var h, l, m;
                        a: {
                            if (!yh.Ee) {
                                var n = Ih(Ph());
                                if (Th(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        kl: Ih(p),
                                        al: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (h = r.kl, l = r.al);
                        Zq(d.eventId, "gtag.config");
                        var t = f.X,
                            u = f.id !== t;
                        if (u ? -1 === Eh().indexOf(t) : -1 === Ch().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || Q(26) && e[N.g.xb])) {
                                var v = ts(e);
                                if (u) Jp(t,
                                    v, {
                                        source: 2,
                                        fromContainerExecution: b.fromContainerExecution
                                    });
                                else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                                    var w = e;
                                    qs ? ss(b, w, qs) : rs || (rs = J(w))
                                } else Ip(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (h && (K(128), l && K(130), c && b.inheritParentConfig)) {
                                var x = e;
                                rs ? ss(b, rs, x) : !x[N.g.qc] && ye && qs || (qs = J(x));
                                return
                            }
                            if (ye && !u && !e[N.g.qc]) {
                                var y = os;
                                os = !0;
                                if (y) return
                            }
                            ns || K(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    ls(f.id);
                                    var A = f.id,
                                        B = e[N.g.ue] || "default";
                                    B = String(B).split(",");
                                    for (var C =
                                            0; C < B.length; C++) {
                                        var H = is[B[C]] || [];
                                        is[B[C]] = H;
                                        0 > H.indexOf(A) && H.push(A)
                                    }
                                } else {
                                    ks(f.id);
                                    var I = f.id,
                                        F = e[N.g.ue] || "default";
                                    F = F.toString().split(",");
                                    for (var M = 0; M < F.length; M++) {
                                        var L = hs[F[M]] || [];
                                        hs[F[M]] = L;
                                        0 > L.indexOf(I) && L.push(I)
                                    }
                                }
                            delete e[N.g.ue];
                            var U = b.eventMetadata || {};
                            U.hasOwnProperty("is_external_event") || (U.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = U;
                            delete e[N.g.Yc];
                            for (var da = u ? [f.id] : Eh(), R = 0; R < da.length; R++) {
                                var O = e,
                                    ea = J(b),
                                    ba = gm(da[R], ea.isGtmEvent);
                                ba && Yr.push("config", [O], ba, ea)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    K(39);
                    var c = ps(a, b),
                        d = a[1];
                    "default" === d ? mh(a[2]) : "update" === d ? nh(a[2], c) : "declare" === d ? b.fromContainerExecution && lh(a[2]) : "core_platform_services" === d && oh(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && g(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!G(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        h = (f.event = c, f);
                    e && (h.eventModel = J(e), e[N.g.Yc] && (h.eventCallback = e[N.g.Yc]), e[N.g.oe] && (h.eventTimeout = e[N.g.oe]));
                    var l = ps(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    h["gtm.uniqueEventId"] = m;
                    n && (h["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
                    var p;
                    var q = d,
                        r = q && q[N.g.Jb];
                    void 0 === r && (r = Te(N.g.Jb, 2), void 0 === r && (r = "default"));
                    if (g(r) || ta(r)) {
                        var t;
                        b.isGtmEvent ? t = g(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = js(t, b.isGtmEvent),
                            v = u.bl,
                            w = u.il;
                        if (w.length)
                            for (var x = ts(q), y = 0; y < w.length; y++) {
                                var A = gm(w[y], b.isGtmEvent);
                                A && Jp(A.X, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = im(v,
                            b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Zq(m, c);
                        for (var C = [], H = 0; H < B.length; H++) {
                            var I = B[H],
                                F = J(b);
                            if (-1 !== ms.indexOf(Jh(I.prefix))) {
                                var M = J(d),
                                    L = F.eventMetadata || {};
                                L.hasOwnProperty("is_external_event") || (L.is_external_event = !F.fromContainerExecution);
                                F.eventMetadata = L;
                                delete M[N.g.Yc];
                                Zr(c, M, I.id, F)
                            }
                            C.push(I.id)
                        }
                        h.eventModel = h.eventModel || {};
                        0 < B.length ? h.eventModel[N.g.Jb] = C.join() : delete h.eventModel[N.g.Jb];
                        ns || K(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        Q(69) && h.eventModel[N.g.wb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : h
                    }
                }
            },
            get: function(a, b) {
                K(53);
                if (4 === a.length && g(a[1]) && g(a[2]) && ra(a[3])) {
                    var c = gm(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        ns || K(43);
                        var f = ts();
                        if (!ua(Eh(), function(l) {
                                return c.X === l
                            })) Jp(c.X, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== ms.indexOf(Jh(c.prefix))) {
                            ps(a, b);
                            var h = {};
                            ch(J((h[N.g.La] = d, h[N.g.Za] = e, h)));
                            $r(d, function(l) {
                                E(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a,
                b) {
                if (2 == a.length && a[1].getTime) {
                    ns = !0;
                    var c = ps(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && G(a[1]) ? c = J(a[1]) : 3 == a.length && g(a[1]) && (c = {}, G(a[2]) || ta(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = ps(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    J(c);
                    var h = J(c);
                    Yr.push("set", [h], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    Q(14) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        vs = {
            policy: !0
        };
    var ws = function(a) {
            var b = z[se.ba].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        xs = function(a) {
            var b = z[se.ba],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var ys = !1,
        zs = [];

    function As() {
        if (!ys) {
            ys = !0;
            for (var a = 0; a < zs.length; a++) E(zs[a])
        }
    }
    var Bs = function(a) {
        ys ? E(a) : zs.push(a)
    };
    var Ss = function(a) {
        if (Rs(a)) return a;
        this.h = a
    };
    Ss.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Rs = function(a) {
        return !a || "object" !== bc(a) || G(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Ss.prototype.getUntrustedMessageValue = Ss.prototype.getUntrustedMessageValue;
    var Ts = 0,
        Us = {},
        Vs = [],
        Ws = [],
        Xs = !1,
        Ys = !1;

    function Zs(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var $s = function(a) {
            return z[se.ba].push(a)
        },
        at = function(a, b) {
            if (!sa(b) || 0 > b) b = 0;
            var c = te[se.ba],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                h = void 0;
            h = z.setTimeout(function() {
                f || (f = !0, a());
                h = void 0
            }, b);
            return function() {
                Q(84) && (d = c ? c.subscribers : 1);
                ++e === d && (h && (z.clearTimeout(h), h = void 0), f || (a(), f = !0))
            }
        };

    function bt(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && We(e), We(e, f))
        });
        Ie || (Ie = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Ne(), a["gtm.uniqueEventId"] = d, We("gtm.uniqueEventId", d));
        return Ur(a)
    }

    function ct(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ca(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function dt() {
        var a;
        if (Ws.length) a = Ws.shift();
        else if (Vs.length) a = Vs.shift();
        else return;
        var b;
        var c = a;
        if (Xs || !ct(c.message)) b = c;
        else {
            Xs = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ne());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                h = {},
                l = {
                    message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Vs.unshift(l, c);
            if (ai) {
                var m = Ah.ctid;
                if (m) {
                    var n, p = Ih(Ph());
                    n = p && p.context;
                    var q, r = Ff(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = Ah.Rf,
                        w = yh.Ee;
                    ai && (Kp || (Kp = q), Lp.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function et() {
        for (var a = !1, b; !Ys && (b = dt());) {
            Ys = !0;
            delete Qe.eventModel;
            Se();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Ys = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h],
                            m = Te(l, 1);
                        if (ta(m) || G(m)) m = J(m);
                        Re[l] = m
                    }
                try {
                    if (ra(d)) try {
                        d.call(Ue)
                    } catch (C) {} else if (ta(d)) {
                        var n = d;
                        if (g(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = Te(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (C) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Ca(d)) {
                            a: {
                                if (d.length && g(d[0])) {
                                    var w = us[d[0]];
                                    if (w && (!e.fromContainerExecution || !vs[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && K(101)
                        }
                        else u = d;
                        if (u) {
                            var x = bt(u, e);
                            a = x || a;
                            v && x && K(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Se(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var A = Us[String(y)] || [], B = 0; B < A.length; B++) Ws.push(ft(A[B]));
                        A.length && Ws.sort(Zs);
                        delete Us[String(y)];
                        y > Ts && (Ts = y)
                    }
                    Ys = !1
                }
            }
        }
        return !a
    }

    function gt() {
        if (Q(30)) {
            var a = ht();
        }
        var e = et();
        try {
            ws(Gh())
        } catch (f) {}
        return e
    }

    function xr(a) {
        if (Ts < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Us[b] = Us[b] || [];
            Us[b].push(a)
        } else Ws.push(ft(a)), Ws.sort(Zs), E(function() {
            Ys || et()
        })
    }

    function ft(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var it = function() {
            function a(f) {
                var h = {};
                if (Rs(f)) {
                    var l = f;
                    f = Rs(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: h
                }
            }
            var b = Gb(se.ba, []),
                c = te[se.ba] = te[se.ba] || {};
            !0 === c.pruned && K(83);
            Us = vr().get();
            yr();
            bq(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            Bs(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < te.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var h = 0; h < arguments.length; h++) f[h] = new Ss(arguments[h])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                Vs.push.apply(Vs, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (K(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return et() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Vs.push.apply(Vs, e);
            ht() && (Q(30) && Mo(), E(gt))
        },
        ht = function() {
            var a = !0;
            return a
        };

    function jt(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ia();
        return b < c + 3E5 && b > c - 9E5
    }

    function kt(a) {
        return a && 0 === a.indexOf("pending:") ? jt(a.substr(8)) : !1
    };
    var Gt = function() {};
    var Oc = {};
    Oc.De = new String("undefined");
    var hu = z.clearTimeout,
        iu = z.setTimeout,
        W = function(a, b, c, d) {
            if (rj()) {
                b && E(b)
            } else return Lb(a, b, c, d)
        },
        ju = function() {
            return new Date
        },
        ku = function() {
            return z.location.href
        },
        lu = function(a) {
            return Df(Ff(a), "fragment")
        },
        mu = function(a) {
            return Ef(Ff(a))
        },
        nu = function(a, b) {
            return Te(a, b || 2)
        },
        ou = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = $s(a)) : d = $s(a);
            return d
        },
        pu = function(a, b) {
            z[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        qu = function(a, b, c) {
            return Zi(a, b, void 0 === c ? !0 : !!c)
        },
        ru = function(a, b, c) {
            return 0 === hj(a, b, c)
        },
        su = function(a, b) {
            if (rj()) {
                b && E(b)
            } else Nb(a, b)
        },
        tu = function(a) {
            return !!Ot(a, "init", !1)
        },
        uu = function(a) {
            Mt(a, "init", !0)
        },
        vu = function(a, b, c) {
            dc(a) || fr(c, b, a)
        };

    function Uu(a, b) {
        function c(h) {
            var l = Ff(h),
                m = Df(l, "protocol"),
                n = Df(l, "host", !0),
                p = Df(l, "port"),
                q = Df(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Vu(a) {
        return Wu(a) ? 1 : 0
    }

    function Wu(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Vu(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var h = 0; h < pd.length; h++) {
                            var l = pd[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                    f = !1
                }
                return f;
            case "_ew":
                var m, n;
                m = String(b);
                n = String(c);
                var p = m.length - n.length;
                return 0 <= p && m.indexOf(n, p) === p;
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var r = a.ignore_case ? "i" : void 0;
                try {
                    var t = String(c) + r,
                        u = qd.get(t);
                    u || (u = new RegExp(c, r), qd.set(t, u));
                    q = u.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Uu(b, c)
        }
        return !1
    };
    var Xu;

    function Yu(a) {
        if (void 0 === Xu) return "";
        var b = "&ccy=" + Xu;
        a.kb && (Xu = void 0);
        return b
    };

    function Zu() {
        var a = ["&cv=4", "&rv=" + se.Lf, "&tc=" + Jc.filter(function(b) {
            return b
        }).length];
        se.ud && a.push("&x=" + se.ud);
        return a.join("")
    };
    var Nv = function() {
            var a = !0;
            hk(7) && hk(9) && hk(10) || (a = !1);
            return a
        },
        Ov = function() {
            var a = !0;
            hk(3) && hk(4) || (a = !1);
            return a
        };
    var Sv = function(a, b) {
            if (!b.isGtmEvent) {
                var c = S(b, N.g.La),
                    d = S(b, N.g.Za),
                    e = S(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    Pv.hasOwnProperty(c) ? f = Pv[c] : Qv.hasOwnProperty(c) && (f = Qv[c]);
                    1 === f && (f = Rv(c));
                    g(f) ? nq()(function() {
                        var h = nq().getByName(a).get(f);
                        d(h)
                    }) : d(void 0)
                } else d(e)
            }
        },
        Tv = function(a, b) {
            var c = a[N.g.Hb],
                d = b + ".",
                e = a[N.g.N] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                h = !!a[N.g.yb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = nq();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, h)
        },
        Xv = function(a,
            b, c) {
            if (Xg() && (!c.isGtmEvent || !Uv[a])) {
                var d = !Vg(N.g.M),
                    e = function(f) {
                        var h, l, m = nq(),
                            n = Vv(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || Wv(b, n.createOnlyFields)) {
                            c.isGtmEvent && (h = "gtm" + Ne(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = h));
                            m(function() {
                                var t = m.getByName(b);
                                t && (p = t.get("clientId"));
                                c.isGtmEvent || m.remove(b)
                            });
                            m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                            d && Vg(N.g.M) && (d = !1, m(function() {
                                var t = nq().getByName(c.isGtmEvent ? h : b);
                                !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = me[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = me[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                m.remove(h)
                            })
                        }
                    };
                qh(function() {
                    return e(N.g.M)
                }, N.g.M);
                qh(function() {
                        return e(N.g.F)
                    },
                    N.g.F);
                c.isGtmEvent && (Uv[a] = !0)
            }
        },
        Yv = function(a, b) {
            Ep() && b && (a[N.g.Gb] = b)
        },
        gw = function(a, b, c) {
            function d() {
                var F = S(c, N.g.ic);
                l(function() {
                    if (!c.isGtmEvent && G(F)) {
                        var M = u.fieldsToSend,
                            L = m().getByName(n),
                            U;
                        for (U in F)
                            if (F.hasOwnProperty(U) && /^(dimension|metric)\d+$/.test(U) && void 0 != F[U]) {
                                var da = L.get(Rv(F[U]));
                                Zv(M, U, da)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var F = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: F
                    })
                }
            }
            var f = a,
                h = "https://www.google-analytics.com/analytics.js",
                l = c.isGtmEvent ? pq(S(c, "gaFunctionName")) : pq();
            if (ra(l)) {
                var m = nq,
                    n;
                c.isGtmEvent ? n = S(c, "name") || S(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(F) {
                        var M = [].slice.call(arguments, 0);
                        M[0] = n ? n + "." + M[0] : "" + M[0];
                        l.apply(window, M)
                    },
                    q = function(F) {
                        var M = function(ea, ba) {
                                for (var V = 0; ba && V < ba.length; V++) p(ea, ba[V])
                            },
                            L = c.isGtmEvent,
                            U = L ? $v(u) : aw(b, c);
                        if (U) {
                            var da = {};
                            Yv(da, F);
                            p("require", "ec", "ec.js", da);
                            L && U.Tf && p("set", "&cu", U.Tf);
                            var R = U.action;
                            if (L || "impressions" === R)
                                if (M("ec:addImpression",
                                        U.ni), !L) return;
                            if ("promo_click" === R || "promo_view" === R || L && U.Kd) {
                                var O = U.Kd;
                                M("ec:addPromo", O);
                                if (O && 0 < O.length && "promo_click" === R) {
                                    L ? p("ec:setAction", R, U.Qa) : p("ec:setAction", R);
                                    return
                                }
                                if (!L) return
                            }
                            "promo_view" !== R && "impressions" !== R && (M("ec:addProduct", U.Pb), p("ec:setAction", R, U.Qa))
                        }
                    },
                    r = function(F) {
                        if (F) {
                            var M = {};
                            if (G(F))
                                for (var L in bw) bw.hasOwnProperty(L) && cw(bw[L], L, F[L], M);
                            Yv(M, x);
                            p("require", "linkid", M)
                        }
                    },
                    t = function() {
                        if (rj()) {} else {
                            var F =
                                S(c, N.g.Cj);
                            F && (p("require", F, {
                                dataLayer: se.ba
                            }), p("require", "render"))
                        }
                    },
                    u = Vv(n, b, c),
                    v = function(F, M, L) {
                        L && (M = "" + M);
                        u.fieldsToSend[F] = M
                    };
                !c.isGtmEvent && Wv(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), dw[n] = !1);
                l("create", f, u.createOnlyFields);
                if (u.createOnlyFields[N.g.Gb] && !c.isGtmEvent) {
                    var w = Be || De ? Dp(u.createOnlyFields[N.g.Gb], "/analytics.js") : void 0;
                    w && (h = w)
                }
                var x = c.isGtmEvent ? u.fieldsToSet[N.g.Gb] : u.createOnlyFields[N.g.Gb];
                if (x) {
                    var y = c.isGtmEvent ? u.fieldsToSet[N.g.qe] : u.createOnlyFields[N.g.qe];
                    y && !dw[n] && (dw[n] = !0, l(sq(n, y)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var A = u[N.g.xa];
                A && A[N.g.N] && Tv(A, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var B = {};
                        Yv(B, x);
                        p("require", "linkid", "linkid.js", B)
                    }
                    Xg() && Xv(f, n, c)
                }
                if (b === N.g.bc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: C
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && qq(n +
                            ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === N.g.fa ? (t(), um(f, c), S(c, N.g.eb) && (Wl(["aw", "dc"]), qq(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), Xv(f, n, c)) : b === N.g.Ea ? Sv(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Da(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || ew[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value &&
                    v("eventValue", Da(u.value))), p("send", u.fieldsToSend));
                if (!fw && !c.isGtmEvent) {
                    fw = !0;
                    var H = function() {
                            c.onFailure()
                        },
                        I = function() {
                            m().loaded || H()
                        };
                    rj() ? E(I) : Lb(h, I, H)
                }
            } else E(c.onFailure)
        },
        hw = function(a, b, c, d) {
            rh(function() {
                gw(a, b, d)
            }, [N.g.M, N.g.F])
        },
        jw = function(a) {
            function b(e) {
                function f(l, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            h[l] = e[p];
                            break
                        }
                    }
                }
                var h = J(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) h.category = e.category;
                    else {
                        for (var l = "", m = 0; m < iw.length; m++) void 0 !== e[iw[m]] && (l && (l += "/"), l += e[iw[m]]);
                        l && (h.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return h
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && G(a[d]) && c.push(b(a[d]));
            return c.length ?
                c : void 0
        },
        kw = function(a) {
            return Vg(a)
        },
        lw = !1;
    var fw, dw = {},
        Uv = {},
        mw = {},
        nw = Object.freeze((mw.page_hostname = 1, mw[N.g.U] = 1, mw[N.g.sb] = 1, mw[N.g.Ja] = 1, mw[N.g.Ba] = 1, mw[N.g.Ka] = 1, mw[N.g.hc] = 1, mw[N.g.Uc] = 1, mw[N.g.Ga] = 1, mw[N.g.Ya] = 1, mw[N.g.qa] = 1, mw[N.g.ad] = 1, mw[N.g.Ca] = 1, mw[N.g.zb] = 1, mw)),
        ow = {},
        Pv = Object.freeze((ow.client_storage = "storage", ow.sample_rate = 1, ow.site_speed_sample_rate = 1, ow.store_gac = 1, ow.use_amp_client_id =
            1, ow[N.g.Wa] = 1, ow[N.g.sa] = "storeGac", ow[N.g.Ja] = 1, ow[N.g.Ba] = 1, ow[N.g.Ka] = 1, ow[N.g.hc] = 1, ow[N.g.Uc] = 1, ow[N.g.Ya] = 1, ow)),
        pw = {},
        qw = Object.freeze((pw._cs = 1, pw._useUp = 1, pw.allowAnchor = 1, pw.allowLinker = 1, pw.alwaysSendReferrer = 1, pw.clientId = 1, pw.cookieDomain = 1, pw.cookieExpires = 1, pw.cookieFlags = 1, pw.cookieName = 1, pw.cookiePath = 1, pw.cookieUpdate = 1, pw.legacyCookieDomain = 1, pw.legacyHistoryImport = 1, pw.name = 1, pw.sampleRate = 1, pw.siteSpeedSampleRate = 1, pw.storage = 1, pw.storeGac = 1, pw.useAmpClientId = 1, pw._cd2l = 1, pw)),
        rw = Object.freeze({
            anonymize_ip: 1
        }),
        sw = {},
        Qv = Object.freeze((sw.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, sw.app_id = 1, sw.app_installer_id = 1, sw.app_name = 1, sw.app_version = 1, sw.description = "exDescription", sw.fatal = "exFatal", sw.language = 1, sw.page_hostname = "hostname", sw.transport_type = "transport", sw[N.g.oa] = "currencyCode", sw[N.g.ph] = 1, sw[N.g.qa] = "location", sw[N.g.ad] = "page", sw[N.g.Ca] = "referrer", sw[N.g.zb] =
            "title", sw[N.g.Af] = 1, sw[N.g.ya] = 1, sw)),
        tw = {},
        uw = Object.freeze((tw.content_id = 1, tw.event_action = 1, tw.event_category = 1, tw.event_label = 1, tw.link_attribution = 1, tw.name = 1, tw[N.g.xa] = 1, tw[N.g.oh] = 1, tw[N.g.Ma] = 1, tw[N.g.W] = 1, tw)),
        vw = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        iw = Object.freeze(["item_category",
            "item_category2", "item_category3", "item_category4", "item_category5"
        ]),
        ww = {},
        bw = Object.freeze((ww.levels = 1, ww[N.g.Ba] = "duration", ww[N.g.hc] = 1, ww)),
        xw = {},
        yw = Object.freeze((xw.anonymize_ip = 1, xw.fatal = 1, xw.send_page_view = 1, xw.store_gac = 1, xw.use_amp_client_id = 1, xw[N.g.sa] = 1, xw[N.g.ph] = 1, xw)),
        cw = function(a, b, c, d) {
            if (void 0 !== c)
                if (yw[b] && (c = Ea(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Rv(b)] = c;
                else if (g(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Rv = function(a) {
            return a &&
                g(a) ? a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        zw = {},
        ew = Object.freeze((zw.checkout_progress = 1, zw.select_content = 1, zw.set_checkout_option = 1, zw[N.g.Xb] = 1, zw[N.g.Yb] = 1, zw[N.g.Db] = 1, zw[N.g.Zb] = 1, zw[N.g.Ua] = 1, zw[N.g.qb] = 1, zw[N.g.Va] = 1, zw[N.g.na] = 1, zw[N.g.ac] = 1, zw[N.g.za] = 1, zw)),
        Aw = {},
        Bw = Object.freeze((Aw.checkout_progress = 1, Aw.set_checkout_option = 1, Aw[N.g.Lg] = 1, Aw[N.g.Mg] = 1, Aw[N.g.Xb] = 1, Aw[N.g.Yb] = 1, Aw[N.g.Ng] = 1, Aw[N.g.Db] = 1, Aw[N.g.na] = 1, Aw[N.g.ac] = 1, Aw[N.g.Og] = 1, Aw)),
        Cw = {},
        Dw = Object.freeze((Cw.generate_lead =
            1, Cw.login = 1, Cw.search = 1, Cw.select_content = 1, Cw.share = 1, Cw.sign_up = 1, Cw.view_search_results = 1, Cw[N.g.Zb] = 1, Cw[N.g.Ua] = 1, Cw[N.g.qb] = 1, Cw[N.g.Va] = 1, Cw[N.g.za] = 1, Cw)),
        Ew = function(a) {
            var b = "general";
            Bw[a] ? b = "ecommerce" : Dw[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Fw = {},
        Gw = Object.freeze((Fw.view_search_results = 1, Fw[N.g.Ua] = 1, Fw[N.g.Va] = 1, Fw[N.g.za] = 1, Fw)),
        Zv = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        Hw = function(a) {
            if (ta(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e =
                            d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Vv = function(a, b, c) {
            var d = function(L) {
                    return S(c, L)
                },
                e = {},
                f = {},
                h = {},
                l = {},
                m = Hw(d(N.g.Aj));
            !c.isGtmEvent && m && Zv(f, "exp", m);
            h["&gtm"] = tj(!0);
            c.isGtmEvent || (h._no_slc = !0);
            Xg() && (l._cs = kw);
            var n = d(N.g.ic);
            if (!c.isGtmEvent && G(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && Zv(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = ri(c), u = 0; u <
                t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    vw.hasOwnProperty(v) ? e[v] = w : qw.hasOwnProperty(v) ? l[v] = w : h[v] = w
                } else {
                    var x = void 0;
                    x = v !== N.g.R ? d(v) : si(c, v);
                    if (uw.hasOwnProperty(v)) cw(uw[v], v, x, e);
                    else if (rw.hasOwnProperty(v)) cw(rw[v], v, x, h);
                    else if (Qv.hasOwnProperty(v)) cw(Qv[v], v, x, f);
                    else if (Pv.hasOwnProperty(v)) cw(Pv[v], v, x, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) cw(1, v, x, f);
                    else if (v === N.g.R) {
                        if (!lw) {
                            var y = Qa(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === N.g.fa ? A = Qa(si(c,
                            v), ".") : (A = Qa(si(c, v, 1), "."), B = Qa(si(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === N.g.Ga && 0 > t.indexOf(N.g.hc) && (l.cookieName = x + "_ga");
                    Q(44) && nw[v] && (c.C.hasOwnProperty(v) || b === N.g.fa && c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            Q(44) && r && (f["&jsscut"] = "1");
            !1 !== d(N.g.lf) && !1 !== d(N.g.sb) && Nv() || (h.allowAdFeatures = !1);
            Li(c) && Ov() || (h.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(N.g.eb) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var C = h.hitCallback;
                h.hitCallback = function() {
                    ra(C) &&
                        C();
                    c.onSuccess()
                }
            } else {
                Zv(l, "cookieDomain", "auto");
                Zv(h, "forceSSL", !0);
                Zv(e, "eventCategory", Ew(b));
                Gw[b] && Zv(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? Zv(e, "eventLabel", d(N.g.oh)) : "search" === b || "view_search_results" === b ? Zv(e, "eventLabel", d(N.g.Kj)) : "select_content" === b && Zv(e, "eventLabel", d(N.g.sj));
                var H = e[N.g.xa] || {},
                    I = H[N.g.mc];
                I || 0 != I && H[N.g.N] ? l.allowLinker = !0 : !1 === I && Zv(l, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                l.name = a
            }
            Xg() && (h["&gcs"] = Mi(), Q(51) && (h["&gcd"] = Qi(c)),
                Vg(N.g.M) || (l.storage = "none"), Vg(N.g.F) || (h.allowAdFeatures = !1, l.storeGac = !1));
            Q(53) && (ph() && (h["&dma_cps"] = Ri()), h["&dma"] = ef() ? "1" : "0");
            var F = Fp(c) || d(N.g.Gb),
                M = d(N.g.qe);
            F && (c.isGtmEvent || (l[N.g.Gb] = F), l._cd2l = !0);
            M && !c.isGtmEvent && (l[N.g.qe] = M);
            e.fieldsToSend = f;
            e.fieldsToSet = h;
            e.createOnlyFields = l;
            return e
        },
        $v = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Tf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.ni = "impressions" === b.translateIfKeyEquals ?
                    jw(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Kd = "promoView" === b.translateIfKeyEquals ? jw(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Kd = "promoClick" === b.translateIfKeyEquals ? jw(f) : f;
                c.Qa = b.promoClick.actionField;
                return c
            }
            for (var h in b)
                if (b.hasOwnProperty(h) && "translateIfKeyEquals" !== h && "impressions" !== h && "promoView" !== h && "promoClick" !== h && "currencyCode" !== h) {
                    c.action = h;
                    var l = b[h].products;
                    c.Pb = "products" === b.translateIfKeyEquals ? jw(l) :
                        l;
                    c.Qa = b[h].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        aw = function(a, b) {
            function c(u) {
                return {
                    id: d(N.g.ja),
                    affiliation: d(N.g.Tg),
                    revenue: d(N.g.W),
                    tax: d(N.g.rf),
                    shipping: d(N.g.Wc),
                    coupon: d(N.g.Ug),
                    list: d(N.g.qf) || d(N.g.Vc) || u
                }
            }
            for (var d = function(u) {
                    return S(b, u)
                }, e = d(N.g.P), f, h = 0; e && h < e.length && !(f = e[h][N.g.qf] || e[h][N.g.Vc]); h++);
            var l = d(N.g.ic);
            if (G(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Zv(n, p, n[l[p]])
                }
            var q =
                null,
                r = d(N.g.vj);
            if (a === N.g.na || a === N.g.ac) q = {
                action: a,
                Qa: c(),
                Pb: jw(e)
            };
            else if (a === N.g.Xb) q = {
                action: "add",
                Qa: c(),
                Pb: jw(e)
            };
            else if (a === N.g.Yb) q = {
                action: "remove",
                Qa: c(),
                Pb: jw(e)
            };
            else if (a === N.g.za) q = {
                action: "detail",
                Qa: c(f),
                Pb: jw(e)
            };
            else if (a === N.g.Ua) q = {
                action: "impressions",
                ni: jw(e)
            };
            else if (a === N.g.Va) q = {
                action: "promo_view",
                Kd: jw(r) || jw(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === N.g.qb) q = {
                action: "promo_click",
                Kd: jw(r) || jw(e)
            };
            else if ("select_content" === a || a === N.g.Zb) q = {
                action: "click",
                Qa: {
                    list: d(N.g.qf) || d(N.g.Vc) || f
                },
                Pb: jw(e)
            };
            else if (a === N.g.Db || "checkout_progress" === a) {
                var t = {
                    step: a === N.g.Db ? 1 : d(N.g.pf),
                    option: d(N.g.ie)
                };
                q = {
                    action: "checkout",
                    Pb: jw(e),
                    Qa: J(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Qa: {
                    step: d(N.g.pf),
                    option: d(N.g.ie)
                }
            });
            q && (q.Tf = d(N.g.oa));
            return q
        },
        Iw = {},
        Wv = function(a, b) {
            var c = Iw[a];
            Iw[a] = J(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    gf();

    function Tw() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Uw = function() {
            var a = Tw();
            a.hid = a.hid || xa();
            return a.hid
        },
        Vw = function(a, b) {
            var c = Tw();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Rx = window,
        Sx = document,
        Tx = function(a) {
            var b = Rx._gaUserPrefs;
            if (b && b.ioo && b.ioo() || Sx.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Rx["ga-disable-" + a]) return !0;
            try {
                var c = Rx.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Ti("AMP_TOKEN", String(Sx.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Sx.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function ay(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Na] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var jy = function(a, b) {};

    function iy(a, b) {
        var c = function() {};
        return c
    }

    function ky(a, b, c) {};
    var ly = iy;
    var my = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var ny = encodeURI,
        Y = encodeURIComponent,
        oy = function(a, b, c) {
            Ob(a, b, c)
        },
        py = function(a, b) {
            if (!a) return !1;
            var c = Df(Ff(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length -
                        e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        qy = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };

    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1;
                Z.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1;
                Z.__f.runInSiloedMode = !1
            })(function(a) {
                var b = nu("gtm.referrer", 1) || D.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? Df(Ff(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : mu(String(b)) : String(b)
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : nu("gtm.url", 1)) || ku();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return mu(String(c));
                var e = Ff(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        m =
                        b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? ta(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Df(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Df(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();









    Z.o.gaawc = ["google"],
        function() {
            (function(a) {
                Z.__gaawc = a;
                Z.__gaawc.s = "gaawc";
                Z.__gaawc.isVendorTemplate = !0;
                Z.__gaawc.priorityOverride = 10;
                Z.__gaawc.isInfrastructure = !1;
                Z.__gaawc.runInSiloedMode = !1
            })(function(a) {
                var b = String(a.vtp_measurementId);
                if (!g(b) || 0 >= b.indexOf("-")) E(a.vtp_gtmOnFailure);
                else {
                    var c = qy(a.vtp_fieldsToSet, "name", "value") || {};
                    if (c.hasOwnProperty(N.g.Na) || a.vtp_userProperties) {
                        var d = c[N.g.Na] || {};
                        J(qy(a.vtp_userProperties, "name", "value"), d);
                        c[N.g.Na] = d
                    }
                    a.vtp_enableSendToServerContainer &&
                        a.vtp_serverContainerUrl && (c[N.g.oc] = a.vtp_serverContainerUrl, c[N.g.pe] = !0);
                    var e = a.vtp_userDataVariable;
                    e && (c[N.g.ka] = e);
                    my(c, he, function(f) {
                        return Ea(f)
                    });
                    my(c, je, function(f) {
                        return Number(f)
                    });
                    c.send_page_view = a.vtp_sendPageView;
                    wr(sr(b, c), a.vtp_gtmEventId, {
                        noTargetGroup: !0,
                        originatingEntity: cq(a.vtp_gtmEntityIndex, a.vtp_gtmEntityName)
                    });
                    E(a.vtp_gtmOnSuccess)
                }
            })
        }();



    Z.o.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = h[p] ? Ea(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && J(qy(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                J(qy(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ea(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = Be || De ? Dp(n._x_19, "/analytics.js") : void 0,
                        t = jm("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    W("analytics.js" === p && r ? r : t, function() {
                        var u = nq();
                        u && u.loaded || q();
                    }, q)
                }
            }
            var f, h = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua = m;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1;
                Z.__ua.runInSiloedMode = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" ==
                        m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    J(qy(t.vtp_contentGroup, "index", "group"), p);
                    J(qy(t.vtp_dimension, "index", "dimension"), q);
                    J(qy(t.vtp_metric, "index", "metric"), r);
                    var u = J(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = J(m, u)
                }
                J(qy(m.vtp_contentGroup, "index", "group"), p);
                J(qy(m.vtp_dimension, "index", "dimension"), q);
                J(qy(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId ||
                        ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + Ne(), y = A + ".");
                var B = function(ba, V) {
                    for (var va in V) V.hasOwnProperty(va) && (v[ba + va] = V[va])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction),
                    v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(Da, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = N.g.bc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var C = {};
                        C[N.g.N] = m.vtp_autoLinkDomains;
                        C.use_anchor = m.vtp_useHashAutoLink;
                        C[N.g.yb] = m.vtp_decorateFormsAutoLink;
                        v[N.g.xa] = C
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ? (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction),
                    v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Da(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var H = {};
                a(v, H);
                v.name || (H.gtmTrackerName = A);
                H.gaFunctionName = m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (H.nonInteraction = m.vtp_nonInteraction);
                var I = Fi(Ei(Di(Ci(vi(new ui(m.vtp_gtmEventId,
                    m.vtp_gtmPriorityId), H), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                hw(w, x, Date.now(), I);
                var F = pq(m.vtp_functionName);
                if (ra(F)) {
                    var M = function(ba) {
                        var V = [].slice.call(arguments, 0);
                        V[0] = y + V[0];
                        F.apply(window, V)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else E(m.vtp_gtmOnFailure)
            })
        }();
    Z.o.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.s = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1;
                Z.__gas.runInSiloedMode = !1
            })(function(a) {
                var b = J(a),
                    c = b;
                c[hc.la] = null;
                c[hc.Jf] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();




    var Kz = {};
    Kz.dataLayer = Ue;
    Kz.callback = function(a) {
        Ke.hasOwnProperty(a) && ra(Ke[a]) && Ke[a]();
        delete Ke[a]
    };
    Kz.bootstrap = 0;
    Kz._spx = !1;

    function Lz() {
        te[Gh()] = te[Gh()] || Kz;
        Mh();
        Rh() || k(Sh(), function(a, b) {
            Jp(a, b.transportUrl, b.context);
            K(92)
        });
        La(Le, Z.o);
        Sc = bd
    }
    (function(a) {
        function b() {
            m = D.documentElement.getAttribute("data-tag-assistant-present");
            jt(m) && (l = h.Mj)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (D.referrer) {
                var d = Ff(D.referrer);
                c = "cct.google" === Cf(d, "host")
            }
            if (!c) {
                var e = Zi("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Lb("https://cct.google/taggy/agent.js"))
        }
        if (Fe) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    ze ? (v = "OGT", w = "GTAG") : Fe && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, Lb("https://" + se.Yd + "/debug/bootstrap?id=" + Ah.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + tj()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Fb,
                            containerProduct: v,
                            debug: !1,
                            id: Ah.ctid,
                            destinations: Dh()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    se.Oi && (y.data.initialPublish = !0);
                    x.push(y)
                },
                h = {
                    Wl: 1,
                    Nj: 2,
                    Yj: 3,
                    Qi: 4,
                    Mj: 5
                },
                l = void 0,
                m = void 0,
                n = Df(z.location, "query", !1, void 0, "gtm_debug");
            jt(n) && (l = h.Nj);
            if (!l && D.referrer) {
                var p = Ff(D.referrer);
                "tagassistant.google.com" === Cf(p, "host") && (l = h.Yj)
            }
            if (!l) {
                var q =
                    Zi("__TAG_ASSISTANT");
                q.length && q[0].length && (l = h.Qi)
            }
            l || b();
            if (!l && kt(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        l && Fb ? f(l) : a()
                    },
                    t = !1;
                Pb(D, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else l && Fb ? f(l) : a()
        }
    })(function() {
        try {
            if (Kh(), Q(30) && Ko(), Dg().B(), ek(), Nh()) {
                Ir();
            } else {
                (Q(7) || Q(8) || Q(22) || Q(19)) && uk();
                Cp();
                Rc();
                Lc = Z;
                Mc = Vu;
                Lz();
                sh();
                it();
                aq();
                ys = !1;
                "complete" === D.readyState ? As() : Pb(z, "load", As);
                ai && (Wh(oi), z.setInterval(ni, 864E5));
                Wh(Zu);
                Wh($q);
                Wh(ao);
                Wh(Xr);
                Wh(kr);
                Wh(Op);
                Wh(jk);
                Wh(Mp);
                Wh(gr);
                Wh(Yu);
                Q(59) && Wh(cr);
                Gt();
                af(1);
                Q(68) && Jr();
                Je = Ia();
                Kz.bootstrap = Je;
                Q(30) && Lo()
            }
        } catch (b) {
            af(4), ki()
        }
    });

})()