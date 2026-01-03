const pseudo = [
  {
    name: 'test',
    expression: /<hello>/gi,
    replace: 'summary placeholder'
  }
]

const rules = [
  {
    name: 'htmlescape',
    expression: /[<>&"']/gmi,
    replace: (symbol) => {
      switch (symbol) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt";
        case "&":
          return "&amp";
        case "\"":
          return "&quot;"
        case "'":
          return "&apos;"
      }
    }
  },
  {
    name: 'newline',
    expression: /\n\n/gi,
    replace: '<br>\n'
  },
  {
    name: 'divider',
    expression: /^-{3,}(<br>)?$/gmi,
    replace: '<hr>'
  },
  {
    name: 'headers',
    expression: /^(\#{1,6}) (.+)$/gmi,
    replace: (_, hashes, content) => {
      const level = hashes.length;
      return `<h${level}>${content}</h${level}>`
    }
  },
  {
    name: 'image',
    expression: /!\[(.+?)\]\((.+?)\)/gmi,
    replace: '<img alt="$1" src="$2">'
  },
  {
    name: 'hyperlink',
    expression: /\[(.+?)\]\((.+?)\)/gmi,
    replace: '<a href="/wiki?$2">$1</a>'
  },
  {
    name: 'bold',
    expression: /(?<!\\)\*(.+?)(?<!\\)\*/gmi,
    replace: '<b>$1</b>'
  },
  {
    name: 'italic',
    expression: /(?<!\\)_(.+?)(?<!\\)_/gmi,
    replace: '<i>$1</i>'
  },
  {
    name: 'code',
    expression: /(?<!\\)`(.+?)(?<!\\)`/gmi,
    replace: '<code>$1</code>'
  },
  {
    name: 'invisescape',
    expression: /\\([*_`])/gmi,
    replace: '$1'
  },
  {
    name: 'paragraph',
    expression: /^(\s+?)$/gmi,
    replace: '<p>$1</p>'
  },
  
  {
    name: 'join',
    expression: /\n/gmi,
    replace: ''
  }
]

function markdown(input) {
  var result = input;
  for (const rule of pseudo) {
    result = result.replaceAll(rule.expression, rule.replace);
  }
  for (const rule of rules) {
    result = result.replaceAll(rule.expression, rule.replace);
  }
  return result;
}

window.markdown = markdown;