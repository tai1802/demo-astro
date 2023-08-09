import type { APIRoute } from "astro";

const usernames = ["Sarah", "Chris", "Dan"];

export const get: APIRoute = ({ params, request }) => {
  const id: number = Number(params.id) || 0;
  return {
    body: JSON.stringify({
      name: usernames[id],
    }),
  };
};

export function getStaticPaths() {
  return [{ params: { id: "0" } }, { params: { id: "1" } }, { params: { id: "2" } }];
}
