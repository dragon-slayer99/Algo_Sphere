import BackTracking from '../CodeImplementation/backtracking/BackTracking'
import BinarySearch from '../CodeImplementation/binary_search/BinarySearch'
import DuplicateElementsLeftInsertion from '../CodeImplementation/binary_search/DuplicateElementsLeftInsertion'
import DuplicateElementsRightInsertion from '../CodeImplementation/binary_search/DuplicateElementsRightInsertion'
import GreedyMaximum from '../CodeImplementation/binary_search/GreedyMaximum'
import GreedyMinimum from '../CodeImplementation/binary_search/GreedyMinimum'
import BottomUp from '../CodeImplementation/dynamic_programming/BottomUp'
import Kadane from '../CodeImplementation/dynamic_programming/Kadane'
import TopDown from '../CodeImplementation/dynamic_programming/TopDown'
import FindNumberOfSubarrays from '../CodeImplementation/hash_map/FindNumberOfSubarrays'
import SlidingWindowUsingHashmap from '../CodeImplementation/hash_map/SlidingWindowUsingHashmap'
import FindTopKElements from '../CodeImplementation/heap/FindTopKElements'
import BubbleSort from '../CodeImplementation/sorting_algorithms/BubbleSort'
import HeapSort from '../CodeImplementation/sorting_algorithms/HeapSort'
import InsertionSort from '../CodeImplementation/sorting_algorithms/InsertionSort'
import MergeSort from '../CodeImplementation/sorting_algorithms/MergeSort'
import QuickSort from '../CodeImplementation/sorting_algorithms/QuickSort'
import SelectionSort from '../CodeImplementation/sorting_algorithms/SelectionSort'

function PatternRoute() {
  return (
    <section>
      <BackTracking />

      <BinarySearch />
      <DuplicateElementsLeftInsertion />
      <DuplicateElementsRightInsertion />
      <GreedyMaximum />
      <GreedyMinimum />

      <BottomUp />
      <Kadane />
      <TopDown />

      <FindNumberOfSubarrays />
      <SlidingWindowUsingHashmap />

      <FindTopKElements />

      <BubbleSort />
      <InsertionSort />
      <SelectionSort />
      <MergeSort />
      <QuickSort />
      <HeapSort />
    </section>
  )
}
export default PatternRoute
