const __vite__fileDeps = ["./B7n1yDyK.js", "./_ylYCFiH.js", "./el-skeleton.D2gX9wof.css", "./kNyiwGP3.js", "./BP9t50G4.js", "./el-input.BBHsZF-x.css", "./BXIX4mEq.js", "./D5gTYHX9.js", "./el-form.xWw5OCe7.css", "./BNYcLaIC.js", "./BRy4wAir.js", "./el-popper.sobf68Cz.css", "./BmKSf87s.js", "./CjUV8x4k.js", "./A44nslRZ.js", "./el-select.B3fFpcjQ.css", "./hZ1MfWHg.js", "./l0sNRNKZ.js", "./i-8dcNuU.js", "./A61lDMFH.js", "./CVzTXg0q.js", "./DXWI1hfK.js", "./BEyFXQ6a.js", "./JtEDREM_.js", "./ruufTRht.js", "./account.DMY-t1nF.css", "./DlF_M7m0.js", "./Cu5DvoW-.js", "./D9tH2Kqb.js", "./Av9cWwtx.js", "./el-overlay.-YS6cb1P.css", "./assistant.BW-f1gKB.css", "./c-vQmq45.js", "./BGDMN2oO.js", "./DvzeIpF7.js", "./el-input-number.CPv9pnBG.css", "./DP2rzg_V.js", "./CBvcH_wZ.js", "./checking-account.BYe7G0lE.css", "./eLx2Hz0S.js", "./BFXk9LIk.js", "./CGEcLNNE.js", "./Bcg8lkLs.js", "./bottom-bar.Dzpma0fl.css", "./B55DeSi4.js", "./dialog.Ta2c8cXz.css", "./B6HDuqK6.js", "./_IH9JHax.js", "./DoWdeW1j.js", "./index.CAFhDbtC.css", "./zlYdUaQp.js", "./CeEYTCzb.js", "./3jzJmQQx.js", "./CrLiLm__.js", "./CDJI4Dk3.js", "./iZ5TkzCQ.js", "./home.Dl_290UY.css", "./BZuXzZC7.js", "./BjhOZvJ2.js", "./index.mxEZNUUy.css", "./BQaUIkTk.js", "./BI4uhhR7.js", "./GjbllmmZ.js", "./mission.DVXK3E5J.css", "./B_DGmYmI.js", "./not-data.Bd5HiKKn.css", "./DRSR3OD5.js", "./DOTS3JHr.js", "./CskiphgD.js", "./navigation.9ZhvHoiR.css", "./onboard.CVOuACdz.css", "./Bo4tbPri.js", "./BIIF9aeY.js", "./DtYQCH0k.js", "./DaNRwJen.js", "./cfRjd_mV.js", "./tab-select.DxFT3JRf.css", "./Bun-ul9i.js", "./boost-pack.CXBpB7-t.css", "./partners.CmMYwpUH.css", "./mty30wiD.js", "./BdRzhmRR.js", "./payment-modal.C7cgW_nL.css", "./shop.CnvZqDUF.css", "./BY2g9qht.js", "./statistic.D6eTNtD8.css", "./DP2kGCaz.js", "./support.OOluzifH.css", "./DtMnyrbB.js", "./tier.BX6nF8Tu.css", "./DqLjprvY.js", "./total-gum.BnAggG3t.css", "./BXt85TTg.js", "./wallet.Bx3ZPiHV.css", "./Dn_ES1Qj.js", "./welcome.G8uYvnm8.css", "./S3fEMl5n.js", "./DoAoad3Y.js", "./default.DHt7mWJm.css", "./BgpE7UJM.js", "./error-404.JekaaCis.css", "./DC5iMk4C.js", "./error-500.CNP9nqm1.css"]
  , __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
/**
* @vue/shared v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function fc(e, t) {
    const n = new Set(e.split(","));
    return r => n.has(r)
}
const Le = {}
  , Bs = []
  , Tt = () => {}
  , Rb = () => !1
  , vi = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , p0 = e => e.startsWith("onUpdate:")
  , Ve = Object.assign
  , h0 = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Ib = Object.prototype.hasOwnProperty
  , Se = (e, t) => Ib.call(e, t)
  , oe = Array.isArray
  , Os = e => po(e) === "[object Map]"
  , is = e => po(e) === "[object Set]"
  , ap = e => po(e) === "[object Date]"
  , Db = e => po(e) === "[object RegExp]"
  , ce = e => typeof e == "function"
  , $e = e => typeof e == "string"
  , zn = e => typeof e == "symbol"
  , Ne = e => e !== null && typeof e == "object"
  , m0 = e => (Ne(e) || ce(e)) && ce(e.then) && ce(e.catch)
  , v_ = Object.prototype.toString
  , po = e => v_.call(e)
  , Bb = e => po(e).slice(8, -1)
  , E_ = e => po(e) === "[object Object]"
  , g0 = e => $e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Fs = fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , dc = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Ob = /-(\w)/g
  , xt = dc(e => e.replace(Ob, (t, n) => n ? n.toUpperCase() : ""))
  , Fb = /\B([A-Z])/g
  , Wt = dc(e => e.replace(Fb, "-$1").toLowerCase())
  , Ei = dc(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Po = dc(e => e ? `on${Ei(e)}` : "")
  , fn = (e, t) => !Object.is(e, t)
  , Ps = (e, t) => {
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , b_ = (e, t, n) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , Ra = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Ia = e => {
    const t = $e(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let cp;
const S_ = () => cp || (cp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {})
  , Pb = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error"
  , Nb = fc(Pb);
function as(e) {
    if (oe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , s = $e(r) ? $b(r) : as(r);
            if (s)
                for (const o in s)
                    t[o] = s[o]
        }
        return t
    } else if ($e(e) || Ne(e))
        return e
}
const Mb = /;(?![^(]*\))/g
  , Lb = /:([^]+)/
  , Hb = /\/\*[^]*?\*\//g;
function $b(e) {
    const t = {};
    return e.replace(Hb, "").split(Mb).forEach(n => {
        if (n) {
            const r = n.split(Lb);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function jt(e) {
    let t = "";
    if ($e(e))
        t = e;
    else if (oe(e))
        for (let n = 0; n < e.length; n++) {
            const r = jt(e[n]);
            r && (t += r + " ")
        }
    else if (Ne(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function w_(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !$e(t) && (e.class = jt(t)),
    n && (e.style = as(n)),
    e
}
const Ub = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , jb = fc(Ub);
function C_(e) {
    return !!e || e === ""
}
function zb(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = Er(e[r], t[r]);
    return n
}
function Er(e, t) {
    if (e === t)
        return !0;
    let n = ap(e)
      , r = ap(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = zn(e),
    r = zn(t),
    n || r)
        return e === t;
    if (n = oe(e),
    r = oe(t),
    n || r)
        return n && r ? zb(e, t) : !1;
    if (n = Ne(e),
    r = Ne(t),
    n || r) {
        if (!n || !r)
            return !1;
        const s = Object.keys(e).length
          , o = Object.keys(t).length;
        if (s !== o)
            return !1;
        for (const i in e) {
            const a = e.hasOwnProperty(i)
              , c = t.hasOwnProperty(i);
            if (a && !c || !a && c || !Er(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function pc(e, t) {
    return e.findIndex(n => Er(n, t))
}
const _0 = e => $e(e) ? e : e == null ? "" : oe(e) || Ne(e) && (e.toString === v_ || !ce(e.toString)) ? JSON.stringify(e, A_, 2) : String(e)
  , A_ = (e, t) => t && t.__v_isRef ? A_(e, t.value) : Os(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,s], o) => (n[cu(r, o) + " =>"] = s,
    n), {})
} : is(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => cu(n))
} : zn(t) ? cu(t) : Ne(t) && !oe(t) && !E_(t) ? String(t) : t
  , cu = (e, t="") => {
    var n;
    return zn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ut;
class x0 {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Ut,
        !t && Ut && (this.index = (Ut.scopes || (Ut.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Ut;
            try {
                return Ut = this,
                t()
            } finally {
                Ut = n
            }
        }
    }
    on() {
        Ut = this
    }
    off() {
        Ut = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s,
                s.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function hc(e) {
    return new x0(e)
}
function T_(e, t=Ut) {
    t && t.active && t.effects.push(e)
}
function mc() {
    return Ut
}
function y0(e) {
    Ut && Ut.cleanups.push(e)
}
let jr;
class Ws {
    constructor(t, n, r, s) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = r,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        T_(this, s)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Ar();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Wb(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Tr()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = _r
          , n = jr;
        try {
            return _r = !0,
            jr = this,
            this._runnings++,
            up(this),
            this.fn()
        } finally {
            lp(this),
            this._runnings--,
            jr = n,
            _r = t
        }
    }
    stop() {
        var t;
        this.active && (up(this),
        lp(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function Wb(e) {
    return e.value
}
function up(e) {
    e._trackId++,
    e._depsLength = 0
}
function lp(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            k_(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function k_(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
function qb(e, t) {
    e.effect instanceof Ws && (e = e.effect.fn);
    const n = new Ws(e,Tt, () => {
        n.dirty && n.run()
    }
    );
    t && (Ve(n, t),
    t.scope && T_(n, t.scope)),
    (!t || !t.lazy) && n.run();
    const r = n.run.bind(n);
    return r.effect = n,
    r
}
function Vb(e) {
    e.effect.stop()
}
let _r = !0
  , Ll = 0;
const R_ = [];
function Ar() {
    R_.push(_r),
    _r = !1
}
function Tr() {
    const e = R_.pop();
    _r = e === void 0 ? !0 : e
}
function v0() {
    Ll++
}
function E0() {
    for (Ll--; !Ll && Hl.length; )
        Hl.shift()()
}
function I_(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && k_(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const Hl = [];
function D_(e, t, n) {
    v0();
    for (const r of e.keys()) {
        let s;
        r._dirtyLevel < t && (s ?? (s = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (s ?? (s = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && Hl.push(r.scheduler)))
    }
    E0()
}
const B_ = (e, t) => {
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , Da = new WeakMap
  , zr = Symbol("")
  , $l = Symbol("");
function Ft(e, t, n) {
    if (_r && jr) {
        let r = Da.get(e);
        r || Da.set(e, r = new Map);
        let s = r.get(n);
        s || r.set(n, s = B_( () => r.delete(n))),
        I_(jr, s)
    }
}
function Nn(e, t, n, r, s, o) {
    const i = Da.get(e);
    if (!i)
        return;
    let a = [];
    if (t === "clear")
        a = [...i.values()];
    else if (n === "length" && oe(e)) {
        const c = Number(r);
        i.forEach( (u, l) => {
            (l === "length" || !zn(l) && l >= c) && a.push(u)
        }
        )
    } else
        switch (n !== void 0 && a.push(i.get(n)),
        t) {
        case "add":
            oe(e) ? g0(n) && a.push(i.get("length")) : (a.push(i.get(zr)),
            Os(e) && a.push(i.get($l)));
            break;
        case "delete":
            oe(e) || (a.push(i.get(zr)),
            Os(e) && a.push(i.get($l)));
            break;
        case "set":
            Os(e) && a.push(i.get(zr));
            break
        }
    v0();
    for (const c of a)
        c && D_(c, 4);
    E0()
}
function Kb(e, t) {
    var n;
    return (n = Da.get(e)) == null ? void 0 : n.get(t)
}
const Gb = fc("__proto__,__v_isRef,__isVue")
  , O_ = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(zn))
  , fp = Xb();
function Xb() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = be(this);
            for (let o = 0, i = this.length; o < i; o++)
                Ft(r, "get", o + "");
            const s = r[t](...n);
            return s === -1 || s === !1 ? r[t](...n.map(be)) : s
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            Ar(),
            v0();
            const r = be(this)[t].apply(this, n);
            return E0(),
            Tr(),
            r
        }
    }
    ),
    e
}
function Yb(e) {
    zn(e) || (e = String(e));
    const t = be(this);
    return Ft(t, "has", e),
    t.hasOwnProperty(e)
}
class F_ {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        const s = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !s;
        if (n === "__v_isReadonly")
            return s;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return r === (s ? o ? $_ : H_ : o ? L_ : M_).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = oe(t);
        if (!s) {
            if (i && Se(fp, n))
                return Reflect.get(fp, n, r);
            if (n === "hasOwnProperty")
                return Yb
        }
        const a = Reflect.get(t, n, r);
        return (zn(n) ? O_.has(n) : Gb(n)) || (s || Ft(t, "get", n),
        o) ? a : Xe(a) ? i && g0(n) ? a : a.value : Ne(a) ? s ? xc(a) : kn(a) : a
    }
}
class P_ extends F_ {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let o = t[n];
        if (!this._isShallow) {
            const c = Qr(o);
            if (!Yo(r) && !Qr(r) && (o = be(o),
            r = be(r)),
            !oe(t) && Xe(o) && !Xe(r))
                return c ? !1 : (o.value = r,
                !0)
        }
        const i = oe(t) && g0(n) ? Number(n) < t.length : Se(t, n)
          , a = Reflect.set(t, n, r, s);
        return t === be(s) && (i ? fn(r, o) && Nn(t, "set", n, r) : Nn(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = Se(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && Nn(t, "delete", n, void 0),
        s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!zn(n) || !O_.has(n)) && Ft(t, "has", n),
        r
    }
    ownKeys(t) {
        return Ft(t, "iterate", oe(t) ? "length" : zr),
        Reflect.ownKeys(t)
    }
}
class N_ extends F_ {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Jb = new P_
  , Qb = new N_
  , Zb = new P_(!0)
  , e2 = new N_(!0)
  , b0 = e => e
  , gc = e => Reflect.getPrototypeOf(e);
function Ui(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const s = be(e)
      , o = be(t);
    n || (fn(t, o) && Ft(s, "get", t),
    Ft(s, "get", o));
    const {has: i} = gc(s)
      , a = r ? b0 : n ? w0 : Jo;
    if (i.call(s, t))
        return a(e.get(t));
    if (i.call(s, o))
        return a(e.get(o));
    e !== s && e.get(t)
}
function ji(e, t=!1) {
    const n = this.__v_raw
      , r = be(n)
      , s = be(e);
    return t || (fn(e, s) && Ft(r, "has", e),
    Ft(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
}
function zi(e, t=!1) {
    return e = e.__v_raw,
    !t && Ft(be(e), "iterate", zr),
    Reflect.get(e, "size", e)
}
function dp(e) {
    e = be(e);
    const t = be(this);
    return gc(t).has.call(t, e) || (t.add(e),
    Nn(t, "add", e, e)),
    this
}
function pp(e, t) {
    t = be(t);
    const n = be(this)
      , {has: r, get: s} = gc(n);
    let o = r.call(n, e);
    o || (e = be(e),
    o = r.call(n, e));
    const i = s.call(n, e);
    return n.set(e, t),
    o ? fn(t, i) && Nn(n, "set", e, t) : Nn(n, "add", e, t),
    this
}
function hp(e) {
    const t = be(this)
      , {has: n, get: r} = gc(t);
    let s = n.call(t, e);
    s || (e = be(e),
    s = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return s && Nn(t, "delete", e, void 0),
    o
}
function mp() {
    const e = be(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Nn(e, "clear", void 0, void 0),
    n
}
function Wi(e, t) {
    return function(r, s) {
        const o = this
          , i = o.__v_raw
          , a = be(i)
          , c = t ? b0 : e ? w0 : Jo;
        return !e && Ft(a, "iterate", zr),
        i.forEach( (u, l) => r.call(s, c(u), c(l), o))
    }
}
function qi(e, t, n) {
    return function(...r) {
        const s = this.__v_raw
          , o = be(s)
          , i = Os(o)
          , a = e === "entries" || e === Symbol.iterator && i
          , c = e === "keys" && i
          , u = s[e](...r)
          , l = n ? b0 : t ? w0 : Jo;
        return !t && Ft(o, "iterate", c ? $l : zr),
        {
            next() {
                const {value: f, done: d} = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [l(f[0]), l(f[1])] : l(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Qn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function t2() {
    const e = {
        get(o) {
            return Ui(this, o)
        },
        get size() {
            return zi(this)
        },
        has: ji,
        add: dp,
        set: pp,
        delete: hp,
        clear: mp,
        forEach: Wi(!1, !1)
    }
      , t = {
        get(o) {
            return Ui(this, o, !1, !0)
        },
        get size() {
            return zi(this)
        },
        has: ji,
        add: dp,
        set: pp,
        delete: hp,
        clear: mp,
        forEach: Wi(!1, !0)
    }
      , n = {
        get(o) {
            return Ui(this, o, !0)
        },
        get size() {
            return zi(this, !0)
        },
        has(o) {
            return ji.call(this, o, !0)
        },
        add: Qn("add"),
        set: Qn("set"),
        delete: Qn("delete"),
        clear: Qn("clear"),
        forEach: Wi(!0, !1)
    }
      , r = {
        get(o) {
            return Ui(this, o, !0, !0)
        },
        get size() {
            return zi(this, !0)
        },
        has(o) {
            return ji.call(this, o, !0)
        },
        add: Qn("add"),
        set: Qn("set"),
        delete: Qn("delete"),
        clear: Qn("clear"),
        forEach: Wi(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        e[o] = qi(o, !1, !1),
        n[o] = qi(o, !0, !1),
        t[o] = qi(o, !1, !0),
        r[o] = qi(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [n2,r2,s2,o2] = t2();
function _c(e, t) {
    const n = t ? e ? o2 : s2 : e ? r2 : n2;
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(Se(n, s) && s in r ? n : r, s, o)
}
const i2 = {
    get: _c(!1, !1)
}
  , a2 = {
    get: _c(!1, !0)
}
  , c2 = {
    get: _c(!0, !1)
}
  , u2 = {
    get: _c(!0, !0)
}
  , M_ = new WeakMap
  , L_ = new WeakMap
  , H_ = new WeakMap
  , $_ = new WeakMap;
function l2(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function f2(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : l2(Bb(e))
}
function kn(e) {
    return Qr(e) ? e : yc(e, !1, Jb, i2, M_)
}
function cs(e) {
    return yc(e, !1, Zb, a2, L_)
}
function xc(e) {
    return yc(e, !0, Qb, c2, H_)
}
function d2(e) {
    return yc(e, !0, e2, u2, $_)
}
function yc(e, t, n, r, s) {
    if (!Ne(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = s.get(e);
    if (o)
        return o;
    const i = f2(e);
    if (i === 0)
        return e;
    const a = new Proxy(e,i === 2 ? r : n);
    return s.set(e, a),
    a
}
function Mn(e) {
    return Qr(e) ? Mn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Qr(e) {
    return !!(e && e.__v_isReadonly)
}
function Yo(e) {
    return !!(e && e.__v_isShallow)
}
function S0(e) {
    return e ? !!e.__v_raw : !1
}
function be(e) {
    const t = e && e.__v_raw;
    return t ? be(t) : e
}
function vc(e) {
    return Object.isExtensible(e) && b_(e, "__v_skip", !0),
    e
}
const Jo = e => Ne(e) ? kn(e) : e
  , w0 = e => Ne(e) ? xc(e) : e;
class U_ {
    constructor(t, n, r, s) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Ws( () => t(this._value), () => Ns(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !s,
        this.__v_isReadonly = r
    }
    get value() {
        const t = be(this);
        return (!t._cacheable || t.effect.dirty) && fn(t._value, t._value = t.effect.run()) && Ns(t, 4),
        C0(t),
        t.effect._dirtyLevel >= 2 && Ns(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function p2(e, t, n=!1) {
    let r, s;
    const o = ce(e);
    return o ? (r = e,
    s = Tt) : (r = e.get,
    s = e.set),
    new U_(r,s,o || !s,n)
}
function C0(e) {
    var t;
    _r && jr && (e = be(e),
    I_(jr, (t = e.dep) != null ? t : e.dep = B_( () => e.dep = void 0, e instanceof U_ ? e : void 0)))
}
function Ns(e, t=4, n) {
    e = be(e);
    const r = e.dep;
    r && D_(r, t)
}
function Xe(e) {
    return !!(e && e.__v_isRef === !0)
}
function We(e) {
    return j_(e, !1)
}
function qs(e) {
    return j_(e, !0)
}
function j_(e, t) {
    return Xe(e) ? e : new h2(e,t)
}
class h2 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : be(t),
        this._value = n ? t : Jo(t)
    }
    get value() {
        return C0(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Yo(t) || Qr(t);
        t = n ? t : be(t),
        fn(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : Jo(t),
        Ns(this, 4))
    }
}
function m2(e) {
    Ns(e, 4)
}
function re(e) {
    return Xe(e) ? e.value : e
}
function g2(e) {
    return ce(e) ? e() : re(e)
}
const _2 = {
    get: (e, t, n) => re(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return Xe(s) && !Xe(n) ? (s.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function A0(e) {
    return Mn(e) ? e : new Proxy(e,_2)
}
class x2 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t( () => C0(this), () => Ns(this));
        this._get = n,
        this._set = r
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function z_(e) {
    return new x2(e)
}
function W_(e) {
    const t = oe(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = q_(e, n);
    return t
}
class y2 {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Kb(be(this._object), this._key)
    }
}
class v2 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function T0(e, t, n) {
    return Xe(e) ? e : ce(e) ? new v2(e) : Ne(e) && arguments.length > 1 ? q_(e, t, n) : We(e)
}
function q_(e, t, n) {
    const r = e[t];
    return Xe(r) ? r : new y2(e,t,n)
}
const E2 = {
    GET: "get",
    HAS: "has",
    ITERATE: "iterate"
}
  , b2 = {
    SET: "set",
    ADD: "add",
    DELETE: "delete",
    CLEAR: "clear"
};
/**
* @vue/runtime-core v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function S2(e, t) {}
const w2 = {
    SETUP_FUNCTION: 0,
    0: "SETUP_FUNCTION",
    RENDER_FUNCTION: 1,
    1: "RENDER_FUNCTION",
    WATCH_GETTER: 2,
    2: "WATCH_GETTER",
    WATCH_CALLBACK: 3,
    3: "WATCH_CALLBACK",
    WATCH_CLEANUP: 4,
    4: "WATCH_CLEANUP",
    NATIVE_EVENT_HANDLER: 5,
    5: "NATIVE_EVENT_HANDLER",
    COMPONENT_EVENT_HANDLER: 6,
    6: "COMPONENT_EVENT_HANDLER",
    VNODE_HOOK: 7,
    7: "VNODE_HOOK",
    DIRECTIVE_HOOK: 8,
    8: "DIRECTIVE_HOOK",
    TRANSITION_HOOK: 9,
    9: "TRANSITION_HOOK",
    APP_ERROR_HANDLER: 10,
    10: "APP_ERROR_HANDLER",
    APP_WARN_HANDLER: 11,
    11: "APP_WARN_HANDLER",
    FUNCTION_REF: 12,
    12: "FUNCTION_REF",
    ASYNC_COMPONENT_LOADER: 13,
    13: "ASYNC_COMPONENT_LOADER",
    SCHEDULER: 14,
    14: "SCHEDULER"
}
  , C2 = {
    sp: "serverPrefetch hook",
    bc: "beforeCreate hook",
    c: "created hook",
    bm: "beforeMount hook",
    m: "mounted hook",
    bu: "beforeUpdate hook",
    u: "updated",
    bum: "beforeUnmount hook",
    um: "unmounted hook",
    a: "activated hook",
    da: "deactivated hook",
    ec: "errorCaptured hook",
    rtc: "renderTracked hook",
    rtg: "renderTriggered hook",
    0: "setup function",
    1: "render function",
    2: "watcher getter",
    3: "watcher callback",
    4: "watcher cleanup function",
    5: "native event handler",
    6: "component event handler",
    7: "vnode hook",
    8: "directive hook",
    9: "transition hook",
    10: "app errorHandler",
    11: "app warnHandler",
    12: "ref function",
    13: "async component loader",
    14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Ln(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        us(s, t, n)
    }
}
function Vt(e, t, n, r) {
    if (ce(e)) {
        const s = Ln(e, t, n, r);
        return s && m0(s) && s.catch(o => {
            us(o, t, n)
        }
        ),
        s
    }
    if (oe(e)) {
        const s = [];
        for (let o = 0; o < e.length; o++)
            s.push(Vt(e[o], t, n, r));
        return s
    }
}
function us(e, t, n, r=!0) {
    const s = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const i = t.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o; ) {
            const u = o.ec;
            if (u) {
                for (let l = 0; l < u.length; l++)
                    if (u[l](e, i, a) === !1)
                        return
            }
            o = o.parent
        }
        const c = t.appContext.config.errorHandler;
        if (c) {
            Ar(),
            Ln(c, null, 10, [e, i, a]),
            Tr();
            return
        }
    }
    A2(e, n, s, r)
}
function A2(e, t, n, r=!0) {
    console.error(e)
}
let Qo = !1
  , Ul = !1;
const _t = [];
let En = 0;
const Ms = [];
let or = null
  , Mr = 0;
const V_ = Promise.resolve();
let k0 = null;
function hn(e) {
    const t = k0 || V_;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function T2(e) {
    let t = En + 1
      , n = _t.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , s = _t[r]
          , o = Zo(s);
        o < e || o === e && s.pre ? t = r + 1 : n = r
    }
    return t
}
function Ec(e) {
    (!_t.length || !_t.includes(e, Qo && e.allowRecurse ? En + 1 : En)) && (e.id == null ? _t.push(e) : _t.splice(T2(e.id), 0, e),
    K_())
}
function K_() {
    !Qo && !Ul && (Ul = !0,
    k0 = V_.then(G_))
}
function k2(e) {
    const t = _t.indexOf(e);
    t > En && _t.splice(t, 1)
}
function Ba(e) {
    oe(e) ? Ms.push(...e) : (!or || !or.includes(e, e.allowRecurse ? Mr + 1 : Mr)) && Ms.push(e),
    K_()
}
function gp(e, t, n=Qo ? En + 1 : 0) {
    for (; n < _t.length; n++) {
        const r = _t[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            _t.splice(n, 1),
            n--,
            r()
        }
    }
}
function Oa(e) {
    if (Ms.length) {
        const t = [...new Set(Ms)].sort( (n, r) => Zo(n) - Zo(r));
        if (Ms.length = 0,
        or) {
            or.push(...t);
            return
        }
        for (or = t,
        Mr = 0; Mr < or.length; Mr++)
            or[Mr]();
        or = null,
        Mr = 0
    }
}
const Zo = e => e.id == null ? 1 / 0 : e.id
  , R2 = (e, t) => {
    const n = Zo(e) - Zo(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function G_(e) {
    Ul = !1,
    Qo = !0,
    _t.sort(R2);
    try {
        for (En = 0; En < _t.length; En++) {
            const t = _t[En];
            t && t.active !== !1 && Ln(t, null, 14)
        }
    } finally {
        En = 0,
        _t.length = 0,
        Oa(),
        Qo = !1,
        k0 = null,
        (_t.length || Ms.length) && G_()
    }
}
let ws, Vi = [];
function X_(e, t) {
    var n, r;
    ws = e,
    ws ? (ws.enabled = !0,
    Vi.forEach( ({event: s, args: o}) => ws.emit(s, ...o)),
    Vi = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(o => {
        X_(o, t)
    }
    ),
    setTimeout( () => {
        ws || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null,
        Vi = [])
    }
    , 3e3)) : Vi = []
}
function I2(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || Le;
    let s = n;
    const o = t.startsWith("update:")
      , i = o && t.slice(7);
    if (i && i in r) {
        const l = `${i === "modelValue" ? "model" : i}Modifiers`
          , {number: f, trim: d} = r[l] || Le;
        d && (s = n.map(p => $e(p) ? p.trim() : p)),
        f && (s = n.map(Ra))
    }
    let a, c = r[a = Po(t)] || r[a = Po(xt(t))];
    !c && o && (c = r[a = Po(Wt(t))]),
    c && Vt(c, e, 6, s);
    const u = r[a + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        Vt(u, e, 6, s)
    }
}
function Y_(e, t, n=!1) {
    const r = t.emitsCache
      , s = r.get(e);
    if (s !== void 0)
        return s;
    const o = e.emits;
    let i = {}
      , a = !1;
    if (!ce(e)) {
        const c = u => {
            const l = Y_(u, t, !0);
            l && (a = !0,
            Ve(i, l))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !o && !a ? (Ne(e) && r.set(e, null),
    null) : (oe(o) ? o.forEach(c => i[c] = null) : Ve(i, o),
    Ne(e) && r.set(e, i),
    i)
}
function bc(e, t) {
    return !e || !vi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Wt(t)) || Se(e, t))
}
let rt = null
  , Sc = null;
function ei(e) {
    const t = rt;
    return rt = e,
    Sc = e && e.type.__scopeId || null,
    t
}
function D2(e) {
    Sc = e
}
function B2() {
    Sc = null
}
const O2 = e => Hn;
function Hn(e, t=rt, n) {
    if (!t || e._n)
        return e;
    const r = (...s) => {
        r._d && Yl(-1);
        const o = ei(t);
        let i;
        try {
            i = e(...s)
        } finally {
            ei(o),
            r._d && Yl(1)
        }
        return i
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function pa(e) {
    const {type: t, vnode: n, proxy: r, withProxy: s, propsOptions: [o], slots: i, attrs: a, emit: c, render: u, renderCache: l, props: f, data: d, setupState: p, ctx: m, inheritAttrs: h} = e
      , g = ei(e);
    let E, x;
    try {
        if (n.shapeFlag & 4) {
            const y = s || r
              , S = y;
            E = zt(u.call(S, y, l, f, p, d, m)),
            x = a
        } else {
            const y = t;
            E = zt(y.length > 1 ? y(f, {
                attrs: a,
                slots: i,
                emit: c
            }) : y(f, null)),
            x = t.props ? a : P2(a)
        }
    } catch (y) {
        Lo.length = 0,
        us(y, e, 1),
        E = Pe(yt)
    }
    let _ = E;
    if (x && h !== !1) {
        const y = Object.keys(x)
          , {shapeFlag: S} = _;
        y.length && S & 7 && (o && y.some(p0) && (x = N2(x, o)),
        _ = An(_, x))
    }
    return n.dirs && (_ = An(_),
    _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs),
    n.transition && (_.transition = n.transition),
    E = _,
    ei(g),
    E
}
function F2(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        if (Cn(s)) {
            if (s.type !== yt || s.children === "v-if") {
                if (n)
                    return;
                n = s
            }
        } else
            return
    }
    return n
}
const P2 = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || vi(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , N2 = (e, t) => {
    const n = {};
    for (const r in e)
        (!p0(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function M2(e, t, n) {
    const {props: r, children: s, component: o} = e
      , {props: i, children: a, patchFlag: c} = t
      , u = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return r ? _p(r, i, u) : !!i;
        if (c & 8) {
            const l = t.dynamicProps;
            for (let f = 0; f < l.length; f++) {
                const d = l[f];
                if (i[d] !== r[d] && !bc(u, d))
                    return !0
            }
        }
    } else
        return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? _p(r, i, u) : !0 : !!i;
    return !1
}
function _p(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (t[o] !== e[o] && !bc(n, o))
            return !0
    }
    return !1
}
function R0({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const I0 = "components"
  , L2 = "directives";
function H2(e, t) {
    return B0(I0, e, !0, t) || e
}
const J_ = Symbol.for("v-ndc");
function D0(e) {
    return $e(e) ? B0(I0, e, !1) || e : e || J_
}
function $2(e) {
    return B0(L2, e)
}
function B0(e, t, n=!0, r=!1) {
    const s = rt || ot;
    if (s) {
        const o = s.type;
        if (e === I0) {
            const a = tf(o, !1);
            if (a && (a === t || a === xt(t) || a === Ei(xt(t))))
                return o
        }
        const i = xp(s[e] || o[e], t) || xp(s.appContext[e], t);
        return !i && r ? o : i
    }
}
function xp(e, t) {
    return e && (e[t] || e[xt(t)] || e[Ei(xt(t))])
}
const Q_ = e => e.__isSuspense;
let jl = 0;
const U2 = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, s, o, i, a, c, u) {
        if (e == null)
            j2(t, n, r, s, o, i, a, c, u);
        else {
            if (o && o.deps > 0 && !e.suspense.isInFallback) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            z2(e, t, n, r, s, i, a, c, u)
        }
    },
    hydrate: W2,
    create: O0,
    normalize: q2
}
  , wc = U2;
function ti(e, t) {
    const n = e.props && e.props[t];
    ce(n) && n()
}
function j2(e, t, n, r, s, o, i, a, c) {
    const {p: u, o: {createElement: l}} = c
      , f = l("div")
      , d = e.suspense = O0(e, s, r, t, f, n, o, i, a, c);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, o, i),
    d.deps > 0 ? (ti(e, "onPending"),
    ti(e, "onFallback"),
    u(null, e.ssFallback, t, n, r, null, o, i),
    Ls(d, e.ssFallback)) : d.resolve(!1, !0)
}
function z2(e, t, n, r, s, o, i, a, {p: c, um: u, o: {createElement: l}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , p = t.ssFallback
      , {activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: E} = f;
    if (h)
        f.pendingBranch = d,
        cn(d, h) ? (c(h, d, f.hiddenContainer, null, s, f, o, i, a),
        f.deps <= 0 ? f.resolve() : g && (E || (c(m, p, n, r, s, null, o, i, a),
        Ls(f, p)))) : (f.pendingId = jl++,
        E ? (f.isHydrating = !1,
        f.activeBranch = h) : u(h, s, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = l("div"),
        g ? (c(null, d, f.hiddenContainer, null, s, f, o, i, a),
        f.deps <= 0 ? f.resolve() : (c(m, p, n, r, s, null, o, i, a),
        Ls(f, p))) : m && cn(d, m) ? (c(m, d, n, r, s, f, o, i, a),
        f.resolve(!0)) : (c(null, d, f.hiddenContainer, null, s, f, o, i, a),
        f.deps <= 0 && f.resolve()));
    else if (m && cn(d, m))
        c(m, d, n, r, s, f, o, i, a),
        Ls(f, d);
    else if (ti(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = jl++,
    c(null, d, f.hiddenContainer, null, s, f, o, i, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: x, pendingId: _} = f;
        x > 0 ? setTimeout( () => {
            f.pendingId === _ && f.fallback(p)
        }
        , x) : x === 0 && f.fallback(p)
    }
}
function O0(e, t, n, r, s, o, i, a, c, u, l=!1) {
    const {p: f, m: d, um: p, n: m, o: {parentNode: h, remove: g}} = u;
    let E;
    const x = V2(e);
    x && t != null && t.pendingBranch && (E = t.pendingId,
    t.deps++);
    const _ = e.props ? Ia(e.props.timeout) : void 0
      , y = o
      , S = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: i,
        container: r,
        hiddenContainer: s,
        deps: 0,
        pendingId: jl++,
        timeout: typeof _ == "number" ? _ : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !l,
        isHydrating: l,
        isUnmounted: !1,
        effects: [],
        resolve(v=!1, b=!1) {
            const {vnode: C, activeBranch: I, pendingBranch: w, pendingId: T, effects: R, parentComponent: D, container: z} = S;
            let X = !1;
            S.isHydrating ? S.isHydrating = !1 : v || (X = I && w.transition && w.transition.mode === "out-in",
            X && (I.transition.afterLeave = () => {
                T === S.pendingId && (d(w, z, o === y ? m(I) : o, 0),
                Ba(R))
            }
            ),
            I && (h(I.el) !== S.hiddenContainer && (o = m(I)),
            p(I, D, S, !0)),
            X || d(w, z, o, 0)),
            Ls(S, w),
            S.pendingBranch = null,
            S.isInFallback = !1;
            let O = S.parent
              , Z = !1;
            for (; O; ) {
                if (O.pendingBranch) {
                    O.effects.push(...R),
                    Z = !0;
                    break
                }
                O = O.parent
            }
            !Z && !X && Ba(R),
            S.effects = [],
            x && t && t.pendingBranch && E === t.pendingId && (t.deps--,
            t.deps === 0 && !b && t.resolve()),
            ti(C, "onResolve")
        },
        fallback(v) {
            if (!S.pendingBranch)
                return;
            const {vnode: b, activeBranch: C, parentComponent: I, container: w, namespace: T} = S;
            ti(b, "onFallback");
            const R = m(C)
              , D = () => {
                S.isInFallback && (f(null, v, w, R, I, null, T, a, c),
                Ls(S, v))
            }
              , z = v.transition && v.transition.mode === "out-in";
            z && (C.transition.afterLeave = D),
            S.isInFallback = !0,
            p(C, I, null, !0),
            z || D()
        },
        move(v, b, C) {
            S.activeBranch && d(S.activeBranch, v, b, C),
            S.container = v
        },
        next() {
            return S.activeBranch && m(S.activeBranch)
        },
        registerDep(v, b) {
            const C = !!S.pendingBranch;
            C && S.deps++;
            const I = v.vnode.el;
            v.asyncDep.catch(w => {
                us(w, v, 0)
            }
            ).then(w => {
                if (v.isUnmounted || S.isUnmounted || S.pendingId !== v.suspenseId)
                    return;
                v.asyncResolved = !0;
                const {vnode: T} = v;
                Zl(v, w, !1),
                I && (T.el = I);
                const R = !I && v.subTree.el;
                b(v, T, h(I || v.subTree.el), I ? null : m(v.subTree), S, i, c),
                R && g(R),
                R0(v, T.el),
                C && --S.deps === 0 && S.resolve()
            }
            )
        },
        unmount(v, b) {
            S.isUnmounted = !0,
            S.activeBranch && p(S.activeBranch, n, v, b),
            S.pendingBranch && p(S.pendingBranch, n, v, b)
        }
    };
    return S
}
function W2(e, t, n, r, s, o, i, a, c) {
    const u = t.suspense = O0(t, r, n, e.parentNode, document.createElement("div"), null, s, o, i, a, !0)
      , l = c(e, u.pendingBranch = t.ssContent, n, u, o, i);
    return u.deps === 0 && u.resolve(!1, !0),
    l
}
function q2(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = yp(r ? n.default : n),
    e.ssFallback = r ? yp(n.fallback) : Pe(yt)
}
function yp(e) {
    let t;
    if (ce(e)) {
        const n = ts && e._c;
        n && (e._d = !1,
        pe()),
        e = e(),
        n && (e._d = !0,
        t = Dt,
        Ox())
    }
    return oe(e) && (e = F2(e)),
    e = zt(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)),
    e
}
function Z_(e, t) {
    t && t.pendingBranch ? oe(e) ? t.effects.push(...e) : t.effects.push(e) : Ba(e)
}
function Ls(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let s = t.el;
    for (; !s && t.component; )
        t = t.component.subTree,
        s = t.el;
    n.el = s,
    r && r.subTree === n && (r.vnode.el = s,
    R0(r, s))
}
function V2(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
const ex = Symbol.for("v-scx")
  , tx = () => qe(ex);
function K2(e, t) {
    return bi(e, null, t)
}
function nx(e, t) {
    return bi(e, null, {
        flush: "post"
    })
}
function rx(e, t) {
    return bi(e, null, {
        flush: "sync"
    })
}
const Ki = {};
function Bt(e, t, n) {
    return bi(e, t, n)
}
function bi(e, t, {immediate: n, deep: r, flush: s, once: o, onTrack: i, onTrigger: a}=Le) {
    if (t && o) {
        const v = t;
        t = (...b) => {
            v(...b),
            S()
        }
    }
    const c = ot
      , u = v => r === !0 ? v : Lr(v, r === !1 ? 1 : void 0);
    let l, f = !1, d = !1;
    if (Xe(e) ? (l = () => e.value,
    f = Yo(e)) : Mn(e) ? (l = () => u(e),
    f = !0) : oe(e) ? (d = !0,
    f = e.some(v => Mn(v) || Yo(v)),
    l = () => e.map(v => {
        if (Xe(v))
            return v.value;
        if (Mn(v))
            return u(v);
        if (ce(v))
            return Ln(v, c, 2)
    }
    )) : ce(e) ? t ? l = () => Ln(e, c, 2) : l = () => (p && p(),
    Vt(e, c, 3, [m])) : l = Tt,
    t && r) {
        const v = l;
        l = () => Lr(v())
    }
    let p, m = v => {
        p = _.onStop = () => {
            Ln(v, c, 4),
            p = _.onStop = void 0
        }
    }
    , h;
    if (wi)
        if (m = Tt,
        t ? n && Vt(t, c, 3, [l(), d ? [] : void 0, m]) : l(),
        s === "sync") {
            const v = tx();
            h = v.__watcherHandles || (v.__watcherHandles = [])
        } else
            return Tt;
    let g = d ? new Array(e.length).fill(Ki) : Ki;
    const E = () => {
        if (!(!_.active || !_.dirty))
            if (t) {
                const v = _.run();
                (r || f || (d ? v.some( (b, C) => fn(b, g[C])) : fn(v, g))) && (p && p(),
                Vt(t, c, 3, [v, g === Ki ? void 0 : d && g[0] === Ki ? [] : g, m]),
                g = v)
            } else
                _.run()
    }
    ;
    E.allowRecurse = !!t;
    let x;
    s === "sync" ? x = E : s === "post" ? x = () => ht(E, c && c.suspense) : (E.pre = !0,
    c && (E.id = c.uid),
    x = () => Ec(E));
    const _ = new Ws(l,Tt,x)
      , y = mc()
      , S = () => {
        _.stop(),
        y && h0(y.effects, _)
    }
    ;
    return t ? n ? E() : g = _.run() : s === "post" ? ht(_.run.bind(_), c && c.suspense) : _.run(),
    h && h.push(S),
    S
}
function G2(e, t, n) {
    const r = this.proxy
      , s = $e(e) ? e.includes(".") ? sx(r, e) : () => r[e] : e.bind(r, r);
    let o;
    ce(t) ? o = t : (o = t.handler,
    n = t);
    const i = ns(this)
      , a = bi(s, o.bind(r), n);
    return i(),
    a
}
function sx(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++)
            r = r[n[s]];
        return r
    }
}
function Lr(e, t, n=0, r) {
    if (!Ne(e) || e.__v_skip)
        return e;
    if (t && t > 0) {
        if (n >= t)
            return e;
        n++
    }
    if (r = r || new Set,
    r.has(e))
        return e;
    if (r.add(e),
    Xe(e))
        Lr(e.value, t, n, r);
    else if (oe(e))
        for (let s = 0; s < e.length; s++)
            Lr(e[s], t, n, r);
    else if (is(e) || Os(e))
        e.forEach(s => {
            Lr(s, t, n, r)
        }
        );
    else if (E_(e))
        for (const s in e)
            Lr(e[s], t, n, r);
    return e
}
function F0(e, t) {
    if (rt === null)
        return e;
    const n = Oc(rt) || rt.proxy
      , r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let[o,i,a,c=Le] = t[s];
        o && (ce(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && Lr(i),
        r.push({
            dir: o,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: a,
            modifiers: c
        }))
    }
    return e
}
function yn(e, t, n, r) {
    const s = e.dirs
      , o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        o && (a.oldValue = o[i].value);
        let c = a.dir[r];
        c && (Ar(),
        Vt(c, n, 8, [e.el, a, e, t]),
        Tr())
    }
}
const ir = Symbol("_leaveCb")
  , Gi = Symbol("_enterCb");
function P0() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return kr( () => {
        e.isMounted = !0
    }
    ),
    kc( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const Xt = [Function, Array]
  , N0 = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Xt,
    onEnter: Xt,
    onAfterEnter: Xt,
    onEnterCancelled: Xt,
    onBeforeLeave: Xt,
    onLeave: Xt,
    onAfterLeave: Xt,
    onLeaveCancelled: Xt,
    onBeforeAppear: Xt,
    onAppear: Xt,
    onAfterAppear: Xt,
    onAppearCancelled: Xt
}
  , X2 = {
    name: "BaseTransition",
    props: N0,
    setup(e, {slots: t}) {
        const n = Et()
          , r = P0();
        return () => {
            const s = t.default && Cc(t.default(), !0);
            if (!s || !s.length)
                return;
            let o = s[0];
            if (s.length > 1) {
                for (const d of s)
                    if (d.type !== yt) {
                        o = d;
                        break
                    }
            }
            const i = be(e)
              , {mode: a} = i;
            if (r.isLeaving)
                return uu(o);
            const c = vp(o);
            if (!c)
                return uu(o);
            const u = Vs(c, i, r, n);
            Zr(c, u);
            const l = n.subTree
              , f = l && vp(l);
            if (f && f.type !== yt && !cn(c, f)) {
                const d = Vs(f, i, r, n);
                if (Zr(f, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = () => {
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    uu(o);
                a === "in-out" && c.type !== yt && (d.delayLeave = (p, m, h) => {
                    const g = ix(r, f);
                    g[String(f.key)] = f,
                    p[ir] = () => {
                        m(),
                        p[ir] = void 0,
                        delete u.delayedLeave
                    }
                    ,
                    u.delayedLeave = h
                }
                )
            }
            return o
        }
    }
}
  , ox = X2;
function ix(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Vs(e, t, n, r) {
    const {appear: s, mode: o, persisted: i=!1, onBeforeEnter: a, onEnter: c, onAfterEnter: u, onEnterCancelled: l, onBeforeLeave: f, onLeave: d, onAfterLeave: p, onLeaveCancelled: m, onBeforeAppear: h, onAppear: g, onAfterAppear: E, onAppearCancelled: x} = t
      , _ = String(e.key)
      , y = ix(n, e)
      , S = (C, I) => {
        C && Vt(C, r, 9, I)
    }
      , v = (C, I) => {
        const w = I[1];
        S(C, I),
        oe(C) ? C.every(T => T.length <= 1) && w() : C.length <= 1 && w()
    }
      , b = {
        mode: o,
        persisted: i,
        beforeEnter(C) {
            let I = a;
            if (!n.isMounted)
                if (s)
                    I = h || a;
                else
                    return;
            C[ir] && C[ir](!0);
            const w = y[_];
            w && cn(e, w) && w.el[ir] && w.el[ir](),
            S(I, [C])
        },
        enter(C) {
            let I = c
              , w = u
              , T = l;
            if (!n.isMounted)
                if (s)
                    I = g || c,
                    w = E || u,
                    T = x || l;
                else
                    return;
            let R = !1;
            const D = C[Gi] = z => {
                R || (R = !0,
                z ? S(T, [C]) : S(w, [C]),
                b.delayedLeave && b.delayedLeave(),
                C[Gi] = void 0)
            }
            ;
            I ? v(I, [C, D]) : D()
        },
        leave(C, I) {
            const w = String(e.key);
            if (C[Gi] && C[Gi](!0),
            n.isUnmounting)
                return I();
            S(f, [C]);
            let T = !1;
            const R = C[ir] = D => {
                T || (T = !0,
                I(),
                D ? S(m, [C]) : S(p, [C]),
                C[ir] = void 0,
                y[w] === e && delete y[w])
            }
            ;
            y[w] = e,
            d ? v(d, [C, R]) : R()
        },
        clone(C) {
            return Vs(C, t, n, r)
        }
    };
    return b
}
function uu(e) {
    if (Si(e))
        return e = An(e),
        e.children = null,
        e
}
function vp(e) {
    if (!Si(e))
        return e;
    const {shapeFlag: t, children: n} = e;
    if (t & 16)
        return n[0];
    if (t & 32 && ce(n.default))
        return n.default()
}
function Zr(e, t) {
    e.shapeFlag & 6 && e.component ? Zr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Cc(e, t=!1, n) {
    let r = []
      , s = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === ut ? (i.patchFlag & 128 && s++,
        r = r.concat(Cc(i.children, t, a))) : (t || i.type !== yt) && r.push(a != null ? An(i, {
            key: a
        }) : i)
    }
    if (s > 1)
        for (let o = 0; o < r.length; o++)
            r[o].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function xe(e, t) {
    return ce(e) ? Ve({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Wr = e => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function zl(e) {
    ce(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: r, delay: s=200, timeout: o, suspensible: i=!0, onError: a} = e;
    let c = null, u, l = 0;
    const f = () => (l++,
    c = null,
    d())
      , d = () => {
        let p;
        return c || (p = c = t().catch(m => {
            if (m = m instanceof Error ? m : new Error(String(m)),
            a)
                return new Promise( (h, g) => {
                    a(m, () => h(f()), () => g(m), l + 1)
                }
                );
            throw m
        }
        ).then(m => p !== c && c ? c : (m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default),
        u = m,
        m)))
    }
    ;
    return xe({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        get __asyncResolved() {
            return u
        },
        setup() {
            const p = ot;
            if (u)
                return () => lu(u, p);
            const m = x => {
                c = null,
                us(x, p, 13, !r)
            }
            ;
            if (i && p.suspense || wi)
                return d().then(x => () => lu(x, p)).catch(x => (m(x),
                () => r ? Pe(r, {
                    error: x
                }) : null));
            const h = We(!1)
              , g = We()
              , E = We(!!s);
            return s && setTimeout( () => {
                E.value = !1
            }
            , s),
            o != null && setTimeout( () => {
                if (!h.value && !g.value) {
                    const x = new Error(`Async component timed out after ${o}ms.`);
                    m(x),
                    g.value = x
                }
            }
            , o),
            d().then( () => {
                h.value = !0,
                p.parent && Si(p.parent.vnode) && (p.parent.effect.dirty = !0,
                Ec(p.parent.update))
            }
            ).catch(x => {
                m(x),
                g.value = x
            }
            ),
            () => {
                if (h.value && u)
                    return lu(u, p);
                if (g.value && r)
                    return Pe(r, {
                        error: g.value
                    });
                if (n && !E.value)
                    return Pe(n)
            }
        }
    })
}
function lu(e, t) {
    const {ref: n, props: r, children: s, ce: o} = t.vnode
      , i = Pe(e, r, s);
    return i.ref = n,
    i.ce = o,
    delete t.vnode.ce,
    i
}
const Si = e => e.type.__isKeepAlive
  , Y2 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = Et()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const x = t.default && t.default();
                return x && x.length === 1 ? x[0] : x
            }
            ;
        const s = new Map
          , o = new Set;
        let i = null;
        const a = n.suspense
          , {renderer: {p: c, m: u, um: l, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (x, _, y, S, v) => {
            const b = x.component;
            u(x, _, y, 0, a),
            c(b.vnode, x, _, y, b, a, S, x.slotScopeIds, v),
            ht( () => {
                b.isDeactivated = !1,
                b.a && Ps(b.a);
                const C = x.props && x.props.onVnodeMounted;
                C && kt(C, b.parent, x)
            }
            , a)
        }
        ,
        r.deactivate = x => {
            const _ = x.component;
            u(x, d, null, 1, a),
            ht( () => {
                _.da && Ps(_.da);
                const y = x.props && x.props.onVnodeUnmounted;
                y && kt(y, _.parent, x),
                _.isDeactivated = !0
            }
            , a)
        }
        ;
        function p(x) {
            fu(x),
            l(x, n, a, !0)
        }
        function m(x) {
            s.forEach( (_, y) => {
                const S = tf(_.type);
                S && (!x || !x(S)) && h(y)
            }
            )
        }
        function h(x) {
            const _ = s.get(x);
            !i || !cn(_, i) ? p(_) : i && fu(i),
            s.delete(x),
            o.delete(x)
        }
        Bt( () => [e.include, e.exclude], ([x,_]) => {
            x && m(y => Bo(x, y)),
            _ && m(y => !Bo(_, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let g = null;
        const E = () => {
            g != null && s.set(g, du(n.subTree))
        }
        ;
        return kr(E),
        Tc(E),
        kc( () => {
            s.forEach(x => {
                const {subTree: _, suspense: y} = n
                  , S = du(_);
                if (x.type === S.type && x.key === S.key) {
                    fu(S);
                    const v = S.component.da;
                    v && ht(v, y);
                    return
                }
                p(x)
            }
            )
        }
        ),
        () => {
            if (g = null,
            !t.default)
                return i = null;
            const x = t.default()
              , _ = x[0];
            if (x.length > 1)
                return i = null,
                x;
            if (!Cn(_) || !(_.shapeFlag & 4) && !(_.shapeFlag & 128))
                return i = null,
                _;
            let y = du(_);
            const S = y.type
              , v = tf(Wr(y) ? y.type.__asyncResolved || {} : S)
              , {include: b, exclude: C, max: I} = e;
            if (b && (!v || !Bo(b, v)) || C && v && Bo(C, v))
                return i = y,
                _;
            const w = y.key == null ? S : y.key
              , T = s.get(w);
            return y.el && (y = An(y),
            _.shapeFlag & 128 && (_.ssContent = y)),
            g = w,
            T ? (y.el = T.el,
            y.component = T.component,
            y.transition && Zr(y, y.transition),
            y.shapeFlag |= 512,
            o.delete(w),
            o.add(w)) : (o.add(w),
            I && o.size > parseInt(I, 10) && h(o.values().next().value)),
            y.shapeFlag |= 256,
            i = y,
            Q_(_.type) ? _ : y
        }
    }
}
  , ax = Y2;
function Bo(e, t) {
    return oe(e) ? e.some(n => Bo(n, t)) : $e(e) ? e.split(",").includes(t) : Db(e) ? e.test(t) : !1
}
function cx(e, t) {
    lx(e, "a", t)
}
function ux(e, t) {
    lx(e, "da", t)
}
function lx(e, t, n=ot) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s; ) {
            if (s.isDeactivated)
                return;
            s = s.parent
        }
        return e()
    }
    );
    if (Ac(t, r, n),
    n) {
        let s = n.parent;
        for (; s && s.parent; )
            Si(s.parent.vnode) && J2(r, t, n, s),
            s = s.parent
    }
}
function J2(e, t, n, r) {
    const s = Ac(t, e, r, !0);
    Rc( () => {
        h0(r[t], s)
    }
    , n)
}
function fu(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function du(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function Ac(e, t, n=ot, r=!1) {
    if (n) {
        const s = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...i) => {
            if (n.isUnmounted)
                return;
            Ar();
            const a = ns(n)
              , c = Vt(t, n, e, i);
            return a(),
            Tr(),
            c
        }
        );
        return r ? s.unshift(o) : s.push(o),
        o
    }
}
const Gn = e => (t, n=ot) => (!wi || e === "sp") && Ac(e, (...r) => t(...r), n)
  , M0 = Gn("bm")
  , kr = Gn("m")
  , fx = Gn("bu")
  , Tc = Gn("u")
  , kc = Gn("bum")
  , Rc = Gn("um")
  , dx = Gn("sp")
  , px = Gn("rtg")
  , hx = Gn("rtc");
function L0(e, t=ot) {
    Ac("ec", e, t)
}
function Q2(e, t, n, r) {
    let s;
    const o = n && n[r];
    if (oe(e) || $e(e)) {
        s = new Array(e.length);
        for (let i = 0, a = e.length; i < a; i++)
            s[i] = t(e[i], i, void 0, o && o[i])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let i = 0; i < e; i++)
            s[i] = t(i + 1, i, void 0, o && o[i])
    } else if (Ne(e))
        if (e[Symbol.iterator])
            s = Array.from(e, (i, a) => t(i, a, void 0, o && o[a]));
        else {
            const i = Object.keys(e);
            s = new Array(i.length);
            for (let a = 0, c = i.length; a < c; a++) {
                const u = i[a];
                s[a] = t(e[u], u, a, o && o[a])
            }
        }
    else
        s = [];
    return n && (n[r] = s),
    s
}
function Z2(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (oe(r))
            for (let s = 0; s < r.length; s++)
                e[r[s].name] = r[s].fn;
        else
            r && (e[r.name] = r.key ? (...s) => {
                const o = r.fn(...s);
                return o && (o.key = r.key),
                o
            }
            : r.fn)
    }
    return e
}
function Ic(e, t, n={}, r, s) {
    if (rt.isCE || rt.parent && Wr(rt.parent) && rt.parent.isCE)
        return t !== "default" && (n.name = t),
        Pe("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1),
    pe();
    const i = o && mx(o(n))
      , a = It(ut, {
        key: n.key || i && i.key || `_${t}`
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function mx(e) {
    return e.some(t => Cn(t) ? !(t.type === yt || t.type === ut && !mx(t.children)) : !0) ? e : null
}
function eS(e, t) {
    const n = {};
    for (const r in e)
        n[t && /[A-Z]/.test(r) ? `on:${r}` : Po(r)] = e[r];
    return n
}
const Wl = e => e ? Mx(e) ? Oc(e) || e.proxy : Wl(e.parent) : null
  , No = Ve(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Wl(e.parent),
    $root: e => Wl(e.root),
    $emit: e => e.emit,
    $options: e => H0(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0,
        Ec(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = hn.bind(e.proxy)),
    $watch: e => G2.bind(e)
})
  , pu = (e, t) => e !== Le && !e.__isScriptSetup && Se(e, t)
  , ql = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: c} = e;
        let u;
        if (t[0] !== "$") {
            const p = i[t];
            if (p !== void 0)
                switch (p) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (pu(r, t))
                    return i[t] = 1,
                    r[t];
                if (s !== Le && Se(s, t))
                    return i[t] = 2,
                    s[t];
                if ((u = e.propsOptions[0]) && Se(u, t))
                    return i[t] = 3,
                    o[t];
                if (n !== Le && Se(n, t))
                    return i[t] = 4,
                    n[t];
                Vl && (i[t] = 0)
            }
        }
        const l = No[t];
        let f, d;
        if (l)
            return t === "$attrs" && Ft(e.attrs, "get", ""),
            l(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== Le && Se(n, t))
            return i[t] = 4,
            n[t];
        if (d = c.config.globalProperties,
        Se(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: s, ctx: o} = e;
        return pu(s, t) ? (s[t] = n,
        !0) : r !== Le && Se(r, t) ? (r[t] = n,
        !0) : Se(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o}}, i) {
        let a;
        return !!n[i] || e !== Le && Se(e, i) || pu(t, i) || (a = o[0]) && Se(a, i) || Se(r, i) || Se(No, i) || Se(s.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Se(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
}
  , tS = Ve({}, ql, {
    get(e, t) {
        if (t !== Symbol.unscopables)
            return ql.get(e, t, e)
    },
    has(e, t) {
        return t[0] !== "_" && !Nb(t)
    }
});
function nS() {
    return null
}
function rS() {
    return null
}
function sS(e) {}
function oS(e) {}
function iS() {
    return null
}
function aS() {}
function cS(e, t) {
    return null
}
function uS() {
    return gx().slots
}
function lS() {
    return gx().attrs
}
function gx() {
    const e = Et();
    return e.setupContext || (e.setupContext = $x(e))
}
function ni(e) {
    return oe(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function fS(e, t) {
    const n = ni(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let s = n[r];
        s ? oe(s) || ce(s) ? s = n[r] = {
            type: s,
            default: t[r]
        } : s.default = t[r] : s === null && (s = n[r] = {
            default: t[r]
        }),
        s && t[`__skip_${r}`] && (s.skipFactory = !0)
    }
    return n
}
function dS(e, t) {
    return !e || !t ? e || t : oe(e) && oe(t) ? e.concat(t) : Ve({}, ni(e), ni(t))
}
function pS(e, t) {
    const n = {};
    for (const r in e)
        t.includes(r) || Object.defineProperty(n, r, {
            enumerable: !0,
            get: () => e[r]
        });
    return n
}
function hS(e) {
    const t = Et();
    let n = e();
    return Ql(),
    m0(n) && (n = n.catch(r => {
        throw ns(t),
        r
    }
    )),
    [n, () => ns(t)]
}
let Vl = !0;
function mS(e) {
    const t = H0(e)
      , n = e.proxy
      , r = e.ctx;
    Vl = !1,
    t.beforeCreate && Ep(t.beforeCreate, e, "bc");
    const {data: s, computed: o, methods: i, watch: a, provide: c, inject: u, created: l, beforeMount: f, mounted: d, beforeUpdate: p, updated: m, activated: h, deactivated: g, beforeDestroy: E, beforeUnmount: x, destroyed: _, unmounted: y, render: S, renderTracked: v, renderTriggered: b, errorCaptured: C, serverPrefetch: I, expose: w, inheritAttrs: T, components: R, directives: D, filters: z} = t;
    if (u && gS(u, r, null),
    i)
        for (const Z in i) {
            const H = i[Z];
            ce(H) && (r[Z] = H.bind(n))
        }
    if (s) {
        const Z = s.call(n, n);
        Ne(Z) && (e.data = kn(Z))
    }
    if (Vl = !0,
    o)
        for (const Z in o) {
            const H = o[Z]
              , ie = ce(H) ? H.bind(n, n) : ce(H.get) ? H.get.bind(n, n) : Tt
              , le = !ce(H) && ce(H.set) ? H.set.bind(n) : Tt
              , L = me({
                get: ie,
                set: le
            });
            Object.defineProperty(r, Z, {
                enumerable: !0,
                configurable: !0,
                get: () => L.value,
                set: j => L.value = j
            })
        }
    if (a)
        for (const Z in a)
            _x(a[Z], r, n, Z);
    if (c) {
        const Z = ce(c) ? c.call(n) : c;
        Reflect.ownKeys(Z).forEach(H => {
            $n(H, Z[H])
        }
        )
    }
    l && Ep(l, e, "c");
    function O(Z, H) {
        oe(H) ? H.forEach(ie => Z(ie.bind(n))) : H && Z(H.bind(n))
    }
    if (O(M0, f),
    O(kr, d),
    O(fx, p),
    O(Tc, m),
    O(cx, h),
    O(ux, g),
    O(L0, C),
    O(hx, v),
    O(px, b),
    O(kc, x),
    O(Rc, y),
    O(dx, I),
    oe(w))
        if (w.length) {
            const Z = e.exposed || (e.exposed = {});
            w.forEach(H => {
                Object.defineProperty(Z, H, {
                    get: () => n[H],
                    set: ie => n[H] = ie
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    S && e.render === Tt && (e.render = S),
    T != null && (e.inheritAttrs = T),
    R && (e.components = R),
    D && (e.directives = D)
}
function gS(e, t, n=Tt) {
    oe(e) && (e = Kl(e));
    for (const r in e) {
        const s = e[r];
        let o;
        Ne(s) ? "default"in s ? o = qe(s.from || r, s.default, !0) : o = qe(s.from || r) : o = qe(s),
        Xe(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[r] = o
    }
}
function Ep(e, t, n) {
    Vt(oe(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function _x(e, t, n, r) {
    const s = r.includes(".") ? sx(n, r) : () => n[r];
    if ($e(e)) {
        const o = t[e];
        ce(o) && Bt(s, o)
    } else if (ce(e))
        Bt(s, e.bind(n));
    else if (Ne(e))
        if (oe(e))
            e.forEach(o => _x(o, t, n, r));
        else {
            const o = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
            ce(o) && Bt(s, o, e)
        }
}
function H0(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: s, optionsCache: o, config: {optionMergeStrategies: i}} = e.appContext
      , a = o.get(t);
    let c;
    return a ? c = a : !s.length && !n && !r ? c = t : (c = {},
    s.length && s.forEach(u => Fa(c, u, i, !0)),
    Fa(c, t, i)),
    Ne(t) && o.set(t, c),
    c
}
function Fa(e, t, n, r=!1) {
    const {mixins: s, extends: o} = t;
    o && Fa(e, o, n, !0),
    s && s.forEach(i => Fa(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = _S[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const _S = {
    data: bp,
    props: Sp,
    emits: Sp,
    methods: Oo,
    computed: Oo,
    beforeCreate: St,
    created: St,
    beforeMount: St,
    mounted: St,
    beforeUpdate: St,
    updated: St,
    beforeDestroy: St,
    beforeUnmount: St,
    destroyed: St,
    unmounted: St,
    activated: St,
    deactivated: St,
    errorCaptured: St,
    serverPrefetch: St,
    components: Oo,
    directives: Oo,
    watch: yS,
    provide: bp,
    inject: xS
};
function bp(e, t) {
    return t ? e ? function() {
        return Ve(ce(e) ? e.call(this, this) : e, ce(t) ? t.call(this, this) : t)
    }
    : t : e
}
function xS(e, t) {
    return Oo(Kl(e), Kl(t))
}
function Kl(e) {
    if (oe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function St(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Oo(e, t) {
    return e ? Ve(Object.create(null), e, t) : t
}
function Sp(e, t) {
    return e ? oe(e) && oe(t) ? [...new Set([...e, ...t])] : Ve(Object.create(null), ni(e), ni(t ?? {})) : t
}
function yS(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = Ve(Object.create(null), e);
    for (const r in t)
        n[r] = St(e[r], t[r]);
    return n
}
function xx() {
    return {
        app: null,
        config: {
            isNativeTag: Rb,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let vS = 0;
function ES(e, t) {
    return function(r, s=null) {
        ce(r) || (r = Ve({}, r)),
        s != null && !Ne(s) && (s = null);
        const o = xx()
          , i = new WeakSet;
        let a = !1;
        const c = o.app = {
            _uid: vS++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: q0,
            get config() {
                return o.config
            },
            set config(u) {},
            use(u, ...l) {
                return i.has(u) || (u && ce(u.install) ? (i.add(u),
                u.install(c, ...l)) : ce(u) && (i.add(u),
                u(c, ...l))),
                c
            },
            mixin(u) {
                return o.mixins.includes(u) || o.mixins.push(u),
                c
            },
            component(u, l) {
                return l ? (o.components[u] = l,
                c) : o.components[u]
            },
            directive(u, l) {
                return l ? (o.directives[u] = l,
                c) : o.directives[u]
            },
            mount(u, l, f) {
                if (!a) {
                    const d = Pe(r, s);
                    return d.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    l && t ? t(d, u) : e(d, u, f),
                    a = !0,
                    c._container = u,
                    u.__vue_app__ = c,
                    Oc(d.component) || d.component.proxy
                }
            },
            unmount() {
                a && (e(null, c._container),
                delete c._container.__vue_app__)
            },
            provide(u, l) {
                return o.provides[u] = l,
                c
            },
            runWithContext(u) {
                const l = Hs;
                Hs = c;
                try {
                    return u()
                } finally {
                    Hs = l
                }
            }
        };
        return c
    }
}
let Hs = null;
function $n(e, t) {
    if (ot) {
        let n = ot.provides;
        const r = ot.parent && ot.parent.provides;
        r === n && (n = ot.provides = Object.create(r)),
        n[e] = t
    }
}
function qe(e, t, n=!1) {
    const r = ot || rt;
    if (r || Hs) {
        const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Hs._context.provides;
        if (s && e in s)
            return s[e];
        if (arguments.length > 1)
            return n && ce(t) ? t.call(r && r.proxy) : t
    }
}
function Dc() {
    return !!(ot || rt || Hs)
}
const yx = Object.create(null)
  , vx = () => Object.create(yx)
  , Ex = e => Object.getPrototypeOf(e) === yx;
function bS(e, t, n, r=!1) {
    const s = {}
      , o = vx();
    e.propsDefaults = Object.create(null),
    bx(e, t, s, o);
    for (const i in e.propsOptions[0])
        i in s || (s[i] = void 0);
    n ? e.props = r ? s : cs(s) : e.type.props ? e.props = s : e.props = o,
    e.attrs = o
}
function SS(e, t, n, r) {
    const {props: s, attrs: o, vnode: {patchFlag: i}} = e
      , a = be(s)
      , [c] = e.propsOptions;
    let u = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const l = e.vnode.dynamicProps;
            for (let f = 0; f < l.length; f++) {
                let d = l[f];
                if (bc(e.emitsOptions, d))
                    continue;
                const p = t[d];
                if (c)
                    if (Se(o, d))
                        p !== o[d] && (o[d] = p,
                        u = !0);
                    else {
                        const m = xt(d);
                        s[m] = Gl(c, a, m, p, e, !1)
                    }
                else
                    p !== o[d] && (o[d] = p,
                    u = !0)
            }
        }
    } else {
        bx(e, t, s, o) && (u = !0);
        let l;
        for (const f in a)
            (!t || !Se(t, f) && ((l = Wt(f)) === f || !Se(t, l))) && (c ? n && (n[f] !== void 0 || n[l] !== void 0) && (s[f] = Gl(c, a, f, void 0, e, !0)) : delete s[f]);
        if (o !== a)
            for (const f in o)
                (!t || !Se(t, f)) && (delete o[f],
                u = !0)
    }
    u && Nn(e.attrs, "set", "")
}
function bx(e, t, n, r) {
    const [s,o] = e.propsOptions;
    let i = !1, a;
    if (t)
        for (let c in t) {
            if (Fs(c))
                continue;
            const u = t[c];
            let l;
            s && Se(s, l = xt(c)) ? !o || !o.includes(l) ? n[l] = u : (a || (a = {}))[l] = u : bc(e.emitsOptions, c) || (!(c in r) || u !== r[c]) && (r[c] = u,
            i = !0)
        }
    if (o) {
        const c = be(n)
          , u = a || Le;
        for (let l = 0; l < o.length; l++) {
            const f = o[l];
            n[f] = Gl(s, c, f, u[f], e, !Se(u, f))
        }
    }
    return i
}
function Gl(e, t, n, r, s, o) {
    const i = e[n];
    if (i != null) {
        const a = Se(i, "default");
        if (a && r === void 0) {
            const c = i.default;
            if (i.type !== Function && !i.skipFactory && ce(c)) {
                const {propsDefaults: u} = s;
                if (n in u)
                    r = u[n];
                else {
                    const l = ns(s);
                    r = u[n] = c.call(null, t),
                    l()
                }
            } else
                r = c
        }
        i[0] && (o && !a ? r = !1 : i[1] && (r === "" || r === Wt(n)) && (r = !0))
    }
    return r
}
function Sx(e, t, n=!1) {
    const r = t.propsCache
      , s = r.get(e);
    if (s)
        return s;
    const o = e.props
      , i = {}
      , a = [];
    let c = !1;
    if (!ce(e)) {
        const l = f => {
            c = !0;
            const [d,p] = Sx(f, t, !0);
            Ve(i, d),
            p && a.push(...p)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    if (!o && !c)
        return Ne(e) && r.set(e, Bs),
        Bs;
    if (oe(o))
        for (let l = 0; l < o.length; l++) {
            const f = xt(o[l]);
            wp(f) && (i[f] = Le)
        }
    else if (o)
        for (const l in o) {
            const f = xt(l);
            if (wp(f)) {
                const d = o[l]
                  , p = i[f] = oe(d) || ce(d) ? {
                    type: d
                } : Ve({}, d);
                if (p) {
                    const m = Tp(Boolean, p.type)
                      , h = Tp(String, p.type);
                    p[0] = m > -1,
                    p[1] = h < 0 || m < h,
                    (m > -1 || Se(p, "default")) && a.push(f)
                }
            }
        }
    const u = [i, a];
    return Ne(e) && r.set(e, u),
    u
}
function wp(e) {
    return e[0] !== "$" && !Fs(e)
}
function Cp(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function Ap(e, t) {
    return Cp(e) === Cp(t)
}
function Tp(e, t) {
    return oe(t) ? t.findIndex(n => Ap(n, e)) : ce(t) && Ap(t, e) ? 0 : -1
}
const wx = e => e[0] === "_" || e === "$stable"
  , $0 = e => oe(e) ? e.map(zt) : [zt(e)]
  , wS = (e, t, n) => {
    if (t._n)
        return t;
    const r = Hn( (...s) => $0(t(...s)), n);
    return r._c = !1,
    r
}
  , Cx = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
        if (wx(s))
            continue;
        const o = e[s];
        if (ce(o))
            t[s] = wS(s, o, r);
        else if (o != null) {
            const i = $0(o);
            t[s] = () => i
        }
    }
}
  , Ax = (e, t) => {
    const n = $0(t);
    e.slots.default = () => n
}
  , CS = (e, t) => {
    const n = e.slots = vx();
    if (e.vnode.shapeFlag & 32) {
        const r = t._;
        r ? (Ve(n, t),
        b_(n, "_", r)) : Cx(t, n)
    } else
        t && Ax(e, t)
}
  , AS = (e, t, n) => {
    const {vnode: r, slots: s} = e;
    let o = !0
      , i = Le;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? o = !1 : (Ve(s, t),
        !n && a === 1 && delete s._) : (o = !t.$stable,
        Cx(t, s)),
        i = t
    } else
        t && (Ax(e, t),
        i = {
            default: 1
        });
    if (o)
        for (const a in s)
            !wx(a) && i[a] == null && delete s[a]
}
;
function Pa(e, t, n, r, s=!1) {
    if (oe(e)) {
        e.forEach( (d, p) => Pa(d, t && (oe(t) ? t[p] : t), n, r, s));
        return
    }
    if (Wr(r) && !s)
        return;
    const o = r.shapeFlag & 4 ? Oc(r.component) || r.component.proxy : r.el
      , i = s ? null : o
      , {i: a, r: c} = e
      , u = t && t.r
      , l = a.refs === Le ? a.refs = {} : a.refs
      , f = a.setupState;
    if (u != null && u !== c && ($e(u) ? (l[u] = null,
    Se(f, u) && (f[u] = null)) : Xe(u) && (u.value = null)),
    ce(c))
        Ln(c, a, 12, [i, l]);
    else {
        const d = $e(c)
          , p = Xe(c);
        if (d || p) {
            const m = () => {
                if (e.f) {
                    const h = d ? Se(f, c) ? f[c] : l[c] : c.value;
                    s ? oe(h) && h0(h, o) : oe(h) ? h.includes(o) || h.push(o) : d ? (l[c] = [o],
                    Se(f, c) && (f[c] = l[c])) : (c.value = [o],
                    e.k && (l[e.k] = c.value))
                } else
                    d ? (l[c] = i,
                    Se(f, c) && (f[c] = i)) : p && (c.value = i,
                    e.k && (l[e.k] = i))
            }
            ;
            i ? (m.id = -1,
            ht(m, n)) : m()
        }
    }
}
let Zn = !1;
const TS = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , kS = e => e.namespaceURI.includes("MathML")
  , Xi = e => {
    if (TS(e))
        return "svg";
    if (kS(e))
        return "mathml"
}
  , Yi = e => e.nodeType === 8;
function RS(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: s, nextSibling: o, parentNode: i, remove: a, insert: c, createComment: u}} = e
      , l = (_, y) => {
        if (!y.hasChildNodes()) {
            n(null, _, y),
            Oa(),
            y._vnode = _;
            return
        }
        Zn = !1,
        f(y.firstChild, _, null, null, null),
        Oa(),
        y._vnode = _,
        Zn && console.error("Hydration completed but contains mismatches.")
    }
      , f = (_, y, S, v, b, C=!1) => {
        C = C || !!y.dynamicChildren;
        const I = Yi(_) && _.data === "["
          , w = () => h(_, y, S, v, b, I)
          , {type: T, ref: R, shapeFlag: D, patchFlag: z} = y;
        let X = _.nodeType;
        y.el = _,
        z === -2 && (C = !1,
        y.dynamicChildren = null);
        let O = null;
        switch (T) {
        case es:
            X !== 3 ? y.children === "" ? (c(y.el = s(""), i(_), _),
            O = _) : O = w() : (_.data !== y.children && (Zn = !0,
            _.data = y.children),
            O = o(_));
            break;
        case yt:
            x(_) ? (O = o(_),
            E(y.el = _.content.firstChild, _, S)) : X !== 8 || I ? O = w() : O = o(_);
            break;
        case qr:
            if (I && (_ = o(_),
            X = _.nodeType),
            X === 1 || X === 3) {
                O = _;
                const Z = !y.children.length;
                for (let H = 0; H < y.staticCount; H++)
                    Z && (y.children += O.nodeType === 1 ? O.outerHTML : O.data),
                    H === y.staticCount - 1 && (y.anchor = O),
                    O = o(O);
                return I ? o(O) : O
            } else
                w();
            break;
        case ut:
            I ? O = m(_, y, S, v, b, C) : O = w();
            break;
        default:
            if (D & 1)
                (X !== 1 || y.type.toLowerCase() !== _.tagName.toLowerCase()) && !x(_) ? O = w() : O = d(_, y, S, v, b, C);
            else if (D & 6) {
                y.slotScopeIds = b;
                const Z = i(_);
                if (I ? O = g(_) : Yi(_) && _.data === "teleport start" ? O = g(_, _.data, "teleport end") : O = o(_),
                t(y, Z, null, S, v, Xi(Z), C),
                Wr(y)) {
                    let H;
                    I ? (H = Pe(ut),
                    H.anchor = O ? O.previousSibling : Z.lastChild) : H = _.nodeType === 3 ? z0("") : Pe("div"),
                    H.el = _,
                    y.component.subTree = H
                }
            } else
                D & 64 ? X !== 8 ? O = w() : O = y.type.hydrate(_, y, S, v, b, C, e, p) : D & 128 && (O = y.type.hydrate(_, y, S, v, Xi(i(_)), b, C, e, f))
        }
        return R != null && Pa(R, null, v, y),
        O
    }
      , d = (_, y, S, v, b, C) => {
        C = C || !!y.dynamicChildren;
        const {type: I, props: w, patchFlag: T, shapeFlag: R, dirs: D, transition: z} = y
          , X = I === "input" || I === "option";
        if (X || T !== -1) {
            D && yn(y, null, S, "created");
            let O = !1;
            if (x(_)) {
                O = Ix(v, z) && S && S.vnode.props && S.vnode.props.appear;
                const H = _.content.firstChild;
                O && z.beforeEnter(H),
                E(H, _, S),
                y.el = _ = H
            }
            if (R & 16 && !(w && (w.innerHTML || w.textContent))) {
                let H = p(_.firstChild, y, _, S, v, b, C);
                for (; H; ) {
                    Zn = !0;
                    const ie = H;
                    H = H.nextSibling,
                    a(ie)
                }
            } else
                R & 8 && _.textContent !== y.children && (Zn = !0,
                _.textContent = y.children);
            if (w)
                if (X || !C || T & 48)
                    for (const H in w)
                        (X && (H.endsWith("value") || H === "indeterminate") || vi(H) && !Fs(H) || H[0] === ".") && r(_, H, null, w[H], void 0, void 0, S);
                else
                    w.onClick && r(_, "onClick", null, w.onClick, void 0, void 0, S);
            let Z;
            (Z = w && w.onVnodeBeforeMount) && kt(Z, S, y),
            D && yn(y, null, S, "beforeMount"),
            ((Z = w && w.onVnodeMounted) || D || O) && Z_( () => {
                Z && kt(Z, S, y),
                O && z.enter(_),
                D && yn(y, null, S, "mounted")
            }
            , v)
        }
        return _.nextSibling
    }
      , p = (_, y, S, v, b, C, I) => {
        I = I || !!y.dynamicChildren;
        const w = y.children
          , T = w.length;
        for (let R = 0; R < T; R++) {
            const D = I ? w[R] : w[R] = zt(w[R]);
            if (_)
                _ = f(_, D, v, b, C, I);
            else {
                if (D.type === es && !D.children)
                    continue;
                Zn = !0,
                n(null, D, S, null, v, b, Xi(S), C)
            }
        }
        return _
    }
      , m = (_, y, S, v, b, C) => {
        const {slotScopeIds: I} = y;
        I && (b = b ? b.concat(I) : I);
        const w = i(_)
          , T = p(o(_), y, w, S, v, b, C);
        return T && Yi(T) && T.data === "]" ? o(y.anchor = T) : (Zn = !0,
        c(y.anchor = u("]"), w, T),
        T)
    }
      , h = (_, y, S, v, b, C) => {
        if (Zn = !0,
        y.el = null,
        C) {
            const T = g(_);
            for (; ; ) {
                const R = o(_);
                if (R && R !== T)
                    a(R);
                else
                    break
            }
        }
        const I = o(_)
          , w = i(_);
        return a(_),
        n(null, y, w, I, S, v, Xi(w), b),
        I
    }
      , g = (_, y="[", S="]") => {
        let v = 0;
        for (; _; )
            if (_ = o(_),
            _ && Yi(_) && (_.data === y && v++,
            _.data === S)) {
                if (v === 0)
                    return o(_);
                v--
            }
        return _
    }
      , E = (_, y, S) => {
        const v = y.parentNode;
        v && v.replaceChild(_, y);
        let b = S;
        for (; b; )
            b.vnode.el === y && (b.vnode.el = b.subTree.el = _),
            b = b.parent
    }
      , x = _ => _.nodeType === 1 && _.tagName.toLowerCase() === "template";
    return [l, f]
}
const ht = Z_;
function Tx(e) {
    return Rx(e)
}
function kx(e) {
    return Rx(e, RS)
}
function Rx(e, t) {
    const n = S_();
    n.__VUE__ = !0;
    const {insert: r, remove: s, patchProp: o, createElement: i, createText: a, createComment: c, setText: u, setElementText: l, parentNode: f, nextSibling: d, setScopeId: p=Tt, insertStaticContent: m} = e
      , h = (A, k, B, $=null, N=null, J=null, te=void 0, M=null, G=!!k.dynamicChildren) => {
        if (A === k)
            return;
        A && !cn(A, k) && ($ = P(A),
        j(A, N, J, !0),
        A = null),
        k.patchFlag === -2 && (G = !1,
        k.dynamicChildren = null);
        const {type: F, ref: Y, shapeFlag: Q} = k;
        switch (F) {
        case es:
            g(A, k, B, $);
            break;
        case yt:
            E(A, k, B, $);
            break;
        case qr:
            A == null && x(k, B, $, te);
            break;
        case ut:
            R(A, k, B, $, N, J, te, M, G);
            break;
        default:
            Q & 1 ? S(A, k, B, $, N, J, te, M, G) : Q & 6 ? D(A, k, B, $, N, J, te, M, G) : (Q & 64 || Q & 128) && F.process(A, k, B, $, N, J, te, M, G, ne)
        }
        Y != null && N && Pa(Y, A && A.ref, J, k || A, !k)
    }
      , g = (A, k, B, $) => {
        if (A == null)
            r(k.el = a(k.children), B, $);
        else {
            const N = k.el = A.el;
            k.children !== A.children && u(N, k.children)
        }
    }
      , E = (A, k, B, $) => {
        A == null ? r(k.el = c(k.children || ""), B, $) : k.el = A.el
    }
      , x = (A, k, B, $) => {
        [A.el,A.anchor] = m(A.children, k, B, $, A.el, A.anchor)
    }
      , _ = ({el: A, anchor: k}, B, $) => {
        let N;
        for (; A && A !== k; )
            N = d(A),
            r(A, B, $),
            A = N;
        r(k, B, $)
    }
      , y = ({el: A, anchor: k}) => {
        let B;
        for (; A && A !== k; )
            B = d(A),
            s(A),
            A = B;
        s(k)
    }
      , S = (A, k, B, $, N, J, te, M, G) => {
        k.type === "svg" ? te = "svg" : k.type === "math" && (te = "mathml"),
        A == null ? v(k, B, $, N, J, te, M, G) : I(A, k, N, J, te, M, G)
    }
      , v = (A, k, B, $, N, J, te, M) => {
        let G, F;
        const {props: Y, shapeFlag: Q, transition: se, dirs: ae} = A;
        if (G = A.el = i(A.type, J, Y && Y.is, Y),
        Q & 8 ? l(G, A.children) : Q & 16 && C(A.children, G, null, $, N, hu(A, J), te, M),
        ae && yn(A, null, $, "created"),
        b(G, A, A.scopeId, te, $),
        Y) {
            for (const Fe in Y)
                Fe !== "value" && !Fs(Fe) && o(G, Fe, null, Y[Fe], J, A.children, $, N, fe);
            "value"in Y && o(G, "value", null, Y.value, J),
            (F = Y.onVnodeBeforeMount) && kt(F, $, A)
        }
        ae && yn(A, null, $, "beforeMount");
        const ge = Ix(N, se);
        ge && se.beforeEnter(G),
        r(G, k, B),
        ((F = Y && Y.onVnodeMounted) || ge || ae) && ht( () => {
            F && kt(F, $, A),
            ge && se.enter(G),
            ae && yn(A, null, $, "mounted")
        }
        , N)
    }
      , b = (A, k, B, $, N) => {
        if (B && p(A, B),
        $)
            for (let J = 0; J < $.length; J++)
                p(A, $[J]);
        if (N) {
            let J = N.subTree;
            if (k === J) {
                const te = N.vnode;
                b(A, te, te.scopeId, te.slotScopeIds, N.parent)
            }
        }
    }
      , C = (A, k, B, $, N, J, te, M, G=0) => {
        for (let F = G; F < A.length; F++) {
            const Y = A[F] = M ? ar(A[F]) : zt(A[F]);
            h(null, Y, k, B, $, N, J, te, M)
        }
    }
      , I = (A, k, B, $, N, J, te) => {
        const M = k.el = A.el;
        let {patchFlag: G, dynamicChildren: F, dirs: Y} = k;
        G |= A.patchFlag & 16;
        const Q = A.props || Le
          , se = k.props || Le;
        let ae;
        if (B && Br(B, !1),
        (ae = se.onVnodeBeforeUpdate) && kt(ae, B, k, A),
        Y && yn(k, A, B, "beforeUpdate"),
        B && Br(B, !0),
        F ? w(A.dynamicChildren, F, M, B, $, hu(k, N), J) : te || H(A, k, M, null, B, $, hu(k, N), J, !1),
        G > 0) {
            if (G & 16)
                T(M, k, Q, se, B, $, N);
            else if (G & 2 && Q.class !== se.class && o(M, "class", null, se.class, N),
            G & 4 && o(M, "style", Q.style, se.style, N),
            G & 8) {
                const ge = k.dynamicProps;
                for (let Fe = 0; Fe < ge.length; Fe++) {
                    const Ue = ge[Fe]
                      , et = Q[Ue]
                      , it = se[Ue];
                    (it !== et || Ue === "value") && o(M, Ue, et, it, N, A.children, B, $, fe)
                }
            }
            G & 1 && A.children !== k.children && l(M, k.children)
        } else
            !te && F == null && T(M, k, Q, se, B, $, N);
        ((ae = se.onVnodeUpdated) || Y) && ht( () => {
            ae && kt(ae, B, k, A),
            Y && yn(k, A, B, "updated")
        }
        , $)
    }
      , w = (A, k, B, $, N, J, te) => {
        for (let M = 0; M < k.length; M++) {
            const G = A[M]
              , F = k[M]
              , Y = G.el && (G.type === ut || !cn(G, F) || G.shapeFlag & 70) ? f(G.el) : B;
            h(G, F, Y, null, $, N, J, te, !0)
        }
    }
      , T = (A, k, B, $, N, J, te) => {
        if (B !== $) {
            if (B !== Le)
                for (const M in B)
                    !Fs(M) && !(M in $) && o(A, M, B[M], null, te, k.children, N, J, fe);
            for (const M in $) {
                if (Fs(M))
                    continue;
                const G = $[M]
                  , F = B[M];
                G !== F && M !== "value" && o(A, M, F, G, te, k.children, N, J, fe)
            }
            "value"in $ && o(A, "value", B.value, $.value, te)
        }
    }
      , R = (A, k, B, $, N, J, te, M, G) => {
        const F = k.el = A ? A.el : a("")
          , Y = k.anchor = A ? A.anchor : a("");
        let {patchFlag: Q, dynamicChildren: se, slotScopeIds: ae} = k;
        ae && (M = M ? M.concat(ae) : ae),
        A == null ? (r(F, B, $),
        r(Y, B, $),
        C(k.children || [], B, Y, N, J, te, M, G)) : Q > 0 && Q & 64 && se && A.dynamicChildren ? (w(A.dynamicChildren, se, B, N, J, te, M),
        (k.key != null || N && k === N.subTree) && U0(A, k, !0)) : H(A, k, B, Y, N, J, te, M, G)
    }
      , D = (A, k, B, $, N, J, te, M, G) => {
        k.slotScopeIds = M,
        A == null ? k.shapeFlag & 512 ? N.ctx.activate(k, B, $, te, G) : z(k, B, $, N, J, te, G) : X(A, k, G)
    }
      , z = (A, k, B, $, N, J, te) => {
        const M = A.component = Nx(A, $, N);
        if (Si(A) && (M.ctx.renderer = ne),
        Lx(M),
        M.asyncDep) {
            if (N && N.registerDep(M, O),
            !A.el) {
                const G = M.subTree = Pe(yt);
                E(null, G, k, B)
            }
        } else
            O(M, A, k, B, N, J, te)
    }
      , X = (A, k, B) => {
        const $ = k.component = A.component;
        if (M2(A, k, B))
            if ($.asyncDep && !$.asyncResolved) {
                Z($, k, B);
                return
            } else
                $.next = k,
                k2($.update),
                $.effect.dirty = !0,
                $.update();
        else
            k.el = A.el,
            $.vnode = k
    }
      , O = (A, k, B, $, N, J, te) => {
        const M = () => {
            if (A.isMounted) {
                let {next: Y, bu: Q, u: se, parent: ae, vnode: ge} = A;
                {
                    const Kt = Dx(A);
                    if (Kt) {
                        Y && (Y.el = ge.el,
                        Z(A, Y, te)),
                        Kt.asyncDep.then( () => {
                            A.isUnmounted || M()
                        }
                        );
                        return
                    }
                }
                let Fe = Y, Ue;
                Br(A, !1),
                Y ? (Y.el = ge.el,
                Z(A, Y, te)) : Y = ge,
                Q && Ps(Q),
                (Ue = Y.props && Y.props.onVnodeBeforeUpdate) && kt(Ue, ae, Y, ge),
                Br(A, !0);
                const et = pa(A)
                  , it = A.subTree;
                A.subTree = et,
                h(it, et, f(it.el), P(it), A, N, J),
                Y.el = et.el,
                Fe === null && R0(A, et.el),
                se && ht(se, N),
                (Ue = Y.props && Y.props.onVnodeUpdated) && ht( () => kt(Ue, ae, Y, ge), N)
            } else {
                let Y;
                const {el: Q, props: se} = k
                  , {bm: ae, m: ge, parent: Fe} = A
                  , Ue = Wr(k);
                if (Br(A, !1),
                ae && Ps(ae),
                !Ue && (Y = se && se.onVnodeBeforeMount) && kt(Y, Fe, k),
                Br(A, !0),
                Q && Be) {
                    const et = () => {
                        A.subTree = pa(A),
                        Be(Q, A.subTree, A, N, null)
                    }
                    ;
                    Ue ? k.type.__asyncLoader().then( () => !A.isUnmounted && et()) : et()
                } else {
                    const et = A.subTree = pa(A);
                    h(null, et, B, $, A, N, J),
                    k.el = et.el
                }
                if (ge && ht(ge, N),
                !Ue && (Y = se && se.onVnodeMounted)) {
                    const et = k;
                    ht( () => kt(Y, Fe, et), N)
                }
                (k.shapeFlag & 256 || Fe && Wr(Fe.vnode) && Fe.vnode.shapeFlag & 256) && A.a && ht(A.a, N),
                A.isMounted = !0,
                k = B = $ = null
            }
        }
          , G = A.effect = new Ws(M,Tt, () => Ec(F),A.scope)
          , F = A.update = () => {
            G.dirty && G.run()
        }
        ;
        F.id = A.uid,
        Br(A, !0),
        F()
    }
      , Z = (A, k, B) => {
        k.component = A;
        const $ = A.vnode.props;
        A.vnode = k,
        A.next = null,
        SS(A, k.props, $, B),
        AS(A, k.children, B),
        Ar(),
        gp(A),
        Tr()
    }
      , H = (A, k, B, $, N, J, te, M, G=!1) => {
        const F = A && A.children
          , Y = A ? A.shapeFlag : 0
          , Q = k.children
          , {patchFlag: se, shapeFlag: ae} = k;
        if (se > 0) {
            if (se & 128) {
                le(F, Q, B, $, N, J, te, M, G);
                return
            } else if (se & 256) {
                ie(F, Q, B, $, N, J, te, M, G);
                return
            }
        }
        ae & 8 ? (Y & 16 && fe(F, N, J),
        Q !== F && l(B, Q)) : Y & 16 ? ae & 16 ? le(F, Q, B, $, N, J, te, M, G) : fe(F, N, J, !0) : (Y & 8 && l(B, ""),
        ae & 16 && C(Q, B, $, N, J, te, M, G))
    }
      , ie = (A, k, B, $, N, J, te, M, G) => {
        A = A || Bs,
        k = k || Bs;
        const F = A.length
          , Y = k.length
          , Q = Math.min(F, Y);
        let se;
        for (se = 0; se < Q; se++) {
            const ae = k[se] = G ? ar(k[se]) : zt(k[se]);
            h(A[se], ae, B, null, N, J, te, M, G)
        }
        F > Y ? fe(A, N, J, !0, !1, Q) : C(k, B, $, N, J, te, M, G, Q)
    }
      , le = (A, k, B, $, N, J, te, M, G) => {
        let F = 0;
        const Y = k.length;
        let Q = A.length - 1
          , se = Y - 1;
        for (; F <= Q && F <= se; ) {
            const ae = A[F]
              , ge = k[F] = G ? ar(k[F]) : zt(k[F]);
            if (cn(ae, ge))
                h(ae, ge, B, null, N, J, te, M, G);
            else
                break;
            F++
        }
        for (; F <= Q && F <= se; ) {
            const ae = A[Q]
              , ge = k[se] = G ? ar(k[se]) : zt(k[se]);
            if (cn(ae, ge))
                h(ae, ge, B, null, N, J, te, M, G);
            else
                break;
            Q--,
            se--
        }
        if (F > Q) {
            if (F <= se) {
                const ae = se + 1
                  , ge = ae < Y ? k[ae].el : $;
                for (; F <= se; )
                    h(null, k[F] = G ? ar(k[F]) : zt(k[F]), B, ge, N, J, te, M, G),
                    F++
            }
        } else if (F > se)
            for (; F <= Q; )
                j(A[F], N, J, !0),
                F++;
        else {
            const ae = F
              , ge = F
              , Fe = new Map;
            for (F = ge; F <= se; F++) {
                const bt = k[F] = G ? ar(k[F]) : zt(k[F]);
                bt.key != null && Fe.set(bt.key, F)
            }
            let Ue, et = 0;
            const it = se - ge + 1;
            let Kt = !1
              , $i = 0;
            const Yn = new Array(it);
            for (F = 0; F < it; F++)
                Yn[F] = 0;
            for (F = ae; F <= Q; F++) {
                const bt = A[F];
                if (et >= it) {
                    j(bt, N, J, !0);
                    continue
                }
                let Gt;
                if (bt.key != null)
                    Gt = Fe.get(bt.key);
                else
                    for (Ue = ge; Ue <= se; Ue++)
                        if (Yn[Ue - ge] === 0 && cn(bt, k[Ue])) {
                            Gt = Ue;
                            break
                        }
                Gt === void 0 ? j(bt, N, J, !0) : (Yn[Gt - ge] = F + 1,
                Gt >= $i ? $i = Gt : Kt = !0,
                h(bt, k[Gt], B, null, N, J, te, M, G),
                et++)
            }
            const So = Kt ? IS(Yn) : Bs;
            for (Ue = So.length - 1,
            F = it - 1; F >= 0; F--) {
                const bt = ge + F
                  , Gt = k[bt]
                  , wo = bt + 1 < Y ? k[bt + 1].el : $;
                Yn[F] === 0 ? h(null, Gt, B, wo, N, J, te, M, G) : Kt && (Ue < 0 || F !== So[Ue] ? L(Gt, B, wo, 2) : Ue--)
            }
        }
    }
      , L = (A, k, B, $, N=null) => {
        const {el: J, type: te, transition: M, children: G, shapeFlag: F} = A;
        if (F & 6) {
            L(A.component.subTree, k, B, $);
            return
        }
        if (F & 128) {
            A.suspense.move(k, B, $);
            return
        }
        if (F & 64) {
            te.move(A, k, B, ne);
            return
        }
        if (te === ut) {
            r(J, k, B);
            for (let Q = 0; Q < G.length; Q++)
                L(G[Q], k, B, $);
            r(A.anchor, k, B);
            return
        }
        if (te === qr) {
            _(A, k, B);
            return
        }
        if ($ !== 2 && F & 1 && M)
            if ($ === 0)
                M.beforeEnter(J),
                r(J, k, B),
                ht( () => M.enter(J), N);
            else {
                const {leave: Q, delayLeave: se, afterLeave: ae} = M
                  , ge = () => r(J, k, B)
                  , Fe = () => {
                    Q(J, () => {
                        ge(),
                        ae && ae()
                    }
                    )
                }
                ;
                se ? se(J, ge, Fe) : Fe()
            }
        else
            r(J, k, B)
    }
      , j = (A, k, B, $=!1, N=!1) => {
        const {type: J, props: te, ref: M, children: G, dynamicChildren: F, shapeFlag: Y, patchFlag: Q, dirs: se} = A;
        if (M != null && Pa(M, null, B, A, !0),
        Y & 256) {
            k.ctx.deactivate(A);
            return
        }
        const ae = Y & 1 && se
          , ge = !Wr(A);
        let Fe;
        if (ge && (Fe = te && te.onVnodeBeforeUnmount) && kt(Fe, k, A),
        Y & 6)
            Ie(A.component, B, $);
        else {
            if (Y & 128) {
                A.suspense.unmount(B, $);
                return
            }
            ae && yn(A, null, k, "beforeUnmount"),
            Y & 64 ? A.type.remove(A, k, B, N, ne, $) : F && (J !== ut || Q > 0 && Q & 64) ? fe(F, k, B, !1, !0) : (J === ut && Q & 384 || !N && Y & 16) && fe(G, k, B),
            $ && K(A)
        }
        (ge && (Fe = te && te.onVnodeUnmounted) || ae) && ht( () => {
            Fe && kt(Fe, k, A),
            ae && yn(A, null, k, "unmounted")
        }
        , B)
    }
      , K = A => {
        const {type: k, el: B, anchor: $, transition: N} = A;
        if (k === ut) {
            W(B, $);
            return
        }
        if (k === qr) {
            y(A);
            return
        }
        const J = () => {
            s(B),
            N && !N.persisted && N.afterLeave && N.afterLeave()
        }
        ;
        if (A.shapeFlag & 1 && N && !N.persisted) {
            const {leave: te, delayLeave: M} = N
              , G = () => te(B, J);
            M ? M(A.el, J, G) : G()
        } else
            J()
    }
      , W = (A, k) => {
        let B;
        for (; A !== k; )
            B = d(A),
            s(A),
            A = B;
        s(k)
    }
      , Ie = (A, k, B) => {
        const {bum: $, scope: N, update: J, subTree: te, um: M} = A;
        $ && Ps($),
        N.stop(),
        J && (J.active = !1,
        j(te, A, k, B)),
        M && ht(M, k),
        ht( () => {
            A.isUnmounted = !0
        }
        , k),
        k && k.pendingBranch && !k.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === k.pendingId && (k.deps--,
        k.deps === 0 && k.resolve())
    }
      , fe = (A, k, B, $=!1, N=!1, J=0) => {
        for (let te = J; te < A.length; te++)
            j(A[te], k, B, $, N)
    }
      , P = A => A.shapeFlag & 6 ? P(A.component.subTree) : A.shapeFlag & 128 ? A.suspense.next() : d(A.anchor || A.el);
    let q = !1;
    const ee = (A, k, B) => {
        A == null ? k._vnode && j(k._vnode, null, null, !0) : h(k._vnode || null, A, k, null, null, null, B),
        q || (q = !0,
        gp(),
        Oa(),
        q = !1),
        k._vnode = A
    }
      , ne = {
        p: h,
        um: j,
        m: L,
        r: K,
        mt: z,
        mc: C,
        pc: H,
        pbc: w,
        n: P,
        o: e
    };
    let Ee, Be;
    return t && ([Ee,Be] = t(ne)),
    {
        render: ee,
        hydrate: Ee,
        createApp: ES(ee, Ee)
    }
}
function hu({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Br({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Ix(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function U0(e, t, n=!1) {
    const r = e.children
      , s = t.children;
    if (oe(r) && oe(s))
        for (let o = 0; o < r.length; o++) {
            const i = r[o];
            let a = s[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = ar(s[o]),
            a.el = i.el),
            n || U0(i, a)),
            a.type === es && (a.el = i.el)
        }
}
function IS(e) {
    const t = e.slice()
      , n = [0];
    let r, s, o, i, a;
    const c = e.length;
    for (r = 0; r < c; r++) {
        const u = e[r];
        if (u !== 0) {
            if (s = n[n.length - 1],
            e[s] < u) {
                t[r] = s,
                n.push(r);
                continue
            }
            for (o = 0,
            i = n.length - 1; o < i; )
                a = o + i >> 1,
                e[n[a]] < u ? o = a + 1 : i = a;
            u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]),
            n[o] = r)
        }
    }
    for (o = n.length,
    i = n[o - 1]; o-- > 0; )
        n[o] = i,
        i = t[i];
    return n
}
function Dx(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Dx(t)
}
const DS = e => e.__isTeleport
  , Mo = e => e && (e.disabled || e.disabled === "")
  , kp = e => typeof SVGElement < "u" && e instanceof SVGElement
  , Rp = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Xl = (e, t) => {
    const n = e && e.to;
    return $e(n) ? t ? t(n) : null : n
}
  , BS = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, o, i, a, c, u) {
        const {mc: l, pc: f, pbc: d, o: {insert: p, querySelector: m, createText: h, createComment: g}} = u
          , E = Mo(t.props);
        let {shapeFlag: x, children: _, dynamicChildren: y} = t;
        if (e == null) {
            const S = t.el = h("")
              , v = t.anchor = h("");
            p(S, n, r),
            p(v, n, r);
            const b = t.target = Xl(t.props, m)
              , C = t.targetAnchor = h("");
            b && (p(C, b),
            i === "svg" || kp(b) ? i = "svg" : (i === "mathml" || Rp(b)) && (i = "mathml"));
            const I = (w, T) => {
                x & 16 && l(_, w, T, s, o, i, a, c)
            }
            ;
            E ? I(n, v) : b && I(b, C)
        } else {
            t.el = e.el;
            const S = t.anchor = e.anchor
              , v = t.target = e.target
              , b = t.targetAnchor = e.targetAnchor
              , C = Mo(e.props)
              , I = C ? n : v
              , w = C ? S : b;
            if (i === "svg" || kp(v) ? i = "svg" : (i === "mathml" || Rp(v)) && (i = "mathml"),
            y ? (d(e.dynamicChildren, y, I, s, o, i, a),
            U0(e, t, !0)) : c || f(e, t, I, w, s, o, i, a, !1),
            E)
                C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ji(t, n, S, u, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const T = t.target = Xl(t.props, m);
                T && Ji(t, T, null, u, 0)
            } else
                C && Ji(t, v, b, u, 1)
        }
        Bx(t)
    },
    remove(e, t, n, r, {um: s, o: {remove: o}}, i) {
        const {shapeFlag: a, children: c, anchor: u, targetAnchor: l, target: f, props: d} = e;
        if (f && o(l),
        i && o(u),
        a & 16) {
            const p = i || !Mo(d);
            for (let m = 0; m < c.length; m++) {
                const h = c[m];
                s(h, t, n, p, !!h.dynamicChildren)
            }
        }
    },
    move: Ji,
    hydrate: OS
};
function Ji(e, t, n, {o: {insert: r}, m: s}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: i, anchor: a, shapeFlag: c, children: u, props: l} = e
      , f = o === 2;
    if (f && r(i, t, n),
    (!f || Mo(l)) && c & 16)
        for (let d = 0; d < u.length; d++)
            s(u[d], t, n, 2);
    f && r(a, t, n)
}
function OS(e, t, n, r, s, o, {o: {nextSibling: i, parentNode: a, querySelector: c}}, u) {
    const l = t.target = Xl(t.props, c);
    if (l) {
        const f = l._lpa || l.firstChild;
        if (t.shapeFlag & 16)
            if (Mo(t.props))
                t.anchor = u(i(e), t, a(e), n, r, s, o),
                t.targetAnchor = f;
            else {
                t.anchor = i(e);
                let d = f;
                for (; d; )
                    if (d = i(d),
                    d && d.nodeType === 8 && d.data === "teleport anchor") {
                        t.targetAnchor = d,
                        l._lpa = t.targetAnchor && i(t.targetAnchor);
                        break
                    }
                u(f, t, l, n, r, s, o)
            }
        Bx(t)
    }
    return t.anchor && i(t.anchor)
}
const FS = BS;
function Bx(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const ut = Symbol.for("v-fgt")
  , es = Symbol.for("v-txt")
  , yt = Symbol.for("v-cmt")
  , qr = Symbol.for("v-stc")
  , Lo = [];
let Dt = null;
function pe(e=!1) {
    Lo.push(Dt = e ? null : [])
}
function Ox() {
    Lo.pop(),
    Dt = Lo[Lo.length - 1] || null
}
let ts = 1;
function Yl(e) {
    ts += e
}
function Fx(e) {
    return e.dynamicChildren = ts > 0 ? Dt || Bs : null,
    Ox(),
    ts > 0 && Dt && Dt.push(e),
    e
}
function Oe(e, t, n, r, s, o) {
    return Fx(De(e, t, n, r, s, o, !0))
}
function It(e, t, n, r, s) {
    return Fx(Pe(e, t, n, r, s, !0))
}
function Cn(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function cn(e, t) {
    return e.type === t.type && e.key === t.key
}
function PS(e) {}
const Px = ({key: e}) => e ?? null
  , ha = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? $e(e) || Xe(e) || ce(e) ? {
    i: rt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function De(e, t=null, n=null, r=0, s=null, o=e === ut ? 0 : 1, i=!1, a=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Px(t),
        ref: t && ha(t),
        scopeId: Sc,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: rt
    };
    return a ? (W0(c, n),
    o & 128 && e.normalize(c)) : n && (c.shapeFlag |= $e(n) ? 8 : 16),
    ts > 0 && !i && Dt && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Dt.push(c),
    c
}
const Pe = NS;
function NS(e, t=null, n=null, r=0, s=null, o=!1) {
    if ((!e || e === J_) && (e = yt),
    Cn(e)) {
        const a = An(e, t, !0);
        return n && W0(a, n),
        ts > 0 && !o && Dt && (a.shapeFlag & 6 ? Dt[Dt.indexOf(e)] = a : Dt.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (WS(e) && (e = e.__vccOpts),
    t) {
        t = j0(t);
        let {class: a, style: c} = t;
        a && !$e(a) && (t.class = jt(a)),
        Ne(c) && (S0(c) && !oe(c) && (c = Ve({}, c)),
        t.style = as(c))
    }
    const i = $e(e) ? 1 : Q_(e) ? 128 : DS(e) ? 64 : Ne(e) ? 4 : ce(e) ? 2 : 0;
    return De(e, t, n, r, s, i, o, !0)
}
function j0(e) {
    return e ? S0(e) || Ex(e) ? Ve({}, e) : e : null
}
function An(e, t, n=!1) {
    const {props: r, ref: s, patchFlag: o, children: i} = e
      , a = t ? Bc(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Px(a),
        ref: t && t.ref ? n && s ? oe(s) ? s.concat(ha(t)) : [s, ha(t)] : ha(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ut ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && An(e.ssContent),
        ssFallback: e.ssFallback && An(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function z0(e=" ", t=0) {
    return Pe(es, null, e, t)
}
function MS(e, t) {
    const n = Pe(qr, null, e);
    return n.staticCount = t,
    n
}
function Fo(e="", t=!1) {
    return t ? (pe(),
    It(yt, null, e)) : Pe(yt, null, e)
}
function zt(e) {
    return e == null || typeof e == "boolean" ? Pe(yt) : oe(e) ? Pe(ut, null, e.slice()) : typeof e == "object" ? ar(e) : Pe(es, null, String(e))
}
function ar(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : An(e)
}
function W0(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (oe(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1),
            W0(e, s()),
            s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !Ex(t) ? t._ctx = rt : s === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ce(t) ? (t = {
            default: t,
            _ctx: rt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [z0(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Bc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class")
                t.class !== r.class && (t.class = jt([t.class, r.class]));
            else if (s === "style")
                t.style = as([t.style, r.style]);
            else if (vi(s)) {
                const o = t[s]
                  , i = r[s];
                i && o !== i && !(oe(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
            } else
                s !== "" && (t[s] = r[s])
    }
    return t
}
function kt(e, t, n, r=null) {
    Vt(e, t, 7, [n, r])
}
const LS = xx();
let HS = 0;
function Nx(e, t, n) {
    const r = e.type
      , s = (t ? t.appContext : e.appContext) || LS
      , o = {
        uid: HS++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new x0(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Sx(r, s),
        emitsOptions: Y_(r, s),
        emit: null,
        emitted: null,
        propsDefaults: Le,
        inheritAttrs: r.inheritAttrs,
        ctx: Le,
        data: Le,
        props: Le,
        attrs: Le,
        slots: Le,
        refs: Le,
        setupState: Le,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = I2.bind(null, o),
    e.ce && e.ce(o),
    o
}
let ot = null;
const Et = () => ot || rt;
let Na, Jl;
{
    const e = S_()
      , t = (n, r) => {
        let s;
        return (s = e[n]) || (s = e[n] = []),
        s.push(r),
        o => {
            s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
        }
    }
    ;
    Na = t("__VUE_INSTANCE_SETTERS__", n => ot = n),
    Jl = t("__VUE_SSR_SETTERS__", n => wi = n)
}
const ns = e => {
    const t = ot;
    return Na(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Na(t)
    }
}
  , Ql = () => {
    ot && ot.scope.off(),
    Na(null)
}
;
function Mx(e) {
    return e.vnode.shapeFlag & 4
}
let wi = !1;
function Lx(e, t=!1) {
    t && Jl(t);
    const {props: n, children: r} = e.vnode
      , s = Mx(e);
    bS(e, n, s, t),
    CS(e, r);
    const o = s ? $S(e, t) : void 0;
    return t && Jl(!1),
    o
}
function $S(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,ql);
    const {setup: r} = n;
    if (r) {
        const s = e.setupContext = r.length > 1 ? $x(e) : null
          , o = ns(e);
        Ar();
        const i = Ln(r, e, 0, [e.props, s]);
        if (Tr(),
        o(),
        m0(i)) {
            if (i.then(Ql, Ql),
            t)
                return i.then(a => {
                    Zl(e, a, t)
                }
                ).catch(a => {
                    us(a, e, 0)
                }
                );
            e.asyncDep = i
        } else
            Zl(e, i, t)
    } else
        Hx(e, t)
}
function Zl(e, t, n) {
    ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ne(t) && (e.setupState = A0(t)),
    Hx(e, n)
}
let Ma, ef;
function US(e) {
    Ma = e,
    ef = t => {
        t.render._rc && (t.withProxy = new Proxy(t.ctx,tS))
    }
}
const jS = () => !Ma;
function Hx(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Ma && !r.render) {
            const s = r.template || H0(e).template;
            if (s) {
                const {isCustomElement: o, compilerOptions: i} = e.appContext.config
                  , {delimiters: a, compilerOptions: c} = r
                  , u = Ve(Ve({
                    isCustomElement: o,
                    delimiters: a
                }, i), c);
                r.render = Ma(s, u)
            }
        }
        e.render = r.render || Tt,
        ef && ef(e)
    }
    {
        const s = ns(e);
        Ar();
        try {
            mS(e)
        } finally {
            Tr(),
            s()
        }
    }
}
const zS = {
    get(e, t) {
        return Ft(e, "get", ""),
        e[t]
    }
};
function $x(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,zS),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Oc(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(A0(vc(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in No)
                    return No[n](e)
            },
            has(t, n) {
                return n in t || n in No
            }
        }))
}
function tf(e, t=!0) {
    return ce(e) ? e.displayName || e.name : e.name || t && e.__name
}
function WS(e) {
    return ce(e) && "__vccOpts"in e
}
const me = (e, t) => p2(e, t, wi);
function qS(e, t, n=Le) {
    const r = Et()
      , s = xt(t)
      , o = Wt(t)
      , i = z_( (c, u) => {
        let l;
        return rx( () => {
            const f = e[t];
            fn(l, f) && (l = f,
            u())
        }
        ),
        {
            get() {
                return c(),
                n.get ? n.get(l) : l
            },
            set(f) {
                const d = r.vnode.props;
                !(d && (t in d || s in d || o in d) && (`onUpdate:${t}`in d || `onUpdate:${s}`in d || `onUpdate:${o}`in d)) && fn(f, l) && (l = f,
                u()),
                r.emit(`update:${t}`, n.set ? n.set(f) : f)
            }
        }
    }
    )
      , a = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
    return i[Symbol.iterator] = () => {
        let c = 0;
        return {
            next() {
                return c < 2 ? {
                    value: c++ ? e[a] || {} : i,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    i
}
function Ot(e, t, n) {
    const r = arguments.length;
    return r === 2 ? Ne(t) && !oe(t) ? Cn(t) ? Pe(e, null, [t]) : Pe(e, t) : Pe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Cn(n) && (n = [n]),
    Pe(e, t, n))
}
function VS() {}
function KS(e, t, n, r) {
    const s = n[r];
    if (s && Ux(s, e))
        return s;
    const o = t();
    return o.memo = e.slice(),
    n[r] = o
}
function Ux(e, t) {
    const n = e.memo;
    if (n.length != t.length)
        return !1;
    for (let r = 0; r < n.length; r++)
        if (fn(n[r], t[r]))
            return !1;
    return ts > 0 && Dt && Dt.push(e),
    !0
}
const q0 = "3.4.24"
  , jx = Tt
  , GS = C2
  , XS = ws
  , YS = X_
  , JS = {
    createComponentInstance: Nx,
    setupComponent: Lx,
    renderComponentRoot: pa,
    setCurrentRenderingInstance: ei,
    isVNode: Cn,
    normalizeVNode: zt
}
  , QS = JS
  , ZS = null
  , ew = null
  , tw = null;
/**
* @vue/runtime-dom v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const nw = "http://www.w3.org/2000/svg"
  , rw = "http://www.w3.org/1998/Math/MathML"
  , cr = typeof document < "u" ? document : null
  , Ip = cr && cr.createElement("template")
  , sw = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const s = t === "svg" ? cr.createElementNS(nw, e) : t === "mathml" ? cr.createElementNS(rw, e) : cr.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple),
        s
    }
    ,
    createText: e => cr.createTextNode(e),
    createComment: e => cr.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => cr.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, o) {
        const i = n ? n.previousSibling : t.lastChild;
        if (s && (s === o || s.nextSibling))
            for (; t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling)); )
                ;
        else {
            Ip.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = Ip.content;
            if (r === "svg" || r === "mathml") {
                const c = a.firstChild;
                for (; c.firstChild; )
                    a.appendChild(c.firstChild);
                a.removeChild(c)
            }
            t.insertBefore(a, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , er = "transition"
  , Co = "animation"
  , Ks = Symbol("_vtc")
  , ls = (e, {slots: t}) => Ot(ox, Wx(e), t);
ls.displayName = "Transition";
const zx = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , ow = ls.props = Ve({}, N0, zx)
  , Or = (e, t=[]) => {
    oe(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , Dp = e => e ? oe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function Wx(e) {
    const t = {};
    for (const R in e)
        R in zx || (t[R] = e[R]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: s, enterFromClass: o=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: c=o, appearActiveClass: u=i, appearToClass: l=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: p=`${n}-leave-to`} = e
      , m = iw(s)
      , h = m && m[0]
      , g = m && m[1]
      , {onBeforeEnter: E, onEnter: x, onEnterCancelled: _, onLeave: y, onLeaveCancelled: S, onBeforeAppear: v=E, onAppear: b=x, onAppearCancelled: C=_} = t
      , I = (R, D, z) => {
        rr(R, D ? l : a),
        rr(R, D ? u : i),
        z && z()
    }
      , w = (R, D) => {
        R._isLeaving = !1,
        rr(R, f),
        rr(R, p),
        rr(R, d),
        D && D()
    }
      , T = R => (D, z) => {
        const X = R ? b : x
          , O = () => I(D, R, z);
        Or(X, [D, O]),
        Bp( () => {
            rr(D, R ? c : o),
            Dn(D, R ? l : a),
            Dp(X) || Op(D, r, h, O)
        }
        )
    }
    ;
    return Ve(t, {
        onBeforeEnter(R) {
            Or(E, [R]),
            Dn(R, o),
            Dn(R, i)
        },
        onBeforeAppear(R) {
            Or(v, [R]),
            Dn(R, c),
            Dn(R, u)
        },
        onEnter: T(!1),
        onAppear: T(!0),
        onLeave(R, D) {
            R._isLeaving = !0;
            const z = () => w(R, D);
            Dn(R, f),
            Dn(R, d),
            Vx(),
            Bp( () => {
                R._isLeaving && (rr(R, f),
                Dn(R, p),
                Dp(y) || Op(R, r, g, z))
            }
            ),
            Or(y, [R, z])
        },
        onEnterCancelled(R) {
            I(R, !1),
            Or(_, [R])
        },
        onAppearCancelled(R) {
            I(R, !0),
            Or(C, [R])
        },
        onLeaveCancelled(R) {
            w(R),
            Or(S, [R])
        }
    })
}
function iw(e) {
    if (e == null)
        return null;
    if (Ne(e))
        return [mu(e.enter), mu(e.leave)];
    {
        const t = mu(e);
        return [t, t]
    }
}
function mu(e) {
    return Ia(e)
}
function Dn(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Ks] || (e[Ks] = new Set)).add(t)
}
function rr(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Ks];
    n && (n.delete(t),
    n.size || (e[Ks] = void 0))
}
function Bp(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let aw = 0;
function Op(e, t, n, r) {
    const s = e._endId = ++aw
      , o = () => {
        s === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: i, timeout: a, propCount: c} = qx(e, t);
    if (!i)
        return r();
    const u = i + "end";
    let l = 0;
    const f = () => {
        e.removeEventListener(u, d),
        o()
    }
      , d = p => {
        p.target === e && ++l >= c && f()
    }
    ;
    setTimeout( () => {
        l < c && f()
    }
    , a + 1),
    e.addEventListener(u, d)
}
function qx(e, t) {
    const n = window.getComputedStyle(e)
      , r = m => (n[m] || "").split(", ")
      , s = r(`${er}Delay`)
      , o = r(`${er}Duration`)
      , i = Fp(s, o)
      , a = r(`${Co}Delay`)
      , c = r(`${Co}Duration`)
      , u = Fp(a, c);
    let l = null
      , f = 0
      , d = 0;
    t === er ? i > 0 && (l = er,
    f = i,
    d = o.length) : t === Co ? u > 0 && (l = Co,
    f = u,
    d = c.length) : (f = Math.max(i, u),
    l = f > 0 ? i > u ? er : Co : null,
    d = l ? l === er ? o.length : c.length : 0);
    const p = l === er && /\b(transform|all)(,|$)/.test(r(`${er}Property`).toString());
    return {
        type: l,
        timeout: f,
        propCount: d,
        hasTransform: p
    }
}
function Fp(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => Pp(n) + Pp(e[r])))
}
function Pp(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Vx() {
    return document.body.offsetHeight
}
function cw(e, t, n) {
    const r = e[Ks];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const La = Symbol("_vod")
  , Kx = Symbol("_vsh")
  , Fc = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[La] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Ao(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Ao(e, !0),
        r.enter(e)) : r.leave(e, () => {
            Ao(e, !1)
        }
        ) : Ao(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Ao(e, t)
    }
};
function Ao(e, t) {
    e.style.display = t ? e[La] : "none",
    e[Kx] = !t
}
function uw() {
    Fc.getSSRProps = ({value: e}) => {
        if (!e)
            return {
                style: {
                    display: "none"
                }
            }
    }
}
const Gx = Symbol("");
function lw(e) {
    const t = Et();
    if (!t)
        return;
    const n = t.ut = (s=e(t.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(o => rf(o, s))
    }
      , r = () => {
        const s = e(t.proxy);
        nf(t.subTree, s),
        n(s)
    }
    ;
    kr( () => {
        nx(r);
        const s = new MutationObserver(r);
        s.observe(t.subTree.el.parentNode, {
            childList: !0
        }),
        Rc( () => s.disconnect())
    }
    )
}
function nf(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch,
        n.pendingBranch && !n.isHydrating && n.effects.push( () => {
            nf(n.activeBranch, t)
        }
        )
    }
    for (; e.component; )
        e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
        rf(e.el, t);
    else if (e.type === ut)
        e.children.forEach(n => nf(n, t));
    else if (e.type === qr) {
        let {el: n, anchor: r} = e;
        for (; n && (rf(n, t),
        n !== r); )
            n = n.nextSibling
    }
}
function rf(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        let r = "";
        for (const s in t)
            n.setProperty(`--${s}`, t[s]),
            r += `--${s}: ${t[s]};`;
        n[Gx] = r
    }
}
const fw = /(^|;)\s*display\s*:/;
function dw(e, t, n) {
    const r = e.style
      , s = $e(n);
    let o = !1;
    if (n && !s) {
        if (t)
            if ($e(t))
                for (const i of t.split(";")) {
                    const a = i.slice(0, i.indexOf(":")).trim();
                    n[a] == null && ma(r, a, "")
                }
            else
                for (const i in t)
                    n[i] == null && ma(r, i, "");
        for (const i in n)
            i === "display" && (o = !0),
            ma(r, i, n[i])
    } else if (s) {
        if (t !== n) {
            const i = r[Gx];
            i && (n += ";" + i),
            r.cssText = n,
            o = fw.test(n)
        }
    } else
        t && e.removeAttribute("style");
    La in e && (e[La] = o ? r.display : "",
    e[Kx] && (r.display = "none"))
}
const Np = /\s*!important$/;
function ma(e, t, n) {
    if (oe(n))
        n.forEach(r => ma(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = pw(e, t);
        Np.test(n) ? e.setProperty(Wt(r), n.replace(Np, ""), "important") : e[r] = n
    }
}
const Mp = ["Webkit", "Moz", "ms"]
  , gu = {};
function pw(e, t) {
    const n = gu[t];
    if (n)
        return n;
    let r = xt(t);
    if (r !== "filter" && r in e)
        return gu[t] = r;
    r = Ei(r);
    for (let s = 0; s < Mp.length; s++) {
        const o = Mp[s] + r;
        if (o in e)
            return gu[t] = o
    }
    return t
}
const Lp = "http://www.w3.org/1999/xlink";
function hw(e, t, n, r, s) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(Lp, t.slice(6, t.length)) : e.setAttributeNS(Lp, t, n);
    else {
        const o = jb(t);
        n == null || o && !C_(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function mw(e, t, n, r, s, o, i) {
    if (t === "innerHTML" || t === "textContent") {
        r && i(r, s, o),
        e[t] = n ?? "";
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value
          , l = n ?? "";
        (u !== l || !("_value"in e)) && (e.value = l),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let c = !1;
    if (n === "" || n == null) {
        const u = typeof e[t];
        u === "boolean" ? n = C_(n) : n == null && u === "string" ? (n = "",
        c = !0) : u === "number" && (n = 0,
        c = !0)
    }
    try {
        e[t] = n
    } catch {}
    c && e.removeAttribute(t)
}
function Pn(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function gw(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Hp = Symbol("_vei");
function _w(e, t, n, r, s=null) {
    const o = e[Hp] || (e[Hp] = {})
      , i = o[t];
    if (r && i)
        i.value = r;
    else {
        const [a,c] = xw(t);
        if (r) {
            const u = o[t] = Ew(r, s);
            Pn(e, a, u, c)
        } else
            i && (gw(e, a, i, c),
            o[t] = void 0)
    }
}
const $p = /(?:Once|Passive|Capture)$/;
function xw(e) {
    let t;
    if ($p.test(e)) {
        t = {};
        let r;
        for (; r = e.match($p); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Wt(e.slice(2)), t]
}
let _u = 0;
const yw = Promise.resolve()
  , vw = () => _u || (yw.then( () => _u = 0),
_u = Date.now());
function Ew(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Vt(bw(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = vw(),
    n
}
function bw(e, t) {
    if (oe(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => s => !s._stopped && r && r(s))
    } else
        return t
}
const Up = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Sw = (e, t, n, r, s, o, i, a, c) => {
    const u = s === "svg";
    t === "class" ? cw(e, r, u) : t === "style" ? dw(e, n, r) : vi(t) ? p0(t) || _w(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : ww(e, t, r, u)) ? mw(e, t, r, o, i, a, c) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    hw(e, t, r, u))
}
;
function ww(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Up(t) && ce(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
            return !1
    }
    return Up(t) && $e(n) ? !1 : t in e
}
/*! #__NO_SIDE_EFFECTS__ */
function Xx(e, t) {
    const n = xe(e);
    class r extends Pc {
        constructor(o) {
            super(n, o, t)
        }
    }
    return r.def = n,
    r
}
/*! #__NO_SIDE_EFFECTS__ */
const Cw = e => Xx(e, ay)
  , Aw = typeof HTMLElement < "u" ? HTMLElement : class {
}
;
class Pc extends Aw {
    constructor(t, n={}, r) {
        super(),
        this._def = t,
        this._props = n,
        this._instance = null,
        this._connected = !1,
        this._resolved = !1,
        this._numberProps = null,
        this._ob = null,
        this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({
            mode: "open"
        }),
        this._def.__asyncLoader || this._resolveProps(this._def))
    }
    connectedCallback() {
        this._connected = !0,
        this._instance || (this._resolved ? this._update() : this._resolveDef())
    }
    disconnectedCallback() {
        this._connected = !1,
        this._ob && (this._ob.disconnect(),
        this._ob = null),
        hn( () => {
            this._connected || (ri(null, this.shadowRoot),
            this._instance = null)
        }
        )
    }
    _resolveDef() {
        this._resolved = !0;
        for (let r = 0; r < this.attributes.length; r++)
            this._setAttr(this.attributes[r].name);
        this._ob = new MutationObserver(r => {
            for (const s of r)
                this._setAttr(s.attributeName)
        }
        ),
        this._ob.observe(this, {
            attributes: !0
        });
        const t = (r, s=!1) => {
            const {props: o, styles: i} = r;
            let a;
            if (o && !oe(o))
                for (const c in o) {
                    const u = o[c];
                    (u === Number || u && u.type === Number) && (c in this._props && (this._props[c] = Ia(this._props[c])),
                    (a || (a = Object.create(null)))[xt(c)] = !0)
                }
            this._numberProps = a,
            s && this._resolveProps(r),
            this._applyStyles(i),
            this._update()
        }
          , n = this._def.__asyncLoader;
        n ? n().then(r => t(r, !0)) : t(this._def)
    }
    _resolveProps(t) {
        const {props: n} = t
          , r = oe(n) ? n : Object.keys(n || {});
        for (const s of Object.keys(this))
            s[0] !== "_" && r.includes(s) && this._setProp(s, this[s], !0, !1);
        for (const s of r.map(xt))
            Object.defineProperty(this, s, {
                get() {
                    return this._getProp(s)
                },
                set(o) {
                    this._setProp(s, o)
                }
            })
    }
    _setAttr(t) {
        let n = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
        const r = xt(t);
        this._numberProps && this._numberProps[r] && (n = Ia(n)),
        this._setProp(r, n, !1)
    }
    _getProp(t) {
        return this._props[t]
    }
    _setProp(t, n, r=!0, s=!0) {
        n !== this._props[t] && (this._props[t] = n,
        s && this._instance && this._update(),
        r && (n === !0 ? this.setAttribute(Wt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Wt(t), n + "") : n || this.removeAttribute(Wt(t))))
    }
    _update() {
        ri(this._createVNode(), this.shadowRoot)
    }
    _createVNode() {
        const t = Pe(this._def, Ve({}, this._props));
        return this._instance || (t.ce = n => {
            this._instance = n,
            n.isCE = !0;
            const r = (o, i) => {
                this.dispatchEvent(new CustomEvent(o,{
                    detail: i
                }))
            }
            ;
            n.emit = (o, ...i) => {
                r(o, i),
                Wt(o) !== o && r(Wt(o), i)
            }
            ;
            let s = this;
            for (; s = s && (s.parentNode || s.host); )
                if (s instanceof Pc) {
                    n.parent = s._instance,
                    n.provides = s._instance.provides;
                    break
                }
        }
        ),
        t
    }
    _applyStyles(t) {
        t && t.forEach(n => {
            const r = document.createElement("style");
            r.textContent = n,
            this.shadowRoot.appendChild(r)
        }
        )
    }
}
function Tw(e="$style") {
    {
        const t = Et();
        if (!t)
            return Le;
        const n = t.type.__cssModules;
        if (!n)
            return Le;
        const r = n[e];
        return r || Le
    }
}
const Yx = new WeakMap
  , Jx = new WeakMap
  , Ha = Symbol("_moveCb")
  , jp = Symbol("_enterCb")
  , Qx = {
    name: "TransitionGroup",
    props: Ve({}, ow, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = Et()
          , r = P0();
        let s, o;
        return Tc( () => {
            if (!s.length)
                return;
            const i = e.moveClass || `${e.name || "v"}-move`;
            if (!Ow(s[0].el, n.vnode.el, i))
                return;
            s.forEach(Iw),
            s.forEach(Dw);
            const a = s.filter(Bw);
            Vx(),
            a.forEach(c => {
                const u = c.el
                  , l = u.style;
                Dn(u, i),
                l.transform = l.webkitTransform = l.transitionDuration = "";
                const f = u[Ha] = d => {
                    d && d.target !== u || (!d || /transform$/.test(d.propertyName)) && (u.removeEventListener("transitionend", f),
                    u[Ha] = null,
                    rr(u, i))
                }
                ;
                u.addEventListener("transitionend", f)
            }
            )
        }
        ),
        () => {
            const i = be(e)
              , a = Wx(i);
            let c = i.tag || ut;
            if (s = [],
            o)
                for (let u = 0; u < o.length; u++) {
                    const l = o[u];
                    l.el && l.el instanceof Element && (s.push(l),
                    Zr(l, Vs(l, a, r, n)),
                    Yx.set(l, l.el.getBoundingClientRect()))
                }
            o = t.default ? Cc(t.default()) : [];
            for (let u = 0; u < o.length; u++) {
                const l = o[u];
                l.key != null && Zr(l, Vs(l, a, r, n))
            }
            return Pe(c, null, o)
        }
    }
}
  , kw = e => delete e.mode;
Qx.props;
const Rw = Qx;
function Iw(e) {
    const t = e.el;
    t[Ha] && t[Ha](),
    t[jp] && t[jp]()
}
function Dw(e) {
    Jx.set(e, e.el.getBoundingClientRect())
}
function Bw(e) {
    const t = Yx.get(e)
      , n = Jx.get(e)
      , r = t.left - n.left
      , s = t.top - n.top;
    if (r || s) {
        const o = e.el.style;
        return o.transform = o.webkitTransform = `translate(${r}px,${s}px)`,
        o.transitionDuration = "0s",
        e
    }
}
function Ow(e, t, n) {
    const r = e.cloneNode()
      , s = e[Ks];
    s && s.forEach(a => {
        a.split(/\s+/).forEach(c => c && r.classList.remove(c))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(r);
    const {hasTransform: i} = qx(r);
    return o.removeChild(r),
    i
}
const br = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return oe(t) ? n => Ps(t, n) : t
}
;
function Fw(e) {
    e.target.composing = !0
}
function zp(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Qt = Symbol("_assign")
  , $a = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, s) {
        e[Qt] = br(s);
        const o = r || s.props && s.props.type === "number";
        Pn(e, t ? "change" : "input", i => {
            if (i.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            o && (a = Ra(a)),
            e[Qt](a)
        }
        ),
        n && Pn(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (Pn(e, "compositionstart", Fw),
        Pn(e, "compositionend", zp),
        Pn(e, "change", zp))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: s}}, o) {
        if (e[Qt] = br(o),
        e.composing)
            return;
        const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? Ra(e.value) : e.value
          , a = t ?? "";
        i !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a))
    }
}
  , V0 = {
    deep: !0,
    created(e, t, n) {
        e[Qt] = br(n),
        Pn(e, "change", () => {
            const r = e._modelValue
              , s = Gs(e)
              , o = e.checked
              , i = e[Qt];
            if (oe(r)) {
                const a = pc(r, s)
                  , c = a !== -1;
                if (o && !c)
                    i(r.concat(s));
                else if (!o && c) {
                    const u = [...r];
                    u.splice(a, 1),
                    i(u)
                }
            } else if (is(r)) {
                const a = new Set(r);
                o ? a.add(s) : a.delete(s),
                i(a)
            } else
                i(ey(e, o))
        }
        )
    },
    mounted: Wp,
    beforeUpdate(e, t, n) {
        e[Qt] = br(n),
        Wp(e, t, n)
    }
};
function Wp(e, {value: t, oldValue: n}, r) {
    e._modelValue = t,
    oe(t) ? e.checked = pc(t, r.props.value) > -1 : is(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = Er(t, ey(e, !0)))
}
const K0 = {
    created(e, {value: t}, n) {
        e.checked = Er(t, n.props.value),
        e[Qt] = br(n),
        Pn(e, "change", () => {
            e[Qt](Gs(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, r) {
        e[Qt] = br(r),
        t !== n && (e.checked = Er(t, r.props.value))
    }
}
  , Zx = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, r) {
        const s = is(t);
        Pn(e, "change", () => {
            const o = Array.prototype.filter.call(e.options, i => i.selected).map(i => n ? Ra(Gs(i)) : Gs(i));
            e[Qt](e.multiple ? s ? new Set(o) : o : o[0]),
            e._assigning = !0,
            hn( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[Qt] = br(r)
    },
    mounted(e, {value: t, modifiers: {number: n}}) {
        qp(e, t)
    },
    beforeUpdate(e, t, n) {
        e[Qt] = br(n)
    },
    updated(e, {value: t, modifiers: {number: n}}) {
        e._assigning || qp(e, t)
    }
};
function qp(e, t, n) {
    const r = e.multiple
      , s = oe(t);
    if (!(r && !s && !is(t))) {
        for (let o = 0, i = e.options.length; o < i; o++) {
            const a = e.options[o]
              , c = Gs(a);
            if (r)
                if (s) {
                    const u = typeof c;
                    u === "string" || u === "number" ? a.selected = t.some(l => String(l) === String(c)) : a.selected = pc(t, c) > -1
                } else
                    a.selected = t.has(c);
            else if (Er(Gs(a), t)) {
                e.selectedIndex !== o && (e.selectedIndex = o);
                return
            }
        }
        !r && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Gs(e) {
    return "_value"in e ? e._value : e.value
}
function ey(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const ty = {
    created(e, t, n) {
        Qi(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        Qi(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        Qi(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        Qi(e, t, n, r, "updated")
    }
};
function ny(e, t) {
    switch (e) {
    case "SELECT":
        return Zx;
    case "TEXTAREA":
        return $a;
    default:
        switch (t) {
        case "checkbox":
            return V0;
        case "radio":
            return K0;
        default:
            return $a
        }
    }
}
function Qi(e, t, n, r, s) {
    const i = ny(e.tagName, n.props && n.props.type)[s];
    i && i(e, t, n, r)
}
function Pw() {
    $a.getSSRProps = ({value: e}) => ({
        value: e
    }),
    K0.getSSRProps = ({value: e}, t) => {
        if (t.props && Er(t.props.value, e))
            return {
                checked: !0
            }
    }
    ,
    V0.getSSRProps = ({value: e}, t) => {
        if (oe(e)) {
            if (t.props && pc(e, t.props.value) > -1)
                return {
                    checked: !0
                }
        } else if (is(e)) {
            if (t.props && e.has(t.props.value))
                return {
                    checked: !0
                }
        } else if (e)
            return {
                checked: !0
            }
    }
    ,
    ty.getSSRProps = (e, t) => {
        if (typeof t.type != "string")
            return;
        const n = ny(t.type.toUpperCase(), t.props && t.props.type);
        if (n.getSSRProps)
            return n.getSSRProps(e, t)
    }
}
const Nw = ["ctrl", "shift", "alt", "meta"]
  , Mw = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => Nw.some(n => e[`${n}Key`] && !t.includes(n))
}
  , ry = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
            const a = Mw[t[i]];
            if (a && a(s, t))
                return
        }
        return e(s, ...o)
    }
    )
}
  , Lw = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Hw = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = s => {
        if (!("key"in s))
            return;
        const o = Wt(s.key);
        if (t.some(i => i === o || Lw[i] === o))
            return e(s)
    }
    )
}
  , sy = Ve({
    patchProp: Sw
}, sw);
let Ho, Vp = !1;
function oy() {
    return Ho || (Ho = Tx(sy))
}
function iy() {
    return Ho = Vp ? Ho : kx(sy),
    Vp = !0,
    Ho
}
const ri = (...e) => {
    oy().render(...e)
}
  , ay = (...e) => {
    iy().hydrate(...e)
}
  , cy = (...e) => {
    const t = oy().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const s = fy(r);
        if (!s)
            return;
        const o = t._component;
        !ce(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.innerHTML = "";
        const i = n(s, !1, ly(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"),
        s.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
  , uy = (...e) => {
    const t = iy().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const s = fy(r);
        if (s)
            return n(s, !0, ly(s))
    }
    ,
    t
}
;
function ly(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function fy(e) {
    return $e(e) ? document.querySelector(e) : e
}
let Kp = !1;
const $w = () => {
    Kp || (Kp = !0,
    Pw(),
    uw())
}
;
/**
* vue v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Uw = () => {}
  , jw = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseTransition: ox,
    BaseTransitionPropsValidators: N0,
    Comment: yt,
    DeprecationTypes: tw,
    EffectScope: x0,
    ErrorCodes: w2,
    ErrorTypeStrings: GS,
    Fragment: ut,
    KeepAlive: ax,
    ReactiveEffect: Ws,
    Static: qr,
    Suspense: wc,
    Teleport: FS,
    Text: es,
    TrackOpTypes: E2,
    Transition: ls,
    TransitionGroup: Rw,
    TriggerOpTypes: b2,
    VueElement: Pc,
    assertNumber: S2,
    callWithAsyncErrorHandling: Vt,
    callWithErrorHandling: Ln,
    camelize: xt,
    capitalize: Ei,
    cloneVNode: An,
    compatUtils: ew,
    compile: Uw,
    computed: me,
    createApp: cy,
    createBlock: It,
    createCommentVNode: Fo,
    createElementBlock: Oe,
    createElementVNode: De,
    createHydrationRenderer: kx,
    createPropsRestProxy: pS,
    createRenderer: Tx,
    createSSRApp: uy,
    createSlots: Z2,
    createStaticVNode: MS,
    createTextVNode: z0,
    createVNode: Pe,
    customRef: z_,
    defineAsyncComponent: zl,
    defineComponent: xe,
    defineCustomElement: Xx,
    defineEmits: rS,
    defineExpose: sS,
    defineModel: aS,
    defineOptions: oS,
    defineProps: nS,
    defineSSRCustomElement: Cw,
    defineSlots: iS,
    devtools: XS,
    effect: qb,
    effectScope: hc,
    getCurrentInstance: Et,
    getCurrentScope: mc,
    getTransitionRawChildren: Cc,
    guardReactiveProps: j0,
    h: Ot,
    handleError: us,
    hasInjectionContext: Dc,
    hydrate: ay,
    initCustomFormatter: VS,
    initDirectivesForSSR: $w,
    inject: qe,
    isMemoSame: Ux,
    isProxy: S0,
    isReactive: Mn,
    isReadonly: Qr,
    isRef: Xe,
    isRuntimeOnly: jS,
    isShallow: Yo,
    isVNode: Cn,
    markRaw: vc,
    mergeDefaults: fS,
    mergeModels: dS,
    mergeProps: Bc,
    nextTick: hn,
    normalizeClass: jt,
    normalizeProps: w_,
    normalizeStyle: as,
    onActivated: cx,
    onBeforeMount: M0,
    onBeforeUnmount: kc,
    onBeforeUpdate: fx,
    onDeactivated: ux,
    onErrorCaptured: L0,
    onMounted: kr,
    onRenderTracked: hx,
    onRenderTriggered: px,
    onScopeDispose: y0,
    onServerPrefetch: dx,
    onUnmounted: Rc,
    onUpdated: Tc,
    openBlock: pe,
    popScopeId: B2,
    provide: $n,
    proxyRefs: A0,
    pushScopeId: D2,
    queuePostFlushCb: Ba,
    reactive: kn,
    readonly: xc,
    ref: We,
    registerRuntimeCompiler: US,
    render: ri,
    renderList: Q2,
    renderSlot: Ic,
    resolveComponent: H2,
    resolveDirective: $2,
    resolveDynamicComponent: D0,
    resolveFilter: ZS,
    resolveTransitionHooks: Vs,
    setBlockTracking: Yl,
    setDevtoolsHook: YS,
    setTransitionHooks: Zr,
    shallowReactive: cs,
    shallowReadonly: d2,
    shallowRef: qs,
    ssrContextKey: ex,
    ssrUtils: QS,
    stop: Vb,
    toDisplayString: _0,
    toHandlerKey: Po,
    toHandlers: eS,
    toRaw: be,
    toRef: T0,
    toRefs: W_,
    toValue: g2,
    transformVNodeArgs: PS,
    triggerRef: m2,
    unref: re,
    useAttrs: lS,
    useCssModule: Tw,
    useCssVars: lw,
    useModel: qS,
    useSSRContext: tx,
    useSlots: uS,
    useTransitionState: P0,
    vModelCheckbox: V0,
    vModelDynamic: ty,
    vModelRadio: K0,
    vModelSelect: Zx,
    vModelText: $a,
    vShow: Fc,
    version: q0,
    warn: jx,
    watch: Bt,
    watchEffect: K2,
    watchPostEffect: nx,
    watchSyncEffect: rx,
    withAsyncContext: hS,
    withCtx: Hn,
    withDefaults: cS,
    withDirectives: F0,
    withKeys: Hw,
    withMemo: KS,
    withModifiers: ry,
    withScopeId: O2
}, Symbol.toStringTag, {
    value: "Module"
}))
  , zw = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Ww = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , qw = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Vw(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        Kw(e);
        return
    }
    return t
}
function Kw(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function Ua(e, t={}) {
    if (typeof e != "string")
        return e;
    const n = e.trim();
    if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
        return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true")
            return !0;
        if (r === "false")
            return !1;
        if (r === "undefined")
            return;
        if (r === "null")
            return null;
        if (r === "nan")
            return Number.NaN;
        if (r === "infinity")
            return Number.POSITIVE_INFINITY;
        if (r === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!qw.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (zw.test(e) || Ww.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Vw)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
const Gw = /#/g
  , Xw = /&/g
  , Yw = /\//g
  , Jw = /=/g
  , G0 = /\+/g
  , Qw = /%5e/gi
  , Zw = /%60/gi
  , e4 = /%7c/gi
  , t4 = /%20/gi;
function n4(e) {
    return encodeURI("" + e).replace(e4, "|")
}
function sf(e) {
    return n4(typeof e == "string" ? e : JSON.stringify(e)).replace(G0, "%2B").replace(t4, "+").replace(Gw, "%23").replace(Xw, "%26").replace(Zw, "`").replace(Qw, "^").replace(Yw, "%2F")
}
function xu(e) {
    return sf(e).replace(Jw, "%3D")
}
function ja(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function r4(e) {
    return ja(e.replace(G0, " "))
}
function s4(e) {
    return ja(e.replace(G0, " "))
}
function o4(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const s = r4(r[1]);
        if (s === "__proto__" || s === "constructor")
            continue;
        const o = s4(r[2] || "");
        t[s] === void 0 ? t[s] = o : Array.isArray(t[s]) ? t[s].push(o) : t[s] = [t[s], o]
    }
    return t
}
function i4(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n => `${xu(e)}=${sf(n)}`).join("&") : `${xu(e)}=${sf(t)}` : xu(e)
}
function a4(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => i4(t, e[t])).filter(Boolean).join("&")
}
const c4 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , u4 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , l4 = /^([/\\]\s*){2,}[^/\\]/
  , f4 = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , d4 = /\/$|\/\?|\/#/
  , p4 = /^\.?\//;
function fs(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? c4.test(e) : u4.test(e) || (t.acceptRelative ? l4.test(e) : !1)
}
function h4(e) {
    return !!e && f4.test(e)
}
function of(e="", t) {
    return t ? d4.test(e) : e.endsWith("/")
}
function X0(e="", t) {
    if (!t)
        return (of(e) ? e.slice(0, -1) : e) || "/";
    if (!of(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const s = e.indexOf("#");
    s >= 0 && (n = e.slice(0, s),
    r = e.slice(s));
    const [o,...i] = n.split("?");
    return ((o.endsWith("/") ? o.slice(0, -1) : o) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r
}
function af(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (of(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const s = e.indexOf("#");
    if (s >= 0 && (n = e.slice(0, s),
    r = e.slice(s),
    !n))
        return r;
    const [o,...i] = n.split("?");
    return o + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r
}
function m4(e="") {
    return e.startsWith("/")
}
function Gp(e="") {
    return m4(e) ? e : "/" + e
}
function g4(e, t) {
    if (py(t) || fs(e))
        return e;
    const n = X0(t);
    return e.startsWith(n) ? e : Y0(n, e)
}
function Xp(e, t) {
    if (py(t))
        return e;
    const n = X0(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function dy(e, t) {
    const n = J0(e)
      , r = {
        ...o4(n.search),
        ...t
    };
    return n.search = a4(r),
    y4(n)
}
function py(e) {
    return !e || e === "/"
}
function _4(e) {
    return e && e !== "/"
}
function Y0(e, ...t) {
    let n = e || "";
    for (const r of t.filter(s => _4(s)))
        if (n) {
            const s = r.replace(p4, "");
            n = af(n) + s
        } else
            n = r;
    return n
}
function hy(...e) {
    var i, a, c, u;
    const t = /\/(?!\/)/
      , n = e.filter(Boolean)
      , r = [];
    let s = 0;
    for (const l of n)
        if (!(!l || l === "/")) {
            for (const [f,d] of l.split(t).entries())
                if (!(!d || d === ".")) {
                    if (d === "..") {
                        if (r.length === 1 && fs(r[0]))
                            continue;
                        r.pop(),
                        s--;
                        continue
                    }
                    if (f === 1 && ((i = r[r.length - 1]) != null && i.endsWith(":/"))) {
                        r[r.length - 1] += "/" + d;
                        continue
                    }
                    r.push(d),
                    s++
                }
        }
    let o = r.join("/");
    return s >= 0 ? (a = n[0]) != null && a.startsWith("/") && !o.startsWith("/") ? o = "/" + o : (c = n[0]) != null && c.startsWith("./") && !o.startsWith("./") && (o = "./" + o) : o = "../".repeat(-1 * s) + o,
    (u = n[n.length - 1]) != null && u.endsWith("/") && !o.endsWith("/") && (o += "/"),
    o
}
function x4(e, t, n={}) {
    return n.trailingSlash || (e = af(e),
    t = af(t)),
    n.leadingSlash || (e = Gp(e),
    t = Gp(t)),
    n.encoding || (e = ja(e),
    t = ja(t)),
    e === t
}
const my = Symbol.for("ufo:protocolRelative");
function J0(e="", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [,f,d=""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!fs(e, {
        acceptRelative: !0
    }))
        return Yp(e);
    const [,r="",s,o=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,i="",a=""] = o.match(/([^#/?]*)(.*)?/) || []
      , {pathname: c, search: u, hash: l} = Yp(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
        host: i,
        pathname: c,
        search: u,
        hash: l,
        [my]: !r
    }
}
function Yp(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function y4(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , s = e.auth ? e.auth + "@" : ""
      , o = e.host || "";
    return (e.protocol || e[my] ? (e.protocol || "") + "//" : "") + s + o + t + n + r
}
class v4 extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function E4(e) {
    var c, u, l, f, d;
    const t = ((c = e.error) == null ? void 0 : c.message) || ((u = e.error) == null ? void 0 : u.toString()) || ""
      , n = ((l = e.request) == null ? void 0 : l.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , s = `[${n}] ${JSON.stringify(r)}`
      , o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , i = `${s}: ${o}${t ? ` ${t}` : ""}`
      , a = new v4(i,e.error ? {
        cause: e.error
    } : void 0);
    for (const p of ["request", "options", "response"])
        Object.defineProperty(a, p, {
            get() {
                return e[p]
            }
        });
    for (const [p,m] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, p, {
            get() {
                return e.response && e.response[m]
            }
        });
    return a
}
const b4 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Jp(e="GET") {
    return b4.has(e.toUpperCase())
}
function S4(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const w4 = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , C4 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function A4(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return C4.test(t) ? "json" : w4.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function T4(e, t, n=globalThis.Headers) {
    const r = {
        ...t,
        ...e
    };
    if (t != null && t.params && (e != null && e.params) && (r.params = {
        ...t == null ? void 0 : t.params,
        ...e == null ? void 0 : e.params
    }),
    t != null && t.query && (e != null && e.query) && (r.query = {
        ...t == null ? void 0 : t.query,
        ...e == null ? void 0 : e.query
    }),
    t != null && t.headers && (e != null && e.headers)) {
        r.headers = new n((t == null ? void 0 : t.headers) || {});
        for (const [s,o] of new n((e == null ? void 0 : e.headers) || {}))
            r.headers.set(s, o)
    }
    return r
}
const k4 = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , R4 = new Set([101, 204, 205, 304]);
function gy(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function s(a) {
        const c = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !c) {
            let l;
            typeof a.options.retry == "number" ? l = a.options.retry : l = Jp(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (l > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : k4.has(f))) {
                const d = a.options.retryDelay || 0;
                return d > 0 && await new Promise(p => setTimeout(p, d)),
                o(a.request, {
                    ...a.options,
                    retry: l - 1
                })
            }
        }
        const u = E4(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, o),
        u
    }
    const o = async function(c, u={}) {
        var p;
        const l = {
            request: c,
            options: T4(u, e.defaults, n),
            response: void 0,
            error: void 0
        };
        l.options.method = (p = l.options.method) == null ? void 0 : p.toUpperCase(),
        l.options.onRequest && await l.options.onRequest(l),
        typeof l.request == "string" && (l.options.baseURL && (l.request = g4(l.request, l.options.baseURL)),
        (l.options.query || l.options.params) && (l.request = dy(l.request, {
            ...l.options.params,
            ...l.options.query
        }))),
        l.options.body && Jp(l.options.method) && (S4(l.options.body) ? (l.options.body = typeof l.options.body == "string" ? l.options.body : JSON.stringify(l.options.body),
        l.options.headers = new n(l.options.headers || {}),
        l.options.headers.has("content-type") || l.options.headers.set("content-type", "application/json"),
        l.options.headers.has("accept") || l.options.headers.set("accept", "application/json")) : ("pipeTo"in l.options.body && typeof l.options.body.pipeTo == "function" || typeof l.options.body.pipe == "function") && ("duplex"in l.options || (l.options.duplex = "half")));
        let f;
        if (!l.options.signal && l.options.timeout) {
            const m = new r;
            f = setTimeout( () => m.abort(), l.options.timeout),
            l.options.signal = m.signal
        }
        try {
            l.response = await t(l.request, l.options)
        } catch (m) {
            return l.error = m,
            l.options.onRequestError && await l.options.onRequestError(l),
            await s(l)
        } finally {
            f && clearTimeout(f)
        }
        if (l.response.body && !R4.has(l.response.status) && l.options.method !== "HEAD") {
            const m = (l.options.parseResponse ? "json" : l.options.responseType) || A4(l.response.headers.get("content-type") || "");
            switch (m) {
            case "json":
                {
                    const h = await l.response.text()
                      , g = l.options.parseResponse || Ua;
                    l.response._data = g(h);
                    break
                }
            case "stream":
                {
                    l.response._data = l.response.body;
                    break
                }
            default:
                l.response._data = await l.response[m]()
            }
        }
        return l.options.onResponse && await l.options.onResponse(l),
        !l.options.ignoreResponseError && l.response.status >= 400 && l.response.status < 600 ? (l.options.onResponseError && await l.options.onResponseError(l),
        await s(l)) : l.response
    }
      , i = async function(c, u) {
        return (await o(c, u))._data
    };
    return i.raw = o,
    i.native = (...a) => t(...a),
    i.create = (a={}) => gy({
        ...e,
        defaults: {
            ...e.defaults,
            ...a
        }
    }),
    i
}
const Q0 = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , I4 = Q0.fetch || ( () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , D4 = Q0.Headers
  , B4 = Q0.AbortController
  , O4 = gy({
    fetch: I4,
    Headers: D4,
    AbortController: B4
})
  , F4 = O4
  , P4 = () => {
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , za = P4().app
  , N4 = () => za.baseURL
  , M4 = () => za.buildAssetsDir
  , Z0 = (...e) => hy(_y(), M4(), ...e)
  , _y = (...e) => {
    const t = za.cdnURL || za.baseURL;
    return e.length ? hy(t, ...e) : t
}
;
globalThis.__buildAssetsURL = Z0,
globalThis.__publicAssetsURL = _y;
globalThis.$fetch || (globalThis.$fetch = F4.create({
    baseURL: N4()
}));
function cf(e, t={}, n) {
    for (const r in e) {
        const s = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? cf(s, t, o) : typeof s == "function" && (t[o] = s)
    }
    return t
}
const L4 = {
    run: e => e()
}
  , H4 = () => L4
  , xy = typeof console.createTask < "u" ? console.createTask : H4;
function $4(e, t) {
    const n = t.shift()
      , r = xy(n);
    return e.reduce( (s, o) => s.then( () => r.run( () => o(...t))), Promise.resolve())
}
function U4(e, t) {
    const n = t.shift()
      , r = xy(n);
    return Promise.all(e.map(s => r.run( () => s(...t))))
}
function yu(e, t) {
    for (const n of [...e])
        n(t)
}
class j4 {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return () => {}
            ;
        const s = t;
        let o;
        for (; this._deprecatedHooks[t]; )
            o = this._deprecatedHooks[t],
            t = o.to;
        if (o && !r.allowDeprecated) {
            let i = o.message;
            i || (i = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(i) || (console.warn(i),
            this._deprecatedMessages.add(i))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        () => {
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, s = (...o) => (typeof r == "function" && r(),
        r = void 0,
        s = void 0,
        n(...o));
        return r = this.hook(t, s),
        r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1),
            this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const s of r)
            this.hook(t, s)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = cf(t)
          , r = Object.keys(n).map(s => this.hook(s, n[s]));
        return () => {
            for (const s of r.splice(0, r.length))
                s()
        }
    }
    removeHooks(t) {
        const n = cf(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith($4, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(U4, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const s = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && yu(this._before, s);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally( () => {
            this._after && s && yu(this._after, s)
        }
        ) : (this._after && s && yu(this._after, s),
        o)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function yy() {
    return new j4
}
function z4(e={}) {
    let t, n = !1;
    const r = i => {
        if (t && t !== i)
            throw new Error("Context conflict")
    }
    ;
    let s;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? s = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const o = () => {
        if (s && t === void 0) {
            const i = s.getStore();
            if (i !== void 0)
                return i
        }
        return t
    }
    ;
    return {
        use: () => {
            const i = o();
            if (i === void 0)
                throw new Error("Context is not available");
            return i
        }
        ,
        tryUse: () => o(),
        set: (i, a) => {
            a || r(i),
            t = i,
            n = !0
        }
        ,
        unset: () => {
            t = void 0,
            n = !1
        }
        ,
        call: (i, a) => {
            r(i),
            t = i;
            try {
                return s ? s.run(i, a) : a()
            } finally {
                n || (t = void 0)
            }
        }
        ,
        async callAsync(i, a) {
            t = i;
            const c = () => {
                t = i
            }
              , u = () => t === i ? c : void 0;
            uf.add(u);
            try {
                const l = s ? s.run(i, a) : a();
                return n || (t = void 0),
                await l
            } finally {
                uf.delete(u)
            }
        }
    }
}
function W4(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = z4({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const Wa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Qp = "__unctx__"
  , q4 = Wa[Qp] || (Wa[Qp] = W4())
  , V4 = (e, t={}) => q4.get(e, t)
  , Zp = "__unctx_async_handlers__"
  , uf = Wa[Zp] || (Wa[Zp] = new Set);
function si(e) {
    const t = [];
    for (const s of uf) {
        const o = s();
        o && t.push(o)
    }
    const n = () => {
        for (const s of t)
            s()
    }
    ;
    let r = e();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(s => {
        throw n(),
        s
    }
    )),
    [r, n]
}
const vy = V4("nuxt-app", {
    asyncContext: !1
})
  , K4 = "__nuxt_plugin";
function G4(e) {
    let t = 0;
    const n = {
        _scope: hc(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.11.2"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: kn({
            data: {},
            state: {},
            once: new Set,
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: s => n._scope.run( () => J4(n, s)),
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return () => {}
                ;
            t++;
            let s = !1;
            return () => {
                if (!s && (s = !0,
                t--,
                t === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        _payloadRevivers: {},
        ...e
    };
    n.hooks = yy(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (s, o) => {
        const i = "$" + s;
        Zi(n, i, o),
        Zi(n.vueApp.config.globalProperties, i, o)
    }
    ,
    Zi(n.vueApp, "$nuxt", n),
    Zi(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener("nuxt.preloadError", o => {
            n.callHook("app:chunkError", {
                error: o.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || Ze;
        const s = n.hook("app:error", (...o) => {
            console.error("[nuxt] error caught during app initialization", ...o)
        }
        );
        n.hook("app:mounted", s)
    }
    const r = n.payload.config;
    return n.provide("config", r),
    n
}
async function X4(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks),
    typeof t == "function") {
        const {provide: n} = await e.runWithContext( () => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function Y4(e, t) {
    const n = []
      , r = []
      , s = []
      , o = [];
    let i = 0;
    async function a(c) {
        var l;
        const u = ((l = c.dependsOn) == null ? void 0 : l.filter(f => t.some(d => d._name === f) && !n.includes(f))) ?? [];
        if (u.length > 0)
            r.push([new Set(u), c]);
        else {
            const f = X4(e, c).then(async () => {
                c._name && (n.push(c._name),
                await Promise.all(r.map(async ([d,p]) => {
                    d.has(c._name) && (d.delete(c._name),
                    d.size === 0 && (i++,
                    await a(p)))
                }
                )))
            }
            );
            c.parallel ? s.push(f.catch(d => o.push(d))) : await f
        }
    }
    for (const c of t)
        await a(c);
    if (await Promise.all(s),
    i)
        for (let c = 0; c < i; c++)
            await Promise.all(s);
    if (o.length)
        throw o[0]
}
function Nt(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || ( () => {}
    ), e, {
        [K4]: !0,
        _name: t
    })
}
function J4(e, t, n) {
    const r = () => t();
    return vy.set(e),
    e.vueApp.runWithContext(r)
}
function Q4() {
    var t;
    let e;
    return Dc() && (e = (t = Et()) == null ? void 0 : t.appContext.app.$nuxt),
    e = e || vy.tryUse(),
    e || null
}
function Ze() {
    const e = Q4();
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function ds(e) {
    return Ze().$config
}
function Zi(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
function Z4(e, t) {
    return {
        ctx: {
            table: e
        },
        matchAll: n => by(n, e)
    }
}
function Ey(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map( ([r,s]) => [r, Ey(s)])) : new Map(Object.entries(e[n]));
    return t
}
function eC(e) {
    return Z4(Ey(e))
}
function by(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [o,i] of eh(t.wildcard))
        (e === o || e.startsWith(o + "/")) && r.push(i);
    for (const [o,i] of eh(t.dynamic))
        if (e.startsWith(o + "/")) {
            const a = "/" + e.slice(o.length).split("/").splice(2).join("/");
            r.push(...by(a, i))
        }
    const s = t.static.get(e);
    return s && r.push(s),
    r.filter(Boolean)
}
function eh(e) {
    return [...e.entries()].sort( (t, n) => t[0].length - n[0].length)
}
function vu(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function lf(e, t, n=".", r) {
    if (!vu(t))
        return lf(e, {}, n, r);
    const s = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const i = e[o];
        i != null && (r && r(s, o, i, n) || (Array.isArray(i) && Array.isArray(s[o]) ? s[o] = [...i, ...s[o]] : vu(i) && vu(s[o]) ? s[o] = lf(i, s[o], (n ? `${n}.` : "") + o.toString(), r) : s[o] = i))
    }
    return s
}
function Sy(e) {
    return (...t) => t.reduce( (n, r) => lf(n, r, "", e), {})
}
const wy = Sy()
  , tC = Sy( (e, t, n) => {
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function nC(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var rC = Object.defineProperty
  , sC = (e, t, n) => t in e ? rC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Pr = (e, t, n) => (sC(e, typeof t != "symbol" ? t + "" : t, n),
n);
class ff extends Error {
    constructor(t, n={}) {
        super(t, n),
        Pr(this, "statusCode", 500),
        Pr(this, "fatal", !1),
        Pr(this, "unhandled", !1),
        Pr(this, "statusMessage"),
        Pr(this, "data"),
        Pr(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: pf(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Cy(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
Pr(ff, "__h3_error__", !0);
function df(e) {
    if (typeof e == "string")
        return new ff(e);
    if (oC(e))
        return e;
    const t = new ff(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (nC(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (e.data && (t.data = e.data),
    e.statusCode ? t.statusCode = pf(e.statusCode, t.statusCode) : e.status && (t.statusCode = pf(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        Cy(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function oC(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const iC = /[^\u0009\u0020-\u007E]/g;
function Cy(e="") {
    return e.replace(iC, "")
}
function pf(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const Ay = Symbol("layout-meta")
  , Ci = Symbol("route")
  , mn = () => {
    var e;
    return (e = Ze()) == null ? void 0 : e.$router
}
  , ed = () => Dc() ? qe(Ci, Ze()._route) : Ze()._route;
const aC = () => {
    try {
        if (Ze()._processingMiddleware)
            return !0
    } catch {
        return !1
    }
    return !1
}
  , cC = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : dy(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
        const {target: a="_blank", windowFeatures: c={}} = t.open
          , u = Object.entries(c).filter( ([l,f]) => f !== void 0).map( ([l,f]) => `${l.toLowerCase()}=${f}`).join(", ");
        return open(n, a, u),
        Promise.resolve()
    }
    const r = (t == null ? void 0 : t.external) || fs(n, {
        acceptRelative: !0
    });
    if (r) {
        if (!(t != null && t.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = J0(n).protocol;
        if (a && h4(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const s = aC();
    if (!r && s)
        return e;
    const o = mn()
      , i = Ze();
    return r ? (i._scope.stop(),
    t != null && t.replace ? location.replace(n) : location.href = n,
    s ? i.isHydrating ? new Promise( () => {}
    ) : !1 : Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
}
  , Ty = "__nuxt_error"
  , Nc = () => T0(Ze().payload, "error")
  , Ts = e => {
    const t = Mc(e);
    try {
        const n = Ze()
          , r = Nc();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , uC = async (e={}) => {
    const t = Ze()
      , n = Nc();
    t.callHook("app:error:cleared", e),
    e.redirect && await mn().replace(e.redirect),
    n.value = null
}
  , lC = e => !!e && typeof e == "object" && Ty in e
  , Mc = e => {
    const t = df(e);
    return Object.defineProperty(t, Ty, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , fC = "modulepreload"
  , dC = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , th = {}
  , pC = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , i = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.all(n.map(a => {
            if (a = dC(a, r),
            a in th)
                return;
            th[a] = !0;
            const c = a.endsWith(".css")
              , u = c ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${a}"]${u}`))
                return;
            const l = document.createElement("link");
            if (l.rel = c ? "stylesheet" : fC,
            c || (l.as = "script",
            l.crossOrigin = ""),
            l.href = a,
            i && l.setAttribute("nonce", i),
            document.head.appendChild(l),
            c)
                return new Promise( (f, d) => {
                    l.addEventListener("load", f),
                    l.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${a}`)))
                }
                )
        }
        ))
    }
    return s.then( () => t()).catch(o => {
        const i = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (i.payload = o,
        window.dispatchEvent(i),
        !i.defaultPrevented)
            throw o
    }
    )
}
  , Je = (...e) => pC(...e).catch(t => {
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , hC = -1
  , mC = -2
  , gC = -3
  , _C = -4
  , xC = -5
  , yC = -6;
function vC(e, t) {
    return EC(JSON.parse(e), t)
}
function EC(e, t) {
    if (typeof e == "number")
        return s(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function s(o, i=!1) {
        if (o === hC)
            return;
        if (o === gC)
            return NaN;
        if (o === _C)
            return 1 / 0;
        if (o === xC)
            return -1 / 0;
        if (o === yC)
            return -0;
        if (i)
            throw new Error("Invalid input");
        if (o in r)
            return r[o];
        const a = n[o];
        if (!a || typeof a != "object")
            r[o] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const c = a[0]
                  , u = t == null ? void 0 : t[c];
                if (u)
                    return r[o] = u(s(a[1]));
                switch (c) {
                case "Date":
                    r[o] = new Date(a[1]);
                    break;
                case "Set":
                    const l = new Set;
                    r[o] = l;
                    for (let p = 1; p < a.length; p += 1)
                        l.add(s(a[p]));
                    break;
                case "Map":
                    const f = new Map;
                    r[o] = f;
                    for (let p = 1; p < a.length; p += 2)
                        f.set(s(a[p]), s(a[p + 1]));
                    break;
                case "RegExp":
                    r[o] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[o] = Object(a[1]);
                    break;
                case "BigInt":
                    r[o] = BigInt(a[1]);
                    break;
                case "null":
                    const d = Object.create(null);
                    r[o] = d;
                    for (let p = 1; p < a.length; p += 2)
                        d[a[p]] = s(a[p + 1]);
                    break;
                default:
                    throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(a.length);
                r[o] = c;
                for (let u = 0; u < a.length; u += 1) {
                    const l = a[u];
                    l !== mC && (c[u] = s(l))
                }
            }
        else {
            const c = {};
            r[o] = c;
            for (const u in a) {
                const l = a[u];
                c[u] = s(l)
            }
        }
        return r[o]
    }
    return s(0)
}
function bC(e) {
    return Array.isArray(e) ? e : [e]
}
const SC = ["title", "titleTemplate", "script", "style", "noscript"]
  , ga = ["base", "meta", "link", "style", "script", "noscript"]
  , wC = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , CC = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , ky = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , AC = typeof window < "u";
function td(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function nh(e) {
    return e._h || td(e._d ? e._d : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props).map( ([t,n]) => `${t}:${String(n)}`).join(",")}`)
}
function Ry(e, t) {
    const {props: n, tag: r} = e;
    if (CC.includes(r))
        return r;
    if (r === "link" && n.rel === "canonical")
        return "canonical";
    if (n.charset)
        return "charset";
    const s = ["id"];
    r === "meta" && s.push("name", "property", "http-equiv");
    for (const o of s)
        if (typeof n[o] < "u") {
            const i = String(n[o]);
            return `${r}:${o}:${i}`
        }
    return !1
}
function rh(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
async function TC(e, t, n) {
    const r = {
        tag: e,
        props: await Iy(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
            ...t
        } : {
            [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return ky.forEach(s => {
        const o = typeof r.props[s] < "u" ? r.props[s] : n[s];
        typeof o < "u" && ((!["innerHTML", "textContent", "children"].includes(s) || SC.includes(r.tag)) && (r[s === "children" ? "innerHTML" : s] = o),
        delete r.props[s])
    }
    ),
    r.props.body && (r.tagPosition = "bodyClose",
    delete r.props.body),
    r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    Array.isArray(r.props.content) ? r.props.content.map(s => ({
        ...r,
        props: {
            ...r.props,
            content: s
        }
    })) : r
}
function kC(e, t) {
    var r;
    const n = e === "class" ? " " : ";";
    return typeof t == "object" && !Array.isArray(t) && (t = Object.entries(t).filter( ([,s]) => s).map( ([s,o]) => e === "style" ? `${s}:${o}` : s)),
    (r = Array.isArray(t) ? t.join(n) : t) == null ? void 0 : r.split(n).filter(s => s.trim()).filter(Boolean).join(n)
}
async function Iy(e, t) {
    for (const n of Object.keys(e)) {
        if (["class", "style"].includes(n)) {
            e[n] = kC(n, e[n]);
            continue
        }
        if (e[n]instanceof Promise && (e[n] = await e[n]),
        !t && !ky.includes(n)) {
            const r = String(e[n])
              , s = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = s ? "true" : !0 : e[n] || (s && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const RC = 10;
async function IC(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter( ([n,r]) => typeof r < "u" && wC.includes(n)).forEach( ([n,r]) => {
        const s = bC(r);
        t.push(...s.map(o => TC(n, o, e)).flat())
    }
    ),
    (await Promise.all(t)).flat().filter(Boolean).map( (n, r) => (n._e = e._i,
    e.mode && (n._m = e.mode),
    n._p = (e._i << RC) + r,
    n))
}
const sh = {
    base: -10,
    title: 10
}
  , oh = {
    critical: -80,
    high: -10,
    low: 20
};
function qa(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
    e.props.charset && (t = -20),
    e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in sh && (t = sh[e.tag]),
    typeof n == "string" && n in oh ? t + oh[n] : t)
}
const DC = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , ih = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , tr = "%separator";
function _a(e, t, n) {
    if (typeof e != "string" || !e.includes("%"))
        return e;
    function r(i) {
        let a;
        return ["s", "pageTitle"].includes(i) ? a = t.pageTitle : i.includes(".") ? a = i.split(".").reduce( (c, u) => c && c[u] || void 0, t) : a = t[i],
        typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
    }
    let s = e;
    try {
        s = decodeURI(e)
    } catch {}
    return (s.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(i => {
        const a = r(i.slice(1));
        typeof a == "string" && (e = e.replace(new RegExp(`\\${i}(\\W|$)`,"g"), (c, u) => `${a}${u}`).trim())
    }
    ),
    e.includes(tr) && (e.endsWith(tr) && (e = e.slice(0, -tr.length).trim()),
    e.startsWith(tr) && (e = e.slice(tr.length).trim()),
    e = e.replace(new RegExp(`\\${tr}\\s*\\${tr}`,"g"), tr),
    e = _a(e, {
        separator: n
    }, n)),
    e
}
async function Dy(e, t={}) {
    var l;
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty)
        return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r),
    !r.shouldRender)
        return;
    const s = (await e.resolveTags()).map(f => ({
        tag: f,
        id: ga.includes(f.tag) ? nh(f) : f.tag,
        shouldRender: !0
    }));
    let o = e._dom;
    if (!o) {
        o = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        for (const f of ["body", "head"]) {
            const d = (l = n[f]) == null ? void 0 : l.children
              , p = [];
            for (const m of [...d].filter(h => ga.includes(h.tagName.toLowerCase()))) {
                const h = {
                    tag: m.tagName.toLowerCase(),
                    props: await Iy(m.getAttributeNames().reduce( (x, _) => ({
                        ...x,
                        [_]: m.getAttribute(_)
                    }), {})),
                    innerHTML: m.innerHTML
                };
                let g = 1
                  , E = Ry(h);
                for (; E && p.find(x => x._d === E); )
                    E = `${E}:${g++}`;
                h._d = E || void 0,
                p.push(h),
                o.elMap[m.getAttribute("data-hid") || nh(h)] = m
            }
        }
    }
    o.pendingSideEffects = {
        ...o.sideEffects || {}
    },
    o.sideEffects = {};
    function i(f, d, p) {
        const m = `${f}:${d}`;
        o.sideEffects[m] = p,
        delete o.pendingSideEffects[m]
    }
    function a({id: f, $el: d, tag: p}) {
        const m = p.tag.endsWith("Attrs");
        o.elMap[f] = d,
        m || (["textContent", "innerHTML"].forEach(h => {
            p[h] && p[h] !== d[h] && (d[h] = p[h])
        }
        ),
        i(f, "el", () => {
            var h;
            (h = o.elMap[f]) == null || h.remove(),
            delete o.elMap[f]
        }
        ));
        for (const [h,g] of Object.entries(p._eventHandlers || {}))
            d.getAttribute(`data-${h}`) !== "" && ((p.tag === "bodyAttrs" ? n.defaultView : d).addEventListener(h.replace("on", ""), g.bind(d)),
            d.setAttribute(`data-${h}`, ""));
        Object.entries(p.props).forEach( ([h,g]) => {
            const E = `attr:${h}`;
            if (h === "class")
                for (const x of (g || "").split(" ").filter(Boolean))
                    m && i(f, `${E}:${x}`, () => d.classList.remove(x)),
                    !d.classList.contains(x) && d.classList.add(x);
            else if (h === "style")
                for (const x of (g || "").split(";").filter(Boolean)) {
                    const [_,...y] = x.split(":").map(S => S.trim());
                    i(f, `${E}:${x}:${_}`, () => {
                        d.style.removeProperty(_)
                    }
                    ),
                    d.style.setProperty(_, y.join(":"))
                }
            else
                d.getAttribute(h) !== g && d.setAttribute(h, g === !0 ? "" : String(g)),
                m && i(f, E, () => d.removeAttribute(h))
        }
        )
    }
    const c = []
      , u = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    for (const f of s) {
        const {tag: d, shouldRender: p, id: m} = f;
        if (p) {
            if (d.tag === "title") {
                n.title = d.textContent;
                continue
            }
            f.$el = f.$el || o.elMap[m],
            f.$el ? a(f) : ga.includes(d.tag) && c.push(f)
        }
    }
    for (const f of c) {
        const d = f.tag.tagPosition || "head";
        f.$el = n.createElement(f.tag.tag),
        a(f),
        u[d] = u[d] || n.createDocumentFragment(),
        u[d].appendChild(f.$el)
    }
    for (const f of s)
        await e.hooks.callHook("dom:renderTag", f, n, i);
    u.head && n.head.appendChild(u.head),
    u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
    u.bodyClose && n.body.appendChild(u.bodyClose),
    Object.values(o.pendingSideEffects).forEach(f => f()),
    e._dom = o,
    e.dirty = !1,
    await e.hooks.callHook("dom:rendered", {
        renders: s
    })
}
async function BC(e, t={}) {
    const n = t.delayFn || (r => setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r => n(async () => {
        await Dy(e, t),
        delete e._domUpdatePromise,
        r()
    }
    ))
}
function OC(e) {
    return t => {
        var r, s;
        const n = ((s = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    BC(o, e)
                }
            }
        }
    }
}
const FC = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , PC = {
    hooks: {
        "tag:normalise": function({tag: e}) {
            ["hid", "vmid", "key"].forEach(r => {
                e.props[r] && (e.key = e.props[r],
                delete e.props[r])
            }
            );
            const n = Ry(e) || (e.key ? `${e.tag}:${e.key}` : !1);
            n && (e._d = n)
        },
        "tags:resolve": function(e) {
            const t = {};
            e.tags.forEach(r => {
                const s = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , o = t[s];
                if (o) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && FC.includes(r.tag) && (a = "merge"),
                    a === "merge") {
                        const c = o.props;
                        ["class", "style"].forEach(u => {
                            c[u] && (r.props[u] ? (u === "style" && !c[u].endsWith(";") && (c[u] += ";"),
                            r.props[u] = `${c[u]} ${r.props[u]}`) : r.props[u] = c[u])
                        }
                        ),
                        t[s].props = {
                            ...c,
                            ...r.props
                        };
                        return
                    } else if (r._e === o._e) {
                        o._duped = o._duped || [],
                        r._d = `${o._d}:${o._duped.length + 1}`,
                        o._duped.push(r);
                        return
                    } else if (qa(r) > qa(o))
                        return
                }
                const i = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (ga.includes(r.tag) && i === 0) {
                    delete t[s];
                    return
                }
                t[s] = r
            }
            );
            const n = [];
            Object.values(t).forEach(r => {
                const s = r._duped;
                delete r._duped,
                n.push(r),
                s && n.push(...s)
            }
            ),
            e.tags = n,
            e.tags = e.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
        }
    }
}
  , NC = {
    mode: "server",
    hooks: {
        "tags:resolve": function(e) {
            const t = {};
            e.tags.filter(n => ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n => {
                t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
            }
            ),
            Object.keys(t).length && e.tags.push({
                tag: "script",
                innerHTML: JSON.stringify(t),
                props: {
                    id: "unhead:payload",
                    type: "application/json"
                }
            })
        }
    }
}
  , MC = ["script", "link", "bodyAttrs"]
  , LC = e => ({
    hooks: {
        "tags:resolve": function(t) {
            for (const n of t.tags.filter(r => MC.includes(r.tag)))
                Object.entries(n.props).forEach( ([r,s]) => {
                    r.startsWith("on") && typeof s == "function" && (e.ssr && ih.includes(r) ? n.props[r] = `this.dataset.${r}fired = true` : delete n.props[r],
                    n._eventHandlers = n._eventHandlers || {},
                    n._eventHandlers[r] = s)
                }
                ),
                e.ssr && n._eventHandlers && (n.props.src || n.props.href) && (n.key = n.key || td(n.props.src || n.props.href))
        },
        "dom:renderTag": function({$el: t, tag: n}) {
            var r, s;
            for (const o of Object.keys((t == null ? void 0 : t.dataset) || {}).filter(i => ih.some(a => `${a}fired` === i))) {
                const i = o.replace("fired", "");
                (s = (r = n._eventHandlers) == null ? void 0 : r[i]) == null || s.call(t, new Event(i.replace("on", "")))
            }
        }
    }
})
  , HC = ["link", "style", "script", "noscript"]
  , $C = {
    hooks: {
        "tag:normalise": ({tag: e}) => {
            e.key && HC.includes(e.tag) && (e.props["data-hid"] = e._h = td(e.key))
        }
    }
}
  , UC = {
    hooks: {
        "tags:resolve": e => {
            const t = n => {
                var r;
                return (r = e.tags.find(s => s._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of DC)
                for (const s of e.tags.filter(o => typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
                    const o = t(s.tagPriority.replace(n, ""));
                    typeof o < "u" && (s._p = o + r)
                }
            e.tags.sort( (n, r) => n._p - r._p).sort( (n, r) => qa(n) - qa(r))
        }
    }
}
  , jC = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , zC = e => ({
    hooks: {
        "tags:resolve": t => {
            var a;
            const {tags: n} = t
              , r = (a = n.find(c => c.tag === "title")) == null ? void 0 : a.textContent
              , s = n.findIndex(c => c.tag === "templateParams")
              , o = s !== -1 ? n[s].props : {}
              , i = o.separator || "|";
            delete o.separator,
            o.pageTitle = _a(o.pageTitle || r || "", o, i);
            for (const c of n.filter(u => u.processTemplateParams !== !1)) {
                const u = jC[c.tag];
                u && typeof c.props[u] == "string" ? c.props[u] = _a(c.props[u], o, i) : (c.processTemplateParams === !0 || ["titleTemplate", "title"].includes(c.tag)) && ["innerHTML", "textContent"].forEach(l => {
                    typeof c[l] == "string" && (c[l] = _a(c[l], o, i))
                }
                )
            }
            e._templateParams = o,
            e._separator = i,
            t.tags = n.filter(c => c.tag !== "templateParams")
        }
    }
})
  , WC = {
    hooks: {
        "tags:resolve": e => {
            const {tags: t} = e;
            let n = t.findIndex(s => s.tag === "titleTemplate");
            const r = t.findIndex(s => s.tag === "title");
            if (r !== -1 && n !== -1) {
                const s = rh(t[n].textContent, t[r].textContent);
                s !== null ? t[r].textContent = s || t[r].textContent : delete t[r]
            } else if (n !== -1) {
                const s = rh(t[n].textContent);
                s !== null && (t[n].textContent = s,
                t[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete t[n],
            e.tags = t.filter(Boolean)
        }
    }
}
  , qC = {
    hooks: {
        "tags:afterResolve": function(e) {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let By;
function VC(e={}) {
    const t = KC(e);
    return t.use(OC()),
    By = t
}
function ah(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function KC(e={}) {
    const t = yy();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (AC ? document : void 0);
    const n = !e.document
      , r = () => {
        a.dirty = !0,
        t.callHook("entries:updated", a)
    }
    ;
    let s = 0
      , o = [];
    const i = []
      , a = {
        plugins: i,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        headEntries() {
            return o
        },
        use(c) {
            const u = typeof c == "function" ? c(a) : c;
            (!u.key || !i.some(l => l.key === u.key)) && (i.push(u),
            ah(u.mode, n) && t.addHooks(u.hooks || {}))
        },
        push(c, u) {
            u == null || delete u.head;
            const l = {
                _i: s++,
                input: c,
                ...u
            };
            return ah(l.mode, n) && (o.push(l),
            r()),
            {
                dispose() {
                    o = o.filter(f => f._i !== l._i),
                    t.callHook("entries:updated", a),
                    r()
                },
                patch(f) {
                    o = o.map(d => (d._i === l._i && (d.input = l.input = f),
                    d)),
                    r()
                }
            }
        },
        async resolveTags() {
            const c = {
                tags: [],
                entries: [...o]
            };
            await t.callHook("entries:resolve", c);
            for (const u of c.entries) {
                const l = u.resolvedInput || u.input;
                if (u.resolvedInput = await (u.transform ? u.transform(l) : l),
                u.resolvedInput)
                    for (const f of await IC(u)) {
                        const d = {
                            tag: f,
                            entry: u,
                            resolvedOptions: a.resolvedOptions
                        };
                        await t.callHook("tag:normalise", d),
                        c.tags.push(d.tag)
                    }
            }
            return await t.callHook("tags:beforeResolve", c),
            await t.callHook("tags:resolve", c),
            await t.callHook("tags:afterResolve", c),
            c.tags
        },
        ssr: n
    };
    return [PC, NC, LC, $C, UC, zC, WC, qC, ...(e == null ? void 0 : e.plugins) || []].forEach(c => a.use(c)),
    a.hooks.callHook("init", a),
    a
}
function GC() {
    return By
}
const XC = q0.startsWith("3");
function YC(e) {
    return typeof e == "function" ? e() : re(e)
}
function hf(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = YC(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r => hf(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map( ([r,s]) => r === "titleTemplate" || r.startsWith("on") ? [r, re(s)] : [r, hf(s, r)])) : n
}
const JC = {
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries)
                t.resolvedInput = hf(t.input)
        }
    }
}
  , Oy = "usehead";
function QC(e) {
    return {
        install(n) {
            XC && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(Oy, e))
        }
    }.install
}
function ZC(e={}) {
    e.domDelayFn = e.domDelayFn || (n => hn( () => setTimeout( () => n(), 0)));
    const t = VC(e);
    return t.use(JC),
    t.install = QC(t),
    t
}
const mf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , gf = "__unhead_injection_handler__";
function e8(e) {
    mf[gf] = e
}
function r7() {
    if (gf in mf)
        return mf[gf]();
    const e = qe(Oy);
    return e || GC()
}
const t8 = {
    nuxt: {
        buildId: "6d44f18b-09f5-4851-9678-0c98f3807984"
    }
}
  , n8 = tC(t8);
function Fy() {
    const e = Ze();
    return e._appConfig || (e._appConfig = kn(n8)),
    e._appConfig
}
const r8 = !1
  , _f = !1
  , s8 = !1
  , s7 = {
    componentName: "NuxtLink"
}
  , o8 = "#__nuxt";
let xa, Py;
function i8() {
    var t;
    const e = (t = Fy().nuxt) == null ? void 0 : t.buildId;
    return xa = $fetch(Z0(`builds/meta/${e}.json`)),
    xa.then(n => {
        Py = eC(n.matcher)
    }
    ),
    xa
}
function Lc() {
    return xa || i8()
}
async function nd(e) {
    return await Lc(),
    wy({}, ...Py.matchAll(e).reverse())
}
function ch(e, t={}) {
    const n = c8(e, t)
      , r = Ze()
      , s = r._payloadCache = r._payloadCache || {};
    return n in s || (s[n] = u8(e).then(o => o ? Ny(n).then(i => i || (delete s[n],
    null)) : (s[n] = null,
    null))),
    s[n]
}
const a8 = "_payload.json";
function c8(e, t={}) {
    var s;
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || fs(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : (s = Fy().nuxt) == null ? void 0 : s.buildId);
    return Y0(ds().app.baseURL, n.pathname, a8 + (r ? `?${r}` : ""))
}
async function Ny(e) {
    const t = fetch(e).then(n => n.text().then(My));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function u8(e=ed().path) {
    if (e = X0(e),
    (await Lc()).prerendered.includes(e))
        return !0;
    const n = await nd(e);
    return !!n.prerender && !n.redirect
}
let ea = null;
async function l8() {
    if (ea)
        return ea;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await My(e.textContent || "")
      , n = e.dataset.src ? await Ny(e.dataset.src) : void 0;
    return ea = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    ea
}
async function My(e) {
    return await vC(e, Ze()._payloadRevivers)
}
function f8(e, t) {
    Ze()._payloadRevivers[e] = t
}
const uh = {
    NuxtError: e => Mc(e),
    EmptyShallowRef: e => qs(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Ua(e)),
    EmptyRef: e => We(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Ua(e)),
    ShallowRef: e => qs(e),
    ShallowReactive: e => cs(e),
    Ref: e => We(e),
    Reactive: e => kn(e)
}
  , d8 = Nt({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in uh)
            f8(r, uh[r]);
        Object.assign(e.payload, ([t,n] = si( () => e.runWithContext(l8)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , p8 = []
  , h8 = Nt({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = ZC({
            plugins: p8
        });
        e8( () => Ze().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async () => {
                n = !1,
                await Dy(t)
            }
            ;
            t.hooks.hook("dom:beforeRender", s => {
                s.shouldRender = !n
            }
            ),
            e.hooks.hook("page:start", () => {
                n = !0
            }
            ),
            e.hooks.hook("page:finish", () => {
                e.isHydrating || r()
            }
            ),
            e.hooks.hook("app:error", r),
            e.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Cs = typeof document < "u";
function m8(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Me = Object.assign;
function Eu(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = dn(s) ? s.map(e) : e(s)
    }
    return n
}
const $o = () => {}
  , dn = Array.isArray
  , Ly = /#/g
  , g8 = /&/g
  , _8 = /\//g
  , x8 = /=/g
  , y8 = /\?/g
  , Hy = /\+/g
  , v8 = /%5B/g
  , E8 = /%5D/g
  , $y = /%5E/g
  , b8 = /%60/g
  , Uy = /%7B/g
  , S8 = /%7C/g
  , jy = /%7D/g
  , w8 = /%20/g;
function rd(e) {
    return encodeURI("" + e).replace(S8, "|").replace(v8, "[").replace(E8, "]")
}
function C8(e) {
    return rd(e).replace(Uy, "{").replace(jy, "}").replace($y, "^")
}
function xf(e) {
    return rd(e).replace(Hy, "%2B").replace(w8, "+").replace(Ly, "%23").replace(g8, "%26").replace(b8, "`").replace(Uy, "{").replace(jy, "}").replace($y, "^")
}
function A8(e) {
    return xf(e).replace(x8, "%3D")
}
function T8(e) {
    return rd(e).replace(Ly, "%23").replace(y8, "%3F")
}
function k8(e) {
    return e == null ? "" : T8(e).replace(_8, "%2F")
}
function oi(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const R8 = /\/$/
  , I8 = e => e.replace(R8, "");
function bu(e, t, n="/") {
    let r, s = {}, o = "", i = "";
    const a = t.indexOf("#");
    let c = t.indexOf("?");
    return a < c && a >= 0 && (c = -1),
    c > -1 && (r = t.slice(0, c),
    o = t.slice(c + 1, a > -1 ? a : t.length),
    s = e(o)),
    a > -1 && (r = r || t.slice(0, a),
    i = t.slice(a, t.length)),
    r = F8(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + i,
        path: r,
        query: s,
        hash: oi(i)
    }
}
function D8(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function lh(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function B8(e, t, n) {
    const r = t.matched.length - 1
      , s = n.matched.length - 1;
    return r > -1 && r === s && Xs(t.matched[r], n.matched[s]) && zy(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Xs(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function zy(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!O8(e[n], t[n]))
            return !1;
    return !0
}
function O8(e, t) {
    return dn(e) ? fh(e, t) : dn(t) ? fh(t, e) : e === t
}
function fh(e, t) {
    return dn(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function F8(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let o = n.length - 1, i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i],
        a !== ".")
            if (a === "..")
                o > 1 && o--;
            else
                break;
    return n.slice(0, o).join("/") + "/" + r.slice(i).join("/")
}
var ii;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(ii || (ii = {}));
var Uo;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Uo || (Uo = {}));
function P8(e) {
    if (!e)
        if (Cs) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    I8(e)
}
const N8 = /^[^#]+#/;
function M8(e, t) {
    return e.replace(N8, "#") + t
}
function L8(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const Hc = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function H8(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s)
            return;
        t = L8(s, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function dh(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const yf = new Map;
function $8(e, t) {
    yf.set(e, t)
}
function U8(e) {
    const t = yf.get(e);
    return yf.delete(e),
    t
}
let j8 = () => location.protocol + "//" + location.host;
function Wy(e, t) {
    const {pathname: n, search: r, hash: s} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let a = s.includes(e.slice(o)) ? e.slice(o).length : 1
          , c = s.slice(a);
        return c[0] !== "/" && (c = "/" + c),
        lh(c, "")
    }
    return lh(n, e) + r + s
}
function z8(e, t, n, r) {
    let s = []
      , o = []
      , i = null;
    const a = ({state: d}) => {
        const p = Wy(e, location)
          , m = n.value
          , h = t.value;
        let g = 0;
        if (d) {
            if (n.value = p,
            t.value = d,
            i && i === m) {
                i = null;
                return
            }
            g = h ? d.position - h.position : 0
        } else
            r(p);
        s.forEach(E => {
            E(n.value, m, {
                delta: g,
                type: ii.pop,
                direction: g ? g > 0 ? Uo.forward : Uo.back : Uo.unknown
            })
        }
        )
    }
    ;
    function c() {
        i = n.value
    }
    function u(d) {
        s.push(d);
        const p = () => {
            const m = s.indexOf(d);
            m > -1 && s.splice(m, 1)
        }
        ;
        return o.push(p),
        p
    }
    function l() {
        const {history: d} = window;
        d.state && d.replaceState(Me({}, d.state, {
            scroll: Hc()
        }), "")
    }
    function f() {
        for (const d of o)
            d();
        o = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", l)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", l, {
        passive: !0
    }),
    {
        pauseListeners: c,
        listen: u,
        destroy: f
    }
}
function ph(e, t, n, r=!1, s=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? Hc() : null
    }
}
function W8(e) {
    const {history: t, location: n} = window
      , r = {
        value: Wy(e, n)
    }
      , s = {
        value: t.state
    };
    s.value || o(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(c, u, l) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : j8() + e + c;
        try {
            t[l ? "replaceState" : "pushState"](u, "", d),
            s.value = u
        } catch (p) {
            console.error(p),
            n[l ? "replace" : "assign"](d)
        }
    }
    function i(c, u) {
        const l = Me({}, t.state, ph(s.value.back, c, s.value.forward, !0), u, {
            position: s.value.position
        });
        o(c, l, !0),
        r.value = c
    }
    function a(c, u) {
        const l = Me({}, s.value, t.state, {
            forward: c,
            scroll: Hc()
        });
        o(l.current, l, !0);
        const f = Me({}, ph(r.value, c, null), {
            position: l.position + 1
        }, u);
        o(c, f, !1),
        r.value = c
    }
    return {
        location: r,
        state: s,
        push: a,
        replace: i
    }
}
function qy(e) {
    e = P8(e);
    const t = W8(e)
      , n = z8(e, t.state, t.location, t.replace);
    function r(o, i=!0) {
        i || n.pauseListeners(),
        history.go(o)
    }
    const s = Me({
        location: "",
        base: e,
        go: r,
        createHref: M8.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    s
}
function q8(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    qy(e)
}
function V8(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Vy(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const on = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , Ky = Symbol("");
var hh;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(hh || (hh = {}));
function Ys(e, t) {
    return Me(new Error, {
        type: e,
        [Ky]: !0
    }, t)
}
function In(e, t) {
    return e instanceof Error && Ky in e && (t == null || !!(e.type & t))
}
const mh = "[^/]+?"
  , K8 = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , G8 = /[.+*?^${}()[\]/\\]/g;
function X8(e, t) {
    const n = Me({}, K8, t)
      , r = [];
    let s = n.start ? "^" : "";
    const o = [];
    for (const u of e) {
        const l = u.length ? [] : [90];
        n.strict && !u.length && (s += "/");
        for (let f = 0; f < u.length; f++) {
            const d = u[f];
            let p = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (s += "/"),
                s += d.value.replace(G8, "\\$&"),
                p += 40;
            else if (d.type === 1) {
                const {value: m, repeatable: h, optional: g, regexp: E} = d;
                o.push({
                    name: m,
                    repeatable: h,
                    optional: g
                });
                const x = E || mh;
                if (x !== mh) {
                    p += 10;
                    try {
                        new RegExp(`(${x})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${m}" (${x}): ` + y.message)
                    }
                }
                let _ = h ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
                f || (_ = g && u.length < 2 ? `(?:/${_})` : "/" + _),
                g && (_ += "?"),
                s += _,
                p += 20,
                g && (p += -8),
                h && (p += -20),
                x === ".*" && (p += -50)
            }
            l.push(p)
        }
        r.push(l)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"),
    n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const i = new RegExp(s,n.sensitive ? "" : "i");
    function a(u) {
        const l = u.match(i)
          , f = {};
        if (!l)
            return null;
        for (let d = 1; d < l.length; d++) {
            const p = l[d] || ""
              , m = o[d - 1];
            f[m.name] = p && m.repeatable ? p.split("/") : p
        }
        return f
    }
    function c(u) {
        let l = ""
          , f = !1;
        for (const d of e) {
            (!f || !l.endsWith("/")) && (l += "/"),
            f = !1;
            for (const p of d)
                if (p.type === 0)
                    l += p.value;
                else if (p.type === 1) {
                    const {value: m, repeatable: h, optional: g} = p
                      , E = m in u ? u[m] : "";
                    if (dn(E) && !h)
                        throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
                    const x = dn(E) ? E.join("/") : E;
                    if (!x)
                        if (g)
                            d.length < 2 && (l.endsWith("/") ? l = l.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${m}"`);
                    l += x
                }
        }
        return l || "/"
    }
    return {
        re: i,
        score: r,
        keys: o,
        parse: a,
        stringify: c
    }
}
function Y8(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function J8(e, t) {
    let n = 0;
    const r = e.score
      , s = t.score;
    for (; n < r.length && n < s.length; ) {
        const o = Y8(r[n], s[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (gh(r))
            return 1;
        if (gh(s))
            return -1
    }
    return s.length - r.length
}
function gh(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Q8 = {
    type: 0,
    value: ""
}
  , Z8 = /[a-zA-Z0-9_]/;
function eA(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Q8]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(p) {
        throw new Error(`ERR (${n})/"${u}": ${p}`)
    }
    let n = 0
      , r = n;
    const s = [];
    let o;
    function i() {
        o && s.push(o),
        o = []
    }
    let a = 0, c, u = "", l = "";
    function f() {
        u && (n === 0 ? o.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: u,
            regexp: l,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"),
        u = "")
    }
    function d() {
        u += c
    }
    for (; a < e.length; ) {
        if (c = e[a++],
        c === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            c === "/" ? (u && f(),
            i()) : c === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            c === "(" ? n = 2 : Z8.test(c) ? d() : (f(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && a--);
            break;
        case 2:
            c === ")" ? l[l.length - 1] == "\\" ? l = l.slice(0, -1) + c : n = 3 : l += c;
            break;
        case 3:
            f(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && a--,
            l = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    f(),
    i(),
    s
}
function tA(e, t, n) {
    const r = X8(eA(e.path), n)
      , s = Me(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s),
    s
}
function nA(e, t) {
    const n = []
      , r = new Map;
    t = yh({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function s(l) {
        return r.get(l)
    }
    function o(l, f, d) {
        const p = !d
          , m = rA(l);
        m.aliasOf = d && d.record;
        const h = yh(t, l)
          , g = [m];
        if ("alias"in l) {
            const _ = typeof l.alias == "string" ? [l.alias] : l.alias;
            for (const y of _)
                g.push(Me({}, m, {
                    components: d ? d.record.components : m.components,
                    path: y,
                    aliasOf: d ? d.record : m
                }))
        }
        let E, x;
        for (const _ of g) {
            const {path: y} = _;
            if (f && y[0] !== "/") {
                const S = f.record.path
                  , v = S[S.length - 1] === "/" ? "" : "/";
                _.path = f.record.path + (y && v + y)
            }
            if (E = tA(_, f, h),
            d ? d.alias.push(E) : (x = x || E,
            x !== E && x.alias.push(E),
            p && l.name && !xh(E) && i(l.name)),
            m.children) {
                const S = m.children;
                for (let v = 0; v < S.length; v++)
                    o(S[v], E, d && d.children[v])
            }
            d = d || E,
            (E.record.components && Object.keys(E.record.components).length || E.record.name || E.record.redirect) && c(E)
        }
        return x ? () => {
            i(x)
        }
        : $o
    }
    function i(l) {
        if (Vy(l)) {
            const f = r.get(l);
            f && (r.delete(l),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(i),
            f.alias.forEach(i))
        } else {
            const f = n.indexOf(l);
            f > -1 && (n.splice(f, 1),
            l.record.name && r.delete(l.record.name),
            l.children.forEach(i),
            l.alias.forEach(i))
        }
    }
    function a() {
        return n
    }
    function c(l) {
        let f = 0;
        for (; f < n.length && J8(l, n[f]) >= 0 && (l.record.path !== n[f].record.path || !Gy(l, n[f])); )
            f++;
        n.splice(f, 0, l),
        l.record.name && !xh(l) && r.set(l.record.name, l)
    }
    function u(l, f) {
        let d, p = {}, m, h;
        if ("name"in l && l.name) {
            if (d = r.get(l.name),
            !d)
                throw Ys(1, {
                    location: l
                });
            h = d.record.name,
            p = Me(_h(f.params, d.keys.filter(x => !x.optional).concat(d.parent ? d.parent.keys.filter(x => x.optional) : []).map(x => x.name)), l.params && _h(l.params, d.keys.map(x => x.name))),
            m = d.stringify(p)
        } else if (l.path != null)
            m = l.path,
            d = n.find(x => x.re.test(m)),
            d && (p = d.parse(m),
            h = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(x => x.re.test(f.path)),
            !d)
                throw Ys(1, {
                    location: l,
                    currentLocation: f
                });
            h = d.record.name,
            p = Me({}, f.params, l.params),
            m = d.stringify(p)
        }
        const g = [];
        let E = d;
        for (; E; )
            g.unshift(E.record),
            E = E.parent;
        return {
            name: h,
            path: m,
            params: p,
            matched: g,
            meta: oA(g)
        }
    }
    return e.forEach(l => o(l)),
    {
        addRoute: o,
        resolve: u,
        removeRoute: i,
        getRoutes: a,
        getRecordMatcher: s
    }
}
function _h(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function rA(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: sA(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function sA(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function xh(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function oA(e) {
    return e.reduce( (t, n) => Me(t, n.meta), {})
}
function yh(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function Gy(e, t) {
    return t.children.some(n => n === e || Gy(e, n))
}
function iA(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const o = r[s].replace(Hy, " ")
          , i = o.indexOf("=")
          , a = oi(i < 0 ? o : o.slice(0, i))
          , c = i < 0 ? null : oi(o.slice(i + 1));
        if (a in t) {
            let u = t[a];
            dn(u) || (u = t[a] = [u]),
            u.push(c)
        } else
            t[a] = c
    }
    return t
}
function vh(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = A8(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (dn(r) ? r.map(o => o && xf(o)) : [r && xf(r)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function aA(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = dn(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}
const cA = Symbol("")
  , Eh = Symbol("")
  , sd = Symbol("")
  , od = Symbol("")
  , vf = Symbol("");
function To() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function ur(e, t, n, r, s, o=i => i()) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise( (a, c) => {
        const u = d => {
            d === !1 ? c(Ys(4, {
                from: n,
                to: t
            })) : d instanceof Error ? c(d) : V8(d) ? c(Ys(2, {
                from: t,
                to: d
            })) : (i && r.enterCallbacks[s] === i && typeof d == "function" && i.push(d),
            a())
        }
          , l = o( () => e.call(r && r.instances[s], t, n, u));
        let f = Promise.resolve(l);
        e.length < 3 && (f = f.then(u)),
        f.catch(d => c(d))
    }
    )
}
function Su(e, t, n, r, s=o => o()) {
    const o = [];
    for (const i of e)
        for (const a in i.components) {
            let c = i.components[a];
            if (!(t !== "beforeRouteEnter" && !i.instances[a]))
                if (uA(c)) {
                    const l = (c.__vccOpts || c)[t];
                    l && o.push(ur(l, n, r, i, a, s))
                } else {
                    let u = c();
                    o.push( () => u.then(l => {
                        if (!l)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));
                        const f = m8(l) ? l.default : l;
                        i.components[a] = f;
                        const p = (f.__vccOpts || f)[t];
                        return p && ur(p, n, r, i, a, s)()
                    }
                    ))
                }
        }
    return o
}
function uA(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function bh(e) {
    const t = qe(sd)
      , n = qe(od)
      , r = me( () => {
        const c = re(e.to);
        return t.resolve(c)
    }
    )
      , s = me( () => {
        const {matched: c} = r.value
          , {length: u} = c
          , l = c[u - 1]
          , f = n.matched;
        if (!l || !f.length)
            return -1;
        const d = f.findIndex(Xs.bind(null, l));
        if (d > -1)
            return d;
        const p = Sh(c[u - 2]);
        return u > 1 && Sh(l) === p && f[f.length - 1].path !== p ? f.findIndex(Xs.bind(null, c[u - 2])) : d
    }
    )
      , o = me( () => s.value > -1 && pA(n.params, r.value.params))
      , i = me( () => s.value > -1 && s.value === n.matched.length - 1 && zy(n.params, r.value.params));
    function a(c={}) {
        return dA(c) ? t[re(e.replace) ? "replace" : "push"](re(e.to)).catch($o) : Promise.resolve()
    }
    return {
        route: r,
        href: me( () => r.value.href),
        isActive: o,
        isExactActive: i,
        navigate: a
    }
}
const lA = xe({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: bh,
    setup(e, {slots: t}) {
        const n = kn(bh(e))
          , {options: r} = qe(sd)
          , s = me( () => ({
            [wh(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [wh(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && t.default(n);
            return e.custom ? o : Ot("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, o)
        }
    }
})
  , fA = lA;
function dA(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function pA(e, t) {
    for (const n in t) {
        const r = t[n]
          , s = e[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (!dn(s) || s.length !== r.length || r.some( (o, i) => o !== s[i]))
            return !1
    }
    return !0
}
function Sh(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const wh = (e, t, n) => e ?? t ?? n
  , hA = xe({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = qe(vf)
          , s = me( () => e.route || r.value)
          , o = qe(Eh, 0)
          , i = me( () => {
            let u = re(o);
            const {matched: l} = s.value;
            let f;
            for (; (f = l[u]) && !f.components; )
                u++;
            return u
        }
        )
          , a = me( () => s.value.matched[i.value]);
        $n(Eh, me( () => i.value + 1)),
        $n(cA, a),
        $n(vf, s);
        const c = We();
        return Bt( () => [c.value, a.value, e.name], ([u,l,f], [d,p,m]) => {
            l && (l.instances[f] = u,
            p && p !== l && u && u === d && (l.leaveGuards.size || (l.leaveGuards = p.leaveGuards),
            l.updateGuards.size || (l.updateGuards = p.updateGuards))),
            u && l && (!p || !Xs(l, p) || !d) && (l.enterCallbacks[f] || []).forEach(h => h(u))
        }
        , {
            flush: "post"
        }),
        () => {
            const u = s.value
              , l = e.name
              , f = a.value
              , d = f && f.components[l];
            if (!d)
                return Ch(n.default, {
                    Component: d,
                    route: u
                });
            const p = f.props[l]
              , m = p ? p === !0 ? u.params : typeof p == "function" ? p(u) : p : null
              , g = Ot(d, Me({}, m, t, {
                onVnodeUnmounted: E => {
                    E.component.isUnmounted && (f.instances[l] = null)
                }
                ,
                ref: c
            }));
            return Ch(n.default, {
                Component: g,
                route: u
            }) || g
        }
    }
});
function Ch(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Xy = hA;
function mA(e) {
    const t = nA(e.routes, e)
      , n = e.parseQuery || iA
      , r = e.stringifyQuery || vh
      , s = e.history
      , o = To()
      , i = To()
      , a = To()
      , c = qs(on);
    let u = on;
    Cs && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const l = Eu.bind(null, P => "" + P)
      , f = Eu.bind(null, k8)
      , d = Eu.bind(null, oi);
    function p(P, q) {
        let ee, ne;
        return Vy(P) ? (ee = t.getRecordMatcher(P),
        ne = q) : ne = P,
        t.addRoute(ne, ee)
    }
    function m(P) {
        const q = t.getRecordMatcher(P);
        q && t.removeRoute(q)
    }
    function h() {
        return t.getRoutes().map(P => P.record)
    }
    function g(P) {
        return !!t.getRecordMatcher(P)
    }
    function E(P, q) {
        if (q = Me({}, q || c.value),
        typeof P == "string") {
            const k = bu(n, P, q.path)
              , B = t.resolve({
                path: k.path
            }, q)
              , $ = s.createHref(k.fullPath);
            return Me(k, B, {
                params: d(B.params),
                hash: oi(k.hash),
                redirectedFrom: void 0,
                href: $
            })
        }
        let ee;
        if (P.path != null)
            ee = Me({}, P, {
                path: bu(n, P.path, q.path).path
            });
        else {
            const k = Me({}, P.params);
            for (const B in k)
                k[B] == null && delete k[B];
            ee = Me({}, P, {
                params: f(k)
            }),
            q.params = f(q.params)
        }
        const ne = t.resolve(ee, q)
          , Ee = P.hash || "";
        ne.params = l(d(ne.params));
        const Be = D8(r, Me({}, P, {
            hash: C8(Ee),
            path: ne.path
        }))
          , A = s.createHref(Be);
        return Me({
            fullPath: Be,
            hash: Ee,
            query: r === vh ? aA(P.query) : P.query || {}
        }, ne, {
            redirectedFrom: void 0,
            href: A
        })
    }
    function x(P) {
        return typeof P == "string" ? bu(n, P, c.value.path) : Me({}, P)
    }
    function _(P, q) {
        if (u !== P)
            return Ys(8, {
                from: q,
                to: P
            })
    }
    function y(P) {
        return b(P)
    }
    function S(P) {
        return y(Me(x(P), {
            replace: !0
        }))
    }
    function v(P) {
        const q = P.matched[P.matched.length - 1];
        if (q && q.redirect) {
            const {redirect: ee} = q;
            let ne = typeof ee == "function" ? ee(P) : ee;
            return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = x(ne) : {
                path: ne
            },
            ne.params = {}),
            Me({
                query: P.query,
                hash: P.hash,
                params: ne.path != null ? {} : P.params
            }, ne)
        }
    }
    function b(P, q) {
        const ee = u = E(P)
          , ne = c.value
          , Ee = P.state
          , Be = P.force
          , A = P.replace === !0
          , k = v(ee);
        if (k)
            return b(Me(x(k), {
                state: typeof k == "object" ? Me({}, Ee, k.state) : Ee,
                force: Be,
                replace: A
            }), q || ee);
        const B = ee;
        B.redirectedFrom = q;
        let $;
        return !Be && B8(r, ne, ee) && ($ = Ys(16, {
            to: B,
            from: ne
        }),
        L(ne, ne, !0, !1)),
        ($ ? Promise.resolve($) : w(B, ne)).catch(N => In(N) ? In(N, 2) ? N : le(N) : H(N, B, ne)).then(N => {
            if (N) {
                if (In(N, 2))
                    return b(Me({
                        replace: A
                    }, x(N.to), {
                        state: typeof N.to == "object" ? Me({}, Ee, N.to.state) : Ee,
                        force: Be
                    }), q || B)
            } else
                N = R(B, ne, !0, A, Ee);
            return T(B, ne, N),
            N
        }
        )
    }
    function C(P, q) {
        const ee = _(P, q);
        return ee ? Promise.reject(ee) : Promise.resolve()
    }
    function I(P) {
        const q = W.values().next().value;
        return q && typeof q.runWithContext == "function" ? q.runWithContext(P) : P()
    }
    function w(P, q) {
        let ee;
        const [ne,Ee,Be] = gA(P, q);
        ee = Su(ne.reverse(), "beforeRouteLeave", P, q);
        for (const k of ne)
            k.leaveGuards.forEach(B => {
                ee.push(ur(B, P, q))
            }
            );
        const A = C.bind(null, P, q);
        return ee.push(A),
        fe(ee).then( () => {
            ee = [];
            for (const k of o.list())
                ee.push(ur(k, P, q));
            return ee.push(A),
            fe(ee)
        }
        ).then( () => {
            ee = Su(Ee, "beforeRouteUpdate", P, q);
            for (const k of Ee)
                k.updateGuards.forEach(B => {
                    ee.push(ur(B, P, q))
                }
                );
            return ee.push(A),
            fe(ee)
        }
        ).then( () => {
            ee = [];
            for (const k of Be)
                if (k.beforeEnter)
                    if (dn(k.beforeEnter))
                        for (const B of k.beforeEnter)
                            ee.push(ur(B, P, q));
                    else
                        ee.push(ur(k.beforeEnter, P, q));
            return ee.push(A),
            fe(ee)
        }
        ).then( () => (P.matched.forEach(k => k.enterCallbacks = {}),
        ee = Su(Be, "beforeRouteEnter", P, q, I),
        ee.push(A),
        fe(ee))).then( () => {
            ee = [];
            for (const k of i.list())
                ee.push(ur(k, P, q));
            return ee.push(A),
            fe(ee)
        }
        ).catch(k => In(k, 8) ? k : Promise.reject(k))
    }
    function T(P, q, ee) {
        a.list().forEach(ne => I( () => ne(P, q, ee)))
    }
    function R(P, q, ee, ne, Ee) {
        const Be = _(P, q);
        if (Be)
            return Be;
        const A = q === on
          , k = Cs ? history.state : {};
        ee && (ne || A ? s.replace(P.fullPath, Me({
            scroll: A && k && k.scroll
        }, Ee)) : s.push(P.fullPath, Ee)),
        c.value = P,
        L(P, q, ee, A),
        le()
    }
    let D;
    function z() {
        D || (D = s.listen( (P, q, ee) => {
            if (!Ie.listening)
                return;
            const ne = E(P)
              , Ee = v(ne);
            if (Ee) {
                b(Me(Ee, {
                    replace: !0
                }), ne).catch($o);
                return
            }
            u = ne;
            const Be = c.value;
            Cs && $8(dh(Be.fullPath, ee.delta), Hc()),
            w(ne, Be).catch(A => In(A, 12) ? A : In(A, 2) ? (b(A.to, ne).then(k => {
                In(k, 20) && !ee.delta && ee.type === ii.pop && s.go(-1, !1)
            }
            ).catch($o),
            Promise.reject()) : (ee.delta && s.go(-ee.delta, !1),
            H(A, ne, Be))).then(A => {
                A = A || R(ne, Be, !1),
                A && (ee.delta && !In(A, 8) ? s.go(-ee.delta, !1) : ee.type === ii.pop && In(A, 20) && s.go(-1, !1)),
                T(ne, Be, A)
            }
            ).catch($o)
        }
        ))
    }
    let X = To(), O = To(), Z;
    function H(P, q, ee) {
        le(P);
        const ne = O.list();
        return ne.length ? ne.forEach(Ee => Ee(P, q, ee)) : console.error(P),
        Promise.reject(P)
    }
    function ie() {
        return Z && c.value !== on ? Promise.resolve() : new Promise( (P, q) => {
            X.add([P, q])
        }
        )
    }
    function le(P) {
        return Z || (Z = !P,
        z(),
        X.list().forEach( ([q,ee]) => P ? ee(P) : q()),
        X.reset()),
        P
    }
    function L(P, q, ee, ne) {
        const {scrollBehavior: Ee} = e;
        if (!Cs || !Ee)
            return Promise.resolve();
        const Be = !ee && U8(dh(P.fullPath, 0)) || (ne || !ee) && history.state && history.state.scroll || null;
        return hn().then( () => Ee(P, q, Be)).then(A => A && H8(A)).catch(A => H(A, P, q))
    }
    const j = P => s.go(P);
    let K;
    const W = new Set
      , Ie = {
        currentRoute: c,
        listening: !0,
        addRoute: p,
        removeRoute: m,
        hasRoute: g,
        getRoutes: h,
        resolve: E,
        options: e,
        push: y,
        replace: S,
        go: j,
        back: () => j(-1),
        forward: () => j(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: O.add,
        isReady: ie,
        install(P) {
            const q = this;
            P.component("RouterLink", fA),
            P.component("RouterView", Xy),
            P.config.globalProperties.$router = q,
            Object.defineProperty(P.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => re(c)
            }),
            Cs && !K && c.value === on && (K = !0,
            y(s.location).catch(Ee => {}
            ));
            const ee = {};
            for (const Ee in on)
                Object.defineProperty(ee, Ee, {
                    get: () => c.value[Ee],
                    enumerable: !0
                });
            P.provide(sd, q),
            P.provide(od, cs(ee)),
            P.provide(vf, c);
            const ne = P.unmount;
            W.add(P),
            P.unmount = function() {
                W.delete(P),
                W.size < 1 && (u = on,
                D && D(),
                D = null,
                c.value = on,
                K = !1,
                Z = !1),
                ne()
            }
        }
    };
    function fe(P) {
        return P.reduce( (q, ee) => q.then( () => I(ee)), Promise.resolve())
    }
    return Ie
}
function gA(e, t) {
    const n = []
      , r = []
      , s = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const a = t.matched[i];
        a && (e.matched.find(u => Xs(u, a)) ? r.push(a) : n.push(a));
        const c = e.matched[i];
        c && (t.matched.find(u => Xs(u, c)) || s.push(c))
    }
    return [n, r, s]
}
function _A() {
    return qe(od)
}
const xA = (e, t) => t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Ef = (e, t) => {
    const n = e.route.matched.find(s => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && xA(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , yA = (e, t) => ({
    default: () => e ? Ot(ax, e === !0 ? {} : e, t) : t
});
function id(e) {
    return Array.isArray(e) ? e : [e]
}
const wu = null
  , Cu = null
  , Au = null
  , Lt = {
    layout: "game-layout"
}
  , Ht = {
    layout: "game-layout"
}
  , Tu = null
  , ku = null
  , Ru = null
  , Iu = null
  , Du = null
  , Bu = null
  , Ou = null
  , Fu = null
  , Pu = null
  , Nu = null
  , Mu = null
  , Lu = null
  , Hu = null
  , Ah = [{
    name: "account",
    path: "/account",
    meta: {},
    alias: [],
    redirect: wu == null ? void 0 : wu.redirect,
    component: () => Je( () => import("./B7n1yDyK.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), import.meta.url).then(e => e.default || e)
}, {
    name: "assistant",
    path: "/assistant",
    meta: {},
    alias: [],
    redirect: Cu == null ? void 0 : Cu.redirect,
    component: () => Je( () => import("./DlF_M7m0.js"), __vite__mapDeps([26, 3, 4, 5, 6, 7, 8, 27, 28, 29, 13, 30, 21, 31]), import.meta.url).then(e => e.default || e)
}, {
    name: "checking-account",
    path: "/checking-account",
    meta: {},
    alias: [],
    redirect: Au == null ? void 0 : Au.redirect,
    component: () => Je( () => import("./c-vQmq45.js"), __vite__mapDeps([32, 33, 16, 22, 24, 34, 3, 4, 5, 10, 11, 14, 35, 36, 37, 19, 38]), import.meta.url).then(e => e.default || e)
}, {
    name: (Lt == null ? void 0 : Lt.name) ?? "game-hub",
    path: (Lt == null ? void 0 : Lt.path) ?? "/game-hub",
    meta: Lt || {},
    alias: (Lt == null ? void 0 : Lt.alias) || [],
    redirect: Lt == null ? void 0 : Lt.redirect,
    component: () => Je( () => import("./eLx2Hz0S.js"), __vite__mapDeps([39, 40, 41, 42, 24, 20, 21, 22, 23, 43, 1, 2, 4, 16, 29, 13, 30, 44, 45, 46, 47, 48, 49]), import.meta.url).then(e => e.default || e)
}, {
    name: (Ht == null ? void 0 : Ht.name) ?? "game-hub-token-search-2024",
    path: (Ht == null ? void 0 : Ht.path) ?? "/game-hub/token-search-2024",
    meta: Ht || {},
    alias: (Ht == null ? void 0 : Ht.alias) || [],
    redirect: Ht == null ? void 0 : Ht.redirect,
    component: () => Je( () => import("./zlYdUaQp.js"), __vite__mapDeps([50, 37, 48, 46]), import.meta.url).then(e => e.default || e)
}, {
    name: "home",
    path: "/home",
    meta: {},
    alias: [],
    redirect: Tu == null ? void 0 : Tu.redirect,
    component: () => Je( () => import("./CeEYTCzb.js"), __vite__mapDeps([51, 23, 52, 20, 21, 22, 53, 34, 3, 4, 5, 10, 11, 14, 35, 36, 54, 42, 37, 48, 55, 56]), import.meta.url).then(e => e.default || e)
}, {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: ku == null ? void 0 : ku.redirect,
    component: () => Je( () => import("./BZuXzZC7.js"), __vite__mapDeps([57, 33, 16, 37, 58, 19, 53, 59]), import.meta.url).then(e => e.default || e)
}, {
    name: "mission",
    path: "/mission",
    meta: {},
    alias: [],
    redirect: Ru == null ? void 0 : Ru.redirect,
    component: () => Je( () => import("./BQaUIkTk.js"), __vite__mapDeps([60, 1, 2, 16, 37, 22, 61, 20, 21, 23, 42, 48, 28, 62, 63]), import.meta.url).then(e => e.default || e)
}, {
    name: "not-data",
    path: "/not-data",
    meta: {},
    alias: [],
    redirect: Iu == null ? void 0 : Iu.redirect,
    component: () => Je( () => import("./B_DGmYmI.js"), __vite__mapDeps([64, 33, 65]), import.meta.url).then(e => e.default || e)
}, {
    name: "onboard",
    path: "/onboard",
    meta: {},
    alias: [],
    redirect: Du == null ? void 0 : Du.redirect,
    component: () => Je( () => import("./DRSR3OD5.js"), __vite__mapDeps([66, 34, 3, 4, 5, 10, 11, 14, 35, 41, 42, 24, 33, 67, 16, 23, 68, 69, 36, 37, 70]), import.meta.url).then(e => e.default || e)
}, {
    name: "partners",
    path: "/partners",
    meta: {},
    alias: [],
    redirect: Bu == null ? void 0 : Bu.redirect,
    component: () => Je( () => import("./Bo4tbPri.js"), __vite__mapDeps([71, 10, 4, 11, 9, 3, 5, 12, 7, 13, 14, 15, 1, 2, 16, 23, 20, 21, 22, 72, 42, 27, 73, 74, 29, 30, 55, 44, 45, 36, 75, 58, 76, 77, 61, 54, 78, 48, 79]), import.meta.url).then(e => e.default || e)
}, {
    name: "shop",
    path: "/shop",
    meta: {},
    alias: [],
    redirect: Ou == null ? void 0 : Ou.redirect,
    component: () => Je( () => import("./mty30wiD.js"), __vite__mapDeps([80, 1, 2, 77, 22, 20, 21, 23, 44, 16, 29, 4, 13, 30, 45, 61, 54, 78, 81, 10, 11, 3, 5, 36, 18, 42, 82, 48, 37, 83]), import.meta.url).then(e => e.default || e)
}, {
    name: "statistic",
    path: "/statistic",
    meta: {},
    alias: [],
    redirect: Fu == null ? void 0 : Fu.redirect,
    component: () => Je( () => import("./BY2g9qht.js"), __vite__mapDeps([84, 20, 21, 22, 23, 48, 62, 85]), import.meta.url).then(e => e.default || e)
}, {
    name: "support",
    path: "/support",
    meta: {},
    alias: [],
    redirect: Pu == null ? void 0 : Pu.redirect,
    component: () => Je( () => import("./DP2kGCaz.js"), __vite__mapDeps([86, 75, 58, 76, 9, 3, 4, 5, 10, 11, 12, 7, 13, 14, 15, 6, 8, 16, 17, 20, 21, 22, 23, 53, 74, 1, 2, 87]), import.meta.url).then(e => e.default || e)
}, {
    name: "tier",
    path: "/tier",
    meta: {},
    alias: [],
    redirect: Nu == null ? void 0 : Nu.redirect,
    component: () => Je( () => import("./DtMnyrbB.js"), __vite__mapDeps([88, 34, 3, 4, 5, 10, 11, 14, 35, 68, 69, 36, 21, 23, 72, 89]), import.meta.url).then(e => e.default || e)
}, {
    name: "total-gum",
    path: "/total-gum",
    meta: {},
    alias: [],
    redirect: Mu == null ? void 0 : Mu.redirect,
    component: () => Je( () => import("./DqLjprvY.js"), __vite__mapDeps([90, 41, 42, 24, 33, 67, 16, 23, 91]), import.meta.url).then(e => e.default || e)
}, {
    name: "wallet",
    path: "/wallet",
    meta: {},
    alias: [],
    redirect: Lu == null ? void 0 : Lu.redirect,
    component: () => Je( () => import("./BXt85TTg.js"), __vite__mapDeps([92, 81, 77, 22, 20, 21, 23, 44, 16, 29, 4, 13, 30, 45, 61, 54, 78, 10, 11, 3, 5, 36, 18, 42, 82, 1, 2, 47, 9, 12, 7, 14, 15, 6, 8, 17, 73, 74, 93]), import.meta.url).then(e => e.default || e)
}, {
    name: "welcome",
    path: "/welcome",
    meta: {},
    alias: [],
    redirect: Hu == null ? void 0 : Hu.redirect,
    component: () => Je( () => import("./Dn_ES1Qj.js"), __vite__mapDeps([94, 41, 42, 24, 33, 95]), import.meta.url).then(e => e.default || e)
}]
  , Yy = (e, t, n) => (t = t === !0 ? {} : t,
{
    default: () => {
        var r;
        return t ? Ot(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function Th(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function vA(e, t) {
    return e === t || t === on ? !1 : Th(e) !== Th(t) ? !0 : !e.matched.every( (r, s) => {
        var o, i;
        return r.components && r.components.default === ((i = (o = t.matched[s]) == null ? void 0 : o.components) == null ? void 0 : i.default)
    }
    )
}
const EA = {
    scrollBehavior(e, t, n) {
        var u;
        const r = Ze()
          , s = ((u = mn().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
        let o = n || void 0;
        const i = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!o && t && e && i !== !1 && vA(e, t) && (o = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: kh(e.hash),
                behavior: s
            } : !1;
        const a = l => !!(l.meta.pageTransition ?? _f)
          , c = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(l => {
            r.hooks.hookOnce(c, async () => {
                await new Promise(f => setTimeout(f, 0)),
                e.hash && (o = {
                    el: e.hash,
                    top: kh(e.hash),
                    behavior: s
                }),
                l(o)
            }
            )
        }
        )
    }
};
function kh(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const bA = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , $t = {
    ...bA,
    ...EA
}
  , SA = async e => {
    var c;
    let t, n;
    if (!((c = e.meta) != null && c.validate))
        return;
    const r = Ze()
      , s = mn();
    if (([t,n] = si( () => Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t) === !0)
        return;
    const i = Mc({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
        data: {
            path: e.fullPath
        }
    })
      , a = s.beforeResolve(u => {
        if (a(),
        u === e) {
            const l = s.afterEach(async () => {
                l(),
                await r.runWithContext( () => Ts(i)),
                window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
  , Rh = globalThis.requestIdleCallback || (e => {
    const t = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout( () => {
        e(n)
    }
    , 1)
}
)
  , o7 = globalThis.cancelIdleCallback || (e => {
    clearTimeout(e)
}
)
  , Jy = e => {
    const t = Ze();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
        Rh(e)
    }
    ) : Rh(e)
}
;
function wA(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = Ua(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: Ze().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const CA = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Qy;
const Ai = e => Qy = e
  , Zy = Symbol();
function bf(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var jo;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(jo || (jo = {}));
function AA() {
    const e = hc(!0)
      , t = e.run( () => We({}));
    let n = []
      , r = [];
    const s = vc({
        install(o) {
            Ai(s),
            s._a = o,
            o.provide(Zy, s),
            o.config.globalProperties.$pinia = s,
            r.forEach(i => n.push(i)),
            r = []
        },
        use(o) {
            return !this._a && !CA ? r.push(o) : n.push(o),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return s
}
const e1 = () => {}
;
function Ih(e, t, n, r=e1) {
    e.push(t);
    const s = () => {
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && mc() && y0(s),
    s
}
function bs(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    }
    )
}
const TA = e => e();
function Sf(e, t) {
    e instanceof Map && t instanceof Map && t.forEach( (n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , s = e[n];
        bf(s) && bf(r) && e.hasOwnProperty(n) && !Xe(r) && !Mn(r) ? e[n] = Sf(s, r) : e[n] = r
    }
    return e
}
const kA = Symbol();
function RA(e) {
    return !bf(e) || !e.hasOwnProperty(kA)
}
const {assign: sr} = Object;
function IA(e) {
    return !!(Xe(e) && e.effect)
}
function DA(e, t, n, r) {
    const {state: s, actions: o, getters: i} = t
      , a = n.state.value[e];
    let c;
    function u() {
        a || (n.state.value[e] = s ? s() : {});
        const l = W_(n.state.value[e]);
        return sr(l, o, Object.keys(i || {}).reduce( (f, d) => (f[d] = vc(me( () => {
            Ai(n);
            const p = n._s.get(e);
            return i[d].call(p, p)
        }
        )),
        f), {}))
    }
    return c = t1(e, u, t, n, r, !0),
    c
}
function t1(e, t, n={}, r, s, o) {
    let i;
    const a = sr({
        actions: {}
    }, n)
      , c = {
        deep: !0
    };
    let u, l, f = [], d = [], p;
    const m = r.state.value[e];
    !o && !m && (r.state.value[e] = {}),
    We({});
    let h;
    function g(C) {
        let I;
        u = l = !1,
        typeof C == "function" ? (C(r.state.value[e]),
        I = {
            type: jo.patchFunction,
            storeId: e,
            events: p
        }) : (Sf(r.state.value[e], C),
        I = {
            type: jo.patchObject,
            payload: C,
            storeId: e,
            events: p
        });
        const w = h = Symbol();
        hn().then( () => {
            h === w && (u = !0)
        }
        ),
        l = !0,
        bs(f, I, r.state.value[e])
    }
    const E = o ? function() {
        const {state: I} = n
          , w = I ? I() : {};
        this.$patch(T => {
            sr(T, w)
        }
        )
    }
    : e1;
    function x() {
        i.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    function _(C, I) {
        return function() {
            Ai(r);
            const w = Array.from(arguments)
              , T = []
              , R = [];
            function D(O) {
                T.push(O)
            }
            function z(O) {
                R.push(O)
            }
            bs(d, {
                args: w,
                name: C,
                store: S,
                after: D,
                onError: z
            });
            let X;
            try {
                X = I.apply(this && this.$id === e ? this : S, w)
            } catch (O) {
                throw bs(R, O),
                O
            }
            return X instanceof Promise ? X.then(O => (bs(T, O),
            O)).catch(O => (bs(R, O),
            Promise.reject(O))) : (bs(T, X),
            X)
        }
    }
    const y = {
        _p: r,
        $id: e,
        $onAction: Ih.bind(null, d),
        $patch: g,
        $reset: E,
        $subscribe(C, I={}) {
            const w = Ih(f, C, I.detached, () => T())
              , T = i.run( () => Bt( () => r.state.value[e], R => {
                (I.flush === "sync" ? l : u) && C({
                    storeId: e,
                    type: jo.direct,
                    events: p
                }, R)
            }
            , sr({}, c, I)));
            return w
        },
        $dispose: x
    }
      , S = kn(y);
    r._s.set(e, S);
    const b = (r._a && r._a.runWithContext || TA)( () => r._e.run( () => (i = hc()).run(t)));
    for (const C in b) {
        const I = b[C];
        if (Xe(I) && !IA(I) || Mn(I))
            o || (m && RA(I) && (Xe(I) ? I.value = m[C] : Sf(I, m[C])),
            r.state.value[e][C] = I);
        else if (typeof I == "function") {
            const w = _(C, I);
            b[C] = w,
            a.actions[C] = I
        }
    }
    return sr(S, b),
    sr(be(S), b),
    Object.defineProperty(S, "$state", {
        get: () => r.state.value[e],
        set: C => {
            g(I => {
                sr(I, C)
            }
            )
        }
    }),
    r._p.forEach(C => {
        sr(S, i.run( () => C({
            store: S,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    m && o && n.hydrate && n.hydrate(S.$state, m),
    u = !0,
    l = !0,
    S
}
function n1(e, t, n) {
    let r, s;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e,
    s = o ? n : t) : (s = e,
    r = e.id);
    function i(a, c) {
        const u = Dc();
        return a = a || (u ? qe(Zy, null) : null),
        a && Ai(a),
        a = Qy,
        a._s.has(r) || (o ? t1(r, t, s, a) : DA(r, s, a)),
        a._s.get(r)
    }
    return i.$id = r,
    i
}
function Dh(e) {
    {
        e = be(e);
        const t = {};
        for (const n in e) {
            const r = e[n];
            (Xe(r) || Mn(r)) && (t[n] = T0(e, n))
        }
        return t
    }
}
const ps = e => {
    const n = Object.fromEntries(Object.entries({
        a: "Q",
        b: "3",
        c: "X",
        d: "9",
        e: "V",
        f: "4",
        g: "Z",
        h: "1",
        i: "B",
        j: "7",
        k: "M",
        l: "0",
        m: "J",
        n: "L",
        o: "6",
        p: "Y",
        q: "5",
        r: "K",
        s: "8",
        t: "W",
        u: "2",
        v: "C",
        w: "A",
        x: "R",
        y: "E",
        z: "D",
        A: "u",
        B: "n",
        C: "t",
        D: "g",
        E: "h",
        F: "a",
        G: "s",
        H: "o",
        I: "p",
        J: "c",
        K: "m",
        L: "v",
        M: "f",
        N: "d",
        O: "j",
        P: "x",
        Q: "b",
        R: "i",
        S: "k",
        T: "z",
        U: "l",
        V: "y",
        W: "q",
        X: "r",
        Y: "e",
        Z: "w",
        0: "H",
        1: "N",
        2: "S",
        3: "I",
        4: "O",
        5: "P",
        6: "F",
        7: "G",
        8: "T",
        9: "U"
    }).map( ([r,s]) => [s, r]));
    return e.split("").map(r => n[r] || r).join("")
}
  , BA = () => ps("t6LWVLW-zEYV")
  , OA = () => ps("uXXV88-t6LWK60-u006A-jKBZBL")
  , FA = () => ps("r-ihblhkz-uz").toUpperCase()
  , PA = () => ps("R-KV52V8W-MVE").toUpperCase()
  , NA = () => ps("9OU49SIPXHFNIX4O4VIOTGSFNXX933IP")
  , MA = () => ps("QGFNXTSSINPUGXT3X3XSVNTUGSPQGIPO")
  , LA = () => ps("UHHTQVQUUVIGSV3I3S44FQI4HXQOTUGP");
var Bh;
const hs = typeof window < "u"
  , HA = e => typeof e == "string"
  , Js = () => {}
  , $A = hs && ((Bh = window == null ? void 0 : window.navigator) == null ? void 0 : Bh.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Qs(e) {
    return typeof e == "function" ? e() : re(e)
}
function r1(e, t) {
    function n(...r) {
        return new Promise( (s, o) => {
            Promise.resolve(e( () => t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(s).catch(o)
        }
        )
    }
    return n
}
function UA(e, t={}) {
    let n, r, s = Js;
    const o = a => {
        clearTimeout(a),
        s(),
        s = Js
    }
    ;
    return a => {
        const c = Qs(e)
          , u = Qs(t.maxWait);
        return n && o(n),
        c <= 0 || u !== void 0 && u <= 0 ? (r && (o(r),
        r = null),
        Promise.resolve(a())) : new Promise( (l, f) => {
            s = t.rejectOnCancel ? f : l,
            u && !r && (r = setTimeout( () => {
                n && o(n),
                r = null,
                l(a())
            }
            , u)),
            n = setTimeout( () => {
                r && o(r),
                r = null,
                l(a())
            }
            , c)
        }
        )
    }
}
function jA(e, t=!0, n=!0, r=!1) {
    let s = 0, o, i = !0, a = Js, c;
    const u = () => {
        o && (clearTimeout(o),
        o = void 0,
        a(),
        a = Js)
    }
    ;
    return f => {
        const d = Qs(e)
          , p = Date.now() - s
          , m = () => c = f();
        return u(),
        d <= 0 ? (s = Date.now(),
        m()) : (p > d && (n || !i) ? (s = Date.now(),
        m()) : t && (c = new Promise( (h, g) => {
            a = r ? g : h,
            o = setTimeout( () => {
                s = Date.now(),
                i = !0,
                h(m()),
                u()
            }
            , Math.max(0, d - p))
        }
        )),
        !n && !o && (o = setTimeout( () => i = !0, d)),
        i = !1,
        c)
    }
}
function zA(e) {
    return e
}
function $c(e) {
    return mc() ? (y0(e),
    !0) : !1
}
function WA(e, t=200, n={}) {
    return r1(UA(t, n), e)
}
function i7(e, t=200, n={}) {
    const r = We(e.value)
      , s = WA( () => {
        r.value = e.value
    }
    , t, n);
    return Bt(e, () => s()),
    r
}
function a7(e, t=200, n=!1, r=!0, s=!1) {
    return r1(jA(t, n, r, s), e)
}
function qA(e, t=!0) {
    Et() ? kr(e) : t ? e() : hn(e)
}
function VA(e, t, n={}) {
    const {immediate: r=!0} = n
      , s = We(!1);
    let o = null;
    function i() {
        o && (clearTimeout(o),
        o = null)
    }
    function a() {
        s.value = !1,
        i()
    }
    function c(...u) {
        i(),
        s.value = !0,
        o = setTimeout( () => {
            s.value = !1,
            o = null,
            e(...u)
        }
        , Qs(t))
    }
    return r && (s.value = !0,
    hs && c()),
    $c(a),
    {
        isPending: xc(s),
        start: c,
        stop: a
    }
}
function Hr(e) {
    var t;
    const n = Qs(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Uc = hs ? window : void 0;
function ya(...e) {
    let t, n, r, s;
    if (HA(e[0]) || Array.isArray(e[0]) ? ([n,r,s] = e,
    t = Uc) : [t,n,r,s] = e,
    !t)
        return Js;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const o = []
      , i = () => {
        o.forEach(l => l()),
        o.length = 0
    }
      , a = (l, f, d, p) => (l.addEventListener(f, d, p),
    () => l.removeEventListener(f, d, p))
      , c = Bt( () => [Hr(t), Qs(s)], ([l,f]) => {
        i(),
        l && o.push(...n.flatMap(d => r.map(p => a(l, d, p, f))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , u = () => {
        c(),
        i()
    }
    ;
    return $c(u),
    u
}
let Oh = !1;
function c7(e, t, n={}) {
    const {window: r=Uc, ignore: s=[], capture: o=!0, detectIframe: i=!1} = n;
    if (!r)
        return;
    $A && !Oh && (Oh = !0,
    Array.from(r.document.body.children).forEach(d => d.addEventListener("click", Js)));
    let a = !0;
    const c = d => s.some(p => {
        if (typeof p == "string")
            return Array.from(r.document.querySelectorAll(p)).some(m => m === d.target || d.composedPath().includes(m));
        {
            const m = Hr(p);
            return m && (d.target === m || d.composedPath().includes(m))
        }
    }
    )
      , l = [ya(r, "click", d => {
        const p = Hr(e);
        if (!(!p || p === d.target || d.composedPath().includes(p))) {
            if (d.detail === 0 && (a = !c(d)),
            !a) {
                a = !0;
                return
            }
            t(d)
        }
    }
    , {
        passive: !0,
        capture: o
    }), ya(r, "pointerdown", d => {
        const p = Hr(e);
        p && (a = !d.composedPath().includes(p) && !c(d))
    }
    , {
        passive: !0
    }), i && ya(r, "blur", d => {
        var p;
        const m = Hr(e);
        ((p = r.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(m != null && m.contains(r.document.activeElement)) && t(d)
    }
    )].filter(Boolean);
    return () => l.forEach(d => d())
}
function s1(e, t=!1) {
    const n = We()
      , r = () => n.value = !!e();
    return r(),
    qA(r, t),
    n
}
const Fh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Ph = "__vueuse_ssr_handlers__";
Fh[Ph] = Fh[Ph] || {};
var Nh = Object.getOwnPropertySymbols
  , KA = Object.prototype.hasOwnProperty
  , GA = Object.prototype.propertyIsEnumerable
  , XA = (e, t) => {
    var n = {};
    for (var r in e)
        KA.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Nh)
        for (var r of Nh(e))
            t.indexOf(r) < 0 && GA.call(e, r) && (n[r] = e[r]);
    return n
}
;
function YA(e, t, n={}) {
    const r = n
      , {window: s=Uc} = r
      , o = XA(r, ["window"]);
    let i;
    const a = s1( () => s && "ResizeObserver"in s)
      , c = () => {
        i && (i.disconnect(),
        i = void 0)
    }
      , u = Bt( () => Hr(e), f => {
        c(),
        a.value && s && f && (i = new ResizeObserver(t),
        i.observe(f, o))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , l = () => {
        c(),
        u()
    }
    ;
    return $c(l),
    {
        isSupported: a,
        stop: l
    }
}
var Mh = Object.getOwnPropertySymbols
  , JA = Object.prototype.hasOwnProperty
  , QA = Object.prototype.propertyIsEnumerable
  , ZA = (e, t) => {
    var n = {};
    for (var r in e)
        JA.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Mh)
        for (var r of Mh(e))
            t.indexOf(r) < 0 && QA.call(e, r) && (n[r] = e[r]);
    return n
}
;
function u7(e, t, n={}) {
    const r = n
      , {window: s=Uc} = r
      , o = ZA(r, ["window"]);
    let i;
    const a = s1( () => s && "MutationObserver"in s)
      , c = () => {
        i && (i.disconnect(),
        i = void 0)
    }
      , u = Bt( () => Hr(e), f => {
        c(),
        a.value && s && f && (i = new MutationObserver(t),
        i.observe(f, o))
    }
    , {
        immediate: !0
    })
      , l = () => {
        c(),
        u()
    }
    ;
    return $c(l),
    {
        isSupported: a,
        stop: l
    }
}
var Lh;
(function(e) {
    e.UP = "UP",
    e.RIGHT = "RIGHT",
    e.DOWN = "DOWN",
    e.LEFT = "LEFT",
    e.NONE = "NONE"
}
)(Lh || (Lh = {}));
var e3 = Object.defineProperty
  , Hh = Object.getOwnPropertySymbols
  , t3 = Object.prototype.hasOwnProperty
  , n3 = Object.prototype.propertyIsEnumerable
  , $h = (e, t, n) => t in e ? e3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , r3 = (e, t) => {
    for (var n in t || (t = {}))
        t3.call(t, n) && $h(e, n, t[n]);
    if (Hh)
        for (var n of Hh(t))
            n3.call(t, n) && $h(e, n, t[n]);
    return e
}
;
const s3 = {
    easeInSine: [.12, 0, .39, 0],
    easeOutSine: [.61, 1, .88, 1],
    easeInOutSine: [.37, 0, .63, 1],
    easeInQuad: [.11, 0, .5, 0],
    easeOutQuad: [.5, 1, .89, 1],
    easeInOutQuad: [.45, 0, .55, 1],
    easeInCubic: [.32, 0, .67, 0],
    easeOutCubic: [.33, 1, .68, 1],
    easeInOutCubic: [.65, 0, .35, 1],
    easeInQuart: [.5, 0, .75, 0],
    easeOutQuart: [.25, 1, .5, 1],
    easeInOutQuart: [.76, 0, .24, 1],
    easeInQuint: [.64, 0, .78, 0],
    easeOutQuint: [.22, 1, .36, 1],
    easeInOutQuint: [.83, 0, .17, 1],
    easeInExpo: [.7, 0, .84, 0],
    easeOutExpo: [.16, 1, .3, 1],
    easeInOutExpo: [.87, 0, .13, 1],
    easeInCirc: [.55, 0, 1, .45],
    easeOutCirc: [0, .55, .45, 1],
    easeInOutCirc: [.85, 0, .15, 1],
    easeInBack: [.36, 0, .66, -.56],
    easeOutBack: [.34, 1.56, .64, 1],
    easeInOutBack: [.68, -.6, .32, 1.6]
};
r3({
    linear: zA
}, s3);
var o3 = typeof global == "object" && global && global.Object === Object && global
  , i3 = typeof self == "object" && self && self.Object === Object && self
  , ad = o3 || i3 || Function("return this")()
  , Zs = ad.Symbol
  , o1 = Object.prototype
  , a3 = o1.hasOwnProperty
  , c3 = o1.toString
  , ko = Zs ? Zs.toStringTag : void 0;
function u3(e) {
    var t = a3.call(e, ko)
      , n = e[ko];
    try {
        e[ko] = void 0;
        var r = !0
    } catch {}
    var s = c3.call(e);
    return r && (t ? e[ko] = n : delete e[ko]),
    s
}
var l3 = Object.prototype
  , f3 = l3.toString;
function d3(e) {
    return f3.call(e)
}
var p3 = "[object Null]"
  , h3 = "[object Undefined]"
  , Uh = Zs ? Zs.toStringTag : void 0;
function i1(e) {
    return e == null ? e === void 0 ? h3 : p3 : Uh && Uh in Object(e) ? u3(e) : d3(e)
}
function m3(e) {
    return e != null && typeof e == "object"
}
var g3 = "[object Symbol]";
function cd(e) {
    return typeof e == "symbol" || m3(e) && i1(e) == g3
}
function _3(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
        s[n] = t(e[n], n, e);
    return s
}
var ud = Array.isArray
  , x3 = 1 / 0
  , jh = Zs ? Zs.prototype : void 0
  , zh = jh ? jh.toString : void 0;
function a1(e) {
    if (typeof e == "string")
        return e;
    if (ud(e))
        return _3(e, a1) + "";
    if (cd(e))
        return zh ? zh.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -x3 ? "-0" : t
}
function Va(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var y3 = "[object AsyncFunction]"
  , v3 = "[object Function]"
  , E3 = "[object GeneratorFunction]"
  , b3 = "[object Proxy]";
function S3(e) {
    if (!Va(e))
        return !1;
    var t = i1(e);
    return t == v3 || t == E3 || t == y3 || t == b3
}
var $u = ad["__core-js_shared__"]
  , Wh = function() {
    var e = /[^.]+$/.exec($u && $u.keys && $u.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function w3(e) {
    return !!Wh && Wh in e
}
var C3 = Function.prototype
  , A3 = C3.toString;
function T3(e) {
    if (e != null) {
        try {
            return A3.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var k3 = /[\\^$.*+?()[\]{}|]/g
  , R3 = /^\[object .+?Constructor\]$/
  , I3 = Function.prototype
  , D3 = Object.prototype
  , B3 = I3.toString
  , O3 = D3.hasOwnProperty
  , F3 = RegExp("^" + B3.call(O3).replace(k3, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function P3(e) {
    if (!Va(e) || w3(e))
        return !1;
    var t = S3(e) ? F3 : R3;
    return t.test(T3(e))
}
function N3(e, t) {
    return e == null ? void 0 : e[t]
}
function ld(e, t) {
    var n = N3(e, t);
    return P3(n) ? n : void 0
}
var qh = function() {
    try {
        var e = ld(Object, "defineProperty");
        return e({}, "", {}),
        e
    } catch {}
}()
  , M3 = 9007199254740991
  , L3 = /^(?:0|[1-9]\d*)$/;
function H3(e, t) {
    var n = typeof e;
    return t = t ?? M3,
    !!t && (n == "number" || n != "symbol" && L3.test(e)) && e > -1 && e % 1 == 0 && e < t
}
function $3(e, t, n) {
    t == "__proto__" && qh ? qh(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
function c1(e, t) {
    return e === t || e !== e && t !== t
}
var U3 = Object.prototype
  , j3 = U3.hasOwnProperty;
function z3(e, t, n) {
    var r = e[t];
    (!(j3.call(e, t) && c1(r, n)) || n === void 0 && !(t in e)) && $3(e, t, n)
}
var W3 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
  , q3 = /^\w*$/;
function V3(e, t) {
    if (ud(e))
        return !1;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || cd(e) ? !0 : q3.test(e) || !W3.test(e) || t != null && e in Object(t)
}
var ai = ld(Object, "create");
function K3() {
    this.__data__ = ai ? ai(null) : {},
    this.size = 0
}
function G3(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0,
    t
}
var X3 = "__lodash_hash_undefined__"
  , Y3 = Object.prototype
  , J3 = Y3.hasOwnProperty;
function Q3(e) {
    var t = this.__data__;
    if (ai) {
        var n = t[e];
        return n === X3 ? void 0 : n
    }
    return J3.call(t, e) ? t[e] : void 0
}
var Z3 = Object.prototype
  , eT = Z3.hasOwnProperty;
function tT(e) {
    var t = this.__data__;
    return ai ? t[e] !== void 0 : eT.call(t, e)
}
var nT = "__lodash_hash_undefined__";
function rT(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1,
    n[e] = ai && t === void 0 ? nT : t,
    this
}
function rs(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
rs.prototype.clear = K3;
rs.prototype.delete = G3;
rs.prototype.get = Q3;
rs.prototype.has = tT;
rs.prototype.set = rT;
function sT() {
    this.__data__ = [],
    this.size = 0
}
function jc(e, t) {
    for (var n = e.length; n--; )
        if (c1(e[n][0], t))
            return n;
    return -1
}
var oT = Array.prototype
  , iT = oT.splice;
function aT(e) {
    var t = this.__data__
      , n = jc(t, e);
    if (n < 0)
        return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : iT.call(t, n, 1),
    --this.size,
    !0
}
function cT(e) {
    var t = this.__data__
      , n = jc(t, e);
    return n < 0 ? void 0 : t[n][1]
}
function uT(e) {
    return jc(this.__data__, e) > -1
}
function lT(e, t) {
    var n = this.__data__
      , r = jc(n, e);
    return r < 0 ? (++this.size,
    n.push([e, t])) : n[r][1] = t,
    this
}
function ho(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
ho.prototype.clear = sT;
ho.prototype.delete = aT;
ho.prototype.get = cT;
ho.prototype.has = uT;
ho.prototype.set = lT;
var fT = ld(ad, "Map");
function dT() {
    this.size = 0,
    this.__data__ = {
        hash: new rs,
        map: new (fT || ho),
        string: new rs
    }
}
function pT(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
function zc(e, t) {
    var n = e.__data__;
    return pT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
function hT(e) {
    var t = zc(this, e).delete(e);
    return this.size -= t ? 1 : 0,
    t
}
function mT(e) {
    return zc(this, e).get(e)
}
function gT(e) {
    return zc(this, e).has(e)
}
function _T(e, t) {
    var n = zc(this, e)
      , r = n.size;
    return n.set(e, t),
    this.size += n.size == r ? 0 : 1,
    this
}
function ms(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
ms.prototype.clear = dT;
ms.prototype.delete = hT;
ms.prototype.get = mT;
ms.prototype.has = gT;
ms.prototype.set = _T;
var xT = "Expected a function";
function fd(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
        throw new TypeError(xT);
    var n = function() {
        var r = arguments
          , s = t ? t.apply(this, r) : r[0]
          , o = n.cache;
        if (o.has(s))
            return o.get(s);
        var i = e.apply(this, r);
        return n.cache = o.set(s, i) || o,
        i
    };
    return n.cache = new (fd.Cache || ms),
    n
}
fd.Cache = ms;
var yT = 500;
function vT(e) {
    var t = fd(e, function(r) {
        return n.size === yT && n.clear(),
        r
    })
      , n = t.cache;
    return t
}
var ET = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  , bT = /\\(\\)?/g
  , ST = vT(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""),
    e.replace(ET, function(n, r, s, o) {
        t.push(s ? o.replace(bT, "$1") : r || n)
    }),
    t
});
function wT(e) {
    return e == null ? "" : a1(e)
}
function u1(e, t) {
    return ud(e) ? e : V3(e, t) ? [e] : ST(wT(e))
}
var CT = 1 / 0;
function l1(e) {
    if (typeof e == "string" || cd(e))
        return e;
    var t = e + "";
    return t == "0" && 1 / e == -CT ? "-0" : t
}
function AT(e, t) {
    t = u1(t, e);
    for (var n = 0, r = t.length; e != null && n < r; )
        e = e[l1(t[n++])];
    return n && n == r ? e : void 0
}
function f1(e, t, n) {
    var r = e == null ? void 0 : AT(e, t);
    return r === void 0 ? n : r
}
function TT(e) {
    for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
        var s = e[t];
        r[s[0]] = s[1]
    }
    return r
}
function kT(e) {
    return e == null
}
function RT(e, t, n, r) {
    if (!Va(e))
        return e;
    t = u1(t, e);
    for (var s = -1, o = t.length, i = o - 1, a = e; a != null && ++s < o; ) {
        var c = l1(t[s])
          , u = n;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
            return e;
        if (s != i) {
            var l = a[c];
            u = void 0,
            u === void 0 && (u = Va(l) ? l : H3(t[s + 1]) ? [] : {})
        }
        z3(a, c, u),
        a = a[c]
    }
    return e
}
function IT(e, t, n) {
    return e == null ? e : RT(e, t, n)
}
const DT = e => e === void 0
  , l7 = e => typeof e == "boolean"
  , ci = e => typeof e == "number"
  , BT = e => typeof Element > "u" ? !1 : e instanceof Element
  , f7 = e => kT(e)
  , OT = e => $e(e) ? !Number.isNaN(Number(e)) : !1
  , Vh = e => Object.keys(e)
  , d7 = (e, t, n) => ({
    get value() {
        return f1(e, t, n)
    },
    set value(r) {
        IT(e, t, r)
    }
})
  , d1 = (e="") => e.split(" ").filter(t => !!t.trim())
  , p7 = (e, t) => {
    if (!e || !t)
        return !1;
    if (t.includes(" "))
        throw new Error("className should not contain space.");
    return e.classList.contains(t)
}
  , h7 = (e, t) => {
    !e || !t.trim() || e.classList.add(...d1(t))
}
  , m7 = (e, t) => {
    !e || !t.trim() || e.classList.remove(...d1(t))
}
  , g7 = (e, t) => {
    var n;
    if (!hs || !e || !t)
        return "";
    let r = xt(t);
    r === "float" && (r = "cssFloat");
    try {
        const s = e.style[r];
        if (s)
            return s;
        const o = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
        return o ? o[r] : ""
    } catch {
        return e.style[r]
    }
}
;
function wf(e, t="px") {
    if (!e)
        return "";
    if (ci(e) || OT(e))
        return `${e}${t}`;
    if ($e(e))
        return e
}
/*! Element Plus Icons Vue v2.3.1 */
var FT = xe({
    name: "ArrowDown",
    __name: "arrow-down",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
        })]))
    }
})
  , _7 = FT
  , PT = xe({
    name: "ArrowLeft",
    __name: "arrow-left",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
        })]))
    }
})
  , x7 = PT
  , NT = xe({
    name: "ArrowRight",
    __name: "arrow-right",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
        })]))
    }
})
  , y7 = NT
  , MT = xe({
    name: "ArrowUp",
    __name: "arrow-up",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
        })]))
    }
})
  , v7 = MT
  , LT = xe({
    name: "Check",
    __name: "check",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
        })]))
    }
})
  , E7 = LT
  , HT = xe({
    name: "CircleCheck",
    __name: "circle-check",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
        }), De("path", {
            fill: "currentColor",
            d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
        })]))
    }
})
  , $T = HT
  , UT = xe({
    name: "CircleCloseFilled",
    __name: "circle-close-filled",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
        })]))
    }
})
  , p1 = UT
  , jT = xe({
    name: "CircleClose",
    __name: "circle-close",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
        }), De("path", {
            fill: "currentColor",
            d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
        })]))
    }
})
  , zT = jT
  , WT = xe({
    name: "Close",
    __name: "close",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        })]))
    }
})
  , h1 = WT
  , qT = xe({
    name: "FullScreen",
    __name: "full-screen",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
        })]))
    }
})
  , b7 = qT
  , VT = xe({
    name: "Hide",
    __name: "hide",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
        }), De("path", {
            fill: "currentColor",
            d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
        })]))
    }
})
  , S7 = VT
  , KT = xe({
    name: "InfoFilled",
    __name: "info-filled",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
        })]))
    }
})
  , m1 = KT
  , GT = xe({
    name: "Loading",
    __name: "loading",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
        })]))
    }
})
  , XT = GT
  , YT = xe({
    name: "Minus",
    __name: "minus",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
        })]))
    }
})
  , w7 = YT
  , JT = xe({
    name: "PictureFilled",
    __name: "picture-filled",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
        })]))
    }
})
  , C7 = JT
  , QT = xe({
    name: "Plus",
    __name: "plus",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
        })]))
    }
})
  , A7 = QT
  , ZT = xe({
    name: "RefreshLeft",
    __name: "refresh-left",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
        })]))
    }
})
  , T7 = ZT
  , e6 = xe({
    name: "RefreshRight",
    __name: "refresh-right",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
        })]))
    }
})
  , k7 = e6
  , t6 = xe({
    name: "ScaleToOriginal",
    __name: "scale-to-original",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512"
        })]))
    }
})
  , R7 = t6
  , n6 = xe({
    name: "SuccessFilled",
    __name: "success-filled",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
        })]))
    }
})
  , g1 = n6
  , r6 = xe({
    name: "View",
    __name: "view",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
        })]))
    }
})
  , I7 = r6
  , s6 = xe({
    name: "WarningFilled",
    __name: "warning-filled",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
        })]))
    }
})
  , _1 = s6
  , o6 = xe({
    name: "ZoomIn",
    __name: "zoom-in",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"
        })]))
    }
})
  , D7 = o6
  , i6 = xe({
    name: "ZoomOut",
    __name: "zoom-out",
    setup(e) {
        return (t, n) => (pe(),
        Oe("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [De("path", {
            fill: "currentColor",
            d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64"
        })]))
    }
})
  , B7 = i6;
const x1 = "__epPropKey"
  , Vr = e => e
  , a6 = e => Ne(e) && !!e[x1]
  , y1 = (e, t) => {
    if (!Ne(e) || a6(e))
        return e;
    const {values: n, required: r, default: s, type: o, validator: i} = e
      , c = {
        type: o,
        required: !!r,
        validator: n || i ? u => {
            let l = !1
              , f = [];
            if (n && (f = Array.from(n),
            Se(e, "default") && f.push(s),
            l || (l = f.includes(u))),
            i && (l || (l = i(u))),
            !l && f.length > 0) {
                const d = [...new Set(f)].map(p => JSON.stringify(p)).join(", ");
                jx(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(u)}.`)
            }
            return l
        }
        : void 0,
        [x1]: !0
    };
    return Se(e, "default") && (c.default = s),
    c
}
  , dd = e => TT(Object.entries(e).map( ([t,n]) => [t, y1(n, t)]))
  , c6 = Vr([String, Object, Function])
  , O7 = {
    Close: h1
}
  , u6 = {
    Close: h1,
    SuccessFilled: g1,
    InfoFilled: m1,
    WarningFilled: _1,
    CircleCloseFilled: p1
}
  , Kh = {
    success: g1,
    warning: _1,
    error: p1,
    info: m1
}
  , F7 = {
    validating: XT,
    success: $T,
    error: zT
}
  , v1 = (e, t) => {
    if (e.install = n => {
        for (const r of [e, ...Object.values(t ?? {})])
            n.component(r.name, r)
    }
    ,
    t)
        for (const [n,r] of Object.entries(t))
            e[n] = r;
    return e
}
  , l6 = (e, t) => (e.install = n => {
    e._context = n._context,
    n.config.globalProperties[t] = e
}
,
e)
  , P7 = e => (e.install = Tt,
e)
  , f6 = {
    tab: "Tab",
    enter: "Enter",
    space: "Space",
    left: "ArrowLeft",
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    esc: "Escape",
    delete: "Delete",
    backspace: "Backspace",
    numpadEnter: "NumpadEnter",
    pageUp: "PageUp",
    pageDown: "PageDown",
    home: "Home",
    end: "End"
}
  , d6 = ["", "default", "small", "large"]
  , p6 = e => e
  , Gh = ({from: e, replacement: t, scope: n, version: r, ref: s, type: o="API"}, i) => {
    Bt( () => re(i), a => {}
    , {
        immediate: !0
    })
}
;
var h6 = {
    name: "en",
    el: {
        breadcrumb: {
            label: "Breadcrumb"
        },
        colorpicker: {
            confirm: "OK",
            clear: "Clear",
            defaultLabel: "color picker",
            description: "current color is {color}. press enter to select a new color."
        },
        datepicker: {
            now: "Now",
            today: "Today",
            cancel: "Cancel",
            clear: "Clear",
            confirm: "OK",
            dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
            monthTablePrompt: "Use the arrow keys and enter to select the month",
            yearTablePrompt: "Use the arrow keys and enter to select the year",
            selectedDate: "Selected date",
            selectDate: "Select date",
            selectTime: "Select time",
            startDate: "Start Date",
            startTime: "Start Time",
            endDate: "End Date",
            endTime: "End Time",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            year: "",
            month1: "January",
            month2: "February",
            month3: "March",
            month4: "April",
            month5: "May",
            month6: "June",
            month7: "July",
            month8: "August",
            month9: "September",
            month10: "October",
            month11: "November",
            month12: "December",
            week: "week",
            weeks: {
                sun: "Sun",
                mon: "Mon",
                tue: "Tue",
                wed: "Wed",
                thu: "Thu",
                fri: "Fri",
                sat: "Sat"
            },
            weeksFull: {
                sun: "Sunday",
                mon: "Monday",
                tue: "Tuesday",
                wed: "Wednesday",
                thu: "Thursday",
                fri: "Friday",
                sat: "Saturday"
            },
            months: {
                jan: "Jan",
                feb: "Feb",
                mar: "Mar",
                apr: "Apr",
                may: "May",
                jun: "Jun",
                jul: "Jul",
                aug: "Aug",
                sep: "Sep",
                oct: "Oct",
                nov: "Nov",
                dec: "Dec"
            }
        },
        inputNumber: {
            decrease: "decrease number",
            increase: "increase number"
        },
        select: {
            loading: "Loading",
            noMatch: "No matching data",
            noData: "No data",
            placeholder: "Select"
        },
        dropdown: {
            toggleDropdown: "Toggle Dropdown"
        },
        cascader: {
            noMatch: "No matching data",
            loading: "Loading",
            placeholder: "Select",
            noData: "No data"
        },
        pagination: {
            goto: "Go to",
            pagesize: "/page",
            total: "Total {total}",
            pageClassifier: "",
            page: "Page",
            prev: "Go to previous page",
            next: "Go to next page",
            currentPage: "page {pager}",
            prevPages: "Previous {pager} pages",
            nextPages: "Next {pager} pages",
            deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
        },
        dialog: {
            close: "Close this dialog"
        },
        drawer: {
            close: "Close this dialog"
        },
        messagebox: {
            title: "Message",
            confirm: "OK",
            cancel: "Cancel",
            error: "Illegal input",
            close: "Close this dialog"
        },
        upload: {
            deleteTip: "press delete to remove",
            delete: "Delete",
            preview: "Preview",
            continue: "Continue"
        },
        slider: {
            defaultLabel: "slider between {min} and {max}",
            defaultRangeStartLabel: "pick start value",
            defaultRangeEndLabel: "pick end value"
        },
        table: {
            emptyText: "No Data",
            confirmFilter: "Confirm",
            resetFilter: "Reset",
            clearFilter: "All",
            sumText: "Sum"
        },
        tour: {
            next: "Next",
            previous: "Previous",
            finish: "Finish"
        },
        tree: {
            emptyText: "No Data"
        },
        transfer: {
            noMatch: "No matching data",
            noData: "No data",
            titles: ["List 1", "List 2"],
            filterPlaceholder: "Enter keyword",
            noCheckedFormat: "{total} items",
            hasCheckedFormat: "{checked}/{total} checked"
        },
        image: {
            error: "FAILED"
        },
        pageHeader: {
            title: "Back"
        },
        popconfirm: {
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        },
        carousel: {
            leftArrow: "Carousel arrow left",
            rightArrow: "Carousel arrow right",
            indicator: "Carousel switch to index {index}"
        }
    }
};
const m6 = e => (t, n) => g6(t, n, re(e))
  , g6 = (e, t, n) => f1(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
    var o;
    return `${(o = t == null ? void 0 : t[s]) != null ? o : `{${s}}`}`
}
)
  , _6 = e => {
    const t = me( () => re(e).name)
      , n = Xe(e) ? e : We(e);
    return {
        lang: t,
        locale: n,
        t: m6(e)
    }
}
  , E1 = Symbol("localeContextKey")
  , x6 = e => {
    const t = e || qe(E1, We());
    return _6(me( () => t.value || h6))
}
  , va = "el"
  , y6 = "is-"
  , Fr = (e, t, n, r, s) => {
    let o = `${e}-${t}`;
    return n && (o += `-${n}`),
    r && (o += `__${r}`),
    s && (o += `--${s}`),
    o
}
  , b1 = Symbol("namespaceContextKey")
  , v6 = e => {
    const t = e || (Et() ? qe(b1, We(va)) : We(va));
    return me( () => re(t) || va)
}
  , pd = (e, t) => {
    const n = v6(t);
    return {
        namespace: n,
        b: (h="") => Fr(n.value, e, h, "", ""),
        e: h => h ? Fr(n.value, e, "", h, "") : "",
        m: h => h ? Fr(n.value, e, "", "", h) : "",
        be: (h, g) => h && g ? Fr(n.value, e, h, g, "") : "",
        em: (h, g) => h && g ? Fr(n.value, e, "", h, g) : "",
        bm: (h, g) => h && g ? Fr(n.value, e, h, "", g) : "",
        bem: (h, g, E) => h && g && E ? Fr(n.value, e, h, g, E) : "",
        is: (h, ...g) => {
            const E = g.length >= 1 ? g[0] : !0;
            return h && E ? `${y6}${h}` : ""
        }
        ,
        cssVar: h => {
            const g = {};
            for (const E in h)
                h[E] && (g[`--${n.value}-${E}`] = h[E]);
            return g
        }
        ,
        cssVarName: h => `--${n.value}-${h}`,
        cssVarBlock: h => {
            const g = {};
            for (const E in h)
                h[E] && (g[`--${n.value}-${e}-${E}`] = h[E]);
            return g
        }
        ,
        cssVarBlockName: h => `--${n.value}-${e}-${h}`
    }
}
  , Xh = {
    current: 0
}
  , Yh = We(0)
  , S1 = 2e3
  , Jh = Symbol("elZIndexContextKey")
  , w1 = Symbol("zIndexContextKey")
  , E6 = e => {
    const t = Et() ? qe(Jh, Xh) : Xh
      , n = e || (Et() ? qe(w1, void 0) : void 0)
      , r = me( () => {
        const i = re(n);
        return ci(i) ? i : S1
    }
    )
      , s = me( () => r.value + Yh.value)
      , o = () => (t.current++,
    Yh.value = t.current,
    s.value);
    return !hs && qe(Jh),
    {
        initialZIndex: r,
        currentZIndex: s,
        nextZIndex: o
    }
}
  , N7 = y1({
    type: String,
    values: d6,
    required: !1
})
  , C1 = Symbol("size")
  , M7 = () => {
    const e = qe(C1, {});
    return me( () => re(e.size) || "")
}
  , A1 = Symbol()
  , Ka = We();
function T1(e, t=void 0) {
    const n = Et() ? qe(A1, Ka) : Ka;
    return e ? me( () => {
        var r, s;
        return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t
    }
    ) : n
}
function b6(e, t) {
    const n = T1()
      , r = pd(e, me( () => {
        var a;
        return ((a = n.value) == null ? void 0 : a.namespace) || va
    }
    ))
      , s = x6(me( () => {
        var a;
        return (a = n.value) == null ? void 0 : a.locale
    }
    ))
      , o = E6(me( () => {
        var a;
        return ((a = n.value) == null ? void 0 : a.zIndex) || S1
    }
    ))
      , i = me( () => {
        var a;
        return re(t) || ((a = n.value) == null ? void 0 : a.size) || ""
    }
    );
    return S6(me( () => re(n) || {})),
    {
        ns: r,
        locale: s,
        zIndex: o,
        size: i
    }
}
const S6 = (e, t, n=!1) => {
    var r;
    const s = !!Et()
      , o = s ? T1() : void 0
      , i = (r = void 0) != null ? r : s ? $n : void 0;
    if (!i)
        return;
    const a = me( () => {
        const c = re(e);
        return o != null && o.value ? w6(o.value, c) : c
    }
    );
    return i(A1, a),
    i(E1, me( () => a.value.locale)),
    i(b1, me( () => a.value.namespace)),
    i(w1, me( () => a.value.zIndex)),
    i(C1, {
        size: me( () => a.value.size || "")
    }),
    (n || !Ka.value) && (Ka.value = a.value),
    a
}
  , w6 = (e, t) => {
    const n = [...new Set([...Vh(e), ...Vh(t)])]
      , r = {};
    for (const s of n)
        r[s] = t[s] !== void 0 ? t[s] : e[s];
    return r
}
  , Qh = {};
var hd = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r,s] of t)
        n[r] = s;
    return n
}
;
const C6 = dd({
    size: {
        type: Vr([Number, String])
    },
    color: {
        type: String
    }
})
  , A6 = xe({
    name: "ElIcon",
    inheritAttrs: !1
})
  , T6 = xe({
    ...A6,
    props: C6,
    setup(e) {
        const t = e
          , n = pd("icon")
          , r = me( () => {
            const {size: s, color: o} = t;
            return !s && !o ? {} : {
                fontSize: DT(s) ? void 0 : wf(s),
                "--color": o
            }
        }
        );
        return (s, o) => (pe(),
        Oe("i", Bc({
            class: re(n).b(),
            style: re(r)
        }, s.$attrs), [Ic(s.$slots, "default")], 16))
    }
});
var k6 = hd(T6, [["__file", "icon.vue"]]);
const Zh = v1(k6)
  , R6 = dd({
    value: {
        type: [String, Number],
        default: ""
    },
    max: {
        type: Number,
        default: 99
    },
    isDot: Boolean,
    hidden: Boolean,
    type: {
        type: String,
        values: ["primary", "success", "warning", "info", "danger"],
        default: "danger"
    },
    showZero: {
        type: Boolean,
        default: !0
    },
    color: String,
    dotStyle: {
        type: Vr([String, Object, Array])
    },
    badgeStyle: {
        type: Vr([String, Object, Array])
    },
    offset: {
        type: Vr(Array),
        default: [0, 0]
    },
    dotClass: {
        type: String
    },
    badgeClass: {
        type: String
    }
})
  , I6 = ["textContent"]
  , D6 = xe({
    name: "ElBadge"
})
  , B6 = xe({
    ...D6,
    props: R6,
    setup(e, {expose: t}) {
        const n = e
          , r = pd("badge")
          , s = me( () => n.isDot ? "" : ci(n.value) && ci(n.max) ? n.max < n.value ? `${n.max}+` : n.value === 0 && !n.showZero ? "" : `${n.value}` : `${n.value}`)
          , o = me( () => {
            var i, a, c, u, l, f;
            return [{
                backgroundColor: n.color,
                marginRight: wf(-((a = (i = n.offset) == null ? void 0 : i[0]) != null ? a : 0)),
                marginTop: wf((u = (c = n.offset) == null ? void 0 : c[1]) != null ? u : 0)
            }, (l = n.dotStyle) != null ? l : {}, (f = n.badgeStyle) != null ? f : {}]
        }
        );
        return Gh({
            from: "dot-style",
            replacement: "badge-style",
            version: "2.8.0",
            scope: "el-badge",
            ref: "https://element-plus.org/en-US/component/badge.html"
        }, me( () => !!n.dotStyle)),
        Gh({
            from: "dot-class",
            replacement: "badge-class",
            version: "2.8.0",
            scope: "el-badge",
            ref: "https://element-plus.org/en-US/component/badge.html"
        }, me( () => !!n.dotClass)),
        t({
            content: s
        }),
        (i, a) => (pe(),
        Oe("div", {
            class: jt(re(r).b())
        }, [Ic(i.$slots, "default"), Pe(ls, {
            name: `${re(r).namespace.value}-zoom-in-center`,
            persisted: ""
        }, {
            default: Hn( () => [F0(De("sup", {
                class: jt([re(r).e("content"), re(r).em("content", i.type), re(r).is("fixed", !!i.$slots.default), re(r).is("dot", i.isDot), i.dotClass, i.badgeClass]),
                style: as(re(o)),
                textContent: _0(re(s))
            }, null, 14, I6), [[Fc, !i.hidden && (re(s) || i.isDot)]])]),
            _: 1
        }, 8, ["name"])], 2))
    }
});
var O6 = hd(B6, [["__file", "badge.vue"]]);
const F6 = v1(O6);
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P6(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function k1(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
const R1 = ["success", "info", "warning", "error"]
  , gt = p6({
    customClass: "",
    center: !1,
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: void 0,
    id: "",
    message: "",
    onClose: void 0,
    showClose: !1,
    type: "info",
    plain: !1,
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: hs ? document.body : void 0
})
  , N6 = dd({
    customClass: {
        type: String,
        default: gt.customClass
    },
    center: {
        type: Boolean,
        default: gt.center
    },
    dangerouslyUseHTMLString: {
        type: Boolean,
        default: gt.dangerouslyUseHTMLString
    },
    duration: {
        type: Number,
        default: gt.duration
    },
    icon: {
        type: c6,
        default: gt.icon
    },
    id: {
        type: String,
        default: gt.id
    },
    message: {
        type: Vr([String, Object, Function]),
        default: gt.message
    },
    onClose: {
        type: Vr(Function),
        default: gt.onClose
    },
    showClose: {
        type: Boolean,
        default: gt.showClose
    },
    type: {
        type: String,
        values: R1,
        default: gt.type
    },
    plain: {
        type: Boolean,
        default: gt.plain
    },
    offset: {
        type: Number,
        default: gt.offset
    },
    zIndex: {
        type: Number,
        default: gt.zIndex
    },
    grouping: {
        type: Boolean,
        default: gt.grouping
    },
    repeatNum: {
        type: Number,
        default: gt.repeatNum
    }
})
  , M6 = {
    destroy: () => !0
}
  , ln = cs([])
  , L6 = e => {
    const t = ln.findIndex(s => s.id === e)
      , n = ln[t];
    let r;
    return t > 0 && (r = ln[t - 1]),
    {
        current: n,
        prev: r
    }
}
  , H6 = e => {
    const {prev: t} = L6(e);
    return t ? t.vm.exposed.bottom.value : 0
}
  , $6 = (e, t) => ln.findIndex(r => r.id === e) > 0 ? 16 : t
  , U6 = ["id"]
  , j6 = ["innerHTML"]
  , z6 = xe({
    name: "ElMessage"
})
  , W6 = xe({
    ...z6,
    props: N6,
    emits: M6,
    setup(e, {expose: t}) {
        const n = e
          , {Close: r} = u6
          , {ns: s, zIndex: o} = b6("message")
          , {currentZIndex: i, nextZIndex: a} = o
          , c = We()
          , u = We(!1)
          , l = We(0);
        let f;
        const d = me( () => n.type ? n.type === "error" ? "danger" : n.type : "info")
          , p = me( () => {
            const b = n.type;
            return {
                [s.bm("icon", b)]: b && Kh[b]
            }
        }
        )
          , m = me( () => n.icon || Kh[n.type] || "")
          , h = me( () => H6(n.id))
          , g = me( () => $6(n.id, n.offset) + h.value)
          , E = me( () => l.value + g.value)
          , x = me( () => ({
            top: `${g.value}px`,
            zIndex: i.value
        }));
        function _() {
            n.duration !== 0 && ({stop: f} = VA( () => {
                S()
            }
            , n.duration))
        }
        function y() {
            f == null || f()
        }
        function S() {
            u.value = !1
        }
        function v({code: b}) {
            b === f6.esc && S()
        }
        return kr( () => {
            _(),
            a(),
            u.value = !0
        }
        ),
        Bt( () => n.repeatNum, () => {
            y(),
            _()
        }
        ),
        ya(document, "keydown", v),
        YA(c, () => {
            l.value = c.value.getBoundingClientRect().height
        }
        ),
        t({
            visible: u,
            bottom: E,
            close: S
        }),
        (b, C) => (pe(),
        It(ls, {
            name: re(s).b("fade"),
            onBeforeLeave: b.onClose,
            onAfterLeave: C[0] || (C[0] = I => b.$emit("destroy")),
            persisted: ""
        }, {
            default: Hn( () => [F0(De("div", {
                id: b.id,
                ref_key: "messageRef",
                ref: c,
                class: jt([re(s).b(), {
                    [re(s).m(b.type)]: b.type
                }, re(s).is("center", b.center), re(s).is("closable", b.showClose), re(s).is("plain", b.plain), b.customClass]),
                style: as(re(x)),
                role: "alert",
                onMouseenter: y,
                onMouseleave: _
            }, [b.repeatNum > 1 ? (pe(),
            It(re(F6), {
                key: 0,
                value: b.repeatNum,
                type: re(d),
                class: jt(re(s).e("badge"))
            }, null, 8, ["value", "type", "class"])) : Fo("v-if", !0), re(m) ? (pe(),
            It(re(Zh), {
                key: 1,
                class: jt([re(s).e("icon"), re(p)])
            }, {
                default: Hn( () => [(pe(),
                It(D0(re(m))))]),
                _: 1
            }, 8, ["class"])) : Fo("v-if", !0), Ic(b.$slots, "default", {}, () => [b.dangerouslyUseHTMLString ? (pe(),
            Oe(ut, {
                key: 1
            }, [Fo(" Caution here, message could've been compromised, never use user's input as message "), De("p", {
                class: jt(re(s).e("content")),
                innerHTML: b.message
            }, null, 10, j6)], 2112)) : (pe(),
            Oe("p", {
                key: 0,
                class: jt(re(s).e("content"))
            }, _0(b.message), 3))]), b.showClose ? (pe(),
            It(re(Zh), {
                key: 2,
                class: jt(re(s).e("closeBtn")),
                onClick: ry(S, ["stop"])
            }, {
                default: Hn( () => [Pe(re(r))]),
                _: 1
            }, 8, ["class", "onClick"])) : Fo("v-if", !0)], 46, U6), [[Fc, u.value]])]),
            _: 3
        }, 8, ["name", "onBeforeLeave"]))
    }
});
var q6 = hd(W6, [["__file", "message.vue"]]);
let V6 = 1;
const I1 = e => {
    const t = !e || $e(e) || Cn(e) || ce(e) ? {
        message: e
    } : e
      , n = {
        ...gt,
        ...t
    };
    if (!n.appendTo)
        n.appendTo = document.body;
    else if ($e(n.appendTo)) {
        let r = document.querySelector(n.appendTo);
        BT(r) || (r = document.body),
        n.appendTo = r
    }
    return n
}
  , K6 = e => {
    const t = ln.indexOf(e);
    if (t === -1)
        return;
    ln.splice(t, 1);
    const {handler: n} = e;
    n.close()
}
  , G6 = ({appendTo: e, ...t}, n) => {
    const r = `message_${V6++}`
      , s = t.onClose
      , o = document.createElement("div")
      , i = {
        ...t,
        id: r,
        onClose: () => {
            s == null || s(),
            K6(l)
        }
        ,
        onDestroy: () => {
            ri(null, o)
        }
    }
      , a = Pe(q6, i, ce(i.message) || Cn(i.message) ? {
        default: ce(i.message) ? i.message : () => i.message
    } : null);
    a.appContext = n || eo._context,
    ri(a, o),
    e.appendChild(o.firstElementChild);
    const c = a.component
      , l = {
        id: r,
        vnode: a,
        vm: c,
        handler: {
            close: () => {
                c.exposed.visible.value = !1
            }
        },
        props: a.component.props
    };
    return l
}
  , eo = (e={}, t) => {
    if (!hs)
        return {
            close: () => {}
        };
    if (ci(Qh.max) && ln.length >= Qh.max)
        return {
            close: () => {}
        };
    const n = I1(e);
    if (n.grouping && ln.length) {
        const s = ln.find( ({vnode: o}) => {
            var i;
            return ((i = o.props) == null ? void 0 : i.message) === n.message
        }
        );
        if (s)
            return s.props.repeatNum += 1,
            s.props.type = n.type,
            s.handler
    }
    const r = G6(n, t);
    return ln.push(r),
    r.handler
}
;
R1.forEach(e => {
    eo[e] = (t={}, n) => {
        const r = I1(t);
        return eo({
            ...r,
            type: e
        }, n)
    }
}
);
function X6(e) {
    for (const t of ln)
        (!e || e === t.props.type) && t.handler.close()
}
eo.closeAll = X6;
eo._context = null;
const Ct = l6(eo, "$message");
var D1 = {
    exports: {}
};
function Y6(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Uu = {
    exports: {}
};
const J6 = {}
  , Q6 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: J6
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Z6 = k1(Q6);
var em;
function Ae() {
    return em || (em = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r()
        }
        )(ue, function() {
            var n = n || function(r, s) {
                var o;
                if (typeof window < "u" && window.crypto && (o = window.crypto),
                typeof self < "u" && self.crypto && (o = self.crypto),
                typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto),
                !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto),
                !o && typeof ue < "u" && ue.crypto && (o = ue.crypto),
                !o && typeof Y6 == "function")
                    try {
                        o = Z6
                    } catch {}
                var i = function() {
                    if (o) {
                        if (typeof o.getRandomValues == "function")
                            try {
                                return o.getRandomValues(new Uint32Array(1))[0]
                            } catch {}
                        if (typeof o.randomBytes == "function")
                            try {
                                return o.randomBytes(4).readInt32LE()
                            } catch {}
                    }
                    throw new Error("Native crypto module could not be used to get secure random number.")
                }
                  , a = Object.create || function() {
                    function x() {}
                    return function(_) {
                        var y;
                        return x.prototype = _,
                        y = new x,
                        x.prototype = null,
                        y
                    }
                }()
                  , c = {}
                  , u = c.lib = {}
                  , l = u.Base = function() {
                    return {
                        extend: function(x) {
                            var _ = a(this);
                            return x && _.mixIn(x),
                            (!_.hasOwnProperty("init") || this.init === _.init) && (_.init = function() {
                                _.$super.init.apply(this, arguments)
                            }
                            ),
                            _.init.prototype = _,
                            _.$super = this,
                            _
                        },
                        create: function() {
                            var x = this.extend();
                            return x.init.apply(x, arguments),
                            x
                        },
                        init: function() {},
                        mixIn: function(x) {
                            for (var _ in x)
                                x.hasOwnProperty(_) && (this[_] = x[_]);
                            x.hasOwnProperty("toString") && (this.toString = x.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }()
                  , f = u.WordArray = l.extend({
                    init: function(x, _) {
                        x = this.words = x || [],
                        _ != s ? this.sigBytes = _ : this.sigBytes = x.length * 4
                    },
                    toString: function(x) {
                        return (x || p).stringify(this)
                    },
                    concat: function(x) {
                        var _ = this.words
                          , y = x.words
                          , S = this.sigBytes
                          , v = x.sigBytes;
                        if (this.clamp(),
                        S % 4)
                            for (var b = 0; b < v; b++) {
                                var C = y[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                                _[S + b >>> 2] |= C << 24 - (S + b) % 4 * 8
                            }
                        else
                            for (var I = 0; I < v; I += 4)
                                _[S + I >>> 2] = y[I >>> 2];
                        return this.sigBytes += v,
                        this
                    },
                    clamp: function() {
                        var x = this.words
                          , _ = this.sigBytes;
                        x[_ >>> 2] &= 4294967295 << 32 - _ % 4 * 8,
                        x.length = r.ceil(_ / 4)
                    },
                    clone: function() {
                        var x = l.clone.call(this);
                        return x.words = this.words.slice(0),
                        x
                    },
                    random: function(x) {
                        for (var _ = [], y = 0; y < x; y += 4)
                            _.push(i());
                        return new f.init(_,x)
                    }
                })
                  , d = c.enc = {}
                  , p = d.Hex = {
                    stringify: function(x) {
                        for (var _ = x.words, y = x.sigBytes, S = [], v = 0; v < y; v++) {
                            var b = _[v >>> 2] >>> 24 - v % 4 * 8 & 255;
                            S.push((b >>> 4).toString(16)),
                            S.push((b & 15).toString(16))
                        }
                        return S.join("")
                    },
                    parse: function(x) {
                        for (var _ = x.length, y = [], S = 0; S < _; S += 2)
                            y[S >>> 3] |= parseInt(x.substr(S, 2), 16) << 24 - S % 8 * 4;
                        return new f.init(y,_ / 2)
                    }
                }
                  , m = d.Latin1 = {
                    stringify: function(x) {
                        for (var _ = x.words, y = x.sigBytes, S = [], v = 0; v < y; v++) {
                            var b = _[v >>> 2] >>> 24 - v % 4 * 8 & 255;
                            S.push(String.fromCharCode(b))
                        }
                        return S.join("")
                    },
                    parse: function(x) {
                        for (var _ = x.length, y = [], S = 0; S < _; S++)
                            y[S >>> 2] |= (x.charCodeAt(S) & 255) << 24 - S % 4 * 8;
                        return new f.init(y,_)
                    }
                }
                  , h = d.Utf8 = {
                    stringify: function(x) {
                        try {
                            return decodeURIComponent(escape(m.stringify(x)))
                        } catch {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(x) {
                        return m.parse(unescape(encodeURIComponent(x)))
                    }
                }
                  , g = u.BufferedBlockAlgorithm = l.extend({
                    reset: function() {
                        this._data = new f.init,
                        this._nDataBytes = 0
                    },
                    _append: function(x) {
                        typeof x == "string" && (x = h.parse(x)),
                        this._data.concat(x),
                        this._nDataBytes += x.sigBytes
                    },
                    _process: function(x) {
                        var _, y = this._data, S = y.words, v = y.sigBytes, b = this.blockSize, C = b * 4, I = v / C;
                        x ? I = r.ceil(I) : I = r.max((I | 0) - this._minBufferSize, 0);
                        var w = I * b
                          , T = r.min(w * 4, v);
                        if (w) {
                            for (var R = 0; R < w; R += b)
                                this._doProcessBlock(S, R);
                            _ = S.splice(0, w),
                            y.sigBytes -= T
                        }
                        return new f.init(_,T)
                    },
                    clone: function() {
                        var x = l.clone.call(this);
                        return x._data = this._data.clone(),
                        x
                    },
                    _minBufferSize: 0
                });
                u.Hasher = g.extend({
                    cfg: l.extend(),
                    init: function(x) {
                        this.cfg = this.cfg.extend(x),
                        this.reset()
                    },
                    reset: function() {
                        g.reset.call(this),
                        this._doReset()
                    },
                    update: function(x) {
                        return this._append(x),
                        this._process(),
                        this
                    },
                    finalize: function(x) {
                        x && this._append(x);
                        var _ = this._doFinalize();
                        return _
                    },
                    blockSize: 16,
                    _createHelper: function(x) {
                        return function(_, y) {
                            return new x.init(y).finalize(_)
                        }
                    },
                    _createHmacHelper: function(x) {
                        return function(_, y) {
                            return new E.HMAC.init(x,y).finalize(_)
                        }
                    }
                });
                var E = c.algo = {};
                return c
            }(Math);
            return n
        })
    }(Uu)),
    Uu.exports
}
var ju = {
    exports: {}
}, tm;
function Wc() {
    return tm || (tm = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            return function(r) {
                var s = n
                  , o = s.lib
                  , i = o.Base
                  , a = o.WordArray
                  , c = s.x64 = {};
                c.Word = i.extend({
                    init: function(u, l) {
                        this.high = u,
                        this.low = l
                    }
                }),
                c.WordArray = i.extend({
                    init: function(u, l) {
                        u = this.words = u || [],
                        l != r ? this.sigBytes = l : this.sigBytes = u.length * 8
                    },
                    toX32: function() {
                        for (var u = this.words, l = u.length, f = [], d = 0; d < l; d++) {
                            var p = u[d];
                            f.push(p.high),
                            f.push(p.low)
                        }
                        return a.create(f, this.sigBytes)
                    },
                    clone: function() {
                        for (var u = i.clone.call(this), l = u.words = this.words.slice(0), f = l.length, d = 0; d < f; d++)
                            l[d] = l[d].clone();
                        return u
                    }
                })
            }(),
            n
        })
    }(ju)),
    ju.exports
}
var zu = {
    exports: {}
}, nm;
function ek() {
    return nm || (nm = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            return function() {
                if (typeof ArrayBuffer == "function") {
                    var r = n
                      , s = r.lib
                      , o = s.WordArray
                      , i = o.init
                      , a = o.init = function(c) {
                        if (c instanceof ArrayBuffer && (c = new Uint8Array(c)),
                        (c instanceof Int8Array || typeof Uint8ClampedArray < "u" && c instanceof Uint8ClampedArray || c instanceof Int16Array || c instanceof Uint16Array || c instanceof Int32Array || c instanceof Uint32Array || c instanceof Float32Array || c instanceof Float64Array) && (c = new Uint8Array(c.buffer,c.byteOffset,c.byteLength)),
                        c instanceof Uint8Array) {
                            for (var u = c.byteLength, l = [], f = 0; f < u; f++)
                                l[f >>> 2] |= c[f] << 24 - f % 4 * 8;
                            i.call(this, l, u)
                        } else
                            i.apply(this, arguments)
                    }
                    ;
                    a.prototype = o
                }
            }(),
            n.lib.WordArray
        })
    }(zu)),
    zu.exports
}
var Wu = {
    exports: {}
}, rm;
function tk() {
    return rm || (rm = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.WordArray
                  , i = r.enc;
                i.Utf16 = i.Utf16BE = {
                    stringify: function(c) {
                        for (var u = c.words, l = c.sigBytes, f = [], d = 0; d < l; d += 2) {
                            var p = u[d >>> 2] >>> 16 - d % 4 * 8 & 65535;
                            f.push(String.fromCharCode(p))
                        }
                        return f.join("")
                    },
                    parse: function(c) {
                        for (var u = c.length, l = [], f = 0; f < u; f++)
                            l[f >>> 1] |= c.charCodeAt(f) << 16 - f % 2 * 16;
                        return o.create(l, u * 2)
                    }
                },
                i.Utf16LE = {
                    stringify: function(c) {
                        for (var u = c.words, l = c.sigBytes, f = [], d = 0; d < l; d += 2) {
                            var p = a(u[d >>> 2] >>> 16 - d % 4 * 8 & 65535);
                            f.push(String.fromCharCode(p))
                        }
                        return f.join("")
                    },
                    parse: function(c) {
                        for (var u = c.length, l = [], f = 0; f < u; f++)
                            l[f >>> 1] |= a(c.charCodeAt(f) << 16 - f % 2 * 16);
                        return o.create(l, u * 2)
                    }
                };
                function a(c) {
                    return c << 8 & 4278255360 | c >>> 8 & 16711935
                }
            }(),
            n.enc.Utf16
        })
    }(Wu)),
    Wu.exports
}
var qu = {
    exports: {}
}, sm;
function gs() {
    return sm || (sm = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.WordArray
                  , i = r.enc;
                i.Base64 = {
                    stringify: function(c) {
                        var u = c.words
                          , l = c.sigBytes
                          , f = this._map;
                        c.clamp();
                        for (var d = [], p = 0; p < l; p += 3)
                            for (var m = u[p >>> 2] >>> 24 - p % 4 * 8 & 255, h = u[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, g = u[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, E = m << 16 | h << 8 | g, x = 0; x < 4 && p + x * .75 < l; x++)
                                d.push(f.charAt(E >>> 6 * (3 - x) & 63));
                        var _ = f.charAt(64);
                        if (_)
                            for (; d.length % 4; )
                                d.push(_);
                        return d.join("")
                    },
                    parse: function(c) {
                        var u = c.length
                          , l = this._map
                          , f = this._reverseMap;
                        if (!f) {
                            f = this._reverseMap = [];
                            for (var d = 0; d < l.length; d++)
                                f[l.charCodeAt(d)] = d
                        }
                        var p = l.charAt(64);
                        if (p) {
                            var m = c.indexOf(p);
                            m !== -1 && (u = m)
                        }
                        return a(c, u, f)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                };
                function a(c, u, l) {
                    for (var f = [], d = 0, p = 0; p < u; p++)
                        if (p % 4) {
                            var m = l[c.charCodeAt(p - 1)] << p % 4 * 2
                              , h = l[c.charCodeAt(p)] >>> 6 - p % 4 * 2
                              , g = m | h;
                            f[d >>> 2] |= g << 24 - d % 4 * 8,
                            d++
                        }
                    return o.create(f, d)
                }
            }(),
            n.enc.Base64
        })
    }(qu)),
    qu.exports
}
var Vu = {
    exports: {}
}, om;
function nk() {
    return om || (om = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.WordArray
                  , i = r.enc;
                i.Base64url = {
                    stringify: function(c, u) {
                        u === void 0 && (u = !0);
                        var l = c.words
                          , f = c.sigBytes
                          , d = u ? this._safe_map : this._map;
                        c.clamp();
                        for (var p = [], m = 0; m < f; m += 3)
                            for (var h = l[m >>> 2] >>> 24 - m % 4 * 8 & 255, g = l[m + 1 >>> 2] >>> 24 - (m + 1) % 4 * 8 & 255, E = l[m + 2 >>> 2] >>> 24 - (m + 2) % 4 * 8 & 255, x = h << 16 | g << 8 | E, _ = 0; _ < 4 && m + _ * .75 < f; _++)
                                p.push(d.charAt(x >>> 6 * (3 - _) & 63));
                        var y = d.charAt(64);
                        if (y)
                            for (; p.length % 4; )
                                p.push(y);
                        return p.join("")
                    },
                    parse: function(c, u) {
                        u === void 0 && (u = !0);
                        var l = c.length
                          , f = u ? this._safe_map : this._map
                          , d = this._reverseMap;
                        if (!d) {
                            d = this._reverseMap = [];
                            for (var p = 0; p < f.length; p++)
                                d[f.charCodeAt(p)] = p
                        }
                        var m = f.charAt(64);
                        if (m) {
                            var h = c.indexOf(m);
                            h !== -1 && (l = h)
                        }
                        return a(c, l, d)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
                };
                function a(c, u, l) {
                    for (var f = [], d = 0, p = 0; p < u; p++)
                        if (p % 4) {
                            var m = l[c.charCodeAt(p - 1)] << p % 4 * 2
                              , h = l[c.charCodeAt(p)] >>> 6 - p % 4 * 2
                              , g = m | h;
                            f[d >>> 2] |= g << 24 - d % 4 * 8,
                            d++
                        }
                    return o.create(f, d)
                }
            }(),
            n.enc.Base64url
        })
    }(Vu)),
    Vu.exports
}
var Ku = {
    exports: {}
}, im;
function _s() {
    return im || (im = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            return function(r) {
                var s = n
                  , o = s.lib
                  , i = o.WordArray
                  , a = o.Hasher
                  , c = s.algo
                  , u = [];
                (function() {
                    for (var h = 0; h < 64; h++)
                        u[h] = r.abs(r.sin(h + 1)) * 4294967296 | 0
                }
                )();
                var l = c.MD5 = a.extend({
                    _doReset: function() {
                        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(h, g) {
                        for (var E = 0; E < 16; E++) {
                            var x = g + E
                              , _ = h[x];
                            h[x] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360
                        }
                        var y = this._hash.words
                          , S = h[g + 0]
                          , v = h[g + 1]
                          , b = h[g + 2]
                          , C = h[g + 3]
                          , I = h[g + 4]
                          , w = h[g + 5]
                          , T = h[g + 6]
                          , R = h[g + 7]
                          , D = h[g + 8]
                          , z = h[g + 9]
                          , X = h[g + 10]
                          , O = h[g + 11]
                          , Z = h[g + 12]
                          , H = h[g + 13]
                          , ie = h[g + 14]
                          , le = h[g + 15]
                          , L = y[0]
                          , j = y[1]
                          , K = y[2]
                          , W = y[3];
                        L = f(L, j, K, W, S, 7, u[0]),
                        W = f(W, L, j, K, v, 12, u[1]),
                        K = f(K, W, L, j, b, 17, u[2]),
                        j = f(j, K, W, L, C, 22, u[3]),
                        L = f(L, j, K, W, I, 7, u[4]),
                        W = f(W, L, j, K, w, 12, u[5]),
                        K = f(K, W, L, j, T, 17, u[6]),
                        j = f(j, K, W, L, R, 22, u[7]),
                        L = f(L, j, K, W, D, 7, u[8]),
                        W = f(W, L, j, K, z, 12, u[9]),
                        K = f(K, W, L, j, X, 17, u[10]),
                        j = f(j, K, W, L, O, 22, u[11]),
                        L = f(L, j, K, W, Z, 7, u[12]),
                        W = f(W, L, j, K, H, 12, u[13]),
                        K = f(K, W, L, j, ie, 17, u[14]),
                        j = f(j, K, W, L, le, 22, u[15]),
                        L = d(L, j, K, W, v, 5, u[16]),
                        W = d(W, L, j, K, T, 9, u[17]),
                        K = d(K, W, L, j, O, 14, u[18]),
                        j = d(j, K, W, L, S, 20, u[19]),
                        L = d(L, j, K, W, w, 5, u[20]),
                        W = d(W, L, j, K, X, 9, u[21]),
                        K = d(K, W, L, j, le, 14, u[22]),
                        j = d(j, K, W, L, I, 20, u[23]),
                        L = d(L, j, K, W, z, 5, u[24]),
                        W = d(W, L, j, K, ie, 9, u[25]),
                        K = d(K, W, L, j, C, 14, u[26]),
                        j = d(j, K, W, L, D, 20, u[27]),
                        L = d(L, j, K, W, H, 5, u[28]),
                        W = d(W, L, j, K, b, 9, u[29]),
                        K = d(K, W, L, j, R, 14, u[30]),
                        j = d(j, K, W, L, Z, 20, u[31]),
                        L = p(L, j, K, W, w, 4, u[32]),
                        W = p(W, L, j, K, D, 11, u[33]),
                        K = p(K, W, L, j, O, 16, u[34]),
                        j = p(j, K, W, L, ie, 23, u[35]),
                        L = p(L, j, K, W, v, 4, u[36]),
                        W = p(W, L, j, K, I, 11, u[37]),
                        K = p(K, W, L, j, R, 16, u[38]),
                        j = p(j, K, W, L, X, 23, u[39]),
                        L = p(L, j, K, W, H, 4, u[40]),
                        W = p(W, L, j, K, S, 11, u[41]),
                        K = p(K, W, L, j, C, 16, u[42]),
                        j = p(j, K, W, L, T, 23, u[43]),
                        L = p(L, j, K, W, z, 4, u[44]),
                        W = p(W, L, j, K, Z, 11, u[45]),
                        K = p(K, W, L, j, le, 16, u[46]),
                        j = p(j, K, W, L, b, 23, u[47]),
                        L = m(L, j, K, W, S, 6, u[48]),
                        W = m(W, L, j, K, R, 10, u[49]),
                        K = m(K, W, L, j, ie, 15, u[50]),
                        j = m(j, K, W, L, w, 21, u[51]),
                        L = m(L, j, K, W, Z, 6, u[52]),
                        W = m(W, L, j, K, C, 10, u[53]),
                        K = m(K, W, L, j, X, 15, u[54]),
                        j = m(j, K, W, L, v, 21, u[55]),
                        L = m(L, j, K, W, D, 6, u[56]),
                        W = m(W, L, j, K, le, 10, u[57]),
                        K = m(K, W, L, j, T, 15, u[58]),
                        j = m(j, K, W, L, H, 21, u[59]),
                        L = m(L, j, K, W, I, 6, u[60]),
                        W = m(W, L, j, K, O, 10, u[61]),
                        K = m(K, W, L, j, b, 15, u[62]),
                        j = m(j, K, W, L, z, 21, u[63]),
                        y[0] = y[0] + L | 0,
                        y[1] = y[1] + j | 0,
                        y[2] = y[2] + K | 0,
                        y[3] = y[3] + W | 0
                    },
                    _doFinalize: function() {
                        var h = this._data
                          , g = h.words
                          , E = this._nDataBytes * 8
                          , x = h.sigBytes * 8;
                        g[x >>> 5] |= 128 << 24 - x % 32;
                        var _ = r.floor(E / 4294967296)
                          , y = E;
                        g[(x + 64 >>> 9 << 4) + 15] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360,
                        g[(x + 64 >>> 9 << 4) + 14] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360,
                        h.sigBytes = (g.length + 1) * 4,
                        this._process();
                        for (var S = this._hash, v = S.words, b = 0; b < 4; b++) {
                            var C = v[b];
                            v[b] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360
                        }
                        return S
                    },
                    clone: function() {
                        var h = a.clone.call(this);
                        return h._hash = this._hash.clone(),
                        h
                    }
                });
                function f(h, g, E, x, _, y, S) {
                    var v = h + (g & E | ~g & x) + _ + S;
                    return (v << y | v >>> 32 - y) + g
                }
                function d(h, g, E, x, _, y, S) {
                    var v = h + (g & x | E & ~x) + _ + S;
                    return (v << y | v >>> 32 - y) + g
                }
                function p(h, g, E, x, _, y, S) {
                    var v = h + (g ^ E ^ x) + _ + S;
                    return (v << y | v >>> 32 - y) + g
                }
                function m(h, g, E, x, _, y, S) {
                    var v = h + (E ^ (g | ~x)) + _ + S;
                    return (v << y | v >>> 32 - y) + g
                }
                s.MD5 = a._createHelper(l),
                s.HmacMD5 = a._createHmacHelper(l)
            }(Math),
            n.MD5
        })
    }(Ku)),
    Ku.exports
}
var Gu = {
    exports: {}
}, am;
function B1() {
    return am || (am = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.WordArray
                  , i = s.Hasher
                  , a = r.algo
                  , c = []
                  , u = a.SHA1 = i.extend({
                    _doReset: function() {
                        this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(l, f) {
                        for (var d = this._hash.words, p = d[0], m = d[1], h = d[2], g = d[3], E = d[4], x = 0; x < 80; x++) {
                            if (x < 16)
                                c[x] = l[f + x] | 0;
                            else {
                                var _ = c[x - 3] ^ c[x - 8] ^ c[x - 14] ^ c[x - 16];
                                c[x] = _ << 1 | _ >>> 31
                            }
                            var y = (p << 5 | p >>> 27) + E + c[x];
                            x < 20 ? y += (m & h | ~m & g) + 1518500249 : x < 40 ? y += (m ^ h ^ g) + 1859775393 : x < 60 ? y += (m & h | m & g | h & g) - 1894007588 : y += (m ^ h ^ g) - 899497514,
                            E = g,
                            g = h,
                            h = m << 30 | m >>> 2,
                            m = p,
                            p = y
                        }
                        d[0] = d[0] + p | 0,
                        d[1] = d[1] + m | 0,
                        d[2] = d[2] + h | 0,
                        d[3] = d[3] + g | 0,
                        d[4] = d[4] + E | 0
                    },
                    _doFinalize: function() {
                        var l = this._data
                          , f = l.words
                          , d = this._nDataBytes * 8
                          , p = l.sigBytes * 8;
                        return f[p >>> 5] |= 128 << 24 - p % 32,
                        f[(p + 64 >>> 9 << 4) + 14] = Math.floor(d / 4294967296),
                        f[(p + 64 >>> 9 << 4) + 15] = d,
                        l.sigBytes = f.length * 4,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var l = i.clone.call(this);
                        return l._hash = this._hash.clone(),
                        l
                    }
                });
                r.SHA1 = i._createHelper(u),
                r.HmacSHA1 = i._createHmacHelper(u)
            }(),
            n.SHA1
        })
    }(Gu)),
    Gu.exports
}
var Xu = {
    exports: {}
}, cm;
function md() {
    return cm || (cm = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            return function(r) {
                var s = n
                  , o = s.lib
                  , i = o.WordArray
                  , a = o.Hasher
                  , c = s.algo
                  , u = []
                  , l = [];
                (function() {
                    function p(E) {
                        for (var x = r.sqrt(E), _ = 2; _ <= x; _++)
                            if (!(E % _))
                                return !1;
                        return !0
                    }
                    function m(E) {
                        return (E - (E | 0)) * 4294967296 | 0
                    }
                    for (var h = 2, g = 0; g < 64; )
                        p(h) && (g < 8 && (u[g] = m(r.pow(h, 1 / 2))),
                        l[g] = m(r.pow(h, 1 / 3)),
                        g++),
                        h++
                }
                )();
                var f = []
                  , d = c.SHA256 = a.extend({
                    _doReset: function() {
                        this._hash = new i.init(u.slice(0))
                    },
                    _doProcessBlock: function(p, m) {
                        for (var h = this._hash.words, g = h[0], E = h[1], x = h[2], _ = h[3], y = h[4], S = h[5], v = h[6], b = h[7], C = 0; C < 64; C++) {
                            if (C < 16)
                                f[C] = p[m + C] | 0;
                            else {
                                var I = f[C - 15]
                                  , w = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3
                                  , T = f[C - 2]
                                  , R = (T << 15 | T >>> 17) ^ (T << 13 | T >>> 19) ^ T >>> 10;
                                f[C] = w + f[C - 7] + R + f[C - 16]
                            }
                            var D = y & S ^ ~y & v
                              , z = g & E ^ g & x ^ E & x
                              , X = (g << 30 | g >>> 2) ^ (g << 19 | g >>> 13) ^ (g << 10 | g >>> 22)
                              , O = (y << 26 | y >>> 6) ^ (y << 21 | y >>> 11) ^ (y << 7 | y >>> 25)
                              , Z = b + O + D + l[C] + f[C]
                              , H = X + z;
                            b = v,
                            v = S,
                            S = y,
                            y = _ + Z | 0,
                            _ = x,
                            x = E,
                            E = g,
                            g = Z + H | 0
                        }
                        h[0] = h[0] + g | 0,
                        h[1] = h[1] + E | 0,
                        h[2] = h[2] + x | 0,
                        h[3] = h[3] + _ | 0,
                        h[4] = h[4] + y | 0,
                        h[5] = h[5] + S | 0,
                        h[6] = h[6] + v | 0,
                        h[7] = h[7] + b | 0
                    },
                    _doFinalize: function() {
                        var p = this._data
                          , m = p.words
                          , h = this._nDataBytes * 8
                          , g = p.sigBytes * 8;
                        return m[g >>> 5] |= 128 << 24 - g % 32,
                        m[(g + 64 >>> 9 << 4) + 14] = r.floor(h / 4294967296),
                        m[(g + 64 >>> 9 << 4) + 15] = h,
                        p.sigBytes = m.length * 4,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var p = a.clone.call(this);
                        return p._hash = this._hash.clone(),
                        p
                    }
                });
                s.SHA256 = a._createHelper(d),
                s.HmacSHA256 = a._createHmacHelper(d)
            }(Math),
            n.SHA256
        })
    }(Xu)),
    Xu.exports
}
var Yu = {
    exports: {}
}, um;
function rk() {
    return um || (um = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), md())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.WordArray
                  , i = r.algo
                  , a = i.SHA256
                  , c = i.SHA224 = a.extend({
                    _doReset: function() {
                        this._hash = new o.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                    },
                    _doFinalize: function() {
                        var u = a._doFinalize.call(this);
                        return u.sigBytes -= 4,
                        u
                    }
                });
                r.SHA224 = a._createHelper(c),
                r.HmacSHA224 = a._createHmacHelper(c)
            }(),
            n.SHA224
        })
    }(Yu)),
    Yu.exports
}
var Ju = {
    exports: {}
}, lm;
function O1() {
    return lm || (lm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), Wc())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.Hasher
                  , i = r.x64
                  , a = i.Word
                  , c = i.WordArray
                  , u = r.algo;
                function l() {
                    return a.create.apply(a, arguments)
                }
                var f = [l(1116352408, 3609767458), l(1899447441, 602891725), l(3049323471, 3964484399), l(3921009573, 2173295548), l(961987163, 4081628472), l(1508970993, 3053834265), l(2453635748, 2937671579), l(2870763221, 3664609560), l(3624381080, 2734883394), l(310598401, 1164996542), l(607225278, 1323610764), l(1426881987, 3590304994), l(1925078388, 4068182383), l(2162078206, 991336113), l(2614888103, 633803317), l(3248222580, 3479774868), l(3835390401, 2666613458), l(4022224774, 944711139), l(264347078, 2341262773), l(604807628, 2007800933), l(770255983, 1495990901), l(1249150122, 1856431235), l(1555081692, 3175218132), l(1996064986, 2198950837), l(2554220882, 3999719339), l(2821834349, 766784016), l(2952996808, 2566594879), l(3210313671, 3203337956), l(3336571891, 1034457026), l(3584528711, 2466948901), l(113926993, 3758326383), l(338241895, 168717936), l(666307205, 1188179964), l(773529912, 1546045734), l(1294757372, 1522805485), l(1396182291, 2643833823), l(1695183700, 2343527390), l(1986661051, 1014477480), l(2177026350, 1206759142), l(2456956037, 344077627), l(2730485921, 1290863460), l(2820302411, 3158454273), l(3259730800, 3505952657), l(3345764771, 106217008), l(3516065817, 3606008344), l(3600352804, 1432725776), l(4094571909, 1467031594), l(275423344, 851169720), l(430227734, 3100823752), l(506948616, 1363258195), l(659060556, 3750685593), l(883997877, 3785050280), l(958139571, 3318307427), l(1322822218, 3812723403), l(1537002063, 2003034995), l(1747873779, 3602036899), l(1955562222, 1575990012), l(2024104815, 1125592928), l(2227730452, 2716904306), l(2361852424, 442776044), l(2428436474, 593698344), l(2756734187, 3733110249), l(3204031479, 2999351573), l(3329325298, 3815920427), l(3391569614, 3928383900), l(3515267271, 566280711), l(3940187606, 3454069534), l(4118630271, 4000239992), l(116418474, 1914138554), l(174292421, 2731055270), l(289380356, 3203993006), l(460393269, 320620315), l(685471733, 587496836), l(852142971, 1086792851), l(1017036298, 365543100), l(1126000580, 2618297676), l(1288033470, 3409855158), l(1501505948, 4234509866), l(1607167915, 987167468), l(1816402316, 1246189591)]
                  , d = [];
                (function() {
                    for (var m = 0; m < 80; m++)
                        d[m] = l()
                }
                )();
                var p = u.SHA512 = o.extend({
                    _doReset: function() {
                        this._hash = new c.init([new a.init(1779033703,4089235720), new a.init(3144134277,2227873595), new a.init(1013904242,4271175723), new a.init(2773480762,1595750129), new a.init(1359893119,2917565137), new a.init(2600822924,725511199), new a.init(528734635,4215389547), new a.init(1541459225,327033209)])
                    },
                    _doProcessBlock: function(m, h) {
                        for (var g = this._hash.words, E = g[0], x = g[1], _ = g[2], y = g[3], S = g[4], v = g[5], b = g[6], C = g[7], I = E.high, w = E.low, T = x.high, R = x.low, D = _.high, z = _.low, X = y.high, O = y.low, Z = S.high, H = S.low, ie = v.high, le = v.low, L = b.high, j = b.low, K = C.high, W = C.low, Ie = I, fe = w, P = T, q = R, ee = D, ne = z, Ee = X, Be = O, A = Z, k = H, B = ie, $ = le, N = L, J = j, te = K, M = W, G = 0; G < 80; G++) {
                            var F, Y, Q = d[G];
                            if (G < 16)
                                Y = Q.high = m[h + G * 2] | 0,
                                F = Q.low = m[h + G * 2 + 1] | 0;
                            else {
                                var se = d[G - 15]
                                  , ae = se.high
                                  , ge = se.low
                                  , Fe = (ae >>> 1 | ge << 31) ^ (ae >>> 8 | ge << 24) ^ ae >>> 7
                                  , Ue = (ge >>> 1 | ae << 31) ^ (ge >>> 8 | ae << 24) ^ (ge >>> 7 | ae << 25)
                                  , et = d[G - 2]
                                  , it = et.high
                                  , Kt = et.low
                                  , $i = (it >>> 19 | Kt << 13) ^ (it << 3 | Kt >>> 29) ^ it >>> 6
                                  , Yn = (Kt >>> 19 | it << 13) ^ (Kt << 3 | it >>> 29) ^ (Kt >>> 6 | it << 26)
                                  , So = d[G - 7]
                                  , bt = So.high
                                  , Gt = So.low
                                  , wo = d[G - 16]
                                  , vb = wo.high
                                  , tp = wo.low;
                                F = Ue + Gt,
                                Y = Fe + bt + (F >>> 0 < Ue >>> 0 ? 1 : 0),
                                F = F + Yn,
                                Y = Y + $i + (F >>> 0 < Yn >>> 0 ? 1 : 0),
                                F = F + tp,
                                Y = Y + vb + (F >>> 0 < tp >>> 0 ? 1 : 0),
                                Q.high = Y,
                                Q.low = F
                            }
                            var Eb = A & B ^ ~A & N
                              , np = k & $ ^ ~k & J
                              , bb = Ie & P ^ Ie & ee ^ P & ee
                              , Sb = fe & q ^ fe & ne ^ q & ne
                              , wb = (Ie >>> 28 | fe << 4) ^ (Ie << 30 | fe >>> 2) ^ (Ie << 25 | fe >>> 7)
                              , rp = (fe >>> 28 | Ie << 4) ^ (fe << 30 | Ie >>> 2) ^ (fe << 25 | Ie >>> 7)
                              , Cb = (A >>> 14 | k << 18) ^ (A >>> 18 | k << 14) ^ (A << 23 | k >>> 9)
                              , Ab = (k >>> 14 | A << 18) ^ (k >>> 18 | A << 14) ^ (k << 23 | A >>> 9)
                              , sp = f[G]
                              , Tb = sp.high
                              , op = sp.low
                              , Mt = M + Ab
                              , Jn = te + Cb + (Mt >>> 0 < M >>> 0 ? 1 : 0)
                              , Mt = Mt + np
                              , Jn = Jn + Eb + (Mt >>> 0 < np >>> 0 ? 1 : 0)
                              , Mt = Mt + op
                              , Jn = Jn + Tb + (Mt >>> 0 < op >>> 0 ? 1 : 0)
                              , Mt = Mt + F
                              , Jn = Jn + Y + (Mt >>> 0 < F >>> 0 ? 1 : 0)
                              , ip = rp + Sb
                              , kb = wb + bb + (ip >>> 0 < rp >>> 0 ? 1 : 0);
                            te = N,
                            M = J,
                            N = B,
                            J = $,
                            B = A,
                            $ = k,
                            k = Be + Mt | 0,
                            A = Ee + Jn + (k >>> 0 < Be >>> 0 ? 1 : 0) | 0,
                            Ee = ee,
                            Be = ne,
                            ee = P,
                            ne = q,
                            P = Ie,
                            q = fe,
                            fe = Mt + ip | 0,
                            Ie = Jn + kb + (fe >>> 0 < Mt >>> 0 ? 1 : 0) | 0
                        }
                        w = E.low = w + fe,
                        E.high = I + Ie + (w >>> 0 < fe >>> 0 ? 1 : 0),
                        R = x.low = R + q,
                        x.high = T + P + (R >>> 0 < q >>> 0 ? 1 : 0),
                        z = _.low = z + ne,
                        _.high = D + ee + (z >>> 0 < ne >>> 0 ? 1 : 0),
                        O = y.low = O + Be,
                        y.high = X + Ee + (O >>> 0 < Be >>> 0 ? 1 : 0),
                        H = S.low = H + k,
                        S.high = Z + A + (H >>> 0 < k >>> 0 ? 1 : 0),
                        le = v.low = le + $,
                        v.high = ie + B + (le >>> 0 < $ >>> 0 ? 1 : 0),
                        j = b.low = j + J,
                        b.high = L + N + (j >>> 0 < J >>> 0 ? 1 : 0),
                        W = C.low = W + M,
                        C.high = K + te + (W >>> 0 < M >>> 0 ? 1 : 0)
                    },
                    _doFinalize: function() {
                        var m = this._data
                          , h = m.words
                          , g = this._nDataBytes * 8
                          , E = m.sigBytes * 8;
                        h[E >>> 5] |= 128 << 24 - E % 32,
                        h[(E + 128 >>> 10 << 5) + 30] = Math.floor(g / 4294967296),
                        h[(E + 128 >>> 10 << 5) + 31] = g,
                        m.sigBytes = h.length * 4,
                        this._process();
                        var x = this._hash.toX32();
                        return x
                    },
                    clone: function() {
                        var m = o.clone.call(this);
                        return m._hash = this._hash.clone(),
                        m
                    },
                    blockSize: 1024 / 32
                });
                r.SHA512 = o._createHelper(p),
                r.HmacSHA512 = o._createHmacHelper(p)
            }(),
            n.SHA512
        })
    }(Ju)),
    Ju.exports
}
var Qu = {
    exports: {}
}, fm;
function sk() {
    return fm || (fm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), Wc(), O1())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.x64
                  , o = s.Word
                  , i = s.WordArray
                  , a = r.algo
                  , c = a.SHA512
                  , u = a.SHA384 = c.extend({
                    _doReset: function() {
                        this._hash = new i.init([new o.init(3418070365,3238371032), new o.init(1654270250,914150663), new o.init(2438529370,812702999), new o.init(355462360,4144912697), new o.init(1731405415,4290775857), new o.init(2394180231,1750603025), new o.init(3675008525,1694076839), new o.init(1203062813,3204075428)])
                    },
                    _doFinalize: function() {
                        var l = c._doFinalize.call(this);
                        return l.sigBytes -= 16,
                        l
                    }
                });
                r.SHA384 = c._createHelper(u),
                r.HmacSHA384 = c._createHmacHelper(u)
            }(),
            n.SHA384
        })
    }(Qu)),
    Qu.exports
}
var Zu = {
    exports: {}
}, dm;
function ok() {
    return dm || (dm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), Wc())
        }
        )(ue, function(n) {
            return function(r) {
                var s = n
                  , o = s.lib
                  , i = o.WordArray
                  , a = o.Hasher
                  , c = s.x64
                  , u = c.Word
                  , l = s.algo
                  , f = []
                  , d = []
                  , p = [];
                (function() {
                    for (var g = 1, E = 0, x = 0; x < 24; x++) {
                        f[g + 5 * E] = (x + 1) * (x + 2) / 2 % 64;
                        var _ = E % 5
                          , y = (2 * g + 3 * E) % 5;
                        g = _,
                        E = y
                    }
                    for (var g = 0; g < 5; g++)
                        for (var E = 0; E < 5; E++)
                            d[g + 5 * E] = E + (2 * g + 3 * E) % 5 * 5;
                    for (var S = 1, v = 0; v < 24; v++) {
                        for (var b = 0, C = 0, I = 0; I < 7; I++) {
                            if (S & 1) {
                                var w = (1 << I) - 1;
                                w < 32 ? C ^= 1 << w : b ^= 1 << w - 32
                            }
                            S & 128 ? S = S << 1 ^ 113 : S <<= 1
                        }
                        p[v] = u.create(b, C)
                    }
                }
                )();
                var m = [];
                (function() {
                    for (var g = 0; g < 25; g++)
                        m[g] = u.create()
                }
                )();
                var h = l.SHA3 = a.extend({
                    cfg: a.cfg.extend({
                        outputLength: 512
                    }),
                    _doReset: function() {
                        for (var g = this._state = [], E = 0; E < 25; E++)
                            g[E] = new u.init;
                        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                    },
                    _doProcessBlock: function(g, E) {
                        for (var x = this._state, _ = this.blockSize / 2, y = 0; y < _; y++) {
                            var S = g[E + 2 * y]
                              , v = g[E + 2 * y + 1];
                            S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360,
                            v = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360;
                            var b = x[y];
                            b.high ^= v,
                            b.low ^= S
                        }
                        for (var C = 0; C < 24; C++) {
                            for (var I = 0; I < 5; I++) {
                                for (var w = 0, T = 0, R = 0; R < 5; R++) {
                                    var b = x[I + 5 * R];
                                    w ^= b.high,
                                    T ^= b.low
                                }
                                var D = m[I];
                                D.high = w,
                                D.low = T
                            }
                            for (var I = 0; I < 5; I++)
                                for (var z = m[(I + 4) % 5], X = m[(I + 1) % 5], O = X.high, Z = X.low, w = z.high ^ (O << 1 | Z >>> 31), T = z.low ^ (Z << 1 | O >>> 31), R = 0; R < 5; R++) {
                                    var b = x[I + 5 * R];
                                    b.high ^= w,
                                    b.low ^= T
                                }
                            for (var H = 1; H < 25; H++) {
                                var w, T, b = x[H], ie = b.high, le = b.low, L = f[H];
                                L < 32 ? (w = ie << L | le >>> 32 - L,
                                T = le << L | ie >>> 32 - L) : (w = le << L - 32 | ie >>> 64 - L,
                                T = ie << L - 32 | le >>> 64 - L);
                                var j = m[d[H]];
                                j.high = w,
                                j.low = T
                            }
                            var K = m[0]
                              , W = x[0];
                            K.high = W.high,
                            K.low = W.low;
                            for (var I = 0; I < 5; I++)
                                for (var R = 0; R < 5; R++) {
                                    var H = I + 5 * R
                                      , b = x[H]
                                      , Ie = m[H]
                                      , fe = m[(I + 1) % 5 + 5 * R]
                                      , P = m[(I + 2) % 5 + 5 * R];
                                    b.high = Ie.high ^ ~fe.high & P.high,
                                    b.low = Ie.low ^ ~fe.low & P.low
                                }
                            var b = x[0]
                              , q = p[C];
                            b.high ^= q.high,
                            b.low ^= q.low
                        }
                    },
                    _doFinalize: function() {
                        var g = this._data
                          , E = g.words;
                        this._nDataBytes * 8;
                        var x = g.sigBytes * 8
                          , _ = this.blockSize * 32;
                        E[x >>> 5] |= 1 << 24 - x % 32,
                        E[(r.ceil((x + 1) / _) * _ >>> 5) - 1] |= 128,
                        g.sigBytes = E.length * 4,
                        this._process();
                        for (var y = this._state, S = this.cfg.outputLength / 8, v = S / 8, b = [], C = 0; C < v; C++) {
                            var I = y[C]
                              , w = I.high
                              , T = I.low;
                            w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360,
                            T = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360,
                            b.push(T),
                            b.push(w)
                        }
                        return new i.init(b,S)
                    },
                    clone: function() {
                        for (var g = a.clone.call(this), E = g._state = this._state.slice(0), x = 0; x < 25; x++)
                            E[x] = E[x].clone();
                        return g
                    }
                });
                s.SHA3 = a._createHelper(h),
                s.HmacSHA3 = a._createHmacHelper(h)
            }(Math),
            n.SHA3
        })
    }(Zu)),
    Zu.exports
}
var el = {
    exports: {}
}, pm;
function ik() {
    return pm || (pm = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/
            return function(r) {
                var s = n
                  , o = s.lib
                  , i = o.WordArray
                  , a = o.Hasher
                  , c = s.algo
                  , u = i.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
                  , l = i.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
                  , f = i.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
                  , d = i.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
                  , p = i.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
                  , m = i.create([1352829926, 1548603684, 1836072691, 2053994217, 0])
                  , h = c.RIPEMD160 = a.extend({
                    _doReset: function() {
                        this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(v, b) {
                        for (var C = 0; C < 16; C++) {
                            var I = b + C
                              , w = v[I];
                            v[I] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360
                        }
                        var T = this._hash.words, R = p.words, D = m.words, z = u.words, X = l.words, O = f.words, Z = d.words, H, ie, le, L, j, K, W, Ie, fe, P;
                        K = H = T[0],
                        W = ie = T[1],
                        Ie = le = T[2],
                        fe = L = T[3],
                        P = j = T[4];
                        for (var q, C = 0; C < 80; C += 1)
                            q = H + v[b + z[C]] | 0,
                            C < 16 ? q += g(ie, le, L) + R[0] : C < 32 ? q += E(ie, le, L) + R[1] : C < 48 ? q += x(ie, le, L) + R[2] : C < 64 ? q += _(ie, le, L) + R[3] : q += y(ie, le, L) + R[4],
                            q = q | 0,
                            q = S(q, O[C]),
                            q = q + j | 0,
                            H = j,
                            j = L,
                            L = S(le, 10),
                            le = ie,
                            ie = q,
                            q = K + v[b + X[C]] | 0,
                            C < 16 ? q += y(W, Ie, fe) + D[0] : C < 32 ? q += _(W, Ie, fe) + D[1] : C < 48 ? q += x(W, Ie, fe) + D[2] : C < 64 ? q += E(W, Ie, fe) + D[3] : q += g(W, Ie, fe) + D[4],
                            q = q | 0,
                            q = S(q, Z[C]),
                            q = q + P | 0,
                            K = P,
                            P = fe,
                            fe = S(Ie, 10),
                            Ie = W,
                            W = q;
                        q = T[1] + le + fe | 0,
                        T[1] = T[2] + L + P | 0,
                        T[2] = T[3] + j + K | 0,
                        T[3] = T[4] + H + W | 0,
                        T[4] = T[0] + ie + Ie | 0,
                        T[0] = q
                    },
                    _doFinalize: function() {
                        var v = this._data
                          , b = v.words
                          , C = this._nDataBytes * 8
                          , I = v.sigBytes * 8;
                        b[I >>> 5] |= 128 << 24 - I % 32,
                        b[(I + 64 >>> 9 << 4) + 14] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360,
                        v.sigBytes = (b.length + 1) * 4,
                        this._process();
                        for (var w = this._hash, T = w.words, R = 0; R < 5; R++) {
                            var D = T[R];
                            T[R] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360
                        }
                        return w
                    },
                    clone: function() {
                        var v = a.clone.call(this);
                        return v._hash = this._hash.clone(),
                        v
                    }
                });
                function g(v, b, C) {
                    return v ^ b ^ C
                }
                function E(v, b, C) {
                    return v & b | ~v & C
                }
                function x(v, b, C) {
                    return (v | ~b) ^ C
                }
                function _(v, b, C) {
                    return v & C | b & ~C
                }
                function y(v, b, C) {
                    return v ^ (b | ~C)
                }
                function S(v, b) {
                    return v << b | v >>> 32 - b
                }
                s.RIPEMD160 = a._createHelper(h),
                s.HmacRIPEMD160 = a._createHmacHelper(h)
            }(),
            n.RIPEMD160
        })
    }(el)),
    el.exports
}
var tl = {
    exports: {}
}, hm;
function gd() {
    return hm || (hm = 1,
    function(e, t) {
        (function(n, r) {
            e.exports = r(Ae())
        }
        )(ue, function(n) {
            (function() {
                var r = n
                  , s = r.lib
                  , o = s.Base
                  , i = r.enc
                  , a = i.Utf8
                  , c = r.algo;
                c.HMAC = o.extend({
                    init: function(u, l) {
                        u = this._hasher = new u.init,
                        typeof l == "string" && (l = a.parse(l));
                        var f = u.blockSize
                          , d = f * 4;
                        l.sigBytes > d && (l = u.finalize(l)),
                        l.clamp();
                        for (var p = this._oKey = l.clone(), m = this._iKey = l.clone(), h = p.words, g = m.words, E = 0; E < f; E++)
                            h[E] ^= 1549556828,
                            g[E] ^= 909522486;
                        p.sigBytes = m.sigBytes = d,
                        this.reset()
                    },
                    reset: function() {
                        var u = this._hasher;
                        u.reset(),
                        u.update(this._iKey)
                    },
                    update: function(u) {
                        return this._hasher.update(u),
                        this
                    },
                    finalize: function(u) {
                        var l = this._hasher
                          , f = l.finalize(u);
                        l.reset();
                        var d = l.finalize(this._oKey.clone().concat(f));
                        return d
                    }
                })
            }
            )()
        })
    }(tl)),
    tl.exports
}
var nl = {
    exports: {}
}, mm;
function ak() {
    return mm || (mm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), md(), gd())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.Base
                  , i = s.WordArray
                  , a = r.algo
                  , c = a.SHA256
                  , u = a.HMAC
                  , l = a.PBKDF2 = o.extend({
                    cfg: o.extend({
                        keySize: 128 / 32,
                        hasher: c,
                        iterations: 25e4
                    }),
                    init: function(f) {
                        this.cfg = this.cfg.extend(f)
                    },
                    compute: function(f, d) {
                        for (var p = this.cfg, m = u.create(p.hasher, f), h = i.create(), g = i.create([1]), E = h.words, x = g.words, _ = p.keySize, y = p.iterations; E.length < _; ) {
                            var S = m.update(d).finalize(g);
                            m.reset();
                            for (var v = S.words, b = v.length, C = S, I = 1; I < y; I++) {
                                C = m.finalize(C),
                                m.reset();
                                for (var w = C.words, T = 0; T < b; T++)
                                    v[T] ^= w[T]
                            }
                            h.concat(S),
                            x[0]++
                        }
                        return h.sigBytes = _ * 4,
                        h
                    }
                });
                r.PBKDF2 = function(f, d, p) {
                    return l.create(p).compute(f, d)
                }
            }(),
            n.PBKDF2
        })
    }(nl)),
    nl.exports
}
var rl = {
    exports: {}
}, gm;
function Rr() {
    return gm || (gm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), B1(), gd())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.Base
                  , i = s.WordArray
                  , a = r.algo
                  , c = a.MD5
                  , u = a.EvpKDF = o.extend({
                    cfg: o.extend({
                        keySize: 128 / 32,
                        hasher: c,
                        iterations: 1
                    }),
                    init: function(l) {
                        this.cfg = this.cfg.extend(l)
                    },
                    compute: function(l, f) {
                        for (var d, p = this.cfg, m = p.hasher.create(), h = i.create(), g = h.words, E = p.keySize, x = p.iterations; g.length < E; ) {
                            d && m.update(d),
                            d = m.update(l).finalize(f),
                            m.reset();
                            for (var _ = 1; _ < x; _++)
                                d = m.finalize(d),
                                m.reset();
                            h.concat(d)
                        }
                        return h.sigBytes = E * 4,
                        h
                    }
                });
                r.EvpKDF = function(l, f, d) {
                    return u.create(d).compute(l, f)
                }
            }(),
            n.EvpKDF
        })
    }(rl)),
    rl.exports
}
var sl = {
    exports: {}
}, _m;
function pt() {
    return _m || (_m = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), Rr())
        }
        )(ue, function(n) {
            n.lib.Cipher || function(r) {
                var s = n
                  , o = s.lib
                  , i = o.Base
                  , a = o.WordArray
                  , c = o.BufferedBlockAlgorithm
                  , u = s.enc;
                u.Utf8;
                var l = u.Base64
                  , f = s.algo
                  , d = f.EvpKDF
                  , p = o.Cipher = c.extend({
                    cfg: i.extend(),
                    createEncryptor: function(w, T) {
                        return this.create(this._ENC_XFORM_MODE, w, T)
                    },
                    createDecryptor: function(w, T) {
                        return this.create(this._DEC_XFORM_MODE, w, T)
                    },
                    init: function(w, T, R) {
                        this.cfg = this.cfg.extend(R),
                        this._xformMode = w,
                        this._key = T,
                        this.reset()
                    },
                    reset: function() {
                        c.reset.call(this),
                        this._doReset()
                    },
                    process: function(w) {
                        return this._append(w),
                        this._process()
                    },
                    finalize: function(w) {
                        w && this._append(w);
                        var T = this._doFinalize();
                        return T
                    },
                    keySize: 128 / 32,
                    ivSize: 128 / 32,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function() {
                        function w(T) {
                            return typeof T == "string" ? I : v
                        }
                        return function(T) {
                            return {
                                encrypt: function(R, D, z) {
                                    return w(D).encrypt(T, R, D, z)
                                },
                                decrypt: function(R, D, z) {
                                    return w(D).decrypt(T, R, D, z)
                                }
                            }
                        }
                    }()
                });
                o.StreamCipher = p.extend({
                    _doFinalize: function() {
                        var w = this._process(!0);
                        return w
                    },
                    blockSize: 1
                });
                var m = s.mode = {}
                  , h = o.BlockCipherMode = i.extend({
                    createEncryptor: function(w, T) {
                        return this.Encryptor.create(w, T)
                    },
                    createDecryptor: function(w, T) {
                        return this.Decryptor.create(w, T)
                    },
                    init: function(w, T) {
                        this._cipher = w,
                        this._iv = T
                    }
                })
                  , g = m.CBC = function() {
                    var w = h.extend();
                    w.Encryptor = w.extend({
                        processBlock: function(R, D) {
                            var z = this._cipher
                              , X = z.blockSize;
                            T.call(this, R, D, X),
                            z.encryptBlock(R, D),
                            this._prevBlock = R.slice(D, D + X)
                        }
                    }),
                    w.Decryptor = w.extend({
                        processBlock: function(R, D) {
                            var z = this._cipher
                              , X = z.blockSize
                              , O = R.slice(D, D + X);
                            z.decryptBlock(R, D),
                            T.call(this, R, D, X),
                            this._prevBlock = O
                        }
                    });
                    function T(R, D, z) {
                        var X, O = this._iv;
                        O ? (X = O,
                        this._iv = r) : X = this._prevBlock;
                        for (var Z = 0; Z < z; Z++)
                            R[D + Z] ^= X[Z]
                    }
                    return w
                }()
                  , E = s.pad = {}
                  , x = E.Pkcs7 = {
                    pad: function(w, T) {
                        for (var R = T * 4, D = R - w.sigBytes % R, z = D << 24 | D << 16 | D << 8 | D, X = [], O = 0; O < D; O += 4)
                            X.push(z);
                        var Z = a.create(X, D);
                        w.concat(Z)
                    },
                    unpad: function(w) {
                        var T = w.words[w.sigBytes - 1 >>> 2] & 255;
                        w.sigBytes -= T
                    }
                };
                o.BlockCipher = p.extend({
                    cfg: p.cfg.extend({
                        mode: g,
                        padding: x
                    }),
                    reset: function() {
                        var w;
                        p.reset.call(this);
                        var T = this.cfg
                          , R = T.iv
                          , D = T.mode;
                        this._xformMode == this._ENC_XFORM_MODE ? w = D.createEncryptor : (w = D.createDecryptor,
                        this._minBufferSize = 1),
                        this._mode && this._mode.__creator == w ? this._mode.init(this, R && R.words) : (this._mode = w.call(D, this, R && R.words),
                        this._mode.__creator = w)
                    },
                    _doProcessBlock: function(w, T) {
                        this._mode.processBlock(w, T)
                    },
                    _doFinalize: function() {
                        var w, T = this.cfg.padding;
                        return this._xformMode == this._ENC_XFORM_MODE ? (T.pad(this._data, this.blockSize),
                        w = this._process(!0)) : (w = this._process(!0),
                        T.unpad(w)),
                        w
                    },
                    blockSize: 128 / 32
                });
                var _ = o.CipherParams = i.extend({
                    init: function(w) {
                        this.mixIn(w)
                    },
                    toString: function(w) {
                        return (w || this.formatter).stringify(this)
                    }
                })
                  , y = s.format = {}
                  , S = y.OpenSSL = {
                    stringify: function(w) {
                        var T, R = w.ciphertext, D = w.salt;
                        return D ? T = a.create([1398893684, 1701076831]).concat(D).concat(R) : T = R,
                        T.toString(l)
                    },
                    parse: function(w) {
                        var T, R = l.parse(w), D = R.words;
                        return D[0] == 1398893684 && D[1] == 1701076831 && (T = a.create(D.slice(2, 4)),
                        D.splice(0, 4),
                        R.sigBytes -= 16),
                        _.create({
                            ciphertext: R,
                            salt: T
                        })
                    }
                }
                  , v = o.SerializableCipher = i.extend({
                    cfg: i.extend({
                        format: S
                    }),
                    encrypt: function(w, T, R, D) {
                        D = this.cfg.extend(D);
                        var z = w.createEncryptor(R, D)
                          , X = z.finalize(T)
                          , O = z.cfg;
                        return _.create({
                            ciphertext: X,
                            key: R,
                            iv: O.iv,
                            algorithm: w,
                            mode: O.mode,
                            padding: O.padding,
                            blockSize: w.blockSize,
                            formatter: D.format
                        })
                    },
                    decrypt: function(w, T, R, D) {
                        D = this.cfg.extend(D),
                        T = this._parse(T, D.format);
                        var z = w.createDecryptor(R, D).finalize(T.ciphertext);
                        return z
                    },
                    _parse: function(w, T) {
                        return typeof w == "string" ? T.parse(w, this) : w
                    }
                })
                  , b = s.kdf = {}
                  , C = b.OpenSSL = {
                    execute: function(w, T, R, D, z) {
                        if (D || (D = a.random(64 / 8)),
                        z)
                            var X = d.create({
                                keySize: T + R,
                                hasher: z
                            }).compute(w, D);
                        else
                            var X = d.create({
                                keySize: T + R
                            }).compute(w, D);
                        var O = a.create(X.words.slice(T), R * 4);
                        return X.sigBytes = T * 4,
                        _.create({
                            key: X,
                            iv: O,
                            salt: D
                        })
                    }
                }
                  , I = o.PasswordBasedCipher = v.extend({
                    cfg: v.cfg.extend({
                        kdf: C
                    }),
                    encrypt: function(w, T, R, D) {
                        D = this.cfg.extend(D);
                        var z = D.kdf.execute(R, w.keySize, w.ivSize, D.salt, D.hasher);
                        D.iv = z.iv;
                        var X = v.encrypt.call(this, w, T, z.key, D);
                        return X.mixIn(z),
                        X
                    },
                    decrypt: function(w, T, R, D) {
                        D = this.cfg.extend(D),
                        T = this._parse(T, D.format);
                        var z = D.kdf.execute(R, w.keySize, w.ivSize, T.salt, D.hasher);
                        D.iv = z.iv;
                        var X = v.decrypt.call(this, w, T, z.key, D);
                        return X
                    }
                })
            }()
        })
    }(sl)),
    sl.exports
}
var ol = {
    exports: {}
}, xm;
function ck() {
    return xm || (xm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.mode.CFB = function() {
                var r = n.lib.BlockCipherMode.extend();
                r.Encryptor = r.extend({
                    processBlock: function(o, i) {
                        var a = this._cipher
                          , c = a.blockSize;
                        s.call(this, o, i, c, a),
                        this._prevBlock = o.slice(i, i + c)
                    }
                }),
                r.Decryptor = r.extend({
                    processBlock: function(o, i) {
                        var a = this._cipher
                          , c = a.blockSize
                          , u = o.slice(i, i + c);
                        s.call(this, o, i, c, a),
                        this._prevBlock = u
                    }
                });
                function s(o, i, a, c) {
                    var u, l = this._iv;
                    l ? (u = l.slice(0),
                    this._iv = void 0) : u = this._prevBlock,
                    c.encryptBlock(u, 0);
                    for (var f = 0; f < a; f++)
                        o[i + f] ^= u[f]
                }
                return r
            }(),
            n.mode.CFB
        })
    }(ol)),
    ol.exports
}
var il = {
    exports: {}
}, ym;
function uk() {
    return ym || (ym = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.mode.CTR = function() {
                var r = n.lib.BlockCipherMode.extend()
                  , s = r.Encryptor = r.extend({
                    processBlock: function(o, i) {
                        var a = this._cipher
                          , c = a.blockSize
                          , u = this._iv
                          , l = this._counter;
                        u && (l = this._counter = u.slice(0),
                        this._iv = void 0);
                        var f = l.slice(0);
                        a.encryptBlock(f, 0),
                        l[c - 1] = l[c - 1] + 1 | 0;
                        for (var d = 0; d < c; d++)
                            o[i + d] ^= f[d]
                    }
                });
                return r.Decryptor = s,
                r
            }(),
            n.mode.CTR
        })
    }(il)),
    il.exports
}
var al = {
    exports: {}
}, vm;
function lk() {
    return vm || (vm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            /** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
            return n.mode.CTRGladman = function() {
                var r = n.lib.BlockCipherMode.extend();
                function s(a) {
                    if ((a >> 24 & 255) === 255) {
                        var c = a >> 16 & 255
                          , u = a >> 8 & 255
                          , l = a & 255;
                        c === 255 ? (c = 0,
                        u === 255 ? (u = 0,
                        l === 255 ? l = 0 : ++l) : ++u) : ++c,
                        a = 0,
                        a += c << 16,
                        a += u << 8,
                        a += l
                    } else
                        a += 1 << 24;
                    return a
                }
                function o(a) {
                    return (a[0] = s(a[0])) === 0 && (a[1] = s(a[1])),
                    a
                }
                var i = r.Encryptor = r.extend({
                    processBlock: function(a, c) {
                        var u = this._cipher
                          , l = u.blockSize
                          , f = this._iv
                          , d = this._counter;
                        f && (d = this._counter = f.slice(0),
                        this._iv = void 0),
                        o(d);
                        var p = d.slice(0);
                        u.encryptBlock(p, 0);
                        for (var m = 0; m < l; m++)
                            a[c + m] ^= p[m]
                    }
                });
                return r.Decryptor = i,
                r
            }(),
            n.mode.CTRGladman
        })
    }(al)),
    al.exports
}
var cl = {
    exports: {}
}, Em;
function fk() {
    return Em || (Em = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.mode.OFB = function() {
                var r = n.lib.BlockCipherMode.extend()
                  , s = r.Encryptor = r.extend({
                    processBlock: function(o, i) {
                        var a = this._cipher
                          , c = a.blockSize
                          , u = this._iv
                          , l = this._keystream;
                        u && (l = this._keystream = u.slice(0),
                        this._iv = void 0),
                        a.encryptBlock(l, 0);
                        for (var f = 0; f < c; f++)
                            o[i + f] ^= l[f]
                    }
                });
                return r.Decryptor = s,
                r
            }(),
            n.mode.OFB
        })
    }(cl)),
    cl.exports
}
var ul = {
    exports: {}
}, bm;
function dk() {
    return bm || (bm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.mode.ECB = function() {
                var r = n.lib.BlockCipherMode.extend();
                return r.Encryptor = r.extend({
                    processBlock: function(s, o) {
                        this._cipher.encryptBlock(s, o)
                    }
                }),
                r.Decryptor = r.extend({
                    processBlock: function(s, o) {
                        this._cipher.decryptBlock(s, o)
                    }
                }),
                r
            }(),
            n.mode.ECB
        })
    }(ul)),
    ul.exports
}
var ll = {
    exports: {}
}, Sm;
function pk() {
    return Sm || (Sm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.pad.AnsiX923 = {
                pad: function(r, s) {
                    var o = r.sigBytes
                      , i = s * 4
                      , a = i - o % i
                      , c = o + a - 1;
                    r.clamp(),
                    r.words[c >>> 2] |= a << 24 - c % 4 * 8,
                    r.sigBytes += a
                },
                unpad: function(r) {
                    var s = r.words[r.sigBytes - 1 >>> 2] & 255;
                    r.sigBytes -= s
                }
            },
            n.pad.Ansix923
        })
    }(ll)),
    ll.exports
}
var fl = {
    exports: {}
}, wm;
function hk() {
    return wm || (wm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.pad.Iso10126 = {
                pad: function(r, s) {
                    var o = s * 4
                      , i = o - r.sigBytes % o;
                    r.concat(n.lib.WordArray.random(i - 1)).concat(n.lib.WordArray.create([i << 24], 1))
                },
                unpad: function(r) {
                    var s = r.words[r.sigBytes - 1 >>> 2] & 255;
                    r.sigBytes -= s
                }
            },
            n.pad.Iso10126
        })
    }(fl)),
    fl.exports
}
var dl = {
    exports: {}
}, Cm;
function mk() {
    return Cm || (Cm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.pad.Iso97971 = {
                pad: function(r, s) {
                    r.concat(n.lib.WordArray.create([2147483648], 1)),
                    n.pad.ZeroPadding.pad(r, s)
                },
                unpad: function(r) {
                    n.pad.ZeroPadding.unpad(r),
                    r.sigBytes--
                }
            },
            n.pad.Iso97971
        })
    }(dl)),
    dl.exports
}
var pl = {
    exports: {}
}, Am;
function gk() {
    return Am || (Am = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.pad.ZeroPadding = {
                pad: function(r, s) {
                    var o = s * 4;
                    r.clamp(),
                    r.sigBytes += o - (r.sigBytes % o || o)
                },
                unpad: function(r) {
                    for (var s = r.words, o = r.sigBytes - 1, o = r.sigBytes - 1; o >= 0; o--)
                        if (s[o >>> 2] >>> 24 - o % 4 * 8 & 255) {
                            r.sigBytes = o + 1;
                            break
                        }
                }
            },
            n.pad.ZeroPadding
        })
    }(pl)),
    pl.exports
}
var hl = {
    exports: {}
}, Tm;
function _k() {
    return Tm || (Tm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return n.pad.NoPadding = {
                pad: function() {},
                unpad: function() {}
            },
            n.pad.NoPadding
        })
    }(hl)),
    hl.exports
}
var ml = {
    exports: {}
}, km;
function xk() {
    return km || (km = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), pt())
        }
        )(ue, function(n) {
            return function(r) {
                var s = n
                  , o = s.lib
                  , i = o.CipherParams
                  , a = s.enc
                  , c = a.Hex
                  , u = s.format;
                u.Hex = {
                    stringify: function(l) {
                        return l.ciphertext.toString(c)
                    },
                    parse: function(l) {
                        var f = c.parse(l);
                        return i.create({
                            ciphertext: f
                        })
                    }
                }
            }(),
            n.format.Hex
        })
    }(ml)),
    ml.exports
}
var gl = {
    exports: {}
}, Rm;
function yk() {
    return Rm || (Rm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), gs(), _s(), Rr(), pt())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.BlockCipher
                  , i = r.algo
                  , a = []
                  , c = []
                  , u = []
                  , l = []
                  , f = []
                  , d = []
                  , p = []
                  , m = []
                  , h = []
                  , g = [];
                (function() {
                    for (var _ = [], y = 0; y < 256; y++)
                        y < 128 ? _[y] = y << 1 : _[y] = y << 1 ^ 283;
                    for (var S = 0, v = 0, y = 0; y < 256; y++) {
                        var b = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
                        b = b >>> 8 ^ b & 255 ^ 99,
                        a[S] = b,
                        c[b] = S;
                        var C = _[S]
                          , I = _[C]
                          , w = _[I]
                          , T = _[b] * 257 ^ b * 16843008;
                        u[S] = T << 24 | T >>> 8,
                        l[S] = T << 16 | T >>> 16,
                        f[S] = T << 8 | T >>> 24,
                        d[S] = T;
                        var T = w * 16843009 ^ I * 65537 ^ C * 257 ^ S * 16843008;
                        p[b] = T << 24 | T >>> 8,
                        m[b] = T << 16 | T >>> 16,
                        h[b] = T << 8 | T >>> 24,
                        g[b] = T,
                        S ? (S = C ^ _[_[_[w ^ C]]],
                        v ^= _[_[v]]) : S = v = 1
                    }
                }
                )();
                var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
                  , x = i.AES = o.extend({
                    _doReset: function() {
                        var _;
                        if (!(this._nRounds && this._keyPriorReset === this._key)) {
                            for (var y = this._keyPriorReset = this._key, S = y.words, v = y.sigBytes / 4, b = this._nRounds = v + 6, C = (b + 1) * 4, I = this._keySchedule = [], w = 0; w < C; w++)
                                w < v ? I[w] = S[w] : (_ = I[w - 1],
                                w % v ? v > 6 && w % v == 4 && (_ = a[_ >>> 24] << 24 | a[_ >>> 16 & 255] << 16 | a[_ >>> 8 & 255] << 8 | a[_ & 255]) : (_ = _ << 8 | _ >>> 24,
                                _ = a[_ >>> 24] << 24 | a[_ >>> 16 & 255] << 16 | a[_ >>> 8 & 255] << 8 | a[_ & 255],
                                _ ^= E[w / v | 0] << 24),
                                I[w] = I[w - v] ^ _);
                            for (var T = this._invKeySchedule = [], R = 0; R < C; R++) {
                                var w = C - R;
                                if (R % 4)
                                    var _ = I[w];
                                else
                                    var _ = I[w - 4];
                                R < 4 || w <= 4 ? T[R] = _ : T[R] = p[a[_ >>> 24]] ^ m[a[_ >>> 16 & 255]] ^ h[a[_ >>> 8 & 255]] ^ g[a[_ & 255]]
                            }
                        }
                    },
                    encryptBlock: function(_, y) {
                        this._doCryptBlock(_, y, this._keySchedule, u, l, f, d, a)
                    },
                    decryptBlock: function(_, y) {
                        var S = _[y + 1];
                        _[y + 1] = _[y + 3],
                        _[y + 3] = S,
                        this._doCryptBlock(_, y, this._invKeySchedule, p, m, h, g, c);
                        var S = _[y + 1];
                        _[y + 1] = _[y + 3],
                        _[y + 3] = S
                    },
                    _doCryptBlock: function(_, y, S, v, b, C, I, w) {
                        for (var T = this._nRounds, R = _[y] ^ S[0], D = _[y + 1] ^ S[1], z = _[y + 2] ^ S[2], X = _[y + 3] ^ S[3], O = 4, Z = 1; Z < T; Z++) {
                            var H = v[R >>> 24] ^ b[D >>> 16 & 255] ^ C[z >>> 8 & 255] ^ I[X & 255] ^ S[O++]
                              , ie = v[D >>> 24] ^ b[z >>> 16 & 255] ^ C[X >>> 8 & 255] ^ I[R & 255] ^ S[O++]
                              , le = v[z >>> 24] ^ b[X >>> 16 & 255] ^ C[R >>> 8 & 255] ^ I[D & 255] ^ S[O++]
                              , L = v[X >>> 24] ^ b[R >>> 16 & 255] ^ C[D >>> 8 & 255] ^ I[z & 255] ^ S[O++];
                            R = H,
                            D = ie,
                            z = le,
                            X = L
                        }
                        var H = (w[R >>> 24] << 24 | w[D >>> 16 & 255] << 16 | w[z >>> 8 & 255] << 8 | w[X & 255]) ^ S[O++]
                          , ie = (w[D >>> 24] << 24 | w[z >>> 16 & 255] << 16 | w[X >>> 8 & 255] << 8 | w[R & 255]) ^ S[O++]
                          , le = (w[z >>> 24] << 24 | w[X >>> 16 & 255] << 16 | w[R >>> 8 & 255] << 8 | w[D & 255]) ^ S[O++]
                          , L = (w[X >>> 24] << 24 | w[R >>> 16 & 255] << 16 | w[D >>> 8 & 255] << 8 | w[z & 255]) ^ S[O++];
                        _[y] = H,
                        _[y + 1] = ie,
                        _[y + 2] = le,
                        _[y + 3] = L
                    },
                    keySize: 256 / 32
                });
                r.AES = o._createHelper(x)
            }(),
            n.AES
        })
    }(gl)),
    gl.exports
}
var _l = {
    exports: {}
}, Im;
function vk() {
    return Im || (Im = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), gs(), _s(), Rr(), pt())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.WordArray
                  , i = s.BlockCipher
                  , a = r.algo
                  , c = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
                  , u = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
                  , l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
                  , f = [{
                    0: 8421888,
                    268435456: 32768,
                    536870912: 8421378,
                    805306368: 2,
                    1073741824: 512,
                    1342177280: 8421890,
                    1610612736: 8389122,
                    1879048192: 8388608,
                    2147483648: 514,
                    2415919104: 8389120,
                    2684354560: 33280,
                    2952790016: 8421376,
                    3221225472: 32770,
                    3489660928: 8388610,
                    3758096384: 0,
                    4026531840: 33282,
                    134217728: 0,
                    402653184: 8421890,
                    671088640: 33282,
                    939524096: 32768,
                    1207959552: 8421888,
                    1476395008: 512,
                    1744830464: 8421378,
                    2013265920: 2,
                    2281701376: 8389120,
                    2550136832: 33280,
                    2818572288: 8421376,
                    3087007744: 8389122,
                    3355443200: 8388610,
                    3623878656: 32770,
                    3892314112: 514,
                    4160749568: 8388608,
                    1: 32768,
                    268435457: 2,
                    536870913: 8421888,
                    805306369: 8388608,
                    1073741825: 8421378,
                    1342177281: 33280,
                    1610612737: 512,
                    1879048193: 8389122,
                    2147483649: 8421890,
                    2415919105: 8421376,
                    2684354561: 8388610,
                    2952790017: 33282,
                    3221225473: 514,
                    3489660929: 8389120,
                    3758096385: 32770,
                    4026531841: 0,
                    134217729: 8421890,
                    402653185: 8421376,
                    671088641: 8388608,
                    939524097: 512,
                    1207959553: 32768,
                    1476395009: 8388610,
                    1744830465: 2,
                    2013265921: 33282,
                    2281701377: 32770,
                    2550136833: 8389122,
                    2818572289: 514,
                    3087007745: 8421888,
                    3355443201: 8389120,
                    3623878657: 0,
                    3892314113: 33280,
                    4160749569: 8421378
                }, {
                    0: 1074282512,
                    16777216: 16384,
                    33554432: 524288,
                    50331648: 1074266128,
                    67108864: 1073741840,
                    83886080: 1074282496,
                    100663296: 1073758208,
                    117440512: 16,
                    134217728: 540672,
                    150994944: 1073758224,
                    167772160: 1073741824,
                    184549376: 540688,
                    201326592: 524304,
                    218103808: 0,
                    234881024: 16400,
                    251658240: 1074266112,
                    8388608: 1073758208,
                    25165824: 540688,
                    41943040: 16,
                    58720256: 1073758224,
                    75497472: 1074282512,
                    92274688: 1073741824,
                    109051904: 524288,
                    125829120: 1074266128,
                    142606336: 524304,
                    159383552: 0,
                    176160768: 16384,
                    192937984: 1074266112,
                    209715200: 1073741840,
                    226492416: 540672,
                    243269632: 1074282496,
                    260046848: 16400,
                    268435456: 0,
                    285212672: 1074266128,
                    301989888: 1073758224,
                    318767104: 1074282496,
                    335544320: 1074266112,
                    352321536: 16,
                    369098752: 540688,
                    385875968: 16384,
                    402653184: 16400,
                    419430400: 524288,
                    436207616: 524304,
                    452984832: 1073741840,
                    469762048: 540672,
                    486539264: 1073758208,
                    503316480: 1073741824,
                    520093696: 1074282512,
                    276824064: 540688,
                    293601280: 524288,
                    310378496: 1074266112,
                    327155712: 16384,
                    343932928: 1073758208,
                    360710144: 1074282512,
                    377487360: 16,
                    394264576: 1073741824,
                    411041792: 1074282496,
                    427819008: 1073741840,
                    444596224: 1073758224,
                    461373440: 524304,
                    478150656: 0,
                    494927872: 16400,
                    511705088: 1074266128,
                    528482304: 540672
                }, {
                    0: 260,
                    1048576: 0,
                    2097152: 67109120,
                    3145728: 65796,
                    4194304: 65540,
                    5242880: 67108868,
                    6291456: 67174660,
                    7340032: 67174400,
                    8388608: 67108864,
                    9437184: 67174656,
                    10485760: 65792,
                    11534336: 67174404,
                    12582912: 67109124,
                    13631488: 65536,
                    14680064: 4,
                    15728640: 256,
                    524288: 67174656,
                    1572864: 67174404,
                    2621440: 0,
                    3670016: 67109120,
                    4718592: 67108868,
                    5767168: 65536,
                    6815744: 65540,
                    7864320: 260,
                    8912896: 4,
                    9961472: 256,
                    11010048: 67174400,
                    12058624: 65796,
                    13107200: 65792,
                    14155776: 67109124,
                    15204352: 67174660,
                    16252928: 67108864,
                    16777216: 67174656,
                    17825792: 65540,
                    18874368: 65536,
                    19922944: 67109120,
                    20971520: 256,
                    22020096: 67174660,
                    23068672: 67108868,
                    24117248: 0,
                    25165824: 67109124,
                    26214400: 67108864,
                    27262976: 4,
                    28311552: 65792,
                    29360128: 67174400,
                    30408704: 260,
                    31457280: 65796,
                    32505856: 67174404,
                    17301504: 67108864,
                    18350080: 260,
                    19398656: 67174656,
                    20447232: 0,
                    21495808: 65540,
                    22544384: 67109120,
                    23592960: 256,
                    24641536: 67174404,
                    25690112: 65536,
                    26738688: 67174660,
                    27787264: 65796,
                    28835840: 67108868,
                    29884416: 67109124,
                    30932992: 67174400,
                    31981568: 4,
                    33030144: 65792
                }, {
                    0: 2151682048,
                    65536: 2147487808,
                    131072: 4198464,
                    196608: 2151677952,
                    262144: 0,
                    327680: 4198400,
                    393216: 2147483712,
                    458752: 4194368,
                    524288: 2147483648,
                    589824: 4194304,
                    655360: 64,
                    720896: 2147487744,
                    786432: 2151678016,
                    851968: 4160,
                    917504: 4096,
                    983040: 2151682112,
                    32768: 2147487808,
                    98304: 64,
                    163840: 2151678016,
                    229376: 2147487744,
                    294912: 4198400,
                    360448: 2151682112,
                    425984: 0,
                    491520: 2151677952,
                    557056: 4096,
                    622592: 2151682048,
                    688128: 4194304,
                    753664: 4160,
                    819200: 2147483648,
                    884736: 4194368,
                    950272: 4198464,
                    1015808: 2147483712,
                    1048576: 4194368,
                    1114112: 4198400,
                    1179648: 2147483712,
                    1245184: 0,
                    1310720: 4160,
                    1376256: 2151678016,
                    1441792: 2151682048,
                    1507328: 2147487808,
                    1572864: 2151682112,
                    1638400: 2147483648,
                    1703936: 2151677952,
                    1769472: 4198464,
                    1835008: 2147487744,
                    1900544: 4194304,
                    1966080: 64,
                    2031616: 4096,
                    1081344: 2151677952,
                    1146880: 2151682112,
                    1212416: 0,
                    1277952: 4198400,
                    1343488: 4194368,
                    1409024: 2147483648,
                    1474560: 2147487808,
                    1540096: 64,
                    1605632: 2147483712,
                    1671168: 4096,
                    1736704: 2147487744,
                    1802240: 2151678016,
                    1867776: 4160,
                    1933312: 2151682048,
                    1998848: 4194304,
                    2064384: 4198464
                }, {
                    0: 128,
                    4096: 17039360,
                    8192: 262144,
                    12288: 536870912,
                    16384: 537133184,
                    20480: 16777344,
                    24576: 553648256,
                    28672: 262272,
                    32768: 16777216,
                    36864: 537133056,
                    40960: 536871040,
                    45056: 553910400,
                    49152: 553910272,
                    53248: 0,
                    57344: 17039488,
                    61440: 553648128,
                    2048: 17039488,
                    6144: 553648256,
                    10240: 128,
                    14336: 17039360,
                    18432: 262144,
                    22528: 537133184,
                    26624: 553910272,
                    30720: 536870912,
                    34816: 537133056,
                    38912: 0,
                    43008: 553910400,
                    47104: 16777344,
                    51200: 536871040,
                    55296: 553648128,
                    59392: 16777216,
                    63488: 262272,
                    65536: 262144,
                    69632: 128,
                    73728: 536870912,
                    77824: 553648256,
                    81920: 16777344,
                    86016: 553910272,
                    90112: 537133184,
                    94208: 16777216,
                    98304: 553910400,
                    102400: 553648128,
                    106496: 17039360,
                    110592: 537133056,
                    114688: 262272,
                    118784: 536871040,
                    122880: 0,
                    126976: 17039488,
                    67584: 553648256,
                    71680: 16777216,
                    75776: 17039360,
                    79872: 537133184,
                    83968: 536870912,
                    88064: 17039488,
                    92160: 128,
                    96256: 553910272,
                    100352: 262272,
                    104448: 553910400,
                    108544: 0,
                    112640: 553648128,
                    116736: 16777344,
                    120832: 262144,
                    124928: 537133056,
                    129024: 536871040
                }, {
                    0: 268435464,
                    256: 8192,
                    512: 270532608,
                    768: 270540808,
                    1024: 268443648,
                    1280: 2097152,
                    1536: 2097160,
                    1792: 268435456,
                    2048: 0,
                    2304: 268443656,
                    2560: 2105344,
                    2816: 8,
                    3072: 270532616,
                    3328: 2105352,
                    3584: 8200,
                    3840: 270540800,
                    128: 270532608,
                    384: 270540808,
                    640: 8,
                    896: 2097152,
                    1152: 2105352,
                    1408: 268435464,
                    1664: 268443648,
                    1920: 8200,
                    2176: 2097160,
                    2432: 8192,
                    2688: 268443656,
                    2944: 270532616,
                    3200: 0,
                    3456: 270540800,
                    3712: 2105344,
                    3968: 268435456,
                    4096: 268443648,
                    4352: 270532616,
                    4608: 270540808,
                    4864: 8200,
                    5120: 2097152,
                    5376: 268435456,
                    5632: 268435464,
                    5888: 2105344,
                    6144: 2105352,
                    6400: 0,
                    6656: 8,
                    6912: 270532608,
                    7168: 8192,
                    7424: 268443656,
                    7680: 270540800,
                    7936: 2097160,
                    4224: 8,
                    4480: 2105344,
                    4736: 2097152,
                    4992: 268435464,
                    5248: 268443648,
                    5504: 8200,
                    5760: 270540808,
                    6016: 270532608,
                    6272: 270540800,
                    6528: 270532616,
                    6784: 8192,
                    7040: 2105352,
                    7296: 2097160,
                    7552: 0,
                    7808: 268435456,
                    8064: 268443656
                }, {
                    0: 1048576,
                    16: 33555457,
                    32: 1024,
                    48: 1049601,
                    64: 34604033,
                    80: 0,
                    96: 1,
                    112: 34603009,
                    128: 33555456,
                    144: 1048577,
                    160: 33554433,
                    176: 34604032,
                    192: 34603008,
                    208: 1025,
                    224: 1049600,
                    240: 33554432,
                    8: 34603009,
                    24: 0,
                    40: 33555457,
                    56: 34604032,
                    72: 1048576,
                    88: 33554433,
                    104: 33554432,
                    120: 1025,
                    136: 1049601,
                    152: 33555456,
                    168: 34603008,
                    184: 1048577,
                    200: 1024,
                    216: 34604033,
                    232: 1,
                    248: 1049600,
                    256: 33554432,
                    272: 1048576,
                    288: 33555457,
                    304: 34603009,
                    320: 1048577,
                    336: 33555456,
                    352: 34604032,
                    368: 1049601,
                    384: 1025,
                    400: 34604033,
                    416: 1049600,
                    432: 1,
                    448: 0,
                    464: 34603008,
                    480: 33554433,
                    496: 1024,
                    264: 1049600,
                    280: 33555457,
                    296: 34603009,
                    312: 1,
                    328: 33554432,
                    344: 1048576,
                    360: 1025,
                    376: 34604032,
                    392: 33554433,
                    408: 34603008,
                    424: 0,
                    440: 34604033,
                    456: 1049601,
                    472: 1024,
                    488: 33555456,
                    504: 1048577
                }, {
                    0: 134219808,
                    1: 131072,
                    2: 134217728,
                    3: 32,
                    4: 131104,
                    5: 134350880,
                    6: 134350848,
                    7: 2048,
                    8: 134348800,
                    9: 134219776,
                    10: 133120,
                    11: 134348832,
                    12: 2080,
                    13: 0,
                    14: 134217760,
                    15: 133152,
                    2147483648: 2048,
                    2147483649: 134350880,
                    2147483650: 134219808,
                    2147483651: 134217728,
                    2147483652: 134348800,
                    2147483653: 133120,
                    2147483654: 133152,
                    2147483655: 32,
                    2147483656: 134217760,
                    2147483657: 2080,
                    2147483658: 131104,
                    2147483659: 134350848,
                    2147483660: 0,
                    2147483661: 134348832,
                    2147483662: 134219776,
                    2147483663: 131072,
                    16: 133152,
                    17: 134350848,
                    18: 32,
                    19: 2048,
                    20: 134219776,
                    21: 134217760,
                    22: 134348832,
                    23: 131072,
                    24: 0,
                    25: 131104,
                    26: 134348800,
                    27: 134219808,
                    28: 134350880,
                    29: 133120,
                    30: 2080,
                    31: 134217728,
                    2147483664: 131072,
                    2147483665: 2048,
                    2147483666: 134348832,
                    2147483667: 133152,
                    2147483668: 32,
                    2147483669: 134348800,
                    2147483670: 134217728,
                    2147483671: 134219808,
                    2147483672: 134350880,
                    2147483673: 134217760,
                    2147483674: 134219776,
                    2147483675: 0,
                    2147483676: 133120,
                    2147483677: 2080,
                    2147483678: 131104,
                    2147483679: 134350848
                }]
                  , d = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
                  , p = a.DES = i.extend({
                    _doReset: function() {
                        for (var E = this._key, x = E.words, _ = [], y = 0; y < 56; y++) {
                            var S = c[y] - 1;
                            _[y] = x[S >>> 5] >>> 31 - S % 32 & 1
                        }
                        for (var v = this._subKeys = [], b = 0; b < 16; b++) {
                            for (var C = v[b] = [], I = l[b], y = 0; y < 24; y++)
                                C[y / 6 | 0] |= _[(u[y] - 1 + I) % 28] << 31 - y % 6,
                                C[4 + (y / 6 | 0)] |= _[28 + (u[y + 24] - 1 + I) % 28] << 31 - y % 6;
                            C[0] = C[0] << 1 | C[0] >>> 31;
                            for (var y = 1; y < 7; y++)
                                C[y] = C[y] >>> (y - 1) * 4 + 3;
                            C[7] = C[7] << 5 | C[7] >>> 27
                        }
                        for (var w = this._invSubKeys = [], y = 0; y < 16; y++)
                            w[y] = v[15 - y]
                    },
                    encryptBlock: function(E, x) {
                        this._doCryptBlock(E, x, this._subKeys)
                    },
                    decryptBlock: function(E, x) {
                        this._doCryptBlock(E, x, this._invSubKeys)
                    },
                    _doCryptBlock: function(E, x, _) {
                        this._lBlock = E[x],
                        this._rBlock = E[x + 1],
                        m.call(this, 4, 252645135),
                        m.call(this, 16, 65535),
                        h.call(this, 2, 858993459),
                        h.call(this, 8, 16711935),
                        m.call(this, 1, 1431655765);
                        for (var y = 0; y < 16; y++) {
                            for (var S = _[y], v = this._lBlock, b = this._rBlock, C = 0, I = 0; I < 8; I++)
                                C |= f[I][((b ^ S[I]) & d[I]) >>> 0];
                            this._lBlock = b,
                            this._rBlock = v ^ C
                        }
                        var w = this._lBlock;
                        this._lBlock = this._rBlock,
                        this._rBlock = w,
                        m.call(this, 1, 1431655765),
                        h.call(this, 8, 16711935),
                        h.call(this, 2, 858993459),
                        m.call(this, 16, 65535),
                        m.call(this, 4, 252645135),
                        E[x] = this._lBlock,
                        E[x + 1] = this._rBlock
                    },
                    keySize: 64 / 32,
                    ivSize: 64 / 32,
                    blockSize: 64 / 32
                });
                function m(E, x) {
                    var _ = (this._lBlock >>> E ^ this._rBlock) & x;
                    this._rBlock ^= _,
                    this._lBlock ^= _ << E
                }
                function h(E, x) {
                    var _ = (this._rBlock >>> E ^ this._lBlock) & x;
                    this._lBlock ^= _,
                    this._rBlock ^= _ << E
                }
                r.DES = i._createHelper(p);
                var g = a.TripleDES = i.extend({
                    _doReset: function() {
                        var E = this._key
                          , x = E.words;
                        if (x.length !== 2 && x.length !== 4 && x.length < 6)
                            throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                        var _ = x.slice(0, 2)
                          , y = x.length < 4 ? x.slice(0, 2) : x.slice(2, 4)
                          , S = x.length < 6 ? x.slice(0, 2) : x.slice(4, 6);
                        this._des1 = p.createEncryptor(o.create(_)),
                        this._des2 = p.createEncryptor(o.create(y)),
                        this._des3 = p.createEncryptor(o.create(S))
                    },
                    encryptBlock: function(E, x) {
                        this._des1.encryptBlock(E, x),
                        this._des2.decryptBlock(E, x),
                        this._des3.encryptBlock(E, x)
                    },
                    decryptBlock: function(E, x) {
                        this._des3.decryptBlock(E, x),
                        this._des2.encryptBlock(E, x),
                        this._des1.decryptBlock(E, x)
                    },
                    keySize: 192 / 32,
                    ivSize: 64 / 32,
                    blockSize: 64 / 32
                });
                r.TripleDES = i._createHelper(g)
            }(),
            n.TripleDES
        })
    }(_l)),
    _l.exports
}
var xl = {
    exports: {}
}, Dm;
function Ek() {
    return Dm || (Dm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), gs(), _s(), Rr(), pt())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.StreamCipher
                  , i = r.algo
                  , a = i.RC4 = o.extend({
                    _doReset: function() {
                        for (var l = this._key, f = l.words, d = l.sigBytes, p = this._S = [], m = 0; m < 256; m++)
                            p[m] = m;
                        for (var m = 0, h = 0; m < 256; m++) {
                            var g = m % d
                              , E = f[g >>> 2] >>> 24 - g % 4 * 8 & 255;
                            h = (h + p[m] + E) % 256;
                            var x = p[m];
                            p[m] = p[h],
                            p[h] = x
                        }
                        this._i = this._j = 0
                    },
                    _doProcessBlock: function(l, f) {
                        l[f] ^= c.call(this)
                    },
                    keySize: 256 / 32,
                    ivSize: 0
                });
                function c() {
                    for (var l = this._S, f = this._i, d = this._j, p = 0, m = 0; m < 4; m++) {
                        f = (f + 1) % 256,
                        d = (d + l[f]) % 256;
                        var h = l[f];
                        l[f] = l[d],
                        l[d] = h,
                        p |= l[(l[f] + l[d]) % 256] << 24 - m * 8
                    }
                    return this._i = f,
                    this._j = d,
                    p
                }
                r.RC4 = o._createHelper(a);
                var u = i.RC4Drop = a.extend({
                    cfg: a.cfg.extend({
                        drop: 192
                    }),
                    _doReset: function() {
                        a._doReset.call(this);
                        for (var l = this.cfg.drop; l > 0; l--)
                            c.call(this)
                    }
                });
                r.RC4Drop = o._createHelper(u)
            }(),
            n.RC4
        })
    }(xl)),
    xl.exports
}
var yl = {
    exports: {}
}, Bm;
function bk() {
    return Bm || (Bm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), gs(), _s(), Rr(), pt())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.StreamCipher
                  , i = r.algo
                  , a = []
                  , c = []
                  , u = []
                  , l = i.Rabbit = o.extend({
                    _doReset: function() {
                        for (var d = this._key.words, p = this.cfg.iv, m = 0; m < 4; m++)
                            d[m] = (d[m] << 8 | d[m] >>> 24) & 16711935 | (d[m] << 24 | d[m] >>> 8) & 4278255360;
                        var h = this._X = [d[0], d[3] << 16 | d[2] >>> 16, d[1], d[0] << 16 | d[3] >>> 16, d[2], d[1] << 16 | d[0] >>> 16, d[3], d[2] << 16 | d[1] >>> 16]
                          , g = this._C = [d[2] << 16 | d[2] >>> 16, d[0] & 4294901760 | d[1] & 65535, d[3] << 16 | d[3] >>> 16, d[1] & 4294901760 | d[2] & 65535, d[0] << 16 | d[0] >>> 16, d[2] & 4294901760 | d[3] & 65535, d[1] << 16 | d[1] >>> 16, d[3] & 4294901760 | d[0] & 65535];
                        this._b = 0;
                        for (var m = 0; m < 4; m++)
                            f.call(this);
                        for (var m = 0; m < 8; m++)
                            g[m] ^= h[m + 4 & 7];
                        if (p) {
                            var E = p.words
                              , x = E[0]
                              , _ = E[1]
                              , y = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360
                              , S = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360
                              , v = y >>> 16 | S & 4294901760
                              , b = S << 16 | y & 65535;
                            g[0] ^= y,
                            g[1] ^= v,
                            g[2] ^= S,
                            g[3] ^= b,
                            g[4] ^= y,
                            g[5] ^= v,
                            g[6] ^= S,
                            g[7] ^= b;
                            for (var m = 0; m < 4; m++)
                                f.call(this)
                        }
                    },
                    _doProcessBlock: function(d, p) {
                        var m = this._X;
                        f.call(this),
                        a[0] = m[0] ^ m[5] >>> 16 ^ m[3] << 16,
                        a[1] = m[2] ^ m[7] >>> 16 ^ m[5] << 16,
                        a[2] = m[4] ^ m[1] >>> 16 ^ m[7] << 16,
                        a[3] = m[6] ^ m[3] >>> 16 ^ m[1] << 16;
                        for (var h = 0; h < 4; h++)
                            a[h] = (a[h] << 8 | a[h] >>> 24) & 16711935 | (a[h] << 24 | a[h] >>> 8) & 4278255360,
                            d[p + h] ^= a[h]
                    },
                    blockSize: 128 / 32,
                    ivSize: 64 / 32
                });
                function f() {
                    for (var d = this._X, p = this._C, m = 0; m < 8; m++)
                        c[m] = p[m];
                    p[0] = p[0] + 1295307597 + this._b | 0,
                    p[1] = p[1] + 3545052371 + (p[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0,
                    p[2] = p[2] + 886263092 + (p[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0,
                    p[3] = p[3] + 1295307597 + (p[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0,
                    p[4] = p[4] + 3545052371 + (p[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0,
                    p[5] = p[5] + 886263092 + (p[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0,
                    p[6] = p[6] + 1295307597 + (p[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0,
                    p[7] = p[7] + 3545052371 + (p[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0,
                    this._b = p[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
                    for (var m = 0; m < 8; m++) {
                        var h = d[m] + p[m]
                          , g = h & 65535
                          , E = h >>> 16
                          , x = ((g * g >>> 17) + g * E >>> 15) + E * E
                          , _ = ((h & 4294901760) * h | 0) + ((h & 65535) * h | 0);
                        u[m] = x ^ _
                    }
                    d[0] = u[0] + (u[7] << 16 | u[7] >>> 16) + (u[6] << 16 | u[6] >>> 16) | 0,
                    d[1] = u[1] + (u[0] << 8 | u[0] >>> 24) + u[7] | 0,
                    d[2] = u[2] + (u[1] << 16 | u[1] >>> 16) + (u[0] << 16 | u[0] >>> 16) | 0,
                    d[3] = u[3] + (u[2] << 8 | u[2] >>> 24) + u[1] | 0,
                    d[4] = u[4] + (u[3] << 16 | u[3] >>> 16) + (u[2] << 16 | u[2] >>> 16) | 0,
                    d[5] = u[5] + (u[4] << 8 | u[4] >>> 24) + u[3] | 0,
                    d[6] = u[6] + (u[5] << 16 | u[5] >>> 16) + (u[4] << 16 | u[4] >>> 16) | 0,
                    d[7] = u[7] + (u[6] << 8 | u[6] >>> 24) + u[5] | 0
                }
                r.Rabbit = o._createHelper(l)
            }(),
            n.Rabbit
        })
    }(yl)),
    yl.exports
}
var vl = {
    exports: {}
}, Om;
function Sk() {
    return Om || (Om = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), gs(), _s(), Rr(), pt())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.StreamCipher
                  , i = r.algo
                  , a = []
                  , c = []
                  , u = []
                  , l = i.RabbitLegacy = o.extend({
                    _doReset: function() {
                        var d = this._key.words
                          , p = this.cfg.iv
                          , m = this._X = [d[0], d[3] << 16 | d[2] >>> 16, d[1], d[0] << 16 | d[3] >>> 16, d[2], d[1] << 16 | d[0] >>> 16, d[3], d[2] << 16 | d[1] >>> 16]
                          , h = this._C = [d[2] << 16 | d[2] >>> 16, d[0] & 4294901760 | d[1] & 65535, d[3] << 16 | d[3] >>> 16, d[1] & 4294901760 | d[2] & 65535, d[0] << 16 | d[0] >>> 16, d[2] & 4294901760 | d[3] & 65535, d[1] << 16 | d[1] >>> 16, d[3] & 4294901760 | d[0] & 65535];
                        this._b = 0;
                        for (var g = 0; g < 4; g++)
                            f.call(this);
                        for (var g = 0; g < 8; g++)
                            h[g] ^= m[g + 4 & 7];
                        if (p) {
                            var E = p.words
                              , x = E[0]
                              , _ = E[1]
                              , y = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360
                              , S = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360
                              , v = y >>> 16 | S & 4294901760
                              , b = S << 16 | y & 65535;
                            h[0] ^= y,
                            h[1] ^= v,
                            h[2] ^= S,
                            h[3] ^= b,
                            h[4] ^= y,
                            h[5] ^= v,
                            h[6] ^= S,
                            h[7] ^= b;
                            for (var g = 0; g < 4; g++)
                                f.call(this)
                        }
                    },
                    _doProcessBlock: function(d, p) {
                        var m = this._X;
                        f.call(this),
                        a[0] = m[0] ^ m[5] >>> 16 ^ m[3] << 16,
                        a[1] = m[2] ^ m[7] >>> 16 ^ m[5] << 16,
                        a[2] = m[4] ^ m[1] >>> 16 ^ m[7] << 16,
                        a[3] = m[6] ^ m[3] >>> 16 ^ m[1] << 16;
                        for (var h = 0; h < 4; h++)
                            a[h] = (a[h] << 8 | a[h] >>> 24) & 16711935 | (a[h] << 24 | a[h] >>> 8) & 4278255360,
                            d[p + h] ^= a[h]
                    },
                    blockSize: 128 / 32,
                    ivSize: 64 / 32
                });
                function f() {
                    for (var d = this._X, p = this._C, m = 0; m < 8; m++)
                        c[m] = p[m];
                    p[0] = p[0] + 1295307597 + this._b | 0,
                    p[1] = p[1] + 3545052371 + (p[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0,
                    p[2] = p[2] + 886263092 + (p[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0,
                    p[3] = p[3] + 1295307597 + (p[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0,
                    p[4] = p[4] + 3545052371 + (p[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0,
                    p[5] = p[5] + 886263092 + (p[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0,
                    p[6] = p[6] + 1295307597 + (p[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0,
                    p[7] = p[7] + 3545052371 + (p[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0,
                    this._b = p[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
                    for (var m = 0; m < 8; m++) {
                        var h = d[m] + p[m]
                          , g = h & 65535
                          , E = h >>> 16
                          , x = ((g * g >>> 17) + g * E >>> 15) + E * E
                          , _ = ((h & 4294901760) * h | 0) + ((h & 65535) * h | 0);
                        u[m] = x ^ _
                    }
                    d[0] = u[0] + (u[7] << 16 | u[7] >>> 16) + (u[6] << 16 | u[6] >>> 16) | 0,
                    d[1] = u[1] + (u[0] << 8 | u[0] >>> 24) + u[7] | 0,
                    d[2] = u[2] + (u[1] << 16 | u[1] >>> 16) + (u[0] << 16 | u[0] >>> 16) | 0,
                    d[3] = u[3] + (u[2] << 8 | u[2] >>> 24) + u[1] | 0,
                    d[4] = u[4] + (u[3] << 16 | u[3] >>> 16) + (u[2] << 16 | u[2] >>> 16) | 0,
                    d[5] = u[5] + (u[4] << 8 | u[4] >>> 24) + u[3] | 0,
                    d[6] = u[6] + (u[5] << 16 | u[5] >>> 16) + (u[4] << 16 | u[4] >>> 16) | 0,
                    d[7] = u[7] + (u[6] << 8 | u[6] >>> 24) + u[5] | 0
                }
                r.RabbitLegacy = o._createHelper(l)
            }(),
            n.RabbitLegacy
        })
    }(vl)),
    vl.exports
}
var El = {
    exports: {}
}, Fm;
function wk() {
    return Fm || (Fm = 1,
    function(e, t) {
        (function(n, r, s) {
            e.exports = r(Ae(), gs(), _s(), Rr(), pt())
        }
        )(ue, function(n) {
            return function() {
                var r = n
                  , s = r.lib
                  , o = s.BlockCipher
                  , i = r.algo;
                const a = 16
                  , c = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731]
                  , u = [[3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946], [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055], [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504], [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]];
                var l = {
                    pbox: [],
                    sbox: []
                };
                function f(g, E) {
                    let x = E >> 24 & 255
                      , _ = E >> 16 & 255
                      , y = E >> 8 & 255
                      , S = E & 255
                      , v = g.sbox[0][x] + g.sbox[1][_];
                    return v = v ^ g.sbox[2][y],
                    v = v + g.sbox[3][S],
                    v
                }
                function d(g, E, x) {
                    let _ = E, y = x, S;
                    for (let v = 0; v < a; ++v)
                        _ = _ ^ g.pbox[v],
                        y = f(g, _) ^ y,
                        S = _,
                        _ = y,
                        y = S;
                    return S = _,
                    _ = y,
                    y = S,
                    y = y ^ g.pbox[a],
                    _ = _ ^ g.pbox[a + 1],
                    {
                        left: _,
                        right: y
                    }
                }
                function p(g, E, x) {
                    let _ = E, y = x, S;
                    for (let v = a + 1; v > 1; --v)
                        _ = _ ^ g.pbox[v],
                        y = f(g, _) ^ y,
                        S = _,
                        _ = y,
                        y = S;
                    return S = _,
                    _ = y,
                    y = S,
                    y = y ^ g.pbox[1],
                    _ = _ ^ g.pbox[0],
                    {
                        left: _,
                        right: y
                    }
                }
                function m(g, E, x) {
                    for (let b = 0; b < 4; b++) {
                        g.sbox[b] = [];
                        for (let C = 0; C < 256; C++)
                            g.sbox[b][C] = u[b][C]
                    }
                    let _ = 0;
                    for (let b = 0; b < a + 2; b++)
                        g.pbox[b] = c[b] ^ E[_],
                        _++,
                        _ >= x && (_ = 0);
                    let y = 0
                      , S = 0
                      , v = 0;
                    for (let b = 0; b < a + 2; b += 2)
                        v = d(g, y, S),
                        y = v.left,
                        S = v.right,
                        g.pbox[b] = y,
                        g.pbox[b + 1] = S;
                    for (let b = 0; b < 4; b++)
                        for (let C = 0; C < 256; C += 2)
                            v = d(g, y, S),
                            y = v.left,
                            S = v.right,
                            g.sbox[b][C] = y,
                            g.sbox[b][C + 1] = S;
                    return !0
                }
                var h = i.Blowfish = o.extend({
                    _doReset: function() {
                        if (this._keyPriorReset !== this._key) {
                            var g = this._keyPriorReset = this._key
                              , E = g.words
                              , x = g.sigBytes / 4;
                            m(l, E, x)
                        }
                    },
                    encryptBlock: function(g, E) {
                        var x = d(l, g[E], g[E + 1]);
                        g[E] = x.left,
                        g[E + 1] = x.right
                    },
                    decryptBlock: function(g, E) {
                        var x = p(l, g[E], g[E + 1]);
                        g[E] = x.left,
                        g[E + 1] = x.right
                    },
                    blockSize: 64 / 32,
                    keySize: 128 / 32,
                    ivSize: 64 / 32
                });
                r.Blowfish = o._createHelper(h)
            }(),
            n.Blowfish
        })
    }(El)),
    El.exports
}
(function(e, t) {
    (function(n, r, s) {
        e.exports = r(Ae(), Wc(), ek(), tk(), gs(), nk(), _s(), B1(), md(), rk(), O1(), sk(), ok(), ik(), gd(), ak(), Rr(), pt(), ck(), uk(), lk(), fk(), dk(), pk(), hk(), mk(), gk(), _k(), xk(), yk(), vk(), Ek(), bk(), Sk(), wk())
    }
    )(ue, function(n) {
        return n
    })
}
)(D1);
var Ck = D1.exports;
const Ak = P6(Ck)
  , Tk = (e, t, n, r) => {
    const s = t + e + n;
    return Ak.HmacSHA256(s, r).toString()
}
  , L7 = e => {
    Ct({
        message: e,
        type: "error",
        grouping: !0
    })
}
  , H7 = e => {
    Ct({
        message: e,
        type: "info",
        grouping: !0
    })
}
;
function F1(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: kk} = Object.prototype
  , {getPrototypeOf: _d} = Object
  , qc = (e => t => {
    const n = kk.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Rn = e => (e = e.toLowerCase(),
t => qc(t) === e)
  , Vc = e => t => typeof t === e
  , {isArray: mo} = Array
  , ui = Vc("undefined");
function Rk(e) {
    return e !== null && !ui(e) && e.constructor !== null && !ui(e.constructor) && Zt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const P1 = Rn("ArrayBuffer");
function Ik(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && P1(e.buffer),
    t
}
const Dk = Vc("string")
  , Zt = Vc("function")
  , N1 = Vc("number")
  , Kc = e => e !== null && typeof e == "object"
  , Bk = e => e === !0 || e === !1
  , Ea = e => {
    if (qc(e) !== "object")
        return !1;
    const t = _d(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Ok = Rn("Date")
  , Fk = Rn("File")
  , Pk = Rn("Blob")
  , Nk = Rn("FileList")
  , Mk = e => Kc(e) && Zt(e.pipe)
  , Lk = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || Zt(e.append) && ((t = qc(e)) === "formdata" || t === "object" && Zt(e.toString) && e.toString() === "[object FormData]"))
}
  , Hk = Rn("URLSearchParams")
  , $k = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ti(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, s;
    if (typeof e != "object" && (e = [e]),
    mo(e))
        for (r = 0,
        s = e.length; r < s; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = o.length;
        let a;
        for (r = 0; r < i; r++)
            a = o[r],
            t.call(null, e[a], a, e)
    }
}
function M1(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, s;
    for (; r-- > 0; )
        if (s = n[r],
        t === s.toLowerCase())
            return s;
    return null
}
const L1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , H1 = e => !ui(e) && e !== L1;
function Cf() {
    const {caseless: e} = H1(this) && this || {}
      , t = {}
      , n = (r, s) => {
        const o = e && M1(t, s) || s;
        Ea(t[o]) && Ea(r) ? t[o] = Cf(t[o], r) : Ea(r) ? t[o] = Cf({}, r) : mo(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, s = arguments.length; r < s; r++)
        arguments[r] && Ti(arguments[r], n);
    return t
}
const Uk = (e, t, n, {allOwnKeys: r}={}) => (Ti(t, (s, o) => {
    n && Zt(s) ? e[o] = F1(s, n) : e[o] = s
}
, {
    allOwnKeys: r
}),
e)
  , jk = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , zk = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Wk = (e, t, n, r) => {
    let s, o, i;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (s = Object.getOwnPropertyNames(e),
        o = s.length; o-- > 0; )
            i = s[o],
            (!r || r(i, e, t)) && !a[i] && (t[i] = e[i],
            a[i] = !0);
        e = n !== !1 && _d(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , qk = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , Vk = e => {
    if (!e)
        return null;
    if (mo(e))
        return e;
    let t = e.length;
    if (!N1(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , Kk = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && _d(Uint8Array))
  , Gk = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
        const o = s.value;
        t.call(e, o[0], o[1])
    }
}
  , Xk = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , Yk = Rn("HTMLFormElement")
  , Jk = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
    return r.toUpperCase() + s
})
  , Pm = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Qk = Rn("RegExp")
  , $1 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Ti(n, (s, o) => {
        let i;
        (i = t(s, o, e)) !== !1 && (r[o] = i || s)
    }
    ),
    Object.defineProperties(e, r)
}
  , Zk = e => {
    $1(e, (t, n) => {
        if (Zt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (Zt(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , eR = (e, t) => {
    const n = {}
      , r = s => {
        s.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return mo(e) ? r(e) : r(String(e).split(t)),
    n
}
  , tR = () => {}
  , nR = (e, t) => (e = +e,
Number.isFinite(e) ? e : t)
  , bl = "abcdefghijklmnopqrstuvwxyz"
  , Nm = "0123456789"
  , U1 = {
    DIGIT: Nm,
    ALPHA: bl,
    ALPHA_DIGIT: bl + bl.toUpperCase() + Nm
}
  , rR = (e=16, t=U1.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function sR(e) {
    return !!(e && Zt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const oR = e => {
    const t = new Array(10)
      , n = (r, s) => {
        if (Kc(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[s] = r;
                const o = mo(r) ? [] : {};
                return Ti(r, (i, a) => {
                    const c = n(i, s + 1);
                    !ui(c) && (o[a] = c)
                }
                ),
                t[s] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , iR = Rn("AsyncFunction")
  , aR = e => e && (Kc(e) || Zt(e)) && Zt(e.then) && Zt(e.catch)
  , U = {
    isArray: mo,
    isArrayBuffer: P1,
    isBuffer: Rk,
    isFormData: Lk,
    isArrayBufferView: Ik,
    isString: Dk,
    isNumber: N1,
    isBoolean: Bk,
    isObject: Kc,
    isPlainObject: Ea,
    isUndefined: ui,
    isDate: Ok,
    isFile: Fk,
    isBlob: Pk,
    isRegExp: Qk,
    isFunction: Zt,
    isStream: Mk,
    isURLSearchParams: Hk,
    isTypedArray: Kk,
    isFileList: Nk,
    forEach: Ti,
    merge: Cf,
    extend: Uk,
    trim: $k,
    stripBOM: jk,
    inherits: zk,
    toFlatObject: Wk,
    kindOf: qc,
    kindOfTest: Rn,
    endsWith: qk,
    toArray: Vk,
    forEachEntry: Gk,
    matchAll: Xk,
    isHTMLForm: Yk,
    hasOwnProperty: Pm,
    hasOwnProp: Pm,
    reduceDescriptors: $1,
    freezeMethods: Zk,
    toObjectSet: eR,
    toCamelCase: Jk,
    noop: tR,
    toFiniteNumber: nR,
    findKey: M1,
    global: L1,
    isContextDefined: H1,
    ALPHABET: U1,
    generateString: rR,
    isSpecCompliantForm: sR,
    toJSONObject: oR,
    isAsyncFn: iR,
    isThenable: aR
};
function Te(e, t, n, r, s) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s)
}
U.inherits(Te, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const j1 = Te.prototype
  , z1 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    z1[e] = {
        value: e
    }
}
);
Object.defineProperties(Te, z1);
Object.defineProperty(j1, "isAxiosError", {
    value: !0
});
Te.from = (e, t, n, r, s, o) => {
    const i = Object.create(j1);
    return U.toFlatObject(e, i, function(c) {
        return c !== Error.prototype
    }, a => a !== "isAxiosError"),
    Te.call(i, e.message, t, n, r, s),
    i.cause = e,
    i.name = e.name,
    o && Object.assign(i, o),
    i
}
;
const cR = null;
function Af(e) {
    return U.isPlainObject(e) || U.isArray(e)
}
function W1(e) {
    return U.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Mm(e, t, n) {
    return e ? e.concat(t).map(function(s, o) {
        return s = W1(s),
        !n && o ? "[" + s + "]" : s
    }).join(n ? "." : "") : t
}
function uR(e) {
    return U.isArray(e) && !e.some(Af)
}
const lR = U.toFlatObject(U, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function Gc(e, t, n) {
    if (!U.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = U.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(h, g) {
        return !U.isUndefined(g[h])
    });
    const r = n.metaTokens
      , s = n.visitor || l
      , o = n.dots
      , i = n.indexes
      , c = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
    if (!U.isFunction(s))
        throw new TypeError("visitor must be a function");
    function u(m) {
        if (m === null)
            return "";
        if (U.isDate(m))
            return m.toISOString();
        if (!c && U.isBlob(m))
            throw new Te("Blob is not supported. Use a Buffer instead.");
        return U.isArrayBuffer(m) || U.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }
    function l(m, h, g) {
        let E = m;
        if (m && !g && typeof m == "object") {
            if (U.endsWith(h, "{}"))
                h = r ? h : h.slice(0, -2),
                m = JSON.stringify(m);
            else if (U.isArray(m) && uR(m) || (U.isFileList(m) || U.endsWith(h, "[]")) && (E = U.toArray(m)))
                return h = W1(h),
                E.forEach(function(_, y) {
                    !(U.isUndefined(_) || _ === null) && t.append(i === !0 ? Mm([h], y, o) : i === null ? h : h + "[]", u(_))
                }),
                !1
        }
        return Af(m) ? !0 : (t.append(Mm(g, h, o), u(m)),
        !1)
    }
    const f = []
      , d = Object.assign(lR, {
        defaultVisitor: l,
        convertValue: u,
        isVisitable: Af
    });
    function p(m, h) {
        if (!U.isUndefined(m)) {
            if (f.indexOf(m) !== -1)
                throw Error("Circular reference detected in " + h.join("."));
            f.push(m),
            U.forEach(m, function(E, x) {
                (!(U.isUndefined(E) || E === null) && s.call(t, E, U.isString(x) ? x.trim() : x, h, d)) === !0 && p(E, h ? h.concat(x) : [x])
            }),
            f.pop()
        }
    }
    if (!U.isObject(e))
        throw new TypeError("data must be an object");
    return p(e),
    t
}
function Lm(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function xd(e, t) {
    this._pairs = [],
    e && Gc(e, this, t)
}
const q1 = xd.prototype;
q1.append = function(t, n) {
    this._pairs.push([t, n])
}
;
q1.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Lm)
    }
    : Lm;
    return this._pairs.map(function(s) {
        return n(s[0]) + "=" + n(s[1])
    }, "").join("&")
}
;
function fR(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function V1(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || fR
      , s = n && n.serialize;
    let o;
    if (s ? o = s(t, n) : o = U.isURLSearchParams(t) ? t.toString() : new xd(t,n).toString(r),
    o) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class Hm {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        U.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const K1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , dR = typeof URLSearchParams < "u" ? URLSearchParams : xd
  , pR = typeof FormData < "u" ? FormData : null
  , hR = typeof Blob < "u" ? Blob : null
  , mR = {
    isBrowser: !0,
    classes: {
        URLSearchParams: dR,
        FormData: pR,
        Blob: hR
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , G1 = typeof window < "u" && typeof document < "u"
  , gR = (e => G1 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
  , _R = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , xR = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: G1,
    hasStandardBrowserEnv: gR,
    hasStandardBrowserWebWorkerEnv: _R
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Sn = {
    ...xR,
    ...mR
};
function yR(e, t) {
    return Gc(e, new Sn.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, s, o) {
            return Sn.isNode && U.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function vR(e) {
    return U.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function ER(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const s = n.length;
    let o;
    for (r = 0; r < s; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function X1(e) {
    function t(n, r, s, o) {
        let i = n[o++];
        if (i === "__proto__")
            return !0;
        const a = Number.isFinite(+i)
          , c = o >= n.length;
        return i = !i && U.isArray(s) ? s.length : i,
        c ? (U.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r,
        !a) : ((!s[i] || !U.isObject(s[i])) && (s[i] = []),
        t(n, r, s[i], o) && U.isArray(s[i]) && (s[i] = ER(s[i])),
        !a)
    }
    if (U.isFormData(e) && U.isFunction(e.entries)) {
        const n = {};
        return U.forEachEntry(e, (r, s) => {
            t(vR(r), s, n, 0)
        }
        ),
        n
    }
    return null
}
function bR(e, t, n) {
    if (U.isString(e))
        try {
            return (t || JSON.parse)(e),
            U.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (0,
    JSON.stringify)(e)
}
const ki = {
    transitional: K1,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , s = r.indexOf("application/json") > -1
          , o = U.isObject(t);
        if (o && U.isHTMLForm(t) && (t = new FormData(t)),
        U.isFormData(t))
            return s ? JSON.stringify(X1(t)) : t;
        if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
            return t;
        if (U.isArrayBufferView(t))
            return t.buffer;
        if (U.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return yR(t, this.formSerializer).toString();
            if ((a = U.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return Gc(a ? {
                    "files[]": t
                } : t, c && new c, this.formSerializer)
            }
        }
        return o || s ? (n.setContentType("application/json", !1),
        bR(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || ki.transitional
          , r = n && n.forcedJSONParsing
          , s = this.responseType === "json";
        if (t && U.isString(t) && (r && !this.responseType || s)) {
            const i = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (i)
                    throw a.name === "SyntaxError" ? Te.from(a, Te.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Sn.classes.FormData,
        Blob: Sn.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
U.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    ki.headers[e] = {}
}
);
const SR = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , wR = e => {
    const t = {};
    let n, r, s;
    return e && e.split(`
`).forEach(function(i) {
        s = i.indexOf(":"),
        n = i.substring(0, s).trim().toLowerCase(),
        r = i.substring(s + 1).trim(),
        !(!n || t[n] && SR[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , $m = Symbol("internals");
function Ro(e) {
    return e && String(e).trim().toLowerCase()
}
function ba(e) {
    return e === !1 || e == null ? e : U.isArray(e) ? e.map(ba) : String(e)
}
function CR(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const AR = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Sl(e, t, n, r, s) {
    if (U.isFunction(r))
        return r.call(this, t, n);
    if (s && (t = n),
    !!U.isString(t)) {
        if (U.isString(r))
            return t.indexOf(r) !== -1;
        if (U.isRegExp(r))
            return r.test(t)
    }
}
function TR(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function kR(e, t) {
    const n = U.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(s, o, i) {
                return this[r].call(this, t, s, o, i)
            },
            configurable: !0
        })
    }
    )
}
class en {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const s = this;
        function o(a, c, u) {
            const l = Ro(c);
            if (!l)
                throw new Error("header name must be a non-empty string");
            const f = U.findKey(s, l);
            (!f || s[f] === void 0 || u === !0 || u === void 0 && s[f] !== !1) && (s[f || c] = ba(a))
        }
        const i = (a, c) => U.forEach(a, (u, l) => o(u, l, c));
        return U.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : U.isString(t) && (t = t.trim()) && !AR(t) ? i(wR(t), n) : t != null && o(n, t, r),
        this
    }
    get(t, n) {
        if (t = Ro(t),
        t) {
            const r = U.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n)
                    return s;
                if (n === !0)
                    return CR(s);
                if (U.isFunction(n))
                    return n.call(this, s, r);
                if (U.isRegExp(n))
                    return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Ro(t),
        t) {
            const r = U.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Sl(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let s = !1;
        function o(i) {
            if (i = Ro(i),
            i) {
                const a = U.findKey(r, i);
                a && (!n || Sl(r, r[a], a, n)) && (delete r[a],
                s = !0)
            }
        }
        return U.isArray(t) ? t.forEach(o) : o(t),
        s
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , s = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || Sl(this, this[o], o, t, !0)) && (delete this[o],
            s = !0)
        }
        return s
    }
    normalize(t) {
        const n = this
          , r = {};
        return U.forEach(this, (s, o) => {
            const i = U.findKey(r, o);
            if (i) {
                n[i] = ba(s),
                delete n[o];
                return
            }
            const a = t ? TR(o) : String(o).trim();
            a !== o && delete n[o],
            n[a] = ba(s),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return U.forEach(this, (r, s) => {
            r != null && r !== !1 && (n[s] = t && U.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s => r.set(s)),
        r
    }
    static accessor(t) {
        const r = (this[$m] = this[$m] = {
            accessors: {}
        }).accessors
          , s = this.prototype;
        function o(i) {
            const a = Ro(i);
            r[a] || (kR(s, i),
            r[a] = !0)
        }
        return U.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
en.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(en.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
U.freezeMethods(en);
function wl(e, t) {
    const n = this || ki
      , r = t || n
      , s = en.from(r.headers);
    let o = r.data;
    return U.forEach(e, function(a) {
        o = a.call(n, o, s.normalize(), t ? t.status : void 0)
    }),
    s.normalize(),
    o
}
function Y1(e) {
    return !!(e && e.__CANCEL__)
}
function Ri(e, t, n) {
    Te.call(this, e ?? "canceled", Te.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
U.inherits(Ri, Te, {
    __CANCEL__: !0
});
function RR(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new Te("Request failed with status code " + n.status,[Te.ERR_BAD_REQUEST, Te.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const IR = Sn.hasStandardBrowserEnv ? {
    write(e, t, n, r, s, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        U.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
        U.isString(r) && i.push("path=" + r),
        U.isString(s) && i.push("domain=" + s),
        o === !0 && i.push("secure"),
        document.cookie = i.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function DR(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function BR(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function J1(e, t) {
    return e && !DR(t) ? BR(e, t) : t
}
const OR = Sn.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function s(o) {
        let i = o;
        return t && (n.setAttribute("href", i),
        i = n.href),
        n.setAttribute("href", i),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = s(window.location.href),
    function(i) {
        const a = U.isString(i) ? s(i) : i;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function FR(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function PR(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let s = 0, o = 0, i;
    return t = t !== void 0 ? t : 1e3,
    function(c) {
        const u = Date.now()
          , l = r[o];
        i || (i = u),
        n[s] = c,
        r[s] = u;
        let f = o
          , d = 0;
        for (; f !== s; )
            d += n[f++],
            f = f % e;
        if (s = (s + 1) % e,
        s === o && (o = (o + 1) % e),
        u - i < t)
            return;
        const p = l && u - l;
        return p ? Math.round(d * 1e3 / p) : void 0
    }
}
function Um(e, t) {
    let n = 0;
    const r = PR(50, 250);
    return s => {
        const o = s.loaded
          , i = s.lengthComputable ? s.total : void 0
          , a = o - n
          , c = r(a)
          , u = o <= i;
        n = o;
        const l = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && i && u ? (i - o) / c : void 0,
            event: s
        };
        l[t ? "download" : "upload"] = !0,
        e(l)
    }
}
const NR = typeof XMLHttpRequest < "u"
  , MR = NR && function(e) {
    return new Promise(function(n, r) {
        let s = e.data;
        const o = en.from(e.headers).normalize();
        let {responseType: i, withXSRFToken: a} = e, c;
        function u() {
            e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c)
        }
        let l;
        if (U.isFormData(s)) {
            if (Sn.hasStandardBrowserEnv || Sn.hasStandardBrowserWebWorkerEnv)
                o.setContentType(!1);
            else if ((l = o.getContentType()) !== !1) {
                const [h,...g] = l ? l.split(";").map(E => E.trim()).filter(Boolean) : [];
                o.setContentType([h || "multipart/form-data", ...g].join("; "))
            }
        }
        let f = new XMLHttpRequest;
        if (e.auth) {
            const h = e.auth.username || ""
              , g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            o.set("Authorization", "Basic " + btoa(h + ":" + g))
        }
        const d = J1(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), V1(d, e.params, e.paramsSerializer), !0),
        f.timeout = e.timeout;
        function p() {
            if (!f)
                return;
            const h = en.from("getAllResponseHeaders"in f && f.getAllResponseHeaders())
              , E = {
                data: !i || i === "text" || i === "json" ? f.responseText : f.response,
                status: f.status,
                statusText: f.statusText,
                headers: h,
                config: e,
                request: f
            };
            RR(function(_) {
                n(_),
                u()
            }, function(_) {
                r(_),
                u()
            }, E),
            f = null
        }
        if ("onloadend"in f ? f.onloadend = p : f.onreadystatechange = function() {
            !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(p)
        }
        ,
        f.onabort = function() {
            f && (r(new Te("Request aborted",Te.ECONNABORTED,e,f)),
            f = null)
        }
        ,
        f.onerror = function() {
            r(new Te("Network Error",Te.ERR_NETWORK,e,f)),
            f = null
        }
        ,
        f.ontimeout = function() {
            let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const E = e.transitional || K1;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
            r(new Te(g,E.clarifyTimeoutError ? Te.ETIMEDOUT : Te.ECONNABORTED,e,f)),
            f = null
        }
        ,
        Sn.hasStandardBrowserEnv && (a && U.isFunction(a) && (a = a(e)),
        a || a !== !1 && OR(d))) {
            const h = e.xsrfHeaderName && e.xsrfCookieName && IR.read(e.xsrfCookieName);
            h && o.set(e.xsrfHeaderName, h)
        }
        s === void 0 && o.setContentType(null),
        "setRequestHeader"in f && U.forEach(o.toJSON(), function(g, E) {
            f.setRequestHeader(E, g)
        }),
        U.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials),
        i && i !== "json" && (f.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && f.addEventListener("progress", Um(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", Um(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (c = h => {
            f && (r(!h || h.type ? new Ri(null,e,f) : h),
            f.abort(),
            f = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(c),
        e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const m = FR(d);
        if (m && Sn.protocols.indexOf(m) === -1) {
            r(new Te("Unsupported protocol " + m + ":",Te.ERR_BAD_REQUEST,e));
            return
        }
        f.send(s || null)
    }
    )
}
  , Tf = {
    http: cR,
    xhr: MR
};
U.forEach(Tf, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const jm = e => `- ${e}`
  , LR = e => U.isFunction(e) || e === null || e === !1
  , Q1 = {
    getAdapter: e => {
        e = U.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const s = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let i;
            if (r = n,
            !LR(n) && (r = Tf[(i = String(n)).toLowerCase()],
            r === void 0))
                throw new Te(`Unknown adapter '${i}'`);
            if (r)
                break;
            s[i || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(s).map( ([a,c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? o.length > 1 ? `since :
` + o.map(jm).join(`
`) : " " + jm(o[0]) : "as no adapter specified";
            throw new Te("There is no suitable adapter to dispatch the request " + i,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: Tf
};
function Cl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Ri(null,e)
}
function zm(e) {
    return Cl(e),
    e.headers = en.from(e.headers),
    e.data = wl.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Q1.getAdapter(e.adapter || ki.adapter)(e).then(function(r) {
        return Cl(e),
        r.data = wl.call(e, e.transformResponse, r),
        r.headers = en.from(r.headers),
        r
    }, function(r) {
        return Y1(r) || (Cl(e),
        r && r.response && (r.response.data = wl.call(e, e.transformResponse, r.response),
        r.response.headers = en.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Wm = e => e instanceof en ? {
    ...e
} : e;
function to(e, t) {
    t = t || {};
    const n = {};
    function r(u, l, f) {
        return U.isPlainObject(u) && U.isPlainObject(l) ? U.merge.call({
            caseless: f
        }, u, l) : U.isPlainObject(l) ? U.merge({}, l) : U.isArray(l) ? l.slice() : l
    }
    function s(u, l, f) {
        if (U.isUndefined(l)) {
            if (!U.isUndefined(u))
                return r(void 0, u, f)
        } else
            return r(u, l, f)
    }
    function o(u, l) {
        if (!U.isUndefined(l))
            return r(void 0, l)
    }
    function i(u, l) {
        if (U.isUndefined(l)) {
            if (!U.isUndefined(u))
                return r(void 0, u)
        } else
            return r(void 0, l)
    }
    function a(u, l, f) {
        if (f in t)
            return r(u, l);
        if (f in e)
            return r(void 0, u)
    }
    const c = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: a,
        headers: (u, l) => s(Wm(u), Wm(l), !0)
    };
    return U.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
        const f = c[l] || s
          , d = f(e[l], t[l], l);
        U.isUndefined(d) && f !== a || (n[l] = d)
    }),
    n
}
const Z1 = "1.6.8"
  , yd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    yd[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const qm = {};
yd.transitional = function(t, n, r) {
    function s(o, i) {
        return "[Axios v" + Z1 + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "")
    }
    return (o, i, a) => {
        if (t === !1)
            throw new Te(s(i, " has been removed" + (n ? " in " + n : "")),Te.ERR_DEPRECATED);
        return n && !qm[i] && (qm[i] = !0,
        console.warn(s(i, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, i, a) : !0
    }
}
;
function HR(e, t, n) {
    if (typeof e != "object")
        throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0; ) {
        const o = r[s]
          , i = t[o];
        if (i) {
            const a = e[o]
              , c = a === void 0 || i(a, o, e);
            if (c !== !0)
                throw new Te("option " + o + " must be " + c,Te.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new Te("Unknown option " + o,Te.ERR_BAD_OPTION)
    }
}
const kf = {
    assertOptions: HR,
    validators: yd
}
  , nr = kf.validators;
class Kr {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new Hm,
            response: new Hm
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let s;
                Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error;
                const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = to(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: o} = n;
        r !== void 0 && kf.assertOptions(r, {
            silentJSONParsing: nr.transitional(nr.boolean),
            forcedJSONParsing: nr.transitional(nr.boolean),
            clarifyTimeoutError: nr.transitional(nr.boolean)
        }, !1),
        s != null && (U.isFunction(s) ? n.paramsSerializer = {
            serialize: s
        } : kf.assertOptions(s, {
            encode: nr.function,
            serialize: nr.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = o && U.merge(o.common, o[n.method]);
        o && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
            delete o[m]
        }
        ),
        n.headers = en.concat(i, o);
        const a = [];
        let c = !0;
        this.interceptors.request.forEach(function(h) {
            typeof h.runWhen == "function" && h.runWhen(n) === !1 || (c = c && h.synchronous,
            a.unshift(h.fulfilled, h.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(h) {
            u.push(h.fulfilled, h.rejected)
        });
        let l, f = 0, d;
        if (!c) {
            const m = [zm.bind(this), void 0];
            for (m.unshift.apply(m, a),
            m.push.apply(m, u),
            d = m.length,
            l = Promise.resolve(n); f < d; )
                l = l.then(m[f++], m[f++]);
            return l
        }
        d = a.length;
        let p = n;
        for (f = 0; f < d; ) {
            const m = a[f++]
              , h = a[f++];
            try {
                p = m(p)
            } catch (g) {
                h.call(this, g);
                break
            }
        }
        try {
            l = zm.call(this, p)
        } catch (m) {
            return Promise.reject(m)
        }
        for (f = 0,
        d = u.length; f < d; )
            l = l.then(u[f++], u[f++]);
        return l
    }
    getUri(t) {
        t = to(this.defaults, t);
        const n = J1(t.baseURL, t.url);
        return V1(n, t.params, t.paramsSerializer)
    }
}
U.forEach(["delete", "get", "head", "options"], function(t) {
    Kr.prototype[t] = function(n, r) {
        return this.request(to(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
U.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, i, a) {
            return this.request(to(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: i
            }))
        }
    }
    Kr.prototype[t] = n(),
    Kr.prototype[t + "Form"] = n(!0)
});
class vd {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(s => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](s);
            r._listeners = null
        }
        ),
        this.promise.then = s => {
            let o;
            const i = new Promise(a => {
                r.subscribe(a),
                o = a
            }
            ).then(s);
            return i.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            i
        }
        ,
        t(function(o, i, a) {
            r.reason || (r.reason = new Ri(o,i,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new vd(function(s) {
                t = s
            }
            ),
            cancel: t
        }
    }
}
function $R(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function UR(e) {
    return U.isObject(e) && e.isAxiosError === !0
}
const Rf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Rf).forEach( ([e,t]) => {
    Rf[t] = e
}
);
function ev(e) {
    const t = new Kr(e)
      , n = F1(Kr.prototype.request, t);
    return U.extend(n, Kr.prototype, t, {
        allOwnKeys: !0
    }),
    U.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(s) {
        return ev(to(e, s))
    }
    ,
    n
}
const nt = ev(ki);
nt.Axios = Kr;
nt.CanceledError = Ri;
nt.CancelToken = vd;
nt.isCancel = Y1;
nt.VERSION = Z1;
nt.toFormData = Gc;
nt.AxiosError = Te;
nt.Cancel = nt.CanceledError;
nt.all = function(t) {
    return Promise.all(t)
}
;
nt.spread = $R;
nt.isAxiosError = UR;
nt.mergeConfig = to;
nt.AxiosHeaders = en;
nt.formToJSON = e => X1(U.isHTMLForm(e) ? new FormData(e) : e);
nt.getAdapter = Q1.getAdapter;
nt.HttpStatusCode = Rf;
nt.default = nt;
function tv(e, t=!1) {
    const n = ds().public.apiBase;
    let r = {};
    if (r[BA()] = e ? "multipart/form-data" : "application/json",
    r[OA()] = "*",
    t) {
        const o = Math.floor(Date.now() / 1e3).toString()
          , i = Tk(o, NA(), MA(), LA());
        r[FA()] = o,
        r[PA()] = i
    }
    const s = nt.create({
        baseURL: n,
        headers: r,
        timeout: 1e4
    });
    return s.interceptors.response.use(async o => o, o => Promise.reject(o)),
    s
}
async function Nr(e, t) {
    try {
        return await tv().get(e, {
            params: {
                ...t
            }
        })
    } catch (n) {
        console.log(n)
    }
}
async function gn(e, t, n=!1, r=!1) {
    try {
        return await tv(n, r).post(e, t)
    } catch (s) {
        console.log("error", s),
        console.log(s),
        s.code === "ECONNABORTED" ? Ct({
            message: "Timeout of 10 seconds exceeded",
            type: "error",
            grouping: !0
        }) : s.code === "ERR_NETWORK" && e === "/claim" && !s.request.status ? Ct({
            message: "Claim process too fast. Please try again.",
            type: "error",
            grouping: !0
        }) : Ct({
            message: s.message,
            type: "error",
            grouping: !0
        })
    }
}
const jR = n1("Store", {
    state: () => ({
        showProfile: !1,
        viewPortPC: !1,
        isFullScreen: !1,
        showShortcut: !1,
        recentPage: "/home",
        shopData: {
            vip_boost: 0,
            active_duration: "",
            package: {
                item_type: 0,
                status: 1
            },
            transaction_confirm: 0
        },
        isConfirm: 0,
        activePack: [],
        expirePacks: [],
        loadingPack: 0,
        buyPack: [1, 2],
        isExpired: !1,
        disabledBuyPack: !1
    }),
    getters: {},
    actions: {
        async getDataShop(e=!1) {
            var t, n, r, s, o, i, a, c, u, l, f, d, p, m, h, g;
            try {
                const E = await Nr("/shop");
                this.shopData = (t = E.data) == null ? void 0 : t.data,
                this.isConfirm = (n = this.shopData) == null ? void 0 : n.transaction_confirm,
                ((s = (r = this.shopData) == null ? void 0 : r.package) == null ? void 0 : s.status) === 1 ? (this.isExpired = !1,
                this.loadingPack = (i = (o = this.shopData) == null ? void 0 : o.package) == null ? void 0 : i.item_type,
                this.isConfirm = 0,
                this.activePack = [],
                this.expirePacks = [],
                e || (this.buyPack = [])) : ((c = (a = this.shopData) == null ? void 0 : a.package) == null ? void 0 : c.status) === 2 ? (this.loadingPack = 0,
                this.isExpired = !1,
                this.expirePacks = [],
                this.activePack = [(l = (u = this.shopData) == null ? void 0 : u.package) == null ? void 0 : l.item_type],
                this.shopData.package.item_type === 3 && (this.activePack = [...this.activePack, 2]),
                e || (this.buyPack = [])) : ((d = (f = this.shopData) == null ? void 0 : f.package) == null ? void 0 : d.status) === 4 ? (this.isExpired = !0,
                this.loadingPack = 0,
                this.activePack = [(m = (p = this.shopData) == null ? void 0 : p.package) == null ? void 0 : m.item_type],
                this.expirePacks = [(g = (h = this.shopData) == null ? void 0 : h.package) == null ? void 0 : g.item_type],
                this.shopData.package.item_type === 3 && (this.expirePacks = [...this.expirePacks, 2]),
                e || (this.buyPack = [])) : (this.isExpired = !1,
                this.buyPack = [1, 2],
                this.activePack = [],
                this.expirePacks = [],
                this.isConfirm = 0,
                this.loadingPack = 0)
            } catch (E) {
                console.log(E)
            }
        }
    }
});
var zR = (e => (e[e.month = 0] = "month",
e[e.oneYear = 1] = "oneYear",
e[e.fourYear = 2] = "fourYear",
e))(zR || {});
const $7 = "startapp"
  , WR = "stop_appearing_popup_splash"
  , Vm = n1("UserInfo", {
    state: () => ({
        userName: "",
        queryId: null,
        refId: null,
        queryMode: null,
        isShowIntroBanner: !0,
        isBlockedCloseModal: !1,
        userInfo: {
            telegram_id: 0,
            username: "",
            tlg_age: 0,
            tlg_age_point: 0,
            tlg_rare_name: 0,
            tlg_rare_name_point: 0,
            tlg_premium: 0,
            tlg_premium_percent: 0,
            tlg_activity: 0,
            tlg_activity_point: 0,
            total_gum: 0,
            invite_url: "",
            avatar: "",
            is_first: 0,
            package: null
        },
        dataHome: {
            balance: 0,
            balance_text: "",
            boost: 0,
            boost_timestamp: 0,
            boost_end_timestamp: 0,
            boost_next_timestamp: 0,
            claim_timestamp: 0,
            user_claim_timestamp: 0,
            friend_boost: 0,
            mint_speed: 0,
            premium_boost: 0,
            telegram_id: 0,
            tier: "",
            tier_current: "",
            tlg_age: 0,
            username: "",
            is_auto_boost: !1,
            is_auto_claim: !1,
            process_earn_balance: 0,
            earned_amount: 0,
            max_earn_duration: 0,
            vip_boost: 0,
            tick_level: 0,
            wallet: null,
            item_type: null,
            gtp_unlock_base_rate: "",
            current_package_name: "",
            gtp_unlock_rate: "",
            gtp_unlock_rate_from_f1: ""
        },
        processEarn: 0,
        valueClaim: 0,
        autoClaim: !1,
        autoBoost: !1,
        accessToken: "",
        routerHome: 0,
        isBoost: !1,
        boosting: !1,
        mintSpeed: 0,
        balance: 0,
        booster: 0,
        boostStart: 0,
        boostEnd: 0,
        boostingTime: 0,
        boostNext: 0,
        tiers: [{
            id: 1,
            name: "Novice",
            price_text: "",
            tier_process: 0
        }, {
            id: 2,
            name: "Trader",
            price_text: "",
            tier_process: 0
        }, {
            id: 3,
            name: "Merchant",
            price_text: "",
            tier_process: 0
        }, {
            id: 4,
            name: "Shopkeeper",
            price_text: "",
            tier_process: 0
        }, {
            id: 5,
            name: "GUM Tycoon",
            price_text: "",
            tier_process: 0
        }],
        initialSlide: 0,
        isFirtRouterHome: !1,
        timeNow: 0,
        twoHours: 2 * (60 * 60),
        timeRemaining: 0,
        maxEarnDuration: 0,
        popupsEvent: [],
        enablePopups: [0],
        startGame: null
    }),
    getters: {},
    actions: {
        setUserInfo(e) {
            this.userInfo = e
        },
        setBannerStatus(e) {
            this.isShowIntroBanner = e
        },
        async verifyRecaptcha(e) {
            var t;
            try {
                const n = await gn("/verify", {
                    telegram_data: e,
                    ref_id: this.refId
                });
                return (t = n == null ? void 0 : n.data) == null ? void 0 : t.data
            } catch (n) {
                console.log(n)
            }
        },
        async login(e=null) {
            const t = await gn("/login", {
                telegram_data: this.queryId,
                ref_id: this.refId,
                mode: this.queryMode,
                g_recaptcha_response: e
            });
            this.accessToken = t.data.data.access_token,
            this.userInfo = t.data.data.user,
            this.routerHome = t.data.data.claim_timestamp,
            this.accessToken && (nt.defaults.headers.common.Authorization = "Bearer " + this.accessToken)
        },
        async getUserInfo() {
            try {
                const e = await Nr("/siwe/user-info");
                e.data.status_code === 200 && (this.userInfo = e.data.data.user)
            } catch (e) {
                console.log(e)
            }
        },
        async getDataHome() {
            const e = await Nr("/home");
            if (e.data.status_code === 200) {
                const t = Date.now();
                this.dataHome = e.data.data,
                this.autoBoost = this.dataHome.is_auto_boost,
                this.autoClaim = this.dataHome.is_auto_claim,
                this.processEarn = this.dataHome.process_earn_balance,
                this.mintSpeed = Math.floor(this.dataHome.mint_speed * 100) / 100,
                this.boosting = this.dataHome.boost === 130,
                this.boostStart = this.dataHome.boost_timestamp,
                this.boostEnd = this.dataHome.boost_end_timestamp,
                this.boostNext = this.dataHome.boost_next_timestamp,
                this.boostingTime = this.boostEnd - Math.floor(t / 1e3),
                this.maxEarnDuration = this.dataHome.max_earn_duration,
                this.maxEarnDuration - (Math.floor(t / 1e3) - this.dataHome.user_claim_timestamp) < 0 ? this.timeRemaining = 0 : this.timeRemaining = this.maxEarnDuration - (Math.floor(t / 1e3) - this.dataHome.user_claim_timestamp),
                Math.floor(t / 1e3) <= this.boostEnd && (this.mintSpeed = Math.floor(this.dataHome.mint_speed * 1.3 * 100) / 100),
                this.valueClaim = this.dataHome.earned_amount,
                this.balance = Number(this.dataHome.balance),
                this.booster = this.dataHome.boost > 100 ? 130 : 0
            }
        },
        async postBoost() {
            var t, n, r, s;
            const e = await gn("/boost");
            e.data.status_code === 200 && (this.isBoost = !0,
            this.boosting = this.isBoost,
            this.booster = 130,
            this.timeNow = Math.floor(Date.now() / 1e3),
            this.mintSpeed = Math.floor(this.dataHome.mint_speed * 1.3 * 100) / 100,
            this.boostStart = (n = (t = e.data) == null ? void 0 : t.data) == null ? void 0 : n.boost_timestamp,
            this.boostEnd = (s = (r = e.data) == null ? void 0 : r.data) == null ? void 0 : s.boost_end_timestamp,
            this.boostNext = this.boostEnd + 1,
            this.boostingTime = this.boostEnd - this.boostStart)
        },
        async claim() {
            try {
                const e = await gn("/claim", null, !1, !0);
                e.data.status_code === 200 ? (this.valueClaim = e.data.data.claim_value,
                this.timeNow = Math.floor(Date.now() / 1e3),
                setTimeout( () => {
                    this.valueClaim = 0,
                    this.balance = e.data.data.balance
                }
                , 1e3)) : e.data.status_code === 429 ? Ct({
                    message: e.data.message,
                    type: "error",
                    grouping: !0
                }) : Ct({
                    message: "An error occurred. Please contact admin.",
                    type: "error",
                    grouping: !0
                })
            } catch (e) {
                console.log(e)
            }
        },
        async getTier() {
            const e = await Nr("/tiers");
            e.data.status_code === 200 && (this.tiers = e.data.data)
        },
        async postMint() {
            try {
                await gn("/mint")
            } catch (e) {
                console.log(e)
            }
        },
        setQueryData(e=null, t=null) {
            e !== null && (!isNaN(parseFloat(e)) && isFinite(e) ? this.refId = e : this.startGame = e),
            this.queryMode = t
        },
        async createWallet() {
            var e;
            try {
                const t = await gn("/deposit-withdraw-order/create-wallet");
                ((e = t == null ? void 0 : t.data) == null ? void 0 : e.status_code) === 200 && (this.dataHome.wallet = t == null ? void 0 : t.data.data)
            } catch (t) {
                console.log(t)
            }
        },
        async buyPack(e) {
            var t;
            try {
                const n = await gn("/shop/checkout", e);
                if (((t = n == null ? void 0 : n.data) == null ? void 0 : t.status_code) === 200 && !(n != null && n.data.data.deposit))
                    return Ct({
                        message: "Purchase successful",
                        type: "success",
                        grouping: !0
                    }),
                    !0;
                Ct({
                    message: "Transaction Cancelled",
                    type: "error",
                    grouping: !0
                })
            } catch (n) {
                console.log(n),
                Ct({
                    message: "Transaction Cancelled",
                    type: "error",
                    grouping: !0
                })
            }
            return !1
        },
        async buyPackWithGum(e) {
            var t, n;
            try {
                const r = await gn("/shop/checkout-gum", e);
                if (((t = r == null ? void 0 : r.data) == null ? void 0 : t.status_code) === 200 && !(r != null && r.data.data.deposit))
                    return Ct({
                        message: "Purchase successful",
                        type: "success",
                        grouping: !0
                    }),
                    !0;
                if (((n = r == null ? void 0 : r.data) == null ? void 0 : n.status_code) === 400)
                    return Ct({
                        message: r == null ? void 0 : r.data.message,
                        type: "error",
                        grouping: !0
                    }),
                    !1
            } catch (r) {
                console.log(r)
            }
            return Ct({
                message: "Transaction Cancelled",
                type: "error",
                grouping: !0
            }),
            !1
        },
        async buyGiftPack(e) {
            try {
                const t = await gn("/gift/send", e);
                if ((t == null ? void 0 : t.data.status_code) === 200)
                    return {
                        status: !0,
                        message: t == null ? void 0 : t.data.message
                    };
                if ((t == null ? void 0 : t.data.status_code) === 422 || (t == null ? void 0 : t.data.status_code) === 400)
                    return {
                        status: !1,
                        message: t == null ? void 0 : t.data.message
                    }
            } catch (t) {
                Ct({
                    message: "Transaction Cancelled",
                    type: "error",
                    grouping: !0
                }),
                console.log(t)
            }
        },
        async buyStarPack(e) {
            try {
                const t = await gn("/shop/checkout-star", e);
                if ((t == null ? void 0 : t.data.status_code) === 200)
                    return {
                        link: t.data.data
                    }
            } catch (t) {
                console.log(t)
            }
        },
        async checkPackStatus(e) {
            try {
                const t = await Nr(`/shop/check-purchase-star?item_type=${e.item_type}`);
                if ((t == null ? void 0 : t.data.status_code) === 200)
                    return {
                        isSuccess: t == null ? void 0 : t.data.data.is_success
                    }
            } catch (t) {
                console.log(t)
            }
        },
        async handleLastClaim() {
            try {
                await Nr("/get-last-claim")
            } catch (e) {
                console.log(e)
            }
        },
        async getPopup() {
            try {
                const e = await Nr("/popups");
                if ((e == null ? void 0 : e.data.status_code) === 200) {
                    let t = JSON.parse(window.localStorage.getItem("history_popup_key") || "[]");
                    this.popupsEvent = (e == null ? void 0 : e.data.data) || [],
                    this.popupsEvent.map(n => {
                        this.enablePopups.push(n == null ? void 0 : n.id)
                    }
                    ),
                    t.map(n => {
                        if (!this.enablePopups.includes(n))
                            return window.localStorage.removeItem(WR + "_" + n)
                    }
                    ),
                    this.enablePopups.filter(n => n !== 0),
                    window.localStorage.setItem("history_popup_key", JSON.stringify(this.enablePopups))
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
})
  , qR = (e, t) => {
    var u, l;
    const {queryId: n} = Dh(Vm())
      , {recentPage: r} = Dh(jR())
      , s = Vm()
      , o = ["/", "/game-hub/catching-gum"]
      , i = (u = e.query) == null ? void 0 : u.tgWebAppStartParam
      , a = (l = e.query) == null ? void 0 : l.mode;
    if (["/assistant", "/statistic", "/support", "/account"].includes(e.path) || (r.value = e.path),
    (i || a) && s.setQueryData(i, a),
    !n.value && !o.includes(e.path))
        return cC("/")
}
  , VR = async e => {
    let t, n;
    const r = ([t,n] = si( () => nd(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return fs(r.redirect, {
            acceptRelative: !0
        }) ? (window.location.href = r.redirect,
        !1) : r.redirect
}
  , KR = [SA, qR, VR]
  , zo = {};
function GR(e, t, n) {
    const {pathname: r, search: s, hash: o} = t
      , i = e.indexOf("#");
    if (i > -1) {
        const u = o.includes(e.slice(i)) ? e.slice(i).length : 1;
        let l = o.slice(u);
        return l[0] !== "/" && (l = "/" + l),
        Xp(l, "")
    }
    const a = Xp(r, e)
      , c = !n || x4(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return c + (c.includes("?") ? "" : s) + o
}
const XR = Nt({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var g, E;
        let t, n, r = ds().app.baseURL;
        $t.hashMode && !r.includes("#") && (r += "#");
        const s = ((g = $t.history) == null ? void 0 : g.call($t, r)) ?? ($t.hashMode ? q8(r) : qy(r))
          , o = ((E = $t.routes) == null ? void 0 : E.call($t, Ah)) ?? Ah;
        let i;
        const a = mA({
            ...$t,
            scrollBehavior: (x, _, y) => {
                if (_ === on) {
                    i = y;
                    return
                }
                if ($t.scrollBehavior) {
                    if (a.options.scrollBehavior = $t.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const S = a.beforeEach( () => {
                            S(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return $t.scrollBehavior(x, on, i || y)
                }
            }
            ,
            history: s,
            routes: o
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(a);
        const c = qs(a.currentRoute.value);
        a.afterEach( (x, _) => {
            c.value = _
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: () => c.value
        });
        const u = GR(r, window.location, e.payload.path)
          , l = qs(a.currentRoute.value)
          , f = () => {
            l.value = a.currentRoute.value
        }
        ;
        e.hook("page:finish", f),
        a.afterEach( (x, _) => {
            var y, S, v, b;
            ((S = (y = x.matched[0]) == null ? void 0 : y.components) == null ? void 0 : S.default) === ((b = (v = _.matched[0]) == null ? void 0 : v.components) == null ? void 0 : b.default) && f()
        }
        );
        const d = {};
        for (const x in l.value)
            Object.defineProperty(d, x, {
                get: () => l.value[x]
            });
        e._route = cs(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        try {
            [t,n] = si( () => a.isReady()),
            await t,
            n()
        } catch (x) {
            [t,n] = si( () => e.runWithContext( () => Ts(x))),
            await t,
            n()
        }
        const p = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
        f();
        const m = e.payload.state._layout;
        a.beforeEach(async (x, _) => {
            var y;
            await e.callHook("page:loading:start"),
            x.meta = kn(x.meta),
            e.isHydrating && m && !Qr(x.meta.layout) && (x.meta.layout = m),
            e._processingMiddleware = !0;
            {
                const S = new Set([...KR, ...e._middleware.global]);
                for (const v of x.matched) {
                    const b = v.meta.middleware;
                    if (b)
                        for (const C of id(b))
                            S.add(C)
                }
                {
                    const v = await e.runWithContext( () => nd(x.path));
                    if (v.appMiddleware)
                        for (const b in v.appMiddleware)
                            v.appMiddleware[b] ? S.add(b) : S.delete(b)
                }
                for (const v of S) {
                    const b = typeof v == "string" ? e._middleware.named[v] || await ((y = zo[v]) == null ? void 0 : y.call(zo).then(I => I.default || I)) : v;
                    if (!b)
                        throw new Error(`Unknown route middleware: '${v}'.`);
                    const C = await e.runWithContext( () => b(x, _));
                    if (!e.payload.serverRendered && e.isHydrating && (C === !1 || C instanceof Error)) {
                        const I = C || df({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${u}`
                        });
                        return await e.runWithContext( () => Ts(I)),
                        !1
                    }
                    if (C !== !0 && (C || C === !1))
                        return C
                }
            }
        }
        ),
        a.onError(async () => {
            delete e._processingMiddleware,
            await e.callHook("page:loading:end")
        }
        );
        const h = Nc();
        return a.afterEach(async (x, _, y) => {
            delete e._processingMiddleware,
            !e.isHydrating && h.value && await e.runWithContext(uC),
            y && await e.callHook("page:loading:end"),
            x.matched.length === 0 && await e.runWithContext( () => Ts(df({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${x.fullPath}`,
                data: {
                    path: x.fullPath
                }
            })))
        }
        ),
        e.hooks.hookOnce("app:created", async () => {
            try {
                "name"in p && (p.name = void 0),
                await a.replace({
                    ...p,
                    force: !0
                }),
                a.options.scrollBehavior = $t.scrollBehavior
            } catch (x) {
                await e.runWithContext( () => Ts(x))
            }
        }
        ),
        {
            provide: {
                router: a
            }
        }
    }
})
  , YR = Nt({
    name: "nuxt:payload",
    setup(e) {
        mn().beforeResolve(async (t, n) => {
            if (t.path === n.path)
                return;
            const r = await ch(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        Jy( () => {
            var t;
            e.hooks.hook("link:prefetch", async n => {
                J0(n).protocol || await ch(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(Lc, 1e3)
        }
        )
    }
})
  , JR = Nt(e => {
    let t;
    async function n() {
        const r = await Lc();
        t && clearTimeout(t),
        t = setTimeout(n, 1e3 * 60 * 60);
        try {
            const s = await $fetch(Z0("builds/latest.json") + `?${Date.now()}`);
            s.id !== r.id && e.hooks.callHook("app:manifest:update", s)
        } catch {}
    }
    Jy( () => {
        t = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
)
  , QR = Nt(e => {
    const t = AA();
    return e.vueApp.use(t),
    Ai(t),
    e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
    {
        provide: {
            pinia: t
        }
    }
}
)
  , ZR = Nt({
    name: "nuxt:global-components"
})
  , gr = {
    default: () => Je( () => import("./S3fEMl5n.js"), __vite__mapDeps([96, 40, 41, 42, 24, 20, 21, 22, 23, 43, 52, 4, 12, 7, 29, 13, 30, 48, 47, 97, 55, 28, 19, 98]), import.meta.url).then(e => e.default || e),
    "game-layout": () => Je( () => import("./CSs2FQB4.js"), [], import.meta.url).then(e => e.default || e)
}
  , eI = Nt({
    name: "nuxt:prefetch",
    setup(e) {
        const t = mn();
        e.hooks.hook("app:mounted", () => {
            t.beforeEach(async n => {
                var s;
                const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout;
                r && typeof gr[r] == "function" && await gr[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n => {
            if (fs(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const s = r.meta.layout;
            let o = id(r.meta.middleware);
            o = o.filter(i => typeof i == "string");
            for (const i of o)
                typeof zo[i] == "function" && zo[i]();
            s && typeof gr[s] == "function" && gr[s]()
        }
        )
    }
})
  , tI = Nt({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = mn()
          , n = ds()
          , r = new Set;
        t.beforeEach( () => {
            r.clear()
        }
        ),
        e.hook("app:chunkError", ({error: o}) => {
            r.add(o)
        }
        );
        function s(o) {
            const a = "href"in o && o.href[0] === "#" ? n.app.baseURL + o.href : Y0(n.app.baseURL, o.fullPath);
            wA({
                path: a,
                persistState: !0
            })
        }
        e.hook("app:manifest:update", () => {
            t.beforeResolve(s)
        }
        ),
        t.onError( (o, i) => {
            r.has(o) && s(i)
        }
        )
    }
})
  , nv = Object.prototype.toString;
function Ed(e) {
    switch (nv.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
        return !0;
    default:
        return Wn(e, Error)
    }
}
function go(e, t) {
    return nv.call(e) === `[object ${t}]`
}
function rv(e) {
    return go(e, "ErrorEvent")
}
function Km(e) {
    return go(e, "DOMError")
}
function nI(e) {
    return go(e, "DOMException")
}
function Un(e) {
    return go(e, "String")
}
function bd(e) {
    return typeof e == "object" && e !== null && "__sentry_template_string__"in e && "__sentry_template_values__"in e
}
function Sd(e) {
    return e === null || bd(e) || typeof e != "object" && typeof e != "function"
}
function no(e) {
    return go(e, "Object")
}
function Xc(e) {
    return typeof Event < "u" && Wn(e, Event)
}
function rI(e) {
    return typeof Element < "u" && Wn(e, Element)
}
function sI(e) {
    return go(e, "RegExp")
}
function Yc(e) {
    return !!(e && e.then && typeof e.then == "function")
}
function oI(e) {
    return no(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
}
function Wn(e, t) {
    try {
        return e instanceof t
    } catch {
        return !1
    }
}
function sv(e) {
    return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue))
}
function $s(e, t=0) {
    return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`
}
function Gm(e, t) {
    if (!Array.isArray(e))
        return "";
    const n = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        try {
            sv(s) ? n.push("[VueViewModel]") : n.push(String(s))
        } catch {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(t)
}
function iI(e, t, n=!1) {
    return Un(e) ? sI(t) ? t.test(e) : Un(t) ? n ? e === t : e.includes(t) : !1 : !1
}
function xr(e, t=[], n=!1) {
    return t.some(r => iI(e, r, n))
}
function aI(e, t, n=250, r, s, o, i) {
    if (!o.exception || !o.exception.values || !i || !Wn(i.originalException, Error))
        return;
    const a = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
    a && (o.exception.values = cI(If(e, t, s, i.originalException, r, o.exception.values, a, 0), n))
}
function If(e, t, n, r, s, o, i, a) {
    if (o.length >= n + 1)
        return o;
    let c = [...o];
    if (Wn(r[s], Error)) {
        Xm(i, a);
        const u = e(t, r[s])
          , l = c.length;
        Ym(u, s, l, a),
        c = If(e, t, n, r[s], s, [u, ...c], u, l)
    }
    return Array.isArray(r.errors) && r.errors.forEach( (u, l) => {
        if (Wn(u, Error)) {
            Xm(i, a);
            const f = e(t, u)
              , d = c.length;
            Ym(f, `errors[${l}]`, d, a),
            c = If(e, t, n, u, s, [f, ...c], f, d)
        }
    }
    ),
    c
}
function Xm(e, t) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    },
    e.mechanism = {
        ...e.mechanism,
        ...e.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: t
    }
}
function Ym(e, t, n, r) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    },
    e.mechanism = {
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}
function cI(e, t) {
    return e.map(n => (n.value && (n.value = $s(n.value, t)),
    n))
}
const jn = "8.24.0"
  , we = globalThis;
function wd(e, t, n) {
    const r = we
      , s = r.__SENTRY__ = r.__SENTRY__ || {}
      , o = s[jn] = s[jn] || {};
    return o[e] || (o[e] = t())
}
const Us = we
  , uI = 80;
function Sr(e, t={}) {
    if (!e)
        return "<unknown>";
    try {
        let n = e;
        const r = 5
          , s = [];
        let o = 0
          , i = 0;
        const a = " > "
          , c = a.length;
        let u;
        const l = Array.isArray(t) ? t : t.keyAttrs
          , f = !Array.isArray(t) && t.maxStringLength || uI;
        for (; n && o++ < r && (u = lI(n, l),
        !(u === "html" || o > 1 && i + s.length * c + u.length >= f)); )
            s.push(u),
            i += u.length,
            n = n.parentNode;
        return s.reverse().join(a)
    } catch {
        return "<unknown>"
    }
}
function lI(e, t) {
    const n = e
      , r = [];
    if (!n || !n.tagName)
        return "";
    if (Us.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent)
            return n.dataset.sentryComponent;
        if (n.dataset.sentryElement)
            return n.dataset.sentryElement
    }
    r.push(n.tagName.toLowerCase());
    const s = t && t.length ? t.filter(i => n.getAttribute(i)).map(i => [i, n.getAttribute(i)]) : null;
    if (s && s.length)
        s.forEach(i => {
            r.push(`[${i[0]}="${i[1]}"]`)
        }
        );
    else {
        n.id && r.push(`#${n.id}`);
        const i = n.className;
        if (i && Un(i)) {
            const a = i.split(/\s+/);
            for (const c of a)
                r.push(`.${c}`)
        }
    }
    const o = ["aria-label", "type", "name", "title", "alt"];
    for (const i of o) {
        const a = n.getAttribute(i);
        a && r.push(`[${i}="${a}"]`)
    }
    return r.join("")
}
function ov() {
    try {
        return Us.document.location.href
    } catch {
        return ""
    }
}
function fI(e) {
    return Us.document && Us.document.querySelector ? Us.document.querySelector(e) : null
}
function iv(e) {
    if (!Us.HTMLElement)
        return null;
    let t = e;
    const n = 5;
    for (let r = 0; r < n; r++) {
        if (!t)
            return null;
        if (t instanceof HTMLElement) {
            if (t.dataset.sentryComponent)
                return t.dataset.sentryComponent;
            if (t.dataset.sentryElement)
                return t.dataset.sentryElement
        }
        t = t.parentNode
    }
    return null
}
const _o = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , dI = "Sentry Logger "
  , Df = ["debug", "info", "warn", "error", "log", "assert", "trace"]
  , Ga = {};
function Xn(e) {
    if (!("console"in we))
        return e();
    const t = we.console
      , n = {}
      , r = Object.keys(Ga);
    r.forEach(s => {
        const o = Ga[s];
        n[s] = t[s],
        t[s] = o
    }
    );
    try {
        return e()
    } finally {
        r.forEach(s => {
            t[s] = n[s]
        }
        )
    }
}
function pI() {
    let e = !1;
    const t = {
        enable: () => {
            e = !0
        }
        ,
        disable: () => {
            e = !1
        }
        ,
        isEnabled: () => e
    };
    return _o ? Df.forEach(n => {
        t[n] = (...r) => {
            e && Xn( () => {
                we.console[n](`${dI}[${n}]:`, ...r)
            }
            )
        }
    }
    ) : Df.forEach(n => {
        t[n] = () => {}
    }
    ),
    t
}
const V = pI()
  , hI = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function mI(e) {
    return e === "http" || e === "https"
}
function Ii(e, t=!1) {
    const {host: n, path: r, pass: s, port: o, projectId: i, protocol: a, publicKey: c} = e;
    return `${a}://${c}${t && s ? `:${s}` : ""}@${n}${o ? `:${o}` : ""}/${r && `${r}/`}${i}`
}
function gI(e) {
    const t = hI.exec(e);
    if (!t) {
        Xn( () => {
            console.error(`Invalid Sentry Dsn: ${e}`)
        }
        );
        return
    }
    const [n,r,s="",o="",i="",a=""] = t.slice(1);
    let c = ""
      , u = a;
    const l = u.split("/");
    if (l.length > 1 && (c = l.slice(0, -1).join("/"),
    u = l.pop()),
    u) {
        const f = u.match(/^\d+/);
        f && (u = f[0])
    }
    return av({
        host: o,
        pass: s,
        path: c,
        projectId: u,
        port: i,
        protocol: n,
        publicKey: r
    })
}
function av(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || "",
        pass: e.pass || "",
        host: e.host,
        port: e.port || "",
        path: e.path || "",
        projectId: e.projectId
    }
}
function _I(e) {
    if (!_o)
        return !0;
    const {port: t, projectId: n, protocol: r} = e;
    return ["protocol", "publicKey", "host", "projectId"].find(i => e[i] ? !1 : (V.error(`Invalid Sentry Dsn: ${i} missing`),
    !0)) ? !1 : n.match(/^\d+$/) ? mI(r) ? t && isNaN(parseInt(t, 10)) ? (V.error(`Invalid Sentry Dsn: Invalid port ${t}`),
    !1) : !0 : (V.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
    !1) : (V.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
    !1)
}
function xI(e) {
    const t = typeof e == "string" ? gI(e) : av(e);
    if (!(!t || !_I(t)))
        return t
}
class bn extends Error {
    constructor(t, n="warn") {
        super(t),
        this.message = t,
        this.name = new.target.prototype.constructor.name,
        Object.setPrototypeOf(this, new.target.prototype),
        this.logLevel = n
    }
}
function lt(e, t, n) {
    if (!(t in e))
        return;
    const r = e[t]
      , s = n(r);
    typeof s == "function" && cv(s, r),
    e[t] = s
}
function nn(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    } catch {
        _o && V.log(`Failed to add non-enumerable property "${t}" to object`, e)
    }
}
function cv(e, t) {
    try {
        const n = t.prototype || {};
        e.prototype = t.prototype = n,
        nn(e, "__sentry_original__", t)
    } catch {}
}
function Cd(e) {
    return e.__sentry_original__
}
function yI(e) {
    return Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
}
function uv(e) {
    if (Ed(e))
        return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...Qm(e)
        };
    if (Xc(e)) {
        const t = {
            type: e.type,
            target: Jm(e.target),
            currentTarget: Jm(e.currentTarget),
            ...Qm(e)
        };
        return typeof CustomEvent < "u" && Wn(e, CustomEvent) && (t.detail = e.detail),
        t
    } else
        return e
}
function Jm(e) {
    try {
        return rI(e) ? Sr(e) : Object.prototype.toString.call(e)
    } catch {
        return "<unknown>"
    }
}
function Qm(e) {
    if (typeof e == "object" && e !== null) {
        const t = {};
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    } else
        return {}
}
function vI(e, t=40) {
    const n = Object.keys(uv(e));
    n.sort();
    const r = n[0];
    if (!r)
        return "[object has no keys]";
    if (r.length >= t)
        return $s(r, t);
    for (let s = n.length; s > 0; s--) {
        const o = n.slice(0, s).join(", ");
        if (!(o.length > t))
            return s === n.length ? o : $s(o, t)
    }
    return ""
}
function ft(e) {
    return Bf(e, new Map)
}
function Bf(e, t) {
    if (EI(e)) {
        const n = t.get(e);
        if (n !== void 0)
            return n;
        const r = {};
        t.set(e, r);
        for (const s of Object.keys(e))
            typeof e[s] < "u" && (r[s] = Bf(e[s], t));
        return r
    }
    if (Array.isArray(e)) {
        const n = t.get(e);
        if (n !== void 0)
            return n;
        const r = [];
        return t.set(e, r),
        e.forEach(s => {
            r.push(Bf(s, t))
        }
        ),
        r
    }
    return e
}
function EI(e) {
    if (!no(e))
        return !1;
    try {
        const t = Object.getPrototypeOf(e).constructor.name;
        return !t || t === "Object"
    } catch {
        return !0
    }
}
const lv = 50
  , ss = "?"
  , Zm = /\(error: (.*)\)/
  , eg = /captureMessage|captureException/;
function fv(...e) {
    const t = e.sort( (n, r) => n[0] - r[0]).map(n => n[1]);
    return (n, r=0, s=0) => {
        const o = []
          , i = n.split(`
`);
        for (let a = r; a < i.length; a++) {
            const c = i[a];
            if (c.length > 1024)
                continue;
            const u = Zm.test(c) ? c.replace(Zm, "$1") : c;
            if (!u.match(/\S*Error: /)) {
                for (const l of t) {
                    const f = l(u);
                    if (f) {
                        o.push(f);
                        break
                    }
                }
                if (o.length >= lv + s)
                    break
            }
        }
        return SI(o.slice(s))
    }
}
function bI(e) {
    return Array.isArray(e) ? fv(...e) : e
}
function SI(e) {
    if (!e.length)
        return [];
    const t = Array.from(e);
    return /sentryWrapped/.test(ta(t).function || "") && t.pop(),
    t.reverse(),
    eg.test(ta(t).function || "") && (t.pop(),
    eg.test(ta(t).function || "") && t.pop()),
    t.slice(0, lv).map(n => ({
        ...n,
        filename: n.filename || ta(t).filename,
        function: n.function || ss
    }))
}
function ta(e) {
    return e[e.length - 1] || {}
}
const Al = "<anonymous>";
function qn(e) {
    try {
        return !e || typeof e != "function" ? Al : e.name || Al
    } catch {
        return Al
    }
}
function tg(e) {
    const t = e.exception;
    if (t) {
        const n = [];
        try {
            return t.values.forEach(r => {
                r.stacktrace.frames && n.push(...r.stacktrace.frames)
            }
            ),
            n
        } catch {
            return
        }
    }
}
const Sa = {}
  , ng = {};
function Ir(e, t) {
    Sa[e] = Sa[e] || [],
    Sa[e].push(t)
}
function Dr(e, t) {
    ng[e] || (t(),
    ng[e] = !0)
}
function tn(e, t) {
    const n = e && Sa[e];
    if (n)
        for (const r of n)
            try {
                r(t)
            } catch (s) {
                _o && V.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${qn(r)}
Error:`, s)
            }
}
function wI(e) {
    const t = "console";
    Ir(t, e),
    Dr(t, CI)
}
function CI() {
    "console"in we && Df.forEach(function(e) {
        e in we.console && lt(we.console, e, function(t) {
            return Ga[e] = t,
            function(...n) {
                tn("console", {
                    args: n,
                    level: e
                });
                const s = Ga[e];
                s && s.apply(we.console, n)
            }
        })
    })
}
const Of = we;
function dv() {
    if (!("fetch"in Of))
        return !1;
    try {
        return new Headers,
        new Request("http://www.example.com"),
        new Response,
        !0
    } catch {
        return !1
    }
}
function Ff(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
function AI() {
    if (typeof EdgeRuntime == "string")
        return !0;
    if (!dv())
        return !1;
    if (Ff(Of.fetch))
        return !0;
    let e = !1;
    const t = Of.document;
    if (t && typeof t.createElement == "function")
        try {
            const n = t.createElement("iframe");
            n.hidden = !0,
            t.head.appendChild(n),
            n.contentWindow && n.contentWindow.fetch && (e = Ff(n.contentWindow.fetch)),
            t.head.removeChild(n)
        } catch (n) {
            _o && V.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
    return e
}
const pv = 1e3;
function Di() {
    return Date.now() / pv
}
function TI() {
    const {performance: e} = we;
    if (!e || !e.now)
        return Di;
    const t = Date.now() - e.now()
      , n = e.timeOrigin == null ? t : e.timeOrigin;
    return () => (n + e.now()) / pv
}
const vt = TI()
  , Pt = ( () => {
    const {performance: e} = we;
    if (!e || !e.now)
        return;
    const t = 3600 * 1e3
      , n = e.now()
      , r = Date.now()
      , s = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t
      , o = s < t
      , i = e.timing && e.timing.navigationStart
      , c = typeof i == "number" ? Math.abs(i + n - r) : t
      , u = c < t;
    return o || u ? s <= c ? e.timeOrigin : i : r
}
)();
function hv(e, t) {
    const n = "fetch";
    Ir(n, e),
    Dr(n, () => mv(void 0, t))
}
function kI(e) {
    const t = "fetch-body-resolved";
    Ir(t, e),
    Dr(t, () => mv(II))
}
function mv(e, t=!1) {
    t && !AI() || lt(we, "fetch", function(n) {
        return function(...r) {
            const {method: s, url: o} = DI(r)
              , i = {
                args: r,
                fetchData: {
                    method: s,
                    url: o
                },
                startTimestamp: vt() * 1e3
            };
            e || tn("fetch", {
                ...i
            });
            const a = new Error().stack;
            return n.apply(we, r).then(async c => (e ? e(c) : tn("fetch", {
                ...i,
                endTimestamp: vt() * 1e3,
                response: c
            }),
            c), c => {
                throw tn("fetch", {
                    ...i,
                    endTimestamp: vt() * 1e3,
                    error: c
                }),
                Ed(c) && c.stack === void 0 && (c.stack = a,
                nn(c, "framesToPop", 1)),
                c
            }
            )
        }
    })
}
async function RI(e, t) {
    if (e && e.body && e.body.getReader) {
        const n = e.body.getReader();
        async function r({done: s}) {
            if (s)
                return Promise.resolve();
            try {
                const o = await Promise.race([n.read(), new Promise(i => {
                    setTimeout( () => {
                        i({
                            done: !0
                        })
                    }
                    , 5e3)
                }
                )]);
                await r(o)
            } catch {}
        }
        return n.read().then(r).then(t).catch( () => {}
        )
    }
}
async function II(e) {
    let t;
    try {
        t = e.clone()
    } catch {
        return
    }
    await RI(t, () => {
        tn("fetch-body-resolved", {
            endTimestamp: vt() * 1e3,
            response: e
        })
    }
    )
}
function Pf(e, t) {
    return !!e && typeof e == "object" && !!e[t]
}
function rg(e) {
    return typeof e == "string" ? e : e ? Pf(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}
function DI(e) {
    if (e.length === 0)
        return {
            method: "GET",
            url: ""
        };
    if (e.length === 2) {
        const [n,r] = e;
        return {
            url: rg(n),
            method: Pf(r, "method") ? String(r.method).toUpperCase() : "GET"
        }
    }
    const t = e[0];
    return {
        url: rg(t),
        method: Pf(t, "method") ? String(t.method).toUpperCase() : "GET"
    }
}
let na = null;
function gv(e) {
    const t = "error";
    Ir(t, e),
    Dr(t, BI)
}
function BI() {
    na = we.onerror,
    we.onerror = function(e, t, n, r, s) {
        return tn("error", {
            column: r,
            error: s,
            line: n,
            msg: e,
            url: t
        }),
        na && !na.__SENTRY_LOADER__ ? na.apply(this, arguments) : !1
    }
    ,
    we.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let ra = null;
function _v(e) {
    const t = "unhandledrejection";
    Ir(t, e),
    Dr(t, OI)
}
function OI() {
    ra = we.onunhandledrejection,
    we.onunhandledrejection = function(e) {
        return tn("unhandledrejection", e),
        ra && !ra.__SENTRY_LOADER__ ? ra.apply(this, arguments) : !0
    }
    ,
    we.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
function FI() {
    return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
}
function PI() {
    return "npm"
}
function NI() {
    return !FI() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
}
function sg() {
    return typeof window < "u" && (!NI() || MI())
}
function MI() {
    return we.process !== void 0 && we.process.type === "renderer"
}
function LI() {
    const e = typeof WeakSet == "function"
      , t = e ? new WeakSet : [];
    function n(s) {
        if (e)
            return t.has(s) ? !0 : (t.add(s),
            !1);
        for (let o = 0; o < t.length; o++)
            if (t[o] === s)
                return !0;
        return t.push(s),
        !1
    }
    function r(s) {
        if (e)
            t.delete(s);
        else
            for (let o = 0; o < t.length; o++)
                if (t[o] === s) {
                    t.splice(o, 1);
                    break
                }
    }
    return [n, r]
}
function Ke() {
    const e = we
      , t = e.crypto || e.msCrypto;
    let n = () => Math.random() * 16;
    try {
        if (t && t.randomUUID)
            return t.randomUUID().replace(/-/g, "");
        t && t.getRandomValues && (n = () => {
            const r = new Uint8Array(1);
            return t.getRandomValues(r),
            r[0]
        }
        )
    } catch {}
    return ("10000000100040008000" + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
}
function xv(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0
}
function lr(e) {
    const {message: t, event_id: n} = e;
    if (t)
        return t;
    const r = xv(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}
function Nf(e, t, n) {
    const r = e.exception = e.exception || {}
      , s = r.values = r.values || []
      , o = s[0] = s[0] || {};
    o.value || (o.value = t || ""),
    o.type || (o.type = "Error")
}
function li(e, t) {
    const n = xv(e);
    if (!n)
        return;
    const r = {
        type: "generic",
        handled: !0
    }
      , s = n.mechanism;
    if (n.mechanism = {
        ...r,
        ...s,
        ...t
    },
    t && "data"in t) {
        const o = {
            ...s && s.data,
            ...t.data
        };
        n.mechanism.data = o
    }
}
function og(e) {
    if (e && e.__sentry_captured__)
        return !0;
    try {
        nn(e, "__sentry_captured__", !0)
    } catch {}
    return !1
}
function Ad(e) {
    return Array.isArray(e) ? e : [e]
}
function vn(e, t=100, n=1 / 0) {
    try {
        return Mf("", e, t, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}
function yv(e, t=3, n=100 * 1024) {
    const r = vn(e, t);
    return jI(r) > n ? yv(e, t - 1, n) : r
}
function Mf(e, t, n=1 / 0, r=1 / 0, s=LI()) {
    const [o,i] = s;
    if (t == null || ["number", "boolean", "string"].includes(typeof t) && !Number.isNaN(t))
        return t;
    const a = HI(e, t);
    if (!a.startsWith("[object "))
        return a;
    if (t.__sentry_skip_normalization__)
        return t;
    const c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
    if (c === 0)
        return a.replace("object ", "");
    if (o(t))
        return "[Circular ~]";
    const u = t;
    if (u && typeof u.toJSON == "function")
        try {
            const p = u.toJSON();
            return Mf("", p, c - 1, r, s)
        } catch {}
    const l = Array.isArray(t) ? [] : {};
    let f = 0;
    const d = uv(t);
    for (const p in d) {
        if (!Object.prototype.hasOwnProperty.call(d, p))
            continue;
        if (f >= r) {
            l[p] = "[MaxProperties ~]";
            break
        }
        const m = d[p];
        l[p] = Mf(p, m, c - 1, r, s),
        f++
    }
    return i(t),
    l
}
function HI(e, t) {
    try {
        if (e === "domain" && t && typeof t == "object" && t._events)
            return "[Domain]";
        if (e === "domainEmitter")
            return "[DomainEmitter]";
        if (typeof global < "u" && t === global)
            return "[Global]";
        if (typeof window < "u" && t === window)
            return "[Window]";
        if (typeof document < "u" && t === document)
            return "[Document]";
        if (sv(t))
            return "[VueViewModel]";
        if (oI(t))
            return "[SyntheticEvent]";
        if (typeof t == "number" && t !== t)
            return "[NaN]";
        if (typeof t == "function")
            return `[Function: ${qn(t)}]`;
        if (typeof t == "symbol")
            return `[${String(t)}]`;
        if (typeof t == "bigint")
            return `[BigInt: ${String(t)}]`;
        const n = $I(t);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
    } catch (n) {
        return `**non-serializable** (${n})`
    }
}
function $I(e) {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : "null prototype"
}
function UI(e) {
    return ~-encodeURI(e).split(/%..|./).length
}
function jI(e) {
    return UI(JSON.stringify(e))
}
var On;
(function(e) {
    e[e.PENDING = 0] = "PENDING";
    const n = 1;
    e[e.RESOLVED = n] = "RESOLVED";
    const r = 2;
    e[e.REJECTED = r] = "REJECTED"
}
)(On || (On = {}));
function Vn(e) {
    return new Yt(t => {
        t(e)
    }
    )
}
function Xa(e) {
    return new Yt( (t, n) => {
        n(e)
    }
    )
}
class Yt {
    constructor(t) {
        Yt.prototype.__init.call(this),
        Yt.prototype.__init2.call(this),
        Yt.prototype.__init3.call(this),
        Yt.prototype.__init4.call(this),
        this._state = On.PENDING,
        this._handlers = [];
        try {
            t(this._resolve, this._reject)
        } catch (n) {
            this._reject(n)
        }
    }
    then(t, n) {
        return new Yt( (r, s) => {
            this._handlers.push([!1, o => {
                if (!t)
                    r(o);
                else
                    try {
                        r(t(o))
                    } catch (i) {
                        s(i)
                    }
            }
            , o => {
                if (!n)
                    s(o);
                else
                    try {
                        r(n(o))
                    } catch (i) {
                        s(i)
                    }
            }
            ]),
            this._executeHandlers()
        }
        )
    }
    catch(t) {
        return this.then(n => n, t)
    }
    finally(t) {
        return new Yt( (n, r) => {
            let s, o;
            return this.then(i => {
                o = !1,
                s = i,
                t && t()
            }
            , i => {
                o = !0,
                s = i,
                t && t()
            }
            ).then( () => {
                if (o) {
                    r(s);
                    return
                }
                n(s)
            }
            )
        }
        )
    }
    __init() {
        this._resolve = t => {
            this._setResult(On.RESOLVED, t)
        }
    }
    __init2() {
        this._reject = t => {
            this._setResult(On.REJECTED, t)
        }
    }
    __init3() {
        this._setResult = (t, n) => {
            if (this._state === On.PENDING) {
                if (Yc(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = t,
                this._value = n,
                this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === On.PENDING)
                return;
            const t = this._handlers.slice();
            this._handlers = [],
            t.forEach(n => {
                n[0] || (this._state === On.RESOLVED && n[1](this._value),
                this._state === On.REJECTED && n[2](this._value),
                n[0] = !0)
            }
            )
        }
    }
}
function zI(e) {
    const t = [];
    function n() {
        return e === void 0 || t.length < e
    }
    function r(i) {
        return t.splice(t.indexOf(i), 1)[0] || Promise.resolve(void 0)
    }
    function s(i) {
        if (!n())
            return Xa(new bn("Not adding Promise because buffer limit was reached."));
        const a = i();
        return t.indexOf(a) === -1 && t.push(a),
        a.then( () => r(a)).then(null, () => r(a).then(null, () => {}
        )),
        a
    }
    function o(i) {
        return new Yt( (a, c) => {
            let u = t.length;
            if (!u)
                return a(!0);
            const l = setTimeout( () => {
                i && i > 0 && a(!1)
            }
            , i);
            t.forEach(f => {
                Vn(f).then( () => {
                    --u || (clearTimeout(l),
                    a(!0))
                }
                , c)
            }
            )
        }
        )
    }
    return {
        $: t,
        add: s,
        drain: o
    }
}
function Gr(e) {
    if (!e)
        return {};
    const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t)
        return {};
    const n = t[6] || ""
      , r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}
const WI = ["fatal", "error", "warning", "log", "info", "debug"];
function qI(e) {
    return e === "warn" ? "warning" : WI.includes(e) ? e : "log"
}
const Lf = "baggage"
  , vv = "sentry-"
  , VI = /^sentry-/
  , KI = 8192;
function Ev(e) {
    const t = GI(e);
    if (!t)
        return;
    const n = Object.entries(t).reduce( (r, [s,o]) => {
        if (s.match(VI)) {
            const i = s.slice(vv.length);
            r[i] = o
        }
        return r
    }
    , {});
    if (Object.keys(n).length > 0)
        return n
}
function bv(e) {
    if (!e)
        return;
    const t = Object.entries(e).reduce( (n, [r,s]) => (s && (n[`${vv}${r}`] = s),
    n), {});
    return XI(t)
}
function GI(e) {
    if (!(!e || !Un(e) && !Array.isArray(e)))
        return Array.isArray(e) ? e.reduce( (t, n) => {
            const r = ig(n);
            return Object.entries(r).forEach( ([s,o]) => {
                t[s] = o
            }
            ),
            t
        }
        , {}) : ig(e)
}
function ig(e) {
    return e.split(",").map(t => t.split("=").map(n => decodeURIComponent(n.trim()))).reduce( (t, [n,r]) => (n && r && (t[n] = r),
    t), {})
}
function XI(e) {
    if (Object.keys(e).length !== 0)
        return Object.entries(e).reduce( (t, [n,r], s) => {
            const o = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`
              , i = s === 0 ? o : `${t},${o}`;
            return i.length > KI ? (_o && V.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`),
            t) : i
        }
        , "")
}
const YI = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function JI(e) {
    if (!e)
        return;
    const t = e.match(YI);
    if (!t)
        return;
    let n;
    return t[3] === "1" ? n = !0 : t[3] === "0" && (n = !1),
    {
        traceId: t[1],
        parentSampled: n,
        parentSpanId: t[2]
    }
}
function QI(e, t) {
    const n = JI(e)
      , r = Ev(t)
      , {traceId: s, parentSpanId: o, parentSampled: i} = n || {};
    return n ? {
        traceId: s || Ke(),
        parentSpanId: o || Ke().substring(16),
        spanId: Ke().substring(16),
        sampled: i,
        dsc: r || {}
    } : {
        traceId: s || Ke(),
        spanId: Ke().substring(16)
    }
}
function Td(e=Ke(), t=Ke().substring(16), n) {
    let r = "";
    return n !== void 0 && (r = n ? "-1" : "-0"),
    `${e}-${t}${r}`
}
function xs(e, t=[]) {
    return [e, t]
}
function ZI(e, t) {
    const [n,r] = e;
    return [n, [...r, t]]
}
function ag(e, t) {
    const n = e[1];
    for (const r of n) {
        const s = r[0].type;
        if (t(r, s))
            return !0
    }
    return !1
}
function Hf(e) {
    return we.__SENTRY__ && we.__SENTRY__.encodePolyfill ? we.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e)
}
function e5(e) {
    const [t,n] = e;
    let r = JSON.stringify(t);
    function s(o) {
        typeof r == "string" ? r = typeof o == "string" ? r + o : [Hf(r), o] : r.push(typeof o == "string" ? Hf(o) : o)
    }
    for (const o of n) {
        const [i,a] = o;
        if (s(`
${JSON.stringify(i)}
`),
        typeof a == "string" || a instanceof Uint8Array)
            s(a);
        else {
            let c;
            try {
                c = JSON.stringify(a)
            } catch {
                c = JSON.stringify(vn(a))
            }
            s(c)
        }
    }
    return typeof r == "string" ? r : t5(r)
}
function t5(e) {
    const t = e.reduce( (s, o) => s + o.length, 0)
      , n = new Uint8Array(t);
    let r = 0;
    for (const s of e)
        n.set(s, r),
        r += s.length;
    return n
}
function n5(e) {
    return [{
        type: "span"
    }, e]
}
function r5(e) {
    const t = typeof e.data == "string" ? Hf(e.data) : e.data;
    return [ft({
        type: "attachment",
        length: t.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType
    }), t]
}
const s5 = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
};
function cg(e) {
    return s5[e]
}
function kd(e) {
    if (!e || !e.sdk)
        return;
    const {name: t, version: n} = e.sdk;
    return {
        name: t,
        version: n
    }
}
function Sv(e, t, n, r) {
    const s = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...t && {
            sdk: t
        },
        ...!!n && r && {
            dsn: Ii(r)
        },
        ...s && {
            trace: ft({
                ...s
            })
        }
    }
}
function o5(e, t, n) {
    const r = [{
        type: "client_report"
    }, {
        timestamp: Di(),
        discarded_events: e
    }];
    return xs(t ? {
        dsn: t
    } : {}, [r])
}
const i5 = 60 * 1e3;
function a5(e, t=Date.now()) {
    const n = parseInt(`${e}`, 10);
    if (!isNaN(n))
        return n * 1e3;
    const r = Date.parse(`${e}`);
    return isNaN(r) ? i5 : r - t
}
function c5(e, t) {
    return e[t] || e.all || 0
}
function wv(e, t, n=Date.now()) {
    return c5(e, t) > n
}
function Cv(e, {statusCode: t, headers: n}, r=Date.now()) {
    const s = {
        ...e
    }
      , o = n && n["x-sentry-rate-limits"]
      , i = n && n["retry-after"];
    if (o)
        for (const a of o.trim().split(",")) {
            const [c,u,,,l] = a.split(":", 5)
              , f = parseInt(c, 10)
              , d = (isNaN(f) ? 60 : f) * 1e3;
            if (!u)
                s.all = r + d;
            else
                for (const p of u.split(";"))
                    p === "metric_bucket" ? (!l || l.split(";").includes("custom")) && (s[p] = r + d) : s[p] = r + d
        }
    else
        i ? s.all = r + a5(i, r) : t === 429 && (s.all = r + 60 * 1e3);
    return s
}
function u5(e, t) {
    return e ?? t()
}
function wa(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...i) => n.call(t, ...i)),
        t = void 0)
    }
    return n
}
function Ya() {
    return {
        traceId: Ke(),
        spanId: Ke().substring(16)
    }
}
const sa = we;
function l5() {
    const e = sa.chrome
      , t = e && e.app && e.app.runtime
      , n = "history"in sa && !!sa.history.pushState && !!sa.history.replaceState;
    return !t && n
}
const _e = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function xo() {
    return Rd(we),
    we
}
function Rd(e) {
    const t = e.__SENTRY__ = e.__SENTRY__ || {};
    return t.version = t.version || jn,
    t[jn] = t[jn] || {}
}
function f5(e) {
    const t = vt()
      , n = {
        sid: Ke(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => p5(n)
    };
    return e && ro(n, e),
    n
}
function ro(e, t={}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
    !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
    e.timestamp = t.timestamp || vt(),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ke()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
        e.duration = void 0;
    else if (typeof t.duration == "number")
        e.duration = t.duration;
    else {
        const n = e.timestamp - e.started;
        e.duration = n >= 0 ? n : 0
    }
    t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status)
}
function d5(e, t) {
    let n = {};
    e.status === "ok" && (n = {
        status: "exited"
    }),
    ro(e, n)
}
function p5(e) {
    return ft({
        sid: `${e.sid}`,
        init: e.init,
        started: new Date(e.started * 1e3).toISOString(),
        timestamp: new Date(e.timestamp * 1e3).toISOString(),
        status: e.status,
        errors: e.errors,
        did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
        duration: e.duration,
        abnormal_mechanism: e.abnormal_mechanism,
        attrs: {
            release: e.release,
            environment: e.environment,
            ip_address: e.ipAddress,
            user_agent: e.userAgent
        }
    })
}
const $f = "_sentrySpan";
function fi(e, t) {
    t ? nn(e, $f, t) : delete e[$f]
}
function Ja(e) {
    return e[$f]
}
const h5 = 100;
class Id {
    constructor() {
        this._notifyingListeners = !1,
        this._scopeListeners = [],
        this._eventProcessors = [],
        this._breadcrumbs = [],
        this._attachments = [],
        this._user = {},
        this._tags = {},
        this._extra = {},
        this._contexts = {},
        this._sdkProcessingMetadata = {},
        this._propagationContext = Ya()
    }
    clone() {
        const t = new Id;
        return t._breadcrumbs = [...this._breadcrumbs],
        t._tags = {
            ...this._tags
        },
        t._extra = {
            ...this._extra
        },
        t._contexts = {
            ...this._contexts
        },
        t._user = this._user,
        t._level = this._level,
        t._session = this._session,
        t._transactionName = this._transactionName,
        t._fingerprint = this._fingerprint,
        t._eventProcessors = [...this._eventProcessors],
        t._requestSession = this._requestSession,
        t._attachments = [...this._attachments],
        t._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        },
        t._propagationContext = {
            ...this._propagationContext
        },
        t._client = this._client,
        t._lastEventId = this._lastEventId,
        fi(t, Ja(this)),
        t
    }
    setClient(t) {
        this._client = t
    }
    setLastEventId(t) {
        this._lastEventId = t
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(t) {
        this._scopeListeners.push(t)
    }
    addEventProcessor(t) {
        return this._eventProcessors.push(t),
        this
    }
    setUser(t) {
        return this._user = t || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        },
        this._session && ro(this._session, {
            user: t
        }),
        this._notifyScopeListeners(),
        this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(t) {
        return this._requestSession = t,
        this
    }
    setTags(t) {
        return this._tags = {
            ...this._tags,
            ...t
        },
        this._notifyScopeListeners(),
        this
    }
    setTag(t, n) {
        return this._tags = {
            ...this._tags,
            [t]: n
        },
        this._notifyScopeListeners(),
        this
    }
    setExtras(t) {
        return this._extra = {
            ...this._extra,
            ...t
        },
        this._notifyScopeListeners(),
        this
    }
    setExtra(t, n) {
        return this._extra = {
            ...this._extra,
            [t]: n
        },
        this._notifyScopeListeners(),
        this
    }
    setFingerprint(t) {
        return this._fingerprint = t,
        this._notifyScopeListeners(),
        this
    }
    setLevel(t) {
        return this._level = t,
        this._notifyScopeListeners(),
        this
    }
    setTransactionName(t) {
        return this._transactionName = t,
        this._notifyScopeListeners(),
        this
    }
    setContext(t, n) {
        return n === null ? delete this._contexts[t] : this._contexts[t] = n,
        this._notifyScopeListeners(),
        this
    }
    setSession(t) {
        return t ? this._session = t : delete this._session,
        this._notifyScopeListeners(),
        this
    }
    getSession() {
        return this._session
    }
    update(t) {
        if (!t)
            return this;
        const n = typeof t == "function" ? t(this) : t
          , [r,s] = n instanceof wr ? [n.getScopeData(), n.getRequestSession()] : no(n) ? [t, t.requestSession] : []
          , {tags: o, extra: i, user: a, contexts: c, level: u, fingerprint: l=[], propagationContext: f} = r || {};
        return this._tags = {
            ...this._tags,
            ...o
        },
        this._extra = {
            ...this._extra,
            ...i
        },
        this._contexts = {
            ...this._contexts,
            ...c
        },
        a && Object.keys(a).length && (this._user = a),
        u && (this._level = u),
        l.length && (this._fingerprint = l),
        f && (this._propagationContext = f),
        s && (this._requestSession = s),
        this
    }
    clear() {
        return this._breadcrumbs = [],
        this._tags = {},
        this._extra = {},
        this._user = {},
        this._contexts = {},
        this._level = void 0,
        this._transactionName = void 0,
        this._fingerprint = void 0,
        this._requestSession = void 0,
        this._session = void 0,
        fi(this, void 0),
        this._attachments = [],
        this._propagationContext = Ya(),
        this._notifyScopeListeners(),
        this
    }
    addBreadcrumb(t, n) {
        const r = typeof n == "number" ? n : h5;
        if (r <= 0)
            return this;
        const s = {
            timestamp: Di(),
            ...t
        }
          , o = this._breadcrumbs;
        return o.push(s),
        this._breadcrumbs = o.length > r ? o.slice(-r) : o,
        this._notifyScopeListeners(),
        this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [],
        this._notifyScopeListeners(),
        this
    }
    addAttachment(t) {
        return this._attachments.push(t),
        this
    }
    clearAttachments() {
        return this._attachments = [],
        this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: Ja(this)
        }
    }
    setSDKProcessingMetadata(t) {
        return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...t
        },
        this
    }
    setPropagationContext(t) {
        return this._propagationContext = t,
        this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(t, n) {
        const r = n && n.event_id ? n.event_id : Ke();
        if (!this._client)
            return V.warn("No client configured on scope - will not capture exception!"),
            r;
        const s = new Error("Sentry syntheticException");
        return this._client.captureException(t, {
            originalException: t,
            syntheticException: s,
            ...n,
            event_id: r
        }, this),
        r
    }
    captureMessage(t, n, r) {
        const s = r && r.event_id ? r.event_id : Ke();
        if (!this._client)
            return V.warn("No client configured on scope - will not capture message!"),
            s;
        const o = new Error(t);
        return this._client.captureMessage(t, n, {
            originalException: t,
            syntheticException: o,
            ...r,
            event_id: s
        }, this),
        s
    }
    captureEvent(t, n) {
        const r = n && n.event_id ? n.event_id : Ke();
        return this._client ? (this._client.captureEvent(t, {
            ...n,
            event_id: r
        }, this),
        r) : (V.warn("No client configured on scope - will not capture event!"),
        r)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0,
        this._scopeListeners.forEach(t => {
            t(this)
        }
        ),
        this._notifyingListeners = !1)
    }
}
const wr = Id;
function m5() {
    return wd("defaultCurrentScope", () => new wr)
}
function g5() {
    return wd("defaultIsolationScope", () => new wr)
}
class _5 {
    constructor(t, n) {
        let r;
        t ? r = t : r = new wr;
        let s;
        n ? s = n : s = new wr,
        this._stack = [{
            scope: r
        }],
        this._isolationScope = s
    }
    withScope(t) {
        const n = this._pushScope();
        let r;
        try {
            r = t(n)
        } catch (s) {
            throw this._popScope(),
            s
        }
        return Yc(r) ? r.then(s => (this._popScope(),
        s), s => {
            throw this._popScope(),
            s
        }
        ) : (this._popScope(),
        r)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const t = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: t
        }),
        t
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop()
    }
}
function so() {
    const e = xo()
      , t = Rd(e);
    return t.stack = t.stack || new _5(m5(),g5())
}
function x5(e) {
    return so().withScope(e)
}
function y5(e, t) {
    const n = so();
    return n.withScope( () => (n.getStackTop().scope = e,
    t(e)))
}
function ug(e) {
    return so().withScope( () => e(so().getIsolationScope()))
}
function v5() {
    return {
        withIsolationScope: ug,
        withScope: x5,
        withSetScope: y5,
        withSetIsolationScope: (e, t) => ug(t),
        getCurrentScope: () => so().getScope(),
        getIsolationScope: () => so().getIsolationScope()
    }
}
function Bi(e) {
    const t = Rd(e);
    return t.acs ? t.acs : v5()
}
function Ge() {
    const e = xo();
    return Bi(e).getCurrentScope()
}
function rn() {
    const e = xo();
    return Bi(e).getIsolationScope()
}
function E5() {
    return wd("globalScope", () => new wr)
}
function Dd(...e) {
    const t = xo()
      , n = Bi(t);
    if (e.length === 2) {
        const [r,s] = e;
        return r ? n.withSetScope(r, s) : n.withScope(s)
    }
    return n.withScope(e[0])
}
function Ce() {
    return Ge().getClient()
}
const b5 = "_sentryMetrics";
function Uf(e) {
    const t = e[b5];
    if (!t)
        return;
    const n = {};
    for (const [,[r,s]] of t)
        (n[r] || (n[r] = [])).push(ft(s));
    return n
}
const Jt = "sentry.source"
  , Av = "sentry.sample_rate"
  , di = "sentry.op"
  , Qe = "sentry.origin"
  , jf = "sentry.idle_span_finish_reason"
  , Bd = "sentry.measurement_unit"
  , Od = "sentry.measurement_value"
  , S5 = "sentry.profile_id"
  , Tv = "sentry.exclusive_time"
  , w5 = 0
  , kv = 1
  , at = 2;
function C5(e) {
    if (e < 400 && e >= 100)
        return {
            code: kv
        };
    if (e >= 400 && e < 500)
        switch (e) {
        case 401:
            return {
                code: at,
                message: "unauthenticated"
            };
        case 403:
            return {
                code: at,
                message: "permission_denied"
            };
        case 404:
            return {
                code: at,
                message: "not_found"
            };
        case 409:
            return {
                code: at,
                message: "already_exists"
            };
        case 413:
            return {
                code: at,
                message: "failed_precondition"
            };
        case 429:
            return {
                code: at,
                message: "resource_exhausted"
            };
        case 499:
            return {
                code: at,
                message: "cancelled"
            };
        default:
            return {
                code: at,
                message: "invalid_argument"
            }
        }
    if (e >= 500 && e < 600)
        switch (e) {
        case 501:
            return {
                code: at,
                message: "unimplemented"
            };
        case 503:
            return {
                code: at,
                message: "unavailable"
            };
        case 504:
            return {
                code: at,
                message: "deadline_exceeded"
            };
        default:
            return {
                code: at,
                message: "internal_error"
            }
        }
    return {
        code: at,
        message: "unknown_error"
    }
}
function Rv(e, t) {
    e.setAttribute("http.response.status_code", t);
    const n = C5(t);
    n.message !== "unknown_error" && e.setStatus(n)
}
const Iv = 0
  , Dv = 1;
function A5(e) {
    const {spanId: t, traceId: n} = e.spanContext()
      , {data: r, op: s, parent_span_id: o, status: i, origin: a} = Re(e);
    return ft({
        parent_span_id: o,
        span_id: t,
        trace_id: n,
        data: r,
        op: s,
        status: i,
        origin: a
    })
}
function T5(e) {
    const {spanId: t, traceId: n} = e.spanContext()
      , {parent_span_id: r} = Re(e);
    return ft({
        parent_span_id: r,
        span_id: t,
        trace_id: n
    })
}
function Bv(e) {
    const {traceId: t, spanId: n} = e.spanContext()
      , r = ys(e);
    return Td(t, n, r)
}
function Xr(e) {
    return typeof e == "number" ? lg(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? lg(e.getTime()) : vt()
}
function lg(e) {
    return e > 9999999999 ? e / 1e3 : e
}
function Re(e) {
    if (R5(e))
        return e.getSpanJSON();
    try {
        const {spanId: t, traceId: n} = e.spanContext();
        if (k5(e)) {
            const {attributes: r, startTime: s, name: o, endTime: i, parentSpanId: a, status: c} = e;
            return ft({
                span_id: t,
                trace_id: n,
                data: r,
                description: o,
                parent_span_id: a,
                start_timestamp: Xr(s),
                timestamp: Xr(i) || void 0,
                status: Ov(c),
                op: r[di],
                origin: r[Qe],
                _metrics_summary: Uf(e)
            })
        }
        return {
            span_id: t,
            trace_id: n
        }
    } catch {
        return {}
    }
}
function k5(e) {
    const t = e;
    return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
}
function R5(e) {
    return typeof e.getSpanJSON == "function"
}
function ys(e) {
    const {traceFlags: t} = e.spanContext();
    return t === Dv
}
function Ov(e) {
    if (!(!e || e.code === w5))
        return e.code === kv ? "ok" : e.message || "unknown_error"
}
const Yr = "_sentryChildSpans"
  , zf = "_sentryRootSpan";
function Fv(e, t) {
    const n = e[zf] || e;
    nn(t, zf, n),
    e[Yr] ? e[Yr].add(t) : nn(e, Yr, new Set([t]))
}
function I5(e, t) {
    e[Yr] && e[Yr].delete(t)
}
function Ca(e) {
    const t = new Set;
    function n(r) {
        if (!t.has(r) && ys(r)) {
            t.add(r);
            const s = r[Yr] ? Array.from(r[Yr]) : [];
            for (const o of s)
                n(o)
        }
    }
    return n(e),
    Array.from(t)
}
function mt(e) {
    return e[zf] || e
}
function dt() {
    const e = xo()
      , t = Bi(e);
    return t.getActiveSpan ? t.getActiveSpan() : Ja(Ge())
}
let fg = !1;
function D5() {
    fg || (fg = !0,
    gv(Wf),
    _v(Wf))
}
function Wf() {
    const e = dt()
      , t = e && mt(e);
    if (t) {
        const n = "internal_error";
        _e && V.log(`[Tracing] Root span: ${n} -> Global error occured`),
        t.setStatus({
            code: at,
            message: n
        })
    }
}
Wf.tag = "sentry_tracingErrorCallback";
const Pv = "_sentryScope"
  , Nv = "_sentryIsolationScope";
function B5(e, t, n) {
    e && (nn(e, Nv, n),
    nn(e, Pv, t))
}
function dg(e) {
    return {
        scope: e[Pv],
        isolationScope: e[Nv]
    }
}
function Kn(e) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
        return !1;
    const t = Ce()
      , n = e || t && t.getOptions();
    return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
}
class yo {
    constructor(t={}) {
        this._traceId = t.traceId || Ke(),
        this._spanId = t.spanId || Ke().substring(16)
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: Iv
        }
    }
    end(t) {}
    setAttribute(t, n) {
        return this
    }
    setAttributes(t) {
        return this
    }
    setStatus(t) {
        return this
    }
    updateName(t) {
        return this
    }
    isRecording() {
        return !1
    }
    addEvent(t, n, r) {
        return this
    }
    addLink(t) {
        return this
    }
    addLinks(t) {
        return this
    }
    recordException(t, n) {}
}
const Fd = "production"
  , Mv = "_frozenDsc";
function pg(e, t) {
    nn(e, Mv, t)
}
function Jc(e, t) {
    const n = t.getOptions()
      , {publicKey: r} = t.getDsn() || {}
      , s = ft({
        environment: n.environment || Fd,
        release: n.release,
        public_key: r,
        trace_id: e
    });
    return t.emit("createDsc", s),
    s
}
function vs(e) {
    const t = Ce();
    if (!t)
        return {};
    const n = Jc(Re(e).trace_id || "", t)
      , r = mt(e)
      , s = r[Mv];
    if (s)
        return s;
    const o = r.spanContext().traceState
      , i = o && o.get("sentry.dsc")
      , a = i && Ev(i);
    if (a)
        return a;
    const c = Re(r)
      , u = c.data || {}
      , l = u[Av];
    l != null && (n.sample_rate = `${l}`);
    const f = u[Jt]
      , d = c.description;
    return f !== "url" && d && (n.transaction = d),
    n.sampled = String(ys(r)),
    t.emit("createDsc", n, r),
    n
}
function O5(e) {
    if (!_e)
        return;
    const {description: t="< unknown name >", op: n="< unknown op >", parent_span_id: r} = Re(e)
      , {spanId: s} = e.spanContext()
      , o = ys(e)
      , i = mt(e)
      , a = i === e
      , c = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${a ? "root " : ""}span`
      , u = [`op: ${n}`, `name: ${t}`, `ID: ${s}`];
    if (r && u.push(`parent ID: ${r}`),
    !a) {
        const {op: l, description: f} = Re(i);
        u.push(`root ID: ${i.spanContext().spanId}`),
        l && u.push(`root op: ${l}`),
        f && u.push(`root description: ${f}`)
    }
    V.log(`${c}
  ${u.join(`
  `)}`)
}
function F5(e) {
    if (!_e)
        return;
    const {description: t="< unknown name >", op: n="< unknown op >"} = Re(e)
      , {spanId: r} = e.spanContext()
      , o = mt(e) === e
      , i = `[Tracing] Finishing "${n}" ${o ? "root " : ""}span "${t}" with ID ${r}`;
    V.log(i)
}
function Qa(e) {
    if (typeof e == "boolean")
        return Number(e);
    const t = typeof e == "string" ? parseFloat(e) : e;
    if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
        _e && V.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
        return
    }
    return t
}
function P5(e, t) {
    if (!Kn(e))
        return [!1];
    let n;
    typeof e.tracesSampler == "function" ? n = e.tracesSampler(t) : t.parentSampled !== void 0 ? n = t.parentSampled : typeof e.tracesSampleRate < "u" ? n = e.tracesSampleRate : n = 1;
    const r = Qa(n);
    return r === void 0 ? (_e && V.warn("[Tracing] Discarding transaction because of invalid sample rate."),
    [!1]) : r ? Math.random() < r ? [!0, r] : (_e && V.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`),
    [!1, r]) : (_e && V.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),
    [!1, r])
}
function N5(e, t) {
    return t && (e.sdk = e.sdk || {},
    e.sdk.name = e.sdk.name || t.name,
    e.sdk.version = e.sdk.version || t.version,
    e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
    e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []]),
    e
}
function M5(e, t, n, r) {
    const s = kd(n)
      , o = {
        sent_at: new Date().toISOString(),
        ...s && {
            sdk: s
        },
        ...!!r && t && {
            dsn: Ii(t)
        }
    }
      , i = "aggregates"in e ? [{
        type: "sessions"
    }, e] : [{
        type: "session"
    }, e.toJSON()];
    return xs(o, [i])
}
function L5(e, t, n, r) {
    const s = kd(n)
      , o = e.type && e.type !== "replay_event" ? e.type : "event";
    N5(e, n && n.sdk);
    const i = Sv(e, s, r, t);
    return delete e.sdkProcessingMetadata,
    xs(i, [[{
        type: o
    }, e]])
}
function H5(e, t) {
    function n(l) {
        return !!l.trace_id && !!l.public_key
    }
    const r = vs(e[0])
      , s = t && t.getDsn()
      , o = t && t.getOptions().tunnel
      , i = {
        sent_at: new Date().toISOString(),
        ...n(r) && {
            trace: r
        },
        ...!!o && s && {
            dsn: Ii(s)
        }
    }
      , a = t && t.getOptions().beforeSendSpan
      , c = a ? l => a(Re(l)) : l => Re(l)
      , u = [];
    for (const l of e) {
        const f = c(l);
        f && u.push(n5(f))
    }
    return xs(i, u)
}
function $5(e, t, n) {
    const r = dt()
      , s = r && mt(r);
    s && s.addEvent(e, {
        [Od]: t,
        [Bd]: n
    })
}
function hg(e) {
    if (!e || e.length === 0)
        return;
    const t = {};
    return e.forEach(n => {
        const r = n.attributes || {}
          , s = r[Bd]
          , o = r[Od];
        typeof s == "string" && typeof o == "number" && (t[n.name] = {
            value: o,
            unit: s
        })
    }
    ),
    t
}
const mg = 1e3;
class Pd {
    constructor(t={}) {
        this._traceId = t.traceId || Ke(),
        this._spanId = t.spanId || Ke().substring(16),
        this._startTime = t.startTimestamp || vt(),
        this._attributes = {},
        this.setAttributes({
            [Qe]: "manual",
            [di]: t.op,
            ...t.attributes
        }),
        this._name = t.name,
        t.parentSpanId && (this._parentSpanId = t.parentSpanId),
        "sampled"in t && (this._sampled = t.sampled),
        t.endTimestamp && (this._endTime = t.endTimestamp),
        this._events = [],
        this._isStandaloneSpan = t.isStandalone,
        this._endTime && this._onSpanEnded()
    }
    addLink(t) {
        return this
    }
    addLinks(t) {
        return this
    }
    recordException(t, n) {}
    spanContext() {
        const {_spanId: t, _traceId: n, _sampled: r} = this;
        return {
            spanId: t,
            traceId: n,
            traceFlags: r ? Dv : Iv
        }
    }
    setAttribute(t, n) {
        return n === void 0 ? delete this._attributes[t] : this._attributes[t] = n,
        this
    }
    setAttributes(t) {
        return Object.keys(t).forEach(n => this.setAttribute(n, t[n])),
        this
    }
    updateStartTime(t) {
        this._startTime = Xr(t)
    }
    setStatus(t) {
        return this._status = t,
        this
    }
    updateName(t) {
        return this._name = t,
        this
    }
    end(t) {
        this._endTime || (this._endTime = Xr(t),
        F5(this),
        this._onSpanEnded())
    }
    getSpanJSON() {
        return ft({
            data: this._attributes,
            description: this._name,
            op: this._attributes[di],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: Ov(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[Qe],
            _metrics_summary: Uf(this),
            profile_id: this._attributes[S5],
            exclusive_time: this._attributes[Tv],
            measurements: hg(this._events),
            is_segment: this._isStandaloneSpan && mt(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? mt(this).spanContext().spanId : void 0
        })
    }
    isRecording() {
        return !this._endTime && !!this._sampled
    }
    addEvent(t, n, r) {
        _e && V.log("[Tracing] Adding an event to span:", t);
        const s = gg(n) ? n : r || vt()
          , o = gg(n) ? {} : n || {}
          , i = {
            name: t,
            time: Xr(s),
            attributes: o
        };
        return this._events.push(i),
        this
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan
    }
    _onSpanEnded() {
        const t = Ce();
        if (t && t.emit("spanEnd", this),
        !(this._isStandaloneSpan || this === mt(this)))
            return;
        if (this._isStandaloneSpan) {
            this._sampled ? j5(H5([this], t)) : (_e && V.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
            t && t.recordDroppedEvent("sample_rate", "span"));
            return
        }
        const r = this._convertSpanToTransaction();
        r && (dg(this).scope || Ge()).captureEvent(r)
    }
    _convertSpanToTransaction() {
        if (!_g(Re(this)))
            return;
        this._name || (_e && V.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
        this._name = "<unlabeled transaction>");
        const {scope: t, isolationScope: n} = dg(this)
          , s = (t || Ge()).getClient() || Ce();
        if (this._sampled !== !0) {
            _e && V.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
            s && s.recordDroppedEvent("sample_rate", "transaction");
            return
        }
        const i = Ca(this).filter(f => f !== this && !U5(f)).map(f => Re(f)).filter(_g)
          , a = this._attributes[Jt]
          , c = {
            contexts: {
                trace: A5(this)
            },
            spans: i.length > mg ? i.sort( (f, d) => f.start_timestamp - d.start_timestamp).slice(0, mg) : i,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
                capturedSpanScope: t,
                capturedSpanIsolationScope: n,
                ...ft({
                    dynamicSamplingContext: vs(this)
                })
            },
            _metrics_summary: Uf(this),
            ...a && {
                transaction_info: {
                    source: a
                }
            }
        }
          , u = hg(this._events);
        return u && Object.keys(u).length && (_e && V.log("[Measurements] Adding measurements to transaction event", JSON.stringify(u, void 0, 2)),
        c.measurements = u),
        c
    }
}
function gg(e) {
    return e && typeof e == "number" || e instanceof Date || Array.isArray(e)
}
function _g(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}
function U5(e) {
    return e instanceof Pd && e.isStandaloneSpan()
}
function j5(e) {
    const t = Ce();
    if (!t)
        return;
    const n = e[1];
    if (!n || n.length === 0) {
        t.recordDroppedEvent("before_send", "span");
        return
    }
    const r = t.getTransport();
    r && r.send(e).then(null, s => {
        _e && V.error("Error while sending span:", s)
    }
    )
}
const Lv = "__SENTRY_SUPPRESS_TRACING__";
function Tn(e) {
    const t = $v();
    if (t.startInactiveSpan)
        return t.startInactiveSpan(e);
    const n = W5(e)
      , {forceTransaction: r, parentSpan: s} = e;
    return (e.scope ? i => Dd(e.scope, i) : s !== void 0 ? i => Hv(s, i) : i => i())( () => {
        const i = Ge()
          , a = V5(i);
        return e.onlyIfParent && !a ? new yo : z5({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: r,
            scope: i
        })
    }
    )
}
function Hv(e, t) {
    const n = $v();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : Dd(r => (fi(r, e || void 0),
    t(r)))
}
function z5({parentSpan: e, spanArguments: t, forceTransaction: n, scope: r}) {
    if (!Kn())
        return new yo;
    const s = rn();
    let o;
    if (e && !n)
        o = q5(e, r, t),
        Fv(e, o);
    else if (e) {
        const i = vs(e)
          , {traceId: a, spanId: c} = e.spanContext()
          , u = ys(e);
        o = xg({
            traceId: a,
            parentSpanId: c,
            ...t
        }, r, u),
        pg(o, i)
    } else {
        const {traceId: i, dsc: a, parentSpanId: c, sampled: u} = {
            ...s.getPropagationContext(),
            ...r.getPropagationContext()
        };
        o = xg({
            traceId: i,
            parentSpanId: c,
            ...t
        }, r, u),
        a && pg(o, a)
    }
    return O5(o),
    B5(o, r, s),
    o
}
function W5(e) {
    const n = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        const r = {
            ...n
        };
        return r.startTimestamp = Xr(e.startTime),
        delete r.startTime,
        r
    }
    return n
}
function $v() {
    const e = xo();
    return Bi(e)
}
function xg(e, t, n) {
    const r = Ce()
      , s = r && r.getOptions() || {}
      , {name: o="", attributes: i} = e
      , [a,c] = t.getScopeData().sdkProcessingMetadata[Lv] ? [!1] : P5(s, {
        name: o,
        parentSampled: n,
        attributes: i,
        transactionContext: {
            name: o,
            parentSampled: n
        }
    })
      , u = new Pd({
        ...e,
        attributes: {
            [Jt]: "custom",
            ...e.attributes
        },
        sampled: a
    });
    return c !== void 0 && u.setAttribute(Av, c),
    r && r.emit("spanStart", u),
    u
}
function q5(e, t, n) {
    const {spanId: r, traceId: s} = e.spanContext()
      , o = t.getScopeData().sdkProcessingMetadata[Lv] ? !1 : ys(e)
      , i = o ? new Pd({
        ...n,
        parentSpanId: r,
        traceId: s,
        sampled: o
    }) : new yo({
        traceId: s
    });
    Fv(e, i);
    const a = Ce();
    return a && (a.emit("spanStart", i),
    n.endTimestamp && a.emit("spanEnd", i)),
    i
}
function V5(e) {
    const t = Ja(e);
    if (!t)
        return;
    const n = Ce();
    return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? mt(t) : t
}
const Aa = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3
}
  , K5 = "heartbeatFailed"
  , G5 = "idleTimeout"
  , X5 = "finalTimeout"
  , Y5 = "externalFinish";
function Uv(e, t={}) {
    const n = new Map;
    let r = !1, s, o = Y5, i = !t.disableAutoFinish;
    const a = []
      , {idleTimeout: c=Aa.idleTimeout, finalTimeout: u=Aa.finalTimeout, childSpanTimeout: l=Aa.childSpanTimeout, beforeSpanEnd: f} = t
      , d = Ce();
    if (!d || !Kn())
        return new yo;
    const p = Ge()
      , m = dt()
      , h = J5(e);
    h.end = new Proxy(h.end,{
        apply(v, b, C) {
            f && f(h);
            const [I,...w] = C
              , T = I || vt()
              , R = Xr(T)
              , D = Ca(h).filter(H => H !== h);
            if (!D.length)
                return S(R),
                Reflect.apply(v, b, [R, ...w]);
            const z = D.map(H => Re(H).timestamp).filter(H => !!H)
              , X = z.length ? Math.max(...z) : void 0
              , O = Re(h).start_timestamp
              , Z = Math.min(O ? O + u / 1e3 : 1 / 0, Math.max(O || -1 / 0, Math.min(R, X || 1 / 0)));
            return S(Z),
            Reflect.apply(v, b, [Z, ...w])
        }
    });
    function g() {
        s && (clearTimeout(s),
        s = void 0)
    }
    function E(v) {
        g(),
        s = setTimeout( () => {
            !r && n.size === 0 && i && (o = G5,
            h.end(v))
        }
        , c)
    }
    function x(v) {
        s = setTimeout( () => {
            !r && i && (o = K5,
            h.end(v))
        }
        , l)
    }
    function _(v) {
        g(),
        n.set(v, !0);
        const b = vt();
        x(b + l / 1e3)
    }
    function y(v) {
        if (n.has(v) && n.delete(v),
        n.size === 0) {
            const b = vt();
            E(b + c / 1e3)
        }
    }
    function S(v) {
        r = !0,
        n.clear(),
        a.forEach(R => R()),
        fi(p, m);
        const b = Re(h)
          , {start_timestamp: C} = b;
        if (!C)
            return;
        (b.data || {})[jf] || h.setAttribute(jf, o),
        V.log(`[Tracing] Idle span "${b.op}" finished`);
        const w = Ca(h).filter(R => R !== h);
        let T = 0;
        w.forEach(R => {
            R.isRecording() && (R.setStatus({
                code: at,
                message: "cancelled"
            }),
            R.end(v),
            _e && V.log("[Tracing] Cancelling span since span ended early", JSON.stringify(R, void 0, 2)));
            const D = Re(R)
              , {timestamp: z=0, start_timestamp: X=0} = D
              , O = X <= v
              , Z = (u + c) / 1e3
              , H = z - X <= Z;
            if (_e) {
                const ie = JSON.stringify(R, void 0, 2);
                O ? H || V.log("[Tracing] Discarding span since it finished after idle span final timeout", ie) : V.log("[Tracing] Discarding span since it happened after idle span was finished", ie)
            }
            (!H || !O) && (I5(h, R),
            T++)
        }
        ),
        T > 0 && h.setAttribute("sentry.idle_span_discarded_spans", T)
    }
    return a.push(d.on("spanStart", v => {
        if (r || v === h || Re(v).timestamp)
            return;
        Ca(h).includes(v) && _(v.spanContext().spanId)
    }
    )),
    a.push(d.on("spanEnd", v => {
        r || y(v.spanContext().spanId)
    }
    )),
    a.push(d.on("idleSpanEnableAutoFinish", v => {
        v === h && (i = !0,
        E(),
        n.size && x())
    }
    )),
    t.disableAutoFinish || E(),
    setTimeout( () => {
        r || (h.setStatus({
            code: at,
            message: "deadline_exceeded"
        }),
        o = X5,
        h.end())
    }
    , u),
    h
}
function J5(e) {
    const t = Tn(e);
    return fi(Ge(), t),
    _e && V.log("[Tracing] Started span is an idle span"),
    t
}
function qf(e, t, n, r=0) {
    return new Yt( (s, o) => {
        const i = e[r];
        if (t === null || typeof i != "function")
            s(t);
        else {
            const a = i({
                ...t
            }, n);
            _e && i.id && a === null && V.log(`Event processor "${i.id}" dropped event`),
            Yc(a) ? a.then(c => qf(e, c, n, r + 1).then(s)).then(null, o) : qf(e, a, n, r + 1).then(s).then(null, o)
        }
    }
    )
}
function Q5(e, t) {
    const {fingerprint: n, span: r, breadcrumbs: s, sdkProcessingMetadata: o} = t;
    Z5(e, t),
    r && nD(e, r),
    rD(e, n),
    eD(e, s),
    tD(e, o)
}
function yg(e, t) {
    const {extra: n, tags: r, user: s, contexts: o, level: i, sdkProcessingMetadata: a, breadcrumbs: c, fingerprint: u, eventProcessors: l, attachments: f, propagationContext: d, transactionName: p, span: m} = t;
    Io(e, "extra", n),
    Io(e, "tags", r),
    Io(e, "user", s),
    Io(e, "contexts", o),
    Io(e, "sdkProcessingMetadata", a),
    i && (e.level = i),
    p && (e.transactionName = p),
    m && (e.span = m),
    c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
    u.length && (e.fingerprint = [...e.fingerprint, ...u]),
    l.length && (e.eventProcessors = [...e.eventProcessors, ...l]),
    f.length && (e.attachments = [...e.attachments, ...f]),
    e.propagationContext = {
        ...e.propagationContext,
        ...d
    }
}
function Io(e, t, n) {
    if (n && Object.keys(n).length) {
        e[t] = {
            ...e[t]
        };
        for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
    }
}
function Z5(e, t) {
    const {extra: n, tags: r, user: s, contexts: o, level: i, transactionName: a} = t
      , c = ft(n);
    c && Object.keys(c).length && (e.extra = {
        ...c,
        ...e.extra
    });
    const u = ft(r);
    u && Object.keys(u).length && (e.tags = {
        ...u,
        ...e.tags
    });
    const l = ft(s);
    l && Object.keys(l).length && (e.user = {
        ...l,
        ...e.user
    });
    const f = ft(o);
    f && Object.keys(f).length && (e.contexts = {
        ...f,
        ...e.contexts
    }),
    i && (e.level = i),
    a && e.type !== "transaction" && (e.transaction = a)
}
function eD(e, t) {
    const n = [...e.breadcrumbs || [], ...t];
    e.breadcrumbs = n.length ? n : void 0
}
function tD(e, t) {
    e.sdkProcessingMetadata = {
        ...e.sdkProcessingMetadata,
        ...t
    }
}
function nD(e, t) {
    e.contexts = {
        trace: T5(t),
        ...e.contexts
    },
    e.sdkProcessingMetadata = {
        dynamicSamplingContext: vs(t),
        ...e.sdkProcessingMetadata
    };
    const n = mt(t)
      , r = Re(n).description;
    r && !e.transaction && e.type === "transaction" && (e.transaction = r)
}
function rD(e, t) {
    e.fingerprint = e.fingerprint ? Ad(e.fingerprint) : [],
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint
}
function jv(e, t, n, r, s, o) {
    const {normalizeDepth: i=3, normalizeMaxBreadth: a=1e3} = e
      , c = {
        ...t,
        event_id: t.event_id || n.event_id || Ke(),
        timestamp: t.timestamp || Di()
    }
      , u = n.integrations || e.integrations.map(g => g.name);
    sD(c, e),
    aD(c, u),
    s && s.emit("applyFrameMetadata", t),
    t.type === void 0 && oD(c, e.stackParser);
    const l = uD(r, n.captureContext);
    n.mechanism && li(c, n.mechanism);
    const f = s ? s.getEventProcessors() : []
      , d = E5().getScopeData();
    if (o) {
        const g = o.getScopeData();
        yg(d, g)
    }
    if (l) {
        const g = l.getScopeData();
        yg(d, g)
    }
    const p = [...n.attachments || [], ...d.attachments];
    p.length && (n.attachments = p),
    Q5(c, d);
    const m = [...f, ...d.eventProcessors];
    return qf(m, c, n).then(g => (g && iD(g),
    typeof i == "number" && i > 0 ? cD(g, i, a) : g))
}
function sD(e, t) {
    const {environment: n, release: r, dist: s, maxValueLength: o=250} = t;
    "environment"in e || (e.environment = "environment"in t ? n : Fd),
    e.release === void 0 && r !== void 0 && (e.release = r),
    e.dist === void 0 && s !== void 0 && (e.dist = s),
    e.message && (e.message = $s(e.message, o));
    const i = e.exception && e.exception.values && e.exception.values[0];
    i && i.value && (i.value = $s(i.value, o));
    const a = e.request;
    a && a.url && (a.url = $s(a.url, o))
}
const vg = new WeakMap;
function oD(e, t) {
    const n = we._sentryDebugIds;
    if (!n)
        return;
    let r;
    const s = vg.get(t);
    s ? r = s : (r = new Map,
    vg.set(t, r));
    const o = Object.entries(n).reduce( (i, [a,c]) => {
        let u;
        const l = r.get(a);
        l ? u = l : (u = t(a),
        r.set(a, u));
        for (let f = u.length - 1; f >= 0; f--) {
            const d = u[f];
            if (d.filename) {
                i[d.filename] = c;
                break
            }
        }
        return i
    }
    , {});
    try {
        e.exception.values.forEach(i => {
            i.stacktrace.frames.forEach(a => {
                a.filename && (a.debug_id = o[a.filename])
            }
            )
        }
        )
    } catch {}
}
function iD(e) {
    const t = {};
    try {
        e.exception.values.forEach(r => {
            r.stacktrace.frames.forEach(s => {
                s.debug_id && (s.abs_path ? t[s.abs_path] = s.debug_id : s.filename && (t[s.filename] = s.debug_id),
                delete s.debug_id)
            }
            )
        }
        )
    } catch {}
    if (Object.keys(t).length === 0)
        return;
    e.debug_meta = e.debug_meta || {},
    e.debug_meta.images = e.debug_meta.images || [];
    const n = e.debug_meta.images;
    Object.entries(t).forEach( ([r,s]) => {
        n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: s
        })
    }
    )
}
function aD(e, t) {
    t.length > 0 && (e.sdk = e.sdk || {},
    e.sdk.integrations = [...e.sdk.integrations || [], ...t])
}
function cD(e, t, n) {
    if (!e)
        return null;
    const r = {
        ...e,
        ...e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map(s => ({
                ...s,
                ...s.data && {
                    data: vn(s.data, t, n)
                }
            }))
        },
        ...e.user && {
            user: vn(e.user, t, n)
        },
        ...e.contexts && {
            contexts: vn(e.contexts, t, n)
        },
        ...e.extra && {
            extra: vn(e.extra, t, n)
        }
    };
    return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
    e.contexts.trace.data && (r.contexts.trace.data = vn(e.contexts.trace.data, t, n))),
    e.spans && (r.spans = e.spans.map(s => ({
        ...s,
        ...s.data && {
            data: vn(s.data, t, n)
        }
    }))),
    r
}
function uD(e, t) {
    if (!t)
        return e;
    const n = e ? e.clone() : new wr;
    return n.update(t),
    n
}
function lD(e) {
    if (e)
        return fD(e) ? {
            captureContext: e
        } : pD(e) ? {
            captureContext: e
        } : e
}
function fD(e) {
    return e instanceof wr || typeof e == "function"
}
const dD = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
function pD(e) {
    return Object.keys(e).some(t => dD.includes(t))
}
function Oi(e, t) {
    return Ge().captureException(e, lD(t))
}
function zv(e, t) {
    return Ge().captureEvent(e, t)
}
function hD(e, t) {
    rn().setContext(e, t)
}
function mD(e) {
    rn().addEventProcessor(e)
}
function Eg(e) {
    const t = Ce()
      , n = rn()
      , r = Ge()
      , {release: s, environment: o=Fd} = t && t.getOptions() || {}
      , {userAgent: i} = we.navigator || {}
      , a = f5({
        release: s,
        environment: o,
        user: r.getUser() || n.getUser(),
        ...i && {
            userAgent: i
        },
        ...e
    })
      , c = n.getSession();
    return c && c.status === "ok" && ro(c, {
        status: "exited"
    }),
    Wv(),
    n.setSession(a),
    r.setSession(a),
    a
}
function Wv() {
    const e = rn()
      , t = Ge()
      , n = t.getSession() || e.getSession();
    n && d5(n),
    qv(),
    e.setSession(),
    t.setSession()
}
function qv() {
    const e = rn()
      , t = Ge()
      , n = Ce()
      , r = t.getSession() || e.getSession();
    r && n && n.captureSession(r)
}
function bg(e=!1) {
    if (e) {
        Wv();
        return
    }
    qv()
}
const gD = "7";
function _D(e) {
    const t = e.protocol ? `${e.protocol}:` : ""
      , n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
}
function xD(e) {
    return `${_D(e)}${e.projectId}/envelope/`
}
function yD(e, t) {
    return yI({
        sentry_key: e.publicKey,
        sentry_version: gD,
        ...t && {
            sentry_client: `${t.name}/${t.version}`
        }
    })
}
function vD(e, t, n) {
    return t || `${xD(e)}?${yD(e, n)}`
}
const Sg = [];
function ED(e) {
    const t = {};
    return e.forEach(n => {
        const {name: r} = n
          , s = t[r];
        s && !s.isDefaultInstance && n.isDefaultInstance || (t[r] = n)
    }
    ),
    Object.values(t)
}
function bD(e) {
    const t = e.defaultIntegrations || []
      , n = e.integrations;
    t.forEach(i => {
        i.isDefaultInstance = !0
    }
    );
    let r;
    Array.isArray(n) ? r = [...t, ...n] : typeof n == "function" ? r = Ad(n(t)) : r = t;
    const s = ED(r)
      , o = s.findIndex(i => i.name === "Debug");
    if (o > -1) {
        const [i] = s.splice(o, 1);
        s.push(i)
    }
    return s
}
function SD(e, t) {
    const n = {};
    return t.forEach(r => {
        r && Vv(e, r, n)
    }
    ),
    n
}
function wg(e, t) {
    for (const n of t)
        n && n.afterAllSetup && n.afterAllSetup(e)
}
function Vv(e, t, n) {
    if (n[t.name]) {
        _e && V.log(`Integration skipped because it was already installed: ${t.name}`);
        return
    }
    if (n[t.name] = t,
    Sg.indexOf(t.name) === -1 && typeof t.setupOnce == "function" && (t.setupOnce(),
    Sg.push(t.name)),
    t.setup && typeof t.setup == "function" && t.setup(e),
    typeof t.preprocessEvent == "function") {
        const r = t.preprocessEvent.bind(t);
        e.on("preprocessEvent", (s, o) => r(s, o, e))
    }
    if (typeof t.processEvent == "function") {
        const r = t.processEvent.bind(t)
          , s = Object.assign( (o, i) => r(o, i, e), {
            id: t.name
        });
        e.addEventProcessor(s)
    }
    _e && V.log(`Integration installed: ${t.name}`)
}
const Cg = "Not capturing exception because it's already been captured.";
class wD {
    constructor(t) {
        if (this._options = t,
        this._integrations = {},
        this._numProcessing = 0,
        this._outcomes = {},
        this._hooks = {},
        this._eventProcessors = [],
        t.dsn ? this._dsn = xI(t.dsn) : _e && V.warn("No DSN provided, client will not send events."),
        this._dsn) {
            const n = vD(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
            this._transport = t.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...t.transportOptions,
                url: n
            })
        }
    }
    captureException(t, n, r) {
        const s = Ke();
        if (og(t))
            return _e && V.log(Cg),
            s;
        const o = {
            event_id: s,
            ...n
        };
        return this._process(this.eventFromException(t, o).then(i => this._captureEvent(i, o, r))),
        o.event_id
    }
    captureMessage(t, n, r, s) {
        const o = {
            event_id: Ke(),
            ...r
        }
          , i = bd(t) ? t : String(t)
          , a = Sd(t) ? this.eventFromMessage(i, n, o) : this.eventFromException(t, o);
        return this._process(a.then(c => this._captureEvent(c, o, s))),
        o.event_id
    }
    captureEvent(t, n, r) {
        const s = Ke();
        if (n && n.originalException && og(n.originalException))
            return _e && V.log(Cg),
            s;
        const o = {
            event_id: s,
            ...n
        }
          , a = (t.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(t, o, a || r)),
        o.event_id
    }
    captureSession(t) {
        typeof t.release != "string" ? _e && V.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
        ro(t, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(t) {
        const n = this._transport;
        return n ? (this.emit("flush"),
        this._isClientDoneProcessing(t).then(r => n.flush(t).then(s => r && s))) : Vn(!0)
    }
    close(t) {
        return this.flush(t).then(n => (this.getOptions().enabled = !1,
        this.emit("close"),
        n))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(t) {
        this._eventProcessors.push(t)
    }
    init() {
        this._isEnabled() && this._setupIntegrations()
    }
    getIntegrationByName(t) {
        return this._integrations[t]
    }
    addIntegration(t) {
        const n = this._integrations[t.name];
        Vv(this, t, this._integrations),
        n || wg(this, [t])
    }
    sendEvent(t, n={}) {
        this.emit("beforeSendEvent", t, n);
        let r = L5(t, this._dsn, this._options._metadata, this._options.tunnel);
        for (const o of n.attachments || [])
            r = ZI(r, r5(o));
        const s = this.sendEnvelope(r);
        s && s.then(o => this.emit("afterSendEvent", t, o), null)
    }
    sendSession(t) {
        const n = M5(t, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(n)
    }
    recordDroppedEvent(t, n, r) {
        if (this._options.sendClientReports) {
            const s = typeof r == "number" ? r : 1
              , o = `${t}:${n}`;
            _e && V.log(`Recording outcome: "${o}"${s > 1 ? ` (${s} times)` : ""}`),
            this._outcomes[o] = (this._outcomes[o] || 0) + s
        }
    }
    on(t, n) {
        const r = this._hooks[t] = this._hooks[t] || [];
        return r.push(n),
        () => {
            const s = r.indexOf(n);
            s > -1 && r.splice(s, 1)
        }
    }
    emit(t, ...n) {
        const r = this._hooks[t];
        r && r.forEach(s => s(...n))
    }
    sendEnvelope(t) {
        return this.emit("beforeEnvelope", t),
        this._isEnabled() && this._transport ? this._transport.send(t).then(null, n => (_e && V.error("Error while sending event:", n),
        n)) : (_e && V.error("Transport disabled"),
        Vn({}))
    }
    _setupIntegrations() {
        const {integrations: t} = this._options;
        this._integrations = SD(this, t),
        wg(this, t)
    }
    _updateSessionFromEvent(t, n) {
        let r = !1
          , s = !1;
        const o = n.exception && n.exception.values;
        if (o) {
            s = !0;
            for (const c of o) {
                const u = c.mechanism;
                if (u && u.handled === !1) {
                    r = !0;
                    break
                }
            }
        }
        const i = t.status === "ok";
        (i && t.errors === 0 || i && r) && (ro(t, {
            ...r && {
                status: "crashed"
            },
            errors: t.errors || Number(s || r)
        }),
        this.captureSession(t))
    }
    _isClientDoneProcessing(t) {
        return new Yt(n => {
            let r = 0;
            const s = 1
              , o = setInterval( () => {
                this._numProcessing == 0 ? (clearInterval(o),
                n(!0)) : (r += s,
                t && r >= t && (clearInterval(o),
                n(!1)))
            }
            , s)
        }
        )
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(t, n, r, s=rn()) {
        const o = this.getOptions()
          , i = Object.keys(this._integrations);
        return !n.integrations && i.length > 0 && (n.integrations = i),
        this.emit("preprocessEvent", t, n),
        t.type || s.setLastEventId(t.event_id || n.event_id),
        jv(o, t, n, r, this, s).then(a => {
            if (a === null)
                return a;
            const c = {
                ...s.getPropagationContext(),
                ...r ? r.getPropagationContext() : void 0
            };
            if (!(a.contexts && a.contexts.trace) && c) {
                const {traceId: l, spanId: f, parentSpanId: d, dsc: p} = c;
                a.contexts = {
                    trace: ft({
                        trace_id: l,
                        span_id: f,
                        parent_span_id: d
                    }),
                    ...a.contexts
                };
                const m = p || Jc(l, this);
                a.sdkProcessingMetadata = {
                    dynamicSamplingContext: m,
                    ...a.sdkProcessingMetadata
                }
            }
            return a
        }
        )
    }
    _captureEvent(t, n={}, r) {
        return this._processEvent(t, n, r).then(s => s.event_id, s => {
            if (_e) {
                const o = s;
                o.logLevel === "log" ? V.log(o.message) : V.warn(o)
            }
        }
        )
    }
    _processEvent(t, n, r) {
        const s = this.getOptions()
          , {sampleRate: o} = s
          , i = Gv(t)
          , a = Kv(t)
          , c = t.type || "error"
          , u = `before send for type \`${c}\``
          , l = typeof o > "u" ? void 0 : Qa(o);
        if (a && typeof l == "number" && Math.random() > l)
            return this.recordDroppedEvent("sample_rate", "error", t),
            Xa(new bn(`Discarding event because it's not included in the random sample (sampling rate = ${o})`,"log"));
        const f = c === "replay_event" ? "replay" : c
          , p = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(t, n, r, p).then(m => {
            if (m === null)
                throw this.recordDroppedEvent("event_processor", f, t),
                new bn("An event processor returned `null`, will not send event.","log");
            if (n.data && n.data.__sentry__ === !0)
                return m;
            const g = AD(this, s, m, n);
            return CD(g, u)
        }
        ).then(m => {
            if (m === null) {
                if (this.recordDroppedEvent("before_send", f, t),
                i) {
                    const x = 1 + (t.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", x)
                }
                throw new bn(`${u} returned \`null\`, will not send event.`,"log")
            }
            const h = r && r.getSession();
            if (!i && h && this._updateSessionFromEvent(h, m),
            i) {
                const E = m.sdkProcessingMetadata && m.sdkProcessingMetadata.spanCountBeforeProcessing || 0
                  , x = m.spans ? m.spans.length : 0
                  , _ = E - x;
                _ > 0 && this.recordDroppedEvent("before_send", "span", _)
            }
            const g = m.transaction_info;
            if (i && g && m.transaction !== t.transaction) {
                const E = "custom";
                m.transaction_info = {
                    ...g,
                    source: E
                }
            }
            return this.sendEvent(m, n),
            m
        }
        ).then(null, m => {
            throw m instanceof bn ? m : (this.captureException(m, {
                data: {
                    __sentry__: !0
                },
                originalException: m
            }),
            new bn(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`))
        }
        )
    }
    _process(t) {
        this._numProcessing++,
        t.then(n => (this._numProcessing--,
        n), n => (this._numProcessing--,
        n))
    }
    _clearOutcomes() {
        const t = this._outcomes;
        return this._outcomes = {},
        Object.entries(t).map( ([n,r]) => {
            const [s,o] = n.split(":");
            return {
                reason: s,
                category: o,
                quantity: r
            }
        }
        )
    }
    _flushOutcomes() {
        _e && V.log("Flushing outcomes...");
        const t = this._clearOutcomes();
        if (t.length === 0) {
            _e && V.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            _e && V.log("No dsn provided, will not send outcomes");
            return
        }
        _e && V.log("Sending outcomes:", t);
        const n = o5(t, this._options.tunnel && Ii(this._dsn));
        this.sendEnvelope(n)
    }
}
function CD(e, t) {
    const n = `${t} must return \`null\` or a valid event.`;
    if (Yc(e))
        return e.then(r => {
            if (!no(r) && r !== null)
                throw new bn(n);
            return r
        }
        , r => {
            throw new bn(`${t} rejected with ${r}`)
        }
        );
    if (!no(e) && e !== null)
        throw new bn(n);
    return e
}
function AD(e, t, n, r) {
    const {beforeSend: s, beforeSendTransaction: o, beforeSendSpan: i} = t;
    if (Kv(n) && s)
        return s(n, r);
    if (Gv(n)) {
        if (n.spans && i) {
            const a = [];
            for (const c of n.spans) {
                const u = i(c);
                u ? a.push(u) : e.recordDroppedEvent("before_send", "span")
            }
            n.spans = a
        }
        if (o) {
            if (n.spans) {
                const a = n.spans.length;
                n.sdkProcessingMetadata = {
                    ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: a
                }
            }
            return o(n, r)
        }
    }
    return n
}
function Kv(e) {
    return e.type === void 0
}
function Gv(e) {
    return e.type === "transaction"
}
function TD(e, t) {
    t.debug === !0 && (_e ? V.enable() : Xn( () => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    }
    )),
    Ge().update(t.initialScope);
    const r = new e(t);
    return kD(r),
    r.init(),
    r
}
function kD(e) {
    Ge().setClient(e)
}
const RD = 64;
function ID(e, t, n=zI(e.bufferSize || RD)) {
    let r = {};
    const s = i => n.drain(i);
    function o(i) {
        const a = [];
        if (ag(i, (f, d) => {
            const p = cg(d);
            if (wv(r, p)) {
                const m = Ag(f, d);
                e.recordDroppedEvent("ratelimit_backoff", p, m)
            } else
                a.push(f)
        }
        ),
        a.length === 0)
            return Vn({});
        const c = xs(i[0], a)
          , u = f => {
            ag(c, (d, p) => {
                const m = Ag(d, p);
                e.recordDroppedEvent(f, cg(p), m)
            }
            )
        }
          , l = () => t({
            body: e5(c)
        }).then(f => (f.statusCode !== void 0 && (f.statusCode < 200 || f.statusCode >= 300) && _e && V.warn(`Sentry responded with status code ${f.statusCode} to sent event.`),
        r = Cv(r, f),
        f), f => {
            throw u("network_error"),
            f
        }
        );
        return n.add(l).then(f => f, f => {
            if (f instanceof bn)
                return _e && V.error("Skipped sending event because buffer is full."),
                u("queue_overflow"),
                Vn({});
            throw f
        }
        )
    }
    return {
        send: o,
        flush: s
    }
}
function Ag(e, t) {
    if (!(t !== "event" && t !== "transaction"))
        return Array.isArray(e) ? e[1] : void 0
}
function DD(e, t) {
    const n = t && t.getDsn()
      , r = t && t.getOptions().tunnel;
    return OD(e, n) || BD(e, r)
}
function BD(e, t) {
    return t ? Tg(e) === Tg(t) : !1
}
function OD(e, t) {
    return t ? e.includes(t.host) : !1
}
function Tg(e) {
    return e[e.length - 1] === "/" ? e.slice(0, -1) : e
}
function FD(e, t, n=[t], r="npm") {
    const s = e._metadata || {};
    s.sdk || (s.sdk = {
        name: `sentry.javascript.${t}`,
        packages: n.map(o => ({
            name: `${r}:@sentry/${o}`,
            version: jn
        })),
        version: jn
    }),
    e._metadata = s
}
const PD = 100;
function Cr(e, t) {
    const n = Ce()
      , r = rn();
    if (!n)
        return;
    const {beforeBreadcrumb: s=null, maxBreadcrumbs: o=PD} = n.getOptions();
    if (o <= 0)
        return;
    const a = {
        timestamp: Di(),
        ...e
    }
      , c = s ? Xn( () => s(a, t)) : a;
    c !== null && (n.emit && n.emit("beforeAddBreadcrumb", c, t),
    r.addBreadcrumb(c, o))
}
let kg;
const ND = "FunctionToString"
  , Rg = new WeakMap
  , MD = () => ({
    name: ND,
    setupOnce() {
        kg = Function.prototype.toString;
        try {
            Function.prototype.toString = function(...e) {
                const t = Cd(this)
                  , n = Rg.has(Ce()) && t !== void 0 ? t : this;
                return kg.apply(n, e)
            }
        } catch {}
    },
    setup(e) {
        Rg.set(e, !0)
    }
})
  , LD = MD
  , HD = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"]
  , $D = "InboundFilters"
  , UD = (e={}) => ({
    name: $D,
    processEvent(t, n, r) {
        const s = r.getOptions()
          , o = zD(e, s);
        return WD(t, o) ? null : t
    }
})
  , jD = UD;
function zD(e={}, t={}) {
    return {
        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : HD],
        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
        ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
    }
}
function WD(e, t) {
    return t.ignoreInternal && YD(e) ? (_e && V.warn(`Event dropped due to being internal Sentry Error.
Event: ${lr(e)}`),
    !0) : qD(e, t.ignoreErrors) ? (_e && V.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${lr(e)}`),
    !0) : QD(e) ? (_e && V.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${lr(e)}`),
    !0) : VD(e, t.ignoreTransactions) ? (_e && V.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${lr(e)}`),
    !0) : KD(e, t.denyUrls) ? (_e && V.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${lr(e)}.
Url: ${Za(e)}`),
    !0) : GD(e, t.allowUrls) ? !1 : (_e && V.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${lr(e)}.
Url: ${Za(e)}`),
    !0)
}
function qD(e, t) {
    return e.type || !t || !t.length ? !1 : XD(e).some(n => xr(n, t))
}
function VD(e, t) {
    if (e.type !== "transaction" || !t || !t.length)
        return !1;
    const n = e.transaction;
    return n ? xr(n, t) : !1
}
function KD(e, t) {
    if (!t || !t.length)
        return !1;
    const n = Za(e);
    return n ? xr(n, t) : !1
}
function GD(e, t) {
    if (!t || !t.length)
        return !0;
    const n = Za(e);
    return n ? xr(n, t) : !0
}
function XD(e) {
    const t = [];
    e.message && t.push(e.message);
    let n;
    try {
        n = e.exception.values[e.exception.values.length - 1]
    } catch {}
    return n && n.value && (t.push(n.value),
    n.type && t.push(`${n.type}: ${n.value}`)),
    t
}
function YD(e) {
    try {
        return e.exception.values[0].type === "SentryError"
    } catch {}
    return !1
}
function JD(e=[]) {
    for (let t = e.length - 1; t >= 0; t--) {
        const n = e[t];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
            return n.filename || null
    }
    return null
}
function Za(e) {
    try {
        let t;
        try {
            t = e.exception.values[0].stacktrace.frames
        } catch {}
        return t ? JD(t) : null
    } catch {
        return _e && V.error(`Cannot extract url for event ${lr(e)}`),
        null
    }
}
function QD(e) {
    return e.type || !e.exception || !e.exception.values || e.exception.values.length === 0 ? !1 : !e.message && !e.exception.values.some(t => t.stacktrace || t.type && t.type !== "Error" || t.value)
}
const ZD = "Dedupe"
  , eB = () => {
    let e;
    return {
        name: ZD,
        processEvent(t) {
            if (t.type)
                return t;
            try {
                if (nB(t, e))
                    return _e && V.warn("Event dropped due to being a duplicate of previously captured event."),
                    null
            } catch {}
            return e = t
        }
    }
}
  , tB = eB;
function nB(e, t) {
    return t ? !!(rB(e, t) || sB(e, t)) : !1
}
function rB(e, t) {
    const n = e.message
      , r = t.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !Yv(e, t) || !Xv(e, t))
}
function sB(e, t) {
    const n = Ig(t)
      , r = Ig(e);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !Yv(e, t) || !Xv(e, t))
}
function Xv(e, t) {
    let n = tg(e)
      , r = tg(t);
    if (!n && !r)
        return !0;
    if (n && !r || !n && r || (n = n,
    r = r,
    r.length !== n.length))
        return !1;
    for (let s = 0; s < r.length; s++) {
        const o = r[s]
          , i = n[s];
        if (o.filename !== i.filename || o.lineno !== i.lineno || o.colno !== i.colno || o.function !== i.function)
            return !1
    }
    return !0
}
function Yv(e, t) {
    let n = e.fingerprint
      , r = t.fingerprint;
    if (!n && !r)
        return !0;
    if (n && !r || !n && r)
        return !1;
    n = n,
    r = r;
    try {
        return n.join("") === r.join("")
    } catch {
        return !1
    }
}
function Ig(e) {
    return e.exception && e.exception.values && e.exception.values[0]
}
function oB(e, t, n, r, s="auto.http.browser") {
    if (!e.fetchData)
        return;
    const o = Kn() && t(e.fetchData.url);
    if (e.endTimestamp && o) {
        const m = e.fetchData.__span;
        if (!m)
            return;
        const h = r[m];
        h && (cB(h, e),
        delete r[m]);
        return
    }
    const i = Ge()
      , a = Ce()
      , {method: c, url: u} = e.fetchData
      , l = aB(u)
      , f = l ? Gr(l).host : void 0
      , d = !!dt()
      , p = o && d ? Tn({
        name: `${c} ${u}`,
        attributes: {
            url: u,
            type: "fetch",
            "http.method": c,
            "http.url": l,
            "server.address": f,
            [Qe]: s,
            [di]: "http.client"
        }
    }) : new yo;
    if (e.fetchData.__span = p.spanContext().spanId,
    r[p.spanContext().spanId] = p,
    n(e.fetchData.url) && a) {
        const m = e.args[0];
        e.args[1] = e.args[1] || {};
        const h = e.args[1];
        h.headers = iB(m, a, i, h, Kn() && d ? p : void 0)
    }
    return p
}
function iB(e, t, n, r, s) {
    const o = rn()
      , {traceId: i, spanId: a, sampled: c, dsc: u} = {
        ...o.getPropagationContext(),
        ...n.getPropagationContext()
    }
      , l = s ? Bv(s) : Td(i, a, c)
      , f = bv(u || (s ? vs(s) : Jc(i, t)))
      , d = r.headers || (typeof Request < "u" && Wn(e, Request) ? e.headers : void 0);
    if (d)
        if (typeof Headers < "u" && Wn(d, Headers)) {
            const p = new Headers(d);
            return p.append("sentry-trace", l),
            f && p.append(Lf, f),
            p
        } else if (Array.isArray(d)) {
            const p = [...d, ["sentry-trace", l]];
            return f && p.push([Lf, f]),
            p
        } else {
            const p = "baggage"in d ? d.baggage : void 0
              , m = [];
            return Array.isArray(p) ? m.push(...p) : p && m.push(p),
            f && m.push(f),
            {
                ...d,
                "sentry-trace": l,
                baggage: m.length > 0 ? m.join(",") : void 0
            }
        }
    else
        return {
            "sentry-trace": l,
            baggage: f
        }
}
function aB(e) {
    try {
        return new URL(e).href
    } catch {
        return
    }
}
function cB(e, t) {
    if (t.response) {
        Rv(e, t.response.status);
        const n = t.response && t.response.headers && t.response.headers.get("content-length");
        if (n) {
            const r = parseInt(n);
            r > 0 && e.setAttribute("http.response_content_length", r)
        }
    } else
        t.error && e.setStatus({
            code: at,
            message: "internal_error"
        });
    e.end()
}
const he = we;
let Vf = 0;
function Jv() {
    return Vf > 0
}
function uB() {
    Vf++,
    setTimeout( () => {
        Vf--
    }
    )
}
function oo(e, t={}, n) {
    if (typeof e != "function")
        return e;
    try {
        const s = e.__sentry_wrapped__;
        if (s)
            return s;
        if (Cd(e))
            return e
    } catch {
        return e
    }
    const r = function() {
        const s = Array.prototype.slice.call(arguments);
        try {
            const o = s.map(i => oo(i, t));
            return e.apply(this, o)
        } catch (o) {
            throw uB(),
            Dd(i => {
                i.addEventProcessor(a => (t.mechanism && (Nf(a, void 0),
                li(a, t.mechanism)),
                a.extra = {
                    ...a.extra,
                    arguments: s
                },
                a)),
                Oi(o)
            }
            ),
            o
        }
    };
    try {
        for (const s in e)
            Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s])
    } catch {}
    cv(r, e),
    nn(e, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return e.name
            }
        })
    } catch {}
    return r
}
const pn = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Nd(e, t) {
    const n = Md(e, t)
      , r = {
        type: t && t.name,
        value: hB(t)
    };
    return n.length && (r.stacktrace = {
        frames: n
    }),
    r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
    r
}
function lB(e, t, n, r) {
    const s = Ce()
      , o = s && s.getOptions().normalizeDepth
      , i = yB(t)
      , a = {
        __serialized__: yv(t, o)
    };
    if (i)
        return {
            exception: {
                values: [Nd(e, i)]
            },
            extra: a
        };
    const c = {
        exception: {
            values: [{
                type: Xc(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                value: _B(t, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: a
    };
    if (n) {
        const u = Md(e, n);
        u.length && (c.exception.values[0].stacktrace = {
            frames: u
        })
    }
    return c
}
function Tl(e, t) {
    return {
        exception: {
            values: [Nd(e, t)]
        }
    }
}
function Md(e, t) {
    const n = t.stacktrace || t.stack || ""
      , r = dB(t)
      , s = pB(t);
    try {
        return e(n, r, s)
    } catch {}
    return []
}
const fB = /Minified React error #\d+;/i;
function dB(e) {
    return e && fB.test(e.message) ? 1 : 0
}
function pB(e) {
    return typeof e.framesToPop == "number" ? e.framesToPop : 0
}
function hB(e) {
    const t = e && e.message;
    return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
}
function mB(e, t, n, r) {
    const s = n && n.syntheticException || void 0
      , o = Ld(e, t, s, r);
    return li(o),
    o.level = "error",
    n && n.event_id && (o.event_id = n.event_id),
    Vn(o)
}
function gB(e, t, n="info", r, s) {
    const o = r && r.syntheticException || void 0
      , i = Kf(e, t, o, s);
    return i.level = n,
    r && r.event_id && (i.event_id = r.event_id),
    Vn(i)
}
function Ld(e, t, n, r, s) {
    let o;
    if (rv(t) && t.error)
        return Tl(e, t.error);
    if (Km(t) || nI(t)) {
        const i = t;
        if ("stack"in t)
            o = Tl(e, t);
        else {
            const a = i.name || (Km(i) ? "DOMError" : "DOMException")
              , c = i.message ? `${a}: ${i.message}` : a;
            o = Kf(e, c, n, r),
            Nf(o, c)
        }
        return "code"in i && (o.tags = {
            ...o.tags,
            "DOMException.code": `${i.code}`
        }),
        o
    }
    return Ed(t) ? Tl(e, t) : no(t) || Xc(t) ? (o = lB(e, t, n, s),
    li(o, {
        synthetic: !0
    }),
    o) : (o = Kf(e, t, n, r),
    Nf(o, `${t}`),
    li(o, {
        synthetic: !0
    }),
    o)
}
function Kf(e, t, n, r) {
    const s = {};
    if (r && n) {
        const o = Md(e, n);
        o.length && (s.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: o
                }
            }]
        })
    }
    if (bd(t)) {
        const {__sentry_template_string__: o, __sentry_template_values__: i} = t;
        return s.logentry = {
            message: o,
            params: i
        },
        s
    }
    return s.message = t,
    s
}
function _B(e, {isUnhandledRejection: t}) {
    const n = vI(e)
      , r = t ? "promise rejection" : "exception";
    return rv(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : Xc(e) ? `Event \`${xB(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}
function xB(e) {
    try {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : void 0
    } catch {}
}
function yB(e) {
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            const n = e[t];
            if (n instanceof Error)
                return n
        }
}
function vB(e, {metadata: t, tunnel: n, dsn: r}) {
    const s = {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...t && t.sdk && {
            sdk: {
                name: t.sdk.name,
                version: t.sdk.version
            }
        },
        ...!!n && !!r && {
            dsn: Ii(r)
        }
    }
      , o = EB(e);
    return xs(s, [o])
}
function EB(e) {
    return [{
        type: "user_report"
    }, e]
}
class bB extends wD {
    constructor(t) {
        const n = {
            parentSpanIsAlwaysRootSpan: !0,
            ...t
        }
          , r = he.SENTRY_SDK_SOURCE || PI();
        FD(n, "browser", ["browser"], r),
        super(n),
        n.sendClientReports && he.document && he.document.addEventListener("visibilitychange", () => {
            he.document.visibilityState === "hidden" && this._flushOutcomes()
        }
        )
    }
    eventFromException(t, n) {
        return mB(this._options.stackParser, t, n, this._options.attachStacktrace)
    }
    eventFromMessage(t, n="info", r) {
        return gB(this._options.stackParser, t, n, r, this._options.attachStacktrace)
    }
    captureUserFeedback(t) {
        if (!this._isEnabled()) {
            pn && V.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const n = vB(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(n)
    }
    _prepareEvent(t, n, r) {
        return t.platform = t.platform || "javascript",
        super._prepareEvent(t, n, r)
    }
}
const qt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , SB = (e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
  , vo = (e, t, n, r) => {
    let s, o;
    return i => {
        t.value >= 0 && (i || r) && (o = t.value - (s || 0),
        (o || s === void 0) && (s = t.value,
        t.delta = o,
        t.rating = SB(t.value, n),
        e(t)))
    }
}
  , de = we
  , wB = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`
  , Fi = () => de.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
  , Qc = () => {
    const e = Fi();
    return e && e.activationStart || 0
}
  , Eo = (e, t) => {
    const n = Fi();
    let r = "navigate";
    return n && (de.document && de.document.prerendering || Qc() > 0 ? r = "prerender" : de.document && de.document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))),
    {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: wB(),
        navigationType: r
    }
}
  , Es = (e, t, n) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const r = new PerformanceObserver(s => {
                Promise.resolve().then( () => {
                    t(s.getEntries())
                }
                )
            }
            );
            return r.observe(Object.assign({
                type: e,
                buffered: !0
            }, n || {})),
            r
        }
    } catch {}
}
  , Zc = e => {
    const t = n => {
        (n.type === "pagehide" || de.document && de.document.visibilityState === "hidden") && e(n)
    }
    ;
    de.document && (addEventListener("visibilitychange", t, !0),
    addEventListener("pagehide", t, !0))
}
  , Hd = e => {
    let t = !1;
    return n => {
        t || (e(n),
        t = !0)
    }
}
;
let pi = -1;
const CB = () => {
    pi = de.document.visibilityState === "hidden" && !de.document.prerendering ? 0 : 1 / 0
}
  , ec = e => {
    de.document.visibilityState === "hidden" && pi > -1 && (pi = e.type === "visibilitychange" ? e.timeStamp : 0,
    removeEventListener("visibilitychange", ec, !0),
    removeEventListener("prerenderingchange", ec, !0))
}
  , AB = () => {
    addEventListener("visibilitychange", ec, !0),
    addEventListener("prerenderingchange", ec, !0)
}
  , eu = () => (de.document && pi < 0 && (CB(),
AB()),
{
    get firstHiddenTime() {
        return pi
    }
})
  , Pi = e => {
    de.document && de.document.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
}
  , TB = [1800, 3e3]
  , kB = (e, t={}) => {
    Pi( () => {
        const n = eu()
          , r = Eo("FCP");
        let s;
        const i = Es("paint", a => {
            a.forEach(c => {
                c.name === "first-contentful-paint" && (i.disconnect(),
                c.startTime < n.firstHiddenTime && (r.value = Math.max(c.startTime - Qc(), 0),
                r.entries.push(c),
                s(!0)))
            }
            )
        }
        );
        i && (s = vo(e, r, TB, t.reportAllChanges))
    }
    )
}
  , RB = [.1, .25]
  , IB = (e, t={}) => {
    kB(Hd( () => {
        const n = Eo("CLS", 0);
        let r, s = 0, o = [];
        const i = c => {
            c.forEach(u => {
                if (!u.hadRecentInput) {
                    const l = o[0]
                      , f = o[o.length - 1];
                    s && l && f && u.startTime - f.startTime < 1e3 && u.startTime - l.startTime < 5e3 ? (s += u.value,
                    o.push(u)) : (s = u.value,
                    o = [u])
                }
            }
            ),
            s > n.value && (n.value = s,
            n.entries = o,
            r())
        }
          , a = Es("layout-shift", i);
        a && (r = vo(e, n, RB, t.reportAllChanges),
        Zc( () => {
            i(a.takeRecords()),
            r(!0)
        }
        ),
        setTimeout(r, 0))
    }
    ))
}
  , DB = [100, 300]
  , BB = (e, t={}) => {
    Pi( () => {
        const n = eu()
          , r = Eo("FID");
        let s;
        const o = c => {
            c.startTime < n.firstHiddenTime && (r.value = c.processingStart - c.startTime,
            r.entries.push(c),
            s(!0))
        }
          , i = c => {
            c.forEach(o)
        }
          , a = Es("first-input", i);
        s = vo(e, r, DB, t.reportAllChanges),
        a && Zc(Hd( () => {
            i(a.takeRecords()),
            a.disconnect()
        }
        ))
    }
    )
}
;
let Qv = 0
  , kl = 1 / 0
  , oa = 0;
const OB = e => {
    e.forEach(t => {
        t.interactionId && (kl = Math.min(kl, t.interactionId),
        oa = Math.max(oa, t.interactionId),
        Qv = oa ? (oa - kl) / 7 + 1 : 0)
    }
    )
}
;
let Gf;
const FB = () => Gf ? Qv : performance.interactionCount || 0
  , PB = () => {
    "interactionCount"in performance || Gf || (Gf = Es("event", OB, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }))
}
  , NB = [200, 500]
  , MB = 0
  , Zv = () => FB() - MB
  , Dg = 10
  , Fn = []
  , Rl = {}
  , Bg = e => {
    const t = Fn[Fn.length - 1]
      , n = Rl[e.interactionId];
    if (n || Fn.length < Dg || t && e.duration > t.latency) {
        if (n)
            n.entries.push(e),
            n.latency = Math.max(n.latency, e.duration);
        else {
            const r = {
                id: e.interactionId,
                latency: e.duration,
                entries: [e]
            };
            Rl[r.id] = r,
            Fn.push(r)
        }
        Fn.sort( (r, s) => s.latency - r.latency),
        Fn.splice(Dg).forEach(r => {
            delete Rl[r.id]
        }
        )
    }
}
  , LB = () => {
    const e = Math.min(Fn.length - 1, Math.floor(Zv() / 50));
    return Fn[e]
}
  , HB = (e, t={}) => {
    Pi( () => {
        PB();
        const n = Eo("INP");
        let r;
        const s = i => {
            i.forEach(c => {
                c.interactionId && Bg(c),
                c.entryType === "first-input" && !Fn.some(l => l.entries.some(f => c.duration === f.duration && c.startTime === f.startTime)) && Bg(c)
            }
            );
            const a = LB();
            a && a.latency !== n.value && (n.value = a.latency,
            n.entries = a.entries,
            r())
        }
          , o = Es("event", s, {
            durationThreshold: t.durationThreshold != null ? t.durationThreshold : 40
        });
        r = vo(e, n, NB, t.reportAllChanges),
        o && ("PerformanceEventTiming"in de && "interactionId"in PerformanceEventTiming.prototype && o.observe({
            type: "first-input",
            buffered: !0
        }),
        Zc( () => {
            s(o.takeRecords()),
            n.value < 0 && Zv() > 0 && (n.value = 0,
            n.entries = []),
            r(!0)
        }
        ))
    }
    )
}
  , $B = [2500, 4e3]
  , Og = {}
  , UB = (e, t={}) => {
    Pi( () => {
        const n = eu()
          , r = Eo("LCP");
        let s;
        const o = a => {
            const c = a[a.length - 1];
            c && c.startTime < n.firstHiddenTime && (r.value = Math.max(c.startTime - Qc(), 0),
            r.entries = [c],
            s())
        }
          , i = Es("largest-contentful-paint", o);
        if (i) {
            s = vo(e, r, $B, t.reportAllChanges);
            const a = Hd( () => {
                Og[r.id] || (o(i.takeRecords()),
                i.disconnect(),
                Og[r.id] = !0,
                s(!0))
            }
            );
            ["keydown", "click"].forEach(c => {
                de.document && addEventListener(c, () => setTimeout(a, 0), !0)
            }
            ),
            Zc(a)
        }
    }
    )
}
  , jB = [800, 1800]
  , Xf = e => {
    de.document && de.document.prerendering ? Pi( () => Xf(e)) : de.document && de.document.readyState !== "complete" ? addEventListener("load", () => Xf(e), !0) : setTimeout(e, 0)
}
  , zB = (e, t={}) => {
    const n = Eo("TTFB")
      , r = vo(e, n, jB, t.reportAllChanges);
    Xf( () => {
        const s = Fi();
        if (s) {
            const o = s.responseStart;
            if (o <= 0 || o > performance.now())
                return;
            n.value = Math.max(o - Qc(), 0),
            n.entries = [s],
            r(!0)
        }
    }
    )
}
  , Wo = {}
  , tc = {};
let eE, tE, nE, rE, sE;
function oE(e, t=!1) {
    return Ni("cls", e, qB, eE, t)
}
function iE(e, t=!1) {
    return Ni("lcp", e, KB, nE, t)
}
function aE(e) {
    return Ni("fid", e, VB, tE)
}
function WB(e) {
    return Ni("ttfb", e, GB, rE)
}
function cE(e) {
    return Ni("inp", e, XB, sE)
}
function io(e, t) {
    return uE(e, t),
    tc[e] || (YB(e),
    tc[e] = !0),
    lE(e, t)
}
function bo(e, t) {
    const n = Wo[e];
    if (!(!n || !n.length))
        for (const r of n)
            try {
                r(t)
            } catch (s) {
                qt && V.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${qn(r)}
Error:`, s)
            }
}
function qB() {
    return IB(e => {
        bo("cls", {
            metric: e
        }),
        eE = e
    }
    , {
        reportAllChanges: !0
    })
}
function VB() {
    return BB(e => {
        bo("fid", {
            metric: e
        }),
        tE = e
    }
    )
}
function KB() {
    return UB(e => {
        bo("lcp", {
            metric: e
        }),
        nE = e
    }
    , {
        reportAllChanges: !0
    })
}
function GB() {
    return zB(e => {
        bo("ttfb", {
            metric: e
        }),
        rE = e
    }
    )
}
function XB() {
    return HB(e => {
        bo("inp", {
            metric: e
        }),
        sE = e
    }
    )
}
function Ni(e, t, n, r, s=!1) {
    uE(e, t);
    let o;
    return tc[e] || (o = n(),
    tc[e] = !0),
    r && t({
        metric: r
    }),
    lE(e, t, s ? o : void 0)
}
function YB(e) {
    const t = {};
    e === "event" && (t.durationThreshold = 0),
    Es(e, n => {
        bo(e, {
            entries: n
        })
    }
    , t)
}
function uE(e, t) {
    Wo[e] = Wo[e] || [],
    Wo[e].push(t)
}
function lE(e, t, n) {
    return () => {
        n && n();
        const r = Wo[e];
        if (!r)
            return;
        const s = r.indexOf(t);
        s !== -1 && r.splice(s, 1)
    }
}
function JB(e) {
    return "duration"in e
}
function Il(e) {
    return typeof e == "number" && isFinite(e)
}
function ao(e, t, n, {...r}) {
    const s = Re(e).start_timestamp;
    return s && s > t && typeof e.updateStartTime == "function" && e.updateStartTime(t),
    Hv(e, () => {
        const o = Tn({
            startTime: t,
            ...r
        });
        return o && o.end(n),
        o
    }
    )
}
function $d() {
    return de && de.addEventListener && de.performance
}
function tt(e) {
    return e / 1e3
}
const QB = 2147483647;
let Fg = 0, ct = {}, xn, qo;
function ZB() {
    const e = $d();
    if (e && Pt) {
        e.mark && de.performance.mark("sentry-tracing-init");
        const t = oO()
          , n = rO()
          , r = sO()
          , s = iO();
        return () => {
            t(),
            n(),
            r(),
            s()
        }
    }
    return () => {}
}
function eO() {
    io("longtask", ({entries: e}) => {
        if (dt())
            for (const t of e) {
                const n = tt(Pt + t.startTime)
                  , r = tt(t.duration)
                  , s = Tn({
                    name: "Main UI thread blocked",
                    op: "ui.long-task",
                    startTime: n,
                    attributes: {
                        [Qe]: "auto.ui.browser.metrics"
                    }
                });
                s && s.end(n + r)
            }
    }
    )
}
function tO() {
    new PerformanceObserver(t => {
        if (dt())
            for (const n of t.getEntries()) {
                if (!n.scripts[0])
                    continue;
                const r = tt(Pt + n.startTime)
                  , s = tt(n.duration)
                  , o = {
                    [Qe]: "auto.ui.browser.metrics"
                }
                  , i = n.scripts[0]
                  , {invoker: a, invokerType: c, sourceURL: u, sourceFunctionName: l, sourceCharPosition: f} = i;
                o["browser.script.invoker"] = a,
                o["browser.script.invoker_type"] = c,
                u && (o["code.filepath"] = u),
                l && (o["code.function"] = l),
                f !== -1 && (o["browser.script.source_char_position"] = f);
                const d = Tn({
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    startTime: r,
                    attributes: o
                });
                d && d.end(r + s)
            }
    }
    ).observe({
        type: "long-animation-frame",
        buffered: !0
    })
}
function nO() {
    io("event", ({entries: e}) => {
        if (dt()) {
            for (const t of e)
                if (t.name === "click") {
                    const n = tt(Pt + t.startTime)
                      , r = tt(t.duration)
                      , s = {
                        name: Sr(t.target),
                        op: `ui.interaction.${t.name}`,
                        startTime: n,
                        attributes: {
                            [Qe]: "auto.ui.browser.metrics"
                        }
                    }
                      , o = iv(t.target);
                    o && (s.attributes["ui.component_name"] = o);
                    const i = Tn(s);
                    i && i.end(n + r)
                }
        }
    }
    )
}
function rO() {
    return oE( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        t && (qt && V.log("[Measurements] Adding CLS"),
        ct.cls = {
            value: e.value,
            unit: ""
        },
        qo = t)
    }
    , !0)
}
function sO() {
    return iE( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        t && (qt && V.log("[Measurements] Adding LCP"),
        ct.lcp = {
            value: e.value,
            unit: "millisecond"
        },
        xn = t)
    }
    , !0)
}
function oO() {
    return aE( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        if (!t)
            return;
        const n = tt(Pt)
          , r = tt(t.startTime);
        qt && V.log("[Measurements] Adding FID"),
        ct.fid = {
            value: e.value,
            unit: "millisecond"
        },
        ct["mark.fid"] = {
            value: n + r,
            unit: "second"
        }
    }
    )
}
function iO() {
    return WB( ({metric: e}) => {
        e.entries[e.entries.length - 1] && (qt && V.log("[Measurements] Adding TTFB"),
        ct.ttfb = {
            value: e.value,
            unit: "millisecond"
        })
    }
    )
}
function aO(e) {
    const t = $d();
    if (!t || !de.performance.getEntries || !Pt)
        return;
    qt && V.log("[Tracing] Adding & adjusting spans using Performance API");
    const n = tt(Pt)
      , r = t.getEntries()
      , {op: s, start_timestamp: o} = Re(e);
    if (r.slice(Fg).forEach(i => {
        const a = tt(i.startTime)
          , c = tt(Math.max(0, i.duration));
        if (!(s === "navigation" && o && n + a < o))
            switch (i.entryType) {
            case "navigation":
                {
                    uO(e, i, n);
                    break
                }
            case "mark":
            case "paint":
            case "measure":
                {
                    cO(e, i, a, c, n);
                    const u = eu()
                      , l = i.startTime < u.firstHiddenTime;
                    i.name === "first-paint" && l && (qt && V.log("[Measurements] Adding FP"),
                    ct.fp = {
                        value: i.startTime,
                        unit: "millisecond"
                    }),
                    i.name === "first-contentful-paint" && l && (qt && V.log("[Measurements] Adding FCP"),
                    ct.fcp = {
                        value: i.startTime,
                        unit: "millisecond"
                    });
                    break
                }
            case "resource":
                {
                    fO(e, i, i.name, a, c, n);
                    break
                }
            }
    }
    ),
    Fg = Math.max(r.length - 1, 0),
    dO(e),
    s === "pageload") {
        hO(ct),
        ["fcp", "fp", "lcp"].forEach(a => {
            const c = ct[a];
            if (!c || !o || n >= o)
                return;
            const u = c.value
              , l = n + tt(u)
              , f = Math.abs((l - o) * 1e3)
              , d = f - u;
            qt && V.log(`[Measurements] Normalized ${a} from ${u} to ${f} (${d})`),
            c.value = f
        }
        );
        const i = ct["mark.fid"];
        i && ct.fid && (ao(e, i.value, i.value + tt(ct.fid.value), {
            name: "first input delay",
            op: "ui.action",
            attributes: {
                [Qe]: "auto.ui.browser.metrics"
            }
        }),
        delete ct["mark.fid"]),
        "fcp"in ct || delete ct.cls,
        Object.entries(ct).forEach( ([a,c]) => {
            $5(a, c.value, c.unit)
        }
        ),
        pO(e)
    }
    xn = void 0,
    qo = void 0,
    ct = {}
}
function cO(e, t, n, r, s) {
    const o = Fi()
      , i = tt(o ? o.requestStart : 0)
      , a = s + Math.max(n, i)
      , c = s + n
      , u = c + r
      , l = {
        [Qe]: "auto.resource.browser.metrics"
    };
    return a !== c && (l["sentry.browser.measure_happened_before_request"] = !0,
    l["sentry.browser.measure_start_time"] = a),
    ao(e, a, u, {
        name: t.name,
        op: t.entryType,
        attributes: l
    }),
    a
}
function uO(e, t, n) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
        ia(e, t, r, n)
    }
    ),
    ia(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
    ia(e, t, "fetch", n, "cache", "domainLookupStart"),
    ia(e, t, "domainLookup", n, "DNS"),
    lO(e, t, n)
}
function ia(e, t, n, r, s, o) {
    const i = o ? t[o] : t[`${n}End`]
      , a = t[`${n}Start`];
    !a || !i || ao(e, r + tt(a), r + tt(i), {
        op: "browser",
        name: s || n,
        attributes: {
            [Qe]: "auto.ui.browser.metrics"
        }
    })
}
function lO(e, t, n) {
    const r = n + tt(t.requestStart)
      , s = n + tt(t.responseEnd)
      , o = n + tt(t.responseStart);
    t.responseEnd && (ao(e, r, s, {
        op: "browser",
        name: "request",
        attributes: {
            [Qe]: "auto.ui.browser.metrics"
        }
    }),
    ao(e, o, s, {
        op: "browser",
        name: "response",
        attributes: {
            [Qe]: "auto.ui.browser.metrics"
        }
    }))
}
function fO(e, t, n, r, s, o) {
    if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
        return;
    const i = Gr(n)
      , a = {
        [Qe]: "auto.resource.browser.metrics"
    };
    Dl(a, t, "transferSize", "http.response_transfer_size"),
    Dl(a, t, "encodedBodySize", "http.response_content_length"),
    Dl(a, t, "decodedBodySize", "http.decoded_response_content_length"),
    "renderBlockingStatus"in t && (a["resource.render_blocking_status"] = t.renderBlockingStatus),
    i.protocol && (a["url.scheme"] = i.protocol.split(":").pop()),
    i.host && (a["server.address"] = i.host),
    a["url.same_origin"] = n.includes(de.location.origin);
    const c = o + r
      , u = c + s;
    ao(e, c, u, {
        name: n.replace(de.location.origin, ""),
        op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
        attributes: a
    })
}
function dO(e) {
    const t = de.navigator;
    if (!t)
        return;
    const n = t.connection;
    n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType),
    n.type && e.setAttribute("connectionType", n.type),
    Il(n.rtt) && (ct["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
    })),
    Il(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
    Il(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
}
function pO(e) {
    xn && (qt && V.log("[Measurements] Adding LCP Data"),
    xn.element && e.setAttribute("lcp.element", Sr(xn.element)),
    xn.id && e.setAttribute("lcp.id", xn.id),
    xn.url && e.setAttribute("lcp.url", xn.url.trim().slice(0, 200)),
    e.setAttribute("lcp.size", xn.size)),
    qo && qo.sources && (qt && V.log("[Measurements] Adding CLS Data"),
    qo.sources.forEach( (t, n) => e.setAttribute(`cls.source.${n + 1}`, Sr(t.node))))
}
function Dl(e, t, n, r) {
    const s = t[n];
    s != null && s < QB && (e[r] = s)
}
function hO(e) {
    const t = Fi();
    if (!t)
        return;
    const {responseStart: n, requestStart: r} = t;
    r <= n && (qt && V.log("[Measurements] Adding TTFB Request Time"),
    e["ttfb.requestTime"] = {
        value: n - r,
        unit: "millisecond"
    })
}
const mO = 1e3;
let Pg, Yf, Jf;
function fE(e) {
    const t = "dom";
    Ir(t, e),
    Dr(t, gO)
}
function gO() {
    if (!de.document)
        return;
    const e = tn.bind(null, "dom")
      , t = Ng(e, !0);
    de.document.addEventListener("click", t, !1),
    de.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach(n => {
        const r = de[n] && de[n].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (lt(r, "addEventListener", function(s) {
            return function(o, i, a) {
                if (o === "click" || o == "keypress")
                    try {
                        const c = this
                          , u = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {}
                          , l = u[o] = u[o] || {
                            refCount: 0
                        };
                        if (!l.handler) {
                            const f = Ng(e);
                            l.handler = f,
                            s.call(this, o, f, a)
                        }
                        l.refCount++
                    } catch {}
                return s.call(this, o, i, a)
            }
        }),
        lt(r, "removeEventListener", function(s) {
            return function(o, i, a) {
                if (o === "click" || o == "keypress")
                    try {
                        const c = this
                          , u = c.__sentry_instrumentation_handlers__ || {}
                          , l = u[o];
                        l && (l.refCount--,
                        l.refCount <= 0 && (s.call(this, o, l.handler, a),
                        l.handler = void 0,
                        delete u[o]),
                        Object.keys(u).length === 0 && delete c.__sentry_instrumentation_handlers__)
                    } catch {}
                return s.call(this, o, i, a)
            }
        }))
    }
    )
}
function _O(e) {
    if (e.type !== Yf)
        return !1;
    try {
        if (!e.target || e.target._sentryId !== Jf)
            return !1
    } catch {}
    return !0
}
function xO(e, t) {
    return e !== "keypress" ? !1 : !t || !t.tagName ? !0 : !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
}
function Ng(e, t=!1) {
    return n => {
        if (!n || n._sentryCaptured)
            return;
        const r = yO(n);
        if (xO(n.type, r))
            return;
        nn(n, "_sentryCaptured", !0),
        r && !r._sentryId && nn(r, "_sentryId", Ke());
        const s = n.type === "keypress" ? "input" : n.type;
        _O(n) || (e({
            event: n,
            name: s,
            global: t
        }),
        Yf = n.type,
        Jf = r ? r._sentryId : void 0),
        clearTimeout(Pg),
        Pg = de.setTimeout( () => {
            Jf = void 0,
            Yf = void 0
        }
        , mO)
    }
}
function yO(e) {
    try {
        return e.target
    } catch {
        return null
    }
}
let aa;
function tu(e) {
    const t = "history";
    Ir(t, e),
    Dr(t, vO)
}
function vO() {
    if (!l5())
        return;
    const e = de.onpopstate;
    de.onpopstate = function(...n) {
        const r = de.location.href
          , s = aa;
        if (aa = r,
        tn("history", {
            from: s,
            to: r
        }),
        e)
            try {
                return e.apply(this, n)
            } catch {}
    }
    ;
    function t(n) {
        return function(...r) {
            const s = r.length > 2 ? r[2] : void 0;
            if (s) {
                const o = aa
                  , i = String(s);
                aa = i,
                tn("history", {
                    from: o,
                    to: i
                })
            }
            return n.apply(this, r)
        }
    }
    lt(de.history, "pushState", t),
    lt(de.history, "replaceState", t)
}
const Ta = {};
function dE(e) {
    const t = Ta[e];
    if (t)
        return t;
    let n = de[e];
    if (Ff(n))
        return Ta[e] = n.bind(de);
    const r = de.document;
    if (r && typeof r.createElement == "function")
        try {
            const s = r.createElement("iframe");
            s.hidden = !0,
            r.head.appendChild(s);
            const o = s.contentWindow;
            o && o[e] && (n = o[e]),
            r.head.removeChild(s)
        } catch (s) {
            qt && V.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, s)
        }
    return n && (Ta[e] = n.bind(de))
}
function Mg(e) {
    Ta[e] = void 0
}
function os(...e) {
    return dE("setTimeout")(...e)
}
const $r = "__sentry_xhr_v3__";
function pE(e) {
    const t = "xhr";
    Ir(t, e),
    Dr(t, EO)
}
function EO() {
    if (!de.XMLHttpRequest)
        return;
    const e = XMLHttpRequest.prototype;
    lt(e, "open", function(t) {
        return function(...n) {
            const r = vt() * 1e3
              , s = Un(n[0]) ? n[0].toUpperCase() : void 0
              , o = bO(n[1]);
            if (!s || !o)
                return t.apply(this, n);
            this[$r] = {
                method: s,
                url: o,
                request_headers: {}
            },
            s === "POST" && o.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            const i = () => {
                const a = this[$r];
                if (a && this.readyState === 4) {
                    try {
                        a.status_code = this.status
                    } catch {}
                    const c = {
                        endTimestamp: vt() * 1e3,
                        startTimestamp: r,
                        xhr: this
                    };
                    tn("xhr", c)
                }
            }
            ;
            return "onreadystatechange"in this && typeof this.onreadystatechange == "function" ? lt(this, "onreadystatechange", function(a) {
                return function(...c) {
                    return i(),
                    a.apply(this, c)
                }
            }) : this.addEventListener("readystatechange", i),
            lt(this, "setRequestHeader", function(a) {
                return function(...c) {
                    const [u,l] = c
                      , f = this[$r];
                    return f && Un(u) && Un(l) && (f.request_headers[u.toLowerCase()] = l),
                    a.apply(this, c)
                }
            }),
            t.apply(this, n)
        }
    }),
    lt(e, "send", function(t) {
        return function(...n) {
            const r = this[$r];
            if (!r)
                return t.apply(this, n);
            n[0] !== void 0 && (r.body = n[0]);
            const s = {
                startTimestamp: vt() * 1e3,
                xhr: this
            };
            return tn("xhr", s),
            t.apply(this, n)
        }
    })
}
function bO(e) {
    if (Un(e))
        return e;
    try {
        return e.toString()
    } catch {}
}
const Bl = []
  , ka = new Map;
function SO() {
    if ($d() && Pt) {
        const t = wO();
        return () => {
            t()
        }
    }
    return () => {}
}
const Lg = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
};
function wO() {
    return cE( ({metric: e}) => {
        const t = Ce();
        if (!t || e.value == null)
            return;
        const n = e.entries.find(v => v.duration === e.value && Lg[v.name]);
        if (!n)
            return;
        const {interactionId: r} = n
          , s = Lg[n.name]
          , o = t.getOptions()
          , i = tt(Pt + n.startTime)
          , a = tt(e.value)
          , c = Ge()
          , u = dt()
          , l = u ? mt(u) : void 0
          , d = (r != null ? ka.get(r) : void 0) || l
          , p = d ? Re(d).description : c.getScopeData().transactionName
          , m = c.getUser()
          , h = t.getIntegrationByName("Replay")
          , g = h && h.getReplayId()
          , E = m !== void 0 ? m.email || m.id || m.ip_address : void 0;
        let x;
        try {
            x = c.getScopeData().contexts.profile.profile_id
        } catch {}
        const _ = Sr(n.target)
          , y = ft({
            release: o.release,
            environment: o.environment,
            transaction: p,
            [Tv]: e.value,
            [Qe]: "auto.http.browser.inp",
            user: E || void 0,
            profile_id: x || void 0,
            replay_id: g || void 0,
            "user_agent.original": de.navigator && de.navigator.userAgent
        })
          , S = Tn({
            name: _,
            op: `ui.interaction.${s}`,
            attributes: y,
            startTime: i,
            experimental: {
                standalone: !0
            }
        });
        S.addEvent("inp", {
            [Bd]: "millisecond",
            [Od]: e.value
        }),
        S.end(i + a)
    }
    )
}
function CO(e) {
    const t = ({entries: n}) => {
        const r = dt()
          , s = r && mt(r);
        n.forEach(o => {
            if (!JB(o) || !s)
                return;
            const i = o.interactionId;
            if (i != null && !ka.has(i)) {
                if (Bl.length > 10) {
                    const a = Bl.shift();
                    ka.delete(a)
                }
                Bl.push(i),
                ka.set(i, s)
            }
        }
        )
    }
    ;
    io("event", t),
    io("first-input", t)
}
function AO(e, t=dE("fetch")) {
    let n = 0
      , r = 0;
    function s(o) {
        const i = o.body.length;
        n += i,
        r++;
        const a = {
            body: o.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        if (!t)
            return Mg("fetch"),
            Xa("No fetch implementation available");
        try {
            return t(e.url, a).then(c => (n -= i,
            r--,
            {
                statusCode: c.status,
                headers: {
                    "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": c.headers.get("Retry-After")
                }
            }))
        } catch (c) {
            return Mg("fetch"),
            n -= i,
            r--,
            Xa(c)
        }
    }
    return ID(e, s)
}
const TO = 30
  , kO = 50;
function Qf(e, t, n, r) {
    const s = {
        filename: e,
        function: t === "<anonymous>" ? ss : t,
        in_app: !0
    };
    return n !== void 0 && (s.lineno = n),
    r !== void 0 && (s.colno = r),
    s
}
const RO = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
  , IO = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
  , DO = /\((\S*)(?::(\d+))(?::(\d+))\)/
  , BO = e => {
    const t = RO.exec(e);
    if (t) {
        const [,r,s,o] = t;
        return Qf(r, ss, +s, +o)
    }
    const n = IO.exec(e);
    if (n) {
        if (n[2] && n[2].indexOf("eval") === 0) {
            const i = DO.exec(n[2]);
            i && (n[2] = i[1],
            n[3] = i[2],
            n[4] = i[3])
        }
        const [s,o] = hE(n[1] || ss, n[2]);
        return Qf(o, s, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
    }
}
  , OO = [TO, BO]
  , FO = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
  , PO = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
  , NO = e => {
    const t = FO.exec(e);
    if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
            const o = PO.exec(t[3]);
            o && (t[1] = t[1] || "eval",
            t[3] = o[1],
            t[4] = o[2],
            t[5] = "")
        }
        let r = t[3]
          , s = t[1] || ss;
        return [s,r] = hE(s, r),
        Qf(r, s, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
    }
}
  , MO = [kO, NO]
  , LO = [OO, MO]
  , HO = fv(...LO)
  , hE = (e, t) => {
    const n = e.indexOf("safari-extension") !== -1
      , r = e.indexOf("safari-web-extension") !== -1;
    return n || r ? [e.indexOf("@") !== -1 ? e.split("@")[0] : ss, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
}
  , ca = 1024
  , $O = "Breadcrumbs"
  , UO = (e={}) => {
    const t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e
    };
    return {
        name: $O,
        setup(n) {
            t.console && wI(qO(n)),
            t.dom && fE(WO(n, t.dom)),
            t.xhr && pE(VO(n)),
            t.fetch && hv(KO(n)),
            t.history && tu(GO(n)),
            t.sentry && n.on("beforeSendEvent", zO(n))
        }
    }
}
  , jO = UO;
function zO(e) {
    return function(n) {
        Ce() === e && Cr({
            category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
            event_id: n.event_id,
            level: n.level,
            message: lr(n)
        }, {
            event: n
        })
    }
}
function WO(e, t) {
    return function(r) {
        if (Ce() !== e)
            return;
        let s, o, i = typeof t == "object" ? t.serializeAttribute : void 0, a = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
        a && a > ca && (pn && V.warn(`\`dom.maxStringLength\` cannot exceed ${ca}, but a value of ${a} was configured. Sentry will use ${ca} instead.`),
        a = ca),
        typeof i == "string" && (i = [i]);
        try {
            const u = r.event
              , l = XO(u) ? u.target : u;
            s = Sr(l, {
                keyAttrs: i,
                maxStringLength: a
            }),
            o = iv(l)
        } catch {
            s = "<unknown>"
        }
        if (s.length === 0)
            return;
        const c = {
            category: `ui.${r.name}`,
            message: s
        };
        o && (c.data = {
            "ui.component_name": o
        }),
        Cr(c, {
            event: r.event,
            name: r.name,
            global: r.global
        })
    }
}
function qO(e) {
    return function(n) {
        if (Ce() !== e)
            return;
        const r = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: qI(n.level),
            message: Gm(n.args, " ")
        };
        if (n.level === "assert")
            if (n.args[0] === !1)
                r.message = `Assertion failed: ${Gm(n.args.slice(1), " ") || "console.assert"}`,
                r.data.arguments = n.args.slice(1);
            else
                return;
        Cr(r, {
            input: n.args,
            level: n.level
        })
    }
}
function VO(e) {
    return function(n) {
        if (Ce() !== e)
            return;
        const {startTimestamp: r, endTimestamp: s} = n
          , o = n.xhr[$r];
        if (!r || !s || !o)
            return;
        const {method: i, url: a, status_code: c, body: u} = o
          , l = {
            method: i,
            url: a,
            status_code: c
        }
          , f = {
            xhr: n.xhr,
            input: u,
            startTimestamp: r,
            endTimestamp: s
        };
        Cr({
            category: "xhr",
            data: l,
            type: "http"
        }, f)
    }
}
function KO(e) {
    return function(n) {
        if (Ce() !== e)
            return;
        const {startTimestamp: r, endTimestamp: s} = n;
        if (s && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
            if (n.error) {
                const o = n.fetchData
                  , i = {
                    data: n.error,
                    input: n.args,
                    startTimestamp: r,
                    endTimestamp: s
                };
                Cr({
                    category: "fetch",
                    data: o,
                    level: "error",
                    type: "http"
                }, i)
            } else {
                const o = n.response
                  , i = {
                    ...n.fetchData,
                    status_code: o && o.status
                }
                  , a = {
                    input: n.args,
                    response: o,
                    startTimestamp: r,
                    endTimestamp: s
                };
                Cr({
                    category: "fetch",
                    data: i,
                    type: "http"
                }, a)
            }
    }
}
function GO(e) {
    return function(n) {
        if (Ce() !== e)
            return;
        let r = n.from
          , s = n.to;
        const o = Gr(he.location.href);
        let i = r ? Gr(r) : void 0;
        const a = Gr(s);
        (!i || !i.path) && (i = o),
        o.protocol === a.protocol && o.host === a.host && (s = a.relative),
        o.protocol === i.protocol && o.host === i.host && (r = i.relative),
        Cr({
            category: "navigation",
            data: {
                from: r,
                to: s
            }
        })
    }
}
function XO(e) {
    return !!e && !!e.target
}
const YO = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
  , JO = "BrowserApiErrors"
  , QO = (e={}) => {
    const t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...e
    };
    return {
        name: JO,
        setupOnce() {
            t.setTimeout && lt(he, "setTimeout", Hg),
            t.setInterval && lt(he, "setInterval", Hg),
            t.requestAnimationFrame && lt(he, "requestAnimationFrame", eF),
            t.XMLHttpRequest && "XMLHttpRequest"in he && lt(XMLHttpRequest.prototype, "send", tF);
            const n = t.eventTarget;
            n && (Array.isArray(n) ? n : YO).forEach(nF)
        }
    }
}
  , ZO = QO;
function Hg(e) {
    return function(...t) {
        const n = t[0];
        return t[0] = oo(n, {
            mechanism: {
                data: {
                    function: qn(e)
                },
                handled: !1,
                type: "instrument"
            }
        }),
        e.apply(this, t)
    }
}
function eF(e) {
    return function(t) {
        return e.apply(this, [oo(t, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: qn(e)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}
function tF(e) {
    return function(...t) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
            s in n && typeof n[s] == "function" && lt(n, s, function(o) {
                const i = {
                    mechanism: {
                        data: {
                            function: s,
                            handler: qn(o)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }
                  , a = Cd(o);
                return a && (i.mechanism.data.handler = qn(a)),
                oo(o, i)
            })
        }
        ),
        e.apply(this, t)
    }
}
function nF(e) {
    const t = he
      , n = t[e] && t[e].prototype;
    !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (lt(n, "addEventListener", function(r) {
        return function(s, o, i) {
            try {
                typeof o.handleEvent == "function" && (o.handleEvent = oo(o.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: qn(o),
                            target: e
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch {}
            return r.apply(this, [s, oo(o, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: qn(o),
                        target: e
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), i])
        }
    }),
    lt(n, "removeEventListener", function(r) {
        return function(s, o, i) {
            const a = o;
            try {
                const c = a && a.__sentry_wrapped__;
                c && r.call(this, s, c, i)
            } catch {}
            return r.call(this, s, a, i)
        }
    }))
}
const rF = "GlobalHandlers"
  , sF = (e={}) => {
    const t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
    };
    return {
        name: rF,
        setupOnce() {
            Error.stackTraceLimit = 50
        },
        setup(n) {
            t.onerror && (iF(n),
            $g("onerror")),
            t.onunhandledrejection && (aF(n),
            $g("onunhandledrejection"))
        }
    }
}
  , oF = sF;
function iF(e) {
    gv(t => {
        const {stackParser: n, attachStacktrace: r} = mE();
        if (Ce() !== e || Jv())
            return;
        const {msg: s, url: o, line: i, column: a, error: c} = t
          , u = lF(Ld(n, c || s, void 0, r, !1), o, i, a);
        u.level = "error",
        zv(u, {
            originalException: c,
            mechanism: {
                handled: !1,
                type: "onerror"
            }
        })
    }
    )
}
function aF(e) {
    _v(t => {
        const {stackParser: n, attachStacktrace: r} = mE();
        if (Ce() !== e || Jv())
            return;
        const s = cF(t)
          , o = Sd(s) ? uF(s) : Ld(n, s, void 0, r, !0);
        o.level = "error",
        zv(o, {
            originalException: s,
            mechanism: {
                handled: !1,
                type: "onunhandledrejection"
            }
        })
    }
    )
}
function cF(e) {
    if (Sd(e))
        return e;
    try {
        if ("reason"in e)
            return e.reason;
        if ("detail"in e && "reason"in e.detail)
            return e.detail.reason
    } catch {}
    return e
}
function uF(e) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(e)}`
            }]
        }
    }
}
function lF(e, t, n, r) {
    const s = e.exception = e.exception || {}
      , o = s.values = s.values || []
      , i = o[0] = o[0] || {}
      , a = i.stacktrace = i.stacktrace || {}
      , c = a.frames = a.frames || []
      , u = isNaN(parseInt(r, 10)) ? void 0 : r
      , l = isNaN(parseInt(n, 10)) ? void 0 : n
      , f = Un(t) && t.length > 0 ? t : ov();
    return c.length === 0 && c.push({
        colno: u,
        filename: f,
        function: ss,
        in_app: !0,
        lineno: l
    }),
    e
}
function $g(e) {
    pn && V.log(`Global Handler attached: ${e}`)
}
function mE() {
    const e = Ce();
    return e && e.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
const fF = () => ({
    name: "HttpContext",
    preprocessEvent(e) {
        if (!he.navigator && !he.location && !he.document)
            return;
        const t = e.request && e.request.url || he.location && he.location.href
          , {referrer: n} = he.document || {}
          , {userAgent: r} = he.navigator || {}
          , s = {
            ...e.request && e.request.headers,
            ...n && {
                Referer: n
            },
            ...r && {
                "User-Agent": r
            }
        }
          , o = {
            ...e.request,
            ...t && {
                url: t
            },
            headers: s
        };
        e.request = o
    }
})
  , dF = "cause"
  , pF = 5
  , hF = "LinkedErrors"
  , mF = (e={}) => {
    const t = e.limit || pF
      , n = e.key || dF;
    return {
        name: hF,
        preprocessEvent(r, s, o) {
            const i = o.getOptions();
            aI(Nd, i.stackParser, i.maxValueLength, n, t, r, s)
        }
    }
}
  , gF = mF;
function gE(e) {
    return [jD(), LD(), ZO(), jO(), oF(), gF(), tB(), fF()]
}
function _F(e={}) {
    return {
        ...{
            defaultIntegrations: gE(),
            release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : he.SENTRY_RELEASE && he.SENTRY_RELEASE.id ? he.SENTRY_RELEASE.id : void 0,
            autoSessionTracking: !0,
            sendClientReports: !0
        },
        ...e
    }
}
function xF() {
    const e = typeof he.window < "u" && he;
    if (!e)
        return !1;
    const t = e.chrome ? "chrome" : "browser"
      , n = e[t]
      , r = n && n.runtime && n.runtime.id
      , s = he.location && he.location.href || ""
      , o = ["chrome-extension:", "moz-extension:", "ms-browser-extension:"]
      , i = !!r && he === he.top && o.some(c => s.startsWith(`${c}//`))
      , a = typeof e.nw < "u";
    return !!r && !i && !a
}
function yF(e={}) {
    const t = _F(e);
    if (xF()) {
        Xn( () => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }
        );
        return
    }
    pn && (dv() || V.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const n = {
        ...t,
        stackParser: bI(t.stackParser || HO),
        integrations: bD(t),
        transport: t.transport || AO
    }
      , r = TD(bB, n);
    return t.autoSessionTracking && vF(),
    r
}
function vF() {
    if (typeof he.document > "u") {
        pn && V.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return
    }
    Eg({
        ignoreDuration: !0
    }),
    bg(),
    tu( ({from: e, to: t}) => {
        e !== void 0 && e !== t && (Eg({
            ignoreDuration: !0
        }),
        bg())
    }
    )
}
const ze = we
  , Ud = "sentryReplaySession"
  , EF = "replay_event"
  , jd = "Unable to send Replay"
  , bF = 3e5
  , SF = 9e5
  , wF = 5e3
  , CF = 5500
  , AF = 6e4
  , TF = 5e3
  , kF = 3
  , Ug = 15e4
  , ua = 5e3
  , RF = 3e3
  , IF = 300
  , zd = 2e7
  , DF = 4999
  , BF = 15e3
  , jg = 36e5;
function Zf(e, t) {
    return e ?? t()
}
function hi(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...i) => n.call(t, ...i)),
        t = void 0)
    }
    return n
}
var st;
(function(e) {
    e[e.Document = 0] = "Document",
    e[e.DocumentType = 1] = "DocumentType",
    e[e.Element = 2] = "Element",
    e[e.Text = 3] = "Text",
    e[e.CDATA = 4] = "CDATA",
    e[e.Comment = 5] = "Comment"
}
)(st || (st = {}));
function OF(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Vo(e) {
    const t = hi([e, "optionalAccess", n => n.host]);
    return hi([t, "optionalAccess", n => n.shadowRoot]) === e
}
function Ko(e) {
    return Object.prototype.toString.call(e) === "[object ShadowRoot]"
}
function FF(e) {
    return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
    e
}
function PF(e) {
    const {cssText: t} = e;
    if (t.split('"').length < 3)
        return t;
    const n = ["@import", `url(${JSON.stringify(e.href)})`];
    return e.layerName === "" ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
    e.supportsText && n.push(`supports(${e.supportsText})`),
    e.media.length && n.push(e.media.mediaText),
    n.join(" ") + ";"
}
function nc(e) {
    try {
        const t = e.rules || e.cssRules;
        return t ? FF(Array.from(t, _E).join("")) : null
    } catch {
        return null
    }
}
function _E(e) {
    let t;
    if (MF(e))
        try {
            t = nc(e.styleSheet) || PF(e)
        } catch {}
    else if (LF(e) && e.selectorText.includes(":"))
        return NF(e.cssText);
    return t || e.cssText
}
function NF(e) {
    const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return e.replace(t, "$1\\$2")
}
function MF(e) {
    return "styleSheet"in e
}
function LF(e) {
    return "selectorText"in e
}
class xE {
    constructor() {
        this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
    }
    getId(t) {
        if (!t)
            return -1;
        const n = hi([this, "access", r => r.getMeta, "call", r => r(t), "optionalAccess", r => r.id]);
        return Zf(n, () => -1)
    }
    getNode(t) {
        return this.idNodeMap.get(t) || null
    }
    getIds() {
        return Array.from(this.idNodeMap.keys())
    }
    getMeta(t) {
        return this.nodeMetaMap.get(t) || null
    }
    removeNodeFromMap(t) {
        const n = this.getId(t);
        this.idNodeMap.delete(n),
        t.childNodes && t.childNodes.forEach(r => this.removeNodeFromMap(r))
    }
    has(t) {
        return this.idNodeMap.has(t)
    }
    hasNode(t) {
        return this.nodeMetaMap.has(t)
    }
    add(t, n) {
        const r = n.id;
        this.idNodeMap.set(r, t),
        this.nodeMetaMap.set(t, n)
    }
    replace(t, n) {
        const r = this.getNode(t);
        if (r) {
            const s = this.nodeMetaMap.get(r);
            s && this.nodeMetaMap.set(n, s)
        }
        this.idNodeMap.set(t, n)
    }
    reset() {
        this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
    }
}
function HF() {
    return new xE
}
function nu({maskInputOptions: e, tagName: t, type: n}) {
    return t === "OPTION" && (t = "SELECT"),
    !!(e[t.toLowerCase()] || n && e[n] || n === "password" || t === "INPUT" && !n && e.text)
}
function mi({isMasked: e, element: t, value: n, maskInputFn: r}) {
    let s = n || "";
    return e ? (r && (s = r(s, t)),
    "*".repeat(s.length)) : s
}
function co(e) {
    return e.toLowerCase()
}
function e0(e) {
    return e.toUpperCase()
}
const zg = "__rrweb_original__";
function $F(e) {
    const t = e.getContext("2d");
    if (!t)
        return !0;
    const n = 50;
    for (let r = 0; r < e.width; r += n)
        for (let s = 0; s < e.height; s += n) {
            const o = t.getImageData
              , i = zg in o ? o[zg] : o;
            if (new Uint32Array(i.call(t, r, s, Math.min(n, e.width - r), Math.min(n, e.height - s)).data.buffer).some(c => c !== 0))
                return !1
        }
    return !0
}
function Wd(e) {
    const t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? co(t) : null
}
function rc(e, t, n) {
    return t === "INPUT" && (n === "radio" || n === "checkbox") ? e.getAttribute("value") || "" : e.value
}
function yE(e, t) {
    let n;
    try {
        n = new URL(e,Zf(t, () => window.location.href))
    } catch {
        return null
    }
    const r = /\.([0-9a-z]+)(?:$)/i
      , s = n.pathname.match(r);
    return Zf(hi([s, "optionalAccess", o => o[1]]), () => null)
}
const Wg = {};
function vE(e) {
    const t = Wg[e];
    if (t)
        return t;
    const n = window.document;
    let r = window[e];
    if (n && typeof n.createElement == "function")
        try {
            const s = n.createElement("iframe");
            s.hidden = !0,
            n.head.appendChild(s);
            const o = s.contentWindow;
            o && o[e] && (r = o[e]),
            n.head.removeChild(s)
        } catch {}
    return Wg[e] = r.bind(window)
}
function t0(...e) {
    return vE("setTimeout")(...e)
}
function EE(...e) {
    return vE("clearTimeout")(...e)
}
let UF = 1;
const jF = new RegExp("[^a-z0-9-_:]")
  , gi = -2;
function qd() {
    return UF++
}
function zF(e) {
    if (e instanceof HTMLFormElement)
        return "form";
    const t = co(e.tagName);
    return jF.test(t) ? "div" : t
}
function WF(e) {
    let t = "";
    return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0],
    t = t.split("?")[0],
    t
}
let Ss, qg;
const qF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
  , VF = /^(?:[a-z+]+:)?\/\//i
  , KF = /^www\..*/i
  , GF = /^(data:)([^,]*),(.*)/i;
function sc(e, t) {
    return (e || "").replace(qF, (n, r, s, o, i, a) => {
        const c = s || i || a
          , u = r || o || "";
        if (!c)
            return n;
        if (VF.test(c) || KF.test(c))
            return `url(${u}${c}${u})`;
        if (GF.test(c))
            return `url(${u}${c}${u})`;
        if (c[0] === "/")
            return `url(${u}${WF(t) + c}${u})`;
        const l = t.split("/")
          , f = c.split("/");
        l.pop();
        for (const d of f)
            d !== "." && (d === ".." ? l.pop() : l.push(d));
        return `url(${u}${l.join("/")}${u})`
    }
    )
}
const XF = /^[^ \t\n\r\u000c]+/
  , YF = /^[, \t\n\r\u000c]+/;
function JF(e, t) {
    if (t.trim() === "")
        return t;
    let n = 0;
    function r(o) {
        let i;
        const a = o.exec(t.substring(n));
        return a ? (i = a[0],
        n += i.length,
        i) : ""
    }
    const s = [];
    for (; r(YF),
    !(n >= t.length); ) {
        let o = r(XF);
        if (o.slice(-1) === ",")
            o = ks(e, o.substring(0, o.length - 1)),
            s.push(o);
        else {
            let i = "";
            o = ks(e, o);
            let a = !1;
            for (; ; ) {
                const c = t.charAt(n);
                if (c === "") {
                    s.push((o + i).trim());
                    break
                } else if (a)
                    c === ")" && (a = !1);
                else if (c === ",") {
                    n += 1,
                    s.push((o + i).trim());
                    break
                } else
                    c === "(" && (a = !0);
                i += c,
                n += 1
            }
        }
    }
    return s.join(", ")
}
function ks(e, t) {
    if (!t || t.trim() === "")
        return t;
    const n = e.createElement("a");
    return n.href = t,
    n.href
}
function QF(e) {
    return !!(e.tagName === "svg" || e.ownerSVGElement)
}
function Vd() {
    const e = document.createElement("a");
    return e.href = "",
    e.href
}
function bE(e, t, n, r, s, o) {
    return r && (n === "src" || n === "href" && !(t === "use" && r[0] === "#") || n === "xlink:href" && r[0] !== "#" || n === "background" && (t === "table" || t === "td" || t === "th") ? ks(e, r) : n === "srcset" ? JF(e, r) : n === "style" ? sc(r, Vd()) : t === "object" && n === "data" ? ks(e, r) : typeof o == "function" ? o(n, r, s) : r)
}
function SE(e, t, n) {
    return (e === "video" || e === "audio") && t === "autoplay"
}
function ZF(e, t, n, r) {
    try {
        if (r && e.matches(r))
            return !1;
        if (typeof t == "string") {
            if (e.classList.contains(t))
                return !0
        } else
            for (let s = e.classList.length; s--; ) {
                const o = e.classList[s];
                if (t.test(o))
                    return !0
            }
        if (n)
            return e.matches(n)
    } catch {}
    return !1
}
function eP(e, t) {
    for (let n = e.classList.length; n--; ) {
        const r = e.classList[n];
        if (t.test(r))
            return !0
    }
    return !1
}
function Ur(e, t, n=1 / 0, r=0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : Ur(e.parentNode, t, n, r + 1)
}
function Rs(e, t) {
    return n => {
        const r = n;
        if (r === null)
            return !1;
        try {
            if (e) {
                if (typeof e == "string") {
                    if (r.matches(`.${e}`))
                        return !0
                } else if (eP(r, e))
                    return !0
            }
            return !!(t && r.matches(t))
        } catch {
            return !1
        }
    }
}
function uo(e, t, n, r, s, o) {
    try {
        const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (i === null)
            return !1;
        if (i.tagName === "INPUT") {
            const u = i.getAttribute("autocomplete");
            if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(u))
                return !0
        }
        let a = -1
          , c = -1;
        if (o) {
            if (c = Ur(i, Rs(r, s)),
            c < 0)
                return !0;
            a = Ur(i, Rs(t, n), c >= 0 ? c : 1 / 0)
        } else {
            if (a = Ur(i, Rs(t, n)),
            a < 0)
                return !1;
            c = Ur(i, Rs(r, s), a >= 0 ? a : 1 / 0)
        }
        return a >= 0 ? c >= 0 ? a <= c : !0 : c >= 0 ? !1 : !!o
    } catch {}
    return !!o
}
function tP(e, t, n) {
    const r = e.contentWindow;
    if (!r)
        return;
    let s = !1, o;
    try {
        o = r.document.readyState
    } catch {
        return
    }
    if (o !== "complete") {
        const a = t0( () => {
            s || (t(),
            s = !0)
        }
        , n);
        e.addEventListener("load", () => {
            EE(a),
            s = !0,
            t()
        }
        );
        return
    }
    const i = "about:blank";
    if (r.location.href !== i || e.src === i || e.src === "")
        return t0(t, 0),
        e.addEventListener("load", t);
    e.addEventListener("load", t)
}
function nP(e, t, n) {
    let r = !1, s;
    try {
        s = e.sheet
    } catch {
        return
    }
    if (s)
        return;
    const o = t0( () => {
        r || (t(),
        r = !0)
    }
    , n);
    e.addEventListener("load", () => {
        EE(o),
        r = !0,
        t()
    }
    )
}
function rP(e, t) {
    const {doc: n, mirror: r, blockClass: s, blockSelector: o, unblockSelector: i, maskAllText: a, maskAttributeFn: c, maskTextClass: u, unmaskTextClass: l, maskTextSelector: f, unmaskTextSelector: d, inlineStylesheet: p, maskInputOptions: m={}, maskTextFn: h, maskInputFn: g, dataURLOptions: E={}, inlineImages: x, recordCanvas: _, keepIframeSrcFn: y, newlyAddedElement: S=!1} = t
      , v = sP(n, r);
    switch (e.nodeType) {
    case e.DOCUMENT_NODE:
        return e.compatMode !== "CSS1Compat" ? {
            type: st.Document,
            childNodes: [],
            compatMode: e.compatMode
        } : {
            type: st.Document,
            childNodes: []
        };
    case e.DOCUMENT_TYPE_NODE:
        return {
            type: st.DocumentType,
            name: e.name,
            publicId: e.publicId,
            systemId: e.systemId,
            rootId: v
        };
    case e.ELEMENT_NODE:
        return iP(e, {
            doc: n,
            blockClass: s,
            blockSelector: o,
            unblockSelector: i,
            inlineStylesheet: p,
            maskAttributeFn: c,
            maskInputOptions: m,
            maskInputFn: g,
            dataURLOptions: E,
            inlineImages: x,
            recordCanvas: _,
            keepIframeSrcFn: y,
            newlyAddedElement: S,
            rootId: v,
            maskAllText: a,
            maskTextClass: u,
            unmaskTextClass: l,
            maskTextSelector: f,
            unmaskTextSelector: d
        });
    case e.TEXT_NODE:
        return oP(e, {
            maskAllText: a,
            maskTextClass: u,
            unmaskTextClass: l,
            maskTextSelector: f,
            unmaskTextSelector: d,
            maskTextFn: h,
            maskInputOptions: m,
            maskInputFn: g,
            rootId: v
        });
    case e.CDATA_SECTION_NODE:
        return {
            type: st.CDATA,
            textContent: "",
            rootId: v
        };
    case e.COMMENT_NODE:
        return {
            type: st.Comment,
            textContent: e.textContent || "",
            rootId: v
        };
    default:
        return !1
    }
}
function sP(e, t) {
    if (!t.hasNode(e))
        return;
    const n = t.getId(e);
    return n === 1 ? void 0 : n
}
function oP(e, t) {
    const {maskAllText: n, maskTextClass: r, unmaskTextClass: s, maskTextSelector: o, unmaskTextSelector: i, maskTextFn: a, maskInputOptions: c, maskInputFn: u, rootId: l} = t
      , f = e.parentNode && e.parentNode.tagName;
    let d = e.textContent;
    const p = f === "STYLE" ? !0 : void 0
      , m = f === "SCRIPT" ? !0 : void 0
      , h = f === "TEXTAREA" ? !0 : void 0;
    if (p && d) {
        try {
            e.nextSibling || e.previousSibling || hi([e, "access", E => E.parentNode, "access", E => E.sheet, "optionalAccess", E => E.cssRules]) && (d = nc(e.parentNode.sheet))
        } catch (E) {
            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${E}`, e)
        }
        d = sc(d, Vd())
    }
    m && (d = "SCRIPT_PLACEHOLDER");
    const g = uo(e, r, o, s, i, n);
    if (!p && !m && !h && d && g && (d = a ? a(d, e.parentElement) : d.replace(/[\S]/g, "*")),
    h && d && (c.textarea || g) && (d = u ? u(d, e.parentNode) : d.replace(/[\S]/g, "*")),
    f === "OPTION" && d) {
        const E = nu({
            type: null,
            tagName: f,
            maskInputOptions: c
        });
        d = mi({
            isMasked: uo(e, r, o, s, i, E),
            element: e,
            value: d,
            maskInputFn: u
        })
    }
    return {
        type: st.Text,
        textContent: d || "",
        isStyle: p,
        rootId: l
    }
}
function iP(e, t) {
    const {doc: n, blockClass: r, blockSelector: s, unblockSelector: o, inlineStylesheet: i, maskInputOptions: a={}, maskAttributeFn: c, maskInputFn: u, dataURLOptions: l={}, inlineImages: f, recordCanvas: d, keepIframeSrcFn: p, newlyAddedElement: m=!1, rootId: h, maskAllText: g, maskTextClass: E, unmaskTextClass: x, maskTextSelector: _, unmaskTextSelector: y} = t
      , S = ZF(e, r, s, o)
      , v = zF(e);
    let b = {};
    const C = e.attributes.length;
    for (let w = 0; w < C; w++) {
        const T = e.attributes[w];
        T.name && !SE(v, T.name, T.value) && (b[T.name] = bE(n, v, co(T.name), T.value, e, c))
    }
    if (v === "link" && i) {
        const w = Array.from(n.styleSheets).find(R => R.href === e.href);
        let T = null;
        w && (T = nc(w)),
        T && (delete b.rel,
        delete b.href,
        b._cssText = sc(T, w.href))
    }
    if (v === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
        const w = nc(e.sheet);
        w && (b._cssText = sc(w, Vd()))
    }
    if (v === "input" || v === "textarea" || v === "select" || v === "option") {
        const w = e
          , T = Wd(w)
          , R = rc(w, e0(v), T)
          , D = w.checked;
        if (T !== "submit" && T !== "button" && R) {
            const z = uo(w, E, _, x, y, nu({
                type: T,
                tagName: e0(v),
                maskInputOptions: a
            }));
            b.value = mi({
                isMasked: z,
                element: w,
                value: R,
                maskInputFn: u
            })
        }
        D && (b.checked = D)
    }
    if (v === "option" && (e.selected && !a.select ? b.selected = !0 : delete b.selected),
    v === "canvas" && d) {
        if (e.__context === "2d")
            $F(e) || (b.rr_dataURL = e.toDataURL(l.type, l.quality));
        else if (!("__context"in e)) {
            const w = e.toDataURL(l.type, l.quality)
              , T = document.createElement("canvas");
            T.width = e.width,
            T.height = e.height;
            const R = T.toDataURL(l.type, l.quality);
            w !== R && (b.rr_dataURL = w)
        }
    }
    if (v === "img" && f) {
        Ss || (Ss = n.createElement("canvas"),
        qg = Ss.getContext("2d"));
        const w = e
          , T = w.crossOrigin;
        w.crossOrigin = "anonymous";
        const R = () => {
            w.removeEventListener("load", R);
            try {
                Ss.width = w.naturalWidth,
                Ss.height = w.naturalHeight,
                qg.drawImage(w, 0, 0),
                b.rr_dataURL = Ss.toDataURL(l.type, l.quality)
            } catch (D) {
                console.warn(`Cannot inline img src=${w.currentSrc}! Error: ${D}`)
            }
            T ? b.crossOrigin = T : w.removeAttribute("crossorigin")
        }
        ;
        w.complete && w.naturalWidth !== 0 ? R() : w.addEventListener("load", R)
    }
    if ((v === "audio" || v === "video") && (b.rr_mediaState = e.paused ? "paused" : "played",
    b.rr_mediaCurrentTime = e.currentTime),
    m || (e.scrollLeft && (b.rr_scrollLeft = e.scrollLeft),
    e.scrollTop && (b.rr_scrollTop = e.scrollTop)),
    S) {
        const {width: w, height: T} = e.getBoundingClientRect();
        b = {
            class: b.class,
            rr_width: `${w}px`,
            rr_height: `${T}px`
        }
    }
    v === "iframe" && !p(b.src) && (!S && !e.contentDocument && (b.rr_src = b.src),
    delete b.src);
    let I;
    try {
        customElements.get(v) && (I = !0)
    } catch {}
    return {
        type: st.Element,
        tagName: v,
        attributes: b,
        childNodes: [],
        isSVG: QF(e) || void 0,
        needBlock: S,
        rootId: h,
        isCustom: I
    }
}
function je(e) {
    return e == null ? "" : e.toLowerCase()
}
function aP(e, t) {
    if (t.comment && e.type === st.Comment)
        return !0;
    if (e.type === st.Element) {
        if (t.script && (e.tagName === "script" || e.tagName === "link" && (e.attributes.rel === "preload" || e.attributes.rel === "modulepreload") && e.attributes.as === "script" || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && yE(e.attributes.href) === "js"))
            return !0;
        if (t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (je(e.attributes.name).match(/^msapplication-tile(image|color)$/) || je(e.attributes.name) === "application-name" || je(e.attributes.rel) === "icon" || je(e.attributes.rel) === "apple-touch-icon" || je(e.attributes.rel) === "shortcut icon")))
            return !0;
        if (e.tagName === "meta") {
            if (t.headMetaDescKeywords && je(e.attributes.name).match(/^description|keywords$/))
                return !0;
            if (t.headMetaSocial && (je(e.attributes.property).match(/^(og|twitter|fb):/) || je(e.attributes.name).match(/^(og|twitter):/) || je(e.attributes.name) === "pinterest"))
                return !0;
            if (t.headMetaRobots && (je(e.attributes.name) === "robots" || je(e.attributes.name) === "googlebot" || je(e.attributes.name) === "bingbot"))
                return !0;
            if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
                return !0;
            if (t.headMetaAuthorship && (je(e.attributes.name) === "author" || je(e.attributes.name) === "generator" || je(e.attributes.name) === "framework" || je(e.attributes.name) === "publisher" || je(e.attributes.name) === "progid" || je(e.attributes.property).match(/^article:/) || je(e.attributes.property).match(/^product:/)))
                return !0;
            if (t.headMetaVerification && (je(e.attributes.name) === "google-site-verification" || je(e.attributes.name) === "yandex-verification" || je(e.attributes.name) === "csrf-token" || je(e.attributes.name) === "p:domain_verify" || je(e.attributes.name) === "verify-v1" || je(e.attributes.name) === "verification" || je(e.attributes.name) === "shopify-checkout-api-token"))
                return !0
        }
    }
    return !1
}
function Is(e, t) {
    const {doc: n, mirror: r, blockClass: s, blockSelector: o, unblockSelector: i, maskAllText: a, maskTextClass: c, unmaskTextClass: u, maskTextSelector: l, unmaskTextSelector: f, skipChild: d=!1, inlineStylesheet: p=!0, maskInputOptions: m={}, maskAttributeFn: h, maskTextFn: g, maskInputFn: E, slimDOMOptions: x, dataURLOptions: _={}, inlineImages: y=!1, recordCanvas: S=!1, onSerialize: v, onIframeLoad: b, iframeLoadTimeout: C=5e3, onStylesheetLoad: I, stylesheetLoadTimeout: w=5e3, keepIframeSrcFn: T= () => !1, newlyAddedElement: R=!1} = t;
    let {preserveWhiteSpace: D=!0} = t;
    const z = rP(e, {
        doc: n,
        mirror: r,
        blockClass: s,
        blockSelector: o,
        maskAllText: a,
        unblockSelector: i,
        maskTextClass: c,
        unmaskTextClass: u,
        maskTextSelector: l,
        unmaskTextSelector: f,
        inlineStylesheet: p,
        maskInputOptions: m,
        maskAttributeFn: h,
        maskTextFn: g,
        maskInputFn: E,
        dataURLOptions: _,
        inlineImages: y,
        recordCanvas: S,
        keepIframeSrcFn: T,
        newlyAddedElement: R
    });
    if (!z)
        return console.warn(e, "not serialized"),
        null;
    let X;
    r.hasNode(e) ? X = r.getId(e) : aP(z, x) || !D && z.type === st.Text && !z.isStyle && !z.textContent.replace(/^\s+|\s+$/gm, "").length ? X = gi : X = qd();
    const O = Object.assign(z, {
        id: X
    });
    if (r.add(e, O),
    X === gi)
        return null;
    v && v(e);
    let Z = !d;
    if (O.type === st.Element) {
        Z = Z && !O.needBlock,
        delete O.needBlock;
        const H = e.shadowRoot;
        H && Ko(H) && (O.isShadowHost = !0)
    }
    if ((O.type === st.Document || O.type === st.Element) && Z) {
        x.headWhitespace && O.type === st.Element && O.tagName === "head" && (D = !1);
        const H = {
            doc: n,
            mirror: r,
            blockClass: s,
            blockSelector: o,
            maskAllText: a,
            unblockSelector: i,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: l,
            unmaskTextSelector: f,
            skipChild: d,
            inlineStylesheet: p,
            maskInputOptions: m,
            maskAttributeFn: h,
            maskTextFn: g,
            maskInputFn: E,
            slimDOMOptions: x,
            dataURLOptions: _,
            inlineImages: y,
            recordCanvas: S,
            preserveWhiteSpace: D,
            onSerialize: v,
            onIframeLoad: b,
            iframeLoadTimeout: C,
            onStylesheetLoad: I,
            stylesheetLoadTimeout: w,
            keepIframeSrcFn: T
        };
        for (const ie of Array.from(e.childNodes)) {
            const le = Is(ie, H);
            le && O.childNodes.push(le)
        }
        if (OF(e) && e.shadowRoot)
            for (const ie of Array.from(e.shadowRoot.childNodes)) {
                const le = Is(ie, H);
                le && (Ko(e.shadowRoot) && (le.isShadow = !0),
                O.childNodes.push(le))
            }
    }
    return e.parentNode && Vo(e.parentNode) && Ko(e.parentNode) && (O.isShadow = !0),
    O.type === st.Element && O.tagName === "iframe" && tP(e, () => {
        const H = e.contentDocument;
        if (H && b) {
            const ie = Is(H, {
                doc: H,
                mirror: r,
                blockClass: s,
                blockSelector: o,
                unblockSelector: i,
                maskAllText: a,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: l,
                unmaskTextSelector: f,
                skipChild: !1,
                inlineStylesheet: p,
                maskInputOptions: m,
                maskAttributeFn: h,
                maskTextFn: g,
                maskInputFn: E,
                slimDOMOptions: x,
                dataURLOptions: _,
                inlineImages: y,
                recordCanvas: S,
                preserveWhiteSpace: D,
                onSerialize: v,
                onIframeLoad: b,
                iframeLoadTimeout: C,
                onStylesheetLoad: I,
                stylesheetLoadTimeout: w,
                keepIframeSrcFn: T
            });
            ie && b(e, ie)
        }
    }
    , C),
    O.type === st.Element && O.tagName === "link" && typeof O.attributes.rel == "string" && (O.attributes.rel === "stylesheet" || O.attributes.rel === "preload" && typeof O.attributes.href == "string" && yE(O.attributes.href) === "css") && nP(e, () => {
        if (I) {
            const H = Is(e, {
                doc: n,
                mirror: r,
                blockClass: s,
                blockSelector: o,
                unblockSelector: i,
                maskAllText: a,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: l,
                unmaskTextSelector: f,
                skipChild: !1,
                inlineStylesheet: p,
                maskInputOptions: m,
                maskAttributeFn: h,
                maskTextFn: g,
                maskInputFn: E,
                slimDOMOptions: x,
                dataURLOptions: _,
                inlineImages: y,
                recordCanvas: S,
                preserveWhiteSpace: D,
                onSerialize: v,
                onIframeLoad: b,
                iframeLoadTimeout: C,
                onStylesheetLoad: I,
                stylesheetLoadTimeout: w,
                keepIframeSrcFn: T
            });
            H && I(e, H)
        }
    }
    , w),
    O
}
function cP(e, t) {
    const {mirror: n=new xE, blockClass: r="rr-block", blockSelector: s=null, unblockSelector: o=null, maskAllText: i=!1, maskTextClass: a="rr-mask", unmaskTextClass: c=null, maskTextSelector: u=null, unmaskTextSelector: l=null, inlineStylesheet: f=!0, inlineImages: d=!1, recordCanvas: p=!1, maskAllInputs: m=!1, maskAttributeFn: h, maskTextFn: g, maskInputFn: E, slimDOM: x=!1, dataURLOptions: _, preserveWhiteSpace: y, onSerialize: S, onIframeLoad: v, iframeLoadTimeout: b, onStylesheetLoad: C, stylesheetLoadTimeout: I, keepIframeSrcFn: w= () => !1} = t || {};
    return Is(e, {
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: o,
        maskAllText: i,
        maskTextClass: a,
        unmaskTextClass: c,
        maskTextSelector: u,
        unmaskTextSelector: l,
        skipChild: !1,
        inlineStylesheet: f,
        maskInputOptions: m === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0
        } : m === !1 ? {} : m,
        maskAttributeFn: h,
        maskTextFn: g,
        maskInputFn: E,
        slimDOMOptions: x === !0 || x === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: x === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0
        } : x === !1 ? {} : x,
        dataURLOptions: _,
        inlineImages: d,
        recordCanvas: p,
        preserveWhiteSpace: y,
        onSerialize: S,
        onIframeLoad: v,
        iframeLoadTimeout: b,
        onStylesheetLoad: C,
        stylesheetLoadTimeout: I,
        keepIframeSrcFn: w,
        newlyAddedElement: !1
    })
}
function fr(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...i) => n.call(t, ...i)),
        t = void 0)
    }
    return n
}
function At(e, t, n=document) {
    const r = {
        capture: !0,
        passive: !0
    };
    return n.addEventListener(e, t, r),
    () => n.removeEventListener(e, t, r)
}
const As = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let Vg = {
    map: {},
    getId() {
        return console.error(As),
        -1
    },
    getNode() {
        return console.error(As),
        null
    },
    removeNodeFromMap() {
        console.error(As)
    },
    has() {
        return console.error(As),
        !1
    },
    reset() {
        console.error(As)
    }
};
typeof window < "u" && window.Proxy && window.Reflect && (Vg = new Proxy(Vg,{
    get(e, t, n) {
        return t === "map" && console.error(As),
        Reflect.get(e, t, n)
    }
}));
function _i(e, t, n={}) {
    let r = null
      , s = 0;
    return function(...o) {
        const i = Date.now();
        !s && n.leading === !1 && (s = i);
        const a = t - (i - s)
          , c = this;
        a <= 0 || a > t ? (r && (mP(r),
        r = null),
        s = i,
        e.apply(c, o)) : !r && n.trailing !== !1 && (r = ru( () => {
            s = n.leading === !1 ? 0 : Date.now(),
            r = null,
            e.apply(c, o)
        }
        , a))
    }
}
function wE(e, t, n, r, s=window) {
    const o = s.Object.getOwnPropertyDescriptor(e, t);
    return s.Object.defineProperty(e, t, r ? n : {
        set(i) {
            ru( () => {
                n.set.call(this, i)
            }
            , 0),
            o && o.set && o.set.call(this, i)
        }
    }),
    () => wE(e, t, o || {}, !0)
}
function Kd(e, t, n) {
    try {
        if (!(t in e))
            return () => {}
            ;
        const r = e[t]
          , s = n(r);
        return typeof s == "function" && (s.prototype = s.prototype || {},
        Object.defineProperties(s, {
            __rrweb_original__: {
                enumerable: !1,
                value: r
            }
        })),
        e[t] = s,
        () => {
            e[t] = r
        }
    } catch {
        return () => {}
    }
}
let oc = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) || (oc = () => new Date().getTime());
function CE(e) {
    const t = e.document;
    return {
        left: t.scrollingElement ? t.scrollingElement.scrollLeft : e.pageXOffset !== void 0 ? e.pageXOffset : fr([t, "optionalAccess", n => n.documentElement, "access", n => n.scrollLeft]) || fr([t, "optionalAccess", n => n.body, "optionalAccess", n => n.parentElement, "optionalAccess", n => n.scrollLeft]) || fr([t, "optionalAccess", n => n.body, "optionalAccess", n => n.scrollLeft]) || 0,
        top: t.scrollingElement ? t.scrollingElement.scrollTop : e.pageYOffset !== void 0 ? e.pageYOffset : fr([t, "optionalAccess", n => n.documentElement, "access", n => n.scrollTop]) || fr([t, "optionalAccess", n => n.body, "optionalAccess", n => n.parentElement, "optionalAccess", n => n.scrollTop]) || fr([t, "optionalAccess", n => n.body, "optionalAccess", n => n.scrollTop]) || 0
    }
}
function AE() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}
function TE() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}
function kE(e) {
    return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
}
function un(e, t, n, r, s) {
    if (!e)
        return !1;
    const o = kE(e);
    if (!o)
        return !1;
    const i = Rs(t, n);
    if (!s) {
        const u = r && o.matches(r);
        return i(o) && !u
    }
    const a = Ur(o, i);
    let c = -1;
    return a < 0 ? !1 : (r && (c = Ur(o, Rs(null, r))),
    a > -1 && c < 0 ? !0 : a < c)
}
function uP(e, t) {
    return t.getId(e) !== -1
}
function Ol(e, t) {
    return t.getId(e) === gi
}
function RE(e, t) {
    if (Vo(e))
        return !1;
    const n = t.getId(e);
    return t.has(n) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? RE(e.parentNode, t) : !0 : !0
}
function n0(e) {
    return !!e.changedTouches
}
function lP(e=window) {
    "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains || (Node.prototype.contains = (...t) => {
        let n = t[0];
        if (!(0 in t))
            throw new TypeError("1 argument is required");
        do
            if (this === n)
                return !0;
        while (n = n && n.parentNode);
        return !1
    }
    )
}
function IE(e, t) {
    return !!(e.nodeName === "IFRAME" && t.getMeta(e))
}
function DE(e, t) {
    return !!(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e))
}
function r0(e) {
    return !!fr([e, "optionalAccess", t => t.shadowRoot])
}
class fP {
    constructor() {
        this.id = 1,
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map
    }
    getId(t) {
        return u5(this.styleIDMap.get(t), () => -1)
    }
    has(t) {
        return this.styleIDMap.has(t)
    }
    add(t, n) {
        if (this.has(t))
            return this.getId(t);
        let r;
        return n === void 0 ? r = this.id++ : r = n,
        this.styleIDMap.set(t, r),
        this.idStyleMap.set(r, t),
        r
    }
    getStyle(t) {
        return this.idStyleMap.get(t) || null
    }
    reset() {
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map,
        this.id = 1
    }
    generateId() {
        return this.id++
    }
}
function BE(e) {
    let t = null;
    return fr([e, "access", n => n.getRootNode, "optionalCall", n => n(), "optionalAccess", n => n.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host),
    t
}
function dP(e) {
    let t = e, n;
    for (; n = BE(t); )
        t = n;
    return t
}
function pP(e) {
    const t = e.ownerDocument;
    if (!t)
        return !1;
    const n = dP(e);
    return t.contains(n)
}
function OE(e) {
    const t = e.ownerDocument;
    return t ? t.contains(e) || pP(e) : !1
}
const Kg = {};
function Gd(e) {
    const t = Kg[e];
    if (t)
        return t;
    const n = window.document;
    let r = window[e];
    if (n && typeof n.createElement == "function")
        try {
            const s = n.createElement("iframe");
            s.hidden = !0,
            n.head.appendChild(s);
            const o = s.contentWindow;
            o && o[e] && (r = o[e]),
            n.head.removeChild(s)
        } catch {}
    return Kg[e] = r.bind(window)
}
function hP(...e) {
    return Gd("requestAnimationFrame")(...e)
}
function ru(...e) {
    return Gd("setTimeout")(...e)
}
function mP(...e) {
    return Gd("clearTimeout")(...e)
}
var ye = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
e[e.Load = 1] = "Load",
e[e.FullSnapshot = 2] = "FullSnapshot",
e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
e[e.Meta = 4] = "Meta",
e[e.Custom = 5] = "Custom",
e[e.Plugin = 6] = "Plugin",
e))(ye || {})
  , ve = (e => (e[e.Mutation = 0] = "Mutation",
e[e.MouseMove = 1] = "MouseMove",
e[e.MouseInteraction = 2] = "MouseInteraction",
e[e.Scroll = 3] = "Scroll",
e[e.ViewportResize = 4] = "ViewportResize",
e[e.Input = 5] = "Input",
e[e.TouchMove = 6] = "TouchMove",
e[e.MediaInteraction = 7] = "MediaInteraction",
e[e.StyleSheetRule = 8] = "StyleSheetRule",
e[e.CanvasMutation = 9] = "CanvasMutation",
e[e.Font = 10] = "Font",
e[e.Log = 11] = "Log",
e[e.Drag = 12] = "Drag",
e[e.StyleDeclaration = 13] = "StyleDeclaration",
e[e.Selection = 14] = "Selection",
e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
e[e.CustomElement = 16] = "CustomElement",
e))(ve || {})
  , wt = (e => (e[e.MouseUp = 0] = "MouseUp",
e[e.MouseDown = 1] = "MouseDown",
e[e.Click = 2] = "Click",
e[e.ContextMenu = 3] = "ContextMenu",
e[e.DblClick = 4] = "DblClick",
e[e.Focus = 5] = "Focus",
e[e.Blur = 6] = "Blur",
e[e.TouchStart = 7] = "TouchStart",
e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
e[e.TouchEnd = 9] = "TouchEnd",
e[e.TouchCancel = 10] = "TouchCancel",
e))(wt || {})
  , Bn = (e => (e[e.Mouse = 0] = "Mouse",
e[e.Pen = 1] = "Pen",
e[e.Touch = 2] = "Touch",
e))(Bn || {});
function gP(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...i) => n.call(t, ...i)),
        t = void 0)
    }
    return n
}
function Gg(e) {
    return "__ln"in e
}
class _P {
    constructor() {
        this.length = 0,
        this.head = null,
        this.tail = null
    }
    get(t) {
        if (t >= this.length)
            throw new Error("Position outside of list range");
        let n = this.head;
        for (let r = 0; r < t; r++)
            n = gP([n, "optionalAccess", s => s.next]) || null;
        return n
    }
    addNode(t) {
        const n = {
            value: t,
            previous: null,
            next: null
        };
        if (t.__ln = n,
        t.previousSibling && Gg(t.previousSibling)) {
            const r = t.previousSibling.__ln.next;
            n.next = r,
            n.previous = t.previousSibling.__ln,
            t.previousSibling.__ln.next = n,
            r && (r.previous = n)
        } else if (t.nextSibling && Gg(t.nextSibling) && t.nextSibling.__ln.previous) {
            const r = t.nextSibling.__ln.previous;
            n.previous = r,
            n.next = t.nextSibling.__ln,
            t.nextSibling.__ln.previous = n,
            r && (r.next = n)
        } else
            this.head && (this.head.previous = n),
            n.next = this.head,
            this.head = n;
        n.next === null && (this.tail = n),
        this.length++
    }
    removeNode(t) {
        const n = t.__ln;
        this.head && (n.previous ? (n.previous.next = n.next,
        n.next ? n.next.previous = n.previous : this.tail = n.previous) : (this.head = n.next,
        this.head ? this.head.previous = null : this.tail = null),
        t.__ln && delete t.__ln,
        this.length--)
    }
}
const Xg = (e, t) => `${e}@${t}`;
class xP {
    constructor() {
        this.frozen = !1,
        this.locked = !1,
        this.texts = [],
        this.attributes = [],
        this.attributeMap = new WeakMap,
        this.removes = [],
        this.mapRemoves = [],
        this.movedMap = {},
        this.addedSet = new Set,
        this.movedSet = new Set,
        this.droppedSet = new Set,
        this.processMutations = t => {
            t.forEach(this.processMutation),
            this.emit()
        }
        ,
        this.emit = () => {
            if (this.frozen || this.locked)
                return;
            const t = []
              , n = new Set
              , r = new _P
              , s = c => {
                let u = c
                  , l = gi;
                for (; l === gi; )
                    u = u && u.nextSibling,
                    l = u && this.mirror.getId(u);
                return l
            }
              , o = c => {
                if (!c.parentNode || !OE(c))
                    return;
                const u = Vo(c.parentNode) ? this.mirror.getId(BE(c)) : this.mirror.getId(c.parentNode)
                  , l = s(c);
                if (u === -1 || l === -1)
                    return r.addNode(c);
                const f = Is(c, {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskAllText: this.maskAllText,
                    unblockSelector: this.unblockSelector,
                    maskTextClass: this.maskTextClass,
                    unmaskTextClass: this.unmaskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    unmaskTextSelector: this.unmaskTextSelector,
                    skipChild: !0,
                    newlyAddedElement: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskAttributeFn: this.maskAttributeFn,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: d => {
                        IE(d, this.mirror) && this.iframeManager.addIframe(d),
                        DE(d, this.mirror) && this.stylesheetManager.trackLinkElement(d),
                        r0(c) && this.shadowDomManager.addShadowRoot(c.shadowRoot, this.doc)
                    }
                    ,
                    onIframeLoad: (d, p) => {
                        this.iframeManager.attachIframe(d, p),
                        d.contentWindow && this.canvasManager.addWindow(d.contentWindow),
                        this.shadowDomManager.observeAttachShadow(d)
                    }
                    ,
                    onStylesheetLoad: (d, p) => {
                        this.stylesheetManager.attachLinkElement(d, p)
                    }
                });
                f && (t.push({
                    parentId: u,
                    nextId: l,
                    node: f
                }),
                n.add(f.id))
            }
            ;
            for (; this.mapRemoves.length; )
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const c of this.movedSet)
                Yg(this.removes, c, this.mirror) && !this.movedSet.has(c.parentNode) || o(c);
            for (const c of this.addedSet)
                !Jg(this.droppedSet, c) && !Yg(this.removes, c, this.mirror) || Jg(this.movedSet, c) ? o(c) : this.droppedSet.add(c);
            let i = null;
            for (; r.length; ) {
                let c = null;
                if (i) {
                    const u = this.mirror.getId(i.value.parentNode)
                      , l = s(i.value);
                    u !== -1 && l !== -1 && (c = i)
                }
                if (!c) {
                    let u = r.tail;
                    for (; u; ) {
                        const l = u;
                        if (u = u.previous,
                        l) {
                            const f = this.mirror.getId(l.value.parentNode);
                            if (s(l.value) === -1)
                                continue;
                            if (f !== -1) {
                                c = l;
                                break
                            } else {
                                const p = l.value;
                                if (p.parentNode && p.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                    const m = p.parentNode.host;
                                    if (this.mirror.getId(m) !== -1) {
                                        c = l;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                if (!c) {
                    for (; r.head; )
                        r.removeNode(r.head.value);
                    break
                }
                i = c.previous,
                r.removeNode(c.value),
                o(c.value)
            }
            const a = {
                texts: this.texts.map(c => ({
                    id: this.mirror.getId(c.node),
                    value: c.value
                })).filter(c => !n.has(c.id)).filter(c => this.mirror.has(c.id)),
                attributes: this.attributes.map(c => {
                    const {attributes: u} = c;
                    if (typeof u.style == "string") {
                        const l = JSON.stringify(c.styleDiff)
                          , f = JSON.stringify(c._unchangedStyles);
                        l.length < u.style.length && (l + f).split("var(").length === u.style.split("var(").length && (u.style = c.styleDiff)
                    }
                    return {
                        id: this.mirror.getId(c.node),
                        attributes: u
                    }
                }
                ).filter(c => !n.has(c.id)).filter(c => this.mirror.has(c.id)),
                removes: this.removes,
                adds: t
            };
            !a.texts.length && !a.attributes.length && !a.removes.length && !a.adds.length || (this.texts = [],
            this.attributes = [],
            this.attributeMap = new WeakMap,
            this.removes = [],
            this.addedSet = new Set,
            this.movedSet = new Set,
            this.droppedSet = new Set,
            this.movedMap = {},
            this.mutationCb(a))
        }
        ,
        this.processMutation = t => {
            if (!Ol(t.target, this.mirror))
                switch (t.type) {
                case "characterData":
                    {
                        const n = t.target.textContent;
                        !un(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) && n !== t.oldValue && this.texts.push({
                            value: uo(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && n ? this.maskTextFn ? this.maskTextFn(n, kE(t.target)) : n.replace(/[\S]/g, "*") : n,
                            node: t.target
                        });
                        break
                    }
                case "attributes":
                    {
                        const n = t.target;
                        let r = t.attributeName
                          , s = t.target.getAttribute(r);
                        if (r === "value") {
                            const i = Wd(n)
                              , a = n.tagName;
                            s = rc(n, a, i);
                            const c = nu({
                                maskInputOptions: this.maskInputOptions,
                                tagName: a,
                                type: i
                            })
                              , u = uo(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, c);
                            s = mi({
                                isMasked: u,
                                element: n,
                                value: s,
                                maskInputFn: this.maskInputFn
                            })
                        }
                        if (un(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || s === t.oldValue)
                            return;
                        let o = this.attributeMap.get(t.target);
                        if (n.tagName === "IFRAME" && r === "src" && !this.keepIframeSrcFn(s))
                            if (!n.contentDocument)
                                r = "rr_src";
                            else
                                return;
                        if (o || (o = {
                            node: t.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        },
                        this.attributes.push(o),
                        this.attributeMap.set(t.target, o)),
                        r === "type" && n.tagName === "INPUT" && (t.oldValue || "").toLowerCase() === "password" && n.setAttribute("data-rr-is-password", "true"),
                        !SE(n.tagName, r) && (o.attributes[r] = bE(this.doc, co(n.tagName), co(r), s, n, this.maskAttributeFn),
                        r === "style")) {
                            if (!this.unattachedDoc)
                                try {
                                    this.unattachedDoc = document.implementation.createHTMLDocument()
                                } catch {
                                    this.unattachedDoc = this.doc
                                }
                            const i = this.unattachedDoc.createElement("span");
                            t.oldValue && i.setAttribute("style", t.oldValue);
                            for (const a of Array.from(n.style)) {
                                const c = n.style.getPropertyValue(a)
                                  , u = n.style.getPropertyPriority(a);
                                c !== i.style.getPropertyValue(a) || u !== i.style.getPropertyPriority(a) ? u === "" ? o.styleDiff[a] = c : o.styleDiff[a] = [c, u] : o._unchangedStyles[a] = [c, u]
                            }
                            for (const a of Array.from(i.style))
                                n.style.getPropertyValue(a) === "" && (o.styleDiff[a] = !1)
                        }
                        break
                    }
                case "childList":
                    {
                        if (un(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0))
                            return;
                        t.addedNodes.forEach(n => this.genAdds(n, t.target)),
                        t.removedNodes.forEach(n => {
                            const r = this.mirror.getId(n)
                              , s = Vo(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                            un(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Ol(n, this.mirror) || !uP(n, this.mirror) || (this.addedSet.has(n) ? (s0(this.addedSet, n),
                            this.droppedSet.add(n)) : this.addedSet.has(t.target) && r === -1 || RE(t.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[Xg(r, s)] ? s0(this.movedSet, n) : this.removes.push({
                                parentId: s,
                                id: r,
                                isShadow: Vo(t.target) && Ko(t.target) ? !0 : void 0
                            })),
                            this.mapRemoves.push(n))
                        }
                        );
                        break
                    }
                }
        }
        ,
        this.genAdds = (t, n) => {
            if (!this.processedNodeManager.inOtherBuffer(t, this) && !(this.addedSet.has(t) || this.movedSet.has(t))) {
                if (this.mirror.hasNode(t)) {
                    if (Ol(t, this.mirror))
                        return;
                    this.movedSet.add(t);
                    let r = null;
                    n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
                    r && r !== -1 && (this.movedMap[Xg(this.mirror.getId(t), r)] = !0)
                } else
                    this.addedSet.add(t),
                    this.droppedSet.delete(t);
                un(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (t.childNodes.forEach(r => this.genAdds(r)),
                r0(t) && t.shadowRoot.childNodes.forEach(r => {
                    this.processedNodeManager.add(r, this),
                    this.genAdds(r, t)
                }
                ))
            }
        }
    }
    init(t) {
        ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(n => {
            this[n] = t[n]
        }
        )
    }
    freeze() {
        this.frozen = !0,
        this.canvasManager.freeze()
    }
    unfreeze() {
        this.frozen = !1,
        this.canvasManager.unfreeze(),
        this.emit()
    }
    isFrozen() {
        return this.frozen
    }
    lock() {
        this.locked = !0,
        this.canvasManager.lock()
    }
    unlock() {
        this.locked = !1,
        this.canvasManager.unlock(),
        this.emit()
    }
    reset() {
        this.shadowDomManager.reset(),
        this.canvasManager.reset()
    }
}
function s0(e, t) {
    e.delete(t),
    t.childNodes.forEach(n => s0(e, n))
}
function Yg(e, t, n) {
    return e.length === 0 ? !1 : FE(e, t, n)
}
function FE(e, t, n) {
    const {parentNode: r} = t;
    if (!r)
        return !1;
    const s = n.getId(r);
    return e.some(o => o.id === s) ? !0 : FE(e, r, n)
}
function Jg(e, t) {
    return e.size === 0 ? !1 : PE(e, t)
}
function PE(e, t) {
    const {parentNode: n} = t;
    return n ? e.has(n) ? !0 : PE(e, n) : !1
}
let Go;
function yP(e) {
    Go = e
}
function vP() {
    Go = void 0
}
const ke = e => Go ? (...n) => {
    try {
        return e(...n)
    } catch (r) {
        if (Go && Go(r) === !0)
            return () => {}
            ;
        throw r
    }
}
: e;
function an(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...i) => n.call(t, ...i)),
        t = void 0)
    }
    return n
}
const Ds = [];
function Mi(e) {
    try {
        if ("composedPath"in e) {
            const t = e.composedPath();
            if (t.length)
                return t[0]
        } else if ("path"in e && e.path.length)
            return e.path[0]
    } catch {}
    return e && e.target
}
function NE(e, t) {
    const n = new xP;
    Ds.push(n),
    n.init(e);
    let r = window.MutationObserver || window.__rrMutationObserver;
    const s = an([window, "optionalAccess", i => i.Zone, "optionalAccess", i => i.__symbol__, "optionalCall", i => i("MutationObserver")]);
    s && window[s] && (r = window[s]);
    const o = new r(ke(i => {
        e.onMutation && e.onMutation(i) === !1 || n.processMutations.bind(n)(i)
    }
    ));
    return o.observe(t, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }),
    o
}
function EP({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
    if (t.mousemove === !1)
        return () => {}
        ;
    const s = typeof t.mousemove == "number" ? t.mousemove : 50
      , o = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
    let i = [], a;
    const c = _i(ke(f => {
        const d = Date.now() - a;
        e(i.map(p => (p.timeOffset -= d,
        p)), f),
        i = [],
        a = null
    }
    ), o)
      , u = ke(_i(ke(f => {
        const d = Mi(f)
          , {clientX: p, clientY: m} = n0(f) ? f.changedTouches[0] : f;
        a || (a = oc()),
        i.push({
            x: p,
            y: m,
            id: r.getId(d),
            timeOffset: oc() - a
        }),
        c(typeof DragEvent < "u" && f instanceof DragEvent ? ve.Drag : f instanceof MouseEvent ? ve.MouseMove : ve.TouchMove)
    }
    ), s, {
        trailing: !1
    }))
      , l = [At("mousemove", u, n), At("touchmove", u, n), At("drag", u, n)];
    return ke( () => {
        l.forEach(f => f())
    }
    )
}
function bP({mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, sampling: i}) {
    if (i.mouseInteraction === !1)
        return () => {}
        ;
    const a = i.mouseInteraction === !0 || i.mouseInteraction === void 0 ? {} : i.mouseInteraction
      , c = [];
    let u = null;
    const l = f => d => {
        const p = Mi(d);
        if (un(p, r, s, o, !0))
            return;
        let m = null
          , h = f;
        if ("pointerType"in d) {
            switch (d.pointerType) {
            case "mouse":
                m = Bn.Mouse;
                break;
            case "touch":
                m = Bn.Touch;
                break;
            case "pen":
                m = Bn.Pen;
                break
            }
            m === Bn.Touch ? wt[f] === wt.MouseDown ? h = "TouchStart" : wt[f] === wt.MouseUp && (h = "TouchEnd") : Bn.Pen
        } else
            n0(d) && (m = Bn.Touch);
        m !== null ? (u = m,
        (h.startsWith("Touch") && m === Bn.Touch || h.startsWith("Mouse") && m === Bn.Mouse) && (m = null)) : wt[f] === wt.Click && (m = u,
        u = null);
        const g = n0(d) ? d.changedTouches[0] : d;
        if (!g)
            return;
        const E = n.getId(p)
          , {clientX: x, clientY: _} = g;
        ke(e)({
            type: wt[h],
            id: E,
            x,
            y: _,
            ...m !== null && {
                pointerType: m
            }
        })
    }
    ;
    return Object.keys(wt).filter(f => Number.isNaN(Number(f)) && !f.endsWith("_Departed") && a[f] !== !1).forEach(f => {
        let d = co(f);
        const p = l(f);
        if (window.PointerEvent)
            switch (wt[f]) {
            case wt.MouseDown:
            case wt.MouseUp:
                d = d.replace("mouse", "pointer");
                break;
            case wt.TouchStart:
            case wt.TouchEnd:
                return
            }
        c.push(At(d, p, t))
    }
    ),
    ke( () => {
        c.forEach(f => f())
    }
    )
}
function ME({scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, sampling: i}) {
    const a = ke(_i(ke(c => {
        const u = Mi(c);
        if (!u || un(u, r, s, o, !0))
            return;
        const l = n.getId(u);
        if (u === t && t.defaultView) {
            const f = CE(t.defaultView);
            e({
                id: l,
                x: f.left,
                y: f.top
            })
        } else
            e({
                id: l,
                x: u.scrollLeft,
                y: u.scrollTop
            })
    }
    ), i.scroll || 100));
    return At("scroll", a, t)
}
function SP({viewportResizeCb: e}, {win: t}) {
    let n = -1
      , r = -1;
    const s = ke(_i(ke( () => {
        const o = AE()
          , i = TE();
        (n !== o || r !== i) && (e({
            width: Number(i),
            height: Number(o)
        }),
        n = o,
        r = i)
    }
    ), 200));
    return At("resize", s, t)
}
const wP = ["INPUT", "TEXTAREA", "SELECT"]
  , Qg = new WeakMap;
function CP({inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, ignoreClass: i, ignoreSelector: a, maskInputOptions: c, maskInputFn: u, sampling: l, userTriggeredOnInput: f, maskTextClass: d, unmaskTextClass: p, maskTextSelector: m, unmaskTextSelector: h}) {
    function g(b) {
        let C = Mi(b);
        const I = b.isTrusted
          , w = C && e0(C.tagName);
        if (w === "OPTION" && (C = C.parentElement),
        !C || !w || wP.indexOf(w) < 0 || un(C, r, s, o, !0))
            return;
        const T = C;
        if (T.classList.contains(i) || a && T.matches(a))
            return;
        const R = Wd(C);
        let D = rc(T, w, R)
          , z = !1;
        const X = nu({
            maskInputOptions: c,
            tagName: w,
            type: R
        })
          , O = uo(C, d, m, p, h, X);
        (R === "radio" || R === "checkbox") && (z = C.checked),
        D = mi({
            isMasked: O,
            element: C,
            value: D,
            maskInputFn: u
        }),
        E(C, f ? {
            text: D,
            isChecked: z,
            userTriggered: I
        } : {
            text: D,
            isChecked: z
        });
        const Z = C.name;
        R === "radio" && Z && z && t.querySelectorAll(`input[type="radio"][name="${Z}"]`).forEach(H => {
            if (H !== C) {
                const ie = mi({
                    isMasked: O,
                    element: H,
                    value: rc(H, w, R),
                    maskInputFn: u
                });
                E(H, f ? {
                    text: ie,
                    isChecked: !z,
                    userTriggered: !1
                } : {
                    text: ie,
                    isChecked: !z
                })
            }
        }
        )
    }
    function E(b, C) {
        const I = Qg.get(b);
        if (!I || I.text !== C.text || I.isChecked !== C.isChecked) {
            Qg.set(b, C);
            const w = n.getId(b);
            ke(e)({
                ...C,
                id: w
            })
        }
    }
    const _ = (l.input === "last" ? ["change"] : ["input", "change"]).map(b => At(b, ke(g), t))
      , y = t.defaultView;
    if (!y)
        return () => {
            _.forEach(b => b())
        }
        ;
    const S = y.Object.getOwnPropertyDescriptor(y.HTMLInputElement.prototype, "value")
      , v = [[y.HTMLInputElement.prototype, "value"], [y.HTMLInputElement.prototype, "checked"], [y.HTMLSelectElement.prototype, "value"], [y.HTMLTextAreaElement.prototype, "value"], [y.HTMLSelectElement.prototype, "selectedIndex"], [y.HTMLOptionElement.prototype, "selected"]];
    return S && S.set && _.push(...v.map(b => wE(b[0], b[1], {
        set() {
            ke(g)({
                target: this,
                isTrusted: !1
            })
        }
    }, !1, y))),
    ke( () => {
        _.forEach(b => b())
    }
    )
}
function ic(e) {
    const t = [];
    function n(r, s) {
        if (la("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule || la("CSSMediaRule") && r.parentRule instanceof CSSMediaRule || la("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule || la("CSSConditionRule") && r.parentRule instanceof CSSConditionRule) {
            const i = Array.from(r.parentRule.cssRules).indexOf(r);
            s.unshift(i)
        } else if (r.parentStyleSheet) {
            const i = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
            s.unshift(i)
        }
        return s
    }
    return n(e, t)
}
function dr(e, t, n) {
    let r, s;
    return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : s = n.getId(e),
    {
        styleId: s,
        id: r
    }) : {}
}
function AP({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
    if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
        return () => {}
        ;
    const s = r.CSSStyleSheet.prototype.insertRule;
    r.CSSStyleSheet.prototype.insertRule = new Proxy(s,{
        apply: ke( (l, f, d) => {
            const [p,m] = d
              , {id: h, styleId: g} = dr(f, t, n.styleMirror);
            return (h && h !== -1 || g && g !== -1) && e({
                id: h,
                styleId: g,
                adds: [{
                    rule: p,
                    index: m
                }]
            }),
            l.apply(f, d)
        }
        )
    });
    const o = r.CSSStyleSheet.prototype.deleteRule;
    r.CSSStyleSheet.prototype.deleteRule = new Proxy(o,{
        apply: ke( (l, f, d) => {
            const [p] = d
              , {id: m, styleId: h} = dr(f, t, n.styleMirror);
            return (m && m !== -1 || h && h !== -1) && e({
                id: m,
                styleId: h,
                removes: [{
                    index: p
                }]
            }),
            l.apply(f, d)
        }
        )
    });
    let i;
    r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace,
    r.CSSStyleSheet.prototype.replace = new Proxy(i,{
        apply: ke( (l, f, d) => {
            const [p] = d
              , {id: m, styleId: h} = dr(f, t, n.styleMirror);
            return (m && m !== -1 || h && h !== -1) && e({
                id: m,
                styleId: h,
                replace: p
            }),
            l.apply(f, d)
        }
        )
    }));
    let a;
    r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync,
    r.CSSStyleSheet.prototype.replaceSync = new Proxy(a,{
        apply: ke( (l, f, d) => {
            const [p] = d
              , {id: m, styleId: h} = dr(f, t, n.styleMirror);
            return (m && m !== -1 || h && h !== -1) && e({
                id: m,
                styleId: h,
                replaceSync: p
            }),
            l.apply(f, d)
        }
        )
    }));
    const c = {};
    fa("CSSGroupingRule") ? c.CSSGroupingRule = r.CSSGroupingRule : (fa("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule),
    fa("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule),
    fa("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
    const u = {};
    return Object.entries(c).forEach( ([l,f]) => {
        u[l] = {
            insertRule: f.prototype.insertRule,
            deleteRule: f.prototype.deleteRule
        },
        f.prototype.insertRule = new Proxy(u[l].insertRule,{
            apply: ke( (d, p, m) => {
                const [h,g] = m
                  , {id: E, styleId: x} = dr(p.parentStyleSheet, t, n.styleMirror);
                return (E && E !== -1 || x && x !== -1) && e({
                    id: E,
                    styleId: x,
                    adds: [{
                        rule: h,
                        index: [...ic(p), g || 0]
                    }]
                }),
                d.apply(p, m)
            }
            )
        }),
        f.prototype.deleteRule = new Proxy(u[l].deleteRule,{
            apply: ke( (d, p, m) => {
                const [h] = m
                  , {id: g, styleId: E} = dr(p.parentStyleSheet, t, n.styleMirror);
                return (g && g !== -1 || E && E !== -1) && e({
                    id: g,
                    styleId: E,
                    removes: [{
                        index: [...ic(p), h]
                    }]
                }),
                d.apply(p, m)
            }
            )
        })
    }
    ),
    ke( () => {
        r.CSSStyleSheet.prototype.insertRule = s,
        r.CSSStyleSheet.prototype.deleteRule = o,
        i && (r.CSSStyleSheet.prototype.replace = i),
        a && (r.CSSStyleSheet.prototype.replaceSync = a),
        Object.entries(c).forEach( ([l,f]) => {
            f.prototype.insertRule = u[l].insertRule,
            f.prototype.deleteRule = u[l].deleteRule
        }
        )
    }
    )
}
function LE({mirror: e, stylesheetManager: t}, n) {
    let r = null;
    n.nodeName === "#document" ? r = e.getId(n) : r = e.getId(n.host);
    const s = n.nodeName === "#document" ? an([n, "access", i => i.defaultView, "optionalAccess", i => i.Document]) : an([n, "access", i => i.ownerDocument, "optionalAccess", i => i.defaultView, "optionalAccess", i => i.ShadowRoot])
      , o = an([s, "optionalAccess", i => i.prototype]) ? Object.getOwnPropertyDescriptor(an([s, "optionalAccess", i => i.prototype]), "adoptedStyleSheets") : void 0;
    return r === null || r === -1 || !s || !o ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: o.configurable,
        enumerable: o.enumerable,
        get() {
            return an([o, "access", i => i.get, "optionalAccess", i => i.call, "call", i => i(this)])
        },
        set(i) {
            const a = an([o, "access", c => c.set, "optionalAccess", c => c.call, "call", c => c(this, i)]);
            if (r !== null && r !== -1)
                try {
                    t.adoptStyleSheets(i, r)
                } catch {}
            return a
        }
    }),
    ke( () => {
        Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: o.configurable,
            enumerable: o.enumerable,
            get: o.get,
            set: o.set
        })
    }
    ))
}
function TP({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r}, {win: s}) {
    const o = s.CSSStyleDeclaration.prototype.setProperty;
    s.CSSStyleDeclaration.prototype.setProperty = new Proxy(o,{
        apply: ke( (a, c, u) => {
            const [l,f,d] = u;
            if (n.has(l))
                return o.apply(c, [l, f, d]);
            const {id: p, styleId: m} = dr(an([c, "access", h => h.parentRule, "optionalAccess", h => h.parentStyleSheet]), t, r.styleMirror);
            return (p && p !== -1 || m && m !== -1) && e({
                id: p,
                styleId: m,
                set: {
                    property: l,
                    value: f,
                    priority: d
                },
                index: ic(c.parentRule)
            }),
            a.apply(c, u)
        }
        )
    });
    const i = s.CSSStyleDeclaration.prototype.removeProperty;
    return s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i,{
        apply: ke( (a, c, u) => {
            const [l] = u;
            if (n.has(l))
                return i.apply(c, [l]);
            const {id: f, styleId: d} = dr(an([c, "access", p => p.parentRule, "optionalAccess", p => p.parentStyleSheet]), t, r.styleMirror);
            return (f && f !== -1 || d && d !== -1) && e({
                id: f,
                styleId: d,
                remove: {
                    property: l
                },
                index: ic(c.parentRule)
            }),
            a.apply(c, u)
        }
        )
    }),
    ke( () => {
        s.CSSStyleDeclaration.prototype.setProperty = o,
        s.CSSStyleDeclaration.prototype.removeProperty = i
    }
    )
}
function kP({mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: r, mirror: s, sampling: o, doc: i}) {
    const a = ke(u => _i(ke(l => {
        const f = Mi(l);
        if (!f || un(f, t, n, r, !0))
            return;
        const {currentTime: d, volume: p, muted: m, playbackRate: h} = f;
        e({
            type: u,
            id: s.getId(f),
            currentTime: d,
            volume: p,
            muted: m,
            playbackRate: h
        })
    }
    ), o.media || 500))
      , c = [At("play", a(0), i), At("pause", a(1), i), At("seeked", a(2), i), At("volumechange", a(3), i), At("ratechange", a(4), i)];
    return ke( () => {
        c.forEach(u => u())
    }
    )
}
function RP({fontCb: e, doc: t}) {
    const n = t.defaultView;
    if (!n)
        return () => {}
        ;
    const r = []
      , s = new WeakMap
      , o = n.FontFace;
    n.FontFace = function(c, u, l) {
        const f = new o(c,u,l);
        return s.set(f, {
            family: c,
            buffer: typeof u != "string",
            descriptors: l,
            fontSource: typeof u == "string" ? u : JSON.stringify(Array.from(new Uint8Array(u)))
        }),
        f
    }
    ;
    const i = Kd(t.fonts, "add", function(a) {
        return function(c) {
            return ru(ke( () => {
                const u = s.get(c);
                u && (e(u),
                s.delete(c))
            }
            ), 0),
            a.apply(this, [c])
        }
    });
    return r.push( () => {
        n.FontFace = o
    }
    ),
    r.push(i),
    ke( () => {
        r.forEach(a => a())
    }
    )
}
function IP(e) {
    const {doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, selectionCb: i} = e;
    let a = !0;
    const c = ke( () => {
        const u = t.getSelection();
        if (!u || a && an([u, "optionalAccess", d => d.isCollapsed]))
            return;
        a = u.isCollapsed || !1;
        const l = []
          , f = u.rangeCount || 0;
        for (let d = 0; d < f; d++) {
            const p = u.getRangeAt(d)
              , {startContainer: m, startOffset: h, endContainer: g, endOffset: E} = p;
            un(m, r, s, o, !0) || un(g, r, s, o, !0) || l.push({
                start: n.getId(m),
                startOffset: h,
                end: n.getId(g),
                endOffset: E
            })
        }
        i({
            ranges: l
        })
    }
    );
    return c(),
    At("selectionchange", c)
}
function DP({doc: e, customElementCb: t}) {
    const n = e.defaultView;
    return !n || !n.customElements ? () => {}
    : Kd(n.customElements, "define", function(s) {
        return function(o, i, a) {
            try {
                t({
                    define: {
                        name: o
                    }
                })
            } catch {}
            return s.apply(this, [o, i, a])
        }
    })
}
function BP(e, t={}) {
    const n = e.doc.defaultView;
    if (!n)
        return () => {}
        ;
    let r;
    e.recordDOM && (r = NE(e, e.doc));
    const s = EP(e)
      , o = bP(e)
      , i = ME(e)
      , a = SP(e, {
        win: n
    })
      , c = CP(e)
      , u = kP(e);
    let l = () => {}
      , f = () => {}
      , d = () => {}
      , p = () => {}
    ;
    e.recordDOM && (l = AP(e, {
        win: n
    }),
    f = LE(e, e.doc),
    d = TP(e, {
        win: n
    }),
    e.collectFonts && (p = RP(e)));
    const m = IP(e)
      , h = DP(e)
      , g = [];
    for (const E of e.plugins)
        g.push(E.observer(E.callback, n, E.options));
    return ke( () => {
        Ds.forEach(E => E.reset()),
        an([r, "optionalAccess", E => E.disconnect, "call", E => E()]),
        s(),
        o(),
        i(),
        a(),
        c(),
        u(),
        l(),
        f(),
        d(),
        p(),
        m(),
        h(),
        g.forEach(E => E())
    }
    )
}
function la(e) {
    return typeof window[e] < "u"
}
function fa(e) {
    return !!(typeof window[e] < "u" && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
}
class o0 {
    constructor(t) {
        this.generateIdFn = t,
        this.iframeIdToRemoteIdMap = new WeakMap,
        this.iframeRemoteIdToIdMap = new WeakMap
    }
    getId(t, n, r, s) {
        const o = r || this.getIdToRemoteIdMap(t)
          , i = s || this.getRemoteIdToIdMap(t);
        let a = o.get(n);
        return a || (a = this.generateIdFn(),
        o.set(n, a),
        i.set(a, n)),
        a
    }
    getIds(t, n) {
        const r = this.getIdToRemoteIdMap(t)
          , s = this.getRemoteIdToIdMap(t);
        return n.map(o => this.getId(t, o, r, s))
    }
    getRemoteId(t, n, r) {
        const s = r || this.getRemoteIdToIdMap(t);
        if (typeof n != "number")
            return n;
        const o = s.get(n);
        return o || -1
    }
    getRemoteIds(t, n) {
        const r = this.getRemoteIdToIdMap(t);
        return n.map(s => this.getRemoteId(t, s, r))
    }
    reset(t) {
        if (!t) {
            this.iframeIdToRemoteIdMap = new WeakMap,
            this.iframeRemoteIdToIdMap = new WeakMap;
            return
        }
        this.iframeIdToRemoteIdMap.delete(t),
        this.iframeRemoteIdToIdMap.delete(t)
    }
    getIdToRemoteIdMap(t) {
        let n = this.iframeIdToRemoteIdMap.get(t);
        return n || (n = new Map,
        this.iframeIdToRemoteIdMap.set(t, n)),
        n
    }
    getRemoteIdToIdMap(t) {
        let n = this.iframeRemoteIdToIdMap.get(t);
        return n || (n = new Map,
        this.iframeRemoteIdToIdMap.set(t, n)),
        n
    }
}
function Zg(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...i) => n.call(t, ...i)),
        t = void 0)
    }
    return n
}
class OP {
    constructor() {
        this.crossOriginIframeMirror = new o0(qd),
        this.crossOriginIframeRootIdMap = new WeakMap
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class FP {
    constructor(t) {
        this.iframes = new WeakMap,
        this.crossOriginIframeMap = new WeakMap,
        this.crossOriginIframeMirror = new o0(qd),
        this.crossOriginIframeRootIdMap = new WeakMap,
        this.mutationCb = t.mutationCb,
        this.wrappedEmit = t.wrappedEmit,
        this.stylesheetManager = t.stylesheetManager,
        this.recordCrossOriginIframes = t.recordCrossOriginIframes,
        this.crossOriginIframeStyleMirror = new o0(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
        this.mirror = t.mirror,
        this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
    }
    addIframe(t) {
        this.iframes.set(t, !0),
        t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t)
    }
    addLoadListener(t) {
        this.loadListener = t
    }
    attachIframe(t, n) {
        this.mutationCb({
            adds: [{
                parentId: this.mirror.getId(t),
                nextId: null,
                node: n
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }),
        Zg([this, "access", r => r.loadListener, "optionalCall", r => r(t)]),
        t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument))
    }
    handleMessage(t) {
        const n = t;
        if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !t.source)
            return;
        const s = this.crossOriginIframeMap.get(t.source);
        if (!s)
            return;
        const o = this.transformCrossOriginEvent(s, n.data.event);
        o && this.wrappedEmit(o, n.data.isCheckout)
    }
    transformCrossOriginEvent(t, n) {
        switch (n.type) {
        case ye.FullSnapshot:
            {
                this.crossOriginIframeMirror.reset(t),
                this.crossOriginIframeStyleMirror.reset(t),
                this.replaceIdOnNode(n.data.node, t);
                const r = n.data.node.id;
                return this.crossOriginIframeRootIdMap.set(t, r),
                this.patchRootIdOnNode(n.data.node, r),
                {
                    timestamp: n.timestamp,
                    type: ye.IncrementalSnapshot,
                    data: {
                        source: ve.Mutation,
                        adds: [{
                            parentId: this.mirror.getId(t),
                            nextId: null,
                            node: n.data.node
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }
                }
            }
        case ye.Meta:
        case ye.Load:
        case ye.DomContentLoaded:
            return !1;
        case ye.Plugin:
            return n;
        case ye.Custom:
            return this.replaceIds(n.data.payload, t, ["id", "parentId", "previousId", "nextId"]),
            n;
        case ye.IncrementalSnapshot:
            switch (n.data.source) {
            case ve.Mutation:
                return n.data.adds.forEach(r => {
                    this.replaceIds(r, t, ["parentId", "nextId", "previousId"]),
                    this.replaceIdOnNode(r.node, t);
                    const s = this.crossOriginIframeRootIdMap.get(t);
                    s && this.patchRootIdOnNode(r.node, s)
                }
                ),
                n.data.removes.forEach(r => {
                    this.replaceIds(r, t, ["parentId", "id"])
                }
                ),
                n.data.attributes.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n.data.texts.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n;
            case ve.Drag:
            case ve.TouchMove:
            case ve.MouseMove:
                return n.data.positions.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n;
            case ve.ViewportResize:
                return !1;
            case ve.MediaInteraction:
            case ve.MouseInteraction:
            case ve.Scroll:
            case ve.CanvasMutation:
            case ve.Input:
                return this.replaceIds(n.data, t, ["id"]),
                n;
            case ve.StyleSheetRule:
            case ve.StyleDeclaration:
                return this.replaceIds(n.data, t, ["id"]),
                this.replaceStyleIds(n.data, t, ["styleId"]),
                n;
            case ve.Font:
                return n;
            case ve.Selection:
                return n.data.ranges.forEach(r => {
                    this.replaceIds(r, t, ["start", "end"])
                }
                ),
                n;
            case ve.AdoptedStyleSheet:
                return this.replaceIds(n.data, t, ["id"]),
                this.replaceStyleIds(n.data, t, ["styleIds"]),
                Zg([n, "access", r => r.data, "access", r => r.styles, "optionalAccess", r => r.forEach, "call", r => r(s => {
                    this.replaceStyleIds(s, t, ["styleId"])
                }
                )]),
                n
            }
        }
        return !1
    }
    replace(t, n, r, s) {
        for (const o of s)
            !Array.isArray(n[o]) && typeof n[o] != "number" || (Array.isArray(n[o]) ? n[o] = t.getIds(r, n[o]) : n[o] = t.getId(r, n[o]));
        return n
    }
    replaceIds(t, n, r) {
        return this.replace(this.crossOriginIframeMirror, t, n, r)
    }
    replaceStyleIds(t, n, r) {
        return this.replace(this.crossOriginIframeStyleMirror, t, n, r)
    }
    replaceIdOnNode(t, n) {
        this.replaceIds(t, n, ["id", "rootId"]),
        "childNodes"in t && t.childNodes.forEach(r => {
            this.replaceIdOnNode(r, n)
        }
        )
    }
    patchRootIdOnNode(t, n) {
        t.type !== st.Document && !t.rootId && (t.rootId = n),
        "childNodes"in t && t.childNodes.forEach(r => {
            this.patchRootIdOnNode(r, n)
        }
        )
    }
}
class PP {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class NP {
    constructor(t) {
        this.shadowDoms = new WeakSet,
        this.restoreHandlers = [],
        this.mutationCb = t.mutationCb,
        this.scrollCb = t.scrollCb,
        this.bypassOptions = t.bypassOptions,
        this.mirror = t.mirror,
        this.init()
    }
    init() {
        this.reset(),
        this.patchAttachShadow(Element, document)
    }
    addShadowRoot(t, n) {
        if (!Ko(t) || this.shadowDoms.has(t))
            return;
        this.shadowDoms.add(t),
        this.bypassOptions.canvasManager.addShadowRoot(t);
        const r = NE({
            ...this.bypassOptions,
            doc: n,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
        }, t);
        this.restoreHandlers.push( () => r.disconnect()),
        this.restoreHandlers.push(ME({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: t,
            mirror: this.mirror
        })),
        ru( () => {
            t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)),
            this.restoreHandlers.push(LE({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager
            }, t))
        }
        , 0)
    }
    observeAttachShadow(t) {
        !t.contentWindow || !t.contentDocument || this.patchAttachShadow(t.contentWindow.Element, t.contentDocument)
    }
    patchAttachShadow(t, n) {
        const r = this;
        this.restoreHandlers.push(Kd(t.prototype, "attachShadow", function(s) {
            return function(o) {
                const i = s.call(this, o);
                return this.shadowRoot && OE(this) && r.addShadowRoot(this.shadowRoot, n),
                i
            }
        }))
    }
    reset() {
        this.restoreHandlers.forEach(t => {
            try {
                t()
            } catch {}
        }
        ),
        this.restoreHandlers = [],
        this.shadowDoms = new WeakSet,
        this.bypassOptions.canvasManager.resetShadowRoots()
    }
}
class e_ {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}
class MP {
    constructor(t) {
        this.trackedLinkElements = new WeakSet,
        this.styleMirror = new fP,
        this.mutationCb = t.mutationCb,
        this.adoptedStyleSheetCb = t.adoptedStyleSheetCb
    }
    attachLinkElement(t, n) {
        "_cssText"in n.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
                id: n.id,
                attributes: n.attributes
            }]
        }),
        this.trackLinkElement(t)
    }
    trackLinkElement(t) {
        this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t),
        this.trackStylesheetInLinkElement(t))
    }
    adoptStyleSheets(t, n) {
        if (t.length === 0)
            return;
        const r = {
            id: n,
            styleIds: []
        }
          , s = [];
        for (const o of t) {
            let i;
            this.styleMirror.has(o) ? i = this.styleMirror.getId(o) : (i = this.styleMirror.add(o),
            s.push({
                styleId: i,
                rules: Array.from(o.rules || CSSRule, (a, c) => ({
                    rule: _E(a),
                    index: c
                }))
            })),
            r.styleIds.push(i)
        }
        s.length > 0 && (r.styles = s),
        this.adoptedStyleSheetCb(r)
    }
    reset() {
        this.styleMirror.reset(),
        this.trackedLinkElements = new WeakSet
    }
    trackStylesheetInLinkElement(t) {}
}
class LP {
    constructor() {
        this.nodeMap = new WeakMap,
        this.loop = !0,
        this.periodicallyClear()
    }
    periodicallyClear() {
        hP( () => {
            this.clear(),
            this.loop && this.periodicallyClear()
        }
        )
    }
    inOtherBuffer(t, n) {
        const r = this.nodeMap.get(t);
        return r && Array.from(r).some(s => s !== n)
    }
    add(t, n) {
        this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(n))
    }
    clear() {
        this.nodeMap = new WeakMap
    }
    destroy() {
        this.loop = !1
    }
}
let Ye, ac;
try {
    if (Array.from([1], e => e * 2)[0] !== 2) {
        const e = document.createElement("iframe");
        document.body.appendChild(e),
        Array.from = wa([e, "access", t => t.contentWindow, "optionalAccess", t => t.Array, "access", t => t.from]) || Array.from,
        document.body.removeChild(e)
    }
} catch (e) {
    console.debug("Unable to override Array.from", e)
}
const sn = HF();
function yr(e={}) {
    const {emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: s="rr-block", blockSelector: o=null, unblockSelector: i=null, ignoreClass: a="rr-ignore", ignoreSelector: c=null, maskAllText: u=!1, maskTextClass: l="rr-mask", unmaskTextClass: f=null, maskTextSelector: d=null, unmaskTextSelector: p=null, inlineStylesheet: m=!0, maskAllInputs: h, maskInputOptions: g, slimDOMOptions: E, maskAttributeFn: x, maskInputFn: _, maskTextFn: y, maxCanvasSize: S=null, packFn: v, sampling: b={}, dataURLOptions: C={}, mousemoveWait: I, recordDOM: w=!0, recordCanvas: T=!1, recordCrossOriginIframes: R=!1, recordAfter: D=e.recordAfter === "DOMContentLoaded" ? e.recordAfter : "load", userTriggeredOnInput: z=!1, collectFonts: X=!1, inlineImages: O=!1, plugins: Z, keepIframeSrcFn: H= () => !1, ignoreCSSAttributes: ie=new Set([]), errorHandler: le, onMutation: L, getCanvasManager: j} = e;
    yP(le);
    const K = R ? window.parent === window : !0;
    let W = !1;
    if (!K)
        try {
            window.parent.document && (W = !1)
        } catch {
            W = !0
        }
    if (K && !t)
        throw new Error("emit function is required");
    I !== void 0 && b.mousemove === void 0 && (b.mousemove = I),
    sn.reset();
    const Ie = h === !0 ? {
        color: !0,
        date: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
        textarea: !0,
        select: !0,
        radio: !0,
        checkbox: !0
    } : g !== void 0 ? g : {}
      , fe = E === !0 || E === "all" ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: E === "all",
        headMetaDescKeywords: E === "all"
    } : E || {};
    lP();
    let P, q = 0;
    const ee = M => {
        for (const G of Z || [])
            G.eventProcessor && (M = G.eventProcessor(M));
        return v && !W && (M = v(M)),
        M
    }
    ;
    Ye = (M, G) => {
        const F = M;
        if (F.timestamp = oc(),
        wa([Ds, "access", Y => Y[0], "optionalAccess", Y => Y.isFrozen, "call", Y => Y()]) && F.type !== ye.FullSnapshot && !(F.type === ye.IncrementalSnapshot && F.data.source === ve.Mutation) && Ds.forEach(Y => Y.unfreeze()),
        K)
            wa([t, "optionalCall", Y => Y(ee(F), G)]);
        else if (W) {
            const Y = {
                type: "rrweb",
                event: ee(F),
                origin: window.location.origin,
                isCheckout: G
            };
            window.parent.postMessage(Y, "*")
        }
        if (F.type === ye.FullSnapshot)
            P = F,
            q = 0;
        else if (F.type === ye.IncrementalSnapshot) {
            if (F.data.source === ve.Mutation && F.data.isAttachIframe)
                return;
            q++;
            const Y = r && q >= r
              , Q = n && P && F.timestamp - P.timestamp > n;
            (Y || Q) && te(!0)
        }
    }
    ;
    const ne = M => {
        Ye({
            type: ye.IncrementalSnapshot,
            data: {
                source: ve.Mutation,
                ...M
            }
        })
    }
      , Ee = M => Ye({
        type: ye.IncrementalSnapshot,
        data: {
            source: ve.Scroll,
            ...M
        }
    })
      , Be = M => Ye({
        type: ye.IncrementalSnapshot,
        data: {
            source: ve.CanvasMutation,
            ...M
        }
    })
      , A = M => Ye({
        type: ye.IncrementalSnapshot,
        data: {
            source: ve.AdoptedStyleSheet,
            ...M
        }
    })
      , k = new MP({
        mutationCb: ne,
        adoptedStyleSheetCb: A
    })
      , B = typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__ ? new OP : new FP({
        mirror: sn,
        mutationCb: ne,
        stylesheetManager: k,
        recordCrossOriginIframes: R,
        wrappedEmit: Ye
    });
    for (const M of Z || [])
        M.getMirror && M.getMirror({
            nodeMirror: sn,
            crossOriginIframeMirror: B.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: B.crossOriginIframeStyleMirror
        });
    const $ = new LP
      , N = $P(j, {
        mirror: sn,
        win: window,
        mutationCb: M => Ye({
            type: ye.IncrementalSnapshot,
            data: {
                source: ve.CanvasMutation,
                ...M
            }
        }),
        recordCanvas: T,
        blockClass: s,
        blockSelector: o,
        unblockSelector: i,
        maxCanvasSize: S,
        sampling: b.canvas,
        dataURLOptions: C,
        errorHandler: le
    })
      , J = typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new PP : new NP({
        mutationCb: ne,
        scrollCb: Ee,
        bypassOptions: {
            onMutation: L,
            blockClass: s,
            blockSelector: o,
            unblockSelector: i,
            maskAllText: u,
            maskTextClass: l,
            unmaskTextClass: f,
            maskTextSelector: d,
            unmaskTextSelector: p,
            inlineStylesheet: m,
            maskInputOptions: Ie,
            dataURLOptions: C,
            maskAttributeFn: x,
            maskTextFn: y,
            maskInputFn: _,
            recordCanvas: T,
            inlineImages: O,
            sampling: b,
            slimDOMOptions: fe,
            iframeManager: B,
            stylesheetManager: k,
            canvasManager: N,
            keepIframeSrcFn: H,
            processedNodeManager: $
        },
        mirror: sn
    })
      , te = (M=!1) => {
        if (!w)
            return;
        Ye({
            type: ye.Meta,
            data: {
                href: window.location.href,
                width: TE(),
                height: AE()
            }
        }, M),
        k.reset(),
        J.init(),
        Ds.forEach(F => F.lock());
        const G = cP(document, {
            mirror: sn,
            blockClass: s,
            blockSelector: o,
            unblockSelector: i,
            maskAllText: u,
            maskTextClass: l,
            unmaskTextClass: f,
            maskTextSelector: d,
            unmaskTextSelector: p,
            inlineStylesheet: m,
            maskAllInputs: Ie,
            maskAttributeFn: x,
            maskInputFn: _,
            maskTextFn: y,
            slimDOM: fe,
            dataURLOptions: C,
            recordCanvas: T,
            inlineImages: O,
            onSerialize: F => {
                IE(F, sn) && B.addIframe(F),
                DE(F, sn) && k.trackLinkElement(F),
                r0(F) && J.addShadowRoot(F.shadowRoot, document)
            }
            ,
            onIframeLoad: (F, Y) => {
                B.attachIframe(F, Y),
                F.contentWindow && N.addWindow(F.contentWindow),
                J.observeAttachShadow(F)
            }
            ,
            onStylesheetLoad: (F, Y) => {
                k.attachLinkElement(F, Y)
            }
            ,
            keepIframeSrcFn: H
        });
        if (!G)
            return console.warn("Failed to snapshot the document");
        Ye({
            type: ye.FullSnapshot,
            data: {
                node: G,
                initialOffset: CE(window)
            }
        }),
        Ds.forEach(F => F.unlock()),
        document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && k.adoptStyleSheets(document.adoptedStyleSheets, sn.getId(document))
    }
    ;
    ac = te;
    try {
        const M = []
          , G = Y => ke(BP)({
            onMutation: L,
            mutationCb: ne,
            mousemoveCb: (Q, se) => Ye({
                type: ye.IncrementalSnapshot,
                data: {
                    source: se,
                    positions: Q
                }
            }),
            mouseInteractionCb: Q => Ye({
                type: ye.IncrementalSnapshot,
                data: {
                    source: ve.MouseInteraction,
                    ...Q
                }
            }),
            scrollCb: Ee,
            viewportResizeCb: Q => Ye({
                type: ye.IncrementalSnapshot,
                data: {
                    source: ve.ViewportResize,
                    ...Q
                }
            }),
            inputCb: Q => Ye({
                type: ye.IncrementalSnapshot,
                data: {
                    source: ve.Input,
                    ...Q
                }
            }),
            mediaInteractionCb: Q => Ye({
                type: ye.IncrementalSnapshot,
                data: {
                    source: ve.MediaInteraction,
                    ...Q
                }
            }),
            styleSheetRuleCb: Q => Ye({
                type: ye.IncrementalSnapshot,
                data: {
                    source: ve.StyleSheetRule,
                    ...Q
                }
            }),
            styleDeclarationCb: Q => Ye({
                type: ye.IncrementalSnapshot,
                data: {
                    source: ve.StyleDeclaration,
                    ...Q
                }
            }),
            canvasMutationCb: Be,
            fontCb: Q => Ye({
                type: ye.IncrementalSnapshot,
                data: {
                    source: ve.Font,
                    ...Q
                }
            }),
            selectionCb: Q => {
                Ye({
                    type: ye.IncrementalSnapshot,
                    data: {
                        source: ve.Selection,
                        ...Q
                    }
                })
            }
            ,
            customElementCb: Q => {
                Ye({
                    type: ye.IncrementalSnapshot,
                    data: {
                        source: ve.CustomElement,
                        ...Q
                    }
                })
            }
            ,
            blockClass: s,
            ignoreClass: a,
            ignoreSelector: c,
            maskAllText: u,
            maskTextClass: l,
            unmaskTextClass: f,
            maskTextSelector: d,
            unmaskTextSelector: p,
            maskInputOptions: Ie,
            inlineStylesheet: m,
            sampling: b,
            recordDOM: w,
            recordCanvas: T,
            inlineImages: O,
            userTriggeredOnInput: z,
            collectFonts: X,
            doc: Y,
            maskAttributeFn: x,
            maskInputFn: _,
            maskTextFn: y,
            keepIframeSrcFn: H,
            blockSelector: o,
            unblockSelector: i,
            slimDOMOptions: fe,
            dataURLOptions: C,
            mirror: sn,
            iframeManager: B,
            stylesheetManager: k,
            shadowDomManager: J,
            processedNodeManager: $,
            canvasManager: N,
            ignoreCSSAttributes: ie,
            plugins: wa([Z, "optionalAccess", Q => Q.filter, "call", Q => Q(se => se.observer), "optionalAccess", Q => Q.map, "call", Q => Q(se => ({
                observer: se.observer,
                options: se.options,
                callback: ae => Ye({
                    type: ye.Plugin,
                    data: {
                        plugin: se.name,
                        payload: ae
                    }
                })
            }))]) || []
        }, {});
        B.addLoadListener(Y => {
            try {
                M.push(G(Y.contentDocument))
            } catch (Q) {
                console.warn(Q)
            }
        }
        );
        const F = () => {
            te(),
            M.push(G(document))
        }
        ;
        return document.readyState === "interactive" || document.readyState === "complete" ? F() : (M.push(At("DOMContentLoaded", () => {
            Ye({
                type: ye.DomContentLoaded,
                data: {}
            }),
            D === "DOMContentLoaded" && F()
        }
        )),
        M.push(At("load", () => {
            Ye({
                type: ye.Load,
                data: {}
            }),
            D === "load" && F()
        }
        , window))),
        () => {
            M.forEach(Y => Y()),
            $.destroy(),
            ac = void 0,
            vP()
        }
    } catch (M) {
        console.warn(M)
    }
}
function HP(e) {
    if (!ac)
        throw new Error("please take full snapshot after start recording");
    ac(e)
}
yr.mirror = sn;
yr.takeFullSnapshot = HP;
function $P(e, t) {
    try {
        return e ? e(t) : new e_
    } catch {
        return console.warn("Unable to initialize CanvasManager"),
        new e_
    }
}
const UP = 3
  , jP = 5;
function Xd(e) {
    return e > 9999999999 ? e : e * 1e3
}
function Fl(e) {
    return e > 9999999999 ? e / 1e3 : e
}
function Li(e, t) {
    t.category !== "sentry.transaction" && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
    e.addUpdate( () => (e.throttledAddEvent({
        type: ye.Custom,
        timestamp: (t.timestamp || 0) * 1e3,
        data: {
            tag: "breadcrumb",
            payload: vn(t, 10, 1e3)
        }
    }),
    t.category === "console")))
}
const zP = "button,a";
function HE(e) {
    return e.closest(zP) || e
}
function $E(e) {
    const t = UE(e);
    return !t || !(t instanceof Element) ? t : HE(t)
}
function UE(e) {
    return WP(e) ? e.target : e
}
function WP(e) {
    return typeof e == "object" && !!e && "target"in e
}
let pr;
function qP(e) {
    return pr || (pr = [],
    VP()),
    pr.push(e),
    () => {
        const t = pr ? pr.indexOf(e) : -1;
        t > -1 && pr.splice(t, 1)
    }
}
function VP() {
    lt(ze, "open", function(e) {
        return function(...t) {
            if (pr)
                try {
                    pr.forEach(n => n())
                } catch {}
            return e.apply(ze, t)
        }
    })
}
function KP(e, t, n) {
    e.handleClick(t, n)
}
class GP {
    constructor(t, n, r=Li) {
        this._lastMutation = 0,
        this._lastScroll = 0,
        this._clicks = [],
        this._timeout = n.timeout / 1e3,
        this._threshold = n.threshold / 1e3,
        this._scollTimeout = n.scrollTimeout / 1e3,
        this._replay = t,
        this._ignoreSelector = n.ignoreSelector,
        this._addBreadcrumbEvent = r
    }
    addListeners() {
        const t = qP( () => {
            this._lastMutation = t_()
        }
        );
        this._teardown = () => {
            t(),
            this._clicks = [],
            this._lastMutation = 0,
            this._lastScroll = 0
        }
    }
    removeListeners() {
        this._teardown && this._teardown(),
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
    }
    handleClick(t, n) {
        if (YP(n, this._ignoreSelector) || !JP(t))
            return;
        const r = {
            timestamp: Fl(t.timestamp),
            clickBreadcrumb: t,
            clickCount: 0,
            node: n
        };
        this._clicks.some(s => s.node === r.node && Math.abs(s.timestamp - r.timestamp) < 1) || (this._clicks.push(r),
        this._clicks.length === 1 && this._scheduleCheckClicks())
    }
    registerMutation(t=Date.now()) {
        this._lastMutation = Fl(t)
    }
    registerScroll(t=Date.now()) {
        this._lastScroll = Fl(t)
    }
    registerClick(t) {
        const n = HE(t);
        this._handleMultiClick(n)
    }
    _handleMultiClick(t) {
        this._getClicks(t).forEach(n => {
            n.clickCount++
        }
        )
    }
    _getClicks(t) {
        return this._clicks.filter(n => n.node === t)
    }
    _checkClicks() {
        const t = []
          , n = t_();
        this._clicks.forEach(r => {
            !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0),
            !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0),
            r.timestamp + this._timeout <= n && t.push(r)
        }
        );
        for (const r of t) {
            const s = this._clicks.indexOf(r);
            s > -1 && (this._generateBreadcrumbs(r),
            this._clicks.splice(s, 1))
        }
        this._clicks.length && this._scheduleCheckClicks()
    }
    _generateBreadcrumbs(t) {
        const n = this._replay
          , r = t.scrollAfter && t.scrollAfter <= this._scollTimeout
          , s = t.mutationAfter && t.mutationAfter <= this._threshold
          , o = !r && !s
          , {clickCount: i, clickBreadcrumb: a} = t;
        if (o) {
            const c = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3
              , u = c < this._timeout * 1e3 ? "mutation" : "timeout"
              , l = {
                type: "default",
                message: a.message,
                timestamp: a.timestamp,
                category: "ui.slowClickDetected",
                data: {
                    ...a.data,
                    url: ze.location.href,
                    route: n.getCurrentRoute(),
                    timeAfterClickMs: c,
                    endReason: u,
                    clickCount: i || 1
                }
            };
            this._addBreadcrumbEvent(n, l);
            return
        }
        if (i > 1) {
            const c = {
                type: "default",
                message: a.message,
                timestamp: a.timestamp,
                category: "ui.multiClick",
                data: {
                    ...a.data,
                    url: ze.location.href,
                    route: n.getCurrentRoute(),
                    clickCount: i,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(n, c)
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
        this._checkClickTimeout = os( () => this._checkClicks(), 1e3)
    }
}
const XP = ["A", "BUTTON", "INPUT"];
function YP(e, t) {
    return !!(!XP.includes(e.tagName) || e.tagName === "INPUT" && !["submit", "button"].includes(e.getAttribute("type") || "") || e.tagName === "A" && (e.hasAttribute("download") || e.hasAttribute("target") && e.getAttribute("target") !== "_self") || t && e.matches(t))
}
function JP(e) {
    return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp)
}
function t_() {
    return Date.now() / 1e3
}
function QP(e, t) {
    try {
        if (!ZP(t))
            return;
        const {source: n} = t.data;
        if (n === ve.Mutation && e.registerMutation(t.timestamp),
        n === ve.Scroll && e.registerScroll(t.timestamp),
        eN(t)) {
            const {type: r, id: s} = t.data
              , o = yr.mirror.getNode(s);
            o instanceof HTMLElement && r === wt.Click && e.registerClick(o)
        }
    } catch {}
}
function ZP(e) {
    return e.type === UP
}
function eN(e) {
    return e.data.source === ve.MouseInteraction
}
function wn(e) {
    return {
        timestamp: Date.now() / 1e3,
        type: "default",
        ...e
    }
}
var cc;
(function(e) {
    e[e.Document = 0] = "Document",
    e[e.DocumentType = 1] = "DocumentType",
    e[e.Element = 2] = "Element",
    e[e.Text = 3] = "Text",
    e[e.CDATA = 4] = "CDATA",
    e[e.Comment = 5] = "Comment"
}
)(cc || (cc = {}));
const tN = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);
function nN(e) {
    const t = {};
    !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]);
    for (const n in e)
        if (tN.has(n)) {
            let r = n;
            (n === "data-testid" || n === "data-test-id") && (r = "testId"),
            t[r] = e[n]
        }
    return t
}
const rN = e => t => {
    if (!e.isEnabled())
        return;
    const n = sN(t);
    if (!n)
        return;
    const r = t.name === "click"
      , s = r ? t.event : void 0;
    r && e.clickDetector && s && s.target && !s.altKey && !s.metaKey && !s.ctrlKey && !s.shiftKey && KP(e.clickDetector, n, $E(t.event)),
    Li(e, n)
}
;
function jE(e, t) {
    const n = yr.mirror.getId(e)
      , r = n && yr.mirror.getNode(n)
      , s = r && yr.mirror.getMeta(r)
      , o = s && iN(s) ? s : null;
    return {
        message: t,
        data: o ? {
            nodeId: n,
            node: {
                id: n,
                tagName: o.tagName,
                textContent: Array.from(o.childNodes).map(i => i.type === cc.Text && i.textContent).filter(Boolean).map(i => i.trim()).join(""),
                attributes: nN(o.attributes)
            }
        } : {}
    }
}
function sN(e) {
    const {target: t, message: n} = oN(e);
    return wn({
        category: `ui.${e.name}`,
        ...jE(t, n)
    })
}
function oN(e) {
    const t = e.name === "click";
    let n, r = null;
    try {
        r = t ? $E(e.event) : UE(e.event),
        n = Sr(r, {
            maxStringLength: 200
        }) || "<unknown>"
    } catch {
        n = "<unknown>"
    }
    return {
        target: r,
        message: n
    }
}
function iN(e) {
    return e.type === cc.Element
}
function aN(e, t) {
    if (!e.isEnabled())
        return;
    e.updateUserActivity();
    const n = cN(t);
    n && Li(e, n)
}
function cN(e) {
    const {metaKey: t, shiftKey: n, ctrlKey: r, altKey: s, key: o, target: i} = e;
    if (!i || uN(i) || !o)
        return null;
    const a = t || r || s
      , c = o.length === 1;
    if (!a && c)
        return null;
    const u = Sr(i, {
        maxStringLength: 200
    }) || "<unknown>"
      , l = jE(i, u);
    return wn({
        category: "ui.keyDown",
        message: u,
        data: {
            ...l.data,
            metaKey: t,
            shiftKey: n,
            ctrlKey: r,
            altKey: s,
            key: o
        }
    })
}
function uN(e) {
    return e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
}
const lN = {
    resource: mN,
    paint: pN,
    navigation: hN
};
function da(e, t) {
    return ({metric: n}) => void t.replayPerformanceEntries.push(e(n))
}
function fN(e) {
    return e.map(dN).filter(Boolean)
}
function dN(e) {
    const t = lN[e.entryType];
    return t ? t(e) : null
}
function lo(e) {
    return ((Pt || ze.performance.timeOrigin) + e) / 1e3
}
function pN(e) {
    const {duration: t, entryType: n, name: r, startTime: s} = e
      , o = lo(s);
    return {
        type: n,
        name: r,
        start: o,
        end: o + t,
        data: void 0
    }
}
function hN(e) {
    const {entryType: t, name: n, decodedBodySize: r, duration: s, domComplete: o, encodedBodySize: i, domContentLoadedEventStart: a, domContentLoadedEventEnd: c, domInteractive: u, loadEventStart: l, loadEventEnd: f, redirectCount: d, startTime: p, transferSize: m, type: h} = e;
    return s === 0 ? null : {
        type: `${t}.${h}`,
        start: lo(p),
        end: lo(o),
        name: n,
        data: {
            size: m,
            decodedBodySize: r,
            encodedBodySize: i,
            duration: s,
            domInteractive: u,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: c,
            loadEventStart: l,
            loadEventEnd: f,
            domComplete: o,
            redirectCount: d
        }
    }
}
function mN(e) {
    const {entryType: t, initiatorType: n, name: r, responseEnd: s, startTime: o, decodedBodySize: i, encodedBodySize: a, responseStatus: c, transferSize: u} = e;
    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
        type: `${t}.${n}`,
        start: lo(o),
        end: lo(s),
        name: r,
        data: {
            size: u,
            statusCode: c,
            decodedBodySize: i,
            encodedBodySize: a
        }
    }
}
function gN(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.element ? [t.element] : void 0;
    return su(e, "largest-contentful-paint", n)
}
function _N(e) {
    const t = e.entries[e.entries.length - 1]
      , n = [];
    if (t && t.sources)
        for (const r of t.sources)
            r.node && n.push(r.node);
    return su(e, "cumulative-layout-shift", n)
}
function xN(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.target ? [t.target] : void 0;
    return su(e, "first-input-delay", n)
}
function yN(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.target ? [t.target] : void 0;
    return su(e, "interaction-to-next-paint", n)
}
function su(e, t, n) {
    const r = e.value
      , s = e.rating
      , o = lo(r);
    return {
        type: "web-vital",
        name: t,
        start: o,
        end: o,
        data: {
            value: r,
            size: r,
            rating: s,
            nodeIds: n ? n.map(a => yr.mirror.getId(a)) : void 0
        }
    }
}
function vN(e) {
    function t(s) {
        e.performanceEntries.includes(s) || e.performanceEntries.push(s)
    }
    function n({entries: s}) {
        s.forEach(t)
    }
    const r = [];
    return ["navigation", "paint", "resource"].forEach(s => {
        r.push(io(s, n))
    }
    ),
    r.push(iE(da(gN, e)), oE(da(_N, e)), aE(da(xN, e)), cE(da(yN, e))),
    () => {
        r.forEach(s => s())
    }
}
const He = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , EN = 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function bN() {
    const e = new Blob([EN]);
    return URL.createObjectURL(e)
}
function Rt(e, t) {
    He && (V.info(e),
    t && zE(e))
}
function Jr(e, t) {
    He && (V.info(e),
    t && os( () => {
        zE(e)
    }
    , 0))
}
function zE(e) {
    Cr({
        category: "console",
        data: {
            logger: "replay"
        },
        level: "info",
        message: e
    }, {
        level: "info"
    })
}
class Yd extends Error {
    constructor() {
        super(`Event buffer exceeded maximum size of ${zd}.`)
    }
}
class WE {
    constructor() {
        this.events = [],
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    get hasEvents() {
        return this.events.length > 0
    }
    get type() {
        return "sync"
    }
    destroy() {
        this.events = []
    }
    async addEvent(t) {
        const n = JSON.stringify(t).length;
        if (this._totalSize += n,
        this._totalSize > zd)
            throw new Yd;
        this.events.push(t)
    }
    finish() {
        return new Promise(t => {
            const n = this.events;
            this.clear(),
            t(JSON.stringify(n))
        }
        )
    }
    clear() {
        this.events = [],
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    getEarliestTimestamp() {
        const t = this.events.map(n => n.timestamp).sort()[0];
        return t ? Xd(t) : null
    }
}
class SN {
    constructor(t) {
        this._worker = t,
        this._id = 0
    }
    ensureReady() {
        return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise( (t, n) => {
            this._worker.addEventListener("message", ({data: r}) => {
                r.success ? t() : n()
            }
            , {
                once: !0
            }),
            this._worker.addEventListener("error", r => {
                n(r)
            }
            , {
                once: !0
            })
        }
        ),
        this._ensureReadyPromise)
    }
    destroy() {
        Rt("[Replay] Destroying compression worker"),
        this._worker.terminate()
    }
    postMessage(t, n) {
        const r = this._getAndIncrementId();
        return new Promise( (s, o) => {
            const i = ({data: a}) => {
                const c = a;
                if (c.method === t && c.id === r) {
                    if (this._worker.removeEventListener("message", i),
                    !c.success) {
                        He && V.error("[Replay]", c.response),
                        o(new Error("Error in compression worker"));
                        return
                    }
                    s(c.response)
                }
            }
            ;
            this._worker.addEventListener("message", i),
            this._worker.postMessage({
                id: r,
                method: t,
                arg: n
            })
        }
        )
    }
    _getAndIncrementId() {
        return this._id++
    }
}
class wN {
    constructor(t) {
        this._worker = new SN(t),
        this._earliestTimestamp = null,
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    get hasEvents() {
        return !!this._earliestTimestamp
    }
    get type() {
        return "worker"
    }
    ensureReady() {
        return this._worker.ensureReady()
    }
    destroy() {
        this._worker.destroy()
    }
    addEvent(t) {
        const n = Xd(t.timestamp);
        (!this._earliestTimestamp || n < this._earliestTimestamp) && (this._earliestTimestamp = n);
        const r = JSON.stringify(t);
        return this._totalSize += r.length,
        this._totalSize > zd ? Promise.reject(new Yd) : this._sendEventToWorker(r)
    }
    finish() {
        return this._finishRequest()
    }
    clear() {
        this._earliestTimestamp = null,
        this._totalSize = 0,
        this.hasCheckout = !1,
        this._worker.postMessage("clear").then(null, t => {
            He && V.warn('[Replay] Sending "clear" message to worker failed', t)
        }
        )
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp
    }
    _sendEventToWorker(t) {
        return this._worker.postMessage("addEvent", t)
    }
    async _finishRequest() {
        const t = await this._worker.postMessage("finish");
        return this._earliestTimestamp = null,
        this._totalSize = 0,
        t
    }
}
class CN {
    constructor(t) {
        this._fallback = new WE,
        this._compression = new wN(t),
        this._used = this._fallback,
        this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
    }
    get type() {
        return this._used.type
    }
    get hasEvents() {
        return this._used.hasEvents
    }
    get hasCheckout() {
        return this._used.hasCheckout
    }
    set hasCheckout(t) {
        this._used.hasCheckout = t
    }
    destroy() {
        this._fallback.destroy(),
        this._compression.destroy()
    }
    clear() {
        return this._used.clear()
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp()
    }
    addEvent(t) {
        return this._used.addEvent(t)
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(),
        this._used.finish()
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady()
        } catch {
            Rt("[Replay] Failed to load the compression worker, falling back to simple buffer");
            return
        }
        await this._switchToCompressionWorker()
    }
    async _switchToCompressionWorker() {
        const {events: t, hasCheckout: n} = this._fallback
          , r = [];
        for (const s of t)
            r.push(this._compression.addEvent(s));
        this._compression.hasCheckout = n,
        this._used = this._compression;
        try {
            await Promise.all(r)
        } catch (s) {
            He && V.warn("[Replay] Failed to add events when switching buffers.", s)
        }
    }
}
function AN({useCompression: e, workerUrl: t}) {
    if (e && window.Worker) {
        const n = TN(t);
        if (n)
            return n
    }
    return Rt("[Replay] Using simple buffer"),
    new WE
}
function TN(e) {
    try {
        const t = e || kN();
        if (!t)
            return;
        Rt(`[Replay] Using compression worker${e ? ` from ${e}` : ""}`);
        const n = new Worker(t);
        return new CN(n)
    } catch {
        Rt("[Replay] Failed to create compression worker")
    }
}
function kN() {
    return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" || !__SENTRY_EXCLUDE_REPLAY_WORKER__ ? bN() : ""
}
function Jd() {
    try {
        return "sessionStorage"in ze && !!ze.sessionStorage
    } catch {
        return !1
    }
}
function RN(e) {
    IN(),
    e.session = void 0
}
function IN() {
    if (Jd())
        try {
            ze.sessionStorage.removeItem(Ud)
        } catch {}
}
function qE(e) {
    return e === void 0 ? !1 : Math.random() < e
}
function VE(e) {
    const t = Date.now()
      , n = e.id || Ke()
      , r = e.started || t
      , s = e.lastActivity || t
      , o = e.segmentId || 0
      , i = e.sampled
      , a = e.previousSessionId;
    return {
        id: n,
        started: r,
        lastActivity: s,
        segmentId: o,
        sampled: i,
        previousSessionId: a
    }
}
function Qd(e) {
    if (Jd())
        try {
            ze.sessionStorage.setItem(Ud, JSON.stringify(e))
        } catch {}
}
function DN(e, t) {
    return qE(e) ? "session" : t ? "buffer" : !1
}
function n_({sessionSampleRate: e, allowBuffering: t, stickySession: n=!1}, {previousSessionId: r}={}) {
    const s = DN(e, t)
      , o = VE({
        sampled: s,
        previousSessionId: r
    });
    return n && Qd(o),
    o
}
function BN(e) {
    if (!Jd())
        return null;
    try {
        const t = ze.sessionStorage.getItem(Ud);
        if (!t)
            return null;
        const n = JSON.parse(t);
        return Jr("[Replay] Loading existing session", e),
        VE(n)
    } catch {
        return null
    }
}
function i0(e, t, n=+new Date) {
    return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n
}
function KE(e, {maxReplayDuration: t, sessionIdleExpire: n, targetTime: r=Date.now()}) {
    return i0(e.started, t, r) || i0(e.lastActivity, n, r)
}
function GE(e, {sessionIdleExpire: t, maxReplayDuration: n}) {
    return !(!KE(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) || e.sampled === "buffer" && e.segmentId === 0)
}
function Pl({traceInternals: e, sessionIdleExpire: t, maxReplayDuration: n, previousSessionId: r}, s) {
    const o = s.stickySession && BN(e);
    return o ? GE(o, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) ? (Jr("[Replay] Session in sessionStorage is expired, creating new one..."),
    n_(s, {
        previousSessionId: o.id
    })) : o : (Jr("[Replay] Creating new session", e),
    n_(s, {
        previousSessionId: r
    }))
}
function ON(e) {
    return e.type === ye.Custom
}
function Zd(e, t, n) {
    return YE(e, t) ? (XE(e, t, n),
    !0) : !1
}
function FN(e, t, n) {
    return YE(e, t) ? XE(e, t, n) : Promise.resolve(null)
}
async function XE(e, t, n) {
    if (!e.eventBuffer)
        return null;
    try {
        n && e.recordingMode === "buffer" && e.eventBuffer.clear(),
        n && (e.eventBuffer.hasCheckout = !0);
        const r = e.getOptions()
          , s = PN(t, r.beforeAddRecordingEvent);
        return s ? await e.eventBuffer.addEvent(s) : void 0
    } catch (r) {
        const s = r && r instanceof Yd ? "addEventSizeExceeded" : "addEvent";
        e.handleException(r),
        await e.stop({
            reason: s
        });
        const o = Ce();
        o && o.recordDroppedEvent("internal_sdk_error", "replay")
    }
}
function YE(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled())
        return !1;
    const n = Xd(t.timestamp);
    return n + e.timeouts.sessionIdlePause < Date.now() ? !1 : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration ? (Jr(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`, e.getOptions()._experiments.traceInternals),
    !1) : !0
}
function PN(e, t) {
    try {
        if (typeof t == "function" && ON(e))
            return t(e)
    } catch (n) {
        return He && V.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", n),
        null
    }
    return e
}
function ep(e) {
    return !e.type
}
function a0(e) {
    return e.type === "transaction"
}
function NN(e) {
    return e.type === "replay_event"
}
function r_(e) {
    return e.type === "feedback"
}
function MN(e) {
    return (t, n) => {
        if (!e.isEnabled() || !ep(t) && !a0(t))
            return;
        const r = n && n.statusCode;
        if (!(!r || r < 200 || r >= 300)) {
            if (a0(t)) {
                LN(e, t);
                return
            }
            HN(e, t)
        }
    }
}
function LN(e, t) {
    const n = e.getContext();
    t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
}
function HN(e, t) {
    const n = e.getContext();
    if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
    e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
        return;
    const {beforeErrorSampling: r} = e.getOptions();
    typeof r == "function" && !r(t) || os( () => {
        e.sendBufferedReplayOrFlush()
    }
    )
}
function $N(e) {
    return t => {
        !e.isEnabled() || !ep(t) || UN(e, t)
    }
}
function UN(e, t) {
    const n = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
    if (typeof n == "string" && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i))) {
        const r = wn({
            category: "replay.hydrate-error",
            data: {
                url: ov()
            }
        });
        Li(e, r)
    }
}
function jN(e) {
    const t = Ce();
    t && t.on("beforeAddBreadcrumb", n => zN(e, n))
}
function zN(e, t) {
    if (!e.isEnabled() || !JE(t))
        return;
    const n = WN(t);
    n && Li(e, n)
}
function WN(e) {
    return !JE(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.") ? null : e.category === "console" ? qN(e) : wn(e)
}
function qN(e) {
    const t = e.data && e.data.arguments;
    if (!Array.isArray(t) || t.length === 0)
        return wn(e);
    let n = !1;
    const r = t.map(s => {
        if (!s)
            return s;
        if (typeof s == "string")
            return s.length > ua ? (n = !0,
            `${s.slice(0, ua)}…`) : s;
        if (typeof s == "object")
            try {
                const o = vn(s, 7);
                return JSON.stringify(o).length > ua ? (n = !0,
                `${JSON.stringify(o, null, 2).slice(0, ua)}…`) : o
            } catch {}
        return s
    }
    );
    return wn({
        ...e,
        data: {
            ...e.data,
            arguments: r,
            ...n ? {
                _meta: {
                    warnings: ["CONSOLE_ARG_TRUNCATED"]
                }
            } : {}
        }
    })
}
function JE(e) {
    return !!e.category
}
function VN(e, t) {
    return e.type || !e.exception || !e.exception.values || !e.exception.values.length ? !1 : !!(t.originalException && t.originalException.__rrweb__)
}
function KN(e, t) {
    e.triggerUserActivity(),
    e.addUpdate( () => t.timestamp ? (e.throttledAddEvent({
        type: ye.Custom,
        timestamp: t.timestamp * 1e3,
        data: {
            tag: "breadcrumb",
            payload: {
                timestamp: t.timestamp,
                type: "default",
                category: "sentry.feedback",
                data: {
                    feedbackId: t.event_id
                }
            }
        }
    }),
    !1) : !0)
}
function GN(e, t) {
    return e.recordingMode !== "buffer" || t.message === jd || !t.exception || t.type ? !1 : qE(e.getOptions().errorSampleRate)
}
function XN(e) {
    return Object.assign( (t, n) => e.isEnabled() ? NN(t) ? (delete t.breadcrumbs,
    t) : !ep(t) && !a0(t) && !r_(t) || !e.checkAndHandleExpiredSession() ? t : r_(t) ? (e.flush(),
    t.contexts.feedback.replay_id = e.getSessionId(),
    KN(e, t),
    t) : VN(t, n) && !e.getOptions()._experiments.captureExceptions ? (He && V.log("[Replay] Ignoring error from rrweb internals", t),
    null) : ((GN(e, t) || e.recordingMode === "session") && (t.tags = {
        ...t.tags,
        replayId: e.getSessionId()
    }),
    t) : t, {
        id: "Replay"
    })
}
function ou(e, t) {
    return t.map( ({type: n, start: r, end: s, name: o, data: i}) => {
        const a = e.throttledAddEvent({
            type: ye.Custom,
            timestamp: r,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: n,
                    description: o,
                    startTimestamp: r,
                    endTimestamp: s,
                    data: i
                }
            }
        });
        return typeof a == "string" ? Promise.resolve(null) : a
    }
    )
}
function YN(e) {
    const {from: t, to: n} = e
      , r = Date.now() / 1e3;
    return {
        type: "navigation.push",
        start: r,
        end: r,
        name: n,
        data: {
            previous: t
        }
    }
}
function JN(e) {
    return t => {
        if (!e.isEnabled())
            return;
        const n = YN(t);
        n !== null && (e.getContext().urls.push(n.name),
        e.triggerUserActivity(),
        e.addUpdate( () => (ou(e, [n]),
        !1)))
    }
}
function QN(e, t) {
    return He && e.getOptions()._experiments.traceInternals ? !1 : DD(t, Ce())
}
function QE(e, t) {
    e.isEnabled() && t !== null && (QN(e, t.name) || e.addUpdate( () => (ou(e, [t]),
    !0)))
}
function iu(e) {
    if (!e)
        return;
    const t = new TextEncoder;
    try {
        if (typeof e == "string")
            return t.encode(e).length;
        if (e instanceof URLSearchParams)
            return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            const n = nb(e);
            return t.encode(n).length
        }
        if (e instanceof Blob)
            return e.size;
        if (e instanceof ArrayBuffer)
            return e.byteLength
    } catch {}
}
function ZE(e) {
    if (!e)
        return;
    const t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t
}
function eb(e) {
    try {
        if (typeof e == "string")
            return [e];
        if (e instanceof URLSearchParams)
            return [e.toString()];
        if (e instanceof FormData)
            return [nb(e)];
        if (!e)
            return [void 0]
    } catch {
        return He && V.warn("[Replay] Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
    }
    return He && V.info("[Replay] Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
}
function uc(e, t) {
    if (!e)
        return {
            headers: {},
            size: void 0,
            _meta: {
                warnings: [t]
            }
        };
    const n = {
        ...e._meta
    }
      , r = n.warnings || [];
    return n.warnings = [...r, t],
    e._meta = n,
    e
}
function tb(e, t) {
    if (!t)
        return null;
    const {startTimestamp: n, endTimestamp: r, url: s, method: o, statusCode: i, request: a, response: c} = t;
    return {
        type: e,
        start: n / 1e3,
        end: r / 1e3,
        name: s,
        data: ft({
            method: o,
            statusCode: i,
            request: a,
            response: c
        })
    }
}
function xi(e) {
    return {
        headers: {},
        size: e,
        _meta: {
            warnings: ["URL_SKIPPED"]
        }
    }
}
function vr(e, t, n) {
    if (!t && Object.keys(e).length === 0)
        return;
    if (!t)
        return {
            headers: e
        };
    if (!n)
        return {
            headers: e,
            size: t
        };
    const r = {
        headers: e,
        size: t
    }
      , {body: s, warnings: o} = ZN(n);
    return r.body = s,
    o && o.length > 0 && (r._meta = {
        warnings: o
    }),
    r
}
function c0(e, t) {
    return Object.entries(e).reduce( (n, [r,s]) => {
        const o = r.toLowerCase();
        return t.includes(o) && e[r] && (n[o] = s),
        n
    }
    , {})
}
function nb(e) {
    return new URLSearchParams(e).toString()
}
function ZN(e) {
    if (!e || typeof e != "string")
        return {
            body: e
        };
    const t = e.length > Ug
      , n = eM(e);
    if (t) {
        const r = e.slice(0, Ug);
        return n ? {
            body: r,
            warnings: ["MAYBE_JSON_TRUNCATED"]
        } : {
            body: `${r}…`,
            warnings: ["TEXT_TRUNCATED"]
        }
    }
    if (n)
        try {
            return {
                body: JSON.parse(e)
            }
        } catch {}
    return {
        body: e
    }
}
function eM(e) {
    const t = e[0]
      , n = e[e.length - 1];
    return t === "[" && n === "]" || t === "{" && n === "}"
}
function lc(e, t) {
    const n = tM(e);
    return xr(n, t)
}
function tM(e, t=ze.document.baseURI) {
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(ze.location.origin))
        return e;
    const n = new URL(e,t);
    if (n.origin !== new URL(t).origin)
        return e;
    const r = n.href;
    return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
}
async function nM(e, t, n) {
    try {
        const r = await sM(e, t, n)
          , s = tb("resource.fetch", r);
        QE(n.replay, s)
    } catch (r) {
        He && V.error("[Replay] Failed to capture fetch breadcrumb", r)
    }
}
function rM(e, t) {
    const {input: n, response: r} = t
      , s = n ? rb(n) : void 0
      , o = iu(s)
      , i = r ? ZE(r.headers.get("content-length")) : void 0;
    o !== void 0 && (e.data.request_body_size = o),
    i !== void 0 && (e.data.response_body_size = i)
}
async function sM(e, t, n) {
    const r = Date.now()
      , {startTimestamp: s=r, endTimestamp: o=r} = t
      , {url: i, method: a, status_code: c=0, request_body_size: u, response_body_size: l} = e.data
      , f = lc(i, n.networkDetailAllowUrls) && !lc(i, n.networkDetailDenyUrls)
      , d = f ? oM(n, t.input, u) : xi(u)
      , p = await iM(f, n, t.response, l);
    return {
        startTimestamp: s,
        endTimestamp: o,
        url: i,
        method: a,
        statusCode: c,
        request: d,
        response: p
    }
}
function oM({networkCaptureBodies: e, networkRequestHeaders: t}, n, r) {
    const s = n ? uM(n, t) : {};
    if (!e)
        return vr(s, r, void 0);
    const o = rb(n)
      , [i,a] = eb(o)
      , c = vr(s, r, i);
    return a ? uc(c, a) : c
}
async function iM(e, {networkCaptureBodies: t, networkResponseHeaders: n}, r, s) {
    if (!e && s !== void 0)
        return xi(s);
    const o = r ? sb(r.headers, n) : {};
    if (!r || !t && s !== void 0)
        return vr(o, s, void 0);
    const [i,a] = await cM(r)
      , c = aM(i, {
        networkCaptureBodies: t,
        responseBodySize: s,
        captureDetails: e,
        headers: o
    });
    return a ? uc(c, a) : c
}
function aM(e, {networkCaptureBodies: t, responseBodySize: n, captureDetails: r, headers: s}) {
    try {
        const o = e && e.length && n === void 0 ? iu(e) : n;
        return r ? t ? vr(s, o, e) : vr(s, o, void 0) : xi(o)
    } catch (o) {
        return He && V.warn("[Replay] Failed to serialize response body", o),
        vr(s, n, void 0)
    }
}
async function cM(e) {
    const t = lM(e);
    if (!t)
        return [void 0, "BODY_PARSE_ERROR"];
    try {
        return [await fM(t)]
    } catch (n) {
        return He && V.warn("[Replay] Failed to get text body from response", n),
        [void 0, "BODY_PARSE_ERROR"]
    }
}
function rb(e=[]) {
    if (!(e.length !== 2 || typeof e[1] != "object"))
        return e[1].body
}
function sb(e, t) {
    const n = {};
    return t.forEach(r => {
        e.get(r) && (n[r] = e.get(r))
    }
    ),
    n
}
function uM(e, t) {
    return e.length === 1 && typeof e[0] != "string" ? s_(e[0], t) : e.length === 2 ? s_(e[1], t) : {}
}
function s_(e, t) {
    if (!e)
        return {};
    const n = e.headers;
    return n ? n instanceof Headers ? sb(n, t) : Array.isArray(n) ? {} : c0(n, t) : {}
}
function lM(e) {
    try {
        return e.clone()
    } catch (t) {
        He && V.warn("[Replay] Failed to clone response body", t)
    }
}
function fM(e) {
    return new Promise( (t, n) => {
        const r = os( () => n(new Error("Timeout while trying to read response body")), 500);
        dM(e).then(s => t(s), s => n(s)).finally( () => clearTimeout(r))
    }
    )
}
async function dM(e) {
    return await e.text()
}
async function pM(e, t, n) {
    try {
        const r = mM(e, t, n)
          , s = tb("resource.xhr", r);
        QE(n.replay, s)
    } catch (r) {
        He && V.error("[Replay] Failed to capture xhr breadcrumb", r)
    }
}
function hM(e, t) {
    const {xhr: n, input: r} = t;
    if (!n)
        return;
    const s = iu(r)
      , o = n.getResponseHeader("content-length") ? ZE(n.getResponseHeader("content-length")) : yM(n.response, n.responseType);
    s !== void 0 && (e.data.request_body_size = s),
    o !== void 0 && (e.data.response_body_size = o)
}
function mM(e, t, n) {
    const r = Date.now()
      , {startTimestamp: s=r, endTimestamp: o=r, input: i, xhr: a} = t
      , {url: c, method: u, status_code: l=0, request_body_size: f, response_body_size: d} = e.data;
    if (!c)
        return null;
    if (!a || !lc(c, n.networkDetailAllowUrls) || lc(c, n.networkDetailDenyUrls)) {
        const v = xi(f)
          , b = xi(d);
        return {
            startTimestamp: s,
            endTimestamp: o,
            url: c,
            method: u,
            statusCode: l,
            request: v,
            response: b
        }
    }
    const p = a[$r]
      , m = p ? c0(p.request_headers, n.networkRequestHeaders) : {}
      , h = c0(gM(a), n.networkResponseHeaders)
      , [g,E] = n.networkCaptureBodies ? eb(i) : [void 0]
      , [x,_] = n.networkCaptureBodies ? _M(a) : [void 0]
      , y = vr(m, f, g)
      , S = vr(h, d, x);
    return {
        startTimestamp: s,
        endTimestamp: o,
        url: c,
        method: u,
        statusCode: l,
        request: E ? uc(y, E) : y,
        response: _ ? uc(S, _) : S
    }
}
function gM(e) {
    const t = e.getAllResponseHeaders();
    return t ? t.split(`\r
`).reduce( (n, r) => {
        const [s,o] = r.split(": ");
        return o && (n[s.toLowerCase()] = o),
        n
    }
    , {}) : {}
}
function _M(e) {
    const t = [];
    try {
        return [e.responseText]
    } catch (n) {
        t.push(n)
    }
    try {
        return xM(e.response, e.responseType)
    } catch (n) {
        t.push(n)
    }
    return He && V.warn("[Replay] Failed to get xhr response body", ...t),
    [void 0]
}
function xM(e, t) {
    try {
        if (typeof e == "string")
            return [e];
        if (e instanceof Document)
            return [e.body.outerHTML];
        if (t === "json" && e && typeof e == "object")
            return [JSON.stringify(e)];
        if (!e)
            return [void 0]
    } catch {
        return He && V.warn("[Replay] Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
    }
    return He && V.info("[Replay] Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
}
function yM(e, t) {
    try {
        const n = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
        return iu(n)
    } catch {
        return
    }
}
function vM(e) {
    const t = Ce();
    try {
        const {networkDetailAllowUrls: n, networkDetailDenyUrls: r, networkCaptureBodies: s, networkRequestHeaders: o, networkResponseHeaders: i} = e.getOptions()
          , a = {
            replay: e,
            networkDetailAllowUrls: n,
            networkDetailDenyUrls: r,
            networkCaptureBodies: s,
            networkRequestHeaders: o,
            networkResponseHeaders: i
        };
        t && t.on("beforeAddBreadcrumb", (c, u) => EM(a, c, u))
    } catch {}
}
function EM(e, t, n) {
    if (t.data)
        try {
            bM(t) && wM(n) && (hM(t, n),
            pM(t, n, e)),
            SM(t) && CM(n) && (rM(t, n),
            nM(t, n, e))
        } catch {
            He && V.warn("Error when enriching network breadcrumb")
        }
}
function bM(e) {
    return e.category === "xhr"
}
function SM(e) {
    return e.category === "fetch"
}
function wM(e) {
    return e && e.xhr
}
function CM(e) {
    return e && e.response
}
function AM(e) {
    const t = Ce();
    fE(rN(e)),
    tu(JN(e)),
    jN(e),
    vM(e);
    const n = XN(e);
    mD(n),
    t && (t.on("beforeSendEvent", $N(e)),
    t.on("afterSendEvent", MN(e)),
    t.on("createDsc", r => {
        const s = e.getSessionId();
        s && e.isEnabled() && e.recordingMode === "session" && e.checkAndHandleExpiredSession() && (r.replay_id = s)
    }
    ),
    t.on("spanStart", r => {
        e.lastActiveSpan = r
    }
    ),
    t.on("spanEnd", r => {
        e.lastActiveSpan = r
    }
    ),
    t.on("beforeSendFeedback", (r, s) => {
        const o = e.getSessionId();
        s && s.includeReplay && e.isEnabled() && o && r.contexts && r.contexts.feedback && (r.contexts.feedback.replay_id = o)
    }
    ))
}
async function TM(e) {
    try {
        return Promise.all(ou(e, [kM(ze.performance.memory)]))
    } catch {
        return []
    }
}
function kM(e) {
    const {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r} = e
      , s = Date.now() / 1e3;
    return {
        type: "memory",
        name: "memory",
        start: s,
        end: s,
        data: {
            memory: {
                jsHeapSizeLimit: t,
                totalJSHeapSize: n,
                usedJSHeapSize: r
            }
        }
    }
}
function RM(e, t, n) {
    let r, s, o;
    const i = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
    function a() {
        return c(),
        r = e(),
        r
    }
    function c() {
        s !== void 0 && clearTimeout(s),
        o !== void 0 && clearTimeout(o),
        s = o = void 0
    }
    function u() {
        return s !== void 0 || o !== void 0 ? a() : r
    }
    function l() {
        return s && clearTimeout(s),
        s = os(a, t),
        i && o === void 0 && (o = os(a, i)),
        r
    }
    return l.cancel = c,
    l.flush = u,
    l
}
function IM(e) {
    let t = !1;
    return (n, r) => {
        if (!e.checkAndHandleExpiredSession()) {
            He && V.warn("[Replay] Received replay event after session expired.");
            return
        }
        const s = r || !t;
        t = !0,
        e.clickDetector && QP(e.clickDetector, n),
        e.addUpdate( () => {
            if (e.recordingMode === "buffer" && s && e.setInitialState(),
            !Zd(e, n, s))
                return !0;
            if (!s)
                return !1;
            if (BM(e, s),
            e.session && e.session.previousSessionId)
                return !0;
            if (e.recordingMode === "buffer" && e.session && e.eventBuffer) {
                const o = e.eventBuffer.getEarliestTimestamp();
                o && (Rt(`[Replay] Updating session start time to earliest event in buffer to ${new Date(o)}`, e.getOptions()._experiments.traceInternals),
                e.session.started = o,
                e.getOptions().stickySession && Qd(e.session))
            }
            return e.recordingMode === "session" && e.flush(),
            !0
        }
        )
    }
}
function DM(e) {
    const t = e.getOptions();
    return {
        type: ye.Custom,
        timestamp: Date.now(),
        data: {
            tag: "options",
            payload: {
                shouldRecordCanvas: e.isRecordingCanvas(),
                sessionSampleRate: t.sessionSampleRate,
                errorSampleRate: t.errorSampleRate,
                useCompressionOption: t.useCompression,
                blockAllMedia: t.blockAllMedia,
                maskAllText: t.maskAllText,
                maskAllInputs: t.maskAllInputs,
                useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                networkCaptureBodies: t.networkCaptureBodies,
                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
            }
        }
    }
}
function BM(e, t) {
    !t || !e.session || e.session.segmentId !== 0 || Zd(e, DM(e), !1)
}
function OM(e, t, n, r) {
    return xs(Sv(e, kd(e), r, n), [[{
        type: "replay_event"
    }, e], [{
        type: "replay_recording",
        length: typeof t == "string" ? new TextEncoder().encode(t).length : t.length
    }, t]])
}
function FM({recordingData: e, headers: t}) {
    let n;
    const r = `${JSON.stringify(t)}
`;
    if (typeof e == "string")
        n = `${r}${e}`;
    else {
        const o = new TextEncoder().encode(r);
        n = new Uint8Array(o.length + e.length),
        n.set(o),
        n.set(e, o.length)
    }
    return n
}
async function PM({client: e, scope: t, replayId: n, event: r}) {
    const s = typeof e._integrations == "object" && e._integrations !== null && !Array.isArray(e._integrations) ? Object.keys(e._integrations) : void 0
      , o = {
        event_id: n,
        integrations: s
    };
    e.emit("preprocessEvent", r, o);
    const i = await jv(e.getOptions(), r, o, t, e, rn());
    if (!i)
        return null;
    i.platform = i.platform || "javascript";
    const a = e.getSdkMetadata()
      , {name: c, version: u} = a && a.sdk || {};
    return i.sdk = {
        ...i.sdk,
        name: c || "sentry.javascript.unknown",
        version: u || "0.0.0"
    },
    i
}
async function NM({recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: s, session: o}) {
    const i = FM({
        recordingData: e,
        headers: {
            segment_id: n
        }
    })
      , {urls: a, errorIds: c, traceIds: u, initialTimestamp: l} = r
      , f = Ce()
      , d = Ge()
      , p = f && f.getTransport()
      , m = f && f.getDsn();
    if (!f || !p || !m || !o.sampled)
        return Vn({});
    const h = {
        type: EF,
        replay_start_timestamp: l / 1e3,
        timestamp: s / 1e3,
        error_ids: c,
        trace_ids: u,
        urls: a,
        replay_id: t,
        segment_id: n,
        replay_type: o.sampled
    }
      , g = await PM({
        scope: d,
        client: f,
        replayId: t,
        event: h
    });
    if (!g)
        return f.recordDroppedEvent("event_processor", "replay", h),
        Rt("An event processor returned `null`, will not send event."),
        Vn({});
    delete g.sdkProcessingMetadata;
    const E = OM(g, i, m, f.getOptions().tunnel);
    let x;
    try {
        x = await p.send(E)
    } catch (y) {
        const S = new Error(jd);
        try {
            S.cause = y
        } catch {}
        throw S
    }
    if (typeof x.statusCode == "number" && (x.statusCode < 200 || x.statusCode >= 300))
        throw new ob(x.statusCode);
    const _ = Cv({}, x);
    if (wv(_, "replay"))
        throw new ib(_);
    return x
}
class ob extends Error {
    constructor(t) {
        super(`Transport returned status code ${t}`)
    }
}
class ib extends Error {
    constructor(t) {
        super("Rate limit hit"),
        this.rateLimits = t
    }
}
async function ab(e, t={
    count: 0,
    interval: TF
}) {
    const {recordingData: n, options: r} = e;
    if (n.length)
        try {
            return await NM(e),
            !0
        } catch (s) {
            if (s instanceof ob || s instanceof ib)
                throw s;
            if (hD("Replays", {
                _retryCount: t.count
            }),
            He && r._experiments && r._experiments.captureExceptions && Oi(s),
            t.count >= kF) {
                const o = new Error(`${jd} - max retries exceeded`);
                try {
                    o.cause = s
                } catch {}
                throw o
            }
            return t.interval *= ++t.count,
            new Promise( (o, i) => {
                os(async () => {
                    try {
                        await ab(e, t),
                        o(!0)
                    } catch (a) {
                        i(a)
                    }
                }
                , t.interval)
            }
            )
        }
}
const cb = "__THROTTLED"
  , MM = "__SKIPPED";
function LM(e, t, n) {
    const r = new Map
      , s = a => {
        const c = a - n;
        r.forEach( (u, l) => {
            l < c && r.delete(l)
        }
        )
    }
      , o = () => [...r.values()].reduce( (a, c) => a + c, 0);
    let i = !1;
    return (...a) => {
        const c = Math.floor(Date.now() / 1e3);
        if (s(c),
        o() >= t) {
            const l = i;
            return i = !0,
            l ? MM : cb
        }
        i = !1;
        const u = r.get(c) || 0;
        return r.set(c, u + 1),
        e(...a)
    }
}
class hr {
    constructor({options: t, recordingOptions: n}) {
        hr.prototype.__init.call(this),
        hr.prototype.__init2.call(this),
        hr.prototype.__init3.call(this),
        hr.prototype.__init4.call(this),
        hr.prototype.__init5.call(this),
        hr.prototype.__init6.call(this),
        this.eventBuffer = null,
        this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this.recordingMode = "session",
        this.timeouts = {
            sessionIdlePause: bF,
            sessionIdleExpire: SF
        },
        this._lastActivity = Date.now(),
        this._isEnabled = !1,
        this._isPaused = !1,
        this._requiresManualStart = !1,
        this._hasInitializedCoreListeners = !1,
        this._context = {
            errorIds: new Set,
            traceIds: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
        },
        this._recordingOptions = n,
        this._options = t,
        this._debouncedFlush = RM( () => this._flush(), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay
        }),
        this._throttledAddEvent = LM( (i, a) => FN(this, i, a), 300, 5);
        const {slowClickTimeout: r, slowClickIgnoreSelectors: s} = this.getOptions()
          , o = r ? {
            threshold: Math.min(RF, r),
            timeout: r,
            scrollTimeout: IF,
            ignoreSelector: s ? s.join(",") : ""
        } : void 0;
        o && (this.clickDetector = new GP(this,o))
    }
    getContext() {
        return this._context
    }
    isEnabled() {
        return this._isEnabled
    }
    isPaused() {
        return this._isPaused
    }
    isRecordingCanvas() {
        return !!this._canvas
    }
    getOptions() {
        return this._options
    }
    handleException(t) {
        He && V.error("[Replay]", t),
        He && this._options._experiments && this._options._experiments.captureExceptions && Oi(t)
    }
    initializeSampling(t) {
        const {errorSampleRate: n, sessionSampleRate: r} = this._options
          , s = n <= 0 && r <= 0;
        if (this._requiresManualStart = s,
        !s) {
            if (this._initializeSessionForSampling(t),
            !this.session) {
                this.handleException(new Error("Unable to initialize and create session"));
                return
            }
            this.session.sampled !== !1 && (this.recordingMode = this.session.sampled === "buffer" && this.session.segmentId === 0 ? "buffer" : "session",
            Jr(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals),
            this._initializeRecording())
        }
    }
    start() {
        if (this._isEnabled && this.recordingMode === "session") {
            He && V.info("[Replay] Recording is already in progress");
            return
        }
        if (this._isEnabled && this.recordingMode === "buffer") {
            He && V.info("[Replay] Buffering is in progress, call `flush()` to save the replay");
            return
        }
        Jr("[Replay] Starting replay in session mode", this._options._experiments.traceInternals),
        this._updateUserActivity();
        const t = Pl({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            traceInternals: this._options._experiments.traceInternals
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
        });
        this.session = t,
        this._initializeRecording()
    }
    startBuffering() {
        if (this._isEnabled) {
            He && V.info("[Replay] Buffering is in progress, call `flush()` to save the replay");
            return
        }
        Jr("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
        const t = Pl({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration,
            traceInternals: this._options._experiments.traceInternals
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
        });
        this.session = t,
        this.recordingMode = "buffer",
        this._initializeRecording()
    }
    startRecording() {
        try {
            const t = this._canvas;
            this._stopRecording = yr({
                ...this._recordingOptions,
                ...this.recordingMode === "buffer" && {
                    checkoutEveryNms: AF
                },
                emit: IM(this),
                onMutation: this._onMutationHandler,
                ...t ? {
                    recordCanvas: t.recordCanvas,
                    getCanvasManager: t.getCanvasManager,
                    sampling: t.sampling,
                    dataURLOptions: t.dataURLOptions
                } : {}
            })
        } catch (t) {
            this.handleException(t)
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(),
            this._stopRecording = void 0),
            !0
        } catch (t) {
            return this.handleException(t),
            !1
        }
    }
    async stop({forceFlush: t=!1, reason: n}={}) {
        if (this._isEnabled) {
            this._isEnabled = !1;
            try {
                Rt(`[Replay] Stopping Replay${n ? ` triggered by ${n}` : ""}`, this._options._experiments.traceInternals),
                this._removeListeners(),
                this.stopRecording(),
                this._debouncedFlush.cancel(),
                t && await this._flush({
                    force: !0
                }),
                this.eventBuffer && this.eventBuffer.destroy(),
                this.eventBuffer = null,
                RN(this)
            } catch (r) {
                this.handleException(r)
            }
        }
    }
    pause() {
        this._isPaused || (this._isPaused = !0,
        this.stopRecording(),
        Rt("[Replay] Pausing replay", this._options._experiments.traceInternals))
    }
    resume() {
        !this._isPaused || !this._checkSession() || (this._isPaused = !1,
        this.startRecording(),
        Rt("[Replay] Resuming replay", this._options._experiments.traceInternals))
    }
    async sendBufferedReplayOrFlush({continueRecording: t=!0}={}) {
        if (this.recordingMode === "session")
            return this.flushImmediate();
        const n = Date.now();
        Rt("[Replay] Converting buffer to session", this._options._experiments.traceInternals),
        await this.flushImmediate();
        const r = this.stopRecording();
        !t || !r || this.recordingMode !== "session" && (this.recordingMode = "session",
        this.session && (this._updateUserActivity(n),
        this._updateSessionActivity(n),
        this._maybeSaveSession()),
        this.startRecording())
    }
    addUpdate(t) {
        const n = t();
        this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush()
    }
    triggerUserActivity() {
        if (this._updateUserActivity(),
        !this._stopRecording) {
            if (!this._checkSession())
                return;
            this.resume();
            return
        }
        this.checkAndHandleExpiredSession(),
        this._updateSessionActivity()
    }
    updateUserActivity() {
        this._updateUserActivity(),
        this._updateSessionActivity()
    }
    conditionalFlush() {
        return this.recordingMode === "buffer" ? Promise.resolve() : this.flushImmediate()
    }
    flush() {
        return this._debouncedFlush()
    }
    flushImmediate() {
        return this._debouncedFlush(),
        this._debouncedFlush.flush()
    }
    cancelFlush() {
        this._debouncedFlush.cancel()
    }
    getSessionId() {
        return this.session && this.session.id
    }
    checkAndHandleExpiredSession() {
        if (this._lastActivity && i0(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && this.session.sampled === "session") {
            this.pause();
            return
        }
        return !!this._checkSession()
    }
    setInitialState() {
        const t = `${ze.location.pathname}${ze.location.hash}${ze.location.search}`
          , n = `${ze.location.origin}${t}`;
        this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this._clearContext(),
        this._context.initialUrl = n,
        this._context.initialTimestamp = Date.now(),
        this._context.urls.push(n)
    }
    throttledAddEvent(t, n) {
        const r = this._throttledAddEvent(t, n);
        if (r === cb) {
            const s = wn({
                category: "replay.throttled"
            });
            this.addUpdate( () => !Zd(this, {
                type: jP,
                timestamp: s.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: s,
                    metric: !0
                }
            }))
        }
        return r
    }
    getCurrentRoute() {
        const t = this.lastActiveSpan || dt()
          , n = t && mt(t)
          , s = (n && Re(n).data || {})[Jt];
        if (!(!n || !s || !["route", "custom"].includes(s)))
            return Re(n).description
    }
    _initializeRecording() {
        this.setInitialState(),
        this._updateSessionActivity(),
        this.eventBuffer = AN({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
        }),
        this._removeListeners(),
        this._addListeners(),
        this._isEnabled = !0,
        this._isPaused = !1,
        this.startRecording()
    }
    _initializeSessionForSampling(t) {
        const n = this._options.errorSampleRate > 0
          , r = Pl({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration,
            traceInternals: this._options._experiments.traceInternals,
            previousSessionId: t
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: this._options.sessionSampleRate,
            allowBuffering: n
        });
        this.session = r
    }
    _checkSession() {
        if (!this.session)
            return !1;
        const t = this.session;
        return GE(t, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }) ? (this._refreshSession(t),
        !1) : !0
    }
    async _refreshSession(t) {
        this._isEnabled && (await this.stop({
            reason: "refresh session"
        }),
        this.initializeSampling(t.id))
    }
    _addListeners() {
        try {
            ze.document.addEventListener("visibilitychange", this._handleVisibilityChange),
            ze.addEventListener("blur", this._handleWindowBlur),
            ze.addEventListener("focus", this._handleWindowFocus),
            ze.addEventListener("keydown", this._handleKeyboardEvent),
            this.clickDetector && this.clickDetector.addListeners(),
            this._hasInitializedCoreListeners || (AM(this),
            this._hasInitializedCoreListeners = !0)
        } catch (t) {
            this.handleException(t)
        }
        this._performanceCleanupCallback = vN(this)
    }
    _removeListeners() {
        try {
            ze.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
            ze.removeEventListener("blur", this._handleWindowBlur),
            ze.removeEventListener("focus", this._handleWindowFocus),
            ze.removeEventListener("keydown", this._handleKeyboardEvent),
            this.clickDetector && this.clickDetector.removeListeners(),
            this._performanceCleanupCallback && this._performanceCleanupCallback()
        } catch (t) {
            this.handleException(t)
        }
    }
    __init() {
        this._handleVisibilityChange = () => {
            ze.document.visibilityState === "visible" ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
        }
    }
    __init2() {
        this._handleWindowBlur = () => {
            const t = wn({
                category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(t)
        }
    }
    __init3() {
        this._handleWindowFocus = () => {
            const t = wn({
                category: "ui.focus"
            });
            this._doChangeToForegroundTasks(t)
        }
    }
    __init4() {
        this._handleKeyboardEvent = t => {
            aN(this, t)
        }
    }
    _doChangeToBackgroundTasks(t) {
        !this.session || KE(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }) || (t && this._createCustomBreadcrumb(t),
        this.conditionalFlush())
    }
    _doChangeToForegroundTasks(t) {
        if (!this.session)
            return;
        if (!this.checkAndHandleExpiredSession()) {
            Rt("[Replay] Document has become active, but session has expired");
            return
        }
        t && this._createCustomBreadcrumb(t)
    }
    _updateUserActivity(t=Date.now()) {
        this._lastActivity = t
    }
    _updateSessionActivity(t=Date.now()) {
        this.session && (this.session.lastActivity = t,
        this._maybeSaveSession())
    }
    _createCustomBreadcrumb(t) {
        this.addUpdate( () => {
            this.throttledAddEvent({
                type: ye.Custom,
                timestamp: t.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: t
                }
            })
        }
        )
    }
    _addPerformanceEntries() {
        const t = fN(this.performanceEntries).concat(this.replayPerformanceEntries);
        return this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        Promise.all(ou(this, t))
    }
    _clearContext() {
        this._context.errorIds.clear(),
        this._context.traceIds.clear(),
        this._context.urls = []
    }
    _updateInitialTimestampFromEventBuffer() {
        const {session: t, eventBuffer: n} = this;
        if (!t || !n || this._requiresManualStart || t.segmentId)
            return;
        const r = n.getEarliestTimestamp();
        r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r)
    }
    _popEventContext() {
        const t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
        };
        return this._clearContext(),
        t
    }
    async _runFlush() {
        const t = this.getSessionId();
        if (!this.session || !this.eventBuffer || !t) {
            He && V.error("[Replay] No session or eventBuffer found to flush.");
            return
        }
        if (await this._addPerformanceEntries(),
        !(!this.eventBuffer || !this.eventBuffer.hasEvents) && (await TM(this),
        !!this.eventBuffer && t === this.getSessionId()))
            try {
                this._updateInitialTimestampFromEventBuffer();
                const n = Date.now();
                if (n - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4)
                    throw new Error("Session is too long, not sending replay");
                const r = this._popEventContext()
                  , s = this.session.segmentId++;
                this._maybeSaveSession();
                const o = await this.eventBuffer.finish();
                await ab({
                    replayId: t,
                    recordingData: o,
                    segmentId: s,
                    eventContext: r,
                    session: this.session,
                    options: this.getOptions(),
                    timestamp: n
                })
            } catch (n) {
                this.handleException(n),
                this.stop({
                    reason: "sendReplay"
                });
                const r = Ce();
                r && r.recordDroppedEvent("send_error", "replay")
            }
    }
    __init5() {
        this._flush = async ({force: t=!1}={}) => {
            if (!this._isEnabled && !t)
                return;
            if (!this.checkAndHandleExpiredSession()) {
                He && V.error("[Replay] Attempting to finish replay event after session expired.");
                return
            }
            if (!this.session)
                return;
            const n = this.session.started
              , s = Date.now() - n;
            this._debouncedFlush.cancel();
            const o = s < this._options.minReplayDuration
              , i = s > this._options.maxReplayDuration + 5e3;
            if (o || i) {
                Rt(`[Replay] Session duration (${Math.floor(s / 1e3)}s) is too ${o ? "short" : "long"}, not sending replay.`, this._options._experiments.traceInternals),
                o && this._debouncedFlush();
                return
            }
            const a = this.eventBuffer;
            if (a && this.session.segmentId === 0 && !a.hasCheckout && Rt("[Replay] Flushing initial segment without checkout.", this._options._experiments.traceInternals),
            !this._flushLock) {
                this._flushLock = this._runFlush(),
                await this._flushLock,
                this._flushLock = void 0;
                return
            }
            try {
                await this._flushLock
            } catch (c) {
                He && V.error(c)
            } finally {
                this._debouncedFlush()
            }
        }
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && Qd(this.session)
    }
    __init6() {
        this._onMutationHandler = t => {
            const n = t.length
              , r = this._options.mutationLimit
              , s = this._options.mutationBreadcrumbLimit
              , o = r && n > r;
            if (n > s || o) {
                const i = wn({
                    category: "replay.mutations",
                    data: {
                        count: n,
                        limit: o
                    }
                });
                this._createCustomBreadcrumb(i)
            }
            return o ? (this.stop({
                reason: "mutationLimit",
                forceFlush: this.recordingMode === "session"
            }),
            !1) : !0
        }
    }
}
function Do(e, t) {
    return [...e, ...t].join(",")
}
function HM({mask: e, unmask: t, block: n, unblock: r, ignore: s}) {
    const o = ['base[href="/"]']
      , i = Do(e, [".sentry-mask", "[data-sentry-mask]"])
      , a = Do(t, []);
    return {
        maskTextSelector: i,
        unmaskTextSelector: a,
        blockSelector: Do(n, [".sentry-block", "[data-sentry-block]", ...o]),
        unblockSelector: Do(r, []),
        ignoreSelector: Do(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
    }
}
function $M({el: e, key: t, maskAttributes: n, maskAllText: r, privacyOptions: s, value: o}) {
    return !r || s.unmaskTextSelector && e.matches(s.unmaskTextSelector) ? o : n.includes(t) || t === "value" && e.tagName === "INPUT" && ["submit", "button"].includes(e.getAttribute("type") || "") ? o.replace(/[\S]/g, "*") : o
}
const o_ = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]'
  , UM = ["content-length", "content-type", "accept"];
let i_ = !1;
const jM = e => new au(e);
class au {
    static __initStatic() {
        this.id = "Replay"
    }
    constructor({flushMinDelay: t=wF, flushMaxDelay: n=CF, minReplayDuration: r=DF, maxReplayDuration: s=jg, stickySession: o=!0, useCompression: i=!0, workerUrl: a, _experiments: c={}, maskAllText: u=!0, maskAllInputs: l=!0, blockAllMedia: f=!0, mutationBreadcrumbLimit: d=750, mutationLimit: p=1e4, slowClickTimeout: m=7e3, slowClickIgnoreSelectors: h=[], networkDetailAllowUrls: g=[], networkDetailDenyUrls: E=[], networkCaptureBodies: x=!0, networkRequestHeaders: _=[], networkResponseHeaders: y=[], mask: S=[], maskAttributes: v=["title", "placeholder"], unmask: b=[], block: C=[], unblock: I=[], ignore: w=[], maskFn: T, beforeAddRecordingEvent: R, beforeErrorSampling: D}={}) {
        this.name = au.id;
        const z = HM({
            mask: S,
            unmask: b,
            block: C,
            unblock: I,
            ignore: w
        });
        if (this._recordingOptions = {
            maskAllInputs: l,
            maskAllText: u,
            maskInputOptions: {
                password: !0
            },
            maskTextFn: T,
            maskInputFn: T,
            maskAttributeFn: (X, O, Z) => $M({
                maskAttributes: v,
                maskAllText: u,
                privacyOptions: z,
                key: X,
                value: O,
                el: Z
            }),
            ...z,
            slimDOMOptions: "all",
            inlineStylesheet: !0,
            inlineImages: !1,
            collectFonts: !0,
            errorHandler: X => {
                try {
                    X.__rrweb__ = !0
                } catch {}
            }
        },
        this._initialOptions = {
            flushMinDelay: t,
            flushMaxDelay: n,
            minReplayDuration: Math.min(r, BF),
            maxReplayDuration: Math.min(s, jg),
            stickySession: o,
            useCompression: i,
            workerUrl: a,
            blockAllMedia: f,
            maskAllInputs: l,
            maskAllText: u,
            mutationBreadcrumbLimit: d,
            mutationLimit: p,
            slowClickTimeout: m,
            slowClickIgnoreSelectors: h,
            networkDetailAllowUrls: g,
            networkDetailDenyUrls: E,
            networkCaptureBodies: x,
            networkRequestHeaders: a_(_),
            networkResponseHeaders: a_(y),
            beforeAddRecordingEvent: R,
            beforeErrorSampling: D,
            _experiments: c
        },
        this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${o_}` : o_),
        this._isInitialized && sg())
            throw new Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0
    }
    get _isInitialized() {
        return i_
    }
    set _isInitialized(t) {
        i_ = t
    }
    afterAllSetup(t) {
        !sg() || this._replay || (this._setup(t),
        this._initialize(t))
    }
    start() {
        this._replay && this._replay.start()
    }
    startBuffering() {
        this._replay && this._replay.startBuffering()
    }
    stop() {
        return this._replay ? this._replay.stop({
            forceFlush: this._replay.recordingMode === "session"
        }) : Promise.resolve()
    }
    flush(t) {
        return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : (this._replay.start(),
        Promise.resolve()) : Promise.resolve()
    }
    getReplayId() {
        if (!(!this._replay || !this._replay.isEnabled()))
            return this._replay.getSessionId()
    }
    _initialize(t) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(t),
        this._replay.initializeSampling())
    }
    _setup(t) {
        const n = zM(this._initialOptions, t);
        this._replay = new hr({
            options: n,
            recordingOptions: this._recordingOptions
        })
    }
    _maybeLoadFromReplayCanvasIntegration(t) {
        try {
            const n = t.getIntegrationByName("ReplayCanvas");
            if (!n)
                return;
            this._replay._canvas = n.getOptions()
        } catch {}
    }
}
au.__initStatic();
function zM(e, t) {
    const n = t.getOptions()
      , r = {
        sessionSampleRate: 0,
        errorSampleRate: 0,
        ...ft(e)
    }
      , s = Qa(n.replaysSessionSampleRate)
      , o = Qa(n.replaysOnErrorSampleRate);
    return s == null && o == null && Xn( () => {
        console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
    }
    ),
    s != null && (r.sessionSampleRate = s),
    o != null && (r.errorSampleRate = o),
    r
}
function a_(e) {
    return [...UM, ...e.map(t => t.toLowerCase())]
}
const c_ = new WeakMap
  , Nl = new Map
  , u0 = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0
};
function WM(e, t) {
    const {traceFetch: n, traceXHR: r, shouldCreateSpanForRequest: s, enableHTTPTimings: o, tracePropagationTargets: i} = {
        traceFetch: u0.traceFetch,
        traceXHR: u0.traceXHR,
        ...t
    }
      , a = typeof s == "function" ? s : l => !0
      , c = l => GM(l, i)
      , u = {};
    n && (e.addEventProcessor(l => (l.type === "transaction" && l.spans && l.spans.forEach(f => {
        if (f.op === "http.client") {
            const d = Nl.get(f.span_id);
            d && (f.timestamp = d / 1e3,
            Nl.delete(f.span_id))
        }
    }
    ),
    l)),
    kI(l => {
        if (l.response) {
            const f = c_.get(l.response);
            f && l.endTimestamp && Nl.set(f, l.endTimestamp)
        }
    }
    ),
    hv(l => {
        const f = oB(l, a, c, u);
        if (l.response && l.fetchData.__span && c_.set(l.response, l.fetchData.__span),
        f) {
            const d = ub(l.fetchData.url)
              , p = d ? Gr(d).host : void 0;
            f.setAttributes({
                "http.url": d,
                "server.address": p
            })
        }
        o && f && u_(f)
    }
    )),
    r && pE(l => {
        const f = XM(l, a, c, u);
        o && f && u_(f)
    }
    )
}
function qM(e) {
    return e.entryType === "resource" && "initiatorType"in e && typeof e.nextHopProtocol == "string" && (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
}
function u_(e) {
    const {url: t} = Re(e).data || {};
    if (!t || typeof t != "string")
        return;
    const n = io("resource", ({entries: r}) => {
        r.forEach(s => {
            qM(s) && s.name.endsWith(t) && (KM(s).forEach(i => e.setAttribute(...i)),
            setTimeout(n))
        }
        )
    }
    )
}
function VM(e) {
    let t = "unknown"
      , n = "unknown"
      , r = "";
    for (const s of e) {
        if (s === "/") {
            [t,n] = e.split("/");
            break
        }
        if (!isNaN(Number(s))) {
            t = r === "h" ? "http" : r,
            n = e.split(r)[1];
            break
        }
        r += s
    }
    return r === e && (t = r),
    {
        name: t,
        version: n
    }
}
function _n(e=0) {
    return ((Pt || performance.timeOrigin) + e) / 1e3
}
function KM(e) {
    const {name: t, version: n} = VM(e.nextHopProtocol)
      , r = [];
    return r.push(["network.protocol.version", n], ["network.protocol.name", t]),
    Pt ? [...r, ["http.request.redirect_start", _n(e.redirectStart)], ["http.request.fetch_start", _n(e.fetchStart)], ["http.request.domain_lookup_start", _n(e.domainLookupStart)], ["http.request.domain_lookup_end", _n(e.domainLookupEnd)], ["http.request.connect_start", _n(e.connectStart)], ["http.request.secure_connection_start", _n(e.secureConnectionStart)], ["http.request.connection_end", _n(e.connectEnd)], ["http.request.request_start", _n(e.requestStart)], ["http.request.response_start", _n(e.responseStart)], ["http.request.response_end", _n(e.responseEnd)]] : r
}
function GM(e, t) {
    const n = he.location && he.location.href;
    if (n) {
        let r, s;
        try {
            r = new URL(e,n),
            s = new URL(n).origin
        } catch {
            return !1
        }
        const o = r.origin === s;
        return t ? xr(r.toString(), t) || o && xr(r.pathname, t) : o
    } else {
        const r = !!e.match(/^\/(?!\/)/);
        return t ? xr(e, t) : r
    }
}
function XM(e, t, n, r) {
    const s = e.xhr
      , o = s && s[$r];
    if (!s || s.__sentry_own_request__ || !o)
        return;
    const i = Kn() && t(o.url);
    if (e.endTimestamp && i) {
        const d = s.__sentry_xhr_span_id__;
        if (!d)
            return;
        const p = r[d];
        p && o.status_code !== void 0 && (Rv(p, o.status_code),
        p.end(),
        delete r[d]);
        return
    }
    const a = ub(o.url)
      , c = a ? Gr(a).host : void 0
      , u = !!dt()
      , l = i && u ? Tn({
        name: `${o.method} ${o.url}`,
        attributes: {
            type: "xhr",
            "http.method": o.method,
            "http.url": a,
            url: o.url,
            "server.address": c,
            [Qe]: "auto.http.browser",
            [di]: "http.client"
        }
    }) : new yo;
    s.__sentry_xhr_span_id__ = l.spanContext().spanId,
    r[s.__sentry_xhr_span_id__] = l;
    const f = Ce();
    return s.setRequestHeader && n(o.url) && f && YM(s, f, Kn() && u ? l : void 0),
    l
}
function YM(e, t, n) {
    const r = Ge()
      , s = rn()
      , {traceId: o, spanId: i, sampled: a, dsc: c} = {
        ...s.getPropagationContext(),
        ...r.getPropagationContext()
    }
      , u = n && Kn() ? Bv(n) : Td(o, i, a)
      , l = bv(c || (n ? vs(n) : Jc(o, t)));
    JM(e, u, l)
}
function JM(e, t, n) {
    try {
        e.setRequestHeader("sentry-trace", t),
        n && e.setRequestHeader(Lf, n)
    } catch {}
}
function ub(e) {
    try {
        return new URL(e,he.location.origin).href
    } catch {
        return
    }
}
function QM() {
    he && he.document ? he.document.addEventListener("visibilitychange", () => {
        const e = dt();
        if (!e)
            return;
        const t = mt(e);
        if (he.document.hidden && t) {
            const n = "cancelled"
              , {op: r, status: s} = Re(t);
            pn && V.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`),
            s || t.setStatus({
                code: at,
                message: n
            }),
            t.setAttribute("sentry.cancellation_reason", "document.hidden"),
            t.end()
        }
    }
    ) : pn && V.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}
const ZM = "BrowserTracing"
  , e9 = {
    ...Aa,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !1,
    enableInp: !0,
    _experiments: {},
    ...u0
}
  , l_ = (e={}) => {
    D5();
    const {enableInp: t, enableLongTask: n, enableLongAnimationFrame: r, _experiments: {enableInteractions: s}, beforeStartSpan: o, idleTimeout: i, finalTimeout: a, childSpanTimeout: c, markBackgroundSpan: u, traceFetch: l, traceXHR: f, shouldCreateSpanForRequest: d, enableHTTPTimings: p, instrumentPageLoad: m, instrumentNavigation: h} = {
        ...e9,
        ...e
    }
      , g = ZB();
    t && SO(),
    r && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? tO() : n && eO(),
    s && nO();
    const E = {
        name: void 0,
        source: void 0
    };
    function x(_, y) {
        const S = y.op === "pageload"
          , v = o ? o(y) : y
          , b = v.attributes || {};
        y.name !== v.name && (b[Jt] = "custom",
        v.attributes = b),
        E.name = v.name,
        E.source = b[Jt];
        const C = Uv(v, {
            idleTimeout: i,
            finalTimeout: a,
            childSpanTimeout: c,
            disableAutoFinish: S,
            beforeSpanEnd: w => {
                g(),
                aO(w)
            }
        });
        function I() {
            ["interactive", "complete"].includes(he.document.readyState) && _.emit("idleSpanEnableAutoFinish", C)
        }
        return S && he.document && (he.document.addEventListener("readystatechange", () => {
            I()
        }
        ),
        I()),
        C
    }
    return {
        name: ZM,
        afterAllSetup(_) {
            let y, S = he.location && he.location.href;
            _.on("startNavigationSpan", v => {
                Ce() === _ && (y && !Re(y).timestamp && (pn && V.log(`[Tracing] Finishing current root span with op: ${Re(y).op}`),
                y.end()),
                y = x(_, {
                    op: "navigation",
                    ...v
                }))
            }
            ),
            _.on("startPageLoadSpan", (v, b={}) => {
                if (Ce() !== _)
                    return;
                y && !Re(y).timestamp && (pn && V.log(`[Tracing] Finishing current root span with op: ${Re(y).op}`),
                y.end());
                const C = b.sentryTrace || f_("sentry-trace")
                  , I = b.baggage || f_("baggage")
                  , w = QI(C, I);
                Ge().setPropagationContext(w),
                y = x(_, {
                    op: "pageload",
                    ...v
                })
            }
            ),
            _.on("spanEnd", v => {
                const b = Re(v).op;
                if (v !== mt(v) || b !== "navigation" && b !== "pageload")
                    return;
                const C = Ge()
                  , I = C.getPropagationContext();
                C.setPropagationContext({
                    ...I,
                    sampled: I.sampled !== void 0 ? I.sampled : ys(v),
                    dsc: I.dsc || vs(v)
                })
            }
            ),
            he.location && (m && t9(_, {
                name: he.location.pathname,
                startTime: Pt ? Pt / 1e3 : void 0,
                attributes: {
                    [Jt]: "url",
                    [Qe]: "auto.pageload.browser"
                }
            }),
            h && tu( ({to: v, from: b}) => {
                if (b === void 0 && S && S.indexOf(v) !== -1) {
                    S = void 0;
                    return
                }
                b !== v && (S = void 0,
                lb(_, {
                    name: he.location.pathname,
                    attributes: {
                        [Jt]: "url",
                        [Qe]: "auto.navigation.browser"
                    }
                }))
            }
            )),
            u && QM(),
            s && n9(i, a, c, E),
            t && CO(),
            WM(_, {
                traceFetch: l,
                traceXHR: f,
                tracePropagationTargets: _.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest: d,
                enableHTTPTimings: p
            })
        }
    }
}
;
function t9(e, t, n) {
    e.emit("startPageLoadSpan", t, n),
    Ge().setTransactionName(t.name);
    const r = dt();
    return (r && Re(r).op) === "pageload" ? r : void 0
}
function lb(e, t) {
    rn().setPropagationContext(Ya()),
    Ge().setPropagationContext(Ya()),
    e.emit("startNavigationSpan", t),
    Ge().setTransactionName(t.name);
    const n = dt();
    return (n && Re(n).op) === "navigation" ? n : void 0
}
function f_(e) {
    const t = fI(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0
}
function n9(e, t, n, r) {
    let s;
    const o = () => {
        const i = "ui.action.click"
          , a = dt()
          , c = a && mt(a);
        if (c) {
            const u = Re(c).op;
            if (["navigation", "pageload"].includes(u)) {
                pn && V.warn(`[Tracing] Did not create ${i} span because a pageload or navigation span is in progress.`);
                return
            }
        }
        if (s && (s.setAttribute(jf, "interactionInterrupted"),
        s.end(),
        s = void 0),
        !r.name) {
            pn && V.warn(`[Tracing] Did not create ${i} transaction because _latestRouteName is missing.`);
            return
        }
        s = Uv({
            name: r.name,
            op: i,
            attributes: {
                [Jt]: r.source || "url"
            }
        }, {
            idleTimeout: e,
            finalTimeout: t,
            childSpanTimeout: n
        })
    }
    ;
    he.document && addEventListener("click", o, {
        once: !1,
        capture: !0
    })
}
const fb = ["activate", "mount", "update"]
  , db = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , r9 = /(?:^|[-_])(\w)/g
  , s9 = e => e.replace(r9, t => t.toUpperCase()).replace(/[-_]/g, "")
  , o9 = "<Root>"
  , Ml = "<Anonymous>"
  , i9 = (e, t) => e.repeat(t)
  , Xo = (e, t) => {
    if (!e)
        return Ml;
    if (e.$root === e)
        return o9;
    if (!e.$options)
        return Ml;
    const n = e.$options;
    let r = n.name || n._componentTag;
    const s = n.__file;
    if (!r && s) {
        const o = s.match(/([^/\\]+)\.vue$/);
        o && (r = o[1])
    }
    return (r ? `<${s9(r)}>` : Ml) + (s && t !== !1 ? ` at ${s}` : "")
}
  , a9 = e => {
    if (e && (e._isVue || e.__isVue) && e.$parent) {
        const t = [];
        let n = 0;
        for (; e; ) {
            if (t.length > 0) {
                const s = t[t.length - 1];
                if (s.constructor === e.constructor) {
                    n++,
                    e = e.$parent;
                    continue
                } else
                    n > 0 && (t[t.length - 1] = [s, n],
                    n = 0)
            }
            t.push(e),
            e = e.$parent
        }
        return `

found in

${t.map( (s, o) => `${(o === 0 ? "---> " : i9(" ", 5 + o * 2)) + (Array.isArray(s) ? `${Xo(s[0])}... (${s[1]} recursive calls)` : Xo(s))}`).join(`
`)}`
    }
    return `

(found in ${Xo(e)})`
}
  , c9 = (e, t) => {
    const {errorHandler: n, warnHandler: r, silent: s} = e.config;
    e.config.errorHandler = (o, i, a) => {
        const c = Xo(i, !1)
          , u = i ? a9(i) : ""
          , l = {
            componentName: c,
            lifecycleHook: a,
            trace: u
        };
        if (t.attachProps && i && (i.$options && i.$options.propsData ? l.propsData = i.$options.propsData : i.$props && (l.propsData = i.$props)),
        setTimeout( () => {
            Oi(o, {
                captureContext: {
                    contexts: {
                        vue: l
                    }
                },
                mechanism: {
                    handled: !1
                }
            })
        }
        ),
        typeof n == "function" && n.call(e, o, i, a),
        t.logErrors) {
            const f = typeof console < "u"
              , d = `Error in ${a}: "${o && o.toString()}"`;
            r ? r.call(null, d, i, u) : f && !s && Xn( () => {
                console.error(`[Vue warn]: ${d}${u}`)
            }
            )
        }
    }
}
  , d_ = "ui.vue"
  , u9 = {
    activate: ["activated", "deactivated"],
    create: ["beforeCreate", "created"],
    unmount: ["beforeUnmount", "unmounted"],
    destroy: ["beforeDestroy", "destroyed"],
    mount: ["beforeMount", "mounted"],
    update: ["beforeUpdate", "updated"]
};
function l9(e, t, n) {
    e.$_sentryRootSpanTimer && clearTimeout(e.$_sentryRootSpanTimer),
    e.$_sentryRootSpanTimer = setTimeout( () => {
        e.$root && e.$root.$_sentryRootSpan && (e.$root.$_sentryRootSpan.end(t),
        e.$root.$_sentryRootSpan = void 0)
    }
    , n)
}
const f9 = e => {
    const t = (e.hooks || []).concat(fb).filter( (r, s, o) => o.indexOf(r) === s)
      , n = {};
    for (const r of t) {
        const s = u9[r];
        if (!s) {
            db && V.warn(`Unknown hook: ${r}`);
            continue
        }
        for (const o of s)
            n[o] = function() {
                const i = this.$root === this;
                i && dt() && (this.$_sentryRootSpan = this.$_sentryRootSpan || Tn({
                    name: "Application Render",
                    op: `${d_}.render`,
                    attributes: {
                        [Qe]: "auto.ui.vue"
                    }
                }));
                const a = Xo(this, !1)
                  , c = Array.isArray(e.trackComponents) ? e.trackComponents.indexOf(a) > -1 : e.trackComponents;
                if (!(!i && !c))
                    if (this.$_sentrySpans = this.$_sentrySpans || {},
                    o == s[0]) {
                        if (this.$root && this.$root.$_sentryRootSpan || dt()) {
                            const l = this.$_sentrySpans[r];
                            l && l.end(),
                            this.$_sentrySpans[r] = Tn({
                                name: `Vue <${a}>`,
                                op: `${d_}.${r}`,
                                attributes: {
                                    [Qe]: "auto.ui.vue"
                                }
                            })
                        }
                    } else {
                        const u = this.$_sentrySpans[r];
                        if (!u)
                            return;
                        u.end(),
                        l9(this, vt(), e.timeout)
                    }
            }
    }
    return n
}
  , d9 = we
  , p9 = {
    Vue: d9.Vue,
    attachProps: !0,
    logErrors: !0,
    hooks: fb,
    timeout: 2e3,
    trackComponents: !1
}
  , h9 = "Vue"
  , m9 = (e={}) => ({
    name: h9,
    setup(t) {
        _9(t, e)
    }
})
  , g9 = m9;
function _9(e, t) {
    const n = {
        ...p9,
        ...e.getOptions(),
        ...t
    };
    if (!n.Vue && !n.app) {
        Xn( () => {
            console.warn("[@sentry/vue]: Misconfigured SDK. Vue specific errors will not be captured.\nUpdate your `Sentry.init` call with an appropriate config option:\n`app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2).")
        }
        );
        return
    }
    n.app ? Ad(n.app).forEach(s => p_(s, n)) : n.Vue && p_(n.Vue, n)
}
const p_ = (e, t) => {
    if (db) {
        const n = e;
        (n._instance && n._instance.isMounted) === !0 && Xn( () => {
            console.warn("[@sentry/vue]: Misconfigured SDK. Vue app is already mounted. Make sure to call `app.mount()` after `Sentry.init()`.")
        }
        )
    }
    c9(e, t),
    Kn(t) && e.mixin(f9({
        ...t,
        ...t.tracingOptions
    }))
}
;
function x9(e={}) {
    const t = {
        _metadata: {
            sdk: {
                name: "sentry.javascript.vue",
                packages: [{
                    name: "npm:@sentry/vue",
                    version: jn
                }],
                version: jn
            }
        },
        defaultIntegrations: [...gE(), g9()],
        ...e
    };
    return yF(t)
}
function y9(e, t, n) {
    let r = !0;
    e.onError(s => Oi(s, {
        mechanism: {
            handled: !1
        }
    })),
    e.beforeEach( (s, o, i) => {
        const a = o.name == null && o.matched.length === 0 || o.name === void 0 && r;
        r && (r = !1);
        const c = {
            [Qe]: "auto.navigation.vue"
        };
        for (const f of Object.keys(s.params))
            c[`params.${f}`] = s.params[f];
        for (const f of Object.keys(s.query)) {
            const d = s.query[f];
            d && (c[`query.${f}`] = d)
        }
        let u = s.path
          , l = "url";
        if (s.name && t.routeLabel !== "path")
            u = s.name.toString(),
            l = "custom";
        else if (s.matched.length > 0) {
            const f = s.matched.length - 1;
            u = s.matched[f].path,
            l = "route"
        }
        if (Ge().setTransactionName(u),
        t.instrumentPageLoad && a) {
            const f = v9();
            f && ((Re(f).data || {})[Jt] !== "custom" && (f.updateName(u),
            f.setAttribute(Jt, l)),
            f.setAttributes({
                ...c,
                [Qe]: "auto.pageload.vue"
            }))
        }
        t.instrumentNavigation && !a && (c[Jt] = l,
        c[Qe] = "auto.navigation.vue",
        n({
            name: u,
            op: "navigation",
            attributes: c
        })),
        i && i()
    }
    )
}
function v9() {
    const e = dt()
      , t = e && mt(e);
    if (!t)
        return;
    const n = Re(t).op;
    return n === "navigation" || n === "pageload" ? t : void 0
}
function E9(e={}) {
    if (!e.router)
        return l_(e);
    const t = l_({
        ...e,
        instrumentNavigation: !1
    })
      , {router: n, instrumentNavigation: r=!0, instrumentPageLoad: s=!0, routeLabel: o="name"} = e;
    return {
        ...t,
        afterAllSetup(i) {
            t.afterAllSetup(i),
            y9(n, {
                routeLabel: o,
                instrumentNavigation: r,
                instrumentPageLoad: s
            }, c => {
                lb(i, c)
            }
            )
        }
    }
}
const b9 = Nt(e => {
    const t = mn()
      , {public: {sentry: n}} = ds();
    n.dsn && x9({
        app: e.vueApp,
        dsn: n.dsn,
        environment: n.environment,
        integrations: [E9({
            router: t
        }), jM({
            maskAllText: !1,
            blockAllMedia: !1
        })],
        tracesSampleRate: .2,
        tracePropagationTargets: ["localhost", "https://your-server.com"],
        replaysSessionSampleRate: 1,
        replaysOnErrorSampleRate: 1
    })
}
)
  , S9 = Nt(e => {
    e.vueApp.config.errorHandler = (t, n, r) => {
        console.error(t),
        Ct({
            message: "An error occurred, please try again later",
            type: "error",
            grouping: !0
        })
    }
}
)
  , w9 = "https://www.google.com/recaptcha/api.js"
  , C9 = "https://recaptcha.net/recaptcha/api.js"
  , pb = "vue3-recaptcha-v2:options"
  , l0 = "vue3-recaptcha-v2"
  , A9 = typeof window > "u";
class js extends Error {
    constructor(t) {
        super(t),
        this.message = "[vue3-recaptcha-v2] " + t
    }
}
const T9 = () => {
    const e = qe(pb);
    return {
        options: e,
        handleGenerateScript: t => {
            if (A9)
                throw new js("Cannot generate script on server side");
            const n = document.getElementById(l0);
            n && n.remove();
            const r = document.createElement("script")
              , s = e != null && e.cnDomains ? C9 : w9
              , o = t ? `&hl=${t}` : "";
            r.setAttribute("id", l0),
            r.setAttribute("src", `${s}?render=explicit${o}`),
            r.setAttribute("async", ""),
            r.setAttribute("defer", ""),
            r.onerror = () => {
                new js("Failed to load script")
            }
            ,
            document.head.appendChild(r)
        }
    }
}
  , U7 = xe({
    __name: "Recaptcha",
    props: {
        theme: {},
        size: {},
        tabindex: {},
        language: {}
    },
    emits: ["widgetId", "loadCallback", "expiredCallback", "errorCallback"],
    setup(e, {emit: t}) {
        const n = e
          , r = We(null)
          , s = We(null)
          , {handleGenerateScript: o, options: i} = T9()
          , a = () => {
            if (!window.grecaptcha)
                throw new js("reCAPTCHA is not loaded");
            if (!s.value)
                throw new js("element is not defined");
            window.grecaptcha.ready( () => {
                try {
                    const {sitekey: c} = i
                      , {theme: u, size: l, tabindex: f} = n;
                    r.value = window.grecaptcha.render(s.value, {
                        sitekey: c,
                        theme: u,
                        size: l,
                        tabindex: f,
                        callback: d => t("loadCallback", d),
                        "expired-callback": () => t("expiredCallback"),
                        "error-callback": () => t("errorCallback")
                    }),
                    t("widgetId", r.value)
                } catch (c) {
                    throw new js(c.message)
                }
            }
            )
        }
        ;
        return M0( () => {
            o(n.language)
        }
        ),
        kr( () => {
            document.getElementById(l0).onload = () => {
                a()
            }
        }
        ),
        (c, u) => (pe(),
        Oe("div", {
            ref_key: "reCAPTCHARef",
            ref: s
        }, null, 512))
    }
});
function k9(e, t) {
    if (!t.sitekey)
        throw new js("sitekey is required");
    e.provide(pb, t)
}
const R9 = Nt(e => {
    const t = ds().public;
    e.vueApp.use(k9, {
        sitekey: t.recaptcha_site_key_app,
        cnDomains: !1
    })
}
);
var yi = {}
  , hb = {}
  , fo = {}
  , Hi = {}
  , I9 = ue && ue.__awaiter || function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(l) {
            try {
                u(r.next(l))
            } catch (f) {
                i(f)
            }
        }
        function c(l) {
            try {
                u(r.throw(l))
            } catch (f) {
                i(f)
            }
        }
        function u(l) {
            l.done ? o(l.value) : s(l.value).then(a, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
}
  , D9 = ue && ue.__generator || function(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, r, s, o, i;
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function a(u) {
        return function(l) {
            return c([u, l])
        }
    }
    function c(u) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; i && (i = 0,
        u[0] && (n = 0)),
        n; )
            try {
                if (r = 1,
                s && (o = u[0] & 2 ? s.return : u[0] ? s.throw || ((o = s.return) && o.call(s),
                0) : s.next) && !(o = o.call(s, u[1])).done)
                    return o;
                switch (s = 0,
                o && (u = [u[0] & 2, o.value]),
                u[0]) {
                case 0:
                case 1:
                    o = u;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    s = u[1],
                    u = [0];
                    continue;
                case 7:
                    u = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (o = n.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                        n.label = u[1];
                        break
                    }
                    if (u[0] === 6 && n.label < o[1]) {
                        n.label = o[1],
                        o = u;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2],
                        n.ops.push(u);
                        break
                    }
                    o[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                u = t.call(e, n)
            } catch (l) {
                u = [6, l],
                s = 0
            } finally {
                r = o = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}
;
Object.defineProperty(Hi, "__esModule", {
    value: !0
});
Hi.ReCaptchaInstance = void 0;
var B9 = function() {
    function e(t, n, r) {
        this.siteKey = t,
        this.recaptchaID = n,
        this.recaptcha = r,
        this.styleContainer = null
    }
    return e.prototype.execute = function(t) {
        return I9(this, void 0, void 0, function() {
            var n;
            return D9(this, function(r) {
                switch (r.label) {
                case 0:
                    return this.recaptcha.enterprise ? [4, this.recaptcha.enterprise.execute(this.recaptchaID, {
                        action: t
                    })] : [3, 2];
                case 1:
                    return n = r.sent(),
                    [3, 4];
                case 2:
                    return [4, this.recaptcha.execute(this.recaptchaID, {
                        action: t
                    })];
                case 3:
                    n = r.sent(),
                    r.label = 4;
                case 4:
                    return [2, n]
                }
            })
        })
    }
    ,
    e.prototype.getSiteKey = function() {
        return this.siteKey
    }
    ,
    e.prototype.hideBadge = function() {
        this.styleContainer === null && (this.styleContainer = document.createElement("style"),
        this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}",
        document.head.appendChild(this.styleContainer))
    }
    ,
    e.prototype.showBadge = function() {
        this.styleContainer !== null && (document.head.removeChild(this.styleContainer),
        this.styleContainer = null)
    }
    ,
    e
}();
Hi.ReCaptchaInstance = B9;
var f0 = ue && ue.__assign || function() {
    return f0 = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
        }
        return e
    }
    ,
    f0.apply(this, arguments)
}
;
Object.defineProperty(fo, "__esModule", {
    value: !0
});
fo.getInstance = fo.load = void 0;
var O9 = Hi, mr;
(function(e) {
    e[e.NOT_LOADED = 0] = "NOT_LOADED",
    e[e.LOADING = 1] = "LOADING",
    e[e.LOADED = 2] = "LOADED"
}
)(mr || (mr = {}));
var mb = function() {
    function e() {}
    return e.load = function(t, n) {
        if (n === void 0 && (n = {}),
        typeof document > "u")
            return Promise.reject(new Error("This is a library for the browser!"));
        if (e.getLoadingState() === mr.LOADED)
            return e.instance.getSiteKey() === t ? Promise.resolve(e.instance) : Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
        if (e.getLoadingState() === mr.LOADING)
            return t !== e.instanceSiteKey ? Promise.reject(new Error("reCAPTCHA already loaded with different site key!")) : new Promise(function(s, o) {
                e.successfulLoadingConsumers.push(function(i) {
                    return s(i)
                }),
                e.errorLoadingRunnable.push(function(i) {
                    return o(i)
                })
            }
            );
        e.instanceSiteKey = t,
        e.setLoadingState(mr.LOADING);
        var r = new e;
        return new Promise(function(s, o) {
            r.loadScript(t, n.useRecaptchaNet || !1, n.useEnterprise || !1, n.renderParameters ? n.renderParameters : {}, n.customUrl).then(function() {
                e.setLoadingState(mr.LOADED);
                var i = r.doExplicitRender(grecaptcha, t, n.explicitRenderParameters ? n.explicitRenderParameters : {}, n.useEnterprise || !1)
                  , a = new O9.ReCaptchaInstance(t,i,grecaptcha);
                e.successfulLoadingConsumers.forEach(function(c) {
                    return c(a)
                }),
                e.successfulLoadingConsumers = [],
                n.autoHideBadge && a.hideBadge(),
                e.instance = a,
                s(a)
            }).catch(function(i) {
                e.errorLoadingRunnable.forEach(function(a) {
                    return a(i)
                }),
                e.errorLoadingRunnable = [],
                o(i)
            })
        }
        )
    }
    ,
    e.getInstance = function() {
        return e.instance
    }
    ,
    e.setLoadingState = function(t) {
        e.loadingState = t
    }
    ,
    e.getLoadingState = function() {
        return e.loadingState === null ? mr.NOT_LOADED : e.loadingState
    }
    ,
    e.prototype.loadScript = function(t, n, r, s, o) {
        var i = this;
        n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        s === void 0 && (s = {}),
        o === void 0 && (o = "");
        var a = document.createElement("script");
        a.setAttribute("recaptcha-v3-script", ""),
        a.setAttribute("async", ""),
        a.setAttribute("defer", "");
        var c = "https://www.google.com/recaptcha/api.js";
        n ? r ? c = "https://recaptcha.net/recaptcha/enterprise.js" : c = "https://recaptcha.net/recaptcha/api.js" : r && (c = "https://www.google.com/recaptcha/enterprise.js"),
        o && (c = o),
        s.render && (s.render = void 0);
        var u = this.buildQueryString(s);
        return a.src = c + "?render=explicit" + u,
        new Promise(function(l, f) {
            a.addEventListener("load", i.waitForScriptToLoad(function() {
                l(a)
            }, r), !1),
            a.onerror = function(d) {
                e.setLoadingState(mr.NOT_LOADED),
                f(d)
            }
            ,
            document.head.appendChild(a)
        }
        )
    }
    ,
    e.prototype.buildQueryString = function(t) {
        var n = Object.keys(t);
        return n.length < 1 ? "" : "&" + Object.keys(t).filter(function(r) {
            return !!t[r]
        }).map(function(r) {
            return r + "=" + t[r]
        }).join("&")
    }
    ,
    e.prototype.waitForScriptToLoad = function(t, n) {
        var r = this;
        return function() {
            window.grecaptcha === void 0 ? setTimeout(function() {
                r.waitForScriptToLoad(t, n)
            }, e.SCRIPT_LOAD_DELAY) : n ? window.grecaptcha.enterprise.ready(function() {
                t()
            }) : window.grecaptcha.ready(function() {
                t()
            })
        }
    }
    ,
    e.prototype.doExplicitRender = function(t, n, r, s) {
        var o = f0({
            sitekey: n
        }, r);
        return r.container ? s ? t.enterprise.render(r.container, o) : t.render(r.container, o) : s ? t.enterprise.render(o) : t.render(o)
    }
    ,
    e.loadingState = null,
    e.instance = null,
    e.instanceSiteKey = null,
    e.successfulLoadingConsumers = [],
    e.errorLoadingRunnable = [],
    e.SCRIPT_LOAD_DELAY = 25,
    e
}();
fo.load = mb.load;
fo.getInstance = mb.getInstance;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.ReCaptchaInstance = e.getInstance = e.load = void 0;
    var t = fo;
    Object.defineProperty(e, "load", {
        enumerable: !0,
        get: function() {
            return t.load
        }
    }),
    Object.defineProperty(e, "getInstance", {
        enumerable: !0,
        get: function() {
            return t.getInstance
        }
    });
    var n = Hi;
    Object.defineProperty(e, "ReCaptchaInstance", {
        enumerable: !0,
        get: function() {
            return n.ReCaptchaInstance
        }
    })
}
)(hb);
const F9 = k1(jw);
var gb = ue && ue.__awaiter || function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(l) {
            try {
                u(r.next(l))
            } catch (f) {
                i(f)
            }
        }
        function c(l) {
            try {
                u(r.throw(l))
            } catch (f) {
                i(f)
            }
        }
        function u(l) {
            l.done ? o(l.value) : s(l.value).then(a, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
}
  , _b = ue && ue.__generator || function(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, r, s, o, i;
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function a(u) {
        return function(l) {
            return c([u, l])
        }
    }
    function c(u) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; n; )
            try {
                if (r = 1,
                s && (o = u[0] & 2 ? s.return : u[0] ? s.throw || ((o = s.return) && o.call(s),
                0) : s.next) && !(o = o.call(s, u[1])).done)
                    return o;
                switch (s = 0,
                o && (u = [u[0] & 2, o.value]),
                u[0]) {
                case 0:
                case 1:
                    o = u;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    s = u[1],
                    u = [0];
                    continue;
                case 7:
                    u = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (o = n.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                        n.label = u[1];
                        break
                    }
                    if (u[0] === 6 && n.label < o[1]) {
                        n.label = o[1],
                        o = u;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2],
                        n.ops.push(u);
                        break
                    }
                    o[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                u = t.call(e, n)
            } catch (l) {
                u = [6, l],
                s = 0
            } finally {
                r = o = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}
;
Object.defineProperty(yi, "__esModule", {
    value: !0
});
var P9 = yi.useReCaptcha = yb = yi.VueReCaptcha = void 0
  , N9 = hb
  , d0 = F9
  , xb = Symbol("VueReCaptchaInjectKey")
  , zs = {
    loadedWaiters: [],
    error: null
}
  , yb = yi.VueReCaptcha = {
    install: function(e, t) {
        var n = d0.ref(!1)
          , r = d0.ref(void 0);
        e.config.globalProperties.$recaptchaLoaded = h_(n),
        L9(t).then(function(s) {
            n.value = !0,
            r.value = s,
            e.config.globalProperties.$recaptcha = m_(r),
            e.config.globalProperties.$recaptchaInstance = r,
            zs.loadedWaiters.forEach(function(o) {
                return o.resolve(!0)
            })
        }).catch(function(s) {
            zs.error = s,
            zs.loadedWaiters.forEach(function(o) {
                return o.reject(s)
            })
        }),
        e.provide(xb, {
            instance: r,
            isLoaded: n,
            executeRecaptcha: m_(r),
            recaptchaLoaded: h_(n)
        })
    }
};
function M9() {
    return d0.inject(xb)
}
P9 = yi.useReCaptcha = M9;
function L9(e) {
    return gb(this, void 0, void 0, function() {
        return _b(this, function(t) {
            switch (t.label) {
            case 0:
                return [4, N9.load(e.siteKey, e.loaderOptions)];
            case 1:
                return [2, t.sent()]
            }
        })
    })
}
function h_(e) {
    return function() {
        return new Promise(function(t, n) {
            if (zs.error !== null)
                return n(zs.error);
            if (e.value)
                return t(!0);
            zs.loadedWaiters.push({
                resolve: t,
                reject: n
            })
        }
        )
    }
}
function m_(e) {
    var t = this;
    return function(n) {
        return gb(t, void 0, void 0, function() {
            var r;
            return _b(this, function(s) {
                switch (s.label) {
                case 0:
                    return [4, (r = e.value) === null || r === void 0 ? void 0 : r.execute(n)];
                case 1:
                    return [2, s.sent()]
                }
            })
        })
    }
}
const H9 = Nt(e => {
    const t = ds().public;
    e.vueApp.use(yb, {
        siteKey: t.recaptchav3_site_key_app,
        loaderOptions: {
            autoHideBadge: !0,
            explicitRenderParameters: {
                badge: "bottomright",
                theme: "light"
            }
        }
    })
}
);
function g_(e) {
    return e.type.indexOf("mouse") !== -1 ? e.clientX : e.touches[0].clientX
}
function __(e) {
    return e.type.indexOf("mouse") !== -1 ? e.clientY : e.touches[0].clientY
}
var $9 = function() {
    var e = !1;
    try {
        var t = Object.defineProperty({}, "passive", {
            get: function() {
                e = !0
            }
        });
        window.addEventListener("test", null, t)
    } catch {}
    return e
}()
  , U9 = {
    install: function(e, t) {
        var n = Object.assign({}, {
            disableClick: !1,
            tapTolerance: 10,
            swipeTolerance: 30,
            touchHoldTolerance: 400,
            longTapTimeInterval: 400,
            touchClass: "",
            dragFrequency: 100,
            rollOverFrequency: 100,
            namespace: "touch"
        }, t);
        function r(h) {
            var g = this.$$touchObj
              , E = h.type.indexOf("touch") >= 0
              , x = h.type.indexOf("mouse") >= 0
              , _ = this;
            E && (g.lastTouchStartTime = h.timeStamp),
            !(x && g.lastTouchStartTime && h.timeStamp - g.lastTouchStartTime < 350) && (g.touchStarted || (f(this),
            g.touchStarted = !0,
            g.touchMoved = !1,
            g.swipeOutBounded = !1,
            g.startX = g_(h),
            g.startY = __(h),
            g.currentX = 0,
            g.currentY = 0,
            g.touchStartTime = h.timeStamp,
            g.hasSwipe = u(this, "swipe") || u(this, "swipe.left") || u(this, "swipe.right") || u(this, "swipe.top") || u(this, "swipe.bottom"),
            u(this, "hold") && (g.touchHoldTimer = setTimeout(function() {
                g.touchHoldTimer = null,
                l(h, _, "hold")
            }, g.options.touchHoldTolerance)),
            l(h, this, "press")))
        }
        function s(h) {
            var g = this.$$touchObj
              , E = g_(h)
              , x = __(h)
              , _ = g.currentX != E || g.currentY != x;
            if (g.currentX = E,
            g.currentY = x,
            g.touchMoved) {
                if (g.hasSwipe && !g.swipeOutBounded) {
                    var S = g.options.swipeTolerance;
                    g.swipeOutBounded = Math.abs(g.startX - g.currentX) > S && Math.abs(g.startY - g.currentY) > S
                }
            } else {
                var y = g.options.tapTolerance;
                g.touchMoved = Math.abs(g.startX - g.currentX) > y || Math.abs(g.startY - g.currentY) > y,
                g.touchMoved && (p(g),
                l(h, this, "drag.once"))
            }
            if (u(this, "rollover") && _) {
                var v = h.timeStamp
                  , b = g.options.rollOverFrequency;
                (g.touchRollTime == null || v > g.touchRollTime + b) && (g.touchRollTime = v,
                l(h, this, "rollover"))
            }
            if (u(this, "drag") && g.touchStarted && g.touchMoved && _) {
                var v = h.timeStamp
                  , b = g.options.dragFrequency;
                (g.touchDragTime == null || v > g.touchDragTime + b) && (g.touchDragTime = v,
                l(h, this, "drag"))
            }
        }
        function o() {
            var h = this.$$touchObj;
            p(h),
            d(this),
            h.touchStarted = h.touchMoved = !1,
            h.startX = h.startY = 0
        }
        function i(h) {
            var g = this.$$touchObj
              , E = h.type.indexOf("touch") >= 0
              , x = h.type.indexOf("mouse") >= 0;
            E && (g.lastTouchEndTime = h.timeStamp);
            var _ = E && !g.touchHoldTimer;
            if (p(g),
            g.touchStarted = !1,
            d(this),
            !(x && g.lastTouchEndTime && h.timeStamp - g.lastTouchEndTime < 350))
                if (l(h, this, "release"),
                g.touchMoved) {
                    if (g.hasSwipe && !g.swipeOutBounded) {
                        var y = g.options.swipeTolerance, S, v = Math.abs(g.startY - g.currentY), b = Math.abs(g.startX - g.currentX);
                        (v > y || b > y) && (v > b ? S = g.startY > g.currentY ? "top" : "bottom" : S = g.startX > g.currentX ? "left" : "right",
                        u(this, "swipe." + S) ? l(h, this, "swipe." + S, S) : l(h, this, "swipe", S))
                    }
                } else if (u(this, "longtap") && h.timeStamp - g.touchStartTime > g.options.longTapTimeInterval)
                    h.cancelable && h.preventDefault(),
                    l(h, this, "longtap");
                else if (u(this, "hold") && _) {
                    h.cancelable && h.preventDefault();
                    return
                } else
                    l(h, this, "tap")
        }
        function a() {
            f(this)
        }
        function c() {
            d(this)
        }
        function u(h, g) {
            var E = h.$$touchObj.callbacks[g];
            return E != null && E.length > 0
        }
        function l(h, g, E, x) {
            var _ = g.$$touchObj
              , y = _.callbacks[E];
            if (y == null || y.length === 0)
                return null;
            for (var S = 0; S < y.length; S++) {
                var v = y[S];
                v.modifiers.stop && h.stopPropagation(),
                v.modifiers.prevent && h.preventDefault(),
                !(v.modifiers.self && h.target !== h.currentTarget) && typeof v.value == "function" && (x ? v.value(x, h) : v.value(h))
            }
        }
        function f(h) {
            var g = h.$$touchObj.options.touchClass;
            g && h.classList.add(g)
        }
        function d(h) {
            var g = h.$$touchObj.options.touchClass;
            g && h.classList.remove(g)
        }
        function p(h) {
            h && h.touchHoldTimer && (clearTimeout(h.touchHoldTimer),
            h.touchHoldTimer = null)
        }
        function m(h, g) {
            var E = h.$$touchObj || {
                callbacks: {},
                hasBindTouchEvents: !1,
                options: n
            };
            return g && (E.options = Object.assign({}, E.options, g)),
            h.$$touchObj = E,
            h.$$touchObj
        }
        e.directive(n.namespace, {
            beforeMount: function(h, g) {
                var E = m(h)
                  , x = $9 ? {
                    passive: !0
                } : !1
                  , _ = g.arg || "tap";
                switch (_) {
                case "swipe":
                    var y = g.modifiers;
                    if (y.left || y.right || y.top || y.bottom) {
                        for (var S in g.modifiers)
                            if (["left", "right", "top", "bottom"].indexOf(S) >= 0) {
                                var v = "swipe." + S;
                                E.callbacks[v] = E.callbacks[v] || [],
                                E.callbacks[v].push(g)
                            }
                    } else
                        E.callbacks.swipe = E.callbacks.swipe || [],
                        E.callbacks.swipe.push(g);
                    break;
                case "press":
                case "drag":
                    g.modifiers.disablePassive && (x = !1);
                default:
                    E.callbacks[_] = E.callbacks[_] || [],
                    E.callbacks[_].push(g)
                }
                E.hasBindTouchEvents || (h.addEventListener("touchstart", r, x),
                h.addEventListener("touchmove", s, x),
                h.addEventListener("touchcancel", o),
                h.addEventListener("touchend", i),
                E.options.disableClick || (h.addEventListener("mousedown", r),
                h.addEventListener("mousemove", s),
                h.addEventListener("mouseup", i),
                h.addEventListener("mouseenter", a),
                h.addEventListener("mouseleave", c)),
                E.hasBindTouchEvents = !0)
            },
            unmounted: function(h) {
                p(h.$$touchObj),
                h.removeEventListener("touchstart", r),
                h.removeEventListener("touchmove", s),
                h.removeEventListener("touchcancel", o),
                h.removeEventListener("touchend", i),
                h.$$touchObj && !h.$$touchObj.options.disableClick && (h.removeEventListener("mousedown", r),
                h.removeEventListener("mousemove", s),
                h.removeEventListener("mouseup", i),
                h.removeEventListener("mouseenter", a),
                h.removeEventListener("mouseleave", c)),
                delete h.$$touchObj
            }
        }),
        e.directive(`${n.namespace}-class`, {
            beforeMount: function(h, g) {
                m(h, {
                    touchClass: g.value
                })
            }
        }),
        e.directive(`${n.namespace}-options`, {
            beforeMount: function(h, g) {
                m(h, g.value)
            }
        })
    }
};
const j9 = Nt(e => {
    e.vueApp.use(U9)
}
)
  , z9 = [d8, h8, XR, YR, JR, QR, ZR, eI, tI, b9, S9, R9, H9, j9]
  , W9 = xe({
    props: {
        vnode: {
            type: Object,
            required: !0
        },
        route: {
            type: Object,
            required: !0
        },
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(e) {
        const t = e.renderKey
          , n = e.route
          , r = {};
        for (const s in e.route)
            Object.defineProperty(r, s, {
                get: () => t === e.renderKey ? e.route[s] : n[s]
            });
        return $n(Ci, cs(r)),
        () => Ot(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , q9 = xe({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(e, {attrs: t, expose: n}) {
        const r = Ze()
          , s = We()
          , o = qe(Ci, null);
        let i;
        n({
            pageRef: s
        });
        const a = qe(Ay, null);
        let c;
        const u = r.deferHydration();
        if (r.isHydrating) {
            const l = r.hooks.hookOnce("app:error", u);
            mn().beforeEach(l)
        }
        return e.pageKey && Bt( () => e.pageKey, (l, f) => {
            l !== f && r.callHook("page:loading:start")
        }
        ),
        () => Ot(Xy, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: l => {
                const f = K9(o, l.route, l.Component)
                  , d = o && o.matched.length === l.route.matched.length;
                if (!l.Component) {
                    if (c && !d)
                        return c;
                    u();
                    return
                }
                if (c && a && !a.isCurrent(l.route))
                    return c;
                if (f && o && (!a || a != null && a.isCurrent(o)))
                    return d ? c : null;
                const p = Ef(l, e.pageKey);
                !r.isHydrating && !G9(o, l.route, l.Component) && i === p && r.callHook("page:loading:end"),
                i = p;
                const m = !!(e.transition ?? l.route.meta.pageTransition ?? _f)
                  , h = m && V9([e.transition, l.route.meta.pageTransition, _f, {
                    onAfterLeave: () => {
                        r.callHook("page:transition:finish", l.Component)
                    }
                }].filter(Boolean))
                  , g = e.keepalive ?? l.route.meta.keepalive ?? s8;
                return c = Yy(ls, m && h, yA(g, Ot(wc, {
                    suspensible: !0,
                    onPending: () => r.callHook("page:start", l.Component),
                    onResolve: () => {
                        hn( () => r.callHook("page:finish", l.Component).then( () => r.callHook("page:loading:end")).finally(u))
                    }
                }, {
                    default: () => {
                        const E = Ot(W9, {
                            key: p || void 0,
                            vnode: l.Component,
                            route: l.route,
                            renderKey: p || void 0,
                            trackRootNodes: m,
                            vnodeRef: s
                        });
                        return g && (E.type.name = l.Component.type.name || l.Component.type.__name || "RouteProvider"),
                        E
                    }
                }))).default(),
                c
            }
        })
    }
});
function V9(e) {
    const t = e.map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? id(n.onAfterLeave) : void 0
    }));
    return wy(...t)
}
function K9(e, t, n) {
    if (!e)
        return !1;
    const r = t.matched.findIndex(s => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    );
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some( (s, o) => {
        var i, a, c;
        return ((i = s.components) == null ? void 0 : i.default) !== ((c = (a = e.matched[o]) == null ? void 0 : a.components) == null ? void 0 : c.default)
    }
    ) || n && Ef({
        route: t,
        Component: n
    }) !== Ef({
        route: e,
        Component: n
    })
}
function G9(e, t, n) {
    return e ? t.matched.findIndex(s => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const X9 = xe({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(e, t) {
        const n = await gr[e.name]().then(r => r.default || r);
        return () => Ot(n, e.layoutProps, t.slots)
    }
})
  , Y9 = xe({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean, Object],
            default: null
        },
        fallback: {
            type: [String, Object],
            default: null
        }
    },
    setup(e, t) {
        const n = Ze()
          , r = qe(Ci)
          , s = r === ed() ? _A() : r
          , o = me( () => {
            let c = re(e.name) ?? s.meta.layout ?? "default";
            return c && !(c in gr) && e.fallback && (c = re(e.fallback)),
            c
        }
        )
          , i = We();
        t.expose({
            layoutRef: i
        });
        const a = n.deferHydration();
        if (n.isHydrating) {
            const c = n.hooks.hookOnce("app:error", a);
            mn().beforeEach(c)
        }
        return () => {
            const c = o.value && o.value in gr
              , u = s.meta.layoutTransition ?? r8;
            return Yy(ls, c && u, {
                default: () => Ot(wc, {
                    suspensible: !0,
                    onResolve: () => {
                        hn(a)
                    }
                }, {
                    default: () => Ot(J9, {
                        layoutProps: Bc(t.attrs, {
                            ref: i
                        }),
                        key: o.value || void 0,
                        name: o.value,
                        shouldProvide: !e.name,
                        hasTransition: !!u
                    }, t.slots)
                })
            }).default()
        }
    }
})
  , J9 = xe({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean]
        },
        layoutProps: {
            type: Object
        },
        hasTransition: {
            type: Boolean
        },
        shouldProvide: {
            type: Boolean
        }
    },
    setup(e, t) {
        const n = e.name;
        return e.shouldProvide && $n(Ay, {
            isCurrent: r => n === (r.meta.layout ?? "default")
        }),
        () => {
            var r, s;
            return !n || typeof n == "string" && !(n in gr) ? (s = (r = t.slots).default) == null ? void 0 : s.call(r) : Ot(X9, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , Q9 = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r,s] of t)
        n[r] = s;
    return n
}
  , Z9 = {};
function e7(e, t) {
    const n = q9
      , r = Y9;
    return pe(),
    Oe("div", null, [Pe(r, null, {
        default: Hn( () => [Pe(n)]),
        _: 1
    })])
}
const t7 = Q9(Z9, [["render", e7]])
  , n7 = {
    __name: "nuxt-error-page",
    props: {
        error: Object
    },
    setup(e) {
        const n = e.error;
        n.stack && n.stack.split(`
`).splice(1).map(f => ({
            text: f.replace("webpack:/", "").replace(".vue", ".js").trim(),
            internal: f.includes("node_modules") && !f.includes(".cache") || f.includes("internal") || f.includes("new Promise")
        })).map(f => `<span class="stack${f.internal ? " internal" : ""}">${f.text}</span>`).join(`
`);
        const r = Number(n.statusCode || 500)
          , s = r === 404
          , o = n.statusMessage ?? (s ? "Page Not Found" : "Internal Server Error")
          , i = n.message || n.toString()
          , a = void 0
          , l = s ? zl( () => Je( () => import("./BgpE7UJM.js"), __vite__mapDeps([99, 97, 100]), import.meta.url).then(f => f.default || f)) : zl( () => Je( () => import("./DC5iMk4C.js"), __vite__mapDeps([101, 97, 102]), import.meta.url).then(f => f.default || f));
        return (f, d) => (pe(),
        It(re(l), w_(j0({
            statusCode: re(r),
            statusMessage: re(o),
            description: re(i),
            stack: re(a)
        })), null, 16))
    }
}
  , x_ = {
    __name: "nuxt-root",
    setup(e) {
        const t = () => null
          , n = Ze()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const a = n.hooks.hookOnce("app:error", r);
            mn().beforeEach(a)
        }
        const s = !1;
        $n(Ci, ed()),
        n.hooks.callHookWith(a => a.map(c => c()), "vue:setup");
        const o = Nc();
        L0( (a, c, u) => {
            if (n.hooks.callHook("vue:error", a, c, u).catch(l => console.error("[nuxt] Error in `vue:error` hook", l)),
            lC(a) && (a.fatal || a.unhandled))
                return n.runWithContext( () => Ts(a)),
                !1
        }
        );
        const i = !1;
        return (a, c) => (pe(),
        It(wc, {
            onResolve: re(r)
        }, {
            default: Hn( () => [re(o) ? (pe(),
            It(re(n7), {
                key: 0,
                error: re(o)
            }, null, 8, ["error"])) : re(i) ? (pe(),
            It(re(t), {
                key: 1,
                context: re(i)
            }, null, 8, ["context"])) : re(s) ? (pe(),
            It(D0(re(s)), {
                key: 2
            })) : (pe(),
            It(re(t7), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let y_;
{
    let e;
    y_ = async function() {
        var i, a;
        if (e)
            return e;
        const r = !!((i = window.__NUXT__) != null && i.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? uy(x_) : cy(x_)
          , s = G4({
            vueApp: r
        });
        async function o(c) {
            await s.callHook("app:error", c),
            s.payload.error = s.payload.error || Mc(c)
        }
        r.config.errorHandler = o;
        try {
            await Y4(s, z9)
        } catch (c) {
            o(c)
        }
        try {
            await s.hooks.callHook("app:created", r),
            await s.hooks.callHook("app:beforeMount", r),
            r.mount(o8),
            await s.hooks.callHook("app:mounted", r),
            await hn()
        } catch (c) {
            o(c)
        }
        return r.config.errorHandler === o && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = y_().catch(t => {
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {Fc as $, Hn as A, z0 as B, D2 as C, B2 as D, Dh as E, kn as F, Bt as G, It as H, jt as I, re as J, Fo as K, Xe as L, ut as M, Q2 as N, F0 as O, $a as P, Ct as Q, ue as R, jR as S, P6 as T, Vm as U, Hw as V, ry as W, $2 as X, Rc as Y, hn as Z, Q9 as _, Jy as a, zT as a$, dd as a0, N7 as a1, $e as a2, ci as a3, l7 as a4, qe as a5, f7 as a6, Gh as a7, pd as a8, K0 as a9, M0 as aA, L7 as aB, $7 as aC, Vr as aD, p6 as aE, vc as aF, b7 as aG, R7 as aH, E6 as aI, hc as aJ, qs as aK, x7 as aL, y7 as aM, B7 as aN, D7 as aO, D0 as aP, T7 as aQ, k7 as aR, f6 as aS, ya as aT, Vh as aU, lS as aV, hs as aW, BT as aX, a7 as aY, _1 as aZ, $T as a_, Ic as aa, hd as ab, as as ac, $n as ad, W_ as ae, v1 as af, P7 as ag, uS as ah, x6 as ai, wf as aj, Bc as ak, Zh as al, h1 as am, ls as an, FS as ao, H7 as ap, dS as aq, qS as ar, n1 as as, gn as at, Nr as au, zR as av, U7 as aw, MS as ax, ed as ay, P9 as az, Rh as b, V0 as b$, E7 as b0, ce as b1, Tc as b2, fx as b3, kT as b4, DT as b5, _7 as b6, w7 as b7, v7 as b8, A7 as b9, be as bA, Et as bB, F7 as bC, K2 as bD, Bb as bE, c6 as bF, u7 as bG, C7 as bH, w_ as bI, cd as bJ, y1 as bK, TT as bL, $c as bM, v6 as bN, Tt as bO, An as bP, es as bQ, yt as bR, Hr as bS, c7 as bT, xc as bU, ux as bV, I7 as bW, S7 as bX, qh as bY, RT as bZ, u1 as b_, oe as ba, Y6 as bb, Z6 as bc, k1 as bd, Ck as be, hS as bf, Z2 as bg, Va as bh, $3 as bi, z3 as bj, ud as bk, ad as bl, Zs as bm, m3 as bn, d6 as bo, YA as bp, i7 as bq, d7 as br, Rw as bs, V3 as bt, l1 as bu, f1 as bv, AT as bw, T1 as bx, T0 as by, Ne as bz, me as c, WR as c0, r7 as c1, cx as c2, hf as c3, tv as c4, p2 as c5, p7 as c6, g7 as c7, h7 as c8, y0 as c9, m7 as ca, O7 as cb, va as cc, VA as cd, ms as ce, c1 as cf, H3 as cg, ld as ch, S3 as ci, i1 as cj, o3 as ck, ho as cl, fT as cm, T3 as cn, M7 as co, xe as d, kc as e, o7 as f, Ot as g, fs as h, H2 as i, Y0 as j, o4 as k, ds as l, Ze as m, s7 as n, kr as o, J0 as p, cC as q, We as r, X0 as s, pe as t, mn as u, Oe as v, af as w, De as x, _0 as y, Pe as z};
