import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import pancakeSortPy from '@/components/code/python/sorting_algorithms/pancake_sort.py?raw'
import pancakeSortJava from '@/components/code/java/sorting_algorithms/pancake_sort.java?raw'
import pancakeSortJs from '@/components/code/javascript/sorting_algorithms/pancake_sort.js?raw'
import pancakeSortCpp from '@/components/code/cpp/sorting_algorithms/pancake_sort.cpp?raw'

function PancakeSort() {
  return (
    <div>
      <CodeTab
        ID={'pancake-sort'}
        pythonCode={pancakeSortPy}
        javaCode={pancakeSortJava}
        javascriptCode={pancakeSortJs}
        cppCode={pancakeSortCpp}
        algorithmName={'Pancake Sort'}
      />
    </div>
  )
}
export default PancakeSort
