import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import doublylinkedlistPy from '@/components/code/python/data_structures/doubly_linked_list.py?raw'
import doublylinkedlistJava from '@/components/code/java/data_structures/doubly_linked_list.java?raw'
import doublylinkedlistJs from '@/components/code/javascript/data_structures/doubly_linked_list.js?raw'
import doublylinkedlistCpp from '@/components/code/cpp/data_structures/doubly_linked_list.cpp?raw'

function DoublyLinkedList() {
  return (
    <div>
      <CodeTab
        ID={'doubly-linked-list'}
        pythonCode={doublylinkedlistPy}
        javaCode={doublylinkedlistJava}
        javascriptCode={doublylinkedlistJs}
        cppCode={doublylinkedlistCpp}
        algorithmName={'Doubly Linked List'}
      />
    </div>
  )
}
export default DoublyLinkedList
