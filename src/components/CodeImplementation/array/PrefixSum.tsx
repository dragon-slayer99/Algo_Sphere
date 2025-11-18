import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import prefixsumPy from '@/components/code/python/array/prefix_sum.py?raw'
import prefixsumJava from '@/components/code/java/array/prefix_sum.java?raw'
import prefixsumJs from '@/components/code/javascript/array/prefix_sum.js?raw'
import prefixsumCpp from '@/components/code/cpp/array/prefix_sum.cpp?raw'

function PrefixSum() {
  return (
    <div>
      <CodeTab
        ID={'prefix-sum'}
        pythonCode={prefixsumPy}
        javaCode={prefixsumJava}
        javascriptCode={prefixsumJs}
        cppCode={prefixsumCpp}
        algorithmName={'Prefix Sum'}
      />
    </div>
  )
}
export default PrefixSum
