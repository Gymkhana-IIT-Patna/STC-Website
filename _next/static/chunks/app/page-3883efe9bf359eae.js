(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    7407: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 451));
    },
    451: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => $ }));
      var r = a(5155),
        s = a(2115),
        i = a(5565),
        n = a(1290),
        l = a(1027),
        o = a(3463),
        c = a(9795);
      function d() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, c.QP)((0, o.$)(t));
      }
      let h = (0, l.F)(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "underline-offset-4 hover:underline text-primary",
              },
              size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        m = (0, s.forwardRef)((e, t) => {
          let { className: a, variant: s, size: i, asChild: l = !1, ...o } = e,
            c = l ? n.DX : "button";
          return (0, r.jsx)(c, {
            className: d(h({ variant: s, size: i, className: a })),
            ref: t,
            ...o,
          });
        });
      ((m.displayName = "Button"), a(828));
      var x = a(5087),
        u = a(6575),
        p = a(9219);
      let g = (e) => {
          let { titleComponent: t, children: a } = e,
            i = (0, s.useRef)(null),
            { scrollYProgress: n } = (0, x.L)({ target: i }),
            [l, o] = s.useState(!1);
          s.useEffect(() => {
            let e = () => {
              o(window.innerWidth <= 768);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []);
          let c = (0, u.G)(n, [0, 1], [20, 0]),
            d = (0, u.G)(n, [0, 1], l ? [0.7, 0.9] : [1.05, 1]),
            h = (0, u.G)(n, [0, 1], [0, -100]);
          return (0, r.jsx)("div", {
            className:
              "h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20",
            ref: i,
            children: (0, r.jsxs)("div", {
              className: "py-10 md:py-40 w-full relative",
              style: { perspective: "1000px" },
              children: [
                (0, r.jsx)(f, { translate: h, titleComponent: t }),
                (0, r.jsx)(j, {
                  rotate: c,
                  translate: h,
                  scale: d,
                  children: a,
                }),
              ],
            }),
          });
        },
        f = (e) => {
          let { translate: t, titleComponent: a } = e;
          return (0, r.jsx)(p.P.div, {
            style: { translateY: t },
            className: "div max-w-5xl mx-auto text-center",
            children: a,
          });
        },
        j = (e) => {
          let { rotate: t, scale: a, children: s } = e;
          return (0, r.jsx)(p.P.div, {
            style: {
              rotateX: t,
              scale: a,
              boxShadow:
                "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            },
            className:
              "max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl",
            children: (0, r.jsx)("div", {
              className:
                " h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ",
              children: s,
            }),
          });
        };
      var b = a(5796),
        _ = a.n(b),
        y = a(5321),
        w = a(1674),
        v = a(9920),
        k = a(5683);
      let N = (e, t) => {
          (0, s.useEffect)(() => {
            let a = (a) => {
              !e.current || e.current.contains(a.target) || t(a);
            };
            return (
              document.addEventListener("mousedown", a),
              document.addEventListener("touchstart", a),
              () => {
                (document.removeEventListener("mousedown", a),
                  document.removeEventListener("touchstart", a));
              }
            );
          }, [e, t]);
        },
        T = (0, s.createContext)({ onCardClose: () => {}, currentIndex: 0 }),
        C = (e) => {
          let { items: t, initialScroll: a = 0 } = e,
            i = s.useRef(null),
            [n, l] = s.useState(!1),
            [o, c] = s.useState(!0),
            [h, m] = (0, s.useState)(0);
          (0, s.useEffect)(() => {
            i.current && ((i.current.scrollLeft = a), x());
          }, [a]);
          let x = () => {
              if (i.current) {
                let {
                  scrollLeft: e,
                  scrollWidth: t,
                  clientWidth: a,
                } = i.current;
                (l(e > 0), c(e < t - a));
              }
            },
            u = () => window && window.innerWidth < 768;
          return (0, r.jsx)(T.Provider, {
            value: {
              onCardClose: (e) => {
                if (i.current) {
                  let t = u() ? 230 : 384,
                    a = u() ? 4 : 8;
                  (i.current.scrollTo({
                    left: (t + a) * (e + 1),
                    behavior: "smooth",
                  }),
                    m(e));
                }
              },
              currentIndex: h,
            },
            children: (0, r.jsxs)("div", {
              className: "relative w-full",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]",
                  ref: i,
                  onScroll: x,
                  children: [
                    (0, r.jsx)("div", {
                      className: d(
                        "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l",
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: d(
                        "flex flex-row justify-start gap-4 pl-4",
                        "max-w-7xl mx-auto",
                      ),
                      children: t.map((e, t) =>
                        (0, r.jsx)(
                          p.P.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.5,
                                delay: 0.2 * t,
                                ease: "easeOut",
                                once: !0,
                              },
                            },
                            className:
                              "last:pr-[5%] md:last:pr-[33%]  rounded-3xl",
                            children: e,
                          },
                          "card" + t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex justify-end gap-2 mr-10",
                  children: [
                    (0, r.jsx)("button", {
                      className:
                        "relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",
                      onClick: () => {
                        i.current &&
                          i.current.scrollBy({
                            left: -300,
                            behavior: "smooth",
                          });
                      },
                      disabled: !n,
                      children: (0, r.jsx)(y.A, {
                        className: "h-6 w-6 text-gray-500",
                      }),
                    }),
                    (0, r.jsx)("button", {
                      className:
                        "relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",
                      onClick: () => {
                        i.current &&
                          i.current.scrollBy({ left: 300, behavior: "smooth" });
                      },
                      disabled: !o,
                      children: (0, r.jsx)(w.A, {
                        className: "h-6 w-6 text-gray-500",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        S = (e) => {
          let { card: t, index: a, layout: i = !1 } = e,
            [n, l] = (0, s.useState)(!1),
            o = (0, s.useRef)(null),
            { onCardClose: c, currentIndex: d } = (0, s.useContext)(T);
          ((0, s.useEffect)(() => {
            function e(e) {
              "Escape" === e.key && h();
            }
            return (
              n
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "auto"),
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [n]),
            N(o, () => h()));
          let h = () => {
            (l(!1), c(a));
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(k.N, {
                children:
                  n &&
                  (0, r.jsxs)("div", {
                    className: "fixed inset-0 h-screen z-50 overflow-auto",
                    children: [
                      (0, r.jsx)(p.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0",
                      }),
                      (0, r.jsxs)(p.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        ref: o,
                        layoutId: i ? "card-".concat(t.title) : void 0,
                        className:
                          "max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative",
                        children: [
                          (0, r.jsx)("button", {
                            className:
                              "sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center",
                            onClick: h,
                            children: (0, r.jsx)(v.A, {
                              className:
                                "h-6 w-6 text-neutral-100 dark:text-neutral-900",
                            }),
                          }),
                          (0, r.jsx)(p.P.p, {
                            layoutId: i ? "category-".concat(t.title) : void 0,
                            className:
                              "text-base font-medium text-black dark:text-white",
                            children: t.category,
                          }),
                          (0, r.jsx)(p.P.p, {
                            layoutId: i ? "title-".concat(t.title) : void 0,
                            className:
                              "text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white",
                            children: t.title,
                          }),
                          (0, r.jsx)("div", {
                            className: "py-10",
                            children: t.content,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
              (0, r.jsxs)(p.P.button, {
                layoutId: i ? "card-".concat(t.title) : void 0,
                onClick: () => {
                  l(!0);
                },
                className:
                  "rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden flex flex-col items-start justify-start relative z-10",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none",
                  }),
                  (0, r.jsxs)("div", {
                    className: "relative z-40 p-8",
                    children: [
                      (0, r.jsx)(p.P.p, {
                        layoutId: i ? "category-".concat(t.category) : void 0,
                        className:
                          "text-white text-sm md:text-base font-medium font-sans text-left",
                        children: t.category,
                      }),
                      (0, r.jsx)(p.P.p, {
                        layoutId: i ? "title-".concat(t.title) : void 0,
                        className:
                          "text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2",
                        children: t.title,
                      }),
                    ],
                  }),
                  (0, r.jsx)(I, {
                    src: t.src,
                    alt: t.title,
                    fill: !0,
                    className: "object-cover absolute z-10 inset-0",
                  }),
                ],
              }),
            ],
          });
        };
      function I(e) {
        let { src: t, alt: a, ...s } = e;
        return (0, r.jsx)(i.default, {
          src: t,
          alt: a,
          placeholder: "blur",
          blurDataURL:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMS4xIj4KPHBhdGggZD0iTTEwMCAxMEgxMDAwTDExMDAgMTAsMSIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPg==",
          ...s,
        });
      }
      let M = (e) => {
          let { data: t } = e,
            a = (0, s.useRef)(null),
            i = (0, s.useRef)(null),
            [n, l] = (0, s.useState)(0);
          (0, s.useEffect)(() => {
            a.current && l(a.current.getBoundingClientRect().height);
          }, [a]);
          let { scrollYProgress: o } = (0, x.L)({
              target: i,
              offset: ["start 10%", "end 50%"],
            }),
            c = (0, u.G)(o, [0, 1], [0, n]),
            d = (0, u.G)(o, [0, 0.1], [0, 1]);
          return (0, r.jsx)("div", {
            className: "",
            children: (0, r.jsx)("div", {
              className:
                "relative w-full bg-white dark:bg-neutral-950 font-sans md:px-10",
              ref: i,
              children: (0, r.jsxs)("div", {
                ref: a,
                className: "relative max-w-7xl mx-auto pb-20",
                children: [
                  (0, r.jsxs)("div", {
                    className: "max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10",
                    children: [
                      (0, r.jsx)("h2", {
                        className:
                          "text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl",
                        children:
                          "Previous year Inter-IIT Tech Meet performances",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm",
                        children:
                          "IIT Patna has been performing exceptionally well in Inter-IIT tech meets over the last few years. Here are glimpses of the same:",
                      }),
                    ],
                  }),
                  t.map((e, t) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className:
                          "flex justify-start pt-10 md:pt-40 md:gap-10",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center",
                                children: (0, r.jsx)("div", {
                                  className:
                                    "h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2",
                                }),
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ",
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative pl-20 pr-4 md:pl-4 w-full",
                            children: [
                              (0, r.jsx)("h3", {
                                className:
                                  "md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500",
                                children: e.title,
                              }),
                              e.content,
                              " ",
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                  (0, r.jsx)("div", {
                    className:
                      "absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] h-full bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]",
                    children: (0, r.jsx)(p.P.div, {
                      style: { height: c, opacity: d },
                      className:
                        "absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        P = (e) => {
          let {
              tabs: t,
              containerClassName: a,
              activeTabClassName: i,
              tabClassName: n,
              contentClassName: l,
            } = e,
            [o, c] = (0, s.useState)(t[0]),
            [h, m] = (0, s.useState)(t),
            x = (e) => {
              let a = [...t],
                r = a.splice(e, 1);
              (a.unshift(r[0]), m(a), c(a[0]));
            },
            [u, g] = (0, s.useState)(!0);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                className: d(
                  "flex flex-wrap items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full min-h-[200px] sm:min-h-[auto]",
                  a,
                ),
                children: t.map((e, t) =>
                  (0, r.jsxs)(
                    "button",
                    {
                      onClick: () => {
                        x(t);
                      },
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      className: d("relative px-4 py-2 rounded-full", n),
                      style: { transformStyle: "preserve-3d" },
                      children: [
                        o.value === e.value &&
                          (0, r.jsx)(p.P.div, {
                            layoutId: "clickedbutton",
                            transition: {
                              type: "spring",
                              bounce: 0.3,
                              duration: 0.6,
                            },
                            className: d(
                              "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                              i,
                            ),
                          }),
                        (0, r.jsx)("span", {
                          className:
                            "relative block text-black dark:text-white",
                          children: e.title,
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
              (0, r.jsx)(
                A,
                { tabs: h, active: o, hovering: u, className: d("mt-32", l) },
                o.value,
              ),
            ],
          });
        },
        A = (e) => {
          let { className: t, tabs: a, hovering: s } = e,
            i = (e) => e.value === a[0].value;
          return (0, r.jsx)("div", {
            className: "relative w-full h-full",
            children: a.map((e, a) =>
              (0, r.jsx)(
                p.P.div,
                {
                  layoutId: e.value,
                  style: {
                    scale: 1 - 0.1 * a,
                    top: s ? -50 * a : 0,
                    zIndex: -a,
                    opacity: a < 3 ? 1 - 0.1 * a : 0,
                  },
                  animate: { y: i(e) ? [0, 40, 0] : 0 },
                  className: d("w-full h-full absolute top-0 left-0", t),
                  children: e.content,
                },
                e.value,
              ),
            ),
          });
        };
      var E = a(7672),
        z = a(7605);
      let D = (e) => {
        let { testimonials: t, autoplay: a = !1 } = e,
          [n, l] = (0, s.useState)(0),
          o = () => {
            l((e) => (e + 1) % t.length);
          },
          c = (e) => e === n;
        (0, s.useEffect)(() => {
          if (a) {
            let e = setInterval(o, 5e3);
            return () => clearInterval(e);
          }
        }, [a]);
        let d = () => Math.floor(21 * Math.random()) - 10;
        return (0, r.jsx)("div", {
          className:
            "max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20",
          children: (0, r.jsxs)("div", {
            className: "relative grid grid-cols-1 md:grid-cols-2  gap-20",
            children: [
              (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                  className: "relative h-80 w-full",
                  children: (0, r.jsx)(k.N, {
                    children: t.map((e, a) =>
                      (0, r.jsx)(
                        p.P.div,
                        {
                          initial: {
                            opacity: 0,
                            scale: 0.9,
                            z: -100,
                            rotate: d(),
                          },
                          animate: {
                            opacity: c(a) ? 1 : 0.7,
                            scale: c(a) ? 1 : 0.95,
                            z: c(a) ? 0 : -100,
                            rotate: c(a) ? 0 : d(),
                            zIndex: c(a) ? 999 : t.length + 2 - a,
                            y: c(a) ? [0, -80, 0] : 0,
                          },
                          exit: { opacity: 0, scale: 0.9, z: 100, rotate: d() },
                          transition: { duration: 0.4, ease: "easeInOut" },
                          className: "absolute inset-0 origin-bottom",
                          children: (0, r.jsx)(i.default, {
                            src: e.src,
                            alt: e.name,
                            width: 500,
                            height: 500,
                            draggable: !1,
                            className:
                              "h-full w-full rounded-3xl object-cover object-center",
                          }),
                        },
                        e.src,
                      ),
                    ),
                  }),
                }),
              }),
              (0, r.jsxs)("div", {
                className: "flex justify-between flex-col py-4",
                children: [
                  (0, r.jsxs)(
                    p.P.div,
                    {
                      initial: { y: 20, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      exit: { y: -20, opacity: 0 },
                      transition: { duration: 0.2, ease: "easeInOut" },
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "text-2xl font-bold dark:text-white text-black",
                          children: t[n].name,
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-sm text-gray-500 dark:text-neutral-500",
                          children: t[n].designation,
                        }),
                        (0, r.jsx)(p.P.p, {
                          className:
                            "text-lg text-gray-500 mt-8 dark:text-neutral-300",
                          children: t[n].quote
                            .split(" ")
                            .map((e, t) =>
                              (0, r.jsxs)(
                                p.P.span,
                                {
                                  initial: {
                                    filter: "blur(10px)",
                                    opacity: 0,
                                    y: 5,
                                  },
                                  animate: {
                                    filter: "blur(0px)",
                                    opacity: 1,
                                    y: 0,
                                  },
                                  transition: {
                                    duration: 0.2,
                                    ease: "easeInOut",
                                    delay: 0.02 * t,
                                  },
                                  className: "inline-block",
                                  children: [e, "\xa0"],
                                },
                                t,
                              ),
                            ),
                        }),
                      ],
                    },
                    n,
                  ),
                  (0, r.jsxs)("div", {
                    className: "flex gap-4 pt-12 md:pt-0",
                    children: [
                      (0, r.jsx)("button", {
                        onClick: () => {
                          l((e) => (e - 1 + t.length) % t.length);
                        },
                        className:
                          "h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button",
                        children: (0, r.jsx)(E.A, {
                          className:
                            "h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300",
                        }),
                      }),
                      (0, r.jsx)("button", {
                        onClick: o,
                        className:
                          "h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button",
                        children: (0, r.jsx)(z.A, {
                          className:
                            "h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var L = a(1024),
        R = a(9257),
        G = a(7072),
        K = a(2823);
      let q = (e) => {
        let { title: t, description: a, icon: s } = e;
        return (0, r.jsxs)("div", {
          className:
            "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20",
          children: [
            (0, r.jsx)(s, { className: "w-12 h-12 mb-4 text-blue-400" }),
            (0, r.jsx)("h3", {
              className: "text-xl font-semibold mb-2",
              children: t,
            }),
            (0, r.jsx)("p", { className: "text-gray-300", children: a }),
          ],
        });
      };
      function F() {
        return (0, r.jsxs)("section", {
          className:
            "relative py-20 px-4 bg-[#09112d] text-white overflow-hidden",
          children: [
            (0, r.jsxs)("div", {
              className: "absolute inset-0",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "max-w-6xl mx-auto relative z-10",
              children: [
                (0, r.jsxs)("div", {
                  className: "text-center mb-16",
                  children: [
                    (0, r.jsx)("h2", {
                      className:
                        "text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500",
                      children: "ABOUT US",
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
                      children:
                        "We are the driving force behind technical innovation at IIT Patna. Our mission is to foster a culture of technological excellence and creativity among students through workshops, hackathons, and groundbreaking projects.",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                  children: [
                    (0, r.jsx)(q, {
                      title: "Technical Workshops",
                      description:
                        "Hands-on learning experiences with cutting-edge technologies and industry experts.",
                      icon: L.A,
                    }),
                    (0, r.jsx)(q, {
                      title: "Innovation Hub",
                      description:
                        "Access to state-of-the-art equipment and resources for project development.",
                      icon: R.A,
                    }),
                    (0, r.jsx)(q, {
                      title: "Competitions",
                      description:
                        "Regular hackathons and technical competitions to showcase your skills.",
                      icon: G.A,
                    }),
                    (0, r.jsx)(q, {
                      title: "Mentorship",
                      description:
                        "Connect with experienced mentors and build your professional network.",
                      icon: K.A,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "bg-white/5 backdrop-blur-sm p-6 rounded-lg",
                      children: [
                        (0, r.jsx)("div", {
                          className: "text-4xl font-bold text-blue-400 mb-2",
                          children: "10+",
                        }),
                        (0, r.jsx)("div", {
                          className: "text-gray-400",
                          children: "Years since Inception",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "bg-white/5 backdrop-blur-sm p-6 rounded-lg",
                      children: [
                        (0, r.jsx)("div", {
                          className: "text-4xl font-bold text-blue-400 mb-2",
                          children: "100+",
                        }),
                        (0, r.jsx)("div", {
                          className: "text-gray-400",
                          children: "Projects Done",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "bg-white/5 backdrop-blur-sm p-6 rounded-lg",
                      children: [
                        (0, r.jsx)("div", {
                          className: "text-4xl font-bold text-blue-400 mb-2",
                          children: "300+",
                        }),
                        (0, r.jsx)("div", {
                          className: "text-gray-400",
                          children: "Active Members",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "bg-white/5 backdrop-blur-sm p-6 rounded-lg",
                      children: [
                        (0, r.jsx)("div", {
                          className: "text-4xl font-bold text-blue-400 mb-2",
                          children: "Multiple",
                        }),
                        (0, r.jsx)("div", {
                          className: "text-gray-400",
                          children: "Awards Won",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      a(2330);
      let O = (e) => {
          let { children: t, className: a } = e;
          return (0, r.jsxs)("div", {
            className: d(
              "relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md ",
              a,
            ),
            children: [
              (0, r.jsxs)("div", {
                className:
                  "relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ",
                children: [
                  (0, r.jsxs)(p.P.div, {
                    initial: { opacity: 0.5, width: "15rem" },
                    whileInView: { opacity: 1, width: "30rem" },
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    style: {
                      backgroundImage:
                        "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
                    },
                    className:
                      "absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]",
                      }),
                    ],
                  }),
                  (0, r.jsxs)(p.P.div, {
                    initial: { opacity: 0.5, width: "15rem" },
                    whileInView: { opacity: 1, width: "30rem" },
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    style: {
                      backgroundImage:
                        "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
                    },
                    className:
                      "absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl",
                  }),
                  (0, r.jsx)(p.P.div, {
                    initial: { width: "8rem" },
                    whileInView: { width: "16rem" },
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    className:
                      "absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl",
                  }),
                  (0, r.jsx)(p.P.div, {
                    initial: { width: "15rem" },
                    whileInView: { width: "30rem" },
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    className:
                      "absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 ",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 ",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "relative z-50 flex -translate-y-80 flex-col items-center px-5",
                children: t,
              }),
            ],
          });
        },
        H = () =>
          (0, r.jsxs)("button", {
            type: "submit",
            onClick: () => {
              window.location.href =
                "https://drive.google.com/file/d/1WLDixObzK1T63QQgLZD5nBvWfGHOGA7u/view";
            },
            className:
              "flex justify-center gap-2 items-center mx-auto shadow-xl text-[#020617] bg-white backdrop-blur-md lg:font-normal isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#068AA5] hover:text-[#020617] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group",
            children: [
              "Explore",
              (0, r.jsx)("svg", {
                className:
                  "w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45",
                viewBox: "0 0 16 19",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsx)("path", {
                  d: "M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z",
                  className: "fill-gray-800 group-hover:fill-gray-800",
                }),
              }),
            ],
          });
      var Q = a(1536),
        W = a(4128);
      let B = (e) => {
        let t = (0, s.useRef)(null),
          a = (0, s.useRef)(null),
          i = 9 * (e.particleCount || 700),
          n = e.rangeY || 50,
          l = e.baseSpeed || 0,
          o = e.rangeSpeed || 1.5,
          c = e.baseRadius || 1,
          h = e.rangeRadius || 2,
          m = e.baseHue || 220,
          x = e.backgroundColor || "red",
          u = 0,
          g = (0, W.Cf)(),
          f = new Float32Array(i),
          j = [0, 0],
          b = 2 * Math.PI,
          _ = (e) => e * Math.random(),
          y = (e) => e - _(2 * e),
          w = (e, t) => {
            let a = 0.5 * t;
            return Math.abs(((e + a) % t) - a) / a;
          },
          v = (e, t, a) => (1 - a) * e + a * t,
          k = () => {
            let e = t.current,
              r = a.current;
            if (e && r) {
              let t = e.getContext("2d");
              t && (A(e, t), N(), C(e, t));
            }
          },
          N = () => {
            ((u = 0), (f = new Float32Array(i)));
            for (let e = 0; e < i; e += 9) T(e);
          },
          T = (e) => {
            let a, r, s, i, d, x;
            let u = t.current;
            u &&
              ((a = _(u.width)),
              (r = j[1] + y(n)),
              (s = 50 + _(150)),
              (i = l + _(o)),
              (d = c + _(h)),
              (x = m + _(100)),
              f.set([a, r, 0, 0, 0, s, i, d, x], e));
          },
          C = (e, t) => {
            (u++,
              t.clearRect(0, 0, e.width, e.height),
              (t.fillStyle = x),
              t.fillRect(0, 0, e.width, e.height),
              S(t),
              E(e, t),
              z(e, t),
              window.requestAnimationFrame(() => C(e, t)));
          },
          S = (e) => {
            for (let t = 0; t < i; t += 9) I(t, e);
          },
          I = (e, a) => {
            let r, s, i, n, l, o, c, d, h, m;
            let x = t.current;
            if (!x) return;
            let p = 1 + e,
              j = 2 + e,
              _ = 3 + e,
              y = 4 + e,
              w = 5 + e,
              k = 6 + e,
              N = 7 + e,
              C = 8 + e;
            ((r =
              3 * g(0.00125 * (s = f[e]), 0.00125 * (i = f[p]), 5e-4 * u) * b),
              (n = v(f[j], Math.cos(r), 0.5)),
              (l = v(f[_], Math.sin(r), 0.5)),
              (o = f[y]),
              (c = f[w]),
              (h = s + n * (d = f[k])),
              (m = i + l * d),
              M(s, i, h, m, o, c, f[N], f[C], a),
              o++,
              (f[e] = h),
              (f[p] = m),
              (f[j] = n),
              (f[_] = l),
              (f[y] = o),
              (P(s, i, x) || o > c) && T(e));
          },
          M = (e, t, a, r, s, i, n, l, o) => {
            (o.save(),
              (o.lineCap = "round"),
              (o.lineWidth = n),
              (o.strokeStyle = "hsla("
                .concat(l, ",100%,60%,")
                .concat(w(s, i), ")")),
              o.beginPath(),
              o.moveTo(e, t),
              o.lineTo(a, r),
              o.stroke(),
              o.closePath(),
              o.restore());
          },
          P = (e, t, a) => e > a.width || e < 0 || t > a.height || t < 0,
          A = (e, t) => {
            let { innerWidth: a, innerHeight: r } = window;
            ((e.width = a),
              (e.height = r / 2.5),
              (j[0] = 0.4 * e.width),
              (j[1] = 0.4 * e.height));
          },
          E = (e, t) => {
            (t.save(),
              (t.filter = "blur(8px) brightness(200%)"),
              (t.globalCompositeOperation = "lighter"),
              t.drawImage(e, 0, 0),
              t.restore(),
              t.save(),
              (t.filter = "blur(4px) brightness(200%)"),
              (t.globalCompositeOperation = "lighter"),
              t.drawImage(e, 0, 0),
              t.restore());
          },
          z = (e, t) => {
            (t.save(),
              (t.globalCompositeOperation = "lighter"),
              t.drawImage(e, 0, 0),
              t.restore());
          };
        return (
          (0, s.useEffect)(() => {
            (k(),
              window.addEventListener("resize", () => {
                let e = t.current,
                  a = null == e ? void 0 : e.getContext("2d");
                e && a && A(e, a);
              }));
          }, []),
          (0, r.jsxs)("div", {
            className: d("relative h-full w-full", e.containerClassName),
            children: [
              (0, r.jsx)(p.P.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                ref: a,
                className:
                  "absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center",
                children: (0, r.jsx)("canvas", { ref: t }),
              }),
              (0, r.jsx)("div", {
                className: d("relative z-10", e.className),
                children: e.children,
              }),
            ],
          })
        );
      };
      var J = a(8173),
        Y = a.n(J);
      let V = (e) => {
          let { words: t, duration: a = 70, className: i } = e,
            [n, l] = (0, s.useState)(t[0]),
            [o, c] = (0, s.useState)(!1),
            h = (0, s.useCallback)(() => {
              (l(t[t.indexOf(n) + 1] || t[0]), c(!0));
            }, [n, t]);
          return (
            (0, s.useEffect)(() => {
              o ||
                setTimeout(() => {
                  h();
                }, a);
            }, [o, a, h]),
            (0, r.jsx)(k.N, {
              onExitComplete: () => {
                c(!1);
              },
              children: (0, r.jsx)(
                p.P.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { type: "spring", stiffness: 100, damping: 10 },
                  exit: {
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                  },
                  className: d(
                    "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                    i,
                  ),
                  children: n
                    .split(" ")
                    .map((e, t) =>
                      (0, r.jsxs)(
                        p.P.span,
                        {
                          initial: { opacity: 0, y: 10, filter: "blur(8px)" },
                          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                          transition: { delay: 0.1 * t, duration: 0.1 },
                          className: "inline-block whitespace-nowrap",
                          children: [
                            e
                              .split("")
                              .map((a, s) =>
                                (0, r.jsx)(
                                  p.P.span,
                                  {
                                    initial: {
                                      opacity: 0,
                                      y: 10,
                                      filter: "blur(8px)",
                                    },
                                    animate: {
                                      opacity: 1,
                                      y: 0,
                                      filter: "blur(0px)",
                                    },
                                    transition: {
                                      delay: 0.1 * t + 0.01 * s,
                                      duration: 0.1,
                                    },
                                    className: "inline-block",
                                    children: a,
                                  },
                                  e + s,
                                ),
                              ),
                            (0, r.jsx)("span", {
                              className: "inline-block",
                              children: "\xa0",
                            }),
                          ],
                        },
                        e + t,
                      ),
                    ),
                },
                n,
              ),
            })
          );
        },
        U = ["ROBOTIC EVENTS", "WORKSHOPS", "GUEST LECTURES", "PRONITES"],
        Z = (e) => {
          let { backgroundImageUrl: t, websiteUrl: a } = e;
          return (0, r.jsxs)("div", {
            className: "relative h-[60vh] w-full overflow-hidden",
            children: [
              (0, r.jsx)(i.default, {
                src: t,
                alt: "Celesta Background",
                layout: "fill",
                objectFit: "cover",
                quality: 100,
                priority: !0,
              }),
              (0, r.jsx)("div", {
                className: "absolute inset-0 bg-black bg-opacity-70",
              }),
              (0, r.jsxs)("div", {
                className:
                  "absolute inset-0 flex flex-col items-center justify-center",
                children: [
                  (0, r.jsx)("h1", {
                    className:
                      "text-6xl md:text-8xl font-[50] text-white mb-8 tracking-wider",
                    children: "C E L E S T A",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 pt-0 text-center",
                    children: [
                      "Experience",
                      (0, r.jsx)(V, { words: U }),
                      " ",
                      (0, r.jsx)("br", {}),
                      "all at the TechFest Of IIT Patna",
                    ],
                  }),
                  (0, r.jsx)(Y(), {
                    href: a,
                    passHref: !0,
                    children: (0, r.jsx)("button", {
                      className:
                        "px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105 mt-8",
                      children: "Visit the Website",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function $() {
        let [e, t] = (0, s.useState)(!1),
          a = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          function e(e) {
            a.current && !a.current.contains(e.target) && t(!1);
          }
          return (
            document.addEventListener("mousedown", e),
            () => {
              document.removeEventListener("mousedown", e);
            }
          );
        }, []);
        let n = ee.map((e, t) => (0, r.jsx)(S, { card: e, index: t }, e.src)),
          l = X.map((e, t) => (0, r.jsx)(S, { card: e, index: t }, e.src)),
          o = [
            {
              title: "2023",
              content: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("p", {
                    className:
                      "text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8",
                    children: "8th position among all IITs in the meet.",
                  }),
                  (0, r.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech12.0/IMG20231222191123.jpg",
                        alt: "startup template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech12.0/IMG20231222183140.jpg",
                        alt: "startup template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech12.0/1000050242-01.jpeg",
                        alt: "startup template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech12.0/20231221_112957.jpg",
                        alt: "startup template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              title: "2022",
              content: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("p", {
                    className:
                      "text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8",
                    children: "7th position among all IITs in the meet.",
                  }),
                  (0, r.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech11.0/11.0result.jpg",
                        alt: "hero template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech11.0/DSC_5542.jpg",
                        alt: "feature template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech11.0/DSC_5497.jpg",
                        alt: "bento template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech11.0/IMG20230210182003.jpg",
                        alt: "cards template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              title: "2021",
              content: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("p", {
                    className:
                      "text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4",
                    children: "9th position among all IITs in the meet.",
                  }),
                  (0, r.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech10.0/279008917_5692980604063021_4883747500802782310_n.png",
                        alt: "hero template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech10.0/Screenshot 2024-11-18 023048.png",
                        alt: "feature template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech10.0/Screenshot 2024-11-18 022944.png",
                        alt: "bento template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                      (0, r.jsx)(i.default, {
                        src: "/images/interiittech10.0/Screenshot 2024-11-18 023133.png",
                        alt: "cards template",
                        width: 500,
                        height: 500,
                        className:
                          "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                      }),
                    ],
                  }),
                ],
              }),
            },
          ],
          c = [
            {
              title: "2025-26",
              value: "features",
              content: (0, r.jsxs)("div", {
                className:
                  "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#491580] to-[#300356]",
                children: [
                  (0, r.jsx)("p", { children: "2025-26 Team" }),
                  (0, r.jsx)(r.Fragment, {
                    children: [...[, , ,].fill(1)].map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4",
                          children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(D, { testimonials: eu }),
                          }),
                        },
                        "dummy-content" + t,
                      ),
                    ),
                  }),
                ],
              }),
            },
            {
              title: "2024-25",
              value: "product",
              content: (0, r.jsxs)("div", {
                className:
                  "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#491580] to-[#300356]",
                children: [
                  (0, r.jsx)("p", { children: "2024-25 Team" }),
                  (0, r.jsx)(r.Fragment, {
                    children: [...[, , ,].fill(1)].map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4",
                          children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(D, { testimonials: et }),
                          }),
                        },
                        "dummy-content" + t,
                      ),
                    ),
                  }),
                ],
              }),
            },
            {
              title: "2023-24",
              value: "services",
              content: (0, r.jsxs)("div", {
                className:
                  "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900",
                children: [
                  (0, r.jsx)("p", { children: "2023-24 Team" }),
                  (0, r.jsx)(r.Fragment, {
                    children: [...[, , ,].fill(1)].map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4",
                          children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(D, { testimonials: ea }),
                          }),
                        },
                        "dummy-content" + t,
                      ),
                    ),
                  }),
                ],
              }),
            },
            {
              title: "2022-23",
              value: "playground",
              content: (0, r.jsxs)("div", {
                className:
                  "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900",
                children: [
                  (0, r.jsx)("p", { children: "2022-23 Team" }),
                  (0, r.jsx)(r.Fragment, {
                    children: [...[, , ,].fill(1)].map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4",
                          children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(D, { testimonials: er }),
                          }),
                        },
                        "dummy-content" + t,
                      ),
                    ),
                  }),
                ],
              }),
            },
            {
              title: "2021-22",
              value: "content",
              content: (0, r.jsxs)("div", {
                className:
                  "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900",
                children: [
                  (0, r.jsx)("p", { children: "2021-22 Team" }),
                  (0, r.jsx)(r.Fragment, {
                    children: [...[, , ,].fill(1)].map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4",
                          children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(D, { testimonials: es }),
                          }),
                        },
                        "dummy-content" + t,
                      ),
                    ),
                  }),
                ],
              }),
            },
          ];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: "min-h-screen flex flex-col ".concat(_().className),
              children: (0, r.jsx)("main", {
                className:
                  "flex-grow flex flex-col items-center justify-center text-center px-4 relative",
                children: (0, r.jsxs)("div", {
                  className: "absolute inset-0 z-0",
                  children: [
                    (0, r.jsx)(i.default, {
                      src: "/images/hero.png",
                      alt: "Background",
                      layout: "fill",
                      objectFit: "cover",
                      quality: 100,
                      priority: !0,
                    }),
                    (0, r.jsx)("div", {
                      className: "flex flex-col overflow-hidden",
                      children: (0, r.jsx)(g, {
                        titleComponent: (0, r.jsx)(r.Fragment, {
                          children: (0, r.jsxs)("h1", {
                            className:
                              "text-4xl font-semibold text-black dark:text-white",
                            children: [
                              "IIT PATNA ",
                              (0, r.jsx)("br", {}),
                              (0, r.jsx)("span", {
                                className:
                                  "text-4xl md:text-[6rem] font-bold mt-1 leading-none",
                                children: "Students Technical Council",
                              }),
                            ],
                          }),
                        }),
                        children: (0, r.jsx)(i.default, {
                          src: "/images/image.png",
                          alt: "hero",
                          height: 720,
                          width: 1440,
                          className:
                            "mx-auto rounded-2xl object-fill h-full object-left-top",
                          draggable: !1,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)("div", {
              id: "about",
              className: "w-full pt-200vh lg:pt-[50vh]",
              children: (0, r.jsx)(F, {}),
            }),
            (0, r.jsx)("div", {
              id: "timeline",
              className: "w-full pt-100vh lg:pt-[15vh]",
              children: (0, r.jsx)(M, { data: o }),
            }),
            (0, r.jsxs)("div", {
              id: "events",
              className: "w-full h-full py-20",
              children: [
                (0, r.jsx)("h2", {
                  className:
                    "max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans",
                  children: "STC Events",
                }),
                (0, r.jsx)(C, { items: n }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "pt-24",
              children: (0, r.jsxs)(O, {
                children: [
                  (0, r.jsx)(p.P.h1, {
                    initial: { opacity: 0.5, y: 100 },
                    whileInView: { opacity: 1, y: -20 },
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    className:
                      "mt-8 bg-gradient-to-br from-[#0a0a0a] to-[#0a0a0a] py-4 bg-clip-text text-center text-1xl font-medium tracking-tight text-transparent md:text-4xl pt-1",
                    children: "P R E S E N T I N G",
                  }),
                  (0, r.jsx)(p.P.h1, {
                    initial: { opacity: 0.5, y: 100 },
                    whileInView: { opacity: 1, y: -30 },
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    className:
                      "mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-7xl font-medium tracking-tight text-transparent md:text-9xl pt-1",
                    children: "O N E I I T P",
                  }),
                  (0, r.jsx)(p.P.h1, {
                    initial: { opacity: 0.5, y: 100 },
                    whileInView: { opacity: 1, y: -0 },
                    transition: {
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    className:
                      "mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-1xl font-thin tracking-tight text-transparent md:text-2xl pt-1",
                    children: (0, r.jsx)(H, {}),
                  }),
                ],
              }),
            }),
            (0, r.jsx)("div", {
              children: (0, r.jsx)(Z, {
                backgroundImageUrl: "/images/celesta.jpg",
                websiteUrl: "https://celesta.iitp.ac.in",
              }),
            }),
            (0, r.jsxs)("div", {
              id: "clubs",
              className: "w-full h-full py-20",
              children: [
                (0, r.jsx)("h2", {
                  className:
                    "max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans",
                  children: "STC Clubs",
                }),
                (0, r.jsx)(C, { items: l }),
              ],
            }),
            (0, r.jsx)("div", {
              id: "team",
              className:
                "h-[70rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-4",
              children: (0, r.jsx)(P, { tabs: c }),
            }),
            (0, r.jsx)("div", {
              className:
                "items-center justify-center text-center space-y-4 sm:space-y-0 sm:space-x-6 pt-32 pb-4",
            }),
            (0, r.jsxs)("div", {
              className:
                "items-center justify-center text-center space-y-4 sm:space-y-0 sm:space-x-6 pt-32 pb-4",
              children: [
                (0, r.jsx)(m, { variant: "default", size: "lg" }),
                (0, r.jsx)(m, { variant: "default", size: "lg" }),
              ],
            }),
            (0, r.jsxs)(B, {
              backgroundColor: "rgb(1,1,1)",
              className:
                "flex-wrap flex items-center  justify-center space-around px-2 md:px-10 py-2 w-full h-full relative bottom",
              children: [
                (0, r.jsxs)("h2", {
                  className:
                    "text-white text-9xl md:text-8xl font-bold text-center p-3",
                  children: [
                    "STC",
                    (0, r.jsx)("div", {
                      className: "text-5xl md:text-2xl",
                      children: "IITP",
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  className:
                    "text-white text-sm md:text-l max-w-xl mt-6 text-center p-14 ".concat(
                      _().className,
                    ),
                  children: [
                    "The council of Student's Gymkhana to nurture the advancement of technical culture of Indian Institute of Technology, Patna.",
                    (0, r.jsx)("br", {}),
                    "\xa9 Copyright Student Technical Council, IITP.",
                    (0, r.jsx)("br", {}),
                    "Contact us at stc@iitp.ac.in ; gensec_tech@iitp.ac.in",
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex justify-center space-x-4 text-[#e6e6e6] m-12",
                  children: [
                    (0, r.jsx)("img", {
                      width: "80vw",
                      src: "/images/download.png",
                      alt: "IITP gymkhana",
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/iitpatna_stc/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-pink-500",
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://twitter.com/stc_iitp",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-blue-400",
                      children: (0, r.jsx)(Q.feZ, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.facebook.com/stc.iitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-blue-600",
                      children: (0, r.jsx)(Q.iYk, { size: 24 }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "w-full sm:w-auto flex justify-center",
                  children: (0, r.jsx)("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0697031196537!2d84.8513104!3d25.536054999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5700288d5577%3A0xb87d51692f417876!2sStudent's%20Technical%20Council%20Office!5e0!3m2!1sen!2sin!4v1732065303619!5m2!1sen!2sin",
                    allowFullScreen: !0,
                    className: "w-[150px] h-[100px] md:w-[300px] md:h-[200px]",
                    style: { border: 0, borderRadius: "10px" },
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let X = [
          {
            title: "NJACK",
            category: "Coding",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "NJACK is the coding club of IIT Patna. We aim to flourish a group of hardcore coding enthusiasts through productive sessions and fun events. We will continue the legacy of unconditionally guiding fellow students of the IIT Patna fraternity across the various domains of Computer Science.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "IMG_9007 - Krishna Keshav Singh.jpeg",
                    ,
                    "jatin - vinayak goyal.jpg",
                    "kanahia - vinayak goyal.jpg",
                    "krishna_rathore - vinayak goyal.jpg",
                    "kushal_agarwal - vinayak goyal.jpg",
                    "PratikAmrit - Pratik Amrit.png",
                    "s_akash - vinayak goyal.jpg",
                    "satyam_raj - vinayak goyal.jpg",
                    "Vinayak_goyal - vinayak goyal.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/njackcoordinators/" + e,
                          alt: "NJACK Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "NJACK Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/njackiitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://in.linkedin.com/company/njack-iit-patna",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/NJACK.png",
          },
          {
            title: "MoodBoard",
            category: "Design",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "MoodBoard Design Club at IIT Patna is a dynamic community that fosters creativity and design skills among students. Throughout the year, the club engages in various workshops, collaborative projects, and exhibitions to enhance members' visual communication and design thinking abilities. The club serves as a platform for students to explore various facets of design, from graphic design and photo manipulation to 3D animation and user experience design.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Kunjal - Swastik Vishwakarma.jpg",
                    "Swastik - Swastik Vishwakarma.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className: "basis-1/2 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/moodboardcoordinators/" + e,
                          alt: "MoodBoard Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "MoodBoard Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/designclub.iitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/moodboard-iitp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bd6cj8r1JTOO7YDwmH0crFA%3D%3D",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/MoodBoard.png",
          },
          {
            title: "AP Club",
            category: "Physics",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "Astronomy and Particle Physics (AP) Club is a team of enthusiastic people who share a common goal of exploring, studying, and experimenting with a wide variety of Astronomy and Particle Physics related topics, facts, and new discoveries. We have been trying to make people aware of scintillating stuff right from the nano-level world to the vastness of the cosmos!",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Harsh_Dahiya_apccoord.jpg",
                    "Khushal_Yadav - Khushal yadav.jpg",
                    "Priyanshi Sharma - Khushal yadav.jpg",
                    "Subham Prasad Gouda - Khushal yadav.jpg",
                    "Suprajit - Khushal yadav.jpg",
                    "Utkarsh Arya - Khushal yadav.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/apccoordinators/" + e,
                          alt: "APC Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "APC Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/apclub.iitp?igsh=ZWw4Y3ZsbXc4M2wz",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/ap-club-iitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/APC.png",
          },
          {
            title: "SCME",
            category: "Mechanical Engineering",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "SCME was founded with the motive of engaging and encouraging Mechanical Engineering discipline related activities in IIT Patna. Since its inception, SCME has been conducting events, lectures and workshops round the year for the benefit of mechanical engineering students.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "pulah - Pulah Panara.jpg",
                    "rahul - Pulah Panara.png",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className: "basis-1/2 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/scmecoordinators/" + e,
                          alt: "SCME Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "SCME Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/scme_iitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/iitp-motorsports/posts/?feedView=all",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/scmelogo.jpg",
          },
          {
            title: "MaTES",
            category: "Materials and Metallurgy",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "MaTES is a combined step of students and faculty of IIT PATNA to create an environment of inquisitiveness about metallurgy and materials through various interesting events, informative workshops and inquisitive guest lectures. Our organization's aim is to promote creativity, potency, morals in students and boost awareness about materials in the society.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Aman - Subham Prasad Gouda.jpg",
                    "Anurag - Subham Prasad Gouda.jpg",
                    "IMG-20250104-WA0030 - Subham Prasad Gouda.jpg",
                    "Kaustubh - Subham Prasad Gouda.JPG",
                    "Manoj - Subham Prasad Gouda.jpg",
                    "Nishant - Subham Prasad Gouda.jpg",
                    "Picsart_24-06-03_16-46-23-963 - Subham Prasad Gouda.jpg",
                    "Yeshwanth - Subham Prasad Gouda.JPG",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/matescoordinators/" + e,
                          alt: "MaTES Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "MaTES Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/mates__iitp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/mates-materials-engineering-society-iit-patna/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/MaTESlogo.png",
          },
          {
            title: "ChessX",
            category: "Chemical Engineering",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "ChESSx aims at providing the needed support to produce the best chemical engineering graduates of tomorrow. It aims at making the students familiar with the scientific and industrial know-how and well equipping them to handle real-world problems so that they can better adapt themselves at their workplace once they graduate.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Abhinav_Events - Rishu Kumar Singh.jpeg",
                    "Aman_MPR - Rishu Kumar Singh.jpeg",
                    "Luqman_Overall - Rishu Kumar Singh.jpeg",
                    "Mohit_WebDev - Rishu Kumar Singh.jpeg",
                    "Rajveer_Project - Rishu Kumar Singh.jpeg",
                    "Sanchay_Overall - Rishu Kumar Singh.jpeg",
                    "Sandhya_UID - Rishu Kumar Singh.jpeg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/chessxcoordinators/" + e,
                          alt: "ChessX Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "ChessX Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/chessx_iitp?igsh=YWdzMnk5eGszenRj&utm_source=qr",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/in/chemical-engineering-students-society-chessx-iit-patna-874725219/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/ChESSxLogo.jpg",
          },
          {
            title: "Sparkonics",
            category: "Electronics",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "Sparkonics is the Electrical engineering society of IIT Patna which aims to make students aware and better equipped to handle real-world problems related to Electrical engineering and related interdisciplinary fields by the means of projects and various workshops and guest lectures.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "ADITYA - Rupesh Kumar.jpeg",
                    "ANIT - Rupesh Kumar.jpeg",
                    "RUPESH - Rupesh Kumar.jpeg",
                    "SAMPATH - Rupesh Kumar.jpeg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/sparkonicscoordinators/" + e,
                          alt: "Sparkonics Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "Sparkonics Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/sparkonics.iitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/sparkonics/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/Sparkonics.png",
          },
          {
            title: "Phoenix",
            category: "Robotics",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "Team Phoenix IIT Patna is the official robotics contingent of IIT Patna in ABU Robocon. We seek passionate individuals and offer diverse learning opportunities in robotics through workshops, hackathons, and mentorship programs, including participation in the MathWorks Simulation contest.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Screenshot_20241231_193829_WhatsApp - Ashwani Kumar Jha.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/phoenixcoordinator/" + e,
                          alt: "Phoenix Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "Phoenix Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/teamphoenix.iitp?igsh=czQwbGFkcHNwejU4",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/team-phoenix-robocon-iit-patna/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/phoenix.jpg",
          },
          {
            title: "Tinkerers' Club",
            category: "Innovation",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "Tinkerer's Lab at IIT Patna allows you to build things on your own, from scratch. This gives you practical and hands-on experience. The lab is almost entirely student-run. The lack of deadlines and pressure allows you to tinker and develop your ideas with full freedom.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Ish_Kapoor - Ish Kapoor.jpg",
                    "Shreya_Reddy - Ish Kapoor.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/tinkererslabcoordinators/" + e,
                          alt: "Tinkerers' Lab Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", {
                          children: "Tinkerers' Lab Coordinator",
                        }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/tinkerers_lab_iitp?igsh=MTg1NXlveG9rbG9mdA==",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/tinkerers-lab-iitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/tinkerers.png",
          },
          {
            title: "ACE",
            category: "Civil Engineering",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "The Association of Civil Engineers is an official club of the Department of Civil and Environmental Engineering at IIT Patna. It aims to facilitate student-faculty interaction, provide a platform for showcasing work and knowledge, and enhance abilities through workshops and events.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Awani Sriharsh - Deepak Patel.jpg",
                    "Ayushman - Deepak Patel.jpg",
                    "DEEPAK PATEL - Deepak Patel.JPG",
                    "Mohit - Deepak Patel.jpg",
                    "PRIYADARSHNI SINHA - Deepak Patel.jpg",
                    "Rohit - Deepak Patel.jpg",
                    "Sakshi Priya - Deepak Patel.jpg",
                    "Sohum Bansal - Deepak Patel.jpg",
                    "SUMIT SUHAN - Deepak Patel.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/acecoordinators/" + e,
                          alt: "ACE Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "ACE Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/ace_iitp?igsh=amowc2M4cnpzbG11",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/ace-iit-patna",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/ACElogo.png",
          },
          {
            title: "RNA Club",
            category: "Robotics and Aviation",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "RnA or Robotics and Aviation Club of IIT Patna is a newly formed club that focuses on drones, MAVs (Micro Air Vehicles), and aviation robotics. Here in RnA club, we all are family without any partiality.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Ankit_Singh - Ankit Singh.jpg",
                    "LAXMI - Ankit Singh.png",
                    "Tanishk - Ankit Singh.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/rnaclubcoordinators/" + e,
                          alt: "RNA Club Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "RNA Club Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/rna.iitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/robotics-and-aviation-club-iit-patna",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/RnAlogo.png",
          },
          {
            title: "TIC",
            category: "Finance",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "The Trading and Investment Club at IIT Patna is rapidly growing and emphasizes consulting, investing, marketing, and product management. With a focus on winning competitions, creating opportunities, and skill-building, the club aims to establish a lasting finance legacy and become a top student-run club in India.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "IMG20240811143936 - Dharmraj Dhaker.jpg",
                    "IMG-20240828-WA0014 - Dharmraj Dhaker.jpg",
                    "IMG20241212134646 - Dharmraj Dhaker.jpg",
                    "IMG20241212134656 - Dharmraj Dhaker.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/ticcoordinators/" + e,
                          alt: "TIC Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "TIC Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/tic_iitpatna?igsh=OWxpNHc3dGRtajZy",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/company/ticiitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/TIClogo.jpg",
          },
          {
            title: "Ecell",
            category: "Entrepreneurship",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "Welcome to the Entrepreneurship Cell (E-Cell) at IIT Patna, a vibrant community dedicated to fostering innovation, entrepreneurship, and leadership among students. Our mission is to inspire and empower the next generation of entrepreneurs through various workshops, events, and mentorship opportunities. E-Cell provides a platform for budding entrepreneurs to transform their ideas into successful ventures.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Gaurav Kumar - Tanay Chhajed.jpg",
                    "Harsh - Tanay Chhajed.jpg",
                    "Kushal - Tanay Chhajed.jpg",
                    "Manas - Tanay Chhajed.jpg",
                    "Mayank - Tanay Chhajed.jpg",
                    "Nalin - Tanay Chhajed.JPG",
                    "Raunak - Tanay Chhajed.jpg",
                    "Rudra - Tanay Chhajed.jpg",
                    "Saumya_Jain - Tanay Chhajed.jpg",
                    "Tanay - Tanay Chhajed.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/ecellcoordinators/" + e,
                          alt: "Ecell Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "Ecell Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/ecell_iitpatna/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://www.linkedin.com/school/ecell-iit-patna/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/ecelllogo.jpg",
          },
          {
            title: "Quantum Technology Club",
            category: "Quantum Technology",
            content: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("p", {
                  children:
                    "Quantum Technology Club looks forward to bring all the quantum enthusiasts under a common hood and spread awareness about the fast growing quantum technology among the student community. The club tries to solve different problems using quantum computing techniques in such a time which is much less than that taken by a classical computer.",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-wrap mt-[20px]",
                  children: [
                    "Aryan - Suprajit Dewanji.jpg",
                    "Krishnakant - Suprajit Dewanji.png",
                    "Nishant - Suprajit Dewanji.jpg",
                    "Sukrit - Suprajit Dewanji.jpg",
                    "Suprajit - Suprajit Dewanji.jpg",
                  ].map((e) =>
                    (0, r.jsxs)("div", {
                      className:
                        "md:basis-1/2 lg:basis-1/3 p-12 flex flex-col justify-between",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/coordinators/quantumtechcoordinators/" + e,
                          alt: "QTC Coordinator",
                          className: "object-cover h-full",
                        }),
                        (0, r.jsx)("p", { children: "QTC Coordinator" }),
                      ],
                    }),
                  ),
                }),
                (0, r.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "20px" },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://www.instagram.com/qtc.iitp/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "pink"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.ao$, { size: 24 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://in.linkedin.com/company/quantum-technology-club",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "white" },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.color = "blue"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.color = "white"),
                      children: (0, r.jsx)(Q.QEs, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            src: "/images/quantum_technology_club_logo.jpeg",
          },
        ],
        ee = [
          {
            category: "Astronomy and Particle Physics Club",
            title: "National Space Day-2024",
            src: "/images/APC.png",
            content: (0, r.jsxs)("ul", {
              children: [
                (0, r.jsx)("li", { children: "Quiz" }),
                (0, r.jsx)("li", { children: "22-23/08/24" }),
                (0, r.jsx)("li", { children: "No Time" }),
                (0, r.jsx)("li", {
                  children: "live streaming, poster, quiz, movie night",
                }),
                (0, r.jsx)("li", { children: "5:30pm-8:30pm" }),
              ],
            }),
          },
          {
            category: "NJACK",
            title: "NSoC Game Jam",
            src: "/images/NJACK.png",
            content: (0, r.jsxs)("ul", {
              children: [
                (0, r.jsx)("li", { children: "Competition" }),
                (0, r.jsx)("li", { children: "01/07/2024" }),
                (0, r.jsx)("li", { children: "No Time" }),
                (0, r.jsx)("li", { children: "Venue not decided" }),
                (0, r.jsx)("li", { children: "No Description" }),
              ],
            }),
          },
          {
            category: "NJACK",
            title: "NSoC Animation Challenge",
            src: "/images/NJACK.png",
            content: (0, r.jsxs)("ul", {
              children: [
                (0, r.jsx)("li", { children: "Competition" }),
                (0, r.jsx)("li", { children: "09/07/2024" }),
                (0, r.jsx)("li", { children: "No Time" }),
                (0, r.jsx)("li", { children: "Venue not decided" }),
                (0, r.jsx)("li", { children: "No Description" }),
              ],
            }),
          },
          {
            category: "Sparkonics",
            title: "Electrivia - v1.0",
            src: "/images/Sparkonics.png",
            content: (0, r.jsxs)("ul", {
              children: [
                (0, r.jsx)("li", { children: "Quiz" }),
                (0, r.jsx)("li", { children: "09/07/2024" }),
                (0, r.jsx)("li", { children: "No Time" }),
                (0, r.jsx)("li", {
                  children:
                    "General Knowledge related quizzes to improve the grip",
                }),
                (0, r.jsx)("li", { children: "All Day" }),
              ],
            }),
          },
          {
            category: "NJACK",
            title: "NSoC Design Challenge",
            src: "/images/NJACK.png",
            content: (0, r.jsxs)("ul", {
              children: [
                (0, r.jsx)("li", { children: "Competition" }),
                (0, r.jsx)("li", { children: "16/07/2024" }),
                (0, r.jsx)("li", { children: "No Time" }),
                (0, r.jsx)("li", { children: "Venue not decided" }),
                (0, r.jsx)("li", { children: "All Day" }),
              ],
            }),
          },
          {
            category: "Moodboard",
            title: "Inter IIT Orientation",
            src: "/images/MoodBoard.png",
            content: (0, r.jsxs)("ul", {
              children: [
                (0, r.jsx)("li", { children: "Seminar" }),
                (0, r.jsx)("li", { children: "18/08/2024" }),
                (0, r.jsx)("li", { children: "No Time" }),
                (0, r.jsx)("li", { children: "Venue not decided" }),
                (0, r.jsx)("li", { children: "5-7 PM" }),
              ],
            }),
          },
        ],
        eu = [
          {
            quote: "",
            name: "Dr. Arpit Jain",
            designation: "PIC Technical Affairs",
            src: "/images/team2025-26/arpit.jpeg",
          },
          {
            quote: "",
            name: "Akhand Pratap Narayan Sing",
            designation: "General Secretary, Technical Affairs",
            src: "/images/team2025-26/akhand.jpeg",
          },
          {
            quote: "",
            name: "Shivank Goyal",
            designation: "Technical Secretary, Junior Year",
            src: "/images/team2025-26/shivank.jpeg",
          },
          {
            quote: "",
            name: "Manish Kumar",
            designation: "Technical Secretary, Sophomore Year",
            src: "/images/team2025-26/manish.jpeg",
          },
          {
            quote: "",
            name: "Disha Vishnu Mulchandani",
            designation: "Technical Secretary, UG Girls",
            src: "/images/team2025-26/disha.jpeg",
          },
        ],
        et = [
          {
            quote: "",
            name: "Dr. Somanath Pradhan",
            designation: "PIC Technical Affairs",
            src: "/images/team2024-25/drsomnath.png",
          },
          {
            quote: "",
            name: "Kirtan Jain",
            designation: "General Secretary, Technical Affairs",
            src: "/images/team2024-25/KirtanJain.png",
          },
          {
            quote: "",
            name: "Rishu Kumar Singh",
            designation: "Technical Secretary, Sophomore Year",
            src: "/images/team2024-25/RishuSingh.png",
          },
          {
            quote: "",
            name: "Hemant Chaurasia",
            designation: "Technical Secretary, Junior Year",
            src: "/images/team2024-25/HemantChaurasia.png",
          },
          {
            quote: "",
            name: "Harshit Dhankhar",
            designation: "Technical Secretary, Senior Year",
            src: "/images/team2024-25/Harshit.png",
          },
          {
            quote: "",
            name: "Pranjal Chamaria",
            designation: "Technical Secretary, UG Girls",
            src: "/images/team2024-25/Pranjal.png",
          },
        ],
        ea = [
          {
            quote: "",
            name: "Dr. Bachu Anilkumar",
            designation: "PIC Technical Affairs",
            src: "/images/team2023-24/Bachu_Anilkumar1.jpg",
          },
          {
            quote: "",
            name: "Rishikesh Devanathan",
            designation: "General Secretary, Technical Affairs",
            src: "/images/team2023-24/rishikesh.jpg",
          },
          {
            quote: "",
            name: "Akhand Singh",
            designation: "Technical Secretary, Sophomore Year",
            src: "/images/team2023-24/Akhand.png",
          },
          {
            quote: "",
            name: "Aryan Sahoo",
            designation: "Technical Secretary, Junior Year",
            src: "/images/team2023-24/Aryan.png",
          },
          {
            quote: "",
            name: "Pragya Harsh",
            designation: "Technical Secretary, UG Girls",
            src: "/images/team2023-24/pragya.jpeg",
          },
        ],
        er = [
          {
            quote: "",
            name: "Dr. Anoop Kumar Gupta",
            designation: "PIC Technical Affairs",
            src: "/images/team2022-23/AKGupta.jpg",
          },
          {
            quote: "",
            name: "Shivam Sahu",
            designation: "General Secretary, Technical Affairs",
            src: "/images/team2022-23/Shivam.jpg",
          },
          {
            quote: "",
            name: "Harsh Singh",
            designation: "Technical Secretary, Sophomore Year",
            src: "/images/team2022-23/HarshSingh.png",
          },
          {
            quote: "",
            name: "Rishikesh Devanathan",
            designation: "Technical Secretary, Junior Year",
            src: "/images/team2022-23/rishikesh.jpg",
          },
          {
            quote: "",
            name: "Omkar Deshpande",
            designation: "Technical Secretary, Senior Year",
            src: "/images/team2022-23/Omkar.jpg",
          },
          {
            quote: "",
            name: "Anushka Pandey",
            designation: "Technical Secretary, UG Girls",
            src: "/images/team2022-23/AnushkaPandey.jpg",
          },
        ],
        es = [
          {
            quote: "",
            name: "Dr. Sujoy Kumar Samanta",
            designation: "PIC Technical Affairs",
            src: "/images/team2021-22/dr.sujoy.jpg",
          },
          {
            quote: "",
            name: "Satyam Shukla",
            designation: "General Secretary, Technical Affairs",
            src: "/images/team2021-22/satyam.jpg",
          },
          {
            quote: "",
            name: "Rishikesh Devanathan",
            designation: "Technical Secretary, Sophomore Year",
            src: "/images/team2021-22/rishikesh.jpg",
          },
          {
            quote: "",
            name: "Shubham Kumar",
            designation: "Technical Secretary, Junior Year",
            src: "/images/team2021-22/shubham.jpg",
          },
          {
            quote: "",
            name: "Anuj Kumar Yadav",
            designation: "Technical Secretary, Senior Year",
            src: "/images/team2021-22/anuj.jpg",
          },
          {
            quote: "",
            name: "Kalpana Bishnoi",
            designation: "Technical Secretary, UG Girls",
            src: "/images/team2021-22/kalpana.jpg",
          },
        ];
    },
    2330: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [525, 291, 711, 934, 61, 441, 517, 358], () => t(7407)),
      (_N_E = e.O()));
  },
]);
