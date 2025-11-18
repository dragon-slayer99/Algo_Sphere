import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import timSortPy from '@/components/code/python/sorting_algorithms/tim_sort.py?raw'
import timSortJava from '@/components/code/java/sorting_algorithms/tim_sort.java?raw'
import timSortJs from '@/components/code/javascript/sorting_algorithms/tim_sort.js?raw'
import timSortCpp from '@/components/code/cpp/sorting_algorithms/tim_sort.cpp?raw'

function TimSort() {
  return (
    <div>
      <CodeTab
        ID={'tim-sort'}
        pythonCode={timSortPy}
        javaCode={timSortJava}
        javascriptCode={timSortJs}
        cppCode={timSortCpp}
        algorithmName={'Tim Sort'}
      />
    </div>
  )
}
export default TimSort
