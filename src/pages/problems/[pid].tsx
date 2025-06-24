import Topbar from "@/components/Topbar/topbar";
import Workspace from "@/components/Workspace/Workspace";
import React from "react";

type ProblemPageProps = object;

const ProblemPage: React.FC<ProblemPageProps> = () => {
  return (
    <div>
      <Topbar problemPage />
      <Workspace />
    </div>
  );
};
export default ProblemPage;
