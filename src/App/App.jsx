import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { RepoCard } from "../components/RepoCard";
import { url } from "../constants";

export function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.ok && response.json())
      .then((json) => setRepos(json));
  }, []);

  return (
    <div className="relative dark:bg-slate-800 dark:text-white">
      <Header />
      <div className="pt-20 flex-col flex items-center">
        {repos.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
