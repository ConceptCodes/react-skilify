import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Course from "../components/cards/Course";
import Category from "../components/cards/Category";
import Review from "../components/cards/Review";
import {
  SearchIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
import {
  HeartIcon,
  SpeakerPhoneIcon,
  CameraIcon,
  ColorSwatchIcon,
  WifiIcon,
  ExternalLinkIcon,
  DesktopComputerIcon,
  BriefcaseIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";

const courses = [
  {
    title: "everything you need to know about business",
  },
  {
    title: "statisics data science and business analyst",
  },
  {
    title: "AWS certified solutions architect associate",
  },
];

const categories = [
  {
    title: "design",
    color: "purple",
    icon: ColorSwatchIcon,
  },
  {
    title: "development",
    color: "orange",
    icon: DesktopComputerIcon,
  },
  {
    title: "IT & software",
    color: "blue",
    icon: WifiIcon,
  },
  {
    title: "business",
    color: "green",
    icon: BriefcaseIcon,
  },
  {
    title: "marketing",
    color: "green",
    icon: SpeakerPhoneIcon,
  },
  {
    title: "photography",
    color: "blue",
    icon: CameraIcon,
  },
  {
    title: "health & care",
    color: "orange",
    icon: HeartIcon,
  },
  {
    title: "technology",
    color: "purple",
    icon: ExternalLinkIcon,
  },
];

const badges = [
  "free ebook, video & consolation",
  "top instructors from around world",
  "top courses for your team",
];

const reviews = ["TheMadBrains", "UI/UX Designer"];

const tidbits = [
  {
    title: 'become a teacher',
    btn: 'apply as a teacher'
  },
  {
    title: 'consector for business',
    btn: 'get skilify for business'
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Skilify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <section className="bg-red-100 space-y-10 p-10">
          <Header />
          <article className="flex mx-10 justify-between">
            <div className="max-w-lg space-y-5">
              <h1 className="text-6xl font-medium">
                Turn your ambition into a success story
              </h1>
              <p className="text-gray-500">
                Choose from over 100,000 online video courses with new additions
                published every month.
              </p>
              <form className="flex">
                <input
                  className="p-5 flex flex-grow h-10 w-50 bg-white rounded-l-lg text-gray-500"
                  placeholder="Search your favorite course"
                ></input>
                <div className="flex items-center justify-center rounded-r-lg bg-red-600 h-10 w-20">
                  <SearchIcon className="text-white h-5" />
                </div>
              </form>
            </div>
            <div className="flex">
              <div className="z-10">
                <Image
                  className="rounded-2xl"
                  src="https://via.placeholder.com/500"
                  width={300}
                  height={300}
                />
              </div>
              <div className="w-full rounded-2xl h-full z-0 border-red-700 border-4"></div>
            </div>
          </article>
        </section>
        <section className="bg-gray-100">
          <div className="flex py-10 mx-20 justify-between">
            <h1 className="text-4xl">Get choice of your course</h1>
            <div className="flex space-x-10 items-center">
              <p className="capitalize text-gray-500">Design</p>
              <button className="items-center rounded-md flex text-white p-5 h-10 bg-red-500">
                View all
              </button>
            </div>
          </div>
          <article className="grid grid-cols-3 gap-5 mx-20 pb-20">
            {courses.map((x, index) => (
              <Course key={index} course={x} />
            ))}
          </article>
        </section>
        <section className="flex flex-col bg-white px-20">
          <div className="flex justify-between py-10">
            <h1 className="font-medium text-3xl">
              Choose favourite course from top category
            </h1>
            <button className="bg-red-500 rounded-lg text-white p-3">
              See all Categories
            </button>
          </div>
          <div className="pb-20 grid grid-cols-4 gap-5">
            {categories.map((x, index) => (
              <Category key={index} category={x} />
            ))}
          </div>
        </section>
        <section className="bg-red-200 flex flex-col items-center space-y-10 justify-center p-20">
          <h1 className="text-4xl font-medium capitalize">
            online coaching lessons for remote learning
          </h1>
          <p className="text-xl text-gray-600">
            100% online learning from the world's best universities and
            companies
          </p>
          <button className="bg-red-500 rounded-lg text-white p-3">
            Join Today
          </button>
        </section>
        <section className="bg-white flex justify-between p-20">
          <article className="flex flex-col max-w-lg space-y-10">
            <h1 className="text-3xl">
              Know about our learning learning platform
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <ul>
              {badges.map((x, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <BadgeCheckIcon className="text-green-600 h-5" />
                  <li className="capitalize" >
                    {x}
                  </li>
                </div>
              ))}
            </ul>
            <button className="bg-red-500 rounded-lg w-48 text-white p-2">
              Start learning now
            </button>
          </article>
          <div className="hidden lg:inline-block">
            <Image
              className="rounded-tr-[150px]"
              src="https://via.placeholder.com/400"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className="flex bg-gray-100 flex-col p-20 space-y-20">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">What our students have to say</h1>
            <div className="flex space-x-3">
              <div className="flex group items-center h-10 w-10 justify-center bg-white">
                <ArrowLeftIcon className="text-gray-500 h-5 group-hover:text-yellow-500" />
              </div>
              <div className="flex group items-center h-10 w-10  justify-center bg-white">
                <ArrowRightIcon className="text-gray-500 h-5 group-hover:text-yellow-500" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {reviews.map((x, index) => (
              <Review key={index} review={x} />
            ))}
          </div>
        </section>
        <section className="flex bg-white flex-col p-20 space-y-20">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">Trusted by our awesome partners</h1>
            <div className="flex space-x-3">
              <div className="flex group items-center h-10 w-10 justify-center bg-gray-300">
                <ArrowLeftIcon className="text-gray-500 h-5 group-hover:text-yellow-500" />
              </div>
              <div className="flex group items-center h-10 w-10  justify-center bg-gray-300">
                <ArrowRightIcon className="text-gray-500 h-5 group-hover:text-yellow-500" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center grid-cols-6 gap-5">
            {[...Array(5)].map((index) => (
              <div key={index} className="flex bg-white hover:filter items-center justify-center hover:drop-shadow-2xl w-40 h-20 ">BRAND</div>
            ))}
          </div>
        </section>
        <section className="flex justify-center grid-cols-3 gap-4 bg-red-200 items-center p-20">
          {
            tidbits.map((x , index) => (
              <figure key={index} className="flex items-start space-x-4 bg-white p-4 mx-w-lg">
                <Image className="rounded-full" src="https://via.placeholder.com/50" width={50} height={50} />
                <div className="flex flex-col space-y-3">
                  <h1 className="font-medium text-2xl capitalize">{x.title}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  <button className="bg-red-500 rounded-lg w-48 text-white p-2">
                  {x.btn}
                </button>
                </div>
              </figure>
            ))
          }
        </section>
      </main>
      <Footer />
    </div>
  );
}
