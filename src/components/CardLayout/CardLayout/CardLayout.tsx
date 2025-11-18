import styles from './CardLayout.module.css'
import Card from '../Card/Card'

function CardLayout() {
  const algorithms = [
    {
      title: 'Binary Search',
      desc: 'Efficiently find an element in a sorted array by repeatedly dividing the search range in half.',
      link: '/patterns#binary-search',
      space: <span>O(1)</span>,
      time: <span>O(log n)</span>,
    },
    {
      title: 'Merge Sort',
      desc: 'Divide the array into halves, sort each half recursively, and then merge them.',
      link: '/patterns#merge-sort',
      space: <span>O(n)</span>,
      time: <span>O(n log n)</span>,
    },
    {
      title: 'Breadth First Search (BFS)',
      desc: 'Traverse a graph or tree level by level using a queue (First-In First-Out).',
      link: '/advance#bfs-graph',
      space: <span>O(V)</span>,
      time: <span>O(V + E)</span>,
    },
    {
      title: 'Depth First Search (DFS)',
      desc: 'Traverse a graph or tree as deep as possible before backtracking using recursion or a stack.',
      link: '/advance#dfs-recursive-graph',
      space: <span>O(V)</span>,
      time: <span>O(V + E)</span>,
    },
    {
      title: 'Dijkstra’s Algorithm',
      desc: 'Finds the shortest path from a source node to all other nodes in a weighted graph (no negative edges).',
      link: '/advance#dijkstra',
      space: <span>O(V + E)</span>,
      time: <span>O((V + E) log V)</span>,
    },
    {
      title: 'Union-Find (Disjoint Set Union)',
      desc: 'Tracks and merges disjoint sets efficiently, used in cycle detection and Kruskal’s MST.',
      link: '/advance#union-find-optimized',
      space: <span>O(n)</span>,
      time: <span>O(α(n)) ≈ O(1)</span>,
    },
    {
      title: 'Kadane’s Algorithm',
      desc: 'Finds the maximum sum of a contiguous subarray using dynamic programming.',
      link: '/patterns/#kadane',
      space: <span>O(1)</span>,
      time: <span>O(n)</span>,
    },
    // {
    //   title: '0/1 Knapsack (Dynamic Programming)',
    //   desc: 'Given weights and values, find the max value achievable within a weight limit.',
    //   link: '',
    //   space: <span>O(W)</span>,
    //   time: <span>O(n × W)</span>,
    // },
    {
      title: 'Sliding Window Technique',
      desc: 'Use a moving window over an array or string to find optimal subranges like longest substring or max sum.',
      link: '/core#sliding-window',
      space: <span>O(1)</span>,
      time: <span>O(n)</span>,
    },
    {
      title: 'Two Pointer Technique',
      desc: 'Use two pointers to process an array or string from both ends for problems like pairs or substrings.',
      link: '/core#two-pointers-two-inputs',
      space: <span>O(1)</span>,
      time: <span>O(n)</span>,
    },
    {
      title: 'Quick Sort',
      desc: 'Divide the array around a pivot, sorting elements smaller to the left and larger to the right recursively.',
      link: '/patterns#quick-sort',
      space: <span>O(log n)</span>,
      time: <span>O(n log n)</span>,
    },
    {
      title: 'Topological Sort',
      desc: 'Orders the vertices of a directed acyclic graph such that for every directed edge u → v, u appears before v.',
      link: '/advance#topological-sort',
      space: <span>O(V)</span>,
      time: <span>O(V + E)</span>,
    },
    {
      title: 'Floyd’s Cycle Detection',
      desc: 'Detects a cycle in a linked list using two pointers moving at different speeds.',
      link: '/core#fast-and-slow-pointer',
      space: <span>O(1)</span>,
      time: <span>O(n)</span>,
    },
    {
      title: 'Kruskal’s Algorithm',
      desc: 'Finds a Minimum Spanning Tree by sorting edges and connecting vertices using Union-Find.',
      link: '/advance#kruskal',
      space: <span>O(V + E)</span>,
      time: <span>O(E log E)</span>,
    },
    {
      title: 'Prim’s Algorithm',
      desc: 'Builds a Minimum Spanning Tree by expanding the smallest weighted edges from a starting vertex.',
      link: '/advance#prim',
      space: <span>O(V + E)</span>,
      time: <span>O((V + E) log V)</span>,
    },
  ]

  return (
    <section className={styles.cardlayoutwrapper}>
      <h1 className={styles.title}>Common Algorithms</h1>
      <div className={styles.cardgrid}>
        {algorithms.map((algorithm) => (
          <Card
            title={algorithm.title}
            desc={algorithm.desc}
            link={algorithm.link}
            space={algorithm.space}
            time={algorithm.time}
            key={algorithm.title + algorithm.time}
          />
        ))}
      </div>
    </section>
  )
}
export default CardLayout
