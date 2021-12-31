import { useState } from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";

import bundle from "../bundler";

const CodeCell = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  //   const onClick = async () => {
  //     const output = await bundle(input);
  //     setCode(output);
  //   };

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex" }}>
        <CodeEditor
          initialValue="// Code here"
          onChange={(value) => setInput(value)}
        />
        {/* <div>
          <button onClick={onClick}>Submit</button>
        </div> */}
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;