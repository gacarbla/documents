class MarkdownParser {
    constructor() {
        if (typeof hljs === 'undefined') {
            throw new Error("highlight.js is required for syntax highlighting.");
        }
    }
    parse(markdown) {
        let html = markdown;
        for (const plugin of this.plugins) {
            html = plugin(html);
        }
        return html;
    }
    plugins = [
        (text) => text.replace(/^(#{1,6})\s*(.+)$/gm, (match, hashes, content) => {
            const level = hashes.length;
            return `<h${level}>${content}</h${level}>`;
        }),
        (text) => {
            return text.replace(/```(\w+)?\n([\s\S]*?)```/g, function(match, lang, code) {
                let highlightedCode;
                if (lang && hljs.getLanguage(lang)) {
                    highlightedCode = hljs.highlight(code, { language: lang }).value;
                } else {
                    highlightedCode = hljs.highlightAuto(code).value;
                }
                return `<pre><code class="hljs">${highlightedCode}</code></pre>`;
            });
        },
        (text) => text.replace(/\`(.*?)\`/g, '<code class="inlinecode">$1</code>'),
        (text) => text.replace(/^\s*[-*+]\s+(.+)$/gm, '<ul>\n<li>$1</li></ul>').replace(/<\/ul>\n<ul>/g, ''),
        (text) => text.replace(/^\s*\d+\.\s+(.+)$/gm, '<ol>\n<li>$1</li></ol>').replace(/<\/ol>\n<ol>/g, ''),
        (text) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/__(.*?)__/g, '<strong>$1</strong>'),
        (text) => text.replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/_(.*?)_/g, '<em>$1</em>'),
        (text) => text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>'),
    ]
}