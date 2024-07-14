/*! For license information please see stories-Alert-Alert-stories.64b76418.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkakatsuki_ui=self.webpackChunkakatsuki_ui||[]).push([[678],{"./src/stories/Alert/Alert.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alert_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function BootAlert(_ref){let{variant,children}=_ref;const[showAlert,setShowAlert]=react.useState(!0);return showAlert?(0,jsx_runtime.jsxs)("div",{className:"alert alert-".concat(void 0===variant?"success":variant," alert-dismissible fade show"),role:"alert",children:[children,(0,jsx_runtime.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:()=>{setShowAlert(!1)},children:(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:"×"})})]}):null}try{BootAlert.displayName="BootAlert",BootAlert.__docgenInfo={description:"",displayName:"BootAlert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"light"'},{value:'"dark"'},{value:'"danger"'},{value:'"success"'},{value:'"warning"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/index.tsx#BootAlert"]={docgenInfo:BootAlert.__docgenInfo,name:"BootAlert",path:"src/components/Alert/index.tsx#BootAlert"})}catch(__react_docgen_typescript_loader_error){}const Alert_stories={title:"Alert",component:BootAlert,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0},layout:"fullscreen",docs:{description:{component:"Our Alert component"}}}},Template={args:{variant:"primary",children:"test"}};Template.parameters={...Template.parameters,docs:{...Template.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "primary",\n    children: "test"\n  }\n}',...Template.parameters?.docs?.source}}};const __namedExportsOrder=["Template"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);