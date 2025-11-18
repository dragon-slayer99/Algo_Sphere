import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import createcopyPy from '@/components/code/python/matrix/create_copy.py?raw'
import createcopyJava from '@/components/code/java/matrix/create_copy.java?raw'
import createcopyJs from '@/components/code/javascript/matrix/create_copy.js?raw'
import createcopyCpp from '@/components/code/cpp/matrix/create_copy.cpp?raw'

function CreateCopy() {
  return (
    <div>
      <CodeTab
        ID={'create-copy'}
        pythonCode={createcopyPy}
        javaCode={createcopyJava}
        javascriptCode={createcopyJs}
        cppCode={createcopyCpp}
        algorithmName={'Create a Matrix Copy'}
      />
    </div>
  )
}
export default CreateCopy
