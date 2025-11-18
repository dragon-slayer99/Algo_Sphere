import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import bfsPy from '@/components/code/python/binary_tree/bfs.py?raw'
import bfsJava from '@/components/code/java/binary_tree/bfs.java?raw'
import bfsJs from '@/components/code/javascript/binary_tree/bfs.js?raw'
import bfsCpp from '@/components/code/cpp/binary_tree/bfs.cpp?raw'

function Bfs() {
  return (
    <div>
      <CodeTab
        ID={'bfs-tree'}
        pythonCode={bfsPy}
        javaCode={bfsJava}
        javascriptCode={bfsJs}
        cppCode={bfsCpp}
        algorithmName={'Breadth First Search(Tree)'}
      />
    </div>
  )
}
export default Bfs
