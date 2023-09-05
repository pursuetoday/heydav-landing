import { vsFeatures } from '@/constants/productFeatures'
import RoadMapContentLR from '../home/RoadMapContentLR'
import RoadMapContentRL from '../home/RoadMapContentRL'

export default function Features() {
  return (
    <>
      {vsFeatures && !!vsFeatures.length && (
        <>
          <RoadMapContentLR roadMapContent={vsFeatures} id={0} />
          <RoadMapContentRL roadMapContent={vsFeatures} id={1} />
          <RoadMapContentLR roadMapContent={vsFeatures} id={2} />
          <RoadMapContentRL roadMapContent={vsFeatures} id={3} />
          <RoadMapContentLR roadMapContent={vsFeatures} id={4} />
        </>
      )}
    </>
  )
}
