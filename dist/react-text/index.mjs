import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { createEditor as D, Range as C, Transforms as u } from "slate";
import { isKeyHotkey as p } from "is-hotkey";
import { withReact as k, Slate as w, Editable as E } from "slate-react";
import { useCallback as T, useMemo as b, useEffect as v } from "react";
import { withHistory as L } from "slate-history";
import { isUrl as m, LinkEditor as g } from "@plait/text-plugins";
const S = (t) => {
  const n = t, { insertData: r } = n;
  return n.insertBreak = () => {
    t.insertText(`
`);
  }, n.insertSoftBreak = () => {
    t.insertText(`
`);
  }, n.insertData = (s) => {
    let e = s.getData("text/plain");
    if (!s.getData("application/x-slate-fragment") && e) {
      e.endsWith(`
`) && (e = e.substring(0, e.length - 1)), e = e.trim().replace(/\t+/g, " "), n.insertText(e);
      return;
    }
    r(s);
  }, n;
}, x = () => /* @__PURE__ */ o("span", { contentEditable: !1, style: { fontSize: 0 }, children: String.fromCodePoint(160) }), I = ({
  attributes: t,
  children: n,
  element: r
}) => /* @__PURE__ */ h(
  "a",
  {
    ...t,
    style: {
      textDecoration: "none",
      cursor: "inherit"
    },
    "data-url": r.url,
    className: "plait-board-link",
    children: [
      /* @__PURE__ */ o(x, {}),
      n,
      /* @__PURE__ */ o(x, {})
    ]
  }
), B = (t) => {
  const { insertData: n, insertText: r, isInline: s } = t;
  return t.isInline = (e) => e.type && ["link"].includes(e.type) || s(e), t.insertText = (e) => {
    e && m(e) ? g.wrapLink(t, e, e) : r(e);
  }, t.insertData = (e) => {
    const l = e.getData("text/plain");
    l && m(l) ? g.wrapLink(t, l, l) : n(e);
  }, t;
}, V = (t) => {
  const { text: n, readonly: r, onChange: s, onComposition: e, afterInit: l } = t, d = T(
    (i) => /* @__PURE__ */ o(H, { ...i }),
    []
  ), y = [n], a = b(() => {
    const i = B(
      S(L(k(D())))
    );
    return l && l(i), i;
  }, []);
  return v(() => {
    n !== a.children[0] && (a.children = [n], a.onChange());
  }, [n, a]), /* @__PURE__ */ o(
    w,
    {
      editor: a,
      initialValue: y,
      onChange: (i) => {
        s && s({
          newText: a.children[0],
          operations: a.operations
        });
      },
      children: /* @__PURE__ */ o(
        E,
        {
          className: "slate-editable-container plait-text-container",
          renderElement: (i) => /* @__PURE__ */ o(K, { ...i }),
          renderLeaf: d,
          readOnly: r === void 0 ? !0 : r,
          onCompositionStart: (i) => {
            e && e(i);
          },
          onCompositionUpdate: (i) => {
            e && e(i);
          },
          onCompositionEnd: (i) => {
            e && e(i);
          },
          onKeyDown: (i) => {
            const { selection: c } = a;
            if (c && C.isCollapsed(c)) {
              const { nativeEvent: f } = i;
              if (p("left", f)) {
                i.preventDefault(), u.move(a, { unit: "offset", reverse: !0 });
                return;
              }
              if (p("right", f)) {
                i.preventDefault(), u.move(a, { unit: "offset" });
                return;
              }
            }
          },
          style: { whiteSpace: "nowrap" }
        }
      )
    }
  );
}, K = (t) => {
  const { attributes: n, children: r, element: s } = t;
  switch (s.type) {
    case "link":
      return /* @__PURE__ */ o(I, { ...t });
    default:
      return /* @__PURE__ */ o(
        j,
        {
          ...t
        }
      );
  }
}, j = ({
  attributes: t,
  children: n,
  element: r
}) => {
  const s = { textAlign: r.align };
  return /* @__PURE__ */ o("div", { style: s, ...t, children: n });
}, H = ({ children: t, leaf: n, attributes: r }) => (n.bold && (t = /* @__PURE__ */ o("strong", { children: t })), n.code && (t = /* @__PURE__ */ o("code", { children: t })), n.italic && (t = /* @__PURE__ */ o("em", { children: t })), n.underlined && (t = /* @__PURE__ */ o("u", { children: t })), /* @__PURE__ */ o("span", { style: { color: n.color }, ...r, children: t }));
export {
  V as Text
};
