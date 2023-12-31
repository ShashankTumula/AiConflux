import Img from "../assets/img.jpg";

function Stories() {
  const stories = [
    {
      title: "Robot in scifi city",
      img: Img,
      category: "Analytics",
      description:
        "The journey of a robot, as it transforms a massive, crowded sci-fi city into a playground of joy",
      imageStyle: "Sci-fi",
      imageModel: "Dreamshaper",
    },
    {
      title: "Robot in scifi city",
      img: Img,
      category: "Analytics",
      description:
        "The journey of a robot, as it transforms a massive, crowded sci-fi city into a playground of joy",
      imageStyle: "Sci-fi",
      imageModel: "Dreamshaper",
    },
    {
      title: "Robot in scifi city",
      img: Img,
      category: "Analytics",
      description:
        "The journey of a robot, as it transforms a massive, crowded sci-fi city into a playground of joy",
      imageStyle: "Sci-fi",
      imageModel: "Dreamshaper",
    },
    {
      title: "Robot in scifi city",
      img: Img,
      category: "Analytics",
      description:
        "The journey of a robot, as it transforms a massive, crowded sci-fi city into a playground of joy",
      imageStyle: "Sci-fi",
      imageModel: "Dreamshaper",
    },
    {
      title: "Robot in scifi city",
      img: Img,
      category: "Analytics",
      description:
        "The journey of a robot, as it transforms a massive, crowded sci-fi city into a playground of joy",
      imageStyle: "Sci-fi",
      imageModel: "Dreamshaper",
    },
  ];
  return (
    <div className="bg-blue p-24 pt-0">
      <h1 className="text-white pb-1 text-3xl">Explore Collections</h1>
      <p>See our collection of fan-made art</p>
      <div className="h-full flex flex-wrap stories justify-between mt-6 gap-8">
        {stories.map((story, i) => (
          <div className="border p-8 border-white/40 rounded-2xl" key={i}>
            <div className="w-44 h-64 overflow-hidden mx-auto">
              <img src={story.img} className="w-full object-cover" alt="img" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl my-3 text-white">{story.title}</h2>
              <p>{story.description}</p>
              <div className="flex items-center justify-center mx-auto mt-3">
                <p>{story.imageModel}</p>
                <p className="mx-3">&#x2022;</p>
                <p className="text-sm">{story.imageStyle}</p>
              </div>
              <a href="/stories/1">
                <button className="mt-4">Read More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
