// codeBlock.js — 代码块增强：语言标签 + 复制按钮
// 纸上霁 Design System · Code Block Enhancement

(function () {
    var figures = document.querySelectorAll('figure.highlight');
    if (!figures.length) return;

    var langMap = {
        'javascript': 'JavaScript', 'js': 'JavaScript',
        'python': 'Python', 'py': 'Python',
        'css': 'CSS', 'html': 'HTML',
        'bash': 'Bash', 'shell': 'Shell', 'sh': 'Shell',
        'json': 'JSON', 'yaml': 'YAML', 'yml': 'YAML',
        'markdown': 'Markdown', 'md': 'Markdown',
        'typescript': 'TypeScript', 'ts': 'TypeScript',
        'java': 'Java', 'c': 'C', 'cpp': 'C++',
        'csharp': 'C#', 'go': 'Go', 'rust': 'Rust',
        'sql': 'SQL', 'xml': 'XML',
        'latex': 'LaTeX', 'tex': 'LaTeX',
        'plaintext': 'Text', 'text': 'Text', 'plain': 'Text',
        'ruby': 'Ruby', 'php': 'PHP', 'swift': 'Swift',
        'kotlin': 'Kotlin', 'r': 'R', 'matlab': 'MATLAB',
        'scss': 'SCSS', 'sass': 'Sass', 'less': 'Less',
        'dockerfile': 'Dockerfile', 'makefile': 'Makefile',
        'powershell': 'PowerShell', 'lua': 'Lua',
        'haskell': 'Haskell', 'scala': 'Scala', 'perl': 'Perl',
        'toml': 'TOML', 'ini': 'INI', 'diff': 'Diff',
        'graphql': 'GraphQL', 'proto': 'Protobuf',
        'objectivec': 'Objective-C', 'dart': 'Dart',
        'elixir': 'Elixir', 'erlang': 'Erlang', 'zig': 'Zig'
    };

    var copySvg = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">'
        + '<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25z"/>'
        + '<path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25z"/>'
        + '</svg>';

    var checkSvg = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">'
        + '<path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>'
        + '</svg>';

    figures.forEach(function (fig) {
        // 提取语言名
        var classes = fig.className.split(' ');
        var lang = '';
        for (var i = 0; i < classes.length; i++) {
            if (classes[i] !== 'highlight' && classes[i] !== '') {
                lang = classes[i];
                break;
            }
        }

        // 创建头部栏
        var header = document.createElement('div');
        header.className = 'code-header';

        // 语言标签
        var langLabel = document.createElement('span');
        langLabel.className = 'code-lang';
        langLabel.textContent = langMap[lang.toLowerCase()] || lang || 'Code';
        header.appendChild(langLabel);

        // 复制按钮
        var copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy-btn';
        copyBtn.setAttribute('aria-label', '复制代码');
        copyBtn.innerHTML = copySvg;

        copyBtn.addEventListener('click', function () {
            var codeEl = fig.querySelector('td.code pre') || fig.querySelector('pre');
            if (!codeEl) return;

            var lines = codeEl.querySelectorAll('.line');
            var text = '';
            if (lines.length) {
                var arr = [];
                lines.forEach(function (line) { arr.push(line.textContent); });
                text = arr.join('\n');
            } else {
                text = codeEl.textContent;
            }

            navigator.clipboard.writeText(text).then(function () {
                copyBtn.innerHTML = checkSvg;
                copyBtn.classList.add('copied');
                setTimeout(function () {
                    copyBtn.innerHTML = copySvg;
                    copyBtn.classList.remove('copied');
                }, 2000);
            });
        });

        header.appendChild(copyBtn);
        fig.insertBefore(header, fig.firstChild);
    });
})();
