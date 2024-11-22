// IMPORT IMAGES
import personnage from "../../../src/assets/images/temoignanes/hand.png";

const posts = [
  {
    id: 1,
    title: "Les préparatifs de la rentrée de Janvier 2025",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Nov 19, 2024",
    datetime: "2024-11-30",
    category: { title: "Annonce", href: "#" },
    author: {
      name: "Dr.  Benjamin B.",
      role: "Promoteur de Dr.  Benjamin B.",
      href: "#",
      imageUrl: personnage,
    },
  },
  // More posts...
  {
    id: 2,
    title: "Nos lauréats aux premiers rangs",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Nov 19, 2024",
    datetime: "2020-03-16",
    category: { title: "Annonce", href: "#" },
    author: {
      name: "Dr.  Benjamin B.",
      role: "Promoteur de Dr.  Benjamin B.",
      href: "#",
      imageUrl: personnage,
    },
  },
  {
    id: 3,
    title: "Nos lauréats entrent en stage",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Nov 19, 2024",
    datetime: "2020-03-16",
    category: { title: "Annonce", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Promoteur de Dr.  Benjamin B.",
      href: "#",
      imageUrl: personnage,
    },
  },
  {
    id: 4,
    title: "Nos lauréats entrent en stage",
    href: "#",
    description: "Nos lauréats en quête d’alternance",
    date: "Nov 19, 2024",
    datetime: "2020-03-16",
    category: { title: "Annonce", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Promoteur de Dr.  Benjamin B.",
      href: "#",
      imageUrl: personnage,
    },
  },
];

export default function News() {
  return (
    <div className="bg-white py-5 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#00008f] sm:text-5xl">
            Actualités de France Prépa
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
            quos.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="text-red-500 relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium  hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-green-600 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 text-justify">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0 " />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
