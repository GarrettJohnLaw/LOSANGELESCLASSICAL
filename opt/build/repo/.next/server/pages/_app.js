"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Col"
const Col_namespaceObject = require("react-bootstrap/Col");
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/NavDropdown"
const NavDropdown_namespaceObject = require("react-bootstrap/NavDropdown");
var NavDropdown_default = /*#__PURE__*/__webpack_require__.n(NavDropdown_namespaceObject);
;// CONCATENATED MODULE: external "moment-timezone"
const external_moment_timezone_namespaceObject = require("moment-timezone");
var external_moment_timezone_default = /*#__PURE__*/__webpack_require__.n(external_moment_timezone_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Button"
const Button_namespaceObject = require("react-bootstrap/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: ./components/layout/NavBar.jsx









function NavBar() {
    const { data: session , status  } = (0,react_namespaceObject.useSession)();
    if (status === "unauthenticated") {
        (0,react_namespaceObject.signIn)();
    }
    const name = session?.user?.name;
    const firstName = name?.split(" ")[0];
    var time = external_moment_timezone_default()().hours();
    let greeting;
    if (time < 12) {
        greeting = `Good morning, ${firstName}`;
    } else if (time < 17) {
        greeting = `Good afternoon, ${firstName}`;
    } else {
        greeting = `Good evening, ${firstName}`;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        bg: "dark",
        variant: "dark",
        expand: "lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            fluid: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                            href: "/",
                            children: "Los Angeles Classical"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                            "aria-controls": "basic-navbar-nav"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Collapse, {
                            id: "basic-navbar-nav",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                                className: "me-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                        href: "/",
                                        children: "Jobs"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                        href: "/events",
                                        children: "Events"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((NavDropdown_default()), {
                                        title: "Dropdown",
                                        id: "basic-nav-dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Item, {
                                                href: "#action/3.1",
                                                children: "Action"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Item, {
                                                href: "#action/3.2",
                                                children: "Another action"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Item, {
                                                href: "#action/3.3",
                                                children: "Something"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Divider, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx((NavDropdown_default()).Item, {
                                                href: "#action/3.4",
                                                children: "Separated link"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                    width: "2",
                    className: "d-flex justify-content-end align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-white align-self-center my-0 mx-2",
                            children: greeting
                        }),
                        status === "unauthenticated" && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "primary",
                            children: "Login"
                        }),
                        status === "authenticated" && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "secondary",
                            size: "sm",
                            onClick: ()=>(0,react_namespaceObject.signOut)(),
                            children: "Logout"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/layout/Footer.jsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-dark text-white m-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Contact"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Email ETC"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
;// CONCATENATED MODULE: ./components/layout/Layout.jsx





function Layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            fluid: true,
            className: "p-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Los Angeles Classical"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            children: children
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.jsx





function App({ Component , pageProps: { session , ...pageProps } ,  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.SSRProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.SessionProvider, {
            session: session,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                className: "flex-grow-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(216));
module.exports = __webpack_exports__;

})();