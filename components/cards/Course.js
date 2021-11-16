import Image from 'next/image'
import { StarIcon, PlayIcon, EyeIcon } from '@heroicons/react/outline'

function Course({ course }) {
    return (
        <figure className="bg-white rounded flex flex-col space-y-5 p-5">
            <Image className="rounded " src="https://via.placeholder.com/200" width={275} height={250} />
            <ul className="flex space-x-5 items-center justify-between">
                <li className="flex items-center">
                    <StarIcon className="text-yellow-500 mr-2 h-5" />
                    <p className="text-gray-500">(4.5) 120</p>
                </li>
                <li className="flex items-center">
                    <EyeIcon className="text-red-500 mr-2 h-5" />
                    <p className="text-gray-500">28,500</p>
                </li>
                <li className="flex items-center">
                    <PlayIcon className="text-green-500 mr-2 h-5" />
                    <p className="text-gray-500">36 Lessons</p>
                </li>
            </ul>
            <hr />
            <h1 className="font-medium text-2xl capitalize">{course.title}</h1>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="flex space-x-3">
                        <Image className="rounded-lg" src="https://via.placeholder.com/100" width={50} height={50} />
                        <h1 className="text-gray-500 capitalize"></h1>
                    </div>
                    <h2 className="capitalize">nicole brown</h2>
                </div>
                <h1 className="text-yellow-500 font-bold">
                    <span className="text-gray-500 font-thin line-through mr-2">($60.00)</span>
                    $49.65</h1>
            </div>
        </figure>
    )
}

export default Course
