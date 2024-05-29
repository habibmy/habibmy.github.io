import React from "react";
import { ogImageRegex } from "../constants";
import { FaCode, FaGithub, FaLink } from "react-icons/fa";

export const RepoCard = ({ repo }) => {
  const [image, setImage] = React.useState(null);

  const date = new Date(repo.updated_at);

  const getOpenGraph = (url) => {
    const corsUrl = `https://api.codetabs.com/v1/proxy?quest=${url}`;
    fetch(corsUrl)
      .then((res) => res.text())
      .then((res) => {
        const match = res.match(ogImageRegex);
        if (match) {
          const image = match[1];
          setImage(image);
        }
      });
  };

  React.useEffect(() => {
    getOpenGraph(repo.html_url);
  }, [repo.html_url]);

  return (
    <div className="relative flex flex-col h-[21rem] w-72 border rounded shadow-lg">
      <div className="w-72 h-36 p-1 shadow">
        {image ? <img className="h-full w-full" src={image} alt="" /> : null}
      </div>
      <div className="flex-grow p-2 pt-1 flex flex-col justify-center">
        <div className="text-center mb-1 text-xl">{repo.name}</div>
        <div className="flex justify-between items-center">
          <div className="flex items-center my-1">
            <img
              className="w-5 h-5 mr-1"
              src={repo.owner.avatar_url}
              alt="avatar"
            />
            <a
              className="underline"
              href={repo.owner.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.owner.login}
            </a>
          </div>
          <div className="">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</div>
        </div>
        {repo.language ? (
          <div className="flex items-center justify-center">
            <FaCode className="text-sm mr-2" />
            <div className="text-sm text-center">{repo.language}</div>
          </div>
        ) : null}
        <div className="text-sm">{repo.description}</div>
        <div className="w-full flex justify-between absolute bottom-2 left-0 px-2">
          <a className="underline" href={repo.html_url}>
            <FaGithub className="text-xl hover:scale-125 duration-150" />
          </a>
          {repo.homepage ? (
            <a className="underline" href={repo.homepage}>
              <FaLink className="hover:scale-125 duration-150" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
