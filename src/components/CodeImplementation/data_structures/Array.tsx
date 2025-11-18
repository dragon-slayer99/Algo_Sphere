import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import arrayPy from '@/components/code/python/data_structures/array.py?raw'
import arrayJava from '@/components/code/java/data_structures/array.java?raw'
import arrayJs from '@/components/code/javascript/data_structures/array.js?raw'
import arrayCpp from '@/components/code/cpp/data_structures/array.cpp?raw'

function Array() {
  return (
    <div>
      <CodeTab
        ID={'array'}
        pythonCode={arrayPy}
        javaCode={arrayJava}
        javascriptCode={arrayJs}
        cppCode={arrayCpp}
        algorithmName={'Array'}
      />
    </div>
  )
}
export default Array
