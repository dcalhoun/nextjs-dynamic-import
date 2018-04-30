import Link from "next/link";
import React from "react";

const Post = ({ content: Content }) => (
  <div>
    <Link href="/">
      <a>Index</a>
    </Link>
    <Content />
  </div>
);

Post.getInitialProps = async () => {
  const content = await import("../posts/test.md");
  return { content: content.default };
};

export default Post;
