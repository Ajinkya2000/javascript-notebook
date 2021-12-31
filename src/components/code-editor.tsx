import MonacoEditor from "@monaco-editor/react";
// import * as monacoEditor from "monaco-editor";

const CodeEditor = () => {
  //   const editorOptions: monacoEditor.editor.IEditorConstructionOptions = {
  //     wordWrap: "on",
  //     minimap: { enabled: false },
  //     showUnused: false,
  //     folding: false,
  //     lineNumbersMinChars: 3,
  //     fontSize: 16,
  //     scrollBeyondLastLine: true,
  //     automaticLayout: true,
  //   };

  return (
    <MonacoEditor
      height="500px"
      language="javascript"
      theme="dark"
      options={{
        wordWrap: "on",
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: true,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
