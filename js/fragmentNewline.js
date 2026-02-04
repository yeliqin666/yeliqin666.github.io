/**
 * 处理 .fragment 和 .circle-* 元素内的换行
 * 将文本中的换行符自动转换为 <br> 标签
 */
document.addEventListener('DOMContentLoaded', function() {
  // 选择所有需要处理的元素
  const selectors = [
    '.fragment',
    '.circle-green',
    '.circle-red', 
    '.circle-orange',
    '.circle-blue',
    '.circle-black'
  ];
  
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      // 跳过 fragment-title，只处理直接文本内容
      const children = el.childNodes;
      children.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('\n')) {
          // 将换行符替换为 <br>
          const lines = node.textContent.split('\n');
          const fragment = document.createDocumentFragment();
          lines.forEach((line, i) => {
            if (line.trim()) {
              fragment.appendChild(document.createTextNode(line));
            }
            if (i < lines.length - 1 && line.trim()) {
              fragment.appendChild(document.createElement('br'));
            }
          });
          node.parentNode.replaceChild(fragment, node);
        }
      });
    });
  });
});
