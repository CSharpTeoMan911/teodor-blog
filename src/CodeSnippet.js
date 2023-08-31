import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export default function CodeSnippet(param) {
  const [code, set_file] = useState("");

  var file_loader = async () => {
    await fetch(param["file"])
      .then((r) => r.text())
      .then(async(text) => {
        await set_file(text);
      });
  };
  file_loader();

  return (
    <SyntaxHighlighter
      language={param["language"]}
      style={vscDarkPlus}
      customStyle={{
        boxShadow: "0px 5px 10px 0px rgba(207, 16, 16, 0.5)",
        borderRadius: "2vmin",
        minHeight: "20vmin"
      }}
      showLineNumbers="true"
    >
      {code}
    </SyntaxHighlighter>
  );
}
