import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import kruskalPy from '@/components/code/python/graph/kruskal.py?raw'
import kruskalJava from '@/components/code/java/graph/kruskal.java?raw'
import kruskalJs from '@/components/code/javascript/graph/kruskal.js?raw'
import kruskalCpp from '@/components/code/cpp/graph/kruskal.cpp?raw'

function Kruskal() {
  return (
    <div>
      <CodeTab
        ID={'kruskal'}
        pythonCode={kruskalPy}
        javaCode={kruskalJava}
        javascriptCode={kruskalJs}
        cppCode={kruskalCpp}
        algorithmName={"Kruskal's algorithm"}
      />
    </div>
  )
}
export default Kruskal
