// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "message$ebnf$1", "symbols": ["newline"]},
    {"name": "message$ebnf$1", "symbols": ["message$ebnf$1", "newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "message", "symbols": ["title", "message$ebnf$1", "body"], "postprocess": data => ({type: 'message', title: data[0], body: data[2] })},
    {"name": "title$string$1", "symbols": [{"literal":")"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "title", "symbols": ["typeTag", {"literal":"("}, "sectionTag", "title$string$1", "chars"], "postprocess": data => ({ type: 'title', typeTag: data[0], sectionTag: data[2], value: data[4] })},
    {"name": "title$string$2", "symbols": [{"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "title", "symbols": ["typeTag", "title$string$2", "chars"], "postprocess": data => ({ type: 'title', typeTag: data[0], sectionTag: null, value: data[2] })},
    {"name": "title", "symbols": ["chars"], "postprocess": data => ({ type: 'title', typeTag: null, sectionTag: null, value: data[0].trim() })},
    {"name": "typeTag", "symbols": ["letters"], "postprocess": data => data[0]},
    {"name": "sectionTag", "symbols": ["letters"], "postprocess": data => data[0]},
    {"name": "body$ebnf$1", "symbols": ["newline"]},
    {"name": "body$ebnf$1", "symbols": ["body$ebnf$1", "newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "body", "symbols": ["summary", "body$ebnf$1", "testPlan"], "postprocess": data => ({type: 'body', summary: data[0], testPlan: data[2] })},
    {"name": "body$ebnf$2", "symbols": [/[\s\S]/]},
    {"name": "body$ebnf$2", "symbols": ["body$ebnf$2", /[\s\S]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "body", "symbols": ["body$ebnf$2"], "postprocess": data => ({type: 'body', summary: data[0].join('').trim(), testPlan: ''})},
    {"name": "summary$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}, {"literal":"S"}, {"literal":"u"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}, {"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "summary$ebnf$1", "symbols": ["newline"]},
    {"name": "summary$ebnf$1", "symbols": ["summary$ebnf$1", "newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "summary$ebnf$2", "symbols": [/[\s\S]/]},
    {"name": "summary$ebnf$2", "symbols": ["summary$ebnf$2", /[\s\S]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "summary", "symbols": ["summary$string$1", "summary$ebnf$1", "summary$ebnf$2"], "postprocess": data => data[2].join('')},
    {"name": "testPlan$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}, {"literal":"T"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "testPlan$ebnf$1", "symbols": ["newline"]},
    {"name": "testPlan$ebnf$1", "symbols": ["testPlan$ebnf$1", "newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "testPlan$ebnf$2", "symbols": [/[\s\S]/]},
    {"name": "testPlan$ebnf$2", "symbols": ["testPlan$ebnf$2", /[\s\S]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "testPlan", "symbols": ["testPlan$string$1", "testPlan$ebnf$1", "testPlan$ebnf$2"], "postprocess": data => data[2].join('')},
    {"name": "chars$ebnf$1", "symbols": [/[^\n\r]/]},
    {"name": "chars$ebnf$1", "symbols": ["chars$ebnf$1", /[^\n\r]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "chars", "symbols": ["chars$ebnf$1"], "postprocess": data => data[0].join('')},
    {"name": "letters$ebnf$1", "symbols": [/[\w]/]},
    {"name": "letters$ebnf$1", "symbols": ["letters$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "letters", "symbols": ["letters$ebnf$1"], "postprocess": data => data[0].join('')},
    {"name": "newline", "symbols": [{"literal":"\n"}]},
    {"name": "newline$string$1", "symbols": [{"literal":"\r"}, {"literal":"\n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "newline", "symbols": ["newline$string$1"]}
]
  , ParserStart: "message"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
