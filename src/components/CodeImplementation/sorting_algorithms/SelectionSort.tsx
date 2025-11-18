import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import selectionSortPy from '@/components/code/python/sorting_algorithms/selection_sort.py?raw'
import selectionSortJava from '@/components/code/java/sorting_algorithms/selection_sort.java?raw'
import selectionSortJs from '@/components/code/javascript/sorting_algorithms/selection_sort.js?raw'
import selectionSortCpp from '@/components/code/cpp/sorting_algorithms/selection_sort.cpp?raw'

function SelectionSort() {
  return (
    <div>
      <CodeTab
        ID={'selection-sort'}
        pythonCode={selectionSortPy}
        javaCode={selectionSortJava}
        javascriptCode={selectionSortJs}
        cppCode={selectionSortCpp}
        algorithmName={'Selection Sort'}
      />
    </div>
  )
}
export default SelectionSort
