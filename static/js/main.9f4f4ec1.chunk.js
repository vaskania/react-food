(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",MealsLoading:"AvailableMeals_MealsLoading__UmYIn",MealsError:"AvailableMeals_MealsError__38x-D"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(18),l=n(4),u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearContext:function(){}}),d=n(0),j={items:[],totalAmount:0},m=function(e,t){if("ADD_ITEM"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(l.a)(Object(l.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(o.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE_ITEM"===t.type){var s,u=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[u],m=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var b=Object(l.a)(Object(l.a)({},d),{},{amount:d.amount-1});(s=Object(o.a)(e.items))[u]=b}return{items:s,totalAmount:m}}return t.type,j},b=function(e){var t=Object(i.useReducer)(m,j),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(d.jsx)(u.Provider,{value:s,children:e.children})},O=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x=n(10),h=n.n(x),f=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(h.a.button," ").concat(a?h.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(d.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(d.jsx)("span",{className:h.a.icon,children:Object(d.jsx)(O,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:h.a.badge,children:o})]})},p=n.p+"static/media/meals.2971f633.jpg",_=n(17),v=n.n(_),C=function(e){return Object(d.jsxs)(i.Fragment,{children:[Object(d.jsxs)("header",{className:v.a.header,children:[Object(d.jsx)("h1",{children:"Meals"}),Object(d.jsx)(f,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:v.a["main-image"],children:Object(d.jsx)("img",{src:p,alt:"A table full of delicious food"})})]})},N=n(19),y=n.n(N),g=function(){return Object(d.jsxs)("section",{className:y.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},M=n(6),A=n.n(M),I=n(12),k=n(20),w=n.n(k),S=function(e){return Object(d.jsx)("div",{className:w.a.card,children:e.children})},E=n(21),F=n.n(E),P=s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:F.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(l.a)({ref:t},e.input))]})})),T=n(22),D=n.n(T),R=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(d.jsxs)("form",{className:D.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(d.jsx)(P,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!a&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},H=n(13),B=n.n(H),L=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:B.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:B.a.description,children:e.description}),Object(d.jsx)("div",{className:B.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(R,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},U=n(14),Y=n.n(U),z=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),o=s[0],l=s[1],u=Object(i.useState)(),j=Object(r.a)(u,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){(function(){var e=Object(I.a)(A.a.mark((function e(){var t,n,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-526e0-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something get wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){l(!1),b(e.message)}))}),[]),o)return Object(d.jsx)("section",{className:Y.a.MealsLoading,children:Object(d.jsx)("p",{children:"Loading..."})});if(m)return Object(d.jsx)("section",{className:Y.a.MealsError,children:Object(d.jsx)("p",{children:m})});var O=n.map((function(e){return Object(d.jsx)(L,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:Y.a.meals,children:Object(d.jsx)(S,{children:Object(d.jsx)("ul",{children:O})})})},J=function(){return Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(z,{})]})},V=n(15),Z=n.n(V),q=function(e){return Object(d.jsx)("div",{className:Z.a.backdrop,onClick:e.onClose})},Q=function(e){return Object(d.jsx)("div",{className:Z.a.modal,children:Object(d.jsx)("div",{className:Z.a.content,children:e.children})})},X=document.getElementById("overlays"),$=function(e){return Object(d.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(d.jsx)(q,{onClose:e.onClose}),X),c.a.createPortal(Object(d.jsx)(Q,{children:e.children}),X)]})},G=n(7),K=n.n(G),W=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:K.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:K.a.summary,children:[Object(d.jsx)("span",{className:K.a.price,children:t}),Object(d.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:K.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},ee=n(5),te=n.n(ee),ne=n(3),ae=n.n(ne),ce=function(e){return""===e.trim()},re=function(e){var t=Object(i.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),j="".concat(ae.a.control," ").concat(a.name?"":ae.a.invalid),m="".concat(ae.a.control," ").concat(a.street?"":ae.a.invalid),b="".concat(ae.a.control," ").concat(a.postalCode?"":ae.a.invalid),O="".concat(ae.a.control," ").concat(a.city?"":ae.a.invalid);return Object(d.jsxs)("form",{className:ae.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=o.current.value,r=l.current.value,i=u.current.value,d=!ce(n),j=!ce(a),m=4===r.trim().length,b=!ce(i);c({name:d,street:j,postalCode:m,city:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:a,postalCode:r,city:i})},children:[Object(d.jsxs)("div",{className:j,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(d.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(d.jsx)("p",{children:"Please enter a valid name!"})]}),Object(d.jsxs)("div",{className:m,children:[Object(d.jsx)("label",{htmlFor:"street",children:"Street"}),Object(d.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(d.jsx)("p",{children:"Please enter a valid street!"})]}),Object(d.jsxs)("div",{className:b,children:[Object(d.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(d.jsx)("p",{children:"Please enter a valid postal-code!"})]}),Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(d.jsx)("p",{children:"Please enter a valid City!"})]}),Object(d.jsxs)("div",{className:ae.a.actions,children:[Object(d.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(d.jsx)("button",{className:ae.a.submit,children:"Confirm"})]})]})},ie=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(!1),j=Object(r.a)(o,2),m=j[0],b=j[1],O=Object(i.useState)(!1),x=Object(r.a)(O,2),h=x[0],f=x[1],p=Object(i.useContext)(u),_="$".concat(p.totalAmount.toFixed(2)),v=p.items.length>0,C=function(e){p.removeItem(e)},N=function(e){p.addItem(Object(l.a)(Object(l.a)({},e),{},{amount:1}))},y=function(){var e=Object(I.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://react-http-526e0-default-rtdb.firebaseio.com/order.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items})});case 3:b(!1),f(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(d.jsx)("ul",{className:te.a["cart-items"],children:p.items.map((function(e){return Object(d.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:C.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),M=Object(d.jsxs)("div",{className:te.a.actions,children:[Object(d.jsx)("button",{className:te.a["button--alt"],onClick:e.onClose,children:"Close"}),v&&Object(d.jsx)("button",{onClick:function(){c(!0)},className:te.a.button,children:"Order"})]}),k=Object(d.jsxs)(s.a.Fragment,{children:[g,Object(d.jsxs)("div",{className:te.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:_})]}),a&&Object(d.jsx)(re,{onCancel:e.onClose,onConfirm:y}),!a&&M]}),w=Object(d.jsx)("p",{children:"Sending order data..."}),S=Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)("p",{children:"Successfully sent the order!"}),Object(d.jsx)("div",{className:te.a.actions,children:Object(d.jsx)("button",{className:te.a.button,onClick:e.onClose,children:"Close"})})]});return Object(d.jsxs)($,{onClose:e.onClose,children:[!m&&!h&&k," ",m&&w,!m&&h&&S]})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(b,{children:[n&&Object(d.jsx)(ie,{onClose:function(){a(!1)}}),Object(d.jsx)(C,{onShowCart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(J,{})})]})};c.a.render(Object(d.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.9f4f4ec1.chunk.js.map