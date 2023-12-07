(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        s(r);
    new MutationObserver(r => {
        for (const n of r)
            if (n.type === "childList")
                for (const l of n.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && s(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(r) {
        const n = {};
        return r.integrity && (n.integrity = r.integrity), r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? n.credentials = "include" : r.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }
    function s(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const n = i(r);
        fetch(r.href, n)
    }
})();
function ae(t) {
    return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object
}
function ie(t, e) {
    t === void 0 && (t = {}),
    e === void 0 && (e = {}),
        Object.keys(e).forEach(i => {
            typeof t[i] > "u" ? t[i] = e[i] : ae(e[i]) && ae(t[i]) && Object.keys(e[i]).length > 0 && ie(t[i], e[i])
        })
}
const pe = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function N() {
    const t = typeof document < "u" ? document : {};
    return ie(t, pe), t
}
const Te = {
    document: pe,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(t) {
        return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0)
    },
    cancelAnimationFrame(t) {
        typeof setTimeout > "u" || clearTimeout(t)
    }
};
function k() {
    const t = typeof window < "u" ? window : {};
    return ie(t, Te), t
}
function xe(t) {
    return t === void 0 && (t = ""), t.trim().split(" ").filter(e => !!e.trim())
}
function ye(t) {
    const e = t;
    Object.keys(e).forEach(i => {
        try {
            e[i] = null
        } catch {}
        try {
            delete e[i]
        } catch {}
    })
}
function Z(t, e) {
    return e === void 0 && (e = 0), setTimeout(t, e)
}
function W() {
    return Date.now()
}
function be(t) {
    const e = k();
    let i;
    return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
}
function Ee(t, e) {
    e === void 0 && (e = "x");
    const i = k();
    let s,
        r,
        n;
    const l = be(t);
    return i.WebKitCSSMatrix ? (r = l.transform || l.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(o => o.replace(",", ".")).join(", ")), n = new i.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = n.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? r = n.m41 : s.length === 16 ? r = parseFloat(s[12]) : r = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? r = n.m42 : s.length === 16 ? r = parseFloat(s[13]) : r = parseFloat(s[5])), r || 0
}
function $(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object"
}
function Pe(t) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}
function G() {
    const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
        const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (s != null && !Pe(s)) {
            const r = Object.keys(Object(s)).filter(n => e.indexOf(n) < 0);
            for (let n = 0, l = r.length; n < l; n += 1) {
                const o = r[n],
                    a = Object.getOwnPropertyDescriptor(s, o);
                a !== void 0 && a.enumerable && ($(t[o]) && $(s[o]) ? s[o].__swiper__ ? t[o] = s[o] : G(t[o], s[o]) : !$(t[o]) && $(s[o]) ? (t[o] = {}, s[o].__swiper__ ? t[o] = s[o] : G(t[o], s[o])) : t[o] = s[o])
            }
        }
    }
    return t
}
function R(t, e, i) {
    t.style.setProperty(e, i)
}
function me(t) {
    let {swiper: e, targetPosition: i, side: s} = t;
    const r = k(),
        n = -e.translate;
    let l = null,
        o;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
        r.cancelAnimationFrame(e.cssModeFrameID);
    const d = i > n ? "next" : "prev",
        c = (p, u) => d === "next" && p >= u || d === "prev" && p <= u,
        f = () => {
            o = new Date().getTime(),
            l === null && (l = o);
            const p = Math.max(Math.min((o - l) / a, 1), 0),
                u = .5 - Math.cos(p * Math.PI) / 2;
            let h = n + u * (i - n);
            if (c(h, i) && (h = i), e.wrapperEl.scrollTo({
                [s]: h
            }), c(h, i)) {
                e.wrapperEl.style.overflow = "hidden",
                    e.wrapperEl.style.scrollSnapType = "",
                    setTimeout(() => {
                        e.wrapperEl.style.overflow = "",
                            e.wrapperEl.scrollTo({
                                [s]: h
                            })
                    }),
                    r.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = r.requestAnimationFrame(f)
        };
    f()
}
function V(t, e) {
    return e === void 0 && (e = ""), [...t.children].filter(i => i.matches(e))
}
function j(t) {
    try {
        console.warn(t);
        return
    } catch {}
}
function ee(t, e) {
    e === void 0 && (e = []);
    const i = document.createElement(t);
    return i.classList.add(...Array.isArray(e) ? e : xe(e)), i
}
function Me(t, e) {
    const i = [];
    for (; t.previousElementSibling;) {
        const s = t.previousElementSibling;
        e ? s.matches(e) && i.push(s) : i.push(s),
            t = s
    }
    return i
}
function Ie(t, e) {
    const i = [];
    for (; t.nextElementSibling;) {
        const s = t.nextElementSibling;
        e ? s.matches(e) && i.push(s) : i.push(s),
            t = s
    }
    return i
}
function F(t, e) {
    return k().getComputedStyle(t, null).getPropertyValue(e)
}
function le(t) {
    let e = t,
        i;
    if (e) {
        for (i = 0; (e = e.previousSibling) !== null;)
            e.nodeType === 1 && (i += 1);
        return i
    }
}
function Ce(t, e) {
    const i = [];
    let s = t.parentElement;
    for (; s;)
        e ? s.matches(e) && i.push(s) : i.push(s),
            s = s.parentElement;
    return i
}
function oe(t, e, i) {
    const s = k();
    return i ? t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : t.offsetWidth
}
let Y;
function Le() {
    const t = k(),
        e = N();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
    }
}
function he() {
    return Y || (Y = Le()), Y
}
let X;
function Oe(t) {
    let {userAgent: e} = t === void 0 ? {} : t;
    const i = he(),
        s = k(),
        r = s.navigator.platform,
        n = e || s.navigator.userAgent,
        l = {
            ios: !1,
            android: !1
        },
        o = s.screen.width,
        a = s.screen.height,
        d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const f = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        u = r === "Win32";
    let h = r === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && h && i.touch && v.indexOf(`${o}x${a}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), h = !1), d && !u && (l.os = "android", l.android = !0), (c || p || f) && (l.os = "ios", l.ios = !0), l
}
function ze(t) {
    return t === void 0 && (t = {}), X || (X = Oe(t)), X
}
let K;
function Ae() {
    const t = k();
    let e = !1;
    function i() {
        const s = t.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    if (i()) {
        const s = String(t.navigator.userAgent);
        if (s.includes("Version/")) {
            const [r, n] = s.split("Version/")[1].split(" ")[0].split(".").map(l => Number(l));
            e = r < 16 || r === 16 && n < 2
        }
    }
    return {
        isSafari: e || i(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    }
}
function Ge() {
    return K || (K = Ae()), K
}
function ke(t) {
    let {swiper: e, on: i, emit: s} = t;
    const r = k();
    let n = null,
        l = null;
    const o = () => {
            !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
        },
        a = () => {
            !e || e.destroyed || !e.initialized || (n = new ResizeObserver(f => {
                l = r.requestAnimationFrame(() => {
                    const {width: p, height: u} = e;
                    let h = p,
                        v = u;
                    f.forEach(b => {
                        let {contentBoxSize: w, contentRect: P, target: m} = b;
                        m && m !== e.el || (h = P ? P.width : (w[0] || w).inlineSize, v = P ? P.height : (w[0] || w).blockSize)
                    }),
                    (h !== p || v !== u) && o()
                })
            }), n.observe(e.el))
        },
        d = () => {
            l && r.cancelAnimationFrame(l),
            n && n.unobserve && e.el && (n.unobserve(e.el), n = null)
        },
        c = () => {
            !e || e.destroyed || !e.initialized || s("orientationchange")
        };
    i("init", () => {
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            a();
            return
        }
        r.addEventListener("resize", o),
            r.addEventListener("orientationchange", c)
    }),
        i("destroy", () => {
            d(),
                r.removeEventListener("resize", o),
                r.removeEventListener("orientationchange", c)
        })
}
function De(t) {
    let {swiper: e, extendParams: i, on: s, emit: r} = t;
    const n = [],
        l = k(),
        o = function(c, f) {
            f === void 0 && (f = {});
            const p = l.MutationObserver || l.WebkitMutationObserver,
                u = new p(h => {
                    if (e.__preventObserver__)
                        return;
                    if (h.length === 1) {
                        r("observerUpdate", h[0]);
                        return
                    }
                    const v = function() {
                        r("observerUpdate", h[0])
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(v) : l.setTimeout(v, 0)
                });
            u.observe(c, {
                attributes: typeof f.attributes > "u" ? !0 : f.attributes,
                childList: typeof f.childList > "u" ? !0 : f.childList,
                characterData: typeof f.characterData > "u" ? !0 : f.characterData
            }),
                n.push(u)
        },
        a = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const c = Ce(e.hostEl);
                    for (let f = 0; f < c.length; f += 1)
                        o(c[f])
                }
                o(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }),
                    o(e.wrapperEl, {
                        attributes: !1
                    })
            }
        },
        d = () => {
            n.forEach(c => {
                c.disconnect()
            }),
                n.splice(0, n.length)
        };
    i({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
        s("init", a),
        s("destroy", d)
}
var Ve = {
    on(t, e, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        const r = i ? "unshift" : "push";
        return t.split(" ").forEach(n => {
            s.eventsListeners[n] || (s.eventsListeners[n] = []),
                s.eventsListeners[n][r](e)
        }), s
    },
    once(t, e, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        function r() {
            s.off(t, r),
            r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)
                l[o] = arguments[o];
            e.apply(s, l)
        }
        return r.__emitterProxy = e, s.on(t, r, i)
    },
    onAny(t, e) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function")
            return i;
        const s = e ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
    },
    offAny(t) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const i = e.eventsAnyListeners.indexOf(t);
        return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
    },
    off(t, e) {
        const i = this;
        return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach(s => {
            typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((r, n) => {
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && i.eventsListeners[s].splice(n, 1)
            })
        }), i
    },
    emit() {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
            return t;
        let e,
            i,
            s;
        for (var r = arguments.length, n = new Array(r), l = 0; l < r; l++)
            n[l] = arguments[l];
        return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0], i = n.slice(1, n.length), s = t) : (e = n[0].events, i = n[0].data, s = n[0].context || t), i.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(a => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(d => {
                d.apply(s, [a, ...i])
            }),
            t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach(d => {
                d.apply(s, i)
            })
        }), t
    }
};
function Fe() {
    const t = this;
    let e,
        i;
    const s = t.el;
    typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth,
        typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight,
    !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(F(s, "padding-left") || 0, 10) - parseInt(F(s, "padding-right") || 0, 10), i = i - parseInt(F(s, "padding-top") || 0, 10) - parseInt(F(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
        width: e,
        height: i,
        size: t.isHorizontal() ? e : i
    }))
}
function Ne() {
    const t = this;
    function e(g, E) {
        return parseFloat(g.getPropertyValue(t.getDirectionLabel(E)) || 0)
    }
    const i = t.params,
        {wrapperEl: s, slidesEl: r, size: n, rtlTranslate: l, wrongRTL: o} = t,
        a = t.virtual && i.virtual.enabled,
        d = a ? t.virtual.slides.length : t.slides.length,
        c = V(r, `.${t.params.slideClass}, swiper-slide`),
        f = a ? t.virtual.slides.length : c.length;
    let p = [];
    const u = [],
        h = [];
    let v = i.slidesOffsetBefore;
    typeof v == "function" && (v = i.slidesOffsetBefore.call(t));
    let b = i.slidesOffsetAfter;
    typeof b == "function" && (b = i.slidesOffsetAfter.call(t));
    const w = t.snapGrid.length,
        P = t.slidesGrid.length;
    let m = i.spaceBetween,
        x = -v,
        S = 0,
        T = 0;
    if (typeof n > "u")
        return;
    typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * n : typeof m == "string" && (m = parseFloat(m)),
        t.virtualSize = -m,
        c.forEach(g => {
            l ? g.style.marginLeft = "" : g.style.marginRight = "",
                g.style.marginBottom = "",
                g.style.marginTop = ""
        }),
    i.centeredSlides && i.cssMode && (R(s, "--swiper-centered-offset-before", ""), R(s, "--swiper-centered-offset-after", ""));
    const O = i.grid && i.grid.rows > 1 && t.grid;
    O ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
    let L;
    const z = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(g => typeof i.breakpoints[g].slidesPerView < "u").length > 0;
    for (let g = 0; g < f; g += 1) {
        L = 0;
        let E;
        if (c[g] && (E = c[g]), O && t.grid.updateSlide(g, E, c), !(c[g] && F(E, "display") === "none")) {
            if (i.slidesPerView === "auto") {
                z && (c[g].style[t.getDirectionLabel("width")] = "");
                const M = getComputedStyle(E),
                    y = E.style.transform,
                    I = E.style.webkitTransform;
                if (y && (E.style.transform = "none"), I && (E.style.webkitTransform = "none"), i.roundLengths)
                    L = t.isHorizontal() ? oe(E, "width", !0) : oe(E, "height", !0);
                else {
                    const C = e(M, "width"),
                        A = e(M, "padding-left"),
                        _ = e(M, "padding-right"),
                        se = e(M, "margin-left"),
                        re = e(M, "margin-right"),
                        ne = M.getPropertyValue("box-sizing");
                    if (ne && ne === "border-box")
                        L = C + se + re;
                    else {
                        const {clientWidth: we, offsetWidth: Se} = E;
                        L = C + A + _ + se + re + (Se - we)
                    }
                }
                y && (E.style.transform = y),
                I && (E.style.webkitTransform = I),
                i.roundLengths && (L = Math.floor(L))
            } else
                L = (n - (i.slidesPerView - 1) * m) / i.slidesPerView,
                i.roundLengths && (L = Math.floor(L)),
                c[g] && (c[g].style[t.getDirectionLabel("width")] = `${L}px`);
            c[g] && (c[g].swiperSlideSize = L),
                h.push(L),
                i.centeredSlides ? (x = x + L / 2 + S / 2 + m, S === 0 && g !== 0 && (x = x - n / 2 - m), g === 0 && (x = x - n / 2 - m), Math.abs(x) < 1 / 1e3 && (x = 0), i.roundLengths && (x = Math.floor(x)), T % i.slidesPerGroup === 0 && p.push(x), u.push(x)) : (i.roundLengths && (x = Math.floor(x)), (T - Math.min(t.params.slidesPerGroupSkip, T)) % t.params.slidesPerGroup === 0 && p.push(x), u.push(x), x = x + L + m),
                t.virtualSize += L + m,
                S = L,
                T += 1
        }
    }
    if (t.virtualSize = Math.max(t.virtualSize, n) + b, l && o && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = `${t.virtualSize + m}px`), i.setWrapperSize && (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + m}px`), O && t.grid.updateWrapperSize(L, p), !i.centeredSlides) {
        const g = [];
        for (let E = 0; E < p.length; E += 1) {
            let M = p[E];
            i.roundLengths && (M = Math.floor(M)),
            p[E] <= t.virtualSize - n && g.push(M)
        }
        p = g,
        Math.floor(t.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - n)
    }
    if (a && i.loop) {
        const g = h[0] + m;
        if (i.slidesPerGroup > 1) {
            const E = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
                M = g * i.slidesPerGroup;
            for (let y = 0; y < E; y += 1)
                p.push(p[p.length - 1] + M)
        }
        for (let E = 0; E < t.virtual.slidesBefore + t.virtual.slidesAfter; E += 1)
            i.slidesPerGroup === 1 && p.push(p[p.length - 1] + g),
                u.push(u[u.length - 1] + g),
                t.virtualSize += g
    }
    if (p.length === 0 && (p = [0]), m !== 0) {
        const g = t.isHorizontal() && l ? "marginLeft" : t.getDirectionLabel("marginRight");
        c.filter((E, M) => !i.cssMode || i.loop ? !0 : M !== c.length - 1).forEach(E => {
            E.style[g] = `${m}px`
        })
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let g = 0;
        h.forEach(M => {
            g += M + (m || 0)
        }),
            g -= m;
        const E = g - n;
        p = p.map(M => M <= 0 ? -v : M > E ? E + b : M)
    }
    if (i.centerInsufficientSlides) {
        let g = 0;
        if (h.forEach(E => {
            g += E + (m || 0)
        }), g -= m, g < n) {
            const E = (n - g) / 2;
            p.forEach((M, y) => {
                p[y] = M - E
            }),
                u.forEach((M, y) => {
                    u[y] = M + E
                })
        }
    }
    if (Object.assign(t, {
        slides: c,
        snapGrid: p,
        slidesGrid: u,
        slidesSizesGrid: h
    }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        R(s, "--swiper-centered-offset-before", `${-p[0]}px`),
            R(s, "--swiper-centered-offset-after", `${t.size / 2 - h[h.length - 1] / 2}px`);
        const g = -t.snapGrid[0],
            E = -t.slidesGrid[0];
        t.snapGrid = t.snapGrid.map(M => M + g),
            t.slidesGrid = t.slidesGrid.map(M => M + E)
    }
    if (f !== d && t.emit("slidesLengthChange"), p.length !== w && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), u.length !== P && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !a && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const g = `${i.containerModifierClass}backface-hidden`,
            E = t.el.classList.contains(g);
        f <= i.maxBackfaceHiddenSlides ? E || t.el.classList.add(g) : E && t.el.classList.remove(g)
    }
}
function Be(t) {
    const e = this,
        i = [],
        s = e.virtual && e.params.virtual.enabled;
    let r = 0,
        n;
    typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    const l = o => s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(o => {
                i.push(o)
            });
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const o = e.activeIndex + n;
                if (o > e.slides.length && !s)
                    break;
                i.push(l(o))
            }
    else
        i.push(l(e.activeIndex));
    for (n = 0; n < i.length; n += 1)
        if (typeof i[n] < "u") {
            const o = i[n].offsetHeight;
            r = o > r ? o : r
        }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function _e() {
    const t = this,
        e = t.slides,
        i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
        e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment()
}
function $e(t) {
    t === void 0 && (t = this && this.translate || 0);
    const e = this,
        i = e.params,
        {slides: s, rtlTranslate: r, snapGrid: n} = e;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let l = -t;
    r && (l = t),
        s.forEach(a => {
            a.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass)
        }),
        e.visibleSlidesIndexes = [],
        e.visibleSlides = [];
    let o = i.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let a = 0; a < s.length; a += 1) {
        const d = s[a];
        let c = d.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
        const f = (l + (i.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + o),
            p = (l - n[0] + (i.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + o),
            u = -(l - c),
            h = u + e.slidesSizesGrid[a],
            v = u >= 0 && u <= e.size - e.slidesSizesGrid[a];
        (u >= 0 && u < e.size - 1 || h > 1 && h <= e.size || u <= 0 && h >= e.size) && (e.visibleSlides.push(d), e.visibleSlidesIndexes.push(a), s[a].classList.add(i.slideVisibleClass)),
        v && s[a].classList.add(i.slideFullyVisibleClass),
            d.progress = r ? -f : f,
            d.originalProgress = r ? -p : p
    }
}
function Re(t) {
    const e = this;
    if (typeof t > "u") {
        const c = e.rtlTranslate ? -1 : 1;
        t = e && e.translate && e.translate * c || 0
    }
    const i = e.params,
        s = e.maxTranslate() - e.minTranslate();
    let {progress: r, isBeginning: n, isEnd: l, progressLoop: o} = e;
    const a = n,
        d = l;
    if (s === 0)
        r = 0,
            n = !0,
            l = !0;
    else {
        r = (t - e.minTranslate()) / s;
        const c = Math.abs(t - e.minTranslate()) < 1,
            f = Math.abs(t - e.maxTranslate()) < 1;
        n = c || r <= 0,
            l = f || r >= 1,
        c && (r = 0),
        f && (r = 1)
    }
    if (i.loop) {
        const c = e.getSlideIndexByData(0),
            f = e.getSlideIndexByData(e.slides.length - 1),
            p = e.slidesGrid[c],
            u = e.slidesGrid[f],
            h = e.slidesGrid[e.slidesGrid.length - 1],
            v = Math.abs(t);
        v >= p ? o = (v - p) / h : o = (v + h - u) / h,
        o > 1 && (o -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: o,
        isBeginning: n,
        isEnd: l
    }),
    (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t),
    n && !a && e.emit("reachBeginning toEdge"),
    l && !d && e.emit("reachEnd toEdge"),
    (a && !n || d && !l) && e.emit("fromEdge"),
        e.emit("progress", r)
}
function He() {
    const t = this,
        {slides: e, params: i, slidesEl: s, activeIndex: r} = t,
        n = t.virtual && i.virtual.enabled,
        l = t.grid && i.grid && i.grid.rows > 1,
        o = f => V(s, `.${i.slideClass}${f}, swiper-slide${f}`)[0];
    e.forEach(f => {
        f.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
    });
    let a,
        d,
        c;
    if (n)
        if (i.loop) {
            let f = r - t.virtual.slidesBefore;
            f < 0 && (f = t.virtual.slides.length + f),
            f >= t.virtual.slides.length && (f -= t.virtual.slides.length),
                a = o(`[data-swiper-slide-index="${f}"]`)
        } else
            a = o(`[data-swiper-slide-index="${r}"]`);
    else
        l ? (a = e.filter(f => f.column === r)[0], c = e.filter(f => f.column === r + 1)[0], d = e.filter(f => f.column === r - 1)[0]) : a = e[r];
    a && (a.classList.add(i.slideActiveClass), l ? (c && c.classList.add(i.slideNextClass), d && d.classList.add(i.slidePrevClass)) : (c = Ie(a, `.${i.slideClass}, swiper-slide`)[0], i.loop && !c && (c = e[0]), c && c.classList.add(i.slideNextClass), d = Me(a, `.${i.slideClass}, swiper-slide`)[0], i.loop && !d === 0 && (d = e[e.length - 1]), d && d.classList.add(i.slidePrevClass))),
        t.emitSlidesClasses()
}
const H = (t, e) => {
        if (!t || t.destroyed || !t.params)
            return;
        const i = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`,
            s = e.closest(i());
        if (s) {
            let r = s.querySelector(`.${t.params.lazyPreloaderClass}`);
            !r && t.isElement && (s.shadowRoot ? r = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                s.shadowRoot && (r = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), r && r.remove())
            })),
            r && r.remove()
        }
    },
    U = (t, e) => {
        if (!t.slides[e])
            return;
        const i = t.slides[e].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading")
    },
    te = t => {
        if (!t || t.destroyed || !t.params)
            return;
        let e = t.params.lazyPreloadPrevNext;
        const i = t.slides.length;
        if (!i || !e || e < 0)
            return;
        e = Math.min(e, i);
        const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
            r = t.activeIndex;
        if (t.params.grid && t.params.grid.rows > 1) {
            const l = r,
                o = [l - e];
            o.push(...Array.from({
                length: e
            }).map((a, d) => l + s + d)),
                t.slides.forEach((a, d) => {
                    o.includes(a.column) && U(t, d)
                });
            return
        }
        const n = r + s - 1;
        if (t.params.rewind || t.params.loop)
            for (let l = r - e; l <= n + e; l += 1) {
                const o = (l % i + i) % i;
                (o < r || o > n) && U(t, o)
            }
        else
            for (let l = Math.max(r - e, 0); l <= Math.min(n + e, i - 1); l += 1)
                l !== r && (l > n || l < r) && U(t, l)
    };
function We(t) {
    const {slidesGrid: e, params: i} = t,
        s = t.rtlTranslate ? t.translate : -t.translate;
    let r;
    for (let n = 0; n < e.length; n += 1)
        typeof e[n + 1] < "u" ? s >= e[n] && s < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : s >= e[n] && s < e[n + 1] && (r = n + 1) : s >= e[n] && (r = n);
    return i.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r
}
function je(t) {
    const e = this,
        i = e.rtlTranslate ? e.translate : -e.translate,
        {snapGrid: s, params: r, activeIndex: n, realIndex: l, snapIndex: o} = e;
    let a = t,
        d;
    const c = u => {
        let h = u - e.virtual.slidesBefore;
        return h < 0 && (h = e.virtual.slides.length + h), h >= e.virtual.slides.length && (h -= e.virtual.slides.length), h
    };
    if (typeof a > "u" && (a = We(e)), s.indexOf(i) >= 0)
        d = s.indexOf(i);
    else {
        const u = Math.min(r.slidesPerGroupSkip, a);
        d = u + Math.floor((a - u) / r.slidesPerGroup)
    }
    if (d >= s.length && (d = s.length - 1), a === n && !e.params.loop) {
        d !== o && (e.snapIndex = d, e.emit("snapIndexChange"));
        return
    }
    if (a === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = c(a);
        return
    }
    const f = e.grid && r.grid && r.grid.rows > 1;
    let p;
    if (e.virtual && r.virtual.enabled && r.loop)
        p = c(a);
    else if (f) {
        const u = e.slides.filter(v => v.column === a)[0];
        let h = parseInt(u.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(h) && (h = Math.max(e.slides.indexOf(u), 0)),
            p = Math.floor(h / r.grid.rows)
    } else if (e.slides[a]) {
        const u = e.slides[a].getAttribute("data-swiper-slide-index");
        u ? p = parseInt(u, 10) : p = a
    } else
        p = a;
    Object.assign(e, {
        previousSnapIndex: o,
        snapIndex: d,
        previousRealIndex: l,
        realIndex: p,
        previousIndex: n,
        activeIndex: a
    }),
    e.initialized && te(e),
        e.emit("activeIndexChange"),
        e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (l !== p && e.emit("realIndexChange"), e.emit("slideChange"))
}
function qe(t, e) {
    const i = this,
        s = i.params;
    let r = t.closest(`.${s.slideClass}, swiper-slide`);
    !r && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach(o => {
        !r && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (r = o)
    });
    let n = !1,
        l;
    if (r) {
        for (let o = 0; o < i.slides.length; o += 1)
            if (i.slides[o] === r) {
                n = !0,
                    l = o;
                break
            }
    }
    if (r && n)
        i.clickedSlide = r,
            i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = l;
    else {
        i.clickedSlide = void 0,
            i.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
}
var Ye = {
    updateSize: Fe,
    updateSlides: Ne,
    updateAutoHeight: Be,
    updateSlidesOffset: _e,
    updateSlidesProgress: $e,
    updateProgress: Re,
    updateSlidesClasses: He,
    updateActiveIndex: je,
    updateClickedSlide: qe
};
function Xe(t) {
    t === void 0 && (t = this.isHorizontal() ? "x" : "y");
    const e = this,
        {params: i, rtlTranslate: s, translate: r, wrapperEl: n} = e;
    if (i.virtualTranslate)
        return s ? -r : r;
    if (i.cssMode)
        return r;
    let l = Ee(n, t);
    return l += e.cssOverflowAdjustment(), s && (l = -l), l || 0
}
function Ke(t, e) {
    const i = this,
        {rtlTranslate: s, params: r, wrapperEl: n, progress: l} = i;
    let o = 0,
        a = 0;
    const d = 0;
    i.isHorizontal() ? o = s ? -t : t : a = t,
    r.roundLengths && (o = Math.floor(o), a = Math.floor(a)),
        i.previousTranslate = i.translate,
        i.translate = i.isHorizontal() ? o : a,
        r.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -a : r.virtualTranslate || (i.isHorizontal() ? o -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(), n.style.transform = `translate3d(${o}px, ${a}px, ${d}px)`);
    let c;
    const f = i.maxTranslate() - i.minTranslate();
    f === 0 ? c = 0 : c = (t - i.minTranslate()) / f,
    c !== l && i.updateProgress(t),
        i.emit("setTranslate", i.translate, e)
}
function Ue() {
    return -this.snapGrid[0]
}
function Je() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Qe(t, e, i, s, r) {
    t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    s === void 0 && (s = !0);
    const n = this,
        {params: l, wrapperEl: o} = n;
    if (n.animating && l.preventInteractionOnTransition)
        return !1;
    const a = n.minTranslate(),
        d = n.maxTranslate();
    let c;
    if (s && t > a ? c = a : s && t < d ? c = d : c = t, n.updateProgress(c), l.cssMode) {
        const f = n.isHorizontal();
        if (e === 0)
            o[f ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!n.support.smoothScroll)
                return me({
                    swiper: n,
                    targetPosition: -c,
                    side: f ? "left" : "top"
                }), !0;
            o.scrollTo({
                [f ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0), n.setTranslate(c), i && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(c), i && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(p) {
        !n || n.destroyed || p.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
}
var Ze = {
    getTranslate: Xe,
    setTranslate: Ke,
    minTranslate: Ue,
    maxTranslate: Je,
    translateTo: Qe
};
function et(t, e) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""),
        i.emit("setTransition", t, e)
}
function ge(t) {
    let {swiper: e, runCallbacks: i, direction: s, step: r} = t;
    const {activeIndex: n, previousIndex: l} = e;
    let o = s;
    if (o || (n > l ? o = "next" : n < l ? o = "prev" : o = "reset"), e.emit(`transition${r}`), i && n !== l) {
        if (o === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`),
            o === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}
