import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import duplicateelementleftinsertionPy from '@/components/code/python/binary_search/duplicate_elements_left_insertion.py?raw'
import duplicateelementleftinsertionJava from '@/components/code/java/binary_search/duplicate_elements_left_insertion.java?raw'
import duplicateelementleftinsertionJs from '@/components/code/javascript/binary_search/duplicate_elements_left_insertion.js?raw'
import duplicateelementleftinsertionCpp from '@/components/code/cpp/binary_search/duplicate_elements_left_insertion.cpp?raw'

function DuplicateElementsLeftInsertion() {
  return (
    <div>
      <CodeTab
        ID={'duplicate-elements-left-insertion'}
        pythonCode={duplicateelementleftinsertionPy}
        javaCode={duplicateelementleftinsertionJava}
        javascriptCode={duplicateelementleftinsertionJs}
        cppCode={duplicateelementleftinsertionCpp}
        algorithmName={'Duplicate Elements Insertion(left)'}
      />
    </div>
  )
}
export default DuplicateElementsLeftInsertion
