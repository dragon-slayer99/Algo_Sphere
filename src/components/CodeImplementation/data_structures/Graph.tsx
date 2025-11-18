import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import graphPy from '@/components/code/python/data_structures/graph.py?raw'
import graphJava from '@/components/code/java/data_structures/graph.java?raw'
import graphJs from '@/components/code/javascript/data_structures/graph.js?raw'
import graphCpp from '@/components/code/cpp/data_structures/graph.cpp?raw'

function Graph() {
  return (
    <div>
      <CodeTab
        ID={'graph'}
        pythonCode={graphPy}
        javaCode={graphJava}
        javascriptCode={graphJs}
        cppCode={graphCpp}
        algorithmName={'Graph'}
      />
    </div>
  )
}
export default Graph
