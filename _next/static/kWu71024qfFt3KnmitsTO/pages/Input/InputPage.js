(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{BBWH:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Input/InputPage",function(){return t("JUCr")}])},JUCr:function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),o=t("ERkP"),a=t.n(o),i=t("GsAr"),l=t("lIm4"),s=t("cxan"),c=t("R5dR"),u=t("nFRM"),p=a.a.createElement,f=[{name:"description",types:["string","FormControlDescription"],description:"Append a description to the input field."},{name:"error",types:["string","string[]","FormControlError","FormControlError[]"],description:p(a.a.Fragment,null,"Displays an error message for the field. Error message will be passed to the ",p(l.a,null,"FormGroup")," for display purposes.")},{name:"iconLeft",types:p(c.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:p(a.a.Fragment,null,"Pass in an"," ",p(c.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"iconRight",types:p(c.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:p(a.a.Fragment,null,"Pass in an"," ",p(c.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the right of the text.")},{name:"label",types:["string","FormControlLabel"],description:p(a.a.Fragment,null,"Label element for inputs. Component with auto generate ",p(l.a,null,"id"),"'s for the accessibility API.")},{name:"labelId",types:"string",description:p(a.a.Fragment,null,"Appends an ",p(l.a,null,"id")," to the generated label element.")}],h=function(e){return p(u.a,Object(s.a)({title:"Input",propList:f},e))},d=a.a.createElement;n.default=function(){return d(a.a.Fragment,null,d(r.H0,null,"Input"),d(r.Text,null,"Inputs are stylized form controls with the ability of controling validation."," ",d(r.Link,{href:"https://design.bigcommerce.com/components/text-field",target:"_blank"},"Text Field Design Guidelines"),"."),d(i.a,null,'function Example() {\n  const [value, setValue] = useState(\'\');\n\n  const handleChange = (event) => setValue(event.target.value);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Input\n          label="Label"\n          description="Description for the input."\n          placeholder="Placeholder"\n          type="text"\n          value={value}\n          onChange={handleChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n}'),d(r.H1,null,"API"),d(r.Text,null,"Supports all native ",d(l.a,null,"<input />")," element attributes."),d(h,null),d(r.H1,null,"Error State"),d(r.Text,null,"Inputs allow you to pass in an ",d(l.a,{primary:!0},"error")," message that will control the styles of an input. The logic on the input can be controlled with the ",d(l.a,{primary:!0},"onChange")," prop."),d(i.a,null,'<Form>\n  <FormGroup>\n    <Input\n      label="Email Address"\n      description="Provide a valid email address."\n      value="example@"\n      error="Email address must contain a domain name."\n      onChange={() => null}\n    />\n  </FormGroup>\n</Form>'),d(r.H1,null,"Icons"),d(r.Text,null,"Inputs can also contain icons via the ",d(l.a,null,"iconLeft")," & ",d(l.a,null,"iconRight")," props."),d(i.a,null,'<Form>\n  <FormGroup>\n    <Input label="Example" placeholder="Example" iconLeft={<CheckCircleIcon color="success" />} />\n    <Input label="Example" placeholder="Example" iconRight={<CheckCircleIcon color="success" />} />\n  </FormGroup>\n</Form>'))}},KeDb:function(e,n,t){"use strict";var r=t("zQIG"),o=t("8mBC"),a=t("I/kN"),i=t("cMav"),l=t("pSQP");function s(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)}}var c=t("Y3ZS"),u=t("pONU");n.__esModule=!0,n.default=void 0;var p,f=u(t("ERkP")),h=t("cRaD"),d=t("fvxO"),m=c(t("7xIC")),g=t("L9lV");function v(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,I={};function x(){return p||(b?p=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var n=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){a(t,e);var n=s(t);function t(e){var o;return r(this,t),(o=n.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var n=null,t=null,r=null;return function(o,a){if(r&&o===n&&a===t)return r;var i=e(o,a);return n=o,t=a,r=i,i}}((function(e,n){return{href:(0,g.addBasePath)(v(e)),as:n?(0,g.addBasePath)(v(n)):n}})),o.linkClicked=function(e){var n=e.currentTarget,t=n.nodeName,r=n.target;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,l=a.as;if(function(e){var n=(0,h.parse)(e,!1,!0),t=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var s=window.location.pathname;i=(0,h.resolve)(s,i),l=l?(0,h.resolve)(s,l):i,e.preventDefault();var c=o.props.scroll;null==c&&(c=l.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](i,l,{shallow:o.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,o=(0,h.resolve)(e,t);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var n=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),I[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=x();return t?(t.observe(e),y.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}y.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();m.default.prefetch(n[0],n[1],e).catch((function(e){0})),I[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"===typeof n&&(n=f.default.createElement("a",null,n));var a=f.Children.only(n),i={ref:function(n){e.handleRef(n),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(n):"object"===typeof a.ref&&(a.ref.current=n))},onMouseEnter:function(n){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),f.default.cloneElement(a,i)}}]),t}(f.Component);n.default=w},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),o=t("jvFD"),a=t.n(o),i=t("ERkP"),l=t.n(i).a.createElement;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){return"/big-design"+e}}var c=function(e){var n=e.as,t=e.children,o=e.href;return l(a.a,{href:o,as:s(n),passHref:!0},"string"===typeof t?l(r.Link,null,t):t)}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("d2TB"),o=t("XPf/"),a=t("BtTX"),i=t("ERkP"),l=t.n(i),s=t("j/s1"),c=Object(s.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=l.a.createElement,p=function(e){var n=e.children,t=e.title,l=Object(i.useState)(!0),s=l[0],p=l[1],f=function(){return p(!s)};return u("div",null,u(c,{marginBottom:"xLarge",alignItems:"center",onClick:f,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||f()},tabIndex:0},s?u(o.a,{title:"Expand"}):u(a.a,{title:"Collapse"}),u(r.Text,null,t)),!s&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),o=t.n(r),a=t("j/s1"),i=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(a.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(a.d)(["color:",";"],t.colors.primary70)})),l=o.a.createElement,s=function(e){return l(i,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),o=t("ERkP"),a=t.n(o),i=t("lIm4"),l=t("c2K2"),s=a.a.createElement,c=function(e){var n=e.collapsible,t=e.id,o=e.propList,c=e.title,p=function(){return s(r.TableFigure,{marginBottom:"xLarge"},s(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return s(a.a.Fragment,null,s(i.a,{primary:!0},n),t?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(i.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(r.Text,null,n)}}],items:o}),s(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(l.a,{title:"".concat(c," Props")},p()):s(a.a.Fragment,null,s(r.H2,{id:t},c),p())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return s(a.a.Fragment,{key:e},e.type===r.Link?s(i.a,{highlight:!1},e):s(i.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?s(i.a,{highlight:!1},n):s(i.a,null,n)}}},[["BBWH",1,2,4,6,9,7,0,3,5,8,10]]]);