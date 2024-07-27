import{j as e,L as k,_ as S,r as x,m as b,t as _,c as L,u as C,a as w,F as v,I as f,b as E,g as R,d as B,e as W,H as I,A as P,R as z}from"./index-zWI-pVi5.js";import{S as N}from"./slick-theme-YF3k--Fa.js";const T=({name:r})=>e.jsx(k,{to:"/products",onClick:()=>window.scroll(0,0),className:"px-6 py-2.5 bg-[#EC72AF] text-white",children:r}),H=()=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"w-full cta_bg py-14 sm:py-32 px-4 sm:px-4 xl:px-0",children:e.jsx("div",{className:"max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto",children:e.jsxs("div",{className:"content max-w-xl sm:max-w-xl xl:max-w-3xl",children:[e.jsx("h2",{className:"mb-6 playfair text-4xl sm:text-5xl font-semibold",children:"Explore Our Wide Range of Amazing Products"}),e.jsx("p",{className:"mb-6 max-w-xs sm:max-w-md lg:max-w-full",children:"We feel proud to be your beauty spot! Pick what you need with just one click."}),e.jsx(T,{name:"Explore Products"})]})})})}),O=[{review:"Transform Your Skin with Pure Bliss"},{review:"Love Your Skin Like Never Before"},{review:"Embrace the Glow of Health"},{review:"Unlock Your Skin’s True Potential"},{review:"Radiate Confidence Every Day"}],D=()=>e.jsx("section",{className:"py-0 px-0 bg-[#EC72AF]",children:e.jsx(S,{direction:"left",className:"testimonial_marquee",children:O.map((r,o)=>e.jsxs("div",{className:"text-md leading-relaxed tracking-wide px-6 py-4 text-white flex items-center gap-2",children:[e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Star_1.png?v=1714419321",alt:""}),r.review]},o))})});function M({direction:r="up",className:o,framerProps:d={hidden:{opacity:0},show:{opacity:1,transition:{type:"spring"}}},text:a}){const n=x.useMemo(()=>({up:10,down:-10,left:-10,right:10})[r],[r]),l=r==="up"||r==="down"?"y":"x",h=x.useMemo(()=>{const{hidden:i,show:c,...u}=d;return{...u,hidden:{...i??{},opacity:(i==null?void 0:i.opacity)??0,[l]:(i==null?void 0:i[l])??n},show:{...c??{},opacity:(c==null?void 0:c.opacity)??1,[l]:(c==null?void 0:c[l])??0}}},[n,l,d]);return e.jsx(b.div,{initial:"hidden",animate:"show",viewport:{once:!0},variants:h,children:e.jsx(b.span,{className:o,children:a})})}function Y(...r){return _(L(r))}const A=({words:r,wrapperFramerProps:o={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},framerProps:d={hidden:{y:20,opacity:0},show:{y:0,opacity:1}},className:a})=>{const n=x.useRef(null),[l,h]=x.useState(!1);return x.useEffect(()=>{const i=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&(h(!0),i.disconnect())})},{threshold:.1});return n.current&&i.observe(n.current),()=>{n.current&&i.unobserve(n.current)}},[]),e.jsx("div",{ref:n,children:l&&e.jsx(b.h1,{variants:o,initial:"hidden",animate:"show",className:Y("font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",a),children:r.split(" ").map((i,c)=>e.jsx(b.span,{variants:d,style:{display:"inline-block",paddingRight:"8px"},children:i===""?e.jsx("span",{children:" "}):i},c))})})},U=()=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"w-full ",children:e.jsxs("div",{className:"flex justify-center items-center flex-col-reverse lg:flex-row bg-[#FDEDF5]",children:[e.jsx("div",{className:"img_side min-w-[50%]",children:e.jsx("img",{className:"object-cover object-center",src:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Main_Banner.webp?v=1718298006",alt:"banner_img"})}),e.jsx("div",{className:"text_side min-w-[50%] h-full py-20 sm:py-12 px-5 sm:px-8",children:e.jsxs("div",{className:"content lg:max-w-xl mx-auto",children:[e.jsx(A,{className:"playfair text-start max-w-[35rem] mb-6 text-4xl sm:text-5xl xl:text-6xl font-semibold",words:"Keep It Natural With Our New Cosmetic Range"}),e.jsx("p",{children:e.jsx(M,{className:"roboto text-sm sm:text-lg font-normal",direction:"right",framerProps:{show:{transition:{delay:1.7}}},text:`Your one-stop destination for natural slaying looks and glowing\r
                skin. Shop from our carefully handpicked beauty products.`})}),e.jsx("div",{className:"button mt-6",children:e.jsx(k,{to:"/products",onClick:()=>window.scroll(0,0),className:"px-6 py-2.5 bg-[#EC72AF] text-white",children:"Shop Now"})})]})})]})})}),V=({latestProducts:r})=>{const o=C(),[d,a]=x.useState(4),n=x.useRef(null),l=w(s=>s.products.Productloading),h=()=>{n.current&&n.current.slickNext()},i=()=>{n.current&&n.current.slickPrev()},c={infinite:!0,slidesToShow:d,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,pauseOnHover:!0,arrows:!1};x.useEffect(()=>{const s=()=>{window.innerWidth>=1200?a(4):window.innerWidth>=1024?a(3):window.innerWidth>=768?a(2):a(1)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const u=s=>{o(`/selectedItem/${s}`),window.scroll(0,0)},j=({rating:s})=>{const m=[];for(let g=0;g<s;g++)m.push(e.jsx(v,{className:"text-[#FFC209]"},g));return e.jsx("div",{className:"flex",children:m})};return e.jsx(e.Fragment,{children:e.jsx("section",{className:"py-14 sm:py-16 px-5 sm:px-4 xl:px-0",children:e.jsxs("div",{className:"max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto",children:[e.jsxs("div",{className:"header px-0 sm:px-5 flex justify-between items-center flex-wrap gap-6",children:[e.jsxs("div",{className:"name",children:[e.jsx("h2",{className:"mb-2.5 playfair text-center text-4xl sm:text-5xl font-bold",children:"Latest Products"}),e.jsx("p",{className:"h-0.5 w-16 bg-[#EC72AF]"})]}),e.jsxs("div",{className:"slider_button hidden sm:flex flex-row",children:[e.jsx("button",{onClick:i,className:"mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-left ",children:e.jsx("path",{d:"m15 18-6-6 6-6"})})}),e.jsx("button",{onClick:h,className:"mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-right ",children:e.jsx("path",{d:"m9 18 6-6-6-6"})})})]})]}),e.jsxs("div",{className:"data",children:[e.jsx("div",{className:"mt-8 sm:mt-12",children:l?e.jsx(e.Fragment,{children:e.jsx(N,{ref:n,...c,children:[0,1,2,3,4,5].map((s,m)=>e.jsx("li",{className:"px-5",children:e.jsxs("div",{className:"group mb-5 relative rounded-lg w-full bg-white border border-gray-400 cursor-pointer animate-pulse",children:[e.jsx("div",{className:"bg-gray-300 h-56 w-full"}),e.jsxs("div",{className:"py-5 text-center",children:[e.jsx("div",{className:"bg-gray-300 h-5 w-3/4 mx-auto mb-2 rounded-lg"}),e.jsxs("div",{className:"flex items-center justify-center gap-1 mb-2",children:[e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"}),e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"}),e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"}),e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"}),e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"})]}),e.jsx("div",{className:"bg-gray-300 h-4 w-1/2 mx-auto mb-2 rounded-lg"}),e.jsx("div",{className:"bg-gray-300 h-5 w-1/3 mx-auto mb-2 rounded-lg"}),e.jsx("div",{className:"bg-gray-300 h-4 w-1/4 mx-auto mb-3 rounded-lg"})]})]})},m))})}):e.jsx(e.Fragment,{children:e.jsx(N,{ref:n,...c,children:r==null?void 0:r.map((s,m)=>e.jsx("div",{onClick:()=>u(String(s.id)),className:"mx-0 pb-7",children:e.jsxs("div",{className:"group mb-3 relative group w-60 mx-auto pt-0 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer",children:[e.jsx("img",{className:"object-cover w-full h-56",src:s.image.downloadURL,alt:"products"}),e.jsxs("div",{className:"py-5 text-center",children:[e.jsx("h3",{className:"playfair mb-2 text-lg font-semibold text-gray-800",children:s.name}),e.jsx("div",{className:"mb-2 flex items-center justify-center gap-1",children:(s==null?void 0:s.averageRating)===0?e.jsx(v,{className:"text-white"}):e.jsx(j,{rating:s==null?void 0:s.averageRating})}),e.jsxs("p",{className:"mb-3 text-md text-gray-500",children:["(",s.category,")"]}),s.sale_price&&s.sale_price>0?e.jsxs("div",{className:"flex justify-center items-center gap-2",children:[e.jsxs("p",{className:"mb-3 text-md font-semibold text-black",children:["Rs. ",s.sale_price]}),e.jsxs("p",{className:"mb-3 text-md font-semibold text-gray-500 line-through",children:["Rs. ",s.price]})]}):e.jsx(e.Fragment,{children:e.jsxs("p",{className:"mb-3 text-md font-semibold text-black",children:["Rs. ",s.price]})}),e.jsx("button",{className:"hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold",children:"Shop Now"})]})]})},m))})})}),e.jsxs("div",{className:"slider_button sm:hidden flex flex-row justify-center",children:[e.jsx("button",{onClick:i,className:"mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-left ",children:e.jsx("path",{d:"m15 18-6-6 6-6"})})}),e.jsx("button",{onClick:h,className:"mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-right ",children:e.jsx("path",{d:"m9 18 6-6-6-6"})})})]})]})]})})})},$=()=>{const r=C(),o=d=>{r(`/products?category=${d}`),window.scroll(0,0)};return e.jsx(e.Fragment,{children:e.jsx("section",{className:"py-14 sm:py-16 px-4 sm:px-4 xl:px-0",children:e.jsxs("div",{className:"max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto",children:[e.jsx(A,{className:"mb-2.5 playfair text-center text-4xl font-bold",words:"Our Category"}),e.jsx("p",{className:" mx-auto h-0.5 w-16 bg-[#EC72AF]"}),e.jsxs("div",{className:"mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 xl:gap-6",children:[e.jsxs("article",{onClick:()=>o("Skincare"),className:"group relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer",children:[e.jsx("img",{alt:"",src:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Categories_Banners.webp?v=1718298006",className:"absolute inset-0 h-full w-full object-cover"}),e.jsx("div",{className:"relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64",children:e.jsxs("div",{className:"p-4 sm:p-6",children:[e.jsx("h3",{className:"playfair mb-2 mt-0.5 text-xl font-medium text-white",children:"Skincare"}),e.jsxs("p",{className:"text-white text-sm tracking-wider flex items-center gap-1",children:["Shop Now ",e.jsx(f,{size:25})]})]})})]}),e.jsxs("article",{onClick:()=>o("Body Care"),className:"group relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer",children:[e.jsx("img",{alt:"",src:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Categories_Banners_Body_Wash.webp?v=1718298005",className:"absolute inset-0 h-full w-full object-cover"}),e.jsx("div",{className:"relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64",children:e.jsxs("div",{className:"p-4 sm:p-6",children:[e.jsx("h3",{className:"playfair mb-2 mt-0.5 text-xl font-medium text-white",children:"Bodycare"}),e.jsxs("p",{className:"text-white text-sm tracking-wider flex items-center gap-1",children:["Shop Now ",e.jsx(f,{size:25})]})]})})]}),e.jsxs("article",{onClick:()=>o("Haircare"),className:"group relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer",children:[e.jsx("img",{alt:"",src:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Categories_Banners_Hair_Care.webp?v=1718298005",className:"absolute inset-0 h-full w-full object-cover"}),e.jsx("div",{className:"relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64",children:e.jsxs("div",{className:"p-4 sm:p-6",children:[e.jsx("h3",{className:"playfair mb-2 mt-0.5 text-xl font-medium text-white",children:"Haircare"}),e.jsxs("p",{className:"text-white text-sm tracking-wider flex items-center gap-1",children:["Shop Now ",e.jsx(f,{size:25})]})]})})]}),e.jsxs("article",{onClick:()=>o("Cosmetics"),className:"group relative overflow-hidden rounded-lg cursor-pointer",children:[e.jsx("img",{alt:"",src:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/cosmetic.webp?v=1718298006",className:"absolute object-cover w-full h-full"}),e.jsx("div",{className:"relative bg-gradient-to-t from-black/50 to-transparent pt-60 sm:pt-56 lg:pt-64",children:e.jsxs("div",{className:"p-4 sm:p-6",children:[e.jsx("h3",{className:"playfair mb-2 mt-0.5 text-xl font-medium text-white",children:"Cosmetics"}),e.jsxs("p",{className:"text-white text-sm tracking-wider flex items-center gap-1",children:["Shop Now ",e.jsx(f,{size:25})]})]})})]})]})]})})})},q=()=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"w-full second_cta_bg py-14 sm:py-32 px-4 sm:px-4 xl:px-0",children:e.jsx("div",{className:"max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto",children:e.jsxs("div",{className:"content max-w-xs text-black sm:max-w-lg xl:max-w-lg",children:[e.jsx("h2",{className:"mb-6 playfair  text-4xl sm:text-5xl font-semibold",children:"Beauty Bundles for Every Need"}),e.jsx("p",{className:"mb-6 max-w-xs sm:max-w-md lg:max-w-full",children:"Discover all-in-one beauty solutions designed for flawless skin."}),e.jsx(k,{to:"/bundle",onClick:()=>window.scroll(0,0),className:"px-6 py-2.5 bg-[#EC72AF] text-white",children:"Explore Bundles"})]})})})}),G=()=>{var F;const r=C(),o=E(),[d,a]=x.useState(4),n=w(t=>t.products.Productloading),l=x.useRef(null),h=()=>{l.current&&l.current.slickNext()},i=()=>{l.current&&l.current.slickPrev()},c={infinite:!0,slidesToShow:d,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,pauseOnHover:!0,arrows:!1};x.useEffect(()=>{const t=()=>{window.innerWidth>=1200?a(4):window.innerWidth>=1024?a(3):window.innerWidth>=768?a(2):a(1)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const u=t=>{r(`/selectedItem/${t}`),window.scroll(0,0)},j="Skincare",s=1;x.useEffect(()=>{o(R({category:j,page:s}))},[o,j,s]);const m=w(t=>t.products.products),g=({rating:t})=>{const p=[];for(let y=0;y<t;y++)p.push(e.jsx(v,{className:"text-[#FFC209]"},y));return e.jsx("div",{className:"flex",children:p})};return e.jsx(e.Fragment,{children:e.jsx("section",{className:"py-14 sm:py-16 px-5 sm:px-4 xl:px-0",children:e.jsxs("div",{className:"max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto",children:[e.jsxs("div",{className:"header px-0 sm:px-5 flex justify-between items-center flex-wrap gap-6",children:[e.jsxs("div",{className:"name",children:[e.jsx("h2",{className:"mb-2.5 playfair text-center text-4xl sm:text-5xl font-bold",children:"Skincare"}),e.jsx("p",{className:"h-0.5 w-16 bg-[#EC72AF]"})]}),e.jsxs("div",{className:"slider_button hidden sm:flex flex-row",children:[e.jsx("button",{onClick:i,className:"mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-left ",children:e.jsx("path",{d:"m15 18-6-6 6-6"})})}),e.jsx("button",{onClick:h,className:"mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-right ",children:e.jsx("path",{d:"m9 18 6-6-6-6"})})})]})]}),e.jsxs("div",{className:"data",children:[e.jsx("div",{className:"mt-8 sm:mt-12",children:n?e.jsx(e.Fragment,{children:e.jsx(N,{ref:l,...c,children:[0,1,2,3,4,5].map((t,p)=>e.jsx("li",{className:"px-5",children:e.jsxs("div",{className:"group mb-5 relative rounded-lg w-full bg-white border border-gray-400 cursor-pointer animate-pulse",children:[e.jsx("div",{className:"bg-gray-300 h-56 w-full"}),e.jsxs("div",{className:"py-5 text-center",children:[e.jsx("div",{className:"bg-gray-300 h-5 w-3/4 mx-auto mb-2 rounded-lg"}),e.jsxs("div",{className:"flex items-center justify-center gap-1 mb-2",children:[e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"}),e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"}),e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"}),e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"}),e.jsx("div",{className:"bg-gray-300 h-4 w-4 rounded-full"})]}),e.jsx("div",{className:"bg-gray-300 h-4 w-1/2 mx-auto mb-2 rounded-lg"}),e.jsx("div",{className:"bg-gray-300 h-5 w-1/3 mx-auto mb-2 rounded-lg"}),e.jsx("div",{className:"bg-gray-300 h-4 w-1/4 mx-auto mb-3 rounded-lg"})]})]})},p))})}):e.jsx(e.Fragment,{children:e.jsx(N,{ref:l,...c,children:(F=m==null?void 0:m.productData)==null?void 0:F.map((t,p)=>e.jsx("div",{onClick:()=>u(String(t.id)),className:"mx-0 pb-7",children:e.jsxs("div",{className:"group mb-3 relative group w-60 mx-auto pt-0 bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer",children:[e.jsx("img",{className:"object-cover w-full h-56",src:t.image.downloadURL,alt:"products"}),e.jsxs("div",{className:"py-5 text-center",children:[e.jsx("h3",{className:"playfair mb-2 text-lg font-semibold text-gray-800",children:t.name}),e.jsx("div",{className:"mb-2 flex items-center justify-center gap-1",children:(t==null?void 0:t.averageRating)===0?e.jsx(v,{className:"text-white"}):e.jsx(g,{rating:t==null?void 0:t.averageRating})}),e.jsxs("p",{className:"mb-3 text-md text-gray-500",children:["(",t.category,")"]}),t.sale_price>0?e.jsxs("div",{className:"flex justify-center items-center gap-2",children:[e.jsxs("p",{className:"mb-3 text-md font-semibold text-black",children:["Rs. ",t.sale_price]}),e.jsxs("p",{className:"mb-3 text-md font-semibold text-gray-500 line-through",children:["Rs. ",t.price]})]}):e.jsx(e.Fragment,{children:e.jsxs("p",{className:"mb-3 text-md font-semibold text-black",children:["Rs. ",t.price]})}),e.jsx("button",{className:"hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold",children:"Shop Now"})]})]})},p))})})}),e.jsxs("div",{className:"slider_button sm:hidden flex flex-row justify-center",children:[e.jsx("button",{onClick:i,className:"mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-left ",children:e.jsx("path",{d:"m15 18-6-6 6-6"})})}),e.jsx("button",{onClick:h,className:"mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-right ",children:e.jsx("path",{d:"m9 18 6-6-6-6"})})})]})]})]})})})},Q=()=>{var n;const r=E();x.useEffect(()=>{r(B())},[]);const o=w(l=>l.products.latestProducts),d=w(l=>l.auth.user),a=(n=d==null?void 0:d.user)==null?void 0:n.id;return x.useEffect(()=>{a&&r(W(a))},[a,r]),e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("title",{children:"For Your Beauty"})]}),e.jsx(U,{}),e.jsx(D,{}),e.jsx($,{}),e.jsx(H,{}),e.jsx(V,{latestProducts:o}),e.jsx(P,{}),e.jsx(G,{}),e.jsx(q,{}),e.jsx(z,{})]})};export{Q as default};
