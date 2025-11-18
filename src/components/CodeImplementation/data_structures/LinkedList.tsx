import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import linkedlistPy from '@/components/code/python/data_structures/linked_list.py?raw'
import linkedlistJava from '@/components/code/java/data_structures/linked_list.java?raw'
import linkedlistJs from '@/components/code/javascript/data_structures/linked_list.js?raw'
import linkedlistCpp from '@/components/code/cpp/data_structures/linked_list.cpp?raw'

function LinkedList() {
  return (
    <div>
      <CodeTab
        ID={'linked-list'}
        pythonCode={linkedlistPy}
        javaCode={linkedlistJava}
        javascriptCode={linkedlistJs}
        cppCode={linkedlistCpp}
        algorithmName={'Linked List'}
      />
    </div>
  )
}
export default LinkedList
