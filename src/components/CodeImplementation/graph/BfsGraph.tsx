import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import bfsPy from '@/components/code/python/graph/bfs.py?raw'
import bfsJava from '@/components/code/java/graph/bfs.java?raw'
import bfsJs from '@/components/code/javascript/graph/bfs.js?raw'
import bfsCpp from '@/components/code/cpp/graph/bfs.cpp?raw'

function BfsGraph() {
  return (
    <div>
      <CodeTab
        ID={'bfs-graph'}
        pythonCode={bfsPy}
        javaCode={bfsJava}
        javascriptCode={bfsJs}
        cppCode={bfsCpp}
        algorithmName={'Breadth First Search(graph)'}
      />
    </div>
  )
}
export default BfsGraph
