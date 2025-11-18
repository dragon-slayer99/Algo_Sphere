import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import countingSortPy from '@/components/code/python/sorting_algorithms/counting_sort.py?raw'
import countingSortJava from '@/components/code/java/sorting_algorithms/counting_sort.java?raw'
import countingSortJs from '@/components/code/javascript/sorting_algorithms/counting_sort.js?raw'
import countingSortCpp from '@/components/code/cpp/sorting_algorithms/counting_sort.cpp?raw'

function CountingSort() {
  return (
    <div>
      <CodeTab
        ID={'counting-sort'}
        pythonCode={countingSortPy}
        javaCode={countingSortJava}
        javascriptCode={countingSortJs}
        cppCode={countingSortCpp}
        algorithmName={'Counting Sort'}
      />
    </div>
  )
}
export default CountingSort
