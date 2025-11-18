import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import bucketSortPy from '@/components/code/python/sorting_algorithms/bucket_sort.py?raw'
import bucketSortJava from '@/components/code/java/sorting_algorithms/bucket_sort.java?raw'
import bucketSortJs from '@/components/code/javascript/sorting_algorithms/bucket_sort.js?raw'
import bucketSortCpp from '@/components/code/cpp/sorting_algorithms/bucket_sort.cpp?raw'

function BucketSort() {
  return (
    <div>
      <CodeTab
        ID={'bucket-sort'}
        pythonCode={bucketSortPy}
        javaCode={bucketSortJava}
        javascriptCode={bucketSortJs}
        cppCode={bucketSortCpp}
        algorithmName={'Bucket Sort'}
      />
    </div>
  )
}
export default BucketSort
