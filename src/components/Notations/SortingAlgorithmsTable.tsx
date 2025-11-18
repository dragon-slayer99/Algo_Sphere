import { Link } from 'lucide-react';
import styles from './tableCSS.module.css';

export default function SortingAlgorithmsTable() {

    return (
        <section id="bigo-sorting-algorithms-table">
            <div className={styles.container}>
                <h3 className={styles.title}>Sorting Algorithms</h3>
                <div className={styles.tableWrapper}>
                    <table >
                        <tbody>
                            <tr data-row-number="1">
                                <th>Algorithm</th>
                                <th colSpan={3}>Time Complexity</th>
                                <th>Space Complexity</th>
                            </tr>
                            <tr data-row-number="2">
                                <th></th>
                                <th>Best</th>
                                <th>Average</th>
                                <th>Worst</th>
                                <th>Worst</th>
                            </tr>
                            <tr data-row-number="3">
                                <td><a href="http://en.wikipedia.org/wiki/Quicksort" target="_blank"><Link/>Quicksort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                            </tr>
                            <tr data-row-number="4">
                                <td><a href="http://en.wikipedia.org/wiki/Merge_sort" target="_blank"><Link/>Mergesort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.orange}>O(n log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr data-row-number="5">
                                <td><a href="http://en.wikipedia.org/wiki/Timsort" target="_blank"><Link/>Timsort</a></td>
                                <td className={styles.yellow}>Ω(n)</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.orange}>O(n log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr data-row-number="6">
                                <td><a href="http://en.wikipedia.org/wiki/Heapsort" target="_blank"><Link/>Heapsort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.orange}>O(n log(n))</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr data-row-number="7">
                                <td><a href="http://en.wikipedia.org/wiki/Bubble_sort" target="_blank"><Link/>Bubble Sort</a></td>
                                <td className={styles.yellow}>Ω(n)</td>
                                <td className={styles.red}>Θ(n^2)</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr data-row-number="8">
                                <td><a href="http://en.wikipedia.org/wiki/Insertion_sort" target="_blank"><Link/>Insertion Sort</a></td>
                                <td className={styles.yellow}>Ω(n)</td>
                                <td className={styles.red}>Θ(n^2)</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr data-row-number="9">
                                <td><a href="http://en.wikipedia.org/wiki/Selection_sort" target="_blank"><Link/>Selection Sort</a></td>
                                <td className={styles.red}>Ω(n^2)</td>
                                <td className={styles.red}>Θ(n^2)</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr data-row-number="10">
                                <td><a href="https://en.wikipedia.org/wiki/Tree_sort" target="_blank"><Link/>Tree Sort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr data-row-number="11">
                                <td><a href="http://en.wikipedia.org/wiki/Shellsort" target="_blank"><Link/>Shell Sort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.red}>Θ(n(log(n))^2)</td>
                                <td className={styles.red}>O(n(log(n))^2)</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr data-row-number="12">
                                <td><a href="http://en.wikipedia.org/wiki/Bucket_sort" target="_blank"><Link/>Bucket Sort</a></td>
                                <td className={styles.green}>Ω(n+k)</td>
                                <td className={styles.green}>Θ(n+k)</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr data-row-number="13">
                                <td><a href="http://en.wikipedia.org/wiki/Radix_sort" target="_blank"><Link/>Radix Sort</a></td>
                                <td className={styles.green}>Ω(nk)</td>
                                <td className={styles.green}>Θ(nk)</td>
                                <td className={styles.green}>O(nk)</td>
                                <td className={styles.yellow}>O(n+k)</td>
                            </tr>
                            <tr data-row-number="14">
                                <td><a href="https://en.wikipedia.org/wiki/Counting_sort"><Link/>Counting Sort</a></td>
                                <td className={styles.green}>Ω(n+k)</td>
                                <td className={styles.green}>Θ(n+k)</td>
                                <td className={styles.green}>O(n+k)</td>
                                <td className={styles.yellow}>O(k)</td>
                            </tr>
                            <tr data-row-number="15">
                                <td><a href="https://en.wikipedia.org/wiki/Cubesort" target="_blank"><Link/>Cubesort</a></td>
                                <td className={styles.yellow}>Ω(n)</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.orange}>O(n log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
