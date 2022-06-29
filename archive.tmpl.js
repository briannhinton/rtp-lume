export const layout = "layouts/all-talks.njk";
export const title = "All Talks";

export default function* ({ search, paginate }) {
  const talks = search.pages("type=talks", "date=desc");

  for (
    const data of paginate(talks, { url, size: 10 })
  ) {
    // Show the first page in the menu
    if (data.pagination.page === 1) {
      data.menu = {
        visible: true,
        order: 1,
      };
    }

    yield data;
  }
}

function url(n) {
  if (n === 1) {
    return "/talks/";
  }

  return `/talks/${n}/`;
}
