import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import reverselinkedlistPy from '@/components/code/python/linked_list/reverse_linked_list.py?raw'
import reverselinkedlistJava from '@/components/code/java/linked_list/reverse_linked_list.java?raw'
import reverselinkedlistJs from '@/components/code/javascript/linked_list/reverse_linked_list.js?raw'
import reverselinkedlistCpp from '@/components/code/cpp/linked_list/reverse_linked_list.cpp?raw'

function ReverseLinkedList() {
  return (
    <div>
      <CodeTab
        ID={'reverse-linked-list'}
        pythonCode={reverselinkedlistPy}
        javaCode={reverselinkedlistJava}
        javascriptCode={reverselinkedlistJs}
        cppCode={reverselinkedlistCpp}
        algorithmName={'Reversing a Linked List'}
      />
    </div>
  )
}
export default ReverseLinkedList
