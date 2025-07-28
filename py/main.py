from pyscript import when, window
from ast import parse, dump
from ast2json import ast2json
import js
import json
from redbaron import RedBaron

@when("click", "#run")
def run_code(event):
    editor = window.ace.edit("first")
    code = editor.getValue()
    exec(code)



@when("click", "#run2")
def run_code(event):
    editor = window.ace.edit("s")
    code = editor.getValue()
    # tree = parse(code)
    # # print(dump(tree, indent=4))
    # # js.console.log(json.dumps(ast2json(tree), indent=4))
    # window.getAST(json.dumps(ast2json(tree), indent=4))


    red = RedBaron(code)
    print(red.find_all("assignment"))