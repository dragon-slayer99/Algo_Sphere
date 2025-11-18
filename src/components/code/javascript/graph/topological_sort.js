function topologicalSort(digraph) {
    // digraph is an object where:
    //   key: a node
    // value: an array of adjacent neighboring nodes

    const allNodes = Object.keys(digraph);

    // construct an object mapping nodes to their indegrees
    const indegrees = {};
    allNodes.forEach(node => {
        indegrees[node] = 0;
    });

    allNodes.forEach(node => {
        digraph[node].forEach(neighbor => {
            indegrees[neighbor] += 1;
        });
    });

    // track nodes with no incoming edges
    const nodesWithNoIncomingEdges = [];
    allNodes.forEach(node => {
        if (indegrees[node] === 0) {
            nodesWithNoIncomingEdges.push(node);
        }
    });

    // initially, no nodes in our ordering
    const topologicalOrdering = [];

    // as long as there are nodes with no incoming edges
    // that can be added to the ordering 
    while (nodesWithNoIncomingEdges.length > 0) {

        // add one of those nodes to the ordering
        const node = nodesWithNoIncomingEdges.pop();
        topologicalOrdering.push(node);

        // decrement the indegree of that node's neighbors
        digraph[node].forEach(neighbor => {
            indegrees[neighbor] -= 1;
            if (indegrees[neighbor] === 0) {
                nodesWithNoIncomingEdges.push(neighbor);
            }
        });
    }

    // we've run out of nodes with no incoming edges
    // did we add all the nodes or find a cycle?
    if (topologicalOrdering.length != allNodes.length) {
        throw new Error('Graph has a cycle! No topological ordering exists.');
    }

    return topologicalOrdering;
}