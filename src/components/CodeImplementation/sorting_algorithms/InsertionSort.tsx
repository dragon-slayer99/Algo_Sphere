import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import insertionSortPy from '@/components/code/python/sorting_algorithms/insertion_sort.py?raw'
import insertionSortJava from '@/components/code/java/sorting_algorithms/insertion_sort.java?raw'
import insertionSortJs from '@/components/code/javascript/sorting_algorithms/insertion_sort.js?raw'
import insertionSortCpp from '@/components/code/cpp/sorting_algorithms/insertion_sort.cpp?raw'

function InsertionSort() {
  return (
    <div>
      <CodeTab
        ID={'insertion-sort'}
        pythonCode={insertionSortPy}
        javaCode={insertionSortJava}
        javascriptCode={insertionSortJs}
        cppCode={insertionSortCpp}
        algorithmName={'Insertion Sort'}
      />
    </div>
  )
}
export default InsertionSort
