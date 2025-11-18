import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import binarysearchtreePy from '@/components/code/python/data_structures/binary_search_tree.py?raw'
import binarysearchtreeJava from '@/components/code/java/data_structures/binary_search_tree.java?raw'
import binarysearchtreeJs from '@/components/code/javascript/data_structures/binary_search_tree.js?raw'
import binarysearchtreeCpp from '@/components/code/cpp/data_structures/binary_search_tree.cpp?raw'

function BinarySearchTree() {
  return (
    <div>
      <CodeTab
        ID={'binary-search-tree'}
        pythonCode={binarysearchtreePy}
        javaCode={binarysearchtreeJava}
        javascriptCode={binarysearchtreeJs}
        cppCode={binarysearchtreeCpp}
        algorithmName={'Binary Search Tree'}
      />
    </div>
  )
}
export default BinarySearchTree
