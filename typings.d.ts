type Comment = {
    created_at: DateTime
    id: ID!
    post_id: ID
    text: String
    username: String
}

type Vote = {
    created_at: string;
    id: number;
    post_id: number;
    upvote: boolean;
    username: string;
};

type Subreddit = {
    created_at: string;
    id: number;
    topic: string;
};

type Post = {
    body: string;
    created_at: string;
    id: number;
    image: string;
    subreddit_id: number;
    title: string;
    username: string;
    votes: Vote[];
    comments: Comments[];
    subreddit: Subreddit[];
};