import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Review({ review }) {
  return (
    <figure className="hover:border-l-2 space-y-5 hover:border-yellow-500 flex flex-col rounded-tr-3xl bg-gray-200 hover:bg-white p-3">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <Image src="https://via.placeholder.com/100" className="rounded-full" width={50} height={50} />
          <div className="flex flex-col">
              <h1 className="text-xl">{review}</h1>
              <p className="text-gray-600">Student</p>
          </div>
        </div>
        <div className="flex space-x-1">
            {
                [...Array(5)].map((x) => <StarIcon key={x} className="text-yellow-500 h-5" />)
            }
        </div>
      </div>
      <p className="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </p>
    </figure>
  );
}

export default Review;
