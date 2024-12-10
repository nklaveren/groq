import { Patch } from "next-sanity";
import { client } from "./client";
import { Post } from "../models/post";

export const createPost = async (post: Post) => {
  const response = await client.create({
    _type: "post",
    title: post.title,
    slug: post.slug,
    content: post.content,
    publishedAt: post.publishedAt,
  });
  return response;
};

