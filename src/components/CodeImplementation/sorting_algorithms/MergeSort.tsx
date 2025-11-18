import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import mergeSortPy from '@/components/code/python/sorting_algorithms/merge_sort.py?raw'
import mergeSortJava from '@/components/code/java/sorting_algorithms/merge_sort.java?raw'
import mergeSortJs from '@/components/code/javascript/sorting_algorithms/merge_sort.js?raw'
import mergeSortCpp from '@/components/code/cpp/sorting_algorithms/merge_sort.cpp?raw'

function MergeSort() {
  return (
    <div>
      <CodeTab
        ID={'merge-sort'}
        pythonCode={mergeSortPy}
        javaCode={mergeSortJava}
        javascriptCode={mergeSortJs}
        cppCode={mergeSortCpp}
        algorithmName={'Merge Sort'}
      />
    </div>
  )
}
export default MergeSort
