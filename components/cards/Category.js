// import DynamicIcon from './DynamicIcon'

function Category({ category }) {
    let { title, icon, color } = category
    return (
        <div style={{ backgroundColor: color }} className="flex group space-y-5 flex-col p-5 bg-opacity-50 rounded">
            <div style={{ backgroundColor: color }} className="flex items-center rounded justify-center h-10 w-10 group-hover:bg-white">
                <icon style={{ color }} {...icon} />
            </div>
            <h1 className="text-2xl text-gray-800 group-hover:text-white capitalize">{ title }</h1>
            <p className="group-hover:text-white text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default Category
