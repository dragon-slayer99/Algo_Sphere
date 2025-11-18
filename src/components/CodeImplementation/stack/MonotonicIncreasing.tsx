import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import monotonicincreasingPy from '@/components/code/python/stack/monotonic_increasing.py?raw'
import monotonicincreasingJava from '@/components/code/java/stack/monotonic_increasing.java?raw'
import monotonicincreasingJs from '@/components/code/javascript/stack/monotonic_increasing.js?raw'
import monotonicincreasingCpp from '@/components/code/cpp/stack/monotonic_increasing.cpp?raw'

function MonotonicIncreasing() {
  return (
    <div>
      <CodeTab
        ID={'monotonic-increasing'}
        pythonCode={monotonicincreasingPy}
        javaCode={monotonicincreasingJava}
        javascriptCode={monotonicincreasingJs}
        cppCode={monotonicincreasingCpp}
        algorithmName={'Monotonic Increasing'}
      />
    </div>
  )
}
export default MonotonicIncreasing
