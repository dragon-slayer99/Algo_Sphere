import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import dfsPy from '@/components/code/python/binary_tree/dfs_recursive.py?raw'
import dfsJava from '@/components/code/java/binary_tree/dfs_recursive.java?raw'
import dfsJs from '@/components/code/javascript/binary_tree/dfs_recursive.js?raw'
import dfsCpp from '@/components/code/cpp/binary_tree/dfs_recursive.cpp?raw'

function DfsRecursive() {
  return (
    <div>
      <CodeTab
        ID={'dfs-recursive-tree'}
        pythonCode={dfsPy}
        javaCode={dfsJava}
        javascriptCode={dfsJs}
        cppCode={dfsCpp}
        algorithmName={'Depth First Search(Recursive)'}
      />
    </div>
  )
}
export default DfsRecursive
