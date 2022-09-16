"use strict";
(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Event),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/events/EventCard.jsx

function EventCard(props) {
    const event = props.event;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: event.Name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: event.Description
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/events.jsx


function Event(props) {
    let events = [];
    props.events.map((event, index)=>{
        const eventCard = /*#__PURE__*/ jsx_runtime_.jsx(EventCard, {
            event: event
        }, index);
        events.push(eventCard);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Events"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                "data-tockify-component": "calendar",
                "data-tockify-calendar": "losangelesclassical"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                "data-cfasync": "false",
                "data-tockify-script": "embed",
                src: "https://public.tockify.com/browser/embed.js"
            })
        ]
    });
};
async function getServerSideProps(context) {
    const event = {
        Name: "Event Name",
        Description: "Description"
    };
    return {
        props: {
            events: [
                event
            ]
        }
    };
}


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
var __webpack_exports__ = (__webpack_exec__(400));
module.exports = __webpack_exports__;

})();