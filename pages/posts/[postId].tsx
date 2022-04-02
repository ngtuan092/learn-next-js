import { useRouter } from "next/router";
import { type } from "os";
import * as React from "react";

export interface PostIdProps {}

export default function PostId(props: PostIdProps) {
  const router = useRouter();
  const a = router.query
  return (
    <div>
      <h1>Post Detail Pages</h1>
      <p>Query: {a.postId} </p>
    </div>
  );
}
