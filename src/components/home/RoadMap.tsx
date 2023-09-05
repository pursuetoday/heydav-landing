import { roadmapContent } from '@/constants/roadMap'
import RoadMapContentLR from './RoadMapContentLR'
import RoadMapContentRL from './RoadMapContentRL'

export default function RoadMap() {
  return (
    <>
      {roadmapContent && !!roadmapContent.length && (
        <>
          <RoadMapContentLR roadMapContent={roadmapContent} id={0} />
          <RoadMapContentRL roadMapContent={roadmapContent} id={1} />
          <RoadMapContentLR roadMapContent={roadmapContent} id={2} />
          <RoadMapContentRL roadMapContent={roadmapContent} id={3} />
          <RoadMapContentLR roadMapContent={roadmapContent} id={4} />
        </>
      )}
    </>
  )
}
