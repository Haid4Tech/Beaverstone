import type { Article } from "@/data/news";

export function searchArticles(list: Article[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter((a) =>
    [a.title, a.excerpt, a.category, ...a.body]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}
