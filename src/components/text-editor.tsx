import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";

// CSS
import "./text-editor.css";

const TextEditor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("# Header");

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      setEditing(false);
    };

    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor value={value} onChange={(v) => setValue(v || "")} />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)} className="text-editor card">
      <MDEditor.Markdown source={value} />
      <div className="card-content"></div>
    </div>
  );
};

export default TextEditor;
