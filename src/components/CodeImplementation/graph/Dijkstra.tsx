import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import dijkstraPy from '@/components/code/python/graph/dijkstra.py?raw'
import dijkstraJava from '@/components/code/java/graph/dijkstra.java?raw'
import dijkstraJs from '@/components/code/javascript/graph/dijkstra.js?raw'
import dijkstraCpp from '@/components/code/cpp/graph/dijkstra.cpp?raw'

function DfsRecursiveGraph() {
  return (
    <div>
      <CodeTab
        ID={'dijkstra'}
        pythonCode={dijkstraPy}
        javaCode={dijkstraJava}
        javascriptCode={dijkstraJs}
        cppCode={dijkstraCpp}
        algorithmName={"Dijkstra's algorithm"}
      />
    </div>
  )
}
export default DfsRecursiveGraph
