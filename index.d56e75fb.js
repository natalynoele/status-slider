function upperSlder(){var t=document.querySelectorAll(".upper_slider_item"),e=document.querySelectorAll(".slider_description"),o=document.querySelectorAll(".wrap_img"),n=document.querySelectorAll(".wrap_overflow span"),r=document.querySelectorAll(".wr-dow_text ");control_button=document.querySelector(".control_button");var s,l,c=t.length,a=0,u=!0,i="opacity:1;  transform: translateY(0); transition: opacity 1.5s ",y="transform :scale(1.2); background:white;";if(o[0].style.opacity="1",n[0].style.cssText="opacity:1;  transform: translateY(0);  ",r[0].style.cssText=i,e[0].style.transform="translate( -50%,-10px)",c>1){for(var p=0;p<c;p++){var m=document.createElement("span");control_button.appendChild(m)}!function(){var t=function(t){s[t].onclick=function(){x(t)}};s=document.querySelectorAll(".control_button span");for(var e=0;e<c;e++)t(e);s[0].style.cssText=y}()}control_button.addEventListener("mouseover",(function(){clearTimeout(l)})),control_button.addEventListener("mouseout",(function(){v()}));var f="opacity:0;  transform: translateY(200px);",d="opacity:0;  transform: translateY(200px) ;  ";function x(l){l!==a&&!1!==u&&(u=!1,s[l].style.cssText=y,n[l].style.cssText=d,r[l].style.cssText=f,r[a].style.cssText=f,n[a].style.cssText=d,e[a].style.transform="translate( -50%,0px)",t[a].style.zIndex="0",setTimeout((function(){o[a].style.opacity="0",o[l].style.opacity="1",s[a].style.cssText="transform : scale(1); background: #b3336a;",setTimeout((function(){n[l].style.cssText="opacity:1;  transform: translateY(0);",r[l].style.cssText=i,e[l].style.transform="translate( -50%,-10px)",t[l].style.zIndex="4",a=l,u=!0}),700)}),300))}var T=0;function v(){l=setTimeout((function(){++T>=c&&(T=0),x(T),v()}),7e3)}c>1&&v()}upperSlder();
//# sourceMappingURL=index.d56e75fb.js.map
