import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import bubbleSortPy from '@/components/code/python/sorting_algorithms/bubble_sort.py?raw'
import bubbleSortJava from '@/components/code/java/sorting_algorithms/bubble_sort.java?raw'
import bubbleSortJs from '@/components/code/javascript/sorting_algorithms/bubble_sort.js?raw'
import bubbleSortCpp from '@/components/code/cpp/sorting_algorithms/bubble_sort.cpp?raw'

function BubbleSort() {
  return (
    <div>
      <CodeTab
        ID={'bubble-sort'}
        pythonCode={bubbleSortPy}
        javaCode={bubbleSortJava}
        javascriptCode={bubbleSortJs}
        cppCode={bubbleSortCpp}
        algorithmName={'Bubble Sort'}
      />
    </div>
  )
}
export default BubbleSort
