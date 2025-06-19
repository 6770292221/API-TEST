import { APIRequestContext, APIResponse } from "@playwright/test";

export async function createPost(
  request: APIRequestContext,
  data: any
): Promise<APIResponse> {
  return await request.post("/posts", { data });
}

export async function getPostById(
  request: APIRequestContext,
  id: number
): Promise<APIResponse> {
  return await request.get(`/posts/${id}`);
}

export async function getAllPosts(
  request: APIRequestContext
): Promise<APIResponse> {
  return await request.get("/posts");
}

export async function updatePost(
  request: APIRequestContext,
  id: number,
  data: any
): Promise<APIResponse> {
  return await request.put(`/posts/${id}`, { data });
}

export async function patchPost(
  request: APIRequestContext,
  id: number,
  data: any
): Promise<APIResponse> {
  return await request.patch(`/posts/${id}`, { data });
}

export async function deletePost(
  request: APIRequestContext,
  id: number
): Promise<APIResponse> {
  return await request.delete(`/posts/${id}`);
}
