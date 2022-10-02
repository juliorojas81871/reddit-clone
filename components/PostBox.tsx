import { useSession } from "next-auth/react";

const PostBox = () => {
  const { data: session } = useSession();
  return (
    <form>
      <div>
        {/* Avatar */}
        <input
          disabled={!session}
          className='bg-gray-50'
          type="text"
          placeholder={
            session ? "Create a post by entering a title!" : "Sign in to post"
          }
        />
      </div>
    </form>
  );
};

export default PostBox;
