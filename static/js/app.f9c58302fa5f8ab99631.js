webpackJsonp([3,4],[,,,,,,,,function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"e",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"i",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"g",function(){return d});var r="ADD_TO_CART",i="REMOVE_FROM_CART",o="CHECKOUT_REQUEST",a="CHECKOUT_SUCCESS",u="CHECKOUT_FAILURE",s="RECEIVE_PRODUCTS",c="TOGGLE_COUPON",l="RECEIVE_PROFILE",d="RECEIVE_PROMOTIONS"},,,,,,function(t,e,n){"use strict";var r={firstName:"Majid",lastName:"Hajian",limit:850},i=[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2,shipping:15},{id:2,title:"H&M T-Shirt White",price:10.99,inventory:10,shipping:5},{id:3,title:"Nirvana - LP",price:19.99,inventory:3,shipping:22.5},{id:4,title:"Licensed Steel Gloves",price:30.99,inventory:5,shipping:9},{id:5,title:"Rustic Granite Car",price:487,inventory:1,shipping:35},{id:6,title:"Fantastic Cotton Pants",price:59.59,inventory:6,shipping:11},{id:7,title:"Tasty Wooden Pizza",price:29,inventory:2,shipping:18},{id:8,title:"Delicious Concrete Fish",price:12.99,inventory:4,shipping:6},{id:9,title:"Granite Computer",price:109.1,inventory:10,shipping:22.7},{id:10,title:"Handcrafted Soft Salad",price:13.99,inventory:3,shipping:3.5},{id:11,title:"Incredible Steel Bacon",price:30.99,inventory:5,shipping:7.9},{id:12,title:"Tasty Plastic Bike",price:75,inventory:5,shipping:25}],o=[{id:1,title:"10% OFF"},{id:2,title:"NOK500.00 Discount"},{id:3,title:"Free Shipping"},{id:4,title:"+ NOK600.00 on limit"}];e.a={getProfile:function(t){setTimeout(function(){return t(r)},500)},getProducts:function(t){setTimeout(function(){return t(i)},500)},getPromotions:function(t){setTimeout(function(){return t(o)},500)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(168);var r=n(2)(n(108),n(186),"data-v-51d92aa2",null);t.exports=r.exports},function(t,e,n){n(165);var r=n(2)(n(109),n(183),"data-v-37118a0c",null);t.exports=r.exports},,function(t,e,n){"use strict";var r=n(3),i=n(191),o=n(170),a=n.n(o),u=n(175),s=n.n(u),c=n(174),l=n.n(c),d=n(69),p=n.n(d),f=n(66),v=n.n(f),m=n(68),_=n.n(m),h=n(67),g=n.n(h);r.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:a.a},{path:"/products",name:"Shop",component:function(t){return n.e(0).then(function(){var e=[n(198)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/cart",name:"Cart",component:p.a},{path:"/checkout",name:"Checkout",component:l.a},{path:"/thanks",name:"Thanks",component:s.a},{path:"/contact",component:function(t){return n.e(1).then(function(){var e=[n(197)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"",component:v.a},{path:"phone",component:_.a},{path:"gmap",component:g.a}]}]})},function(t,e,n){"use strict";var r=n(3),i=n(6),o=n(92),a=n(93),u=n(95),s=n(96),c=n(97),l=n(94);r.default.use(i.b),e.a=new i.b.Store({actions:o,getters:a,modules:{products:u.a,profile:s.a,promotions:c.a,cart:l.a},strict:!1})},,function(t,e){},,function(t,e,n){n(166);var r=n(2)(n(98),n(184),null,null);t.exports=r.exports},function(t,e,n){var r=n(2)(n(100),n(181),null,null);t.exports=r.exports},function(t,e,n){var r=n(2)(n(101),n(179),null,null);t.exports=r.exports},function(t,e,n){var r=n(2)(n(102),n(189),null,null);t.exports=r.exports},function(t,e,n){var r=n(2)(n(106),n(187),null,null);t.exports=r.exports},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8);n.d(e,"addToCart",function(){return i}),n.d(e,"removeFromCart",function(){return o}),n.d(e,"toggleCoupon",function(){return a});var i=function(t,e){var n=t.commit;e.inventory>0&&n(r.d,e.id)},o=function(t,e){(0,t.commit)(r.e,e)},a=function(t,e){(0,t.commit)(r.f,e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(38),i=n.n(r),o=n(9),a=n.n(o);n.d(e,"cartProducts",function(){return u}),n.d(e,"itemsQuantity",function(){return s}),n.d(e,"subtotal",function(){return c}),n.d(e,"taxes",function(){return l}),n.d(e,"shipping",function(){return d}),n.d(e,"total",function(){return p}),n.d(e,"orderOnLimit",function(){return f});var u=function(t){return t.cart.added.map(function(e){var n=e.id,r=e.quantity,i=t.products.all.find(function(t){return t.id===n});return a()({},i,{quantity:r})})},s=function(t){return u(t).reduce(function(t,e){return t+e.quantity},0)},c=function(t){var e=u(t).reduce(function(t,e){return t+e.price*e.quantity},0);return t.cart.productDiscount?.7*e:e},l=function(t){return.005*c(t)},d=function t(e){var t=u(e).map(function(t){return t.shipping});return e.cart.freeShipping||!t.length?0:Math.max.apply(Math,i()(t))},p=function(t){var e=t.cart.totalDiscount?-100:0;return c(t)+l(t)+d(t)+e},f=function(t){return t.profile.data.limit<=p(t)}},function(t,e,n){"use strict";var r,i=n(15),o=n.n(i),a=n(38),u=n.n(a),s=n(14),c=n(8),l={added:[],checkoutStatus:null,productDiscount:!1,totalDiscount:!1,freeShipping:!1},d={checkoutStatus:function(t){return t.checkoutStatus}},p={checkout:function(t,e){var n=t.commit,r=t.state,i=[].concat(u()(r.added));n(c.a),s.a.buyProducts(e,function(){return n(c.b)},function(){return n(c.c,{savedCartItems:i})})}},f=(r={},o()(r,c.d,function(t,e){t.lastCheckout=null;var n=t.added.find(function(t){return t.id===e});n?n.quantity++:t.added.push({id:e,quantity:1})}),o()(r,c.e,function(t,e){var n=t.added.findIndex(function(t){return t.id===e.id});t.added.splice(n,1)}),o()(r,c.f,function(t,e){var n={1:"productDiscount",2:"totalDiscount",3:"freeShipping"};n[e.id]&&(t[n[e.id]]=!t[n[e.id]])}),o()(r,c.a,function(t){t.added=[],t.checkoutStatus=null}),o()(r,c.b,function(t){t.checkoutStatus="successful"}),o()(r,c.c,function(t,e){var n=e.savedCartItems;t.added=n,t.checkoutStatus="failed"}),r);e.a={state:l,getters:d,actions:p,mutations:f}},function(t,e,n){"use strict";var r,i=n(15),o=n.n(i),a=n(14),u=n(8),s={all:[]},c={allProducts:function(t){return t.all}},l={getAllProducts:function(t){var e=t.commit;a.a.getProducts(function(t){e(u.i,{products:t})})}},d=(r={},o()(r,u.i,function(t,e){var n=e.products;t.all=n}),o()(r,u.d,function(t,e){t.all.find(function(t){return t.id===e}).inventory--}),o()(r,u.e,function(t,e){t.all.find(function(t){return t.id===e.id}).inventory+=e.quantity}),r);e.a={state:s,getters:c,actions:l,mutations:d}},function(t,e,n){"use strict";var r,i=n(15),o=n.n(i),a=n(14),u=n(8),s={data:[]},c={profile:function(t){return t.data}},l={getProfile:function(t){var e=t.commit;a.a.getProfile(function(t){e(u.h,t)})}},d=(r={},o()(r,u.h,function(t,e){t.data=e}),o()(r,u.f,function(t,e){4===e.id&&(e.active?t.data.limit-=100:t.data.limit+=100)}),r);e.a={state:s,mutations:d,actions:l,getters:c}},function(t,e,n){"use strict";var r,i=n(15),o=n.n(i),a=n(14),u=n(8),s={all:[]},c={allPromotions:function(t){return t.all}},l={getAllPromotions:function(t){var e=t.commit;a.a.getPromotions(function(t){e(u.g,t)})}},d=(r={},o()(r,u.g,function(t,e){t.all=e}),o()(r,u.f,function(t,e){e.active=!e.active}),r);e.a={state:s,mutations:d,getters:c,actions:l}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(173),i=n.n(r),o=n(172),a=n.n(o);e.default={name:"app",components:{Navbar:i.a,Footer:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(171),i=n.n(r);e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js Shop App"}},components:{Slideshow:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"email"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"gmap"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"phone"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"slideshow",data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer",data:function(){return{footer:"Copyright 2017, Majid Hajian. Made with Love by Vue.js"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),i=n.n(r),o=n(6);e.default={name:"navbar",computed:i()({},n.i(o.a)(["itemsQuantity"])),data:function(){return{activeIndex:"1"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),i=n.n(r),o=n(6),a=n(57),u=n.n(a),s=n(58),c=n.n(s);e.default={components:{Items:u.a,Summery:c.a},computed:i()({},n.i(o.a)({products:"cartProducts"}),{total:function(){return this.products.reduce(function(t,e){return t+e.price*e.quantity},0)}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),i=n.n(r),o=n(6),a=n(57),u=n.n(a),s=n(58),c=n.n(s);e.default={computed:i()({},n.i(o.a)({products:"cartProducts",checkoutStatus:"checkoutStatus"})),components:{Items:u.a,Summery:c.a},methods:{checkout:function(t){this.$store.dispatch("checkout",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(176),i=n.n(r);e.default={props:{product:Object},components:{RemoveFromCart:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),i=n.n(r),o=n(6);e.default={computed:i()({},n.i(o.a)(["itemsQuantity","subtotal","taxes","shipping","total"]),n.i(o.d)({productDiscount:function(t){return t.cart.productDiscount},freeShipping:function(t){return t.cart.freeShipping},totalDiscount:function(t){return t.cart.totalDiscount}}),{totalWithDiscount:function(){return this.$store.getters.total>0?this.total:0}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"thanks",data:function(){return{msg:"Thank you"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6);e.default={props:{product:Object},methods:n.i(r.c)(["removeFromCart"])}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(163);var r=n(2)(n(99),n(180),"data-v-13c606aa",null);t.exports=r.exports},function(t,e,n){n(169);var r=n(2)(n(103),n(188),null,null);t.exports=r.exports},function(t,e,n){n(167);var r=n(2)(n(104),n(185),"data-v-479e571d",null);t.exports=r.exports},function(t,e,n){n(164);var r=n(2)(n(105),n(182),null,null);t.exports=r.exports},function(t,e,n){var r=n(2)(n(107),n(178),null,null);t.exports=r.exports},function(t,e,n){var r=n(2)(n(110),n(177),null,null);t.exports=r.exports},function(t,e,n){var r=n(2)(n(111),n(190),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"thanks"},[t._v("\n  "+t._s(t.msg)+"\n  "),n("router-link",{attrs:{to:"/products"}},[n("el-button",[t._v("Go to Products page")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkout"},[n("div",{staticClass:"page-container"},[n("el-steps",{attrs:{space:100,active:3,"finish-status":"success"}},[n("el-step",{attrs:{title:"Select"}}),t._v(" "),n("el-step",{attrs:{title:"Cart"}}),t._v(" "),n("el-step",{attrs:{title:"Checkout"}}),t._v(" "),n("el-step",{attrs:{title:"Payment"}}),t._v(" "),n("el-step",{attrs:{title:"Done"}})],1),t._v(" "),n("br"),t._v(" "),t.products.length?t._e():n("h3",[t._v("Nothing in your basket, please select some items.")]),t._v(" "),t._l(t.products,function(t){return n("Items",{key:t.id,attrs:{product:t}})}),t._v(" "),t.products.length?n("Summery",{attrs:{total:t.total}}):t._e(),t._v(" "),n("br"),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.checkoutStatus,expression:"checkoutStatus"}]},[t._v("Checkout "+t._s(t.checkoutStatus)+".")]),t._v(" "),n("router-link",{attrs:{to:"/thanks"}},[n("el-button",{attrs:{disabled:!t.products.length,type:"danger"},on:{click:function(e){t.checkout(t.products)}}},[t._v("PAYMENT and DONE")])],1)],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gmap"},[n("h1",[t._v("MAP")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"page-container"},[n("br"),t._v(" "),n("Slideshow")],1),t._v(" "),n("el-row",[n("div",{staticClass:"parallax"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("router-link",{attrs:{to:"/products"}},[n("el-button",[t._v("Go to Products")])],1)],1)]),t._v(" "),n("el-row",[n("p",[t._v("\n        This app has been made with Vue.js in order to compare with Angular 2 and Ember.js. "),n("br"),t._v("\n        A tutorial and comparison chart and table will be published soon.\n      ")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"email"},[n("h1",[t._v("EMAIL")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":t.activeIndex,mode:"horizontal"}},[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/"}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("\n          Home\n        ")])],1),t._v(" "),n("router-link",{attrs:{to:"/products"}},[n("el-menu-item",{attrs:{index:"2"}},[t._v("\n          Products\n        ")])],1),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[t._v("Contact")]),t._v(" "),n("router-link",{attrs:{to:"/contact"}},[n("el-menu-item",{attrs:{index:"3-1"}},[t._v("Email")])],1),t._v(" "),n("router-link",{attrs:{to:"/contact/phone"}},[n("el-menu-item",{attrs:{index:"3-2"}},[t._v("\n            Phone\n          ")])],1),t._v(" "),n("router-link",{attrs:{to:"/contact/gmap"}},[n("el-menu-item",{attrs:{index:"3-3"}},[t._v("\n            Map\n          ")])],1)],2),t._v(" "),n("router-link",{staticStyle:{float:"right"},attrs:{to:"/checkout"}},[n("el-menu-item",{attrs:{index:"4"}},[n("el-badge",{staticClass:"item",attrs:{value:t.itemsQuantity}},[t._v("\n          Checkout ("+t._s(t.itemsQuantity)+" "+t._s(t._f("pluralize")("item",t.itemsQuantity))+")\n          ")])],1)],1)],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-group"},[n("li",{staticClass:"list-group-item"},[t._v("\n    Subtotal ("+t._s(t.itemsQuantity)+" "+t._s(t._f("pluralize")("item",t.itemsQuantity))+"): "+t._s(t._f("formatMoney")(t.subtotal))+"\n    "),t.productDiscount?n("em",[n("b",[t._v(" (30% OFF applied)")])]):t._e()]),t._v(" "),n("li",{staticClass:"list-group-item"},[t._v("\n    Shipping:\n    "),t.freeShipping?t._e():n("span",[t._v(" "+t._s(t._f("formatMoney")(t.shipping)))]),t._v(" "),t.freeShipping?n("em",[t._v(" Free Shipping")]):t._e()]),t._v(" "),n("li",{staticClass:"list-group-item"},[t._v("Taxes: "+t._s(t._f("formatMoney")(t.taxes)))]),t._v(" "),n("li",{staticClass:"list-group-item"},[n("strong",[t._v("Total:")]),t._v(" "),t.totalDiscount?t._e():n("strong",[t._v(" "+t._s(t._f("formatMoney")(t.total)))]),t._v(" "),t.totalDiscount?n("span",[n("strike",[t._v(" "+t._s(t._f("formatMoney")(t.total+100)))]),t._v(" "),n("strong",[t._v(" "+t._s(t._f("formatMoney")(t.totalWithDiscount)))])],1):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("Navbar"),t._v(" "),n("transition",{attrs:{name:"move",mode:"out-in"}},[n("router-view")],1),t._v(" "),n("Footer")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":t.activeIndex,mode:"horizontal"}},[n("div",{staticClass:"page-container"},[n("a",{attrs:{target:"_blank",href:"https://www.majidhajian.com"}},[t._v("\n            "+t._s(t.footer)+"\n        ")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",slot:"header"},[n("span",[n("strong",[t._v(" "+t._s(t.product.title)+" ")])]),t._v(" "),n("remove-from-cart",{staticStyle:{float:"right"},attrs:{product:t.product}})],1),t._v(" "),n("div",{staticClass:"text item"},[n("i",{staticClass:"el-icon-circle-check"}),t._v(" Quantity: "),n("strong",[t._v(t._s(t.product.quantity))]),n("br"),t._v(" "),n("i",{staticClass:"el-icon-circle-check"}),t._v(" Unit-Price: "),n("strong",[t._v(t._s(t._f("formatMoney")(t.product.price)))]),n("br"),t._v(" "),n("i",{staticClass:"el-icon-circle-check"}),t._v(" Unit-Total: "),n("strong",[t._v(t._s(t.product.price*t.product.quantity))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("h3",[t._v("Your Cart")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.products.length,expression:"!products.length"}]},[n("i",[t._v("Please add some products to cart.")])]),t._v(" "),t._l(t.products,function(t){return n("Items",{key:t.id,attrs:{product:t}})}),t._v(" "),n("br"),t._v(" "),n("router-link",{attrs:{to:"/checkout"}},[n("el-button",{attrs:{type:"success",size:"large"}},[t._v("Go to Checkout")])],1)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(6,function(e){return n("el-carousel-item",[n("h3",[t._v(t._s(e))])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phone"},[n("h1",[t._v("phone")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-button",{attrs:{type:"danger",size:"mini",icon:"delete"},on:{click:function(e){t.removeFromCart(t.product)}}})},staticRenderFns:[]}},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(62),o=n.n(i),a=n(63),u=(n.n(a),n(59)),s=n.n(u),c=n(64),l=n.n(c),d=n(61),p=n(65),f=n.n(p),v=n(60);r.default.use(o.a),r.default.filter("pluralize",l.a),r.default.filter("formatMoney",s.a.formatMoney),r.default.config.productionTip=!1,new r.default({el:"#app",router:v.a,store:d.a,template:"<App/>",components:{App:f.a}})}],[194]);
//# sourceMappingURL=app.f9c58302fa5f8ab99631.js.map