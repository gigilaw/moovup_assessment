//Construct adjacency list for undirected graph
const buildGraph = (edges) => {
	const graph = {}

	for (let edge of edges) {
		const [nodeA, nodeB] = edge
		if (!(nodeA in graph)) graph[nodeA] = []
		if (!(nodeB in graph)) graph[nodeB] = []
		graph[nodeA].push(nodeB)
		graph[nodeB].push(nodeA)
	}
	return graph
}

const edges = [
	['A', 'B'],
	['A', 'D'],
	['A', 'H'],
	['B', 'C'],
	['B', 'D'],
	['C', 'D'],
	['C', 'F'],
	['D', 'E'],
	['E', 'F'],
	['E', 'H'],
	['F', 'G'],
	['G', 'H'],
]

const graph = buildGraph(edges)

//Write a function that returns all the possible paths between A­-H.
//Depth First Search - recursively go through nodes until it reaches target node and mark the path
const findAllPaths = (
	startNode,
	targetNode,
	visited = new Set(),
	path = [],
) => {
	//Base case for return, when we've hit target node
	if (startNode === targetNode) {
		return [path.concat(targetNode)]
	}

	visited.add(startNode)
	let allPaths = []

	//Loop through neighbors of starting node
	for (const neighbor of graph[startNode]) {
		//If we have not visited the neighbor, call findAllPaths again with neighbor as start node and continue on path to target node
		if (!visited.has(neighbor)) {
			const neighborPaths = findAllPaths(
				neighbor,
				targetNode,
				visited,
				path.concat(startNode),
			)
			//Add found path to allPaths
			allPaths = allPaths.concat(neighborPaths)
		}
	}
	//Remove start node from set after all neighbors are looped to explore other possible paths
	visited.delete(startNode)
	return allPaths
}

//Write a function that returns the least number of hops (shortest path) between A­-H.
//Breadth First Search - go through nodes by direct connection (neighbors) in layers to find shortest path
const findShortestPath = (startNode, targetNode) => {
	//Nodes we've visited
	const visited = new Set([startNode])
	//Nodes we will visit with amount of hops from starting node (position of 0)
	const queue = [[startNode, 0]]

	while (queue.length > 0) {
		//Start from the front for breadth first search
		const [currNode, hops] = queue.shift()
		//If current node is the target node, return hops from starting node
		if (currNode === targetNode) {
			return hops
		}

		//Loop through neighbors of current node
		for (let neighbor of graph[currNode]) {
			//If neighbor has not been visited, add neighbor to visited and queue for next checking
			if (!visited.has(neighbor)) {
				visited.add(neighbor)
				queue.push([neighbor, hops + 1])
			}
		}
	}
}

console.log(findAllPaths('A', 'H'))
console.log(findShortestPath('A', 'H'))
