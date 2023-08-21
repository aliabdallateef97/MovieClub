import{u as c,r as p,s as x,S as o,b as j,j as t,C as u,d as l,D as d,G as f,i as y,h as S,f as k,q as w,k as b,v as D,w as $,p as i}from"./index-43d8b24d.js";import{C as m}from"./CardMedia-40c434af.js";const z=e=>{var r,a,s;return{biography:(r=e==null?void 0:e.data)==null?void 0:r.biography,name:(a=e==null?void 0:e.data)==null?void 0:a.name,img:`https://image.tmdb.org/t/p/original/${(s=e==null?void 0:e.data)==null?void 0:s.profile_path}`}},M=e=>{var r,a;return(a=(r=e==null?void 0:e.data)==null?void 0:r.cast)==null?void 0:a.map(s=>({title:s==null?void 0:s.title,rate:s==null?void 0:s.vote_average,id:s==null?void 0:s.id,img:`https://image.tmdb.org/t/p/original/${s==null?void 0:s.poster_path}`}))},q=e=>p({url:`person/${e}?api_key=3e21184f03d65304d7cd0f6382c5f7e0`}),C=e=>c({queryKey:["actor-details",e],queryFn:()=>q(e),select:r=>z(r)}),T=e=>p({url:`person/${e}/movie_credits?api_key=3e21184f03d65304d7cd0f6382c5f7e0`}),_=e=>c({queryKey:["actor-movies",e],queryFn:()=>T(e),select:r=>M(r)}),A=x(o)(({theme:e})=>({flexDirection:"row",gap:"20px",width:"100%",marginTop:"20px",[e.breakpoints.down("sm")]:{flexDirection:"column"}})),L=x(m)(({theme:e})=>({width:"350px",height:"450px",borderRadius:"10px",boxShadow:"0 0 10px 4px #524c4c",[e.breakpoints.down("sm")]:{width:"250px",height:"350px"}})),F=()=>{const{id:e}=j(),{data:r,isLoading:a}=C(e);return t.jsxs(u,{children:[t.jsx(l,{loading:a,LoadingSkeleton:R,children:t.jsxs(A,{children:[t.jsx(L,{image:r==null?void 0:r.img,component:"img",alt:r==null?void 0:r.name}),t.jsxs(o,{gap:"20px",width:"100%",children:[t.jsx(d,{variant:"h3",responsive:"26px",children:r==null?void 0:r.name}),t.jsx(f,{variant:"h5",children:r==null?void 0:r.biography})]})]})}),t.jsx(G,{id:e})]})},G=({id:e})=>{const r=y(),a=S(),{data:s,isLoading:g}=_(e),h=n=>{a(`/movie-detail/${n}`)};return t.jsxs(o,{sx:{marginTop:"40px",gap:"6px"},children:[t.jsx(d,{variant:"h2",responsive:"18px",children:t.jsx(k,{id:"movie.known"})}),t.jsx(l,{loading:g,LoadingSkeleton:w,children:t.jsx(b,{options:{fixedWidth:"140px",pagination:!1,gap:"1rem",drag:"free",direction:r.direction==="ltr"?"ltr":"rtl"},children:s==null?void 0:s.map(n=>t.jsx(D,{children:t.jsx($,{title:n==null?void 0:n.title,rate:n==null?void 0:n.rate,img:n==null?void 0:n.img,onClick:()=>h(n==null?void 0:n.id)})},n==null?void 0:n.id))})})]})},K=x(o)(({theme:e})=>({flexDirection:"row",gap:"30px",marginTop:"30px",[e.breakpoints.down("sm")]:{flexDirection:"column"}})),R=()=>t.jsxs(K,{children:[t.jsx(i,{variant:"rounded",width:260,height:300}),t.jsxs(o,{gap:"10px",width:"100%",children:[t.jsx(i,{variant:"text",sx:{fontSize:"1rem"},width:"200px"}),t.jsx(i,{variant:"text",sx:{fontSize:"1rem"}}),t.jsx(i,{variant:"text",sx:{fontSize:"1rem"}}),t.jsx(i,{variant:"text",sx:{fontSize:"1rem"}}),t.jsx(i,{variant:"text",sx:{fontSize:"1rem"}}),t.jsx(i,{variant:"text",sx:{fontSize:"1rem"}}),t.jsx(i,{variant:"text",sx:{fontSize:"1rem"}}),t.jsx(i,{variant:"text",sx:{fontSize:"1rem"}}),t.jsx(i,{variant:"text",sx:{fontSize:"1rem"}})]})]}),I=()=>t.jsx("div",{children:t.jsx(F,{})});export{I as default};
