import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import sleepSortPy from '@/components/code/python/sorting_algorithms/sleep_sort.py?raw'
import sleepSortJava from '@/components/code/java/sorting_algorithms/sleep_sort.java?raw'
import sleepSortJs from '@/components/code/javascript/sorting_algorithms/sleep_sort.js?raw'
import sleepSortCpp from '@/components/code/cpp/sorting_algorithms/sleep_sort.cpp?raw'

function SleepSort() {
  return (
    <div>
      <CodeTab
        ID={'sleep-sort'}
        pythonCode={sleepSortPy}
        javaCode={sleepSortJava}
        javascriptCode={sleepSortJs}
        cppCode={sleepSortCpp}
        algorithmName={'Sleep Sort'}
      />
    </div>
  )
}
export default SleepSort
