import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import dfsiterativePy from '@/components/code/python/graph/dfs_iterative.py?raw'
import dfsiterativeJava from '@/components/code/java/graph/dfs_iterative.java?raw'
import dfsiterativeJs from '@/components/code/javascript/graph/dfs_iterative.js?raw'
import dfsiterativeCpp from '@/components/code/cpp/graph/dfs_iterative.cpp?raw'

function DfsIterativeGraph() {
  return (
    <div>
      <CodeTab
        ID={'dfs-iterative-graph'}
        pythonCode={dfsiterativePy}
        javaCode={dfsiterativeJava}
        javascriptCode={dfsiterativeJs}
        cppCode={dfsiterativeCpp}
        algorithmName={'DFS Iterative(Graph)'}
      />
    </div>
  )
}
export default DfsIterativeGraph
