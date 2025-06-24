import React from "react";
import PreferenceNav from "./PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";

type PlaygroundProps = object;

const Playground: React.FC<PlaygroundProps> = () => {
  const boilerPlate = `function twoSums{
    //write your code here
  };`;
  return (
    <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full h-full overflow-auto ">
          <CodeMirror
            value={boilerPlate}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          ></CodeMirror>
        </div>
        <div className="w-full z-1 overflow-scroll px-5 ">
          <div className="flex flex-col space-y-2">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-xl font-medium leading-5 text-white mb-2 mt-2">
                Testcases
                <hr className="absolute bottom-0 h-0.5 w-20 rounded-full border-none bg-white" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2 text-start text-white mt-2">
                <div className="flex flex-wrap items-center-gap-4">
                  <div className="font-medium items-center bg-dark-fill-3 transition-all rounded-lg px-4 py-1 hover:bg-dark-fill-2 relative cursor-pointer whitespace-nowrap inline-flex">
                    Case 1
                  </div>
                </div>
              </div>
              <div className="mr-2 text-start text-white mt-2">
                <div className="flex flex-wrap items-center-gap-4">
                  <div className="font-medium items-center bg-dark-fill-3 transition-all rounded-lg px-4 py-1 hover:bg-dark-fill-2 relative cursor-pointer whitespace-nowrap inline-flex">
                    Case 2
                  </div>
                </div>
              </div>
              <div className="mr-2 text-start text-white mt-2">
                <div className="flex flex-wrap items-center-gap-4">
                  <div className="font-medium items-center bg-dark-fill-3 transition-al l rounded-lg px-4 py-1 hover:bg-dark-fill-2 relative cursor-pointer whitespace-nowrap inline-flex">
                    Case 3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-semibold my-4">
            <p className="text-sm font-medium text-white">Input:</p>
            <div className="text-white cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent mt-2 mb-2">
              nums: [2,7,9,10] target: 9
            </div>
            <p className="text-sm font-medium text-white">Output:</p>
            <div className="text-white cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent mt-2">
              [0,1]
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter />
    </div>
  );
};
export default Playground;
