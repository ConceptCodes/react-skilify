import DynamicIcon from '../DynamicIcon'

const colors = ['purple','orange','green','blue']


export default function Category({ category }) {
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    let { title, icon, color } = category
    return (
        <div className="flex group space-y-5 flex-col bg-red-100 p-5 rounded hover:bg-red-700">
            <div className="flex items-center rounded bg-red-300 justify-center h-10 w-10 group-hover:bg-white">
                <DynamicIcon className="text-red-700" icon={icon} />
            </div>
            <h1 className="text-2xl text-gray-800 group-hover:text-white capitalize">{ title }</h1>
            <p className="group-hover:text-white text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

