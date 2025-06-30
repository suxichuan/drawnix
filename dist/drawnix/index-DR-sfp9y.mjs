import { jsx as a, jsxs as k, Fragment as Ce } from "react/jsx-runtime";
import { useBoard as $, useListRender as Xo, Wrapper as ci, Board as ui } from "@plait-board/react-board";
import { getSelectedElements as be, getHitElementByPoint as Jo, toViewBoxPoint as dr, toHostPoint as fr, toImage as Qo, IS_APPLE as di, IS_MAC as ea, BoardTransforms as de, ThemeColorMode as Me, DEFAULT_COLOR as Mt, PlaitBoard as N, PlaitPointerType as ke, ATTACHED_ELEMENT_CLASS_NAME as Oe, toFixed as ta, isNullOrUndefined as Er, MERGING as tn, PlaitHistoryBoard as ra, Transforms as me, isSelectionMoving as na, getRectangleByElements as ia, RectangleClient as Ve, toScreenPointFromHostPoint as rn, toHostPointFromViewBoxPoint as nn, isMovingElements as hr, isDragging as on, duplicateElements as oa, deleteFragment as aa, rotateAntiPointsByElement as sa, isPointInPolygon as la, idCreator as ca, setStrokeLinecap as ua, ACTIVE_STROKE_WIDTH as da, distanceBetweenPointAndPoint as fi, addOrCreateClipboardContext as fa, WritableClipboardType as ha, isPencilEvent as an, IS_IOS as ga, getViewportOrigination as hi, PlaitGroupElement as ma, WritableClipboardOperationType as gi, throttleRAF as pa } from "@plait/core";
import * as I from "react";
import Ne, { forwardRef as mi, useState as _, useRef as se, useEffect as Y, createContext as pi, useContext as Sr, useCallback as sn, Component as va, useDeferredValue as vi } from "react";
import { getElementOfFocusedImage as wa, setCreationMode as rt, BoardCreationMode as nt, PropertyTransforms as ut, StrokeStyle as Wt, getFirstTextEditor as ya, Generator as Ca, CommonElementFlavour as ba, createActiveGenerator as ka, hasResizeHandle as Oa, isDrawingMode as La, buildClipboardData as Ea, insertClipboardData as Sa, withGroup as wi, isResizing as Pa } from "@plait/common";
import { DrawTransforms as xa, BasicShapes as ce, FlowchartSymbols as yi, ArrowLineShape as et, PlaitDrawElement as q, isClosedDrawElement as Ci, isClosedCustomGeometry as Pr, getFillByElement as Ma, getStrokeColorByElement as bi, getMemorizeKey as dt, isDrawElementsIncludeText as Da, isRectangleHitRotatedPoints as Ta, isClosedPoints as _a, isHitPolyLine as ln, DefaultDrawStyle as Na, getStrokeWidthByElement as Fa, getHitDrawElement as Ra, WithDrawPluginKey as Aa, withDraw as ki } from "@plait/draw";
import { WithMindPluginKey as Ia, MindElement as pe, MindTransforms as cn, MindPointerType as Ba, getFillByElement as ja, getStrokeColorByElement as Oi, withMind as Li, MindThemeColors as Ei } from "@plait/mind";
import za from "mobile-detect";
import Ha from "react-dom";
import M from "classnames";
import { useMergeRefs as Dt, FloatingPortal as Si, FloatingFocusManager as Pi, useFloating as Tt, offset as xr, flip as Mr, shift as Wa, autoUpdate as Ua, useClick as xi, useDismiss as Mi, useRole as Di, useInteractions as Ti, FloatingOverlay as qa, useId as _i } from "@floating-ui/react";
import { getTextMarksByElement as Dr, TextTransforms as gr, LinkEditor as qe } from "@plait/text-plugins";
import { throttle as $a } from "lodash";
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ru(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ue = {}, un;
function Va() {
  if (un) return Ue;
  un = 1;
  var e = Ha;
  if (process.env.NODE_ENV === "production")
    Ue.createRoot = e.createRoot, Ue.hydrateRoot = e.hydrateRoot;
  else {
    var t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Ue.createRoot = function(r, n) {
      t.usingClientEntryPoint = !0;
      try {
        return e.createRoot(r, n);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    }, Ue.hydrateRoot = function(r, n, i) {
      t.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(r, n, i);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    };
  }
  return Ue;
}
var Ni = Va();
const dn = (e) => /* @__PURE__ */ a(
  "span",
  {
    className: "mind-node-emoji",
    style: { fontSize: `${e.fontSize}px` },
    children: e.emojiItem.name
  }
), Ga = (e) => {
  const t = e;
  return e.setPluginOptions(
    Ia,
    {
      emojiPadding: 0,
      spaceBetweenEmojis: 4
    }
  ), t.renderEmoji = (r, n) => {
    const i = document.createElement("span");
    r.appendChild(i);
    const o = Ni.createRoot(i);
    o.render(/* @__PURE__ */ a(dn, { ...n }));
    let l = { ...n };
    return {
      destroy: () => {
        setTimeout(() => {
          o.unmount();
        }, 0);
      },
      update: (c) => {
        l = { ...l, ...c }, o.render(/* @__PURE__ */ a(dn, { ...l }));
      }
    };
  }, t;
}, fn = (e) => /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("img", { src: e.imageItem.url, draggable: "false", width: "100%" }) });
var it = /* @__PURE__ */ ((e) => (e.COPY = "copy", e.PASTE = "paste", e.CUT = "cut", e.KEYDOWN = "keydown", e.KEYUP = "keyup", e.MOUSE_MOVE = "mousemove", e.RESIZE = "resize", e.UNLOAD = "unload", e.FOCUS = "focus", e.BLUR = "blur", e.DRAG_OVER = "dragover", e.DROP = "drop", e.GESTURE_END = "gestureend", e.BEFORE_UNLOAD = "beforeunload", e.GESTURE_START = "gesturestart", e.GESTURE_CHANGE = "gesturechange", e.POINTER_MOVE = "pointermove", e.POINTER_DOWN = "pointerdown", e.POINTER_UP = "pointerup", e.STATE_CHANGE = "statechange", e.WHEEL = "wheel", e.TOUCH_START = "touchstart", e.TOUCH_END = "touchend", e.HASHCHANGE = "hashchange", e.VISIBILITY_CHANGE = "visibilitychange", e.SCROLL = "scroll", e.MENU_ITEM_SELECT = "menu.itemSelect", e.MESSAGE = "message", e.FULLSCREENCHANGE = "fullscreenchange", e))(it || {});
const Tr = {
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  bmp: "image/bmp",
  ico: "image/x-icon",
  avif: "image/avif",
  jfif: "image/jfif"
}, _r = {
  json: "application/json",
  drawnix: "application/vnd.drawnix+json",
  // image
  ...Tr
}, Za = {
  drawnix: 1
}, Nr = (() => {
  if (typeof self > "u") return !1;
  if ("top" in self && self !== top) try {
    top.window.document._ = 0;
  } catch {
    return !1;
  }
  return "showOpenFilePicker" in self;
})(), Ka = Nr ? Promise.resolve().then(function() {
  return ts;
}) : Promise.resolve().then(function() {
  return ss;
});
async function Ya(...e) {
  return (await Ka).default(...e);
}
Nr ? Promise.resolve().then(function() {
  return ns;
}) : Promise.resolve().then(function() {
  return cs;
});
const Xa = Nr ? Promise.resolve().then(function() {
  return os;
}) : Promise.resolve().then(function() {
  return ds;
});
async function Ja(...e) {
  return (await Xa).default(...e);
}
const Qa = async (e) => {
  const t = await e.getFile();
  return t.handle = e, t;
};
var es = async (e = [{}]) => {
  Array.isArray(e) || (e = [e]);
  const t = [];
  e.forEach((i, o) => {
    t[o] = { description: i.description || "Files", accept: {} }, i.mimeTypes ? i.mimeTypes.map((l) => {
      t[o].accept[l] = i.extensions || [];
    }) : t[o].accept["*/*"] = i.extensions || [];
  });
  const r = await window.showOpenFilePicker({ id: e[0].id, startIn: e[0].startIn, types: t, multiple: e[0].multiple || !1, excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1 }), n = await Promise.all(r.map(Qa));
  return e[0].multiple ? n : n[0];
}, ts = { __proto__: null, default: es };
function bt(e) {
  function t(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var n = r.done;
    return Promise.resolve(r.value).then(function(i) {
      return { value: i, done: n };
    });
  }
  return bt = function(r) {
    this.s = r, this.n = r.next;
  }, bt.prototype = { s: null, n: null, next: function() {
    return t(this.n.apply(this.s, arguments));
  }, return: function(r) {
    var n = this.s.return;
    return n === void 0 ? Promise.resolve({ value: r, done: !0 }) : t(n.apply(this.s, arguments));
  }, throw: function(r) {
    var n = this.s.return;
    return n === void 0 ? Promise.reject(r) : t(n.apply(this.s, arguments));
  } }, new bt(e);
}
const Fi = async (e, t, r = e.name, n) => {
  const i = [], o = [];
  var l, s = !1, c = !1;
  try {
    for (var u, f = function(h) {
      var d, m, g, p = 2;
      for (typeof Symbol < "u" && (m = Symbol.asyncIterator, g = Symbol.iterator); p--; ) {
        if (m && (d = h[m]) != null) return d.call(h);
        if (g && (d = h[g]) != null) return new bt(d.call(h));
        m = "@@asyncIterator", g = "@@iterator";
      }
      throw new TypeError("Object is not async iterable");
    }(e.values()); s = !(u = await f.next()).done; s = !1) {
      const h = u.value, d = `${r}/${h.name}`;
      h.kind === "file" ? o.push(h.getFile().then((m) => (m.directoryHandle = e, m.handle = h, Object.defineProperty(m, "webkitRelativePath", { configurable: !0, enumerable: !0, get: () => d })))) : h.kind !== "directory" || !t || n && n(h) || i.push(Fi(h, t, d, n));
    }
  } catch (h) {
    c = !0, l = h;
  } finally {
    try {
      s && f.return != null && await f.return();
    } finally {
      if (c) throw l;
    }
  }
  return [...(await Promise.all(i)).flat(), ...await Promise.all(o)];
};
var rs = async (e = {}) => {
  e.recursive = e.recursive || !1, e.mode = e.mode || "read";
  const t = await window.showDirectoryPicker({ id: e.id, startIn: e.startIn, mode: e.mode });
  return (await (await t.values()).next()).done ? [t] : Fi(t, e.recursive, void 0, e.skipDirectory);
}, ns = { __proto__: null, default: rs }, is = async (e, t = [{}], r = null, n = !1, i = null) => {
  Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
  const o = [];
  let l = null;
  if (e instanceof Blob && e.type ? l = e.type : e.headers && e.headers.get("content-type") && (l = e.headers.get("content-type")), t.forEach((u, f) => {
    o[f] = { description: u.description || "Files", accept: {} }, u.mimeTypes ? (f === 0 && l && u.mimeTypes.push(l), u.mimeTypes.map((h) => {
      o[f].accept[h] = u.extensions || [];
    })) : l ? o[f].accept[l] = u.extensions || [] : o[f].accept["*/*"] = u.extensions || [];
  }), r) try {
    await r.getFile();
  } catch (u) {
    if (r = null, n) throw u;
  }
  const s = r || await window.showSaveFilePicker({ suggestedName: t[0].fileName, id: t[0].id, startIn: t[0].startIn, types: o, excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1 });
  !r && i && i(s);
  const c = await s.createWritable();
  return "stream" in e ? (await e.stream().pipeTo(c), s) : "body" in e ? (await e.body.pipeTo(c), s) : (await c.write(await e), await c.close(), s);
}, os = { __proto__: null, default: is }, as = async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((t, r) => {
  const n = document.createElement("input");
  n.type = "file";
  const i = [...e.map((c) => c.mimeTypes || []), ...e.map((c) => c.extensions || [])].join();
  n.multiple = e[0].multiple || !1, n.accept = i || "", n.style.display = "none", document.body.append(n);
  const o = (c) => {
    typeof l == "function" && l(), t(c);
  }, l = e[0].legacySetup && e[0].legacySetup(o, () => l(r), n), s = () => {
    window.removeEventListener("focus", s), n.remove();
  };
  n.addEventListener("click", () => {
    window.addEventListener("focus", s);
  }), n.addEventListener("change", () => {
    window.removeEventListener("focus", s), n.remove(), o(n.multiple ? Array.from(n.files) : n.files[0]);
  }), "showPicker" in HTMLInputElement.prototype ? n.showPicker() : n.click();
})), ss = { __proto__: null, default: as }, ls = async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, r) => {
  const n = document.createElement("input");
  n.type = "file", n.webkitdirectory = !0;
  const i = (l) => {
    typeof o == "function" && o(), t(l);
  }, o = e[0].legacySetup && e[0].legacySetup(i, () => o(r), n);
  n.addEventListener("change", () => {
    let l = Array.from(n.files);
    e[0].recursive ? e[0].recursive && e[0].skipDirectory && (l = l.filter((s) => s.webkitRelativePath.split("/").every((c) => !e[0].skipDirectory({ name: c, kind: "directory" })))) : l = l.filter((s) => s.webkitRelativePath.split("/").length === 2), i(l);
  }), "showPicker" in HTMLInputElement.prototype ? n.showPicker() : n.click();
})), cs = { __proto__: null, default: ls }, us = async (e, t = {}) => {
  Array.isArray(t) && (t = t[0]);
  const r = document.createElement("a");
  let n = e;
  "body" in e && (n = await async function(l, s) {
    const c = l.getReader(), u = new ReadableStream({ start: (d) => async function m() {
      return c.read().then(({ done: g, value: p }) => {
        if (!g) return d.enqueue(p), m();
        d.close();
      });
    }() }), f = new Response(u), h = await f.blob();
    return c.releaseLock(), new Blob([h], { type: s });
  }(e.body, e.headers.get("content-type"))), r.download = t.fileName || "Untitled", r.href = URL.createObjectURL(await n);
  const i = () => {
    typeof o == "function" && o();
  }, o = t.legacySetup && t.legacySetup(i, () => o(), r);
  return r.addEventListener("click", () => {
    setTimeout(() => URL.revokeObjectURL(r.href), 3e4), i();
  }), r.click(), null;
}, ds = { __proto__: null, default: us };
const Ri = (e) => {
  var n, i;
  const t = (n = e.extensions) == null ? void 0 : n.reduce((o, l) => (o.push(_r[l]), o), []), r = (i = e.extensions) == null ? void 0 : i.reduce((o, l) => l === "jpg" ? o.concat(".jpg", ".jpeg") : o.concat(`.${l}`), []);
  return Ya({
    description: e.description,
    extensions: r,
    mimeTypes: t,
    multiple: e.multiple ?? !1
  });
}, fs = (e, t) => Ja(
  e,
  {
    fileName: `${t.name}.${t.extension}`,
    description: t.description,
    extensions: [`.${t.extension}`]
  },
  t.fileHandle
);
var Fr = /* @__PURE__ */ ((e) => (e.drawnix = "drawnix", e))(Fr || {});
const hs = () => (/* @__PURE__ */ new Date()).getTime().toString(), Ai = async (e, t = hs()) => {
  const r = ps(e), n = new Blob([r], {
    type: _r.drawnix
  });
  return { fileHandle: await fs(n, {
    name: t,
    extension: "drawnix",
    description: "Drawnix file"
  }) };
}, gs = async (e) => {
  const t = await Ri({
    description: "Drawnix files"
    // ToDo: Be over-permissive until https://bugs.webkit.org/show_bug.cgi?id=34442
    // gets resolved. Else, iOS users cannot open `.drawnix` files.
    // extensions: ["json", "drawnix", "png", "svg"],
  });
  return vs(e, await Cs(t));
}, ms = (e) => e && e.type === Fr.drawnix && Array.isArray(e.elements) && typeof e.viewport == "object", ps = (e) => {
  const t = {
    type: Fr.drawnix,
    version: Za.drawnix,
    source: "web",
    elements: e.children,
    viewport: e.viewport
  };
  return JSON.stringify(t, null, 2);
}, vs = async (e, t) => {
  const r = await bs(t);
  let n;
  try {
    if (n = JSON.parse(r), ms(n))
      return n;
    throw new Error("Error: invalid file");
  } catch {
    throw new Error("Error: invalid file");
  }
}, ws = (e, t, r) => new File([e], r || "", {
  type: t
}), ys = (e) => "arrayBuffer" in e ? e.arrayBuffer() : new Promise((t, r) => {
  const n = new FileReader();
  n.onload = (i) => {
    var o;
    if (!((o = i.target) != null && o.result))
      return r(new Error("Couldn't convert blob to ArrayBuffer"));
    t(i.target.result);
  }, n.readAsArrayBuffer(e);
}), Cs = async (e) => {
  var t;
  return e.type || (t = e == null ? void 0 : e.name) != null && t.endsWith(".drawnix") && (e = ws(
    await ys(e),
    _r.drawnix,
    e.name
  )), e;
}, bs = async (e) => {
  let t;
  return "text" in Blob ? t = await e.text() : t = await new Promise((r) => {
    const n = new FileReader();
    n.readAsText(e, "utf8"), n.onloadend = () => {
      n.readyState === FileReader.DONE && r(n.result);
    };
  }), t;
}, ks = async (e) => new Promise((t, r) => {
  const n = new FileReader();
  n.onload = () => {
    const i = n.result;
    t(i);
  }, n.onerror = (i) => r(i), n.readAsDataURL(e);
}), hn = (e) => !!e && Object.values(Tr).includes(e), Os = (e) => new Promise((t, r) => {
  const n = new Image();
  n.onload = () => {
    t(n);
  }, n.onerror = (i) => {
    r(i);
  }, n.src = e;
}), Ls = (e, t, r) => {
  const n = e.width > r ? r : e.width, i = n / e.width * e.height;
  return {
    url: t,
    width: n,
    height: i
  };
}, mr = async (e, t, r, n) => {
  const i = be(e)[0] || wa(e), o = i ? 240 : 400, l = await ks(t), s = await Os(l), c = Ls(s, l, o), u = r && Jo(e, r);
  if (n && u && pe.isMindElement(e, u)) {
    cn.setImage(e, u, c);
    return;
  }
  i && pe.isMindElement(e, i) && !n ? cn.setImage(e, i, c) : xa.insertImage(e, c, r);
}, Es = (e) => {
  const t = e, { insertFragment: r, drop: n } = t;
  return t.insertFragment = (i, o, l) => {
    var s;
    if ((s = i == null ? void 0 : i.files) != null && s.length && hn(i.files[0].type)) {
      const c = i.files[0];
      mr(e, c, o, !1);
      return;
    }
    r(i, o, l);
  }, t.drop = (i) => {
    var o, l;
    if ((l = (o = i.dataTransfer) == null ? void 0 : o.files) != null && l.length) {
      const s = i.dataTransfer.files[0];
      if (hn(s.type)) {
        const c = dr(
          e,
          fr(e, i.x, i.y)
        );
        return mr(e, s, c, !0), !0;
      }
    }
    return n(i);
  }, t;
}, Ii = (e) => {
  const t = e;
  return t.renderImage = (r, n) => {
    const i = Ni.createRoot(r);
    i.render(/* @__PURE__ */ a(fn, { ...n }));
    let o = { ...n };
    return {
      destroy: () => {
        setTimeout(() => {
          i.unmount();
        }, 0);
      },
      update: (s) => {
        o = { ...o, ...s }, i.render(/* @__PURE__ */ a(fn, { ...o }));
      }
    };
  }, Es(t);
}, re = Ne.forwardRef(
  ({ children: e, padding: t, className: r, style: n, ...i }, o) => /* @__PURE__ */ a(
    "div",
    {
      className: M("island", r),
      style: { "--padding": t, ...n },
      ref: o,
      ...i,
      children: e
    }
  )
), Ss = mi(
  ({ children: e, gap: t, align: r, justifyContent: n, className: i, style: o }, l) => /* @__PURE__ */ a(
    "div",
    {
      className: M("stack stack_horizontal", i),
      style: {
        "--gap": t,
        alignItems: r,
        justifyContent: n,
        ...o
      },
      ref: l,
      children: e
    }
  )
), Ps = mi(
  ({ children: e, gap: t, align: r, justifyContent: n, className: i, style: o }, l) => /* @__PURE__ */ a(
    "div",
    {
      className: M("stack stack_vertical", i),
      style: {
        "--gap": t,
        justifyItems: r,
        justifyContent: n,
        ...o
      },
      ref: l,
      children: e
    }
  )
), J = {
  Row: Ss,
  Col: Ps
};
class xs extends DOMException {
  constructor(t = "Request Aborted") {
    super(t, "AbortError");
  }
}
const Ms = (e) => !!e && typeof e == "object" && "then" in e && "catch" in e && "finally" in e, Ds = (e, t, { checkForDefaultPrevented: r = !0 } = {}) => function(i) {
  if (e == null || e(i), !r || !(i != null && i.defaultPrevented))
    return t == null ? void 0 : t(i);
}, Ts = (e) => {
  const t = e.split(","), r = t[0].match(/:(.*?);/)[1], n = atob(t[1]);
  let i = n.length;
  const o = new Uint8Array(i);
  for (; i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], {
    type: r
  });
}, _s = (e, t = {}) => Qo(e, {
  fillStyle: "transparent",
  inlineStyleClassNames: ".extend,.emojis,.text",
  padding: 20,
  ratio: 4,
  ...t
});
function Ns(e, t) {
  const r = document.createElement("a"), n = window.URL.createObjectURL(e);
  r.href = n, r.download = t, document.body.append(r), r.click(), window.URL.revokeObjectURL(n), r.remove();
}
const Bi = (e, t) => {
  const r = [];
  for (let n = 0; n < e.length; n += t)
    r.push(e.slice(n, n + t));
  return r;
}, gn = (e) => (e = e.replace(/\bAlt\b/i, "Alt").replace(/\bShift\b/i, "Shift").replace(/\b(Enter|Return)\b/i, "Enter"), di || ea ? e.replace(/\bCtrlOrCmd\b/gi, "Cmd").replace(/\bAlt\b/i, "Option") : e.replace(/\bCtrlOrCmd\b/gi, "Ctrl")), A = Ne.forwardRef((e, t) => {
  const { id: r } = { id: "drawnix" }, n = Ne.useRef(null);
  Ne.useImperativeHandle(t, () => n.current);
  const i = `tool-icon_size_${e.size || "medium"}`, [o, l] = _(!1), s = se(!0), c = async (f) => {
    var d;
    const h = "onClick" in e && ((d = e.onClick) == null ? void 0 : d.call(e, f));
    if (Ms(h))
      try {
        l(!0), await h;
      } catch (m) {
        if (m instanceof xs)
          console.warn(m);
        else
          throw m;
      } finally {
        s.current && l(!1);
      }
  };
  Y(() => (s.current = !0, () => {
    s.current = !1;
  }), []);
  const u = se(null);
  if (e.type === "button" || e.type === "icon" || e.type === "submit") {
    const f = e.type === "icon" ? "button" : e.type;
    return /* @__PURE__ */ k(
      "button",
      {
        className: M(
          "tool-icon_type_button",
          i,
          e.className,
          e.visible && !e.hidden ? "tool-icon_type_button--show" : "tool-icon_type_button--hide",
          {
            "tool-icon": !e.hidden,
            "tool-icon--selected": e.selected
          }
        ),
        style: e.style,
        "data-testid": e["data-testid"],
        hidden: e.hidden,
        title: e.title,
        "aria-label": e["aria-label"],
        type: f,
        onClick: c,
        onPointerDown: (h) => {
          var d;
          (d = e.onPointerDown) == null || d.call(e, {
            pointerType: h.pointerType || null,
            event: h
          });
        },
        onPointerUp: (h) => {
          var d;
          (d = e.onPointerUp) == null || d.call(e, { pointerType: h.pointerType || null });
        },
        ref: n,
        disabled: o || !!e.disabled,
        children: [
          (e.icon || e.label) && /* @__PURE__ */ k(
            "div",
            {
              className: "tool-icon__icon",
              "aria-hidden": "true",
              "aria-disabled": !!e.disabled,
              children: [
                e.icon || e.label,
                e.keyBindingLabel && /* @__PURE__ */ a("span", { className: "tool-icon__keybinding", children: e.keyBindingLabel })
              ]
            }
          ),
          e.showAriaLabel && /* @__PURE__ */ a("div", { className: "tool-icon__label", children: e["aria-label"] }),
          e.children && /* @__PURE__ */ a("div", { className: "tool-icon__icon", children: e.children })
        ]
      }
    );
  }
  return /* @__PURE__ */ k(
    "label",
    {
      className: M("tool-icon", e.className),
      title: e.title,
      onPointerDown: (f) => {
        var h;
        u.current = f.pointerType || null, (h = e.onPointerDown) == null || h.call(e, {
          pointerType: f.pointerType || null,
          event: f
        });
      },
      onPointerUp: (f) => {
        var h;
        (h = e.onPointerUp) == null || h.call(e, { pointerType: f.pointerType || null }), requestAnimationFrame(() => {
          u.current = null;
        });
      },
      children: [
        /* @__PURE__ */ a(
          "input",
          {
            className: `tool-icon_type_radio ${i}`,
            type: "radio",
            name: e.name,
            "aria-label": e["aria-label"],
            "aria-keyshortcuts": e["aria-keyshortcuts"],
            "data-testid": e["data-testid"],
            id: `${r}-${e.id}`,
            onChange: () => {
              var f;
              (f = e.onChange) == null || f.call(e, { pointerType: u.current });
            },
            checked: e.checked,
            ref: n
          }
        ),
        /* @__PURE__ */ k("div", { className: "tool-icon__icon", children: [
          e.icon,
          e.keyBindingLabel && /* @__PURE__ */ a("span", { className: "tool-icon__keybinding", children: e.keyBindingLabel })
        ] })
      ]
    }
  );
});
A.displayName = "ToolButton";
const E = (e) => e, Fs = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "Hand", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M8.44583468,0.500225887 C9.07406934,0.510185679 9.54739531,0.839591366 9.86192311,1.34305279 C9.89696656,1.39914649 9.92878401,1.45492964 9.9576026,1.50991157 L9.9576026,1.50991157 L10.0210033,1.64201027 L10.061978,1.62350755 C10.1972891,1.56834247 10.3444107,1.53218464 10.5027907,1.51755353 L10.5027907,1.51755353 L10.6649031,1.51019133 C11.4883708,1.51019133 12.0208782,1.99343346 12.3023042,2.66393278 C12.3903714,2.87392911 12.4344191,3.10047818 12.4339446,3.3257952 L12.4339446,3.3257952 L12.4360033,3.80501027 L12.5160535,3.78341501 C12.6124478,3.76124046 12.7138812,3.74739854 12.820201,3.74250274 L12.820201,3.74250274 L12.9833264,3.74194533 C13.6121166,3.7657478 14.0645887,4.0801724 14.3087062,4.56112689 C14.4521117,4.8436609 14.4987984,5.11349437 14.4999262,5.33449618 L14.4999262,5.33449618 L14.3922653,12.049414 C14.3784752,12.909177 14.0717787,13.7360948 13.5212406,14.3825228 C13.4055676,14.5183496 13.2843697,14.643961 13.1582361,14.7596335 C12.4634771,15.3967716 11.755103,15.6538706 11.1897396,15.7000055 L11.1897396,15.7000055 L7.4723083,15.6798158 C7.14276373,15.634268 6.81580098,15.5154267 6.49455235,15.3472501 C6.25643701,15.2225944 6.06881706,15.0975452 5.88705731,14.9494308 L5.88705731,14.9494308 L2.55198782,11.500873 C2.39559475,11.3769079 2.17626793,11.1748532 1.9548636,10.9139403 C1.57867502,10.4706225 1.33501976,10.0139923 1.30330257,9.52833025 C1.28093191,9.18578476 1.37200912,8.85641102 1.5826788,8.56872564 C1.82538833,8.23725279 2.12881965,8.02107162 2.47470569,7.92957033 C2.95807982,7.80169771 3.42705723,7.92468989 3.86509644,8.18731167 C4.04431391,8.29475961 4.1816109,8.40304483 4.26225571,8.47866867 L4.26225571,8.47866867 L4.61400328,8.79701027 L4.57247249,3.59275349 L4.57628524,3.46204923 C4.5897691,3.23444442 4.64087578,2.95701848 4.75937106,2.66961597 C5.01017272,2.06131302 5.49670227,1.64692543 6.21363856,1.60818786 C6.44223508,1.59583681 6.65042099,1.62176802 6.83696985,1.68057551 L6.83696985,1.68057551 L6.86400328,1.69001027 C6.88501862,1.63593052 6.90764242,1.58175442 6.9331867,1.52672633 L6.9331867,1.52672633 L7.01883595,1.35955614 C7.31549194,0.832047939 7.79476072,0.48993549 8.44583468,0.500225887 Z M8.42684173,1.70001476 C8.26825412,1.69756905 8.16339456,1.77242008 8.06478367,1.94776814 C8.03967773,1.99241107 8.01831703,2.03811495 8.00083464,2.07855067 L8.00083464,2.07855067 L7.94879157,2.2035905 L7.94354455,2.20731401 L7.943,3.161 L7.97170661,3.16123746 L7.97170661,7.60991883 L6.77170661,7.60991883 L6.771,3.338 L6.74362358,3.33880359 C6.74284189,3.29064626 6.73014163,3.20282206 6.7002616,3.11094408 L6.66446012,3.01903385 C6.58982025,2.85766739 6.49843292,2.79455071 6.27838133,2.80644008 C6.07001018,2.81769881 5.95642108,2.91444507 5.86877664,3.12702089 C5.79792279,3.29887224 5.77228127,3.48655908 5.77246879,3.58977183 L5.77246879,3.58977183 L5.83613619,11.5252021 L3.41863956,9.33477657 L3.31637296,9.25979571 L3.24805011,9.21651224 C3.06096922,9.10434987 2.89279975,9.06024641 2.78159879,9.0896637 C2.71007735,9.10858411 2.63607367,9.1613084 2.55086305,9.27768211 C2.51020424,9.33320478 2.49638061,9.38319687 2.50075171,9.4501283 C2.51206889,9.62341997 2.64503022,9.87260054 2.86983366,10.1375191 C3.03268834,10.3294345 3.19762053,10.4813781 3.35554956,10.6131022 L3.35554956,10.6131022 L6.68454317,14.0569073 C6.71106575,14.0773808 6.74806086,14.1037158 6.79369091,14.1335929 L6.79369091,14.1335929 L6.95464838,14.2315311 L7.05111031,14.2841211 C7.25978123,14.3933622 7.46253523,14.4670573 7.55685495,14.4854708 L7.55685495,14.4854708 L11.1407985,14.5022108 C11.1503576,14.5013899 11.1627905,14.4997539 11.1779002,14.4971772 L11.1779002,14.4971772 L11.2991076,14.4694224 C11.3491682,14.4557375 11.4083624,14.437284 11.4751158,14.4130563 C11.769383,14.3062543 12.066676,14.1324596 12.3471758,13.8752234 C12.4371203,13.7927386 12.5240597,13.7026333 12.607654,13.6044743 C12.9760464,13.1719172 13.183059,12.6137678 13.1924195,12.030173 L13.1924195,12.030173 L13.3000132,5.32832551 C13.2997939,5.29016685 13.2826117,5.19085946 13.2386527,5.10425262 C13.1843838,4.99733326 13.1129774,4.94771265 12.9379578,4.94108739 C12.6814739,4.93138871 12.534132,5.11189595 12.4756792,5.39480062 L12.4768718,7.52734922 L11.2768718,7.52734922 L11.276,5.688 L11.2462883,5.6883208 L11.2339541,3.32771285 C11.2341,3.2560396 11.2209054,3.18817621 11.1957482,3.12818892 C11.0820579,2.85732094 10.9199288,2.71019133 10.6649031,2.71019133 C10.456829,2.71019133 10.3197487,2.87378067 10.2524297,3.11264939 L10.2530225,7.512783 L9.05302254,7.512783 L9.053,3.288 L9.01554331,3.28724203 L8.98800328,2.29901027 L8.9629175,2.22263368 C8.94515567,2.17417174 8.92167756,2.11937748 8.8924232,2.06330056 L8.8924232,2.06330056 L8.84420197,1.9788544 C8.72758855,1.79219249 8.59915015,1.70280728 8.42684173,1.70001476 Z" }) }) })
), Rs = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "selection", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M1.38232686,2.38218266 L5.4143451,14.2246629 L5.45540179,14.3136477 C5.6738376,14.7029541 6.25143564,14.7273637 6.49230627,14.3232393 L8.11486037,11.5990854 L10.8833927,14.4351257 C11.1162256,14.673686 11.4988798,14.6767204 11.7354668,14.4418826 L14.1933351,12.0021862 L14.263123,11.9192708 C14.4260847,11.6858139 14.4039042,11.3621027 14.1959502,11.1531274 L11.3598604,8.30408543 L14.0003903,6.44278167 C14.4042341,6.15799031 14.3099422,5.5344405 13.8399491,5.38178897 L2.13023795,1.60291226 C1.65322163,1.44797961 1.20794286,1.91192855 1.38232686,2.38218266 Z M2.93689198,3.12556703 L12.3288604,6.15308543 L10.0883903,7.73315528 L10.0121747,7.79676991 C9.78025886,8.02517222 9.77056424,8.40723513 10.0088753,8.64671667 L12.9218604,11.5730854 L11.3198604,13.1630854 L8.42938714,10.2026992 L8.35682877,10.1391916 C8.07802132,9.93187508 7.66955488,10.0042813 7.48460396,10.3145856 L6.10286037,12.6310854 L2.93689198,3.12556703 Z" }) }) })
), As = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "Mind", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M14.5,1.5 C15.3284271,1.5 16,2.17157288 16,3 L16,4.5 C16,5.32842712 15.3284271,6 14.5,6 L10.5,6 C9.70541385,6 9.05512881,5.38217354 9.00332687,4.60070262 L7.75,4.6 C6.70187486,4.6 5.75693372,5.0417832 5.09122946,5.7492967 L5.5,5.75 C6.32842712,5.75 7,6.42157288 7,7.25 L7,8.75 C7,9.57842712 6.32842712,10.25 5.5,10.25 L4.69703093,10.2512226 C5.3493111,11.2442937 6.47308134,11.9 7.75,11.9 L9.004,11.9 L9.00686658,11.85554 C9.07955132,11.0948881 9.72030388,10.5 10.5,10.5 L14.5,10.5 C15.3284271,10.5 16,11.1715729 16,12 L16,13.5 C16,14.3284271 15.3284271,15 14.5,15 L10.5,15 C9.67157288,15 9,14.3284271 9,13.5 L9,13.1 L7.75,13.1 C5.78479628,13.1 4.09258608,11.9311758 3.33061658,10.2507745 L1.5,10.25 C0.671572875,10.25 0,9.57842712 0,8.75 L0,7.25 C0,6.42157288 0.671572875,5.75 1.5,5.75 L3.5932906,5.74973863 C4.44206161,4.34167555 5.98606075,3.4 7.75,3.4 L9,3.4 L9,3 C9,2.17157288 9.67157288,1.5 10.5,1.5 L14.5,1.5 Z M14.5,11.7 L10.5,11.7 C10.3343146,11.7 10.2,11.8343146 10.2,12 L10.2,13.5 C10.2,13.6656854 10.3343146,13.8 10.5,13.8 L14.5,13.8 C14.6656854,13.8 14.8,13.6656854 14.8,13.5 L14.8,12 C14.8,11.8343146 14.6656854,11.7 14.5,11.7 Z M5.5,6.95 L1.5,6.95 C1.33431458,6.95 1.2,7.08431458 1.2,7.25 L1.2,8.75 C1.2,8.91568542 1.33431458,9.05 1.5,9.05 L5.5,9.05 C5.66568542,9.05 5.8,8.91568542 5.8,8.75 L5.8,7.25 C5.8,7.08431458 5.66568542,6.95 5.5,6.95 Z M14.5,2.7 L10.5,2.7 C10.3343146,2.7 10.2,2.83431458 10.2,3 L10.2,4.5 C10.2,4.66568542 10.3343146,4.8 10.5,4.8 L14.5,4.8 C14.6656854,4.8 14.8,4.66568542 14.8,4.5 L14.8,3 C14.8,2.83431458 14.6656854,2.7 14.5,2.7 Z" }) }) })
), Is = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "geometry", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M9.3,6.7 L1.7,6.7 L1.7,14.3 L9.3,14.3 L9.3,6.7 Z M10.5,9.8 C12.8748244,9.8 14.8,7.87482442 14.8,5.5 C14.8,3.12517558 12.8748244,1.2 10.5,1.2 C8.12517558,1.2 6.2,3.12517558 6.2,5.5 L9.5,5.5 C10.0522847,5.5 10.5,5.94771525 10.5,6.5 L10.5,9.8 Z M10.5,14.5 C10.5,15.0522847 10.0522847,15.5 9.5,15.5 L1.5,15.5 C0.94771525,15.5 0.5,15.0522847 0.5,14.5 L0.5,6.5 C0.5,5.94771525 0.94771525,5.5 1.5,5.5 L5,5.5 C5,2.46243388 7.46243388,0 10.5,0 C13.5375661,0 16,2.46243388 16,5.5 C16,8.53756612 13.5375661,11 10.5,11 L10.5,14.5 Z" }) }) })
), Bs = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "font", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M4.75,14.5069828 C4.41862915,14.5069828 4.15,14.2383536 4.15,13.9069828 C4.15,13.5756119 4.41862915,13.3069828 4.75,13.3069828 L7.3993606,13.306 L7.3993606,2.7 L2.7113606,2.7 L2.7113606,4.10415313 C2.7113606,4.40238689 2.49377099,4.64979988 2.20868371,4.69630014 L2.1113606,4.70415313 C1.77998975,4.70415313 1.5113606,4.43552397 1.5113606,4.10415313 L1.5113606,2.1 C1.5113606,1.76862915 1.77998975,1.5 2.1113606,1.5 L13.8810378,1.5 C14.2124087,1.5 14.4810378,1.76862915 14.4810378,2.1 L14.4810378,4.10415313 C14.4810378,4.43552397 14.2124087,4.70415313 13.8810378,4.70415313 C13.549667,4.70415313 13.2810378,4.43552397 13.2810378,4.10415313 L13.2810378,2.7 L8.5993606,2.7 L8.5993606,13.306 L11.25,13.3069828 C11.5813708,13.3069828 11.85,13.5756119 11.85,13.9069828 C11.85,14.2383536 11.5813708,14.5069828 11.25,14.5069828 L4.75,14.5069828 Z" }) }) })
), js = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { id: "straight-line", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M8.55595221,-1.5261864 C8.88741773,-1.5261864 9.15621426,-1.25765205 9.15653772,-0.926186684 L9.16739175,10.3828136 L10.9946787,10.3836977 C11.2708211,10.3836977 11.4946787,10.6075553 11.4946787,10.8836977 C11.4946787,10.9607525 11.4768694,11.0367648 11.4426413,11.1058002 L8.8378495,16.3594519 C8.7642512,16.5078936 8.58425218,16.5685662 8.43581043,16.4949679 C8.37895485,16.4667786 8.33250284,16.4212859 8.30313336,16.3650308 L5.56226325,11.1150985 C5.43446412,10.8703088 5.52930372,10.5682659 5.77409341,10.4404667 C5.84552557,10.4031736 5.92491301,10.3836977 6.0054942,10.3836977 L7.96739175,10.3828136 L7.95653772,-0.926186684 C7.95621467,-1.25723416 8.22431979,-1.52586306 8.55536727,-1.52618611 Z",
      id: "",
      transform: "translate(8.500035, 7.500035) rotate(-135.000000) translate(-8.500035, -7.500035) "
    }
  ) }) })
), zs = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M3 3h18v18H3z",
      stroke: "currentColor",
      strokeWidth: "2",
      fill: "none"
    }
  ) })
), Hs = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", children: /* @__PURE__ */ a("g", { id: "terminal", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M11,3 C13.7614237,3 16,5.23857625 16,8 C16,10.7614237 13.7614237,13 11,13 L5,13 C2.23857625,13 0,10.7614237 0,8 C0,5.23857625 2.23857625,3 5,3 L11,3 Z M11,4.2 L5,4.2 C2.90131795,4.2 1.2,5.90131795 1.2,8 C1.2,10.0330982 2.79664702,11.6932796 4.8044525,11.7950555 L5,11.8 L11,11.8 C13.098682,11.8 14.8,10.098682 14.8,8 C14.8,5.96690176 13.203353,4.30672042 11.1955475,4.20494454 L11,4.2 Z" }) }) })
), Ws = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { id: "ellipse", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2.2 C4.79674845,2.2 2.2,4.79674845 2.2,8 C2.2,11.2032515 4.79674845,13.8 8,13.8 C11.2032515,13.8 13.8,11.2032515 13.8,8 C13.8,4.79674845 11.2032515,2.2 8,2.2 Z" }) }) })
), Us = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { id: "triangle", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M8.23125547,1.21366135 C8.3114266,1.25857939 8.37766784,1.32472334 8.42270367,1.40482837 L15.6471754,14.2549655 C15.7825042,14.4956743 15.6970768,14.800513 15.456368,14.9358418 C15.3815505,14.977905 15.2971646,15 15.2113335,15 L0.787227066,15 C0.511084691,15 0.287227066,14.7761424 0.287227066,14.5 C0.287227066,14.414418 0.309194147,14.3302684 0.351025556,14.2556064 L7.55066033,1.40546924 C7.6856352,1.1645618 7.99034802,1.07868648 8.23125547,1.21366135 Z M7.98695902,3.07926294 L1.98095902,13.7992629 L14.014959,13.7992629 L7.98695902,3.07926294 Z" }) }) })
), qs = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M13.7636471,2.6449804 C13.7716713,2.69552516 13.7718878,2.74700226 13.7642892,2.79761274 L12.3875778,11.9671885 C12.3550099,12.1841069 12.184864,12.3544698 11.9679874,12.3873141 L2.78433018,13.7781116 C2.511301,13.8194599 2.25644773,13.6316454 2.21509947,13.3586162 C2.20737253,13.307594 2.20759072,13.2556831 2.21574631,13.2047277 L3.67471119,4.08923146 C3.70888725,3.87570215 3.87646006,3.70834166 4.09003253,3.67443635 L13.1914362,2.22955927 C13.4641633,2.18626298 13.7203508,2.37225335 13.7636471,2.6449804 Z M12.4355704,3.5645263 L4.77957044,4.7795263 L3.55157044,12.4485263 L11.2775704,11.2775263 L12.4355704,3.5645263 Z",
      transform: "translate(7.989647, 8.003560) rotate(-315.000000) translate(-7.989647, -8.003560) "
    }
  ) }) })
), $s = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M15.3062871,3.5 C15.5824294,3.5 15.8062871,3.72385763 15.8062871,4 C15.8062871,4.05374105 15.7976231,4.10713065 15.7806287,4.15811388 L13.113962,12.1581139 C13.045905,12.362285 12.8548356,12.5 12.6396204,12.5 L0.693712943,12.5 C0.417570568,12.5 0.193712943,12.2761424 0.193712943,12 C0.193712943,11.946259 0.202376883,11.8928694 0.219371294,11.8418861 L2.88603796,3.84188612 C2.95409498,3.63771505 3.14516441,3.5 3.36037961,3.5 L15.3062871,3.5 Z M14.335,4.7 L3.864,4.7 L1.664,11.3 L12.134,11.3 L14.335,4.7 Z" }) }) })
), Vs = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M11,3 C13.7614237,3 16,5.23857625 16,8 C16,10.7614237 13.7614237,13 11,13 L5,13 C2.23857625,13 0,10.7614237 0,8 C0,5.23857625 2.23857625,3 5,3 L11,3 Z M11,4.2 L5,4.2 C2.90131795,4.2 1.2,5.90131795 1.2,8 C1.2,10.0330982 2.79664702,11.6932796 4.8044525,11.7950555 L5,11.8 L11,11.8 C13.098682,11.8 14.8,10.098682 14.8,8 C14.8,5.96690176 13.203353,4.30672042 11.1955475,4.20494454 L11,4.2 Z" }) }) })
), Gs = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M8.55595221,-1.5261864 C8.88741773,-1.5261864 9.15621426,-1.25765205 9.15653772,-0.926186684 L9.16739175,10.3828136 L10.9946787,10.3836977 C11.2708211,10.3836977 11.4946787,10.6075553 11.4946787,10.8836977 C11.4946787,10.9607525 11.4768694,11.0367648 11.4426413,11.1058002 L8.8378495,16.3594519 C8.7642512,16.5078936 8.58425218,16.5685662 8.43581043,16.4949679 C8.37895485,16.4667786 8.33250284,16.4212859 8.30313336,16.3650308 L5.56226325,11.1150985 C5.43446412,10.8703088 5.52930372,10.5682659 5.77409341,10.4404667 C5.84552557,10.4031736 5.92491301,10.3836977 6.0054942,10.3836977 L7.96739175,10.3828136 L7.95653772,-0.926186684 C7.95621467,-1.25723416 8.22431979,-1.52586306 8.55536727,-1.52618611 Z",
      transform: "translate(8.500035, 7.500035) rotate(-135.000000) translate(-8.500035, -7.500035) "
    }
  ) }) })
), Zs = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M10.0153197,2.75391207 C10.0923746,2.75391207 10.1683869,2.77172133 10.2374222,2.80594949 L15.4910739,5.41074126 C15.6395156,5.48433956 15.7001882,5.66433859 15.6265899,5.81278033 C15.5984006,5.86963592 15.5529079,5.91608792 15.4966529,5.9454574 L10.2467205,8.68632752 C10.0019308,8.81412664 9.69988791,8.71928704 9.57208878,8.47449735 C9.53479568,8.40306519 9.51531974,8.32367776 9.51531974,8.24309656 L9.51458753,6.62591207 L6.16858753,6.62651279 L6.16914066,12.0061269 C6.16914066,12.3043606 5.95155104,12.5517736 5.66646377,12.5982739 L5.56914066,12.6061269 L0.534587532,12.6061269 C0.203216682,12.6061269 -0.0654124678,12.3374977 -0.0654124678,12.0061269 C-0.0654124678,11.674756 0.203216682,11.4061269 0.534587532,11.4061269 L4.96858753,11.4055128 L4.96914066,6.02651279 C4.96914066,5.72827903 5.18673027,5.48086604 5.47181754,5.43436578 L5.56914066,5.42651279 L9.51458753,5.42591207 L9.51531974,3.25391207 C9.51531974,2.9777697 9.73917736,2.75391207 10.0153197,2.75391207 Z" }) }) })
), Ks = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M10.0153197,2.75391207 C10.0923746,2.75391207 10.1683869,2.77172133 10.2374222,2.80594949 L15.4910739,5.41074126 C15.6395156,5.48433956 15.7001882,5.66433859 15.6265899,5.81278033 C15.5984006,5.86963592 15.5529079,5.91608792 15.4966529,5.9454574 L10.2467205,8.68632752 C10.0019308,8.81412664 9.69988791,8.71928704 9.57208878,8.47449735 C9.53479568,8.40306519 9.51531974,8.32367776 9.51531974,8.24309656 L9.51423005,6.39035523 C5.97984781,6.85936966 3.21691607,9.08498364 1.18879108,13.1285821 C1.04022695,13.4247836 0.679673152,13.5444674 0.383471635,13.3959033 C0.0872701176,13.2473391 -0.0324136308,12.8867853 0.116150501,12.5905838 C2.34388813,8.14900524 5.48945543,5.65776043 9.51468497,5.18078677 L9.51531974,3.25391207 C9.51531974,2.9777697 9.73917736,2.75391207 10.0153197,2.75391207 Z" }) }) })
), Ys = E(
  /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /* @__PURE__ */ k("g", { strokeWidth: "1.5", children: [
        /* @__PURE__ */ a("path", { stroke: "none", d: "M0 0h24v24H0z" }),
        /* @__PURE__ */ a("line", { x1: "4", y1: "6", x2: "20", y2: "6" }),
        /* @__PURE__ */ a("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
        /* @__PURE__ */ a("line", { x1: "4", y1: "18", x2: "20", y2: "18" })
      ] })
    }
  )
), Xs = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ a(
    "path",
    {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      d: "M7.5 15.833c-3.583 1.167-3.583-2.083-5-2.5m10 4.167v-2.917c0-.833.083-1.166-.417-1.666 2.334-.25 4.584-1.167 4.584-5a3.833 3.833 0 0 0-1.084-2.667 3.5 3.5 0 0 0-.083-2.667s-.917-.25-2.917 1.084a10.25 10.25 0 0 0-5.166 0C5.417 2.333 4.5 2.583 4.5 2.583a3.5 3.5 0 0 0-.083 2.667 3.833 3.833 0 0 0-1.084 2.667c0 3.833 2.25 4.75 4.584 5-.5.5-.5 1-.417 1.666V17.5",
      strokeWidth: "1.25"
    }
  ) })
), Js = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ k(
    "g",
    {
      strokeWidth: "1.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      children: [
        /* @__PURE__ */ a("path", { stroke: "none", d: "M0 0h24v24H0z" }),
        /* @__PURE__ */ a("path", { d: "M15 8h.01" }),
        /* @__PURE__ */ a("path", { d: "M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5" }),
        /* @__PURE__ */ a("path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" }),
        /* @__PURE__ */ a("path", { d: "M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598" }),
        /* @__PURE__ */ a("path", { d: "M19 16v6" }),
        /* @__PURE__ */ a("path", { d: "M22 19l-3 3l-3 -3" })
      ]
    }
  ) })
), Qs = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "zoom-out", stroke: "none", fill: "currentColor", strokeWidth: "1", children: /* @__PURE__ */ a(
    "path",
    {
      fillRule: "nonzero",
      d: "M6.85,2.73225886e-13 C10.6331505,2.73225886e-13 13.7,3.06684946 13.7,6.85 C13.7,8.54194045 13.0865836,10.0906098 12.0700142,11.2857448 L15.4201976,14.5717081 C15.6567367,14.8037768 15.6603607,15.1836585 15.4282919,15.4201976 C15.1962232,15.6567367 14.8163415,15.6603607 14.5798024,15.4282919 L14.5798024,15.4282919 L11.2163456,12.128262 C10.0309427,13.1099691 8.50937591,13.7 6.85,13.7 C3.06684946,13.7 4.58522109e-14,10.6331505 4.58522109e-14,6.85 C4.58522109e-14,3.06684946 3.06684946,2.73225886e-13 6.85,2.73225886e-13 Z M6.85,1.2 C3.72959116,1.2 1.2,3.72959116 1.2,6.85 C1.2,9.97040884 3.72959116,12.5 6.85,12.5 C8.31753357,12.5 9.65438791,11.9404957 10.6588859,11.0231643 C10.6855412,10.9625408 10.7245275,10.9050898 10.7743982,10.8542584 C10.8288931,10.7987137 10.8915387,10.7560124 10.9585649,10.7261903 C11.9144009,9.71595758 12.5,8.35136579 12.5,6.85 C12.5,3.72959116 9.97040884,1.2 6.85,1.2 Z M4.6,6.2 L9.12944565,6.2 C9.4608165,6.2 9.72944565,6.46862915 9.72944565,6.8 C9.72944565,7.09823376 9.51185604,7.34564675 9.22676876,7.39214701 L9.12944565,7.4 L4.6,7.4 C4.26862915,7.4 4,7.13137085 4,6.8 C4,6.50176624 4.21758961,6.25435325 4.50267688,6.20785299 L4.6,6.2 L9.12944565,6.2 Z"
    }
  ) }) })
), el = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "zoom-in", stroke: "none", fill: "currentColor", strokeWidth: "1", children: /* @__PURE__ */ a(
    "path",
    {
      fillRule: "nonzero",
      d: "M6.85,-1.81188398e-13 C10.6331505,-1.81188398e-13 13.7,3.06684946 13.7,6.85 C13.7,8.54194045 13.0865836,10.0906098 12.0700142,11.2857448 L15.4201976,14.5717081 C15.6567367,14.8037768 15.6603607,15.1836585 15.4282919,15.4201976 C15.1962232,15.6567367 14.8163415,15.6603607 14.5798024,15.4282919 L14.5798024,15.4282919 L11.2163456,12.128262 C10.0309427,13.1099691 8.50937591,13.7 6.85,13.7 C3.06684946,13.7 4.61852778e-14,10.6331505 4.61852778e-14,6.85 C4.61852778e-14,3.06684946 3.06684946,-1.81188398e-13 6.85,-1.81188398e-13 Z M6.85,1.2 C3.72959116,1.2 1.2,3.72959116 1.2,6.85 C1.2,9.97040884 3.72959116,12.5 6.85,12.5 C8.31753357,12.5 9.65438791,11.9404957 10.6588859,11.0231643 C10.6855412,10.9625408 10.7245275,10.9050898 10.7743982,10.8542584 C10.8288931,10.7987137 10.8915387,10.7560124 10.9585649,10.7261903 C11.9144009,9.71595758 12.5,8.35136579 12.5,6.85 C12.5,3.72959116 9.97040884,1.2 6.85,1.2 Z M6.86472282,3.93527718 C7.16295659,3.93527718 7.41036958,4.15286679 7.45686984,4.43795406 L7.46472282,4.53527718 L7.464,6.19927718 L9.12944565,6.2 C9.42767941,6.2 9.6750924,6.41758961 9.72159266,6.70267688 L9.72944565,6.8 C9.72944565,7.09823376 9.51185604,7.34564675 9.22676876,7.39214701 L9.12944565,7.4 L7.464,7.39927718 L7.46472282,9.06472282 C7.46472282,9.36295659 7.24713321,9.61036958 6.96204594,9.65686984 L6.86472282,9.66472282 C6.56648906,9.66472282 6.31907607,9.44713321 6.27257581,9.16204594 L6.26472282,9.06472282 L6.264,7.39927718 L4.6,7.4 C4.30176624,7.4 4.05435325,7.18241039 4.00785299,6.89732312 L4,6.8 C4,6.50176624 4.21758961,6.25435325 4.50267688,6.20785299 L4.6,6.2 L6.264,6.19927718 L6.26472282,4.53527718 C6.26472282,4.2701805 6.43664548,4.0452385 6.67507642,3.96586557 L6.76739971,3.94313016 L6.86472282,3.93527718 Z"
    }
  ) }) })
), tl = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 18 18", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "save-file", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      fillRule: "nonzero",
      d: "M11.064 9.1l2.645 2.595.03-.029.848.849-3.523 3.323-.848-.848 1.994-1.883H7.5v-1.2h4.712l-1.996-1.958.848-.849zM9.356.3L13.7 3.71V7.9h-1.2l-.001-2.633H8.5V1.5L3.1 1.5a.4.4 0 0 0-.392.32L2.7 1.9v12a.4.4 0 0 0 .32.392l.08.008h3.418v1.2H3.1a1.6 1.6 0 0 1-1.593-1.454L1.5 13.9v-12A1.6 1.6 0 0 1 2.954.307L3.1.3h6.256zM9.7 2.095v1.973l2.51-.001L9.7 2.095z"
    }
  ) }) })
), rl = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 18 18", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "save-file", stroke: "currentColor", fill: "none", children: /* @__PURE__ */ a(
    "path",
    {
      d: "m9.257 6.351.183.183H15.819c.34 0 .727.182 1.051.506.323.323.505.708.505 1.05v5.819c0 .316-.183.7-.52 1.035-.337.338-.723.522-1.037.522H4.182c-.352 0-.74-.181-1.058-.5-.318-.318-.499-.705-.499-1.057V5.182c0-.351.181-.736.5-1.054.32-.321.71-.503 1.057-.503H6.53l2.726 2.726Z",
      strokeWidth: "1.25"
    }
  ) }) })
), nl = E(
  /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: "background-color-icon",
      children: /* @__PURE__ */ k("g", { transform: "translate(1 1)", fillRule: "evenodd", fill: "#000", stroke: "none", children: [
        /* @__PURE__ */ a("circle", { fillOpacity: ".04", r: "11", cy: "11", cx: "11" }),
        /* @__PURE__ */ a(
          "path",
          {
            d: "M17 20.221V17h3.221A11.06 11.06 0 0 1 17 20.221zm-12 0A11.06 11.06 0 0 1 1.779 17H5v3.221zM20.221 5H17V1.779A11.06 11.06 0 0 1 20.221 5zM9 .181V1H6.411A10.919 10.919 0 0 1 9 .181zM15.589 1H13V.181c.907.167 1.775.445 2.589.819zM13 21.819V21h2.589c-.814.374-1.682.652-2.589.819zm-4 0A10.919 10.919 0 0 1 6.411 21H9v.819zm-8-6.23A10.919 10.919 0 0 1 .181 13H1v2.589zm0-9.178V9H.181C.348 8.093.626 7.225 1 6.411zM21.819 9H21V6.411c.374.814.652 1.682.819 2.589zM21 15.589V13h.819A10.919 10.919 0 0 1 21 15.589zM5 1.779V5H1.779A11.06 11.06 0 0 1 5 1.779zM5 13h4v4H5v-4zm8 0h4v4h-4v-4zM5 5h4v4H5V5zm8 0h4v4h-4V5zm0 12v4H9v-4h4zm8-8v4h-4V9h4zm-8 0v4H9V9h4zM5 9v4H1V9h4zm8-8v4H9V1h4z",
            fillOpacity: ".12"
          }
        )
      ] })
    }
  )
), il = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 32 32", className: "no-color-icon", children: /* @__PURE__ */ k(
    "g",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fillRule: "nonzero",
      fill: "currentColor",
      stroke: "none",
      children: [
        /* @__PURE__ */ a("path", { d: "M2 16c0 7.733 6.267 14 14 14s14-6.267 14-14S23.733 2 16 2 2 8.267 2 16zm-1 0C1 7.716 7.714 1 16 1c8.284 0 15 6.714 15 15 0 8.284-6.714 15-15 15-8.284 0-15-6.714-15-15z" }),
        /* @__PURE__ */ a("path", { d: "M6.354 26.354l-.708-.708 20-20 .708.708z" })
      ]
    }
  ) })
), ol = E(
  /* @__PURE__ */ a(
    "svg",
    {
      className: "selected-icon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ a("polyline", { points: "20 6 9 17 4 12" })
    }
  )
), al = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 24", className: "stroke-icon", children: /* @__PURE__ */ k(
    "g",
    {
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "none",
      fillRule: "evenodd",
      fill: "#000",
      children: [
        /* @__PURE__ */ a(
          "path",
          {
            d: "M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0-4c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z",
            fillRule: "nonzero",
            fillOpacity: ".04"
          }
        ),
        /* @__PURE__ */ a(
          "path",
          {
            d: "M12 5V1c1.491 0 2.914.297 4.21.835L14.68 5.53A6.979 6.979 0 0 0 12 5zm4.95 2.048l2.828-2.828a11.016 11.016 0 0 1 2.388 3.568l-3.697 1.53a7.01 7.01 0 0 0-1.519-2.27zM19 12h4c0 1.491-.297 2.914-.835 4.21l-3.696-1.53c.342-.826.531-1.73.531-2.68zm-2.05 4.95l2.828 2.828a11.016 11.016 0 0 1-3.567 2.387l-1.532-3.696a7.01 7.01 0 0 0 2.27-1.52zM12 19v4c-1.491 0-2.914-.297-4.21-.835l1.53-3.696c.826.342 1.73.531 2.68.531zm-4.95-2.05l-2.828 2.828a11.016 11.016 0 0 1-2.387-3.567l3.696-1.532a7.01 7.01 0 0 0 1.52 2.27zM5 12H1c0-1.491.297-2.914.835-4.21L5.53 9.32A6.979 6.979 0 0 0 5 12zm2.05-4.95L4.222 4.222a11.016 11.016 0 0 1 3.567-2.387L9.321 5.53a7.01 7.01 0 0 0-2.27 1.52z",
            fillOpacity: ".12"
          }
        )
      ]
    }
  ) })
), sl = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ a(
    "g",
    {
      xmlns: "http://www.w3.org/2000/svg",
      id: "icon-border-white",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      opacity: "0.1",
      children: /* @__PURE__ */ k("g", { id: "Group", children: [
        /* @__PURE__ */ a(
          "path",
          {
            d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z",
            fill: "#000000",
            fillRule: "nonzero"
          }
        ),
        /* @__PURE__ */ a(
          "path",
          {
            d: "M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z",
            fill: "#000000",
            fillRule: "nonzero"
          }
        )
      ] })
    }
  ) })
), ll = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ k("g", { transform: "translate(0 14)", fillRule: "evenodd", fill: "none", children: [
    /* @__PURE__ */ a("path", { d: "M-18-19h60v40h-60z" }),
    /* @__PURE__ */ a("path", { d: "M0 0h24v2H0z", fill: "currentColor" })
  ] }) })
), cl = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { transform: "translate(0 14)", fillRule: "evenodd", fill: "none", children: /* @__PURE__ */ a("g", { fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M0 0h6v2H0zM9 0h6v2H9zM18 0h6v2h-6z" }) }) }) })
), ul = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { transform: "translate(0 14)", fillRule: "evenodd", fill: "none", children: /* @__PURE__ */ k("g", { fill: "currentColor", children: [
    /* @__PURE__ */ a("rect", { rx: "1", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "4", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "8", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "12", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "16", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "20", height: "2", width: "2" })
  ] }) }) })
), dl = ({
  currentColor: e
}) => /* @__PURE__ */ a(
  "svg",
  {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: "font-color-icon",
    children: /* @__PURE__ */ k(
      "g",
      {
        id: "font-color",
        strokeWidth: "1",
        fillRule: "evenodd",
        stroke: "none",
        fill: "currentColor",
        children: [
          /* @__PURE__ */ a(
            "path",
            {
              id: "secondary-color",
              d: "M1.999 15.011h11.998V13.81H1.999z",
              fill: e || "#333333"
            }
          ),
          /* @__PURE__ */ a(
            "path",
            {
              d: "M6.034 7.59h4.104L8.086 2.297 6.034 7.59zm-.465 1.2l-1.437 3.707H2.845L7.301 1h1.287l-.001.004h.286l4.454 11.492h-1.288L10.603 8.79H5.569z",
              id: "A"
            }
          )
        ]
      }
    )
  }
), fl = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("g", { id: "undo-cion", transform: "translate(1 1)", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M3.84 5.825a.6.6 0 0 1 .063.774l-.064.075a.6.6 0 0 1-.774.063l-.074-.063L.176 3.859a.6.6 0 0 1-.064-.775l.064-.074L3.01.176a.6.6 0 0 1 .912.774l-.063.074-1.795 1.794h6.851a5.1 5.1 0 0 1 .216 10.196l-.216.004h-4a.6.6 0 0 1-.097-1.192l.097-.008h4a3.9 3.9 0 0 0 .201-7.795l-.2-.005H2.033l1.805 1.807z",
      id: "undo-icon-path"
    }
  ) }) }) })
), hl = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("g", { id: "redo-cion", transform: "matrix(-1 0 0 1 15.015 1)", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M3.84 5.825a.6.6 0 0 1 .063.774l-.064.075a.6.6 0 0 1-.774.063l-.074-.063L.176 3.859a.6.6 0 0 1-.064-.775l.064-.074L3.01.176a.6.6 0 0 1 .912.774l-.063.074-1.795 1.794h6.851a5.1 5.1 0 0 1 .216 10.196l-.216.004h-4a.6.6 0 0 1-.097-1.192l.097-.008h4a3.9 3.9 0 0 0 .201-7.795l-.2-.005H2.033l1.805 1.807z",
      id: "redo-icon-path"
    }
  ) }) }) })
), Ot = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      strokeWidth: "1.25",
      d: "M3.333 5.833h13.334M8.333 9.167v5M11.667 9.167v5M4.167 5.833l.833 10c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667l.833-10M7.5 5.833v-2.5c0-.46.373-.833.833-.833h3.334c.46 0 .833.373.833.833v2.5"
    }
  ) })
), gl = E(
  /* @__PURE__ */ a(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ k("g", { strokeWidth: "1.25", children: [
        /* @__PURE__ */ a("path", { d: "M14.375 6.458H8.958a2.5 2.5 0 0 0-2.5 2.5v5.417a2.5 2.5 0 0 0 2.5 2.5h5.417a2.5 2.5 0 0 0 2.5-2.5V8.958a2.5 2.5 0 0 0-2.5-2.5Z" }),
        /* @__PURE__ */ a("path", { d: "M11.667 3.125c.517 0 .986.21 1.325.55.34.338.55.807.55 1.325v1.458H8.333c-.485 0-.927.185-1.26.487-.343.312-.57.75-.609 1.24l-.005 5.357H5a1.87 1.87 0 0 1-1.326-.55 1.87 1.87 0 0 1-.549-1.325V5c0-.518.21-.987.55-1.326.338-.34.807-.549 1.325-.549h6.667Z" })
      ] })
    }
  )
), ji = E(
  /* @__PURE__ */ a(
    "svg",
    {
      viewBox: "0 0 1024 1024",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ a("path", { d: "M170.794667 896c3.456 0 6.912-0.426667 10.325333-1.28l170.666667-42.666667c7.509333-1.877333 14.378667-5.76 19.84-11.221333L896.128 316.330667c16.128-16.128 25.002667-37.546667 25.002667-60.330667s-8.874667-44.202667-25.002667-60.330667L828.458667 128c-32.256-32.256-88.405333-32.256-120.661334 0L183.296 652.501333a42.794667 42.794667 0 0 0-11.221333 19.797334l-42.666667 170.666666A42.666667 42.666667 0 0 0 170.794667 896z m597.333333-707.669333L835.797333 256l-67.669333 67.669333L700.458667 256l67.669333-67.669333zM251.989333 704.469333l388.138667-388.138666L707.797333 384l-388.181333 388.138667-90.197333 22.528 22.570666-90.197334z" })
    }
  )
), ml = E(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "image", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M10.496 7c-.824 0-1.572-.675-1.498-1.5 0-.825.674-1.5 1.498-1.5.823 0 1.497.675 1.497 1.5S11.319 7 10.496 7zM13.8 9.476V2.2H2.2v5.432l.1-.078C3.132 6.904 4.029 6.5 5 6.5c.823 0 1.552.27 2.342.778.226.145.449.304.735.518.06.045.546.413.69.52 1.634 1.21 2.833 1.6 4.798 1.207l.235-.047zm0 1.523V10.7c-5 1-6.3-3-8.8-3-1.5 0-2.8 1.6-2.8 1.6v4.6h11.6V11zM14 1c.6 0 1 .536 1 1.071v11.784c0 .642-.4 1.071-1 1.071H2c-.6 0-1-.429-1-1.07V2.07c0-.535.4-1.07 1-1.07h12z" }) }) })
), zi = E(
  /* @__PURE__ */ a(
    "svg",
    {
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ k("g", { strokeWidth: 1.8, fill: "none", children: [
        /* @__PURE__ */ a("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ a("path", { d: "M12 3l-4 7h8z" }),
        /* @__PURE__ */ a("path", { d: "M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }),
        /* @__PURE__ */ a("path", { d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" })
      ] })
    }
  )
), pl = E(
  /* @__PURE__ */ a(
    "svg",
    {
      stroke: "currentColor",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ a(
        "path",
        {
          stroke: "none",
          fill: "currentColor",
          d: "M407.48,111.18C335.587,108.103 269.573,152.338 245.08,220C220.587,152.338 154.573,108.103 82.68,111.18C80.285,168.229 107.577,222.632 154.74,254.82C178.908,271.419 193.35,298.951 193.27,328.27L193.27,379.13L296.9,379.13L296.9,328.27C296.816,298.953 311.255,271.42 335.42,254.82C382.596,222.644 409.892,168.233 407.48,111.18Z"
        }
      )
    }
  )
), vl = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M14.85,2.5 C15.4851275,2.5 16,3.01487254 16,3.65 L16,12.35 C16,12.9851275 15.4851275,13.5 14.85,13.5 L1.15,13.5 C0.514872538,13.5 0,12.9851275 0,12.35 L0,3.65 C0,3.01487254 0.514872538,2.5 1.15,2.5 L14.85,2.5 Z M14.85,3.7 L1.15,3.7 C1.17735931,3.7 1.2,3.72264069 1.2,3.75 L1.2,12.25 C1.2,12.2773593 1.17735931,12.3 1.15,12.3 L14.85,12.3 C14.8226407,12.3 14.8,12.2773593 14.8,12.25 L14.8,3.75 C14.8,3.72264069 14.8226407,3.7 14.85,3.7 Z M3.5,10.5 L3.5,5.5 L5.25,5.5 L7,7.8 L8.75,5.5 L10.5,5.5 L10.5,10.5 L8.75,10.5 L8.75,7.5 L7,9.8 L5.25,7.5 L5.25,10.5 L3.5,10.5 Z M12.5,10.5 L11,8.5 L12.5,8.5 L12.5,5.5 L11,5.5 L12.5,5.5 L12.5,8.5 L14,8.5 L12.5,10.5 Z" }) }) })
), wl = E(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M12.253 4.13h-1.2v-1a2.8 2.8 0 0 0-5.6 0v4a2.8 2.8 0 0 0 2.8 2.8v1.2a4 4 0 0 1-4-4v-4a4 4 0 0 1 8 0v1zm-8 8h1.2v1a2.8 2.8 0 0 0 5.6 0v-4a2.8 2.8 0 0 0-2.8-2.8v-1.2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-1z",
      transform: "rotate(46 8.253 8.13)"
    }
  ) }) })
), yl = [
  {
    icon: zs,
    title: "Rectangle",
    pointer: ce.rectangle
  },
  {
    icon: Ws,
    title: "Ellipse",
    pointer: ce.ellipse
  },
  {
    icon: Us,
    title: "Triangle",
    pointer: ce.triangle
  },
  {
    icon: Hs,
    title: "Terminal",
    pointer: yi.terminal
  },
  {
    icon: qs,
    title: "Diamond",
    pointer: ce.diamond
  },
  {
    icon: $s,
    title: "Parallelogram",
    pointer: ce.parallelogram
  },
  {
    icon: Vs,
    title: "RoundRectangle",
    pointer: ce.roundRectangle
  }
], Cl = Bi(yl, 5), bl = ({
  onPointerUp: e
}) => {
  const t = $();
  return /* @__PURE__ */ a(re, { padding: 1, children: /* @__PURE__ */ a(J.Col, { gap: 1, children: Cl.map((r, n) => /* @__PURE__ */ a(J.Row, { gap: 1, children: r.map((i, o) => /* @__PURE__ */ a(
    A,
    {
      className: M({ fillable: !1 }),
      type: "icon",
      size: "small",
      visible: !0,
      icon: i.icon,
      title: i.title,
      "aria-label": i.title,
      onPointerDown: () => {
        rt(t, nt.dnd), de.updatePointerType(t, i.pointer);
      },
      onPointerUp: () => {
        rt(t, nt.drawing), e(i.pointer);
      }
    },
    o
  )) }, n)) }) });
}, kl = [
  {
    icon: Gs,
    title: "Straight Arrow Line",
    pointer: et.straight
  },
  {
    icon: Zs,
    title: "Elbow Arrow Line",
    pointer: et.elbow
  },
  {
    icon: Ks,
    title: "Curve Arrow Line",
    pointer: et.curve
  }
], Ol = ({ onPointerUp: e }) => {
  const t = $();
  return /* @__PURE__ */ a(re, { padding: 1, children: /* @__PURE__ */ a(J.Row, { gap: 1, children: kl.map((r, n) => /* @__PURE__ */ a(
    A,
    {
      className: M({ fillable: !1 }),
      type: "icon",
      size: "small",
      visible: !0,
      icon: r.icon,
      title: r.title,
      "aria-label": r.title,
      onPointerDown: () => {
        rt(t, nt.drawing), de.updatePointerType(t, r.pointer);
      },
      onPointerUp: () => {
        e(r.pointer);
      }
    },
    n
  )) }) });
};
function Ll({
  initialOpen: e = !1,
  placement: t = "bottom",
  modal: r,
  sideOffset: n,
  open: i,
  onOpenChange: o
} = {}) {
  const [l, s] = I.useState(e), [c, u] = I.useState(), [f, h] = I.useState(), d = i ?? l, m = o ?? s, g = Tt({
    placement: t,
    open: d,
    onOpenChange: m,
    whileElementsMounted: Ua,
    middleware: [
      xr(n || 4),
      Mr({
        crossAxis: t.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5
      }),
      Wa({ padding: 5 })
    ]
  }), p = g.context, w = xi(p, {
    enabled: i == null
  }), C = Mi(p), b = Di(p), y = Ti([w, C, b]);
  return I.useMemo(
    () => ({
      open: d,
      setOpen: m,
      ...y,
      ...g,
      modal: r,
      labelId: c,
      descriptionId: f,
      setLabelId: u,
      setDescriptionId: h
    }),
    [d, m, y, g, r, c, f]
  );
}
const Hi = I.createContext(null), Wi = () => {
  const e = I.useContext(Hi);
  if (e == null)
    throw new Error("Popover components must be wrapped in <Popover />");
  return e;
};
function ve({
  children: e,
  modal: t = !1,
  ...r
}) {
  const n = Ll({ modal: t, ...r });
  return /* @__PURE__ */ a(Hi.Provider, { value: n, children: e });
}
const we = I.forwardRef(function({ children: t, asChild: r = !1, ...n }, i) {
  const o = Wi(), l = t.ref, s = Dt([o.refs.setReference, i, l]);
  return r && I.isValidElement(t) ? I.cloneElement(
    t,
    o.getReferenceProps({
      ref: s,
      ...n,
      ...t.props,
      "data-state": o.open ? "open" : "closed"
    })
  ) : /* @__PURE__ */ a(
    "button",
    {
      ref: s,
      type: "button",
      "data-state": o.open ? "open" : "closed",
      ...o.getReferenceProps(n),
      children: t
    }
  );
}), ye = I.forwardRef(function({ container: t, style: r, ...n }, i) {
  const { context: o, ...l } = Wi(), s = Dt([l.refs.setFloating, i]);
  return o.open ? /* @__PURE__ */ a(Si, { root: t, children: /* @__PURE__ */ a(Pi, { context: o, modal: l.modal, children: /* @__PURE__ */ a(
    "div",
    {
      ref: s,
      style: { ...l.floatingStyles, ...r },
      "aria-labelledby": l.labelId,
      "aria-describedby": l.descriptionId,
      ...l.getFloatingProps(n),
      children: n.children
    }
  ) }) }) : null;
}), Ui = {
  [Me.default]: {
    strokeColor: Mt,
    fill: "#FFFFFF"
  },
  [Me.colorful]: {
    strokeColor: "#06ADBF",
    fill: "#CDEFF2"
  },
  [Me.soft]: {
    strokeColor: "#6D89C1",
    fill: "#DADFEB"
  },
  [Me.retro]: {
    strokeColor: "#E9C358",
    fill: "#F6EDCF"
  },
  [Me.dark]: {
    strokeColor: "#FFFFFF",
    fill: "#434343"
  },
  [Me.starry]: {
    strokeColor: "#42ABE5",
    fill: "#163F5A"
  }
};
var Rr = /* @__PURE__ */ ((e) => (e.nibPen = "nibPen", e.feltTipPen = "feltTipPen", e.artisticBrush = "artisticBrush", e.markerHighlight = "markerHighlight", e))(Rr || {});
const qi = "freehand", ae = {
  isFreehand: (e) => e.type === qi
};
var Te = /* @__PURE__ */ ((e) => (e.mermaidToDrawnix = "mermaidToDrawnix", e.markdownToDrawnix = "markdownToDrawnix", e))(Te || {});
const $i = pi(null), ne = () => {
  const e = Sr($i);
  if (!e)
    throw new Error(
      "The `useDrawnix` hook must be used inside the <Drawnix> component's context."
    );
  return e;
}, El = () => {
  const { appState: e, setAppState: t } = ne();
  return (r) => {
    t({ ...e, pointer: r });
  };
}, Ar = Ne.createContext({}), pr = (e = "", t = !1) => `menu-item menu-item-base ${e} ${t ? "menu-item--active" : ""}`.trim(), Vi = (e, t) => {
  const r = Sr(Ar);
  return Ds(e, (n) => {
    var o;
    const i = new CustomEvent(it.MENU_ITEM_SELECT, {
      bubbles: !0,
      cancelable: !0
    });
    t == null || t(i), i.defaultPrevented || (o = r.onSelect) == null || o.call(r, i);
  });
}, ft = ({
  children: e,
  className: t = "",
  onSelect: r,
  style: n
}) => {
  const i = M(`menu ${t}`).trim();
  return /* @__PURE__ */ a(Ar.Provider, { value: { onSelect: r }, children: /* @__PURE__ */ a("div", { className: i, style: n, "data-testid": "menu", children: /* @__PURE__ */ a(re, { className: "menu-container", padding: 2, children: e }) }) });
};
ft.displayName = "Menu";
const Gi = ({
  icon: e,
  shortcut: t,
  children: r
}) => /* @__PURE__ */ k(Ce, { children: [
  e && /* @__PURE__ */ a("div", { className: "menu-item__icon", children: e }),
  /* @__PURE__ */ a("div", { className: "menu-item__text", children: r }),
  t && /* @__PURE__ */ a("div", { className: "menu-item__shortcut", children: t })
] }), te = ({
  icon: e,
  onSelect: t,
  children: r,
  shortcut: n,
  className: i,
  selected: o,
  submenu: l,
  ...s
}) => {
  const [c, u] = _(!1), f = se(), h = Vi(s.onClick, t), d = /* @__PURE__ */ a(Gi, { icon: e, shortcut: n, children: r }), m = () => {
    f.current && window.clearTimeout(f.current), u(!0);
  }, g = () => {
    f.current = window.setTimeout(() => {
      u(!1);
    }, 100);
  };
  return l ? /* @__PURE__ */ k(
    ve,
    {
      open: c,
      onOpenChange: u,
      placement: "right-start",
      children: [
        /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ a(
          "button",
          {
            ...s,
            type: "button",
            className: pr(i, o || c),
            title: s.title ?? s["aria-label"],
            onClick: h,
            onMouseEnter: m,
            onMouseLeave: g,
            children: d
          }
        ) }),
        /* @__PURE__ */ a(ye, { onMouseEnter: m, onMouseLeave: g, children: l })
      ]
    }
  ) : /* @__PURE__ */ a(
    "button",
    {
      ...s,
      onClick: h,
      type: "button",
      className: pr(i, o),
      title: s.title ?? s["aria-label"],
      children: d
    }
  );
};
te.displayName = "MenuItem";
const Zi = ({
  children: e
}) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      display: "inline-flex",
      marginLeft: "auto",
      padding: "2px 4px",
      background: "var(--color-promo)",
      color: "var(--color-surface-lowest)",
      borderRadius: 6,
      fontSize: 9,
      fontFamily: "Cascadia, monospace"
    },
    children: e
  }
);
Zi.displayName = "MenuItemBadge";
te.Badge = Zi;
const Ir = () => {
  const { appState: e, setAppState: t } = ne();
  return /* @__PURE__ */ a(
    te,
    {
      "data-testid": "marmaid-to-drawnix-button",
      onSelect: () => {
        t({
          ...e,
          openDialogType: Te.mermaidToDrawnix
        });
      },
      icon: pl,
      "aria-label": "Mermaid 到 Drawnix",
      children: "Mermaid 到 Drawnix"
    }
  );
};
Ir.displayName = "MermaidToDrawnix";
const Sl = () => {
  const { appState: e, setAppState: t } = ne();
  return /* @__PURE__ */ a(
    te,
    {
      "data-testid": "markdown-to-drawnix-button",
      onSelect: () => {
        t({
          ...e,
          openDialogType: Te.markdownToDrawnix
        });
      },
      icon: vl,
      "aria-label": "Markdown 到 Drawnix",
      children: "Markdown 到 Drawnix"
    }
  );
};
Ir.displayName = "MarkdownToDrawnix";
const Pl = () => {
  const e = $(), t = N.getBoardContainer(e), [r, n] = _(!1);
  return /* @__PURE__ */ k(
    ve,
    {
      sideOffset: 12,
      open: r,
      onOpenChange: (i) => {
        n(i);
      },
      placement: "bottom-start",
      children: [
        /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ a(
          A,
          {
            type: "icon",
            visible: !0,
            selected: r,
            icon: zi,
            title: "Extra Tools",
            "aria-label": "Extra Tools",
            onPointerDown: () => {
              n(!r);
            }
          }
        ) }),
        /* @__PURE__ */ a(ye, { container: t, children: /* @__PURE__ */ k(
          ft,
          {
            onSelect: () => {
              n(!1);
            },
            children: [
              /* @__PURE__ */ a(Ir, {}),
              /* @__PURE__ */ a(Sl, {})
            ]
          }
        ) })
      ]
    },
    0
  );
}, Ut = (e) => e === ke.hand || e === ke.selection, xl = [
  {
    icon: Fs,
    pointer: ke.hand,
    title: "Hand"
  },
  {
    icon: Rs,
    pointer: ke.selection,
    title: "Selection"
  },
  {
    icon: As,
    pointer: Ba.mind,
    title: "Mind"
  },
  {
    icon: Bs,
    pointer: ce.text,
    title: "Text"
  },
  {
    icon: ji,
    pointer: Rr.feltTipPen,
    title: "Freehand"
  },
  {
    icon: js,
    title: "Arrow Line",
    key: "arrow",
    pointer: et.straight
  },
  {
    icon: Is,
    title: "Shape",
    key: "shape",
    pointer: ce.rectangle
  },
  {
    icon: ml,
    title: "Image",
    key: "image"
  },
  {
    icon: zi,
    title: "更多工具",
    key: "extra-tools"
  }
], Ml = (e) => Object.keys(et).includes(e.pointer), Dl = (e) => Object.keys(ce).includes(e.pointer) || Object.keys(yi).includes(e.pointer), Tl = () => {
  const e = $(), { appState: t } = ne(), r = El(), n = N.getBoardContainer(e), [i, o] = _(!1), [l, s] = _(!1), c = (g) => {
    rt(e, nt.dnd), de.updatePointerType(e, g), r(g);
  }, u = () => {
    rt(e, nt.drawing);
  }, f = (g) => N.isPointer(e, g.pointer) && !i && !l, h = async () => {
    const g = await Ri({
      description: "Image",
      extensions: Object.keys(
        Tr
      )
    });
    mr(e, g);
  }, [d, m] = _(!1);
  return /* @__PURE__ */ a(
    re,
    {
      padding: 1,
      className: M("draw-toolbar", Oe),
      children: /* @__PURE__ */ a(J.Row, { gap: 1, children: xl.map((g, p) => t.isMobile && g.pointer === ke.hand ? /* @__PURE__ */ a(Ce, {}) : g.key === "shape" ? /* @__PURE__ */ k(
        ve,
        {
          open: l,
          sideOffset: 12,
          onOpenChange: (w) => {
            s(w);
          },
          children: [
            /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ a(
              A,
              {
                type: "icon",
                visible: !0,
                selected: l || Dl(e) && !N.isPointer(e, ce.text),
                icon: g.icon,
                title: "Shape",
                "aria-label": "Shape",
                onPointerDown: () => {
                  s(!l);
                }
              }
            ) }),
            /* @__PURE__ */ a(ye, { container: n, children: /* @__PURE__ */ a(
              bl,
              {
                onPointerUp: (w) => {
                  s(!1), r(w);
                }
              }
            ) })
          ]
        },
        p
      ) : g.key === "arrow" ? /* @__PURE__ */ k(
        ve,
        {
          open: i,
          sideOffset: 12,
          onOpenChange: (w) => {
            o(w);
          },
          children: [
            /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ a(
              A,
              {
                type: "icon",
                visible: !0,
                selected: i || Ml(e),
                icon: g.icon,
                title: "Arrow",
                "aria-label": "Arrow",
                onPointerDown: () => {
                  o(!l);
                }
              }
            ) }),
            /* @__PURE__ */ a(ye, { container: n, children: /* @__PURE__ */ a(
              Ol,
              {
                onPointerUp: (w) => {
                  o(!1), r(w);
                }
              }
            ) })
          ]
        },
        p
      ) : g.key === "extra-tools" ? /* @__PURE__ */ a(Pl, {}, p) : /* @__PURE__ */ a(
        A,
        {
          type: "radio",
          icon: g.icon,
          checked: f(g),
          title: `${g.title}`,
          "aria-label": `${g.title}`,
          onPointerDown: () => {
            g.pointer && !Ut(g.pointer) && c(g.pointer);
          },
          onPointerUp: () => {
            g.pointer && !Ut(g.pointer) ? u() : g.pointer && Ut(g.pointer) && (de.updatePointerType(e, g.pointer), r(g.pointer)), g.key === "image" && h();
          }
        },
        p
      )) })
    }
  );
}, _l = () => {
  var i;
  const e = $(), t = N.getBoardContainer(e), [r, n] = _(!1);
  return /* @__PURE__ */ a(
    re,
    {
      padding: 1,
      className: M("zoom-toolbar", Oe),
      children: /* @__PURE__ */ k(J.Row, { gap: 1, children: [
        /* @__PURE__ */ a(
          A,
          {
            type: "button",
            icon: Qs,
            visible: !0,
            title: "缩小 — Cmd+-",
            "aria-label": "缩小 — Cmd+-",
            onPointerUp: () => {
              de.updateZoom(e, e.viewport.zoom - 0.1);
            },
            className: "zoom-out-button"
          },
          0
        ),
        /* @__PURE__ */ k(
          ve,
          {
            sideOffset: 12,
            open: r,
            onOpenChange: (o) => {
              n(o);
            },
            placement: "bottom-end",
            children: [
              /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ k(
                "div",
                {
                  title: "自适应",
                  "aria-label": "自适应",
                  className: M("zoom-menu-trigger", {
                    active: r
                  }),
                  onPointerUp: () => {
                    n(!r);
                  },
                  children: [
                    Number(((((i = e == null ? void 0 : e.viewport) == null ? void 0 : i.zoom) || 1) * 100).toFixed(0)),
                    "%"
                  ]
                },
                1
              ) }),
              /* @__PURE__ */ a(ye, { container: t, children: /* @__PURE__ */ k(
                ft,
                {
                  onSelect: () => {
                    n(!1);
                  },
                  children: [
                    /* @__PURE__ */ a(
                      te,
                      {
                        "data-testid": "open-button",
                        onSelect: () => {
                          de.fitViewport(e);
                        },
                        "aria-label": "自适应缩放",
                        shortcut: "Cmd+Shift+=",
                        children: "自适应缩放"
                      }
                    ),
                    /* @__PURE__ */ a(
                      te,
                      {
                        "data-testid": "open-button",
                        onSelect: () => {
                          de.updateZoom(e, 1);
                        },
                        "aria-label": "缩放至 100%",
                        shortcut: "Cmd+0",
                        children: "缩放至 100%"
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ a(
          A,
          {
            type: "button",
            icon: el,
            visible: !0,
            title: "放大 — Cmd++",
            "aria-label": "放大 — Cmd++",
            onPointerUp: () => {
              de.updateZoom(e, e.viewport.zoom + 0.1);
            },
            className: "zoom-in-button"
          },
          2
        )
      ] })
    }
  );
}, Ki = "TRANSPARENT", Br = "NO_COLOR", jr = "#FFFFFF", Yi = [
  { name: "Topic Color", value: Br },
  { name: "Basic Black", value: Mt },
  { name: "White", value: jr },
  { name: "Gray", value: "#808080" },
  { name: "Deep Blue", value: "#1E90FF" },
  { name: "Red", value: "#FF4500" },
  { name: "Green", value: "#2ECC71" },
  { name: "Yellow", value: "#FFD700" },
  { name: "Purple", value: "#8A2BE2" },
  { name: "Orange", value: "#FFA500" },
  { name: "Pastel Pink", value: "#FFB3BA" },
  { name: "Cyan", value: "#00CED1" },
  { name: "Brown", value: "#8B4513" },
  { name: "Forest Green", value: "#228B22" },
  { name: "Light Gray", value: "#D3D3D3" }
];
function Nl(e) {
  return Math.round((100 - e) / 100 * 255);
}
function Fl(e) {
  return Math.round((1 - e / 255) * 100);
}
function Ze(e, t) {
  const n = Nl(100 - t).toString(16).padStart(2, "0");
  return `${e}${n}`;
}
function Ke(e) {
  e = e.replace(/^#/, "");
  let t;
  if (e.length === 8)
    t = parseInt(e.slice(6, 8), 16);
  else if (e.length === 4)
    t = parseInt(e.slice(3, 4).repeat(2), 16);
  else
    return 100;
  return 100 - Fl(t);
}
function Rl(e) {
  return e !== "none";
}
function Be(e) {
  const t = e.replace(/^#/, "").toUpperCase();
  return t.length === 8 ? "#" + t.slice(0, 6) : t.length === 4 ? "#" + t.slice(0, 3) : t.length === 6 || t.length === 3 ? "#" + t : e;
}
function nu(e) {
  return e === Ki;
}
function Xi(e) {
  return e === jr;
}
function Ji(e) {
  return e === 0;
}
function ht(e) {
  return e === 100;
}
function $e(e) {
  return e === Br;
}
function Al(e) {
  return !e || e === Mt;
}
const Il = ({
  min: e = 0,
  max: t = 100,
  step: r = 1,
  defaultValue: n = 100,
  disabled: i = !1,
  onChange: o,
  beforeStart: l,
  afterEnd: s
}) => {
  const [c, u] = _(!1), [f, h] = _(n), d = se(0), m = se(null), g = se(null);
  Y(() => {
    if (m.current && g.current) {
      const b = m.current.getBoundingClientRect(), y = g.current.getBoundingClientRect();
      d.current = ta(
        y.width / 2 / b.width * 100
      );
    }
  }, [g, m]), Y(() => {
    h(n);
  }, [n]);
  const p = sn(
    $a(
      (b) => {
        if (m.current && g.current) {
          const y = m.current.getBoundingClientRect(), P = b.clientX - y.left;
          let x = Math.min(Math.max(P / y.width, 0), 1);
          x >= (100 - d.current) / 100 ? x = 1 : x <= d.current / 100 && (x = 0);
          const T = Math.round(x * (t - e) / r) * r + e;
          h(T), o && o(T);
        }
      },
      50,
      { leading: !0, trailing: !0 }
    ),
    [e, t, r, o]
  ), w = sn(() => {
    const b = (P) => {
      u(!0), p(P);
    }, y = () => {
      document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", y), s && s(), setTimeout(() => {
        u(!1);
      }, 0);
    };
    document.addEventListener("pointermove", b), document.addEventListener("pointerup", y);
  }, [p]);
  let C = (f - e) / (t - e) * 100;
  return C >= 100 - d.current && (C = 100 - d.current), C <= d.current && (C = d.current), /* @__PURE__ */ a("div", { className: M("slider-container", { disabled: i }), children: /* @__PURE__ */ k(
    "div",
    {
      ref: m,
      className: "slider-track",
      onClick: (b) => {
        i || c || p(b);
      },
      onPointerDown: (b) => {
        b.preventDefault(), !i && (l && l(), w());
      },
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "slider-range",
            style: {
              width: `${C}%`
            }
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            ref: g,
            className: "slider-thumb",
            style: {
              left: `${C}%`
            }
          }
        )
      ]
    }
  ) });
}, mn = Bi(Yi, 4), zr = Ne.forwardRef((e, t) => {
  const r = $(), { currentColor: n, onColorChange: i, onOpacityChange: o } = e, [l, s] = _(
    n && Be(n) || mn[0][0].value
  ), [c, u] = _(() => {
    const f = n && Ke(n);
    return Er(f) ? 100 : f;
  });
  return /* @__PURE__ */ k(J.Col, { gap: 3, children: [
    /* @__PURE__ */ a(
      Il,
      {
        step: 5,
        defaultValue: c,
        onChange: (f) => {
          u(f), o(f);
        },
        beforeStart: () => {
          tn.set(r, !0), ra.setSplittingOnce(r, !0);
        },
        afterEnd: () => {
          tn.set(r, !1);
        },
        disabled: l === Yi[0].value
      }
    ),
    /* @__PURE__ */ a(J.Col, { gap: 2, children: mn.map((f, h) => /* @__PURE__ */ a(J.Row, { gap: 2, children: f.map((d) => /* @__PURE__ */ k(
      "button",
      {
        className: `color-select-item ${l === d.value ? "active" : ""} ${$e(d.value) ? "no-color" : ""}`,
        style: {
          backgroundColor: $e(d.value) ? Ki : d.value,
          color: Al(d.value) ? jr : Mt
        },
        onClick: () => {
          s(d.value), d.value === Br && u(100), i(d.value);
        },
        title: d.name,
        children: [
          $e(d.value) && il,
          l === d.value && ol
        ]
      },
      d.value
    )) }, h)) })
  ] });
}), Qi = (e, t) => pe.isMindElement(e, t) || q.isDrawElement(t) && Ci(t) || Pr(e, t), eo = (e, t) => {
  let r = t.fill;
  return r || (pe.isMindElement(e, t) && (r = ja(e, t)), (q.isDrawElement(t) || q.isCustomGeometryElement(e, t)) && (r = Ma(e, t))), r;
}, to = (e, t) => {
  let r = t.strokeColor;
  return r || (pe.isMindElement(e, t) && (r = Oi(e, t)), (q.isDrawElement(t) || q.isCustomGeometryElement(e, t)) && (r = bi(e, t))), r;
}, iu = (e, t) => Dr(t).color, Bl = (e, t) => {
  ut.setFillColor(e, null, {
    getMemorizeKey: dt,
    callback: (r, n) => {
      if (!Qi(e, r))
        return;
      const i = eo(e, r);
      if (!Rl(i))
        return;
      const o = Be(i), l = ht(t) ? o : Ze(o, t);
      me.setNode(e, { fill: l }, n);
    }
  });
}, jl = (e, t) => {
  ut.setFillColor(e, null, {
    getMemorizeKey: dt,
    callback: (r, n) => {
      if (!Qi(e, r))
        return;
      const i = eo(e, r), o = Ke(i);
      $e(t) ? me.setNode(e, { fill: null }, n) : Er(o) || ht(o) ? me.setNode(e, { fill: t }, n) : me.setNode(
        e,
        { fill: Ze(t, o) },
        n
      );
    }
  });
}, zl = (e, t) => {
  ut.setStrokeColor(e, null, {
    getMemorizeKey: dt,
    callback: (r, n) => {
      const i = to(e, r), o = Be(i), l = ht(t) ? o : Ze(o, t);
      me.setNode(e, { strokeColor: l }, n);
    }
  });
}, Hl = (e, t) => {
  ut.setStrokeColor(e, null, {
    getMemorizeKey: dt,
    callback: (r, n) => {
      const i = to(e, r), o = Ke(i);
      $e(t) ? me.setNode(e, { strokeColor: null }, n) : Er(o) || ht(o) ? me.setNode(e, { strokeColor: t }, n) : me.setNode(
        e,
        { strokeColor: Ze(t, o) },
        n
      );
    }
  });
}, Wl = (e, t, r) => {
  const n = Ke(t);
  $e(r) ? gr.setTextColor(e, null) : gr.setTextColor(
    e,
    Ze(r, n)
  );
}, Ul = (e, t, r) => {
  const n = Be(t), i = ht(r) ? n : Ze(n, r);
  gr.setTextColor(e, i);
}, ql = ({
  board: e,
  currentColor: t,
  fontColorIcon: r,
  title: n
}) => {
  const [i, o] = _(!1), l = N.getBoardContainer(e);
  return /* @__PURE__ */ k(
    ve,
    {
      sideOffset: 12,
      open: i,
      onOpenChange: (s) => {
        o(s);
      },
      placement: "top",
      children: [
        /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ a(
          A,
          {
            className: M("property-button"),
            selected: i,
            visible: !0,
            icon: r,
            type: "button",
            title: n,
            "aria-label": n,
            onPointerUp: () => {
              o(!i);
            }
          }
        ) }),
        /* @__PURE__ */ a(ye, { container: l, children: /* @__PURE__ */ a(
          re,
          {
            padding: 4,
            className: M(`${Oe}`),
            children: /* @__PURE__ */ a(
              zr,
              {
                onColorChange: (s) => {
                  Wl(
                    e,
                    t || s,
                    s
                  );
                },
                onOpacityChange: (s) => {
                  t && Ul(e, t, s);
                },
                currentColor: t
              }
            )
          }
        ) })
      ]
    }
  );
}, $l = ({
  board: e,
  currentColor: t,
  title: r,
  hasStrokeStyle: n,
  children: i
}) => {
  const [o, l] = _(!1), s = t && Be(t), c = t ? Ke(t) : 100, u = N.getBoardContainer(e), f = Ji(c) ? al : Xi(s) ? sl : void 0, h = (d) => {
    ut.setStrokeStyle(e, d, { getMemorizeKey: dt });
  };
  return /* @__PURE__ */ k(
    ve,
    {
      sideOffset: 12,
      open: o,
      onOpenChange: (d) => {
        l(d);
      },
      placement: "top",
      children: [
        /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ a(
          A,
          {
            className: M("property-button"),
            visible: !0,
            icon: f,
            type: "button",
            title: r,
            "aria-label": r,
            onPointerUp: () => {
              l(!o);
            },
            children: !f && i
          }
        ) }),
        /* @__PURE__ */ a(ye, { container: u, children: /* @__PURE__ */ a(
          re,
          {
            padding: 4,
            className: M(
              `${Oe}`,
              "stroke-setting",
              { "has-stroke-style": n }
            ),
            children: /* @__PURE__ */ k(J.Col, { children: [
              n && /* @__PURE__ */ k(J.Row, { className: M("stroke-style-picker"), children: [
                /* @__PURE__ */ a(
                  A,
                  {
                    visible: !0,
                    icon: ll,
                    type: "button",
                    title: r,
                    "aria-label": r,
                    onPointerUp: () => {
                      h(Wt.solid);
                    }
                  }
                ),
                /* @__PURE__ */ a(
                  A,
                  {
                    visible: !0,
                    icon: cl,
                    type: "button",
                    title: r,
                    "aria-label": r,
                    onPointerUp: () => {
                      h(Wt.dashed);
                    }
                  }
                ),
                /* @__PURE__ */ a(
                  A,
                  {
                    visible: !0,
                    icon: ul,
                    type: "button",
                    title: r,
                    "aria-label": r,
                    onPointerUp: () => {
                      h(Wt.dotted);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ a(
                zr,
                {
                  onColorChange: (d) => {
                    Hl(e, d);
                  },
                  onOpacityChange: (d) => {
                    zl(e, d);
                  },
                  currentColor: t
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}, Vl = ({
  board: e,
  currentColor: t,
  title: r,
  children: n
}) => {
  const [i, o] = _(!1), l = t && Be(t), s = t ? Ke(t) : 100, c = N.getBoardContainer(e), u = !l || Ji(s) ? nl : void 0;
  return /* @__PURE__ */ k(
    ve,
    {
      sideOffset: 12,
      open: i,
      onOpenChange: (f) => {
        o(f);
      },
      placement: "top",
      children: [
        /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ a(
          A,
          {
            className: M("property-button"),
            visible: !0,
            icon: u,
            type: "button",
            title: r,
            "aria-label": r,
            onPointerUp: () => {
              o(!i);
            },
            children: !u && n
          }
        ) }),
        /* @__PURE__ */ a(ye, { container: c, children: /* @__PURE__ */ a(
          re,
          {
            padding: 4,
            className: M(`${Oe}`),
            children: /* @__PURE__ */ a(
              zr,
              {
                onColorChange: (f) => {
                  jl(e, f);
                },
                onOpacityChange: (f) => {
                  Bl(e, f);
                },
                currentColor: t
              }
            )
          }
        ) })
      ]
    }
  );
};
var qt, pn;
function Hr() {
  if (pn) return qt;
  pn = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return qt = e, qt;
}
var $t, vn;
function Gl() {
  if (vn) return $t;
  vn = 1;
  var e = typeof vt == "object" && vt && vt.Object === Object && vt;
  return $t = e, $t;
}
var Vt, wn;
function ro() {
  if (wn) return Vt;
  wn = 1;
  var e = Gl(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Vt = r, Vt;
}
var Gt, yn;
function Zl() {
  if (yn) return Gt;
  yn = 1;
  var e = ro(), t = function() {
    return e.Date.now();
  };
  return Gt = t, Gt;
}
var Zt, Cn;
function Kl() {
  if (Cn) return Zt;
  Cn = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Zt = t, Zt;
}
var Kt, bn;
function Yl() {
  if (bn) return Kt;
  bn = 1;
  var e = Kl(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Kt = r, Kt;
}
var Yt, kn;
function no() {
  if (kn) return Yt;
  kn = 1;
  var e = ro(), t = e.Symbol;
  return Yt = t, Yt;
}
var Xt, On;
function Xl() {
  if (On) return Xt;
  On = 1;
  var e = no(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function o(l) {
    var s = r.call(l, i), c = l[i];
    try {
      l[i] = void 0;
      var u = !0;
    } catch {
    }
    var f = n.call(l);
    return u && (s ? l[i] = c : delete l[i]), f;
  }
  return Xt = o, Xt;
}
var Jt, Ln;
function Jl() {
  if (Ln) return Jt;
  Ln = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Jt = r, Jt;
}
var Qt, En;
function Ql() {
  if (En) return Qt;
  En = 1;
  var e = no(), t = Xl(), r = Jl(), n = "[object Null]", i = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function l(s) {
    return s == null ? s === void 0 ? i : n : o && o in Object(s) ? t(s) : r(s);
  }
  return Qt = l, Qt;
}
var er, Sn;
function e1() {
  if (Sn) return er;
  Sn = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return er = e, er;
}
var tr, Pn;
function t1() {
  if (Pn) return tr;
  Pn = 1;
  var e = Ql(), t = e1(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return tr = n, tr;
}
var rr, xn;
function r1() {
  if (xn) return rr;
  xn = 1;
  var e = Yl(), t = Hr(), r = t1(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, l = /^0o[0-7]+$/i, s = parseInt;
  function c(u) {
    if (typeof u == "number")
      return u;
    if (r(u))
      return n;
    if (t(u)) {
      var f = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = t(f) ? f + "" : f;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = e(u);
    var h = o.test(u);
    return h || l.test(u) ? s(u.slice(2), h ? 2 : 8) : i.test(u) ? n : +u;
  }
  return rr = c, rr;
}
var nr, Mn;
function io() {
  if (Mn) return nr;
  Mn = 1;
  var e = Hr(), t = Zl(), r = r1(), n = "Expected a function", i = Math.max, o = Math.min;
  function l(s, c, u) {
    var f, h, d, m, g, p, w = 0, C = !1, b = !1, y = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(u) && (C = !!u.leading, b = "maxWait" in u, d = b ? i(r(u.maxWait) || 0, c) : d, y = "trailing" in u ? !!u.trailing : y);
    function P(z) {
      var H = f, Le = h;
      return f = h = void 0, w = z, m = s.apply(Le, H), m;
    }
    function x(z) {
      return w = z, g = setTimeout(U, c), C ? P(z) : m;
    }
    function T(z) {
      var H = z - p, Le = z - w, mt = c - H;
      return b ? o(mt, d - Le) : mt;
    }
    function Z(z) {
      var H = z - p, Le = z - w;
      return p === void 0 || H >= c || H < 0 || b && Le >= d;
    }
    function U() {
      var z = t();
      if (Z(z))
        return G(z);
      g = setTimeout(U, T(z));
    }
    function G(z) {
      return g = void 0, y && f ? P(z) : (f = h = void 0, m);
    }
    function le() {
      g !== void 0 && clearTimeout(g), w = 0, f = p = h = g = void 0;
    }
    function ie() {
      return g === void 0 ? m : G(t());
    }
    function fe() {
      var z = t(), H = Z(z);
      if (f = arguments, h = this, p = z, H) {
        if (g === void 0)
          return x(p);
        if (b)
          return clearTimeout(g), g = setTimeout(U, c), P(p);
      }
      return g === void 0 && (g = setTimeout(U, c)), m;
    }
    return fe.cancel = le, fe.flush = ie, fe;
  }
  return nr = l, nr;
}
io();
var ir, Dn;
function n1() {
  if (Dn) return ir;
  Dn = 1;
  var e = io(), t = Hr(), r = "Expected a function";
  function n(i, o, l) {
    var s = !0, c = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(l) && (s = "leading" in l ? !!l.leading : s, c = "trailing" in l ? !!l.trailing : c), e(i, o, {
      leading: s,
      maxWait: o,
      trailing: c
    });
  }
  return ir = n, ir;
}
n1();
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Tn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function V(e) {
  var t, r;
  return Tn(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(Tn(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var oo = Symbol.for("immer-nothing"), _n = Symbol.for("immer-draftable"), Q = Symbol.for("immer-state"), i1 = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function K(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = i1[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ge = Object.getPrototypeOf;
function Re(e) {
  return !!e && !!e[Q];
}
function Ae(e) {
  var t;
  return e ? ao(e) || Array.isArray(e) || !!e[_n] || !!((t = e.constructor) != null && t[_n]) || Nt(e) || Ft(e) : !1;
}
var o1 = Object.prototype.constructor.toString();
function ao(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ge(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === o1;
}
function Lt(e, t) {
  _t(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function _t(e) {
  const t = e[Q];
  return t ? t.type_ : Array.isArray(e) ? 1 : Nt(e) ? 2 : Ft(e) ? 3 : 0;
}
function vr(e, t) {
  return _t(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function so(e, t, r) {
  const n = _t(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function a1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Nt(e) {
  return e instanceof Map;
}
function Ft(e) {
  return e instanceof Set;
}
function De(e) {
  return e.copy_ || e.base_;
}
function wr(e, t) {
  if (Nt(e))
    return new Map(e);
  if (Ft(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = ao(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Q];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const l = i[o], s = n[l];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[l] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[l]
      });
    }
    return Object.create(Ge(e), n);
  } else {
    const n = Ge(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function Wr(e, t = !1) {
  return Rt(e) || Re(e) || !Ae(e) || (_t(e) > 1 && (e.set = e.add = e.clear = e.delete = s1), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => Wr(n, !0))), e;
}
function s1() {
  K(2);
}
function Rt(e) {
  return Object.isFrozen(e);
}
var l1 = {};
function Ie(e) {
  const t = l1[e];
  return t || K(0, e), t;
}
var ot;
function lo() {
  return ot;
}
function c1(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Nn(e, t) {
  t && (Ie("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function yr(e) {
  Cr(e), e.drafts_.forEach(u1), e.drafts_ = null;
}
function Cr(e) {
  e === ot && (ot = e.parent_);
}
function Fn(e) {
  return ot = c1(ot, e);
}
function u1(e) {
  const t = e[Q];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Rn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Q].modified_ && (yr(t), K(4)), Ae(e) && (e = Et(t, e), t.parent_ || St(t, e)), t.patches_ && Ie("Patches").generateReplacementPatches_(
    r[Q].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Et(t, r, []), yr(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== oo ? e : void 0;
}
function Et(e, t, r) {
  if (Rt(t))
    return t;
  const n = t[Q];
  if (!n)
    return Lt(
      t,
      (i, o) => An(e, n, t, i, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return St(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let o = i, l = !1;
    n.type_ === 3 && (o = new Set(i), i.clear(), l = !0), Lt(
      o,
      (s, c) => An(e, n, i, s, c, r, l)
    ), St(e, i, !1), r && e.patches_ && Ie("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function An(e, t, r, n, i, o, l) {
  if (process.env.NODE_ENV !== "production" && i === r && K(5), Re(i)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !vr(t.assigned_, n) ? o.concat(n) : void 0, c = Et(e, i, s);
    if (so(r, n, c), Re(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && r.add(i);
  if (Ae(i) && !Rt(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Et(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && St(e, i);
  }
}
function St(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Wr(t, r);
}
function d1(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : lo(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, o = Ur;
  r && (i = [n], o = at);
  const { revoke: l, proxy: s } = Proxy.revocable(i, o);
  return n.draft_ = s, n.revoke_ = l, s;
}
var Ur = {
  get(e, t) {
    if (t === Q)
      return e;
    const r = De(e);
    if (!vr(r, t))
      return f1(e, r, t);
    const n = r[t];
    return e.finalized_ || !Ae(n) ? n : n === or(e.base_, t) ? (ar(e), e.copy_[t] = kr(n, e)) : n;
  },
  has(e, t) {
    return t in De(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(De(e));
  },
  set(e, t, r) {
    const n = co(De(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = or(De(e), t), o = i == null ? void 0 : i[Q];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (a1(r, i) && (r !== void 0 || vr(e.base_, t)))
        return !0;
      ar(e), br(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return or(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ar(e), br(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = De(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    K(11);
  },
  getPrototypeOf(e) {
    return Ge(e.base_);
  },
  setPrototypeOf() {
    K(12);
  }
}, at = {};
Lt(Ur, (e, t) => {
  at[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
at.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && K(13), at.set.call(this, e, t, void 0);
};
at.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && K(14), Ur.set.call(this, e[0], t, r, e[0]);
};
function or(e, t) {
  const r = e[Q];
  return (r ? De(r) : e)[t];
}
function f1(e, t, r) {
  var i;
  const n = co(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function co(e, t) {
  if (!(t in e))
    return;
  let r = Ge(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Ge(r);
  }
}
function br(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && br(e.parent_));
}
function ar(e) {
  e.copy_ || (e.copy_ = wr(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var h1 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const l = this;
        return function(c = o, ...u) {
          return l.produce(c, (f) => r.call(this, f, ...u));
        };
      }
      typeof r != "function" && K(6), n !== void 0 && typeof n != "function" && K(7);
      let i;
      if (Ae(t)) {
        const o = Fn(this), l = kr(t, void 0);
        let s = !0;
        try {
          i = r(l), s = !1;
        } finally {
          s ? yr(o) : Cr(o);
        }
        return Nn(o, n), Rn(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === oo && (i = void 0), this.autoFreeze_ && Wr(i, !0), n) {
          const o = [], l = [];
          Ie("Patches").generateReplacementPatches_(t, i, o, l), n(o, l);
        }
        return i;
      } else
        K(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (l, ...s) => this.produceWithPatches(l, (c) => t(c, ...s));
      let n, i;
      return [this.produce(t, r, (l, s) => {
        n = l, i = s;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ae(e) || K(8), Re(e) && (e = g1(e));
    const t = Fn(this), r = kr(e, void 0);
    return r[Q].isManual_ = !0, Cr(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Q];
    (!r || !r.isManual_) && K(9);
    const { scope_: n } = r;
    return Nn(n, t), Rn(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Ie("Patches").applyPatches_;
    return Re(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function kr(e, t) {
  const r = Nt(e) ? Ie("MapSet").proxyMap_(e, t) : Ft(e) ? Ie("MapSet").proxySet_(e, t) : d1(e, t);
  return (t ? t.scope_ : lo()).drafts_.push(r), r;
}
function g1(e) {
  return Re(e) || K(10, e), uo(e);
}
function uo(e) {
  if (!Ae(e) || Rt(e))
    return e;
  const t = e[Q];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = wr(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = wr(e, !0);
  return Lt(r, (n, i) => {
    so(r, n, uo(i));
  }), t && (t.finalized_ = !1), r;
}
var ee = new h1(), qr = ee.produce;
ee.produceWithPatches.bind(
  ee
);
ee.setAutoFreeze.bind(ee);
ee.setUseStrictShallowCopy.bind(ee);
ee.applyPatches.bind(ee);
var In = ee.createDraft.bind(ee), Bn = ee.finishDraft.bind(ee), v = {
  ancestors(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, n = v.levels(e, t);
    return r ? n = n.slice(1) : n = n.slice(0, -1), n;
  },
  common(e, t) {
    for (var r = [], n = 0; n < e.length && n < t.length; n++) {
      var i = e[n], o = t[n];
      if (i !== o)
        break;
      r.push(i);
    }
    return r;
  },
  compare(e, t) {
    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
      if (e[n] < t[n]) return -1;
      if (e[n] > t[n]) return 1;
    }
    return 0;
  },
  endsAfter(e, t) {
    var r = e.length - 1, n = e.slice(0, r), i = t.slice(0, r), o = e[r], l = t[r];
    return v.equals(n, i) && o > l;
  },
  endsAt(e, t) {
    var r = e.length, n = e.slice(0, r), i = t.slice(0, r);
    return v.equals(n, i);
  },
  endsBefore(e, t) {
    var r = e.length - 1, n = e.slice(0, r), i = t.slice(0, r), o = e[r], l = t[r];
    return v.equals(n, i) && o < l;
  },
  equals(e, t) {
    return e.length === t.length && e.every((r, n) => r === t[n]);
  },
  hasPrevious(e) {
    return e[e.length - 1] > 0;
  },
  isAfter(e, t) {
    return v.compare(e, t) === 1;
  },
  isAncestor(e, t) {
    return e.length < t.length && v.compare(e, t) === 0;
  },
  isBefore(e, t) {
    return v.compare(e, t) === -1;
  },
  isChild(e, t) {
    return e.length === t.length + 1 && v.compare(e, t) === 0;
  },
  isCommon(e, t) {
    return e.length <= t.length && v.compare(e, t) === 0;
  },
  isDescendant(e, t) {
    return e.length > t.length && v.compare(e, t) === 0;
  },
  isParent(e, t) {
    return e.length + 1 === t.length && v.compare(e, t) === 0;
  },
  isPath(e) {
    return Array.isArray(e) && (e.length === 0 || typeof e[0] == "number");
  },
  isSibling(e, t) {
    if (e.length !== t.length)
      return !1;
    var r = e.slice(0, -1), n = t.slice(0, -1), i = e[e.length - 1], o = t[t.length - 1];
    return i !== o && v.equals(r, n);
  },
  levels(e) {
    for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, n = [], i = 0; i <= e.length; i++)
      n.push(e.slice(0, i));
    return r && n.reverse(), n;
  },
  next(e) {
    if (e.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
    var t = e[e.length - 1];
    return e.slice(0, -1).concat(t + 1);
  },
  operationCanTransformPath(e) {
    switch (e.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return !0;
      default:
        return !1;
    }
  },
  parent(e) {
    if (e.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(e, "]."));
    return e.slice(0, -1);
  },
  previous(e) {
    if (e.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
    var t = e[e.length - 1];
    if (t <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
    return e.slice(0, -1).concat(t - 1);
  },
  relative(e, t) {
    if (!v.isAncestor(t, e) && !v.equals(e, t))
      throw new Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
    return e.slice(t.length);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!e) return null;
    var n = [...e], {
      affinity: i = "forward"
    } = r;
    if (e.length === 0)
      return n;
    switch (t.type) {
      case "insert_node": {
        var {
          path: o
        } = t;
        (v.equals(o, n) || v.endsBefore(o, n) || v.isAncestor(o, n)) && (n[o.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: l
        } = t;
        if (v.equals(l, n) || v.isAncestor(l, n))
          return null;
        v.endsBefore(l, n) && (n[l.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: s,
          position: c
        } = t;
        v.equals(s, n) || v.endsBefore(s, n) ? n[s.length - 1] -= 1 : v.isAncestor(s, n) && (n[s.length - 1] -= 1, n[s.length] += c);
        break;
      }
      case "split_node": {
        var {
          path: u,
          position: f
        } = t;
        if (v.equals(u, n)) {
          if (i === "forward")
            n[n.length - 1] += 1;
          else if (i !== "backward") return null;
        } else v.endsBefore(u, n) ? n[u.length - 1] += 1 : v.isAncestor(u, n) && e[u.length] >= f && (n[u.length - 1] += 1, n[u.length] -= f);
        break;
      }
      case "move_node": {
        var {
          path: h,
          newPath: d
        } = t;
        if (v.equals(h, d))
          return n;
        if (v.isAncestor(h, n) || v.equals(h, n)) {
          var m = d.slice();
          return v.endsBefore(h, d) && h.length < d.length && (m[h.length - 1] -= 1), m.concat(n.slice(h.length));
        } else v.isSibling(h, d) && (v.isAncestor(d, n) || v.equals(d, n)) ? v.endsBefore(h, n) ? n[h.length - 1] -= 1 : n[h.length - 1] += 1 : v.endsBefore(d, n) || v.equals(d, n) || v.isAncestor(d, n) ? (v.endsBefore(h, n) && (n[h.length - 1] -= 1), n[d.length - 1] += 1) : v.endsBefore(h, n) && (v.equals(d, n) && (n[d.length - 1] += 1), n[h.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function st(e) {
  "@babel/helpers - typeof";
  return st = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, st(e);
}
function m1(e, t) {
  if (st(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (st(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function p1(e) {
  var t = m1(e, "string");
  return st(t) === "symbol" ? t : String(t);
}
function Ye(e, t, r) {
  return t = p1(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function jn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jn(Object(r), !0).forEach(function(n) {
      Ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var v1 = (e, t, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: n,
        node: i
      } = r, o = O.parent(e, n), l = n[n.length - 1];
      if (l > o.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (o.children.splice(l, 0, i), t)
        for (var [s, c] of S.points(t))
          t[c] = R.transform(s, r);
      break;
    }
    case "insert_text": {
      var {
        path: u,
        offset: f,
        text: h
      } = r;
      if (h.length === 0) break;
      var d = O.leaf(e, u), m = d.text.slice(0, f), g = d.text.slice(f);
      if (d.text = m + h + g, t)
        for (var [p, w] of S.points(t))
          t[w] = R.transform(p, r);
      break;
    }
    case "merge_node": {
      var {
        path: C
      } = r, b = O.get(e, C), y = v.previous(C), P = O.get(e, y), x = O.parent(e, C), T = C[C.length - 1];
      if (W.isText(b) && W.isText(P))
        P.text += b.text;
      else if (!W.isText(b) && !W.isText(P))
        P.children.push(...b.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(C, "] to nodes of different interfaces: ").concat(X.stringify(b), " ").concat(X.stringify(P)));
      if (x.children.splice(T, 1), t)
        for (var [Z, U] of S.points(t))
          t[U] = R.transform(Z, r);
      break;
    }
    case "move_node": {
      var {
        path: G,
        newPath: le
      } = r;
      if (v.isAncestor(G, le))
        throw new Error("Cannot move a path [".concat(G, "] to new path [").concat(le, "] because the destination is inside itself."));
      var ie = O.get(e, G), fe = O.parent(e, G), z = G[G.length - 1];
      fe.children.splice(z, 1);
      var H = v.transform(G, r), Le = O.get(e, v.parent(H)), mt = H[H.length - 1];
      if (Le.children.splice(mt, 0, ie), t)
        for (var [_o, No] of S.points(t))
          t[No] = R.transform(_o, r);
      break;
    }
    case "remove_node": {
      var {
        path: Ee
      } = r, Fo = Ee[Ee.length - 1], Ro = O.parent(e, Ee);
      if (Ro.children.splice(Fo, 1), t)
        for (var [Xe, Ao] of S.points(t)) {
          var Vr = R.transform(Xe, r);
          if (t != null && Vr != null)
            t[Ao] = Vr;
          else {
            var je = void 0, Se = void 0;
            for (var [Gr, At] of O.texts(e))
              if (v.compare(At, Ee) === -1)
                je = [Gr, At];
              else {
                Se = [Gr, At];
                break;
              }
            var It = !1;
            je && Se && (v.equals(Se[1], Ee) ? It = !v.hasPrevious(Se[1]) : It = v.common(je[1], Ee).length < v.common(Se[1], Ee).length), je && !It ? (Xe.path = je[1], Xe.offset = je[0].text.length) : Se ? (Xe.path = Se[1], Xe.offset = 0) : t = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: Io,
        offset: Zr,
        text: Kr
      } = r;
      if (Kr.length === 0) break;
      var Bt = O.leaf(e, Io), Bo = Bt.text.slice(0, Zr), jo = Bt.text.slice(Zr + Kr.length);
      if (Bt.text = Bo + jo, t)
        for (var [zo, Ho] of S.points(t))
          t[Ho] = R.transform(zo, r);
      break;
    }
    case "set_node": {
      var {
        path: Yr,
        properties: Wo,
        newProperties: jt
      } = r;
      if (Yr.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var zt = O.get(e, Yr);
      for (var ze in jt) {
        if (ze === "children" || ze === "text")
          throw new Error('Cannot set the "'.concat(ze, '" property of nodes!'));
        var Xr = jt[ze];
        Xr == null ? delete zt[ze] : zt[ze] = Xr;
      }
      for (var Jr in Wo)
        jt.hasOwnProperty(Jr) || delete zt[Jr];
      break;
    }
    case "set_selection": {
      var {
        newProperties: Pe
      } = r;
      if (Pe == null)
        t = Pe;
      else {
        if (t == null) {
          if (!S.isRange(Pe))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(X.stringify(Pe), " when there is no current selection."));
          t = Je({}, Pe);
        }
        for (var He in Pe) {
          var Qr = Pe[He];
          if (Qr == null) {
            if (He === "anchor" || He === "focus")
              throw new Error('Cannot remove the "'.concat(He, '" selection property'));
            delete t[He];
          } else
            t[He] = Qr;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: We,
        position: pt,
        properties: en
      } = r;
      if (We.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(We, "] because the root node cannot be split."));
      var xe = O.get(e, We), Uo = O.parent(e, We), qo = We[We.length - 1], Ht;
      if (W.isText(xe)) {
        var $o = xe.text.slice(0, pt), Vo = xe.text.slice(pt);
        xe.text = $o, Ht = Je(Je({}, en), {}, {
          text: Vo
        });
      } else {
        var Go = xe.children.slice(0, pt), Zo = xe.children.slice(pt);
        xe.children = Go, Ht = Je(Je({}, en), {}, {
          children: Zo
        });
      }
      if (Uo.children.splice(qo + 1, 0, Ht), t)
        for (var [Ko, Yo] of S.points(t))
          t[Yo] = R.transform(Ko, r);
      break;
    }
  }
  return t;
}, w1 = {
  transform(e, t) {
    e.children = In(e.children);
    var r = e.selection && In(e.selection);
    try {
      r = v1(e, r, t);
    } finally {
      e.children = Bn(e.children), r ? e.selection = Re(r) ? Bn(r) : r : e.selection = null;
    }
  }
}, y1 = {
  insertNodes(e, t, r) {
    e.insertNodes(t, r);
  },
  liftNodes(e, t) {
    e.liftNodes(t);
  },
  mergeNodes(e, t) {
    e.mergeNodes(t);
  },
  moveNodes(e, t) {
    e.moveNodes(t);
  },
  removeNodes(e, t) {
    e.removeNodes(t);
  },
  setNodes(e, t, r) {
    e.setNodes(t, r);
  },
  splitNodes(e, t) {
    e.splitNodes(t);
  },
  unsetNodes(e, t, r) {
    e.unsetNodes(t, r);
  },
  unwrapNodes(e, t) {
    e.unwrapNodes(t);
  },
  wrapNodes(e, t, r) {
    e.wrapNodes(t, r);
  }
}, C1 = {
  collapse(e, t) {
    e.collapse(t);
  },
  deselect(e) {
    e.deselect();
  },
  move(e, t) {
    e.move(t);
  },
  select(e, t) {
    e.select(t);
  },
  setPoint(e, t, r) {
    e.setPoint(t, r);
  },
  setSelection(e, t) {
    e.setSelection(t);
  }
}, fo = (e, t) => {
  for (var r in e) {
    var n = e[r], i = t[r];
    if (V(n) && V(i)) {
      if (!fo(n, i)) return !1;
    } else if (Array.isArray(n) && Array.isArray(i)) {
      if (n.length !== i.length) return !1;
      for (var o = 0; o < n.length; o++)
        if (n[o] !== i[o]) return !1;
    } else if (n !== i)
      return !1;
  }
  for (var l in t)
    if (e[l] === void 0 && t[l] !== void 0)
      return !1;
  return !0;
};
function b1(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function lt(e, t) {
  if (e == null) return {};
  var r = b1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var k1 = ["anchor", "focus"];
function zn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function O1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zn(Object(r), !0).forEach(function(n) {
      Ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var S = {
  edges(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, {
      anchor: n,
      focus: i
    } = e;
    return S.isBackward(e) === r ? [n, i] : [i, n];
  },
  end(e) {
    var [, t] = S.edges(e);
    return t;
  },
  equals(e, t) {
    return R.equals(e.anchor, t.anchor) && R.equals(e.focus, t.focus);
  },
  includes(e, t) {
    if (S.isRange(t)) {
      if (S.includes(e, t.anchor) || S.includes(e, t.focus))
        return !0;
      var [r, n] = S.edges(e), [i, o] = S.edges(t);
      return R.isBefore(r, i) && R.isAfter(n, o);
    }
    var [l, s] = S.edges(e), c = !1, u = !1;
    return R.isPoint(t) ? (c = R.compare(t, l) >= 0, u = R.compare(t, s) <= 0) : (c = v.compare(t, l.path) >= 0, u = v.compare(t, s.path) <= 0), c && u;
  },
  intersection(e, t) {
    var r = lt(e, k1), [n, i] = S.edges(e), [o, l] = S.edges(t), s = R.isBefore(n, o) ? o : n, c = R.isBefore(i, l) ? i : l;
    return R.isBefore(c, s) ? null : O1({
      anchor: s,
      focus: c
    }, r);
  },
  isBackward(e) {
    var {
      anchor: t,
      focus: r
    } = e;
    return R.isAfter(t, r);
  },
  isCollapsed(e) {
    var {
      anchor: t,
      focus: r
    } = e;
    return R.equals(t, r);
  },
  isExpanded(e) {
    return !S.isCollapsed(e);
  },
  isForward(e) {
    return !S.isBackward(e);
  },
  isRange(e) {
    return V(e) && R.isPoint(e.anchor) && R.isPoint(e.focus);
  },
  *points(e) {
    yield [e.anchor, "anchor"], yield [e.focus, "focus"];
  },
  start(e) {
    var [t] = S.edges(e);
    return t;
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return qr(e, (n) => {
      if (n === null)
        return null;
      var {
        affinity: i = "inward"
      } = r, o, l;
      if (i === "inward") {
        var s = S.isCollapsed(n);
        S.isForward(n) ? (o = "forward", l = s ? o : "backward") : (o = "backward", l = s ? o : "forward");
      } else i === "outward" ? S.isForward(n) ? (o = "backward", l = "forward") : (o = "forward", l = "backward") : (o = i, l = i);
      var c = R.transform(n.anchor, t, {
        affinity: o
      }), u = R.transform(n.focus, t, {
        affinity: l
      });
      if (!c || !u)
        return null;
      n.anchor = c, n.focus = u;
    });
  }
}, Hn = (e) => V(e) && O.isNodeList(e.children) && !D.isEditor(e), ge = {
  isAncestor(e) {
    return V(e) && O.isNodeList(e.children);
  },
  isElement: Hn,
  isElementList(e) {
    return Array.isArray(e) && e.every((t) => ge.isElement(t));
  },
  isElementProps(e) {
    return e.children !== void 0;
  },
  isElementType: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Hn(t) && t[n] === r;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "children" && e[r] !== t[r])
        return !1;
    return !0;
  }
}, L1 = ["children"], E1 = ["text"], Wn = /* @__PURE__ */ new WeakMap(), O = {
  ancestor(e, t) {
    var r = O.get(e, t);
    if (W.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(X.stringify(r)));
    return r;
  },
  ancestors(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of v.ancestors(t, r)) {
        var i = O.ancestor(e, n), o = [i, n];
        yield o;
      }
    }();
  },
  child(e, t) {
    if (W.isText(e))
      throw new Error("Cannot get the child of a text node: ".concat(X.stringify(e)));
    var r = e.children[t];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(X.stringify(e)));
    return r;
  },
  children(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = r, i = O.ancestor(e, t), {
        children: o
      } = i, l = n ? o.length - 1 : 0; n ? l >= 0 : l < o.length; ) {
        var s = O.child(i, l), c = t.concat(l);
        yield [s, c], l = n ? l - 1 : l + 1;
      }
    }();
  },
  common(e, t, r) {
    var n = v.common(t, r), i = O.get(e, n);
    return [i, n];
  },
  descendant(e, t) {
    var r = O.get(e, t);
    if (D.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(X.stringify(r)));
    return r;
  },
  descendants(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of O.nodes(e, t))
        n.length !== 0 && (yield [r, n]);
    }();
  },
  elements(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of O.nodes(e, t))
        ge.isElement(r) && (yield [r, n]);
    }();
  },
  extractProps(e) {
    if (ge.isAncestor(e)) {
      var t = lt(e, L1);
      return t;
    } else {
      var t = lt(e, E1);
      return t;
    }
  },
  first(e, t) {
    for (var r = t.slice(), n = O.get(e, r); n && !(W.isText(n) || n.children.length === 0); )
      n = n.children[0], r.push(0);
    return [n, r];
  },
  fragment(e, t) {
    if (W.isText(e))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(X.stringify(e)));
    var r = qr({
      children: e.children
    }, (n) => {
      var [i, o] = S.edges(t), l = O.nodes(n, {
        reverse: !0,
        pass: (d) => {
          var [, m] = d;
          return !S.includes(t, m);
        }
      });
      for (var [, s] of l) {
        if (!S.includes(t, s)) {
          var c = O.parent(n, s), u = s[s.length - 1];
          c.children.splice(u, 1);
        }
        if (v.equals(s, o.path)) {
          var f = O.leaf(n, s);
          f.text = f.text.slice(0, o.offset);
        }
        if (v.equals(s, i.path)) {
          var h = O.leaf(n, s);
          h.text = h.text.slice(i.offset);
        }
      }
      D.isEditor(n) && (n.selection = null);
    });
    return r.children;
  },
  get(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var i = t[n];
      if (W.isText(r) || !r.children[i])
        throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(X.stringify(e)));
      r = r.children[i];
    }
    return r;
  },
  has(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var i = t[n];
      if (W.isText(r) || !r.children[i])
        return !1;
      r = r.children[i];
    }
    return !0;
  },
  isNode(e) {
    return W.isText(e) || ge.isElement(e) || D.isEditor(e);
  },
  isNodeList(e) {
    if (!Array.isArray(e))
      return !1;
    var t = Wn.get(e);
    if (t !== void 0)
      return t;
    var r = e.every((n) => O.isNode(n));
    return Wn.set(e, r), r;
  },
  last(e, t) {
    for (var r = t.slice(), n = O.get(e, r); n && !(W.isText(n) || n.children.length === 0); ) {
      var i = n.children.length - 1;
      n = n.children[i], r.push(i);
    }
    return [n, r];
  },
  leaf(e, t) {
    var r = O.get(e, t);
    if (!W.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(X.stringify(r)));
    return r;
  },
  levels(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of v.levels(t, r)) {
        var i = O.get(e, n);
        yield [i, n];
      }
    }();
  },
  matches(e, t) {
    return ge.isElement(e) && ge.isElementProps(t) && ge.matches(e, t) || W.isText(e) && W.isTextProps(t) && W.matches(e, t);
  },
  nodes(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: r,
        reverse: n = !1
      } = t, {
        from: i = [],
        to: o
      } = t, l = /* @__PURE__ */ new Set(), s = [], c = e; !(o && (n ? v.isBefore(s, o) : v.isAfter(s, o))); ) {
        if (l.has(c) || (yield [c, s]), !l.has(c) && !W.isText(c) && c.children.length !== 0 && (r == null || r([c, s]) === !1)) {
          l.add(c);
          var u = n ? c.children.length - 1 : 0;
          v.isAncestor(s, i) && (u = i[s.length]), s = s.concat(u), c = O.get(e, s);
          continue;
        }
        if (s.length === 0)
          break;
        if (!n) {
          var f = v.next(s);
          if (O.has(e, f)) {
            s = f, c = O.get(e, s);
            continue;
          }
        }
        if (n && s[s.length - 1] !== 0) {
          var h = v.previous(s);
          s = h, c = O.get(e, s);
          continue;
        }
        s = v.parent(s), c = O.get(e, s), l.add(c);
      }
    }();
  },
  parent(e, t) {
    var r = v.parent(t), n = O.get(e, r);
    if (W.isText(n))
      throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
    return n;
  },
  string(e) {
    return W.isText(e) ? e.text : e.children.map(O.string).join("");
  },
  texts(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of O.nodes(e, t))
        W.isText(r) && (yield [r, n]);
    }();
  }
};
function Un(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Un(Object(r), !0).forEach(function(n) {
      Ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Un(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Qe = {
  isNodeOperation(e) {
    return Qe.isOperation(e) && e.type.endsWith("_node");
  },
  isOperation(e) {
    if (!V(e))
      return !1;
    switch (e.type) {
      case "insert_node":
        return v.isPath(e.path) && O.isNode(e.node);
      case "insert_text":
        return typeof e.offset == "number" && typeof e.text == "string" && v.isPath(e.path);
      case "merge_node":
        return typeof e.position == "number" && v.isPath(e.path) && V(e.properties);
      case "move_node":
        return v.isPath(e.path) && v.isPath(e.newPath);
      case "remove_node":
        return v.isPath(e.path) && O.isNode(e.node);
      case "remove_text":
        return typeof e.offset == "number" && typeof e.text == "string" && v.isPath(e.path);
      case "set_node":
        return v.isPath(e.path) && V(e.properties) && V(e.newProperties);
      case "set_selection":
        return e.properties === null && S.isRange(e.newProperties) || e.newProperties === null && S.isRange(e.properties) || V(e.properties) && V(e.newProperties);
      case "split_node":
        return v.isPath(e.path) && typeof e.position == "number" && V(e.properties);
      default:
        return !1;
    }
  },
  isOperationList(e) {
    return Array.isArray(e) && e.every((t) => Qe.isOperation(t));
  },
  isSelectionOperation(e) {
    return Qe.isOperation(e) && e.type.endsWith("_selection");
  },
  isTextOperation(e) {
    return Qe.isOperation(e) && e.type.endsWith("_text");
  },
  inverse(e) {
    switch (e.type) {
      case "insert_node":
        return B(B({}, e), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return B(B({}, e), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return B(B({}, e), {}, {
          type: "split_node",
          path: v.previous(e.path)
        });
      case "move_node": {
        var {
          newPath: t,
          path: r
        } = e;
        if (v.equals(t, r))
          return e;
        if (v.isSibling(r, t))
          return B(B({}, e), {}, {
            path: t,
            newPath: r
          });
        var n = v.transform(r, e), i = v.transform(v.next(r), e);
        return B(B({}, e), {}, {
          path: n,
          newPath: i
        });
      }
      case "remove_node":
        return B(B({}, e), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return B(B({}, e), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: o,
          newProperties: l
        } = e;
        return B(B({}, e), {}, {
          properties: l,
          newProperties: o
        });
      }
      case "set_selection": {
        var {
          properties: s,
          newProperties: c
        } = e;
        return s == null ? B(B({}, e), {}, {
          properties: c,
          newProperties: null
        }) : c == null ? B(B({}, e), {}, {
          properties: null,
          newProperties: s
        }) : B(B({}, e), {}, {
          properties: c,
          newProperties: s
        });
      }
      case "split_node":
        return B(B({}, e), {}, {
          type: "merge_node",
          path: v.next(e.path)
        });
    }
  }
}, qn = /* @__PURE__ */ new WeakMap(), S1 = (e) => {
  var t = qn.get(e);
  if (t !== void 0)
    return t;
  if (!V(e))
    return !1;
  var r = typeof e.addMark == "function" && typeof e.apply == "function" && typeof e.deleteFragment == "function" && typeof e.insertBreak == "function" && typeof e.insertSoftBreak == "function" && typeof e.insertFragment == "function" && typeof e.insertNode == "function" && typeof e.insertText == "function" && typeof e.isElementReadOnly == "function" && typeof e.isInline == "function" && typeof e.isSelectable == "function" && typeof e.isVoid == "function" && typeof e.normalizeNode == "function" && typeof e.onChange == "function" && typeof e.removeMark == "function" && typeof e.getDirtyPaths == "function" && (e.marks === null || V(e.marks)) && (e.selection === null || S.isRange(e.selection)) && O.isNodeList(e.children) && Qe.isOperationList(e.operations);
  return qn.set(e, r), r;
}, D = {
  above(e, t) {
    return e.above(t);
  },
  addMark(e, t, r) {
    e.addMark(t, r);
  },
  after(e, t, r) {
    return e.after(t, r);
  },
  before(e, t, r) {
    return e.before(t, r);
  },
  deleteBackward(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = t;
    e.deleteBackward(r);
  },
  deleteForward(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = t;
    e.deleteForward(r);
  },
  deleteFragment(e, t) {
    e.deleteFragment(t);
  },
  edges(e, t) {
    return e.edges(t);
  },
  elementReadOnly(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.elementReadOnly(t);
  },
  end(e, t) {
    return e.end(t);
  },
  first(e, t) {
    return e.first(t);
  },
  fragment(e, t) {
    return e.fragment(t);
  },
  hasBlocks(e, t) {
    return e.hasBlocks(t);
  },
  hasInlines(e, t) {
    return e.hasInlines(t);
  },
  hasPath(e, t) {
    return e.hasPath(t);
  },
  hasTexts(e, t) {
    return e.hasTexts(t);
  },
  insertBreak(e) {
    e.insertBreak();
  },
  insertFragment(e, t, r) {
    e.insertFragment(t, r);
  },
  insertNode(e, t) {
    e.insertNode(t);
  },
  insertSoftBreak(e) {
    e.insertSoftBreak();
  },
  insertText(e, t) {
    e.insertText(t);
  },
  isBlock(e, t) {
    return e.isBlock(t);
  },
  isEdge(e, t, r) {
    return e.isEdge(t, r);
  },
  isEditor(e) {
    return S1(e);
  },
  isElementReadOnly(e, t) {
    return e.isElementReadOnly(t);
  },
  isEmpty(e, t) {
    return e.isEmpty(t);
  },
  isEnd(e, t, r) {
    return e.isEnd(t, r);
  },
  isInline(e, t) {
    return e.isInline(t);
  },
  isNormalizing(e) {
    return e.isNormalizing();
  },
  isSelectable(e, t) {
    return e.isSelectable(t);
  },
  isStart(e, t, r) {
    return e.isStart(t, r);
  },
  isVoid(e, t) {
    return e.isVoid(t);
  },
  last(e, t) {
    return e.last(t);
  },
  leaf(e, t, r) {
    return e.leaf(t, r);
  },
  levels(e, t) {
    return e.levels(t);
  },
  marks(e) {
    return e.getMarks();
  },
  next(e, t) {
    return e.next(t);
  },
  node(e, t, r) {
    return e.node(t, r);
  },
  nodes(e, t) {
    return e.nodes(t);
  },
  normalize(e, t) {
    e.normalize(t);
  },
  parent(e, t, r) {
    return e.parent(t, r);
  },
  path(e, t, r) {
    return e.path(t, r);
  },
  pathRef(e, t, r) {
    return e.pathRef(t, r);
  },
  pathRefs(e) {
    return e.pathRefs();
  },
  point(e, t, r) {
    return e.point(t, r);
  },
  pointRef(e, t, r) {
    return e.pointRef(t, r);
  },
  pointRefs(e) {
    return e.pointRefs();
  },
  positions(e, t) {
    return e.positions(t);
  },
  previous(e, t) {
    return e.previous(t);
  },
  range(e, t, r) {
    return e.range(t, r);
  },
  rangeRef(e, t, r) {
    return e.rangeRef(t, r);
  },
  rangeRefs(e) {
    return e.rangeRefs();
  },
  removeMark(e, t) {
    e.removeMark(t);
  },
  setNormalizing(e, t) {
    e.setNormalizing(t);
  },
  start(e, t) {
    return e.start(t);
  },
  string(e, t, r) {
    return e.string(t, r);
  },
  unhangRange(e, t, r) {
    return e.unhangRange(t, r);
  },
  void(e, t) {
    return e.void(t);
  },
  withoutNormalizing(e, t) {
    e.withoutNormalizing(t);
  }
};
function $n(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $n(Object(r), !0).forEach(function(n) {
      Ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $n(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var R = {
  compare(e, t) {
    var r = v.compare(e.path, t.path);
    return r === 0 ? e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0 : r;
  },
  isAfter(e, t) {
    return R.compare(e, t) === 1;
  },
  isBefore(e, t) {
    return R.compare(e, t) === -1;
  },
  equals(e, t) {
    return e.offset === t.offset && v.equals(e.path, t.path);
  },
  isPoint(e) {
    return V(e) && typeof e.offset == "number" && v.isPath(e.path);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return qr(e, (n) => {
      if (n === null)
        return null;
      var {
        affinity: i = "forward"
      } = r, {
        path: o,
        offset: l
      } = n;
      switch (t.type) {
        case "insert_node":
        case "move_node": {
          n.path = v.transform(o, t, r);
          break;
        }
        case "insert_text": {
          v.equals(t.path, o) && (t.offset < l || t.offset === l && i === "forward") && (n.offset += t.text.length);
          break;
        }
        case "merge_node": {
          v.equals(t.path, o) && (n.offset += t.position), n.path = v.transform(o, t, r);
          break;
        }
        case "remove_text": {
          v.equals(t.path, o) && t.offset <= l && (n.offset -= Math.min(l - t.offset, t.text.length));
          break;
        }
        case "remove_node": {
          if (v.equals(t.path, o) || v.isAncestor(t.path, o))
            return null;
          n.path = v.transform(o, t, r);
          break;
        }
        case "split_node": {
          if (v.equals(t.path, o)) {
            if (t.position === l && i == null)
              return null;
            (t.position < l || t.position === l && i === "forward") && (n.offset -= t.position, n.path = v.transform(o, t, Vn(Vn({}, r), {}, {
              affinity: "forward"
            })));
          } else
            n.path = v.transform(o, t, r);
          break;
        }
      }
    });
  }
}, Gn = void 0, X = {
  setScrubber(e) {
    Gn = e;
  },
  stringify(e) {
    return JSON.stringify(e, Gn);
  }
}, P1 = ["text"], x1 = ["anchor", "focus"];
function Zn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zn(Object(r), !0).forEach(function(n) {
      Ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var W = {
  equals(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = r;
    function i(o) {
      var l = lt(o, P1);
      return l;
    }
    return fo(n ? i(e) : e, n ? i(t) : t);
  },
  isText(e) {
    return V(e) && typeof e.text == "string";
  },
  isTextList(e) {
    return Array.isArray(e) && e.every((t) => W.isText(t));
  },
  isTextProps(e) {
    return e.text !== void 0;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "text" && (!e.hasOwnProperty(r) || e[r] !== t[r]))
        return !1;
    return !0;
  },
  decorations(e, t) {
    var r = [he({}, e)];
    for (var n of t) {
      var i = lt(n, x1), [o, l] = S.edges(n), s = [], c = 0, u = o.offset, f = l.offset;
      for (var h of r) {
        var {
          length: d
        } = h.text, m = c;
        if (c += d, u <= m && c <= f) {
          Object.assign(h, i), s.push(h);
          continue;
        }
        if (u !== f && (u === c || f === m) || u > c || f < m || f === m && m !== 0) {
          s.push(h);
          continue;
        }
        var g = h, p = void 0, w = void 0;
        if (f < c) {
          var C = f - m;
          w = he(he({}, g), {}, {
            text: g.text.slice(C)
          }), g = he(he({}, g), {}, {
            text: g.text.slice(0, C)
          });
        }
        if (u > m) {
          var b = u - m;
          p = he(he({}, g), {}, {
            text: g.text.slice(0, b)
          }), g = he(he({}, g), {}, {
            text: g.text.slice(b)
          });
        }
        Object.assign(g, i), p && s.push(p), s.push(g), w && s.push(w);
      }
      r = s;
    }
    return r;
  }
}, M1 = (e) => e.selection ? e.selection : e.children.length > 0 ? D.end(e, []) : [0], F;
(function(e) {
  e[e.None = 0] = "None", e[e.Extend = 1] = "Extend", e[e.ZWJ = 2] = "ZWJ", e[e.RI = 4] = "RI", e[e.Prepend = 8] = "Prepend", e[e.SpacingMark = 16] = "SpacingMark", e[e.L = 32] = "L", e[e.V = 64] = "V", e[e.T = 128] = "T", e[e.LV = 256] = "LV", e[e.LVT = 512] = "LVT", e[e.ExtPict = 1024] = "ExtPict", e[e.Any = 2048] = "Any";
})(F || (F = {}));
F.L, F.L | F.V | F.LV | F.LVT, F.LV | F.V, F.V | F.T, F.LVT | F.T, F.T, F.Any, F.Extend | F.ZWJ, F.Any, F.SpacingMark, F.Prepend, F.Any, F.ZWJ, F.ExtPict, F.RI, F.RI;
var D1 = {
  delete(e, t) {
    e.delete(t);
  },
  insertFragment(e, t, r) {
    e.insertFragment(t, r);
  },
  insertText(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    D.withoutNormalizing(e, () => {
      var {
        voids: n = !1
      } = r, {
        at: i = M1(e)
      } = r;
      if (v.isPath(i) && (i = D.range(e, i)), S.isRange(i))
        if (S.isCollapsed(i))
          i = i.anchor;
        else {
          var o = S.end(i);
          if (!n && D.void(e, {
            at: o
          }))
            return;
          var l = S.start(i), s = D.pointRef(e, l), c = D.pointRef(e, o);
          Fe.delete(e, {
            at: i,
            voids: n
          });
          var u = s.unref(), f = c.unref();
          i = u || f, Fe.setSelection(e, {
            anchor: i,
            focus: i
          });
        }
      if (!(!n && D.void(e, {
        at: i
      }) || D.elementReadOnly(e, {
        at: i
      }))) {
        var {
          path: h,
          offset: d
        } = i;
        t.length > 0 && e.apply({
          type: "insert_text",
          path: h,
          offset: d,
          text: t
        });
      }
    });
  }
};
function Kn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kn(Object(r), !0).forEach(function(n) {
      Ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Fe = wt(wt(wt(wt({}, w1), y1), C1), D1), Yn;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Yn || (Yn = {}));
var $r = function(e) {
  return Object.freeze(e);
}, T1 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, $r(this);
  }
  return e;
}(), _1 = function() {
  function e(t, r, n, i) {
    return this.x = t, this.y = r, this.width = n, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, $r(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, i = t.top, o = t.right, l = t.bottom, s = t.left, c = t.width, u = t.height;
    return { x: r, y: n, top: i, right: o, bottom: l, left: s, width: c, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Xn = typeof window < "u" ? window : {};
/msie|trident/i.test(Xn.navigator && Xn.navigator.userAgent);
var sr = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new T1((r ? t : e) || 0, (r ? e : t) || 0);
};
$r({
  devicePixelContentBoxSize: sr(),
  borderBoxSize: sr(),
  contentBoxSize: sr(),
  contentRect: new _1(0, 0, 0, 0)
});
var oe = {}, Jn;
function N1() {
  if (Jn) return oe;
  Jn = 1, Object.defineProperty(oe, "__esModule", {
    value: !0
  });
  for (var e = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), t = {
    alt: "altKey",
    control: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
  }, r = {
    add: "+",
    break: "pause",
    cmd: "meta",
    command: "meta",
    ctl: "control",
    ctrl: "control",
    del: "delete",
    down: "arrowdown",
    esc: "escape",
    ins: "insert",
    left: "arrowleft",
    mod: e ? "meta" : "control",
    opt: "alt",
    option: "alt",
    return: "enter",
    right: "arrowright",
    space: " ",
    spacebar: " ",
    up: "arrowup",
    win: "meta",
    windows: "meta"
  }, n = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    control: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    " ": 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    insert: 45,
    delete: 46,
    meta: 91,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
  }, i = 1; i < 20; i++)
    n["f" + i] = 111 + i;
  function o(d, m, g) {
    m && !("byKey" in m) && (g = m, m = null), Array.isArray(d) || (d = [d]);
    var p = d.map(function(b) {
      return c(b, m);
    }), w = function(y) {
      return p.some(function(P) {
        return u(P, y);
      });
    }, C = g == null ? w : w(g);
    return C;
  }
  function l(d, m) {
    return o(d, m);
  }
  function s(d, m) {
    return o(d, { byKey: !0 }, m);
  }
  function c(d, m) {
    var g = m && m.byKey, p = {};
    d = d.replace("++", "+add");
    var w = d.split("+"), C = w.length;
    for (var b in t)
      p[t[b]] = !1;
    var y = !0, P = !1, x = void 0;
    try {
      for (var T = w[Symbol.iterator](), Z; !(y = (Z = T.next()).done); y = !0) {
        var U = Z.value, G = U.endsWith("?") && U.length > 1;
        G && (U = U.slice(0, -1));
        var le = h(U), ie = t[le];
        if (U.length > 1 && !ie && !r[U] && !n[le])
          throw new TypeError('Unknown modifier: "' + U + '"');
        (C === 1 || !ie) && (g ? p.key = le : p.which = f(U)), ie && (p[ie] = G ? null : !0);
      }
    } catch (fe) {
      P = !0, x = fe;
    } finally {
      try {
        !y && T.return && T.return();
      } finally {
        if (P)
          throw x;
      }
    }
    return p;
  }
  function u(d, m) {
    for (var g in d) {
      var p = d[g], w = void 0;
      if (p != null && (g === "key" && m.key != null ? w = m.key.toLowerCase() : g === "which" ? w = p === 91 && m.which === 93 ? 91 : m.which : w = m[g], !(w == null && p === !1) && w !== p))
        return !1;
    }
    return !0;
  }
  function f(d) {
    d = h(d);
    var m = n[d] || d.toUpperCase().charCodeAt(0);
    return m;
  }
  function h(d) {
    return d = d.toLowerCase(), d = r[d] || d, d;
  }
  return oe.default = o, oe.isHotkey = o, oe.isCodeHotkey = l, oe.isKeyHotkey = s, oe.parseHotkey = c, oe.compareHotkey = u, oe.toKeyCode = f, oe.toKeyName = h, oe;
}
var _e = N1();
function ct(e) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ct(e);
}
function F1(e, t) {
  if (ct(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ct(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function R1(e) {
  var t = F1(e, "string");
  return ct(t) === "symbol" ? t : String(t);
}
function tt(e, t, r) {
  return t = R1(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var A1 = /* @__PURE__ */ pi(null), lr, cr;
parseInt(Ne.version.split(".")[0], 10);
var Qn = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), ur = typeof navigator < "u" && /Android/.test(navigator.userAgent), yt = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), I1 = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent);
typeof navigator < "u" && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && ((lr = navigator.userAgent.match(/Version\/(\d+)/)) !== null && lr !== void 0 && lr[1] && parseInt((cr = navigator.userAgent.match(/Version\/(\d+)/)) === null || cr === void 0 ? void 0 : cr[1], 10) < 17);
var B1 = /* @__PURE__ */ new WeakMap(), j1 = /* @__PURE__ */ new WeakMap(), z1 = /* @__PURE__ */ new WeakMap(), H1 = /* @__PURE__ */ new WeakMap(), W1 = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), U1 = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), q1 = /* @__PURE__ */ new WeakMap(), $1 = /* @__PURE__ */ new WeakMap(), V1 = /* @__PURE__ */ new WeakMap(), G1 = globalThis.Text, ho = (e) => e && e.ownerDocument && e.ownerDocument.defaultView || null, Z1 = (e) => Pt(e) && e.nodeType === 8, ue = (e) => Pt(e) && e.nodeType === 1, Pt = (e) => {
  var t = ho(e);
  return !!t && e instanceof t.Node;
}, ri = (e) => {
  var t = e && e.anchorNode && ho(e.anchorNode);
  return !!t && e instanceof t.Selection;
}, K1 = (e) => {
  var [t, r] = e;
  if (ue(t) && t.childNodes.length) {
    var n = r === t.childNodes.length, i = n ? r - 1 : r;
    for ([t, i] = go(t, i, n ? "backward" : "forward"), n = i < r; ue(t) && t.childNodes.length; ) {
      var o = n ? t.childNodes.length - 1 : 0;
      t = X1(t, o, n ? "backward" : "forward");
    }
    r = n && t.textContent != null ? t.textContent.length : 0;
  }
  return [t, r];
}, Y1 = (e) => {
  for (var t = e && e.parentNode; t; ) {
    if (t.toString() === "[object ShadowRoot]")
      return !0;
    t = t.parentNode;
  }
  return !1;
}, go = (e, t, r) => {
  for (var {
    childNodes: n
  } = e, i = n[t], o = t, l = !1, s = !1; (Z1(i) || ue(i) && i.childNodes.length === 0 || ue(i) && i.getAttribute("contenteditable") === "false") && !(l && s); ) {
    if (o >= n.length) {
      l = !0, o = t - 1, r = "backward";
      continue;
    }
    if (o < 0) {
      s = !0, o = t + 1, r = "forward";
      continue;
    }
    i = n[o], t = o, o += r === "forward" ? 1 : -1;
  }
  return [i, t];
}, X1 = (e, t, r) => {
  var [n] = go(e, t, r);
  return n;
}, mo = (e, t, r) => {
  var {
    target: n
  } = t;
  if (ue(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: i
  } = L.getWindow(e);
  if (i.contains(n))
    return L.hasDOMNode(e, n, {
      editable: !0
    });
  var o = r.find((l) => {
    var {
      addedNodes: s,
      removedNodes: c
    } = l;
    for (var u of s)
      if (u === n || u.contains(n))
        return !0;
    for (var f of c)
      if (f === n || f.contains(n))
        return !0;
  });
  return !o || o === t ? !1 : mo(e, o, r);
}, J1 = 0;
class Q1 {
  constructor() {
    tt(this, "id", void 0), this.id = "".concat(J1++);
  }
}
var L = {
  androidPendingDiffs: (e) => V1.get(e),
  androidScheduleFlush: (e) => {
    var t;
    (t = $1.get(e)) === null || t === void 0 || t();
  },
  blur: (e) => {
    var t = L.toDOMNode(e, e), r = L.findDocumentOrShadowRoot(e);
    Ct.set(e, !1), r.activeElement === t && t.blur();
  },
  deselect: (e) => {
    var {
      selection: t
    } = e, r = L.findDocumentOrShadowRoot(e), n = r.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), t && Fe.deselect(e);
  },
  findDocumentOrShadowRoot: (e) => {
    var t = L.toDOMNode(e, e), r = t.getRootNode();
    return (r instanceof Document || r instanceof ShadowRoot) && r.getSelection != null ? r : t.ownerDocument;
  },
  findEventRange: (e, t) => {
    "nativeEvent" in t && (t = t.nativeEvent);
    var {
      clientX: r,
      clientY: n,
      target: i
    } = t;
    if (r == null || n == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var o = L.toSlateNode(e, t.target), l = L.findPath(e, o);
    if (ge.isElement(o) && D.isVoid(e, o)) {
      var s = i.getBoundingClientRect(), c = e.isInline(o) ? r - s.left < s.left + s.width - r : n - s.top < s.top + s.height - n, u = D.point(e, l, {
        edge: c ? "start" : "end"
      }), f = c ? D.before(e, u) : D.after(e, u);
      if (f) {
        var h = D.range(e, f);
        return h;
      }
    }
    var d, {
      document: m
    } = L.getWindow(e);
    if (m.caretRangeFromPoint)
      d = m.caretRangeFromPoint(r, n);
    else {
      var g = m.caretPositionFromPoint(r, n);
      g && (d = m.createRange(), d.setStart(g.offsetNode, g.offset), d.setEnd(g.offsetNode, g.offset));
    }
    if (!d)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var p = L.toSlateRange(e, d, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return p;
  },
  findKey: (e, t) => {
    var r = ei.get(t);
    return r || (r = new Q1(), ei.set(t, r)), r;
  },
  findPath: (e, t) => {
    for (var r = [], n = t; ; ) {
      var i = j1.get(n);
      if (i == null) {
        if (D.isEditor(n))
          return r;
        break;
      }
      var o = B1.get(n);
      if (o == null)
        break;
      r.unshift(o), n = i;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(X.stringify(t)));
  },
  focus: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!Ct.get(t)) {
      if (r.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (t.operations.length > 0) {
        setTimeout(() => {
          L.focus(t, {
            retries: r.retries - 1
          });
        }, 10);
        return;
      }
      var n = L.toDOMNode(t, t), i = L.findDocumentOrShadowRoot(t);
      if (i.activeElement !== n) {
        if (t.selection && i instanceof Document) {
          var o = i.getSelection(), l = L.toDOMRange(t, t.selection);
          o == null || o.removeAllRanges(), o == null || o.addRange(l);
        }
        t.selection || (Fe.select(t, D.start(t, [])), t.onChange()), Ct.set(t, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (e) => {
    var t = z1.get(e);
    if (!t)
      throw new Error("Unable to find a host window element for this editor");
    return t;
  },
  hasDOMNode: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: i = !1
    } = n, o = L.toDOMNode(t, t), l;
    try {
      l = ue(r) ? r : r.parentElement;
    } catch (s) {
      if (s instanceof Error && !s.message.includes('Permission denied to access property "nodeType"'))
        throw s;
    }
    return l ? l.closest("[data-slate-editor]") === o && (!i || l.isContentEditable ? !0 : typeof l.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    l.closest('[contenteditable="false"]') === o || !!l.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (e, t) => Pt(t) && L.hasDOMNode(e, t, {
    editable: !0
  }),
  hasRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t;
    return D.hasPath(e, r.path) && D.hasPath(e, n.path);
  },
  hasSelectableTarget: (e, t) => L.hasEditableTarget(e, t) || L.isTargetInsideNonReadonlyVoid(e, t),
  hasTarget: (e, t) => Pt(t) && L.hasDOMNode(e, t),
  insertData: (e, t) => {
    e.insertData(t);
  },
  insertFragmentData: (e, t) => e.insertFragmentData(t),
  insertTextData: (e, t) => e.insertTextData(t),
  isComposing: (e) => !!q1.get(e),
  isFocused: (e) => !!Ct.get(e),
  isReadOnly: (e) => !!ti.get(e),
  isTargetInsideNonReadonlyVoid: (e, t) => {
    if (ti.get(e)) return !1;
    var r = L.hasTarget(e, t) && L.toSlateNode(e, t);
    return ge.isElement(r) && D.isVoid(e, r);
  },
  setFragmentData: (e, t, r) => e.setFragmentData(t, r),
  toDOMNode: (e, t) => {
    var r = U1.get(e), n = D.isEditor(t) ? H1.get(e) : r == null ? void 0 : r.get(L.findKey(e, t));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(X.stringify(t)));
    return n;
  },
  toDOMPoint: (e, t) => {
    var [r] = D.node(e, t.path), n = L.toDOMNode(e, r), i;
    D.void(e, {
      at: t
    }) && (t = {
      path: t.path,
      offset: 0
    });
    for (var o = "[data-slate-string], [data-slate-zero-width]", l = Array.from(n.querySelectorAll(o)), s = 0, c = 0; c < l.length; c++) {
      var u = l[c], f = u.childNodes[0];
      if (!(f == null || f.textContent == null)) {
        var {
          length: h
        } = f.textContent, d = u.getAttribute("data-slate-length"), m = d == null ? h : parseInt(d, 10), g = s + m, p = l[c + 1];
        if (t.offset === g && p !== null && p !== void 0 && p.hasAttribute("data-slate-mark-placeholder")) {
          var w, C = p.childNodes[0];
          i = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            C instanceof G1 ? C : p,
            (w = p.textContent) !== null && w !== void 0 && w.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (t.offset <= g) {
          var b = Math.min(h, Math.max(0, t.offset - s));
          i = [f, b];
          break;
        }
        s = g;
      }
    }
    if (!i)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(X.stringify(t)));
    return i;
  },
  toDOMRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t, i = S.isBackward(t), o = L.toDOMPoint(e, r), l = S.isCollapsed(t) ? o : L.toDOMPoint(e, n), s = L.getWindow(e), c = s.document.createRange(), [u, f] = i ? l : o, [h, d] = i ? o : l, m = ue(u) ? u : u.parentElement, g = !!m.getAttribute("data-slate-zero-width"), p = ue(h) ? h : h.parentElement, w = !!p.getAttribute("data-slate-zero-width");
    return c.setStart(u, g ? 1 : f), c.setEnd(h, w ? 1 : d), c;
  },
  toSlateNode: (e, t) => {
    var r = ue(t) ? t : t.parentElement;
    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
    var n = r ? W1.get(r) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
    return n;
  },
  toSlatePoint: (e, t, r) => {
    var {
      exactMatch: n,
      suppressThrow: i
    } = r, [o, l] = n ? t : K1(t), s = o.parentNode, c = null, u = 0;
    if (s) {
      var f, h, d = L.toDOMNode(e, e), m = s.closest('[data-slate-void="true"]'), g = m && d.contains(m) ? m : null, p = s.closest("[data-slate-leaf]"), w = null;
      if (p) {
        if (c = p.closest('[data-slate-node="text"]'), c) {
          var C = L.getWindow(e), b = C.document.createRange();
          b.setStart(c, 0), b.setEnd(o, l);
          var y = b.cloneContents(), P = [...Array.prototype.slice.call(y.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(y.querySelectorAll("[contenteditable=false]"))];
          P.forEach((H) => {
            if (ur && !n && H.hasAttribute("data-slate-zero-width") && H.textContent.length > 0 && H.textContext !== "\uFEFF") {
              H.textContent.startsWith("\uFEFF") && (H.textContent = H.textContent.slice(1));
              return;
            }
            H.parentNode.removeChild(H);
          }), u = y.textContent.length, w = c;
        }
      } else if (g) {
        for (var x = g.querySelectorAll("[data-slate-leaf]"), T = 0; T < x.length; T++) {
          var Z = x[T];
          if (L.hasDOMNode(e, Z)) {
            p = Z;
            break;
          }
        }
        p ? (c = p.closest('[data-slate-node="text"]'), w = p, u = w.textContent.length, w.querySelectorAll("[data-slate-zero-width]").forEach((H) => {
          u -= H.textContent.length;
        })) : u = 1;
      }
      w && u === w.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      ur && w.getAttribute("data-slate-zero-width") === "z" && (f = w.textContent) !== null && f !== void 0 && f.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (s.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      yt && (h = w.textContent) !== null && h !== void 0 && h.endsWith(`

`)) && u--;
    }
    if (ur && !c && !n) {
      var U = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
      if (U && L.hasDOMNode(e, U, {
        editable: !0
      })) {
        var G = L.toSlateNode(e, U), {
          path: le,
          offset: ie
        } = D.start(e, L.findPath(e, G));
        return U.querySelector("[data-slate-leaf]") || (ie = l), {
          path: le,
          offset: ie
        };
      }
    }
    if (!c) {
      if (i)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t));
    }
    var fe = L.toSlateNode(e, c), z = L.findPath(e, fe);
    return {
      path: z,
      offset: u
    };
  },
  toSlateRange: (e, t, r) => {
    var n, {
      exactMatch: i,
      suppressThrow: o
    } = r, l = ri(t) ? t.anchorNode : t.startContainer, s, c, u, f, h;
    if (l)
      if (ri(t)) {
        if (yt && t.rangeCount > 1) {
          u = t.focusNode;
          var d = t.getRangeAt(0), m = t.getRangeAt(t.rangeCount - 1);
          if (u instanceof HTMLTableRowElement && d.startContainer instanceof HTMLTableRowElement && m.startContainer instanceof HTMLTableRowElement) {
            let T = function(Z) {
              return Z.childElementCount > 0 ? T(Z.children[0]) : Z;
            };
            var g = d.startContainer, p = m.startContainer, w = T(g.children[d.startOffset]), C = T(p.children[m.startOffset]);
            f = 0, C.childNodes.length > 0 ? s = C.childNodes[0] : s = C, w.childNodes.length > 0 ? u = w.childNodes[0] : u = w, C instanceof HTMLElement ? c = C.innerHTML.length : c = 0;
          } else
            d.startContainer === u ? (s = m.endContainer, c = m.endOffset, f = d.startOffset) : (s = d.startContainer, c = d.endOffset, f = m.startOffset);
        } else
          s = t.anchorNode, c = t.anchorOffset, u = t.focusNode, f = t.focusOffset;
        I1 && Y1(s) || yt ? h = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : h = t.isCollapsed;
      } else
        s = t.startContainer, c = t.startOffset, u = t.endContainer, f = t.endOffset, h = t.collapsed;
    if (s == null || u == null || c == null || f == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
    if (yt && (n = u.textContent) !== null && n !== void 0 && n.endsWith(`

`) && f === u.textContent.length && f--, "getAttribute" in u && u.getAttribute("contenteditable") === "false" && u.getAttribute("data-slate-void") !== "true") {
      var b;
      u = s, f = ((b = s.textContent) === null || b === void 0 ? void 0 : b.length) || 0;
    }
    var y = L.toSlatePoint(e, [s, c], {
      exactMatch: i,
      suppressThrow: o
    });
    if (!y)
      return null;
    var P = h ? y : L.toSlatePoint(e, [u, f], {
      exactMatch: i,
      suppressThrow: o
    });
    if (!P)
      return null;
    var x = {
      anchor: y,
      focus: P
    };
    return S.isExpanded(x) && S.isForward(x) && ue(u) && D.void(e, {
      at: x.focus,
      mode: "highest"
    }) && (x = D.unhangRange(e, x, {
      voids: !0
    })), x;
  }
}, ec = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
}, tc = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
}, rc = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, j = (e) => {
  var t = ec[e], r = tc[e], n = rc[e], i = t && _e.isHotkey(t), o = r && _e.isHotkey(r), l = n && _e.isHotkey(n);
  return (s) => !!(i && i(s) || Qn && o && o(s) || !Qn && l && l(s));
};
j("bold"), j("compose"), j("moveBackward"), j("moveForward"), j("deleteBackward"), j("deleteForward"), j("deleteLineBackward"), j("deleteLineForward"), j("deleteWordBackward"), j("deleteWordForward"), j("extendBackward"), j("extendForward"), j("extendLineBackward"), j("extendLineForward"), j("italic"), j("moveLineBackward"), j("moveLineForward"), j("moveWordBackward"), j("moveWordForward"), j("redo"), j("insertSoftBreak"), j("splitBlock"), j("transposeCharacter"), j("undo");
var nc = (e, t) => {
  var r = [], n = () => {
    r = [];
  }, i = (l) => {
    if (t.current) {
      var s = l.filter((c) => mo(e, c, l));
      r.push(...s);
    }
  };
  function o() {
    r.length > 0 && (r.reverse().forEach((l) => {
      l.type !== "characterData" && (l.removedNodes.forEach((s) => {
        l.target.insertBefore(s, l.nextSibling);
      }), l.addedNodes.forEach((s) => {
        l.target.removeChild(s);
      }));
    }), n());
  }
  return {
    registerMutations: i,
    restoreDOM: o,
    clear: n
  };
}, ic = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class oc extends va {
  constructor() {
    super(...arguments), tt(this, "context", null), tt(this, "manager", null), tt(this, "mutationObserver", null);
  }
  observe() {
    var t, {
      node: r
    } = this.props;
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (t = this.mutationObserver) === null || t === void 0 || t.observe(r.current, ic);
  }
  componentDidMount() {
    var {
      receivedUserInput: t
    } = this.props, r = this.context;
    this.manager = nc(r, t), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var t, r, n, i = (t = this.mutationObserver) === null || t === void 0 ? void 0 : t.takeRecords();
    if (i != null && i.length) {
      var o;
      (o = this.manager) === null || o === void 0 || o.registerMutations(i);
    }
    return (r = this.mutationObserver) === null || r === void 0 || r.disconnect(), (n = this.manager) === null || n === void 0 || n.restoreDOM(), null;
  }
  componentDidUpdate() {
    var t;
    (t = this.manager) === null || t === void 0 || t.clear(), this.observe();
  }
  componentWillUnmount() {
    var t;
    (t = this.mutationObserver) === null || t === void 0 || t.disconnect();
  }
  render() {
    return this.props.children;
  }
}
tt(oc, "contextType", A1);
const ac = ({
  board: e,
  title: t
}) => {
  const { appState: r, setAppState: n } = ne();
  return /* @__PURE__ */ a(
    A,
    {
      className: M("property-button"),
      visible: !0,
      icon: wl,
      type: "button",
      title: t,
      "aria-label": t,
      onPointerUp: () => {
        const i = be(e)[0], o = ya(i);
        qe.getLinkElement(o) || qe.wrapLink(o, "链接", ""), setTimeout(() => {
          const c = qe.getLinkElement(o)[0], u = L.toDOMNode(o, c);
          n({
            ...r,
            linkState: {
              editor: o,
              targetDom: u,
              targetElement: c,
              isEditing: !0,
              isHovering: !1,
              isHoveringOrigin: !1
            }
          });
        }, 0);
      }
    }
  );
}, sc = () => {
  var d, m;
  const e = $(), t = be(e), [r, n] = _(!1), i = se(r), o = t.length > 0 && !na(e) && !t.some(q.isImage), { viewport: l, selection: s, children: c } = e, { refs: u, floatingStyles: f } = Tt({
    placement: "right-start",
    middleware: [xr(32), Mr()]
  });
  let h = {
    fill: "red"
  };
  if (o && !r) {
    const g = t.some((b) => dc(e, b)) && !N.hasBeenTextEditing(e), p = t.some(
      (b) => hc(e, b)
    ), w = t.some((b) => po(e, b)) && !N.hasBeenTextEditing(e), C = t.some((b) => fc(e, b)) && !N.hasBeenTextEditing(e);
    h = {
      ...uc(e),
      hasFill: g,
      hasFontColor: p,
      hasStroke: w,
      hasStrokeStyle: C,
      hasText: p
    };
  }
  return Y(() => {
    if (o) {
      const g = t.length > 0;
      if (!r && g) {
        const p = be(e), w = ia(e, p, !1), [C, b] = Ve.getPoints(w), y = rn(
          e,
          nn(e, C)
        ), P = rn(
          e,
          nn(e, b)
        ), x = P[0] - y[0], T = P[1] - y[1];
        u.setPositionReference({
          getBoundingClientRect() {
            return {
              width: x,
              height: T,
              x: y[0],
              y: y[1],
              top: y[1],
              left: y[0],
              right: y[0] + x,
              bottom: y[1] + T
            };
          }
        });
      }
    }
  }, [l, s, c, r]), Y(() => {
    i.current = r;
  }, [r]), Y(() => {
    const { pointerUp: g, pointerMove: p } = e;
    return e.pointerMove = (w) => {
      (hr(e) || on(e)) && !i.current && n(!0), p(w);
    }, e.pointerUp = (w) => {
      i.current && (hr(e) || on(e)) && n(!1), g(w);
    }, () => {
      e.pointerUp = g, e.pointerMove = p;
    };
  }, [e]), /* @__PURE__ */ a(Ce, { children: o && !r && /* @__PURE__ */ a(
    re,
    {
      padding: 1,
      className: M("popup-toolbar", Oe),
      ref: u.setFloating,
      style: f,
      children: /* @__PURE__ */ k(J.Row, { gap: 1, children: [
        h.hasFontColor && /* @__PURE__ */ a(
          ql,
          {
            board: e,
            currentColor: (d = h.marks) == null ? void 0 : d.color,
            title: "Font Color",
            fontColorIcon: /* @__PURE__ */ a(dl, { currentColor: (m = h.marks) == null ? void 0 : m.color })
          },
          0
        ),
        h.hasStroke && /* @__PURE__ */ a(
          $l,
          {
            board: e,
            currentColor: h.strokeColor,
            title: "Stroke",
            hasStrokeStyle: h.hasStrokeStyle || !1,
            children: /* @__PURE__ */ a(
              "label",
              {
                className: M("stroke-label", "color-label"),
                style: { borderColor: h.strokeColor }
              }
            )
          },
          1
        ),
        h.hasFill && /* @__PURE__ */ a(
          Vl,
          {
            board: e,
            currentColor: h.fill,
            title: "Fill Color",
            children: /* @__PURE__ */ a(
              "label",
              {
                className: M("fill-label", "color-label", {
                  "color-white": h.fill && Xi(Be(h.fill))
                }),
                style: { backgroundColor: h.fill }
              }
            )
          },
          2
        ),
        h.hasText && /* @__PURE__ */ a(
          ac,
          {
            board: e,
            title: "Link"
          },
          3
        )
      ] })
    }
  ) });
}, lc = (e, t) => {
  const r = Dr(t);
  return {
    fill: t.fill,
    strokeColor: Oi(e, t),
    marks: r
  };
}, cc = (e, t) => {
  const r = Dr(t);
  return {
    fill: t.fill,
    strokeColor: bi(e, t),
    marks: r
  };
}, uc = (e) => {
  const t = be(e)[0];
  return pe.isMindElement(e, t) ? lc(e, t) : cc(e, t);
}, dc = (e, t) => pe.isMindElement(e, t) || Pr(e, t) ? !0 : q.isDrawElement(t) ? q.isShapeElement(t) && !q.isImage(t) && !q.isText(t) && Ci(t) : !1, po = (e, t) => pe.isMindElement(e, t) || ae.isFreehand(t) ? !0 : q.isDrawElement(t) ? q.isShapeElement(t) && !q.isImage(t) && !q.isText(t) || q.isArrowLine(t) || q.isVectorLine(t) || q.isTable(t) : !1, fc = (e, t) => po(e, t), hc = (e, t) => pe.isMindElement(e, t) ? !0 : q.isDrawElement(t) ? Da([t]) : !1, vo = ({
  icon: e,
  shortcut: t,
  href: r,
  children: n,
  onSelect: i,
  className: o = "",
  selected: l,
  ...s
}) => {
  const c = Vi(s.onClick, i);
  return /* @__PURE__ */ a(
    "a",
    {
      ...s,
      href: r,
      target: "_blank",
      rel: "noreferrer",
      className: pr(o, l),
      title: s.title ?? s["aria-label"],
      onClick: c,
      children: /* @__PURE__ */ a(Gi, { icon: e, shortcut: t, children: n })
    }
  );
};
vo.displayName = "MenuItemLink";
const kt = (e, t) => {
  const r = be(e);
  _s(e, {
    elements: r.length > 0 ? r : void 0,
    fillStyle: t ? "transparent" : "white"
  }).then((n) => {
    if (n) {
      const i = t ? "png" : "jpg", o = Ts(n), l = `drawnix-${(/* @__PURE__ */ new Date()).getTime()}.${i}`;
      Ns(o, l);
    }
  });
}, wo = () => {
  const e = $();
  return /* @__PURE__ */ a(
    te,
    {
      "data-testid": "save-button",
      onSelect: () => {
        Ai(e);
      },
      icon: tl,
      "aria-label": "保存文件",
      shortcut: "Cmd+S",
      children: "保存文件"
    }
  );
};
wo.displayName = "SaveToFile";
const yo = () => {
  const e = $(), t = Xo(), r = (n, i, o) => {
    e.children = n, e.viewport = i || { zoom: 1 }, e.theme = { themeColorMode: Me.default }, t.update(e.children, {
      board: e,
      parent: e,
      parentG: N.getElementHost(e)
    }), de.fitViewport(e);
  };
  return /* @__PURE__ */ a(
    te,
    {
      "data-testid": "open-button",
      onSelect: () => {
        gs(e).then((n) => {
          r(n.elements, n.viewport);
        });
      },
      icon: rl,
      "aria-label": "打开",
      children: "打开"
    }
  );
};
yo.displayName = "OpenFile";
const Co = () => {
  const e = $(), t = Sr(Ar);
  return /* @__PURE__ */ a(
    te,
    {
      icon: Js,
      "data-testid": "image-export-button",
      onSelect: () => {
        kt(e, !0);
      },
      submenu: /* @__PURE__ */ k(ft, { onSelect: () => {
        var n;
        const r = new CustomEvent(it.MENU_ITEM_SELECT, {
          bubbles: !0,
          cancelable: !0
        });
        (n = t.onSelect) == null || n.call(t, r);
      }, children: [
        /* @__PURE__ */ a(
          te,
          {
            onSelect: () => {
              kt(e, !0);
            },
            "aria-label": "透明背景",
            children: "PNG"
          }
        ),
        /* @__PURE__ */ a(
          te,
          {
            onSelect: () => {
              kt(e, !1);
            },
            "aria-label": "白色背景",
            children: "JPG"
          }
        )
      ] }),
      shortcut: "Cmd+Shift+E",
      "aria-label": "",
      children: "导出图片"
    }
  );
};
Co.displayName = "SaveAsImage";
const bo = () => {
  const { appState: e, setAppState: t } = ne();
  return /* @__PURE__ */ a(
    te,
    {
      icon: Ot,
      "data-testid": "reset-button",
      onSelect: () => {
        t({
          ...e,
          openCleanConfirm: !0
        });
      },
      shortcut: "Cmd+Backspace",
      "aria-label": "清除画布",
      children: "清除画布"
    }
  );
};
bo.displayName = "CleanBoard";
const ko = () => /* @__PURE__ */ a(
  vo,
  {
    icon: Xs,
    href: "https://github.com/plait-board/drawnix",
    "aria-label": "GitHub",
    children: "GitHub"
  }
);
ko.displayName = "Socials";
const Oo = () => /* @__PURE__ */ a(
  "div",
  {
    style: {
      height: "1px",
      backgroundColor: "var(--color-gray-10)",
      margin: ".5rem 0"
    }
  }
);
Oo.displayName = "MenuSeparator";
const gc = () => {
  const e = $(), t = N.getBoardContainer(e), r = be(e), [n, i] = _(!1), o = e.history.undos.length <= 0, l = e.history.redos.length <= 0;
  return /* @__PURE__ */ a(
    re,
    {
      padding: 1,
      className: M("app-toolbar", Oe),
      children: /* @__PURE__ */ k(J.Row, { gap: 1, children: [
        /* @__PURE__ */ k(
          ve,
          {
            sideOffset: 12,
            open: n,
            onOpenChange: (s) => {
              i(s);
            },
            placement: "bottom-start",
            children: [
              /* @__PURE__ */ a(we, { asChild: !0, children: /* @__PURE__ */ a(
                A,
                {
                  type: "icon",
                  visible: !0,
                  selected: n,
                  icon: Ys,
                  title: "App Menu",
                  "aria-label": "App Menu",
                  onPointerDown: () => {
                    i(!n);
                  }
                }
              ) }),
              /* @__PURE__ */ a(ye, { container: t, children: /* @__PURE__ */ k(
                ft,
                {
                  onSelect: () => {
                    i(!1);
                  },
                  children: [
                    /* @__PURE__ */ a(yo, {}),
                    /* @__PURE__ */ a(wo, {}),
                    /* @__PURE__ */ a(Co, {}),
                    /* @__PURE__ */ a(bo, {}),
                    /* @__PURE__ */ a(Oo, {}),
                    /* @__PURE__ */ a(ko, {})
                  ]
                }
              ) })
            ]
          },
          0
        ),
        /* @__PURE__ */ a(
          A,
          {
            type: "icon",
            icon: fl,
            visible: !0,
            title: "Undo",
            "aria-label": "Undo",
            onPointerUp: () => {
              e.undo();
            },
            disabled: o
          },
          1
        ),
        /* @__PURE__ */ a(
          A,
          {
            type: "icon",
            icon: hl,
            visible: !0,
            title: "Redo",
            "aria-label": "Redo",
            onPointerUp: () => {
              e.redo();
            },
            disabled: l
          },
          2
        ),
        r.length > 0 && /* @__PURE__ */ a(
          A,
          {
            className: "duplicate",
            type: "icon",
            icon: gl,
            visible: !0,
            title: "Duplicate",
            "aria-label": "Duplicate",
            onPointerUp: () => {
              oa(e);
            }
          },
          3
        ),
        r.length > 0 && /* @__PURE__ */ a(
          A,
          {
            className: "trash",
            type: "icon",
            icon: Ot,
            visible: !0,
            title: "Trash",
            "aria-label": "Trash",
            onPointerUp: () => {
              aa(e);
            }
          },
          4
        )
      ] })
    }
  );
}, mc = (e) => (r) => {
  const { globalKeyDown: n } = r;
  return r.globalKeyDown = (i) => {
    if (N.getMovingPointInBoard(r) || N.isMovingPointInBoard(r)) {
      if (_e.isHotkey(["mod+shift+e"], { byKey: !0 })(i)) {
        kt(r, !0), i.preventDefault();
        return;
      }
      if (_e.isHotkey(["mod+s"], { byKey: !0 })(i)) {
        Ai(r), i.preventDefault();
        return;
      }
      if (_e.isHotkey(["mod+backspace"])(i) || _e.isHotkey(["mod+delete"])(i)) {
        e({
          openCleanConfirm: !0
        }), i.preventDefault();
        return;
      }
    }
    n(i);
  }, r;
};
function pc() {
  return [Rr.feltTipPen];
}
const ni = (e, t) => ({
  id: ca(),
  type: "freehand",
  shape: e,
  points: t
}), vc = (e, t, r) => {
  const n = sa(e, r, t) || r, i = t.points;
  return _a(t.points) ? la(n, i) || ln(i, n) : ln(i, n);
}, wc = (e, t, r) => {
  const n = Ve.getRectangleByPoints([
    r.anchor,
    r.focus
  ]);
  return Ta(
    n,
    t.points,
    t.angle
  );
}, ii = (e) => be(e).filter((t) => ae.isFreehand(t)), yc = (e) => Ui[e].strokeColor, Cc = (e) => Ui[e].fill, bc = (e, t) => {
  const r = yc(
    e.theme.themeColorMode
  );
  return t.strokeColor || r;
}, kc = (e, t) => {
  const r = ae.isFreehand(t) && Pr(e, t) ? Cc(e.theme.themeColorMode) : Na.fill;
  return t.fill || r;
};
function Oc(e, t) {
  return Math.exp(-(e * e) / (2 * t * t));
}
function Lc(e, t, r) {
  if (e.length < 2) return e;
  const n = Math.floor(r / 2), i = [];
  function o(s) {
    if (s < 0) {
      const c = -s - 1;
      if (c < e.length)
        return [
          2 * e[0][0] - e[c][0],
          2 * e[0][1] - e[c][1]
        ];
    } else if (s >= e.length) {
      const c = 2 * e.length - s - 1;
      if (c >= 0)
        return [
          2 * e[e.length - 1][0] - e[c][0],
          2 * e[e.length - 1][1] - e[c][1]
        ];
    }
    return e[s];
  }
  function l(s) {
    const c = Math.min(s, e.length - 1 - s);
    return Math.min(n, c + Math.floor(n / 2));
  }
  for (let s = 0; s < e.length; s++) {
    let c = 0, u = 0, f = 0;
    const h = l(s);
    for (let d = -h; d <= h; d++) {
      const m = s + d, g = o(m);
      let p = Oc(d, t);
      if (s < n || s >= e.length - n) {
        const w = 1 + 0.5 * (1 - Math.abs(d) / h);
        p *= d === 0 ? w : 1;
      }
      c += g[0] * p, u += g[1] * p, f += p;
    }
    s === 0 || s === e.length - 1 ? i.push([e[s][0], e[s][1]]) : i.push([c / f, u / f]);
  }
  return i;
}
class Lo extends Ca {
  draw(t) {
    const r = Fa(t), n = bc(this.board, t), i = kc(this.board, t), o = { strokeWidth: r, stroke: n, fill: i, fillStyle: "solid" }, l = N.getRoughSVG(this.board).curve(
      Lc(t.points, 1, 3),
      o
    );
    return ua(l, "round"), l;
  }
  canDraw(t) {
    return !0;
  }
}
class Ec extends ba {
  constructor() {
    super();
  }
  initializeGenerator() {
    this.activeGenerator = ka(this.board, {
      getRectangle: (t) => Ve.getRectangleByPoints(t.points),
      getStrokeWidth: () => da,
      getStrokeOpacity: () => 1,
      hasResizeHandle: () => Oa(this.board, this.element)
    }), this.generator = new Lo(this.board);
  }
  initialize() {
    super.initialize(), this.initializeGenerator(), this.generator.processDrawing(this.element, this.getElementG());
  }
  onContextChanged(t, r) {
    t.element !== r.element || t.hasThemeChanged ? (this.generator.processDrawing(this.element, this.getElementG()), this.activeGenerator.processDrawing(
      this.element,
      N.getActiveHost(this.board),
      {
        selected: this.selected
      }
    )) : (t.selected !== r.selected || t.selected) && this.activeGenerator.processDrawing(
      this.element,
      N.getActiveHost(this.board),
      {
        selected: this.selected
      }
    );
  }
  destroy() {
    var t;
    super.destroy(), (t = this.activeGenerator) == null || t.destroy();
  }
}
class Sc {
  constructor(t = {}) {
    this.defaultOptions = {
      smoothing: 0.65,
      velocityWeight: 0.2,
      curvatureWeight: 0.3,
      minDistance: 0.2,
      // 降低最小距离阈值
      maxPoints: 8,
      pressureSensitivity: 0.5,
      tiltSensitivity: 0.3,
      velocityThreshold: 800,
      samplingRate: 5
      // 降低采样间隔
    }, this.points = [], this.lastProcessedTime = 0, this.movingAverageVelocity = [], this.velocityWindowSize = 3, this.options = { ...this.defaultOptions, ...t };
  }
  process(t, r = {}) {
    const n = r.timestamp ?? Date.now();
    if (this.points.length === 0) {
      const c = { point: t, timestamp: n, ...r };
      return this.points.push(c), this.lastProcessedTime = n, t;
    }
    if (n - this.lastProcessedTime < this.options.samplingRate && n - this.lastProcessedTime < 2)
      return null;
    const i = {
      point: t,
      timestamp: n,
      ...r
    };
    if (!this.checkDistance(t) && this.points.length > 1 && n - this.lastProcessedTime < 32)
      return null;
    this.updatePoints(i);
    const l = this.calculateDynamicParameters(i), s = this.smooth(t, l);
    return this.lastProcessedTime = n, s;
  }
  reset() {
    this.points = [], this.lastProcessedTime = 0, this.movingAverageVelocity = [];
  }
  updatePoints(t) {
    this.points.push(t), this.points.length > this.options.maxPoints && this.points.shift();
  }
  checkDistance(t) {
    if (this.points.length === 0) return !0;
    const r = this.points[this.points.length - 1].point, n = this.getDistance(r, t);
    let i = this.options.minDistance;
    if (this.movingAverageVelocity.length > 0) {
      const o = this.getAverageVelocity();
      i *= Math.max(0.5, Math.min(1.5, o / 200));
    }
    return n >= i;
  }
  calculateDynamicParameters(t) {
    const r = this.calculateVelocity(t);
    this.updateMovingAverage(r);
    const n = this.getAverageVelocity(), i = { ...this.options };
    if (t.pressure !== void 0) {
      const l = Math.pow(t.pressure, 1.2);
      i.smoothing *= 1 - l * i.pressureSensitivity * 0.8;
    }
    const o = Math.min(n / i.velocityThreshold, 1);
    if (i.velocityWeight = 0.2 + o * 0.3, i.smoothing *= 1 + o * 0.2, t.tiltX !== void 0 && t.tiltY !== void 0) {
      const l = Math.sqrt(t.tiltX ** 2 + t.tiltY ** 2) / 90;
      i.smoothing *= 1 + l * i.tiltSensitivity * 0.7;
    }
    return i;
  }
  smooth(t, r) {
    if (this.points.length < 2) return t;
    const n = this.calculateWeights(r), i = n.reduce((l, s) => l + s, 0);
    if (i === 0) return t;
    const o = [0, 0];
    for (let l = 0; l < this.points.length; l++) {
      const s = n[l] / i;
      o[0] += this.points[l].point[0] * s, o[1] += this.points[l].point[1] * s;
    }
    return o;
  }
  calculateWeights(t) {
    const r = [], n = this.points.length - 1;
    for (let i = 0; i < this.points.length; i++) {
      let o = Math.pow(t.smoothing, (n - i) * 0.8);
      if (i < n) {
        const l = this.getPointVelocity(i);
        o *= 1 + l * t.velocityWeight * 0.8;
      }
      if (i > 0 && i < n) {
        const l = this.getPointCurvature(i);
        o *= 1 + l * t.curvatureWeight * 0.7;
      }
      r.push(o);
    }
    return r;
  }
  // 工具方法保持不变
  getDistance(t, r) {
    return fi(t[0], t[1], r[0], r[1]);
  }
  calculateVelocity(t) {
    if (this.points.length < 2) return 0;
    const r = this.points[this.points.length - 1], n = this.getDistance(r.point, t.point), i = t.timestamp - r.timestamp;
    return i > 0 ? n / i : 0;
  }
  updateMovingAverage(t) {
    this.movingAverageVelocity.push(t), this.movingAverageVelocity.length > this.velocityWindowSize && this.movingAverageVelocity.shift();
  }
  getAverageVelocity() {
    return this.movingAverageVelocity.length === 0 ? 0 : this.movingAverageVelocity.reduce((t, r) => t + r) / this.movingAverageVelocity.length;
  }
  getPointVelocity(t) {
    if (t >= this.points.length - 1) return 0;
    const r = this.points[t], n = this.points[t + 1], i = this.getDistance(r.point, n.point), o = n.timestamp - r.timestamp;
    return o > 0 ? i / o : 0;
  }
  getPointCurvature(t) {
    if (t <= 0 || t >= this.points.length - 1) return 0;
    const r = this.points[t - 1].point, n = this.points[t].point, i = this.points[t + 1].point, o = this.getDistance(r, n), l = this.getDistance(n, i), s = this.getDistance(r, i), c = (o + l + s) / 2;
    return 4 * Math.sqrt(Math.max(0, c * (c - o) * (c - l) * (c - s))) / (o * l * s + 1e-4);
  }
}
const Pc = (e) => {
  const { pointerDown: t, pointerMove: r, pointerUp: n, globalPointerUp: i } = e;
  let o = !1, l = !1, s = [], c = null;
  const u = new Lo(e), f = new Sc({
    smoothing: 0.7,
    pressureSensitivity: 0.6
  });
  let h = null;
  const d = (m) => {
    if (o) {
      const g = N.getPointer(e);
      l && s.push(s[0]), h = ni(g, s);
    }
    h && !m && me.insertNode(e, h, [e.children.length]), u == null || u.destroy(), h = null, o = !1, s = [], f.reset();
  };
  return e.pointerDown = (m) => {
    const g = pc();
    if (N.isInPointer(e, g) && La(e)) {
      o = !0, c = [m.x, m.y];
      const w = f.process(c), C = dr(
        e,
        fr(e, w[0], w[1])
      );
      s.push(C);
    }
    t(m);
  }, e.pointerMove = (m) => {
    if (o) {
      const g = [m.x, m.y];
      c && fi(
        c[0],
        c[1],
        g[0],
        g[1]
      ) < 8 ? l = !0 : l = !1;
      const p = f.process(g);
      if (p) {
        u == null || u.destroy();
        const w = dr(
          e,
          fr(e, p[0], p[1])
        );
        s.push(w);
        const C = N.getPointer(e);
        h = ni(C, s), u.processDrawing(
          h,
          N.getElementTopHost(e)
        );
      }
      return;
    }
    r(m);
  }, e.pointerUp = (m) => {
    d(), n(m);
  }, e.globalPointerUp = (m) => {
    d(!0), i(m);
  }, e;
}, xc = (e) => {
  const t = e, { getDeletedFragment: r, buildFragment: n, insertFragment: i } = t;
  return t.getDeletedFragment = (o) => {
    const l = ii(t);
    return l.length && o.push(...l), r(o);
  }, t.buildFragment = (o, l, s, c) => {
    const u = ii(t);
    if (u.length) {
      const f = Ea(
        t,
        u,
        l ? [l.x, l.y] : [0, 0]
      );
      o = fa(o, {
        text: "",
        type: ha.elements,
        elements: f
      });
    }
    return n(
      o,
      l,
      s,
      c
    );
  }, t.insertFragment = (o, l, s) => {
    var u;
    const c = (u = o == null ? void 0 : o.elements) == null ? void 0 : u.filter(
      (f) => ae.isFreehand(f)
    );
    c && c.length > 0 && Sa(t, c, l), i(o, l, s);
  }, t;
}, Mc = (e) => {
  const {
    getRectangle: t,
    drawElement: r,
    isHit: n,
    isRectangleHit: i,
    getOneHitElement: o,
    isMovable: l,
    isAlign: s
  } = e;
  return e.drawElement = (c) => ae.isFreehand(c.element) ? Ec : r(c), e.getRectangle = (c) => ae.isFreehand(c) ? Ve.getRectangleByPoints(c.points) : t(c), e.isRectangleHit = (c, u) => ae.isFreehand(c) ? wc(e, c, u) : i(c, u), e.isHit = (c, u, f) => ae.isFreehand(c) ? vc(e, c, u) : n(c, u, f), e.getOneHitElement = (c) => c.every((f) => ae.isFreehand(f)) ? Ra(e, c) : o(c), e.isMovable = (c) => ae.isFreehand(c) ? !0 : l(c), e.isAlign = (c) => ae.isFreehand(c) ? !0 : s(c), e.setPluginOptions(
    Aa,
    { customGeometryTypes: [qi] }
  ), xc(Pc(e));
}, Dc = () => {
  const e = $(), t = e.theme;
  return /* @__PURE__ */ a(
    re,
    {
      padding: 1,
      className: M("theme-toolbar", Oe),
      children: /* @__PURE__ */ k(
        "select",
        {
          onChange: (r) => {
            const n = r.target.value;
            de.updateThemeColor(e, n);
          },
          value: t.themeColorMode,
          children: [
            /* @__PURE__ */ a("option", { value: "default", children: "默认" }),
            /* @__PURE__ */ a("option", { value: "colorful", children: "缤纷" }),
            /* @__PURE__ */ a("option", { value: "soft", children: "柔和" }),
            /* @__PURE__ */ a("option", { value: "retro", children: "复古" }),
            /* @__PURE__ */ a("option", { value: "dark", children: "暗夜" }),
            /* @__PURE__ */ a("option", { value: "starry", children: "星空" })
          ]
        }
      )
    }
  );
}, Eo = /* @__PURE__ */ new WeakMap(), oi = (e) => !!Eo.get(e), So = (e, t) => {
  Eo.set(e, t);
}, Tc = (e) => (r) => {
  const { pointerDown: n } = r;
  return r.pointerDown = (i) => {
    an(i) && !oi(r) && (So(r, !0), e({ isPencilMode: !0 })), !(oi(r) && !an(i)) && n(i);
  }, r;
}, _c = () => {
  const e = $(), { appState: t, setAppState: r } = ne();
  return /* @__PURE__ */ a(Ce, { children: t.isPencilMode && /* @__PURE__ */ a("div", { className: "pencil-mode-toolbar", children: /* @__PURE__ */ a(
    A,
    {
      type: "button",
      visible: !0,
      title: "X Pencil",
      "aria-label": "Arrow",
      label: "Pencil X",
      onPointerDown: () => {
        r({ ...t, isPencilMode: !1 }), So(e, !1);
      }
    }
  ) }) });
};
function Nc({
  initialOpen: e = !1,
  open: t,
  onOpenChange: r
} = {}) {
  const [n, i] = I.useState(e), [o, l] = I.useState(), [s, c] = I.useState(), u = t ?? n, f = r ?? i, h = Tt({
    open: u,
    onOpenChange: f
  }), d = h.context, m = xi(d, {
    enabled: t == null
  }), g = Mi(d, { outsidePressEvent: "mousedown" }), p = Di(d), w = Ti([m, g, p]);
  return I.useMemo(
    () => ({
      open: u,
      setOpen: f,
      ...w,
      ...h,
      labelId: o,
      descriptionId: s,
      setLabelId: l,
      setDescriptionId: c
    }),
    [u, f, w, h, o, s]
  );
}
const Po = I.createContext(null), gt = () => {
  const e = I.useContext(Po);
  if (e == null)
    throw new Error("Dialog components must be wrapped in <Dialog />");
  return e;
};
function Or({
  children: e,
  ...t
}) {
  const r = Nc(t);
  return /* @__PURE__ */ a(Po.Provider, { value: r, children: e });
}
I.forwardRef(function({ children: t, asChild: r = !1, ...n }, i) {
  const o = gt(), l = t.ref, s = Dt([o.refs.setReference, i, l]);
  return r && I.isValidElement(t) ? I.cloneElement(
    t,
    o.getReferenceProps({
      ref: s,
      ...n,
      ...t.props,
      "data-state": o.open ? "open" : "closed"
    })
  ) : /* @__PURE__ */ a(
    "button",
    {
      ref: s,
      "data-state": o.open ? "open" : "closed",
      ...o.getReferenceProps(n),
      children: t
    }
  );
});
const Lr = I.forwardRef(function(t, r) {
  const { context: n, ...i } = gt(), o = Dt([i.refs.setFloating, r]);
  return n.open ? /* @__PURE__ */ a(Si, { root: t.container, children: /* @__PURE__ */ a(qa, { className: "Dialog-overlay", lockScroll: !0, children: /* @__PURE__ */ a(Pi, { context: n, children: /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      "aria-labelledby": i.labelId,
      "aria-describedby": i.descriptionId,
      ...i.getFloatingProps(t),
      children: t.children
    }
  ) }) }) }) : null;
});
I.forwardRef(function({ children: t, ...r }, n) {
  const { setLabelId: i } = gt(), o = _i();
  return I.useLayoutEffect(() => (i(o), () => i(void 0)), [o, i]), /* @__PURE__ */ a("h2", { ...r, ref: n, id: o, children: t });
});
I.forwardRef(function({ children: t, ...r }, n) {
  const { setDescriptionId: i } = gt(), o = _i();
  return I.useLayoutEffect(() => (i(o), () => i(void 0)), [o, i]), /* @__PURE__ */ a("p", { ...r, ref: n, id: o, children: t });
});
I.forwardRef(function(t, r) {
  const { setOpen: n } = gt();
  return /* @__PURE__ */ a("button", { type: "button", ...t, ref: r, onClick: () => n(!1) });
});
const xo = ({ children: e }) => /* @__PURE__ */ a("div", { className: "ttd-dialog-panels", children: e }), xt = ({
  label: e,
  children: t,
  panelAction: r,
  panelActionDisabled: n = !1,
  onTextSubmitInProgress: i,
  renderTopRight: o,
  renderSubmitShortcut: l,
  renderBottomRight: s
}) => /* @__PURE__ */ k("div", { className: "ttd-dialog-panel", children: [
  /* @__PURE__ */ k("div", { className: "ttd-dialog-panel__header", children: [
    /* @__PURE__ */ a("label", { children: e }),
    o == null ? void 0 : o()
  ] }),
  t,
  /* @__PURE__ */ k(
    "div",
    {
      className: M("ttd-dialog-panel-button-container", {
        invisible: !r
      }),
      style: { display: "flex", alignItems: "center" },
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            className: "ttd-dialog-panel-button drawnix-button ",
            onClick: r && r.action,
            disabled: n || i,
            children: /* @__PURE__ */ k("div", { className: M({ invisible: i }), children: [
              r == null ? void 0 : r.label,
              (r == null ? void 0 : r.icon) && /* @__PURE__ */ a("span", { children: r.icon })
            ] })
          }
        ),
        !n && !i && (l == null ? void 0 : l()),
        s == null ? void 0 : s()
      ]
    }
  )
] }), ai = {
  CTRL_OR_CMD: ga || di ? "metaKey" : "ctrlKey",
  ENTER: "Enter"
}, Mo = ({
  input: e,
  placeholder: t,
  onChange: r,
  onKeyboardSubmit: n
}) => {
  const i = se(null), o = se(n);
  return o.current = n, Y(() => {
    if (!o.current)
      return;
    const l = i.current;
    if (l) {
      const s = (c) => {
        var u;
        c[ai.CTRL_OR_CMD] && c.key === ai.ENTER && (c.preventDefault(), (u = o.current) == null || u.call(o));
      };
      return l.addEventListener(it.KEYDOWN, s), () => {
        l.removeEventListener(it.KEYDOWN, s);
      };
    }
  }, []), /* @__PURE__ */ a(
    "textarea",
    {
      className: "ttd-dialog-input",
      onChange: r,
      value: e,
      placeholder: t,
      autoFocus: !0,
      ref: i
    }
  );
}, Fc = ({ error: e }) => /* @__PURE__ */ k(
  "div",
  {
    "data-testid": "ttd-dialog-output-error",
    className: "ttd-dialog-output-error",
    children: [
      "Error! ",
      /* @__PURE__ */ a("p", { children: e })
    ]
  }
), Do = ({
  error: e,
  value: t,
  loaded: r
}) => {
  const n = [ki, Li, wi, Ii], i = {
    readonly: !0,
    hideScrollbar: !1,
    disabledScrollOnNonFocus: !0,
    themeColors: Ei
  };
  return /* @__PURE__ */ k("div", { className: "ttd-dialog-output-wrapper", children: [
    e && /* @__PURE__ */ a(Fc, { error: e.message }),
    /* @__PURE__ */ a(
      "div",
      {
        style: { opacity: e ? "0.15" : 1 },
        className: "ttd-dialog-output-canvas-container",
        children: /* @__PURE__ */ a(ci, { value: t, options: i, plugins: n, children: /* @__PURE__ */ a(ui, {}) })
      }
    )
  ] });
}, To = () => /* @__PURE__ */ k("div", { className: "ttd-dialog-submit-shortcut", children: [
  /* @__PURE__ */ a("div", { className: "ttd-dialog-submit-shortcut__key", children: gn("CtrlOrCmd") }),
  /* @__PURE__ */ a("div", { className: "ttd-dialog-submit-shortcut__key", children: gn("Enter") })
] }), Rc = `flowchart TD
 A[Christmas] -->|Get money| B(Go shopping)
 B --> C{Let me think}
 C -->|One| D[Laptop]
 C -->|Two| E[iPhone]
 C -->|Three| F[Car]`, Ac = () => {
  const { appState: e, setAppState: t } = ne(), [r, n] = _({
    loaded: !1,
    api: Promise.resolve({
      parseMermaidToDrawnix: async () => ({ elements: [] })
    })
  });
  Y(() => {
    (async () => {
      try {
        const g = await import("@plait-board/mermaid-to-drawnix");
        n({
          loaded: !0,
          api: Promise.resolve(g)
        });
      } catch (g) {
        console.error("Failed to load mermaid library:", g), f(new Error("加载 Mermaid 库失败"));
      }
    })();
  }, []);
  const [i, o] = _(() => Rc), [l, s] = _(() => []), c = vi(i.trim()), [u, f] = _(null), h = $();
  Y(() => {
    (async () => {
      try {
        const g = await r.api;
        let p;
        try {
          p = await g.parseMermaidToDrawnix(c);
        } catch {
          p = await g.parseMermaidToDrawnix(
            c.replace(/"/g, "'")
          );
        }
        const { elements: w } = p;
        s(w), f(null);
      } catch (g) {
        f(g);
      }
    })();
  }, [c, r]);
  const d = () => {
    if (!l.length)
      return;
    const m = N.getBoardContainer(h).getBoundingClientRect(), g = [
      m.width / 2,
      m.height / 2
    ], p = h.viewport.zoom, w = hi(h), C = w[0] + g[0] / p, b = w[1] + g[1] / p, y = l, P = Ve.getBoundingRectangle(
      y.filter((T) => !ma.isGroup(T)).map(
        (T) => Ve.getRectangleByPoints(T.points)
      )
    ), x = [
      C - P.width / 2,
      b - P.height / 2
    ];
    h.insertFragment(
      {
        elements: JSON.parse(JSON.stringify(y))
      },
      x,
      gi.paste
    ), t({ ...e, openDialogType: null });
  };
  return /* @__PURE__ */ k(Ce, { children: [
    /* @__PURE__ */ k("div", { className: "ttd-dialog-desc", children: [
      "目前仅支持",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/flowchart.html",
          target: "_blank",
          rel: "noreferrer",
          children: "流程图"
        }
      ),
      "、",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/sequenceDiagram.html",
          target: "_blank",
          rel: "noreferrer",
          children: "序列图"
        }
      ),
      "和",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/classDiagram.html",
          target: "_blank",
          rel: "noreferrer",
          children: "类图"
        }
      ),
      "。其他类型在 Drawnix 中将以图片呈现。"
    ] }),
    /* @__PURE__ */ k(xo, { children: [
      /* @__PURE__ */ a(xt, { label: "Mermaid 语法", children: /* @__PURE__ */ a(
        Mo,
        {
          input: i,
          placeholder: "在此处编写 Mermaid 图表定义...",
          onChange: (m) => o(m.target.value),
          onKeyboardSubmit: () => {
            d();
          }
        }
      ) }),
      /* @__PURE__ */ a(
        xt,
        {
          label: "预览",
          panelAction: {
            action: () => {
              d();
            },
            label: "插入"
          },
          renderSubmitShortcut: () => /* @__PURE__ */ a(To, {}),
          children: /* @__PURE__ */ a(
            Do,
            {
              value: l,
              loaded: r.loaded,
              error: u
            }
          )
        }
      )
    ] })
  ] });
}, Ic = `# 我开始了

- 让我看看是谁搞出了这个 bug 🕵️ ♂️ 🔍
  - 😯 💣
    - 原来是我 👈 🎯 💘

- 竟然不可以运行，为什么呢 🚫 ⚙️ ❓
  - 竟然可以运行了，为什么呢？🎢 ✨
    - 🤯 ⚡ ➡️ 🎉

- 能运行起来的 🐞 🚀
  - 就不要去动它 🛑 ✋
    - 👾 💥 🏹 🎯
    
## 男孩还是女孩 👶 ❓ 🤷 ♂️ ♀️

### Hello world 👋 🌍 ✨ 💻

#### 哇 是个程序员 🤯 ⌨️ 💡 👩 💻`, Bc = () => {
  const { appState: e, setAppState: t } = ne(), [r, n] = _({
    loaded: !1,
    api: Promise.resolve({
      parseMarkdownToDrawnix: (m, g) => null
    })
  });
  Y(() => {
    (async () => {
      try {
        const g = await import("./index-5YhGRWuE.mjs");
        n({
          loaded: !0,
          api: Promise.resolve(g)
        });
      } catch (g) {
        console.error("Failed to load mermaid library:", g), f(new Error("加载 Mermaid 库失败"));
      }
    })();
  }, []);
  const [i, o] = _(() => Ic), [l, s] = _(() => []), c = vi(i.trim()), [u, f] = _(null), h = $();
  Y(() => {
    (async () => {
      try {
        const g = await r.api;
        let p;
        try {
          p = await g.parseMarkdownToDrawnix(c);
        } catch {
          p = await g.parseMarkdownToDrawnix(
            c.replace(/"/g, "'")
          );
        }
        const w = p;
        w.points = [[0, 0]], w && (s([w]), f(null));
      } catch (g) {
        f(g);
      }
    })();
  }, [c, r]);
  const d = () => {
    if (!l.length)
      return;
    const m = N.getBoardContainer(h).getBoundingClientRect(), g = [
      m.width / 4,
      m.height / 2 - 20
    ], p = h.viewport.zoom, w = hi(h), C = w[0] + g[0] / p, b = w[1] + g[1] / p, y = l;
    h.insertFragment(
      {
        elements: JSON.parse(JSON.stringify(y))
      },
      [C, b],
      gi.paste
    ), t({ ...e, openDialogType: null });
  };
  return /* @__PURE__ */ k(xo, { children: [
    /* @__PURE__ */ a(xt, { label: "Markdown 语法", children: /* @__PURE__ */ a(
      Mo,
      {
        input: i,
        placeholder: "在此处编写 Markdown 文本定义...",
        onChange: (m) => o(m.target.value),
        onKeyboardSubmit: () => {
        }
      }
    ) }),
    /* @__PURE__ */ a(
      xt,
      {
        label: "预览",
        panelAction: {
          action: () => {
            d();
          },
          label: "插入"
        },
        renderSubmitShortcut: () => /* @__PURE__ */ a(To, {}),
        children: /* @__PURE__ */ a(
          Do,
          {
            value: l,
            loaded: r.loaded,
            error: u
          }
        )
      }
    )
  ] });
}, jc = ({ container: e }) => {
  const { appState: t, setAppState: r } = ne();
  return /* @__PURE__ */ k(Ce, { children: [
    /* @__PURE__ */ a(
      Or,
      {
        open: t.openDialogType === Te.mermaidToDrawnix,
        onOpenChange: (n) => {
          r({
            ...t,
            openDialogType: n ? Te.mermaidToDrawnix : null
          });
        },
        children: /* @__PURE__ */ a(Lr, { className: "Dialog ttd-dialog", container: e, children: /* @__PURE__ */ a(Ac, {}) })
      }
    ),
    /* @__PURE__ */ a(
      Or,
      {
        open: t.openDialogType === Te.markdownToDrawnix,
        onOpenChange: (n) => {
          r({
            ...t,
            openDialogType: n ? Te.markdownToDrawnix : null
          });
        },
        children: /* @__PURE__ */ a(Lr, { className: "Dialog ttd-dialog", container: e, children: /* @__PURE__ */ a(Bc, {}) })
      }
    )
  ] });
}, zc = ({
  container: e
}) => {
  const { appState: t, setAppState: r } = ne(), n = $();
  return /* @__PURE__ */ a(
    Or,
    {
      open: t.openCleanConfirm,
      onOpenChange: (i) => {
        r({ ...t, openCleanConfirm: i });
      },
      children: /* @__PURE__ */ k(Lr, { className: "clean-confirm", container: e, children: [
        /* @__PURE__ */ a("h2", { className: "clean-confirm__title", children: "清除画布" }),
        /* @__PURE__ */ a("p", { className: "clean-confirm__description", children: "这将会清除整个画布。你是否要继续?" }),
        /* @__PURE__ */ k("div", { className: "clean-confirm__actions", children: [
          /* @__PURE__ */ a(
            "button",
            {
              className: "clean-confirm__button clean-confirm__button--cancel",
              onClick: () => {
                r({ ...t, openCleanConfirm: !1 });
              },
              children: "取消"
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              className: "clean-confirm__button clean-confirm__button--ok",
              autoFocus: !0,
              onClick: () => {
                n.deleteFragment(n.children), r({ ...t, openCleanConfirm: !1 });
              },
              children: "确认"
            }
          )
        ] })
      ] })
    }
  );
}, si = (e) => {
  const { appState: t } = e;
  return t && t.linkState && t.linkState.isHovering;
}, li = (e) => {
  const { appState: t } = e;
  return t && t.linkState && t.linkState.isEditing;
}, Hc = (e) => (r) => {
  const { pointerMove: n } = r;
  let i = null, o = null;
  return r.pointerMove = (l) => {
    (N.isPointer(r, ke.selection) || N.isPointer(r, ke.hand)) && !hr(r) && !Pa(r) && !si(r) && !li(r) && pa(r, "with-text-link", () => {
      const s = l.target.closest(
        ".plait-board-link"
      );
      if (s && s !== i) {
        const c = s.closest(
          ".plait-text-container"
        ), u = L.toSlateNode(
          void 0,
          c
        ), f = L.toSlateNode(
          void 0,
          s
        );
        i = s, e({
          linkState: {
            targetDom: s,
            targetElement: f,
            editor: u,
            isEditing: !1,
            isHovering: !1,
            isHoveringOrigin: !0
          }
        }), clearTimeout(o);
      } else
        !s && i && (o = setTimeout(() => {
          !si(r) && !li(r) && e({
            linkState: null
          });
        }, 300), i = null);
    }), n(l);
  }, r;
}, Wc = () => {
  var p, w, C, b;
  const [e, t] = _(""), { appState: r, setAppState: n } = ne(), i = $(), { refs: o, floatingStyles: l } = Tt({
    placement: "top",
    middleware: [xr(20), Mr()]
  }), s = r.linkState, c = ((p = r.linkState) == null ? void 0 : p.targetDom) || null, u = ((w = r.linkState) == null ? void 0 : w.isEditing) || !1, f = ((C = r.linkState) == null ? void 0 : C.isHoveringOrigin) || !1, h = ((b = r.linkState) == null ? void 0 : b.isHovering) || !1, d = u || f || h, m = se(r.linkState);
  Y(() => {
    m.current = r.linkState, r.linkState ? t(r.linkState.targetElement.url) : t("");
  }, [r.linkState]), Y(() => {
    if (c) {
      const y = c.getBoundingClientRect();
      o.setPositionReference({
        getBoundingClientRect() {
          return {
            x: y.x,
            y: y.y,
            width: y.width,
            height: y.height,
            top: y.y,
            left: y.x,
            right: y.x + y.width,
            bottom: y.y + y.height
          };
        }
      });
    }
  }, [i.viewport, c]), Y(() => {
    const y = (P) => {
      if (o.floating.current && !o.floating.current.contains(P.target)) {
        if (m.current) {
          const x = qe.getLinkElement(
            m.current.editor
          );
          x && !x[0].url.trim() && qe.unwrapLink(m.current.editor);
        }
        n({
          ...r,
          linkState: null
        });
      }
    };
    return document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, []);
  const g = () => {
    if (e !== s.targetElement.url) {
      const P = s.editor, x = s.targetElement, T = L.findPath(P, x);
      Fe.setNodes(P, { url: e }, { at: T });
    }
    const y = qe.getLinkElement(s.editor);
    n({
      ...r,
      linkState: {
        ...r.linkState,
        targetElement: y[0],
        isEditing: !1,
        isHoveringOrigin: !0
      }
    });
  };
  return d && /* @__PURE__ */ a(
    re,
    {
      ref: o.setFloating,
      style: l,
      padding: 1,
      className: M("link-popup"),
      onPointerEnter: () => {
        h || n({
          ...r,
          linkState: {
            ...r.linkState,
            isHovering: !0
          }
        });
      },
      onPointerLeave: () => {
        u || n({
          ...r,
          linkState: {
            ...r.linkState,
            isHovering: !1
          }
        });
      },
      children: /* @__PURE__ */ a(J.Row, { gap: 1, align: "center", children: u ? /* @__PURE__ */ k(Ce, { children: [
        /* @__PURE__ */ a(
          "input",
          {
            type: "text",
            value: e,
            onChange: (y) => {
              t(y.target.value);
            },
            onKeyDown: (y) => {
              y.key === "Enter" && g();
            },
            className: "link-popup__input",
            autoFocus: !0
          }
        ),
        /* @__PURE__ */ a(
          A,
          {
            type: "icon",
            visible: !0,
            icon: Ot,
            title: "Delete link",
            "aria-label": "Delete link",
            onPointerDown: () => {
              const y = s.editor, P = s.targetElement, x = L.findPath(y, P);
              Fe.unwrapNodes(y, {
                at: x
              }), n({
                ...r,
                linkState: null
              });
            }
          }
        )
      ] }) : /* @__PURE__ */ k(Ce, { children: [
        /* @__PURE__ */ a(
          "a",
          {
            href: e,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "link-popup__link",
            children: e
          }
        ),
        /* @__PURE__ */ a(
          A,
          {
            className: "link-popup__edit",
            type: "icon",
            visible: !0,
            icon: ji,
            title: "Edit link",
            "aria-label": "Edit link",
            onPointerDown: ({ event: y }) => {
              y.preventDefault(), n({
                ...r,
                linkState: {
                  ...r.linkState,
                  isEditing: !0
                }
              });
            }
          }
        ),
        /* @__PURE__ */ a(
          A,
          {
            type: "icon",
            visible: !0,
            icon: Ot,
            title: "Delete link",
            "aria-label": "Delete link",
            onPointerDown: () => {
              const y = s.editor, P = s.targetElement, x = L.findPath(y, P);
              Fe.unwrapNodes(y, {
                at: x
              }), n({
                ...r,
                linkState: null
              });
            }
          }
        )
      ] }) })
    }
  );
}, ou = ({
  value: e,
  viewport: t,
  theme: r,
  onChange: n,
  onSelectionChange: i,
  onViewportChange: o,
  onThemeChange: l,
  onValueChange: s,
  afterInit: c
}) => {
  const u = {
    readonly: !1,
    hideScrollbar: !1,
    disabledScrollOnNonFocus: !1,
    themeColors: Ei
  }, [f, h] = _(() => {
    const C = new za(window.navigator.userAgent);
    return {
      pointer: ke.hand,
      isMobile: C.mobile() !== null,
      isPencilMode: !1,
      openDialogType: null,
      openCleanConfirm: !1
    };
  }), [d, m] = _(null);
  d && (d.appState = f);
  const g = (C) => {
    h({
      ...f,
      ...C
    });
  }, p = [
    ki,
    wi,
    Li,
    Ga,
    Ii,
    mc(g),
    Mc,
    Tc(g),
    Hc(g)
  ], w = se(null);
  return /* @__PURE__ */ a($i.Provider, { value: { appState: f, setAppState: h }, children: /* @__PURE__ */ a(
    "div",
    {
      className: M("drawnix", {
        "drawnix--mobile": f.isMobile
      }),
      ref: w,
      children: /* @__PURE__ */ k(
        ci,
        {
          value: e,
          viewport: t,
          theme: r,
          options: u,
          plugins: p,
          onChange: (C) => {
            n && n(C);
          },
          onSelectionChange: i,
          onViewportChange: o,
          onThemeChange: l,
          onValueChange: s,
          children: [
            /* @__PURE__ */ a(
              ui,
              {
                afterInit: (C) => {
                  m(C), c && c(C);
                }
              }
            ),
            /* @__PURE__ */ a(gc, {}),
            /* @__PURE__ */ a(Tl, {}),
            /* @__PURE__ */ a(_l, {}),
            /* @__PURE__ */ a(Dc, {}),
            /* @__PURE__ */ a(sc, {}),
            /* @__PURE__ */ a(Wc, {}),
            /* @__PURE__ */ a(_c, {}),
            /* @__PURE__ */ a(jc, { container: w.current }),
            /* @__PURE__ */ a(zc, { container: w.current })
          ]
        }
      )
    }
  ) });
};
export {
  ou as D,
  Ze as a,
  nu as b,
  Xi as c,
  Ji as d,
  ht as e,
  $e as f,
  ru as g,
  Ke as h,
  Rl as i,
  Al as j,
  Ms as k,
  Ds as l,
  Ts as m,
  _s as n,
  Ns as o,
  gn as p,
  kt as q,
  Be as r,
  Bi as s,
  Qi as t,
  eo as u,
  to as v,
  iu as w
};
