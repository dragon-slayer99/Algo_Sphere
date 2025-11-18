import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import findtopkelementsPy from '@/components/code/python/heap/find_top_k_elements.py?raw'
import findtopkelementsJava from '@/components/code/java/heap/find_top_k_elements.java?raw'
import findtopkelementsJs from '@/components/code/javascript/heap/find_top_k_elements.js?raw'
import findtopkelementsCpp from '@/components/code/cpp/heap/find_top_k_elements.cpp?raw'

function FindTopKElements() {
  return (
    <div>
      <CodeTab
        ID={'find-top-k-elements'}
        pythonCode={findtopkelementsPy}
        javaCode={findtopkelementsJava}
        javascriptCode={findtopkelementsJs}
        cppCode={findtopkelementsCpp}
        algorithmName={'Find Top K Elements'}
      />
    </div>
  )
}
export default FindTopKElements
