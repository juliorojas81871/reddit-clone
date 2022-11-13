import { useRouter } from "next/router";
import { GET_POST_BY_POST_ID } from "../../graphql/queries";
import { ADD_COMMENT } from "../../graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { Avatar, Post } from "../../components";
import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TimeAgo from "react-timeago";
import Head from "next/head";

type FormData = {
  comment: string;
};

const PostPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_POST_ID, "getPostListByPostId"],
  });

  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // post comment here
    const notification = toast.loading("Posting your Comment...");
    await addComment({
      variables: {
        post_id: router.query.postId,
        username: session?.user?.name,
        text: data.comment,
      },
    });

    setValue("comment", "");
    toast.success("Comment Successfully Posted!", {
      id: notification,
    });
  };

  const post: Post = data?.getPostListByPostId;

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Head>
        <title>Post {router.query.postId} - Reddit Clone </title>
        <link rel="icon" href="/reddit-icon.png" />
      </Head>

      <Post post={post} />
      <div className="rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16 -mt-1">
        <p className="text-sm">
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>
        <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            {...register("comment")}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={
              session ? "Whate are your thoughts?" : "Please sign in to comment"
            }
            disabled={!session}
          />
          <button
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold disabled:bg-gray-200 text-white"
            disabled={!session}
          >
            Comment
          </button>
        </form>
      </div>
      <div className="-my-5 rounded-b-md border-t-0 border-gray-300 bg-white py-5 px-10">
        <hr className="py-2" />
        {post?.comments.map((comment) => (
          <div
            key={comment.id}
            className="relative flex items-center space-x-2 space-y-5"
          >
            <hr className="absolute top-10 left-7 z-0 h-16 border" />
            <div className="z-50">
              <Avatar seed={comment.username} />
            </div>

            <div className="flex flex-col">
              <p className="py-2 text-xs text-gray-400">
                <span className="font-semibold text-gray-600">
                  {comment.username}
                </span>{" "}
                · <TimeAgo date={comment.created_at} />
              </p>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
