import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import cubeSortPy from '@/components/code/python/sorting_algorithms/cube_sort.py?raw'
import cubeSortJava from '@/components/code/java/sorting_algorithms/cube_sort.java?raw'
import cubeSortJs from '@/components/code/javascript/sorting_algorithms/cube_sort.js?raw'
import cubeSortCpp from '@/components/code/cpp/sorting_algorithms/cube_sort.cpp?raw'

function CubeSort() {
  return (
    <div>
      <CodeTab
        ID={'cube-sort'}
        pythonCode={cubeSortPy}
        javaCode={cubeSortJava}
        javascriptCode={cubeSortJs}
        cppCode={cubeSortCpp}
        algorithmName={'Cube Sort'}
      />
    </div>
  )
}
export default CubeSort
