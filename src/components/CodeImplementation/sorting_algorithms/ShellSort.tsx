import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import shellSortPy from '@/components/code/python/sorting_algorithms/shell_sort.py?raw'
import shellSortJava from '@/components/code/java/sorting_algorithms/shell_sort.java?raw'
import shellSortJs from '@/components/code/javascript/sorting_algorithms/shell_sort.js?raw'
import shellSortCpp from '@/components/code/cpp/sorting_algorithms/shell_sort.cpp?raw'

function ShellSort() {
  return (
    <div>
      <CodeTab
        ID={'shell-sort'}
        pythonCode={shellSortPy}
        javaCode={shellSortJava}
        javascriptCode={shellSortJs}
        cppCode={shellSortCpp}
        algorithmName={'Shell Sort'}
      />
    </div>
  )
}
export default ShellSort
