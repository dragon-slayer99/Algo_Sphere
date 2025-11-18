import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import greedymaximumPy from '@/components/code/python/binary_search/greedy_maximum.py?raw'
import greedymaximumJava from '@/components/code/java/binary_search/greedy_maximum.java?raw'
import greedymaximumJs from '@/components/code/javascript/binary_search/greedy_maximum.js?raw'
import greedymaximumCpp from '@/components/code/cpp/binary_search/greedy_maximum.cpp?raw'

function GreedyMaximum() {
  return (
    <div>
      <CodeTab
        ID={'greedy-maximum'}
        pythonCode={greedymaximumPy}
        javaCode={greedymaximumJava}
        javascriptCode={greedymaximumJs}
        cppCode={greedymaximumCpp}
        algorithmName={'Greedy Maximum'}
      />
    </div>
  )
}
export default GreedyMaximum
