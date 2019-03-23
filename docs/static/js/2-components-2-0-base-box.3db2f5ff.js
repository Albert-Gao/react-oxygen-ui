(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./documentation/2. components/2.0 BaseBox.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./node_modules/docz/dist/index.m.js"),s=t("./src/index.ts");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,u(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"basebox"}},"BaseBox"),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"BaseBox")," is the foundation of every other component. All the other components is just ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"BaseBox")," with extra ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"props")," (like ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"type")," for ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>"),") or different html tag (like ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<p> for <Paragraph>"),"). If you want to bake your own primitive components, then you might want to start from ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<BaseBox>"),"."),a.a.createElement(r.MDXTag,{name:"p",components:n},"The main goal of this components is to provide the all the necessary ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"css")," propperties, so we can control them effortlessly in JS."),a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"basic-usage"}},"Basic usage"),a.a.createElement(r.MDXTag,{name:"p",components:n},"If you want to make a component based on ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"span")," tag, you just use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"as")," prop from ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"styled-components"),"."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'const Span = ({ children, ...rest }) => (\n  <BaseBox as="span" {...rest}>\n    {children}\n  </BaseBox>\n);\n')),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Any prop you see here, you can use it when you use the other component. Because they are all based on ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<BaseBox>"),"."),a.a.createElement(r.MDXTag,{name:"p",components:n},"In short, these are just plain CSS props."),a.a.createElement(p.f,{of:s.BaseBox,scales:!0,kind:!0}))}}])&&i(t.prototype,o),c&&i(t,c),n}()}}]);
//# sourceMappingURL=2-components-2-0-base-box.441274fefe145af0ed90.js.map