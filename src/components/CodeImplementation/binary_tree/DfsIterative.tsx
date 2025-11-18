import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import dfsPy from '@/components/code/python/binary_tree/dfs_iterative.py?raw'
import dfsJava from '@/components/code/java/binary_tree/dfs_iterative.java?raw'
import dfsJs from '@/components/code/javascript/binary_tree/dfs_iterative.js?raw'
import dfsCpp from '@/components/code/cpp/binary_tree/dfs_iterative.cpp?raw'

function DfsIterative() {
  return (
    <div>
      <CodeTab
        ID={'dfs-iterative-tree'}
        pythonCode={dfsPy}
        javaCode={dfsJava}
        javascriptCode={dfsJs}
        cppCode={dfsCpp}
        algorithmName={'Depth First Search(Iterative)'}
      />
    </div>
  )
}
export default DfsIterative
