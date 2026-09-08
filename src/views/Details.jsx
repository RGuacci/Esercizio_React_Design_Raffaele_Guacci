import { useLoaderData } from "react-router";

function Details() {
  const anime = useLoaderData();

  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-10 my-40">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          {/* Immagine 3D */}
          <div className="hover-3d shrink-0">
            <figure className="w-60 rounded-2xl">
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />

            </figure>
            {/* Questi div sono di daisy ui e sono necessari per l'animazione 3d dell'immagine*/}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Informazioni */}
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold">{anime.title}</h1>

            <div className="mb-6 flex gap-3">
              <span className="badge badge-warning">★ {anime.score}</span>

              <span className="badge badge-outline">
                {anime.episodes} episodi
              </span>
            </div>

            <p className="leading-relaxed">{anime.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
