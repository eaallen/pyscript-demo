function init() {
    initEditor("first", "print('hello')")
    initEditor("s",
        `eli=""
age=0

if eli == "":
    output = "dude, who are you?"
        
    
`)
}


function initEditor(id, value) {
    ace.require("ace/ext/language_tools");
    const editor = ace.edit(id);
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/python");
    editor.resize()
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    editor.setValue(value)
}

const assignment = {
    topLevelVariable: [
        {name: "eli", value: "",},
        {name: "age", value: 0},
    ]
}


function getAST(astJsonString) {
    const ast = JSON.parse(astJsonString)
    console.log(ast)
    evalAST(ast)


}

function evalAST(ast) {
    for (const variable of assignment.topLevelVariable) {
        if(isVariableInSetupPortion(ast, variable.name)){
            console.log('variable', variable.name, "is found");
        }else{
            console.log('variable', variable.name, 'not found');
        }
    }    
}

function handleModule(node){
   // dont do much with a module, but we need to look at the children
   evalAST(node)
}

function getVariableNameFromAssign(node){
    return node.targets[0].id
}

function handleName(node){

}

function expressionIsPrint(node){
    return node._type === "Call" && node.value.func.id === "print"
}

function handleIf(node){
    console.log('node.test', node.test.value);
    console.log('node.body', node.body);
}

function isVariableInSetupPortion(ast, varName){
    for (const child of ast.body ?? []) {
        if(child._type === "Assign"){
            if(getVariableNameFromAssign(child) === varName){
                return true
            }
        }else{
            return false
        }
    }
    return false
}

