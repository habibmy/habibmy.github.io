export const Profile = ({ profile }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center ">
      <img
        src={profile.avatar_url}
        alt="avatar"
        className="rounded-full  w-40 h-40 mr-5 border-4 border-slate-500 dark:border-white"
      />
      <div className="flex flex-col items-center md:items-start p-1">
        <a
          href={profile.html_url}
          className="text-blue-500 dark:text-blue-50 underline"
        >
          <h1 className="text-2xl font-bold">{profile.name}</h1>
        </a>
        <p className="text-gray-500 dark:text-gray-50">{profile.bio}</p>
        <div className="">
          {profile.followers ? (
            <p className="">
              <span className="font-bold">{profile.followers}</span>
              <span> Followers </span>
            </p>
          ) : null}
          {profile.following ? (
            <p className="">
              <span className="font-bold">{profile.public_repos}</span>
              <span> Public Repos </span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
