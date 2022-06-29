export const url = "/search.json";

export default function ({ search }, { url }) {
  const result = [];

  // Search tags
  for (const tag of search.tags("type=talks")) {
    result.push({
      label: `Tag: ${tag}`,
      search: tag,
      value: url(`/tags/${tag}/`),
    });
  }

  // Search talks
  for (const talk of search.pages("type=talks")) {
    result.push({
      label: talk.data.title,
      search: `${talk.data.title} ${talk.data.tags.join(" ")}`,
      value: url(talk.data.url),
    });
  }

  return JSON.stringify(result);
}
