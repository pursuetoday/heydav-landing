import { gitFeatures } from '@/constants/productFeatures'
import RoadMapContentLR from '../home/RoadMapContentLR'
import RoadMapContentRL from '../home/RoadMapContentRL'

export default function Features() {
  return (
    <>
      {gitFeatures && !!gitFeatures.length && (
        <>
          <RoadMapContentLR roadMapContent={gitFeatures} id={0} isProduct />
          <RoadMapContentRL roadMapContent={gitFeatures} id={1} />
          <RoadMapContentLR roadMapContent={gitFeatures} id={2} isProduct />
          <RoadMapContentRL roadMapContent={gitFeatures} id={3} />
          <RoadMapContentLR roadMapContent={gitFeatures} id={4} isProduct />
        </>
      )}
    </>
  )
}
