(function(window){var svgSprite='<svg><symbol id="icon-yonghu" viewBox="0 0 1024 1024"><path d="M541.636727 0q29.636727 0 58.762475 6.642715t54.674651 17.884232 45.477046 25.548902 31.169661 28.61477q26.570858 32.702595 38.834331 72.047904t17.373253 75.113772q5.10978 40.878244 5.10978 82.778443 7.153693 5.10978 11.241517 13.285429 4.087824 7.153693 6.642715 18.39521t0.510978 27.592814q-2.043912 21.461078-8.686627 34.235529t-14.818363 19.928144q-9.197605 8.175649-19.417166 11.241517-5.10978 17.373253-10.219561 32.702595-5.10978 13.285429-11.752495 26.05988t-14.818363 19.928144q-19.417166 15.329341-31.680639 26.05988t-16.351297 36.279441q-3.065868 15.329341-2.043912 31.169661t8.686627 31.680639 23.50499 30.147705 44.45509 25.548902q25.548902 10.219561 55.696607 18.39521t58.762475 18.906188 50.586826 26.570858 31.169661 43.433134q5.10978 16.351297 7.664671 40.367265t2.55489 48.542914-3.576846 45.988024-10.730539 32.702595q-5.10978 7.153693-29.125749 14.307385t-59.273453 13.796407-78.690619 11.752495-87.377246 8.686627-84.311377 5.620758-70.003992 2.043912-68.982036-2.043912-81.245509-5.620758-83.289421-8.175649-75.113772-9.708583-57.229541-10.219561-29.636727-10.219561q-10.219561-8.175649-15.840319-50.075848t4.598802-108.327345q5.10978-37.812375 30.147705-57.740519t58.251497-31.680639 68.982036-20.9501 63.361277-26.570858q21.461078-13.285429 32.702595-25.548902t16.351297-24.526946 5.10978-25.548902-1.021956-29.636727q-2.043912-23.50499-16.351297-37.301397t-31.680639-28.103792q-8.175649-7.153693-14.307385-19.928144t-11.241517-26.05988q-5.10978-15.329341-10.219561-32.702595-7.153693-2.043912-14.307385-7.153693-6.131737-5.10978-13.285429-14.307385t-12.263473-26.570858q-6.131737-17.373253-4.598802-31.680639t5.620758-24.526946q4.087824-11.241517 13.285429-21.461078-1.021956-38.834331 4.087824-77.668663 4.087824-32.702595 14.818363-70.51497t32.191617-67.449102q19.417166-28.61477 43.433134-46.499002t49.053892-28.103792 50.075848-13.796407 48.542914-3.576846z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M948.48 833.92l-185.6-183.68c-3.84-3.84-8.32-6.4-13.44-7.68C801.28 580.48 832 501.76 832 416 832 221.44 674.56 64 480 64 285.44 64 128 221.44 128 416 128 610.56 285.44 768 480 768c85.76 0 163.84-30.72 225.28-81.28 1.92 4.48 4.48 8.96 8.32 12.8l185.6 183.68c14.08 13.44 35.84 13.44 49.92 0S962.56 847.36 948.48 833.92zM480 704C320.64 704 192 575.36 192 416 192 256.64 320.64 128 480 128 639.36 128 768 256.64 768 416 768 575.36 639.36 704 480 704z"  ></path></symbol><symbol id="icon-gouwudai" viewBox="0 0 1024 1024"><path d="M118.672065 1024l62.186235-845.732794h662.2834l62.186235 845.732794H118.672065z m54.931174-433.27119h87.786235C276.279968 717.395951 384.025911 815.676113 514.755887 815.676113a254.015223 254.015223 0 0 0 140.802073-42.337425 256.437377 256.437377 0 0 1-50.57192 5.019466c-117.569296 0-216.54698-79.494737-246.114461-187.629344h90.480972L311.477377 452.923077zM297.45749 201.068826a32.647773 32.647773 0 1 0 32.647773 32.647773 32.647773 32.647773 0 0 0-32.647773-32.647773z m428.048583 0a32.647773 32.647773 0 1 0 32.647773 32.647773 32.647773 32.647773 0 0 0-32.647773-32.647773z m44.34915 370.008097C754.979239 444.432583 647.305846 346.17004 516.663968 346.17004a253.75715 253.75715 0 0 0-140.707757 42.329134A256.185522 256.185522 0 0 1 426.493927 383.481781c117.48949 0 216.401879 79.476081 245.946559 187.595142h-90.41464L719.805668 708.856745 857.58549 571.076923H769.855223z m-77.50996-392.907142a195.436826 195.436826 0 0 0-360.690526 0h-61.564373C302.314235 74.934413 398.664551 0 512.518219 0s210.203984 74.934413 242.430963 178.169781h-62.60081z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)