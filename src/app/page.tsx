import Image from "next/image";
import TopStoriesCard from "./components/TopStoriesCard";
import { data } from "./mock/mock";

export default function Home() {
  return (
    <div className="dashboard px-24">
      <div className="left-container w-[60%] p-4">
        <h3 className="text-2xl text-white font-semibold">
          Indian Premier League 2025
        </h3>
        <p className="text-white font-semibold"> 74 T20s . Mar 22 - May 25</p>
      </div>
      <div className="flex gap-8 flex-wrap">
        <div className="right-container min-h-screen w-full md:w-[30%] bg-white p-4">
          <div className="maches-container h-[10%]">
            <h3>MATCHES</h3>
          </div>
        </div>

        <div className="top-stories-container">
          <h3 className="text-xl text-white font-semibold">Top Stories</h3>
          <div className="w-[400px] h-[400px] bg-white rounded-xl">3123</div>
          <div className="stories gap-4 flex flex-col mt-4">
            {data?.map((item: any, index) => (
              <TopStoriesCard
                key={index}
                image="https://static.cricbuzz.com/a/img/v1/205x152/i1/c675239/cms-img.jpg"
                title={item.title}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                date="2023-10-01"
              />
            ))}
          </div>
        </div>
        <div className="right-container min-h-screen w-full md:w-[30%] bg-white p-4">
          <div className="maches-container h-[10%]">
            <h3>MATCHES</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
