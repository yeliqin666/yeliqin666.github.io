function registerMobileMenu(){$("#open-menu").click(function(){$("#menu-panel").css("height","auto"),$("#menu-content").css("transform","translate(0, 0) rotate(0) skew(0) scaleX(1) scaleY(1)"),$("#open-menu").css("display","none"),$("#close-menu").css("display","block")}),$("#close-menu").click(function(){$("#menu-panel").css("height","0"),$("#menu-content").css("transform","translate(0, -100%) rotate(0) skew(0) scaleX(1) scaleY(1)"),$("#open-menu").css("display","block"),$("#close-menu").css("display","none")})}function registerHeaderPageTitle(){new IntersectionObserver(e=>{(e[0].intersectionRatio<=0?$("#header-title").css("opacity","1").css("transform","translate(0, 0)"):$("#header-title").css("opacity","0").css("transform","translate(0, -100%)")).css("transition","all 0.3s")}).observe($("#article-title")[0],{threshold:0})}function registerGoTop(){const o=$(".back-to-top");$(window).scroll(function(){o.toggleClass("back-to-top-on",50<window.pageYOffset);var e=$(window).scrollTop(),t=$("#content").height(),n=$(window).height(),t=n<t?t-n:$(document).height()-n,n=Math.round(100*(e/t)),e=100<n?100:n;$("#scrollpercent>span").html(e)}),o.on("click",function(){$("body").velocity("scroll")})}function registerCopyCode(){$("figure.highlight").each(function(){const c=$("<iconify-icon id='copy-icon' width='18' icon='carbon:copy'></iconify-icon>");var e=$(this).width()-25;$(c).css("position","absolute"),$(c).css("left",e+"px"),$(c).css("top","15px"),$(c).css("cursor","pointer"),$(this).append(c),$(c).click(function(){var e=[...$(this).parent().find(".code .line")].map(e=>e.innerText).join("\n"),t=document.createElement("textarea"),t=(t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),document.createElement("textarea")),n=(t.style.top=window.scrollY+"px",t.style.position="absolute",t.style.opacity="0",t.readOnly=!0,t.value=e,document.body.append(t),document.getSelection()),o=0<n.rangeCount&&n.getRangeAt(0),e=(t.select(),t.setSelectionRange(0,e.length),t.readOnly=!1,document.execCommand("copy"));$(this).attr("icon",e?"carbon:checkmark":"carbon:error"),t.blur(),$(c).blur(),o&&(n.removeAllRanges(),n.addRange(o)),document.body.removeChild(t),setTimeout(()=>{$(this).attr("icon","carbon:copy")},1e3)}),$(this).scroll(function(){var e=$(this).scrollLeft(),e=$(this).width()-25+e;0<e&&$(c).css("left",e+"px")})})}$(document).ready(function(){registerMobileMenu(),registerGoTop(),0<$("#article-title").length&&(registerHeaderPageTitle(),registerCopyCode())});