import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import radixSortPy from '@/components/code/python/sorting_algorithms/radix_sort.py?raw'
import radixSortJava from '@/components/code/java/sorting_algorithms/radix_sort.java?raw'
import radixSortJs from '@/components/code/javascript/sorting_algorithms/radix_sort.js?raw'
import radixSortCpp from '@/components/code/cpp/sorting_algorithms/radix_sort.cpp?raw'

function RadixSort() {
  return (
    <div>
      <CodeTab
        ID={'radix-sort'}
        pythonCode={radixSortPy}
        javaCode={radixSortJava}
        javascriptCode={radixSortJs}
        cppCode={radixSortCpp}
        algorithmName={'Radix Sort'}
      />
    </div>
  )
}
export default RadixSort
