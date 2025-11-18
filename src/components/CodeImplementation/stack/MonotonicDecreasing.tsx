import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import monotonicdecreasingPy from '@/components/code/python/stack/monotonic_decreasing.py?raw'
import monotonicdecreasingJava from '@/components/code/java/stack/monotonic_decreasing.java?raw'
import monotonicdecreasingJs from '@/components/code/javascript/stack/monotonic_decreasing.js?raw'
import monotonicdecreasingCpp from '@/components/code/cpp/stack/monotonic_decreasing.cpp?raw'

function MonotonicDecreasing() {
  return (
    <div>
      <CodeTab
        ID={'monotonic-decreasing'}
        pythonCode={monotonicdecreasingPy}
        javaCode={monotonicdecreasingJava}
        javascriptCode={monotonicdecreasingJs}
        cppCode={monotonicdecreasingCpp}
        algorithmName={'Monotonic Decreasing'}
      />
    </div>
  )
}
export default MonotonicDecreasing
