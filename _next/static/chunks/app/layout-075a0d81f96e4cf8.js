(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    7316: (e, a, t) => {
      (Promise.resolve().then(t.bind(t, 4571)),
        Promise.resolve().then(t.t.bind(t, 5186, 23)),
        Promise.resolve().then(t.t.bind(t, 4635, 23)),
        Promise.resolve().then(t.t.bind(t, 9324, 23)));
    },
    4571: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => x });
      var s = t(5155);
      t(2115);
      var l = t(8173),
        r = t.n(l),
        n = t(6658),
        i = t(7401);
      let h = (0, i.A)("House", [
          [
            "path",
            { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
          ],
          [
            "path",
            {
              d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
              key: "1d0kgt",
            },
          ],
        ]),
        o = (0, i.A)("Info", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M12 16v-4", key: "1dtifu" }],
          ["path", { d: "M12 8h.01", key: "e9boi3" }],
        ]),
        c = (0, i.A)("Calendar", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "4",
              rx: "2",
              key: "1hopcy",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
        ]);
      var m = t(1024),
        d = t(2823);
      function x() {
        let e = (0, n.usePathname)(),
          a = (a) => ("/" === a ? e === a : e.startsWith(a)),
          t = (e, a) => {
            if (a.startsWith("/#")) {
              e.preventDefault();
              let t = a.replace("/#", ""),
                s = document.getElementById(t);
              s && s.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("nav", {
            className:
              "fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-full z-20 w-full max-w-6xl lg:max-w-none lg:w-auto",
            children: (0, s.jsx)("div", {
              className: "px-2 py-2 lg:px-4",
              children: (0, s.jsxs)("ul", {
                className:
                  "flex items-center justify-between space-x-1 sm:space-x-2 lg:space-x-4",
                children: [
                  (0, s.jsx)("li", {
                    className: "flex-shrink-0 mr-2 sm:mr-4 lg:mr-6",
                    children: (0, s.jsx)(r(), {
                      href: "/",
                      className:
                        "text-xl sm:text-2xl lg:text-2xl font-extrabold text-white",
                      children: "STC",
                    }),
                  }),
                  [
                    { name: "Home", icon: h, href: "/" },
                    { name: "About", icon: o, href: "/#about" },
                    { name: "Events", icon: c, href: "/#events" },
                    {
                      name: "ICTC",
                      icon: m.A,
                      href: "/techseason/index.html",
                    },
                    { name: "Clubs", icon: d.A, href: "/#clubs" },
                    { name: "Team", icon: d.A, href: "/#team" },
                  ].map((e) =>
                    (0, s.jsx)(
                      "li",
                      {
                        className: "flex-shrink-0",
                        children: (0, s.jsxs)(r(), {
                          href: e.href,
                          onClick: (a) => t(a, e.href),
                          target: e.href.startsWith("http") ? "_blank" : void 0,
                          rel: e.href.startsWith("http")
                            ? "noopener noreferrer"
                            : void 0,
                          className:
                            "flex items-center space-x-1 p-1 sm:p-2 rounded-full transition-colors ".concat(
                              a(e.href)
                                ? "bg-white text-black"
                                : "text-white hover:bg-white/10",
                            ),
                          children: [
                            (0, s.jsx)(e.icon, {
                              className: "w-4 h-4 sm:w-5 sm:h-5",
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "hidden sm:inline text-sm sm:text-base",
                              children: e.name,
                            }),
                          ],
                        }),
                      },
                      e.name,
                    ),
                  ),
                ],
              }),
            }),
          }),
        });
      }
    },
    9324: () => {},
    4635: (e) => {
      e.exports = {
        style: { fontFamily: "'geistMono', 'geistMono Fallback'" },
        className: "__className_c3aa02",
        variable: "__variable_c3aa02",
      };
    },
    5186: (e) => {
      e.exports = {
        style: { fontFamily: "'geistSans', 'geistSans Fallback'" },
        className: "__className_1e4310",
        variable: "__variable_1e4310",
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [352, 934, 441, 517, 358], () => a(7316)), (_N_E = e.O()));
  },
]);
