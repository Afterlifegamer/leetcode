import { problems } from "@/mockProblems/problems";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";

type problemsTableProps = object;

const ProblemsTable: React.FC<problemsTableProps> = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });

  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: "" });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (!youtubePlayer.isOpen) return;
      console.log("Key pressed:", e.key);
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  return (
    <>
      <tbody className="text-white">
        {problems.map((doc, idx) => {
          const difficultyColour =
            doc.difficulty === "Easy"
              ? "text-green-500"
              : doc.difficulty === "Medium"
              ? "text-yellow-500"
              : "text-[rgb(255,55,95)]";

          return (
            <tr
              className={`${idx % 2 == 1 ? "bg-[rgb(40,40,40)]" : ""}`}
              key={doc.id}
            >
              <th className="px-2 py-4 font-medium whitespace-nowrap text-[rgb(44,187,93)]">
                <BsCheckCircle fontSize={"18"} width="18" />
              </th>
              <td className="px-6 py-4">
                <Link
                  className="hover:text-blue-500 cursor-pointer "
                  href={`/problems/${doc.id}`}
                >
                  {doc.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficultyColour}`}>
                {doc.difficulty}
              </td>
              <td className="px-6 py-4">{doc.category}</td>
              <td className={"px-6 py-4"}>
                {doc.videoId ? (
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: doc.videoId as string,
                      })
                    }
                  />
                ) : (
                  <p className="text-gray-400">Do it yourself!</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
      {youtubePlayer.isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50">
          <div
            className="bg-black opacity-70 absolute top-0 left-0 w-full h-full"
            onClick={closeModal}
          ></div>
          <div className="w-full z-50 h-full px-6 relative max-w-4xl">
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="w-full relative">
                <IoClose
                  fontSize={"35"}
                  className="cursor-pointer absolute -top-16 right-0"
                  onClick={closeModal}
                />
                <YouTube
                  videoId={youtubePlayer.videoId}
                  loading="lazy"
                  iframeClassName="w-full min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProblemsTable;
