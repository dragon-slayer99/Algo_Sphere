import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import unionfindoptimizedPy from '@/components/code/python/data_structures/union_find_optimized.py?raw'
import unionfindoptimizedJava from '@/components/code/java/data_structures/union_find_optimized.java?raw'
import unionfindoptimizedJs from '@/components/code/javascript/data_structures/union_find_optimized.js?raw'
import unionfindoptimizedCpp from '@/components/code/cpp/data_structures/union_find_optimized.cpp?raw'

function UnionFindOptimized() {
  return (
    <div>
      <CodeTab
        ID={'union-find-optimized'}
        pythonCode={unionfindoptimizedPy}
        javaCode={unionfindoptimizedJava}
        javascriptCode={unionfindoptimizedJs}
        cppCode={unionfindoptimizedCpp}
        algorithmName={'Union Find(Optimized)'}
      />
    </div>
  )
}
export default UnionFindOptimized
