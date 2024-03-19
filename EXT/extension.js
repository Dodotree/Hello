"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var vscode = require("vscode");
var path = require('path');
function activate(context) {
    var statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "$(beaker) AI!"; // "$(beaker)" will show an icon if available in the current theme
    statusBarItem.command = "extension.myCommand"; // The command to run when the status bar item is clicked
    statusBarItem.tooltip = "Click to run command";
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);
    var disposable = vscode.commands.registerCommand('extension.myCommand', function () {
        vscode.window.visibleTextEditors.forEach(function (editor) {
            var text = editor.document.getText();
            vscode.window.showInformationMessage(text);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
exports.activate = activate;
