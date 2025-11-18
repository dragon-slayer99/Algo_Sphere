import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import heapSortPy from '@/components/code/python/sorting_algorithms/heap_sort.py?raw'
import heapSortJava from '@/components/code/java/sorting_algorithms/heap_sort.java?raw'
import heapSortJs from '@/components/code/javascript/sorting_algorithms/heap_sort.js?raw'
import heapSortCpp from '@/components/code/cpp/sorting_algorithms/heap_sort.cpp?raw'

function HeapSort() {
  return (
    <div>
      <CodeTab
        ID={'heap-sort'}
        pythonCode={heapSortPy}
        javaCode={heapSortJava}
        javascriptCode={heapSortJs}
        cppCode={heapSortCpp}
        algorithmName={'Heap Sort'}
      />
    </div>
  )
}
export default HeapSort
