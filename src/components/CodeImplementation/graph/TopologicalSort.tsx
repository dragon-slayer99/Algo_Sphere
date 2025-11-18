import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import topologicalsortPy from '@/components/code/python/graph/topological_sort.py?raw'
import topologicalsortJava from '@/components/code/java/graph/topological_sort.java?raw'
import topologicalsortJs from '@/components/code/javascript/graph/topological_sort.js?raw'
import topologicalsortCpp from '@/components/code/cpp/graph/topological_sort.cpp?raw'

function TopologicalSort() {
  return (
    <div>
      <CodeTab
        ID={'topological-sort'}
        pythonCode={topologicalsortPy}
        javaCode={topologicalsortJava}
        javascriptCode={topologicalsortJs}
        cppCode={topologicalsortCpp}
        algorithmName={'Topological Sort'}
      />
    </div>
  )
}
export default TopologicalSort
