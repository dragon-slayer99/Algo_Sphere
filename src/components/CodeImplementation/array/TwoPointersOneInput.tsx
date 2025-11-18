import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import twopointersoneinputPy from '@/components/code/python/array/sliding_window.py?raw'
import twopointersoneinputJava from '@/components/code/java/array/sliding_window.java?raw'
import twopointersoneinputJs from '@/components/code/javascript/array/sliding_window.js?raw'
import twopointersoneinputCpp from '@/components/code/cpp/array/sliding_window.cpp?raw'

function TwoPointersOneInput() {
  return (
    <div>
      <CodeTab
        ID={'two-pointers-one-input'}
        pythonCode={twopointersoneinputPy}
        javaCode={twopointersoneinputJava}
        javascriptCode={twopointersoneinputJs}
        cppCode={twopointersoneinputCpp}
        algorithmName={'Two Pointers (One input)'}
      />
    </div>
  )
}
export default TwoPointersOneInput
