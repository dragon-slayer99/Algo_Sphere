import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import binarysearchPy from '@/components/code/python/binary_search/binary_search.py?raw'
import binarysearchJava from '@/components/code/java/binary_search/binary_search.java?raw'
import binarysearchJs from '@/components/code/javascript/binary_search/binary_search.js?raw'
import binarysearchCpp from '@/components/code/cpp/binary_search/binary_search.cpp?raw'

function BinarySearch() {
  return (
    <div>
      <CodeTab
        ID={'binary-search'}
        pythonCode={binarysearchPy}
        javaCode={binarysearchJava}
        javascriptCode={binarysearchJs}
        cppCode={binarysearchCpp}
        algorithmName={'Binary Search'}
      />
    </div>
  )
}
export default BinarySearch
