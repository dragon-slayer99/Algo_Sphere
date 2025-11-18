import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import greedyminimumPy from '@/components/code/python/binary_search/greedy_minimum.py?raw'
import greedyminimumJava from '@/components/code/java/binary_search/greedy_minimum.java?raw'
import greedyminimumJs from '@/components/code/javascript/binary_search/greedy_minimum.js?raw'
import greedyminimumCpp from '@/components/code/cpp/binary_search/greedy_minimum.cpp?raw'

function GreedyMinimum() {
  return (
    <div>
      <CodeTab
        ID={'greedy-minimum'}
        pythonCode={greedyminimumPy}
        javaCode={greedyminimumJava}
        javascriptCode={greedyminimumJs}
        cppCode={greedyminimumCpp}
        algorithmName={'Greedy Minimum'}
      />
    </div>
  )
}
export default GreedyMinimum