function tt(t, e) {
    t === void 0 && (t = !0);
    const i = this,
        {params: s} = i;
    s.cssMode || (s.autoHeight && i.updateAutoHeight(), ge({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "Start"
    }))
}
function it(t, e) {
    t === void 0 && (t = !0);
    const i = this,
        {params: s} = i;
    i.animating = !1,
    !s.cssMode && (i.setTransition(0), ge({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "End"
    }))
}
var st = {
    setTransition: et,
    transitionStart: tt,
    transitionEnd: it
};
function rt(t, e, i, s, r) {
    t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == "string" && (t = parseInt(t, 10));
    const n = this;
    let l = t;
    l < 0 && (l = 0);
    const {params: o, snapGrid: a, slidesGrid: d, previousIndex: c, activeIndex: f, rtlTranslate: p, wrapperEl: u, enabled: h} = n;
    if (n.animating && o.preventInteractionOnTransition || !h && !s && !r)
        return !1;
    const v = Math.min(n.params.slidesPerGroupSkip, l);
    let b = v + Math.floor((l - v) / n.params.slidesPerGroup);
    b >= a.length && (b = a.length - 1);
    const w = -a[b];
    if (o.normalizeSlideIndex)
        for (let m = 0; m < d.length; m += 1) {
            const x = -Math.floor(w * 100),
                S = Math.floor(d[m] * 100),
                T = Math.floor(d[m + 1] * 100);
            typeof d[m + 1] < "u" ? x >= S && x < T - (T - S) / 2 ? l = m : x >= S && x < T && (l = m + 1) : x >= S && (l = m)
        }
    if (n.initialized && l !== f && (!n.allowSlideNext && (p ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate()) || !n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (f || 0) !== l))
        return !1;
    l !== (c || 0) && i && n.emit("beforeSlideChangeStart"),
        n.updateProgress(w);
    let P;
    if (l > f ? P = "next" : l < f ? P = "prev" : P = "reset", p && -w === n.translate || !p && w === n.translate)
        return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), o.effect !== "slide" && n.setTranslate(w), P !== "reset" && (n.transitionStart(i, P), n.transitionEnd(i, P)), !1;
    if (o.cssMode) {
        const m = n.isHorizontal(),
            x = p ? w : -w;
        if (e === 0) {
            const S = n.virtual && n.params.virtual.enabled;
            S && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0),
                S && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                    u[m ? "scrollLeft" : "scrollTop"] = x
                })) : u[m ? "scrollLeft" : "scrollTop"] = x,
            S && requestAnimationFrame(() => {
                n.wrapperEl.style.scrollSnapType = "",
                    n._immediateVirtual = !1
            })
        } else {
            if (!n.support.smoothScroll)
                return me({
                    swiper: n,
                    targetPosition: x,
                    side: m ? "left" : "top"
                }), !0;
            u.scrollTo({
                [m ? "left" : "top"]: x,
                behavior: "smooth"
            })
        }
        return !0
    }
    return n.setTransition(e), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, s), n.transitionStart(i, P), e === 0 ? n.transitionEnd(i, P) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(x) {
        !n || n.destroyed || x.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, P))
    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
}
function nt(t, e, i, s) {
    t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == "string" && (t = parseInt(t, 10));
    const r = this,
        n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let l = t;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled)
            l = l + r.virtual.slidesBefore;
        else {
            let o;
            if (n) {
                const p = l * r.params.grid.rows;
                o = r.slides.filter(u => u.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                o = r.getSlideIndexByData(l);
            const a = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                {centeredSlides: d} = r.params;
            let c = r.params.slidesPerView;
            c === "auto" ? c = r.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(r.params.slidesPerView, 10)), d && c % 2 === 0 && (c = c + 1));
            let f = a - o < c;
            if (d && (f = f || o < Math.ceil(c / 2)), f) {
                const p = d ? o < r.activeIndex ? "prev" : "next" : o - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: p,
                    slideTo: !0,
                    activeSlideIndex: p === "next" ? o + 1 : o - a + 1,
                    slideRealIndex: p === "next" ? r.realIndex : void 0
                })
            }
            if (n) {
                const p = l * r.params.grid.rows;
                l = r.slides.filter(u => u.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                l = r.getSlideIndexByData(l)
        }
    return requestAnimationFrame(() => {
        r.slideTo(l, e, i, s)
    }), r
}
function at(t, e, i) {
    t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0);
    const s = this,
        {enabled: r, params: n, animating: l} = s;
    if (!r)
        return s;
    let o = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < n.slidesPerGroupSkip ? 1 : o,
        d = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (l && !d && n.loopPreventsSliding)
            return !1;
        if (s.loopFix({
            direction: "next"
        }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && n.cssMode)
            return requestAnimationFrame(() => {
                s.slideTo(s.activeIndex + a, t, e, i)
            }), !0
    }
    return n.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i)
}
function lt(t, e, i) {
    t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0);
    const s = this,
        {params: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: a, animating: d} = s;
    if (!a)
        return s;
    const c = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (d && !c && r.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "prev"
        }),
            s._clientLeft = s.wrapperEl.clientLeft
    }
    const f = o ? s.translate : -s.translate;
    function p(w) {
        return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w)
    }
    const u = p(f),
        h = n.map(w => p(w));
    let v = n[h.indexOf(u) - 1];
    if (typeof v > "u" && r.cssMode) {
        let w;
        n.forEach((P, m) => {
            u >= P && (w = m)
        }),
        typeof w < "u" && (v = n[w > 0 ? w - 1 : w])
    }
    let b = 0;
    if (typeof v < "u" && (b = l.indexOf(v), b < 0 && (b = s.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (b = b - s.slidesPerViewDynamic("previous", !0) + 1, b = Math.max(b, 0))), r.rewind && s.isBeginning) {
        const w = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(w, t, e, i)
    } else if (r.loop && s.activeIndex === 0 && r.cssMode)
        return requestAnimationFrame(() => {
            s.slideTo(b, t, e, i)
        }), !0;
    return s.slideTo(b, t, e, i)
}
function ot(t, e, i) {
    t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0);
    const s = this;
    return s.slideTo(s.activeIndex, t, e, i)
}
function dt(t, e, i, s) {
    t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    s === void 0 && (s = .5);
    const r = this;
    let n = r.activeIndex;
    const l = Math.min(r.params.slidesPerGroupSkip, n),
        o = l + Math.floor((n - l) / r.params.slidesPerGroup),
        a = r.rtlTranslate ? r.translate : -r.translate;
    if (a >= r.snapGrid[o]) {
        const d = r.snapGrid[o],
            c = r.snapGrid[o + 1];
        a - d > (c - d) * s && (n += r.params.slidesPerGroup)
    } else {
        const d = r.snapGrid[o - 1],
            c = r.snapGrid[o];
        a - d <= (c - d) * s && (n -= r.params.slidesPerGroup)
    }
    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, t, e, i)
}
function ct() {
    const t = this,
        {params: e, slidesEl: i} = t,
        s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let r = t.clickedIndex,
        n;
    const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (t.animating)
            return;
        n = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
            e.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = t.getSlideIndex(V(i, `${l}[data-swiper-slide-index="${n}"]`)[0]), Z(() => {
                t.slideTo(r)
            })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = t.getSlideIndex(V(i, `${l}[data-swiper-slide-index="${n}"]`)[0]), Z(() => {
                t.slideTo(r)
            })) : t.slideTo(r)
    } else
        t.slideTo(r)
}
var ft = {
    slideTo: rt,
    slideToLoop: nt,
    slideNext: at,
    slidePrev: lt,
    slideReset: ot,
    slideToClosest: dt,
    slideToClickedSlide: ct
};
function ut(t) {
    const e = this,
        {params: i, slidesEl: s} = e;
    if (!i.loop || e.virtual && e.params.virtual.enabled)
        return;
    const r = () => {
            V(s, `.${i.slideClass}, swiper-slide`).forEach((f, p) => {
                f.setAttribute("data-swiper-slide-index", p)
            })
        },
        n = e.grid && i.grid && i.grid.rows > 1,
        l = i.slidesPerGroup * (n ? i.grid.rows : 1),
        o = e.slides.length % l !== 0,
        a = n && e.slides.length % i.grid.rows !== 0,
        d = c => {
            for (let f = 0; f < c; f += 1) {
                const p = e.isElement ? ee("swiper-slide", [i.slideBlankClass]) : ee("div", [i.slideClass, i.slideBlankClass]);
                e.slidesEl.append(p)
            }
        };
    if (o) {
        if (i.loopAddBlankSlides) {
            const c = l - e.slides.length % l;
            d(c),
                e.recalcSlides(),
                e.updateSlides()
        } else
            j("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else if (a) {
        if (i.loopAddBlankSlides) {
            const c = i.grid.rows - e.slides.length % i.grid.rows;
            d(c),
                e.recalcSlides(),
                e.updateSlides()
        } else
            j("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else
        r();
    e.loopFix({
        slideRealIndex: t,
        direction: i.centeredSlides ? void 0 : "next"
    })
}
function pt(t) {
    let {slideRealIndex: e, slideTo: i=!0, direction: s, setTranslate: r, activeSlideIndex: n, byController: l, byMousewheel: o} = t === void 0 ? {} : t;
    const a = this;
    if (!a.params.loop)
        return;
    a.emit("beforeLoopFix");
    const {slides: d, allowSlidePrev: c, allowSlideNext: f, slidesEl: p, params: u} = a,
        {centeredSlides: h} = u;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && u.virtual.enabled) {
        i && (!u.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : u.centeredSlides && a.snapIndex < u.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
            a.allowSlidePrev = c,
            a.allowSlideNext = f,
            a.emit("loopFix");
        return
    }
    let v = u.slidesPerView;
    v === "auto" ? v = a.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(u.slidesPerView, 10)), h && v % 2 === 0 && (v = v + 1));
    const b = u.slidesPerGroupAuto ? v : u.slidesPerGroup;
    let w = b;
    w % b !== 0 && (w += b - w % b),
        w += u.loopAdditionalSlides,
        a.loopedSlides = w;
    const P = a.grid && u.grid && u.grid.rows > 1;
    d.length < v + w ? j("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : P && u.grid.fill === "row" && j("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const m = [],
        x = [];
    let S = a.activeIndex;
    typeof n > "u" ? n = a.getSlideIndex(d.filter(y => y.classList.contains(u.slideActiveClass))[0]) : S = n;
    const T = s === "next" || !s,
        O = s === "prev" || !s;
    let L = 0,
        z = 0;
    const g = P ? Math.ceil(d.length / u.grid.rows) : d.length,
        M = (P ? d[n].column : n) + (h && typeof r > "u" ? -v / 2 + .5 : 0);
    if (M < w) {
        L = Math.max(w - M, b);
        for (let y = 0; y < w - M; y += 1) {
            const I = y - Math.floor(y / g) * g;
            if (P) {
                const C = g - I - 1;
                for (let A = d.length - 1; A >= 0; A -= 1)
                    d[A].column === C && m.push(A)
            } else
                m.push(g - I - 1)
        }
    } else if (M + v > g - w) {
        z = Math.max(M - (g - w * 2), b);
        for (let y = 0; y < z; y += 1) {
            const I = y - Math.floor(y / g) * g;
            P ? d.forEach((C, A) => {
                C.column === I && x.push(A)
            }) : x.push(I)
        }
    }
    if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
        a.__preventObserver__ = !1
    }), O && m.forEach(y => {
        d[y].swiperLoopMoveDOM = !0,
            p.prepend(d[y]),
            d[y].swiperLoopMoveDOM = !1
    }), T && x.forEach(y => {
        d[y].swiperLoopMoveDOM = !0,
            p.append(d[y]),
            d[y].swiperLoopMoveDOM = !1
    }), a.recalcSlides(), u.slidesPerView === "auto" ? a.updateSlides() : P && (m.length > 0 && O || x.length > 0 && T) && a.slides.forEach((y, I) => {
        a.grid.updateSlide(I, y, a.slides)
    }), u.watchSlidesProgress && a.updateSlidesOffset(), i) {
        if (m.length > 0 && O) {
            if (typeof e > "u") {
                const y = a.slidesGrid[S],
                    C = a.slidesGrid[S + L] - y;
                o ? a.setTranslate(a.translate - C) : (a.slideTo(S + L, 0, !1, !0), r && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - C, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - C))
            } else if (r) {
                const y = P ? m.length / u.grid.rows : m.length;
                a.slideTo(a.activeIndex + y, 0, !1, !0),
                    a.touchEventsData.currentTranslate = a.translate
            }
        } else if (x.length > 0 && T)
            if (typeof e > "u") {
                const y = a.slidesGrid[S],
                    C = a.slidesGrid[S - z] - y;
                o ? a.setTranslate(a.translate - C) : (a.slideTo(S - z, 0, !1, !0), r && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - C, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - C))
            } else {
                const y = P ? x.length / u.grid.rows : x.length;
                a.slideTo(a.activeIndex - y, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = c, a.allowSlideNext = f, a.controller && a.controller.control && !l) {
        const y = {
            slideRealIndex: e,
            direction: s,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(I => {
            !I.destroyed && I.params.loop && I.loopFix({
                ...y,
                slideTo: I.params.slidesPerView === u.slidesPerView ? i : !1
            })
        }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
            ...y,
            slideTo: a.controller.control.params.slidesPerView === u.slidesPerView ? i : !1
        })
    }
    a.emit("loopFix")
}
function mt() {
    const t = this,
        {params: e, slidesEl: i} = t;
    if (!e.loop || t.virtual && t.params.virtual.enabled)
        return;
    t.recalcSlides();
    const s = [];
    t.slides.forEach(r => {
        const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        s[n] = r
    }),
        t.slides.forEach(r => {
            r.removeAttribute("data-swiper-slide-index")
        }),
        s.forEach(r => {
            i.append(r)
        }),
        t.recalcSlides(),
        t.slideTo(t.realIndex, 0)
}
var ht = {
    loopCreate: ut,
    loopFix: pt,
    loopDestroy: mt
};
function gt(t) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
        i.style.cursor = "move",
        i.style.cursor = t ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    })
}
function vt() {
    const t = this;
    t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
        t.__preventObserver__ = !1
    }))
}
var wt = {
    setGrabCursor: gt,
    unsetGrabCursor: vt
};
function St(t, e) {
    e === void 0 && (e = this);
    function i(s) {
        if (!s || s === N() || s === k())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const r = s.closest(t);
        return !r && !s.getRootNode ? null : r || i(s.getRootNode().host)
    }
    return i(e)
}
function de(t, e, i) {
    const s = k(),
        {params: r} = t,
        n = r.edgeSwipeDetection,
        l = r.edgeSwipeThreshold;
    return n && (i <= l || i >= s.innerWidth - l) ? n === "prevent" ? (e.preventDefault(), !0) : !1 : !0
}
function Tt(t) {
    const e = this,
        i = N();
    let s = t;
    s.originalEvent && (s = s.originalEvent);
    const r = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== s.pointerId)
            return;
        r.pointerId = s.pointerId
    } else
        s.type === "touchstart" && s.targetTouches.length === 1 && (r.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        de(e, s, s.targetTouches[0].pageX);
        return
    }
    const {params: n, touches: l, enabled: o} = e;
    if (!o || !n.simulateTouch && s.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
        return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let a = s.target;
    if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || r.isTouched && r.isMoved)
        return;
    const d = !!n.noSwipingClass && n.noSwipingClass !== "",
        c = s.composedPath ? s.composedPath() : s.path;
    d && s.target && s.target.shadowRoot && c && (a = c[0]);
    const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
        p = !!(s.target && s.target.shadowRoot);
    if (n.noSwiping && (p ? St(f, a) : a.closest(f))) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !a.closest(n.swipeHandler))
        return;
    l.currentX = s.pageX,
        l.currentY = s.pageY;
    const u = l.currentX,
        h = l.currentY;
    if (!de(e, s, u))
        return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
        l.startX = u,
        l.startY = h,
        r.touchStartTime = W(),
        e.allowClick = !0,
        e.updateSize(),
        e.swipeDirection = void 0,
    n.threshold > 0 && (r.allowThresholdMove = !1);
    let v = !0;
    a.matches(r.focusableElements) && (v = !1, a.nodeName === "SELECT" && (r.isTouched = !1)),
    i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== a && i.activeElement.blur();
    const b = v && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || b) && !a.isContentEditable && s.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
        e.emit("touchStart", s)
}
function xt(t) {
    const e = N(),
        i = this,
        s = i.touchEventsData,
        {params: r, touches: n, rtlTranslate: l, enabled: o} = i;
    if (!o || !r.simulateTouch && t.pointerType === "mouse")
        return;
    let a = t;
    if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
        return;
    let d;
    if (a.type === "touchmove") {
        if (d = [...a.changedTouches].filter(T => T.identifier === s.touchId)[0], !d || d.identifier !== s.touchId)
            return
    } else
        d = a;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
        return
    }
    const c = d.pageX,
        f = d.pageY;
    if (a.preventedByNestedSwiper) {
        n.startX = c,
            n.startY = f;
        return
    }
    if (!i.allowTouchMove) {
        a.target.matches(s.focusableElements) || (i.allowClick = !1),
        s.isTouched && (Object.assign(n, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f
        }), s.touchStartTime = W());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (i.isVertical()) {
            if (f < n.startY && i.translate <= i.maxTranslate() || f > n.startY && i.translate >= i.minTranslate()) {
                s.isTouched = !1,
                    s.isMoved = !1;
                return
            }
        } else if (c < n.startX && i.translate <= i.maxTranslate() || c > n.startX && i.translate >= i.minTranslate())
            return
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0,
            i.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && i.emit("touchMove", a),
        n.previousX = n.currentX,
        n.previousY = n.currentY,
        n.currentX = c,
        n.currentY = f;
    const p = n.currentX - n.startX,
        u = n.currentY - n.startY;
    if (i.params.threshold && Math.sqrt(p ** 2 + u ** 2) < i.params.threshold)
        return;
    if (typeof s.isScrolling > "u") {
        let T;
        i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : p * p + u * u >= 25 && (T = Math.atan2(Math.abs(u), Math.abs(p)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? T > r.touchAngle : 90 - T > r.touchAngle)
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    i.allowClick = !1,
    !r.cssMode && a.cancelable && a.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && a.stopPropagation();
    let h = i.isHorizontal() ? p : u,
        v = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (h = Math.abs(h) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)),
        n.diff = h,
        h *= r.touchRatio,
    l && (h = -h, v = -v);
    const b = i.touchesDirection;
    i.swipeDirection = h > 0 ? "prev" : "next",
        i.touchesDirection = v > 0 ? "prev" : "next";
    const w = i.params.loop && !r.cssMode,
        P = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
    if (!s.isMoved) {
        if (w && P && i.loopFix({
            direction: i.swipeDirection
        }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
            const T = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            i.wrapperEl.dispatchEvent(T)
        }
        s.allowMomentumBounce = !1,
        r.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
            i.emit("sliderFirstMove", a)
    }
    let m;
    if (new Date().getTime(), s.isMoved && s.allowThresholdMove && b !== i.touchesDirection && w && P && Math.abs(h) >= 1) {
        Object.assign(n, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f,
            startTranslate: s.currentTranslate
        }),
            s.loopSwapReset = !0,
            s.startTranslate = s.currentTranslate;
        return
    }
    i.emit("sliderMove", a),
        s.isMoved = !0,
        s.currentTranslate = h + s.startTranslate;
    let x = !0,
        S = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (S = 0), h > 0 ? (w && P && !m && s.allowThresholdMove && s.currentTranslate > (r.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) && i.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }), s.currentTranslate > i.minTranslate() && (x = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + h) ** S))) : h < 0 && (w && P && !m && s.allowThresholdMove && s.currentTranslate < (r.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] : i.maxTranslate()) && i.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: i.slides.length - (r.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), s.currentTranslate < i.maxTranslate() && (x = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - h) ** S))), x && (a.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), r.threshold > 0)
        if (Math.abs(h) > r.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                    n.startX = n.currentX,
                    n.startY = n.currentY,
                    s.currentTranslate = s.startTranslate,
                    n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
}
function yt(t) {
    const e = this,
        i = e.touchEventsData;
    let s = t;
    s.originalEvent && (s = s.originalEvent);
    let r;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (r = [...s.changedTouches].filter(S => S.identifier === i.touchId)[0], !r || r.identifier !== i.touchId)
            return
    } else {
        if (i.touchId !== null || s.pointerId !== i.pointerId)
            return;
        r = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    i.pointerId = null,
        i.touchId = null;
    const {params: l, touches: o, rtlTranslate: a, slidesGrid: d, enabled: c} = e;
    if (!c || !l.simulateTouch && s.pointerType === "mouse")
        return;
    if (i.allowTouchCallbacks && e.emit("touchEnd", s), i.allowTouchCallbacks = !1, !i.isTouched) {
        i.isMoved && l.grabCursor && e.setGrabCursor(!1),
            i.isMoved = !1,
            i.startMoving = !1;
        return
    }
    l.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = W(),
        p = f - i.touchStartTime;
    if (e.allowClick) {
        const S = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(S && S[0] || s.target, S),
            e.emit("tap click", s),
        p < 300 && f - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (i.lastClickTime = W(), Z(() => {
        e.destroyed || (e.allowClick = !0)
    }), !i.isTouched || !i.isMoved || !e.swipeDirection || o.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
        i.isTouched = !1,
            i.isMoved = !1,
            i.startMoving = !1;
        return
    }
    i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1;
    let u;
    if (l.followFinger ? u = a ? e.translate : -e.translate : u = -i.currentTranslate, l.cssMode)
        return;
    if (l.freeMode && l.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: u
        });
        return
    }
    const h = u >= -e.maxTranslate() && !e.params.loop;
    let v = 0,
        b = e.slidesSizesGrid[0];
    for (let S = 0; S < d.length; S += S < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
        const T = S < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        typeof d[S + T] < "u" ? (h || u >= d[S] && u < d[S + T]) && (v = S, b = d[S + T] - d[S]) : (h || u >= d[S]) && (v = S, b = d[d.length - 1] - d[d.length - 2])
    }
    let w = null,
        P = null;
    l.rewind && (e.isBeginning ? P = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (w = 0));
    const m = (u - d[v]) / b,
        x = v < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    if (p > l.longSwipesMs) {
        if (!l.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (m >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? w : v + x) : e.slideTo(v)),
        e.swipeDirection === "prev" && (m > 1 - l.longSwipesRatio ? e.slideTo(v + x) : P !== null && m < 0 && Math.abs(m) > l.longSwipesRatio ? e.slideTo(P) : e.slideTo(v))
    } else {
        if (!l.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(v + x) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : v + x), e.swipeDirection === "prev" && e.slideTo(P !== null ? P : v))
    }
}
function ce() {
    const t = this,
        {params: e, el: i} = t;
    if (i && i.offsetWidth === 0)
        return;
    e.breakpoints && t.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: r, snapGrid: n} = t,
        l = t.virtual && t.params.virtual.enabled;
    t.allowSlideNext = !0,
        t.allowSlidePrev = !0,
        t.updateSize(),
        t.updateSlides(),
        t.updateSlidesClasses();
    const o = l && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !o ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !l ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
    }, 500)),
        t.allowSlidePrev = r,
        t.allowSlideNext = s,
    t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow()
}
function bt(t) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
}
function Et() {
    const t = this,
        {wrapperEl: e, rtlTranslate: i, enabled: s} = t;
    if (!s)
        return;
    t.previousTranslate = t.translate,
        t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop,
    t.translate === 0 && (t.translate = 0),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    let r;
    const n = t.maxTranslate() - t.minTranslate();
    n === 0 ? r = 0 : r = (t.translate - t.minTranslate()) / n,
    r !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
        t.emit("setTranslate", t.translate, !1)
}
function Pt(t) {
    const e = this;
    H(e, t.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Mt() {
    const t = this;
    t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"))
}
const ve = (t, e) => {
    const i = N(),
        {params: s, el: r, wrapperEl: n, device: l} = t,
        o = !!s.nested,
        a = e === "on" ? "addEventListener" : "removeEventListener",
        d = e;
    i[a]("touchstart", t.onDocumentTouchStart, {
        passive: !1,
        capture: o
    }),
        r[a]("touchstart", t.onTouchStart, {
            passive: !1
        }),
        r[a]("pointerdown", t.onTouchStart, {
            passive: !1
        }),
        i[a]("touchmove", t.onTouchMove, {
            passive: !1,
            capture: o
        }),
        i[a]("pointermove", t.onTouchMove, {
            passive: !1,
            capture: o
        }),
        i[a]("touchend", t.onTouchEnd, {
            passive: !0
        }),
        i[a]("pointerup", t.onTouchEnd, {
            passive: !0
        }),
        i[a]("pointercancel", t.onTouchEnd, {
            passive: !0
        }),
        i[a]("touchcancel", t.onTouchEnd, {
            passive: !0
        }),
        i[a]("pointerout", t.onTouchEnd, {
            passive: !0
        }),
        i[a]("pointerleave", t.onTouchEnd, {
            passive: !0
        }),
        i[a]("contextmenu", t.onTouchEnd, {
            passive: !0
        }),
    (s.preventClicks || s.preventClicksPropagation) && r[a]("click", t.onClick, !0),
    s.cssMode && n[a]("scroll", t.onScroll),
        s.updateOnWindowResize ? t[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ce, !0) : t[d]("observerUpdate", ce, !0),
        r[a]("load", t.onLoad, {
            capture: !0
        })
};
function It() {
    const t = this,
        {params: e} = t;
    t.onTouchStart = Tt.bind(t),
        t.onTouchMove = xt.bind(t),
        t.onTouchEnd = yt.bind(t),
        t.onDocumentTouchStart = Mt.bind(t),
    e.cssMode && (t.onScroll = Et.bind(t)),
        t.onClick = bt.bind(t),
        t.onLoad = Pt.bind(t),
        ve(t, "on")
}
function Ct() {
    ve(this, "off")
}
var Lt = {
    attachEvents: It,
    detachEvents: Ct
};
const fe = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Ot() {
    const t = this,
        {realIndex: e, initialized: i, params: s, el: r} = t,
        n = s.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
        return;
    const l = t.getBreakpoint(n, t.params.breakpointsBase, t.el);
    if (!l || t.currentBreakpoint === l)
        return;
    const a = (l in n ? n[l] : void 0) || t.originalParams,
        d = fe(t, s),
        c = fe(t, a),
        f = s.enabled;
    d && !c ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses()) : !d && c && (r.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && r.classList.add(`${s.containerModifierClass}grid-column`), t.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach(w => {
            if (typeof a[w] > "u")
                return;
            const P = s[w] && s[w].enabled,
                m = a[w] && a[w].enabled;
            P && !m && t[w].disable(),
            !P && m && t[w].enable()
        });
    const p = a.direction && a.direction !== s.direction,
        u = s.loop && (a.slidesPerView !== s.slidesPerView || p),
        h = s.loop;
    p && i && t.changeDirection(),
        G(t.params, a);
    const v = t.params.enabled,
        b = t.params.loop;
    Object.assign(t, {
        allowTouchMove: t.params.allowTouchMove,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev
    }),
        f && !v ? t.disable() : !f && v && t.enable(),
        t.currentBreakpoint = l,
        t.emit("_beforeBreakpoint", a),
    i && (u ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !h && b ? (t.loopCreate(e), t.updateSlides()) : h && !b && t.loopDestroy()),
        t.emit("breakpoint", a)
}
function zt(t, e, i) {
    if (e === void 0 && (e = "window"), !t || e === "container" && !i)
        return;
    let s = !1;
    const r = k(),
        n = e === "window" ? r.innerHeight : i.clientHeight,
        l = Object.keys(t).map(o => {
            if (typeof o == "string" && o.indexOf("@") === 0) {
                const a = parseFloat(o.substr(1));
                return {
                    value: n * a,
                    point: o
                }
            }
            return {
                value: o,
                point: o
            }
        });
    l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
    for (let o = 0; o < l.length; o += 1) {
        const {point: a, value: d} = l[o];
        e === "window" ? r.matchMedia(`(min-width: ${d}px)`).matches && (s = a) : d <= i.clientWidth && (s = a)
    }
    return s || "max"
}
var At = {
    setBreakpoint: Ot,
    getBreakpoint: zt
};
function Gt(t, e) {
    const i = [];
    return t.forEach(s => {
        typeof s == "object" ? Object.keys(s).forEach(r => {
            s[r] && i.push(e + r)
        }) : typeof s == "string" && i.push(e + s)
    }), i
}
function kt() {
    const t = this,
        {classNames: e, params: i, rtl: s, el: r, device: n} = t,
        l = Gt(["initialized", i.direction, {
            "free-mode": t.params.freeMode && i.freeMode.enabled
        }, {
            autoheight: i.autoHeight
        }, {
            rtl: s
        }, {
            grid: i.grid && i.grid.rows > 1
        }, {
            "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
        }, {
            android: n.android
        }, {
            ios: n.ios
        }, {
            "css-mode": i.cssMode
        }, {
            centered: i.cssMode && i.centeredSlides
        }, {
            "watch-progress": i.watchSlidesProgress
        }], i.containerModifierClass);
    e.push(...l),
        r.classList.add(...e),
        t.emitContainerClasses()
}
function Dt() {
    const t = this,
        {el: e, classNames: i} = t;
    e.classList.remove(...i),
        t.emitContainerClasses()
}
var Vt = {
    addClasses: kt,
    removeClasses: Dt
};
function Ft() {
    const t = this,
        {isLocked: e, params: i} = t,
        {slidesOffsetBefore: s} = i;
    if (s) {
        const r = t.slides.length - 1,
            n = t.slidesGrid[r] + t.slidesSizesGrid[r] + s * 2;
        t.isLocked = t.size > n
    } else
        t.isLocked = t.snapGrid.length === 1;
    i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
}
var Nt = {
        checkOverflow: Ft
    },
    ue = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
function Bt(t, e) {
    return function(s) {
        s === void 0 && (s = {});
        const r = Object.keys(s)[0],
            n = s[r];
        if (typeof n != "object" || n === null) {
            G(e, s);
            return
        }
        if (t[r] === !0 && (t[r] = {
            enabled: !0
        }), r === "navigation" && t[r] && t[r].enabled && !t[r].prevEl && !t[r].nextEl && (t[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && t[r] && t[r].enabled && !t[r].el && (t[r].auto = !0), !(r in t && "enabled" in n)) {
            G(e, s);
            return
        }
        typeof t[r] == "object" && !("enabled" in t[r]) && (t[r].enabled = !0),
        t[r] || (t[r] = {
            enabled: !1
        }),
            G(e, s)
    }
}
const J = {
        eventsEmitter: Ve,
        update: Ye,
        translate: Ze,
        transition: st,
        slide: ft,
        loop: ht,
        grabCursor: wt,
        events: Lt,
        breakpoints: At,
        checkOverflow: Nt,
        classes: Vt
    },
    Q = {};
class D {
    constructor()
    {
        let e,
            i;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
        r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? i = r[0] : [e, i] = r,
        i || (i = {}),
            i = G({}, i),
        e && !i.el && (i.el = e);
        const l = N();
        if (i.el && typeof i.el == "string" && l.querySelectorAll(i.el).length > 1) {
            const c = [];
            return l.querySelectorAll(i.el).forEach(f => {
                const p = G({}, i, {
                    el: f
                });
                c.push(new D(p))
            }), c
        }
        const o = this;
        o.__swiper__ = !0,
            o.support = he(),
            o.device = ze({
                userAgent: i.userAgent
            }),
            o.browser = Ge(),
            o.eventsListeners = {},
            o.eventsAnyListeners = [],
            o.modules = [...o.__modules__],
        i.modules && Array.isArray(i.modules) && o.modules.push(...i.modules);
        const a = {};
        o.modules.forEach(c => {
            c({
                params: i,
                swiper: o,
                extendParams: Bt(i, a),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o)
            })
        });
        const d = G({}, ue, a);
        return o.params = G({}, d, Q, i), o.originalParams = G({}, o.params), o.passedParams = G({}, i), o.params && o.params.on && Object.keys(o.params.on).forEach(c => {
            o.on(c, o.params.on[c])
        }), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return o.params.direction === "horizontal"
            },
            isVertical() {
                return o.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), o.emit("_swiper"), o.params.init && o.init(), o
    }
    getDirectionLabel(e)
    {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e)
    {
        const {slidesEl: i, params: s} = this,
            r = V(i, `.${s.slideClass}, swiper-slide`),
            n = le(r[0]);
        return le(e) - n
    }
    getSlideIndexByData(e)
    {
        return this.getSlideIndex(this.slides.filter(i => i.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides()
    {
        const e = this,
            {slidesEl: i, params: s} = e;
        e.slides = V(i, `.${s.slideClass}, swiper-slide`)
    }
    enable()
    {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable()
    {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, i)
    {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = s.minTranslate(),
            l = (s.maxTranslate() - r) * e + r;
        s.translateTo(l, typeof i > "u" ? 0 : i),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
    }
    emitContainerClasses()
    {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const i = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(e)
    {
        const i = this;
        return i.destroyed ? "" : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses()
    {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const i = [];
        e.slides.forEach(s => {
            const r = e.getSlideClasses(s);
            i.push({
                slideEl: s,
                classNames: r
            }),
                e.emit("_slideClass", s, r)
        }),
            e.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(e, i)
    {
        e === void 0 && (e = "current"),
        i === void 0 && (i = !1);
        const s = this,
            {params: r, slides: n, slidesGrid: l, slidesSizesGrid: o, size: a, activeIndex: d} = s;
        let c = 1;
        if (typeof r.slidesPerView == "number")
            return r.slidesPerView;
        if (r.centeredSlides) {
            let f = n[d] ? n[d].swiperSlideSize : 0,
                p;
            for (let u = d + 1; u < n.length; u += 1)
                n[u] && !p && (f += n[u].swiperSlideSize, c += 1, f > a && (p = !0));
            for (let u = d - 1; u >= 0; u -= 1)
                n[u] && !p && (f += n[u].swiperSlideSize, c += 1, f > a && (p = !0))
        } else if (e === "current")
            for (let f = d + 1; f < n.length; f += 1)
                (i ? l[f] + o[f] - l[d] < a : l[f] - l[d] < a) && (c += 1);
        else
            for (let f = d - 1; f >= 0; f -= 1)
                l[d] - l[f] < a && (c += 1);
        return c
    }
    update()
    {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: i, params: s} = e;
        s.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
                l.complete && H(e, l)
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses();
        function r() {
            const l = e.rtlTranslate ? e.translate * -1 : e.translate,
                o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
            e.setTranslate(o),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
        }
        let n;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode)
            r(),
            s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                n = e.slideTo(l.length - 1, 0, !1, !0)
            } else
                n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || r()
        }
        s.watchOverflow && i !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
    }
    changeDirection(e, i)
    {
        i === void 0 && (i = !0);
        const s = this,
            r = s.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"), e === r || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(n => {
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }), s.emit("changeDirection"), i && s.update()), s
    }
    changeLanguageDirection(e)
    {
        const i = this;
        i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), i.el.dir = "ltr"), i.update())
    }
    mount(e)
    {
        const i = this;
        if (i.mounted)
            return !0;
        let s = e || i.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)), !s)
            return !1;
        s.swiper = i,
        s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (i.isElement = !0);
        const r = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let l = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : V(s, r())[0];
        return !l && i.params.createElements && (l = ee("div", i.params.wrapperClass), s.append(l), V(s, `.${i.params.slideClass}`).forEach(o => {
            l.append(o)
        })), Object.assign(i, {
            el: s,
            wrapperEl: l,
            slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
            hostEl: i.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl"),
            wrongRTL: F(l, "display") === "-webkit-box"
        }), !0
    }
    init(e)
    {
        const i = this;
        if (i.initialized || i.mount(e) === !1)
            return i;
        i.emit("beforeInit"),
        i.params.breakpoints && i.setBreakpoint(),
            i.addClasses(),
            i.updateSize(),
            i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
            i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
        i.params.loop && i.loopCreate(),
            i.attachEvents();
        const r = [...i.el.querySelectorAll('[loading="lazy"]')];
        return i.isElement && r.push(...i.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach(n => {
            n.complete ? H(i, n) : n.addEventListener("load", l => {
                H(i, l.target)
            })
        }), te(i), i.initialized = !0, te(i), i.emit("init"), i.emit("afterInit"), i
    }
    destroy(e, i)
    {
        e === void 0 && (e = !0),
        i === void 0 && (i = !0);
        const s = this,
            {params: r, el: n, wrapperEl: l, slides: o} = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), i && (s.removeClasses(), n.removeAttribute("style"), l.removeAttribute("style"), o && o.length && o.forEach(a => {
            a.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index")
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(a => {
            s.off(a)
        }), e !== !1 && (s.el.swiper = null, ye(s)), s.destroyed = !0), null
    }
    static extendDefaults(e)
    {
        G(Q, e)
    }
    static get extendedDefaults()
    {
        return Q
    }
    static get defaults()
    {
        return ue
    }
    static installModule(e)
    {
        D.prototype.__modules__ || (D.prototype.__modules__ = []);
        const i = D.prototype.__modules__;
        typeof e == "function" && i.indexOf(e) < 0 && i.push(e)
    }
    static use(e)
    {
        return Array.isArray(e) ? (e.forEach(i => D.installModule(i)), D) : (D.installModule(e), D)
    }
}
Object.keys(J).forEach(t => {
    Object.keys(J[t]).forEach(e => {
        D.prototype[e] = J[t][e]
    })
});
D.use([ke, De]);
function _t(t, e) {
    function i(s) {
        s.target === t && (e.call(t, s), t.removeEventListener("transitionend", i))
    }
    e && t.addEventListener("transitionend", i)
}
function $t({swiper: t, duration: e, transformElements: i, allSlides: s}) {
    const {activeIndex: r} = t,
        n = l => l.parentElement ? l.parentElement : t.slides.filter(a => a.shadowRoot && a.shadowRoot === l.parentNode)[0];
    if (t.params.virtualTranslate && e !== 0) {
        let l = !1,
            o;
        s ? o = i : o = i.filter(a => {
            const d = a.classList.contains("swiper-slide-transform") ? n(a) : a;
            return t.getSlideIndex(d) === r
        }),
            o.forEach(a => {
                _t(a, () => {
                    if (l || !t || t.destroyed)
                        return;
                    l = !0,
                        t.animating = !1;
                    const d = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.wrapperEl.dispatchEvent(d)
                })
            })
    }
}
function Rt({swiper: t, on: e}) {
    const i = () => {
            const {slides: r, slidesSizesGrid: n, params: l, size: o} = t,
                {slidesPerView: a, spaceBetween: d, cssMode: c, centeredSlides: f} = l,
                p = f ? .5 : .65,
                u = f ? .5 : .35;
            for (let h = 0; h < r.length; h += 1) {
                const v = r[h],
                    b = v.querySelector(".swiper-material-wrapper"),
                    w = v.querySelectorAll(".swiper-material-animate-opacity"),
                    P = v.querySelectorAll("[data-swiper-material-scale]"),
                    m = -v.progress,
                    x = v.swiperSlideOffset,
                    S = t.translate;
                let T,
                    O = 0,
                    L = 0;
                const z = n[h],
                    g = d / 2 / z,
                    E = c ? S : 0,
                    M = f && a % 2 === 1,
                    y = f && a % 2 === 0;
                if (m <= 0)
                    if (f && a > 1) {
                        if (m <= 0 && m >= -(a - 2) && (O = S, T = 1, L = 1), M && m < -(a - Math.ceil(a / 2))) {
                            const I = Math.ceil(a / 2) - Math.abs(m);
                            T = I,
                                L = T ** 4,
                                O = S + z * (1 - I) * (1 + g * 2)
                        }
                        if (y && m < -(a / 2 - 1) && m >= -(a / 2)) {
                            const I = a / 2 - Math.abs(m);
                            T = p - g + (u + g * 2) * (a / 2 - Math.abs(m)),
                                L = ((T - p) / (1 - p)) ** 4,
                                O = S + z * (u + g) * (1 - I)
                        }
                        if (y && m < -a / 2) {
                            let I = a / 2 + 1 - Math.abs(m);
                            T = 0,
                            I >= 0 && (I = -g * 2 + I * (1 + g * 2), I = Math.max(Math.min(I, 1), 0), T = (u - g) * I),
                                O = S + z * (u + g) * (2 - I) + z * (u - g) * (1 - I)
                        }
                    } else
                        T = 1 + m,
                            O = -x,
                            L = T ** 4;
                if (a === 1)
                    m > 0 && (T = 1 - m, O = -x + o * Math.min(m, 1), L = T ** 4);
                else {
                    if (m > 0 && m <= a - 2 && (O = S, T = 1, L = 1), y ? m > a / 2 - 1 && m <= a / 2 : m > a - 2 && m <= a - 1) {
                        const C = y ? Math.floor(a / 2) : 1;
                        T = p - g + (u + g * 2) * (a - C - Math.abs(m)),
                            O = S,
                            L = ((T - p) / (1 - p)) ** 4
                    }
                    if (M && m > a - Math.ceil(a / 2)) {
                        const C = Math.ceil(a / 2) - (a - Math.abs(m));
                        O = S - z * (g * 2) * C,
                            T = 1 - C,
                            L = T ** 4
                    }
                    if (m > a - 1 && m <= a && !f) {
                        const C = a - Math.abs(m),
                            A = p - g,
                            _ = u - g;
                        T = _ + (A - _) * C,
                            O = S - z * (u + g) * (1 - C)
                    }
                    if (m > (f ? a / 2 : a) && !M) {
                        let C = (f ? a / 2 + 1 : a + 1) - Math.abs(m),
                            A = 0;
                        T = 0,
                        C >= 0 && (C = -g * 2 + C * (1 + g * 2), C = Math.max(Math.min(C, 1), 0), T = (u - g) * C, A = -C * (u + g) * z + C * d),
                            O = -x + o * Math.min(m, 1) + A,
                            L = 0
                    }
                }
                T < 0 && (T = 0),
                T > 1 && (T = 1),
                    v.style.setProperty("--swiper-material-scale", T),
                    w.forEach(I => {
                        I.style.opacity = L
                    }),
                    P.forEach(I => {
                        let C = parseFloat(I.getAttribute("data-swiper-material-scale"));
                        (Number.isNaN(C) || !C && C !== 0) && (C = 1),
                            I.style.transform = `scale(${1 + (C - 1) * (1 - T)})`
                    }),
                    t.isHorizontal() ? (b.style.width = `${100 * T}%`, b.style.transform = `translate3d(${O - E}px, 0, 0)`) : (b.style.height = `${100 * T}%`, b.style.transform = `translate3d(0, ${O - E}px, 0)`)
            }
        },
        s = r => {
            const {slides: n} = t,
                l = [];
            for (let o = 0; o < n.length; o += 1) {
                const a = n[o],
                    d = a.querySelector(".swiper-material-wrapper"),
                    c = a.querySelectorAll(".swiper-material-animate-opacity"),
                    f = a.querySelectorAll("[data-swiper-material-scale]");
                [d, ...f, ...c].forEach(p => {
                    p.style.transitionDuration = `${r}ms`
                }),
                    l.push(d)
            }
            $t({
                swiper: t,
                duration: r,
                transformElements: l,
                allSlides: !0
            })
        };
    e("beforeInit", () => {
        if (t.params.effect !== "material")
            return;
        t.classNames.push(`${t.params.containerModifierClass}material`),
        t.isElement && t.hostEl && t.hostEl.classList.add(`swiper-${t.params.direction}`);
        const r = {
            loopAdditionalSlides: 1,
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode
        };
        Object.assign(t.params, r),
            Object.assign(t.originalParams, r)
    }),
        e("setTranslate", () => {
            t.params.effect === "material" && i()
        }),
        e("setTransition", (r, n) => {
            t.params.effect === "material" && s(n)
        }),
        e("slidesUpdated", () => {
            if (!t.params.centeredSlides && t.params.slidesPerView > 1 && !t.params.loop) {
                const r = t.snapGrid[t.snapGrid.length - 1];
                t.snapGrid.push(r + t.slidesSizesGrid[0] + t.params.spaceBetween)
            }
            t.el.style.setProperty("--swiper-material-slide-size", `${t.slidesSizesGrid[0]}px`)
        })
}
const q = new D(".swiper", {
        modules: [Rt],
        effect: "material",
        grabCursor: !0,
        slidesPerView: 2,
        spaceBetween: 16,
        speed: 600
    }),
    B = document.querySelector(".dropdown"),
    Ht = document.querySelector("input");
B.parentElement.addEventListener("click", t => {
    B.contains(t.target) || B.classList.toggle("visible")
});
B.addEventListener("click", t => {
    const e = parseInt(t.target.getAttribute("data-value"), 10);
    q.params.slidesPerView = e,
        q.update(),
        B.classList.remove("visible"),
        document.querySelector(".spv").textContent = e
});
Ht.addEventListener("change", t => {
    const e = t.target.checked;
    q.params.centeredSlides = e,
        q.update()
});
