import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import bogoSortPy from '@/components/code/python/sorting_algorithms/bogo_sort.py?raw'
import bogoSortJava from '@/components/code/java/sorting_algorithms/bogo_sort.java?raw'
import bogoSortJs from '@/components/code/javascript/sorting_algorithms/bogo_sort.js?raw'
import bogoSortCpp from '@/components/code/cpp/sorting_algorithms/bogo_sort.cpp?raw'

function BogoSort() {
  return (
    <div>
      <CodeTab
        ID={'bogo-sort'}
        pythonCode={bogoSortPy}
        javaCode={bogoSortJava}
        javascriptCode={bogoSortJs}
        cppCode={bogoSortCpp}
        algorithmName={'Bogo Sort'}
      />
    </div>
  )
}
export default BogoSort
