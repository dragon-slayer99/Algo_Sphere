import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import quickSortPy from '@/components/code/python/sorting_algorithms/quick_sort.py?raw'
import quickSortJava from '@/components/code/java/sorting_algorithms/quick_sort.java?raw'
import quickSortJs from '@/components/code/javascript/sorting_algorithms/quick_sort.js?raw'
import quickSortCpp from '@/components/code/cpp/sorting_algorithms/quick_sort.cpp?raw'

function QuickSort() {
  return (
    <div>
      <CodeTab
        ID={'quick-sort'}
        pythonCode={quickSortPy}
        javaCode={quickSortJava}
        javascriptCode={quickSortJs}
        cppCode={quickSortCpp}
        algorithmName={'Quick Sort'}
      />
    </div>
  )
}
export default QuickSort
