import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import slidingwindowPy from '@/components/code/python/array/sliding_window.py?raw'
import slidingwindowJava from '@/components/code/java/array/sliding_window.java?raw'
import slidingwindowJs from '@/components/code/javascript/array/sliding_window.js?raw'
import slidingwindowCpp from '@/components/code/cpp/array/sliding_window.cpp?raw'

function SlidingWindow() {
  return (
    <div>
      <CodeTab
        ID={'sliding-window'}
        pythonCode={slidingwindowPy}
        javaCode={slidingwindowJava}
        javascriptCode={slidingwindowJs}
        cppCode={slidingwindowCpp}
        algorithmName={'Sliding Window'}
      />
    </div>
  )
}
export default SlidingWindow
