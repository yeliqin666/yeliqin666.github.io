utils.jq(()=>{var r,i,t,a=$("input#search-input");0!==a.length&&(r=$("#search-result"),i=$("#search-wrapper"),t=algoliasearch(window.searchConfig.appId,window.searchConfig.apiKey).initIndex(window.searchConfig.indexName),a.on("input",function(){var e=$(this).val().trim(),n=a.data("filter");e.length<=0?(i.attr("searching","false"),r.empty()):(i.attr("searching","true"),t.search(e,{hitsPerPage:window.searchConfig.hitsPerPage,attributesToHighlight:["content"],attributesToSnippet:["content:30"],highlightPreTag:'<span class="search-keyword">',highlightPostTag:"</span>",restrictSearchableAttributes:["content"]}).then(function(e){var s,t,a;e=e.hits,t=(t=n)&&"/"!==t?(a=new RegExp(t),e.filter(e=>a.test(e.url))):e,s=$("<ul>").addClass("search-result-list"),0===t.length?i.addClass("noresult"):(i.removeClass("noresult"),t.forEach(function(e){var t=e._snippetResult.content.value,a=e.hierarchy.lvl1||"Untitled",e=$("<li>").html(`<a href="${e.url}"><span class='search-result-title'>${a}</span><p class="search-result-content">${t}</p></a>`);s.append(e)})),r.html(s)}))}),a.on("keydown",function(e){13==e.which&&e.preventDefault()}),new MutationObserver(function(e){1===e.length&&(e[0].addedNodes.length?i.removeClass("noresult"):e[0].removedNodes.length&&i.addClass("noresult"))}).observe(r[0],{childList:!0}))});