import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import duplicateelementrightinsertionPy from '@/components/code/python/binary_search/duplicate_elements_right_insertion.py?raw'
import duplicateelementrightinsertionJava from '@/components/code/java/binary_search/duplicate_elements_right_insertion.java?raw'
import duplicateelementrightinsertionJs from '@/components/code/javascript/binary_search/duplicate_elements_right_insertion.js?raw'
import duplicateelementrightinsertionCpp from '@/components/code/cpp/binary_search/duplicate_elements_right_insertion.cpp?raw'

function DuplicateElementsRightInsertion() {
  return (
    <div>
      <CodeTab
        ID={'duplicate-elements-right-insertion'}
        pythonCode={duplicateelementrightinsertionPy}
        javaCode={duplicateelementrightinsertionJava}
        javascriptCode={duplicateelementrightinsertionJs}
        cppCode={duplicateelementrightinsertionCpp}
        algorithmName={'Duplicate Elements Insertion(right)'}
      />
    </div>
  )
}
export default DuplicateElementsRightInsertion
