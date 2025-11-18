import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import dfsrecursivePy from '@/components/code/python/graph/dfs_recursive.py?raw'
import dfsrecursiveJava from '@/components/code/java/graph/dfs_recursive.java?raw'
import dfsrecursiveJs from '@/components/code/javascript/graph/dfs_recursive.js?raw'
import dfsrecursiveCpp from '@/components/code/cpp/graph/dfs_recursive.cpp?raw'

function DfsRecursiveGraph() {
  return (
    <div>
      <CodeTab
        ID={'dfs-recursive-graph'}
        pythonCode={dfsrecursivePy}
        javaCode={dfsrecursiveJava}
        javascriptCode={dfsrecursiveJs}
        cppCode={dfsrecursiveCpp}
        algorithmName={'DFS Recursive(Graph)'}
      />
    </div>
  )
}
export default DfsRecursiveGraph
