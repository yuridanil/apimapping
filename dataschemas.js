export const FLICKR_SCHEMA =
{
  ds_name: ["My Flickr dataset. Page#: ", "photos.page", ", total pages: ", "photos.total"],
  ds_desc: ["Photos per page: ", "photos.perpage"],
  items: "photos.photo",
  item_id: "id",
  item_title: "title",
  item_desc: "description._content",
  item_thumbnail: "url_q",
  item_src: "url_l"
};

export const PIXABAY_SCHEMA =
{
  ds_name: ["My Pixabay dataset. Total: ", "total"],
  ds_desc: ["Total hits: ", "totalHits"],
  items: "hits",
  item_id: "id",
  item_title: "tags",
  item_desc: "tags",
  item_thumbnail: "previewURL",
  item_src: "largeImageURL"
};

export const PEXELS_SCHEMA =
{
  ds_name: ["My Pexels dataset. Page: ", "page"],
  ds_desc: ["Per page: ", "per_page", " Total results: ", "total_results"],
  items: "photos",
  item_id: "id",
  item_title: "photographer",
  item_desc: "url",
  item_thumbnail: "src.tiny",
  item_src: "src.original"
};
