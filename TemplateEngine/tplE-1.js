var tplE = function(tpl, data){
	var re = /<%([^%>]+)?%>/g,
		match,
		code = 'var r = [];\n',
		cursor;
	var add = function(str, js){
		js?code += 'r.push(' + str + ');\n':
        code += 'r.push("' + str.replace(/"/g, '\\"') + '");\n'
	};
	while (match = re.exec(tpl)) {
		add(tpl.slice(cursor, match.index));
		add(match[1], true);
		cursor = match.index + match[0].length;
	}
	add(tpl.slice(cursor, tpl.length));
	code += 'return r.join("");';
	console.log(code);
	return new Function(code).apply(data);
}
tplE("<h1>My name is <%this.name%>,age <%this.age%></h1>",{name: "Don", age: 25})