// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import JSON5 from 'json5';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('unescape.unescapeAndCopy', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const text = editor.document.getText(editor.selection);
            try {
                const unescapedText = JSON5.parse(text); // Simple unescape, adjust regex for your needs
                await vscode.env.clipboard.writeText(unescapedText);
                vscode.window.showInformationMessage('Selection unescaped and copied to clipboard!');
            } catch {
                vscode.window.showErrorMessage('Coult not unescape selection.')
            }
        }
    });

    context.subscriptions.push(disposable);
}
// This method is called when your extension is deactivated
export function deactivate() {}
