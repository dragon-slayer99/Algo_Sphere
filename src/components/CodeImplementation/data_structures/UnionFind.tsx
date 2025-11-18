import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import unionfindPy from '@/components/code/python/data_structures/union_find.py?raw'
import unionfindJava from '@/components/code/java/data_structures/union_find.java?raw'
import unionfindJs from '@/components/code/javascript/data_structures/union_find.js?raw'
import unionfindCpp from '@/components/code/cpp/data_structures/union_find.cpp?raw'

function UnionFind() {
  return (
    <div>
      <CodeTab
        ID={'union-find'}
        pythonCode={unionfindPy}
        javaCode={unionfindJava}
        javascriptCode={unionfindJs}
        cppCode={unionfindCpp}
        algorithmName={'Union Find'}
      />
    </div>
  )
}
export default UnionFind
