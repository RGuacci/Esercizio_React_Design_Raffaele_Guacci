import { useLoaderData, Link } from "react-router";

export default function Info() {
  const anime = useLoaderData();
  console.log(anime);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="my-10 text-center text-4xl font-bold">Top Anime</h1>

      <ul className="list mx-auto max-w-3xl bg-base-100 rounded-box shadow-md">
        {anime.map((item) => (
          <li className="list-row" key={item.mal_id}>
            <div>
              <img
                className="size-16 rounded-box object-cover"
                src={item.images.jpg.image_url}
                alt={item.title}
              />
            </div>

            <div className="flex items-center">
              <span className="font-semibold">{item.title}</span>
            </div>

            <Link
              to={`/info/details/${item.mal_id}`}
              className="btn btn-primary btn-sm"
            >
              Dettagli
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
