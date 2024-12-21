import {_ as b} from "./JtEDREM_.js";
import {r as v, c as k, G as se, o as ae, t as n, v as r, x as t, ac as B, J as e, I as l, E as R, U as E, av as U, M as X, N as W, y, O as he, $ as we, S as G, d as xe, u as be, K as A, Q as ye, z as $, L as Ce, _ as ke, l as Se, e as ze, H as Fe, C as Be, D as $e} from "./DgGPlOes.js";
import {r as le, v as Re} from "./3jzJmQQx.js";
import {p as Ne, b as x, c as Me} from "./CVzTXg0q.js";
import {S as Ae} from "./CrLiLm__.js";
import {E as Ue} from "./DvzeIpF7.js";
import "./kNyiwGP3.js";
import "./DP2rzg_V.js";
import "./BRy4wAir.js";
import {S as Le} from "./CDJI4Dk3.js";
import {a as oe} from "./Bcg8lkLs.js";
import {s as j} from "./CBvcH_wZ.js";
import {r as Te} from "./DoWdeW1j.js";
import {u as De} from "./iZ5TkzCQ.js";
import "./DXWI1hfK.js";
import "./BEyFXQ6a.js";
import "./BP9t50G4.js";
import "./A44nslRZ.js";
const He = {
    class: "relative z-20"
}
  , Ie = {
    __name: "coin-animation",
    props: {
        isClaim: {
            type: Boolean,
            default: !1
        }
    },
    setup(c) {
        const f = c
          , a = v(0)
          , s = v(0)
          , u = v(0)
          , _ = v(0)
          , d = k( () => ({
            "--top": a.value + "px",
            "--left": s.value + "px",
            "--top-new": u.value + "px",
            "--left-new": _.value + "px",
            "--top-new-1": a.value - 40 + "px",
            "--left-new-1": s.value + 20 + "px",
            "--top-new-2": a.value + 40 + "px",
            "--left-new-2": s.value + 40 + "px",
            "--top-new-3": a.value + 50 + "px",
            "--left-new-3": s.value - 100 + "px",
            "--top-new-4": a.value + 70 + "px",
            "--left-new-4": s.value - 150 + "px",
            "--top-new-5": a.value - 90 + "px",
            "--left-new-5": s.value - 90 + "px",
            "--top-new-6": a.value - 100 + "px",
            "--left-new-6": s.value - 100 + "px"
        }))
          , o = v(0);
        se( () => f.isClaim, () => {
            f.isClaim && (i(),
            o.value = 1,
            setTimeout( () => {
                o.value = 2
            }
            , 250),
            setTimeout( () => {
                o.value = 0
            }
            , 1e3))
        }
        );
        const i = () => {
            const p = document.getElementById("coin_collect")
              , g = document.getElementById("coin_balance")
              , C = p.getBoundingClientRect();
            a.value = C.top,
            s.value = C.left;
            const h = g.getBoundingClientRect();
            u.value = h.top,
            _.value = h.left
        }
        ;
        return ae( () => {
            i()
        }
        ),
        (p, g) => (n(),
        r("div", He, [t("img", {
            src: b,
            style: B(e(d)),
            class: l(["fixed z-20 top-[var(--top)] left-[var(--left)] size-4 opacity-0", {
                "top-[var(--top-new)] duration-1000 transition-all left-[var(--left-new)] opacity-100 size-4": e(o) === 1
            }, {
                "transition-all duration-1000 top-[var(--top-new)] left-[var(--left-new)] opacity-100 size-8": e(o) === 2
            }])
        }, null, 6), t("img", {
            src: b,
            style: B(e(d)),
            class: l(["fixed z-20 top-[var(--top)] left-[var(--left)] size-4 opacity-0", {
                "top-[var(--top-new-1)] duration-1000 transition-all left-[var(--left-new-1)] opacity-100 size-4": e(o) === 1
            }, {
                "transition-all duration-1000 top-[var(--top-new)] left-[var(--left-new)] opacity-100 size-8": e(o) === 2
            }])
        }, null, 6), t("img", {
            src: b,
            style: B(e(d)),
            class: l(["fixed z-20 top-[var(--top)] left-[var(--left)] size-4 opacity-0", {
                "top-[var(--top-new-2)] duration-1000 transition-all left-[var(--left-new-2)] opacity-100 size-4": e(o) === 1
            }, {
                "transition-all duration-1000 top-[var(--top-new)] left-[var(--left-new)] opacity-100 size-8": e(o) === 2
            }])
        }, null, 6), t("img", {
            src: b,
            style: B(e(d)),
            class: l(["fixed z-20 top-[var(--top)] left-[var(--left)] size-4 opacity-0", {
                "top-[var(--top-new-3)] duration-1000 transition-all left-[var(--left-new-3)] opacity-100 size-4": e(o) === 1
            }, {
                "transition-all duration-1000 top-[var(--top-new)] left-[var(--left-new)] opacity-100 size-8": e(o) === 2
            }])
        }, null, 6), t("img", {
            src: b,
            style: B(e(d)),
            class: l(["fixed z-20 top-[var(--top)] left-[var(--left)] size-4 opacity-0", {
                "top-[var(--top-new-4)] duration-1000 transition-all left-[var(--left-new-4)] opacity-100 size-4": e(o) === 1
            }, {
                "transition-all duration-1000 top-[var(--top-new)] left-[var(--left-new)] opacity-100 size-8": e(o) === 2
            }])
        }, null, 6), t("img", {
            src: b,
            style: B(e(d)),
            class: l(["fixed z-20 top-[var(--top)] left-[var(--left)] size-4 opacity-0", {
                "top-[var(--top-new-5)] duration-1000 transition-all left-[var(--left-new-5)] opacity-100 size-4": e(o) === 1
            }, {
                "transition-all duration-1000 top-[var(--top-new)] left-[var(--left-new)] opacity-100 size-8": e(o) === 2
            }])
        }, null, 6), t("img", {
            src: b,
            style: B(e(d)),
            class: l(["fixed z-20 top-[var(--top)] left-[var(--left)] size-4 opacity-0", {
                "top-[var(--top-new-6)] duration-1000 transition-all left-[var(--left-new-6)] opacity-100 size-4": e(o) === 1
            }, {
                "transition-all duration-1000 top-[var(--top-new)] left-[var(--left-new)] opacity-100 size-8": e(o) === 2
            }])
        }, null, 6)]))
    }
}
  , je = {
    class: "grid grid-cols-9 gap-2"
}
  , Ee = ["onClick"]
  , Ge = ["src"]
  , Ve = {
    __name: "tabs",
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    emits: ["changeTab"],
    setup(c, {emit: f}) {
        const {dataHome: a, isBoost: s, booster: u, boosting: _} = R(E())
          , d = [U.oneYear, U.fourYear]
          , o = f
          , i = c
          , p = v(null)
          , g = v([{
            icon: le,
            id: 0,
            data: _.value ? 150 : 0,
            title: "Active Boost"
        }, {
            icon: Ne,
            id: 1,
            data: i.data.friend_boost,
            title: "Partner Boost"
        }, {
            icon: Re,
            id: 2,
            data: i.data.vip_boost,
            title: "Mining Boost"
        }])
          , C = h => {
            p.value === h ? p.value = null : p.value = h,
            o("changeTab", h)
        }
        ;
        return (h, w) => (n(),
        r("div", je, [(n(!0),
        r(X, null, W(e(g), m => (n(),
        r("button", {
            key: m.id,
            onClick: L => C(m.id),
            class: l(["transition-all duration-100", e(p) === null ? "col-span-3" : e(p) === m.id ? "col-span-7" : "col-span-1"])
        }, [t("div", {
            class: l(["flex gap-1 px-2 py-1 min-h-[1.8125rem] w-full items-center justify-center rounded-[0.5rem] shadow-[0px_2px_10px_0px_rgba(25,27,31,0.2)]", e(s) || d.includes(e(a).tick_level) ? "bg-[rgba(255,255,255,0.1)]" : "bg-white-0"])
        }, [t("img", {
            src: m.icon,
            class: "w-4 h-4"
        }, null, 8, Ge), m.id === 0 && e(p) === null ? (n(),
        r("p", {
            key: 0,
            class: l([" leading-none", e(s) || d.includes(e(a).tick_level) ? "text-white-0" : m.id === 0 ? "text-[#FF4343]" : m.id === 1 ? "text-green-1" : "text-[#00A3FF]"])
        }, y(e(u)) + "%", 3)) : he((n(),
        r("p", {
            key: 1,
            class: l([" leading-none", h.isBoostisBoost || d.includes(e(a).tick_level) ? "text-white-0" : m.id === 0 ? "text-[#FF4343]" : m.id === 1 ? "text-green-1" : "text-[#00A3FF]"])
        }, y(e(p) === null ? m.data + "%" : m.title), 3)), [[we, e(p) === null || e(p) === m.id]])], 2)], 10, Ee))), 128))]))
    }
}
  , Oe = "" + new URL("big_cart.GM15M6l7.webp",import.meta.url).href
  , Pe = "" + new URL("splash.DUHpIbdK.webp",import.meta.url).href
  , Ye = {
    class: l(["flex justify-center"])
}
  , Je = {
    class: "relative"
}
  , Xe = ["src"]
  , We = ["src"]
  , qe = ["src"]
  , Ke = ["src"]
  , Qe = {
    __name: "cart-animate",
    props: {
        maxedOut: {
            type: Boolean,
            default: !1
        },
        mintSpeed: {
            type: Number,
            default: 0
        },
        isFullScreen: {
            type: Boolean,
            default: !1
        }
    },
    setup(c) {
        const {viewPortPC: f} = R(G())
          , a = c
          , s = v(.3)
          , u = v(.1)
          , _ = v(2.2)
          , d = k( () => {
            const i = Math.floor((a.mintSpeed * 10 - s.value * 10) / (u.value * 10) % 4);
            return a.mintSpeed >= _.value ? x.diamondCoin : a.mintSpeed < s.value || i === 0 ? x.copperCoin : i === 1 ? x.silverCoin : i === 2 ? x.goldCoin : x.diamondCoin
        }
        )
          , o = k( () => a.mintSpeed < parseFloat((s.value + u.value * 10 * 4 / 10).toFixed(1)) ? x.usdc : a.mintSpeed < (s.value + u.value * 10 * 4 * 2 / 10).toFixed(1) ? x.binance : a.mintSpeed < (s.value + u.value * 10 * 4 * 3 / 10).toFixed(1) ? x.usdt : a.mintSpeed < (s.value + u.value * 10 * 4 * 4 / 10).toFixed(1) ? x.ether : x.bitcoin);
        return (i, p) => (n(),
        r("div", Ye, [t("div", Je, [t("img", {
            src: e(Pe),
            alt: "",
            class: l(["object-contain max-w-[19rem] absolute inset-0 splash_animate opacity-0 w-full", {
                filter_full_saturate: a.maxedOut
            }])
        }, null, 10, Xe), t("img", {
            src: e(Oe),
            class: l(["object-contain max-h-[19rem] aspect-[14_/_13]", e(f) ? c.isFullScreen ? "h-[11rem]" : "h-[13rem]" : "w-full", {
                filter_full_saturate: a.maxedOut
            }])
        }, null, 10, We)]), t("div", {
            class: l(["object-contain absolute left-[45%]", c.isFullScreen ? "fs-drop_coin" : "drop_coin", e(f) ? "w-[2.625rem] top-4" : "w-[4rem] top-[3rem]", {
                filter_full_saturate: a.maxedOut
            }])
        }, [t("img", {
            src: e(d),
            alt: "w-full h-full"
        }, null, 8, qe), t("img", {
            src: e(o),
            class: "absolute top-[50%] left-[50%] -translate-x-[45%] -translate-y-[63%] z-[1] h-[45%]",
            alt: ""
        }, null, 8, Ke)], 2)]))
    }
}
  , Ze = "" + new URL("gu-ai.CGWe7YuJ.png",import.meta.url).href
  , et = "" + new URL("game-hub.D8ztyzv1.png",import.meta.url).href
  , tt = "" + new URL("statistic.BdXPOljD.png",import.meta.url).href
  , st = "" + new URL("support.DvQE8rbv.png",import.meta.url).href
  , at = "" + new URL("add-to-home.21WNzaEP.png",import.meta.url).href
  , T = {
    guAi: Ze,
    gameHub: et,
    statistic: tt,
    support: st,
    addToHome: at
}
  , lt = ["onClick"]
  , ot = ["src"]
  , nt = ["src"]
  , it = xe({
    __name: "menu",
    props: {
        customClass: {
            default: ""
        }
    },
    setup(c) {
        const {hasNews: f} = R(Ae())
          , {showShortcut: a} = R(G())
          , s = be()
          , u = c
          , _ = k( () => {
            let i = [{
                id: 0,
                icon: T.guAi,
                link: "/assistant",
                name: "GuAI",
                isModal: !1,
                hasNews: !1,
                comingSoon: !1
            }, {
                id: 1,
                icon: T.gameHub,
                link: "/game-hub",
                name: "Game Hub",
                isModal: !0,
                hasNews: !1,
                comingSoon: !1
            }, {
                id: 2,
                icon: T.statistic,
                link: "/statistic",
                name: "Statistic",
                isModal: !1,
                hasNews: !1,
                comingSoon: !1
            }, {
                id: 3,
                icon: T.support,
                link: "/support",
                name: "Support",
                isModal: !0,
                hasNews: f.value,
                comingSoon: !1
            }];
            return a.value && (i = [...i, {
                id: 4,
                icon: T.addToHome,
                link: "/",
                name: "Add to Home",
                isModal: !0,
                hasNews: !1,
                comingSoon: !1
            }]),
            i
        }
        )
          , d = i => {
            if (i.comingSoon)
                return ye({
                    message: "Coming Soon",
                    type: "info",
                    grouping: !0
                });
            if (i.id === 4) {
                o();
                return
            }
            s.push(i.link)
        }
          , o = async () => {
            var i;
            try {
                ((i = window.Telegram) == null ? void 0 : i.WebApp).addToHomeScreen()
            } catch (p) {
                console.log(p)
            }
        }
        ;
        return (i, p) => (n(),
        r("div", {
            class: l(["w-full flex justify-between p-2 pb-4", u.customClass])
        }, [(n(!0),
        r(X, null, W(e(_), g => (n(),
        r("button", {
            key: g.id,
            onClick: C => d(g),
            class: "relative"
        }, [t("img", {
            src: g.icon,
            class: "size-[2.75rem]"
        }, null, 8, ot), g.hasNews ? (n(),
        r("img", {
            key: 0,
            src: e(Me).dotNoti,
            class: "size-[0.625rem] absolute top-0 right-0 z-[1]"
        }, null, 8, nt)) : A("", !0)], 8, lt))), 128))], 2))
    }
})
  , rt = {
    class: "flex text-[1rem] font-semibold text-white-0"
}
  , ne = {
    __name: "count-down",
    props: {
        start: {
            type: Number,
            default: 0
        }
    },
    setup(c) {
        const f = c
          , a = v(0)
          , s = v(0)
          , u = v(0);
        return se( () => f.start, () => {
            a.value = Math.floor(f.start / 3600).toString().padStart(2, "0"),
            s.value = Math.floor((f.start - a.value * 3600) / 60).toString().padStart(2, "0"),
            u.value = Math.floor(f.start - a.value * 3600 - s.value * 60).toString().padStart(2, "0")
        }
        , {
            immediate: !0
        }),
        (_, d) => (n(),
        r("div", rt, [t("p", null, y(e(a)) + ":" + y(e(s)) + ":" + y(e(u)), 1)]))
    }
}
  , ct = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%2012C3%2010.067%204.567%208.5%206.5%208.5C7.7035%208.5%208.51959%208.9338%209.19914%209.61336C9.9255%2010.3397%2010.4851%2011.3322%2011.1258%2012.4856L11.1595%2012.5462C11.7605%2013.6283%2012.4431%2014.8573%2013.3866%2015.8009C14.3946%2016.8088%2015.7035%2017.5%2017.5%2017.5C20.5376%2017.5%2023%2015.0376%2023%2012C23%208.96243%2020.5376%206.5%2017.5%206.5C15.8394%206.5%2014.3508%207.2359%2013.3423%208.39937C13.7887%209.05406%2014.1574%209.70577%2014.464%2010.2574C15.0681%209.20718%2016.2014%208.5%2017.5%208.5C19.433%208.5%2021%2010.067%2021%2012C21%2013.933%2019.433%2015.5%2017.5%2015.5C16.2965%2015.5%2015.4804%2015.0662%2014.8009%2014.3866C14.0745%2013.6603%2013.5149%2012.6678%2012.8742%2011.5144L12.8405%2011.4538C12.2395%2010.3717%2011.5569%209.14265%2010.6134%208.19914C9.60541%207.1912%208.2965%206.5%206.5%206.5C3.46243%206.5%201%208.96243%201%2012C1%2015.0376%203.46243%2017.5%206.5%2017.5C8.16056%2017.5%209.64923%2016.7641%2010.6577%2015.6006C10.2113%2014.9459%209.84262%2014.2942%209.53605%2013.7426C8.93194%2014.7928%207.79856%2015.5%206.5%2015.5C4.567%2015.5%203%2013.933%203%2012Z'%20fill='white'/%3e%3c/svg%3e"
  , ut = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='16'%20height='16'%20rx='8'%20fill='url(%23paint0_linear_2076_6626)'/%3e%3ccircle%20cx='8'%20cy='8'%20r='7'%20fill='url(%23paint1_linear_2076_6626)'/%3e%3cpath%20d='M8.37515%207.24893H11.0001L7.62517%2012.1238V8.74889H5.00024L8.37515%203.87402V7.24893Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2076_6626'%20x1='0.0627452'%20y1='7.72413'%20x2='16'%20y2='7.72413'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF5C00'/%3e%3cstop%20offset='1'%20stop-color='%23FAB400'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_2076_6626'%20x1='1.0549'%20y1='7.75862'%20x2='15'%20y2='7.75862'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FAB400'/%3e%3cstop%20offset='1'%20stop-color='%23FF5C00'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
  , dt = {
    key: 0,
    class: "w-full p-2 flex justify-between items-center border bg-[linear-gradient(180deg,#0054A1_0%,#66E0D9_100%)] shadow-[0px_2px_10px_0px_rgba(25,27,31,0.20)] rounded-lg border-solid border-[#66E0D9]"
}
  , pt = {
    class: "flex gap-2 items-center"
}
  , mt = t("img", {
    src: Le,
    class: "size-8"
}, null, -1)
  , ft = {
    class: "w-full flex justify-between"
}
  , _t = {
    class: "flex gap-1 items-center"
}
  , vt = t("img", {
    src: b,
    class: "size-4"
}, null, -1)
  , gt = {
    class: l(["text-[0.875rem] font-medium text-white-0 leading-none"])
}
  , ht = t("img", {
    src: ct,
    class: "size-6"
}, null, -1)
  , wt = t("div", {
    class: "absolute inset-0 backdrop-blur-[20px] z-[-1]"
}, null, -1)
  , xt = {
    class: "flex gap-2 items-center"
}
  , bt = {
    class: "flex flex-col gap-1 w-full items-center"
}
  , yt = {
    class: "w-full flex justify-between"
}
  , Ct = {
    class: "flex gap-1 items-center"
}
  , kt = t("img", {
    src: ut,
    class: "size-4"
}, null, -1)
  , St = {
    class: "flex gap-1"
}
  , zt = t("img", {
    src: b,
    id: "coin_collect",
    class: "size-4"
}, null, -1)
  , Ft = {
    class: "slide_claim rounded-[0.75rem] overflow-hidden w-full relative"
}
  , Bt = {
    class: "absolute inset-0 z-[1] flex items-center justify-center"
}
  , $t = {
    class: l(["transition-all"])
}
  , Rt = ["disabled"]
  , Nt = t("p", {
    class: "text-[1rem] font-semibold leading-[100%]"
}, "Collect", -1)
  , Mt = [Nt]
  , At = {
    __name: "block-collect",
    props: {
        valueClaim: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        timeClaim: {
            type: Number,
            default: 0
        },
        mintSpeed: {
            type: Number,
            default: 0
        },
        isRankActive: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["submit"],
    setup(c, {emit: f}) {
        const {isBoost: a, autoBoost: s, autoClaim: u, timeRemaining: _, boosting: d} = R(E())
          , o = c
          , i = f
          , p = k( () => oe(o.valueClaim))
          , g = k( () => (o.timeClaim - _.value) / o.timeClaim * 100)
          , C = () => {
            i("submit")
        }
        ;
        return (h, w) => {
            const m = ne
              , L = Ue;
            return n(),
            r("div", null, [e(u) ? (n(),
            r("div", dt, [t("div", pt, [mt, t("div", ft, [t("div", _t, [vt, t("p", gt, "+" + y(c.mintSpeed.toFixed(2)) + "/s", 1)])])]), ht])) : (n(),
            r("div", {
                key: 1,
                class: l([[e(a) || e(s) || c.isRankActive ? "bg-[rgba(0,0,0,0.40)] relative" : "bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.00)_100%)]"], "w-full p-2 flex flex-col gap-2 shadow-[0px_2px_10px_0px_rgba(25,27,31,0.20)] rounded-lg overflow-hidden"])
            }, [wt, t("div", xt, [t("div", bt, [t("div", yt, [t("div", Ct, [kt, t("p", {
                class: l(["text-[0.75rem] font-medium", e(a) || e(s) || c.isRankActive ? "text-[#FFF]" : "text-[#2A3037]"])
            }, "+" + y(c.mintSpeed.toFixed(2)) + "/s", 3)]), t("div", St, [t("p", {
                class: l([["text-[0.75rem] font-medium", e(a) || e(s) || c.isRankActive ? "text-[#FFF]" : "text-[#2A3037]"]])
            }, y(e(p)), 3), zt])]), t("div", Ft, [t("div", Bt, [$(m, {
                start: e(_),
                class: "!text-[0.75rem]"
            }, null, 8, ["start"])]), $(L, {
                modelValue: e(g),
                "onUpdate:modelValue": w[0] || (w[0] = S => Ce(g) ? g.value = S : null),
                class: l({
                    is_boost: e(d)
                })
            }, null, 8, ["modelValue", "class"])])])]), t("div", $t, [t("button", {
                onClick: w[1] || (w[1] = S => C()),
                disabled: c.disabled,
                class: l([[{
                    "animate_full_claim bg-[linear-gradient(90deg,#B68AFF_0%,#3D00A1_100.31%),linear-gradient(180deg,#5CD9C1_0%,#317366_100%)]": e(_) === 0
                }, {
                    "opacity-20": c.disabled
                }], "text-[0.875rem] flex justify-center items-center text-white-0 px-4 py-3 border bg-[linear-gradient(180deg,#5CD9C1_0%,#317366_100%)] rounded-lg border-solid border-[#317366] w-full"])
            }, Mt, 10, Rt)])], 2))])
        }
    }
}
  , Ut = "" + new URL("bg-auto-boost.C0wXYqNo.webp",import.meta.url).href
  , Lt = "" + new URL("mega_rank.cFgNzykm.gif",import.meta.url).href
  , Tt = "" + new URL("ultimate_rank.BJkXBz5L.gif",import.meta.url).href
  , Dt = "" + new URL("mega_rank_bg.BJzTXkYS.png",import.meta.url).href
  , Ht = "" + new URL("ultimate_rank_bg.CYgjkdSa.png",import.meta.url).href
  , q = c => (Be("data-v-acbd75ff"),
c = c(),
$e(),
c)
  , It = {
    class: "absolute z-[10]"
}
  , jt = q( () => t("img", {
    src: Ut,
    class: "object-cover"
}, null, -1))
  , Et = [jt]
  , Gt = {
    key: 2,
    class: l(["absolute inset-0 flex rotate-[48deg] h-[200dvh] -translate-x-[50%] -translate-y-[50%]"])
}
  , Vt = ["src"]
  , Ot = {
    key: 4,
    class: "vd-bg-rank absolute inset-0"
}
  , Pt = {
    key: 0,
    src: Lt,
    class: "w-full h-full"
}
  , Yt = {
    key: 1,
    src: Tt,
    class: "w-full h-full"
}
  , Jt = {
    class: "w-full flex flex-col gap-4 px-4 py-2 relative z-[3]"
}
  , Xt = {
    class: "flex flex-col gap-2 items-center"
}
  , Wt = {
    class: "flex gap-2 items-center"
}
  , qt = q( () => t("img", {
    id: "coin_balance",
    src: b,
    class: "w-8 h-8"
}, null, -1))
  , Kt = {
    class: "relative justify-center items-center z-[2] h-fit"
}
  , Qt = {
    class: "relative z-[2] px-2 flex flex-col gap-2"
}
  , Zt = ["disabled"]
  , es = {
    class: "flex gap-2 items-center justify-start"
}
  , ts = q( () => t("img", {
    src: le,
    class: "size-4 icon_white"
}, null, -1))
  , ss = {
    key: 0,
    class: "text-[#FFF] text-[1rem] font-semibold whitespace-nowrap"
}
  , as = {
    class: "relative"
}
  , ls = {
    __name: "home",
    setup(c) {
        const f = Se().public
          , a = De()
          , {dataHome: s, isBoost: u, mintSpeed: _, balance: d, maxEarnDuration: o, booster: i, boosting: p, isFirtRouterHome: g, boostNext: C, boostEnd: h, timeNow: w, boostingTime: m, valueClaim: L, autoBoost: S, timeRemaining: N, enablePopups: ie, startGame: re} = R(E())
          , M = E()
          , D = v(null)
          , V = v(!1)
          , O = v(!1)
          , {isFullScreen: K} = R(G())
          , z = [U.oneYear, U.fourYear]
          , ce = async () => {
            await M.postBoost()
        }
          , ue = async () => {
            V.value = !0,
            await M.claim(),
            Z(),
            ee(),
            O.value = !0,
            setTimeout(async () => {
                V.value = !1,
                O.value = !1,
                H.value = j( () => {
                    te()
                }
                , 1e3),
                D.value = j( () => {
                    Q()
                }
                , 3e3),
                await M.getDataHome()
            }
            , 1e3)
        }
          , P = k( () => m.value <= 0 ? "Boost" : p.value ? h.value - w.value : C.value - w.value)
          , de = k( () => oe(d.value))
          , H = v(null)
          , F = v(0)
          , Q = () => {
            switch (L.value += F.value * 3,
            !0) {
            case d.value >= 15e4:
                s.value.tier_current = "GUM Tycoon";
                break;
            case d.value >= 8e4:
                s.value.tier_current = "Shopkeeper";
                break;
            case d.value >= 4e4:
                s.value.tier_current = "Merchant";
                break;
            case d.value >= 2e4:
                s.value.tier_current = "Trader";
                break;
            default:
                s.value.tier_current = "Novice";
                break
            }
        }
          , Z = () => {
            clearInterval(D.value),
            D.value = null
        }
          , ee = () => {
            clearInterval(H.value),
            H.value = null
        }
          , te = () => {
            w.value++,
            m.value > 0 ? m.value-- : m.value = 0,
            N.value > 0 ? (N.value--,
            F.value = _.value) : (N.value = 0,
            F.value = _.value * (Number(f.earn_rate_reduced) / 100)),
            w.value > h.value && (p.value = !1,
            u.value = !1,
            _.value = s.value.mint_speed,
            i.value = 0)
        }
        ;
        return ae(async () => {
            var Y;
            ie.value[0] === 0 && await M.getPopup(),
            await G().getDataShop(),
            await a.getDataCommission(),
            w.value = Math.floor(Date.now() / 1e3),
            N.value <= 0 ? F.value = _.value * (Number(f.earn_rate_reduced) / 100) : F.value = _.value,
            document.addEventListener("visibilitychange", async () => {
                document.hidden || await M.getDataHome()
            }
            ),
            D.value = j( () => {
                Q()
            }
            , 3e3),
            H.value = j( () => {
                te()
            }
            , 1e3),
            g.value && await M.getDataHome(),
            g.value = !0,
            (Y = re.value) != null && Y.includes("game_") && Te("/game-hub")
        }
        ),
        ze( () => {
            Z(),
            ee()
        }
        ),
        (Y, I) => {
            const pe = Ie
              , me = Ve
              , fe = Qe
              , _e = it
              , ve = ne
              , ge = At;
            return n(),
            r("section", {
                class: l(["pt-[3rem] pb-[6rem] overflow-hidden h-[100dvh] relative flex flex-col justify-between animate_show_page", "transition-all duration-300", e(u) ? "bg_home_buying_boost" : "bg_home_buying", {
                    "!pt-[calc(3rem_+_var(--space-above))] !pb-[calc(6rem_+_var(--fc-bt-height))]": e(K)
                }])
            }, [t("div", It, [$(pe, {
                "is-claim": e(O)
            }, null, 8, ["is-claim"])]), !e(S) && !z.includes(e(s).tick_level) ? (n(),
            r("div", {
                key: 0,
                class: l(["absolute top-0 left-0 w-full h-[60%] z-[1]", "transition-all duration-300", e(u) ? "bg_top_boost" : "bg_top"])
            }, null, 2)) : A("", !0), e(S) && !z.includes(e(s).tick_level) ? (n(),
            r("div", {
                key: 1,
                class: l(["w-full h-full absolute inset-0", {
                    filter_full_saturate: e(N) <= 0
                }])
            }, Et, 2)) : z.includes(e(s).tick_level) ? A("", !0) : (n(),
            r("div", Gt, [(n(),
            r(X, null, W(30, J => t("div", {
                key: J,
                class: "w-full h-full flex"
            }, [t("div", {
                class: l(["transition-all duration-300 bg_line_normal opacity-100", {
                    "!opacity-0": e(u)
                }])
            }, null, 2), t("div", {
                class: l(["transition-all duration-300 bg_line_boost opacity-0", {
                    "!opacity-100": e(u)
                }])
            }, null, 2)])), 64))])), z.includes(e(s).tick_level) ? (n(),
            r("img", {
                key: 3,
                src: e(s).tick_level === e(U).oneYear ? e(Dt) : e(Ht),
                class: "fixed top-0 left-0 w-[100vw] h-[100vh]",
                alt: ""
            }, null, 8, Vt)) : A("", !0), z.includes(e(s).tick_level) ? (n(),
            r("div", Ot, [e(s).tick_level === e(U).oneYear ? (n(),
            r("img", Pt)) : (n(),
            r("img", Yt))])) : A("", !0), t("div", Jt, [$(me, {
                data: e(s)
            }, null, 8, ["data"]), t("div", Xt, [t("div", Wt, [qt, t("p", {
                class: l(["text-[2rem] font-bold", e(u) || e(S) || z.includes(e(s).tick_level) ? "text-[#FFF]" : "text-[#2A3037]"])
            }, y(e(de)), 3)])])]), t("div", Kt, [$(fe, {
                class: "h-full",
                "maxed-out": e(N) <= 0,
                "mint-speed": e(F),
                "is-full-screen": e(K)
            }, null, 8, ["maxed-out", "mint-speed", "is-full-screen"])]), t("div", Qt, [$(_e, {
                "custom-class": "absolute top-0 -translate-y-full left-0 z-[1]"
            }), e(S) ? A("", !0) : (n(),
            r("button", {
                key: 0,
                disabled: e(m) > 0,
                class: "px-4 py-1 w-fit shadow-[0px_2px_10px_0px_rgba(25,27,31,0.7)] rounded-[2rem] border-solid border-[#FF5C00] border bg-[linear-gradient(90deg,#FAB400_0.39%,#FF5C00_100%)]",
                onClick: I[0] || (I[0] = J => ce())
            }, [t("div", es, [ts, e(P) === "Boost" ? (n(),
            r("p", ss, y(e(P)), 1)) : (n(),
            Fe(ve, {
                key: 1,
                start: e(P),
                class: "min-w-[4.5rem] justify-start"
            }, null, 8, ["start"]))])], 8, Zt)), t("div", as, [$(ge, {
                "value-claim": e(L),
                "is-rank-active": z.includes(e(s).tick_level),
                "mint-speed": e(F),
                "time-claim": e(o),
                disabled: e(V),
                onSubmit: I[1] || (I[1] = J => ue())
            }, null, 8, ["value-claim", "is-rank-active", "mint-speed", "time-claim", "disabled"])])])], 2)
        }
    }
}
  , Cs = ke(ls, [["__scopeId", "data-v-acbd75ff"]]);
export {Cs as default};
