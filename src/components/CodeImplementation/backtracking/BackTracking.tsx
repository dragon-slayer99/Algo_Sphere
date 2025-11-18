import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import backtrackingPy from '@/components/code/python/backtracking/backtracking.py?raw'
import backtrackingJava from '@/components/code/java/backtracking/backtracking.java?raw'
import backtrackingJs from '@/components/code/javascript/backtracking/backtracking.js?raw'
import backtrackingCpp from '@/components/code/cpp/backtracking/backtracking.cpp?raw'

function BackTracking() {
  return (
    <div>
      <CodeTab
        ID={'back-tracking'}
        pythonCode={backtrackingPy}
        javaCode={backtrackingJava}
        javascriptCode={backtrackingJs}
        cppCode={backtrackingCpp}
        algorithmName={'Backtracking'}
      />
    </div>
  )
}
export default BackTracking
