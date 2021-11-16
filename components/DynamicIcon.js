import dynamic from 'next/dynamic'

export default function DynamicIcon(props) {
  const Icon = dynamic(() => import('@heroicons/react/solid').then((mod) => mod[props.icon]))

  return (
    <>
      <Icon />
    </>
  )
}