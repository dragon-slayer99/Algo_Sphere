import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import binarytreePy from '@/components/code/python/data_structures/binary_tree.py?raw'
import binarytreeJava from '@/components/code/java/data_structures/binary_tree.java?raw'
import binarytreeJs from '@/components/code/javascript/data_structures/binary_tree.js?raw'
import binarytreeCpp from '@/components/code/cpp/data_structures/binary_tree.cpp?raw'

function BinaryTree() {
  return (
    <div>
      <CodeTab
        ID={'binary-tree'}
        pythonCode={binarytreePy}
        javaCode={binarytreeJava}
        javascriptCode={binarytreeJs}
        cppCode={binarytreeCpp}
        algorithmName={'Binary Tree'}
      />
    </div>
  )
}
export default BinaryTree
