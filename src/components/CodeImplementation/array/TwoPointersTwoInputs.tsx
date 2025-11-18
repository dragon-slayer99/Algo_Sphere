import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import twopointerstwoinputsPy from '@/components/code/python/array/sliding_window.py?raw'
import twopointerstwoinputsJava from '@/components/code/java/array/sliding_window.java?raw'
import twopointerstwoinputsJs from '@/components/code/javascript/array/sliding_window.js?raw'
import twopointerstwoinputsCpp from '@/components/code/cpp/array/sliding_window.cpp?raw'

function TwoPointersTwoInputs() {
  return (
    <div>
      <CodeTab
        ID={'two-pointers-two-inputs'}
        pythonCode={twopointerstwoinputsPy}
        javaCode={twopointerstwoinputsJava}
        javascriptCode={twopointerstwoinputsJs}
        cppCode={twopointerstwoinputsCpp}
        algorithmName={'Two Pointers (Two input)'}
      />
    </div>
  )
}
export default TwoPointersTwoInputs
