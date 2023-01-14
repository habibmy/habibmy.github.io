export const Profile = ({ profile }) => {
  return (
    <div className="flex items-center mb-10">
      <img
        src={profile.avatar_url}
        alt="avatar"
        className="rounded-full w-32 h-32 mr-5 border-4 border-slate-500 dark:border-white"
      />
      <div className="">
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
