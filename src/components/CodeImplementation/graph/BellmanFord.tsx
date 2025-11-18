import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import bellmanfordPy from '@/components/code/python/graph/bellman_ford.py?raw'
import bellmanfordJava from '@/components/code/java/graph/bellman_ford.java?raw'
import bellmanfordJs from '@/components/code/javascript/graph/bellman_ford.js?raw'
import bellmanfordCpp from '@/components/code/cpp/graph/bellman_ford.cpp?raw'

function BellmanFord() {
  return (
    <div>
      <CodeTab
        ID={'bellman-ford'}
        pythonCode={bellmanfordPy}
        javaCode={bellmanfordJava}
        javascriptCode={bellmanfordJs}
        cppCode={bellmanfordCpp}
        algorithmName={'Bellman Ford Algorithm'}
      />
    </div>
  )
}
export default BellmanFord
