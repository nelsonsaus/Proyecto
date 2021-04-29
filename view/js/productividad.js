(function (e, t) {
	var n, r, i = typeof t,
		o = e.location,
		a = e.document,
		s = a.documentElement,
		l = e.jQuery,
		u = e.$,
		c = {},
		p = [],
		f = "1.10.2",
		d = p.concat,
		h = p.push,
		g = p.slice,
		m = p.indexOf,
		y = c.toString,
		v = c.hasOwnProperty,
		b = f.trim,
		x = function (e, t) {
			return new x.fn.init(e, t, r)
		},
		w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		T = /\S+/g,
		C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		E = /^[\],:{}\s]*$/,
		S = /(?:^|:|,)(?:\s*\[)+/g,
		A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		D = /^-ms-/,
		L = /-([\da-z])/gi,
		H = function (e, t) {
			return t.toUpperCase()
		},
		q = function (e) {
			(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
		},
		_ = function () {
			a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
		};
	x.fn = x.prototype = {
		jquery: f,
		constructor: x,
		init: function (e, n, r) {
			var i, o;
			if (!e) {
				return this
			}
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) {
					return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
				}
				if (i[1]) {
					if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) {
						for (i in n) {
							x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
						}
					}
					return this
				}
				if (o = a.getElementById(i[2]), o && o.parentNode) {
					if (o.id !== i[2]) {
						return r.find(e)
					}
					this.length = 1, this[0] = o
				}
				return this.context = a, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		},
		selector: "",
		length: 0,
		toArray: function () {
			return g.call(this)
		},
		get: function (e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function (e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function (e, t) {
			return x.each(this, e, t)
		},
		ready: function (e) {
			return x.ready.promise().done(e), this
		},
		slice: function () {
			return this.pushStack(g.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function (e) {
			return this.pushStack(x.map(this, function (t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: h,
		sort: [].sort,
		splice: [].splice
	}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
		var e, n, r, i, o, a, s = arguments[0] || {},
			l = 1,
			u = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
			if (null != (o = arguments[l])) {
				for (i in o) {
					e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r))
				}
			}
		}
		return s
	}, x.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		noConflict: function (t) {
			return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function (e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready: function (e) {
			if (e === !0 ? !--x.readyWait : !x.isReady) {
				if (!a.body) {
					return setTimeout(x.ready)
				}
				x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
			}
		},
		isFunction: function (e) {
			return "function" === x.type(e)
		},
		isArray: Array.isArray || function (e) {
			return "array" === x.type(e)
		},
		isWindow: function (e) {
			return null != e && e == e.window
		},
		isNumeric: function (e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
		},
		isPlainObject: function (e) {
			var n;
			if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) {
				return !1
			}
			try {
				if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) {
					return !1
				}
			} catch (r) {
				return !1
			}
			if (x.support.ownLast) {
				for (n in e) {
					return v.call(e, n)
				}
			}
			for (n in e) {}
			return n === t || v.call(e, n)
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) {
				return !1
			}
			return !0
		},
		error: function (e) {
			throw Error(e)
		},
		parseHTML: function (e, t, n) {
			if (!e || "string" != typeof e) {
				return null
			}
			"boolean" == typeof t && (n = t, t = !1), t = t || a;
			var r = k.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		},
		parseJSON: function (n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
		},
		parseXML: function (n) {
			var r, i;
			if (!n || "string" != typeof n) {
				return null
			}
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
		},
		noop: function () {},
		globalEval: function (t) {
			t && x.trim(t) && (e.execScript || function (t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function (e) {
			return e.replace(D, "ms-").replace(L, H)
		},
		nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function (e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e);
			if (n) {
				if (a) {
					for (; o > i; i++) {
						if (r = t.apply(e[i], n), r === !1) {
							break
						}
					}
				} else {
					for (i in e) {
						if (r = t.apply(e[i], n), r === !1) {
							break
						}
					}
				}
			} else {
				if (a) {
					for (; o > i; i++) {
						if (r = t.call(e[i], i, e[i]), r === !1) {
							break
						}
					}
				} else {
					for (i in e) {
						if (r = t.call(e[i], i, e[i]), r === !1) {
							break
						}
					}
				}
			}
			return e
		},
		trim: b && !b.call("\ufeff\u00a0") ? function (e) {
			return null == e ? "" : b.call(e)
		} : function (e) {
			return null == e ? "" : (e + "").replace(C, "")
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
		},
		inArray: function (e, t, n) {
			var r;
			if (t) {
				if (m) {
					return m.call(t, e, n)
				}
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
					if (n in t && t[n] === e) {

						return n
					}
				}
			}
			return -1
		},
		merge: function (e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if ("number" == typeof r) {
				for (; r > o; o++) {
					e[i++] = n[o]
				}
			} else {
				while (n[o] !== t) {
					e[i++] = n[o++]
				}
			}
			return e.length = i, e
		},
		grep: function (e, t, n) {
			var r, i = [],
				o = 0,
				a = e.length;
			for (n = !!n; a > o; o++) {
				r = !!t(e[o], o), n !== r && i.push(e[o])
			}
			return i
		},
		map: function (e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e),
				s = [];
			if (a) {
				for (; o > i; i++) {
					r = t(e[i], i, n), null != r && (s[s.length] = r)
				}
			} else {
				for (i in e) {
					r = t(e[i], i, n), null != r && (s[s.length] = r)
				}
			}
			return d.apply([], s)
		},
		guid: 1,
		proxy: function (e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
				return e.apply(n || this, r.concat(g.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : t
		},
		access: function (e, n, r, i, o, a, s) {
			var l = 0,
				u = e.length,
				c = null == r;
			if ("object" === x.type(r)) {
				o = !0;
				for (l in r) {
					x.access(e, n, l, r[l], !0, a, s)
				}
			} else {
				if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
						return c.call(x(e), n)
					})), n)) {
					for (; u > l; l++) {
						n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)))
					}
				}
			}
			return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
		},
		now: function () {
			return (new Date).getTime()
		},
		swap: function (e, t, n, r) {
			var i, o, a = {};
			for (o in t) {
				a[o] = e.style[o], e.style[o] = t[o]
			}
			i = n.apply(e, r || []);
			for (o in t) {
				e.style[o] = a[o]
			}
			return i
		}
	}), x.ready.promise = function (t) {
		if (!n) {
			if (n = x.Deferred(), "complete" === a.readyState) {
				setTimeout(x.ready)
			} else {
				if (a.addEventListener) {
					a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1)
				} else {
					a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
					var r = !1;
					try {
						r = null == e.frameElement && a.documentElement
					} catch (i) {}
					r && r.doScroll && function o() {
						if (!x.isReady) {
							try {
								r.doScroll("left")
							} catch (e) {
								return setTimeout(o, 50)
							}
							_(), x.ready()
						}
					}()
				}
			}
		}
		return n.promise(t)
	}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		c["[object " + t + "]"] = t.toLowerCase()
	});

	function M(e) {
		var t = e.length,
			n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	r = x(a),
		function (e, t) {
			var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
				w = e.document,
				T = 0,
				C = 0,
				N = st(),
				k = st(),
				E = st(),
				S = !1,
				A = function (e, t) {
					return e === t ? (S = !0, 0) : 0
				},
				j = typeof t,
				D = 1 << 31,
				L = {}.hasOwnProperty,
				H = [],
				q = H.pop,
				_ = H.push,
				M = H.push,
				O = H.slice,
				F = H.indexOf || function (e) {
					var t = 0,
						n = this.length;
					for (; n > t; t++) {
						if (this[t] === e) {
							return t
						}
					}
					return -1
				},
				B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				P = "[\\x20\\t\\r\\n\\f]",
				R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				W = R.replace("w", "w#"),
				$ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
				I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
				z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
				X = RegExp("^" + P + "*," + P + "*"),
				U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
				V = RegExp(P + "*[+~]"),
				Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
				J = RegExp(I),
				G = RegExp("^" + W + "$"),
				Q = {
					ID: RegExp("^#(" + R + ")"),
					CLASS: RegExp("^\\.(" + R + ")"),
					TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + $),
					PSEUDO: RegExp("^" + I),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
					bool: RegExp("^(?:" + B + ")$", "i"),
					needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
				},
				K = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				et = /^(?:input|select|textarea|button)$/i,
				tt = /^h\d$/i,
				nt = /'|\\/g,
				rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
				it = function (e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
				};
			try {
				M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
			} catch (ot) {
				M = {
					apply: H.length ? function (e, t) {
						_.apply(e, O.call(t))
					} : function (e, t) {
						var n = e.length,
							r = 0;
						while (e[n++] = t[r++]) {}
						e.length = n - 1
					}
				}
			}




			function at(e, t, n, i) {
				var o, a, s, l, u, c, d, m, y, x;
				if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) {
					return n
				}
				if (1 !== (l = t.nodeType) && 9 !== l) {
					return []
				}
				if (h && !i) {
					if (o = Z.exec(e)) {
						if (s = o[1]) {
							if (9 === l) {
								if (a = t.getElementById(s), !a || !a.parentNode) {
									return n
								}
								if (a.id === s) {
									return n.push(a), n
								}
							} else {
								if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) {
									return n.push(a), n
								}
							}
						} else {
							if (o[2]) {
								return M.apply(n, t.getElementsByTagName(e)), n
							}
							if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) {
								return M.apply(n, t.getElementsByClassName(s)), n
							}
						}
					}
					if (r.qsa && (!g || !g.test(e))) {
						if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
							c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
							while (u--) {
								c[u] = m + yt(c[u])
							}
							y = V.test(e) && t.parentNode || t, x = c.join(",")
						}
						if (x) {
							try {
								return M.apply(n, y.querySelectorAll(x)), n
							} catch (T) {} finally {
								d || t.removeAttribute("id")
							}
						}
					}
				}
				return kt(e.replace(z, "$1"), t, n, i)
			}

			function st() {
				var e = [];

				function t(n, r) {
					return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
				}
				return t
			}

			function lt(e) {
				return e[b] = !0, e
			}

			function ut(e) {
				var t = f.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function ct(e, t) {
				var n = e.split("|"),
					r = e.length;
				while (r--) {
					o.attrHandle[n[r]] = t
				}
			}

			function pt(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
				if (r) {
					return r
				}
				if (n) {
					while (n = n.nextSibling) {
						if (n === t) {
							return -1
						}
					}
				}
				return e ? 1 : -1
			}

			function ft(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function dt(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function ht(e) {
				return lt(function (t) {
					return t = +t, lt(function (n, r) {
						var i, o = e([], n.length, t),
							a = o.length;
						while (a--) {
							n[i = o[a]] && (n[i] = !(r[i] = n[i]))
						}
					})
				})
			}
			s = at.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, r = at.support = {}, p = at.setDocument = function (e) {
				var n = e ? e.ownerDocument || e : w,
					i = n.defaultView;
				return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
					p()
				}), r.attributes = ut(function (e) {
					return e.className = "i", !e.getAttribute("className")
				}), r.getElementsByTagName = ut(function (e) {
					return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
				}), r.getElementsByClassName = ut(function (e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), r.getById = ut(function (e) {
					return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
				}), r.getById ? (o.find.ID = function (e, t) {
					if (typeof t.getElementById !== j && h) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, o.filter.ID = function (e) {
					var t = e.replace(rt, it);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}) : (delete o.find.ID, o.filter.ID = function (e) {
					var t = e.replace(rt, it);
					return function (e) {
						var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), o.find.TAG = r.getElementsByTagName ? function (e, n) {
					return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
				} : function (e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = o[i++]) {
							1 === n.nodeType && r.push(n)
						}
						return r
					}
					return o
				}, o.find.CLASS = r.getElementsByClassName && function (e, n) {
					return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
				}, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
				}), ut(function (e) {
					var t = n.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
				})), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
					r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
				}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function (e, t) {
					if (t) {
						while (t = t.parentNode) {
							if (t === e) {
								return !0
							}
						}
					}
					return !1
				}, A = d.compareDocumentPosition ? function (e, t) {
					if (e === t) {
						return S = !0, 0
					}
					var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
					return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function (e, t) {
					var r, i = 0,
						o = e.parentNode,
						a = t.parentNode,
						s = [e],
						l = [t];
					if (e === t) {
						return S = !0, 0
					}
					if (!o || !a) {
						return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0
					}
					if (o === a) {
						return pt(e, t)
					}
					r = e;
					while (r = r.parentNode) {
						s.unshift(r)
					}
					r = t;
					while (r = r.parentNode) {
						l.unshift(r)
					}
					while (s[i] === l[i]) {
						i++
					}
					return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
				}, n) : f
			}, at.matches = function (e, t) {
				return at(e, null, null, t)
			}, at.matchesSelector = function (e, t) {
				if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) {
					try {
						var n = y.call(e, t);
						if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
							return n
						}
					} catch (i) {}
				}
				return at(t, f, null, [e]).length > 0
			}, at.contains = function (e, t) {
				return (e.ownerDocument || e) !== f && p(e), v(e, t)
			}, at.attr = function (e, n) {
				(e.ownerDocument || e) !== f && p(e);
				var i = o.attrHandle[n.toLowerCase()],
					a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
				return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
			}, at.error = function (e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, at.uniqueSort = function (e) {
				var t, n = [],
					i = 0,
					o = 0;
				if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
					while (t = e[o++]) {
						t === e[o] && (i = n.push(o))
					}
					while (i--) {
						e.splice(n[i], 1)
					}
				}
				return e
			}, a = at.getText = function (e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) {
							return e.textContent
						}
						for (e = e.firstChild; e; e = e.nextSibling) {
							n += a(e)
						}
					} else {
						if (3 === i || 4 === i) {
							return e.nodeValue
						}
					}
				} else {
					for (; t = e[r]; r++) {
						n += a(t)
					}
				}
				return n
			}, o = at.selectors = {
				cacheLength: 50,
				createPseudo: lt,
				match: Q,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (e) {
						return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
					},
					PSEUDO: function (e) {
						var n, r = !e[5] && e[2];
						return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(rt, it).toLowerCase();
						return "*" === e ? function () {
							return !0
						} : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function (e) {
						var t = N[e + " "];
						return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
						})
					},
					ATTR: function (e, t, n) {
						return function (r) {
							var i = at.attr(r, e);
							return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
						}
					},
					CHILD: function (e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ? function (e) {
							return !!e.parentNode
						} : function (t, n, l) {
							var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								y = s && t.nodeName.toLowerCase(),
								v = !l && !s;
							if (m) {
								if (o) {
									while (g) {
										p = t;
										while (p = p[g]) {
											if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
												return !1
											}
										}
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? m.firstChild : m.lastChild], a && v) {
									c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
									while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
										if (1 === p.nodeType && ++f && p === t) {
											c[e] = [T, d, f];
											break
										}
									}
								} else {
									if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) {
										f = u[1]
									} else {
										while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
											if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) {
												break
											}
										}
									}
								}
								return f -= i, f === r || 0 === f % r && f / r >= 0
							}
						}
					},
					PSEUDO: function (e, t) {
						var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
						return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
							var i, o = r(e, t),
								a = o.length;
							while (a--) {
								i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
							}
						}) : function (e) {
							return r(e, 0, n)
						}) : r
					}
				},
				pseudos: {
					not: lt(function (e) {
						var t = [],
							n = [],
							r = l(e.replace(z, "$1"));
						return r[b] ? lt(function (e, t, n, i) {
							var o, a = r(e, null, i, []),
								s = e.length;
							while (s--) {
								(o = a[s]) && (e[s] = !(t[s] = o))
							}
						}) : function (e, i, o) {
							return t[0] = e, r(t, null, o, n), !n.pop()
						}
					}),
					has: lt(function (e) {
						return function (t) {
							return at(e, t).length > 0
						}
					}),
					contains: lt(function (e) {
						return function (t) {
							return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
						}
					}),
					lang: lt(function (e) {
						return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
							function (t) {
								var n;
								do {
									if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
										return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
									}
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function (t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function (e) {
						return e === d
					},
					focus: function (e) {
						return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function (e) {
						return e.disabled === !1
					},
					disabled: function (e) {
						return e.disabled === !0
					},
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling) {
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
								return !1
							}
						}
						return !0
					},
					parent: function (e) {
						return !o.pseudos.empty(e)
					},
					header: function (e) {
						return tt.test(e.nodeName)
					},
					input: function (e) {
						return et.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: ht(function () {
						return [0]
					}),
					last: ht(function (e, t) {
						return [t - 1]
					}),
					eq: ht(function (e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: ht(function (e, t) {
						var n = 0;
						for (; t > n; n += 2) {
							e.push(n)
						}
						return e
					}),
					odd: ht(function (e, t) {
						var n = 1;
						for (; t > n; n += 2) {
							e.push(n)
						}
						return e
					}),
					lt: ht(function (e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; --r >= 0;) {
							e.push(r)
						}
						return e
					}),
					gt: ht(function (e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; t > ++r;) {
							e.push(r)
						}
						return e
					})
				}
			}, o.pseudos.nth = o.pseudos.eq;
			for (n in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) {
				o.pseudos[n] = ft(n)
			}
			for (n in {
					submit: !0,
					reset: !0
				}) {
				o.pseudos[n] = dt(n)
			}

			function gt() {}
			gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

			function mt(e, t) {
				var n, r, i, a, s, l, u, c = k[e + " "];
				if (c) {
					return t ? 0 : c.slice(0)
				}
				s = e, l = [], u = o.preFilter;
				while (s) {
					(!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace(z, " ")
					}), s = s.slice(n.length));
					for (a in o.filter) {
						!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
							value: n,
							type: a,
							matches: r
						}), s = s.slice(n.length))
					}
					if (!n) {
						break
					}
				}
				return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
			}

			function yt(e) {
				var t = 0,
					n = e.length,
					r = "";
				for (; n > t; t++) {
					r += e[t].value
				}
				return r
			}

			function vt(e, t, n) {
				var r = t.dir,
					o = n && "parentNode" === r,
					a = C++;
				return t.first ? function (t, n, i) {
					while (t = t[r]) {
						if (1 === t.nodeType || o) {
							return e(t, n, i)
						}
					}
				} : function (t, n, s) {
					var l, u, c, p = T + " " + a;
					if (s) {
						while (t = t[r]) {
							if ((1 === t.nodeType || o) && e(t, n, s)) {
								return !0
							}
						}
					} else {
						while (t = t[r]) {
							if (1 === t.nodeType || o) {
								if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
									if ((l = u[1]) === !0 || l === i) {
										return l === !0
									}
								} else {
									if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) {
										return !0
									}
								}
							}
						}
					}
				}
			}

			function bt(e) {
				return e.length > 1 ? function (t, n, r) {
					var i = e.length;
					while (i--) {
						if (!e[i](t, n, r)) {
							return !1
						}
					}
					return !0
				} : e[0]
			}

			function xt(e, t, n, r, i) {
				var o, a = [],
					s = 0,
					l = e.length,
					u = null != t;
				for (; l > s; s++) {
					(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s))
				}
				return a
			}

			function wt(e, t, n, r, i, o) {
				return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
					var u, c, p, f = [],
						d = [],
						h = a.length,
						g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
						m = !e || !o && t ? g : xt(g, f, e, s, l),
						y = n ? i || (o ? e : h || r) ? [] : a : m;
					if (n && n(m, y, s, l), r) {
						u = xt(y, d), r(u, [], s, l), c = u.length;
						while (c--) {
							(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
						}
					}
					if (o) {
						if (i || e) {
							if (i) {
								u = [], c = y.length;
								while (c--) {
									(p = y[c]) && u.push(m[c] = p)
								}
								i(null, y = [], u, l)
							}
							c = y.length;
							while (c--) {
								(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
							}
						}
					} else {
						y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
					}
				})
			}

			function Tt(e) {
				var t, n, r, i = e.length,
					a = o.relative[e[0].type],
					s = a || o.relative[" "],
					l = a ? 1 : 0,
					c = vt(function (e) {
						return e === t
					}, s, !0),
					p = vt(function (e) {
						return F.call(t, e) > -1
					}, s, !0),
					f = [function (e, n, r) {
						return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
					}];
				for (; i > l; l++) {
					if (n = o.relative[e[l].type]) {
						f = [vt(bt(f), n)]
					} else {
						if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
							for (r = ++l; i > r; r++) {
								if (o.relative[e[r].type]) {
									break
								}
							}
							return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
								value: " " === e[l - 2].type ? "*" : ""
							})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
						}
						f.push(n)
					}
				}
				return bt(f)
			}

			function Ct(e, t) {
				var n = 0,
					r = t.length > 0,
					a = e.length > 0,
					s = function (s, l, c, p, d) {
						var h, g, m, y = [],
							v = 0,
							b = "0",
							x = s && [],
							w = null != d,
							C = u,
							N = s || a && o.find.TAG("*", d && l.parentNode || l),
							k = T += null == C ? 1 : Math.random() || 0.1;
						for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
							if (a && h) {
								g = 0;
								while (m = e[g++]) {
									if (m(h, l, c)) {
										p.push(h);
										break
									}
								}
								w && (T = k, i = ++n)
							}
							r && ((h = !m && h) && v--, s && x.push(h))
						}
						if (v += b, r && b !== v) {
							g = 0;
							while (m = t[g++]) {
								m(x, y, l, c)
							}
							if (s) {
								if (v > 0) {
									while (b--) {
										x[b] || y[b] || (y[b] = q.call(p))
									}
								}
								y = xt(y)
							}
							M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
						}
						return w && (T = k, u = C), x
					};
				return r ? lt(s) : s
			}
			l = at.compile = function (e, t) {
				var n, r = [],
					i = [],
					o = E[e + " "];
				if (!o) {
					t || (t = mt(e)), n = t.length;
					while (n--) {
						o = Tt(t[n]), o[b] ? r.push(o) : i.push(o)
					}
					o = E(e, Ct(i, r))
				}
				return o
			};

			function Nt(e, t, n) {
				var r = 0,
					i = t.length;
				for (; i > r; r++) {
					at(e, t[r], n)
				}
				return n
			}

			function kt(e, t, n, i) {
				var a, s, u, c, p, f = mt(e);
				if (!i && 1 === f.length) {
					if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
						if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) {
							return n
						}
						e = e.slice(s.shift().value.length)
					}
					a = Q.needsContext.test(e) ? 0 : s.length;
					while (a--) {
						if (u = s[a], o.relative[c = u.type]) {
							break
						}
						if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
							if (s.splice(a, 1), e = i.length && yt(s), !e) {
								return M.apply(n, i), n
							}
							break
						}
					}
				}
				return l(e, f)(i, t, !h, n, V.test(e)), n
			}
			r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
				return 1 & e.compareDocumentPosition(f.createElement("div"))
			}), ut(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || ct("type|href|height|width", function (e, n, r) {
				return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
			}), r.attributes && ut(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || ct("value", function (e, n, r) {
				return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
			}), ut(function (e) {
				return null == e.getAttribute("disabled")
			}) || ct(B, function (e, n, r) {
				var i;
				return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
			}), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
		}(e);
	var O = {};

	function F(e) {
		var t = O[e] = {};
		return x.each(e.match(T) || [], function (e, n) {
			t[n] = !0
		}), t
	}
	x.Callbacks = function (e) {
		e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
		var n, r, i, o, a, s, l = [],
			u = !e.once && [],
			c = function (t) {
				for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
					if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						r = !1;
						break
					}
				}
				n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
			},
			p = {
				add: function () {
					if (l) {
						var t = l.length;
						(function i(t) {
							x.each(t, function (t, n) {
								var r = x.type(n);
								"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = l.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function () {
					return l && x.each(arguments, function (e, t) {
						var r;
						while ((r = x.inArray(t, l, r)) > -1) {
							l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
						}
					}), this
				},
				has: function (e) {
					return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function () {
					return l = [], o = 0, this
				},
				disable: function () {
					return l = u = r = t, this
				},
				disabled: function () {
					return !l
				},
				lock: function () {
					return u = t, r || p.disable(), this
				},
				locked: function () {
					return !u
				},

				fireWith: function (e, t) {
					return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
				},
				fire: function () {
					return p.fireWith(this, arguments), this
				},
				fired: function () {
					return !!i
				}
			};
		return p
	}, x.extend({
		Deferred: function (e) {
			var t = [
					["resolve", "done", x.Callbacks("once memory"), "resolved"],
					["reject", "fail", x.Callbacks("once memory"), "rejected"],
					["notify", "progress", x.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function () {
						return n
					},
					always: function () {
						return i.done(arguments).fail(arguments), this
					},
					then: function () {
						var e = arguments;
						return x.Deferred(function (n) {
							x.each(t, function (t, o) {
								var a = o[0],
									s = x.isFunction(e[t]) && e[t];
								i[o[1]](function () {
									var e = s && s.apply(this, arguments);
									e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function (e) {
						return null != e ? x.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, x.each(t, function (e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function () {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function (e) {
			var t = 0,
				n = g.call(arguments),
				r = n.length,
				i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : x.Deferred(),
				a = function (e, t, n) {
					return function (r) {
						t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				},
				s, l, u;
			if (r > 1) {
				for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
					n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i
				}
			}
			return i || o.resolveWith(u, n), o.promise()
		}
	}), x.support = function (t) {
		var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) {
			return t
		}
		s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (f in {
				submit: !0,
				change: !0,
				focusin: !0
			}) {
			d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
		}
		d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
		for (f in x(t)) {
			break
		}
		return t.ownLast = "0" !== f, x(function () {
			var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				l = a.getElementsByTagName("body")[0];
			l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
				zoom: 1
			} : {}, function () {
				t.boxSizing = 4 === d.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
		}), n = s = l = u = r = o = null, t
	}({});
	var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		P = /([A-Z])/g;

	function R(e, n, r, i) {
		if (x.acceptData(e)) {
			var o, a, s = x.expando,
				l = e.nodeType,
				u = l ? x.cache : e,
				c = l ? e[s] : e[s] && s;
			if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) {
				return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
					toJSON: x.noop
				}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
			}
		}
	}

	function W(e, t, n) {
		if (x.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? x.cache : e,
				s = o ? e[x.expando] : x.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					while (i--) {
						delete r[t[i]]
					}
					if (n ? !I(r) : !x.isEmptyObject(r)) {
						return
					}
				}(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}
	x.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (e) {
			return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
		},
		data: function (e, t, n) {
			return R(e, t, n)
		},
		removeData: function (e, t) {
			return W(e, t)
		},
		_data: function (e, t, n) {
			return R(e, t, n, !0)
		},
		_removeData: function (e, t) {
			return W(e, t, !0)
		},
		acceptData: function (e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
				return !1
			}
			var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), x.fn.extend({
		data: function (e, n) {
			var r, i, o = null,
				a = 0,
				s = this[0];
			if (e === t) {
				if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
					for (r = s.attributes; r.length > a; a++) {
						i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]))
					}
					x._data(s, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function () {
				x.data(this, e)
			}) : arguments.length > 1 ? this.each(function () {
				x.data(this, e, n)
			}) : s ? $(s, e, x.data(s, e)) : null
		},
		removeData: function (e) {
			return this.each(function () {
				x.removeData(this, e)
			})
		}
	});

	function $(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(P, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
				} catch (o) {}
				x.data(e, n, r)
			} else {
				r = t
			}
		}
		return r
	}

	function I(e) {
		var t;
		for (t in e) {
			if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) {
				return !1
			}
		}
		return !0
	}
	x.extend({
		queue: function (e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = x._queueHooks(e, t),
				a = function () {
					x.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return x._data(e, n) || x._data(e, n, {
				empty: x.Callbacks("once memory").add(function () {
					x._removeData(e, t + "queue"), x._removeData(e, n)
				})
			})
		}
	}), x.fn.extend({
		queue: function (e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
				var t = x.queue(this, e, n);
				x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				x.dequeue(this, e)
			})
		},
		delay: function (e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
				var r = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, n) {
			var r, i = 1,
				o = x.Deferred(),
				a = this,
				s = this.length,
				l = function () {
					--i || o.resolveWith(a, [a])
				};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--) {
				r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l))
			}
			return l(), o.promise(n)
		}
	});
	var z, X, U = /[\t\r\n\f]/g,
		V = /\r/g,
		Y = /^(?:input|select|textarea|button|object)$/i,
		J = /^(?:a|area)$/i,
		G = /^(?:checked|selected)$/i,
		Q = x.support.getSetAttribute,
		K = x.support.input;
	x.fn.extend({
		attr: function (e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				x.removeAttr(this, e)
			})
		},
		prop: function (e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			return e = x.propFix[e] || e, this.each(function () {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function (e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if (x.isFunction(e)) {
				return this.each(function (t) {
					x(this).addClass(e.call(this, t, this.className))
				})
			}
			if (l) {
				for (t = (e || "").match(T) || []; s > a; a++) {
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
						o = 0;
						while (i = t[o++]) {
							0 > r.indexOf(" " + i + " ") && (r += i + " ")
						}
						n.className = x.trim(r)
					}
				}
			}
			return this
		},
		removeClass: function (e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e)) {
				return this.each(function (t) {
					x(this).removeClass(e.call(this, t, this.className))
				})
			}
			if (l) {
				for (t = (e || "").match(T) || []; s > a; a++) {
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
						o = 0;
						while (i = t[o++]) {
							while (r.indexOf(" " + i + " ") >= 0) {
								r = r.replace(" " + i + " ", " ")
							}
						}
						n.className = e ? x.trim(r) : ""
					}
				}
			}
			return this
		},
		toggleClass: function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function () {
				if ("string" === n) {
					var t, r = 0,
						o = x(this),
						a = e.match(T) || [];
					while (t = a[r++]) {
						o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
					}
				} else {
					(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
				}
			})
		},
		hasClass: function (e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; r > n; n++) {
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) {
					return !0
				}
			}
			return !1
		},
		val: function (e) {
			var n, r, i, o = this[0];
			if (arguments.length) {
				return i = x.isFunction(e), this.each(function (n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
						return null == e ? "" : e + ""
					})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				})
			}
			if (o) {
				return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
			}
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = x.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function (e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						a = o ? null : [],
						s = o ? i + 1 : r.length,
						l = 0 > i ? s : o ? i : 0;
					for (; s > l; l++) {
						if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if (t = x(n).val(), o) {
								return t
							}
							a.push(t)
						}
					}
					return a
				},
				set: function (e, t) {
					var n, r, i = e.options,
						o = x.makeArray(t),
						a = i.length;
					while (a--) {
						r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0)
					}
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function (e, n, r) {
			var o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) {
				return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
			}
		},
		removeAttr: function (e, t) {
			var n, r, i = 0,
				o = t && t.match(T);
			if (o && 1 === e.nodeType) {
				while (n = o[i++]) {
					r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
				}
			}
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) {
				return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
			}
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = x.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), X = {
		set: function (e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
		var r = x.expr.attrHandle[n] || x.find.attr;
		x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
			var o = x.expr.attrHandle[n],
				a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return x.expr.attrHandle[n] = o, a
		} : function (e, n, r) {
			return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), K && Q || (x.attrHooks.value = {
		set: function (e, n, r) {
			return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
		}
	}), Q || (z = {
		set: function (e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, x.valHooks.button = {
		get: function (e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		},
		set: z.set
	}, x.attrHooks.contenteditable = {
		set: function (e, t, n) {
			z.set(e, "" === t ? !1 : t, n)
		}
	}, x.each(["width", "height"], function (e, n) {
		x.attrHooks[n] = {
			set: function (e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		}
	})), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
		x.propHooks[t] = {
			get: function (e) {
				return e.getAttribute(t, 4)
			}
		}
	}), x.support.style || (x.attrHooks.style = {
		get: function (e) {
			return e.style.cssText || t
		},
		set: function (e, t) {
			return e.style.cssText = t + ""
		}
	}), x.support.optSelected || (x.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		x.propFix[this.toLowerCase()] = this
	}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
		x.valHooks[this] = {
			set: function (e, n) {
				return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
			}
		}, x.support.checkOn || (x.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}

	function ot() {
		return !1
	}

	function at() {
		try {
			return a.activeElement
		} catch (e) {}
	}
	x.event = {
		global: {},
		add: function (e, n, r, o, a) {
			var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
			if (v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
					return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
				}, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
				while (u--) {
					s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
						type: g,
						origType: y,
						data: o,
						handler: r,
						guid: r.guid,
						selector: a,
						needsContext: a && x.expr.match.needsContext.test(a),
						namespace: m.join(".")
					}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0)
				}
				e = null
			}
		},
		remove: function (e, t, n, r, i) {
			var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
			if (m && (c = m.events)) {
				t = (t || "").match(T) || [""], u = t.length;
				while (u--) {
					if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
						while (o--) {
							a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a))
						}
						l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
					} else {
						for (d in c) {
							x.event.remove(e, d + t[u], n, r, !0)
						}
					}
				}
				x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
			}
		},
		trigger: function (n, r, i, o) {
			var s, l, u, c, p, f, d, h = [i || a],
				g = v.call(n, "type") ? n.type : n,
				m = v.call(n, "namespace") ? n.namespace.split(".") : [];
			if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if (!o && !p.noBubble && !x.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
						h.push(u), f = u
					}
					f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
				}
				d = 0;
				while ((u = h[d++]) && !n.isPropagationStopped()) {
					n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault()
				}
				if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
					f = i[l], f && (i[l] = null), x.event.triggered = g;
					try {
						i[g]()
					} catch (y) {}
					x.event.triggered = t, f && (i[l] = f)
				}
				return n.result
			}
		},
		dispatch: function (e) {
			e = x.event.fix(e);
			var n, r, i, o, a, s = [],
				l = g.call(arguments),
				u = (x._data(this, "events") || {})[e.type] || [],
				c = x.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u), n = 0;
				while ((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;
					while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
						(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
					}
				}
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function (e, n) {
			var r, i, o, a, s = [],
				l = n.delegateCount,
				u = e.target;
			if (l && u.nodeType && (!e.button || "click" !== e.type)) {
				for (; u != this; u = u.parentNode || this) {
					if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
						for (o = [], a = 0; l > a; a++) {
							i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i)
						}
						o.length && s.push({
							elem: u,
							handlers: o
						})
					}
				}
			}
			return n.length > l && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function (e) {
			if (e[x.expando]) {
				return e
			}
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
			while (t--) {
				n = r[t], e[n] = o[n]
			}
			return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (e, n) {
				var r, i, o, s = n.button,
					l = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== at() && this.focus) {
						try {
							return this.focus(), !1
						} catch (e) {}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === at() && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				},
				_default: function (e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function (e, t, n, r) {
			var i = x.extend(new x.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, x.removeEvent = a.removeEventListener ? function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function (e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, x.Event = function (e, n) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
	}, x.Event.prototype = {
		isDefaultPrevented: ot,
		isPropagationStopped: ot,
		isImmediatePropagationStopped: ot,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, x.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function (e, t) {
		x.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), x.support.submitBubbles || (x.event.special.submit = {
		setup: function () {
			return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
				var n = e.target,
					r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
				r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
					e._submit_bubble = !0
				}), x._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function (e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function () {
			return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
		}
	}), x.support.changeBubbles || (x.event.special.change = {
		setup: function () {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), x.event.add(this, "click._change", function (e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
			})), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
				var t = e.target;
				Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
					!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
				}), x._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function (e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function () {
			return x.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), x.support.focusinBubbles || x.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var n = 0,
			r = function (e) {
				x.event.simulate(t, e.target, x.event.fix(e), !0)
			};
		x.event.special[t] = {
			setup: function () {
				0 === n++ && a.addEventListener(e, r, !0)
			},
			teardown: function () {
				0 === --n && a.removeEventListener(e, r, !0)
			}
		}
	}), x.fn.extend({
		on: function (e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e) {
					this.on(a, n, r, e[a], o)
				}
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
				i = ot
			} else {
				if (!i) {
					return this
				}
			}
			return 1 === o && (s = i, i = function (e) {
				return x().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
				x.event.add(this, e, i, r, n)
			})
		},
		one: function (e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function (e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) {
				return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
			}
			if ("object" == typeof e) {
				for (o in e) {
					this.off(o, n, e[o])
				}
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
				x.event.remove(this, e, r, n)
			})
		},
		trigger: function (e, t) {
			return this.each(function () {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, n) {
			var r = this[0];
			return r ? x.event.trigger(e, n, r, !0) : t
		}
	});
	var st = /^.[^:#\[\.,]*$/,
		lt = /^(?:parents|prev(?:Until|All))/,
		ut = x.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	x.fn.extend({
		find: function (e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) {
				return this.pushStack(x(e).filter(function () {
					for (t = 0; i > t; t++) {
						if (x.contains(r[t], this)) {
							return !0
						}
					}
				}))
			}
			for (t = 0; i > t; t++) {
				x.find(e, r[t], n)
			}
			return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function (e) {
			var t, n = x(e, this),
				r = n.length;
			return this.filter(function () {
				for (t = 0; r > t; t++) {
					if (x.contains(this, n[t])) {
						return !0
					}
				}
			})
		},
		not: function (e) {
			return this.pushStack(ft(this, e || [], !0))
		},
		filter: function (e) {
			return this.pushStack(ft(this, e || [], !1))
		},
		is: function (e) {
			return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
		},
		closest: function (e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for (; i > r; r++) {
				for (n = this[r]; n && n !== t; n = n.parentNode) {
					if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
				}
			}
			return this.pushStack(o.length > 1 ? x.unique(o) : o)
		},
		index: function (e) {
			return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
				r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function pt(e, t) {
		do {
			e = e[t]
		} while (e && 1 !== e.nodeType);
		return e
	}
	x.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next: function (e) {
			return pt(e, "nextSibling")
		},
		prev: function (e) {
			return pt(e, "previousSibling")
		},
		nextAll: function (e) {
			return x.dir(e, "nextSibling")
		},
		prevAll: function (e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings: function (e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return x.sibling(e.firstChild)
		},
		contents: function (e) {
			return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
		}
	}, function (e, t) {
		x.fn[e] = function (n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), x.extend({
		filter: function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		},
		dir: function (e, n, r) {
			var i = [],
				o = e[n];
			while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
				1 === o.nodeType && i.push(o), o = o[n]
			}
			return i
		},
		sibling: function (e, t) {
			var n = [];
			for (; e; e = e.nextSibling) {
				1 === e.nodeType && e !== t && n.push(e)
			}
			return n
		}
	});

	function ft(e, t, n) {
		if (x.isFunction(t)) {
			return x.grep(e, function (e, r) {
				return !!t.call(e, r, e) !== n
			})
		}
		if (t.nodeType) {
			return x.grep(e, function (e) {
				return e === t !== n
			})
		}
		if ("string" == typeof t) {
			if (st.test(t)) {
				return x.filter(t, e, n)
			}
			t = x.filter(t, e)
		}
		return x.grep(e, function (e) {
			return x.inArray(e, t) >= 0 !== n
		})
	}

	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement) {
			while (t.length) {
				n.createElement(t.pop())
			}
		}
		return n
	}
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Ct = /^(?:checkbox|radio)$/i,
		Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],

			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		jt = dt(a),
		Dt = jt.appendChild(a.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
		text: function (e) {
			return x.access(this, function (e) {
				return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function (e, t) {
			var n, r = e ? x.filter(e, this) : this,
				i = 0;
			for (; null != (n = r[i]); i++) {
				t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n))
			}
			return this
		},
		empty: function () {
			var e, t = 0;
			for (; null != (e = this[t]); t++) {
				1 === e.nodeType && x.cleanData(Ft(e, !1));
				while (e.firstChild) {
					e.removeChild(e.firstChild)
				}
				e.options && x.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function (e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
				return x.clone(this, e, t)
			})
		},
		html: function (e) {
			return x.access(this, function (e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) {
					return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
				}
				if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; i > r; r++) {
							n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e)
						}
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var e = x.map(this, function (e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function (n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function (e) {
			return this.remove(e, !0)
		},
		domManip: function (e, t, n) {
			e = d.apply([], e);
			var r, i, o, a, s, l, u = 0,
				c = this.length,
				p = this,
				f = c - 1,
				h = e[0],
				g = x.isFunction(h);
			if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) {
				return this.each(function (r) {
					var i = p.eq(r);
					g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
				})
			}
			if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
					i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u)
				}
				if (o) {
					for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
						i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")))
					}
				}
				l = r = null
			}
			return this
		}
	});

	function Lt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Ht(e) {
		return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
	}

	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function _t(e, t) {
		var n, r = 0;
		for (; null != (n = e[r]); r++) {
			x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
		}
	}

	function Mt(e, t) {
		if (1 === t.nodeType && x.hasData(e)) {
			var n, r, i, o = x._data(e),
				a = x._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s) {
					for (r = 0, i = s[n].length; i > r; r++) {
						x.event.add(t, n, s[n][r])
					}
				}
			}
			a.data && (a.data = x.extend({}, a.data))
		}
	}

	function Ot(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
				i = x._data(t);
				for (r in i.events) {
					x.removeEvent(t, r, i.handle)
				}
				t.removeAttribute(x.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	x.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t) {
		x.fn[e] = function (e) {
			var n, r = 0,
				i = [],
				o = x(e),
				a = o.length - 1;
			for (; a >= r; r++) {
				n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get())
			}
			return this.pushStack(i)
		}
	});

	function Ft(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s) {
			for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
				!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n))
			}
		}
		return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
	}

	function Bt(e) {
		Ct.test(e.type) && (e.defaultChecked = e.checked)
	}
	x.extend({
		clone: function (e, t, n) {
			var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
			if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) {
				for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
					r[a] && Ot(i, r[a])
				}
			}
			if (t) {
				if (n) {
					for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
						Mt(i, r[a])
					}
				} else {
					Mt(e, o)
				}
			}
			return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
		},
		buildFragment: function (e, t, n, r) {
			var i, o, a, s, l, u, c, p = e.length,
				f = dt(t),
				d = [],
				h = 0;
			for (; p > h; h++) {
				if (o = e[h], o || 0 === o) {
					if ("object" === x.type(o)) {
						x.merge(d, o.nodeType ? [o] : o)
					} else {
						if (wt.test(o)) {
							s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
							while (i--) {
								s = s.lastChild
							}
							if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
								o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
								while (i--) {
									x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
								}
							}
							x.merge(d, s.childNodes), s.textContent = "";
							while (s.firstChild) {
								s.removeChild(s.firstChild)
							}
							s = f.lastChild
						} else {
							d.push(t.createTextNode(o))
						}
					}
				}
			}
			s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
			while (o = d[h++]) {
				if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
					i = 0;
					while (o = s[i++]) {
						kt.test(o.type || "") && n.push(o)
					}
				}
			}
			return s = null, f
		},
		cleanData: function (e, t) {
			var n, r, o, a, s = 0,
				l = x.expando,
				u = x.cache,
				c = x.support.deleteExpando,
				f = x.event.special;
			for (; null != (n = e[s]); s++) {
				if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
					if (a.events) {
						for (r in a.events) {
							f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle)
						}
					}
					u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
				}
			}
		},
		_evalUrl: function (e) {
			return x.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), x.fn.extend({
		wrapAll: function (e) {
			if (x.isFunction(e)) {
				return this.each(function (t) {
					x(this).wrapAll(e.call(this, t))
				})
			}
			if (this[0]) {
				var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					var e = this;
					while (e.firstChild && 1 === e.firstChild.nodeType) {
						e = e.firstChild
					}
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function (e) {
			return x.isFunction(e) ? this.each(function (t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = x(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = x.isFunction(e);
			return this.each(function (n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + w + ")(.*)$", "i"),
		Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + w + ")", "i"),
		Gt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e) {
			return t
		}
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = en.length;
		while (i--) {
			if (t = en[i] + n, t in e) {
				return t
			}
		}
		return r
	}

	function nn(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}

	function rn(e, t) {
		var n, r, i, o = [],
			a = 0,
			s = e.length;
		for (; s > a; a++) {
			r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))))
		}
		for (a = 0; s > a; a++) {
			r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
		}
		return e
	}
	x.fn.extend({
		css: function (e, n) {
			return x.access(this, function (e, n, r) {
				var i, o, a = {},
					s = 0;
				if (x.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++) {
						a[n[s]] = x.css(e, n[s], !1, o)
					}
					return a
				}
				return r !== t ? x.style(e, n, r) : x.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function () {
			return rn(this, !0)
		},
		hide: function () {
			return rn(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				nn(this) ? x(this).show() : x(this).hide()
			})
		}
	}), x.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": x.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = x.camelCase(n),
					u = e.style;
				if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) {
					return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]
				}
				if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
					try {
						u[n] = r
					} catch (c) {}
				}
			}
		},
		css: function (e, n, r, i) {
			var o, a, s, l = x.camelCase(n);
			return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
		}
	}), e.getComputedStyle ? (Rt = function (t) {
		return e.getComputedStyle(t, null)
	}, Wt = function (e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	}) : a.documentElement.currentStyle && (Rt = function (e) {
		return e.currentStyle
	}, Wt = function (e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s[n] : t,
			u = e.style;
		return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	});

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			a = 0;
		for (; 4 > o; o += 2) {
			"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)))
		}
		return a
	}

	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) {
				return i
			}
			r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function ln(e) {
		var t = a,
			n = Gt[e];
		return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
	}

	function un(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
			r = x.css(n[0], "display");
		return n.remove(), r
	}
	x.each(["height", "width"], function (e, n) {
		x.cssHooks[n] = {
			get: function (e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function (e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), x.support.opacity || (x.cssHooks.opacity = {
		get: function (e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function (e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), x(function () {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
			get: function (e, n) {
				return n ? x.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
			x.cssHooks[n] = {
				get: function (e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
	}, x.expr.filters.visible = function (e) {
		return !x.expr.filters.hidden(e)
	}), x.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		x.cssHooks[e + t] = {
			expand: function (n) {
				var r = 0,
					i = {},
					o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++) {
					i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
				}
				return i
			}
		}, Ut.test(e) || (x.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize: function () {
			return x.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
			}).map(function (e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), x.param = function (e, n) {
		var r, i = [],
			o = function (e, t) {
				t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) {
			x.each(e, function () {
				o(this.name, this.value)
			})
		} else {
			for (r in e) {
				gn(r, e[r], n, o)
			}
		}
		return i.join("&").replace(cn, "+")
	};

	function gn(e, t, n, r) {
		var i;
		if (x.isArray(t)) {
			x.each(t, function (t, i) {
				n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
			})
		} else {
			if (n || "object" !== x.type(t)) {
				r(e, t)
			} else {
				for (i in t) {
					gn(e + "[" + i + "]", t[i], n, r)
				}
			}
		}
	}
	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		x.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), x.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var mn, yn, vn = x.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Nn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = x.fn.load,
		An = {},
		jn = {},
		Dn = "*/".concat("*");
	try {
		yn = o.href
	} catch (Ln) {
		yn = a.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];

	function Hn(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(T) || [];
			if (x.isFunction(n)) {
				while (r = o[i++]) {
					"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
				}
			}
		}
	}

	function qn(e, n, r, i) {
		var o = {},
			a = e === jn;

		function s(l) {
			var u;
			return o[l] = !0, x.each(e[l] || [], function (e, l) {
				var c = l(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), u
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}

	function _n(e, n) {
		var r, i, o = x.ajaxSettings.flatOptions || {};
		for (i in n) {
			n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
		}
		return r && x.extend(!0, e, r), e
	}
	x.fn.load = function (e, n, r) {
		if ("string" != typeof e && Sn) {
			return Sn.apply(this, arguments)
		}
		var i, o, a, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function (e) {
			o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
		}).complete(r && function (e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		x.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Cn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": x.parseJSON,
				"text xml": x.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function (e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
				h = x.Deferred(),
				g = x.Callbacks("once memory"),
				m = p.statusCode || {},
				y = {},
				v = {},
				b = 0,
				w = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (2 === b) {
							if (!c) {
								c = {};
								while (t = Tn.exec(a)) {
									c[t[1].toLowerCase()] = t[2]
								}
							}
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return 2 === b ? a : null
					},
					setRequestHeader: function (e, t) {
						var n = e.toLowerCase();
						return b || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function (e) {
						return b || (p.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e) {
							if (2 > b) {
								for (t in e) {
									m[t] = [m[t], e[t]]
								}
							} else {
								C.always(e[C.status])
							}
						}
						return this
					},
					abort: function (e) {
						var t = e || w;
						return u && u.abort(t), k(0, t), this
					}
				};
			if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) {
				return C
			}
			l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for (i in p.headers) {
				C.setRequestHeader(i, p.headers[i])
			}
			if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) {
				return C.abort()
			}
			w = "abort";
			for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) {
				C[i](p[i])
			}
			if (u = qn(jn, p, n, C)) {
				C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
					C.abort("timeout")
				}, p.timeout));
				try {
					b = 1, u.send(y, k)
				} catch (N) {
					if (!(2 > b)) {
						throw N
					}
					k(-1, N)
				}
			} else {
				k(-1, "No Transport")
			}

			function k(e, n, r, i) {
				var c, y, v, w, T, N = n;
				2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
			}
			return C
		},
		getJSON: function (e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript: function (e, n) {
			return x.get(e, t, n, "script")
		}
	}), x.each(["get", "post"], function (e, n) {
		x[n] = function (e, r, i, o) {
			return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	});

	function Mn(e, n, r) {
		var i, o, a, s, l = e.contents,
			u = e.dataTypes;
		while ("*" === u[0]) {
			u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
		}
		if (o) {
			for (s in l) {
				if (l[s] && l[s].test(o)) {
					u.unshift(s);
					break
				}
			}
		}
		if (u[0] in r) {
			a = u[0]
		} else {
			for (s in r) {
				if (!u[0] || e.converters[s + " " + u[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== u[0] && u.unshift(a), r[a]) : t
	}

	function On(e, t, n, r) {
		var i, o, a, s, l, u = {},
			c = e.dataTypes.slice();
		if (c[1]) {
			for (a in e.converters) {
				u[a.toLowerCase()] = e.converters[a]
			}
		}
		o = c.shift();
		while (o) {
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) {
				if ("*" === o) {
					o = l
				} else {
					if ("*" !== l && l !== o) {
						if (a = u[l + " " + o] || u["* " + o], !a) {
							for (i in u) {
								if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
									a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
									break
								}
							}
						}
						if (a !== !0) {
							if (a && e["throws"]) {
								t = a(t)
							} else {
								try {
									t = a(t)
								} catch (p) {
									return {
										state: "parsererror",
										error: a ? p : "No conversion from " + l + " to " + o
									}
								}
							}
						}
					}
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	x.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function (e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), x.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var n, r = a.head || x("head")[0] || a.documentElement;
			return {
				send: function (t, i) {
					n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function () {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Fn = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Fn.pop() || x.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function (n, r, i) {
		var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
			return s || x.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
			s = arguments
		}, i.always(function () {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject && function () {
			var e;
			for (e in Pn) {
				Pn[e](t, !0)
			}
		};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	x.ajaxSettings.xhr = e.ActiveXObject ? function () {
		return !this.isLocal && In() || zn()
	} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
		if (!n.crossDomain || x.support.cors) {
			var r;
			return {
				send: function (i, o) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) {
						for (s in n.xhrFields) {
							l[s] = n.xhrFields[s]
						}
					}
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) {
							l.setRequestHeader(s, i[s])
						}
					} catch (u) {}
					l.send(n.hasContent && n.data || null), r = function (e, i) {
						var s, u, c, p;
						try {
							if (r && (i || 4 === l.readyState)) {
								if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) {
									4 !== l.readyState && l.abort()
								} else {
									p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
									try {
										c = l.statusText
									} catch (f) {
										c = ""
									}
									s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
								}
							}
						} catch (d) {
							i || o(-1, d)
						}
						p && o(s, c, p, u)
					}, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
				},
				abort: function () {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [nr],
		Qn = {
			"*": [function (e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Yn.exec(t),
					o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
					a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do {
						s = s || ".5", a /= s, x.style(n.elem, e, a + o)
					} while (s !== (s = n.cur() / r) && 1 !== s && --l)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};

	function Kn() {
		return setTimeout(function () {
			Xn = t
		}), Xn = x.now()
	}

	function Zn(e, t, n) {
		var r, i = (Qn[t] || []).concat(Qn["*"]),
			o = 0,
			a = i.length;
		for (; a > o; o++) {
			if (r = i[o].call(n, t, e)) {
				return r
			}
		}
	}

	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = x.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (i) {
					return !1
				}
				var t = Xn || Kn(),
					n = Math.max(0, u.startTime + u.duration - t),
					r = n / u.duration || 0,
					o = 1 - r,
					a = 0,
					l = u.tweens.length;
				for (; l > a; a++) {
					u.tweens[a].run(o)
				}
				return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: x.extend({}, t),
				opts: x.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function (t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if (i) {
						return this
					}
					for (i = !0; r > n; n++) {
						u.tweens[n].run(1)
					}
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (tr(c, u.opts.specialEasing); a > o; o++) {
			if (r = Gn[o].call(u, e, c, u.opts)) {
				return r
			}
		}
		return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function tr(e, t) {
		var n, r, i, o, a;
		for (n in e) {
			if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) {
					n in e || (e[n] = o[n], t[n] = i)
				}
			} else {
				t[r] = i
			}
		}
	}
	x.Animation = x.extend(er, {
		tweener: function (e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for (; i > r; r++) {
				n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
			}
		},
		prefilter: function (e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});

	function nr(e, t, n) {
		var r, i, o, a, s, l, u = this,
			c = {},
			p = e.style,
			f = e.nodeType && nn(e),
			d = x._data(e, "fxshow");
		n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
			s.unqueued || l()
		}), s.unqueued++, u.always(function () {
			u.always(function () {
				s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t) {
			if (i = t[r], Vn.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
					continue
				}
				c[r] = d && d[r] || x.style(e, r)
			}
		}
		if (!x.isEmptyObject(c)) {
			d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
				x(e).hide()
			}), u.done(function () {
				var t;
				x._removeData(e, "fxshow");
				for (t in c) {
					x.style(e, t, c[t])
				}
			});
			for (r in c) {
				a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
			}
		}
	}

	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	x.Tween = rr, rr.prototype = {
		constructor: rr,
		init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function (e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.each(["toggle", "show", "hide"], function (e, t) {
		var n = x.fn[t];
		x.fn[t] = function (e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), x.fn.extend({
		fadeTo: function (e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function (e, t, n, r) {
			var i = x.isEmptyObject(e),
				o = x.speed(t, n, r),
				a = function () {
					var t = er(this, x.extend({}, e), o);
					(i || x._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function (e, n, r) {
			var i = function (e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = x.timers,
					a = x._data(this);
				if (n) {
					a[n] && a[n].stop && i(a[n])
				} else {
					for (n in a) {
						a[n] && a[n].stop && Jn.test(n) && i(a[n])
					}
				}
				for (n = o.length; n--;) {
					o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1))
				}(t || !r) && x.dequeue(this, e)
			})
		},
		finish: function (e) {
			return e !== !1 && (e = e || "fx"), this.each(function () {
				var t, n = x._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = x.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
					o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
				}
				for (t = 0; a > t; t++) {
					r[t] && r[t].finish && r[t].finish.call(this)
				}
				delete n.finish
			})
		}
	});

	function ir(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
			n = Zt[i], r["margin" + n] = r["padding" + n] = e
		}
		return t && (r.opacity = r.width = e), r
	}
	x.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, t) {
		x.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), x.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete: n || !n && t || x.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
		}, r
	}, x.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return 0.5 - Math.cos(e * Math.PI) / 2
		}
	}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
		var e, n = x.timers,
			r = 0;
		for (Xn = x.now(); n.length > r; r++) {
			e = n[r], e() || n[r] !== e || n.splice(r--, 1)
		}
		n.length || x.fx.stop(), Xn = t
	}, x.fx.timer = function (e) {
		e() && x.timers.push(e) && x.fx.start()
	}, x.fx.interval = 13, x.fx.start = function () {
		Un || (Un = setInterval(x.fx.tick, x.fx.interval))
	}, x.fx.stop = function () {
		clearInterval(Un), Un = null
	}, x.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
		return x.grep(x.timers, function (t) {
			return e === t.elem
		}).length
	}), x.fn.offset = function (e) {
		if (arguments.length) {
			return e === t ? this : this.each(function (t) {
				x.offset.setOffset(this, e, t)
			})
		}
		var n, r, o = {
				top: 0,
				left: 0
			},
			a = this[0],
			s = a && a.ownerDocument;
		if (s) {
			return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
				top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
				left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
			}) : o
		}
	}, x.offset = {
		setOffset: function (e, t, n) {
			var r = x.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = x(e),
				o = i.offset(),
				a = x.css(e, "top"),
				s = x.css(e, "left"),
				l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
				u = {},
				c = {},
				p, f;
			l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
		}
	}, x.fn.extend({
		position: function () {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					r = this[0];
				return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - x.css(r, "marginTop", !0),
					left: t.left - n.left - x.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent || s;
				while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
					e = e.offsetParent
				}
				return e || s
			})
		}
	}), x.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, n) {
		var r = /Y/.test(n);
		x.fn[e] = function (i) {
			return x.access(this, function (e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});

	function or(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	x.each({
		Height: "height",
		Width: "width"
	}, function (e, n) {
		x.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function (r, i) {
			x.fn[i] = function (i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return x.access(this, function (n, r, i) {
					var o;
					return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), x.fn.size = function () {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
		return x
	}))
})(window);
(function (e, t) {
	function i(t, i) {
		var s, a, o, r = t.nodeName.toLowerCase();
		return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
	}

	function n(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	var s = 0,
		a = /^ui-id-\d+$/;
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.10.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		focus: function (t) {
			return function (i, n) {
				return "number" == typeof i ? this.each(function () {
					var t = this;
					setTimeout(function () {
						e(t).focus(), n && n.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		scrollParent: function () {
			var t;
			return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function () {
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function (i) {
			if (i !== t) {
				return this.css("zIndex", i)
			}
			if (this.length) {
				for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
					if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) {
						return s
					}
					a = a.parent()
				}
			}
			return 0
		},
		uniqueId: function () {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++s)
			})
		},
		removeUniqueId: function () {
			return this.each(function () {
				a.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
			return function (i) {
				return !!e.data(i, t)
			}
		}) : function (t, i, n) {
			return !!e.data(t, n[3])
		},
		focusable: function (t) {
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function (t) {
			var n = e.attr(t, "tabindex"),
				s = isNaN(n);
			return (s || n >= 0) && i(t, !s)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
		function s(t, i, n, s) {
			return e.each(a, function () {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
			o = n.toLowerCase(),
			r = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + n] = function (i) {
			return i === t ? r["inner" + n].call(this) : this.each(function () {
				e(this).css(o, s(this, i) + "px")
			})
		}, e.fn["outer" + n] = function (t, i) {
			return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
				e(this).css(o, s(this, t, !0, i) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function (e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
		return function (i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
		disableSelection: function () {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
				e.preventDefault()
			})
		},
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function (t, i, n) {
				var s, a = e.ui[t].prototype;
				for (s in n) {
					a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
				}
			},
			call: function (e, t, i) {
				var n, s = e.plugins[t];
				if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) {
					for (n = 0; s.length > n; n++) {
						e.options[s[n][0]] && s[n][1].apply(e.element, i)
					}
				}
			}
		},
		hasScroll: function (t, i) {
			if ("hidden" === e(t).css("overflow")) {
				return !1
			}
			var n = i && "left" === i ? "scrollLeft" : "scrollTop",
				s = !1;
			return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
		}
	})
})(jQuery);
(function (t, e) {
	var i = 0,
		s = Array.prototype.slice,
		n = t.cleanData;
	t.cleanData = function (e) {
		for (var i, s = 0; null != (i = e[s]); s++) {
			try {
				t(i).triggerHandler("remove")
			} catch (o) {}
		}
		n(e)
	}, t.widget = function (i, s, n) {
		var o, a, r, h, l = {},
			c = i.split(".")[0];
		i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
			return !!t.data(e, o)
		}, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) {
			return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
		}, t.extend(r, a, {
			version: n.version,
			_proto: t.extend({}, n),
			_childConstructors: []
		}), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) {
			return t.isFunction(n) ? (l[i] = function () {
				var t = function () {
						return s.prototype[i].apply(this, arguments)
					},
					e = function (t) {
						return s.prototype[i].apply(this, t)
					};
				return function () {
					var i, s = this._super,
						o = this._superApply;
					return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
				}
			}(), e) : (l[i] = n, e)
		}), r.prototype = t.widget.extend(h, {
			widgetEventPrefix: a ? h.widgetEventPrefix || i : i
		}, l, {
			constructor: r,
			namespace: c,
			widgetName: i,
			widgetFullName: o
		}), a ? (t.each(a._childConstructors, function (e, i) {
			var s = i.prototype;
			t.widget(s.namespace + "." + s.widgetName, r, i._proto)
		}), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
	}, t.widget.extend = function (i) {
		for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++) {
			for (n in a[r]) {
				o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o)
			}
		}
		return i
	}, t.widget.bridge = function (i, n) {
		var o = n.prototype.widgetFullName || i;
		t.fn[i] = function (a) {
			var r = "string" == typeof a,
				h = s.call(arguments, 1),
				l = this;
			return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
				var s, n = t.data(this, o);
				return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + a + "'")
			}) : this.each(function () {
				var e = t.data(this, o);
				e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
			}), l
		}
	}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (e, s) {
			s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (t) {
					t.target === s && this.destroy()
				}
			}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: t.noop,
		_getCreateEventData: t.noop,
		_create: t.noop,
		_init: t.noop,
		destroy: function () {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: t.noop,
		widget: function () {
			return this.element
		},
		option: function (i, s) {
			var n, o, a, r = i;
			if (0 === arguments.length) {
				return t.widget.extend({}, this.options)
			}
			if ("string" == typeof i) {
				if (r = {}, n = i.split("."), i = n.shift(), n.length) {
					for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++) {
						o[n[a]] = o[n[a]] || {}, o = o[n[a]]
					}
					if (i = n.pop(), 1 === arguments.length) {
						return o[i] === e ? null : o[i]
					}
					o[i] = s
				} else {
					if (1 === arguments.length) {
						return this.options[i] === e ? null : this.options[i]
					}
					r[i] = s
				}
			}
			return this._setOptions(r), this
		},
		_setOptions: function (t) {
			var e;
			for (e in t) {
				this._setOption(e, t[e])
			}
			return this
		},
		_setOption: function (t, e) {
			return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function () {
			return this._setOption("disabled", !1)
		},
		disable: function () {
			return this._setOption("disabled", !0)
		},
		_on: function (i, s, n) {
			var o, a = this;
			"boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
				function h() {
					return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
				}
				"string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
				var l = n.match(/^(\w+)\s*(.*)$/),
					c = l[1] + a.eventNamespace,
					u = l[2];
				u ? o.delegate(u, c, h) : s.bind(c, h)
			})
		},
		_off: function (t, e) {
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
		},
		_delay: function (t, e) {
			function i() {
				return ("string" == typeof t ? s[t] : t).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, e || 0)
		},
		_hoverable: function (e) {
			this.hoverable = this.hoverable.add(e), this._on(e, {
				mouseenter: function (e) {
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (e) {
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (e) {
			this.focusable = this.focusable.add(e), this._on(e, {
				focusin: function (e) {
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (e) {
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (e, i, s) {
			var n, o, a = this.options[e];
			if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) {
				for (n in o) {
					n in i || (i[n] = o[n])
				}
			}
			return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, t.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (e, i) {
		t.Widget.prototype["_" + e] = function (s, n, o) {
			"string" == typeof n && (n = {
				effect: n
			});
			var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
				t(this)[e](), o && o.call(s[0]), i()
			})
		}
	})
})(jQuery);
(function (t) {
	var e = !1;
	t(document).mouseup(function () {
		e = !1
	}), t.widget("ui.mouse", {
		version: "1.10.4",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function () {
			var e = this;
			this.element.bind("mousedown." + this.widgetName, function (t) {
				return e._mouseDown(t)
			}).bind("click." + this.widgetName, function (i) {
				return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
			}), this.started = !1
		},
		_mouseDestroy: function () {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function (i) {
			if (!e) {
				this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
				var s = this,
					n = 1 === i.which,
					a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
				return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
					s.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
					return s._mouseMove(t)
				}, this._mouseUpDelegate = function (t) {
					return s._mouseUp(t)
				}, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
			}
		},
		_mouseMove: function (e) {
			return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp: function (e) {
			return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
		},
		_mouseDistanceMet: function (t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function () {
			return this.mouseDelayMet
		},
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function () {
			return !0
		}
	})
})(jQuery);
(function (t, e) {
	function i(t, e, i) {
		return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
	}

	function s(e, i) {
		return parseInt(t.css(e, i), 10) || 0
	}

	function n(e) {
		var i = e[0];
		return 9 === i.nodeType ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: 0,
				left: 0
			}
		} : t.isWindow(i) ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: e.scrollTop(),
				left: e.scrollLeft()
			}
		} : i.preventDefault ? {
			width: 0,
			height: 0,
			offset: {
				top: i.pageY,
				left: i.pageX
			}
		} : {
			width: e.outerWidth(),
			height: e.outerHeight(),
			offset: e.offset()
		}
	}
	t.ui = t.ui || {};
	var a, o = Math.max,
		r = Math.abs,
		l = Math.round,
		h = /left|center|right/,
		c = /top|center|bottom/,
		u = /[\+\-]\d+(\.[\d]+)?%?/,
		d = /^\w+/,
		p = /%$/,
		f = t.fn.position;
	t.position = {
			scrollbarWidth: function () {
				if (a !== e) {
					return a
				}
				var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
					o = n.children()[0];
				return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
			},
			getScrollInfo: function (e) {
				var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
					s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
					n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
					a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
				return {
					width: a ? t.position.scrollbarWidth() : 0,
					height: n ? t.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function (e) {
				var i = t(e || window),
					s = t.isWindow(i[0]),
					n = !!i[0] && 9 === i[0].nodeType;
				return {
					element: i,
					isWindow: s,
					isDocument: n,
					offset: i.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: i.scrollLeft(),
					scrollTop: i.scrollTop(),
					width: s ? i.width() : i.outerWidth(),
					height: s ? i.height() : i.outerHeight()
				}
			}
		}, t.fn.position = function (e) {
			if (!e || !e.of) {
				return f.apply(this, arguments)
			}
			e = t.extend({}, e);
			var a, p, g, m, v, _, b = t(e.of),
				y = t.position.getWithinInfo(e.within),
				k = t.position.getScrollInfo(y),
				w = (e.collision || "flip").split(" "),
				D = {};
			return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function () {
				var t, i, s = (e[this] || "").split(" ");
				1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
			}), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function () {
				var n, h, c = t(this),
					u = c.outerWidth(),
					d = c.outerHeight(),
					f = s(this, "marginLeft"),
					_ = s(this, "marginTop"),
					x = u + f + s(this, "marginRight") + k.width,
					C = d + _ + s(this, "marginBottom") + k.height,
					M = t.extend({}, v),
					T = i(D.my, c.outerWidth(), c.outerHeight());
				"right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {
					marginLeft: f,
					marginTop: _
				}, t.each(["left", "top"], function (i, s) {
					t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {
						targetWidth: p,
						targetHeight: g,
						elemWidth: u,
						elemHeight: d,
						collisionPosition: n,
						collisionWidth: x,
						collisionHeight: C,
						offset: [a[0] + T[0], a[1] + T[1]],
						my: e.my,
						at: e.at,
						within: y,
						elem: c
					})
				}), e.using && (h = function (t) {
					var i = m.left - M.left,
						s = i + p - u,
						n = m.top - M.top,
						a = n + g - d,
						l = {
							target: {
								element: b,
								left: m.left,
								top: m.top,
								width: p,
								height: g
							},
							element: {
								element: c,
								left: M.left,
								top: M.top,
								width: u,
								height: d
							},
							horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
							vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
						};
					u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
				}), c.offset(t.extend(M, {
					using: h
				}))
			})
		}, t.ui.position = {
			fit: {
				left: function (t, e) {
					var i, s = e.within,
						n = s.isWindow ? s.scrollLeft : s.offset.left,
						a = s.width,
						r = t.left - e.collisionPosition.marginLeft,
						l = n - r,
						h = r + e.collisionWidth - a - n;
					e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
				},
				top: function (t, e) {
					var i, s = e.within,
						n = s.isWindow ? s.scrollTop : s.offset.top,
						a = e.within.height,
						r = t.top - e.collisionPosition.marginTop,
						l = n - r,
						h = r + e.collisionHeight - a - n;
					e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
				}
			},
			flip: {
				left: function (t, e) {
					var i, s, n = e.within,
						a = n.offset.left + n.scrollLeft,
						o = n.width,
						l = n.isWindow ? n.scrollLeft : n.offset.left,
						h = t.left - e.collisionPosition.marginLeft,
						c = h - l,
						u = h + e.collisionWidth - o - l,
						d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
						p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
						f = -2 * e.offset[0];
					0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
				},
				top: function (t, e) {
					var i, s, n = e.within,
						a = n.offset.top + n.scrollTop,
						o = n.height,
						l = n.isWindow ? n.scrollTop : n.offset.top,
						h = t.top - e.collisionPosition.marginTop,
						c = h - l,
						u = h + e.collisionHeight - o - l,
						d = "top" === e.my[1],
						p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
						f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
						g = -2 * e.offset[1];
					0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
				}
			},
			flipfit: {
				left: function () {
					t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
				},
				top: function () {
					t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
				}
			}
		},
		function () {
			var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
				r = document.createElement("div");
			e = document.createElement(o ? "div" : "body"), s = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			}, o && t.extend(s, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			});
			for (a in s) {
				e.style[a] = s[a]
			}
			e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
		}()
})(jQuery);
(function (e) {
	var t = 0,
		i = {},
		a = {};
	i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show", e.widget("ui.accordion", {
		version: "1.10.4",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function () {
			var t = this.options;
			this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function () {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : e(),
				content: this.active.length ? this.active.next() : e()
			}
		},
		_createIcons: function () {
			var t = this.options.icons;
			t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function () {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function () {
			var e;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), "content" !== this.options.heightStyle && e.css("height", "")
		},
		_setOption: function (e, t) {
			return "active" === e ? (this._activate(t), undefined) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
		},
		_keydown: function (t) {
			if (!t.altKey && !t.ctrlKey) {
				var i = e.ui.keyCode,
					a = this.headers.length,
					s = this.headers.index(t.target),
					n = !1;
				switch (t.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						n = this.headers[(s + 1) % a];
						break;
					case i.LEFT:
					case i.UP:
						n = this.headers[(s - 1 + a) % a];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(t);
						break;
					case i.HOME:
						n = this.headers[0];
						break;
					case i.END:
						n = this.headers[a - 1]
				}
				n && (e(t.target).attr("tabIndex", -1), e(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
			}
		},
		_panelKeyDown: function (t) {
			t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
		},
		refresh: function () {
			var t = this.options;
			this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function () {
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
		},
		_refresh: function () {
			var i, a = this.options,
				s = a.heightStyle,
				n = this.element.parent(),
				r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t);
			this.active = this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (t) {
				var i = e(this),
					a = i.attr("id"),
					s = i.next(),
					n = s.attr("id");
				a || (a = r + "-header-" + t, i.attr("id", a)), n || (n = r + "-panel-" + t, s.attr("id", n)), i.attr("aria-controls", n), s.attr("aria-labelledby", a)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}).next().attr({
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}).next().attr({
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(a.event), "fill" === s ? (i = n.height(), this.element.siblings(":visible").each(function () {
				var t = e(this),
					a = t.css("position");
				"absolute" !== a && "fixed" !== a && (i -= t.outerHeight(!0))
			}), this.headers.each(function () {
				i -= e(this).outerHeight(!0)
			}), this.headers.next().each(function () {
				e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
			}).css("overflow", "auto")) : "auto" === s && (i = 0, this.headers.next().each(function () {
				i = Math.max(i, e(this).css("height", "").height())
			}).height(i))
		},
		_activate: function (t) {
			var i = this._findActive(t)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: e.noop
			}))
		},
		_findActive: function (t) {
			return "number" == typeof t ? this.headers.eq(t) : e()
		},
		_setupEvents: function (t) {
			var i = {
				keydown: "_keydown"
			};
			t && e.each(t.split(" "), function (e, t) {
				i[t] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function (t) {
			var i = this.options,
				a = this.active,
				s = e(t.currentTarget),
				n = s[0] === a[0],
				r = n && i.collapsible,
				o = r ? e() : s.next(),
				h = a.next(),
				d = {
					oldHeader: a,
					oldPanel: h,
					newHeader: r ? e() : s,
					newPanel: o
				};
			t.preventDefault(), n && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = n ? e() : s, this._toggle(d), a.removeClass("ui-accordion-header-active ui-state-active"), i.icons && a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), n || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function (t) {
			var i = t.newPanel,
				a = this.prevShow.length ? this.prevShow : t.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({
				"aria-hidden": "true"
			}), a.prev().attr("aria-selected", "false"), i.length && a.length ? a.prev().attr({
				tabIndex: -1,
				"aria-expanded": "false"
			}) : i.length && this.headers.filter(function () {
				return 0 === e(this).attr("tabIndex")
			}).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
				"aria-selected": "true",
				tabIndex: 0,
				"aria-expanded": "true"
			})
		},
		_animate: function (e, t, s) {
			var n, r, o, h = this,
				d = 0,
				c = e.length && (!t.length || e.index() < t.index()),
				l = this.options.animate || {},
				u = c && l.down || l,
				v = function () {
					h._toggleComplete(s)
				};
			return "number" == typeof u && (o = u), "string" == typeof u && (r = u), r = r || u.easing || l.easing, o = o || u.duration || l.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(i, {
				duration: o,
				easing: r,
				step: function (e, t) {
					t.now = Math.round(e)
				}
			}), e.hide().animate(a, {
				duration: o,
				easing: r,
				complete: v,
				step: function (e, i) {
					i.now = Math.round(e), "height" !== i.prop ? d += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - d), d = 0)
				}
			}), undefined) : t.animate(i, o, r, v) : e.animate(a, o, r, v)
		},
		_toggleComplete: function (e) {
			var t = e.oldPanel;
			t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
		}
	})
})(jQuery);
(function (e) {
	e.widget("ui.autocomplete", {
		version: "1.10.4",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		requestIndex: 0,
		pending: 0,
		_create: function () {
			var t, i, s, n = this.element[0].nodeName.toLowerCase(),
				a = "textarea" === n,
				o = "input" === n;
			this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
				keydown: function (n) {
					if (this.element.prop("readOnly")) {
						return t = !0, s = !0, i = !0, undefined
					}
					t = !1, s = !1, i = !1;
					var a = e.ui.keyCode;
					switch (n.keyCode) {
						case a.PAGE_UP:
							t = !0, this._move("previousPage", n);
							break;
						case a.PAGE_DOWN:
							t = !0, this._move("nextPage", n);
							break;
						case a.UP:
							t = !0, this._keyEvent("previous", n);
							break;
						case a.DOWN:
							t = !0, this._keyEvent("next", n);
							break;
						case a.ENTER:
						case a.NUMPAD_ENTER:
							this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
							break;
						case a.TAB:
							this.menu.active && this.menu.select(n);
							break;
						case a.ESCAPE:
							this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
							break;
						default:
							i = !0, this._searchTimeout(n)
					}
				},
				keypress: function (s) {
					if (t) {
						return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined
					}
					if (!i) {
						var n = e.ui.keyCode;
						switch (s.keyCode) {
							case n.PAGE_UP:
								this._move("previousPage", s);
								break;
							case n.PAGE_DOWN:
								this._move("nextPage", s);
								break;
							case n.UP:
								this._keyEvent("previous", s);
								break;
							case n.DOWN:
								this._keyEvent("next", s)
						}
					}
				},
				input: function (e) {
					return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
				},
				focus: function () {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function (e) {
					return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
				}
			}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
				role: null
			}).hide().data("ui-menu"), this._on(this.menu.element, {
				mousedown: function (t) {
					t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
						delete this.cancelBlur
					});
					var i = this.menu.element[0];
					e(t.target).closest(".ui-menu-item").length || this._delay(function () {
						var t = this;
						this.document.one("mousedown", function (s) {
							s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
						})
					})
				},
				menufocus: function (t, i) {
					if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
						return this.menu.blur(), this.document.one("mousemove", function () {
							e(t.target).trigger(t.originalEvent)
						}), undefined
					}
					var s = i.item.data("ui-autocomplete-item");
					!1 !== this._trigger("focus", t, {
						item: s
					}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
				},
				menuselect: function (e, t) {
					var i = t.item.data("ui-autocomplete-item"),
						s = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
						this.previous = s, this.selectedItem = i
					})), !1 !== this._trigger("select", e, {
						item: i
					}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
				}
			}), this.liveRegion = e("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function () {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function (e, t) {
			this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
		},
		_appendTo: function () {
			var t = this.options.appendTo;
			return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
		},
		_initSource: function () {
			var t, i, s = this;
			e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
				s(e.ui.autocomplete.filter(t, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
				s.xhr && s.xhr.abort(), s.xhr = e.ajax({
					url: i,
					data: t,
					dataType: "json",
					success: function (e) {
						n(e)
					},
					error: function () {
						n([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function (e) {
			clearTimeout(this.searching), this.searching = this._delay(function () {
				this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
			}, this.options.delay)
		},
		search: function (e, t) {
			return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
		},
		_search: function (e) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: e
			}, this._response())
		},
		_response: function () {
			var t = ++this.requestIndex;
			return e.proxy(function (e) {
				t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
			}, this)
		},
		__response: function (e) {
			e && (e = this._normalize(e)), this._trigger("response", null, {
				content: e
			}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
		},
		close: function (e) {
			this.cancelSearch = !0, this._close(e)
		},
		_close: function (e) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
		},
		_change: function (e) {
			this.previous !== this._value() && this._trigger("change", e, {
				item: this.selectedItem
			})
		},
		_normalize: function (t) {
			return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
				return "string" == typeof t ? {
					label: t,
					value: t
				} : e.extend({
					label: t.label || t.value,
					value: t.value || t.label
				}, t)
			})
		},
		_suggest: function (t) {
			var i = this.menu.element.empty();
			this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function () {
			var e = this.menu.element;
			e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function (t, i) {
			var s = this;
			e.each(i, function (e, i) {
				s._renderItemData(t, i)
			})
		},
		_renderItemData: function (e, t) {
			return this._renderItem(e, t).data("ui-autocomplete-item", t)
		},
		_renderItem: function (t, i) {
			return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
		},
		_move: function (e, t) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
		},
		widget: function () {
			return this.menu.element
		},
		_value: function () {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function (e, t) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
		}
	}), e.extend(e.ui.autocomplete, {
		escapeRegex: function (e) {
			return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function (t, i) {
			var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
			return e.grep(t, function (e) {
				return s.test(e.label || e.value || e)
			})
		}
	}), e.widget("ui.autocomplete", e.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function (e) {
					return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function (e) {
			var t;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
		}
	})
})(jQuery);
(function (e) {
	var t, i = "ui-button ui-widget ui-state-default ui-corner-all",
		n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		s = function () {
			var t = e(this);
			setTimeout(function () {
				t.find(":ui-button").button("refresh")
			}, 1)
		},
		a = function (t) {
			var i = t.name,
				n = t.form,
				s = e([]);
			return i && (i = i.replace(/'/g, "\\'"), s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function () {
				return !this.form
			})), s
		};
	e.widget("ui.button", {
		version: "1.10.4",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function () {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
			var n = this,
				o = this.options,
				r = "checkbox" === this.type || "radio" === this.type,
				h = r ? "" : "ui-state-active";
			null === o.label && (o.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
				o.disabled || this === t && e(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function () {
				o.disabled || e(this).removeClass(h)
			}).bind("click" + this.eventNamespace, function (e) {
				o.disabled && (e.preventDefault(), e.stopImmediatePropagation())
			}), this._on({
				focus: function () {
					this.buttonElement.addClass("ui-state-focus")
				},
				blur: function () {
					this.buttonElement.removeClass("ui-state-focus")
				}
			}), r && this.element.bind("change" + this.eventNamespace, function () {
				n.refresh()
			}), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
				return o.disabled ? !1 : undefined
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
				if (o.disabled) {
					return !1
				}
				e(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
				var t = n.element[0];
				a(t).not(t).map(function () {
					return e(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
				return o.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, n.document.one("mouseup", function () {
					t = null
				}), undefined)
			}).bind("mouseup" + this.eventNamespace, function () {
				return o.disabled ? !1 : (e(this).removeClass("ui-state-active"), undefined)
			}).bind("keydown" + this.eventNamespace, function (t) {
				return o.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), undefined)
			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
				e(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
				t.keyCode === e.ui.keyCode.SPACE && e(this).click()
			})), this._setOption("disabled", o.disabled), this._resetButton()
		},
		_determineButtonType: function () {
			var e, t, i;
			this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget: function () {
			return this.buttonElement
		},
		_destroy: function () {
			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function (e, t) {
			return this._super(e, t), "disabled" === e ? (this.element.prop("disabled", !!t), t && this.buttonElement.removeClass("ui-state-focus"), undefined) : (this._resetButton(), undefined)
		},
		refresh: function () {
			var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? a(this.element[0]).each(function () {
				e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function () {
			if ("input" === this.type) {
				return this.options.label && this.element.val(this.options.label), undefined
			}
			var t = this.buttonElement.removeClass(n),
				i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
				s = this.options.icons,
				a = s.primary && s.secondary,
				o = [];
			s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (a ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(a ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
		}
	}), e.widget("ui.buttonset", {
		version: "1.10.4",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function () {
			this.element.addClass("ui-buttonset")
		},
		_init: function () {
			this.refresh()
		},
		_setOption: function (e, t) {
			"disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
		},
		refresh: function () {
			var t = "rtl" === this.element.css("direction");
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
				return e(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function () {
			this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
				return e(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	})
})(jQuery);
(function (e, t) {
	function i() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, e.extend(this._defaults, this.regional[""]), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function a(t) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return t.delegate(i, "mouseout", function () {
			e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
		}).delegate(i, "mouseover", function () {
			e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
		})
	}

	function s(t, i) {
		e.extend(t, i);
		for (var a in i) {
			null == i[a] && (t[a] = i[a])
		}
		return t
	}
	e.extend(e.ui, {
		datepicker: {
			version: "1.10.4"
		}
	});
	var n, r = "datepicker";
	e.extend(i.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function () {
			return this.dpDiv
		},
		setDefaults: function (e) {
			return s(this._defaults, e || {}), this
		},
		_attachDatepicker: function (t, i) {
			var a, s, n;
			a = t.nodeName.toLowerCase(), s = "div" === a || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), s), n.settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
		},
		_newInst: function (t, i) {
			var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: s,
				input: t,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: i,
				dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function (t, i) {
			var a = e(t);
			i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t))
		},
		_attachments: function (t, i) {
			var a, s, n, r = this._get(i, "appendText"),
				o = this._get(i, "isRTL");
			i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, "showOn"), ("focus" === a || "both" === a) && t.focus(this._showDatepicker), ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
				src: n,
				alt: s,
				title: s
			}) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
				src: n,
				alt: s,
				title: s
			}) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
				return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
			}))
		},
		_autoSize: function (e) {
			if (this._get(e, "autoSize") && !e.inline) {
				var t, i, a, s, n = new Date(2009, 11, 20),
					r = this._get(e, "dateFormat");
				r.match(/[DM]/) && (t = function (e) {
					for (i = 0, a = 0, s = 0; e.length > s; s++) {
						e[s].length > i && (i = e[s].length, a = s)
					}
					return a
				}, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
			}
		},
		_inlineDatepicker: function (t, i) {
			var a = e(t);
			a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function (t, i, a, n, o) {

			var u, c, h, l, d, p = this._dialogInst;
			return p || (this.uuid += 1, u = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + u + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + l, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this
		},
		_destroyDatepicker: function (t) {
			var i, a = e(t),
				s = e.data(t, r);
			a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty())
		},
		_enableDatepicker: function (t) {
			var i, a, s = e(t),
				n = e.data(t, r);
			s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function () {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
				return e === t ? null : e
			}))
		},
		_disableDatepicker: function (t) {
			var i, a, s = e(t),
				n = e.data(t, r);
			s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function () {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
				return e === t ? null : e
			}), this._disabledInputs[this._disabledInputs.length] = t)
		},
		_isDisabledDatepicker: function (e) {
			if (!e) {
				return !1
			}
			for (var t = 0; this._disabledInputs.length > t; t++) {
				if (this._disabledInputs[t] === e) {
					return !0
				}
			}
			return !1
		},
		_getInst: function (t) {
			try {
				return e.data(t, r)
			} catch (i) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function (i, a, n) {
			var r, o, u, c, h = this._getInst(i);
			return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : h ? "all" === a ? e.extend({}, h.settings) : this._get(h, a) : null : (r = a || {}, "string" == typeof a && (r = {}, r[a] = n), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), u = this._getMinMaxDate(h, "min"), c = this._getMinMaxDate(h, "max"), s(h.settings, r), null !== u && r.dateFormat !== t && r.minDate === t && (h.settings.minDate = this._formatDate(h, u)), null !== c && r.dateFormat !== t && r.maxDate === t && (h.settings.maxDate = this._formatDate(h, c)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)), t)
		},
		_changeDatepicker: function (e, t, i) {
			this._optionDatepicker(e, t, i)
		},
		_refreshDatepicker: function (e) {
			var t = this._getInst(e);
			t && this._updateDatepicker(t)
		},
		_setDateDatepicker: function (e, t) {
			var i = this._getInst(e);
			i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function (e, t) {
			var i = this._getInst(e);
			return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
		},
		_doKeyDown: function (t) {
			var i, a, s, n = e.datepicker._getInst(t.target),
				r = !0,
				o = n.dpDiv.is(".ui-datepicker-rtl");
			if (n._keyEvent = !0, e.datepicker._datepickerShowing) {
				switch (t.keyCode) {
					case 9:
						e.datepicker._hideDatepicker(), r = !1;
						break;
					case 13:
						return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [a, n])) : e.datepicker._hideDatepicker(), !1;
					case 27:
						e.datepicker._hideDatepicker();
						break;
					case 33:
						e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
						break;
					case 34:
						e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
						break;
					case 35:
						(t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
						break;
					case 36:
						(t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
						break;
					case 37:
						(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
						break;
					case 38:
						(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
						break;
					case 39:
						(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
						break;
					case 40:
						(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
						break;
					default:
						r = !1
				}
			} else {
				36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1
			}
			r && (t.preventDefault(), t.stopPropagation())
		},
		_doKeyPress: function (i) {
			var a, s, n = e.datepicker._getInst(i.target);
			return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1) : t
		},
		_doKeyUp: function (t) {
			var i, a = e.datepicker._getInst(t.target);
			if (a.input.val() !== a.lastVal) {
				try {
					i = e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a))
				} catch (s) {}
			}
			return !0
		},
		_showDatepicker: function (t) {
			if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
				var i, a, n, r, o, u, c;
				i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
					return r |= "fixed" === e(this).css("position"), !r
				}), o = {
					left: e.datepicker._pos[0],
					top: e.datepicker._pos[1]
				}, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({
					position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
					display: "none",
					left: o.left + "px",
					top: o.top + "px"
				}), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
			}
		},
		_updateDatepicker: function (t) {
			this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var i, a = this._getNumberOfMonths(t),
				s = a[1],
				r = 17;
			t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
				i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function (e) {
			return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
		},
		_checkOffset: function (t, i, a) {
			var s = t.dpDiv.outerWidth(),
				n = t.dpDiv.outerHeight(),
				r = t.input ? t.input.outerWidth() : 0,
				o = t.input ? t.input.outerHeight() : 0,
				u = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()),
				c = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
			return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0), i.top -= Math.min(i.top, i.top + n > c && c > n ? Math.abs(n + o) : 0), i
		},
		_findPos: function (t) {
			for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) {
				t = t[s ? "previousSibling" : "nextSibling"]
			}
			return i = e(t).offset(), [i.left, i.top]
		},
		_hideDatepicker: function (t) {
			var i, a, s, n, o = this._curInst;
			!o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), a = this._get(o, "duration"), s = function () {
				e.datepicker._tidyDialog(o)
			}, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function (e) {
			e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function (t) {
			if (e.datepicker._curInst) {
				var i = e(t.target),
					a = e.datepicker._getInst(i[0]);
				(i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function (t, i, a) {
			var s = e(t),
				n = this._getInst(s[0]);
			this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), this._updateDatepicker(n))
		},
		_gotoToday: function (t) {
			var i, a = e(t),
				s = this._getInst(a[0]);
			this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a)
		},
		_selectMonthYear: function (t, i, a) {
			var s = e(t),
				n = this._getInst(s[0]);
			n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
		},
		_selectDay: function (t, i, a, s) {
			var n, r = e(t);
			e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
		},
		_clearDate: function (t) {
			var i = e(t);
			this._selectDate(i, "")
		},
		_selectDate: function (t, i) {
			var a, s = e(t),
				n = this._getInst(s[0]);
			i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, "onSelect"), a ? a.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function (t) {
			var i, a, s, n = this._get(t, "altField");
			n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function () {
				e(this).val(s)
			}))
		},
		noWeekends: function (e) {
			var t = e.getDay();
			return [t > 0 && 6 > t, ""]
		},
		iso8601Week: function (e) {
			var t, i = new Date(e.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 86400000) / 7) + 1
		},
		parseDate: function (i, a, s) {
			if (null == i || null == a) {
				throw "Invalid arguments"
			}
			if (a = "object" == typeof a ? "" + a : a + "", "" === a) {
				return null
			}
			var n, r, o, u, c = 0,
				h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				l = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
				d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
				p = (s ? s.dayNames : null) || this._defaults.dayNames,
				g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
				m = (s ? s.monthNames : null) || this._defaults.monthNames,
				f = -1,
				_ = -1,
				v = -1,
				k = -1,
				y = !1,
				b = function (e) {
					var t = i.length > n + 1 && i.charAt(n + 1) === e;
					return t && n++, t
				},
				D = function (e) {
					var t = b(e),
						i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
						s = RegExp("^\\d{1," + i + "}"),
						n = a.substring(c).match(s);
					if (!n) {
						throw "Missing number at position " + c
					}
					return c += n[0].length, parseInt(n[0], 10)
				},
				w = function (i, s, n) {
					var r = -1,
						o = e.map(b(i) ? n : s, function (e, t) {
							return [
								[t, e]
							]
						}).sort(function (e, t) {
							return -(e[1].length - t[1].length)
						});
					if (e.each(o, function (e, i) {
							var s = i[1];
							return a.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t
						}), -1 !== r) {
						return r + 1
					}
					throw "Unknown name at position " + c
				},
				M = function () {
					if (a.charAt(c) !== i.charAt(n)) {
						throw "Unexpected literal at position " + c
					}
					c++
				};
			for (n = 0; i.length > n; n++) {
				if (y) {
					"'" !== i.charAt(n) || b("'") ? M() : y = !1
				} else {
					switch (i.charAt(n)) {
						case "d":
							v = D("d");
							break;
						case "D":
							w("D", d, p);
							break;
						case "o":
							k = D("o");
							break;
						case "m":
							_ = D("m");
							break;
						case "M":
							_ = w("M", g, m);
							break;
						case "y":
							f = D("y");
							break;
						case "@":
							u = new Date(D("@")), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
							break;
						case "!":
							u = new Date((D("!") - this._ticksTo1970) / 10000), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
							break;
						case "'":
							b("'") ? M() : y = !0;
							break;
						default:
							M()
					}
				}
			}
			if (a.length > c && (o = a.substr(c), !/^\s+/.test(o))) {
				throw "Extra/unparsed characters found in date: " + o
			}
			if (-1 === f ? f = (new Date).getFullYear() : 100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= f ? 0 : -100)), k > -1) {
				for (_ = 1, v = k;;) {
					if (r = this._getDaysInMonth(f, _ - 1), r >= v) {
						break
					}
					_++, v -= r
				}
			}
			if (u = this._daylightSavingAdjust(new Date(f, _ - 1, v)), u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v) {
				throw "Invalid date"
			}
			return u
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 10000000 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate: function (e, t, i) {
			if (!t) {
				return ""
			}
			var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
				n = (i ? i.dayNames : null) || this._defaults.dayNames,
				r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
				o = (i ? i.monthNames : null) || this._defaults.monthNames,
				u = function (t) {
					var i = e.length > a + 1 && e.charAt(a + 1) === t;
					return i && a++, i
				},
				c = function (e, t, i) {
					var a = "" + t;
					if (u(e)) {
						for (; i > a.length;) {
							a = "0" + a
						}
					}
					return a
				},
				h = function (e, t, i, a) {
					return u(e) ? a[t] : i[t]
				},
				l = "",
				d = !1;
			if (t) {
				for (a = 0; e.length > a; a++) {
					if (d) {
						"'" !== e.charAt(a) || u("'") ? l += e.charAt(a) : d = !1
					} else {
						switch (e.charAt(a)) {
							case "d":
								l += c("d", t.getDate(), 2);
								break;
							case "D":
								l += h("D", t.getDay(), s, n);
								break;
							case "o":
								l += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 86400000), 3);
								break;
							case "m":
								l += c("m", t.getMonth() + 1, 2);
								break;
							case "M":
								l += h("M", t.getMonth(), r, o);
								break;
							case "y":
								l += u("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
								break;
							case "@":
								l += t.getTime();
								break;
							case "!":
								l += 10000 * t.getTime() + this._ticksTo1970;
								break;
							case "'":
								u("'") ? l += "'" : d = !0;
								break;
							default:
								l += e.charAt(a)
						}
					}
				}
			}
			return l
		},
		_possibleChars: function (e) {
			var t, i = "",
				a = !1,
				s = function (i) {
					var a = e.length > t + 1 && e.charAt(t + 1) === i;
					return a && t++, a
				};
			for (t = 0; e.length > t; t++) {
				if (a) {
					"'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1
				} else {
					switch (e.charAt(t)) {
						case "d":
						case "m":
						case "y":
						case "@":
							i += "0123456789";
							break;
						case "D":
						case "M":
							return null;
						case "'":
							s("'") ? i += "'" : a = !0;
							break;
						default:
							i += e.charAt(t)
					}
				}
			}
			return i
		},
		_get: function (e, i) {
			return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
		},
		_setDateFromField: function (e, t) {
			if (e.input.val() !== e.lastVal) {
				var i = this._get(e, "dateFormat"),
					a = e.lastVal = e.input ? e.input.val() : null,
					s = this._getDefaultDate(e),
					n = s,
					r = this._getFormatConfig(e);
				try {
					n = this.parseDate(i, a, r) || s
				} catch (o) {
					a = t ? "" : a
				}
				e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e)
			}
		},
		_getDefaultDate: function (e) {
			return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
		},
		_determineDate: function (t, i, a) {
			var s = function (e) {
					var t = new Date;
					return t.setDate(t.getDate() + e), t
				},
				n = function (i) {
					try {
						return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
					} catch (a) {}
					for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = u.exec(i); c;) {
						switch (c[2] || "d") {
							case "d":
							case "D":
								o += parseInt(c[1], 10);
								break;
							case "w":
							case "W":
								o += 7 * parseInt(c[1], 10);
								break;
							case "m":
							case "M":
								r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
								break;
							case "y":
							case "Y":
								n += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
						}
						c = u.exec(i)
					}
					return new Date(n, r, o)
				},
				r = null == i || "" === i ? a : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());
			return r = r && "Invalid Date" == "" + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
		},
		_daylightSavingAdjust: function (e) {
			return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
		},
		_setDate: function (e, t, i) {
			var a = !t,
				s = e.selectedMonth,
				n = e.selectedYear,
				r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
			e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e))
		},
		_getDate: function (e) {
			var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
			return t
		},
		_attachHandlers: function (t) {
			var i = this._get(t, "stepMonths"),
				a = "#" + t.id.replace(/\\\\/g, "\\");
			t.dpDiv.find("[data-handler]").map(function () {
				var t = {
					prev: function () {
						e.datepicker._adjustDate(a, -i, "M")
					},
					next: function () {
						e.datepicker._adjustDate(a, +i, "M")
					},
					hide: function () {
						e.datepicker._hideDatepicker()
					},
					today: function () {
						e.datepicker._gotoToday(a)
					},
					selectDay: function () {
						return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function () {
						return e.datepicker._selectMonthYear(a, this, "M"), !1
					},
					selectYear: function () {
						return e.datepicker._selectMonthYear(a, this, "Y"), !1
					}
				};
				e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function (e) {
			var t, i, a, s, n, r, o, u, c, h, l, d, p, g, m, f, _, v, k, y, b, D, w, M, C, x, I, N, T, A, E, S, Y, F, P, O, j, K, R, H = new Date,
				W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
				L = this._get(e, "isRTL"),
				U = this._get(e, "showButtonPanel"),
				B = this._get(e, "hideIfNoPrevNext"),
				z = this._get(e, "navigationAsDateFormat"),
				q = this._getNumberOfMonths(e),
				G = this._get(e, "showCurrentAtPos"),
				J = this._get(e, "stepMonths"),
				Q = 1 !== q[0] || 1 !== q[1],
				V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
				$ = this._getMinMaxDate(e, "min"),
				X = this._getMinMaxDate(e, "max"),
				Z = e.drawMonth - G,
				et = e.drawYear;
			if (0 > Z && (Z += 12, et--), X) {
				for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - q[0] * q[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) {
					Z--, 0 > Z && (Z = 11, et--)
				}
			}
			for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = z ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? V : W, r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? u : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (L ? "" : u) + "</div>" : "", h = parseInt(this._get(e, "firstDay"), 10), h = isNaN(h) ? 0 : h, l = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), k = this._getDefaultDate(e), y = "", D = 0; q[0] > D; D++) {
				for (w = "", this.maxRows = 4, M = 0; q[1] > M; M++) {
					if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), x = " ui-corner-all", I = "", Q) {
						if (I += "<div class='ui-datepicker-group", q[1] > 1) {
							switch (M) {
								case 0:
									I += " ui-datepicker-group-first", x = " ui-corner-" + (L ? "right" : "left");
									break;
								case q[1] - 1:
									I += " ui-datepicker-group-last", x = " ui-corner-" + (L ? "left" : "right");
									break;
								default:
									I += " ui-datepicker-group-middle", x = ""
							}
						}
						I += "'>"
					}
					for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === D ? L ? n : a : "") + (/all|right/.test(x) && 0 === D ? L ? a : n : "") + this._generateMonthYearHeader(e, Z, et, $, X, D > 0 || M > 0, g, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", N = l ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", b = 0; 7 > b; b++) {
						T = (b + h) % 7, N += "<th" + ((b + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[T] + "'>" + p[T] + "</span></th>"
					}
					for (I += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), E = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7, S = Math.ceil((E + A) / 7), Y = Q ? this.maxRows > S ? this.maxRows : S : S, this.maxRows = Y, F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), P = 0; Y > P; P++) {
						for (I += "<tr>", O = l ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(F) + "</td>" : "", b = 0; 7 > b; b++) {
							j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [!0, ""], K = F.getMonth() !== Z, R = K && !v || !j[0] || $ && $ > F || X && F > X, O += "<td class='" + ((b + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (K ? " ui-datepicker-other-month" : "") + (F.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || k.getTime() === F.getTime() && k.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (K && !_ ? "" : " " + j[1] + (F.getTime() === V.getTime() ? " " + this._currentClass : "") + (F.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (K && !_ || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (K && !_ ? "&#xa0;" : R ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === W.getTime() ? " ui-state-highlight" : "") + (F.getTime() === V.getTime() ? " ui-state-active" : "") + (K ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F)
						}
						I += O + "</tr>"
					}
					Z++, Z > 11 && (Z = 0, et++), I += "</tbody></table>" + (Q ? "</div>" + (q[0] > 0 && M === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += I
				}
				y += w
			}
			return y += c, e._keyEvent = !1, y
		},
		_generateMonthYearHeader: function (e, t, i, a, s, n, r, o) {
			var u, c, h, l, d, p, g, m, f = this._get(e, "changeMonth"),
				_ = this._get(e, "changeYear"),
				v = this._get(e, "showMonthAfterYear"),
				k = "<div class='ui-datepicker-title'>",
				y = "";
			if (n || !f) {
				y += "<span class='ui-datepicker-month'>" + r[t] + "</span>"
			} else {
				for (u = a && a.getFullYear() === i, c = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++) {
					(!u || h >= a.getMonth()) && (!c || s.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "</option>")
				}
				y += "</select>"
			}
			if (v || (k += y + (!n && f && _ ? "" : "&#xa0;")), !e.yearshtml) {
				if (e.yearshtml = "", n || !_) {
					k += "<span class='ui-datepicker-year'>" + i + "</span>"
				} else {
					for (l = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (e) {
							var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
							return isNaN(t) ? d : t
						}, g = p(l[0]), m = Math.max(g, p(l[1] || "")), g = a ? Math.max(g, a.getFullYear()) : g, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= g; g++) {
						e.yearshtml += "<option value='" + g + "'" + (g === i ? " selected='selected'" : "") + ">" + g + "</option>"
					}
					e.yearshtml += "</select>", k += e.yearshtml, e.yearshtml = null
				}
			}
			return k += this._get(e, "yearSuffix"), v && (k += (!n && f && _ ? "" : "&#xa0;") + y), k += "</div>"
		},
		_adjustInstDate: function (e, t, i) {
			var a = e.drawYear + ("Y" === i ? t : 0),
				s = e.drawMonth + ("M" === i ? t : 0),
				n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0),
				r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
			e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
		},
		_restrictMinMax: function (e, t) {
			var i = this._getMinMaxDate(e, "min"),
				a = this._getMinMaxDate(e, "max"),
				s = i && i > t ? i : t;
			return a && s > a ? a : s
		},
		_notifyChange: function (e) {
			var t = this._get(e, "onChangeMonthYear");
			t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
		},
		_getNumberOfMonths: function (e) {
			var t = this._get(e, "numberOfMonths");
			return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
		},
		_getMinMaxDate: function (e, t) {
			return this._determineDate(e, this._get(e, t + "Date"), null)
		},
		_getDaysInMonth: function (e, t) {
			return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
		},
		_getFirstDayOfMonth: function (e, t) {
			return new Date(e, t, 1).getDay()
		},
		_canAdjustMonth: function (e, t, i, a) {
			var s = this._getNumberOfMonths(e),
				n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
			return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
		},
		_isInRange: function (e, t) {
			var i, a, s = this._getMinMaxDate(e, "min"),
				n = this._getMinMaxDate(e, "max"),
				r = null,
				o = null,
				u = this._get(e, "yearRange");
			return u && (i = u.split(":"), a = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
		},
		_getFormatConfig: function (e) {
			var t = this._get(e, "shortYearCutoff");
			return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
				shortYearCutoff: t,
				dayNamesShort: this._get(e, "dayNamesShort"),
				dayNames: this._get(e, "dayNames"),
				monthNamesShort: this._get(e, "monthNamesShort"),
				monthNames: this._get(e, "monthNames")
			}
		},
		_formatDate: function (e, t, i, a) {
			t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
			var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
			return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
		}
	}), e.fn.datepicker = function (t) {
		if (!this.length) {
			return this
		}
		e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
			"string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
		}) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
	}, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.4"
})(jQuery);
(function (e) {
	var t = {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		i = {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		};
	e.widget("ui.dialog", {
		version: "1.10.4",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			closeOnEscape: !0,
			closeText: "close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function (t) {
					var i = e(this).css(t).offset().top;
					0 > i && e(this).css("top", t.top - i)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		_create: function () {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
		},
		_init: function () {
			this.options.autoOpen && this.open()
		},
		_appendTo: function () {
			var t = this.options.appendTo;
			return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
		},
		_destroy: function () {
			var e, t = this.originalPosition;
			this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
		},
		widget: function () {
			return this.uiDialog
		},
		disable: e.noop,
		enable: e.noop,
		close: function (t) {
			var i, a = this;
			if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
				if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) {
					try {
						i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
					} catch (s) {}
				}
				this._hide(this.uiDialog, this.options.hide, function () {
					a._trigger("close", t)
				})
			}
		},
		isOpen: function () {
			return this._isOpen
		},
		moveToTop: function () {
			this._moveToTop()
		},
		_moveToTop: function (e, t) {
			var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
			return i && !t && this._trigger("focus", e), i
		},
		open: function () {
			var t = this;
			return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
				t._focusTabbable(), t._trigger("focus")
			}), this._trigger("open"), undefined)
		},
		_focusTabbable: function () {
			var e = this.element.find("[autofocus]");
			e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
		},
		_keepFocus: function (t) {
			function i() {
				var t = this.document[0].activeElement,
					i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
				i || this._focusTabbable()
			}
			t.preventDefault(), i.call(this), this._delay(i)
		},
		_createWrapper: function () {
			this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._on(this.uiDialog, {
				keydown: function (t) {
					if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) {
						return t.preventDefault(), this.close(t), undefined
					}
					if (t.keyCode === e.ui.keyCode.TAB) {
						var i = this.uiDialog.find(":tabbable"),
							a = i.filter(":first"),
							s = i.filter(":last");
						t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== a[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (s.focus(1), t.preventDefault()) : (a.focus(1), t.preventDefault())
					}
				},
				mousedown: function (e) {
					this._moveToTop(e) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function () {
			var t;
			this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
				mousedown: function (t) {
					e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			}), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: !1
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
				click: function (e) {
					e.preventDefault(), this.close(e)
				}
			}), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
				"aria-labelledby": t.attr("id")
			})
		},
		_title: function (e) {
			this.options.title || e.html("&#160;"), e.text(this.options.title)
		},
		_createButtonPane: function () {
			this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
		},
		_createButtons: function () {
			var t = this,
				i = this.options.buttons;
			return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (e.each(i, function (i, a) {
				var s, n;
				a = e.isFunction(a) ? {
					click: a,
					text: i
				} : a, a = e.extend({
					type: "button"
				}, a), s = a.click, a.click = function () {
					s.apply(t.element[0], arguments)
				}, n = {
					icons: a.icons,
					text: a.showText
				}, delete a.icons, delete a.showText, e("<button></button>", a).button(n).appendTo(t.uiButtonSet)
			}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
		},
		_makeDraggable: function () {
			function t(e) {
				return {
					position: e.position,
					offset: e.offset
				}
			}
			var i = this,
				a = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function (a, s) {
					e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", a, t(s))
				},
				drag: function (e, a) {
					i._trigger("drag", e, t(a))
				},
				stop: function (s, n) {
					a.position = [n.position.left - i.document.scrollLeft(), n.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, t(n))
				}
			})
		},
		_makeResizable: function () {
			function t(e) {
				return {
					originalPosition: e.originalPosition,
					originalSize: e.originalSize,
					position: e.position,
					size: e.size
				}
			}
			var i = this,
				a = this.options,
				s = a.resizable,
				n = this.uiDialog.css("position"),
				r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: a.maxWidth,
				maxHeight: a.maxHeight,
				minWidth: a.minWidth,
				minHeight: this._minHeight(),
				handles: r,
				start: function (a, s) {
					e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", a, t(s))
				},
				resize: function (e, a) {
					i._trigger("resize", e, t(a))
				},
				stop: function (s, n) {
					a.height = e(this).height(), a.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, t(n))
				}
			}).css("position", n)
		},
		_minHeight: function () {
			var e = this.options;
			return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
		},
		_position: function () {
			var e = this.uiDialog.is(":visible");
			e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
		},
		_setOptions: function (a) {
			var s = this,
				n = !1,
				r = {};
			e.each(a, function (e, a) {
				s._setOption(e, a), e in t && (n = !0), e in i && (r[e] = a)
			}), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
		},
		_setOption: function (e, t) {
			var i, a, s = this.uiDialog;
			"dialogClass" === e && s.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
				label: "" + t
			}), "draggable" === e && (i = s.is(":data(ui-draggable)"), i && !t && s.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (a = s.is(":data(ui-resizable)"), a && !t && s.resizable("destroy"), a && "string" == typeof t && s.resizable("option", "handles", t), a || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function () {
			var e, t, i, a = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), a.minWidth > a.width && (a.width = a.minWidth), e = this.uiDialog.css({
				height: "auto",
				width: a.width
			}).outerHeight(), t = Math.max(0, a.minHeight - e), i = "number" == typeof a.maxHeight ? Math.max(0, a.maxHeight - e) : "none", "auto" === a.height ? this.element.css({
				minHeight: t,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, a.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function () {
			this.iframeBlocks = this.document.find("iframe").map(function () {
				var t = e(this);
				return e("<div>").css({
					position: "absolute",
					width: t.outerWidth(),
					height: t.outerHeight()
				}).appendTo(t.parent()).offset(t.offset())[0]
			})
		},
		_unblockFrames: function () {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function (t) {
			return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
		},
		_createOverlay: function () {
			if (this.options.modal) {
				var t = this,
					i = this.widgetFullName;
				e.ui.dialog.overlayInstances || this._delay(function () {
					e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (a) {
						t._allowInteraction(a) || (a.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
					})
				}), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
					mousedown: "_keepFocus"
				}), e.ui.dialog.overlayInstances++
			}
		},
		_destroyOverlay: function () {
			this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
		}
	}), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
		_position: function () {
			var t, i = this.options.position,
				a = [],
				s = [0, 0];
			i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (a = i.split ? i.split(" ") : [i[0], i[1]], 1 === a.length && (a[1] = a[0]), e.each(["left", "top"], function (e, t) {
				+a[e] === a[e] && (s[e] = a[e], a[e] = t)
			}), i = {
				my: a[0] + (0 > s[0] ? s[0] : "+" + s[0]) + " " + a[1] + (0 > s[1] ? s[1] : "+" + s[1]),
				at: a.join(" ")
			}), i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position, t = this.uiDialog.is(":visible"), t || this.uiDialog.show(), this.uiDialog.position(i), t || this.uiDialog.hide()
		}
	})
})(jQuery);
(function (t) {
	t.widget("ui.draggable", t.ui.mouse, {
		version: "1.10.4",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function () {
			"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
		},
		_destroy: function () {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
		},
		_mouseCapture: function (e) {
			var i = this.options;
			return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
				t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1000
				}).css(t(this).offset()).appendTo("body")
			}), !0) : !1)
		},
		_mouseStart: function (e) {
			var i = this.options;
			return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, this.offset.scroll = !1, t.extend(this.offset, {
				click: {
					left: e.pageX - this.offset.left,
					top: e.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
		},
		_mouseDrag: function (e, i) {
			if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", e, s) === !1) {
					return this._mouseUp({}), !1
				}
				this.position = s.position
			}
			return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
		},
		_mouseStop: function (e) {
			var i = this,
				s = !1;
			return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
				i._trigger("stop", e) !== !1 && i._clear()
			}) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
		},
		_mouseUp: function (e) {
			return t("div.ui-draggable-iframeFix").each(function () {
				this.parentNode.removeChild(this)
			}), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
		},
		cancel: function () {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function (e) {
			return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_createHelper: function (e) {
			var i = this.options,
				s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
		},
		_adjustOffsetFromHelper: function (e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function () {
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" === this.cssPosition) {
				var t = this.element.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var e, i, s, n = this.options;
			return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
		},
		_convertPositionTo: function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
			return this.offset.scroll || (this.offset.scroll = {
				top: n.scrollTop(),
				left: n.scrollLeft()
			}), {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
			}
		},
		_generatePosition: function (e) {
			var i, s, n, a, o = this.options,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				l = e.pageX,
				h = e.pageY;
			return this.offset.scroll || (this.offset.scroll = {
				top: r.scrollTop(),
				left: r.scrollLeft()
			}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
				top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
				left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
			}
		},
		_clear: function () {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
		},
		_trigger: function (e, i, s) {
			return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
		},
		plugins: {},
		_uiHash: function () {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), t.ui.plugin.add("draggable", "connectToSortable", {
		start: function (e, i) {
			var s = t(this).data("ui-draggable"),
				n = s.options,
				a = t.extend({}, i, {
					item: s.element
				});
			s.sortables = [], t(n.connectToSortable).each(function () {
				var i = t.data(this, "ui-sortable");
				i && !i.options.disabled && (s.sortables.push({
					instance: i,
					shouldRevert: i.options.revert
				}), i.refreshPositions(), i._trigger("activate", e, a))
			})
		},
		stop: function (e, i) {
			var s = t(this).data("ui-draggable"),
				n = t.extend({}, i, {
					item: s.element
				});
			t.each(s.sortables, function () {
				this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
					top: "auto",
					left: "auto"
				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
			})
		},
		drag: function (e, i) {
			var s = t(this).data("ui-draggable"),
				n = this;
			t.each(s.sortables, function () {
				var a = !1,
					o = this;
				this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function () {
					return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
				})), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
					return i.helper[0]
				}, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
			})
		}
	}), t.ui.plugin.add("draggable", "cursor", {
		start: function () {
			var e = t("body"),
				i = t(this).data("ui-draggable").options;
			e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
		},
		stop: function () {
			var e = t(this).data("ui-draggable").options;
			e._cursor && t("body").css("cursor", e._cursor)
		}
	}), t.ui.plugin.add("draggable", "opacity", {
		start: function (e, i) {
			var s = t(i.helper),
				n = t(this).data("ui-draggable").options;
			s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
		},
		stop: function (e, i) {
			var s = t(this).data("ui-draggable").options;
			s._opacity && t(i.helper).css("opacity", s._opacity)
		}
	}), t.ui.plugin.add("draggable", "scroll", {
		start: function () {
			var e = t(this).data("ui-draggable");
			e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
		},
		drag: function (e) {
			var i = t(this).data("ui-draggable"),
				s = i.options,
				n = !1;
			i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
		}
	}), t.ui.plugin.add("draggable", "snap", {
		start: function () {
			var e = t(this).data("ui-draggable"),
				i = e.options;
			e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
				var i = t(this),
					s = i.offset();
				this !== e.element[0] && e.snapElements.push({
					item: this,
					width: i.outerWidth(),
					height: i.outerHeight(),
					top: s.top,
					left: s.left
				})
			})
		},
		drag: function (e, i) {
			var s, n, a, o, r, l, h, c, u, d, p = t(this).data("ui-draggable"),
				g = p.options,
				f = g.snapTolerance,
				m = i.offset.left,
				_ = m + p.helperProportions.width,
				v = i.offset.top,
				b = v + p.helperProportions.height;
			for (u = p.snapElements.length - 1; u >= 0; u--) {
				r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - f > _ || m > l + f || h - f > b || v > c + f || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
					snapItem: p.snapElements[u].item
				})), p.snapElements[u].snapping = !1) : ("inner" !== g.snapMode && (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o = f >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {
					top: h - p.helperProportions.height,
					left: 0
				}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
					top: c,
					left: 0
				}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
					top: 0,
					left: r - p.helperProportions.width
				}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
					top: 0,
					left: l
				}).left - p.margins.left)), d = s || n || a || o, "outer" !== g.snapMode && (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o = f >= Math.abs(l - _), s && (i.position.top = p._convertPositionTo("relative", {
					top: h,
					left: 0
				}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
					top: c - p.helperProportions.height,
					left: 0
				}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
					top: 0,
					left: r
				}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
					top: 0,
					left: l - p.helperProportions.width
				}).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
					snapItem: p.snapElements[u].item
				})), p.snapElements[u].snapping = s || n || a || o || d)
			}
		}
	}), t.ui.plugin.add("draggable", "stack", {
		start: function () {
			var e, i = this.data("ui-draggable").options,
				s = t.makeArray(t(i.stack)).sort(function (e, i) {
					return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
				});
			s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function (i) {
				t(this).css("zIndex", e + i)
			}), this.css("zIndex", e + s.length))
		}
	}), t.ui.plugin.add("draggable", "zIndex", {
		start: function (e, i) {
			var s = t(i.helper),
				n = t(this).data("ui-draggable").options;
			s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
		},
		stop: function (e, i) {
			var s = t(this).data("ui-draggable").options;
			s._zIndex && t(i.helper).css("zIndex", s._zIndex)
		}
	})
})(jQuery);
(function (t) {
	function e(t, e, i) {
		return t > e && e + i > t
	}
	t.widget("ui.droppable", {
		version: "1.10.4",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function () {
			var e, i = this.options,
				s = i.accept;
			this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
				return t.is(s)
			}, this.proportions = function () {
				return arguments.length ? (e = arguments[0], undefined) : e ? e : e = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				}
			}, t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [], t.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy: function () {
			for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++) {
				i[e] === this && i.splice(e, 1)
			}
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function (e, i) {
			"accept" === e && (this.accept = t.isFunction(i) ? i : function (t) {
				return t.is(i)
			}), t.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function (e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
		},
		_deactivate: function (e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
		},
		_over: function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
		},
		_out: function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
		},
		_drop: function (e, i) {
			var s = i || t.ui.ddmanager.current,
				n = !1;
			return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
				var e = t.data(this, "ui-droppable");
				return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
					offset: e.element.offset()
				}), e.options.tolerance) ? (n = !0, !1) : undefined
			}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
		},
		ui: function (t) {
			return {
				draggable: t.currentItem || t.element,
				helper: t.helper,
				position: t.position,
				offset: t.positionAbs
			}
		}
	}), t.ui.intersect = function (t, i, s) {
		if (!i.offset) {
			return !1
		}
		var n, a, o = (t.positionAbs || t.position.absolute).left,
			r = (t.positionAbs || t.position.absolute).top,
			l = o + t.helperProportions.width,
			h = r + t.helperProportions.height,
			c = i.offset.left,
			u = i.offset.top,
			d = c + i.proportions().width,
			p = u + i.proportions().height;
		switch (s) {
			case "fit":
				return o >= c && d >= l && r >= u && p >= h;
			case "intersect":
				return o + t.helperProportions.width / 2 > c && d > l - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && p > h - t.helperProportions.height / 2;
			case "pointer":
				return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, a = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(a, u, i.proportions().height) && e(n, c, i.proportions().width);
			case "touch":
				return (r >= u && p >= r || h >= u && p >= h || u > r && h > p) && (o >= c && d >= o || l >= c && d >= l || c > o && l > d);
			default:
				return !1
		}
	}, t.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function (e, i) {
			var s, n, a = t.ui.ddmanager.droppables[e.options.scope] || [],
				o = i ? i.type : null,
				r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
			t: for (s = 0; a.length > s; s++) {
				if (!(a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
					for (n = 0; r.length > n; n++) {
						if (r[n] === a[s].element[0]) {
							a[s].proportions().height = 0;
							continue t
						}
					}
					a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
						width: a[s].element[0].offsetWidth,
						height: a[s].element[0].offsetHeight
					}))
				}
			}
		},
		drop: function (e, i) {
			var s = !1;
			return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
				this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}), s
		},
		dragStart: function (e, i) {
			e.element.parentsUntil("body").bind("scroll.droppable", function () {
				e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
			})
		},
		drag: function (e, i) {
			e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var s, n, a, o = t.ui.intersect(e, this, this.options.tolerance),
						r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
					r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
						return t.data(this, "ui-droppable").options.scope === n
					}), a.length && (s = t.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
				}
			})
		},
		dragStop: function (e, i) {
			e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
		}
	}
})(jQuery);
(function (t, e) {
	var i = "ui-effects-";
	t.effects = {
			effect: {}
		},
		function (t, e) {
			function i(t, e, i) {
				var s = u[e.type] || {};
				return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
			}

			function s(i) {
				var s = h(),
					n = s._rgba = [];
				return i = i.toLowerCase(), f(l, function (t, a) {
					var o, r = a.re.exec(i),
						l = r && a.parse(r),
						h = a.space || "rgba";
					return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
				}), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
			}

			function n(t, e, i) {
				return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
			}
			var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
				r = /^([\-+])=\s*(\d+\.?\d*)/,
				l = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [t[1], t[2], t[3], t[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function (t) {
						return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function (t) {
						return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function (t) {
						return [t[1], t[2] / 100, t[3] / 100, t[4]]
					}
				}],
				h = t.Color = function (e, i, s, n) {
					return new t.Color.fn.parse(e, i, s, n)
				},
				c = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				u = {
					"byte": {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				d = h.support = {},
				p = t("<p>")[0],
				f = t.each;
			p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
				e.cache = "_" + t, e.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), h.fn = t.extend(h.prototype, {
				parse: function (n, o, r, l) {
					if (n === e) {
						return this._rgba = [null, null, null, null], this
					}(n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
					var u = this,
						d = t.type(n),
						p = this._rgba = [];
					return o !== e && (n = [n, o, r, l], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
						p[e.idx] = i(n[e.idx], e)
					}), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
						n[e.cache] && (u[e.cache] = n[e.cache].slice())
					}) : f(c, function (e, s) {
						var a = s.cache;
						f(s.props, function (t, e) {
							if (!u[a] && s.to) {
								if ("alpha" === t || null == n[t]) {
									return
								}
								u[a] = s.to(u._rgba)
							}
							u[a][e.idx] = i(n[t], e, !0)
						}), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
					}), this) : e
				},
				is: function (t) {
					var i = h(t),
						s = !0,
						n = this;
					return f(c, function (t, a) {
						var o, r = i[a.cache];
						return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
							return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
						})), s
					}), s
				},
				_space: function () {
					var t = [],
						e = this;
					return f(c, function (i, s) {
						e[s.cache] && t.push(i)
					}), t.pop()
				},
				transition: function (t, e) {
					var s = h(t),
						n = s._space(),
						a = c[n],
						o = 0 === this.alpha() ? h("transparent") : this,
						r = o[a.cache] || a.to(o._rgba),
						l = r.slice();
					return s = s[a.cache], f(a.props, function (t, n) {
						var a = n.idx,
							o = r[a],
							h = s[a],
							c = u[n.type] || {};
						null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
					}), this[n](l)
				},
				blend: function (e) {
					if (1 === this._rgba[3]) {
						return this
					}
					var i = this._rgba.slice(),
						s = i.pop(),
						n = h(e)._rgba;
					return h(t.map(i, function (t, e) {
						return (1 - s) * n[e] + s * t
					}))
				},
				toRgbaString: function () {
					var e = "rgba(",
						i = t.map(this._rgba, function (t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
				},
				toHslaString: function () {
					var e = "hsla(",
						i = t.map(this.hsla(), function (t, e) {
							return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
						});
					return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
				},
				toHexString: function (e) {
					var i = this._rgba.slice(),
						s = i.pop();
					return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
						return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
					}).join("")
				},
				toString: function () {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) {
					return [null, null, null, t[3]]
				}
				var e, i, s = t[0] / 255,
					n = t[1] / 255,
					a = t[2] / 255,
					o = t[3],
					r = Math.max(s, n, a),
					l = Math.min(s, n, a),
					h = r - l,
					c = r + l,
					u = 0.5 * c;
				return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : 0.5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
			}, c.hsla.from = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) {
					return [null, null, null, t[3]]
				}
				var e = t[0] / 360,
					i = t[1],
					s = t[2],
					a = t[3],
					o = 0.5 >= s ? s * (1 + i) : s + i - s * i,
					r = 2 * s - o;
				return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
			}, f(c, function (s, n) {
				var a = n.props,
					o = n.cache,
					l = n.to,
					c = n.from;
				h.fn[s] = function (s) {
					if (l && !this[o] && (this[o] = l(this._rgba)), s === e) {
						return this[o].slice()
					}
					var n, r = t.type(s),
						u = "array" === r || "object" === r ? s : arguments,
						d = this[o].slice();
					return f(a, function (t, e) {
						var s = u["object" === r ? t : e.idx];
						null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
					}), c ? (n = h(c(d)), n[o] = d, n) : h(d)
				}, f(a, function (e, i) {
					h.fn[e] || (h.fn[e] = function (n) {
						var a, o = t.type(n),
							l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
							h = this[l](),
							c = h[i.idx];
						return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
					})
				})
			}), h.hook = function (e) {
				var i = e.split(" ");
				f(i, function (e, i) {
					t.cssHooks[i] = {
						set: function (e, n) {
							var a, o, r = "";
							if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
								if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
									for (o = "backgroundColor" === i ? e.parentNode : e;
										("" === r || "transparent" === r) && o && o.style;) {
										try {
											r = t.css(o, "backgroundColor"), o = o.parentNode
										} catch (l) {}
									}
									n = n.blend(r && "transparent" !== r ? r : "_default")
								}
								n = n.toRgbaString()
							}
							try {
								e.style[i] = n
							} catch (l) {}
						}
					}, t.fx.step[i] = function (e) {
						e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
					}
				})
			}, h.hook(o), t.cssHooks.borderColor = {
				expand: function (t) {
					var e = {};
					return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
						e["border" + s + "Color"] = t
					}), e
				}
			}, a = t.Color.names = {
				aqua: "#00ffff",
				black: "#000000",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				gray: "#808080",
				green: "#008000",
				lime: "#00ff00",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				purple: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				teal: "#008080",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		}(jQuery),
		function () {
			function i(e) {
				var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
					a = {};
				if (n && n.length && n[0] && n[n[0]]) {
					for (s = n.length; s--;) {
						i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i])
					}
				} else {
					for (i in n) {
						"string" == typeof n[i] && (a[i] = n[i])
					}
				}
				return a
			}

			function s(e, i) {
				var s, n, o = {};
				for (s in i) {
					n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n))
				}
				return o
			}
			var n = ["add", "remove", "toggle"],
				a = {
					border: 1,
					borderBottom: 1,
					borderColor: 1,
					borderLeft: 1,
					borderRight: 1,
					borderTop: 1,
					borderWidth: 1,
					margin: 1,
					padding: 1
				};
			t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
				t.fx.step[i] = function (t) {
					("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
				}
			}), t.fn.addBack || (t.fn.addBack = function (t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}), t.effects.animateClass = function (e, a, o, r) {
				var l = t.speed(a, o, r);
				return this.queue(function () {
					var a, o = t(this),
						r = o.attr("class") || "",
						h = l.children ? o.find("*").addBack() : o;
					h = h.map(function () {
						var e = t(this);
						return {
							el: e,
							start: i(this)
						}
					}), a = function () {
						t.each(n, function (t, i) {
							e[i] && o[i + "Class"](e[i])
						})
					}, a(), h = h.map(function () {
						return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
					}), o.attr("class", r), h = h.map(function () {
						var e = this,
							i = t.Deferred(),
							s = t.extend({}, l, {
								queue: !1,
								complete: function () {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s), i.promise()
					}), t.when.apply(t, h.get()).done(function () {
						a(), t.each(arguments, function () {
							var e = this.el;
							t.each(this.diff, function (t) {
								e.css(t, "")
							})
						}), l.complete.call(o[0])
					})
				})
			}, t.fn.extend({
				addClass: function (e) {
					return function (i, s, n, a) {
						return s ? t.effects.animateClass.call(this, {
							add: i
						}, s, n, a) : e.apply(this, arguments)
					}
				}(t.fn.addClass),
				removeClass: function (e) {
					return function (i, s, n, a) {
						return arguments.length > 1 ? t.effects.animateClass.call(this, {
							remove: i
						}, s, n, a) : e.apply(this, arguments)
					}
				}(t.fn.removeClass),
				toggleClass: function (i) {
					return function (s, n, a, o, r) {
						return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
							add: s
						} : {
							remove: s
						}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
							toggle: s
						}, n, a, o)
					}
				}(t.fn.toggleClass),
				switchClass: function (e, i, s, n, a) {
					return t.effects.animateClass.call(this, {
						add: i,
						remove: e
					}, s, n, a)
				}
			})
		}(),
		function () {
			function s(e, i, s, n) {
				return t.isPlainObject(e) && (i = e, e = e.effect), e = {
					effect: e
				}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
			}

			function n(e) {
				return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
			}
			t.extend(t.effects, {
				version: "1.10.4",
				save: function (t, e) {
					for (var s = 0; e.length > s; s++) {
						null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
					}
				},
				restore: function (t, s) {
					var n, a;
					for (a = 0; s.length > a; a++) {
						null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
					}
				},
				setMode: function (t, e) {
					return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
				},
				getBaseline: function (t, e) {
					var i, s;
					switch (t[0]) {
						case "top":
							i = 0;
							break;
						case "middle":
							i = 0.5;
							break;
						case "bottom":
							i = 1;
							break;
						default:
							i = t[0] / e.height
					}
					switch (t[1]) {
						case "left":
							s = 0;
							break;
						case "center":
							s = 0.5;
							break;
						case "right":
							s = 1;
							break;
						default:
							s = t[1] / e.width
					}
					return {
						x: s,
						y: i
					}
				},
				createWrapper: function (e) {
					if (e.parent().is(".ui-effects-wrapper")) {
						return e.parent()
					}
					var i = {
							width: e.outerWidth(!0),
							height: e.outerHeight(!0),
							"float": e.css("float")
						},
						s = t("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						n = {
							width: e.width(),
							height: e.height()
						},
						a = document.activeElement;
					try {
						a.id
					} catch (o) {
						a = document.body
					}
					return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
						position: "relative"
					}), e.css({
						position: "relative"
					})) : (t.extend(i, {
						position: e.css("position"),
						zIndex: e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function (t, s) {
						i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), e.css(n), s.css(i).show()
				},
				removeWrapper: function (e) {
					var i = document.activeElement;
					return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
				},
				setTransition: function (e, i, s, n) {
					return n = n || {}, t.each(i, function (t, i) {
						var a = e.cssUnit(i);
						a[0] > 0 && (n[i] = a[0] * s + a[1])
					}), n
				}
			}), t.fn.extend({
				effect: function () {
					function e(e) {
						function s() {
							t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
						}
						var n = t(this),
							a = i.complete,
							r = i.mode;
						(n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
					}
					var i = s.apply(this, arguments),
						n = i.mode,
						a = i.queue,
						o = t.effects.effect[i.effect];
					return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
						i.complete && i.complete.call(this)
					}) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
				},
				show: function (t) {
					return function (e) {
						if (n(e)) {
							return t.apply(this, arguments)
						}
						var i = s.apply(this, arguments);
						return i.mode = "show", this.effect.call(this, i)
					}
				}(t.fn.show),
				hide: function (t) {
					return function (e) {
						if (n(e)) {
							return t.apply(this, arguments)
						}
						var i = s.apply(this, arguments);
						return i.mode = "hide", this.effect.call(this, i)
					}
				}(t.fn.hide),
				toggle: function (t) {
					return function (e) {
						if (n(e) || "boolean" == typeof e) {
							return t.apply(this, arguments)
						}
						var i = s.apply(this, arguments);
						return i.mode = "toggle", this.effect.call(this, i)
					}
				}(t.fn.toggle),
				cssUnit: function (e) {
					var i = this.css(e),
						s = [];
					return t.each(["em", "px", "%", "pt"], function (t, e) {
						i.indexOf(e) > 0 && (s = [parseFloat(i), e])
					}), s
				}
			})
		}(),
		function () {
			var e = {};
			t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
				e[i] = function (e) {
					return Math.pow(e, t + 2)
				}
			}), t.extend(e, {
				Sine: function (t) {
					return 1 - Math.cos(t * Math.PI / 2)
				},
				Circ: function (t) {
					return 1 - Math.sqrt(1 - t * t)
				},
				Elastic: function (t) {
					return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
				},
				Back: function (t) {
					return t * t * (3 * t - 2)
				},
				Bounce: function (t) {
					for (var e, i = 4;
						((e = Math.pow(2, --i)) - 1) / 11 > t;) {}
					return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
				}
			}), t.each(e, function (e, i) {
				t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
					return 1 - i(1 - t)
				}, t.easing["easeInOut" + e] = function (t) {
					return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
				}
			})
		}()
})(jQuery);
(function (t) {
	var e = /up|down|vertical/,
		i = /up|left|vertical|horizontal/;
	t.effects.effect.blind = function (s, n) {
		var a, o, r, l = t(this),
			h = ["position", "top", "bottom", "left", "right", "height", "width"],
			c = t.effects.setMode(l, s.mode || "hide"),
			u = s.direction || "up",
			d = e.test(u),
			p = d ? "height" : "width",
			f = d ? "top" : "left",
			g = i.test(u),
			m = {},
			v = "show" === c;
		l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), a = t.effects.createWrapper(l).css({
			overflow: "hidden"
		}), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
			position: "absolute"
		}), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {
			duration: s.duration,
			easing: s.easing,
			queue: !1,
			complete: function () {
				"hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
			}
		})
	}
})(jQuery);

(function (t) {
	t.effects.effect.bounce = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			l = t.effects.setMode(o, e.mode || "effect"),
			h = "hide" === l,
			c = "show" === l,
			u = e.direction || "up",
			d = e.distance,
			p = e.times || 5,
			f = 2 * p + (c || h ? 1 : 0),
			g = e.duration / f,
			m = e.easing,
			v = "up" === u || "down" === u ? "top" : "left",
			_ = "up" === u || "left" === u,
			b = o.queue(),
			y = b.length;
		for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {
				opacity: 1
			}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), h && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) {
			n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m).animate(a, g, m), d = h ? 2 * d : d / 2
		}
		h && (n = {
			opacity: 0
		}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m)), o.queue(function () {
			h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
		}), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.clip = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			l = t.effects.setMode(o, e.mode || "hide"),
			h = "show" === l,
			c = e.direction || "vertical",
			u = "vertical" === c,
			d = u ? "height" : "width",
			p = u ? "top" : "left",
			f = {};
		t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
			overflow: "hidden"
		}), n = "IMG" === o[0].tagName ? s : o, a = n[d](), h && (n.css(d, 0), n.css(p, a / 2)), f[d] = h ? a : 0, f[p] = h ? 0 : a / 2, n.animate(f, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.drop = function (e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			o = t.effects.setMode(n, e.mode || "hide"),
			r = "show" === o,
			l = e.direction || "left",
			h = "up" === l || "down" === l ? "top" : "left",
			c = "up" === l || "left" === l ? "pos" : "neg",
			u = {
				opacity: r ? 1 : 0
			};
		t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.explode = function (e, i) {
		function s() {
			b.push(this), b.length === u * d && n()
		}

		function n() {
			p.css({
				visibility: "visible"
			}), t(b).remove(), g || p.hide(), i()
		}
		var a, o, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
			d = u,
			p = t(this),
			f = t.effects.setMode(p, e.mode || "hide"),
			g = "show" === f,
			m = p.show().css("visibility", "hidden").offset(),
			v = Math.ceil(p.outerWidth() / d),
			_ = Math.ceil(p.outerHeight() / u),
			b = [];
		for (a = 0; u > a; a++) {
			for (l = m.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++) {
				r = m.left + o * v, h = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
					position: "absolute",
					visibility: "visible",
					left: -o * v,
					top: -a * _
				}).parent().addClass("ui-effects-explode").css({
					position: "absolute",
					overflow: "hidden",
					width: v,
					height: _,
					left: r + (g ? h * v : 0),
					top: l + (g ? c * _ : 0),
					opacity: g ? 0 : 1
				}).animate({
					left: r + (g ? 0 : h * v),
					top: l + (g ? 0 : c * _),
					opacity: g ? 1 : 0
				}, e.duration || 500, e.easing, s)
			}
		}
	}
})(jQuery);
(function (t) {
	t.effects.effect.fade = function (e, i) {
		var s = t(this),
			n = t.effects.setMode(s, e.mode || "toggle");
		s.animate({
			opacity: n
		}, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.fold = function (e, i) {
		var s, n, a = t(this),
			o = ["position", "top", "bottom", "left", "right", "height", "width"],
			r = t.effects.setMode(a, e.mode || "hide"),
			l = "show" === r,
			h = "hide" === r,
			c = e.size || 15,
			u = /([0-9]+)%/.exec(c),
			d = !!e.horizFirst,
			p = l !== d,
			f = p ? ["width", "height"] : ["height", "width"],
			g = e.duration / 2,
			m = {},
			v = {};
		t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({
			overflow: "hidden"
		}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(d ? {
			height: 0,
			width: c
		} : {
			height: c,
			width: 0
		}), m[f[0]] = l ? n[0] : c, v[f[1]] = l ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function () {
			h && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.highlight = function (e, i) {
		var s = t(this),
			n = ["backgroundImage", "backgroundColor", "opacity"],
			a = t.effects.setMode(s, e.mode || "show"),
			o = {
				backgroundColor: s.css("backgroundColor")
			};
		"hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
			backgroundImage: "none",
			backgroundColor: e.color || "#ffff99"
		}).animate(o, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === a && s.hide(), t.effects.restore(s, n), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.pulsate = function (e, i) {
		var s, n = t(this),
			a = t.effects.setMode(n, e.mode || "show"),
			o = "show" === a,
			r = "hide" === a,
			l = o || "hide" === a,
			h = 2 * (e.times || 5) + (l ? 1 : 0),
			c = e.duration / h,
			u = 0,
			d = n.queue(),
			p = d.length;
		for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++) {
			n.animate({
				opacity: u
			}, c, e.easing), u = 1 - u
		}
		n.animate({
			opacity: u
		}, c, e.easing), n.queue(function () {
			r && n.hide(), i()
		}), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), n.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.puff = function (e, i) {
		var s = t(this),
			n = t.effects.setMode(s, e.mode || "hide"),
			a = "hide" === n,
			o = parseInt(e.percent, 10) || 150,
			r = o / 100,
			l = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			};
		t.extend(e, {
			effect: "scale",
			queue: !1,
			fade: !0,
			mode: n,
			complete: i,
			percent: a ? o : 100,
			from: a ? l : {
				height: l.height * r,
				width: l.width * r,
				outerHeight: l.outerHeight * r,
				outerWidth: l.outerWidth * r
			}
		}), s.effect(e)
	}, t.effects.effect.scale = function (e, i) {
		var s = t(this),
			n = t.extend(!0, {}, e),
			a = t.effects.setMode(s, e.mode || "effect"),
			o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
			r = e.direction || "both",
			l = e.origin,
			h = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			},
			c = {
				y: "horizontal" !== r ? o / 100 : 1,
				x: "vertical" !== r ? o / 100 : 1
			};
		n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : h), n.to = {
			height: h.height * c.y,
			width: h.width * c.x,
			outerHeight: h.outerHeight * c.y,
			outerWidth: h.outerWidth * c.x
		}, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
	}, t.effects.effect.size = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			h = ["width", "height", "overflow"],
			c = ["fontSize"],
			u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			p = t.effects.setMode(o, e.mode || "effect"),
			f = e.restore || "effect" !== p,
			g = e.scale || "both",
			m = e.origin || ["middle", "center"],
			v = o.css("position"),
			_ = f ? r : l,
			b = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		"show" === p && o.show(), s = {
			height: o.height(),
			width: o.width(),
			outerHeight: o.outerHeight(),
			outerWidth: o.outerWidth()
		}, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {
			from: {
				y: o.from.height / s.height,
				x: o.from.width / s.width
			},
			to: {
				y: o.to.height / s.height,
				x: o.to.width / s.width
			}
		}, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), o.find("*[width]").each(function () {
			var i = t(this),
				s = {
					height: i.height(),
					width: i.width(),
					outerHeight: i.outerHeight(),
					outerWidth: i.outerWidth()
				};
			f && t.effects.save(i, h), i.from = {
				height: s.height * a.from.y,
				width: s.width * a.from.x,
				outerHeight: s.outerHeight * a.from.y,
				outerWidth: s.outerWidth * a.from.x
			}, i.to = {
				height: s.height * a.to.y,
				width: s.width * a.to.x,
				outerHeight: s.height * a.to.y,
				outerWidth: s.width * a.to.x
			}, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
				f && t.effects.restore(i, h)
			})
		})), o.animate(o.to, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({
					position: "relative",
					top: o.to.top,
					left: o.to.left
				}) : t.each(["top", "left"], function (t, e) {
					o.css(e, function (e, i) {
						var s = parseInt(i, 10),
							n = t ? o.to.left : o.to.top;
						return "auto" === i ? n + "px" : s + n + "px"
					})
				})), t.effects.removeWrapper(o), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.shake = function (e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "height", "width"],
			o = t.effects.setMode(n, e.mode || "effect"),
			r = e.direction || "left",
			l = e.distance || 20,
			h = e.times || 3,
			c = 2 * h + 1,
			u = Math.round(e.duration / c),
			d = "up" === r || "down" === r ? "top" : "left",
			p = "up" === r || "left" === r,
			f = {},
			g = {},
			m = {},
			v = n.queue(),
			_ = v.length;
		for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, n.animate(f, u, e.easing), s = 1; h > s; s++) {
			n.animate(g, u, e.easing).animate(m, u, e.easing)
		}
		n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
			"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
		}), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.slide = function (e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "width", "height"],
			o = t.effects.setMode(n, e.mode || "show"),
			r = "show" === o,
			l = e.direction || "left",
			h = "up" === l || "down" === l ? "top" : "left",
			c = "up" === l || "left" === l,
			u = {};
		t.effects.save(n, a), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
			overflow: "hidden"
		}), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.transfer = function (e, i) {
		var s = t(this),
			n = t(e.to),
			a = "fixed" === n.css("position"),
			o = t("body"),
			r = a ? o.scrollTop() : 0,
			l = a ? o.scrollLeft() : 0,
			h = n.offset(),
			c = {
				top: h.top - r,
				left: h.left - l,
				height: n.innerHeight(),
				width: n.innerWidth()
			},
			u = s.offset(),
			d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
				top: u.top - r,
				left: u.left - l,
				height: s.innerHeight(),
				width: s.innerWidth(),
				position: a ? "fixed" : "absolute"
			}).animate(c, e.duration, e.easing, function () {
				d.remove(), i()
			})
	}
})(jQuery);
(function (t) {
	t.widget("ui.menu", {
		version: "1.10.4",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function () {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, t.proxy(function (t) {
				this.options.disabled && t.preventDefault()
			}, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item > a": function (t) {
					t.preventDefault()
				},
				"click .ui-state-disabled > a": function (t) {
					t.preventDefault()
				},
				"click .ui-menu-item:has(a)": function (e) {
					var i = t(e.target).closest(".ui-menu-item");
					!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function (e) {
					var i = t(e.currentTarget);
					i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function (t, e) {
					var i = this.active || this.element.children(".ui-menu-item").eq(0);
					e || this.focus(t, i)
				},
				blur: function (e) {
					this._delay(function () {
						t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function (e) {
					t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
				}
			})
		},
		_destroy: function () {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
				var e = t(this);
				e.data("ui-menu-submenu-carat") && e.remove()
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function (e) {
			function i(t) {
				return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var s, n, a, o, r, l = !0;
			switch (e.keyCode) {
				case t.ui.keyCode.PAGE_UP:
					this.previousPage(e);
					break;
				case t.ui.keyCode.PAGE_DOWN:
					this.nextPage(e);
					break;
				case t.ui.keyCode.HOME:
					this._move("first", "first", e);
					break;
				case t.ui.keyCode.END:
					this._move("last", "last", e);
					break;
				case t.ui.keyCode.UP:
					this.previous(e);
					break;
				case t.ui.keyCode.DOWN:
					this.next(e);
					break;
				case t.ui.keyCode.LEFT:
					this.collapse(e);
					break;
				case t.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
					break;
				case t.ui.keyCode.ENTER:
				case t.ui.keyCode.SPACE:
					this._activate(e);
					break;
				case t.ui.keyCode.ESCAPE:
					this.collapse(e);
					break;
				default:
					l = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
						return r.test(t(this).children("a").text())
					}), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
						return r.test(t(this).children("a").text())
					})), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
						delete this.previousFilter
					}, 1000)) : delete this.previousFilter) : delete this.previousFilter
			}
			l && e.preventDefault()
		},
		_activate: function (t) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
		},
		refresh: function () {
			var e, i = this.options.icons.submenu,
				s = this.element.find(this.options.menus);
			this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function () {
				var e = t(this),
					s = e.prev("a"),
					n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
				s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
			}), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			}), e.children(":not(.ui-menu-item)").each(function () {
				var e = t(this);
				/[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
			}), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function () {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		_setOption: function (t, e) {
			"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
		},
		focus: function (t, e) {
			var i, s;
			this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
				this._close()
			}, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
				item: e
			})
		},
		_scrollIntoView: function (e) {
			var i, s, n, a, o, r;
			this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
		},
		blur: function (t, e) {
			e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
				item: this.active
			}))
		},
		_startOpening: function (t) {
			clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
				this._close(), this._open(t)
			}, this.delay))
		},
		_open: function (e) {
			var i = t.extend({ of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function (e, i) {
			clearTimeout(this.timer), this.timer = this._delay(function () {
				var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
				s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
			}, this.delay)
		},
		_close: function (t) {
			t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function (t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand: function (t) {
			var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			e && e.length && (this._open(e.parent()), this._delay(function () {
				this.focus(t, e)
			}))
		},
		next: function (t) {
			this._move("next", "first", t)
		},
		previous: function (t) {
			this._move("prev", "last", t)
		},
		isFirstItem: function () {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function () {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function (t, e, i) {
			var s;
			this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
		},
		nextPage: function (e) {
			var i, s, n;
			return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
				return i = t(this), 0 > i.offset().top - s - n
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
		},
		previousPage: function (e) {
			var i, s, n;
			return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
				return i = t(this), i.offset().top - s + n > 0
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
		},
		_hasScroll: function () {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function (e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
		}
	})
})(jQuery);
(function (t, e) {
	t.widget("ui.progressbar", {
		version: "1.10.4",
		options: {
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function () {
			this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min
			}), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
		},
		_destroy: function () {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
		},
		value: function (t) {
			return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
		},
		_constrainedValue: function (t) {
			return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions: function (t) {
			var e = t.value;
			delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
		},
		_setOption: function (t, e) {
			"max" === t && (e = Math.max(this.min, e)), this._super(t, e)
		},
		_percentage: function () {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function () {
			var e = this.options.value,
				i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": e
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
		}
	})
})(jQuery);
(function (t) {
	function e(t) {
		return parseInt(t, 10) || 0
	}

	function i(t) {
		return !isNaN(parseInt(t, 10))
	}
	t.widget("ui.resizable", t.ui.mouse, {
		version: "1.10.4",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_create: function () {
			var e, i, s, n, a, o = this,
				r = this.options;
			if (this.element.addClass("ui-resizable"), t.extend(this, {
					_aspectRatio: !!r.aspectRatio,
					aspectRatio: r.aspectRatio,
					originalElement: this.element,
					_proportionallyResizeElements: [],
					_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
				}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				}), this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				})), this.originalElement.css({
					margin: this.originalElement.css("margin")
				}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} : "e,s,se"), this.handles.constructor === String) {
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++) {
					s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
						zIndex: r.zIndex
					}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n)
				}
			}
			this._renderAxis = function (e) {
				var i, s, n, a;
				e = e || this.element;
				for (i in this.handles) {
					this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length
				}
			}, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
				o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
			}), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
				r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
			}).mouseleave(function () {
				r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function () {
			this._mouseDestroy();
			var e, i = function (e) {
				t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
				position: e.css("position"),
				width: e.outerWidth(),
				height: e.outerHeight(),
				top: e.css("top"),
				left: e.css("left")
			}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
		},
		_mouseCapture: function (e) {
			var i, s, n = !1;
			for (i in this.handles) {
				s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0)
			}
			return !this.options.disabled && n
		},
		_mouseStart: function (i) {
			var s, n, a, o = this.options,
				r = this.element.position(),
				h = this.element;
			return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
				position: "absolute",
				top: h.css("top"),
				left: h.css("left")
			}) : h.is(".ui-draggable") && h.css({
				position: "absolute",
				top: r.top,
				left: r.left
			}), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: s,
				top: n
			}, this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: h.width(),
				height: h.height()
			}, this.originalSize = this._helper ? {
				width: h.outerWidth(),
				height: h.outerHeight()
			} : {
				width: h.width(),
				height: h.height()
			}, this.originalPosition = {
				left: s,
				top: n
			}, this.sizeDiff = {
				width: h.outerWidth() - h.width(),
				height: h.outerHeight() - h.height()
			}, this.originalMousePosition = {
				left: i.pageX,
				top: i.pageY
			}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
		},
		_mouseDrag: function (e) {
			var i, s = this.helper,
				n = {},
				a = this.originalMousePosition,
				o = this.axis,
				r = this.position.top,
				h = this.position.left,
				l = this.size.width,
				c = this.size.height,
				u = e.pageX - a.left || 0,
				d = e.pageY - a.top || 0,
				p = this._change[o];
			return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
		},
		_mouseStop: function (e) {
			this.resizing = !1;
			var i, s, n, a, o, r, h, l = this.options,
				c = this;
			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {
				width: c.helper.width() - a,
				height: c.helper.height() - n
			}, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {
				top: h,
				left: r
			})), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
		},
		_updateVirtualBoundaries: function (t) {
			var e, s, n, a, o, r = this.options;
			o = {
				minWidth: i(r.minWidth) ? r.minWidth : 0,
				maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
				minHeight: i(r.minHeight) ? r.minHeight : 0,
				maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
			}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
		},
		_updateCache: function (t) {
			this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
		},
		_updateRatio: function (t) {
			var e = this.position,
				s = this.size,
				n = this.axis;
			return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
		},
		_respectSize: function (t) {
			var e = this._vBoundaries,
				s = this.axis,
				n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
				a = i(t.height) && e.maxHeight && e.maxHeight < t.height,
				o = i(t.width) && e.minWidth && e.minWidth > t.width,
				r = i(t.height) && e.minHeight && e.minHeight > t.height,
				h = this.originalPosition.left + this.originalSize.width,
				l = this.position.top + this.size.height,
				c = /sw|nw|w/.test(s),
				u = /nw|ne|n/.test(s);
			return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight), o && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), a && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
		},
		_proportionallyResize: function () {
			if (this._proportionallyResizeElements.length) {
				var t, e, i, s, n, a = this.helper || this.element;
				for (t = 0; this._proportionallyResizeElements.length > t; t++) {
					if (n = this._proportionallyResizeElements[t], !this.borderDif) {
						for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++) {
							this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0)
						}
					}
					n.css({
						height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
						width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
					})
				}
			}
		},
		_renderProxy: function () {
			var e = this.element,
				i = this.options;
			this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++i.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function (t, e) {
				return {
					width: this.originalSize.width + e
				}
			},
			w: function (t, e) {
				var i = this.originalSize,
					s = this.originalPosition;
				return {
					left: s.left + e,
					width: i.width - e
				}
			},
			n: function (t, e, i) {
				var s = this.originalSize,
					n = this.originalPosition;
				return {
					top: n.top + i,
					height: s.height - i
				}
			},
			s: function (t, e, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			sw: function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			},
			ne: function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			nw: function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			}
		},
		_propagate: function (e, i) {
			t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
		},
		plugins: {},
		ui: function () {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), t.ui.plugin.add("resizable", "animate", {
		stop: function (e) {
			var i = t(this).data("ui-resizable"),
				s = i.options,
				n = i._proportionallyResizeElements,
				a = n.length && /textarea/i.test(n[0].nodeName),
				o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
				r = a ? 0 : i.sizeDiff.width,
				h = {
					width: i.size.width - r,
					height: i.size.height - o
				},
				l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
				c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(t.extend(h, c && l ? {
				top: c,
				left: l
			} : {}), {
				duration: s.animateDuration,
				easing: s.animateEasing,
				step: function () {
					var s = {
						width: parseInt(i.element.css("width"), 10),
						height: parseInt(i.element.css("height"), 10),
						top: parseInt(i.element.css("top"), 10),
						left: parseInt(i.element.css("left"), 10)
					};
					n && n.length && t(n[0]).css({
						width: s.width,
						height: s.height
					}), i._updateCache(s), i._propagate("resize", e)
				}
			})
		}
	}), t.ui.plugin.add("resizable", "containment", {
		start: function () {
			var i, s, n, a, o, r, h, l = t(this).data("ui-resizable"),
				c = l.options,
				u = l.element,
				d = c.containment,
				p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
			p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
				left: 0,
				top: 0
			}, l.containerPosition = {
				left: 0,
				top: 0
			}, l.parentData = {
				element: t(document),
				left: 0,
				top: 0,
				width: t(document).width(),
				height: t(document).height() || document.body.parentNode.scrollHeight
			}) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
				s[t] = e(i.css("padding" + n))
			}), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
				height: i.innerHeight() - s[3],
				width: i.innerWidth() - s[1]
			}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
				element: p,
				left: n.left,
				top: n.top,
				width: r,
				height: h
			}))
		},
		resize: function (e) {
			var i, s, n, a, o = t(this).data("ui-resizable"),
				r = o.options,
				h = o.containerOffset,
				l = o.position,
				c = o._aspectRatio || e.shiftKey,
				u = {
					top: 0,
					left: 0
				},
				d = o.containerElement;
			d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= Math.abs(o.parentData.left)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio))
		},
		stop: function () {
			var e = t(this).data("ui-resizable"),
				i = e.options,
				s = e.containerOffset,
				n = e.containerPosition,
				a = e.containerElement,
				o = t(e.helper),
				r = o.offset(),
				h = o.outerWidth() - e.sizeDiff.width,
				l = o.outerHeight() - e.sizeDiff.height;
			e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			}), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			})
		}
	}), t.ui.plugin.add("resizable", "alsoResize", {
		start: function () {
			var e = t(this).data("ui-resizable"),
				i = e.options,
				s = function (e) {
					t(e).each(function () {
						var e = t(this);
						e.data("ui-resizable-alsoresize", {
							width: parseInt(e.width(), 10),
							height: parseInt(e.height(), 10),
							left: parseInt(e.css("left"), 10),
							top: parseInt(e.css("top"), 10)
						})
					})
				};
			"object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
				s(t)
			})
		},
		resize: function (e, i) {
			var s = t(this).data("ui-resizable"),
				n = s.options,
				a = s.originalSize,
				o = s.originalPosition,
				r = {
					height: s.size.height - a.height || 0,
					width: s.size.width - a.width || 0,
					top: s.position.top - o.top || 0,
					left: s.position.left - o.left || 0
				},
				h = function (e, s) {
					t(e).each(function () {
						var e = t(this),
							n = t(this).data("ui-resizable-alsoresize"),
							a = {},
							o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						t.each(o, function (t, e) {
							var i = (n[e] || 0) + (r[e] || 0);
							i && i >= 0 && (a[e] = i || null)
						}), e.css(a)
					})
				};
			"object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
				h(t, e)
			})
		},
		stop: function () {
			t(this).removeData("resizable-alsoresize")
		}
	}), t.ui.plugin.add("resizable", "ghost", {
		start: function () {
			var e = t(this).data("ui-resizable"),
				i = e.options,
				s = e.size;
			e.ghost = e.originalElement.clone(), e.ghost.css({
				opacity: 0.25,
				display: "block",
				position: "relative",
				height: s.height,
				width: s.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
		},
		resize: function () {
			var e = t(this).data("ui-resizable");
			e.ghost && e.ghost.css({
				position: "relative",
				height: e.size.height,
				width: e.size.width
			})
		},
		stop: function () {
			var e = t(this).data("ui-resizable");
			e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
		}
	}), t.ui.plugin.add("resizable", "grid", {
		resize: function () {
			var e = t(this).data("ui-resizable"),
				i = e.options,
				s = e.size,
				n = e.originalSize,
				a = e.originalPosition,
				o = e.axis,
				r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
				h = r[0] || 1,
				l = r[1] || 1,
				c = Math.round((s.width - n.width) / h) * h,
				u = Math.round((s.height - n.height) / l) * l,
				d = n.width + c,
				p = n.height + u,
				f = i.maxWidth && d > i.maxWidth,
				g = i.maxHeight && p > i.maxHeight,
				m = i.minWidth && i.minWidth > d,
				v = i.minHeight && i.minHeight > p;
			i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = a.top - u) : (e.size.height = l, e.position.top = a.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = a.left - c) : (e.size.width = h, e.position.left = a.left + n.width - h))
		}
	})
})(jQuery);
(function (t) {
	t.widget("ui.selectable", t.ui.mouse, {
		version: "1.10.4",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function () {
			var e, i = this;
			this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
				e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function () {
					var e = t(this),
						i = e.offset();
					t.data(this, "selectable-item", {
						element: this,
						$element: e,
						left: i.left,
						top: i.top,
						right: i.left + e.outerWidth(),
						bottom: i.top + e.outerHeight(),
						startselected: !1,
						selected: e.hasClass("ui-selected"),
						selecting: e.hasClass("ui-selecting"),
						unselecting: e.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
		},
		_destroy: function () {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
		},
		_mouseStart: function (e) {
			var i = this,
				s = this.options;
			this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
				left: e.pageX,
				top: e.pageY,
				width: 0,
				height: 0
			}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
				var s = t.data(this, "selectable-item");
				s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
					unselecting: s.element
				}))
			}), t(e.target).parents().addBack().each(function () {
				var s, n = t.data(this, "selectable-item");
				return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
					selecting: n.element
				}) : i._trigger("unselecting", e, {
					unselecting: n.element
				}), !1) : undefined
			}))
		},
		_mouseDrag: function (e) {
			if (this.dragged = !0, !this.options.disabled) {
				var i, s = this,
					n = this.options,
					a = this.opos[0],
					o = this.opos[1],
					r = e.pageX,
					l = e.pageY;
				return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({
					left: a,
					top: o,
					width: r - a,
					height: l - o
				}), this.selectees.each(function () {
					var i = t.data(this, "selectable-item"),
						h = !1;
					i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : "fit" === n.tolerance && (h = i.left > a && r > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
						selecting: i.element
					}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
						unselecting: i.element
					}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
						unselecting: i.element
					})))))
				}), !1
			}
		},
		_mouseStop: function (e) {
			var i = this;
			return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
				var s = t.data(this, "selectable-item");
				s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
					unselected: s.element
				})
			}), t(".ui-selecting", this.element[0]).each(function () {
				var s = t.data(this, "selectable-item");
				s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
					selected: s.element
				})
			}), this._trigger("stop", e), this.helper.remove(), !1
		}
	})
})(jQuery);
(function (t) {
	var e = 5;
	t.widget("ui.slider", t.ui.mouse, {
		version: "1.10.4",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		_create: function () {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
		},
		_refresh: function () {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function () {
			var e, i, s = this.options,
				n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
				o = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) {
				o.push(a)
			}
			this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
				t(this).data("ui-slider-handle-index", e)
			})
		},
		_createRange: function () {
			var e = this.options,
				i = "";
			e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
				left: "",
				bottom: ""
			}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function () {
			var t = this.handles.add(this.range).filter("a");
			this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
		},
		_destroy: function () {
			this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
		},
		_mouseCapture: function (e) {
			var i, s, n, a, o, r, l, h, u = this,
				c = this.options;
			return c.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: e.pageX,
				y: e.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
				var i = Math.abs(s - u.values(e));
				(n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
			}), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
				left: 0,
				top: 0
			} : {
				left: e.pageX - l.left - a.width() / 2,
				top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
		},
		_mouseStart: function () {
			return !0
		},
		_mouseDrag: function (t) {
			var e = {
					x: t.pageX,
					y: t.pageY
				},
				i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i), !1
		},
		_mouseStop: function (t) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function () {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function (t) {
			var e, i, s, n, a;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
		},
		_start: function (t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
		},
		_slide: function (t, e, i) {
			var s, n, a;
			this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i,
				values: n
			}), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i
			}), a !== !1 && this.value(i))
		},
		_stop: function (t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
		},
		_change: function (t, e) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[e],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
			}
		},
		value: function (t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
		},
		values: function (e, i) {
			var s, n, a;
			if (arguments.length > 1) {
				return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined
			}
			if (!arguments.length) {
				return this._values()
			}
			if (!t.isArray(arguments[0])) {
				return this.options.values && this.options.values.length ? this._values(e) : this.value()
			}
			for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) {
				s[a] = this._trimAlignValue(n[a]), this._change(null, a)
			}
			this._refreshValue()
		},
		_setOption: function (e, i) {
			var s, n = 0;
			switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
				case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) {
						this._change(null, s)
					}
					this._animateOff = !1;
					break;
				case "min":
				case "max":
					this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_value: function () {
			var t = this.options.value;
			return t = this._trimAlignValue(t)
		},
		_values: function (t) {
			var e, i, s;
			if (arguments.length) {
				return e = this.options.values[t], e = this._trimAlignValue(e)
			}
			if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
					i[s] = this._trimAlignValue(i[s])
				}
				return i
			}
			return []
		},
		_trimAlignValue: function (t) {
			if (this._valueMin() >= t) {
				return this._valueMin()
			}
			if (t >= this._valueMax()) {
				return this._valueMax()
			}
			var e = this.options.step > 0 ? this.options.step : 1,
				i = (t - this._valueMin()) % e,
				s = t - i;
			return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
		},
		_valueMin: function () {
			return this.options.min
		},
		_valueMax: function () {
			return this.options.max
		},
		_refreshValue: function () {
			var e, i, s, n, a, o = this.options.range,
				r = this.options,
				l = this,
				h = this._animateOff ? !1 : r.animate,
				u = {};
			this.options.values && this.options.values.length ? this.handles.each(function (s) {
				i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
					width: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
					height: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), e = i
			}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
				width: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
				height: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}))
		},
		_handleEvents: {
			keydown: function (i) {
				var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
				switch (i.keyCode) {
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_UP:
					case t.ui.keyCode.PAGE_DOWN:
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) {
							return
						}
				}
				switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
					case t.ui.keyCode.HOME:
						a = this._valueMin();
						break;
					case t.ui.keyCode.END:
						a = this._valueMax();
						break;
					case t.ui.keyCode.PAGE_UP:
						a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
						if (n === this._valueMax()) {
							return
						}
						a = this._trimAlignValue(n + o);
						break;
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (n === this._valueMin()) {
							return
						}
						a = this._trimAlignValue(n - o)
				}
				this._slide(i, r, a)
			},
			click: function (t) {
				t.preventDefault()
			},
			keyup: function (e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
			}
		}
	})
})(jQuery);
(function (t) {
	function e(t, e, i) {
		return t > e && e + i > t
	}

	function i(t) {
		return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
	}
	t.widget("ui.sortable", t.ui.mouse, {
		version: "1.10.4",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1000,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_create: function () {
			var t = this.options;
			this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
		},
		_destroy: function () {
			this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) {
				this.items[t].item.removeData(this.widgetName + "-item")
			}
			return this
		},
		_setOption: function (e, i) {
			"disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function (e, i) {
			var s = null,
				n = !1,
				o = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
				return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
			}), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
				this === e.target && (n = !0)
			}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart: function (e, i, s) {
			var n, o, a = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, t.extend(this.offset, {
					click: {
						left: e.pageX - this.offset.left,
						top: e.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) {
				for (n = this.containers.length - 1; n >= 0; n--) {
					this.containers[n]._trigger("activate", e, this._uiHash(this))
				}
			}
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag: function (e) {
			var i, s, n, o, a = this.options,
				r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
				if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
					if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) {
						break
					}
					this._rearrange(e, s), this._trigger("change", e, this._uiHash());
					break
				}
			}
			return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function (e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this,
						n = this.placeholder.offset(),
						o = this.options.axis,
						a = {};
					o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
						s._clear(e)
					})
				} else {
					this._clear(e, i)
				}
				return !1
			}
		},
		cancel: function () {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) {
					this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
				}
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, t(i).each(function () {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}), !s.length && e.key && s.push(e.key + "="), s.join("&")
		},
		toArray: function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, i.each(function () {
				s.push(t(e.item || this).attr(e.attribute || "id") || "")
			}), s
		},
		_intersectsWith: function (t) {
			var e = this.positionAbs.left,
				i = e + this.helperProportions.width,
				s = this.positionAbs.top,
				n = s + this.helperProportions.height,
				o = t.left,
				a = o + t.width,
				r = t.top,
				h = r + t.height,
				l = this.offset.click.top,
				c = this.offset.click.left,
				u = "x" === this.options.axis || s + l > r && h > s + l,
				d = "y" === this.options.axis || e + c > o && a > e + c,
				p = u && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function (t) {
			var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
				n = i && s,
				o = this._getDragVerticalDirection(),
				a = this._getDragHorizontalDirection();
			return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
		},
		_intersectsWithSides: function (t) {
			var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				n = this._getDragVerticalDirection(),
				o = this._getDragHorizontalDirection();
			return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
		},
		_getDragVerticalDirection: function () {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function () {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh: function (t) {
			return this._refreshItems(t), this.refreshPositions(), this
		},
		_connectWith: function () {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function (e) {
			function i() {
				r.push(this)
			}
			var s, n, o, a, r = [],
				h = [],
				l = this._connectWith();
			if (l && e) {
				for (s = l.length - 1; s >= 0; s--) {
					for (o = t(l[s]), n = o.length - 1; n >= 0; n--) {
						a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a])
					}
				}
			}
			for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) {
				h[s][0].each(i)
			}
			return t(r)
		},
		_removeCurrentsFromItems: function () {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function (t) {
				for (var i = 0; e.length > i; i++) {
					if (e[i] === t.item[0]) {
						return !1
					}
				}
				return !0
			})
		},
		_refreshItems: function (e) {
			this.items = [], this.containers = [this];
			var i, s, n, o, a, r, h, l, c = this.items,
				u = [
					[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
						item: this.currentItem
					}) : t(this.options.items, this.element), this]
				],
				d = this._connectWith();
			if (d && this.ready) {
				for (i = d.length - 1; i >= 0; i--) {
					for (n = t(d[i]), s = n.length - 1; s >= 0; s--) {
						o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
							item: this.currentItem
						}) : t(o.options.items, o.element), o]), this.containers.push(o))
					}
				}
			}
			for (i = u.length - 1; i >= 0; i--) {
				for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) {
					h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
						item: h,
						instance: a,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
				}
			}
		},
		refreshPositions: function (e) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i, s, n, o;
			for (i = this.items.length - 1; i >= 0; i--) {
				s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top)
			}
			if (this.options.custom && this.options.custom.refreshContainers) {
				this.options.custom.refreshContainers.call(this)
			} else {
				for (i = this.containers.length - 1; i >= 0; i--) {
					o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
				}
			}
			return this
		},
		_createPlaceholder: function (e) {
			e = e || this;
			var i, s = e.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
				element: function () {
					var s = e.currentItem[0].nodeName.toLowerCase(),
						n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tr" === s ? e.currentItem.children().each(function () {
						t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
					}) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
				},
				update: function (t, n) {
					(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
				}
			}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
		},
		_contactContainers: function (s) {
			var n, o, a, r, h, l, c, u, d, p, f = null,
				g = null;
			for (n = this.containers.length - 1; n >= 0; n--) {
				if (!t.contains(this.currentItem[0], this.containers[n].element[0])) {
					if (this._intersectsWith(this.containers[n].containerCache)) {
						if (f && t.contains(this.containers[n].element[0], f.element[0])) {
							continue
						}
						f = this.containers[n], g = n
					} else {
						this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0)
					}
				}
			}
			if (f) {
				if (1 === this.containers.length) {
					this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1)
				} else {
					for (a = 10000, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--) {
						t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"))
					}
					if (!r && !this.options.dropOnEmpty) {
						return
					}
					if (this.currentContainer === this.containers[g]) {
						return
					}
					r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
				}
			}
		},
		_createHelper: function (e) {
			var i = this.options,
				s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
		},
		_adjustOffsetFromHelper: function (e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function () {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var e, i, s, n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				o = /(html|body)/i.test(n[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition: function (e) {
			var i, s, n = this.options,
				o = e.pageX,
				a = e.pageY,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function (t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function () {
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear: function (t, e) {
			function i(t, e, i) {
				return function (s) {
					i._trigger(t, s, e._uiHash(e))
				}
			}
			this.reverting = !1;
			var s, n = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (s in this._storedCSS) {
					("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "")
				}
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else {
				this.currentItem.show()
			}
			for (this.fromOutside && !e && n.push(function (t) {
					this._trigger("receive", t, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
					this._trigger("update", t, this._uiHash())
				}), this !== this.currentContainer && (e || (n.push(function (t) {
					this._trigger("remove", t, this._uiHash())
				}), n.push(function (t) {
					return function (e) {
						t._trigger("receive", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), n.push(function (t) {
					return function (e) {
						t._trigger("update", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) {
				e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0)
			}
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
				if (!e) {
					for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++) {
						n[s].call(this, t)
					}
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1, !1
			}
			if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
				for (s = 0; n.length > s; s++) {
					n[s].call(this, t)
				}
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !0
		},
		_trigger: function () {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function (e) {
			var i = e || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || t([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: e ? e.element : null
			}
		}
	})
})(jQuery);
(function (t) {
	function e(t) {
		return function () {
			var e = this.element.val();
			t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
		}
	}
	t.widget("ui.spinner", {
		version: "1.10.4",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function () {
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function () {
			var e = {},
				i = this.element;
			return t.each(["min", "max", "step"], function (t, s) {
				var n = i.attr(s);
				void 0 !== n && n.length && (e[s] = n)
			}), e
		},
		_events: {
			keydown: function (t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function () {
				this.previous = this.element.val()
			},
			blur: function (t) {
				return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
			},
			mousewheel: function (t, e) {
				if (e) {
					if (!this.spinning && !this._start(t)) {
						return !1
					}
					this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
						this.spinning && this._stop(t)
					}, 100), t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function (e) {
				function i() {
					var t = this.element[0] === this.document[0].activeElement;
					t || (this.element.focus(), this.previous = s, this._delay(function () {
						this.previous = s
					}))
				}
				var s;
				s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
					delete this.cancelBlur, i.call(this)
				}), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function (e) {
				return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function () {
			var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(0.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
		},
		_keydown: function (e) {
			var i = this.options,
				s = t.ui.keyCode;
			switch (e.keyCode) {
				case s.UP:
					return this._repeat(null, 1, e), !0;
				case s.DOWN:
					return this._repeat(null, -1, e), !0;
				case s.PAGE_UP:
					return this._repeat(null, i.page, e), !0;
				case s.PAGE_DOWN:
					return this._repeat(null, -i.page, e), !0
			}
			return !1
		},
		_uiSpinnerHtml: function () {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml: function () {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
		},
		_start: function (t) {
			return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
		},
		_repeat: function (t, e, i) {
			t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
				this._repeat(40, e, i)
			}, t), this._spin(e * this.options.step, i)
		},
		_spin: function (t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
				value: i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment: function (e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 50000 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision: function () {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function (t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function (t) {
			var e, i, s = this.options;
			return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
		},
		_stop: function (t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function (t, e) {
			if ("culture" === t || "numberFormat" === t) {
				var i = this._parse(this.element.val());
				return this.options[t] = e, this.element.val(this._format(i)), void 0
			}("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
		},
		_setOptions: e(function (t) {
			this._super(t), this._value(this.element.val())
		}),
		_parse: function (t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
		},
		_format: function (t) {
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function () {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		_value: function (t, e) {
			var i;
			"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
		},
		_destroy: function () {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: e(function (t) {
			this._stepUp(t)
		}),
		_stepUp: function (t) {
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown: e(function (t) {
			this._stepDown(t)
		}),
		_stepDown: function (t) {
			this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
		},
		pageUp: e(function (t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: e(function (t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function (t) {
			return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
		},
		widget: function () {
			return this.uiSpinner
		}
	})
})(jQuery);
(function (t, e) {
	function i() {
		return ++n
	}

	function s(t) {
		return t = t.cloneNode(!1), t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
	}
	var n = 0,
		a = /#.*$/;
	t.widget("ui.tabs", {
		version: "1.10.4",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_create: function () {
			var e = this,
				i = this.options;
			this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
				return e.tabs.index(t)
			}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
		},
		_initialActive: function () {
			var i = this.options.active,
				s = this.options.collapsible,
				n = location.hash.substring(1);
			return null === i && (n && this.tabs.each(function (s, a) {
				return t(a).attr("aria-controls") === n ? (i = s, !1) : e
			}), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
		},
		_getCreateEventData: function () {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown: function (i) {
			var s = t(this.document[0].activeElement).closest("li"),
				n = this.tabs.index(s),
				a = !0;
			if (!this._handlePageNav(i)) {
				switch (i.keyCode) {
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
						n++;
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.LEFT:
						a = !1, n--;
						break;
					case t.ui.keyCode.END:
						n = this.anchors.length - 1;
						break;
					case t.ui.keyCode.HOME:
						n = 0;
						break;
					case t.ui.keyCode.SPACE:
						return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
					case t.ui.keyCode.ENTER:
						return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
					default:
						return
				}
				i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
					this.option("active", n)
				}, this.delay))
			}
		},
		_panelKeydown: function (e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
		},
		_handlePageNav: function (i) {
			return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
		},
		_findNextTab: function (e, i) {
			function s() {
				return e > n && (e = 0), 0 > e && (e = n), e
			}
			for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) {
				e = i ? e + 1 : e - 1
			}
			return e
		},
		_focusNextTab: function (t, e) {
			return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
		},
		_setOption: function (t, i) {
			return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
		},
		_tabId: function (t) {
			return t.attr("aria-controls") || "ui-tabs-" + i()
		},
		_sanitizeSelector: function (t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function () {
			var e = this.options,
				i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
				return i.index(t)
			}), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
		},
		_refresh: function () {
			this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function () {
			var e = this;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			}), this.anchors = this.tabs.map(function () {
				return t("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			}), this.panels = t(), this.anchors.each(function (i, n) {
				var a, o, r, h = t(n).uniqueId().attr("id"),
					l = t(n).closest("li"),
					c = l.attr("aria-controls");
				s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
					"aria-controls": a.substring(1),
					"aria-labelledby": h
				}), o.attr("aria-labelledby", h)
			}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList: function () {
			return this.tablist || this.element.find("ol,ul").eq(0)
		},
		_createPanel: function (e) {
			return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function (e) {
			t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
			for (var i, s = 0; i = this.tabs[s]; s++) {
				e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled")
			}
			this.options.disabled = e
		},
		_setupEvents: function (e) {
			var i = {
				click: function (t) {
					t.preventDefault()
				}
			};
			e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function (e) {
			var i, s = this.element.parent();
			"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function () {
				i -= t(this).outerHeight(!0)
			}), this.panels.each(function () {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
				i = Math.max(i, t(this).height("").height())
			}).height(i))
		},
		_eventHandler: function (e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				a = n.closest("li"),
				o = a[0] === s[0],
				r = o && i.collapsible,
				h = r ? t() : this._getPanelForTab(a),
				l = s.length ? this._getPanelForTab(s) : t(),
				c = {
					oldTab: s,
					oldPanel: l,
					newTab: r ? t() : a,
					newPanel: h
				};
			e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, c))
		},
		_toggle: function (e, i) {
			function s() {
				a.running = !1, a._trigger("activate", e, i)
			}

			function n() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
			}
			var a = this,
				o = i.newPanel,
				r = i.oldPanel;
			this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), o.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}), i.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_activate: function (e) {
			var i, s = this._findActive(e);
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function (e) {
			return e === !1 ? t() : this.tabs.eq(e)
		},
		_getIndex: function (t) {
			return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
		},
		_destroy: function () {
			this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}), this.tabs.each(function () {
				var e = t(this),
					i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function (i) {
			var s = this.options.disabled;
			s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
				return t !== i ? t : null
			}) : t.map(this.tabs, function (t, e) {
				return e !== i ? e : null
			})), this._setupDisabled(s))
		},
		disable: function (i) {
			var s = this.options.disabled;
			if (s !== !0) {
				if (i === e) {
					s = !0
				} else {
					if (i = this._getIndex(i), -1 !== t.inArray(i, s)) {
						return
					}
					s = t.isArray(s) ? t.merge([i], s).sort() : [i]
				}
				this._setupDisabled(s)
			}
		},
		load: function (e, i) {
			e = this._getIndex(e);
			var n = this,
				a = this.tabs.eq(e),
				o = a.find(".ui-tabs-anchor"),
				r = this._getPanelForTab(a),
				h = {
					tab: a,
					panel: r
				};
			s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
				setTimeout(function () {
					r.html(t), n._trigger("load", i, h)
				}, 1)
			}).complete(function (t, e) {
				setTimeout(function () {
					"abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
				}, 1)
			})))
		},
		_ajaxSettings: function (e, i, s) {
			var n = this;
			return {
				url: e.attr("href"),
				beforeSend: function (e, a) {
					return n._trigger("beforeLoad", i, t.extend({
						jqXHR: e,
						ajaxSettings: a
					}, s))
				}
			}
		},
		_getPanelForTab: function (e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	})
})(jQuery);
(function (t) {
	function e(e, i) {
		var s = (e.attr("aria-describedby") || "").split(/\s+/);
		s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
	}

	function i(e) {
		var i = e.data("ui-tooltip-id"),
			s = (e.attr("aria-describedby") || "").split(/\s+/),
			n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
	}
	var s = 0;
	t.widget("ui.tooltip", {
		version: "1.10.4",
		options: {
			content: function () {
				var e = t(this).attr("title") || "";
				return t("<a>").text(e).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			tooltipClass: null,
			track: !1,
			close: null,
			open: null
		},
		_create: function () {
			this._on({
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
		},
		_setOption: function (e, i) {
			var s = this;
			return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
				s._updateContent(e)
			}), void 0)
		},
		_disable: function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0], e.close(n, !0)
			}), this.element.find(this.options.items).addBack().each(function () {
				var e = t(this);
				e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
			})
		},
		_enable: function () {
			this.element.find(this.options.items).addBack().each(function () {
				var e = t(this);
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			})
		},
		open: function (e) {
			var i = this,
				s = t(e ? e.target : this.element).closest(this.options.items);
			s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
				var e, s = t(this);
				s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
					element: this,
					title: s.attr("title")
				}, s.attr("title", ""))
			}), this._updateContent(s, e))
		},
		_updateContent: function (t, e) {
			var i, s = this.options.content,
				n = this,
				o = e ? e.type : null;
			return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
				t.data("ui-tooltip-open") && n._delay(function () {
					e && (e.type = o), this._open(e, t, i)
				})
			}), i && this._open(e, t, i), void 0)
		},
		_open: function (i, s, n) {
			function o(t) {
				l.of = t, a.is(":hidden") || a.position(l)
			}
			var a, r, h, l = t.extend({}, this.options.position);
			if (n) {
				if (a = this._find(s), a.length) {
					return a.find(".ui-tooltip-content").html(n), void 0
				}
				s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
					mousemove: o
				}), o(i)) : a.position(t.extend({ of: s
				}, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
					a.is(":visible") && (o(l.of), clearInterval(h))
				}, t.fx.interval)), this._trigger("open", i, {
					tooltip: a
				}), r = {
					keyup: function (e) {
						if (e.keyCode === t.ui.keyCode.ESCAPE) {
							var i = t.Event(e);
							i.currentTarget = s[0], this.close(i, !0)
						}
					},
					remove: function () {
						this._removeTooltip(a)
					}
				}, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
			}
		},
		close: function (e) {
			var s = this,
				n = t(e ? e.currentTarget : this.element),
				o = this._find(n);
			this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function () {
				s._removeTooltip(t(this))
			}), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
				t(i.element).attr("title", i.title), delete s.parents[e]
			}), this.closing = !0, this._trigger("close", e, {
				tooltip: o
			}), this.closing = !1)
		},
		_tooltip: function (e) {
			var i = "ui-tooltip-" + s++,
				n = t("<div>").attr({
					id: i,
					role: "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
			return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
		},
		_find: function (e) {
			var i = e.data("ui-tooltip-id");
			return i ? t("#" + i) : t()
		},
		_removeTooltip: function (t) {
			t.remove(), delete this.tooltips[t.attr("id")]
		},
		_destroy: function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
			})
		}
	})
})(jQuery);
if ("undefined" == typeof jQuery) {
	throw new Error("Bootstrap's JavaScript requires jQuery")
} + function (a) {
	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b) {
			if (void 0 !== a.style[c]) {
				return {
					end: b[c]

				}
			}
		}
		return !1
	}
	a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
			d = this;
		a(this).one(a.support.transition.end, function () {
			c = !0
		});
		var e = function () {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function () {
		a.support.transition = b()
	})
}(jQuery), + function (a) {
	var b = '[data-dismiss="alert"]',
		c = function (c) {
			a(c).on("click", b, this.close)
		};
	c.prototype.close = function (b) {
		function c() {
			f.trigger("closed.bs.alert").remove()
		}
		var d = a(this),
			e = d.attr("data-target");
		e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
		var f = a(e);
		b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
	};
	var d = a.fn.alert;
	a.fn.alert = function (b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.alert");
			e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
		})
	}, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
		return a.fn.alert = d, this
	}, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), + function (a) {
	var b = function (c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
	};
	b.DEFAULTS = {
		loadingText: "loading..."
	}, b.prototype.setState = function (b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function () {
			"loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	}, b.prototype.toggle = function () {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
		}
		a && this.$element.toggleClass("active")
	};
	var c = a.fn.button;
	a.fn.button = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof c && c;
			e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
		})
	}, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
		return a.fn.button = c, this
	}, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
		var c = a(b.target);
		c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
	})
}(jQuery), + function (a) {
	var b = function (b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
	};
	b.DEFAULTS = {
		interval: 5000,
		pause: "hover",
		wrap: !0
	}, b.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, b.prototype.getActiveIndex = function () {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	}, b.prototype.to = function (b) {
		var c = this,
			d = this.getActiveIndex();
		return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			c.to(b)
		}) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
	}, b.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, b.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	}, b.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	}, b.prototype.slide = function (b, c) {
		var d = this.$element.find(".item.active"),
			e = c || d[b](),
			f = this.interval,
			g = "next" == b ? "left" : "right",
			h = "next" == b ? "first" : "last",
			i = this;
		if (!e.length) {
			if (!this.options.wrap) {
				return
			}
			e = this.$element.find(".item")[h]()
		}
		if (e.hasClass("active")) {
			return this.sliding = !1
		}
		var j = a.Event("slide.bs.carousel", {
			relatedTarget: e[0],
			direction: g
		});
		return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
			var b = a(i.$indicators.children()[i.getActiveIndex()]);
			b && b.addClass("active")
		})), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
			e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
				i.$element.trigger("slid.bs.carousel")
			}, 0)
		}).emulateTransitionEnd(1000 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this)
	};
	var c = a.fn.carousel;
	a.fn.carousel = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
				g = "string" == typeof c ? c : f.slide;
			e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = c, this
	}, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
		var c, d = a(this),
			e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
			f = a.extend({}, e.data(), d.data()),
			g = d.attr("data-slide-to");
		g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
	}), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var b = a(this);
			b.carousel(b.data())
		})
	})
}(jQuery), + function (a) {
	var b = function (c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
	};
	b.DEFAULTS = {
		toggle: !0
	}, b.prototype.dimension = function () {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, b.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b = a.Event("show.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.$parent && this.$parent.find("> .panel > .in");
				if (c && c.length) {
					var d = c.data("bs.collapse");
					if (d && d.transitioning) {
						return
					}
					c.collapse("hide"), d || c.data("bs.collapse", null)
				}
				var e = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
				var f = function () {
					this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
				};
				if (!a.support.transition) {
					return f.call(this)
				}
				var g = a.camelCase(["scroll", e].join("-"));
				this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
			}
		}
	}, b.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var d = function () {
					this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
				};
				return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
			}
		}
	}, b.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var c = a.fn.collapse;
	a.fn.collapse = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.collapse"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
			!e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = c, this
	}, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
		var c, d = a(this),
			e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
			f = a(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : d.data(),
			i = d.attr("data-parent"),
			j = i && a(i);
		g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
	})
}(jQuery), + function (a) {
	function b(b) {
		a(d).remove(), a(e).each(function () {
			var d = c(a(this)),
				e = {
					relatedTarget: this
				};
			d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
		})
	}

	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}
	var d = ".dropdown-backdrop",
		e = "[data-toggle=dropdown]",
		f = function (b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	f.prototype.toggle = function (d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if (b(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) {
					return
				}
				f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus()
			}
			return !1
		}
	}, f.prototype.keydown = function (b) {
		if (/(38|40|27)/.test(b.keyCode)) {
			var d = a(this);
			if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var f = c(d),
					g = f.hasClass("open");
				if (!g || g && 27 == b.keyCode) {
					return 27 == b.which && f.find(e).focus(), d.click()
				}
				var h = " li:not(.divider):visible a",
					i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
				if (i.length) {
					var j = i.index(i.filter(":focus"));
					38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus()
				}
			}
		}
	};
	var g = a.fn.dropdown;
	a.fn.dropdown = function (b) {
		return this.each(function () {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
		})
	}, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = g, this
	}, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
}(jQuery), + function (a) {
	var b = function (b, c) {
		this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	b.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, b.prototype.toggle = function (a) {
		return this[this.isShown ? "hide" : "show"](a)
	}, b.prototype.show = function (b) {
		var c = this,
			d = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
			var d = a.support.transition && c.$element.hasClass("fade");
			c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
			var e = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
				c.$element.focus().trigger(e)
			}).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
		}))
	}, b.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, b.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
		}, this))
	}, b.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, b.prototype.hideModal = function () {
		var a = this;
		this.$element.hide(), this.backdrop(function () {
			a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
		})
	}, b.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, b.prototype.backdrop = function (b) {
		var c = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var d = a.support.transition && c;
			if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
					a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
				}, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) {
				return
			}
			d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
		} else {
			!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
		}
	};
	var c = a.fn.modal;
	a.fn.modal = function (c, d) {
		return this.each(function () {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
			f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
		})
	}, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
		return a.fn.modal = c, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
		var c = a(this),
			d = c.attr("href"),
			e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = e.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(d) && d
			}, e.data(), c.data());
		c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function () {
			c.is(":visible") && c.focus()
		})
	}), a(document).on("show.bs.modal", ".modal", function () {
		a(document.body).addClass("modal-open")
	}).on("hidden.bs.modal", ".modal", function () {
		a(document.body).removeClass("modal-open")
	})
}(jQuery), + function (a) {
	var b = function (a, b) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
	};
	b.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	}, b.prototype.init = function (b, c, d) {
		this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) {
				this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this))
			} else {
				if ("manual" != g) {
					var h = "hover" == g ? "mouseenter" : "focusin",
						i = "hover" == g ? "mouseleave" : "focusout";
					this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
				}
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, b.prototype.getDefaults = function () {
		return b.DEFAULTS
	}, b.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, b.prototype.getDelegateOptions = function () {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, b.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show()
	}, b.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide()
	}, b.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(b), b.isDefaultPrevented()) {
				return
			}
			var c = this,
				d = this.tip();
			this.setContent(), this.options.animation && d.addClass("fade");
			var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
				f = /\s?auto?\s?/i,
				g = f.test(e);
			g && (e = e.replace(f, "") || "top"), d.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
			var h = this.getPosition(),
				i = d[0].offsetWidth,
				j = d[0].offsetHeight;
			if (g) {
				var k = this.$element.parent(),
					l = e,
					m = document.documentElement.scrollTop || document.body.scrollTop,
					n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
					o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
					p = "body" == this.options.container ? 0 : k.offset().left;
				e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
			}
			var q = this.getCalculatedOffset(e, h, i, j);
			this.applyPlacement(q, e), this.hoverState = null;
			var r = function () {
				c.$element.trigger("shown.bs." + c.type)
			};
			a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
		}
	}, b.prototype.applyPlacement = function (b, c) {
		var d, e = this.tip(),
			f = e[0].offsetWidth,
			g = e[0].offsetHeight,
			h = parseInt(e.css("margin-top"), 10),
			i = parseInt(e.css("margin-left"), 10);
		isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
			using: function (a) {
				e.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), e.addClass("in");
		var j = e[0].offsetWidth,
			k = e[0].offsetHeight;
		if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
			var l = 0;
			b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
		} else {
			this.replaceArrow(k - g, k, "top")
		}
		d && e.offset(b)
	}, b.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
	}, b.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, b.prototype.hide = function () {
		function b() {
			"in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
		}
		var c = this,
			d = this.tip(),
			e = a.Event("hide.bs." + this.type);
		return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
	}, b.prototype.fixTitle = function () {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, b.prototype.hasContent = function () {
		return this.getTitle()
	}, b.prototype.getPosition = function () {
		var b = this.$element[0];
		return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
			width: b.offsetWidth,
			height: b.offsetHeight
		}, this.$element.offset())
	}, b.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, b.prototype.getTitle = function () {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, b.prototype.tip = function () {
		return this.$tip = this.$tip || a(this.options.template)
	}, b.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, b.prototype.validate = function () {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, b.prototype.enable = function () {
		this.enabled = !0
	}, b.prototype.disable = function () {
		this.enabled = !1
	}, b.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, b.prototype.toggle = function (b) {
		var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
		c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, b.prototype.destroy = function () {
		clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	var c = a.fn.tooltip;
	a.fn.tooltip = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof c && c;
			(e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
		})
	}, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = c, this
	}
}(jQuery), + function (a) {
	var b = function (a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) {
		throw new Error("Popover requires tooltip.js")
	}
	b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
		return b.DEFAULTS
	}, b.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, b.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, b.prototype.getContent = function () {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, b.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, b.prototype.tip = function () {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip
	};
	var c = a.fn.popover;
	a.fn.popover = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof c && c;
			(e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]())
		})
	}, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
		return a.fn.popover = c, this
	}
}(jQuery), + function (a) {
	function b(c, d) {
		var e, f = a.proxy(this.process, this);
		this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
	}
	b.DEFAULTS = {
		offset: 10
	}, b.prototype.refresh = function () {
		var b = this.$element[0] == window ? "offset" : "position";
		this.offsets = a([]), this.targets = a([]);
		var c = this;
		this.$body.find(this.selector).map(function () {
			var d = a(this),
				e = d.data("target") || d.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
			] || null
		}).sort(function (a, b) {
			return a[0] - b[0]
		}).each(function () {
			c.offsets.push(this[0]), c.targets.push(this[1])
		})
	}, b.prototype.process = function () {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			d = c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (b >= d) {
			return g != (a = f.last()[0]) && this.activate(a)
		}
		if (g && b <= e[0]) {
			return g != (a = f[0]) && this.activate(a)
		}
		for (a = e.length; a--;) {
			g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
		}
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	};
	var c = a.fn.scrollspy;
	a.fn.scrollspy = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = c, this
	}, a(window).on("load", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);
			b.scrollspy(b.data())
		})
	})
}(jQuery), + function (a) {
	var b = function (b) {
		this.element = a(b)
	};
	b.prototype.show = function () {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a")[0],
				f = a.Event("show.bs.tab", {
					relatedTarget: e
				});
			if (b.trigger(f), !f.isDefaultPrevented()) {
				var g = a(d);
				this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
					b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e
					})
				})
			}
		}
	}, b.prototype.activate = function (b, c, d) {
		function e() {
			f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
		}
		var f = c.find("> .active"),
			g = d && a.support.transition && f.hasClass("fade");
		g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
	};
	var c = a.fn.tab;
	a.fn.tab = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
		})
	}, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
		return a.fn.tab = c, this
	}, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
		b.preventDefault(), a(this).tab("show")
	})
}(jQuery), + function (a) {
	var b = function (c, d) {
		this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
	};
	b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
		offset: 0
	}, b.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) {
			return this.pinnedOffset
		}
		this.$element.removeClass(b.RESET).addClass("affix");
		var a = this.$window.scrollTop(),
			c = this.$element.offset();
		return this.pinnedOffset = c.top - a
	}, b.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, b.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var c = a(document).height(),
				d = this.$window.scrollTop(),
				e = this.$element.offset(),
				f = this.options.offset,
				g = f.top,
				h = f.bottom;
			"top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
			var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
			if (this.affixed !== i) {
				this.unpin && this.$element.css("top", "");
				var j = "affix" + (i ? "-" + i : ""),
					k = a.Event(j + ".bs.affix");
				this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
					top: c - h - this.$element.height()
				}))
			}
		}
	};
	var c = a.fn.affix;
	a.fn.affix = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof c && c;
			e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
		return a.fn.affix = c, this
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var b = a(this),
				c = b.data();
			c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
		})
	})
}(jQuery);
(function ($, window, document, undefined) {
	var pluginName = "metisMenu",
		defaults = {
			toggle: true
		};

	function Plugin(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init()
	}
	Plugin.prototype = {
		init: function () {
			var $this = $(this.element),
				$toggle = this.settings.toggle;
			$this.find("li.active").has("ul").children("ul").addClass("collapse in");
			$this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
			$this.find("li").has("ul").children("a").on("click", function (e) {
				e.preventDefault();
				$(this).parent("li").toggleClass("active").children("ul").collapse("toggle");
				if ($toggle) {
					$(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")
				}
			})
		}
	};
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options))
			}
		})
	}
})(jQuery, window, document);
(function (f) {
	jQuery.fn.extend({
		slimScroll: function (h) {
			var a = f.extend({
				width: "auto",
				height: "250px",
				size: "7px",
				color: "#000",
				position: "right",
				distance: "1px",
				start: "top",
				opacity: 0.4,
				alwaysVisible: !1,
				disableFadeOut: !1,
				railVisible: !1,
				railColor: "#333",
				railOpacity: 0.2,
				railDraggable: !0,
				railClass: "slimScrollRail",
				barClass: "slimScrollBar",
				wrapperClass: "slimScrollDiv",
				allowPageScroll: !1,
				wheelStep: 20,
				touchScrollStep: 200,
				borderRadius: "7px",
				railBorderRadius: "7px"
			}, h);
			this.each(function () {
				function r(d) {
					if (s) {
						d = d || window.event;
						var c = 0;
						d.wheelDelta && (c = -d.wheelDelta / 120);
						d.detail && (c = d.detail / 3);
						f(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && m(c, !0);
						d.preventDefault && !k && d.preventDefault();
						k || (d.returnValue = !1)
					}
				}

				function m(d, f, h) {
					k = !1;
					var e = d,
						g = b.outerHeight() - c.outerHeight();
					f && (e = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), e = Math.min(Math.max(e, 0), g), e = 0 < d ? Math.ceil(e) : Math.floor(e), c.css({
						top: e + "px"
					}));
					l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
					e = l * (b[0].scrollHeight - b.outerHeight());
					h && (e = d, d = e / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), g), c.css({
						top: d + "px"
					}));
					b.scrollTop(e);
					b.trigger("slimscrolling", ~~e);
					v();
					p()
				}

				function C() {
					window.addEventListener ? (this.addEventListener("DOMMouseScroll", r, !1), this.addEventListener("mousewheel", r, !1), this.addEventListener("MozMousePixelScroll", r, !1)) : document.attachEvent("onmousewheel", r)
				}

				function w() {
					u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), D);
					c.css({
						height: u + "px"
					});
					var a = u == b.outerHeight() ? "none" : "block";
					c.css({
						display: a
					})
				}

				function v() {
					w();
					clearTimeout(A);
					l == ~~l ? (k = a.allowPageScroll, B != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
					B = l;
					u >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && g.stop(!0, !0).fadeIn("fast"))
				}

				function p() {
					a.alwaysVisible || (A = setTimeout(function () {
						a.disableFadeOut && s || (x || y) || (c.fadeOut("slow"), g.fadeOut("slow"))
					}, 1000))
				}
				var s, x, y, A, z, u, l, B, D = 30,
					k = !1,
					b = f(this);
				if (b.parent().hasClass(a.wrapperClass)) {
					var n = b.scrollTop(),
						c = b.parent().find("." + a.barClass),
						g = b.parent().find("." + a.railClass);
					w();
					if (f.isPlainObject(h)) {
						if ("height" in h && "auto" == h.height) {
							b.parent().css("height", "auto");
							b.css("height", "auto");
							var q = b.parent().parent().height();
							b.parent().css("height", q);
							b.css("height", q)
						}
						if ("scrollTo" in h) {
							n = parseInt(a.scrollTo)
						} else {
							if ("scrollBy" in h) {
								n += parseInt(a.scrollBy)
							} else {
								if ("destroy" in h) {
									c.remove();
									g.remove();
									b.unwrap();
									return
								}
							}
						}
						m(n, !1, !0)
					}
				} else {
					a.height = "auto" == a.height ? b.parent().height() : a.height;
					n = f("<div></div>").addClass(a.wrapperClass).css({
						position: "relative",
						overflow: "hidden",
						width: a.width,
						height: a.height
					});
					b.css({
						overflow: "hidden",
						width: a.width,
						height: a.height
					});
					var g = f("<div></div>").addClass(a.railClass).css({
							width: a.size,
							height: "100%",
							position: "absolute",
							top: 0,
							display: a.alwaysVisible && a.railVisible ? "block" : "none",
							"border-radius": a.railBorderRadius,
							background: a.railColor,
							opacity: a.railOpacity,
							zIndex: 90
						}),
						c = f("<div></div>").addClass(a.barClass).css({
							background: a.color,
							width: a.size,
							position: "absolute",
							top: 0,
							opacity: a.opacity,
							display: a.alwaysVisible ? "block" : "none",
							"border-radius": a.borderRadius,
							BorderRadius: a.borderRadius,
							MozBorderRadius: a.borderRadius,
							WebkitBorderRadius: a.borderRadius,
							zIndex: 99
						}),
						q = "right" == a.position ? {
							right: a.distance
						} : {
							left: a.distance
						};
					g.css(q);
					c.css(q);
					b.wrap(n);
					b.parent().append(c);
					b.parent().append(g);
					a.railDraggable && c.bind("mousedown", function (a) {
						var b = f(document);
						y = !0;
						t = parseFloat(c.css("top"));
						pageY = a.pageY;
						b.bind("mousemove.slimscroll", function (a) {
							currTop = t + a.pageY - pageY;
							c.css("top", currTop);
							m(0, c.position().top, !1)
						});
						b.bind("mouseup.slimscroll", function (a) {
							y = !1;
							p();
							b.unbind(".slimscroll")
						});
						return !1
					}).bind("selectstart.slimscroll", function (a) {
						a.stopPropagation();
						a.preventDefault();
						return !1
					});
					g.hover(function () {
						v()
					}, function () {
						p()
					});
					c.hover(function () {
						x = !0
					}, function () {
						x = !1
					});
					b.hover(function () {
						s = !0;
						v();
						p()
					}, function () {
						s = !1;
						p()
					});
					b.bind("touchstart", function (a, b) {
						a.originalEvent.touches.length && (z = a.originalEvent.touches[0].pageY)
					});
					b.bind("touchmove", function (b) {
						k || b.originalEvent.preventDefault();
						b.originalEvent.touches.length && (m((z - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), z = b.originalEvent.touches[0].pageY)
					});
					w();
					"bottom" === a.start ? (c.css({
						top: b.outerHeight() - c.outerHeight()
					}), m(0, !0)) : "top" !== a.start && (m(f(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
					C()
				}
			});
			return this
		}
	});
	jQuery.fn.extend({
		slimscroll: jQuery.fn.slimScroll
	})
})(jQuery);
! function (a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
	function a() {
		return je.apply(null, arguments)
	}

	function b(a) {
		je = a
	}

	function c(a) {
		return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		return "[object Object]" === Object.prototype.toString.call(a)
	}

	function e(a) {
		var b;
		for (b in a) {
			return !1
		}
		return !0
	}

	function f(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}

	function g(a, b) {
		var c, d = [];
		for (c = 0; c < a.length; ++c) {
			d.push(b(a[c], c))
		}
		return d
	}

	function h(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}

	function i(a, b) {
		for (var c in b) {
			h(b, c) && (a[c] = b[c])
		}
		return h(b, "toString") && (a.toString = b.toString), h(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function j(a, b, c, d) {
		return qb(a, b, c, d, !0).utc()
	}

	function k() {
	
	}

	function l(a) {
		return null == a._pf && (a._pf = k()), a._pf
	}

	function m(a) {
		if (null == a._isValid) {
			var b = l(a),
				c = ke.call(b.parsedDateParts, function (a) {
					return null != a
				});
			a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
		}
		return a._isValid
	}

	function n(a) {
		var b = j(NaN);
		return null != a ? i(l(b), a) : l(b).userInvalidated = !0, b
	}

	function o(a) {
		return void 0 === a
	}

	function p(a, b) {
		var c, d, e;
		if (o(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), o(b._i) || (a._i = b._i), o(b._f) || (a._f = b._f), o(b._l) || (a._l = b._l), o(b._strict) || (a._strict = b._strict), o(b._tzm) || (a._tzm = b._tzm), o(b._isUTC) || (a._isUTC = b._isUTC), o(b._offset) || (a._offset = b._offset), o(b._pf) || (a._pf = l(b)), o(b._locale) || (a._locale = b._locale), le.length > 0) {
			for (c in le) {
				d = le[c], e = b[d], o(e) || (a[d] = e)
			}
		}
		return a
	}

	function q(b) {
		p(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), me === !1 && (me = !0, a.updateOffset(this), me = !1)
	}

	function r(a) {
		return a instanceof q || null != a && null != a._isAMomentObject
	}

	function s(a) {
		return 0 > a ? Math.ceil(a) || 0 : Math.floor(a)
	}

	function t(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = s(b)), c
	}

	function u(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; e > d; d++) {
			(c && a[d] !== b[d] || !c && t(a[d]) !== t(b[d])) && g++
		}
		return g + f
	}

	function v(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}

	function w(b, c) {
		var d = !0;
		return i(function () {
			return null != a.deprecationHandler && a.deprecationHandler(null, b), d && (v(b + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), d = !1), c.apply(this, arguments)
		}, c)
	}

	function x(b, c) {
		null != a.deprecationHandler && a.deprecationHandler(b, c), ne[b] || (v(c), ne[b] = !0)
	}

	function y(a) {
		return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
	}

	function z(a) {
		var b, c;
		for (c in a) {
			b = a[c], y(b) ? this[c] = b : this["_" + c] = b
		}
		this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}

	function A(a, b) {
		var c, e = i({}, a);
		for (c in b) {
			h(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, i(e[c], a[c]), i(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c])
		}
		for (c in a) {
			h(a, c) && !h(b, c) && d(a[c]) && (e[c] = i({}, e[c]))
		}
		return e
	}

	function B(a) {
		null != a && this.set(a)
	}

	function C(a, b, c) {
		var d = this._calendar[a] || this._calendar.sameElse;
		return y(d) ? d.call(b, c) : d
	}

	function D(a) {
		var b = this._longDateFormat[a],
			c = this._longDateFormat[a.toUpperCase()];
		return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
			return a.slice(1)
		}), this._longDateFormat[a])
	}

	function E() {
		return this._invalidDate
	}

	function F(a) {
		return this._ordinal.replace("%d", a)
	}

	function G(a, b, c, d) {
		var e = this._relativeTime[c];
		return y(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
	}

	function H(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return y(c) ? c(b) : c.replace(/%s/i, b)
	}

	function I(a, b) {
		var c = a.toLowerCase();
		we[c] = we[c + "s"] = we[b] = a
	}

	function J(a) {
		return "string" == typeof a ? we[a] || we[a.toLowerCase()] : void 0
	}

	function K(a) {
		var b, c, d = {};
		for (c in a) {
			h(a, c) && (b = J(c), b && (d[b] = a[c]))
		}
		return d
	}

	function L(a, b) {
		xe[a] = b
	}

	function M(a) {
		var b = [];
		for (var c in a) {
			b.push({
				unit: c,
				priority: xe[c]
			})
		}
		return b.sort(function (a, b) {
			return a.priority - b.priority
		}), b
	}

	function N(b, c) {
		return function (d) {
			return null != d ? (P(this, b, d), a.updateOffset(this, c), this) : O(this, b)
		}
	}

	function O(a, b) {
		return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
	}

	function P(a, b, c) {
		a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}

	function Q(a) {
		return a = J(a), y(this[a]) ? this[a]() : this
	}

	function R(a, b) {
		if ("object" == typeof a) {
			a = K(a);
			for (var c = M(a), d = 0; d < c.length; d++) {
				this[c[d].unit](a[c[d].unit])
			}
		} else {
			if (a = J(a), y(this[a])) {
				return this[a](b)
			}
		}
		return this
	}

	function S(a, b, c) {
		var d = "" + Math.abs(a),
			e = b - d.length,
			f = a >= 0;
		return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
	}

	function T(a, b, c, d) {
		var e = d;
		"string" == typeof d && (e = function () {
			return this[d]()
		}), a && (Be[a] = e), b && (Be[b[0]] = function () {
			return S(e.apply(this, arguments), b[1], b[2])
		}), c && (Be[c] = function () {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}

	function U(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function V(a) {
		var b, c, d = a.match(ye);
		for (b = 0, c = d.length; c > b; b++) {
			Be[d[b]] ? d[b] = Be[d[b]] : d[b] = U(d[b])
		}
		return function (b) {
			var e, f = "";
			for (e = 0; c > e; e++) {
				f += d[e] instanceof Function ? d[e].call(b, a) : d[e]
			}
			return f
		}
	}

	function W(a, b) {
		return a.isValid() ? (b = X(b, a.localeData()), Ae[b] = Ae[b] || V(b), Ae[b](a)) : a.localeData().invalidDate()
	}

	function X(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (ze.lastIndex = 0; d >= 0 && ze.test(a);) {
			a = a.replace(ze, c), ze.lastIndex = 0, d -= 1
		}
		return a
	}

	function Y(a, b, c) {
		Te[a] = y(b) ? b : function (a, d) {
			return a && c ? c : b
		}
	}

	function Z(a, b) {
		return h(Te, a) ? Te[a](b._strict, b._locale) : new RegExp($(a))
	}

	function $(a) {
		return _(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
			return b || c || d || e
		}))
	}

	function _(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function aa(a, b) {
		var c, d = b;
		for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
				c[b] = t(a)
			}), c = 0; c < a.length; c++) {
			Ue[a[c]] = d
		}
	}

	function ba(a, b) {
		aa(a, function (a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}

	function ca(a, b, c) {
		null != b && h(Ue, a) && Ue[a](b, c._a, c, a)
	}

	function da(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function ea(a, b) {
		return c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || cf).test(b) ? "format" : "standalone"][a.month()]
	}

	function fa(a, b) {
		return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[cf.test(b) ? "format" : "standalone"][a.month()]
	}

	function ga(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if (!this._monthsParse) {
			for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; 12 > d; ++d) {
				f = j([2000, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase()
			}
		}
		return c ? "MMM" === b ? (e = pe.call(this._shortMonthsParse, g), -1 !== e ? e : null) : (e = pe.call(this._longMonthsParse, g), -1 !== e ? e : null) : "MMM" === b ? (e = pe.call(this._shortMonthsParse, g), -1 !== e ? e : (e = pe.call(this._longMonthsParse, g), -1 !== e ? e : null)) : (e = pe.call(this._longMonthsParse, g), -1 !== e ? e : (e = pe.call(this._shortMonthsParse, g), -1 !== e ? e : null))
	}

	function ha(a, b, c) {
		var d, e, f;
		if (this._monthsParseExact) {
			return ga.call(this, a, b, c)
		}
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
			if (e = j([2000, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) {
				return d
			}
			if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) {
				return d
			}
			if (!c && this._monthsParse[d].test(a)) {
				return d
			}
		}
	}

	function ia(a, b) {
		var c;
		if (!a.isValid()) {
			return a
		}
		if ("string" == typeof b) {
			if (/^\d+$/.test(b)) {
				b = t(b)
			} else {
				if (b = a.localeData().monthsParse(b), "number" != typeof b) {
					return a
				}
			}
		}
		return c = Math.min(a.date(), da(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
	}

	function ja(b) {
		return null != b ? (ia(this, b), a.updateOffset(this, !0), this) : O(this, "Month")
	}

	function ka() {
		return da(this.year(), this.month())
	}

	function la(a) {
		return this._monthsParseExact ? (h(this, "_monthsRegex") || na.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = ff), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}

	function ma(a) {
		return this._monthsParseExact ? (h(this, "_monthsRegex") || na.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = gf), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
	}

	function na() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d = [],
			e = [],
			f = [];
		for (b = 0; 12 > b; b++) {
			c = j([2000, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""))
		}
		for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) {
			d[b] = _(d[b]), e[b] = _(e[b])
		}
		for (b = 0; 24 > b; b++) {
			f[b] = _(f[b])
		}
		this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
	}

	function oa(a) {
		return pa(a) ? 366 : 365
	}

	function pa(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function qa() {
		return pa(this.year())
	}

	function ra(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
	}

	function sa(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
	}

	function ta(a, b, c) {
		var d = 7 + b - c,
			e = (7 + sa(a, 0, d).getUTCDay() - b) % 7;
		return -e + d - 1
	}

	function ua(a, b, c, d, e) {
		var f, g, h = (7 + c - d) % 7,
			i = ta(a, d, e),
			j = 1 + 7 * (b - 1) + h + i;
		return 0 >= j ? (f = a - 1, g = oa(f) + j) : j > oa(a) ? (f = a + 1, g = j - oa(a)) : (f = a, g = j), {
			year: f,
			dayOfYear: g
		}
	}

	function va(a, b, c) {
		var d, e, f = ta(a.year(), b, c),
			g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
		return 1 > g ? (e = a.year() - 1, d = g + wa(e, b, c)) : g > wa(a.year(), b, c) ? (d = g - wa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
			week: d,
			year: e
		}
	}

	function wa(a, b, c) {
		var d = ta(a, b, c),
			e = ta(a + 1, b, c);
		return (oa(a) - d + e) / 7
	}

	function xa(a) {
		return va(a, this._week.dow, this._week.doy).week
	}

	function ya() {
		return this._week.dow
	}

	function za() {
		return this._week.doy
	}

	function Aa(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ba(a) {
		var b = va(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ca(a, b) {
		return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
	}

	function Da(a, b) {
		return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
	}

	function Ea(a, b) {
		return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
	}

	function Fa(a) {
		return this._weekdaysShort[a.day()]
	}

	function Ga(a) {
		return this._weekdaysMin[a.day()]
	}

	function Ha(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if (!this._weekdaysParse) {
			for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; 7 > d; ++d) {
				f = j([2000, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase()
			}
		}
		return c ? "dddd" === b ? (e = pe.call(this._weekdaysParse, g), -1 !== e ? e : null) : "ddd" === b ? (e = pe.call(this._shortWeekdaysParse, g), -1 !== e ? e : null) : (e = pe.call(this._minWeekdaysParse, g), -1 !== e ? e : null) : "dddd" === b ? (e = pe.call(this._weekdaysParse, g), -1 !== e ? e : (e = pe.call(this._shortWeekdaysParse, g), -1 !== e ? e : (e = pe.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : "ddd" === b ? (e = pe.call(this._shortWeekdaysParse, g), -1 !== e ? e : (e = pe.call(this._weekdaysParse, g), -1 !== e ? e : (e = pe.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : (e = pe.call(this._minWeekdaysParse, g), -1 !== e ? e : (e = pe.call(this._weekdaysParse, g), -1 !== e ? e : (e = pe.call(this._shortWeekdaysParse, g), -1 !== e ? e : null)))
	}

	function Ia(a, b, c) {
		var d, e, f;
		if (this._weekdaysParseExact) {
			return Ha.call(this, a, b, c)
		}
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
			if (e = j([2000, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) {
				return d
			}
			if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) {
				return d
			}
			if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) {
				return d
			}
			if (!c && this._weekdaysParse[d].test(a)) {
				return d
			}
		}
	}

	function Ja(a) {
		if (!this.isValid()) {
			return null != a ? this : NaN
		}
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? (a = Ca(a, this.localeData()), this.add(a - b, "d")) : b
	}

	function Ka(a) {
		if (!this.isValid()) {
			return null != a ? this : NaN
		}
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}

	function La(a) {
		if (!this.isValid()) {
			return null != a ? this : NaN
		}
		if (null != a) {
			var b = Da(a, this.localeData());
			return this.day(this.day() % 7 ? b : b - 7)
		}
		return this.day() || 7
	}

	function Ma(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = nf), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}

	function Na(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = of ), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}

	function Oa(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = pf), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}

	function Pa() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d, e, f, g = [],
			h = [],
			i = [],
			k = [];
		for (b = 0; 7 > b; b++) {
			c = j([2000, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), k.push(d), k.push(e), k.push(f)
		}
		for (g.sort(a), h.sort(a), i.sort(a), k.sort(a), b = 0; 7 > b; b++) {
			h[b] = _(h[b]), i[b] = _(i[b]), k[b] = _(k[b])
		}
		this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
	}

	function Qa() {
		return this.hours() % 12 || 12
	}

	function Ra() {
		return this.hours() || 24
	}

	function Sa(a, b) {
		T(a, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}

	function Ta(a, b) {
		return b._meridiemParse
	}

	function Ua(a) {
		return "p" === (a + "").toLowerCase().charAt(0)
	}

	function Va(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}

	function Wa(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}

	function Xa(a) {
		for (var b, c, d, e, f = 0; f < a.length;) {
			for (e = Wa(a[f]).split("-"), b = e.length, c = Wa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if (d = Ya(e.slice(0, b).join("-"))) {
					return d
				}
				if (c && c.length >= b && u(e, c, !0) >= b - 1) {
					break
				}
				b--
			}
			f++
		}
		return null
	}

	function Ya(a) {
		var b = null;
		if (!uf[a] && "undefined" != typeof module && module && module.exports) {
			try {
				b = qf._abbr, require("./locale/" + a), Za(b)
			} catch (c) {}
		}
		return uf[a]
	}

	function Za(a, b) {
		var c;
		return a && (c = o(b) ? ab(a) : $a(a, b), c && (qf = c)), qf._abbr
	}

	function $a(a, b) {
		if (null !== b) {
			var c = tf;
			return b.abbr = a, null != uf[a] ? (x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = uf[a]._config) : null != b.parentLocale && (null != uf[b.parentLocale] ? c = uf[b.parentLocale]._config : x("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), uf[a] = new B(A(c, b)), Za(a), uf[a]
		}
		return delete uf[a], null
	}

	function _a(a, b) {
		if (null != b) {
			var c, d = tf;
			null != uf[a] && (d = uf[a]._config), b = A(d, b), c = new B(b), c.parentLocale = uf[a], uf[a] = c, Za(a)
		} else {
			null != uf[a] && (null != uf[a].parentLocale ? uf[a] = uf[a].parentLocale : null != uf[a] && delete uf[a])
		}
		return uf[a]
	}

	function ab(a) {
		var b;
		if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) {
			return qf
		}
		if (!c(a)) {
			if (b = Ya(a)) {
				return b
			}
			a = [a]
		}
		return Xa(a)
	}

	function bb() {
		return oe(uf)
	}

	function cb(a) {
		var b, c = a._a;
		return c && -2 === l(a).overflow && (b = c[We] < 0 || c[We] > 11 ? We : c[Xe] < 1 || c[Xe] > da(c[Ve], c[We]) ? Xe : c[Ye] < 0 || c[Ye] > 24 || 24 === c[Ye] && (0 !== c[Ze] || 0 !== c[$e] || 0 !== c[_e]) ? Ye : c[Ze] < 0 || c[Ze] > 59 ? Ze : c[$e] < 0 || c[$e] > 59 ? $e : c[_e] < 0 || c[_e] > 999 ? _e : -1, l(a)._overflowDayOfYear && (Ve > b || b > Xe) && (b = Xe), l(a)._overflowWeeks && -1 === b && (b = af), l(a)._overflowWeekday && -1 === b && (b = bf), l(a).overflow = b), a
	}

	function db(a) {
		var b, c, d, e, f, g, h = a._i,
			i = vf.exec(h) || wf.exec(h);
		if (i) {
			for (l(a).iso = !0, b = 0, c = yf.length; c > b; b++) {
				if (yf[b][1].exec(i[1])) {
					e = yf[b][0], d = yf[b][2] !== !1;
					break
				}
			}
			if (null == e) {
				return void(a._isValid = !1)
			}
			if (i[3]) {
				for (b = 0, c = zf.length; c > b; b++) {
					if (zf[b][1].exec(i[3])) {
						f = (i[2] || " ") + zf[b][0];
						break
					}
				}
				if (null == f) {
					return void(a._isValid = !1)
				}
			}
			if (!d && null != f) {
				return void(a._isValid = !1)
			}
			if (i[4]) {
				if (!xf.exec(i[4])) {
					return void(a._isValid = !1)
				}
				g = "Z"
			}
			a._f = e + (f || "") + (g || ""), jb(a)
		} else {
			a._isValid = !1
		}
	}

	function eb(b) {
		var c = Af.exec(b._i);
		return null !== c ? void(b._d = new Date(+c[1])) : (db(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
	}

	function fb(a, b, c) {
		return null != a ? a : null != b ? b : c
	}

	function gb(b) {
		var c = new Date(a.now());
		return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
	}

	function hb(a) {
		var b, c, d, e, f = [];
		if (!a._d) {
			for (d = gb(a), a._w && null == a._a[Xe] && null == a._a[We] && ib(a), a._dayOfYear && (e = fb(a._a[Ve], d[Ve]), a._dayOfYear > oa(e) && (l(a)._overflowDayOfYear = !0), c = sa(e, 0, a._dayOfYear), a._a[We] = c.getUTCMonth(), a._a[Xe] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) {
				a._a[b] = f[b] = d[b]
			}
			for (; 7 > b; b++) {
				a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b]
			}
			24 === a._a[Ye] && 0 === a._a[Ze] && 0 === a._a[$e] && 0 === a._a[_e] && (a._nextDay = !0, a._a[Ye] = 0), a._d = (a._useUTC ? sa : ra).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Ye] = 24)
		}
	}

	function ib(a) {
		var b, c, d, e, f, g, h, i;
		b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = fb(b.GG, a._a[Ve], va(rb(), 1, 4).year), d = fb(b.W, 1), e = fb(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = fb(b.gg, a._a[Ve], va(rb(), f, g).year), d = fb(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > wa(c, f, g) ? l(a)._overflowWeeks = !0 : null != i ? l(a)._overflowWeekday = !0 : (h = ua(c, d, e, f, g), a._a[Ve] = h.year, a._dayOfYear = h.dayOfYear)
	}

	function jb(b) {
		if (b._f === a.ISO_8601) {
			return void db(b)
		}
		b._a = [], l(b).empty = !0;
		var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			j = 0;
		for (e = X(b._f, b._locale).match(ye) || [], c = 0; c < e.length; c++) {
			f = e[c], d = (h.match(Z(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && l(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Be[f] ? (d ? l(b).empty = !1 : l(b).unusedTokens.push(f), ca(f, d, b)) : b._strict && !d && l(b).unusedTokens.push(f)
		}
		l(b).charsLeftOver = i - j, h.length > 0 && l(b).unusedInput.push(h), b._a[Ye] <= 12 && l(b).bigHour === !0 && b._a[Ye] > 0 && (l(b).bigHour = void 0), l(b).parsedDateParts = b._a.slice(0), l(b).meridiem = b._meridiem, b._a[Ye] = kb(b._locale, b._a[Ye], b._meridiem), hb(b), cb(b)
	}

	function kb(a, b, c) {
		var d;
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
	}

	function lb(a) {
		var b, c, d, e, f;
		if (0 === a._f.length) {
			return l(a).invalidFormat = !0, void(a._d = new Date(NaN))
		}
		for (e = 0; e < a._f.length; e++) {
			f = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], jb(b), m(b) && (f += l(b).charsLeftOver, f += 10 * l(b).unusedTokens.length, l(b).score = f, (null == d || d > f) && (d = f, c = b))
		}
		i(a, c || b)
	}

	function mb(a) {
		if (!a._d) {
			var b = K(a._i);
			a._a = g([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
				return a && parseInt(a, 10)
			}), hb(a)
		}
	}

	function nb(a) {
		var b = new q(cb(ob(a)));
		return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
	}

	function ob(a) {
		var b = a._i,
			d = a._f;
		return a._locale = a._locale || ab(a._l), null === b || void 0 === d && "" === b ? n({
			nullInput: !0
		}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), r(b) ? new q(cb(b)) : (c(d) ? lb(a) : f(b) ? a._d = b : d ? jb(a) : pb(a), m(a) || (a._d = null), a))
	}

	function pb(b) {
		var d = b._i;
		void 0 === d ? b._d = new Date(a.now()) : f(d) ? b._d = new Date(d.valueOf()) : "string" == typeof d ? eb(b) : c(d) ? (b._a = g(d.slice(0), function (a) {
			return parseInt(a, 10)
		}), hb(b)) : "object" == typeof d ? mb(b) : "number" == typeof d ? b._d = new Date(d) : a.createFromInputFallback(b)
	}

	function qb(a, b, f, g, h) {
		var i = {};
		return "boolean" == typeof f && (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, nb(i)
	}

	function rb(a, b, c, d) {
		return qb(a, b, c, d, !1)
	}

	function sb(a, b) {
		var d, e;
		if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) {
			return rb()
		}
		for (d = b[0], e = 1; e < b.length; ++e) {
			b[e].isValid() && !b[e][a](d) || (d = b[e])
		}
		return d
	}

	function tb() {
		var a = [].slice.call(arguments, 0);
		return sb("isBefore", a)
	}

	function ub() {
		var a = [].slice.call(arguments, 0);
		return sb("isAfter", a)
	}

	function vb(a) {
		var b = K(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		this._milliseconds = +k + 1000 * j + 60000 * i + 1000 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = ab(), this._bubble()
	}

	function wb(a) {
		return a instanceof vb
	}

	function xb(a, b) {
		T(a, 0, 0, function () {
			var a = this.utcOffset(),
				c = "+";
			return 0 > a && (a = -a, c = "-"), c + S(~~(a / 60), 2) + b + S(~~a % 60, 2)
		})
	}

	function yb(a, b) {
		var c = (b || "").match(a) || [],
			d = c[c.length - 1] || [],
			e = (d + "").match(Ef) || ["-", 0, 0],
			f = +(60 * e[1]) + t(e[2]);
		return "+" === e[0] ? f : -f
	}

	function zb(b, c) {
		var d, e;
		return c._isUTC ? (d = c.clone(), e = (r(b) || f(b) ? b.valueOf() : rb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : rb(b).local()
	}

	function Ab(a) {
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}

	function Bb(b, c) {
		var d, e = this._offset || 0;
		return this.isValid() ? null != b ? ("string" == typeof b ? b = yb(Qe, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ab(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? Sb(this, Mb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ab(this) : null != b ? this : NaN
	}

	function Cb(a, b) {
		return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}

	function Db(a) {
		return this.utcOffset(0, a)
	}

	function Eb(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ab(this), "m")), this
	}

	function Fb() {
		return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(yb(Pe, this._i)), this
	}

	function Gb(a) {
		return this.isValid() ? (a = a ? rb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
	}

	function Hb() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Ib() {
		if (!o(this._isDSTShifted)) {
			return this._isDSTShifted
		}
		var a = {};
		if (p(a, this), a = ob(a), a._a) {
			var b = a._isUTC ? j(a._a) : rb(a._a);
			this._isDSTShifted = this.isValid() && u(a._a, b.toArray()) > 0
		} else {
			this._isDSTShifted = !1
		}
		return this._isDSTShifted
	}

	function Jb() {
		return this.isValid() ? !this._isUTC : !1
	}

	function Kb() {
		return this.isValid() ? this._isUTC : !1
	}

	function Lb() {
		return this.isValid() ? this._isUTC && 0 === this._offset : !1
	}

	function Mb(a, b) {
		var c, d, e, f = a,
			g = null;
		return wb(a) ? f = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = Ff.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
			y: 0,
			d: t(g[Xe]) * c,
			h: t(g[Ye]) * c,
			m: t(g[Ze]) * c,
			s: t(g[$e]) * c,
			ms: t(g[_e]) * c
		}) : (g = Gf.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
			y: Nb(g[2], c),
			M: Nb(g[3], c),
			w: Nb(g[4], c),
			d: Nb(g[5], c),
			h: Nb(g[6], c),
			m: Nb(g[7], c),
			s: Nb(g[8], c)
		}) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Pb(rb(f.from), rb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new vb(f), wb(a) && h(a, "_locale") && (d._locale = a._locale), d
	}

	function Nb(a, b) {
		var c = a && parseFloat(a.replace(",", "."));
		return (isNaN(c) ? 0 : c) * b
	}

	function Ob(a, b) {
		var c = {
			milliseconds: 0,
			months: 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function Pb(a, b) {
		var c;
		return a.isValid() && b.isValid() ? (b = zb(b, a), a.isBefore(b) ? c = Ob(a, b) : (c = Ob(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
			milliseconds: 0,
			months: 0
		}
	}

	function Qb(a) {
		return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a)
	}

	function Rb(a, b) {
		return function (c, d) {
			var e, f;
			return null === d || isNaN(+d) || (x(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Mb(c, d), Sb(this, e, a), this
		}
	}

	function Sb(b, c, d, e) {
		var f = c._milliseconds,
			g = Qb(c._days),
			h = Qb(c._months);
		b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(b._d.valueOf() + f * d), g && P(b, "Date", O(b, "Date") + g * d), h && ia(b, O(b, "Month") + h * d), e && a.updateOffset(b, g || h))
	}

	function Tb(a, b) {
		var c = a.diff(b, "days", !0);
		return -6 > c ? "sameElse" : -1 > c ? "lastWeek" : 0 > c ? "lastDay" : 1 > c ? "sameDay" : 2 > c ? "nextDay" : 7 > c ? "nextWeek" : "sameElse"
	}

	function Ub(b, c) {
		var d = b || rb(),
			e = zb(d, this).startOf("day"),
			f = a.calendarFormat(this, e) || "sameElse",
			g = c && (y(c[f]) ? c[f].call(this, d) : c[f]);
		return this.format(g || this.localeData().calendar(f, this, rb(d)))
	}

	function Vb() {
		return new q(this)
	}

	function Wb(a, b) {
		var c = r(a) ? a : rb(a);
		return this.isValid() && c.isValid() ? (b = J(o(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf()) : !1
	}

	function Xb(a, b) {
		var c = r(a) ? a : rb(a);
		return this.isValid() && c.isValid() ? (b = J(o(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf()) : !1
	}

	function Yb(a, b, c, d) {
		return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
	}

	function Zb(a, b) {
		var c, d = r(a) ? a : rb(a);
		return this.isValid() && d.isValid() ? (b = J(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf())) : !1
	}

	function $b(a, b) {
		return this.isSame(a, b) || this.isAfter(a, b)
	}

	function _b(a, b) {
		return this.isSame(a, b) || this.isBefore(a, b)
	}

	function ac(a, b, c) {
		var d, e, f, g;
		return this.isValid() ? (d = zb(a, this), d.isValid() ? (e = 60000 * (d.utcOffset() - this.utcOffset()), b = J(b), "year" === b || "month" === b || "quarter" === b ? (g = bc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1000 : "minute" === b ? f / 60000 : "hour" === b ? f / 3600000 : "day" === b ? (f - e) / 86400000 : "week" === b ? (f - e) / 604800000 : f), c ? g : s(g)) : NaN) : NaN
	}

	function bc(a, b) {
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			f = a.clone().add(e, "months");
		return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
	}

	function cc() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function dc() {
		var a = this.clone().utc();
		return 0 < a.year() && a.year() <= 9999 ? y(Date.prototype.toISOString) ? this.toDate().toISOString() : W(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}

	function ec(b) {
		b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
		var c = W(this, b);
		return this.localeData().postformat(c)
	}

	function fc(a, b) {
		return this.isValid() && (r(a) && a.isValid() || rb(a).isValid()) ? Mb({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function gc(a) {
		return this.from(rb(), a)
	}

	function hc(a, b) {
		return this.isValid() && (r(a) && a.isValid() || rb(a).isValid()) ? Mb({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function ic(a) {
		return this.to(rb(), a)
	}

	function jc(a) {
		var b;
		return void 0 === a ? this._locale._abbr : (b = ab(a), null != b && (this._locale = b), this)
	}

	function kc() {
		return this._locale
	}

	function lc(a) {
		switch (a = J(a)) {
			case "year":
				this.month(0);
			case "quarter":
			case "month":
				this.date(1);
			case "week":
			case "isoWeek":
			case "day":
			case "date":
				this.hours(0);
			case "hour":
				this.minutes(0);
			case "minute":
				this.seconds(0);
			case "second":
				this.milliseconds(0)
		}
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function mc(a) {
		return a = J(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
	}

	function nc() {
		return this._d.valueOf() - 60000 * (this._offset || 0)
	}

	function oc() {
		return Math.floor(this.valueOf() / 1000)
	}

	function pc() {
		return new Date(this.valueOf())
	}

	function qc() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}

	function rc() {
		var a = this;
		return {
			years: a.year(),
			months: a.month(),
			date: a.date(),
			hours: a.hours(),
			minutes: a.minutes(),
			seconds: a.seconds(),
			milliseconds: a.milliseconds()
		}
	}

	function sc() {
		return this.isValid() ? this.toISOString() : null
	}

	function tc() {
		return m(this)
	}

	function uc() {
		return i({}, l(this))
	}

	function vc() {
		return l(this).overflow
	}

	function wc() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		}
	}

	function xc(a, b) {
		T(0, [a, a.length], 0, b)
	}

	function yc(a) {
		return Cc.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}

	function zc(a) {
		return Cc.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
	}

	function Ac() {
		return wa(this.year(), 1, 4)
	}

	function Bc() {
		var a = this.localeData()._week;
		return wa(this.year(), a.dow, a.doy)
	}

	function Cc(a, b, c, d, e) {
		var f;
		return null == a ? va(this, d, e).year : (f = wa(a, d, e), b > f && (b = f), Dc.call(this, a, b, c, d, e))
	}

	function Dc(a, b, c, d, e) {
		var f = ua(a, b, c, d, e),
			g = sa(f.year, 0, f.dayOfYear);
		return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
	}

	function Ec(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}

	function Fc(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 86400000) + 1;
		return null == a ? b : this.add(a - b, "d")
	}

	function Gc(a, b) {
		b[_e] = t(1000 * ("0." + a))
	}

	function Hc() {
		return this._isUTC ? "UTC" : ""
	}

	function Ic() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Jc(a) {
		return rb(1000 * a)
	}

	function Kc() {
		return rb.apply(null, arguments).parseZone()
	}

	function Lc(a) {
		return a
	}

	function Mc(a, b, c, d) {
		var e = ab(),
			f = j().set(d, b);
		return e[c](f, a)
	}

	function Nc(a, b, c) {
		if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) {
			return Mc(a, b, c, "month")
		}
		var d, e = [];
		for (d = 0; 12 > d; d++) {
			e[d] = Mc(a, d, c, "month")
		}
		return e
	}

	function Oc(a, b, c, d) {
		"boolean" == typeof a ? ("number" == typeof b && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, "number" == typeof b && (c = b, b = void 0), b = b || "");
		var e = ab(),
			f = a ? e._week.dow : 0;
		if (null != c) {
			return Mc(b, (c + f) % 7, d, "day")
		}
		var g, h = [];
		for (g = 0; 7 > g; g++) {
			h[g] = Mc(b, (g + f) % 7, d, "day")
		}
		return h
	}

	function Pc(a, b) {
		return Nc(a, b, "months")
	}

	function Qc(a, b) {
		return Nc(a, b, "monthsShort")
	}

	function Rc(a, b, c) {
		return Oc(a, b, c, "weekdays")
	}

	function Sc(a, b, c) {
		return Oc(a, b, c, "weekdaysShort")
	}

	function Tc(a, b, c) {
		return Oc(a, b, c, "weekdaysMin")
	}

	function Uc() {
		var a = this._data;
		return this._milliseconds = Sf(this._milliseconds), this._days = Sf(this._days), this._months = Sf(this._months), a.milliseconds = Sf(a.milliseconds), a.seconds = Sf(a.seconds), a.minutes = Sf(a.minutes), a.hours = Sf(a.hours), a.months = Sf(a.months), a.years = Sf(a.years), this
	}

	function Vc(a, b, c, d) {
		var e = Mb(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}

	function Wc(a, b) {
		return Vc(this, a, b, 1)
	}

	function Xc(a, b) {
		return Vc(this, a, b, -1)
	}

	function Yc(a) {
		return 0 > a ? Math.floor(a) : Math.ceil(a)
	}

	function Zc() {
		var a, b, c, d, e, f = this._milliseconds,
			g = this._days,
			h = this._months,
			i = this._data;
		return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 86400000 * Yc(_c(h) + g), g = 0, h = 0), i.milliseconds = f % 1000, a = s(f / 1000), i.seconds = a % 60, b = s(a / 60), i.minutes = b % 60, c = s(b / 60), i.hours = c % 24, g += s(c / 24), e = s($c(g)), h += e, g -= Yc(_c(e)), d = s(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
	}

	function $c(a) {
		return 4800 * a / 146097
	}

	function _c(a) {
		return 146097 * a / 4800
	}

	function ad(a) {
		var b, c, d = this._milliseconds;
		if (a = J(a), "month" === a || "year" === a) {
			return b = this._days + d / 86400000, c = this._months + $c(b), "month" === a ? c : c / 12
		}
		switch (b = this._days + Math.round(_c(this._months)), a) {
			case "week":
				return b / 7 + d / 604800000;
			case "day":
				return b + d / 86400000;
			case "hour":
				return 24 * b + d / 3600000;
			case "minute":
				return 1440 * b + d / 60000;
			case "second":
				return 86400 * b + d / 1000;
			case "millisecond":
				return Math.floor(86400000 * b) + d;
			default:
				throw new Error("Unknown unit " + a)
		}
	}

	function bd() {
		return this._milliseconds + 86400000 * this._days + this._months % 12 * 2592000000 + 31536000000 * t(this._months / 12)
	}

	function cd(a) {
		return function () {
			return this.as(a)
		}
	}

	function dd(a) {
		return a = J(a), this[a + "s"]()
	}

	function ed(a) {
		return function () {
			return this._data[a]
		}
	}

	function fd() {
		return s(this.days() / 7)
	}

	function gd(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function hd(a, b, c) {
		var d = Mb(a).abs(),
			e = gg(d.as("s")),
			f = gg(d.as("m")),
			g = gg(d.as("h")),
			h = gg(d.as("d")),
			i = gg(d.as("M")),
			j = gg(d.as("y")),
			k = e < hg.s && ["s", e] || 1 >= f && ["m"] || f < hg.m && ["mm", f] || 1 >= g && ["h"] || g < hg.h && ["hh", g] || 1 >= h && ["d"] || h < hg.d && ["dd", h] || 1 >= i && ["M"] || i < hg.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, gd.apply(null, k)
	}

	function id(a) {
		return void 0 === a ? gg : "function" == typeof a ? (gg = a, !0) : !1
	}

	function jd(a, b) {
		return void 0 === hg[a] ? !1 : void 0 === b ? hg[a] : (hg[a] = b, !0)
	}

	function kd(a) {
		var b = this.localeData(),
			c = hd(this, !a, b);
		return a && (c = b.pastFuture(+this, c)), b.postformat(c)
	}

	function ld() {
		var a, b, c, d = ig(this._milliseconds) / 1000,
			e = ig(this._days),
			f = ig(this._months);
		a = s(d / 60), b = s(a / 60), d %= 60, a %= 60, c = s(f / 12), f %= 12;
		var g = c,
			h = f,
			i = e,
			j = b,
			k = a,
			l = d,
			m = this.asSeconds();
		return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
	}

	function md(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}

	function nd(a, b, c) {
		var d = {
			mm: b ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
			hh: b ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
			dd: "дзень_дні_дзён",
			MM: "месяц_месяцы_месяцаў",
			yy: "год_гады_гадоў"
		};
		return "m" === c ? b ? "хвіліна" : "хвіліну" : "h" === c ? b ? "гадзіна" : "гадзіну" : a + " " + md(d[c], +a)
	}

	function od(a, b, c) {
		var d = {
			mm: "munutenn",
			MM: "miz",
			dd: "devezh"
		};
		return a + " " + rd(d[c], a)
	}

	function pd(a) {
		switch (qd(a)) {
			case 1:
			case 3:
			case 4:
			case 5:
			case 9:
				return a + " bloaz";
			default:
				return a + " vloaz"
		}
	}

	function qd(a) {
		return a > 9 ? qd(a % 10) : a
	}

	function rd(a, b) {
		return 2 === b ? sd(a) : a
	}

	function sd(a) {
		var b = {
			m: "v",
			b: "v",
			d: "z"
		};
		return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1)
	}

	function td(a, b, c) {
		var d = a + " ";
		switch (c) {
			case "m":
				return b ? "jedna minuta" : "jedne minute";
			case "mm":
				return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
			case "h":
				return b ? "jedan sat" : "jednog sata";
			case "hh":
				return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
			case "dd":
				return d += 1 === a ? "dan" : "dana";
			case "MM":
				return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
			case "yy":
				return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
		}
	}

	function ud(a) {
		return a > 1 && 5 > a && 1 !== ~~(a / 10)
	}

	function vd(a, b, c, d) {
		var e = a + " ";
		switch (c) {
			case "s":
				return b || d ? "pár sekund" : "pár sekundami";
			case "m":
				return b ? "minuta" : d ? "minutu" : "minutou";
			case "mm":
				return b || d ? e + (ud(a) ? "minuty" : "minut") : e + "minutami";
				break;
			case "h":
				return b ? "hodina" : d ? "hodinu" : "hodinou";
			case "hh":
				return b || d ? e + (ud(a) ? "hodiny" : "hodin") : e + "hodinami";
				break;
			case "d":
				return b || d ? "den" : "dnem";
			case "dd":
				return b || d ? e + (ud(a) ? "dny" : "dní") : e + "dny";
				break;
			case "M":
				return b || d ? "měsíc" : "měsícem";
			case "MM":
				return b || d ? e + (ud(a) ? "měsíce" : "měsíců") : e + "měsíci";
				break;
			case "y":
				return b || d ? "rok" : "rokem";
			case "yy":
				return b || d ? e + (ud(a) ? "roky" : "let") : e + "lety"
		}
	}

	function wd(a, b, c, d) {
		var e = {
			m: ["eine Minute", "einer Minute"],
			h: ["eine Stunde", "einer Stunde"],
			d: ["ein Tag", "einem Tag"],
			dd: [a + " Tage", a + " Tagen"],
			M: ["ein Monat", "einem Monat"],
			MM: [a + " Monate", a + " Monaten"],
			y: ["ein Jahr", "einem Jahr"],
			yy: [a + " Jahre", a + " Jahren"]
		};
		return b ? e[c][0] : e[c][1]
	}

	function xd(a, b, c, d) {
		var e = {
			m: ["eine Minute", "einer Minute"],
			h: ["eine Stunde", "einer Stunde"],
			d: ["ein Tag", "einem Tag"],
			dd: [a + " Tage", a + " Tagen"],
			M: ["ein Monat", "einem Monat"],
			MM: [a + " Monate", a + " Monaten"],
			y: ["ein Jahr", "einem Jahr"],
			yy: [a + " Jahre", a + " Jahren"]
		};
		return b ? e[c][0] : e[c][1]
	}

	function yd(a, b, c, d) {
		var e = {
			s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
			m: ["ühe minuti", "üks minut"],
			mm: [a + " minuti", a + " minutit"],
			h: ["ühe tunni", "tund aega", "üks tund"],
			hh: [a + " tunni", a + " tundi"],
			d: ["ühe päeva", "üks päev"],
			M: ["kuu aja", "kuu aega", "üks kuu"],
			MM: [a + " kuu", a + " kuud"],
			y: ["ühe aasta", "aasta", "üks aasta"],
			yy: [a + " aasta", a + " aastat"]
		};
		return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1]
	}

	function zd(a, b, c, d) {
		var e = "";
		switch (c) {
			case "s":
				return d ? "muutaman sekunnin" : "muutama sekunti";
			case "m":
				return d ? "minuutin" : "minuutti";
			case "mm":
				e = d ? "minuutin" : "minuuttia";
				break;
			case "h":
				return d ? "tunnin" : "tunti";
			case "hh":
				e = d ? "tunnin" : "tuntia";
				break;
			case "d":
				return d ? "päivän" : "päivä";
			case "dd":
				e = d ? "päivän" : "päivää";
				break;
			case "M":
				return d ? "kuukauden" : "kuukausi";
			case "MM":
				e = d ? "kuukauden" : "kuukautta";
				break;
			case "y":
				return d ? "vuoden" : "vuosi";
			case "yy":
				e = d ? "vuoden" : "vuotta"
		}
		return e = Ad(a, d) + " " + e
	}

	function Ad(a, b) {
		return 10 > a ? b ? Jg[a] : Ig[a] : a
	}

	function Bd(a, b, c) {
		var d = a + " ";
		switch (c) {
			case "m":
				return b ? "jedna minuta" : "jedne minute";
			case "mm":
				return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
			case "h":
				return b ? "jedan sat" : "jednog sata";
			case "hh":
				return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
			case "dd":
				return d += 1 === a ? "dan" : "dana";
			case "MM":
				return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
			case "yy":
				return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
		}
	}

	function Cd(a, b, c, d) {
		var e = a;
		switch (c) {
			case "s":
				return d || b ? "néhány másodperc" : "néhány másodperce";
			case "m":
				return "egy" + (d || b ? " perc" : " perce");
			case "mm":
				return e + (d || b ? " perc" : " perce");
			case "h":
				return "egy" + (d || b ? " óra" : " órája");
			case "hh":
				return e + (d || b ? " óra" : " órája");
			case "d":
				return "egy" + (d || b ? " nap" : " napja");
			case "dd":
				return e + (d || b ? " nap" : " napja");
			case "M":
				return "egy" + (d || b ? " hónap" : " hónapja");
			case "MM":
				return e + (d || b ? " hónap" : " hónapja");
			case "y":
				return "egy" + (d || b ? " év" : " éve");
			case "yy":
				return e + (d || b ? " év" : " éve")
		}
		return ""
	}

	function Dd(a) {
		return (a ? "" : "[múlt] ") + "[" + Tg[this.day()] + "] LT[-kor]"
	}

	function Ed(a) {
		return a % 100 === 11 ? !0 : a % 10 !== 1
	}

	function Fd(a, b, c, d) {
		var e = a + " ";
		switch (c) {
			case "s":
				return b || d ? "nokkrar sekúndur" : "nokkrum sekúndum";
			case "m":
				return b ? "mínúta" : "mínútu";
			case "mm":
				return Ed(a) ? e + (b || d ? "mínútur" : "mínútum") : b ? e + "mínúta" : e + "mínútu";
			case "hh":
				return Ed(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";
			case "d":
				return b ? "dagur" : d ? "dag" : "degi";
			case "dd":
				return Ed(a) ? b ? e + "dagar" : e + (d ? "daga" : "dögum") : b ? e + "dagur" : e + (d ? "dag" : "degi");
			case "M":
				return b ? "mánuður" : d ? "mánuð" : "mánuði";
			case "MM":
				return Ed(a) ? b ? e + "mánuðir" : e + (d ? "mánuði" : "mánuðum") : b ? e + "mánuður" : e + (d ? "mánuð" : "mánuði");
			case "y":
				return b || d ? "ár" : "ári";
			case "yy":
				return Ed(a) ? e + (b || d ? "ár" : "árum") : e + (b || d ? "ár" : "ári")
		}
	}

	function Gd(a, b, c, d) {
		var e = {
			m: ["eng Minutt", "enger Minutt"],
			h: ["eng Stonn", "enger Stonn"],
			d: ["een Dag", "engem Dag"],
			M: ["ee Mount", "engem Mount"],
			y: ["ee Joer", "engem Joer"]
		};
		return b ? e[c][0] : e[c][1]
	}

	function Hd(a) {
		var b = a.substr(0, a.indexOf(" "));
		return Jd(b) ? "a " + a : "an " + a
	}

	function Id(a) {
		var b = a.substr(0, a.indexOf(" "));
		return Jd(b) ? "viru " + a : "virun " + a
	}

	function Jd(a) {
		if (a = parseInt(a, 10), isNaN(a)) {
			return !1
		}
		if (0 > a) {
			return !0
		}
		if (10 > a) {
			return a >= 4 && 7 >= a
		}
		if (100 > a) {
			var b = a % 10,
				c = a / 10;
			return Jd(0 === b ? c : b)
		}
		if (10000 > a) {
			for (; a >= 10;) {
				a /= 10
			}
			return Jd(a)
		}
		return a /= 1000, Jd(a)
	}

	function Kd(a, b, c, d) {
		return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes"
	}

	function Ld(a, b, c, d) {
		return b ? Nd(c)[0] : d ? Nd(c)[1] : Nd(c)[2]
	}

	function Md(a) {
		return a % 10 === 0 || a > 10 && 20 > a
	}

	function Nd(a) {
		return Wg[a].split("_")
	}

	function Od(a, b, c, d) {
		var e = a + " ";
		return 1 === a ? e + Ld(a, b, c[0], d) : b ? e + (Md(a) ? Nd(c)[1] : Nd(c)[0]) : d ? e + Nd(c)[1] : e + (Md(a) ? Nd(c)[1] : Nd(c)[2])
	}

	function Pd(a, b, c) {
		return c ? b % 10 === 1 && b % 100 !== 11 ? a[2] : a[3] : b % 10 === 1 && b % 100 !== 11 ? a[0] : a[1]
	}

	function Qd(a, b, c) {
		return a + " " + Pd(Xg[c], a, b)
	}

	function Rd(a, b, c) {
		return Pd(Xg[c], a, b)
	}

	function Sd(a, b) {
		return b ? "dažas sekundes" : "dažām sekundēm"
	}

	function Td(a, b, c, d) {
		var e = "";
		if (b) {
			switch (c) {
				case "s":
					e = "काही सेकंद";
					break;
				case "m":
					e = "एक मिनिट";
					break;
				case "mm":
					e = "%d मिनिटे";
					break;
				case "h":
					e = "एक तास";
					break;
				case "hh":
					e = "%d तास";
					break;
				case "d":
					e = "एक दिवस";
					break;
				case "dd":
					e = "%d दिवस";
					break;
				case "M":
					e = "एक महिना";
					break;
				case "MM":
					e = "%d महिने";
					break;
				case "y":
					e = "एक वर्ष";
					break;
				case "yy":
					e = "%d वर्षे"
			}
		} else {
			switch (c) {
				case "s":
					e = "काही सेकंदां";
					break;
				case "m":
					e = "एका मिनिटा";
					break;
				case "mm":
					e = "%d मिनिटां";
					break;
				case "h":
					e = "एका तासा";
					break;
				case "hh":
					e = "%d तासां";
					break;
				case "d":
					e = "एका दिवसा";
					break;
				case "dd":
					e = "%d दिवसां";
					break;
				case "M":
					e = "एका महिन्या";
					break;
				case "MM":
					e = "%d महिन्यां";
					break;
				case "y":
					e = "एका वर्षा";
					break;
				case "yy":
					e = "%d वर्षां"
			}
		}
		return e.replace(/%d/i, a)
	}

	function Ud(a) {
		return 5 > a % 10 && a % 10 > 1 && ~~(a / 10) % 10 !== 1
	}

	function Vd(a, b, c) {
		var d = a + " ";
		switch (c) {
			case "m":
				return b ? "minuta" : "minutę";
			case "mm":
				return d + (Ud(a) ? "minuty" : "minut");
			case "h":
				return b ? "godzina" : "godzinę";
			case "hh":
				return d + (Ud(a) ? "godziny" : "godzin");
			case "MM":
				return d + (Ud(a) ? "miesiące" : "miesięcy");
			case "yy":
				return d + (Ud(a) ? "lata" : "lat")
		}
	}

	function Wd(a, b, c) {
		var d = {
				mm: "minute",
				hh: "ore",
				dd: "zile",
				MM: "luni",
				yy: "ani"
			},
			e = " ";
		return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c]
	}

	function Xd(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}

	function Yd(a, b, c) {
		var d = {
			mm: b ? "минута_минуты_минут" : "минуту_минуты_минут",
			hh: "час_часа_часов",
			dd: "день_дня_дней",
			MM: "месяц_месяца_месяцев",
			yy: "год_года_лет"
		};
		return "m" === c ? b ? "минута" : "минуту" : a + " " + Xd(d[c], +a)
	}

	function Zd(a) {
		return a > 1 && 5 > a
	}

	function $d(a, b, c, d) {
		var e = a + " ";
		switch (c) {
			case "s":
				return b || d ? "pár sekúnd" : "pár sekundami";
			case "m":
				return b ? "minúta" : d ? "minútu" : "minútou";
			case "mm":
				return b || d ? e + (Zd(a) ? "minúty" : "minút") : e + "minútami";
				break;
			case "h":
				return b ? "hodina" : d ? "hodinu" : "hodinou";
			case "hh":
				return b || d ? e + (Zd(a) ? "hodiny" : "hodín") : e + "hodinami";
				break;
			case "d":
				return b || d ? "deň" : "dňom";
			case "dd":
				return b || d ? e + (Zd(a) ? "dni" : "dní") : e + "dňami";
				break;
			case "M":
				return b || d ? "mesiac" : "mesiacom";
			case "MM":
				return b || d ? e + (Zd(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";
				break;
			case "y":
				return b || d ? "rok" : "rokom";
			case "yy":
				return b || d ? e + (Zd(a) ? "roky" : "rokov") : e + "rokmi"
		}
	}

	function _d(a, b, c, d) {
		var e = a + " ";
		
	}

	function ae(a) {
		var b = a;
		return b = -1 !== a.indexOf("jaj") ? b.slice(0, -3) + "leS" : -1 !== a.indexOf("jar") ? b.slice(0, -3) + "waQ" : -1 !== a.indexOf("DIS") ? b.slice(0, -3) + "nem" : b + " pIq"
	}

	function be(a) {
		var b = a;
		return b = -1 !== a.indexOf("jaj") ? b.slice(0, -3) + "Hu’" : -1 !== a.indexOf("jar") ? b.slice(0, -3) + "wen" : -1 !== a.indexOf("DIS") ? b.slice(0, -3) + "ben" : b + " ret"
	}

	function ce(a, b, c, d) {
		var e = de(a);
		switch (c) {
			case "mm":
				return e + " tup";
			case "hh":
				return e + " rep";
			case "dd":
				return e + " jaj";
			case "MM":
				return e + " jar";
			case "yy":
				return e + " DIS"
		}
	}

	function de(a) {
		var b = Math.floor(a % 1000 / 100),
			c = Math.floor(a % 100 / 10),
			d = a % 10,
			e = "";
		return b > 0 && (e += qh[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + qh[c] + "maH"), d > 0 && (e += ("" !== e ? " " : "") + qh[d]), "" === e ? "pagh" : e
	}

	function ee(a, b, c, d) {
		var e = {
			s: ["viensas secunds", "'iensas secunds"],
			m: ["'n míut", "'iens míut"],
			mm: [a + " míuts", "" + a + " míuts"],
			h: ["'n þora", "'iensa þora"],
			hh: [a + " þoras", "" + a + " þoras"],
			d: ["'n ziua", "'iensa ziua"],
			dd: [a + " ziuas", "" + a + " ziuas"],
			M: ["'n mes", "'iens mes"],
			MM: [a + " mesen", "" + a + " mesen"],
			y: ["'n ar", "'iens ar"],
			yy: [a + " ars", "" + a + " ars"]
		};
		return d ? e[c][0] : b ? e[c][0] : e[c][1]
	}

	function fe(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}

	function ge(a, b, c) {
		var d = {
			mm: b ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
			hh: b ? "година_години_годин" : "годину_години_годин",
			dd: "день_дні_днів",
			MM: "місяць_місяці_місяців",
			yy: "рік_роки_років"
		};
		return "m" === c ? b ? "хвилина" : "хвилину" : "h" === c ? b ? "година" : "годину" : a + " " + fe(d[c], +a)
	}

	function he(a, b) {
		var c = {
				nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
				accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
				genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
			},
			d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
		return c[d][a.day()]
	}

	function ie(a) {
		return function () {
			return a + "о" + (11 === this.hours() ? "б" : "") + "] LT"
		}
	}
	var je, ke;
	ke = Array.prototype.some ? Array.prototype.some : function (a) {
		for (var b = Object(this), c = b.length >>> 0, d = 0; c > d; d++) {
			if (d in b && a.call(this, b[d], d, b)) {
				return !0
			}
		}
		return !1
	};
	var le = a.momentProperties = [],
		me = !1,
		ne = {};
	a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
	var oe;
	oe = Object.keys ? Object.keys : function (a) {
		var b, c = [];
		for (b in a) {
			h(a, b) && c.push(b)
		}
		return c
	};
	var pe, qe = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		re = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		},
		se = "Invalid date",
		te = "%d",
		ue = /\d{1,2}/,
		ve = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		we = {},
		xe = {},
		ye = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		ze = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Ae = {},
		Be = {},
		Ce = /\d/,
		De = /\d\d/,
		Ee = /\d{3}/,
		Fe = /\d{4}/,
		Ge = /[+-]?\d{6}/,
		He = /\d\d?/,
		Ie = /\d\d\d\d?/,
		Je = /\d\d\d\d\d\d?/,
		Ke = /\d{1,3}/,
		Le = /\d{1,4}/,
		Me = /[+-]?\d{1,6}/,
		Ne = /\d+/,
		Oe = /[+-]?\d+/,
		Pe = /Z|[+-]\d\d:?\d\d/gi,
		Qe = /Z|[+-]\d\d(?::?\d\d)?/gi,
		Re = /[+-]?\d+(\.\d{1,3})?/,
		Se = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		Te = {},
		Ue = {},
		Ve = 0,
		We = 1,
		Xe = 2,
		Ye = 3,
		Ze = 4,
		$e = 5,
		_e = 6,
		af = 7,
		bf = 8;
	pe = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
		var b;
		for (b = 0; b < this.length; ++b) {
			if (this[b] === a) {
				return b
			}
		}
		return -1
	}, T("M", ["MM", 2], "Mo", function () {
		return this.month() + 1
	}), T("MMM", 0, 0, function (a) {
		return this.localeData().monthsShort(this, a)
	}), T("MMMM", 0, 0, function (a) {
		return this.localeData().months(this, a)
	}), I("month", "M"), L("month", 8), Y("M", He), Y("MM", He, De), Y("MMM", function (a, b) {
		return b.monthsShortRegex(a)
	}), Y("MMMM", function (a, b) {
		return b.monthsRegex(a)
	}), aa(["M", "MM"], function (a, b) {
		b[We] = t(a) - 1
	}), aa(["MMM", "MMMM"], function (a, b, c, d) {
		var e = c._locale.monthsParse(a, d, c._strict);
		null != e ? b[We] = e : l(c).invalidMonth = a
	});
	var cf = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
		df = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		ef = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		ff = Se,
		gf = Se;
	T("Y", 0, 0, function () {
		var a = this.year();
		return 9999 >= a ? "" + a : "+" + a
	}), T(0, ["YY", 2], 0, function () {
		return this.year() % 100
	}), T(0, ["YYYY", 4], 0, "year"), T(0, ["YYYYY", 5], 0, "year"), T(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), L("year", 1), Y("Y", Oe), Y("YY", He, De), Y("YYYY", Le, Fe), Y("YYYYY", Me, Ge), Y("YYYYYY", Me, Ge), aa(["YYYYY", "YYYYYY"], Ve), aa("YYYY", function (b, c) {
		c[Ve] = 2 === b.length ? a.parseTwoDigitYear(b) : t(b)
	}), aa("YY", function (b, c) {
		c[Ve] = a.parseTwoDigitYear(b)
	}), aa("Y", function (a, b) {
		b[Ve] = parseInt(a, 10)
	}), a.parseTwoDigitYear = function (a) {
		return t(a) + (t(a) > 68 ? 1900 : 2000)
	};
	var hf = N("FullYear", !0);
	T("w", ["ww", 2], "wo", "week"), T("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), L("week", 5), L("isoWeek", 5), Y("w", He), Y("ww", He, De), Y("W", He), Y("WW", He, De), ba(["w", "ww", "W", "WW"], function (a, b, c, d) {
		b[d.substr(0, 1)] = t(a)
	});
	var jf = {
		dow: 0,
		doy: 6
	};
	T("d", 0, "do", "day"), T("dd", 0, 0, function (a) {
		return this.localeData().weekdaysMin(this, a)
	}), T("ddd", 0, 0, function (a) {
		return this.localeData().weekdaysShort(this, a)
	}), T("dddd", 0, 0, function (a) {
		return this.localeData().weekdays(this, a)
	}), T("e", 0, 0, "weekday"), T("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), Y("d", He), Y("e", He), Y("E", He), Y("dd", function (a, b) {
		return b.weekdaysMinRegex(a)
	}), Y("ddd", function (a, b) {
		return b.weekdaysShortRegex(a)
	}), Y("dddd", function (a, b) {
		return b.weekdaysRegex(a)
	}), ba(["dd", "ddd", "dddd"], function (a, b, c, d) {
		var e = c._locale.weekdaysParse(a, d, c._strict);
		null != e ? b.d = e : l(c).invalidWeekday = a
	}), ba(["d", "e", "E"], function (a, b, c, d) {
		b[d] = t(a)
	});
	var kf = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		lf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		mf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		nf = Se,
		of = Se,
		pf = Se;
	T("H", ["HH", 2], 0, "hour"), T("h", ["hh", 2], 0, Qa), T("k", ["kk", 2], 0, Ra), T("hmm", 0, 0, function () {
		return "" + Qa.apply(this) + S(this.minutes(), 2)
	}), T("hmmss", 0, 0, function () {
		return "" + Qa.apply(this) + S(this.minutes(), 2) + S(this.seconds(), 2)
	}), T("Hmm", 0, 0, function () {
		return "" + this.hours() + S(this.minutes(), 2)
	}), T("Hmmss", 0, 0, function () {
		return "" + this.hours() + S(this.minutes(), 2) + S(this.seconds(), 2)
	}), Sa("a", !0), Sa("A", !1), I("hour", "h"), L("hour", 13), Y("a", Ta), Y("A", Ta), Y("H", He), Y("h", He), Y("HH", He, De), Y("hh", He, De), Y("hmm", Ie), Y("hmmss", Je), Y("Hmm", Ie), Y("Hmmss", Je), aa(["H", "HH"], Ye), aa(["a", "A"], function (a, b, c) {
		c._isPm = c._locale.isPM(a), c._meridiem = a
	}), aa(["h", "hh"], function (a, b, c) {
		b[Ye] = t(a), l(c).bigHour = !0
	}), aa("hmm", function (a, b, c) {
		var d = a.length - 2;
		b[Ye] = t(a.substr(0, d)), b[Ze] = t(a.substr(d)), l(c).bigHour = !0
	}), aa("hmmss", function (a, b, c) {
		var d = a.length - 4,
			e = a.length - 2;
		b[Ye] = t(a.substr(0, d)), b[Ze] = t(a.substr(d, 2)), b[$e] = t(a.substr(e)), l(c).bigHour = !0
	}), aa("Hmm", function (a, b, c) {
		var d = a.length - 2;
		b[Ye] = t(a.substr(0, d)), b[Ze] = t(a.substr(d))
	}), aa("Hmmss", function (a, b, c) {
		var d = a.length - 4,
			e = a.length - 2;
		b[Ye] = t(a.substr(0, d)), b[Ze] = t(a.substr(d, 2)), b[$e] = t(a.substr(e))
	});
	var qf, rf = /[ap]\.?m?\.?/i,
		sf = N("Hours", !0),
		tf = {
			calendar: qe,
			longDateFormat: re,
			invalidDate: se,
			ordinal: te,
			ordinalParse: ue,
			relativeTime: ve,
			months: df,
			monthsShort: ef,
			week: jf,
			weekdays: kf,
			weekdaysMin: mf,
			weekdaysShort: lf,
			meridiemParse: rf
		},
		uf = {},
		vf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
		wf = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
		xf = /Z|[+-]\d\d(?::?\d\d)?/,
		yf = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
			["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
			["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
			["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
			["YYYY-DDD", /\d{4}-\d{3}/],
			["YYYY-MM", /\d{4}-\d\d/, !1],
			["YYYYYYMMDD", /[+-]\d{10}/],
			["YYYYMMDD", /\d{8}/],
			["GGGG[W]WWE", /\d{4}W\d{3}/],
			["GGGG[W]WW", /\d{4}W\d{2}/, !1],
			["YYYYDDD", /\d{7}/]
		],
		zf = [
			["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
			["HH:mm:ss", /\d\d:\d\d:\d\d/],
			["HH:mm", /\d\d:\d\d/],
			["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
			["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
			["HHmmss", /\d\d\d\d\d\d/],
			["HHmm", /\d\d\d\d/],
			["HH", /\d\d/]
		],
		Af = /^\/?Date\((\-?\d+)/i;
	a.createFromInputFallback = w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
		a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
	}), a.ISO_8601 = function () {};
	var Bf = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
			var a = rb.apply(null, arguments);
			return this.isValid() && a.isValid() ? this > a ? this : a : n()
		}),
		Cf = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
			var a = rb.apply(null, arguments);
			return this.isValid() && a.isValid() ? a > this ? this : a : n()
		}),
		Df = function () {
			return Date.now ? Date.now() : +new Date
		};
	xb("Z", ":"), xb("ZZ", ""), Y("Z", Qe), Y("ZZ", Qe), aa(["Z", "ZZ"], function (a, b, c) {
		c._useUTC = !0, c._tzm = yb(Qe, a)
	});
	var Ef = /([\+\-]|\d\d)/gi;
	a.updateOffset = function () {};
	var Ff = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
		Gf = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	Mb.fn = vb.prototype;
	var Hf = Rb(1, "add"),
		If = Rb(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var Jf = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
		return void 0 === a ? this.localeData() : this.locale(a)
	});
	T(0, ["gg", 2], 0, function () {
		return this.weekYear() % 100
	}), T(0, ["GG", 2], 0, function () {
		return this.isoWeekYear() % 100

	}), xc("gggg", "weekYear"), xc("ggggg", "weekYear"), xc("GGGG", "isoWeekYear"), xc("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), Y("G", Oe), Y("g", Oe), Y("GG", He, De), Y("gg", He, De), Y("GGGG", Le, Fe), Y("gggg", Le, Fe), Y("GGGGG", Me, Ge), Y("ggggg", Me, Ge), ba(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
		b[d.substr(0, 2)] = t(a)
	}), ba(["gg", "GG"], function (b, c, d, e) {
		c[e] = a.parseTwoDigitYear(b)
	}), T("Q", 0, "Qo", "quarter"), I("quarter", "Q"), L("quarter", 7), Y("Q", Ce), aa("Q", function (a, b) {
		b[We] = 3 * (t(a) - 1)
	}), T("D", ["DD", 2], "Do", "date"), I("date", "D"), L("date", 9), Y("D", He), Y("DD", He, De), Y("Do", function (a, b) {
		return a ? b._ordinalParse : b._ordinalParseLenient
	}), aa(["D", "DD"], Xe), aa("Do", function (a, b) {
		b[Xe] = t(a.match(He)[0], 10)
	});
	var Kf = N("Date", !0);
	T("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), L("dayOfYear", 4), Y("DDD", Ke), Y("DDDD", Ee), aa(["DDD", "DDDD"], function (a, b, c) {
		c._dayOfYear = t(a)
	}), T("m", ["mm", 2], 0, "minute"), I("minute", "m"), L("minute", 14), Y("m", He), Y("mm", He, De), aa(["m", "mm"], Ze);
	var Lf = N("Minutes", !1);
	T("s", ["ss", 2], 0, "second"), I("second", "s"), L("second", 15), Y("s", He), Y("ss", He, De), aa(["s", "ss"], $e);
	var Mf = N("Seconds", !1);
	T("S", 0, 0, function () {
		return ~~(this.millisecond() / 100)
	}), T(0, ["SS", 2], 0, function () {
		return ~~(this.millisecond() / 10)
	}), T(0, ["SSS", 3], 0, "millisecond"), T(0, ["SSSS", 4], 0, function () {
		return 10 * this.millisecond()
	}), T(0, ["SSSSS", 5], 0, function () {
		return 100 * this.millisecond()
	}), T(0, ["SSSSSS", 6], 0, function () {
		return 1000 * this.millisecond()
	}), T(0, ["SSSSSSS", 7], 0, function () {
		return 10000 * this.millisecond()
	}), T(0, ["SSSSSSSS", 8], 0, function () {
		return 100000 * this.millisecond()
	}), T(0, ["SSSSSSSSS", 9], 0, function () {
		return 1000000 * this.millisecond()
	}), I("millisecond", "ms"), L("millisecond", 16), Y("S", Ke, Ce), Y("SS", Ke, De), Y("SSS", Ke, Ee);
	var Nf;
	for (Nf = "SSSS"; Nf.length <= 9; Nf += "S") {
		Y(Nf, Ne)
	}
	for (Nf = "S"; Nf.length <= 9; Nf += "S") {
		aa(Nf, Gc)
	}
	var Of = N("Milliseconds", !1);
	T("z", 0, 0, "zoneAbbr"), T("zz", 0, 0, "zoneName");
	var Pf = q.prototype;
	Pf.add = Hf, Pf.calendar = Ub, Pf.clone = Vb, Pf.diff = ac, Pf.endOf = mc, Pf.format = ec, Pf.from = fc, Pf.fromNow = gc, Pf.to = hc, Pf.toNow = ic, Pf.get = Q, Pf.invalidAt = vc, Pf.isAfter = Wb, Pf.isBefore = Xb, Pf.isBetween = Yb, Pf.isSame = Zb, Pf.isSameOrAfter = $b, Pf.isSameOrBefore = _b, Pf.isValid = tc, Pf.lang = Jf, Pf.locale = jc, Pf.localeData = kc, Pf.max = Cf, Pf.min = Bf, Pf.parsingFlags = uc, Pf.set = R, Pf.startOf = lc, Pf.subtract = If, Pf.toArray = qc, Pf.toObject = rc, Pf.toDate = pc, Pf.toISOString = dc, Pf.toJSON = sc, Pf.toString = cc, Pf.unix = oc, Pf.valueOf = nc, Pf.creationData = wc, Pf.year = hf, Pf.isLeapYear = qa, Pf.weekYear = yc, Pf.isoWeekYear = zc, Pf.quarter = Pf.quarters = Ec, Pf.month = ja, Pf.daysInMonth = ka, Pf.week = Pf.weeks = Aa, Pf.isoWeek = Pf.isoWeeks = Ba, Pf.weeksInYear = Bc, Pf.isoWeeksInYear = Ac, Pf.date = Kf, Pf.day = Pf.days = Ja, Pf.weekday = Ka, Pf.isoWeekday = La, Pf.dayOfYear = Fc, Pf.hour = Pf.hours = sf, Pf.minute = Pf.minutes = Lf, Pf.second = Pf.seconds = Mf, Pf.millisecond = Pf.milliseconds = Of, Pf.utcOffset = Bb, Pf.utc = Db, Pf.local = Eb, Pf.parseZone = Fb, Pf.hasAlignedHourOffset = Gb, Pf.isDST = Hb, Pf.isLocal = Jb, Pf.isUtcOffset = Kb, Pf.isUtc = Lb, Pf.isUTC = Lb, Pf.zoneAbbr = Hc, Pf.zoneName = Ic, Pf.dates = w("dates accessor is deprecated. Use date instead.", Kf), Pf.months = w("months accessor is deprecated. Use month instead", ja), Pf.years = w("years accessor is deprecated. Use year instead", hf), Pf.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Cb), Pf.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ib);
	var Qf = Pf,
		Rf = B.prototype;
	Rf.calendar = C, Rf.longDateFormat = D, Rf.invalidDate = E, Rf.ordinal = F, Rf.preparse = Lc, Rf.postformat = Lc, Rf.relativeTime = G, Rf.pastFuture = H, Rf.set = z, Rf.months = ea, Rf.monthsShort = fa, Rf.monthsParse = ha, Rf.monthsRegex = ma, Rf.monthsShortRegex = la, Rf.week = xa, Rf.firstDayOfYear = za, Rf.firstDayOfWeek = ya, Rf.weekdays = Ea, Rf.weekdaysMin = Ga, Rf.weekdaysShort = Fa, Rf.weekdaysParse = Ia, Rf.weekdaysRegex = Ma, Rf.weekdaysShortRegex = Na, Rf.weekdaysMinRegex = Oa, Rf.isPM = Ua, Rf.meridiem = Va, Za("en", {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function (a) {
			var b = a % 10,
				c = 1 === t(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), a.lang = w("moment.lang is deprecated. Use moment.locale instead.", Za), a.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ab);
	var Sf = Math.abs,
		Tf = cd("ms"),
		Uf = cd("s"),
		Vf = cd("m"),
		Wf = cd("h"),
		Xf = cd("d"),
		Yf = cd("w"),
		Zf = cd("M"),
		$f = cd("y"),
		_f = ed("milliseconds"),
		ag = ed("seconds"),
		bg = ed("minutes"),
		cg = ed("hours"),
		dg = ed("days"),
		eg = ed("months"),
		fg = ed("years"),
		gg = Math.round,
		hg = {
			s: 45,
			m: 45,
			h: 22,
			d: 26,
			M: 11
		},
		ig = Math.abs,
		jg = vb.prototype;
	jg.abs = Uc, jg.add = Wc, jg.subtract = Xc, jg.as = ad, jg.asMilliseconds = Tf, jg.asSeconds = Uf, jg.asMinutes = Vf, jg.asHours = Wf, jg.asDays = Xf, jg.asWeeks = Yf, jg.asMonths = Zf, jg.asYears = $f, jg.valueOf = bd, jg._bubble = Zc, jg.get = dd, jg.milliseconds = _f, jg.seconds = ag, jg.minutes = bg, jg.hours = cg, jg.days = dg, jg.weeks = fd, jg.months = eg, jg.years = fg, jg.humanize = kd, jg.toISOString = ld, jg.toString = ld, jg.toJSON = ld, jg.locale = jc, jg.localeData = kc, jg.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ld), jg.lang = Jf, T("X", 0, 0, "unix"), T("x", 0, 0, "valueOf"), Y("x", Oe), Y("X", Re), aa("X", function (a, b, c) {
		c._d = new Date(1000 * parseFloat(a, 10))
	}), aa("x", function (a, b, c) {
		c._d = new Date(t(a))
	}), a.version = "2.14.1", b(rb), a.fn = Qf, a.min = tb, a.max = ub, a.now = Df, a.utc = j, a.unix = Jc, a.months = Pc, a.isDate = f, a.locale = Za, a.invalid = n, a.duration = Mb, a.isMoment = r, a.weekdays = Rc, a.parseZone = Kc, a.localeData = ab, a.isDuration = wb, a.monthsShort = Qc, a.weekdaysMin = Tc, a.defineLocale = $a, a.updateLocale = _a, a.locales = bb, a.weekdaysShort = Sc, a.normalizeUnits = J, a.relativeTimeRounding = id, a.relativeTimeThreshold = jd, a.calendarFormat = Tb, a.prototype = Qf;
	var kg = a,
		lg = (kg.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function (a) {
				return /^nm$/i.test(a)
			},
			meridiem: function (a, b, c) {
				return 12 > a ? c ? "vm" : "VM" : c ? "nm" : "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[Môre om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("ar-ma", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), {
			1: "١",
			2: "٢",
			3: "٣",
			4: "٤",
			5: "٥",
			6: "٦",
			7: "٧",
			8: "٨",
			9: "٩",
			0: "٠"
		}),
		mg = {
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"٠": "0"
		},
		ng = (kg.defineLocale("ar-sa", {
			months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (a) {
				return "م" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			preparse: function (a) {
				return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
					return mg[a]
				}).replace(/،/g, ",")
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return lg[a]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), kg.defineLocale("ar-tn", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "١",
			2: "٢",
			3: "٣",
			4: "٤",
			5: "٥",
			6: "٦",
			7: "٧",
			8: "٨",
			9: "٩",
			0: "٠"
		}),
		og = {
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"٠": "0"
		},
		pg = function (a) {
			return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5
		},
		qg = {
			s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
			m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
			h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
			d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
			M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
			y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
		},
		rg = function (a) {
			return function (b, c, d, e) {
				var f = pg(b),
					g = qg[a][pg(b)];
				return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b)
			}
		},
		sg = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"],
		tg = (kg.defineLocale("ar", {
			months: sg,
			monthsShort: sg,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/M/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (a) {
				return "م" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: rg("s"),
				m: rg("m"),
				mm: rg("m"),
				h: rg("h"),
				hh: rg("h"),
				d: rg("d"),
				dd: rg("d"),
				M: rg("M"),
				MM: rg("M"),
				y: rg("y"),
				yy: rg("y")
			},
			preparse: function (a) {
				return a.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
					return og[a]
				}).replace(/،/g, ",")
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return ng[a]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), {
			1: "-inci",
			5: "-inci",
			8: "-inci",
			70: "-inci",
			80: "-inci",
			2: "-nci",
			7: "-nci",
			20: "-nci",
			50: "-nci",
			3: "-üncü",
			4: "-üncü",
			100: "-üncü",
			6: "-ncı",
			9: "-uncu",
			10: "-uncu",
			30: "-uncu",
			60: "-ıncı",
			90: "-ıncı"
		}),
		ug = (kg.defineLocale("az", {
			months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
			monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
			weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
			weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
			weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[sabah saat] LT",
				nextWeek: "[gələn həftə] dddd [saat] LT",
				lastDay: "[dünən] LT",
				lastWeek: "[keçən həftə] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s əvvəl",
				s: "birneçə saniyyə",
				m: "bir dəqiqə",
				mm: "%d dəqiqə",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir il",
				yy: "%d il"
			},
			meridiemParse: /gecə|səhər|gündüz|axşam/,
			isPM: function (a) {
				return /^(gündüz|axşam)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "gecə" : 12 > a ? "səhər" : 17 > a ? "gündüz" : "axşam"
			},
			ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
			ordinal: function (a) {
				if (0 === a) {
					return a + "-ıncı"
				}
				var b = a % 10,
					c = a % 100 - b,
					d = a >= 100 ? 100 : null;
				return a + (tg[b] || tg[c] || tg[d])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("be", {
			months: {
				format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
				standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
			},
			monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
			weekdays: {
				format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
				standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
				isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
			},
			weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[Сёння ў] LT",
				nextDay: "[Заўтра ў] LT",
				lastDay: "[Учора ў] LT",
				nextWeek: function () {
					return "[У] dddd [ў] LT"
				},
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return "[У мінулую] dddd [ў] LT";
						case 1:
						case 2:
						case 4:
							return "[У мінулы] dddd [ў] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "праз %s",
				past: "%s таму",
				s: "некалькі секунд",
				m: nd,
				mm: nd,
				h: nd,
				hh: nd,
				d: "дзень",
				dd: nd,
				M: "месяц",
				MM: nd,
				y: "год",
				yy: nd
			},
			meridiemParse: /ночы|раніцы|дня|вечара/,
			isPM: function (a) {
				return /^(дня|вечара)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "ночы" : 12 > a ? "раніцы" : 17 > a ? "дня" : "вечара"
			},
			ordinalParse: /\d{1,2}-(і|ы|га)/,
			ordinal: function (a, b) {
				switch (b) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-ы" : a + "-і";
					case "D":
						return a + "-га";
					default:
						return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("bg", {
			months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
			weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Днес в] LT",
				nextDay: "[Утре в] LT",
				nextWeek: "dddd [в] LT",
				lastDay: "[Вчера в] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[В изминалата] dddd [в] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[В изминалия] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "след %s",
				past: "преди %s",
				s: "няколко секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дни",
				M: "месец",
				MM: "%d месеца",
				y: "година",
				yy: "%d години"
			},
			ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (a) {
				var b = a % 10,
					c = a % 100;
				return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "১",
			2: "২",
			3: "৩",
			4: "৪",
			5: "৫",
			6: "৬",
			7: "৭",
			8: "৮",
			9: "৯",
			0: "০"
		}),
		vg = {
			"১": "1",
			"২": "2",
			"৩": "3",
			"৪": "4",
			"৫": "5",
			"৬": "6",
			"৭": "7",
			"৮": "8",
			"৯": "9",
			"০": "0"
		},
		wg = (kg.defineLocale("bn", {
			months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
			monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
			weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),
			weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
			weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
			longDateFormat: {
				LT: "A h:mm সময়",
				LTS: "A h:mm:ss সময়",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm সময়",
				LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
			},
			calendar: {
				sameDay: "[আজ] LT",
				nextDay: "[আগামীকাল] LT",
				nextWeek: "dddd, LT",
				lastDay: "[গতকাল] LT",
				lastWeek: "[গত] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s পরে",
				past: "%s আগে",
				s: "কয়েক সেকেন্ড",
				m: "এক মিনিট",
				mm: "%d মিনিট",
				h: "এক ঘন্টা",
				hh: "%d ঘন্টা",
				d: "এক দিন",
				dd: "%d দিন",
				M: "এক মাস",
				MM: "%d মাস",
				y: "এক বছর",
				yy: "%d বছর"
			},
			preparse: function (a) {
				return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function (a) {
					return vg[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return ug[a]
				})
			},
			meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "রাত" === b && a >= 4 || "দুপুর" === b && 5 > a || "বিকাল" === b ? a + 12 : a
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "রাত" : 10 > a ? "সকাল" : 17 > a ? "দুপুর" : 20 > a ? "বিকাল" : "রাত"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), {
			1: "༡",
			2: "༢",
			3: "༣",
			4: "༤",
			5: "༥",
			6: "༦",
			7: "༧",
			8: "༨",
			9: "༩",
			0: "༠"
		}),
		xg = {
			"༡": "1",
			"༢": "2",
			"༣": "3",
			"༤": "4",
			"༥": "5",
			"༦": "6",
			"༧": "7",
			"༨": "8",
			"༩": "9",
			"༠": "0"
		},
		yg = (kg.defineLocale("bo", {
			months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
			weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[དི་རིང] LT",
				nextDay: "[སང་ཉིན] LT",
				nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
				lastDay: "[ཁ་སང] LT",
				lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ལ་",
				past: "%s སྔན་ལ",
				s: "ལམ་སང",
				m: "སྐར་མ་གཅིག",
				mm: "%d སྐར་མ",
				h: "ཆུ་ཚོད་གཅིག",
				hh: "%d ཆུ་ཚོད",
				d: "ཉིན་གཅིག",
				dd: "%d ཉིན་",
				M: "ཟླ་བ་གཅིག",
				MM: "%d ཟླ་བ",
				y: "ལོ་གཅིག",
				yy: "%d ལོ"
			},
			preparse: function (a) {
				return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (a) {
					return xg[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return wg[a]
				})
			},
			meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "མཚན་མོ" === b && a >= 4 || "ཉིན་གུང" === b && 5 > a || "དགོང་དག" === b ? a + 12 : a
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "མཚན་མོ" : 10 > a ? "ཞོགས་ཀས" : 17 > a ? "ཉིན་གུང" : 20 > a ? "དགོང་དག" : "མཚན་མོ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), kg.defineLocale("br", {
			months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h[e]mm A",
				LTS: "h[e]mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY h[e]mm A",
				LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warc'hoazh da] LT",
				nextWeek: "dddd [da] LT",
				lastDay: "[Dec'h da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s 'zo",
				s: "un nebeud segondennoù",
				m: "ur vunutenn",
				mm: od,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: od,
				M: "ur miz",
				MM: od,
				y: "ur bloaz",
				yy: pd
			},
			ordinalParse: /\d{1,2}(añ|vet)/,
			ordinal: function (a) {
				var b = 1 === a ? "añ" : "vet";
				return a + b
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				m: td,
				mm: td,
				h: td,
				hh: td,
				d: "dan",
				dd: td,
				M: "mjesec",
				MM: td,
				y: "godinu",
				yy: td
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("ca", {
			months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
			monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextDay: function () {
					return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastDay: function () {
					return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "fa %s",
				s: "uns segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			ordinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function (a, b) {
				var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è";
				return "w" !== b && "W" !== b || (c = "a"), a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),
		zg = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
		Ag = (kg.defineLocale("cs", {
			months: yg,
			monthsShort: zg,
			monthsParse: function (a, b) {
				var c, d = [];
				for (c = 0; 12 > c; c++) {
					d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i")
				}
				return d
			}(yg, zg),
			shortMonthsParse: function (a) {
				var b, c = [];
				for (b = 0; 12 > b; b++) {
					c[b] = new RegExp("^" + a[b] + "$", "i")
				}
				return c
			}(zg),
			longMonthsParse: function (a) {
				var b, c = [];
				for (b = 0; 12 > b; b++) {
					c[b] = new RegExp("^" + a[b] + "$", "i")
				}
				return c
			}(yg),
			weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
			weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
			weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm",
				l: "D. M. YYYY"
			},
			calendar: {
				sameDay: "[dnes v] LT",
				nextDay: "[zítra v] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v neděli v] LT";
						case 1:
						case 2:
							return "[v] dddd [v] LT";
						case 3:
							return "[ve středu v] LT";
						case 4:
							return "[ve čtvrtek v] LT";
						case 5:
							return "[v pátek v] LT";
						case 6:
							return "[v sobotu v] LT"
					}
				},
				lastDay: "[včera v] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulou neděli v] LT";
						case 1:
						case 2:
							return "[minulé] dddd [v] LT";
						case 3:
							return "[minulou středu v] LT";
						case 4:
						case 5:
							return "[minulý] dddd [v] LT";
						case 6:
							return "[minulou sobotu v] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "před %s",
				s: vd,
				m: vd,
				mm: vd,
				h: vd,
				hh: vd,
				d: vd,
				dd: vd,
				M: vd,
				MM: vd,
				y: vd,
				yy: vd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("cv", {
			months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
			monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
			weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
			weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
			weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
				LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
				LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
			},
			calendar: {
				sameDay: "[Паян] LT [сехетре]",
				nextDay: "[Ыран] LT [сехетре]",
				lastDay: "[Ӗнер] LT [сехетре]",
				nextWeek: "[Ҫитес] dddd LT [сехетре]",
				lastWeek: "[Иртнӗ] dddd LT [сехетре]",
				sameElse: "L"
			},
			relativeTime: {
				future: function (a) {
					var b = /сехет$/i.exec(a) ? "рен" : /ҫул$/i.exec(a) ? "тан" : "ран";
					return a + b
				},
				past: "%s каялла",
				s: "пӗр-ик ҫеккунт",
				m: "пӗр минут",
				mm: "%d минут",
				h: "пӗр сехет",
				hh: "%d сехет",
				d: "пӗр кун",
				dd: "%d кун",
				M: "пӗр уйӑх",
				MM: "%d уйӑх",
				y: "пӗр ҫул",
				yy: "%d ҫул"
			},
			ordinalParse: /\d{1,2}-мӗш/,
			ordinal: "%d-мӗш",
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Heddiw am] LT",
				nextDay: "[Yfory am] LT",
				nextWeek: "dddd [am] LT",
				lastDay: "[Ddoe am] LT",
				lastWeek: "dddd [diwethaf am] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn %s",
				past: "%s yn ôl",
				s: "ychydig eiliadau",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function (a) {
				var b = a,
					c = "",
					d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
				return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[I dag kl.] LT",
				nextDay: "[I morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[I går kl.] LT",
				lastWeek: "[sidste] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "få sekunder",
				m: "et minut",

				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en måned",
				MM: "%d måneder",
				y: "et år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("de-at", {
			months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				m: wd,
				mm: "%d Minuten",
				h: wd,
				hh: "%d Stunden",
				d: wd,
				dd: wd,
				M: wd,
				MM: wd,
				y: wd,
				yy: wd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("de", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				m: xd,
				mm: "%d Minuten",
				h: xd,
				hh: "%d Stunden",
				d: xd,
				dd: xd,
				M: xd,
				MM: xd,
				y: xd,
				yy: xd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]),
		Bg = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"],
		Cg = (kg.defineLocale("dv", {
			months: Ag,
			monthsShort: Ag,
			weekdays: Bg,
			weekdaysShort: Bg,
			weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/M/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /މކ|މފ/,
			isPM: function (a) {
				return "މފ" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "މކ" : "މފ"
			},
			calendar: {
				sameDay: "[މިއަދު] LT",
				nextDay: "[މާދަމާ] LT",
				nextWeek: "dddd LT",
				lastDay: "[އިއްޔެ] LT",
				lastWeek: "[ފާއިތުވި] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ތެރޭގައި %s",
				past: "ކުރިން %s",
				s: "ސިކުންތުކޮޅެއް",
				m: "މިނިޓެއް",
				mm: "މިނިޓު %d",
				h: "ގަޑިއިރެއް",
				hh: "ގަޑިއިރު %d",
				d: "ދުވަހެއް",
				dd: "ދުވަސް %d",
				M: "މަހެއް",
				MM: "މަސް %d",
				y: "އަހަރެއް",
				yy: "އަހަރު %d"
			},
			preparse: function (a) {
				return a.replace(/،/g, ",")
			},
			postformat: function (a) {
				return a.replace(/,/g, "،")
			},
			week: {
				dow: 7,
				doy: 12
			}
		}), kg.defineLocale("el", {
			monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
			monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
			months: function (a, b) {
				return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
			},
			monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
			weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
			weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
			weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
			meridiem: function (a, b, c) {
				return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ"
			},
			isPM: function (a) {
				return "μ" === (a + "").toLowerCase()[0]
			},
			meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendarEl: {
				sameDay: "[Σήμερα {}] LT",
				nextDay: "[Αύριο {}] LT",
				nextWeek: "dddd [{}] LT",
				lastDay: "[Χθες {}] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 6:
							return "[το προηγούμενο] dddd [{}] LT";
						default:
							return "[την προηγούμενη] dddd [{}] LT"
					}
				},
				sameElse: "L"
			},
			calendar: function (a, b) {
				var c = this._calendarEl[a],
					d = b && b.hours();
				return y(c) && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "στη" : "στις")
			},
			relativeTime: {
				future: "σε %s",
				past: "%s πριν",
				s: "λίγα δευτερόλεπτα",
				m: "ένα λεπτό",
				mm: "%d λεπτά",
				h: "μία ώρα",
				hh: "%d ώρες",
				d: "μία μέρα",
				dd: "%d μέρες",
				M: "ένας μήνας",
				MM: "%d μήνες",
				y: "ένας χρόνος",
				yy: "%d χρόνια"
			},
			ordinalParse: /\d{1,2}η/,
			ordinal: "%dη",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			}
		}), kg.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("en-ie", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("en-nz", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
			weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
			weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D[-an de] MMMM, YYYY",
				LLL: "D[-an de] MMMM, YYYY HH:mm",
				LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function (a) {
				return "p" === a.charAt(0).toLowerCase()
			},
			meridiem: function (a, b, c) {
				return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M."
			},
			calendar: {
				sameDay: "[Hodiaŭ je] LT",
				nextDay: "[Morgaŭ je] LT",
				nextWeek: "dddd [je] LT",
				lastDay: "[Hieraŭ je] LT",
				lastWeek: "[pasinta] dddd [je] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "je %s",
				past: "antaŭ %s",
				s: "sekundoj",
				m: "minuto",
				mm: "%d minutoj",
				h: "horo",
				hh: "%d horoj",
				d: "tago",
				dd: "%d tagoj",
				M: "monato",
				MM: "%d monatoj",
				y: "jaro",
				yy: "%d jaroj"
			},
			ordinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		}), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),
		Dg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
		Eg = (kg.defineLocale("es-do", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (a, b) {
				return /-MMM-/.test(b) ? Dg[a.month()] : Cg[a.month()]
			},
			monthsParseExact: !0,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY h:mm A",
				LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),
		Fg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
		Gg = (kg.defineLocale("es", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (a, b) {
				return /-MMM-/.test(b) ? Fg[a.month()] : Eg[a.month()]
			},
			monthsParseExact: !0,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("et", {
			months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Täna,] LT",
				nextDay: "[Homme,] LT",
				nextWeek: "[Järgmine] dddd LT",
				lastDay: "[Eile,] LT",
				lastWeek: "[Eelmine] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s pärast",
				past: "%s tagasi",
				s: yd,
				m: yd,
				mm: yd,
				h: yd,
				hh: yd,
				d: yd,
				dd: "%d päeva",
				M: yd,
				MM: yd,
				y: yd,
				yy: yd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			monthsParseExact: !0,
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko] MMMM[ren] D[a]",
				LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
				LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
				l: "YYYY-M-D",
				ll: "YYYY[ko] MMM D[a]",
				lll: "YYYY[ko] MMM D[a] HH:mm",
				llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
			},
			calendar: {
				sameDay: "[gaur] LT[etan]",
				nextDay: "[bihar] LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo] LT[etan]",
				lastWeek: "[aurreko] dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela %s",
				s: "segundo batzuk",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "۱",
			2: "۲",
			3: "۳",
			4: "۴",
			5: "۵",
			6: "۶",
			7: "۷",
			8: "۸",
			9: "۹",
			0: "۰"
		}),
		Hg = {
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			"۰": "0"
		},
		Ig = (kg.defineLocale("fa", {
			months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			weekdays: "یکشنبه_دوشنبه_سهشنبه_چهارشنبه_پنجشنبه_جمعه_شنبه".split("_"),
			weekdaysShort: "یکشنبه_دوشنبه_سهشنبه_چهارشنبه_پنجشنبه_جمعه_شنبه".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /قبل از ظهر|بعد از ظهر/,
			isPM: function (a) {
				return /بعد از ظهر/.test(a)
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "قبل از ظهر" : "بعد از ظهر"
			},
			calendar: {
				sameDay: "[امروز ساعت] LT",
				nextDay: "[فردا ساعت] LT",
				nextWeek: "dddd [ساعت] LT",
				lastDay: "[دیروز ساعت] LT",
				lastWeek: "dddd [پیش] [ساعت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "در %s",
				past: "%s پیش",
				s: "چندین ثانیه",
				m: "یک دقیقه",
				mm: "%d دقیقه",
				h: "یک ساعت",
				hh: "%d ساعت",
				d: "یک روز",
				dd: "%d روز",
				M: "یک ماه",
				MM: "%d ماه",
				y: "یک سال",
				yy: "%d سال"
			},
			preparse: function (a) {
				return a.replace(/[۰-۹]/g, function (a) {
					return Hg[a]
				}).replace(/،/g, ",")
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return Gg[a]
				}).replace(/,/g, "،")
			},
			ordinalParse: /\d{1,2}م/,
			ordinal: "%dم",
			week: {
				dow: 6,
				doy: 12
			}
		}), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),
		Jg = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Ig[7], Ig[8], Ig[9]],
		Kg = (kg.defineLocale("fi", {
			months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
			monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
			weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
			weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
			weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "Do MMMM[ta] YYYY",
				LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
				LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
				l: "D.M.YYYY",
				ll: "Do MMM YYYY",
				lll: "Do MMM YYYY, [klo] HH.mm",
				llll: "ddd, Do MMM YYYY, [klo] HH.mm"
			},
			calendar: {
				sameDay: "[tänään] [klo] LT",
				nextDay: "[huomenna] [klo] LT",
				nextWeek: "dddd [klo] LT",
				lastDay: "[eilen] [klo] LT",
				lastWeek: "[viime] dddd[na] [klo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s päästä",
				past: "%s sitten",
				s: zd,
				m: zd,
				mm: zd,
				h: zd,
				hh: zd,
				d: zd,
				dd: zd,
				M: zd,
				MM: zd,
				y: zd,
				yy: zd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("fo", {
			months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
			weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D. MMMM, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Í dag kl.] LT",
				nextDay: "[Í morgin kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Í gjár kl.] LT",
				lastWeek: "[síðstu] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um %s",
				past: "%s síðani",
				s: "fá sekund",
				m: "ein minutt",
				mm: "%d minuttir",
				h: "ein tími",
				hh: "%d tímar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mánaði",
				MM: "%d mánaðir",
				y: "eitt ár",
				yy: "%d ár"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("fr-ca", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|e)/,
			ordinal: function (a) {
				return a + (1 === a ? "er" : "e")
			}
		}), kg.defineLocale("fr-ch", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|e)/,
			ordinal: function (a) {
				return a + (1 === a ? "er" : "e")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("fr", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|)/,
			ordinal: function (a) {
				return a + (1 === a ? "er" : "")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),
		Lg = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
		Mg = (kg.defineLocale("fy", {
			months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
			monthsShort: function (a, b) {
				return /-MMM-/.test(b) ? Lg[a.month()] : Kg[a.month()]
			},
			monthsParseExact: !0,
			weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
			weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
			weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[hjoed om] LT",
				nextDay: "[moarn om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[juster om] LT",
				lastWeek: "[ôfrûne] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oer %s",
				past: "%s lyn",
				s: "in pear sekonden",
				m: "ien minút",
				mm: "%d minuten",
				h: "ien oere",
				hh: "%d oeren",
				d: "ien dei",
				dd: "%d dagen",
				M: "ien moanne",
				MM: "%d moannen",
				y: "ien jier",
				yy: "%d jierren"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]),
		Ng = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
		Og = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
		Pg = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
		Qg = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
		Rg = (kg.defineLocale("gd", {
			months: Mg,
			monthsShort: Ng,
			monthsParseExact: !0,
			weekdays: Og,
			weekdaysShort: Pg,
			weekdaysMin: Qg,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[An-diugh aig] LT",
				nextDay: "[A-màireach aig] LT",
				nextWeek: "dddd [aig] LT",
				lastDay: "[An-dè aig] LT",
				lastWeek: "dddd [seo chaidh] [aig] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ann an %s",
				past: "bho chionn %s",
				s: "beagan diogan",
				m: "mionaid",
				mm: "%d mionaidean",
				h: "uair",
				hh: "%d uairean",
				d: "latha",
				dd: "%d latha",
				M: "mìos",
				MM: "%d mìosan",
				y: "bliadhna",
				yy: "%d bliadhna"
			},
			ordinalParse: /\d{1,2}(d|na|mh)/,
			ordinal: function (a) {
				var b = 1 === a ? "d" : a % 10 === 2 ? "na" : "mh";
				return a + b
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("gl", {
			months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
			monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
			weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
			weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextDay: function () {
					return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextWeek: function () {
					return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				lastDay: function () {
					return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
				},
				lastWeek: function () {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (a) {
					return "uns segundos" === a ? "nuns segundos" : "en " + a
				},
				past: "hai %s",
				s: "uns segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("he", {
			months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
			monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
			weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
			weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
			weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [ב]MMMM YYYY",
				LLL: "D [ב]MMMM YYYY HH:mm",
				LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[היום ב־]LT",
				nextDay: "[מחר ב־]LT",
				nextWeek: "dddd [בשעה] LT",
				lastDay: "[אתמול ב־]LT",
				lastWeek: "[ביום] dddd [האחרון בשעה] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "בעוד %s",
				past: "לפני %s",
				s: "מספר שניות",
				m: "דקה",
				mm: "%d דקות",
				h: "שעה",
				hh: function (a) {
					return 2 === a ? "שעתיים" : a + " שעות"
				},
				d: "יום",
				dd: function (a) {
					return 2 === a ? "יומיים" : a + " ימים"
				},
				M: "חודש",
				MM: function (a) {
					return 2 === a ? "חודשיים" : a + " חודשים"
				},
				y: "שנה",
				yy: function (a) {
					return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים"
				}
			},
			meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
			isPM: function (a) {
				return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 5 > a ? "לפנות בוקר" : 10 > a ? "בבוקר" : 12 > a ? c ? 'לפנה"צ' : "לפני הצהריים" : 18 > a ? c ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
			}
		}), {
			1: "१",
			2: "२",
			3: "३",
			4: "४",
			5: "५",
			6: "६",
			7: "७",
			8: "८",
			9: "९",
			0: "०"
		}),
		Sg = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		},
		Tg = (kg.defineLocale("hi", {
			months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
			monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm बजे",
				LTS: "A h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[कल] LT",
				nextWeek: "dddd, LT",
				lastDay: "[कल] LT",
				lastWeek: "[पिछले] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s में",
				past: "%s पहले",
				s: "कुछ ही क्षण",
				m: "एक मिनट",
				mm: "%d मिनट",
				h: "एक घंटा",
				hh: "%d घंटे",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महीने",
				MM: "%d महीने",
				y: "एक वर्ष",
				yy: "%d वर्ष"
			},
			preparse: function (a) {
				return a.replace(/[१२३४५६७८९०]/g, function (a) {
					return Sg[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return Rg[a]
				})
			},
			meridiemParse: /रात|सुबह|दोपहर|शाम/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "रात" === b ? 4 > a ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "रात" : 10 > a ? "सुबह" : 17 > a ? "दोपहर" : 20 > a ? "शाम" : "रात"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), kg.defineLocale("hr", {
			months: {
				format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
				standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
			},
			monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				m: Bd,
				mm: Bd,
				h: Bd,
				hh: Bd,
				d: "dan",
				dd: Bd,
				M: "mjesec",
				MM: Bd,
				y: "godinu",
				yy: Bd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")),
		Ug = (kg.defineLocale("hu", {
			months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
			monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
			weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
			weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
			weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY. MMMM D.",
				LLL: "YYYY. MMMM D. H:mm",
				LLLL: "YYYY. MMMM D., dddd H:mm"
			},
			meridiemParse: /de|du/i,
			isPM: function (a) {
				return "u" === a.charAt(1).toLowerCase()
			},
			meridiem: function (a, b, c) {
				return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU"
			},
			calendar: {
				sameDay: "[ma] LT[-kor]",
				nextDay: "[holnap] LT[-kor]",
				nextWeek: function () {
					return Dd.call(this, !0)
				},
				lastDay: "[tegnap] LT[-kor]",
				lastWeek: function () {
					return Dd.call(this, !1)
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s múlva",
				past: "%s",
				s: Cd,
				m: Cd,
				mm: Cd,
				h: Cd,
				hh: Cd,
				d: Cd,
				dd: Cd,
				M: Cd,
				MM: Cd,
				y: Cd,
				yy: Cd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("hy-am", {
			months: {
				format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
				standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
			},
			monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
			weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
			weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY թ.",
				LLL: "D MMMM YYYY թ., HH:mm",
				LLLL: "dddd, D MMMM YYYY թ., HH:mm"
			},
			calendar: {
				sameDay: "[այսօր] LT",
				nextDay: "[վաղը] LT",
				lastDay: "[երեկ] LT",
				nextWeek: function () {
					return "dddd [օրը ժամը] LT"
				},
				lastWeek: function () {
					return "[անցած] dddd [օրը ժամը] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s հետո",
				past: "%s առաջ",
				s: "մի քանի վայրկյան",
				m: "րոպե",
				mm: "%d րոպե",
				h: "ժամ",
				hh: "%d ժամ",
				d: "օր",
				dd: "%d օր",
				M: "ամիս",
				MM: "%d ամիս",
				y: "տարի",
				yy: "%d տարի"
			},
			meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
			isPM: function (a) {
				return /^(ցերեկվա|երեկոյան)$/.test(a)
			},
			meridiem: function (a) {
				return 4 > a ? "գիշերվա" : 12 > a ? "առավոտվա" : 17 > a ? "ցերեկվա" : "երեկոյան"
			},
			ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
			ordinal: function (a, b) {
				switch (b) {
					case "DDD":
					case "w":
					case "W":
					case "DDDo":
						return 1 === a ? a + "-ին" : a + "-րդ";
					default:
						return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7

			}
		}), kg.defineLocale("is", {
			months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
			weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
			weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
			weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
			},
			calendar: {
				sameDay: "[í dag kl.] LT",
				nextDay: "[á morgun kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[í gær kl.] LT",
				lastWeek: "[síðasta] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir %s",
				past: "fyrir %s síðan",
				s: Fd,
				m: Fd,
				mm: Fd,
				h: "klukkustund",
				hh: Fd,
				d: Fd,
				dd: Fd,
				M: Fd,
				MM: Fd,
				y: Fd,
				yy: Fd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
			weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
			weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Oggi alle] LT",
				nextDay: "[Domani alle] LT",
				nextWeek: "dddd [alle] LT",
				lastDay: "[Ieri alle] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[la scorsa] dddd [alle] LT";
						default:
							return "[lo scorso] dddd [alle] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (a) {
					return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
				},
				past: "%s fa",
				s: "alcuni secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("ja", {
			months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			weekdaysShort: "日_月_火_水_木_金_土".split("_"),
			weekdaysMin: "日_月_火_水_木_金_土".split("_"),
			longDateFormat: {
				LT: "Ah時m分",
				LTS: "Ah時m分s秒",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日Ah時m分",
				LLLL: "YYYY年M月D日Ah時m分 dddd"
			},
			meridiemParse: /午前|午後/i,
			isPM: function (a) {
				return "午後" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "午前" : "午後"
			},
			calendar: {
				sameDay: "[今日] LT",
				nextDay: "[明日] LT",
				nextWeek: "[来週]dddd LT",
				lastDay: "[昨日] LT",
				lastWeek: "[前週]dddd LT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}日/,
			ordinal: function (a, b) {
				switch (b) {
					case "d":
					case "D":
					case "DDD":
						return a + "日";
					default:
						return a
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "数秒",
				m: "1分",
				mm: "%d分",
				h: "1時間",
				hh: "%d時間",
				d: "1日",
				dd: "%d日",
				M: "1ヶ月",
				MM: "%dヶ月",
				y: "1年",
				yy: "%d年"
			}
		}), kg.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 11 > a ? "enjing" : 15 > a ? "siyang" : 19 > a ? "sonten" : "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul] LT",
				nextDay: "[Mbenjang pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kala wingi pukul] LT",
				lastWeek: "dddd [kepengker pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing %s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("ka", {
			months: {
				standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
				format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
			},
			monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
			weekdays: {
				standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
				format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
				isFormat: /(წინა|შემდეგ)/
			},
			weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
			weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[დღეს] LT[-ზე]",
				nextDay: "[ხვალ] LT[-ზე]",
				lastDay: "[გუშინ] LT[-ზე]",
				nextWeek: "[შემდეგ] dddd LT[-ზე]",
				lastWeek: "[წინა] dddd LT-ზე",
				sameElse: "L"
			},
			relativeTime: {
				future: function (a) {
					return /(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში"
				},
				past: function (a) {
					return /(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის წინ") : void 0
				},
				s: "რამდენიმე წამი",
				m: "წუთი",
				mm: "%d წუთი",
				h: "საათი",
				hh: "%d საათი",
				d: "დღე",
				dd: "%d დღე",
				M: "თვე",
				MM: "%d თვე",
				y: "წელი",
				yy: "%d წელი"
			},
			ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
			ordinal: function (a) {
				return 0 === a ? a : 1 === a ? a + "-ლი" : 20 > a || 100 >= a && a % 20 === 0 || a % 100 === 0 ? "მე-" + a : a + "-ე"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			0: "-ші",
			1: "-ші",
			2: "-ші",
			3: "-ші",
			4: "-ші",
			5: "-ші",
			6: "-шы",
			7: "-ші",
			8: "-ші",
			9: "-шы",
			10: "-шы",
			20: "-шы",
			30: "-шы",
			40: "-шы",
			50: "-ші",
			60: "-шы",
			70: "-ші",
			80: "-ші",
			90: "-шы",
			100: "-ші"
		}),
		Vg = (kg.defineLocale("kk", {
			months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
			monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
			weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
			weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
			weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгін сағат] LT",
				nextDay: "[Ертең сағат] LT",
				nextWeek: "dddd [сағат] LT",
				lastDay: "[Кеше сағат] LT",
				lastWeek: "[Өткен аптаның] dddd [сағат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ішінде",
				past: "%s бұрын",
				s: "бірнеше секунд",
				m: "бір минут",
				mm: "%d минут",
				h: "бір сағат",
				hh: "%d сағат",
				d: "бір күн",
				dd: "%d күн",
				M: "бір ай",
				MM: "%d ай",
				y: "бір жыл",
				yy: "%d жыл"
			},
			ordinalParse: /\d{1,2}-(ші|шы)/,
			ordinal: function (a) {
				var b = a % 10,
					c = a >= 100 ? 100 : null;
				return a + (Ug[a] || Ug[b] || Ug[c])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("km", {
			months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
				nextDay: "[ស្អែក ម៉ោង] LT",
				nextWeek: "dddd [ម៉ោង] LT",
				lastDay: "[ម្សិលមិញ ម៉ោង] LT",
				lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sទៀត",
				past: "%sមុន",
				s: "ប៉ុន្មានវិនាទី",
				m: "មួយនាទី",
				mm: "%d នាទី",
				h: "មួយម៉ោង",
				hh: "%d ម៉ោង",
				d: "មួយថ្ងៃ",
				dd: "%d ថ្ងៃ",
				M: "មួយខែ",
				MM: "%d ខែ",
				y: "មួយឆ្នាំ",
				yy: "%d ឆ្នាំ"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("ko", {
			months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
			weekdaysShort: "일_월_화_수_목_금_토".split("_"),
			weekdaysMin: "일_월_화_수_목_금_토".split("_"),
			longDateFormat: {
				LT: "A h시 m분",
				LTS: "A h시 m분 s초",
				L: "YYYY.MM.DD",
				LL: "YYYY년 MMMM D일",
				LLL: "YYYY년 MMMM D일 A h시 m분",
				LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
			},
			calendar: {
				sameDay: "오늘 LT",
				nextDay: "내일 LT",
				nextWeek: "dddd LT",
				lastDay: "어제 LT",
				lastWeek: "지난주 dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s 후",
				past: "%s 전",
				s: "몇 초",
				ss: "%d초",
				m: "일분",
				mm: "%d분",
				h: "한 시간",
				hh: "%d시간",
				d: "하루",
				dd: "%d일",
				M: "한 달",
				MM: "%d달",
				y: "일 년",
				yy: "%d년"
			},
			ordinalParse: /\d{1,2}일/,
			ordinal: "%d일",
			meridiemParse: /오전|오후/,
			isPM: function (a) {
				return "오후" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "오전" : "오후"
			}
		}), {
			0: "-чү",
			1: "-чи",
			2: "-чи",
			3: "-чү",
			4: "-чү",
			5: "-чи",
			6: "-чы",
			7: "-чи",
			8: "-чи",
			9: "-чу",
			10: "-чу",
			20: "-чы",
			30: "-чу",
			40: "-чы",
			50: "-чү",
			60: "-чы",
			70: "-чи",
			80: "-чи",
			90: "-чу",
			100: "-чү"
		}),
		Wg = (kg.defineLocale("ky", {
			months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
			weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
			weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгүн саат] LT",
				nextDay: "[Эртең саат] LT",
				nextWeek: "dddd [саат] LT",
				lastDay: "[Кече саат] LT",
				lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ичинде",
				past: "%s мурун",
				s: "бирнече секунд",
				m: "бир мүнөт",
				mm: "%d мүнөт",
				h: "бир саат",
				hh: "%d саат",
				d: "бир күн",
				dd: "%d күн",
				M: "бир ай",
				MM: "%d ай",
				y: "бир жыл",
				yy: "%d жыл"
			},
			ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
			ordinal: function (a) {
				var b = a % 10,
					c = a >= 100 ? 100 : null;
				return a + (Vg[a] || Vg[b] || Vg[c])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("lb", {
			months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm [Auer]",
				LTS: "H:mm:ss [Auer]",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm [Auer]",
				LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
			},
			calendar: {
				sameDay: "[Haut um] LT",
				sameElse: "L",
				nextDay: "[Muer um] LT",
				nextWeek: "dddd [um] LT",
				lastDay: "[Gëschter um] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 2:
						case 4:
							return "[Leschten] dddd [um] LT";
						default:
							return "[Leschte] dddd [um] LT"
					}
				}
			},
			relativeTime: {
				future: Hd,
				past: Id,
				s: "e puer Sekonnen",
				m: Gd,
				mm: "%d Minutten",
				h: Gd,
				hh: "%d Stonnen",
				d: Gd,
				dd: "%d Deeg",
				M: Gd,
				MM: "%d Méint",
				y: Gd,
				yy: "%d Joer"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("lo", {
			months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "ວັນdddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
			isPM: function (a) {
				return "ຕອນແລງ" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
			},
			calendar: {
				sameDay: "[ມື້ນີ້ເວລາ] LT",
				nextDay: "[ມື້ອື່ນເວລາ] LT",
				nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
				lastDay: "[ມື້ວານນີ້ເວລາ] LT",
				lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ອີກ %s",
				past: "%sຜ່ານມາ",
				s: "ບໍ່ເທົ່າໃດວິນາທີ",
				m: "1 ນາທີ",
				mm: "%d ນາທີ",
				h: "1 ຊົ່ວໂມງ",
				hh: "%d ຊົ່ວໂມງ",
				d: "1 ມື້",
				dd: "%d ມື້",
				M: "1 ເດືອນ",
				MM: "%d ເດືອນ",
				y: "1 ປີ",
				yy: "%d ປີ"
			},
			ordinalParse: /(ທີ່)\d{1,2}/,
			ordinal: function (a) {
				return "ທີ່" + a
			}
		}), {
			m: "minutė_minutės_minutę",
			mm: "minutės_minučių_minutes",
			h: "valanda_valandos_valandą",
			hh: "valandos_valandų_valandas",
			d: "diena_dienos_dieną",
			dd: "dienos_dienų_dienas",
			M: "mėnuo_mėnesio_mėnesį",
			MM: "mėnesiai_mėnesių_mėnesius",
			y: "metai_metų_metus",
			yy: "metai_metų_metus"
		}),
		Xg = (kg.defineLocale("lt", {
			months: {
				format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
				standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
				isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/
			},
			monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
			weekdays: {
				format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
				standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
				isFormat: /dddd HH:mm/
			},
			weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
			weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY [m.] MMMM D [d.]",
				LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
				l: "YYYY-MM-DD",
				ll: "YYYY [m.] MMMM D [d.]",
				lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
			},
			calendar: {
				sameDay: "[Šiandien] LT",
				nextDay: "[Rytoj] LT",
				nextWeek: "dddd LT",
				lastDay: "[Vakar] LT",
				lastWeek: "[Praėjusį] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "po %s",
				past: "prieš %s",
				s: Kd,
				m: Ld,
				mm: Od,
				h: Ld,
				hh: Od,
				d: Ld,
				dd: Od,
				M: Ld,
				MM: Od,
				y: Ld,
				yy: Od
			},
			ordinalParse: /\d{1,2}-oji/,
			ordinal: function (a) {
				return a + "-oji"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			m: "minūtes_minūtēm_minūte_minūtes".split("_"),
			mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
			h: "stundas_stundām_stunda_stundas".split("_"),
			hh: "stundas_stundām_stunda_stundas".split("_"),
			d: "dienas_dienām_diena_dienas".split("_"),
			dd: "dienas_dienām_diena_dienas".split("_"),
			M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			y: "gada_gadiem_gads_gadi".split("_"),
			yy: "gada_gadiem_gads_gadi".split("_")
		}),
		Yg = (kg.defineLocale("lv", {
			months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
			weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
			weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY.",
				LL: "YYYY. [gada] D. MMMM",
				LLL: "YYYY. [gada] D. MMMM, HH:mm",
				LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
			},
			calendar: {
				sameDay: "[Šodien pulksten] LT",
				nextDay: "[Rīt pulksten] LT",
				nextWeek: "dddd [pulksten] LT",
				lastDay: "[Vakar pulksten] LT",
				lastWeek: "[Pagājušā] dddd [pulksten] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "pēc %s",
				past: "pirms %s",
				s: Sd,
				m: Rd,
				mm: Qd,
				h: Rd,
				hh: Qd,
				d: Rd,
				dd: Qd,
				M: Rd,
				MM: Qd,
				y: Rd,
				yy: Qd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			words: {
				m: ["jedan minut", "jednog minuta"],
				mm: ["minut", "minuta", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mjesec", "mjeseca", "mjeseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function (a, b, c) {
				var d = Yg.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + " " + Yg.correctGrammaticalCase(a, d)
			}
		}),
		Zg = (kg.defineLocale("me", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sjutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					var a = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "nekoliko sekundi",
				m: Yg.translate,
				mm: Yg.translate,
				h: Yg.translate,
				hh: Yg.translate,
				d: "dan",
				dd: Yg.translate,
				M: "mjesec",
				MM: Yg.translate,
				y: "godinu",
				yy: Yg.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("mk", {
			months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
			weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
			weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Денес во] LT",
				nextDay: "[Утре во] LT",
				nextWeek: "[Во] dddd [во] LT",
				lastDay: "[Вчера во] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Изминатата] dddd [во] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Изминатиот] dddd [во] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "после %s",
				past: "пред %s",
				s: "неколку секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дена",
				M: "месец",
				MM: "%d месеци",
				y: "година",
				yy: "%d години"
			},
			ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (a) {
				var b = a % 10,
					c = a % 100;
				return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("ml", {
			months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
			monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
			monthsParseExact: !0,
			weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
			weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
			weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
			longDateFormat: {
				LT: "A h:mm -നു",
				LTS: "A h:mm:ss -നു",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm -നു",
				LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
			},
			calendar: {
				sameDay: "[ഇന്ന്] LT",
				nextDay: "[നാളെ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ഇന്നലെ] LT",
				lastWeek: "[കഴിഞ്ഞ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s കഴിഞ്ഞ്",
				past: "%s മുൻപ്",
				s: "അൽപ നിമിഷങ്ങൾ",
				m: "ഒരു മിനിറ്റ്",
				mm: "%d മിനിറ്റ്",
				h: "ഒരു മണിക്കൂർ",
				hh: "%d മണിക്കൂർ",
				d: "ഒരു ദിവസം",
				dd: "%d ദിവസം",
				M: "ഒരു മാസം",
				MM: "%d മാസം",
				y: "ഒരു വർഷം",
				yy: "%d വർഷം"
			},
			meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "രാത്രി" === b && a >= 4 || "ഉച്ച കഴിഞ്ഞ്" === b || "വൈകുന്നേരം" === b ? a + 12 : a
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "രാത്രി" : 12 > a ? "രാവിലെ" : 17 > a ? "ഉച്ച കഴിഞ്ഞ്" : 20 > a ? "വൈകുന്നേരം" : "രാത്രി"
			}
		}), {
			1: "१",
			2: "२",
			3: "३",
			4: "४",
			5: "५",
			6: "६",
			7: "७",
			8: "८",
			9: "९",
			0: "०"
		}),
		$g = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		},
		_g = (kg.defineLocale("mr", {
			months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
			monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm वाजता",
				LTS: "A h:mm:ss वाजता",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm वाजता",
				LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[उद्या] LT",
				nextWeek: "dddd, LT",
				lastDay: "[काल] LT",
				lastWeek: "[मागील] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमध्ये",
				past: "%sपूर्वी",
				s: Td,
				m: Td,
				mm: Td,
				h: Td,
				hh: Td,
				d: Td,
				dd: Td,
				M: Td,
				MM: Td,
				y: Td,
				yy: Td
			},
			preparse: function (a) {
				return a.replace(/[१२३४५६७८९०]/g, function (a) {
					return $g[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return Zg[a]
				})
			},
			meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "रात्री" === b ? 4 > a ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "रात्री" : 10 > a ? "सकाळी" : 17 > a ? "दुपारी" : 20 > a ? "सायंकाळी" : "रात्री"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), kg.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",

				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("ms", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "၁",
			2: "၂",
			3: "၃",
			4: "၄",
			5: "၅",
			6: "၆",
			7: "၇",
			8: "၈",
			9: "၉",
			0: "၀"
		}),
		ah = {
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"၀": "0"
		},
		bh = (kg.defineLocale("my", {
			months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
			monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
			weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
			weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ယနေ.] LT [မှာ]",
				nextDay: "[မနက်ဖြန်] LT [မှာ]",
				nextWeek: "dddd LT [မှာ]",
				lastDay: "[မနေ.က] LT [မှာ]",
				lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
				sameElse: "L"
			},
			relativeTime: {
				future: "လာမည့် %s မှာ",
				past: "လွန်ခဲ့သော %s က",
				s: "စက္ကန်.အနည်းငယ်",
				m: "တစ်မိနစ်",
				mm: "%d မိနစ်",
				h: "တစ်နာရီ",
				hh: "%d နာရီ",
				d: "တစ်ရက်",
				dd: "%d ရက်",
				M: "တစ်လ",
				MM: "%d လ",
				y: "တစ်နှစ်",
				yy: "%d နှစ်"
			},
			preparse: function (a) {
				return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (a) {
					return ah[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return _g[a]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "noen sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				M: "en måned",
				MM: "%d måneder",
				y: "ett år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "१",
			2: "२",
			3: "३",
			4: "४",
			5: "५",
			6: "६",
			7: "७",
			8: "८",
			9: "९",
			0: "०"
		}),
		ch = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		},
		dh = (kg.defineLocale("ne", {
			months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
			monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
			monthsParseExact: !0,
			weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
			weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
			weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "Aको h:mm बजे",
				LTS: "Aको h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, Aको h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
			},
			preparse: function (a) {
				return a.replace(/[१२३४५६७८९०]/g, function (a) {
					return ch[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return bh[a]
				})
			},
			meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "राति" === b ? 4 > a ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "साँझ" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 3 > a ? "राति" : 12 > a ? "बिहान" : 16 > a ? "दिउँसो" : 20 > a ? "साँझ" : "राति"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[भोलि] LT",
				nextWeek: "[आउँदो] dddd[,] LT",
				lastDay: "[हिजो] LT",
				lastWeek: "[गएको] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमा",
				past: "%s अगाडि",
				s: "केही क्षण",
				m: "एक मिनेट",
				mm: "%d मिनेट",
				h: "एक घण्टा",
				hh: "%d घण्टा",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महिना",
				MM: "%d महिना",
				y: "एक बर्ष",
				yy: "%d बर्ष"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
		eh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
		fh = (kg.defineLocale("nl", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function (a, b) {
				return /-MMM-/.test(b) ? eh[a.month()] : dh[a.month()]
			},
			monthsParseExact: !0,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
			weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[I dag klokka] LT",
				nextDay: "[I morgon klokka] LT",
				nextWeek: "dddd [klokka] LT",
				lastDay: "[I går klokka] LT",
				lastWeek: "[Føregåande] dddd [klokka] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s sidan",
				s: "nokre sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				M: "ein månad",
				MM: "%d månader",
				y: "eit år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "੧",
			2: "੨",
			3: "੩",
			4: "੪",
			5: "੫",
			6: "੬",
			7: "੭",
			8: "੮",
			9: "੯",
			0: "੦"
		}),
		gh = {
			"੧": "1",
			"੨": "2",
			"੩": "3",
			"੪": "4",
			"੫": "5",
			"੬": "6",
			"੭": "7",
			"੮": "8",
			"੯": "9",
			"੦": "0"
		},
		hh = (kg.defineLocale("pa-in", {
			months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
			weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			longDateFormat: {
				LT: "A h:mm ਵਜੇ",
				LTS: "A h:mm:ss ਵਜੇ",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
				LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
			},
			calendar: {
				sameDay: "[ਅਜ] LT",
				nextDay: "[ਕਲ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ਕਲ] LT",
				lastWeek: "[ਪਿਛਲੇ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ਵਿੱਚ",
				past: "%s ਪਿਛਲੇ",
				s: "ਕੁਝ ਸਕਿੰਟ",
				m: "ਇਕ ਮਿੰਟ",
				mm: "%d ਮਿੰਟ",
				h: "ਇੱਕ ਘੰਟਾ",
				hh: "%d ਘੰਟੇ",
				d: "ਇੱਕ ਦਿਨ",
				dd: "%d ਦਿਨ",
				M: "ਇੱਕ ਮਹੀਨਾ",
				MM: "%d ਮਹੀਨੇ",
				y: "ਇੱਕ ਸਾਲ",
				yy: "%d ਸਾਲ"
			},
			preparse: function (a) {
				return a.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (a) {
					return gh[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return fh[a]
				})
			},
			meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "ਰਾਤ" === b ? 4 > a ? a : a + 12 : "ਸਵੇਰ" === b ? a : "ਦੁਪਹਿਰ" === b ? a >= 10 ? a : a + 12 : "ਸ਼ਾਮ" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "ਰਾਤ" : 10 > a ? "ਸਵੇਰ" : 17 > a ? "ਦੁਪਹਿਰ" : 20 > a ? "ਸ਼ਾਮ" : "ਰਾਤ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),
		ih = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
		jh = (kg.defineLocale("pl", {
			months: function (a, b) {
				return "" === b ? "(" + ih[a.month()] + "|" + hh[a.month()] + ")" : /D MMMM/.test(b) ? ih[a.month()] : hh[a.month()]
			},
			monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
			weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
			weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
			weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Dziś o] LT",
				nextDay: "[Jutro o] LT",
				nextWeek: "[W] dddd [o] LT",
				lastDay: "[Wczoraj o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[W zeszłą niedzielę o] LT";
						case 3:
							return "[W zeszłą środę o] LT";
						case 6:
							return "[W zeszłą sobotę o] LT";
						default:
							return "[W zeszły] dddd [o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "%s temu",
				s: "kilka sekund",
				m: Vd,
				mm: Vd,
				h: Vd,
				hh: Vd,
				d: "1 dzień",
				dd: "%d dni",
				M: "miesiąc",
				MM: Vd,
				y: "rok",
				yy: Vd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("pt-br", {
			months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "%s atrás",
				s: "poucos segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº"
		}), kg.defineLocale("pt", {
			months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la] LT",
				nextDay: "[mâine la] LT",
				nextWeek: "dddd [la] LT",
				lastDay: "[ieri la] LT",
				lastWeek: "[fosta] dddd [la] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste %s",
				past: "%s în urmă",
				s: "câteva secunde",
				m: "un minut",
				mm: Wd,
				h: "o oră",
				hh: Wd,
				d: "o zi",
				dd: Wd,
				M: "o lună",
				MM: Wd,
				y: "un an",
				yy: Wd
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]),
		kh = (kg.defineLocale("ru", {
			months: {
				format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
				standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
			},
			monthsShort: {
				format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
				standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
			},
			weekdays: {
				standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
				format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
				isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
			},
			weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			monthsParse: jh,
			longMonthsParse: jh,
			shortMonthsParse: jh,
			monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
			monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[Сегодня в] LT",
				nextDay: "[Завтра в] LT",
				lastDay: "[Вчера в] LT",
				nextWeek: function (a) {
					if (a.week() === this.week()) {
						return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
					}
					switch (this.day()) {
						case 0:
							return "[В следующее] dddd [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В следующий] dddd [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В следующую] dddd [в] LT"
					}
				},
				lastWeek: function (a) {
					if (a.week() === this.week()) {
						return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
					}
					switch (this.day()) {
						case 0:
							return "[В прошлое] dddd [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В прошлый] dddd [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В прошлую] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "через %s",
				past: "%s назад",
				s: "несколько секунд",
				m: Yd,
				mm: Yd,
				h: "час",
				hh: Yd,
				d: "день",
				dd: Yd,
				M: "месяц",
				MM: Yd,
				y: "год",
				yy: Yd
			},
			meridiemParse: /ночи|утра|дня|вечера/i,
			isPM: function (a) {
				return /^(дня|вечера)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "ночи" : 12 > a ? "утра" : 17 > a ? "дня" : "вечера"
			},
			ordinalParse: /\d{1,2}-(й|го|я)/,
			ordinal: function (a, b) {
				switch (b) {
					case "M":
					case "d":
					case "DDD":
						return a + "-й";
					case "D":
						return a + "-го";
					case "w":
					case "W":
						return a + "-я";
					default:
						return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("se", {
			months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
			monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
			weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
			weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
			weekdaysMin: "s_v_m_g_d_b_L".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "MMMM D. [b.] YYYY",
				LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
				LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
			},
			calendar: {
				sameDay: "[otne ti] LT",
				nextDay: "[ihttin ti] LT",
				nextWeek: "dddd [ti] LT",
				lastDay: "[ikte ti] LT",
				lastWeek: "[ovddit] dddd [ti] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s geažes",
				past: "maŋit %s",
				s: "moadde sekunddat",
				m: "okta minuhta",
				mm: "%d minuhtat",
				h: "okta diimmu",
				hh: "%d diimmut",
				d: "okta beaivi",
				dd: "%d beaivvit",
				M: "okta mánnu",
				MM: "%d mánut",
				y: "okta jahki",
				yy: "%d jagit"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("si", {
			months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
			monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
			weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
			weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්රහ_සිකු_සෙන".split("_"),
			weekdaysMin: "ඉ_ස_අ_බ_බ්ර_සි_සෙ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D, a h:mm",
				LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
			},
			calendar: {
				sameDay: "[අද] LT[ට]",
				nextDay: "[හෙට] LT[ට]",
				nextWeek: "dddd LT[ට]",
				lastDay: "[ඊයේ] LT[ට]",
				lastWeek: "[පසුගිය] dddd LT[ට]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sකින්",
				past: "%sකට පෙර",
				s: "තත්පර කිහිපය",
				m: "මිනිත්තුව",
				mm: "මිනිත්තු %d",
				h: "පැය",
				hh: "පැය %d",
				d: "දිනය",
				dd: "දින %d",
				M: "මාසය",
				MM: "මාස %d",
				y: "වසර",
				yy: "වසර %d"
			},
			ordinalParse: /\d{1,2} වැනි/,
			ordinal: function (a) {
				return a + " වැනි"
			},
			meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
			isPM: function (a) {
				return "ප.ව." === a || "පස් වරු" === a
			},
			meridiem: function (a, b, c) {
				return a > 11 ? c ? "ප.ව." : "පස් වරු" : c ? "පෙ.ව." : "පෙර වරු"
			}
		}), "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),
		lh = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
		mh = (kg.defineLocale("sk", {
			months: kh,
			monthsShort: lh,
			weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
			weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
			weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[dnes o] LT",
				nextDay: "[zajtra o] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v nedeľu o] LT";
						case 1:
						case 2:
							return "[v] dddd [o] LT";
						case 3:
							return "[v stredu o] LT";
						case 4:
							return "[vo štvrtok o] LT";
						case 5:
							return "[v piatok o] LT";
						case 6:
							return "[v sobotu o] LT"
					}
				},
				lastDay: "[včera o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulú nedeľu o] LT";
						case 1:
						case 2:
							return "[minulý] dddd [o] LT";
						case 3:
							return "[minulú stredu o] LT";
						case 4:
						case 5:
							return "[minulý] dddd [o] LT";
						case 6:
							return "[minulú sobotu o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pred %s",
				s: $d,
				m: $d,
				mm: $d,
				h: $d,
				hh: $d,
				d: $d,
				dd: $d,
				M: $d,
				MM: $d,
				y: $d,
				yy: $d
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danes ob] LT",
				nextDay: "[jutri ob] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v] [nedeljo] [ob] LT";
						case 3:
							return "[v] [sredo] [ob] LT";
						case 6:
							return "[v] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[v] dddd [ob] LT"
					}
				},
				lastDay: "[včeraj ob] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[prejšnjo] [nedeljo] [ob] LT";
						case 3:
							return "[prejšnjo] [sredo] [ob] LT";
						case 6:
							return "[prejšnjo] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prejšnji] dddd [ob] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "čez %s",
				past: "pred %s",
				s: _d,
				m: _d,
				mm: _d,
				h: _d,
				hh: _d,
				d: _d,
				dd: _d,
				M: _d,
				MM: _d,
				y: _d,
				yy: _d
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
			weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
			weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /PD|MD/,
			isPM: function (a) {
				return "M" === a.charAt(0)
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "PD" : "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Sot në] LT",
				nextDay: "[Nesër në] LT",
				nextWeek: "dddd [në] LT",
				lastDay: "[Dje në] LT",
				lastWeek: "dddd [e kaluar në] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "në %s",
				past: "%s më parë",
				s: "disa sekonda",
				m: "një minutë",
				mm: "%d minuta",
				h: "një orë",
				hh: "%d orë",
				d: "një ditë",
				dd: "%d ditë",
				M: "një muaj",
				MM: "%d muaj",
				y: "një vit",
				yy: "%d vite"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			words: {
				m: ["један минут", "једне минуте"],
				mm: ["минут", "минуте", "минута"],
				h: ["један сат", "једног сата"],
				hh: ["сат", "сата", "сати"],
				dd: ["дан", "дана", "дана"],
				MM: ["месец", "месеца", "месеци"],
				yy: ["година", "године", "година"]
			},
			correctGrammaticalCase: function (a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function (a, b, c) {
				var d = mh.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + " " + mh.correctGrammaticalCase(a, d)
			}
		}),
		nh = (kg.defineLocale("sr-cyrl", {
			months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
			monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
			monthsParseExact: !0,
			weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
			weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
			weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[данас у] LT",
				nextDay: "[сутра у] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[у] [недељу] [у] LT";
						case 3:
							return "[у] [среду] [у] LT";
						case 6:
							return "[у] [суботу] [у] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[у] dddd [у] LT"
					}
				},
				lastDay: "[јуче у] LT",
				lastWeek: function () {
					var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "пре %s",
				s: "неколико секунди",
				m: mh.translate,
				mm: mh.translate,
				h: mh.translate,
				hh: mh.translate,
				d: "дан",
				dd: mh.translate,
				M: "месец",
				MM: mh.translate,
				y: "годину",
				yy: mh.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			words: {
				m: ["jedan minut", "jedne minute"],
				mm: ["minut", "minute", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mesec", "meseca", "meseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function (a, b, c) {
				var d = nh.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + " " + nh.correctGrammaticalCase(a, d)
			}
		}),
		oh = (kg.defineLocale("sr", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedelju] [u] LT";
						case 3:
							return "[u] [sredu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pre %s",
				s: "nekoliko sekundi",
				m: nh.translate,
				mm: nh.translate,
				h: nh.translate,
				hh: nh.translate,
				d: "dan",
				dd: nh.translate,
				M: "mesec",
				MM: nh.translate,
				y: "godinu",
				yy: nh.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("ss", {
			months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
			monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
			weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
			weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
			weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Namuhla nga] LT",
				nextDay: "[Kusasa nga] LT",
				nextWeek: "dddd [nga] LT",
				lastDay: "[Itolo nga] LT",
				lastWeek: "dddd [leliphelile] [nga] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "nga %s",
				past: "wenteka nga %s",
				s: "emizuzwana lomcane",
				m: "umzuzu",
				mm: "%d emizuzu",
				h: "lihora",
				hh: "%d emahora",
				d: "lilanga",
				dd: "%d emalanga",
				M: "inyanga",
				MM: "%d tinyanga",
				y: "umnyaka",
				yy: "%d iminyaka"
			},
			meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
			meridiem: function (a, b, c) {
				return 11 > a ? "ekuseni" : 15 > a ? "emini" : 19 > a ? "entsambama" : "ebusuku"
			},
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "ekuseni" === b ? a : "emini" === b ? a >= 11 ? a : a + 12 : "entsambama" === b || "ebusuku" === b ? 0 === a ? 0 : a + 12 : void 0
			},
			ordinalParse: /\d{1,2}/,
			ordinal: "%d",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
			weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
			weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Idag] LT",
				nextDay: "[Imorgon] LT",
				lastDay: "[Igår] LT",
				nextWeek: "[På] dddd LT",
				lastWeek: "[I] dddd[s] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "för %s sedan",
				s: "några sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en månad",
				MM: "%d månader",
				y: "ett år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}(e|a)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("sw", {
			months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
			weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
			weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[leo saa] LT",
				nextDay: "[kesho saa] LT",
				nextWeek: "[wiki ijayo] dddd [saat] LT",
				lastDay: "[jana] LT",
				lastWeek: "[wiki iliyopita] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s baadaye",
				past: "tokea %s",
				s: "hivi punde",
				m: "dakika moja",
				mm: "dakika %d",
				h: "saa limoja",
				hh: "masaa %d",
				d: "siku moja",
				dd: "masiku %d",
				M: "mwezi mmoja",
				MM: "miezi %d",
				y: "mwaka mmoja",
				yy: "miaka %d"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "௧",
			2: "௨",
			3: "௩",
			4: "௪",
			5: "௫",
			6: "௬",
			7: "௭",
			8: "௮",
			9: "௯",
			0: "௦"
		}),
		ph = {
			"௧": "1",
			"௨": "2",
			"௩": "3",
			"௪": "4",
			"௫": "5",
			"௬": "6",
			"௭": "7",
			"௮": "8",
			"௯": "9",
			"௦": "0"
		},
		qh = (kg.defineLocale("ta", {
			months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
			weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
			weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, HH:mm",
				LLLL: "dddd, D MMMM YYYY, HH:mm"
			},
			calendar: {
				sameDay: "[இன்று] LT",
				nextDay: "[நாளை] LT",
				nextWeek: "dddd, LT",
				lastDay: "[நேற்று] LT",
				lastWeek: "[கடந்த வாரம்] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s இல்",
				past: "%s முன்",
				s: "ஒரு சில விநாடிகள்",
				m: "ஒரு நிமிடம்",
				mm: "%d நிமிடங்கள்",
				h: "ஒரு மணி நேரம்",
				hh: "%d மணி நேரம்",
				d: "ஒரு நாள்",
				dd: "%d நாட்கள்",
				M: "ஒரு மாதம்",
				MM: "%d மாதங்கள்",
				y: "ஒரு வருடம்",
				yy: "%d ஆண்டுகள்"
			},
			ordinalParse: /\d{1,2}வது/,
			ordinal: function (a) {
				return a + "வது"
			},
			preparse: function (a) {
				return a.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (a) {
					return ph[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return oh[a]
				})
			},
			meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
			meridiem: function (a, b, c) {
				return 2 > a ? " யாமம்" : 6 > a ? " வைகறை" : 10 > a ? " காலை" : 14 > a ? " நண்பகல்" : 18 > a ? " எற்பாடு" : 22 > a ? " மாலை" : " யாமம்"
			},
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "யாமம்" === b ? 2 > a ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), kg.defineLocale("te", {
			months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
			monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
			monthsParseExact: !0,
			weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
			weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
			weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[నేడు] LT",
				nextDay: "[రేపు] LT",
				nextWeek: "dddd, LT",

				lastDay: "[నిన్న] LT",
				lastWeek: "[గత] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s లో",
				past: "%s క్రితం",
				s: "కొన్ని క్షణాలు",
				m: "ఒక నిమిషం",
				mm: "%d నిమిషాలు",
				h: "ఒక గంట",
				hh: "%d గంటలు",
				d: "ఒక రోజు",
				dd: "%d రోజులు",
				M: "ఒక నెల",
				MM: "%d నెలలు",
				y: "ఒక సంవత్సరం",
				yy: "%d సంవత్సరాలు"
			},
			ordinalParse: /\d{1,2}వ/,
			ordinal: "%dవ",
			meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "రాత్రి" === b ? 4 > a ? a : a + 12 : "ఉదయం" === b ? a : "మధ్యాహ్నం" === b ? a >= 10 ? a : a + 12 : "సాయంత్రం" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "రాత్రి" : 10 > a ? "ఉదయం" : 17 > a ? "మధ్యాహ్నం" : 20 > a ? "సాయంత్రం" : "రాత్రి"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), kg.defineLocale("th", {
			months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
			monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
			monthsParseExact: !0,
			weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
			weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
			weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H นาฬิกา m นาที",
				LTS: "H นาฬิกา m นาที s วินาที",
				L: "YYYY/MM/DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
				LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
			},
			meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
			isPM: function (a) {
				return "หลังเที่ยง" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "ก่อนเที่ยง" : "หลังเที่ยง"
			},
			calendar: {
				sameDay: "[วันนี้ เวลา] LT",
				nextDay: "[พรุ่งนี้ เวลา] LT",
				nextWeek: "dddd[หน้า เวลา] LT",
				lastDay: "[เมื่อวานนี้ เวลา] LT",
				lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "อีก %s",
				past: "%sที่แล้ว",
				s: "ไม่กี่วินาที",
				m: "1 นาที",
				mm: "%d นาที",
				h: "1 ชั่วโมง",
				hh: "%d ชั่วโมง",
				d: "1 วัน",
				dd: "%d วัน",
				M: "1 เดือน",
				MM: "%d เดือน",
				y: "1 ปี",
				yy: "%d ปี"
			}
		}), kg.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY HH:mm",
				LLLL: "dddd, MMMM DD, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ngayon sa] LT",
				nextDay: "[Bukas sa] LT",
				nextWeek: "dddd [sa] LT",
				lastDay: "[Kahapon sa] LT",
				lastWeek: "dddd [huling linggo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function (a) {
				return a
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")),
		rh = (kg.defineLocale("tlh", {
			months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
			monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
			monthsParseExact: !0,
			weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[DaHjaj] LT",
				nextDay: "[wa’leS] LT",
				nextWeek: "LLL",
				lastDay: "[wa’Hu’] LT",
				lastWeek: "LLL",
				sameElse: "L"
			},
			relativeTime: {
				future: ae,
				past: be,
				s: "puS lup",
				m: "wa’ tup",
				mm: ce,
				h: "wa’ rep",
				hh: ce,
				d: "wa’ jaj",
				dd: ce,
				M: "wa’ jar",
				MM: ce,
				y: "wa’ DIS",
				yy: ce
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "'inci",
			5: "'inci",
			8: "'inci",
			70: "'inci",
			80: "'inci",
			2: "'nci",
			7: "'nci",
			20: "'nci",
			50: "'nci",
			3: "'üncü",
			4: "'üncü",
			100: "'üncü",
			6: "'ncı",
			9: "'uncu",
			10: "'uncu",
			30: "'uncu",
			60: "'ıncı",
			90: "'ıncı"
		}),
		sh = (kg.defineLocale("tr", {
			months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
			monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
			weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
			weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
			weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[yarın saat] LT",
				nextWeek: "[haftaya] dddd [saat] LT",
				lastDay: "[dün] LT",
				lastWeek: "[geçen hafta] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s önce",
				s: "birkaç saniye",
				m: "bir dakika",
				mm: "%d dakika",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir yıl",
				yy: "%d yıl"
			},
			ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
			ordinal: function (a) {
				if (0 === a) {
					return a + "'ıncı"
				}
				var b = a % 10,
					c = a % 100 - b,
					d = a >= 100 ? 100 : null;
				return a + (rh[b] || rh[c] || rh[d])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("tzl", {
			months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
			monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
			weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
			weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
			weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM [dallas] YYYY",
				LLL: "D. MMMM [dallas] YYYY HH.mm",
				LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
			},
			meridiemParse: /d\'o|d\'a/i,
			isPM: function (a) {
				return "d'o" === a.toLowerCase()
			},
			meridiem: function (a, b, c) {
				return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A"
			},
			calendar: {
				sameDay: "[oxhi à] LT",
				nextDay: "[demà à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[ieiri à] LT",
				lastWeek: "[sür el] dddd [lasteu à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "osprei %s",
				past: "ja%s",
				s: ee,
				m: ee,
				mm: ee,
				h: ee,
				hh: ee,
				d: ee,
				dd: ee,
				M: ee,
				MM: ee,
				y: ee,
				yy: ee
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("tzm-latn", {
			months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[asdkh g] LT",
				nextDay: "[aska g] LT",
				nextWeek: "dddd [g] LT",
				lastDay: "[assant g] LT",
				lastWeek: "dddd [g] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan %s",
				past: "yan %s",
				s: "imik",
				m: "minuḍ",
				mm: "%d minuḍ",
				h: "saɛa",
				hh: "%d tassaɛin",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), kg.defineLocale("tzm", {
			months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
				nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
				nextWeek: "dddd [ⴴ] LT",
				lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
				lastWeek: "dddd [ⴴ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
				past: "ⵢⴰⵏ %s",
				s: "ⵉⵎⵉⴽ",
				m: "ⵎⵉⵏⵓⴺ",
				mm: "%d ⵎⵉⵏⵓⴺ",
				h: "ⵙⴰⵄⴰ",
				hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
				d: "ⴰⵙⵙ",
				dd: "%d oⵙⵙⴰⵏ",
				M: "ⴰⵢoⵓⵔ",
				MM: "%d ⵉⵢⵢⵉⵔⵏ",
				y: "ⴰⵙⴳⴰⵙ",
				yy: "%d ⵉⵙⴳⴰⵙⵏ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), kg.defineLocale("uk", {
			months: {
				format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
				standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
			},
			monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
			weekdays: he,
			weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р., HH:mm",
				LLLL: "dddd, D MMMM YYYY р., HH:mm"
			},
			calendar: {
				sameDay: ie("[Сьогодні "),
				nextDay: ie("[Завтра "),
				lastDay: ie("[Вчора "),
				nextWeek: ie("[У] dddd ["),
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return ie("[Минулої] dddd [").call(this);
						case 1:
						case 2:
						case 4:
							return ie("[Минулого] dddd [").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "%s тому",
				s: "декілька секунд",
				m: ge,
				mm: ge,
				h: "годину",
				hh: ge,
				d: "день",
				dd: ge,
				M: "місяць",
				MM: ge,
				y: "рік",
				yy: ge
			},
			meridiemParse: /ночі|ранку|дня|вечора/,
			isPM: function (a) {
				return /^(дня|вечора)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "ночі" : 12 > a ? "ранку" : 17 > a ? "дня" : "вечора"
			},
			ordinalParse: /\d{1,2}-(й|го)/,
			ordinal: function (a, b) {
				switch (b) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return a + "-й";
					case "D":
						return a + "-го";
					default:
						return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("uz", {
			months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
			weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
			weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Бугун соат] LT [да]",
				nextDay: "[Эртага] LT [да]",
				nextWeek: "dddd [куни соат] LT [да]",
				lastDay: "[Кеча соат] LT [да]",
				lastWeek: "[Утган] dddd [куни соат] LT [да]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Якин %s ичида",
				past: "Бир неча %s олдин",
				s: "фурсат",
				m: "бир дакика",
				mm: "%d дакика",
				h: "бир соат",
				hh: "%d соат",
				d: "бир кун",
				dd: "%d кун",
				M: "бир ой",
				MM: "%d ой",
				y: "бир йил",
				yy: "%d йил"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), kg.defineLocale("vi", {
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			monthsParseExact: !0,
			weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /sa|ch/i,
			isPM: function (a) {
				return /^ch$/i.test(a)
			},
			meridiem: function (a, b, c) {
				return 12 > a ? c ? "sa" : "SA" : c ? "ch" : "CH"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [năm] YYYY",
				LLL: "D MMMM [năm] YYYY HH:mm",
				LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hôm nay lúc] LT",
				nextDay: "[Ngày mai lúc] LT",
				nextWeek: "dddd [tuần tới lúc] LT",
				lastDay: "[Hôm qua lúc] LT",
				lastWeek: "dddd [tuần rồi lúc] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s tới",
				past: "%s trước",
				s: "vài giây",
				m: "một phút",
				mm: "%d phút",
				h: "một giờ",
				hh: "%d giờ",
				d: "một ngày",
				dd: "%d ngày",
				M: "một tháng",
				MM: "%d tháng",
				y: "một năm",
				yy: "%d năm"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function (a) {
				return a
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("x-pseudo", {
			months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
			monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
			monthsParseExact: !0,
			weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
			weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
			weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[T~ódá~ý át] LT",
				nextDay: "[T~ómó~rró~w át] LT",
				nextWeek: "dddd [át] LT",
				lastDay: "[Ý~ést~érdá~ý át] LT",
				lastWeek: "[L~ást] dddd [át] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "í~ñ %s",
				past: "%s á~gó",
				s: "á ~féw ~sécó~ñds",
				m: "á ~míñ~úté",
				mm: "%d m~íñú~tés",
				h: "á~ñ hó~úr",
				hh: "%d h~óúrs",
				d: "á ~dáý",
				dd: "%d d~áýs",
				M: "á ~móñ~th",
				MM: "%d m~óñt~hs",
				y: "á ~ýéár",
				yy: "%d ý~éárs"
			},
			ordinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("zh-cn", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "Ah点mm分",
				LTS: "Ah点m分s秒",
				L: "YYYY-MM-DD",
				LL: "YYYY年MMMD日",
				LLL: "YYYY年MMMD日Ah点mm分",
				LLLL: "YYYY年MMMD日ddddAh点mm分",
				l: "YYYY-MM-DD",
				ll: "YYYY年MMMD日",
				lll: "YYYY年MMMD日Ah点mm分",
				llll: "YYYY年MMMD日ddddAh点mm分"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12
			},
			meridiem: function (a, b, c) {
				var d = 100 * a + b;
				return 600 > d ? "凌晨" : 900 > d ? "早上" : 1130 > d ? "上午" : 1230 > d ? "中午" : 1800 > d ? "下午" : "晚上"
			},
			calendar: {
				sameDay: function () {
					return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
				},
				nextDay: function () {
					return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
				},
				lastDay: function () {
					return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
				},
				nextWeek: function () {
					var a, b;
					return a = kg().startOf("week"), b = this.diff(a, "days") >= 7 ? "[下]" : "[本]", 0 === this.minutes() ? b + "dddAh点整" : b + "dddAh点mm"
				},
				lastWeek: function () {
					var a, b;
					return a = kg().startOf("week"), b = this.unix() < a.unix() ? "[上]" : "[本]", 0 === this.minutes() ? b + "dddAh点整" : b + "dddAh点mm"
				},
				sameElse: "LL"
			},
			ordinalParse: /\d{1,2}(日|月|周)/,
			ordinal: function (a, b) {
				switch (b) {
					case "d":
					case "D":
					case "DDD":
						return a + "日";
					case "M":
						return a + "月";
					case "w":
					case "W":
						return a + "周";
					default:
						return a
				}
			},
			relativeTime: {
				future: "%s内",
				past: "%s前",
				s: "几秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 天",
				dd: "%d 天",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), kg.defineLocale("zh-tw", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "Ah點mm分",
				LTS: "Ah點m分s秒",
				L: "YYYY年MMMD日",
				LL: "YYYY年MMMD日",
				LLL: "YYYY年MMMD日Ah點mm分",
				LLLL: "YYYY年MMMD日ddddAh點mm分",
				l: "YYYY年MMMD日",
				ll: "YYYY年MMMD日",
				lll: "YYYY年MMMD日Ah點mm分",
				llll: "YYYY年MMMD日ddddAh點mm分"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				var d = 100 * a + b;
				return 600 > d ? "凌晨" : 900 > d ? "早上" : 1130 > d ? "上午" : 1230 > d ? "中午" : 1800 > d ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (a, b) {
				switch (b) {
					case "d":
					case "D":
					case "DDD":
						return a + "日";
					case "M":
						return a + "月";
					case "w":
					case "W":
						return a + "週";
					default:
						return a
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		}), kg);
	return sh.locale("en"), sh
});
(function () {
	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;
		var noOp = $.noop || function () {};
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6 = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction(document.createElement("div").style.setExpression);
		$.blockUI = function (opts) {
			install(window, opts)
		};
		$.unblockUI = function (opts) {
			remove(window, opts)
		};
		$.growlUI = function (title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) {
				$m.append("<h1>" + title + "</h1>")
			}
			if (message) {
				$m.append("<h2>" + message + "</h2>")
			}
			if (timeout === undefined) {
				timeout = 3000
			}
			var callBlock = function (opts) {
				opts = opts || {};
				$.blockUI({
					message: $m,
					fadeIn: typeof opts.fadeIn !== "undefined" ? opts.fadeIn : 700,
					fadeOut: typeof opts.fadeOut !== "undefined" ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== "undefined" ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				})
			};
			callBlock();
			var nonmousedOpacity = $m.css("opacity");
			$m.mouseover(function () {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});
				var displayBlock = $(".blockMsg");
				displayBlock.stop();
				displayBlock.fadeTo(300, 1)
			}).mouseout(function () {
				$(".blockMsg").fadeOut(1000)
			})
		};
		$.fn.block = function (opts) {
			if (this[0] === window) {
				$.blockUI(opts);
				return this
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function () {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data("blockUI.isBlocked")) {
					return
				}
				$el.unblock({
					fadeOut: 0
				})
			});
			return this.each(function () {
				if ($.css(this, "position") == "static") {
					this.style.position = "relative";
					$(this).data("blockUI.static", true)
				}
				this.style.zoom = 1;
				install(this, opts)
			})
		};
		$.fn.unblock = function (opts) {
			if (this[0] === window) {
				$.unblockUI(opts);
				return this
			}
			return this.each(function () {
				remove(this, opts)
			})
		};
		$.blockUI.version = 2.7;
		$.blockUI.defaults = {
			message: "<h1>Please wait...</h1>",
			title: null,
			draggable: true,
			theme: false,
			css: {
				padding: 0,
				margin: 0,
				width: "30%",
				top: "40%",
				left: "35%",
				textAlign: "center",
				color: "#000",
				border: "0",
				cursor: "wait"
			},
			themedCSS: {
				width: "30%",
				top: "40%",
				left: "35%"
			},
			overlayCSS: {
				backgroundColor: "#000",
				opacity: 0.6,
				cursor: "wait"
			},
			cursorReset: "default",
			growlCSS: {
				width: "350px",
				top: "10px",
				left: "",
				right: "10px",
				border: "none",
				padding: "5px",
				opacity: 0.6,
				cursor: "default",
				color: "#fff",
				backgroundColor: "#000",
				"-webkit-border-radius": "10px",
				"-moz-border-radius": "10px",
				"border-radius": "10px"
			},
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
			forceIframe: false,
			baseZ: 1300,
			centerX: true,
			centerY: true,
			allowBodyStretch: true,
			bindEvents: true,
			constrainTabKey: true,
			fadeIn: 200,
			fadeOut: 400,
			timeout: 0,
			showOverlay: true,
			focusInput: true,
			focusableElements: ":input:enabled:visible",
			onBlock: null,
			onUnblock: null,
			onOverlayClick: null,
			quirksmodeOffsetHack: 4,
			blockMsgClass: "blockMsg",
			ignoreIfBlocked: false
		};
		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			if (opts.ignoreIfBlocked && $(el).data("blockUI.isBlocked")) {
				return
			}
			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick) {
				opts.overlayCSS.cursor = "pointer"
			}
			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;
			if (full && pageBlock) {
				remove(window, {
					fadeOut: 0
				})
			}
			if (msg && typeof msg != "string" && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data("blockUI.history", data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent) {
					data.parent.removeChild(node)
				}
			}
			$(el).data("blockUI.onUnblock", opts.onUnblock);
			var z = opts.baseZ;
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe) {
				lyr1 = $('<iframe class="blockUI" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + opts.iframeSrc + '"></iframe>')
			} else {
				lyr1 = $('<div class="blockUI" style="display:none"></div>')
			}
			if (opts.theme) {
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + (z++) + ';display:none"></div>')
			} else {
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>')
			}
			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (z + 10) + ';display:none;position:fixed">';
				if (opts.title) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (opts.title || "&nbsp;") + "</div>"
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += "</div>"
			} else {
				if (opts.theme) {
					s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (z + 10) + ';display:none;position:absolute">';
					if (opts.title) {
						s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (opts.title || "&nbsp;") + "</div>"
					}
					s += '<div class="ui-widget-content ui-dialog-content"></div>';
					s += "</div>"
				} else {
					if (full) {
						s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:' + (z + 10) + ';display:none;position:fixed"></div>'
					} else {
						s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:' + (z + 10) + ';display:none;position:absolute"></div>'
					}
				}
			}
			lyr3 = $(s);
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass("ui-widget-content")
				} else {
					lyr3.css(css)
				}
			}
			if (!opts.theme) {
				lyr2.css(opts.overlayCSS)
			}
			lyr2.css("position", full ? "fixed" : "absolute");
			if (msie || opts.forceIframe) {
				lyr1.css("opacity", 0)
			}
			var layers = [lyr1, lyr2, lyr3],
				$par = full ? $("body") : $(el);
			$.each(layers, function () {
				this.appendTo($par)
			});
			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: ".ui-dialog-titlebar",
					cancel: "li"
				})
			}
			var expr = setExpr && (!$.support.boxModel || $("object,embed", full ? null : el).length > 0);
			if (ie6 || expr) {
				if (full && opts.allowBodyStretch && $.support.boxModel) {
					$("html,body").css("height", "100%")
				}
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el, "borderTopWidth"),
						l = sz(el, "borderLeftWidth");
					var fixT = t ? "(0 - " + t + ")" : 0;
					var fixL = l ? "(0 - " + l + ")" : 0
				}
				$.each(layers, function (i, o) {
					var s = o[0].style;
					s.position = "absolute";
					if (i < 2) {
						if (full) {
							s.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + opts.quirksmodeOffsetHack + ') + "px"')
						} else {
							s.setExpression("height", 'this.parentNode.offsetHeight + "px"')
						}
						if (full) {
							s.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
						} else {
							s.setExpression("width", 'this.parentNode.offsetWidth + "px"')
						}
						if (fixL) {
							s.setExpression("left", fixL)
						}
						if (fixT) {
							s.setExpression("top", fixT)
						}
					} else {
						if (opts.centerY) {
							if (full) {
								s.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')
							}
							s.marginTop = 0
						} else {
							if (!opts.centerY && full) {
								var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
								var expression = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + top + ') + "px"';
								s.setExpression("top", expression)
							}
						}
					}
				})
			}
			if (msg) {
				if (opts.theme) {
					lyr3.find(".ui-widget-content").append(msg)
				} else {
					lyr3.append(msg)
				}
				if (msg.jquery || msg.nodeType) {
					$(msg).show()
				}
			}
			if ((msie || opts.forceIframe) && opts.showOverlay) {
				lyr1.show()
			}
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay) {
					lyr2._fadeIn(opts.fadeIn, cb1)
				}
				if (msg) {
					lyr3._fadeIn(opts.fadeIn, cb2)
				}
			} else {
				if (opts.showOverlay) {
					lyr2.show()
				}
				if (msg) {
					lyr3.show()
				}
				if (opts.onBlock) {
					opts.onBlock.bind(lyr3)()
				}
			}
			bind(1, el, opts);
			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements, pageBlock);
				if (opts.focusInput) {
					setTimeout(focus, 20)
				}
			} else {
				center(lyr3[0], opts.centerX, opts.centerY)
			}
			if (opts.timeout) {
				var to = setTimeout(function () {
					if (full) {
						$.unblockUI(opts)
					} else {
						$(el).unblock(opts)
					}
				}, opts.timeout);
				$(el).data("blockUI.timeout", to)
			}
		}

		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data("blockUI.history");
			var to = $el.data("blockUI.timeout");
			if (to) {
				clearTimeout(to);
				$el.removeData("blockUI.timeout")
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts);
			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data("blockUI.onUnblock");
				$el.removeData("blockUI.onUnblock")
			}
			var els;
			if (full) {
				els = $("body").children().filter(".blockUI").add("body > .blockUI")
			} else {
				els = $el.find(">.blockUI")
			}
			if (opts.cursorReset) {
				if (els.length > 1) {
					els[1].style.cursor = opts.cursorReset
				}
				if (els.length > 2) {
					els[2].style.cursor = opts.cursorReset
				}
			}
			if (full) {
				pageBlock = pageBlockEls = null
			}
			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function () {
					if (--count === 0) {
						reset(els, data, opts, el)
					}

				})
			} else {
				reset(els, data, opts, el)
			}
		}

		function reset(els, data, opts, el) {
			var $el = $(el);
			if ($el.data("blockUI.isBlocked")) {
				return
			}
			els.each(function (i, o) {
				if (this.parentNode) {
					this.parentNode.removeChild(this)
				}
			});
			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				data.el.style.cursor = "default";
				if (data.parent) {
					data.parent.appendChild(data.el)
				}
				$el.removeData("blockUI.history")
			}
			if ($el.data("blockUI.static")) {
				$el.css("position", "static")
			}
			if (typeof opts.onUnblock == "function") {
				opts.onUnblock(el, opts)
			}
			var body = $(document.body),
				w = body.width(),
				cssW = body[0].style.width;
			body.width(w - 1).width(w);
			body[0].style.width = cssW
		}

		function bind(b, el, opts) {
			var full = el == window,
				$el = $(el);
			if (!b && (full && !pageBlock || !full && !$el.data("blockUI.isBlocked"))) {
				return
			}
			$el.data("blockUI.isBlocked", b);
			if (!full || !opts.bindEvents || (b && !opts.showOverlay)) {
				return
			}
			var events = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
			if (b) {
				$(document).bind(events, opts, handler)
			} else {
				$(document).unbind(events, handler)
			}
		}

		function handler(e) {
			if (e.type === "keydown" && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length - 1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function () {
							focus(back)
						}, 10);
						return false
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass("blockOverlay") && opts.onOverlayClick) {
				opts.onOverlayClick(e)
			}
			if (target.parents("div." + opts.blockMsgClass).length > 0) {
				return true
			}
			return target.parents().children().filter("div.blockUI").length === 0
		}

		function focus(back) {
			if (!pageBlockEls) {
				return
			}
			var e = pageBlockEls[back === true ? pageBlockEls.length - 1 : 0];
			if (e) {
				e.focus()
			}
		}

		function center(el, x, y) {
			var p = el.parentNode,
				s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth) / 2) - sz(p, "borderLeftWidth");
			var t = ((p.offsetHeight - el.offsetHeight) / 2) - sz(p, "borderTopWidth");
			if (x) {
				s.left = l > 0 ? (l + "px") : "0"
			}
			if (y) {
				s.top = t > 0 ? (t + "px") : "0"
			}
		}

		function sz(el, p) {
			return parseInt($.css(el, p), 10) || 0
		}
	}
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define(["jquery"], setup)
	} else {
		setup(jQuery)
	}
})();
var block_msg = '<div class="md-preloader"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="32" width="32" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="6"/></svg></div>';
var matForms = function () {
	jQuery(".form-material.floating > .form-control").each(function () {
		var $input = jQuery(this);
		var $parent = $input.parent(".form-material");
		if ($input.val()) {
			$parent.addClass("open")
		}
		$input.on("change", function () {
			if ($input.val()) {
				$parent.addClass("open")
			} else {
				$parent.removeClass("open")
			}
		})
	})
};
! function (e) {
	e(["jquery"], function (e) {
		return function () {
			function t(e, t, n) {
				return f({
					type: O.error,
					iconClass: g().iconClasses.error,
					message: e,
					optionsOverride: n,
					title: t
				})
			}

			function n(t, n) {
				return t || (t = g()), v = e("#" + t.containerId), v.length ? v : (n && (v = c(t)), v)
			}

			function i(e, t, n) {
				return f({
					type: O.info,
					iconClass: g().iconClasses.info,
					message: e,
					optionsOverride: n,
					title: t
				})
			}

			function o(e) {
				w = e
			}

			function s(e, t, n) {
				return f({
					type: O.success,
					iconClass: g().iconClasses.success,
					message: e,
					optionsOverride: n,
					title: t
				})
			}

			function a(e, t, n) {
				return f({
					type: O.warning,
					iconClass: g().iconClasses.warning,
					message: e,
					optionsOverride: n,
					title: t
				})
			}

			function r(e) {
				var t = g();
				v || n(t), l(e, t) || u(t)
			}

			function d(t) {
				var i = g();
				return v || n(i), t && 0 === e(":focus", t).length ? void h(t) : void(v.children().length && v.remove())
			}

			function u(t) {
				for (var n = v.children(), i = n.length - 1; i >= 0; i--) {
					l(e(n[i]), t)
				}
			}

			function l(t, n) {
				return t && 0 === e(":focus", t).length ? (t[n.hideMethod]({
					duration: n.hideDuration,
					easing: n.hideEasing,
					complete: function () {
						h(t)
					}
				}), !0) : !1
			}

			function c(t) {
				return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass).attr("aria-live", "polite").attr("role", "alert"), v.appendTo(e(t.target)), v
			}

			function p() {
				return {
					tapToDismiss: !0,
					toastClass: "toast",
					containerId: "toast-container",
					debug: !1,
					showMethod: "fadeIn",
					showDuration: 300,
					showEasing: "swing",
					onShown: void 0,
					hideMethod: "fadeOut",
					hideDuration: 1000,
					hideEasing: "swing",
					onHidden: void 0,
					extendedTimeOut: 1000,
					iconClasses: {
						error: "toast-error",
						info: "toast-info",
						success: "toast-success",
						warning: "toast-warning"
					},
					iconClass: "toast-info",
					positionClass: "toast-top-right",
					timeOut: 5000,
					titleClass: "toast-title",
					messageClass: "toast-message",
					target: "body",
					closeHtml: '<button type="button">&times;</button>',
					newestOnTop: !0,
					preventDuplicates: !1,
					progressBar: !1
				}
			}

			function m(e) {
				w && w(e)
			}

			function f(t) {
				function i(t) {
					return !e(":focus", l).length || t ? (clearTimeout(O.intervalId), l[r.hideMethod]({
						duration: r.hideDuration,
						easing: r.hideEasing,
						complete: function () {
							h(l), r.onHidden && "hidden" !== b.state && r.onHidden(), b.state = "hidden", b.endTime = new Date, m(b)
						}
					})) : void 0
				}

				function o() {
					(r.timeOut > 0 || r.extendedTimeOut > 0) && (u = setTimeout(i, r.extendedTimeOut), O.maxHideTime = parseFloat(r.extendedTimeOut), O.hideEta = (new Date).getTime() + O.maxHideTime)
				}

				function s() {
					clearTimeout(u), O.hideEta = 0, l.stop(!0, !0)[r.showMethod]({
						duration: r.showDuration,
						easing: r.showEasing
					})
				}

				function a() {
					var e = (O.hideEta - (new Date).getTime()) / O.maxHideTime * 100;
					f.width(e + "%")
				}
				var r = g(),
					d = t.iconClass || r.iconClass;
				if ("undefined" != typeof t.optionsOverride && (r = e.extend(r, t.optionsOverride), d = t.optionsOverride.iconClass || d), r.preventDuplicates) {
					if (t.message === C) {
						return
					}
					C = t.message
				}
				T++, v = n(r, !0);
				var u = null,
					l = e("<div/>"),
					c = e("<div/>"),
					p = e("<div/>"),
					f = e("<div/>"),
					w = e(r.closeHtml),
					O = {
						intervalId: null,
						hideEta: null,
						maxHideTime: null
					},
					b = {
						toastId: T,
						state: "visible",
						startTime: new Date,
						options: r,
						map: t
					};
				return t.iconClass && l.addClass(r.toastClass).addClass(d), t.title && (c.append(t.title).addClass(r.titleClass), l.append(c)), t.message && (p.append(t.message).addClass(r.messageClass), l.append(p)), r.closeButton && (w.addClass("toast-close-button").attr("role", "button"), l.prepend(w)), r.progressBar && (f.addClass("toast-progress"), l.prepend(f)), l.hide(), r.newestOnTop ? v.prepend(l) : v.append(l), l[r.showMethod]({
					duration: r.showDuration,
					easing: r.showEasing,
					complete: r.onShown
				}), r.timeOut > 0 && (u = setTimeout(i, r.timeOut), O.maxHideTime = parseFloat(r.timeOut), O.hideEta = (new Date).getTime() + O.maxHideTime, r.progressBar && (O.intervalId = setInterval(a, 10))), l.hover(s, o), !r.onclick && r.tapToDismiss && l.click(i), r.closeButton && w && w.click(function (e) {
					e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), i(!0)
				}), r.onclick && l.click(function () {
					r.onclick(), i()
				}), m(b), r.debug && console && console.log(b), l
			}

			function g() {
				return e.extend({}, p(), b.options)
			}

			function h(e) {
				v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), C = void 0))
			}
			var v, w, C, T = 0,
				O = {
					error: "error",
					info: "info",
					success: "success",
					warning: "warning"
				},
				b = {
					clear: r,
					remove: d,
					error: t,
					getContainer: n,
					info: i,
					options: {},
					subscribe: o,
					success: s,
					version: "2.1.0",
					warning: a
				};
			return b
		}()
	})
}("function" == typeof define && define.amd ? define : function (e, t) {
	"undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
});
! function (e, t) {
	if ("function" == typeof define && define.amd) {
		define(["exports", "module"], t)
	} else {
		if ("undefined" != typeof exports && "undefined" != typeof module) {
			t(exports, module)
		} else {
			var n = {
				exports: {}
			};
			t(n.exports, n), e.autosize = n.exports
		}
	}
}(this, function (e, t) {
	function n(e) {
		function t() {
			var t = window.getComputedStyle(e, null);
			v = t.overflowY, "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), p = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(p) && (p = 0), s()
		}

		function n(t) {
			var n = e.style.width;
			e.style.width = "0px", e.offsetWidth, e.style.width = n, v = t, f && (e.style.overflowY = t), r()
		}

		function o(e) {
			for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) {
				e.parentNode.scrollTop && t.push({
					node: e.parentNode,
					scrollTop: e.parentNode.scrollTop
				}), e = e.parentNode
			}
			return t
		}

		function r() {
			var t = e.style.height,
				n = o(e),
				r = document.documentElement && document.documentElement.scrollTop;
			e.style.height = "auto";
			var i = e.scrollHeight + p;
			return 0 === e.scrollHeight ? void(e.style.height = t) : (e.style.height = i + "px", h = e.clientWidth, n.forEach(function (e) {
				e.node.scrollTop = e.scrollTop
			}), void(r && (document.documentElement.scrollTop = r)))
		}

		function s() {
			var t = e.style.height;
			r();
			var o = window.getComputedStyle(e, null);
			if (o.height !== e.style.height ? "visible" !== v && n("visible") : "hidden" !== v && n("hidden"), t !== e.style.height) {
				var i = d("autosize:resized");
				e.dispatchEvent(i)
			}
		}
		var l = void 0 === arguments[1] ? {} : arguments[1],
			a = l.setOverflowX,
			u = void 0 === a ? !0 : a,
			c = l.setOverflowY,
			f = void 0 === c ? !0 : c;
		if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
			var p = null,
				v = null,
				h = e.clientWidth,
				y = function () {
					e.clientWidth !== h && s()
				},
				m = function (t) {
					window.removeEventListener("resize", y, !1), e.removeEventListener("input", s, !1), e.removeEventListener("keyup", s, !1), e.removeEventListener("autosize:destroy", m, !1), e.removeEventListener("autosize:update", s, !1), i["delete"](e), Object.keys(t).forEach(function (n) {
						e.style[n] = t[n]
					})
				}.bind(e, {
					height: e.style.height,
					resize: e.style.resize,
					overflowY: e.style.overflowY,
					overflowX: e.style.overflowX,
					wordWrap: e.style.wordWrap
				});
			e.addEventListener("autosize:destroy", m, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", s, !1), window.addEventListener("resize", y, !1), e.addEventListener("input", s, !1), e.addEventListener("autosize:update", s, !1), i.add(e), u && (e.style.overflowX = "hidden", e.style.wordWrap = "break-word"), t()
		}
	}

	function o(e) {
		if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
			var t = d("autosize:destroy");
			e.dispatchEvent(t)
		}
	}

	function r(e) {
		if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
			var t = d("autosize:update");
			e.dispatchEvent(t)
		}
	}
	var i = "function" == typeof Set ? new Set : function () {
			var e = [];
			return {
				has: function (t) {
					return Boolean(e.indexOf(t) > -1)
				},
				add: function (t) {
					e.push(t)
				},
				"delete": function (t) {
					e.splice(e.indexOf(t), 1)
				}
			}
		}(),
		d = function (e) {
			return new Event(e)
		};
	try {
		new Event("test")
	} catch (s) {
		d = function (e) {
			var t = document.createEvent("Event");
			return t.initEvent(e, !0, !1), t
		}
	}
	var l = null;
	"undefined" == typeof window || "function" != typeof window.getComputedStyle ? (l = function (e) {
		return e
	}, l.destroy = function (e) {
		return e
	}, l.update = function (e) {
		return e
	}) : (l = function (e, t) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
			return n(e, t)
		}), e
	}, l.destroy = function (e) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], o), e
	}, l.update = function (e) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
	}), t.exports = l
});
! function (a, b) {
	"function" == typeof define && define.amd ? define([], function () {
		return b.apply(a)
	}) : "object" == typeof exports ? module.exports = b.call(a) : a.Waves = b.call(a)
}("object" == typeof global ? global : this, function () {
	function a(a) {
		return null !== a && a === a.window
	}

	function b(b) {
		return a(b) ? b : 9 === b.nodeType && b.defaultView
	}

	function c(a) {
		var b = typeof a;
		return "function" === b || "object" === b && !!a
	}

	function d(a) {
		return c(a) && a.nodeType > 0
	}

	function e(a) {
		var b = m.call(a);
		return "[object String]" === b ? l(a) : c(a) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(b) && a.hasOwnProperty("length") ? a : d(a) ? [a] : []
	}

	function f(a) {
		var c, d, e = {
				top: 0,
				left: 0
			},
			f = a && a.ownerDocument;
		return c = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = b(f), {
			top: e.top + d.pageYOffset - c.clientTop,
			left: e.left + d.pageXOffset - c.clientLeft
		}
	}

	function g(a) {
		var b = "";
		for (var c in a) {
			a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";")
		}
		return b
	}

	function h(a, b, c) {
		if (c) {
			c.classList.remove("waves-rippling");
			var d = c.getAttribute("data-x"),
				e = c.getAttribute("data-y"),
				f = c.getAttribute("data-scale"),
				h = c.getAttribute("data-translate"),
				i = Date.now() - Number(c.getAttribute("data-hold")),
				j = 350 - i;
			0 > j && (j = 0), "mousemove" === a.type && (j = 150);
			var k = "mousemove" === a.type ? 2500 : o.duration;
			setTimeout(function () {
				var a = {
					top: e + "px",
					left: d + "px",
					opacity: "0",
					"-webkit-transition-duration": k + "ms",
					"-moz-transition-duration": k + "ms",
					"-o-transition-duration": k + "ms",
					"transition-duration": k + "ms",
					"-webkit-transform": f + " " + h,
					"-moz-transform": f + " " + h,
					"-ms-transform": f + " " + h,
					"-o-transform": f + " " + h,
					transform: f + " " + h
				};
				c.setAttribute("style", g(a)), setTimeout(function () {
					try {
						b.removeChild(c)
					} catch (a) {
						return !1
					}
				}, k)
			}, j)
		}
	}

	function i(a) {
		if (q.allowEvent(a) === !1) {
			return null
		}
		for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
			if (c.classList.contains("waves-effect") && !(c instanceof SVGElement)) {
				b = c;
				break
			}
			c = c.parentElement
		}
		return b
	}

	function j(a) {
		q.registerEvent(a);
		var b = i(a);
		if (null !== b) {
			if ("touchstart" === a.type && o.delay) {
				var c = !1,
					d = setTimeout(function () {
						d = null, o.show(a, b)
					}, o.delay),
					e = function (e) {
						d && (clearTimeout(d), d = null, o.show(a, b)), c || (c = !0, o.hide(e, b))
					},
					f = function (a) {
						d && (clearTimeout(d), d = null), e(a)
					};
				b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1)
			} else {
				o.show(a, b), n && (b.addEventListener("touchend", o.hide, !1), b.addEventListener("touchcancel", o.hide, !1)), b.addEventListener("mouseup", o.hide, !1), b.addEventListener("mouseleave", o.hide, !1)
			}
		}
	}
	var k = k || {},
		l = document.querySelectorAll.bind(document),
		m = Object.prototype.toString,
		n = "ontouchstart" in window,
		o = {
			duration: 750,
			delay: 200,
			show: function (a, b, c) {
				if (2 === a.button) {
					return !1
				}
				b = b || this;
				var d = document.createElement("div");
				d.className = "waves-ripple waves-rippling", b.appendChild(d);
				var e = f(b),
					h = a.pageY - e.top,
					i = a.pageX - e.left,
					j = "scale(" + b.clientWidth / 100 * 3 + ")",
					k = "translate(0,0)";
				c && (k = "translate(" + c.x + "px, " + c.y + "px)"), "touches" in a && a.touches.length && (h = a.touches[0].pageY - e.top, i = a.touches[0].pageX - e.left), d.setAttribute("data-hold", Date.now()), d.setAttribute("data-x", i), d.setAttribute("data-y", h), d.setAttribute("data-scale", j), d.setAttribute("data-translate", k);
				var l = {
					top: h + "px",
					left: i + "px"
				};
				d.classList.add("waves-notransition"), d.setAttribute("style", g(l)), d.classList.remove("waves-notransition"), l["-webkit-transform"] = j + " " + k, l["-moz-transform"] = j + " " + k, l["-ms-transform"] = j + " " + k, l["-o-transform"] = j + " " + k, l.transform = j + " " + k, l.opacity = "1";
				var m = "mousemove" === a.type ? 2500 : o.duration;
				l["-webkit-transition-duration"] = m + "ms", l["-moz-transition-duration"] = m + "ms", l["-o-transition-duration"] = m + "ms", l["transition-duration"] = m + "ms", d.setAttribute("style", g(l))
			},
			hide: function (a, b) {
				b = b || this;
				for (var c = b.getElementsByClassName("waves-rippling"), d = 0, e = c.length; e > d; d++) {
					h(a, b, c[d])
				}
			}
		},
		p = {
			input: function (a) {
				var b = a.parentNode;
				if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
					var c = document.createElement("i");
					c.className = a.className + " waves-input-wrapper", a.className = "waves-button-input", b.replaceChild(c, a), c.appendChild(a);
					var d = window.getComputedStyle(a, null),
						e = d.color,
						f = d.backgroundColor;
					c.setAttribute("style", "color:" + e + ";background:" + f), a.setAttribute("style", "background-color:rgba(0,0,0,0);")
				}
			},
			img: function (a) {
				var b = a.parentNode;
				if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
					var c = document.createElement("i");
					b.replaceChild(c, a), c.appendChild(a)
				}
			}
		},
		q = {
			touches: 0,
			allowEvent: function (a) {
				var b = !0;
				return /^(mousedown|mousemove)$/.test(a.type) && q.touches && (b = !1), b
			},
			registerEvent: function (a) {
				var b = a.type;
				"touchstart" === b ? q.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function () {
					q.touches && (q.touches -= 1)
				}, 500)
			}
		};
	return k.init = function (a) {
		var b = document.body;
		a = a || {}, "duration" in a && (o.duration = a.duration), "delay" in a && (o.delay = a.delay), n && (b.addEventListener("touchstart", j, !1), b.addEventListener("touchcancel", q.registerEvent, !1), b.addEventListener("touchend", q.registerEvent, !1)), b.addEventListener("mousedown", j, !1)
	}, k.attach = function (a, b) {
		a = e(a), "[object Array]" === m.call(b) && (b = b.join(" ")), b = b ? " " + b : "";
		for (var c, d, f = 0, g = a.length; g > f; f++) {
			c = a[f], d = c.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(d) && (p[d](c), c = c.parentElement), c.className += " waves-effect" + b
		}
	}, k.ripple = function (a, b) {
		a = e(a);
		var c = a.length;
		if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, c) {
			for (var d, g, h, i = {}, j = 0, k = {
					type: "mousedown",
					button: 1
				}, l = function (a, b) {
					return function () {
						o.hide(a, b)
					}
				}; c > j; j++) {
				if (d = a[j], g = b.position || {
						x: d.clientWidth / 2,
						y: d.clientHeight / 2
					}, h = f(d), i.x = h.left + g.x, i.y = h.top + g.y, k.pageX = i.x, k.pageY = i.y, o.show(k, d), b.wait >= 0 && null !== b.wait) {
					var m = {
						type: "mouseup",
						button: 1
					};
					setTimeout(l(m, d), b.wait)
				}
			}
		}
	}, k.calm = function (a) {
		a = e(a);
		for (var b = {
				type: "mouseup",
				button: 1
			}, c = 0, d = a.length; d > c; c++) {
			o.hide(b, a[c])
		}
	}, k.displayEffect = function (a) {
		console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), k.init(a)
	}, k
});
Waves.attach(".button", ["waves-button", "waves-float"]);
Waves.init(); + function (a) {
	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.toggle"),
				f = "object" == typeof b && b;
			e || d.data("bs.toggle", e = new c(this, f)), "string" == typeof b && e[b] && e[b]()
		})
	}
	var c = function (b, c) {
		this.$element = a(b), this.options = a.extend({}, this.defaults(), c), this.render()
	};
	c.VERSION = "2.2.0", c.DEFAULTS = {
		on: "On",
		off: "Off",
		onstyle: "primary",
		offstyle: "default",
		size: "normal",
		style: "",
		width: null,
		height: null
	}, c.prototype.defaults = function () {
		return {
			on: this.$element.attr("data-on") || c.DEFAULTS.on,
			off: this.$element.attr("data-off") || c.DEFAULTS.off,
			onstyle: this.$element.attr("data-onstyle") || c.DEFAULTS.onstyle,
			offstyle: this.$element.attr("data-offstyle") || c.DEFAULTS.offstyle,
			size: this.$element.attr("data-size") || c.DEFAULTS.size,
			style: this.$element.attr("data-style") || c.DEFAULTS.style,
			width: this.$element.attr("data-width") || c.DEFAULTS.width,
			height: this.$element.attr("data-height") || c.DEFAULTS.height
		}
	}, c.prototype.render = function () {
		this._onstyle = "btn-" + this.options.onstyle, this._offstyle = "btn-" + this.options.offstyle;
		var b = "large" === this.options.size ? "btn-lg" : "small" === this.options.size ? "btn-sm" : "mini" === this.options.size ? "btn-xs" : "",
			c = a('<label class="btn">').html(this.options.on).addClass(this._onstyle + " " + b),
			d = a('<label class="btn">').html(this.options.off).addClass(this._offstyle + " " + b + " active"),
			e = a('<span class="toggle-handle btn btn-default">').addClass(b),
			f = a('<div class="toggle-group">').append(c, d, e),
			g = a('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked") ? this._onstyle : this._offstyle + " off").addClass(b).addClass(this.options.style);
		this.$element.wrap(g), a.extend(this, {
			$toggle: this.$element.parent(),
			$toggleOn: c,
			$toggleOff: d,
			$toggleGroup: f
		}), this.$toggle.append(f);
		var h = this.options.width || Math.max(c.outerWidth(), d.outerWidth()) + e.outerWidth() / 2,
			i = this.options.height || Math.max(c.outerHeight(), d.outerHeight());
		c.addClass("toggle-on"), d.addClass("toggle-off"), this.$toggle.css({
			width: h,
			height: i
		}), this.options.height && (c.css("line-height", c.height() + "px"), d.css("line-height", d.height() + "px")), this.update(!0), this.trigger(!0)
	}, c.prototype.toggle = function () {
		this.$element.prop("checked") ? this.off() : this.on()
	}, c.prototype.on = function (a) {
		return this.$element.prop("disabled") ? !1 : (this.$toggle.removeClass(this._offstyle + " off").addClass(this._onstyle), this.$element.prop("checked", !0), void(a || this.trigger()))
	}, c.prototype.off = function (a) {
		return this.$element.prop("disabled") ? !1 : (this.$toggle.removeClass(this._onstyle).addClass(this._offstyle + " off"), this.$element.prop("checked", !1), void(a || this.trigger()))
	}, c.prototype.enable = function () {
		this.$toggle.removeAttr("disabled"), this.$element.prop("disabled", !1)
	}, c.prototype.disable = function () {
		this.$toggle.attr("disabled", "disabled"), this.$element.prop("disabled", !0)
	}, c.prototype.update = function (a) {
		this.$element.prop("disabled") ? this.disable() : this.enable(), this.$element.prop("checked") ? this.on(a) : this.off(a)
	}, c.prototype.trigger = function (b) {
		this.$element.off("change.bs.toggle"), b || this.$element.change(), this.$element.on("change.bs.toggle", a.proxy(function () {
			this.update()
		}, this))
	}, c.prototype.destroy = function () {
		this.$element.off("change.bs.toggle"), this.$toggleGroup.remove(), this.$element.removeData("bs.toggle"), this.$element.unwrap()
	};
	var d = a.fn.bootstrapToggle;
	a.fn.bootstrapToggle = b, a.fn.bootstrapToggle.Constructor = c, a.fn.toggle.noConflict = function () {
		return a.fn.bootstrapToggle = d, this
	}, a(function () {
		a("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()
	}), a(document).on("click.bs.toggle", "div[data-toggle^=toggle]", function (b) {
		var c = a(this).find("input[type=checkbox]");
		c.bootstrapToggle("toggle"), b.preventDefault()
	})
}(jQuery);
! function ($) {
	var ProgressBar = function (element, options) {
		this.element = $(element);
		this.position = 0;
		this.percent = 0;
		var hasOptions = typeof options == "object";
		this.dangerMarker = $.fn.progressbar.defaults.dangerMarker;
		if (hasOptions && typeof options.dangerMarker == "number") {
			this.setDangerMarker(options.dangerMarker)
		}
		this.warningMarker = $.fn.progressbar.defaults.warningMarker;
		if (hasOptions && typeof options.warningMarker == "number") {
			this.setWarningMarker(options.warningMarker)
		}
		this.maximum = $.fn.progressbar.defaults.maximum;
		if (hasOptions && typeof options.maximum == "number") {
			this.setMaximum(options.maximum)
		}
		this.step = $.fn.progressbar.defaults.step;
		if (hasOptions && typeof options.step == "number") {
			this.setStep(options.step)
		}
		this.element.html($(DRPGlobal.template))
	};
	ProgressBar.prototype = {
		constructor: ProgressBar,
		stepIt: function () {
			if (this.position < this.maximum) {
				this.position += this.step
			}
			this.setPosition(this.position)
		},
		setWarningMarker: function (marker) {
			marker = parseInt(marker);
			if (marker > this.dangerMarker) {
				this.warningMarker = this.dangerMarker;
				return
			}
			this.warningMarker = marker
		},
		setDangerMarker: function (marker) {
			this.dangerMarker = parseInt(marker)
		},
		setMaximum: function (maximum) {
			this.maximum = parseInt(maximum)
		},
		setStep: function (step) {
			step = parseInt(step);
			if (step <= 0) {
				step = 1
			}
			this.step = parseInt(step)
		},
		setPosition: function (position) {
			position = parseInt(position);
			if (position < 0) {
				position = 0
			}
			if (position > this.maximum) {
				position = this.maximum
			}
			this.position = position;
			this.percent = Math.ceil((this.position / this.maximum) * 100);
			try {
				if (this.percent <= this.warningMarker) {
					this.element.find(".bar-success").css("width", this.percent + "%");
					this.element.find(".bar-warning").css("width", "0%");
					this.element.find(".bar-danger").css("width", "0%");
					return
				}
				this.element.find(".bar-success").css("width", this.warningMarker + "%");
				if (this.percent > this.warningMarker && this.percent <= this.dangerMarker) {
					this.element.find(".bar-warning").css("width", (this.percent - this.warningMarker) + "%");
					this.element.find(".bar-danger").css("width", "0%");
					return
				}
				this.element.find(".bar-warning").css("width", (this.dangerMarker - this.warningMarker) + "%");
				this.element.find(".bar-danger").css("width", (this.percent - this.dangerMarker) + "%")
			} finally {
				this._triggerPositionChanged()
			}
		},
		reset: function () {
			this.position = 0;
			this.percent = 0;
			this._triggerPositionChanged();
			this.element.find(".bar-success").css("width", "0%");
			this.element.find(".bar-warning").css("width", "0%");
			this.element.find(".bar-danger").css("width", "0%")
		},
		_triggerPositionChanged: function () {
			this.element.trigger({
				type: "positionChanged",
				position: this.position,
				percent: this.percent
			})
		}
	};
	$.fn.progressbar = function (option) {
		var args = Array.apply(null, arguments);
		args.shift();
		return this.each(function () {
			var $this = $(this),
				data = $this.data("progressbar"),
				options = typeof option == "object" && option;
			if (!data) {
				$this.data("progressbar", new ProgressBar(this, $.extend({}, $.fn.progressbar().defaults, options)))
			}
			if (typeof option == "string" && typeof data[option] == "function") {
				data[option].apply(data, args)
			}
		})
	};
	$.fn.progressbar.defaults = {
		warningMarker: 50,
		dangerMarker: 90,
		maximum: 100,
		step: 1
	};
	$.fn.progressbar.Constructor = ProgressBar;
	var DRPGlobal = {};
	DRPGlobal.template = '<div class="progress"><div class="bar bar-success progress-bar progress-bar-success" style="width: 0%;"></div><div class="bar bar-warning progress-bar progress-bar-warning" style="width: 0%;"></div><div class="bar bar-danger progress-bar progress-bar-danger" style="width: 0%;"></div></div>'
}(window.jQuery);
! function (a, b) {
	"function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.bootbox = b(a.jQuery)
}(this, function a(b, c) {
	function d(a) {
		var b = q[o.locale];
		return b ? b[a] : q.en[a]
	}

	function e(a, c, d) {
		a.stopPropagation(), a.preventDefault();
		var e = b.isFunction(d) && d(a) === !1;
		e || c.modal("hide")
	}

	function f(a) {
		var b, c = 0;
		for (b in a) {
			c++
		}
		return c
	}

	function g(a, c) {
		var d = 0;
		b.each(a, function (a, b) {
			c(a, b, d++)
		})
	}

	function h(a) {
		var c, d;
		if ("object" != typeof a) {
			throw new Error("Please supply an object of options")
		}
		if (!a.message) {
			throw new Error("Please specify a message")
		}
		return a = b.extend({}, o, a), a.buttons || (a.buttons = {}), a.backdrop = a.backdrop ? "static" : !1, c = a.buttons, d = f(c), g(c, function (a, e, f) {
			if (b.isFunction(e) && (e = c[a] = {
					callback: e
				}), "object" !== b.type(e)) {
				throw new Error("button with key " + a + " must be an object")
			}
			e.label || (e.label = a), e.className || (e.className = 2 >= d && f === d - 1 ? "btn-primary" : "btn-default")
		}), a
	}

	function i(a, b) {
		var c = a.length,
			d = {};
		if (1 > c || c > 2) {
			throw new Error("Invalid argument length")
		}
		return 2 === c || "string" == typeof a[0] ? (d[b[0]] = a[0], d[b[1]] = a[1]) : d = a[0], d
	}

	function j(a, c, d) {
		return b.extend(!0, {}, a, i(c, d))
	}

	function k(a, b, c, d) {
		var e = {
			className: "bootbox-" + a,
			buttons: l.apply(null, b)
		};
		return m(j(e, d, c), b)
	}

	function l() {
		for (var a = {}, b = 0, c = arguments.length; c > b; b++) {
			var e = arguments[b],
				f = e.toLowerCase(),
				g = e.toUpperCase();
			a[f] = {
				label: d(g)
			}
		}
		return a
	}

	function m(a, b) {
		var d = {};
		return g(b, function (a, b) {
			d[b] = !0
		}), g(a.buttons, function (a) {
			if (d[a] === c) {
				throw new Error("button key " + a + " is not allowed (options are " + b.join("\n") + ")")
			}
		}), a
	}
	var n = {
			dialog: "<div class='bootbox modal container bpatch' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
			header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
			footer: "<div class='modal-footer'></div>",
			closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
			form: "<form class='bootbox-form'></form>",
			inputs: {
				text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
				textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
				email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
				select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
				checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
				date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
				time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
				number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
				password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
			}
		},
		o = {
			locale: "en",
			backdrop: !0,
			animate: !0,
			className: null,
			closeButton: !0,
			show: !0,
			container: "body"
		},
		p = {};
	p.alert = function () {
		var a;
		if (a = k("alert", ["ok"], ["message", "callback"], arguments), a.callback && !b.isFunction(a.callback)) {
			throw new Error("alert requires callback property to be a function when provided")
		}
		return a.buttons.ok.callback = a.onEscape = function () {
			return b.isFunction(a.callback) ? a.callback() : !0
		}, p.dialog(a)
	}, p.confirm = function () {
		var a;
		if (a = k("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), a.buttons.cancel.callback = a.onEscape = function () {
				return a.callback(!1)
			}, a.buttons.confirm.callback = function () {
				return a.callback(!0)
			}, !b.isFunction(a.callback)) {
			throw new Error("confirm requires a callback")
		}
		return p.dialog(a)
	}, p.prompt = function () {
		var a, d, e, f, h, i, k;
		if (f = b(n.form), d = {
				className: "bootbox-prompt",
				buttons: l("cancel", "confirm"),
				value: "",
				inputType: "text"
			}, a = m(j(d, arguments, ["title", "callback"]), ["cancel", "confirm"]), i = a.show === c ? !0 : a.show, a.message = f, a.buttons.cancel.callback = a.onEscape = function () {
				return a.callback(null)
			}, a.buttons.confirm.callback = function () {
				var c;
				switch (a.inputType) {
					case "text":
					case "textarea":
					case "email":
					case "select":
					case "date":
					case "time":
					case "number":
					case "password":
						c = h.val();
						break;
					case "checkbox":
						var d = h.find("input:checked");
						c = [], g(d, function (a, d) {
							c.push(b(d).val())
						})
				}
				return a.callback(c)
			}, a.show = !1, !a.title) {
			throw new Error("prompt requires a title")
		}
		if (!b.isFunction(a.callback)) {
			throw new Error("prompt requires a callback")
		}
		if (!n.inputs[a.inputType]) {
			throw new Error("invalid prompt type")
		}
		switch (h = b(n.inputs[a.inputType]), a.inputType) {
			case "text":
			case "textarea":
			case "email":
			case "date":
			case "time":
			case "number":
			case "password":
				h.val(a.value);
				break;
			case "select":
				var o = {};
				if (k = a.inputOptions || [], !k.length) {
					throw new Error("prompt with select requires options")
				}
				g(k, function (a, d) {
					var e = h;
					if (d.value === c || d.text === c) {
						throw new Error("given options in wrong format")
					}
					d.group && (o[d.group] || (o[d.group] = b("<optgroup/>").attr("label", d.group)), e = o[d.group]), e.append("<option value='" + d.value + "'>" + d.text + "</option>")
				}), g(o, function (a, b) {
					h.append(b)
				}), h.val(a.value);
				break;
			case "checkbox":
				var q = b.isArray(a.value) ? a.value : [a.value];
				if (k = a.inputOptions || [], !k.length) {
					throw new Error("prompt with checkbox requires options")
				}
				if (!k[0].value || !k[0].text) {
					throw new Error("given options in wrong format")
				}
				h = b("<div/>"), g(k, function (c, d) {
					var e = b(n.inputs[a.inputType]);
					e.find("input").attr("value", d.value), e.find("label").append(d.text), g(q, function (a, b) {
						b === d.value && e.find("input").prop("checked", !0)
					}), h.append(e)
				})
		}
		return a.placeholder && h.attr("placeholder", a.placeholder), a.pattern && h.attr("pattern", a.pattern), f.append(h), f.on("submit", function (a) {
			a.preventDefault(), a.stopPropagation(), e.find(".btn-primary").click()
		}), e = p.dialog(a), e.off("shown.bs.modal"), e.on("shown.bs.modal", function () {
			h.focus()
		}), i === !0 && e.modal("show"), e
	}, p.dialog = function (a) {
		a = h(a);
		var c = b(n.dialog),
			d = c.find(".modal-dialog"),
			f = c.find(".modal-body"),
			i = a.buttons,
			j = "",
			k = {
				onEscape: a.onEscape
			};
		if (g(i, function (a, b) {
				j += "<button data-bb-handler='" + a + "' type='button' class='btn " + b.className + "'>" + b.label + "</button>", k[a] = b.callback
			}), f.find(".bootbox-body").html(a.message), a.animate === !0 && c.addClass("fade"), a.className && c.addClass(a.className), "large" === a.size && d.addClass("modal-lg"), "small" === a.size && d.addClass("modal-sm"), a.title && f.before(n.header), a.closeButton) {
			var l = b(n.closeButton);
			a.title ? c.find(".modal-header").prepend(l) : l.css("margin-top", "-10px").prependTo(f)
		}
		return a.title && c.find(".modal-title").html(a.title), j.length && (f.after(n.footer), c.find(".modal-footer").html(j)), c.on("hidden.bs.modal", function (a) {
			a.target === this && c.remove()
		}), c.on("shown.bs.modal", function () {
			c.find(".btn-primary:first").focus()
		}), c.on("escape.close.bb", function (a) {
			k.onEscape && e(a, c, k.onEscape)
		}), c.on("click", ".modal-footer button", function (a) {
			var d = b(this).data("bb-handler");
			e(a, c, k[d])
		}), c.on("click", ".bootbox-close-button", function (a) {
			e(a, c, k.onEscape)
		}), c.on("keyup", function (a) {
			27 === a.which && c.trigger("escape.close.bb")
		}), b(a.container).append(c), c.modal({
			backdrop: a.backdrop,
			keyboard: !1,
			show: !1
		}), a.show && c.modal("show"), c
	}, p.setDefaults = function () {
		var a = {};
		2 === arguments.length ? a[arguments[0]] = arguments[1] : a = arguments[0], b.extend(o, a)
	}, p.hideAll = function () {
		return b(".bootbox").modal("hide"), p
	};
	var q = {
		br: {
			OK: "OK",
			CANCEL: "Cancelar",
			CONFIRM: "Sim"
		},
		en: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		arabic: {
			OK: "حسنا",
			CANCEL: "إلغاء",
			CONFIRM: "أكد"
		},
		azerbaijani: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		bengali: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		catalan: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		croatian: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		czech: {
			OK: "OK",
			CANCEL: "Zrušit",
			CONFIRM: "Potvrdit"
		},
		danish: {
			OK: "OK",
			CANCEL: "Annuller",
			CONFIRM: "Accepter"
		},
		dutch: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		"en-us": {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		english: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		farsi: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		french: {
			OK: "OK",
			CANCEL: "Annuler",
			CONFIRM: "D'accord"
		},
		german: {
			OK: "OK",
			CANCEL: "Abbrechen",
			CONFIRM: "Akzeptieren"
		},
		hungarian: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		italian: {
			OK: "OK",
			CANCEL: "Annulla",
			CONFIRM: "Conferma"
		},
		norwegian: {
			OK: "OK",
			CANCEL: "Avbryt",
			CONFIRM: "OK"
		},
		"portuguese-br": {
			OK: "OK",
			CANCEL: "Cancelar",
			CONFIRM: "Confirmar"
		},
		"portuguese-pt": {
			OK: "OK",
			CANCEL: "Cancelar",
			CONFIRM: "Confirmar"
		},
		russian: {
			OK: "OK",
			CANCEL: "Отмена",
			CONFIRM: "Применить"
		},
		spanish: {
			OK: "OK",
			CANCEL: "Cancelar",
			CONFIRM: "Aceptar"
		},
		swedish: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		turkish: {
			OK: "Tamam",
			CANCEL: "İptal",
			CONFIRM: "Onayla"
		},
		ukranian: {
			OK: "OK",
			CANCEL: "Cancel",
			CONFIRM: "OK"
		},
		et: {
			OK: "OK",
			CANCEL: "Katkesta",
			CONFIRM: "OK"
		},
		fi: {
			OK: "OK",
			CANCEL: "Peruuta",
			CONFIRM: "OK"
		},
		he: {
			OK: "אישור",
			CANCEL: "ביטול",
			CONFIRM: "אישור"
		},
		id: {
			OK: "OK",
			CANCEL: "Batal",
			CONFIRM: "OK"
		},
		ja: {
			OK: "OK",
			CANCEL: "キャンセル",
			CONFIRM: "確認"
		},
		lt: {
			OK: "Gerai",
			CANCEL: "Atšaukti",
			CONFIRM: "Patvirtinti"
		},
		lv: {
			OK: "Labi",
			CANCEL: "Atcelt",
			CONFIRM: "Apstiprināt"
		},
		nl: {
			OK: "OK",
			CANCEL: "Annuleren",
			CONFIRM: "Accepteren"
		},
		pl: {
			OK: "OK",
			CANCEL: "Anuluj",
			CONFIRM: "Potwierdź"
		},
		zh_CN: {
			OK: "OK",
			CANCEL: "取消",
			CONFIRM: "确认"
		},
		zh_TW: {
			OK: "OK",
			CANCEL: "取消",
			CONFIRM: "確認"
		}
	};
	return p.init = function (c) {
		return a(c || b)
	}, p
});
bootbox.setDefaults({
	locale: $("#_lan").val()
});
(function (f) {
	function A(a, b, d) {
		var c = a[0],
			g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
			e = d == _update ? {
				checked: c[k],
				disabled: c[n],
				indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate)
			} : c[g];
		if (/^(ch|di|in)/.test(d) && !e) {
			x(a, g)
		} else {
			if (/^(un|en|de)/.test(d) && e) {
				q(a, g)
			} else {
				if (d == _update) {
					for (var f in e) {
						e[f] ? x(a, f, !0) : q(a, f, !0)
					}
				} else {
					if (!b || "toggle" == d) {
						if (!b) {
							a[_callback]("ifClicked")
						}
						e ? c[_type] !== r && q(a, g) : x(a, g)
					}
				}
			}
		}
	}

	function x(a, b, d) {
		var c = a[0],
			g = a.parent(),
			e = b == k,
			u = b == _indeterminate,
			v = b == n,
			s = u ? _determinate : e ? y : "enabled",
			F = l(a, s + t(c[_type])),
			B = l(a, b + t(c[_type]));
		if (!0 !== c[b]) {
			if (!d && b == k && c[_type] == r && c.name) {
				var w = a.closest("form"),
					p = 'input[name="' + c.name + '"]',
					p = w.length ? w.find(p) : f(p);
				p.each(function () {
					this !== c && f(this).data(m) && q(f(this), b)
				})
			}
			u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
			D(a, e, b, d)
		}
		c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
		g[_add](B || l(a, b) || "");
		g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
		g[_remove](F || l(a, s) || "")
	}

	function q(a, b, d) {
		var c = a[0],
			g = a.parent(),
			e = b == k,
			f = b == _indeterminate,
			m = b == n,
			s = f ? _determinate : e ? y : "enabled",
			q = l(a, s + t(c[_type])),
			r = l(a, b + t(c[_type]));
		if (!1 !== c[b]) {
			if (f || !d || "force" == d) {
				c[b] = !1
			}
			D(a, e, s, d)
		}!c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
		g[_remove](r || l(a, b) || "");
		g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
		g[_add](q || l(a, s) || "")
	}

	function E(a, b) {
		if (a.data(m)) {
			a.parent().html(a.attr("style", a.data(m).s || ""));
			if (b) {
				a[_callback](b)
			}
			a.off(".i").unwrap();
			f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i")
		}
	}

	function l(a, b, f) {
		if (a.data(m)) {
			return a.data(m).o[b + (f ? "" : "Class")]
		}
	}

	function t(a) {
		return a.charAt(0).toUpperCase() + a.slice(1)
	}

	function D(a, b, f, c) {
		if (!c) {
			if (b) {
				a[_callback]("ifToggled")
			}
			a[_callback]("ifChanged")[_callback]("if" + t(f))
		}
	}
	var m = "iCheck",
		C = m + "-helper",
		r = "radio",
		k = "checked",
		y = "un" + k,
		n = "disabled";
	_determinate = "determinate";
	_indeterminate = "in" + _determinate;
	_update = "update";
	_type = "type";
	_click = "click";
	_touch = "touchbegin.i touchend.i";
	_add = "addClass";
	_remove = "removeClass";
	_callback = "trigger";
	_label = "label";
	_cursor = "cursor";
	_mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
	f.fn[m] = function (a, b) {
		var d = 'input[type="checkbox"], input[type="' + r + '"]',
			c = f(),
			g = function (a) {
				a.each(function () {
					var a = f(this);
					c = a.is(d) ? c.add(a) : c.add(a.find(d))
				})
			};
		if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) {
			return a = a.toLowerCase(), g(this), c.each(function () {
				var c = f(this);
				"destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
				f.isFunction(b) && b()
			})
		}
		if ("object" != typeof a && a) {
			return this
		}
		var e = f.extend({
				checkedClass: k,
				disabledClass: n,
				indeterminateClass: _indeterminate,
				labelHover: !0
			}, a),
			l = e.handle,
			v = e.hoverClass || "hover",
			s = e.focusClass || "focus",
			t = e.activeClass || "active",
			B = !!e.labelHover,
			w = e.labelHoverClass || "hover",
			p = ("" + e.increaseArea).replace("%", "") | 0;
		if ("checkbox" == l || l == r) {
			d = 'input[type="' + l + '"]'
		} - 50 > p && (p = -50);
		g(this);
		return c.each(function () {
			var a = f(this);
			E(a);
			var c = this,
				b = c.id,
				g = -p + "%",
				d = 100 + 2 * p + "%",
				d = {
					position: "absolute",
					top: g,
					left: g,
					display: "block",
					width: d,
					height: d,
					margin: 0,
					padding: 0,
					background: "#fff",
					border: 0,
					opacity: 0
				},
				g = _mobile ? {
					position: "absolute",
					visibility: "hidden"
				} : p ? d : {
					position: "absolute",
					opacity: 0
				},
				l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r,
				z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
				u = !!e.aria,
				y = m + "-" + Math.random().toString(36).substr(2, 6),
				h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");
			u && z.each(function () {
				h += 'aria-labelledby="';
				this.id ? h += this.id : (this.id = y, h += y);
				h += '"'
			});
			h = a.wrap(h + "/>")[_callback]("ifCreated").parent().append(e.insert);
			d = f('<ins class="' + C + '"/>').css(d).appendTo(h);
			a.data(m, {
				o: e,
				s: a.attr("style")
			}).css(g);
			e.inheritClass && h[_add](c.className || "");
			e.inheritID && b && h.attr("id", m + "-" + b);
			"static" == h.css("position") && h.css("position", "relative");
			A(a, !0, _update);
			if (z.length) {
				z.on(_click + ".i mouseover.i mouseout.i " + _touch, function (b) {
					var d = b[_type],
						e = f(this);
					if (!c[n]) {
						if (d == _click) {
							if (f(b.target).is("a")) {
								return
							}
							A(a, !1, !0)
						} else {
							B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)))
						}
						if (_mobile) {
							b.stopPropagation()
						} else {
							return !1
						}
					}
				})
			}
			a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (b) {
				var d = b[_type];
				b = b.keyCode;
				if (d == _click) {
					return !1
				}
				if ("keydown" == d && 32 == b) {
					return c[_type] == r && c[k] || (c[k] ? q(a, k) : x(a, k)), !1
				}
				if ("keyup" == d && c[_type] == r) {
					!c[k] && x(a, k)
				} else {
					if (/us|ur/.test(d)) {
						h["blur" == d ? _remove : _add](s)
					}
				}
			});
			d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (b) {
				var d = b[_type],
					e = /wn|up/.test(d) ? t : v;
				if (!c[n]) {
					if (d == _click) {
						A(a, !1, !0)
					} else {
						if (/wn|er|in/.test(d)) {
							h[_add](e)
						} else {
							h[_remove](e + " " + t)
						}
						if (z.length && B && e == v) {
							z[/ut|nd/.test(d) ? _remove : _add](w)
						}
					}
					if (_mobile) {
						b.stopPropagation()
					} else {
						return !1
					}
				}
			})
		})
	}
})(window.jQuery || window.Zepto);
$(document).ready(function () {
	var navbar_minimalize = $(".navbar-minimalize");
	$("#side-menu").metisMenu();
	navbar_minimalize.click(function () {
		$("body").toggleClass("mini-navbar");
		SmoothlyMenu()
	});

	function fix_height() {
		var heightWithoutNavbar = $("body > #wrapper").height() - 61;
		$(".sidebard-panel").css("min-height", heightWithoutNavbar + "px")
	}
	fix_height();
	$(window).bind("load resize click scroll", function () {
		if (!$("body").hasClass("body-small")) {
			fix_height()
		}
	});
	$("[data-toggle=popover]").popover();
	navbar_minimalize.on("click", function () {
		$(".navbar-header i").toggleClass("fa-indent")
	});
	$("#r_fold_sidebar").change(function () {
		if ($(this).prop("checked")) {
			$.post(base_url + "settings/update_option/", {
				opt: "mininav",
				val: "1"
			}).done(function (data) {
				location.reload()
			})
		} else {
			$.post(base_url + "settings/update_option/", {
				opt: "mininav",
				val: "0"
			}).done(function (data) {
				location.reload()
			})
		}
	});
	var $ib_admin_notes = $("#ib_admin_notes");
	autosize($ib_admin_notes);
	var $ib_admin_notes_save = $("#ib_admin_notes_save");
	$ib_admin_notes_save.on("click", function (e) {
		e.preventDefault();
		$ib_admin_notes_save.prop("disabled", true);
		$.post(base_url + "settings/update_admin_note/", {
			notes: $ib_admin_notes.val()
		}).done(function (data) {
			$ib_admin_notes_save.prop("disabled", false);
			toastr.success(data)
		})
	})
});
$(function () {
	$(window).bind("load resize", function () {
		if ($(this).width() < 769) {
			$("body").addClass("body-small")
		} else {
			$("body").removeClass("body-small")
		}
	})
});

function SmoothlyMenu() {
	if (!$("body").hasClass("mini-navbar") || $("body").hasClass("body-small")) {
		$("#side-menu").hide();
		setTimeout(function () {
			$("#side-menu").fadeIn(500)
		}, 100)
	} else {
		if ($("body").hasClass("fixed-sidebar")) {
			$("#side-menu").hide();
			setTimeout(function () {
				$("#side-menu").fadeIn(500)
			}, 300)
		} else {
			$("#side-menu").removeAttr("style")
		}
	}
}
var $loader = $("#preloader");
if (config_animate == "Yes") {
	$(window).load(function () {
		setTimeout(function () {
			$(".loader-overlay").addClass("loaded");
			$("body > section").animate({
				opacity: 1
			}, 400)
		}, 500)
	})
}
$(document).ready(function () {
	$(".right-sidebar-toggle").click(function () {
		$("#right-sidebar").toggleClass("sidebar-open")
	});
	$(".sidebar-container").slimScroll({
		height: "100%",
		railOpacity: 0.4,
		wheelStep: 10
	});
	$("#get_activity").click(function (e) {
		var _url = $("#_url").val();
		$.post(_url + "util/activity-ajax/", {}).done(function (data) {
			$("#activity_loaded").html(data)
		})
	})
});
