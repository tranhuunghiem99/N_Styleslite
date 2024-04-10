!(function (e) {
  var o = {};
  function t(n) {
    if (o[n]) return o[n].exports;
    var r = (o[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = e),
    (t.c = o),
    (t.d = function (e, o, n) {
      t.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, o) {
      if ((1 & o && (e = t(e)), 8 & o)) return e;
      if (4 & o && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & o && "string" != typeof e)
      )
        for (var r in e)
          t.d(
            n,
            r,
            function (o) {
              return e[o];
            }.bind(null, r)
          );
      return n;
    }),
    (t.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(o, "a", o), o;
    }),
    (t.o = function (e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (t.p = "/"),
    t((t.s = 248));
})({
  248: function (e, o, t) {
    "use strict";
    t.r(o);
    var n = {
      base: "vs",
      inherit: !1,
      rules: [
        { token: "", foreground: "000000", background: "fffffe" },
        { token: "invalid", foreground: "cd3131" },
        { token: "emphasis", fontStyle: "italic" },
        { token: "strong", fontStyle: "bold" },
        { token: "variable", foreground: "001188" },
        { token: "variable.predefined", foreground: "4864AA" },
        { token: "constant", foreground: "dd0000" },
        { token: "comment", foreground: "008000" },
        { token: "number", foreground: "098658" },
        { token: "number.hex", foreground: "3030c0" },
        { token: "regexp", foreground: "800000" },
        { token: "annotation", foreground: "808080" },
        { token: "type", foreground: "008080" },
        { token: "delimiter", foreground: "000000" },
        { token: "delimiter.html", foreground: "383838" },
        { token: "delimiter.xml", foreground: "0000FF" },
        { token: "tag", foreground: "800000" },
        { token: "tag.id.pug", foreground: "4F76AC" },
        { token: "tag.class.pug", foreground: "4F76AC" },
        { token: "meta.scss", foreground: "800000" },
        { token: "metatag", foreground: "e00000" },
        { token: "metatag.content.html", foreground: "d41649" },
        { token: "metatag.html", foreground: "808080" },
        { token: "metatag.xml", foreground: "808080" },
        { token: "metatag.php", fontStyle: "bold" },
        { token: "key", foreground: "863B00" },
        { token: "string.key.json", foreground: "A31515" },
        { token: "string.value.json", foreground: "0451A5" },
        { token: "attribute.name", foreground: "d41649" },
        { token: "attribute.value", foreground: "0451A5" },
        { token: "attribute.value.number", foreground: "098658" },
        { token: "attribute.value.unit", foreground: "098658" },
        { token: "attribute.value.html", foreground: "0000FF" },
        { token: "attribute.value.xml", foreground: "0000FF" },
        { token: "string", foreground: "A31515" },
        { token: "string.html", foreground: "0000FF" },
        { token: "string.sql", foreground: "d41649" },
        { token: "string.yaml", foreground: "0451A5" },
        { token: "keyword", foreground: "0000FF" },
        { token: "keyword.json", foreground: "0451A5" },
        { token: "keyword.flow", foreground: "AF00DB" },
        { token: "keyword.flow.scss", foreground: "0000FF" },
        { token: "operator.scss", foreground: "666666" },
        { token: "operator.sql", foreground: "778899" },
        { token: "operator.swift", foreground: "666666" },
        { token: "predefined.sql", foreground: "FF00FF" },
      ],
      colors: {
        editorBackground: "#FFFFFE",
        editorForeground: "#000000",
        editorInactiveSelection: "#E5EBF1",
        editorIndentGuides: "#D3D3D3",
        editorActiveIndentGuides: "#939393",
        editorSelectionHighlight: "#ADD6FF4D",
      },
    };
    new ((function () {
      function e() {
        var e = this;
        this.loadEditor(function () {
          e.attachWindowListeners(),
            e.defineThemes(),
            e.initEditor(),
            e.postMessage({ type: "nstylesMonacoIframeLoaded" });
        });
      }
      return (
        (e.prototype.loadEditor = function (e) {
          window.require.config({
            paths: {
              vs: chrome.extension.getURL(
                "monaco-editor/iframe/node_modules/monaco-editor/min/vs"
              ),
            },
          }),
            window.require(["vs/editor/editor.main"], e);
        }),
        (e.prototype.defineThemes = function () {
          window.monaco.editor.defineTheme("custom-light", n);
        }),
        (e.prototype.initEditor = function () {
          var e = this,
            o = this.getContainer(),
            t = this.getEditorOptions();
          (this.editor = window.monaco.editor.create(o, t)),
            this.editor.onDidChangeModelContent(function () {
              e.postMessage({
                css: e.editor.getValue(),
                type: "nstylesMonacoIframeCssUpdated",
              });
            });
        }),
        (e.prototype.getContainer = function () {
          return document.getElementById("container");
        }),
        (e.prototype.getEditorOptions = function () {
          var e = this.getContainer();
          return {
            value: "",
            tabSize: 2,
            theme: "custom-light",
            wordWrap: "bounded",
            wordWrapColumn: Math.round(e.offsetWidth / 8),
            scrollBeyondLastLine: !1,
            language: "css",
            folding: !1,
            renderLineHighlight: "none",
            suggestOnTriggerCharacters: !1,
            cursorBlinking: "smooth",
            mouseWheelZoom: !1,
            lineNumbers: "off",
            minimap: { enabled: !1 },
            hover: { enabled: !1 },
            codeLens: !1,
          };
        }),
        (e.prototype.postMessage = function (e) {
          window.parent.postMessage(e, "*");
        }),
        (e.prototype.handleNstylesCssUpdate = function (e, o) {
          if ((this.editor.setValue(e), this.editor.focus(), o)) {
            var t = "^" + o + "\\s\\{\\n\\s*(?!\\}).*$",
              n = this.editor
                .getModel()
                .findNextMatch(t, { column: 1, lineNumber: 1 }, !0);
            n &&
              this.editor.setSelection({
                startColumn: n.range.endColumn,
                startLineNumber: n.range.endLineNumber,
                endColumn: n.range.endColumn,
                endLineNumber: n.range.endLineNumber,
              });
          }
        }),
        (e.prototype.attachWindowListeners = function () {
          var e = this;
          window.addEventListener("resize", function () {
            e.editor.layout(), e.editor.updateOptions(e.getEditorOptions());
          }),
            window.addEventListener("message", function (o) {
              "nstylesCssUpdate" === o.data.type &&
                e.handleNstylesCssUpdate(o.data.css, o.data.selector);
            });
        }),
        e
      );
    })())();
  },
});
