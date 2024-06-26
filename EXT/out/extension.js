"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const path = require('path');
function activate(context) {
    let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "$(beaker) AI!"; // "$(beaker)" will show an icon if available in the current theme
    statusBarItem.command = "extension.myCommand"; // The command to run when the status bar item is clicked
    statusBarItem.tooltip = "Click to run command";
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);
    let disposable = vscode.commands.registerCommand('extension.myCommand', function () {
        vscode.window.visibleTextEditors.forEach(editor => {
            let text = editor.document.getText();
            vscode.window.showInformationMessage(text);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
exports.activate = activate;
